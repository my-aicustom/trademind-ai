/**
 * TRADEMIND — Institutional Trading Terminal & Market Microstructure
 * Lightweight Charts (TradingView) Engine + Fixed 1-2% Risk Execution
 */

// =============================================================================
// 1. DATASETS & INSTRUMENT DEFINITIONS
// =============================================================================
const INSTRUMENTS = {
  "BBRI": {
    name: "Bank Rakyat Indonesia (Persero) Tbk",
    type: "saham",
    price: 3840,
    change: "+35.00 (+0.92%)",
    changeClass: "text-tradeGreen",
    entry: 3840,
    sl: 3710,
    tp1: 3980,
    tp2: 4150,
    vwap: 3820,
    bcr: "54.2% (Akumulasi Masif)",
    foreign: "+Rp 62.1 M",
    signalBadge: "▲ AI BUY SIGNAL ACTIVE",
    signalClass: "border-tradeGreen/40 text-tradeGreen bg-tradeGreen/10",
    baseCandles: generateCandles(3800, 3850, 40, 5),
    buyers: [
      { code: "AK", name: "UBS Sekuritas", vol: "142.5K Lot", val: "Rp 54.4 M", vwap: "3.818", pct: 70 },
      { code: "BK", name: "J.P. Morgan", vol: "78.2K Lot", val: "Rp 29.8 M", vwap: "3.822", pct: 40 },
      { code: "CC", name: "Mandiri Sekuritas", vol: "45.1K Lot", val: "Rp 17.2 M", vwap: "3.825", pct: 24 }
    ],
    sellers: [
      { code: "YP", name: "Mirae Asset (Retail)", vol: "110.4K Lot", val: "Rp 42.1 M", vwap: "3.835", pct: 55 },
      { code: "PD", name: "Indo Premier (Retail)", vol: "85.2K Lot", val: "Rp 32.5 M", vwap: "3.830", pct: 42 },
      { code: "XL", name: "Stockbit (Retail)", vol: "62.0K Lot", val: "Rp 23.6 M", vwap: "3.838", pct: 30 }
    ]
  },
  "BBCA": {
    name: "Bank Central Asia Tbk",
    type: "saham",
    price: 9950,
    change: "+75.00 (+0.76%)",
    changeClass: "text-tradeGreen",
    entry: 9950,
    sl: 9650,
    tp1: 10400,
    tp2: 10950,
    vwap: 9900,
    bcr: "48.7% (Konsisten)",
    foreign: "+Rp 118.4 M",
    signalBadge: "▲ BUY ON WEAKNESS",
    signalClass: "border-tradeGreen/40 text-tradeGreen bg-tradeGreen/10",
    baseCandles: generateCandles(9800, 10000, 40, 25),
    buyers: [
      { code: "ZP", name: "Maybank Sekuritas", vol: "65.2K Lot", val: "Rp 64.5 M", vwap: "9.890", pct: 60 },
      { code: "RX", name: "Macquarie", vol: "54.1K Lot", val: "Rp 53.6 M", vwap: "9.910", pct: 50 },
      { code: "CS", name: "Credit Suisse", vol: "32.0K Lot", val: "Rp 31.7 M", vwap: "9.920", pct: 30 }
    ],
    sellers: [
      { code: "XC", name: "Ajaib (Retail)", vol: "74.0K Lot", val: "Rp 73.2 M", vwap: "9.940", pct: 68 },
      { code: "YP", name: "Mirae Asset", vol: "42.5K Lot", val: "Rp 42.0 M", vwap: "9.955", pct: 39 },
      { code: "NI", name: "BNI Sekuritas", vol: "28.0K Lot", val: "Rp 27.7 M", vwap: "9.960", pct: 25 }
    ]
  },
  "BREN": {
    name: "Barito Renewables Energy Tbk",
    type: "saham",
    price: 6850,
    change: "-225.00 (-3.18%)",
    changeClass: "text-tradeRed",
    entry: 6850,
    sl: 6700,
    tp1: 7200,
    tp2: 7500,
    vwap: 7150,
    bcr: "-42.1% (Distribusi Masif)",
    foreign: "-Rp 84.3 M",
    signalBadge: "▼ DISTRIBUSI - WAIT & SEE",
    signalClass: "border-tradeRed/40 text-tradeRed bg-tradeRed/10",
    baseCandles: generateCandles(7200, 6800, 40, 25),
    buyers: [
      { code: "YP", name: "Mirae Asset (Retail)", vol: "85.0K Lot", val: "Rp 58.2 M", vwap: "6.880", pct: 65 },
      { code: "XC", name: "Ajaib (Retail)", vol: "64.2K Lot", val: "Rp 43.9 M", vwap: "6.890", pct: 48 },
      { code: "PD", name: "Indo Premier", vol: "41.0K Lot", val: "Rp 28.0 M", vwap: "6.870", pct: 31 }
    ],
    sellers: [
      { code: "KZ", name: "CLSA Sekuritas", vol: "120.0K Lot", val: "Rp 82.2 M", vwap: "7.120", pct: 90 },
      { code: "AK", name: "UBS Sekuritas", vol: "95.0K Lot", val: "Rp 65.1 M", vwap: "7.140", pct: 72 },
      { code: "CC", name: "Mandiri Sekuritas", vol: "58.0K Lot", val: "Rp 39.7 M", vwap: "7.100", pct: 44 }
    ]
  },
  "ANTM": {
    name: "Aneka Tambang Tbk",
    type: "saham",
    price: 1565,
    change: "+25.00 (+1.62%)",
    changeClass: "text-tradeGreen",
    entry: 1565,
    sl: 1510,
    tp1: 1650,
    tp2: 1720,
    vwap: 1550,
    bcr: "41.2% (Akumulasi)",
    foreign: "+Rp 18.2 M",
    signalBadge: "▲ BREAKOUT BUY",
    signalClass: "border-tradeGreen/40 text-tradeGreen bg-tradeGreen/10",
    baseCandles: generateCandles(1520, 1570, 40, 5),
    buyers: [
      { code: "CC", name: "Mandiri Sekuritas", vol: "92.0K Lot", val: "Rp 14.3 M", vwap: "1.555", pct: 65 },
      { code: "NI", name: "BNI Sekuritas", vol: "64.0K Lot", val: "Rp 9.9 M", vwap: "1.550", pct: 45 }
    ],
    sellers: [
      { code: "YP", name: "Mirae Asset", vol: "78.0K Lot", val: "Rp 12.1 M", vwap: "1.560", pct: 55 }
    ]
  },
  "XAUUSD": {
    name: "Spot Gold / US Dollar",
    type: "forex",
    price: 2648.50,
    change: "+28.40 (+1.08%)",
    changeClass: "text-tradeGold",
    entry: 2645.0,
    sl: 2634.0,
    tp1: 2668.0,
    tp2: 2695.0,
    vwap: 2641.2,
    bcr: "72% Institutional Long",
    foreign: "+$420M Notional Flow",
    signalBadge: "▲ SMC BULLISH EXPANSION",
    signalClass: "border-tradeGreen/40 text-tradeGreen bg-tradeGreen/10",
    baseCandles: generateCandles(2620, 2650, 40, 1.5),
    buyers: [
      { code: "JPM", name: "JPMorgan Chase", vol: "4.8K Lots", val: "$1.27 B", vwap: "2,642.10", pct: 80 },
      { code: "GS", name: "Goldman Sachs", vol: "3.2K Lots", val: "$847 M", vwap: "2,643.50", pct: 54 },
      { code: "MS", name: "Morgan Stanley", vol: "2.1K Lots", val: "$556 M", vwap: "2,640.80", pct: 35 }
    ],
    sellers: [
      { code: "RET", name: "Retail Crowd Short", vol: "6.4K Lots", val: "$1.69 B", vwap: "Trap Shorts", pct: 88 },
      { code: "HSB", name: "HSBC Liquidation", vol: "1.9K Lots", val: "$503 M", vwap: "2,649.20", pct: 32 }
    ]
  },
  "EURUSD": {
    name: "Euro / US Dollar",
    type: "forex",
    price: 1.0845,
    change: "-0.0014 (-0.13%)",
    changeClass: "text-tradeRed",
    entry: 1.0860,
    sl: 1.0890,
    tp1: 1.0800,
    tp2: 1.0740,
    vwap: 1.0872,
    bcr: "64% Institutional Short",
    foreign: "-$310M Net Delta",
    signalBadge: "▼ SMC BEARISH BREAKER",
    signalClass: "border-tradeRed/40 text-tradeRed bg-tradeRed/10",
    baseCandles: generateCandles(1.0870, 1.0840, 40, 0.0008),
    buyers: [
      { code: "RET", name: "Retail Long Chasers", vol: "5.2K Lots", val: "$564 M", vwap: "1.0858", pct: 70 }
    ],
    sellers: [
      { code: "CITI", name: "Citibank Institutional", vol: "4.5K Lots", val: "$488 M", vwap: "1.0868", pct: 65 },
      { code: "JPM", name: "JPMorgan FX Desk", vol: "3.1K Lots", val: "$336 M", vwap: "1.0864", pct: 45 }
    ]
  },
  "GBPJPY": {
    name: "British Pound / Japanese Yen",
    type: "forex",
    price: 192.80,
    change: "+0.85 (+0.44%)",
    changeClass: "text-tradeGreen",
    entry: 192.40,
    sl: 191.60,
    tp1: 194.00,
    tp2: 196.20,
    vwap: 192.10,
    bcr: "58% Net Long Flow",
    foreign: "+¥45B Net Flow",
    signalBadge: "▲ BULLISH TREND CONTINUATION",
    signalClass: "border-tradeGreen/40 text-tradeGreen bg-tradeGreen/10",
    baseCandles: generateCandles(191.0, 193.0, 40, 0.2),
    buyers: [
      { code: "BAR", name: "Barclays FX", vol: "3.4K Lots", val: "£650 M", vwap: "192.20", pct: 60 }
    ],
    sellers: [
      { code: "NOM", name: "Nomura Securities", vol: "2.1K Lots", val: "£400 M", vwap: "192.70", pct: 40 }
    ]
  }
};

