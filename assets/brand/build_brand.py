#!/usr/bin/env python3
"""TRADEMIND identity builder.

Mark: TM ligature as a modernist portico — lintel of T, three columns of M.
Construction is post-and-lintel only (plus 45-degree braces on R and N).
Monochrome. No gradients. Integer grid.

Run from repo root or this folder:
    python assets/brand/build_brand.py
"""

from __future__ import annotations

import io
import struct
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[2]
BRAND = Path(__file__).resolve().parent
VOID = (6, 8, 13, 255)  # #06080D — terminal void
BONE = (237, 237, 237, 255)  # #EDEDED
INK = (11, 13, 18, 255)  # #0B0D12
PAPER = (243, 241, 235, 255)  # #F3F1EB
VOID_HEX = "#06080D"
BONE_HEX = "#EDEDED"
INK_HEX = "#0B0D12"
PAPER_HEX = "#F3F1EB"

# Canonical tight mark: 20x20
# lintel 20x5, columns 4x15, gaps 4
MARK_PATH = "M0 0H20V20H16V5H12V20H8V5H4V20H0Z"
MARK_W, MARK_H = 20, 20

STEM = 4
BAR = 4
CAP = 24
TRACK = 5


def svg_header(w: float, h: float, extra: str = "") -> str:
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
        f'fill="none" role="img" {extra}>\n'
    )


def mark_group(fill: str, transform: str | None = None) -> str:
    t = f' transform="{transform}"' if transform else ""
    return (
        f'  <g id="mark"{t} fill="{fill}">\n'
        f'    <path d="{MARK_PATH}"/>\n'
        f"  </g>\n"
    )


