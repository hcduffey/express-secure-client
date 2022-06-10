import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './PieChart.css'

ChartJS.register(ArcElement, Tooltip, Legend);


function PieChart(props) {
  const {scanList} = props;
  
  const getData = () => {
    const labels = []
    const data = []
  
    scanList.forEach((scan) => { 
      
      scan.vulnerabilities.forEach((vulnerability) => { 
        if(labels.length === 0) {
          labels.push(vulnerability.category)
          data.push(1);
        }
        else {
          if(labels.includes(vulnerability.category)) {
            let index = labels.findIndex((element) => element === vulnerability.category)
            data[index] += 1;
          }
          else if(labels.length === 6) {
            data[5] += 1;
          }
          else if(labels.length === 5) {
            labels.push("Other")
            data.push(1);
          }
          else {
            labels.push(vulnerability.category)
            data.push(1);
          }
        }
      })

    })
  
    return({labels: labels, data: data});
  }

  const setData = getData();
  const data = {
    labels: setData.labels,
    datasets: [
      {
        label: 'Vulnerability Categories',
        data: setData.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    scanList.length > 0 && 
    <div className="card">
      <header className="card-header">
        <p className="card-header-title is-centered">
          Vulnerabilities By Category
        </p>
      </header>
      <div className="card-image">
        <figure className="chart-figure">
          <Pie data={data} />
        </figure>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">{scanList[0].name.split('-').slice(0,-1).join(' ') + " Scans"}</div>
      </footer>
    </div>
  );
}

export default PieChart;