// =============================================================================
// 2. STATE & USER ACCOUNT
// =============================================================================
let currentTicker = "BBRI";
let currentOrderSide = "BUY";
let userEquity = 25000000; // Rp 25.000.000
let riskPercentage = 0.02; // 2%

let openPositions = [
  {
    id: "POS-101",
    ticker: "BBRI",
    side: "BUY",
    lot: 50,
    entryPrice: 3820,
    currentPrice: 3840,
    sl: 3710,
    tp: 4150,
    unrealizedPnL: 100000,
    timestamp: "10:15 WIB"
  }
];

let closedJournal = [
  {
    id: 1,
    date: "10/09/2026",
    ticker: "BBRI",
    side: "BUY",
    entry: "Rp 3.750",
    exit: "Rp 3.920",
    lot: "50 Lot",
    pnl: "+Rp 850.000",
    pnlClass: "text-tradeGreen font-bold",
    rrr: "1 : 2.4",
    planFollowed: true,
    aiNote: "Eksekusi presisi sesuai akumulasi bandar. Exit di TP1 disiplin."
  },
  {
    id: 2,
    date: "09/09/2026",
    ticker: "XAU/USD",
    side: "BUY",
    entry: "$2,618.00",
    exit: "$2,642.00",
    lot: "0.20 Lot",
    pnl: "+$480 (~Rp 7.4M)",
    pnlClass: "text-tradeGreen font-bold",
    rrr: "1 : 3.1",
    planFollowed: true,
    aiNote: "Menangkap liquidity sweep sesi Asia. Menahan floating profit."
  },
  {
    id: 3,
    date: "08/09/2026",
    ticker: "ANTM",
    side: "BUY",
    entry: "Rp 1.540",
    exit: "Rp 1.570",
    lot: "100 Lot",
    pnl: "+Rp 300.000",
    pnlClass: "text-tradeGreen font-bold",
    rrr: "1 : 0.8",
    planFollowed: false,
    aiNote: "⚠️ EXIT PREMATUR: Jual terlalu cepat karena cemas padahal bandar masih akumulasi."
  },
  {
    id: 4,
    date: "05/09/2026",
    ticker: "BREN",
    side: "BUY",
    entry: "Rp 7.200",
    exit: "Rp 6.950",
    lot: "40 Lot",
    pnl: "-Rp 1.000.000",
    pnlClass: "text-tradeRed font-bold",
    rrr: "N/A",
    planFollowed: false,
    aiNote: "⚠️ PELANGGARAN KERAS: Masuk saham yang sedang distribusi bandar (FOMO tangkap pisau jatuh)."
  },
  {
    id: 5,
    date: "03/09/2026",
    ticker: "BBCA",
    side: "BUY",
    entry: "Rp 9.800",
    exit: "Rp 10.200",
    lot: "30 Lot",
    pnl: "+Rp 1.200.000",
    pnlClass: "text-tradeGreen font-bold",
    rrr: "1 : 2.5",
    planFollowed: true,
    aiNote: "Setup textbook swing trading di area support mayor bandar."
  }
];

