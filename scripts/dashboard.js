function renderChart() {
    const ticker = document.getElementById("tickerSelect").value;
    const csvPath = `assets/data/${ticker}_predictions.csv`;

    Plotly.d3.csv(csvPath, function (err, rows) {
        const dates = rows.map(r => r.Date);
        const actual = rows.map(r => +r.Actual_Close);
        const predicted = rows.map(r => +r.Predicted_Close);

        const trace1 = { x: dates, y: actual, name: 'Actual', type: 'scatter' };
        const trace2 = { x: dates, y: predicted, name: 'Predicted', type: 'scatter' };

        Plotly.newPlot('chartContainer', [trace1, trace2], {
            title: `${ticker} Price Prediction`,
            xaxis: { title: 'Date' },
            yaxis: { title: 'Close Price' }
        });
    });

    fetch(`assets/data/metrics.json`)
        .then(res => res.json())
        .then(data => {
            const m = data[ticker];
            document.getElementById("metricsContainer").innerHTML =
                `<h3>Metrics for ${ticker}</h3>
         <p>MAE: ${m.mae.toFixed(2)} | RMSE: ${m.rmse.toFixed(2)} | R²: ${m.r2.toFixed(3)} | Accuracy: ${m.acc_pct.toFixed(2)}%</p>`;
        });
}
function loadTickers() {
    fetch('assets/data/')
        .then(() => {
            const tickers = []// Can be generated dynamically if served via backend
            const dropdown = document.getElementById("tickerSelect");

            tickers.forEach(t => {
                const option = document.createElement("option");
                option.value = t;
                option.text = t;
                dropdown.appendChild(option);
            });

            renderChart(tickers[0]);
        });
}

window.onload = loadTickers;

function renderMetricsTable() {
    fetch("assets/data/metrics.json")
        .then(res => res.json())
        .then(data => {
            let html = `<table><tr><th>Ticker</th><th>MAE</th><th>RMSE</th><th>R²</th><th>Accuracy (%)</th></tr>`;
            for (const ticker in data) {
                const m = data[ticker];
                html += `<tr>
          <td>${ticker}</td>
          <td>${m.mae.toFixed(2)}</td>
          <td>${m.rmse.toFixed(2)}</td>
          <td>${m.r2.toFixed(3)}</td>
          <td>${m.acc_pct.toFixed(2)}</td>
        </tr>`;
            }
            html += `</table>`;
            document.getElementById("metricsSummary").innerHTML = html;
        });
}