def letter_prims(ch: str) -> tuple[int, list[tuple]]:
    """Return (advance, primitives). Primitive is ('rect',x,y,w,h) or ('poly', pts)."""
    S, B, C = STEM, BAR, CAP
    if ch == "T":
        w = 16
        return w, [("rect", 0, 0, w, B), ("rect", (w - S) // 2, 0, S, C)]
    if ch == "R":
        w = 13
        return w, [
            ("rect", 0, 0, S, C),
            ("rect", 0, 0, w, B),
            ("rect", w - S, 0, S, 12),
            ("rect", 0, 10, w, B),
            ("poly", [(6, 14), (10, 14), (w, C), (w - 4, C)]),
        ]
    if ch == "A":
        w = 15
        return w, [
            ("rect", 0, 0, S, C),
            ("rect", w - S, 0, S, C),
            ("rect", 0, 0, w, B),
            ("rect", S, 11, w - 2 * S, B),
        ]
    if ch == "D":
        # Chamfered D — reads as D, not O. 45° cuts on the right.
        w = 14
        return w, [
            ("rect", 0, 0, S, C),
            ("rect", 0, 0, 10, B),
            ("rect", 0, C - B, 10, B),
            ("rect", 10, 4, 4, 16),
            ("poly", [(10, 0), (14, 4), (10, 4)]),
            ("poly", [(10, 20), (14, 20), (10, 24)]),
        ]
    if ch == "E":
        w = 11
        return w, [
            ("rect", 0, 0, S, C),
            ("rect", 0, 0, w, B),
            ("rect", 0, 10, w - 2, B),
            ("rect", 0, C - B, w, B),
        ]
    if ch == "M":
        w = 20
        return w, [
            ("rect", 0, 0, w, B),
            ("rect", 0, 0, S, C),
            ("rect", 8, 0, S, C),
            ("rect", 16, 0, S, C),
        ]
    if ch == "I":
        w = 6
        return w, [
            ("rect", 0, 0, w, B),
            ("rect", 1, 0, S, C),
            ("rect", 0, C - B, w, B),
        ]
    if ch == "N":
        w = 15
        return w, [
            ("rect", 0, 0, S, C),
            ("rect", w - S, 0, S, C),
            ("poly", [(0, 0), (S, 0), (w, C), (w - S, C)]),
        ]
    raise ValueError(ch)


def svg_prim(prim: tuple) -> str:
    if prim[0] == "rect":
        _, x, y, w, h = prim
        return f'<rect x="{x}" y="{y}" width="{w}" height="{h}"/>'
    _, pts = prim
    joined = " ".join(f"{x},{y}" for x, y in pts)
    return f'<polygon points="{joined}"/>'


def letter_track(i: int, ch: str) -> int:
    if i >= 8:
        return 0
    # Optical: T is open on the right; I is narrow.
    if ch == "T":
        return TRACK - 1
    if ch == "I":
        return TRACK + 1
    return TRACK


def wordmark_svg(fill: str, origin_x: int = 0, origin_y: int = 0) -> tuple[int, str]:
    x = origin_x
    parts = [f'  <g id="wordmark" fill="{fill}">']
    for i, ch in enumerate("TRADEMIND"):
        w, prims = letter_prims(ch)
        parts.append(f'    <g id="L-{ch}{i}" transform="translate({x} {origin_y})">')
        for prim in prims:
            parts.append(f"      {svg_prim(prim)}")
        parts.append("    </g>")
        x += w + letter_track(i, ch)
    parts.append("  </g>")
    return x - origin_x, "\n".join(parts) + "\n"


def save_ico(path: Path, images: list[Image.Image]) -> None:
    """Write a multi-size ICO with PNG-encoded frames (preserves pixel hinting)."""
    n = len(images)
    frames: list[bytes] = []
    for im in images:
        buf = io.BytesIO()
        im.convert("RGBA").save(buf, format="PNG")
        frames.append(buf.getvalue())
    offset = 6 + 16 * n
    entries = bytearray()
    blob = bytearray()
    for im, png in zip(images, frames):
        w, h = im.size
        entries += struct.pack(
            "<BBBBHHII",
            0 if w >= 256 else w,
            0 if h >= 256 else h,
            0,
            0,
            1,
            32,
            len(png),
            offset,
        )
        blob += png
        offset += len(png)
    path.write_bytes(struct.pack("<HHH", 0, 1, n) + bytes(entries) + bytes(blob))


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")
    print(f"wrote {path.relative_to(ROOT)}")


def build_mark_svg() -> None:
    body = svg_header(20, 20, 'aria-label="TRADEMIND mark"')
    body += (
        "  <!-- TM portico: lintel = T of TRADE, three columns = M of MIND. -->\n"
        '  <path fill="currentColor" d="' + MARK_PATH + '"/>\n'
        "</svg>\n"
    )
    write(BRAND / "mark.svg", body)


def indent(block: str, n: int) -> str:
    pad = " " * n
    return "\n".join((pad + line if line else line) for line in block.splitlines()) + "\n"


def lockup_inner(fill: str) -> tuple[int, str]:
    mark_display = 24
    gap = 12
    wm_w, wm = wordmark_svg(fill, 0, 0)
    total_w = mark_display + gap + wm_w
    inner = mark_group(fill, f"scale({mark_display / MARK_W})")
    inner += f'  <g transform="translate({mark_display + gap} 0)">\n'
    inner += indent(wm, 2)
    inner += "  </g>\n"
    return total_w, inner


def build_lockup_svg() -> None:
    total_w, inner = lockup_inner("currentColor")
    body = svg_header(total_w, CAP, 'aria-label="TRADEMIND"')
    body += inner
    body += "</svg>\n"
    write(BRAND / "lockup.svg", body)

    pad = 24
    vb_w = total_w + pad * 2
    vb_h = CAP + pad * 2
    _, inner_dark = lockup_inner(BONE_HEX)
    dark = svg_header(vb_w, vb_h, 'aria-label="TRADEMIND"')
    dark += f'  <rect width="{vb_w}" height="{vb_h}" fill="{VOID_HEX}"/>\n'
    dark += f'  <g transform="translate({pad} {pad})">\n'
    dark += indent(inner_dark, 2)
    dark += "  </g>\n</svg>\n"
    write(BRAND / "lockup-dark.svg", dark)

    light = dark.replace(VOID_HEX, PAPER_HEX).replace(BONE_HEX, INK_HEX)
    write(BRAND / "lockup-light.svg", light)
    write(ROOT / "logo.svg", (BRAND / "lockup.svg").read_text(encoding="utf-8"))

    # Stacked lockup (mark over wordmark) for avatars / square applications
    mark_d = 32
    wm_w, wm = wordmark_svg("currentColor")
    stacked_w = max(mark_d, wm_w)
    gap_s = 10
    stacked_h = mark_d + gap_s + CAP
    stacked = svg_header(stacked_w, stacked_h, 'aria-label="TRADEMIND"')
    stacked += f'  <g transform="translate({(stacked_w - mark_d) / 2} 0)">\n'
    stacked += indent(mark_group("currentColor", f"scale({mark_d / MARK_W})"), 2)
    stacked += "  </g>\n"
    stacked += f'  <g transform="translate({(stacked_w - wm_w) / 2} {mark_d + gap_s})">\n'
    stacked += indent(wm, 2)
    stacked += "  </g>\n</svg>\n"
    write(BRAND / "lockup-stacked.svg", stacked)


def build_favicon_svg() -> None:
    body = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="TRADEMIND">
  <style>
    .bg { fill: #06080D; }
    .fg { fill: #EDEDED; }
    @media (prefers-color-scheme: light) {
      .bg { fill: #F3F1EB; }
      .fg { fill: #0B0D12; }
    }
  </style>
  <rect class="bg" width="32" height="32"/>
  <g class="fg" transform="translate(6 6)">
    <path d="M0 0H20V20H16V5H12V20H8V5H4V20H0Z"/>
  </g>
</svg>
"""
    write(ROOT / "favicon.svg", body)


def draw_mark_px(draw: ImageDraw.ImageDraw, x: int, y: int, col: int, gap: int, lintel: int, col_h: int, fill) -> None:
    span = 3 * col + 2 * gap
    draw.rectangle([x, y, x + span - 1, y + lintel - 1], fill=fill)
    for i in range(3):
        cx = x + i * (col + gap)
        draw.rectangle([cx, y + lintel, cx + col - 1, y + lintel + col_h - 1], fill=fill)


def render_icon(size: int, fg, bg) -> Image.Image:
    """Pixel-hinted favicon. Integer columns so 16px stays a true T/M."""
    img = Image.new("RGBA", (size, size), bg)
    d = ImageDraw.Draw(img)
    if size == 16:
        pad, lintel, col, gap = 3, 3, 2, 2
        col_h = size - pad * 2 - lintel
    elif size == 32:
        pad, lintel, col, gap = 6, 5, 4, 4
        col_h = size - pad * 2 - lintel
    elif size == 48:
        pad, lintel, col, gap = 9, 8, 6, 6
        col_h = size - pad * 2 - lintel
    else:
        pad = round(size * 6 / 32)
        inner = size - pad * 2
        col = round(inner * 4 / 20)
        gap = round(inner * 4 / 20)
        lintel = round(inner * 5 / 20)
        # re-center after rounding
        span = 3 * col + 2 * gap
        col_h = inner - lintel
        x = (size - span) // 2
        y = (size - (lintel + col_h)) // 2
        draw_mark_px(d, x, y, col, gap, lintel, col_h, fg)
        return img
    draw_mark_px(d, pad, pad, col, gap, lintel, col_h, fg)
    return img


def draw_wordmark(draw: ImageDraw.ImageDraw, ox: int, oy: int, scale: int, fill) -> int:
    x = 0
    for i, ch in enumerate("TRADEMIND"):
        w, prims = letter_prims(ch)
        for prim in prims:
            if prim[0] == "rect":
                _, px, py, pw, ph = prim
                draw.rectangle(
                    [
                        ox + (x + px) * scale,
                        oy + py * scale,
                        ox + (x + px + pw) * scale - 1,
                        oy + (py + ph) * scale - 1,
                    ],
                    fill=fill,
                )
            else:
                pts = [(ox + (x + vx) * scale, oy + vy * scale) for vx, vy in prim[1]]
                draw.polygon(pts, fill=fill)
        x += w + letter_track(i, ch)
    return x


def render_lockup(bg, fg, scale: int = 4) -> Image.Image:
    mark = 24
    gap = 12
    wm_w = wordmark_width()
    pad = 24
    W = (mark + gap + wm_w + pad * 2) * scale
    H = (CAP + pad * 2) * scale
    img = Image.new("RGBA", (W, H), bg)
    d = ImageDraw.Draw(img)
    mx = pad * scale
    my = pad * scale
    # mark at 24px logical (scale 1.2 from 20)
    mscale = (mark * scale) / MARK_W
    # draw mark via rectangles at pixel scale
    inner = render_icon(mark * scale, fg, (0, 0, 0, 0))
    # render_icon includes padding — don't use it. Draw tight mark:
    col = round(4 * mscale)
    gap_m = round(4 * mscale)
    lintel = round(5 * mscale)
    col_h = round(15 * mscale)
    draw_mark_px(d, mx, my, col, gap_m, lintel, col_h, fg)
    draw_wordmark(d, mx + mark * scale + gap * scale, my, scale, fg)
    return img


def wordmark_width() -> int:
    total = 0
    for i, ch in enumerate("TRADEMIND"):
        w, _ = letter_prims(ch)
        total += w + letter_track(i, ch)
    return total


def render_stacked(size: int, bg, fg) -> Image.Image:
    img = Image.new("RGBA", (size, size), bg)
    d = ImageDraw.Draw(img)
    mark_px = 180
    scale = 5
    wm_w = wordmark_width()
    gap = 64
    block_h = mark_px + gap + CAP * scale
    y0 = (size - block_h) // 2
    mscale = mark_px / MARK_W
    col = round(4 * mscale)
    gap_m = round(4 * mscale)
    lintel = round(5 * mscale)
    col_h = round(15 * mscale)
    draw_mark_px(d, (size - (3 * col + 2 * gap_m)) // 2, y0, col, gap_m, lintel, col_h, fg)
    draw_wordmark(d, (size - wm_w * scale) // 2, y0 + mark_px + gap, scale, fg)
    return img


def render_og(w: int, h: int, bg, fg) -> Image.Image:
    img = Image.new("RGBA", (w, h), bg)
    d = ImageDraw.Draw(img)
    scale = 5
    mark = CAP * scale
    gap = 40
    wm_w = wordmark_width()
    block_w = mark + gap + wm_w * scale
    block_h = CAP * scale
    x0 = (w - block_w) // 2
    y0 = (h - block_h) // 2
    mscale = mark / MARK_W
    col = round(4 * mscale)
    gap_m = round(4 * mscale)
    lintel = round(5 * mscale)
    col_h = round(15 * mscale)
    draw_mark_px(d, x0, y0, col, gap_m, lintel, col_h, fg)
    draw_wordmark(d, x0 + mark + gap, y0, scale, fg)
    return img


def build_rasters() -> None:
    dark16 = render_icon(16, BONE, VOID)
    dark32 = render_icon(32, BONE, VOID)
    dark48 = render_icon(48, BONE, VOID)
    dark180 = render_icon(180, BONE, VOID)
    light32 = render_icon(32, INK, PAPER)

    dark32.save(ROOT / "favicon-32x32.png")
    print("wrote favicon-32x32.png")
    dark180.save(ROOT / "apple-touch-icon.png")
    print("wrote apple-touch-icon.png")
    light32.save(BRAND / "favicon-32-light.png")
    print("wrote assets/brand/favicon-32-light.png")

    dark16.save(BRAND / "favicon-16.png")
    dark48.save(BRAND / "favicon-48.png")

    save_ico(ROOT / "favicon.ico", [dark16, dark32, dark48])
    print("wrote favicon.ico")

    sheet = Image.new("RGBA", (560, 220), VOID)
    d = ImageDraw.Draw(sheet)
    d.rectangle([280, 0, 559, 219], fill=PAPER)
    x_d, x_l = 16, 296
    for size in (16, 32, 48, 64):
        icon = render_icon(size, BONE, VOID)
        sheet.paste(icon, (x_d, 24), icon)
        icon_l = render_icon(size, INK, PAPER)
        sheet.paste(icon_l, (x_l, 24), icon_l)
        x_d += size + 12
        x_l += size + 12
    sheet.save(BRAND / "sheet.png")
    print("wrote assets/brand/sheet.png")

    render_lockup(VOID, BONE, 5).save(BRAND / "lockup-dark.png")
    print("wrote assets/brand/lockup-dark.png")
    render_lockup(PAPER, INK, 5).save(BRAND / "lockup-light.png")
    print("wrote assets/brand/lockup-light.png")

    stacked = render_stacked(1080, VOID, BONE)
    stacked.convert("RGB").save(ROOT / "brand-logo.jpg", quality=95, subsampling=0)
    print("wrote brand-logo.jpg")
    og = render_og(1200, 630, VOID, BONE)
    og.convert("RGB").save(ROOT / "og-image.jpg", quality=95, subsampling=0)
    print("wrote og-image.jpg")


PREVIEW_HTML = """<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>TRADEMIND — Brand Sheet</title>
  <link rel="icon" href="../../favicon.svg" type="image/svg+xml"/>
  <style>
    :root { --void:#07090E; --bone:#EDEDED; --paper:#F3F1EB; --ink:#0B0D12; --hair:rgba(255,255,255,.1); }
    * { box-sizing: border-box; }
    body { margin:0; font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif; background:var(--void); color:var(--bone); }
    h1 { font-size: 13px; letter-spacing:.18em; text-transform:uppercase; font-weight:700; margin:0 0 8px; }
    h2 { font-size:11px; letter-spacing:.22em; text-transform:uppercase; color:#8B949E; font-weight:600; margin:0 0 16px; }
    .wrap { max-width:1100px; margin:0 auto; padding:40px 28px 80px; }
    .grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--hair); border:1px solid var(--hair); }
    .cell { background:var(--void); padding:28px; }
    .cell.paper { background:var(--paper); color:var(--ink); }
    .row { display:flex; align-items:flex-end; gap:20px; flex-wrap:wrap; }
    .sz { display:flex; flex-direction:column; align-items:center; gap:8px; }
    .sz span { font-family: ui-monospace, monospace; font-size:10px; color:#8B949E; }
    .lockup { width: min(100%, 520px); height:auto; display:block; }
    .mark { display:block; }
    .header-mock { display:flex; align-items:center; gap:14px; padding:14px 0; border-bottom:1px solid var(--hair); }
    .seal { width:36px; height:36px; border:1px solid rgba(255,255,255,.15); background:#07090E; display:grid; place-items:center; }
    .seal svg { width:22px; height:22px; color:#EDEDED; }
    .name { font-size:16px; font-weight:800; letter-spacing:.04em; text-transform:uppercase; }
    .sub { font-size:11px; color:#8B949E; margin-top:2px; }
    .tiny { image-rendering: pixelated; }
  </style>
</head>
<body>
  <div class="wrap">
    <h1>TRADEMIND</h1>
    <h2>Identity · TM Portico · Monochrome · Geometric</h2>

    <div class="header-mock">
      <div class="seal">
        <svg viewBox="0 0 20 20" fill="currentColor"><path d="M0 0H20V20H16V5H12V20H8V5H4V20H0Z"/></svg>
      </div>
      <div>
        <div class="name">TRADEMIND</div>
        <div class="sub">Institutional Market Microstructure Terminal</div>
      </div>
    </div>

    <div class="grid" style="margin-top:28px">
      <div class="cell">
        <h2>Lockup on void</h2>
        <img class="lockup" src="lockup-dark.svg" alt="TRADEMIND lockup dark"/>
      </div>
      <div class="cell paper">
        <h2 style="color:#6B655C">Lockup on paper</h2>
        <img class="lockup" src="lockup-light.svg" alt="TRADEMIND lockup light"/>
      </div>
      <div class="cell">
        <h2>Mark sizes · dark</h2>
        <div class="row">
          <div class="sz"><img src="../../favicon.svg" width="16" height="16" class="tiny" alt="16"/><span>16</span></div>
          <div class="sz"><img src="../../favicon.svg" width="24" height="24" alt="24"/><span>24</span></div>
          <div class="sz"><img src="../../favicon.svg" width="32" height="32" alt="32"/><span>32</span></div>
          <div class="sz"><img src="../../favicon.svg" width="48" height="48" alt="48"/><span>48</span></div>
          <div class="sz"><img src="../../favicon.svg" width="64" height="64" alt="64"/><span>64</span></div>
          <div class="sz"><img src="../../favicon.svg" width="96" height="96" alt="96"/><span>96</span></div>
        </div>
      </div>
      <div class="cell paper">
        <h2 style="color:#6B655C">Mark sizes · light</h2>
        <div class="row">
          <div class="sz"><img src="mark.svg" width="16" height="16" style="color:#0B0D12; background:#F3F1EB" alt="16"/><span>16</span></div>
          <div class="sz"><img src="mark.svg" width="24" height="24" alt="24"/><span>24</span></div>
          <div class="sz"><img src="mark.svg" width="32" height="32" alt="32"/><span>32</span></div>
          <div class="sz"><img src="mark.svg" width="48" height="48" alt="48"/><span>48</span></div>
          <div class="sz"><img src="mark.svg" width="64" height="64" alt="64"/><span>64</span></div>
          <div class="sz"><img src="mark.svg" width="96" height="96" alt="96"/><span>96</span></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
"""


def build_preview() -> None:
    write(BRAND / "preview.html", PREVIEW_HTML)


def main() -> None:
    build_mark_svg()
    build_lockup_svg()
    build_favicon_svg()
    build_rasters()
    build_preview()


if __name__ == "__main__":
    main()