// =============================================================================
// 3. CANDLESTICK CHART ENGINE (LIGHTWEIGHT CHARTS)
// =============================================================================
let chartInstance = null;
let candleSeries = null;
let volumeSeries = null;
let vwapLine = null;

function initLightweightChart() {
  const container = document.getElementById("tradingChartContainer");
  if (!container) return;

  container.innerHTML = "";

  chartInstance = LightweightCharts.createChart(container, {
    width: container.clientWidth,
    height: container.clientHeight,
    layout: {
      background: { color: "#06080D" },
      textColor: "#8B949E",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11
    },
    grid: {
      vertLines: { color: "rgba(255, 255, 255, 0.03)" },
      horzLines: { color: "rgba(255, 255, 255, 0.03)" }
    },
    crosshair: {
      mode: LightweightCharts.CrosshairMode.Normal,
      vertLine: { color: "rgba(255, 255, 255, 0.2)", width: 1, style: 2 },
      horzLine: { color: "rgba(255, 255, 255, 0.2)", width: 1, style: 2 }
    },
    rightPriceScale: {
      borderColor: "rgba(255, 255, 255, 0.08)",
      autoScale: true
    },
    timeScale: {
      borderColor: "rgba(255, 255, 255, 0.08)",
      timeVisible: true,
      secondsVisible: false
    }
  });

  candleSeries = chartInstance.addCandlestickSeries({
    upColor: "#10B981",
    downColor: "#F43F5E",
    borderUpColor: "#10B981",
    borderDownColor: "#F43F5E",
    wickUpColor: "#10B981",
    wickDownColor: "#F43F5E"
  });

  volumeSeries = chartInstance.addHistogramSeries({
    color: "rgba(255, 255, 255, 0.12)",
    priceFormat: { type: "volume" },
    priceScaleId: "",
    scaleMargins: { top: 0.82, bottom: 0 }
  });

  vwapLine = chartInstance.addLineSeries({
    color: "#F59E0B",
    lineWidth: 1.5,
    title: "VWAP Bandar"
  });

  loadInstrumentData(currentTicker);

  window.addEventListener("resize", () => {
    if (chartInstance && container) {
      chartInstance.applyOptions({
        width: container.clientWidth,
        height: container.clientHeight
      });
    }
  });
}

