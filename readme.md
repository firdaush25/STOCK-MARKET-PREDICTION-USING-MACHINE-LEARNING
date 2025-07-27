# 🧠 Stock Price Prediction with LSTM

A real-world time series forecasting system that predicts closing stock prices for multiple companies using deep learning. Built with Python, TensorFlow, and integrated into a live dashboard for intuitive interaction and performance insights.

[![Live Dashboard](https://img.shields.io/badge/Live%20Dashboard-Click%20Here-00C853?style=for-the-badge&logo=google-chrome)](https://stockmarketpredictionusinglstm.tiiny.site)

---

🔒 The backend code and model details aren't included here. If you're interested in the technical internals or want a walkthrough of the full project, feel free to reach out!

---

⚠️ Note: All backend scripts and model implementations have been excluded from this public repository. To request access or view the complete model architecture and codebase, please contact the author directly.

---
## 📁 Project Structure

- `alldata.csv` — Combined OHLCV + technical indicators for all selected stocks
- `multi_stock_lstm_model.h5` — Trained LSTM model
- `predictions/` — CSV files containing per-ticker predictions
- `charts/` — PNGs showing predicted vs actual closing prices
- `metrics.json` — Accuracy stats for each company
- `dashboard/` — Live frontend HTML+JS (now hosted)

---

## 📊 Key Features

- 🔄 Sequential prediction using a sliding window (SEQ_LEN = 60)
- 📉 LSTM-based architecture with high-fit metrics
- 🧮 Evaluation metrics: MAE, MSE, RMSE, R², and percentage accuracy
- 📈 Chart generation for each ticker using Matplotlib
- 🌐 Responsive dashboard: dropdown selection, stats, charts

---

## 🏅 Accuracy Leaderboard

| Rank | Ticker    | MAE   | MSE     | RMSE  | R²     | Accuracy (%) |
|------|-----------|--------|---------|--------|--------|----------------|
| 🥇 1 | **WALMART** | **1.14** | **2.90**  | **1.70** | **0.9963** | **98.86**      |
| 🥈 2 | **GOOGLE**  | **20.11**| **784.67**| **28.01**| **0.9979** | **98.35**      |
| 🥉 3 | **AMAZON**  | **34.43**| **2403.47**| **49.03**| **0.9976** | **97.83**      |
| 4    | NETFLIX    | 6.70   | 96.50   | 9.82   | 0.9965 | 97.51         |
| 5    | UBER       | 1.27   | 2.83    | 1.68   | 0.9704 | 96.64         |
| 6    | ZOOM       | 8.83   | 217.47  | 14.75  | 0.9876 | 96.46         |
| 7    | TSLA       | 5.74   | 203.08  | 14.25  | 0.9968 | 92.92         |
| 8    | MSFT       | 0.93   | 2.66    | 1.63   | 0.9993 | 75.62         |
| 9    | AAPL       | 0.37   | 0.65    | 0.81   | 0.9992 | 36.58         |

---

## 🚀 Getting Started

1. Clone this repository
2. Place `Raw_Data.csv` and `multi_stock_lstm_model.h5` in the root directory
3. Run the main prediction script (`predict_and_export`)
4. Evaluate performance via `evaluate_prediction_accuracy()`
5. 👉 View it live: [https://stockmarketpredictionusinglstm.tiiny.site](https://stockmarketpredictionusinglstm.tiiny.site)

---


## 🧑‍💻 Author

**Firdaush Alam**  
Python Developer Intern at BroskiesHub  
Computer Science Engineering student at SECAB Institute of Engineering & Technology

- 💼 [GitHub Profile](https://github.com/firdaushalam)
- 📫 Contact: firdaushalam.dev@gmail.com
- 🛠️ Skills: Python, Pillow, TensorFlow, Matplotlib, LaTeX, Markdown, Modular Code Design, CLI Tools, ML/Dashboard Integration

---

## 🔧 Tech Stack

- Python, NumPy, Pandas
- TensorFlow / Keras (LSTM)
- Matplotlib, Plotly
- HTML, JavaScript, Bootstrap
- Chart.js for dashboard graphs
- CSV + JSON based data pipeline

---

## 📜 License

This project is open-sourced for educational and portfolio use. For any commercial reuse, please contact the author directly.
