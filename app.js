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
  userEquity += pnl;
  updateEquityDisplay();
  renderPositionsTable();
  renderJournalTable();
  renderFullJournal();
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

let journalFilter = "ALL";

function filterJournal(filterType) {
  journalFilter = filterType;
  renderFullJournal();
}

function renderFullJournal() {
  const container = document.getElementById("fullJournalContainer");
  if (!container) return;

  const totalTrades = closedJournal.length;
  const winTrades = closedJournal.filter(t => t.pnlClass.includes("text-tradeGreen"));
  const winCount = winTrades.length;
  const lossCount = totalTrades - winCount;
  const winRate = totalTrades > 0 ? ((winCount / totalTrades) * 100).toFixed(1) : "0.0";

  let filtered = closedJournal;
  if (journalFilter === "WIN") {
    filtered = closedJournal.filter(t => t.pnlClass.includes("text-tradeGreen"));
  } else if (journalFilter === "LOSS") {
    filtered = closedJournal.filter(t => !t.pnlClass.includes("text-tradeGreen"));
  }

  container.innerHTML = `
    <!-- 1. BENTO EXECUTIVE METRICS -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 font-mono">
      <div class="p-4 rounded-xl bg-[#0D111A] border border-white/[0.08] space-y-1">
        <div class="flex justify-between items-center text-[10px] text-muted uppercase">
          <span>WIN RATE AKUN</span>
          <span class="text-tradeGreen font-bold">+4.2% vs Benchmark</span>
        </div>
        <div class="text-2xl font-extrabold text-white">${winRate}%</div>
        <div class="text-[11px] text-muted">${winCount} Menang • ${lossCount} Kalah (Total ${totalTrades})</div>
      </div>

      <div class="p-4 rounded-xl bg-[#0D111A] border border-white/[0.08] space-y-1">
        <div class="flex justify-between items-center text-[10px] text-muted uppercase">
          <span>NET REALIZED PnL</span>
          <span class="text-tradeGreen font-bold">ROI +73.8%</span>
        </div>
        <div class="text-2xl font-extrabold text-tradeGreen">+Rp 18.450.000</div>
        <div class="text-[11px] text-muted">Profit Factor: <strong class="text-white">2.84</strong></div>
      </div>

      <div class="p-4 rounded-xl bg-[#0D111A] border border-white/[0.08] space-y-1">
        <div class="flex justify-between items-center text-[10px] text-muted uppercase">
          <span>AVG RISK-TO-REWARD</span>
          <span class="text-white font-bold">Standar Institusi</span>
        </div>
        <div class="text-2xl font-extrabold text-white">1 : 2.6</div>
        <div class="text-[11px] text-muted">Avg Win: +Rp 2.1M | Avg Loss: -Rp 810K</div>
      </div>

      <div class="p-4 rounded-xl bg-[#0D111A] border border-white/[0.08] space-y-1">
        <div class="flex justify-between items-center text-[10px] text-muted uppercase">
          <span>DISCIPLINE GUARD SCORE</span>
          <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-tradeGreen/10 text-tradeGreen border border-tradeGreen/30">GRADE A+</span>
        </div>
        <div class="text-2xl font-extrabold text-tradeGreen">92 / 100</div>
        <div class="text-[11px] text-muted">Zero Overleverage • 1x Premature Exit</div>
      </div>
    </div>

    <!-- 2. BEHAVIORAL POST-MORTEM & PSYCHOLOGICAL DIAGNOSTICS -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 font-mono">
      <div class="p-4 rounded-xl bg-[#0D111A] border border-white/[0.08] space-y-3">
        <div class="flex items-center space-x-2 text-tradeGold font-bold text-xs">
          <i data-lucide="alert-triangle" class="w-4 h-4 text-tradeGold"></i>
          <span>AI POST-MORTEM: EVALUASI BIAS EMOSIONAL</span>
        </div>
        <div class="space-y-2 text-[11px] leading-relaxed">
          <div class="p-2.5 rounded bg-amber-950/20 border border-amber-900/30 text-amber-200 space-y-1">
            <div class="font-bold flex justify-between">
              <span>ANTM — Bias Loss Aversion (Take Profit Prematur)</span>
              <span class="text-muted text-[10px]">08/09</span>
            </div>
            <p class="text-[10px] text-amber-300/80">
              Close manual di +Rp 300K (+1.9%) padahal struktur fraktal dan volume akumulasi bandar masih valid menuju TP1 (+5.5%). Diagnosa: Cemas profit hilang. Rekomendasi: Gunakan Trailing Stop ATR agar tidak intervensi manual.
            </p>
          </div>
          <div class="p-2.5 rounded bg-rose-950/20 border border-rose-900/30 text-rose-200 space-y-1">
            <div class="font-bold flex justify-between">
              <span>BREN — Bias FOMO / Tangkap Pisau Jatuh</span>
              <span class="text-muted text-[10px]">05/09</span>
            </div>
            <p class="text-[10px] text-rose-300/80">
              Entry buy saat Top 3 Broker (YP, PD) net selling 68% (distribusi deras). Cut-loss disiplin berhasil membatasi rugi di Rp 1.000.000 (sesuai max 2% risk rule). Rekomendasi: Tunggu pantulan VWAP sebelum entry counter-trend.
            </p>
          </div>
        </div>
      </div>

      <div class="p-4 rounded-xl bg-[#0D111A] border border-white/[0.08] space-y-3">
        <div class="flex items-center space-x-2 text-tradeGreen font-bold text-xs">
          <i data-lucide="shield-check" class="w-4 h-4 text-tradeGreen"></i>
          <span>DISIPLIN & EDGE STATISTIK TERBUKTI</span>
        </div>
        <div class="space-y-2 text-[11px] leading-relaxed">
          <div class="p-2.5 rounded bg-emerald-950/20 border border-emerald-900/30 text-emerald-200 space-y-1">
            <div class="font-bold flex justify-between">
              <span>BBRI & BBCA — Keselarasan Modal Bandar (VWAP)</span>
              <span class="text-tradeGreen text-[10px]">Win Rate 100%</span>
            </div>
            <p class="text-[10px] text-emerald-300/80">
              Setup yang dieksekusi di area VWAP Bandar menghasilkan Win Rate 100% dengan rata-rata RRR 1:2.4. Ini adalah edge statistik terkuat akun Anda.
            </p>
          </div>
          <div class="p-2.5 rounded bg-emerald-950/20 border border-emerald-900/30 text-emerald-200 space-y-1">
            <div class="font-bold flex justify-between">
              <span>XAU/USD — Asian Range Liquidity Sweep</span>
              <span class="text-tradeGreen text-[10px]">SMC Edge (+$480)</span>
            </div>
            <p class="text-[10px] text-emerald-300/80">
              Eksekusi Smart Money Concept (sweep liquidity Asian Low di $2,638 lalu buy expansion) menghasilkan profit tertinggi. Menahan floating profit disiplin sampai TP tercapai.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. FULL INTERACTIVE JOURNAL TABLE -->
    <div class="bg-[#0D111A] border border-white/[0.08] rounded-xl overflow-hidden font-mono text-xs">
      <div class="p-3 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
        <div class="flex items-center space-x-2">
          <span class="font-bold text-white uppercase text-xs">Log Transaksi Lengkap</span>
          <span class="text-[10px] text-muted">(Dicatat Otomatis oleh Sistem)</span>
        </div>
        <div class="flex items-center space-x-2 text-[11px]">
          <button onclick="filterJournal('ALL')" class="px-2.5 py-1 rounded ${journalFilter === 'ALL' ? 'bg-white text-black font-bold' : 'bg-white/5 text-muted hover:text-white'}">Semua (${totalTrades})</button>
          <button onclick="filterJournal('WIN')" class="px-2.5 py-1 rounded ${journalFilter === 'WIN' ? 'bg-white text-black font-bold' : 'bg-white/5 text-muted hover:text-white'}">Hanya Profit (${winCount})</button>
          <button onclick="filterJournal('LOSS')" class="px-2.5 py-1 rounded ${journalFilter === 'LOSS' ? 'bg-white text-black font-bold' : 'bg-white/5 text-muted hover:text-white'}">Hanya Evaluasi (${lossCount})</button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left">
          <thead class="text-[10px] text-muted uppercase border-b border-white/[0.04] bg-white/[0.01]">
            <tr>
              <th class="py-2.5 px-3">Tanggal</th>
              <th class="py-2.5 px-3">Ticker</th>
              <th class="py-2.5 px-3">Sisi</th>
              <th class="py-2.5 px-3">Entry &rarr; Exit</th>
              <th class="py-2.5 px-3">Ukuran Lot</th>
              <th class="py-2.5 px-3">Realized PnL</th>
              <th class="py-2.5 px-3">R:R</th>
              <th class="py-2.5 px-3">Disiplin Plan</th>
              <th class="py-2.5 px-3">Analisa & Evaluasi AI</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/[0.02] text-[11px]">
            ${filtered.map(t => `
              <tr class="hover:bg-white/[0.02] transition">
                <td class="py-2.5 px-3 text-muted">${t.date}</td>
                <td class="py-2.5 px-3 font-bold text-white">${t.ticker}</td>
                <td class="py-2.5 px-3">
                  <span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${t.side === 'BUY' ? 'bg-tradeGreen/10 text-tradeGreen border border-tradeGreen/30' : 'bg-tradeRed/10 text-tradeRed border border-tradeRed/30'}">${t.side}</span>
                </td>
                <td class="py-2.5 px-3 text-slate-300">${t.entry} &rarr; ${t.exit}</td>
                <td class="py-2.5 px-3 text-slate-300">${t.lot}</td>
                <td class="py-2.5 px-3 ${t.pnlClass}">${t.pnl}</td>
                <td class="py-2.5 px-3 text-slate-300">${t.rrr}</td>
                <td class="py-2.5 px-3">
                  ${t.planFollowed ? '<span class="text-tradeGreen font-bold">✓ Patuh</span>' : '<span class="text-tradeRed font-bold">✕ Melanggar</span>'}
                </td>
                <td class="py-2.5 px-3 text-slate-300 text-[11px]">${t.aiNote}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;

  lucide.createIcons();
}