function loadInstrumentData(ticker) {
  const inst = INSTRUMENTS[ticker];
  if (!inst) return;

  candleSeries.setData(inst.baseCandles.candles);
  volumeSeries.setData(inst.baseCandles.volumes);

  const vwapPoints = inst.baseCandles.candles.map(c => ({
    time: c.time,
    value: inst.vwap
  }));
  vwapLine.setData(vwapPoints);

  // Set chart markers
  candleSeries.setMarkers([
    {
      time: inst.baseCandles.candles[inst.baseCandles.candles.length - 8].time,
      position: "belowBar",
      color: "#10B981",
      shape: "arrowUp",
      text: `AI BUY @ ${inst.vwap}`
    }
  ]);

  chartInstance.timeScale().fitContent();

  // Update UI Elements
  document.getElementById("topLivePrice").innerText = inst.price.toLocaleString("id-ID");
  document.getElementById("topLiveChange").innerText = inst.change;
  document.getElementById("topLiveChange").className = `text-[11px] font-bold ${inst.changeClass}`;

  document.getElementById("chartSignalTicker").innerText = ticker;
  document.getElementById("chartSignalBadge").innerText = inst.signalBadge;
  document.getElementById("chartSignalBadge").className = `px-2 py-0.5 rounded text-[10px] font-bold border ${inst.signalClass}`;
  document.getElementById("chartEntryVal").innerText = inst.entry.toLocaleString("id-ID");
  document.getElementById("chartSlVal").innerText = inst.sl.toLocaleString("id-ID");
  document.getElementById("chartTpVal").innerText = inst.tp1.toLocaleString("id-ID");

  document.getElementById("bandarIndicatorPill").innerText = `VWAP BANDAR (${inst.vwap.toLocaleString("id-ID")})`;

  // Update Order Ticket Default Values
  document.getElementById("ticketEntry").value = inst.entry;
  document.getElementById("ticketSL").value = inst.sl;
  document.getElementById("ticketTP").value = inst.tp1;
  document.getElementById("labelMarketPrice").innerText = `Pasar: ${inst.price.toLocaleString("id-ID")}`;

  recalcOrderTicket();
  renderBrokerSummaryBox(inst);
  renderTapeStream(inst);
}

function generateCandles(startPrice, endPrice, count, volatility) {
  const candles = [];
  const volumes = [];
  let current = startPrice;
  const now = Math.floor(Date.now() / 1000) - (count * 900);

  for (let i = 0; i < count; i++) {
    const time = now + (i * 900);
    const step = (endPrice - startPrice) / count;
    const noise = (Math.random() - 0.48) * volatility;
    const open = current;
    const close = open + step + noise;
    const high = Math.max(open, close) + (Math.random() * (volatility * 0.7));
    const low = Math.min(open, close) - (Math.random() * (volatility * 0.7));

    candles.push({ time, open, high, low, close });
    volumes.push({
      time,
      value: Math.floor(Math.random() * 80000) + 20000,
      color: close >= open ? "rgba(16, 185, 129, 0.25)" : "rgba(244, 63, 94, 0.25)"
    });

    current = close;
  }

  return { candles, volumes };
}

// =============================================================================
// 4. ORDER TICKET & RISK CALCULATION
// =============================================================================
function setOrderSide(side) {
  currentOrderSide = side;
  const buyBtn = document.getElementById("sideBtnBuy");
  const sellBtn = document.getElementById("sideBtnSell");
  const execBtn = document.getElementById("btnExecuteOrder");

  if (side === "BUY") {
    buyBtn.className = "py-1.5 rounded text-white font-bold bg-tradeGreen/20 border border-tradeGreen/40 text-tradeGreen";
    sellBtn.className = "py-1.5 rounded text-muted font-bold hover:text-tradeRed";
    execBtn.className = "w-full py-3 rounded bg-tradeGreen text-black font-extrabold text-xs font-mono tracking-wider hover:opacity-90 transition shadow-lg flex items-center justify-center space-x-1.5";
  } else {
    sellBtn.className = "py-1.5 rounded text-white font-bold bg-tradeRed/20 border border-tradeRed/40 text-tradeRed";
    buyBtn.className = "py-1.5 rounded text-muted font-bold hover:text-tradeGreen";
    execBtn.className = "w-full py-3 rounded bg-tradeRed text-white font-extrabold text-xs font-mono tracking-wider hover:opacity-90 transition shadow-lg flex items-center justify-center space-x-1.5";
  }
  recalcOrderTicket();
}

