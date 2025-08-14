import React, { useState, useEffect, useCallback } from 'react';
import { Line } from 'react-chartjs-2';

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Évolution des votes par candidat',
    },
    legend: {
      position: "top",
      display: true,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      ticks: {
        fontColor: "#c8ccdb",
      },
      barPercentage: 0.7,
      display: true,
      grid: {
        borderColor: 'rgba(119, 119, 142, 0.2)',
      },
    },
    y: {
      display: true,
      grid: {
        borderColor: 'rgba(119, 119, 142, 0.2)',
      },
      scaleLabel: {
        display: true,
        labelString: 'Nombre de votes',
        fontColor: '#666',
      },
    },
  },
  interaction: {
    intersect: false,
  },
};

const ProjectBudget = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    const colors = ['#1A9F5C', '#FCEB37', '#366CAC'];
    let colorIndex = 0;
    function getNextColor() {
      const color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length; // Cycles through 0, 1, 2, 0, 1, 2...
      return color;
    }
    
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('http://localhost:5000/candidates/stats/perhours');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const rawData = await response.json();
      
      // Check if rawData exists and is an array
      if (!rawData || !Array.isArray(rawData) || rawData.length === 0) {
        console.warn('No chart data available');
        setData({
          labels: ['No Data'],
          datasets: [{
            label: 'No Data Available',
            data: [0],
            backgroundColor: '#cccccc',
            borderColor: '#cccccc',
            pointBackgroundColor: '#cccccc',
            borderWidth: 3,
            pointRadius: 0,
            type: "line",
            tension: 0.4,
          }]
        });
        setLoading(false);
        return;
      }

      let labels = [];
      let datasets = [];
      let candidateTotals = {};

      rawData.reverse().forEach(element => {
        if (element && element.time) {
          labels.push(element.time);
        }
        
        if (element && element.data && Array.isArray(element.data)) {
          element.data.forEach(el => {
            if (el && el.id && typeof el.totalVote === 'number') {
              candidateTotals[el.id] = (candidateTotals[el.id] || 0) + el.totalVote;

              let candidateDataset = datasets.find((item) => item.id === el.id);
              if (!candidateDataset) {
                const currentColor = getNextColor();
                datasets.push({
                  id: el.id,
                  label: el.fullName || el.lastName || `Candidate ${el.id}`,
                  data: [el.totalVote],
                  backgroundColor: currentColor,
                  borderColor: currentColor,
                  pointBackgroundColor: currentColor,
                  borderWidth: 3,
                  pointRadius: 0,
                  type: "line",
                  tension: 0.4,
                });
              } else {
                candidateDataset.data.push(el.totalVote);
              }
            }
          });
        }
      });

      // Sort candidates by total votes
      const sortedCandidates = Object.entries(candidateTotals).sort(([, a], [, b]) => b - a);
      const candidate1Index = sortedCandidates.findIndex(([id]) => id === "1");
      const topSecondCandidate = sortedCandidates[candidate1Index + 1];
      if (topSecondCandidate) {
        console.log(`The top second candidate compared to candidate id=1 is candidate id=${topSecondCandidate[0]} with total votes of ${topSecondCandidate[1]}`);
      } else {
        console.log("Could not find a candidate after candidate id=1");
      }

      setData({
        labels: labels,
        datasets: datasets
      });
      
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
      setData({
        labels: ['Error'],
        datasets: [{
          label: 'Error Loading Data',
          data: [0],
          backgroundColor: '#ff6b6b',
          borderColor: '#ff6b6b',
          pointBackgroundColor: '#ff6b6b',
          borderWidth: 3,
          pointRadius: 0,
          type: "line",
          tension: 0.4,
        }]
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    
    // Set up automatic refresh every 30 seconds for real-time updates
    const intervalId = setInterval(fetchData, 30000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [fetchData]);


  return (
    <div>
      {loading && (
        <div className="text-center py-4">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          Error loading chart: {error}
        </div>
      )}
      {data && !loading && !error && (
        <Line 
          options={lineChartOptions} 
          data={data} 
          className="barchart chart-dropshadow2 ht-300 chartjs-render-monitor" 
          height="100" 
        />
      )}
    </div>
  );
};

export default ProjectBudget;