function selectTickerFromRadar(ticker) {
  onSelectInstrument(ticker);
  const select = document.getElementById("mainTickerSelect");
  if (select) select.value = ticker;
  switchView("terminal");
}

function renderFullRadar() {
  const container = document.getElementById("fullRadarContainer");
  if (!container) return;

  const cardsHtml = Object.keys(INSTRUMENTS).map(ticker => {
    const inst = INSTRUMENTS[ticker];
    const isSaham = inst.type === "saham";
    const topBuyer = inst.buyers[0] ? `${inst.buyers[0].code} (${inst.buyers[0].val})` : "-";
    const topSeller = inst.sellers[0] ? `${inst.sellers[0].code} (${inst.sellers[0].val})` : "-";

    return `
      <div class="p-4 rounded-xl bg-[#0D111A] border border-white/[0.08] hover:border-white/20 transition space-y-3 font-mono">
        <div class="flex justify-between items-start">
          <div>
            <div class="flex items-center space-x-2">
              <h3 class="text-base font-extrabold text-white">${ticker}</h3>
              <span class="px-1.5 py-0.5 rounded text-[9px] font-bold ${isSaham ? 'bg-blue-950/60 text-blue-300 border border-blue-800/40' : 'bg-amber-950/60 text-amber-300 border border-amber-800/40'}">
                ${isSaham ? 'SAHAM IDX' : 'FOREX / GOLD'}
              </span>
            </div>
            <div class="text-[10px] text-muted truncate max-w-[200px]">${inst.name}</div>
          </div>
          <div class="text-right">
            <div class="text-sm font-extrabold text-white">${isSaham ? 'Rp ' + inst.price.toLocaleString('id-ID') : inst.price.toLocaleString('id-ID')}</div>
            <div class="text-[10px] font-bold ${inst.changeClass}">${inst.change}</div>
          </div>
        </div>

        <div class="p-2.5 rounded bg-[#111622] border border-white/[0.04] space-y-1.5 text-[11px]">
          <div class="flex justify-between text-muted">
            <span>Modal Bandar (VWAP):</span>
            <span class="text-white font-bold">${isSaham ? 'Rp ' + inst.vwap.toLocaleString('id-ID') : inst.vwap}</span>
          </div>
          <div class="flex justify-between text-muted">
            <span>Konsentrasi Inflow:</span>
            <span class="text-tradeGreen font-bold">${inst.bcr}</span>
          </div>
          <div class="flex justify-between text-muted">
            <span>Foreign Flow:</span>
            <span class="text-white font-bold">${inst.foreign}</span>
          </div>
          <div class="flex justify-between text-muted pt-1 border-t border-white/[0.04] text-[10px]">
            <span>Top Inflow / Outflow:</span>
            <span class="text-slate-300"><strong class="text-tradeGreen">${topBuyer}</strong> vs <strong class="text-tradeRed">${topSeller}</strong></span>
          </div>
        </div>

        <div class="flex items-center justify-between pt-1">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold border ${inst.signalClass}">
            ${inst.signalBadge}
          </span>
          <button onclick="selectTickerFromRadar('${ticker}')" class="px-3 py-1.5 rounded bg-white text-black font-extrabold text-xs hover:bg-slate-200 transition">
            Buka di Chart &rarr;
          </button>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <!-- SCREENER STATS BAR -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
      <div class="p-4 rounded-xl bg-[#0D111A] border border-white/[0.08] space-y-1">
        <div class="text-muted text-[10px] uppercase">FOREIGN FLOW BEI (SESI II)</div>
        <div class="text-xl font-extrabold text-tradeGreen">+Rp 482.6 Miliar</div>
        <div class="text-[10px] text-muted">Top Inflow: BBCA, BBRI, BMRI, TLKM</div>
      </div>
      <div class="p-4 rounded-xl bg-[#0D111A] border border-white/[0.08] space-y-1">
        <div class="text-muted text-[10px] uppercase">KONSENTRASI AKUMULASI (BCR3 > 50%)</div>
        <div class="text-xl font-extrabold text-white">4 Emiten Terdeteksi</div>
        <div class="text-[10px] text-tradeGreen">Sinyal Akumulasi Diam-diam Aktif</div>
      </div>
      <div class="p-4 rounded-xl bg-[#0D111A] border border-white/[0.08] space-y-1">
        <div class="text-muted text-[10px] uppercase">SMC FOREX & GOLD SENTIMENT</div>
        <div class="text-xl font-extrabold text-tradeGold">Bullish Expansion (Gold)</div>
        <div class="text-[10px] text-muted">Asia Low Swept • London Expansion</div>
      </div>
    </div>

    <!-- RADAR CARDS GRID -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 font-mono">
      ${cardsHtml}
    </div>
  `;

  lucide.createIcons();
}

const ACADEMY_MODULES = [
  {
    id: 0,
    title: "Modul 1: Mindset, Risk Management & Kelly Criterion",
    subtitle: "Aturan Emas 1-2% & Proteksi Modal",
    progress: 100,
    lessons: [
      { num: "1.1", title: "The Golden Rule: Batas Risiko 1-2% Per Transaksi", dur: "14 Menit", done: true },
      { num: "1.2", title: "Matematika Ukuran Lot: Menghitung Jarak SL ke Modal", dur: "18 Menit", done: true },
      { num: "1.3", title: "Mengatasi Bias Emosional: FOMO, Greed & Revenge Trading", dur: "22 Menit", done: true }
    ]
  },
  {
    id: 1,
    title: "Modul 2: Analisis Teknikal & Price Action Modern",
    subtitle: "Struktur Pasar, Fraktal S/R & ATR Dynamic Stop Loss",
    progress: 100,
    lessons: [
      { num: "2.1", title: "Membaca Struktur Pasar: Higher High & Higher Low", dur: "20 Menit", done: true },
      { num: "2.2", title: "Dynamic Stop Loss Berbasis ATR (Bukan Angka Tebak-tebakan)", dur: "16 Menit", done: true },
      { num: "2.3", title: "Support & Resistance Fraktal: Validasi Pantulan Harga", dur: "25 Menit", done: true }
    ]
  },
  {
    id: 2,
    title: "Modul 3: Analisis Fundamental & Financial Safety Net",
    subtitle: "Solvabilitas, DER < 1.0, ROE & Valuasi Wajar",
    progress: 65,
    lessons: [
      { num: "3.1", title: "Rasio Solvabilitas: Mengapa DER Wajib di Bawah 1.0", dur: "15 Menit", done: true },
      { num: "3.2", title: "Return on Equity (ROE) & Pertumbuhan Laba Bersih", dur: "19 Menit", done: true },
      { num: "3.3", title: "Menghindari Saham Gorengan dengan Arus Kas Operasional", dur: "24 Menit", done: false }
    ]
  },
  {
    id: 3,
    title: "Modul 4: Masterclass Bandarmologi BEI & SMC Forex",
    subtitle: "Broker Summary BEI Paska 2021, VWAP Bandar & SMC Sweeps",
    progress: 40,
    lessons: [
      { num: "4.1", title: "Aturan Post-Market BEI: Membaca Net Buyer & Net Seller", dur: "26 Menit", done: true },
      { num: "4.2", title: "Menghitung Konsentrasi Top 3 Broker (BCR3) & Modal VWAP", dur: "30 Menit", done: true },
      { num: "4.3", title: "Deteksi Akumulasi Diam-diam vs Distribusi Agresif", dur: "28 Menit", done: false },
      { num: "4.4", title: "SMC Forex: Liquidity Sweeps, Order Blocks & Imbalance", dur: "35 Menit", done: false }
    ]
  }
];

function renderFullAcademy() {
  const container = document.getElementById("fullAcademyContainer");
  if (!container) return;

  container.innerHTML = ACADEMY_MODULES.map(m => `
    <div class="p-5 rounded-xl bg-[#0D111A] border border-white/[0.08] hover:border-white/20 transition space-y-4 font-mono">
      <div class="flex justify-between items-start">
        <div>
          <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-tradeGreen/10 text-tradeGreen border border-tradeGreen/30 uppercase">
            ${m.progress === 100 ? '✓ SELESAI 100%' : `PROGRES ${m.progress}%`}
          </span>
          <h3 class="text-sm font-bold text-white mt-1.5">${m.title}</h3>
          <p class="text-[11px] text-muted">${m.subtitle}</p>
        </div>
        <button onclick="openCmsModal()" class="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-muted hover:text-white text-[10px] transition border border-white/10" title="Kelola Materi Modul Ini">
          Edit (CMS)
        </button>
      </div>

      <div class="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
        <div class="bg-tradeGreen h-full rounded-full transition-all" style="width: ${m.progress}%"></div>
      </div>

      <div class="space-y-1.5 pt-1">
        ${m.lessons.map((l, idx) => `
          <div onclick="openLessonDetail(${m.id}, ${idx})" class="p-2.5 rounded bg-[#111622] border border-white/[0.04] flex items-center justify-between text-[11px] hover:bg-white/[0.06] hover:border-white/20 cursor-pointer transition group">
            <div class="flex items-center space-x-2.5">
              <span class="w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${l.done ? 'bg-tradeGreen/20 text-tradeGreen font-bold' : 'border border-white/20 text-muted'}">
                ${l.done ? '✓' : ''}
              </span>
              <span class="text-white group-hover:text-tradeGreen transition font-medium">${l.num} ${l.title}</span>
            </div>
            <div class="flex items-center space-x-2 flex-shrink-0">
              <span class="text-muted text-[10px] hidden sm:inline">${l.dur}</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-white/5 group-hover:bg-tradeGreen group-hover:text-black transition font-bold text-muted">Buka &rarr;</span>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");

  lucide.createIcons();
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
  } else if (viewName === "journal") {
    renderFullJournal();
  } else if (viewName === "radar") {
    renderFullRadar();
  } else if (viewName === "academy") {
    renderFullAcademy();
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
  const modSelect = document.getElementById("cmsSelectModule");
  const modIdx = modSelect ? parseInt(modSelect.value) : 0;
  const titleInput = document.getElementById("cmsLessonTitle");
  const title = titleInput && titleInput.value.trim() ? titleInput.value.trim() : "Bab Baru";

  if (ACADEMY_MODULES[modIdx]) {
    ACADEMY_MODULES[modIdx].lessons.push({
      num: `${modIdx + 1}.${ACADEMY_MODULES[modIdx].lessons.length + 1}`,
      title: title,
      dur: "15 Menit",
      done: false
    });
    renderFullAcademy();
  }
  closeCmsModal();
  showToast("Materi kurikulum berhasil diperbarui ke Vector Database!");
}

// =============================================================================
// 8B. INTERACTIVE ACADEMY & DEMO SIMULATION PROTOCOL ("CEK OMBAK")
// =============================================================================
let currentActiveLessonKey = "0_0";

const LESSON_DATA = {
  "0_0": {
    code: "MODUL 1.1",
    category: "RISK MANAGEMENT & KELLY CRITERION",
    title: "The Golden Rule: Batas Risiko 1-2% Per Transaksi",
    goldenRule: "Tidak ada satu pun trade yang boleh mempertaruhkan lebih dari 2% total ekuitas portofolio. Pada modal Rp 25 Juta, kerugian maksimal jika terkena Stop Loss wajib dibatasi di Rp 500.000.",
    explanation: "Mayoritas trader retail hancur bukan karena salah menganalisis arah pasar, melainkan karena 'Risk of Ruin'. Dengan mempertaruhkan 10% per transaksi, 5 kali salah beruntun memotong modal 41% dan butuh gain +70% hanya untuk balik modal (BEP). Dengan aturan 2%, 10 kali rugi beruntun hanya mengurangi 18% ekuitas—trader tetap tenang dan disiplin mengeksekusi edge statistik.",
    checklist: [
      "Periksa total saldo ekuitas saat ini (e.g. Rp 25.000.000).",
      "Kunci slider risiko di 1.0% (Konservatif) atau 2.0% (Golden Standard).",
      "Pastikan nominal risiko tidak pernah melebihi Rp 500.000 sebelum menekan tombol Buy.",
      "Jangan pernah menggeser Stop Loss menjauhi harga ketika pasar sedang turun."
    ],
    recommendedSetup: {
      ticker: "BBRI",
      side: "BUY",
      entry: 3840,
      sl: 3710,
      tp1: 4150,
      riskPct: 2.0,
      note: "Setup BBRI: 38 Lot (Resiko Maks Rp 494.000 / 1.98%)"
    },
    diagramSvg: `<svg viewBox="0 0 600 180" class="w-full h-auto max-h-48" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="180" fill="#080B11" rx="8"/>
      <line x1="60" y1="20" x2="60" y2="150" stroke="#1E293B" stroke-width="1.5"/>
      <line x1="60" y1="150" x2="560" y2="150" stroke="#1E293B" stroke-width="1.5"/>
      <line x1="60" y1="85" x2="560" y2="85" stroke="#1E293B" stroke-dasharray="3 3"/>
      <text x="50" y="25" fill="#64748B" font-size="9" text-anchor="end" font-family="monospace">100%</text>
      <text x="50" y="88" fill="#64748B" font-size="9" text-anchor="end" font-family="monospace">50%</text>
      <text x="50" y="152" fill="#64748B" font-size="9" text-anchor="end" font-family="monospace">0%</text>
      <text x="60" y="166" fill="#64748B" font-size="9" text-anchor="middle" font-family="monospace">Trade 0</text>
      <text x="180" y="166" fill="#64748B" font-size="9" text-anchor="middle" font-family="monospace">Trade 5</text>
      <text x="310" y="166" fill="#64748B" font-size="9" text-anchor="middle" font-family="monospace">Trade 10</text>
      <text x="440" y="166" fill="#64748B" font-size="9" text-anchor="middle" font-family="monospace">Trade 15</text>
      <text x="540" y="166" fill="#64748B" font-size="9" text-anchor="middle" font-family="monospace">Trade 20</text>
      <path d="M 60,20 Q 140,85 240,118 T 540,145" fill="none" stroke="#F43F5E" stroke-width="2.5"/>
      <circle cx="240" cy="118" r="4" fill="#F43F5E"/>
      <text x="250" y="115" fill="#F43F5E" font-size="10" font-weight="bold" font-family="monospace">Risiko 10%: Drawdown -65% (Kematian Modal)</text>
      <path d="M 60,20 Q 250,45 540,65" fill="none" stroke="#10B981" stroke-width="2.5"/>
      <circle cx="540" cy="65" r="4" fill="#10B981"/>
      <text x="380" y="55" fill="#10B981" font-size="10" font-weight="bold" font-family="monospace">Aturan Emas 2%: Bertahan di 67%</text>
    </svg>`
  },
  "0_1": {
    code: "MODUL 1.2",
    category: "MATEMATIKA POSITION SIZING",
    title: "Matematika Ukuran Lot: Menghitung Jarak SL ke Modal",
    goldenRule: "Ukuran lot BUKAN ditentukan oleh besarnya feeling atau sisa cash, melainkan formula matematis: Ukuran Lot = (Modal × Risk%) / (Jarak SL × 100).",
    explanation: "Jika trader membeli saham tanpa menghitung jarak Stop Loss, maka Stop Loss lebar akan membakar portofolio saat tersentuh. Dengan formula Trademind, jika SL lebar (misal 5%), ukuran lot otomatis mengecil. Jika SL ketat (misal 2%), ukuran lot boleh membesar. Hasil akhirnya: nominal kerugian jika salah AKAN SELALU TETAP Rp 500.000.",
    checklist: [
      "Tentukan level Stop Loss terlebih dahulu berdasarkan struktur grafik (bukan modal).",
      "Hitung jarak: Harga Entry - Harga Stop Loss (e.g. 3.840 - 3.710 = Rp 130).",
      "Bagi batas toleransi risiko (Rp 500.000) dengan (130 × 100) = 38.4 Lot.",
      "Bulatkan selalu ke bawah (Round Down) menjadi 38 Lot agar tidak over-leverage."
    ],
    recommendedSetup: {
      ticker: "BBRI",
      side: "BUY",
      entry: 3840,
      sl: 3710,
      tp1: 4150,
      riskPct: 2.0,
      note: "Kalkulasi Lot Otomatis: 38 Lot"
    },
    diagramSvg: `<svg viewBox="0 0 600 170" class="w-full h-auto max-h-48" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="170" fill="#080B11" rx="8"/>
      <rect x="20" y="25" width="160" height="110" rx="8" fill="#111622" stroke="#1E293B" stroke-width="1.5"/>
      <text x="100" y="48" fill="#94A3B8" font-size="10" text-anchor="middle" font-family="monospace">LANGKAH 1</text>
      <text x="100" y="70" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle" font-family="monospace">Toleransi Risiko 2%</text>
      <text x="100" y="92" fill="#10B981" font-size="13" font-weight="bold" text-anchor="middle" font-family="monospace">Rp 500.000</text>
      <text x="100" y="112" fill="#64748B" font-size="9" text-anchor="middle" font-family="monospace">Modal: Rp 25.000.000</text>
      <text x="195" y="85" fill="#38BDF8" font-size="18" font-weight="bold" text-anchor="middle" font-family="monospace">÷</text>
      <rect x="210" y="25" width="170" height="110" rx="8" fill="#111622" stroke="#1E293B" stroke-width="1.5"/>
      <text x="295" y="48" fill="#94A3B8" font-size="10" text-anchor="middle" font-family="monospace">LANGKAH 2</text>
      <text x="295" y="70" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle" font-family="monospace">Jarak SL Per Lot</text>
      <text x="295" y="92" fill="#F43F5E" font-size="13" font-weight="bold" text-anchor="middle" font-family="monospace">Rp 13.000 / Lot</text>
      <text x="295" y="112" fill="#64748B" font-size="9" text-anchor="middle" font-family="monospace">(3.840 - 3.710) × 100</text>
      <text x="395" y="85" fill="#38BDF8" font-size="18" font-weight="bold" text-anchor="middle" font-family="monospace">=</text>
      <rect x="410" y="25" width="170" height="110" rx="8" fill="#10B981" fill-opacity="0.1" stroke="#10B981" stroke-width="1.5"/>
      <text x="495" y="48" fill="#10B981" font-size="10" font-weight="bold" text-anchor="middle" font-family="monospace">HASIL MATEMATIS</text>
      <text x="495" y="78" fill="#FFFFFF" font-size="20" font-weight="extrabold" text-anchor="middle" font-family="monospace">38 LOT</text>
      <text x="495" y="105" fill="#10B981" font-size="9" text-anchor="middle" font-family="monospace">Pembulatan Kebawah</text>
    </svg>`
  },
  "0_2": {
    code: "MODUL 1.3",
    category: "PSIKOLOGI & DISIPLIN TRADING",
    title: "Mengatasi Bias Emosional: FOMO, Greed & Revenge Trading",
    goldenRule: "Setiap kali emosi mengambil alih terminal, probabilitas kalah meningkat 80%. Trademind mengaktifkan Discipline Guard untuk membekukan eksekusi saat pelanggaran beruntun terjadi.",
    explanation: "Fenomena psikologis paling mematikan bagi trader adalah Revenge Trading: setelah rugi satu kali, timbul rasa marah dan ingin langsung 'membalas' dengan menggandakan ukuran lot (martingale). Algoritma Smart Journal kami mencatat pola ini dan memberi sinyal bahaya sebelum modal Anda habis terbakar.",
    checklist: [
      "Ambil jeda minimal 15 menit setelah posisi ditutup dalam keadaan rugi.",
      "Dilarang menambah ukuran lot lebih dari 2% pasca kekalahan.",
      "Periksa jurnal: Apakah alasan entry Anda karena setup teknikal atau sekadar takut ketinggalan (FOMO)?",
      "Patuhi circuit breaker: 3 loss dalam 1 hari berarti STOP trading untuk hari itu."
    ],
    recommendedSetup: {
      ticker: "BREN",
      side: "SELL",
      entry: 6850,
      sl: 7100,
      tp1: 6400,
      riskPct: 1.0,
      note: "Setup Proteksi Disiplin (Hindari FOMO di Saham Distribusi)"
    },
    diagramSvg: `<svg viewBox="0 0 600 170" class="w-full h-auto max-h-48" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="170" fill="#080B11" rx="8"/>
      <circle cx="90" cy="85" r="32" fill="#111622" stroke="#F59E0B" stroke-width="2"/>
      <text x="90" y="82" fill="#F59E0B" font-size="9" font-weight="bold" text-anchor="middle" font-family="monospace">1. FOMO</text>
      <text x="90" y="96" fill="#94A3B8" font-size="8" text-anchor="middle" font-family="monospace">Buy di Pucuk</text>
      <line x1="125" y1="85" x2="175" y2="85" stroke="#475569" stroke-width="2"/>
      <circle cx="210" cy="85" r="32" fill="#111622" stroke="#F43F5E" stroke-width="2"/>
      <text x="210" y="82" fill="#F43F5E" font-size="9" font-weight="bold" text-anchor="middle" font-family="monospace">2. PANIC</text>
      <text x="210" y="96" fill="#94A3B8" font-size="8" text-anchor="middle" font-family="monospace">Cut Loss Telat</text>
      <line x1="245" y1="85" x2="295" y2="85" stroke="#475569" stroke-width="2"/>
      <circle cx="330" cy="85" r="32" fill="#111622" stroke="#F43F5E" stroke-width="2" stroke-dasharray="3 3"/>
      <text x="330" y="80" fill="#F43F5E" font-size="8" font-weight="bold" text-anchor="middle" font-family="monospace">3. REVENGE</text>
      <text x="330" y="94" fill="#94A3B8" font-size="8" text-anchor="middle" font-family="monospace">Over-Leverage</text>
      <line x1="365" y1="85" x2="415" y2="85" stroke="#475569" stroke-width="2"/>
      <rect x="420" y="45" width="160" height="80" rx="8" fill="#10B981" fill-opacity="0.15" stroke="#10B981" stroke-width="2"/>
      <text x="500" y="73" fill="#10B981" font-size="10" font-weight="extrabold" text-anchor="middle" font-family="monospace">TRADEMIND AI</text>
      <text x="500" y="90" fill="#FFFFFF" font-size="9" font-weight="bold" text-anchor="middle" font-family="monospace">DISCIPLINE GUARD</text>
      <text x="500" y="107" fill="#38BDF8" font-size="8" text-anchor="middle" font-family="monospace">Kunci Terminal 24 Jam</text>
    </svg>`
  },
  "1_0": {
    code: "MODUL 2.1",
    category: "PRICE ACTION & MARKET STRUCTURE",
    title: "Membaca Struktur Pasar: Higher High & Higher Low",
    goldenRule: "Jangan pernah melawan tren utama (Don't fight the trend). Konfirmasi Break of Structure (BOS) adalah syarat mutlak sebelum entry buy.",
    explanation: "Dalam tren naik (uptrend) yang sehat, harga akan terus membentuk puncak yang lebih tinggi (Higher High) dan lembah yang lebih tinggi (Higher Low). Ketika harga menembus level puncak sebelumnya dengan candle impulsif dan volume tinggi, terjadi Break of Structure (BOS). Entry terbaik adalah saat harga melakukan pullback (retracement) ke area Higher Low tersebut.",
    checklist: [
      "Identifikasi swing high dan swing low terakhir pada timeframe 15 menit atau 1 jam.",
      "Tunggu candle close di atas level High sebelumnya (validasi BOS).",
      "Pasang limit order di zona pullback (retest area) bukan mengejar candle hijau panjang.",
      "Letakkan Stop Loss di bawah swing low valid terakhir."
    ],
    recommendedSetup: {
      ticker: "BBCA",
      side: "BUY",
      entry: 9950,
      sl: 9650,
      tp1: 10400,
      riskPct: 2.0,
      note: "Setup BBCA: Pullback HL menuju ekspansi All-Time High"
    },
    diagramSvg: `<svg viewBox="0 0 600 170" class="w-full h-auto max-h-48" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="170" fill="#080B11" rx="8"/>
      <polyline points="50,140 130,70 190,110 300,40 370,85 520,25" fill="none" stroke="#10B981" stroke-width="2.5"/>
      <circle cx="50" cy="140" r="4" fill="#10B981"/>
      <text x="50" y="155" fill="#94A3B8" font-size="9" text-anchor="middle" font-family="monospace">Low</text>
      <circle cx="130" cy="70" r="4" fill="#38BDF8"/>
      <text x="130" y="60" fill="#38BDF8" font-size="9" text-anchor="middle" font-family="monospace">High</text>
      <circle cx="190" cy="110" r="4" fill="#10B981"/>
      <text x="190" y="125" fill="#10B981" font-size="9" font-weight="bold" text-anchor="middle" font-family="monospace">Higher Low (HL)</text>
      <line x1="130" y1="70" x2="300" y2="70" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="4 3"/>
      <text x="215" y="65" fill="#F59E0B" font-size="9" font-family="monospace">BOS (Break of Structure)</text>
      <circle cx="300" cy="40" r="4" fill="#38BDF8"/>
      <text x="300" y="30" fill="#38BDF8" font-size="9" font-weight="bold" text-anchor="middle" font-family="monospace">Higher High (HH)</text>
      <circle cx="370" cy="85" r="5" fill="#10B981" stroke="#FFFFFF" stroke-width="1.5"/>
      <text x="370" y="102" fill="#10B981" font-size="9" font-weight="bold" text-anchor="middle" font-family="monospace">ENTRY ZONE (Pullback)</text>
      <line x1="300" y1="40" x2="520" y2="40" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="4 3"/>
      <text x="410" y="35" fill="#F59E0B" font-size="9" font-family="monospace">BOS Confirm</text>
      <circle cx="520" cy="25" r="4" fill="#10B981"/>
      <text x="520" y="18" fill="#10B981" font-size="9" font-weight="bold" text-anchor="middle" font-family="monospace">Target TP (New HH)</text>
    </svg>`
  },
  "1_1": {
    code: "MODUL 2.2",
    category: "VOLATILITAS & DYNAMIC STOP LOSS",
    title: "Dynamic Stop Loss Berbasis ATR (Bukan Angka Tebak-tebakan)",
    goldenRule: "Stop Loss wajib ditaruh di luar batas volatilitas normal pasar (1.5x - 2.0x ATR) agar tidak menjadi korban wick hunting oleh algoritma pasar.",
    explanation: "Banyak trader memasang SL di angka bulat (seperti persis di bawah swing low atau persis minus 2%). Ini adalah sasaran empuk bandar yang sengaja membuat 'shadow/wick' ke bawah untuk memicu stop-out retail sebelum harga berbalik arah terbang. Dengan menambahkan buffer 1.5 × Average True Range (ATR), posisi Anda terlindungi dari noise pasar.",
    checklist: [
      "Cek nilai indikator ATR (14) pada saham/aset yang dituju.",
      "Tentukan Swing Low terdekat.",
      "Kurangkan Swing Low dengan (1.5 × ATR) untuk menentukan batas SL absolut.",
      "Masukkan level SL ini ke Order Ticket untuk mengunci proteksi modal."
    ],
    recommendedSetup: {
      ticker: "BBRI",
      side: "BUY",
      entry: 3840,
      sl: 3710,
      tp1: 4150,
      riskPct: 2.0,
      note: "SL 3.710 dihitung dari Swing Low 3.750 dikurangi buffer ATR 40 poin"
    },
    diagramSvg: `<svg viewBox="0 0 600 170" class="w-full h-auto max-h-48" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="170" fill="#080B11" rx="8"/>
      <line x1="80" y1="90" x2="520" y2="90" stroke="#64748B" stroke-width="1.5" stroke-dasharray="3 3"/>
      <text x="90" y="82" fill="#94A3B8" font-size="9" font-family="monospace">Swing Low Level (Support Retail: 3.750)</text>
      <line x1="180" y1="40" x2="180" y2="100" stroke="#F43F5E" stroke-width="1.5"/>
      <rect x="174" y="50" width="12" height="35" fill="#F43F5E"/>
      <line x1="240" y1="35" x2="240" y2="120" stroke="#10B981" stroke-width="1.5"/>
      <rect x="234" y="45" width="12" height="25" fill="#10B981"/>
      <circle cx="240" cy="120" r="3" fill="#F43F5E"/>
      <line x1="140" y1="105" x2="330" y2="105" stroke="#F43F5E" stroke-width="2"/>
      <text x="340" y="108" fill="#F43F5E" font-size="9" font-weight="bold" font-family="monospace">✕ SL Retail (Terkutuk/Hunted di 3.740)</text>
      <rect x="140" y="115" width="380" height="35" fill="#10B981" fill-opacity="0.1" stroke="#10B981" stroke-width="1" stroke-dasharray="2 2"/>
      <line x1="140" y1="140" x2="520" y2="140" stroke="#10B981" stroke-width="2"/>
      <text x="340" y="135" fill="#10B981" font-size="9" font-weight="bold" font-family="monospace">✓ Dynamic ATR 1.5x Buffer (SL Trademind: 3.710 Aman)</text>
      <line x1="300" y1="30" x2="300" y2="80" stroke="#10B981" stroke-width="1.5"/>
      <rect x="294" y="30" width="12" height="40" fill="#10B981"/>
    </svg>`
  },
  "1_2": {
    code: "MODUL 2.3",
    category: "SUPPORT & RESISTANCE FRAKTAL",
    title: "Support & Resistance Fraktal: Validasi Pantulan Harga",
    goldenRule: "Support bukan garis tipis 1 titik, melainkan area/zona likuiditas. Pantulan baru terkonfirmasi jika ada rejection wick panjang disertai lonjakan volume transaksi.",
    explanation: "Menggambar support resistance hanya pada satu garis sering berujung false breakout. Fraktal mengidentifikasi titik balik harga dengan membandingkan 5 candle: 1 candle terendah di tengah yang diapit oleh 2 candle lebih tinggi di kiri dan kanannya. Area ini menyimpan kumpulan order institusi yang siap menyerap penawaran jual.",
    checklist: [
      "Identifikasi level horizontal yang telah disentuh minimal 2-3 kali.",
      "Tandai sebagai 'Zona Permintaan' (Demand Zone) selebar 1-2 spread harga.",
      "Tunggu pembentukan candle Pin Bar (buntut bawah panjang) saat menyentuh zona.",
      "Konfirmasi volume: volume beli harus lebih tinggi dari rata-rata 20 candle."
    ],
    recommendedSetup: {
      ticker: "ANTM",
      side: "BUY",
      entry: 1565,
      sl: 1510,
      tp1: 1650,
      riskPct: 2.0,
      note: "Setup ANTM: Pantulan Support Fraktal di 1.540"
    },
    diagramSvg: `<svg viewBox="0 0 600 170" class="w-full h-auto max-h-48" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="170" fill="#080B11" rx="8"/>
      <rect x="60" y="110" width="480" height="35" fill="#10B981" fill-opacity="0.15" stroke="#10B981" stroke-width="1.5"/>
      <text x="75" y="132" fill="#10B981" font-size="10" font-weight="bold" font-family="monospace">ZONA DEMAND FRAKTAL (1.530 - 1.550)</text>
      <line x1="140" y1="60" x2="140" y2="125" stroke="#F43F5E" stroke-width="2"/>
      <circle cx="140" cy="125" r="3" fill="#10B981"/>
      <text x="140" y="55" fill="#94A3B8" font-size="8" text-anchor="middle" font-family="monospace">Sentuhan 1</text>
      <line x1="280" y1="40" x2="280" y2="130" stroke="#F43F5E" stroke-width="2"/>
      <circle cx="280" cy="130" r="3" fill="#10B981"/>
      <text x="280" y="35" fill="#94A3B8" font-size="8" text-anchor="middle" font-family="monospace">Sentuhan 2</text>
      <line x1="420" y1="45" x2="420" y2="135" stroke="#10B981" stroke-width="2"/>
      <rect x="415" y="55" width="10" height="20" fill="#10B981"/>
      <circle cx="420" cy="135" r="4" fill="#38BDF8"/>
      <text x="420" y="40" fill="#38BDF8" font-size="9" font-weight="bold" text-anchor="middle" font-family="monospace">Pin Bar Rejection</text>
      <text x="420" y="158" fill="#10B981" font-size="9" font-weight="bold" text-anchor="middle" font-family="monospace">▲ KONFIRMASI ENTRY</text>
    </svg>`
  },
  "2_0": {
    code: "MODUL 3.1",
    category: "FUNDAMENTAL & FINANCIAL SAFETY NET",
    title: "Rasio Solvabilitas: Mengapa DER Wajib di Bawah 1.0",
    goldenRule: "Jangan pernah menahan saham untuk swing / investasi jika Debt-to-Equity Ratio (DER) di atas 1.0x atau utang berbunga membengkak di era suku bunga tinggi.",
    explanation: "Teknikal yang bagus akan hancur seketika jika perusahaan terancam Penundaan Kewajiban Pembayaran Utang (PKPU) atau kebangkrutan. DER di bawah 1.0x menjamin bahwa setiap Rp 1 utang ditopang oleh lebih dari Rp 1 modal sendiri. Emiten dengan neraca keuangan sehat mampu bertahan dalam krisis ekonomi dan tidak rentan aksi right issue diskon gila-gilaan.",
    checklist: [
      "Buka laporan keuangan kuartal terakhir emiten di IDX.",
      "Bagi Total Liabilitas Berbunga dengan Total Ekuitas.",
      "Jika DER > 1.2x (selain sektor perbankan), coret dari daftar watchlist swing.",
      "Periksa Cash Ratio: minimal memiliki kas lancar untuk menutup utang jangka pendek."
    ],
    recommendedSetup: {
      ticker: "BBCA",
      side: "BUY",
      entry: 9950,
      sl: 9650,
      tp1: 10400,
      riskPct: 2.0,
      note: "BBCA: Rasio CAR 28% & Kualitas Aset Terkuat di ASEAN"
    },
    diagramSvg: `<svg viewBox="0 0 600 170" class="w-full h-auto max-h-48" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="170" fill="#080B11" rx="8"/>
      <rect x="40" y="25" width="220" height="120" rx="8" fill="#111622" stroke="#10B981" stroke-width="1.5"/>
      <text x="150" y="45" fill="#10B981" font-size="11" font-weight="bold" text-anchor="middle" font-family="monospace">EMITEN SEHAT (DER 0.45x)</text>
      <rect x="60" y="60" width="80" height="65" fill="#10B981" rx="4"/>
      <text x="100" y="97" fill="#000" font-size="10" font-weight="bold" text-anchor="middle" font-family="monospace">Ekuitas 69%</text>
      <rect x="150" y="60" width="80" height="30" fill="#F59E0B" rx="4"/>
      <text x="190" y="79" fill="#000" font-size="9" font-weight="bold" text-anchor="middle" font-family="monospace">Utang 31%</text>
      <rect x="340" y="25" width="220" height="120" rx="8" fill="#111622" stroke="#F43F5E" stroke-width="1.5"/>
      <text x="450" y="45" fill="#F43F5E" font-size="11" font-weight="bold" text-anchor="middle" font-family="monospace">EMITEN BERBAHAYA (DER 3.8x)</text>
      <rect x="360" y="60" width="60" height="25" fill="#10B981" rx="4"/>
      <text x="390" y="76" fill="#000" font-size="8" font-weight="bold" text-anchor="middle" font-family="monospace">Ekuitas 20%</text>
      <rect x="430" y="60" width="110" height="65" fill="#F43F5E" rx="4"/>
      <text x="485" y="97" fill="#FFF" font-size="10" font-weight="bold" text-anchor="middle" font-family="monospace">Utang 80%</text>
      <text x="450" y="140" fill="#F43F5E" font-size="9" text-anchor="middle" font-family="monospace">⚠️ Resiko Gagal Bayar & Suspensi</text>
    </svg>`
  },
  "2_1": {
    code: "MODUL 3.2",
    category: "PROFITABILITAS & NILAI INTRINSIK",
    title: "Return on Equity (ROE) & Pertumbuhan Laba Bersih",
    goldenRule: "Hanya alokasikan modal pada bisnis yang mampu mencetak ROE di atas 15% secara konsisten selama 3 tahun berturut-turut.",
    explanation: "ROE mengukur seberapa efisien manajemen perusahaan memutar uang pemegang saham untuk menghasilkan laba bersih. Perusahaan dengan ROE tinggi memiliki 'economic moat' (keunggulan bersaing berkelanjutan) yang mampu melawan inflasi dan menaikkan harga jual tanpa kehilangan pelanggan.",
    checklist: [
      "Periksa tren ROE dalam 3-5 tahun terakhir.",
      "Pastikan ROE tidak semu (bukan berasal dari lonjakan utang ekstrim).",
      "Hitung rasio Price to Earnings (PER) relatif terhadap pertumbuhan laba (PEG < 1.0).",
      "Prioritaskan market leader di sektornya."
    ],
    recommendedSetup: {
      ticker: "BBRI",
      side: "BUY",
      entry: 3840,
      sl: 3710,
      tp1: 4150,
      riskPct: 2.0,
      note: "BBRI: ROE 19.8% dengan dividen yield solid ~6.5%"
    },
    diagramSvg: `<svg viewBox="0 0 600 170" class="w-full h-auto max-h-48" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="170" fill="#080B11" rx="8"/>
      <rect x="40" y="55" width="140" height="60" rx="8" fill="#111622" stroke="#38BDF8" stroke-width="1.5"/>
      <text x="110" y="80" fill="#94A3B8" font-size="9" text-anchor="middle" font-family="monospace">NET PROFIT MARGIN</text>
      <text x="110" y="100" fill="#38BDF8" font-size="13" font-weight="bold" text-anchor="middle" font-family="monospace">18.5%</text>
      <text x="200" y="90" fill="#64748B" font-size="16" font-family="monospace">×</text>
      <rect x="220" y="55" width="140" height="60" rx="8" fill="#111622" stroke="#F59E0B" stroke-width="1.5"/>
      <text x="290" y="80" fill="#94A3B8" font-size="9" text-anchor="middle" font-family="monospace">ASSET TURNOVER</text>
      <text x="290" y="100" fill="#F59E0B" font-size="13" font-weight="bold" text-anchor="middle" font-family="monospace">1.15x</text>
      <text x="380" y="90" fill="#64748B" font-size="16" font-family="monospace">=</text>
      <rect x="400" y="45" width="160" height="80" rx="8" fill="#10B981" fill-opacity="0.15" stroke="#10B981" stroke-width="2"/>
      <text x="480" y="75" fill="#10B981" font-size="10" font-weight="bold" text-anchor="middle" font-family="monospace">RETURN ON EQUITY (ROE)</text>
      <text x="480" y="105" fill="#FFFFFF" font-size="20" font-weight="extrabold" text-anchor="middle" font-family="monospace">21.2%</text>
    </svg>`
  },
  "2_2": {
    code: "MODUL 3.3",
    category: "DETEKSI FRAUD & SAHAM GORENGAN",
    title: "Menghindari Saham Gorengan dengan Arus Kas Operasional",
    goldenRule: "Laba bersih akuntansi bisa direkayasa dengan piutang fiktif, tetapi Arus Kas Bersih Operasi (CFO) tidak bisa berbohong.",
    explanation: "Banyak saham third-liner yang mencatat kenaikan laba ratusan persen namun sahamnya tiba-tiba anjlok dan digembok bursa. Modus paling umum adalah mencatat penjualan agresif secara kredit (piutang usaha membengkak) tanpa ada uang tunai yang masuk. Jika Laba Bersih positif namun CFO terus-menerus minus, itu adalah sinyal bahaya (red flag).",
    checklist: [
      "Bandingkan Net Income dengan Cash Flow from Operating Activities (CFO).",
      "Waspadai rasio Piutang Usaha terhadap Pendapatan yang melonjak drastis.",
      "Periksa apakah ada transaksi afiliasi janggal dengan entitas pengendali.",
      "Tolak membeli saham dengan auditor yang sering berganti tiap tahun."
    ],
    recommendedSetup: {
      ticker: "ANTM",
      side: "BUY",
      entry: 1565,
      sl: 1510,
      tp1: 1650,
      riskPct: 2.0,
      note: "ANTM: Arus Kas Operasi Kuat Didukung Ekspor Komoditas"
    },
    diagramSvg: `<svg viewBox="0 0 600 170" class="w-full h-auto max-h-48" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="170" fill="#080B11" rx="8"/>
      <line x1="80" y1="90" x2="520" y2="90" stroke="#334155" stroke-width="1.5"/>
      <text x="60" y="94" fill="#64748B" font-size="10" font-family="monospace">0</text>
      <polyline points="100,110 200,95 300,70 400,45 500,30" fill="none" stroke="#F59E0B" stroke-width="2.5"/>
      <text x="505" y="32" fill="#F59E0B" font-size="9" font-family="monospace">Laba Bersih Naik (Palsu)</text>
      <polyline points="100,85 200,100 300,120 400,140 500,155" fill="none" stroke="#F43F5E" stroke-width="2.5"/>
      <text x="505" y="158" fill="#F43F5E" font-size="9" font-family="monospace">Arus Kas (CFO) Defisit!</text>
      <rect x="220" y="80" width="160" height="45" rx="6" fill="#F43F5E" fill-opacity="0.2" stroke="#F43F5E" stroke-width="1.5"/>
      <text x="300" y="100" fill="#F43F5E" font-size="10" font-weight="bold" text-anchor="middle" font-family="monospace">DIVERGENSI ANCAMAN</text>
      <text x="300" y="115" fill="#FFF" font-size="8" text-anchor="middle" font-family="monospace">Red Flag: Manipulasi Piutang</text>
    </svg>`
  },
  "3_0": {
    code: "MODUL 4.1",
    category: "BANDARMOLOGI BEI POST-MARKET",
    title: "Aturan Post-Market BEI: Membaca Net Buyer & Net Seller",
    goldenRule: "Sejak Desember 2021, BEI menutup kode broker saat jam bursa (blind tape). Kode broker hanya dibuka saat sesi Post-Market 16:00 WIB. Disinilah rahasia akumulasi terkuak.",
    explanation: "Karena selama sesi trading kode broker disamarkan, trader retail yang FOMO sering terkecoh oleh bid tebal palsu (fake bid). Namun saat jam 16:00 WIB, bursa merilis data agregat: siapa broker yang benar-benar memborong barang dan siapa yang melakukan distribusi. Trademind otomatis membedah data ini untuk mendeteksi keselarasan bandar.",
    checklist: [
      "Buka tab Broker Summary pada Trademind tepat setelah jam 16:00 WIB.",
      "Identifikasi 3 broker teratas (Top Buyer) dan nilai net buy-nya.",
      "Bedakan tipe broker: Asing/Institusi (AK, BK, CC, ZP) vs Retail (YP, PD, XC).",
      "Kondisi ideal: Broker Institusi memborong sementara broker retail panik menjual."
    ],
    recommendedSetup: {
      ticker: "BBRI",
      side: "BUY",
      entry: 3840,
      sl: 3710,
      tp1: 4150,
      riskPct: 2.0,
      note: "BBRI: AK & BK Akumulasi Rp 84.2 Miliar dari Retail YP"
    },
    diagramSvg: `<svg viewBox="0 0 600 170" class="w-full h-auto max-h-48" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="170" fill="#080B11" rx="8"/>
      <line x1="60" y1="85" x2="540" y2="85" stroke="#334155" stroke-width="2"/>
      <circle cx="120" cy="85" r="8" fill="#F43F5E"/>
      <text x="120" y="65" fill="#94A3B8" font-size="9" text-anchor="middle" font-family="monospace">09:00 - 15:50 WIB</text>
      <text x="120" y="110" fill="#F43F5E" font-size="9" font-weight="bold" text-anchor="middle" font-family="monospace">BLIND TAPE</text>
      <text x="120" y="125" fill="#64748B" font-size="8" text-anchor="middle" font-family="monospace">Kode Broker Ditutup</text>
      <circle cx="300" cy="85" r="8" fill="#F59E0B"/>
      <text x="300" y="65" fill="#94A3B8" font-size="9" text-anchor="middle" font-family="monospace">16:00 WIB</text>
      <text x="300" y="110" fill="#F59E0B" font-size="9" font-weight="bold" text-anchor="middle" font-family="monospace">CLOSING CROSS</text>
      <text x="300" y="125" fill="#64748B" font-size="8" text-anchor="middle" font-family="monospace">Matching Terakhir</text>
      <circle cx="480" cy="85" r="10" fill="#10B981"/>
      <text x="480" y="60" fill="#10B981" font-size="10" font-weight="bold" text-anchor="middle" font-family="monospace">16:15 WIB</text>
      <text x="480" y="110" fill="#10B981" font-size="10" font-weight="extrabold" text-anchor="middle" font-family="monospace">BROKER SUMMARY</text>
      <text x="480" y="125" fill="#38BDF8" font-size="8" text-anchor="middle" font-family="monospace">Trademind AI Inflow Parsing</text>
    </svg>`
  },
  "3_1": {
    code: "MODUL 4.2",
    category: "BANDARMOLOGI MATRIX & VWAP",
    title: "Menghitung Konsentrasi Top 3 Broker (BCR3) & Modal VWAP",
    goldenRule: "Bandar tidak bisa membohongi nilai uang yang telah mereka keluarkan. Garis Average Price (VWAP) dari Top 3 Buyer adalah benteng support terkuat.",
    explanation: "Formula BCR3 (Broker Concentration Ratio 3) mengukur monopoli barang: BCR3 = (Volume Beli Top 3 Broker) / (Total Volume Pasar). Jika nilainya di atas 50%, saham tersebut sedang dikendalikan ketat oleh bandar (Akumulasi Masif). Level harga rata-rata mereka (VWAP) menjadi harga modal bandar—selama harga berada di dekat VWAP bandar, risiko Anda sangat kecil.",
    checklist: [
      "Hitung persentase konsentrasi BCR3 (wajib > 50% untuk kategori akumulasi).",
      "Catat harga VWAP Top 3 Buyer (e.g. BBRI di 3.820).",
      "Bandingkan harga pasar saat ini dengan modal bandar: Jangan beli jika harga sudah terbang >10% di atas VWAP bandar.",
      "Gunakan VWAP bandar sebagai jangkar konfirmasi pembalikan arah."
    ],
    recommendedSetup: {
      ticker: "BBRI",
      side: "BUY",
      entry: 3840,
      sl: 3710,
      tp1: 4150,
      riskPct: 2.0,
      note: "BBRI: BCR3 54.2% (Akumulasi Masif) dengan Modal VWAP 3.820"
    },
    diagramSvg: `<svg viewBox="0 0 600 170" class="w-full h-auto max-h-48" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="170" fill="#080B11" rx="8"/>
      <rect x="60" y="40" width="300" height="22" rx="4" fill="#10B981"/>
      <text x="70" y="55" fill="#000" font-size="10" font-weight="bold" font-family="monospace">AK (UBS) + BK (JPMorgan) + CC: 54.2% Konsentrasi</text>
      <rect x="60" y="70" width="160" height="22" rx="4" fill="#334155"/>
      <text x="70" y="85" fill="#FFF" font-size="9" font-family="monospace">Broker Lainnya: 45.8%</text>
      <line x1="60" y1="125" x2="540" y2="125" stroke="#F59E0B" stroke-width="2"/>
      <circle cx="420" cy="125" r="5" fill="#F59E0B"/>
      <text x="430" y="120" fill="#F59E0B" font-size="10" font-weight="bold" font-family="monospace">VWAP Modal Bandar: Rp 3.820</text>
      <text x="430" y="140" fill="#94A3B8" font-size="9" font-family="monospace">Harga Pasar Saat Ini: Rp 3.840 (Safe Entry)</text>
    </svg>`
  },
  "3_2": {
    code: "MODUL 4.3",
    category: "SIKLUS WYCKOFF & BANDARMOLOGI",
    title: "Deteksi Akumulasi Diam-diam vs Distribusi Agresif",
    goldenRule: "Beli saat bandar melakukan akumulasi diam-diam (Volume spike saat harga sideways), dan SEGERA keluar saat bandar melakukan distribusi di pucuk.",
    explanation: "Bandar mengumpulkan barang ketika publik sedang bosan atau pesimis (Fase Akumulasi Wyckoff). Mereka menjaga agar harga tidak naik terlalu cepat dengan memakan penawaran secara bertahap. Ketika barang sudah terkumpul 80%, mereka menyebarkan berita bagus (good news) dan mendorong harga terbang tinggi (Markup) untuk mendistribusikan barang ke retail yang terkena FOMO.",
    checklist: [
      "Perhatikan kondisi sideways panjang dengan penurunan volatilitas (volatility compression).",
      "Cari candle 'Spring' / Shakeout yang menjebol support sesaat lalu ditarik cepat.",
      "Pastikan Top Buyer didominasi broker institusi asing.",
      "Jika harga membuat All-Time High namun Top Seller adalah broker asing, waspadai distribusi."
    ],
    recommendedSetup: {
      ticker: "BBRI",
      side: "BUY",
      entry: 3840,
      sl: 3710,
      tp1: 4150,
      riskPct: 2.0,
      note: "BBRI: Selesai Fase Spring Wyckoff & Memulai Tahap Markup"
    },
    diagramSvg: `<svg viewBox="0 0 600 170" class="w-full h-auto max-h-48" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="170" fill="#080B11" rx="8"/>
      <polyline points="40,40 100,120 160,85 220,115 260,140 320,80 400,60 540,25" fill="none" stroke="#10B981" stroke-width="2.5"/>
      <rect x="90" y="65" width="180" height="80" fill="#38BDF8" fill-opacity="0.08" stroke="#38BDF8" stroke-dasharray="2 2"/>
      <text x="180" y="80" fill="#38BDF8" font-size="9" text-anchor="middle" font-family="monospace">FASE AKUMULASI (Quiet)</text>
      <circle cx="260" cy="140" r="4" fill="#F43F5E"/>
      <text x="260" y="155" fill="#F43F5E" font-size="9" font-weight="bold" text-anchor="middle" font-family="monospace">Spring / Shakeout</text>
      <text x="470" y="45" fill="#10B981" font-size="10" font-weight="extrabold" text-anchor="middle" font-family="monospace">FASE MARKUP ▲</text>
      <text x="470" y="60" fill="#94A3B8" font-size="8" text-anchor="middle" font-family="monospace">Ekspansi Harga Institusi</text>
    </svg>`
  },
  "3_3": {
    code: "MODUL 4.4",
    category: "SMART MONEY CONCEPTS (SMC) & FOREX/GOLD",
    title: "SMC Forex: Liquidity Sweeps, Order Blocks & Imbalance",
    goldenRule: "Pasar keuangan global bergerak dari likuiditas ke likuiditas. Tunggu 'Judas Swing' menyapu High/Low sesi Asia sebelum mencari konfirmasi masuk di Order Block.",
    explanation: "Algoritma perbankan tier-1 (JPMorgan, Citibank) butuh miliaran dollar likuiditas untuk mengeksekusi posisi mereka. Likuiditas tersebut tersimpan tepat di atas resistance dan di bawah support retail (Stop Loss hunting pool). Setelah menyapu level tersebut (Liquidity Sweep) dan terjadi Market Structure Shift (MSS), harga akan kembali memitigasi Order Block institusi sebelum ekspansi besar.",
    checklist: [
      "Tandai High dan Low dari Sesi Asia (07:00 - 13:00 WIB).",
      "Tunggu candle wick menembus batas sesi Asia di pembukaan London/New York.",
      "Cari Market Structure Shift (MSS) pada timeframe 5 menit.",
      "Pasang limit order di Fair Value Gap (FVG) atau Order Block (OB) yang belum termitigasi."
    ],
    recommendedSetup: {
      ticker: "XAUUSD",
      side: "BUY",
      entry: 2648.5,
      sl: 2638.0,
      tp1: 2668.0,
      riskPct: 2.0,
      note: "XAU/USD: Asian Low Swept di $2,638, Menuju Buy-Side Liquidity $2,668"
    },
    diagramSvg: `<svg viewBox="0 0 600 170" class="w-full h-auto max-h-48" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="170" fill="#080B11" rx="8"/>
      <rect x="60" y="55" width="160" height="60" fill="#F59E0B" fill-opacity="0.1" stroke="#F59E0B" stroke-dasharray="3 3"/>
      <text x="140" y="70" fill="#F59E0B" font-size="9" text-anchor="middle" font-family="monospace">ASIAN SESSION RANGE</text>
      <line x1="60" y1="115" x2="280" y2="115" stroke="#F43F5E" stroke-width="1.5" stroke-dasharray="2 2"/>
      <text x="140" y="130" fill="#F43F5E" font-size="8" text-anchor="middle" font-family="monospace">Sell-Side Liquidity (SSL)</text>
      <path d="M 200,80 L 250,140 L 290,45 L 360,70 L 520,25" fill="none" stroke="#10B981" stroke-width="2.5"/>
      <circle cx="250" cy="140" r="4" fill="#F43F5E"/>
      <text x="250" y="155" fill="#F43F5E" font-size="9" font-weight="bold" text-anchor="middle" font-family="monospace">LIQUIDITY SWEEP</text>
      <rect x="330" y="65" width="50" height="25" fill="#38BDF8" fill-opacity="0.25" stroke="#38BDF8"/>
      <text x="355" y="60" fill="#38BDF8" font-size="8" text-anchor="middle" font-family="monospace">Bullish OB</text>
      <text x="520" y="18" fill="#10B981" font-size="10" font-weight="extrabold" text-anchor="middle" font-family="monospace">EXPANSION ▲</text>
    </svg>`
  }
};

function openLessonDetail(modId, lessonIdx) {
  currentActiveLessonKey = `${modId}_${lessonIdx}`;
  const lesson = LESSON_DATA[currentActiveLessonKey] || LESSON_DATA["0_0"];
  const modData = ACADEMY_MODULES[modId];
  const lessonItem = modData ? modData.lessons[lessonIdx] : null;

  const codeEl = document.getElementById("lessonModalCode");
  const catEl = document.getElementById("lessonModalCategory");
  const titleEl = document.getElementById("lessonModalTitle");
  const ruleEl = document.getElementById("lessonGoldenRule");
  const expEl = document.getElementById("lessonExplanation");
  const diagContainer = document.getElementById("lessonDiagramContainer");
  const checkContainer = document.getElementById("lessonChecklist");

  if (codeEl) codeEl.innerText = lesson.code;
  if (catEl) catEl.innerText = lesson.category;
  if (titleEl) titleEl.innerText = lesson.title;
  if (ruleEl) ruleEl.innerText = lesson.goldenRule;
  if (expEl) expEl.innerText = lesson.explanation;

  if (diagContainer) diagContainer.innerHTML = lesson.diagramSvg;

  if (checkContainer) {
    checkContainer.innerHTML = lesson.checklist.map(item => `
      <li class="flex items-start space-x-2">
        <span class="text-tradeGreen font-bold mt-0.5">•</span>
        <span class="text-slate-300 leading-relaxed">${item}</span>
      </li>
    `).join("");
  }

  const isDone = lessonItem ? lessonItem.done : false;
  const btnToggle = document.getElementById("btnToggleCompleteText");
  if (btnToggle) {
    btnToggle.innerText = isDone ? "Tandai Belum Selesai" : "Tandai Selesai";
  }

  const modal = document.getElementById("lessonDetailModal");
  if (modal) modal.classList.remove("hidden");

  lucide.createIcons();
}

function closeLessonModal() {
  const modal = document.getElementById("lessonDetailModal");
  if (modal) modal.classList.add("hidden");
}

function toggleCurrentLessonDone() {
  const parts = currentActiveLessonKey.split("_");
  const modId = parseInt(parts[0]);
  const lessonIdx = parseInt(parts[1]);

  if (ACADEMY_MODULES[modId] && ACADEMY_MODULES[modId].lessons[lessonIdx]) {
    const l = ACADEMY_MODULES[modId].lessons[lessonIdx];
    l.done = !l.done;

    const total = ACADEMY_MODULES[modId].lessons.length;
    const doneCount = ACADEMY_MODULES[modId].lessons.filter(item => item.done).length;
    ACADEMY_MODULES[modId].progress = Math.round((doneCount / total) * 100);

    renderFullAcademy();

    const btnToggle = document.getElementById("btnToggleCompleteText");
    if (btnToggle) {
      btnToggle.innerText = l.done ? "Tandai Belum Selesai" : "Tandai Selesai";
    }

    showToast(l.done ? `Pelajaran ${l.num} ditandai selesai! Progres modul diupdate.` : `Status pelajaran ${l.num} direset.`);
  }
}

function practiceCurrentLessonInDemo() {
  const lesson = LESSON_DATA[currentActiveLessonKey] || LESSON_DATA["0_0"];
  const setup = lesson.recommendedSetup;

  closeLessonModal();
  switchView("terminal");

  if (INSTRUMENTS[setup.ticker]) {
    onSelectInstrument(setup.ticker);
    const select = document.getElementById("mainTickerSelect");
    if (select) select.value = setup.ticker;
  }

  const entryInput = document.getElementById("ticketEntry");
  const slInput = document.getElementById("ticketSL");
  const tpInput = document.getElementById("ticketTP");
  const riskSlider = document.getElementById("orderRiskRange");

  if (entryInput) entryInput.value = setup.entry;
  if (slInput) slInput.value = setup.sl;
  if (tpInput) tpInput.value = setup.tp1;
  if (riskSlider) riskSlider.value = setup.riskPct;

  setOrderSide(setup.side);
  recalcOrderTicket();

  if (window.innerWidth < 1024) {
    openRightPanel('order');
  }

  const orderTicketBox = document.getElementById("rightContentOrder");
  if (orderTicketBox) {
    orderTicketBox.classList.add("ring-2", "ring-tradeGreen", "rounded-xl");
    setTimeout(() => {
      orderTicketBox.classList.remove("ring-2", "ring-tradeGreen", "rounded-xl");
    }, 2500);
  }

  showToast(`Mode Cek Ombak Aktif: Setup ${setup.ticker} siap diuji di Akun Demo!`);
}

function resetDemoBalance() {
  userEquity = 25000000;
  updateEquityDisplay();
  showToast("Saldo Akun Demo berhasil di-reset ke Rp 25.000.000!");
}

function updateEquityDisplay() {
  const el = document.getElementById("userEquityDisplay");
  if (el) {
    el.innerText = `Rp ${userEquity.toLocaleString("id-ID")}`;
  }
  const slider = document.getElementById("orderRiskRange");
  if (slider) onRiskSliderChange(slider.value);
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
  renderFullJournal();
  renderFullRadar();
  renderFullAcademy();
  lucide.createIcons();
});