function onRiskSliderChange(val) {
  riskPercentage = parseFloat(val) / 100;
  const maxRiskNominal = userEquity * riskPercentage;
  document.getElementById("riskPctDisplay").innerText = `${val}% (Rp ${maxRiskNominal.toLocaleString("id-ID")})`;
  recalcOrderTicket();
}

function recalcOrderTicket() {
  const entry = parseFloat(document.getElementById("ticketEntry").value) || 3840;
  const sl = parseFloat(document.getElementById("ticketSL").value) || 3710;
  const tp = parseFloat(document.getElementById("ticketTP").value) || 4150;

  const maxRiskNominal = userEquity * riskPercentage;
  const perShareRisk = Math.abs(entry - sl);
  const perShareReward = Math.abs(tp - entry);

  let lotSize = 1;
  let capitalNeeded = 0;

  if (perShareRisk > 0) {
    const isSaham = INSTRUMENTS[currentTicker].type === "saham";
    if (isSaham) {
      lotSize = Math.max(1, Math.floor(maxRiskNominal / (perShareRisk * 100)));
      capitalNeeded = lotSize * entry * 100;
    } else {
      lotSize = (maxRiskNominal / (perShareRisk * 1000)).toFixed(2);
      capitalNeeded = lotSize * entry * 1000;
    }
  }

  const rrr = perShareRisk > 0 ? (perShareReward / perShareRisk).toFixed(2) : 0;
  const slDist = (((sl - entry) / entry) * 100).toFixed(1);
  const tpDist = (((tp - entry) / entry) * 100).toFixed(1);

  document.getElementById("slDistancePct").innerText = `${slDist}%`;
  document.getElementById("tpDistancePct").innerText = `+${tpDist}%`;

  document.getElementById("ticketLotSize").innerText = `${lotSize} Lot`;
  document.getElementById("ticketRequiredCapital").innerText = `Rp ${Math.round(capitalNeeded).toLocaleString("id-ID")}`;
  document.getElementById("ticketRRR").innerText = `1 : ${rrr} (${rrr >= 2 ? "Valid" : "Risiko Tipis"})`;
  document.getElementById("ticketRRR").className = rrr >= 2 ? "text-tradeGreen font-bold" : "text-tradeGold font-bold";

  document.getElementById("btnExecuteOrder").innerHTML = `
    <i data-lucide="check" class="w-4 h-4"></i>
    <span>EKSEKUSI ${currentOrderSide} ORDER (${lotSize} LOT)</span>
  `;
  lucide.createIcons();
}

function executeMarketOrder() {
  const entry = parseFloat(document.getElementById("ticketEntry").value) || 3840;
  const sl = parseFloat(document.getElementById("ticketSL").value) || 3710;
  const tp = parseFloat(document.getElementById("ticketTP").value) || 4150;
  const lot = parseInt(document.getElementById("ticketLotSize").innerText) || 38;

  const newPos = {
    id: `POS-${Math.floor(Math.random() * 900) + 100}`,
    ticker: currentTicker,
    side: currentOrderSide,
    lot: lot,
    entryPrice: entry,
    currentPrice: entry,
    sl: sl,
    tp: tp,
    unrealizedPnL: 0,
    timestamp: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) + " WIB"
  };

  openPositions.unshift(newPos);
  renderPositionsTable();
  showToast(`Order Dieksekusi: ${currentOrderSide} ${lot} Lot ${currentTicker} @ ${entry}`);
  switchDockTab("positions");
}

function closePosition(posId) {
  const idx = openPositions.findIndex(p => p.id === posId);
  if (idx === -1) return;

  const p = openPositions[idx];
  const pnl = p.unrealizedPnL;
  const isProfit = pnl >= 0;

  // Add to journal
  closedJournal.unshift({
    id: closedJournal.length + 1,
    date: new Date().toLocaleDateString("id-ID"),
    ticker: p.ticker,
    side: p.side,
    entry: `Rp ${p.entryPrice.toLocaleString("id-ID")}`,
    exit: `Rp ${p.currentPrice.toLocaleString("id-ID")}`,
    lot: `${p.lot} Lot`,
    pnl: `${isProfit ? "+" : "-"}Rp ${Math.abs(pnl).toLocaleString("id-ID")}`,
    pnlClass: isProfit ? "text-tradeGreen font-bold" : "text-tradeRed font-bold",
    rrr: "1 : 2.2",
    planFollowed: true,
    aiNote: "Posisi ditutup secara manual oleh trader. Dicatat ke jurnal sistem."
  });

  openPositions.splice(idx, 1);
  renderPositionsTable();
  renderJournalTable();
  showToast(`Posisi ${p.ticker} Ditutup. Hasil: ${isProfit ? "+" : "-"}Rp ${Math.abs(pnl).toLocaleString("id-ID")}`);
}

