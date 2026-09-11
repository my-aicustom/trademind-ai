# TRADEMIND AI — Autonomous Financial Intelligence & Trading Terminal

> **Client Demo Prototype (Saham IDX & Forex/Gold)**  
> Engineered by **AI Council** (Financial Engineer, Lead Systems Architect, Commercial Director, & UI/UX Director)

---

## ⚡ Live Features & Capabilities

1. **Dual Market Intelligence (Saham BEI & Global Forex/Gold)**:
   - **Saham IDX**: Post-December 2021 BEI microstructure rules, Broker Summary (Top 3 Broker Concentration Ratio - BCR3), Bandar VWAP, Net Foreign Flow tracking.
   - **Forex & Commodities (XAU/USD, EUR/USD, GBP/JPY)**: Smart Money Concepts (SMC), Liquidity Sweeps, Fair Value Gaps (FVG), London/NY Session Killzones.
2. **Actionable Sinyal Entry & Exit**:
   - Area Beli/Jual, Stop Loss Dinamis ATR / Swing Low, Multi-Target Take Profit (TP1 2R Break-Even Runner, TP2 Trailing).
   - Penjelasan logika AI berbasis data deterministik matematis (zero hallucination).
3. **Pre-Trade Risk Auditor / Decision Copilot**:
   - Menjawab pertanyaan pengguna: *"Saya mau masuk di harga ini, gimana menurut AI?"*
   - Menghitung ukuran lot optimal otomatis berdasarkan modal dan aturan emas Fixed Fractional Risk 1-2% & Kelly Criterion.
   - Memberikan vonis tegas: **APPROVED** atau **HARD VETO (REJECT)** jika melanggar Risk-to-Reward atau melawan arah bandar.
4. **Smart Behavioral Journal**:
   - Pencatatan otomatis transaksi, perhitungan Win Rate, Profit Factor, dan Average R:R.
   - **AI Behavioral Post-Mortem**: Mendeteksi pola kesalahan emosional (Exit prematur karena takut profit hilang, Revenge trading, Overtrading).
5. **Adaptive LMS & No-Code Headless CMS**:
   - 4 Modul lengkap dari nol: Mindset & Risk Management, Price Action & ATR, Fundamental & Safety Net, hingga Masterclass Bandarmologi & SMC.
   - Dilengkapi panel edit materi langsung (CMS Admin) membuktikan klien memegang kendali 100% tanpa perlu bergantung pada developer.

---

## 🚀 Deployment & Tech Stack

- **Frontend**: Pure Modern ES6, TradingView Lightweight Charts, Tailwind CSS, Lucide Icons.
- **Backend Architecture**: Decoupled Event-Driven Microstructure Engine (Go/Python) + Vector Database (pgvector / Qdrant) for RAG LMS.
- **Edge Platform**: Vercel Global Edge Network (<150ms TTFB).

---
*Created strictly under Disk C Preservation Protocol in `D:\code\trademind-ai`.*