// =============================================================================
// 5. RENDERERS (POSITIONS, JOURNAL, BROKER SUMMARY, TAPE)
// =============================================================================
function renderPositionsTable() {
  const tbody = document.getElementById("openPositionsTableBody");
  document.getElementById("openPositionsCount").innerText = openPositions.length;

  if (openPositions.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" class="text-center py-6 text-muted font-mono">Tidak ada posisi terbuka. Eksekusi order di Order Ticket.</td></tr>`;
    return;
  }

  tbody.innerHTML = openPositions.map(p => {
    const isProfit = p.unrealizedPnL >= 0;
    return `
      <tr class="hover:bg-white/[0.02] transition">
        <td class="py-2 px-2 font-bold text-white">${p.ticker}</td>
        <td class="py-2 px-2">
          <span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${p.side === 'BUY' ? 'bg-tradeGreen/10 text-tradeGreen border border-tradeGreen/30' : 'bg-tradeRed/10 text-tradeRed border border-tradeRed/30'}">${p.side}</span>
        </td>
        <td class="py-2 px-2 text-slate-300 font-mono">${p.lot} Lot</td>
        <td class="py-2 px-2 text-slate-300">${p.entryPrice.toLocaleString("id-ID")}</td>
        <td class="py-2 px-2 font-bold text-white">${p.currentPrice.toLocaleString("id-ID")}</td>
        <td class="py-2 px-2 text-tradeRed">${p.sl.toLocaleString("id-ID")}</td>
        <td class="py-2 px-2 text-tradeGreen">${p.tp.toLocaleString("id-ID")}</td>
        <td class="py-2 px-2 font-bold ${isProfit ? 'text-tradeGreen' : 'text-tradeRed'}">
          ${isProfit ? '+' : '-'}Rp ${Math.abs(p.unrealizedPnL).toLocaleString("id-ID")}
        </td>
        <td class="py-2 px-2 text-right">
          <button onclick="closePosition('${p.id}')" class="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-[10px] transition">Tutup Posisi</button>
        </td>
      </tr>
    `;
  }).join("");
}

function renderJournalTable() {
  const tbody = document.getElementById("terminalJournalTableBody");
  document.getElementById("journalCount").innerText = closedJournal.length;

  tbody.innerHTML = closedJournal.map(t => `
    <tr class="hover:bg-white/[0.02] transition">
      <td class="py-2 px-2 text-muted">${t.date}</td>
      <td class="py-2 px-2 font-bold text-white">${t.ticker}</td>
      <td class="py-2 px-2"><span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${t.side === 'BUY' ? 'bg-tradeGreen/10 text-tradeGreen' : 'bg-tradeRed/10 text-tradeRed'}">${t.side}</span></td>
      <td class="py-2 px-2 text-slate-300">${t.entry} &rarr; ${t.exit}</td>
      <td class="py-2 px-2 text-slate-300">${t.lot}</td>
      <td class="py-2 px-2 ${t.pnlClass}">${t.pnl}</td>
      <td class="py-2 px-2 text-slate-300">${t.rrr}</td>
      <td class="py-2 px-2">${t.planFollowed ? '<span class="text-tradeGreen">✓ Patuh</span>' : '<span class="text-tradeRed">✕ Melanggar</span>'}</td>
      <td class="py-2 px-2 text-muted text-[10px] truncate max-w-xs" title="${t.aiNote}">${t.aiNote}</td>
    </tr>
  `).join("");
}

function renderBrokerSummaryBox(inst) {
  document.getElementById("brokerBoxTitle").innerText = `Top 3 Broker Akumulasi ${currentTicker}`;
  document.getElementById("brokerBoxVwap").innerText = `Rp ${inst.vwap.toLocaleString("id-ID")}`;
  document.getElementById("brokerBoxBcr").innerText = inst.bcr;
  document.getElementById("brokerBoxForeign").innerText = inst.foreign;

  const container = document.getElementById("brokerBarsContainer");
  const buyerRows = inst.buyers.map(b => `
    <div class="space-y-1">
      <div class="flex justify-between items-center text-[10px]">
        <span class="font-bold text-tradeGreen">${b.code} <span class="font-normal text-muted">(${b.name})</span></span>
        <span class="text-white font-bold">${b.val}</span>
      </div>
      <div class="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
        <div class="bg-tradeGreen h-full rounded-full" style="width: ${b.pct}%"></div>
      </div>
    </div>
  `).join("");

  const sellerRows = inst.sellers.map(s => `
    <div class="space-y-1">
      <div class="flex justify-between items-center text-[10px]">
        <span class="font-bold text-tradeRed">${s.code} <span class="font-normal text-muted">(${s.name})</span></span>
        <span class="text-white font-bold">${s.val}</span>
      </div>
      <div class="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
        <div class="bg-tradeRed h-full rounded-full" style="width: ${s.pct}%"></div>
      </div>
    </div>
  `).join("");

  container.innerHTML = `
    <div class="space-y-2">
      <span class="text-muted text-[10px] uppercase font-bold">Top Inflow Buyer:</span>
      ${buyerRows}
    </div>
    <div class="space-y-2 pt-2 border-t border-white/[0.04]">
      <span class="text-muted text-[10px] uppercase font-bold">Top Outflow Seller:</span>
      ${sellerRows}
    </div>
  `;
}

function renderTapeStream(inst) {
  const container = document.getElementById("tapeStream");
  container.innerHTML = `
    <div class="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
      <span class="text-tradeGreen font-bold">AK (UBS)</span> Net Buy <strong>+142.5K Lot</strong>
      <div class="text-[9px] text-muted">Avg: Rp ${inst.vwap}</div>
    </div>
    <div class="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
      <span class="text-tradeGreen font-bold">BK (JPMorgan)</span> Net Buy <strong>+78.2K Lot</strong>
      <div class="text-[9px] text-muted">Avg: Rp ${inst.vwap}</div>
    </div>
    <div class="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
      <span class="text-tradeRed font-bold">YP (Retail)</span> Net Sell <strong>-110.4K Lot</strong>
      <div class="text-[9px] text-muted">Panic Sell</div>
    </div>
    <div class="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
      <span class="text-tradeGreen font-bold">Foreign Flow</span> Inflow <strong>${inst.foreign}</strong>
      <div class="text-[9px] text-muted">T+0 Recorded</div>
    </div>
  `;
}

// =============================================================================
// 6. AI COPILOT INTERACTION
// =============================================================================
function askCopilotQuick(text) {
  document.getElementById("copilotInput").value = text;
  sendCopilotMessage();
}

function sendCopilotMessage() {
  const input = document.getElementById("copilotInput");
  const text = input.value.trim();
  if (!text) return;

  const stream = document.getElementById("copilotChatStream");

  // Append user message
  const userBubble = document.createElement("div");
  userBubble.className = "p-2 rounded bg-white/10 text-white font-mono text-[11px] self-end text-right";
  userBubble.innerText = text;
  stream.appendChild(userBubble);
  input.value = "";

  // Simulate AI Copilot Streaming
  setTimeout(() => {
    const aiBubble = document.createElement("div");
    aiBubble.className = "p-2.5 rounded bg-[#111622] border border-white/[0.06] text-slate-300 font-mono text-[11px] leading-relaxed";

    const inst = INSTRUMENTS[currentTicker];
    if (text.toLowerCase().includes("bbri")) {
      aiBubble.innerHTML = `<span class="text-tradeGreen font-bold block mb-1">TRADEMIND Copilot:</span>
      Status BBRI di 3.840: <strong>APPROVED (Score 92/100)</strong>. Broker AK & BK mengunci akumulasi di VWAP 3.820. Stop Loss di 3.710 di bawah fraktal ATR. Ukuran lot yang diizinkan untuk modal Rp 25 Juta adalah tepat <strong>38 Lot</strong> (resiko Rp 494.000 / 1.97%).`;
    } else if (text.toLowerCase().includes("gold") || text.toLowerCase().includes("xau")) {
      aiBubble.innerHTML = `<span class="text-tradeGold font-bold block mb-1">TRADEMIND Copilot:</span>
      Status XAU/USD di $2,648.50: <strong>BULLISH EXPANSION</strong>. Likuiditas sesi Asia telah disapu di $2,638. RRR 1:2.7 valid dengan TP1 di $2,668. Gunakan ukuran 0.15 - 0.20 Lot per trade untuk menjaga resiko 2%.`;
    } else {
      aiBubble.innerHTML = `<span class="text-tradeGreen font-bold block mb-1">TRADEMIND Copilot:</span>
      Evaluasi portofolio: Skor disiplin akun kamu saat ini <strong>82/100</strong>. Terdeteksi 2 transaksi exit terlalu awal (loss aversion). Rekomendasi: Pasang Trailing Stop berbasis ATR daripada menutup profit manual.`;
    }

    stream.appendChild(aiBubble);
    stream.scrollTop = stream.scrollHeight;
  }, 400);
}

// =============================================================================
// 7. REAL-TIME TICK SIMULATOR (BREATHING LIVE TERMINAL)
// =============================================================================
setInterval(() => {
  const inst = INSTRUMENTS[currentTicker];
  if (!inst || !candleSeries) return;

  const tickNoise = (Math.random() - 0.49) * (inst.type === "saham" ? 5 : 0.3);
  inst.price = Math.round((inst.price + tickNoise) * 100) / 100;

  document.getElementById("topLivePrice").innerText = inst.price.toLocaleString("id-ID");

  // Update open positions floating PnL
  openPositions.forEach(p => {
    if (p.ticker === currentTicker) {
      p.currentPrice = inst.price;
      const diff = (p.currentPrice - p.entryPrice) * p.lot * (inst.type === "saham" ? 100 : 1000);
      p.unrealizedPnL = Math.round(diff);
    }
  });

  renderPositionsTable();
}, 2500);

// =============================================================================
// 8. TABS & VIEW CONTROLLERS
// =============================================================================
function onSelectInstrument(ticker) {
  currentTicker = ticker;
  loadInstrumentData(ticker);
}

function setTimeframe(tf) {
  document.querySelectorAll(".tf-btn").forEach(b => {
    b.className = "tf-btn px-2 py-0.5 rounded text-muted hover:text-white";
  });
  event.target.className = "tf-btn px-2 py-0.5 rounded text-white bg-white/10 font-bold";
  loadInstrumentData(currentTicker);
}

function switchView(viewName) {
  const views = ["terminal", "radar", "journal", "academy"];
  views.forEach(v => {
    const el = document.getElementById(`view${v.charAt(0).toUpperCase() + v.slice(1)}`);
    const btn = document.getElementById(`railBtn${v.charAt(0).toUpperCase() + v.slice(1)}`);
    if (v === viewName) {
      if (el) el.classList.remove("hidden");
      if (btn) btn.className = "w-9 h-9 rounded flex items-center justify-center text-white nav-btn-active transition";
    } else {
      if (el) el.classList.add("hidden");
      if (btn) btn.className = "w-9 h-9 rounded flex items-center justify-center text-muted hover:text-white transition";
    }
  });

  if (viewName === "terminal" && chartInstance) {
    const container = document.getElementById("tradingChartContainer");
    setTimeout(() => {
      chartInstance.applyOptions({ width: container.clientWidth, height: container.clientHeight });
      chartInstance.timeScale().fitContent();
    }, 50);
  }
}

function switchDockTab(tabKey) {
  const tabs = ["positions", "journal", "tape"];
  tabs.forEach(t => {
    const content = document.getElementById(`dockContent${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const btn = document.getElementById(`dockTab${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (t === tabKey) {
      if (content) content.classList.remove("hidden");
      if (btn) btn.className = "text-white font-bold border-b border-white pb-1";
    } else {
      if (content) content.classList.add("hidden");
      if (btn) btn.className = "text-muted hover:text-white pb-1";
    }
  });
}

function switchRightTab(tabKey) {
  const tabs = ["order", "broker", "copilot"];
  tabs.forEach(t => {
    const content = document.getElementById(`rightContent${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const btn = document.getElementById(`rightTab${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (t === tabKey) {
      if (content) content.classList.remove("hidden");
      if (btn) btn.className = "text-white font-bold border-b border-white pb-1 flex items-center space-x-1";
    } else {
      if (content) content.classList.add("hidden");
      if (btn) btn.className = "text-muted hover:text-white pb-1 flex items-center space-x-1";
    }
  });
}

function openRightPanel(tabKey = 'order') {
  const panel = document.getElementById("rightPanel");
  if (panel) {
    panel.classList.remove("translate-x-full");
    panel.classList.add("translate-x-0");
  }
  if (tabKey) switchRightTab(tabKey);
}

function closeRightPanel() {
  const panel = document.getElementById("rightPanel");
  if (panel) {
    panel.classList.add("translate-x-full");
    panel.classList.remove("translate-x-0");
  }
}

function toggleRightPanel(tabKey = 'order') {
  const panel = document.getElementById("rightPanel");
  if (panel) {
    if (panel.classList.contains("translate-x-full")) {
      openRightPanel(tabKey);
    } else {
      closeRightPanel();
    }
  }
}

function toggleModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.toggle("hidden");
}

function openCmsModal() { toggleModal("cmsModal"); }
function closeCmsModal() { toggleModal("cmsModal"); }
function saveCmsLesson() {
  closeCmsModal();
  showToast("Materi kurikulum berhasil diperbarui ke Vector Database!");
}

function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  document.getElementById("toastMessage").innerText = msg;
  toast.classList.remove("translate-y-12", "opacity-0");
  setTimeout(() => {
    toast.classList.add("translate-y-12", "opacity-0");
  }, 3200);
}

// =============================================================================
// 9. INITIALIZATION
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initLightweightChart();
  renderPositionsTable();
  renderJournalTable();
  lucide.createIcons();
});
