// Need to Import {Importent}
import Chart from 'chart.js/auto';
import { Chart as ChartJS, registerables } from "chart.js";

// Linechart
export const Linechart = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      position: "top",

    },
    title: {
      display: true,
      text: "Chart.js Line Chart",

    },
  },
};
export const linechartdata = {
  labels: ["Sun", "Mon",
    "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Profits",
      data: [20, 420, 210, 354, 580, 320, 480],
      borderWidth: 2,
      backgroundColor: "transparent",
      borderColor: "#6259ca",
      pointBackgroundColor: "#ffffff",
      pointRadius: 2,
      fill: true,
      tension: 0.4,
    },
  ],
};

// Bar-chart 1
export const Barchart1 = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};
export const barchart1data = {
  labels: ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am",],
  datasets: [
    {
      // label: "My First Dataset",
      data: [200, 450, 290, 367, 256, 543, 345],
      // borderWidth: 2,
      backgroundColor: "#1AA360",
      borderColor: "#1AA360",
      borderWidth: 2.0,
      pointBackgroundColor: "#ffffff",
      label: "Ali Bongo",
    },
    {
      // label: "My First Dataset",
      data: [100, 250, 90, 50, 350, 500, 400],
      // borderWidth: 2,
      backgroundColor: "#3469B1",
      borderColor: "#3469B1",
      borderWidth: 2.0,
      pointBackgroundColor: "#ffffff",
      label: "Albert Ondo",
    },
  ],
};
// Bar-chart 2

export const Barchart2 = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};
export const barchart2data = {
  labels: ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am"],
  datasets: [
    {
      label: " Alassane Ouattara ",
      data: [650, 590, 800, 810, 560, 550, 400, 280, 480, 400, 190, 860, 270, 870],
      borderColor: "#326AB7",
      borderWidth: "0",
      backgroundColor: "#326AB7",
    },
    {
      label: " Ahoua Don Mello ",
      data: [280, 480, 400, 190, 860, 270, 290, 635, 559, 580, 281, 156, 155, 340],
      borderColor: "#FEE12B",
      borderWidth: "0",
      backgroundColor: "#FEE12B",
    },
    {
      label: "Jean-Louis Billon",
      data: [128, 448, 240, 419, 286, 227, 590, 218, 248, 140, 519, 286, 327, 600],
      borderColor: "#1FA25F",
      borderWidth: "0",
      backgroundColor: "#1FA25F",
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 150,
            fontColor: "#77778e",
          },
          gridLines: {
            color: "rgba(119, 119, 142, 0.2)",
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            display: true,
            fontColor: "#77778e",
          },
          gridLines: {
            display: false,
            color: "rgba(119, 119, 142, 0.2)",
          },
        },
      ],
    },

    labels: {
      fontColor: "#77778e",
    },
  },
};
// Area-chart

export const Areachart = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

export const areachart = {
  labels: ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am",],
  datasets: [
    {
      label: "Data 1 ",
      borderColor: "rgba(235, 111, 51 ,0.9)",
      borderWidth: "1",
      backgroundColor: "rgba(	235, 111, 51, 0.7)",
      pointHighlightStroke: "rgba(235, 111, 51 ,1)",
      data: [16, 32, 18, 26, 42, 33, 44],
      fill: true,
      tension: 0.4,
    },
    {
      label: "Data 2",
      backgroundColor: "rgba(113, 76, 190, 0.5)",
      borderColor: "rgba(113, 76, 190, 0.9)",
      data: [22, 44, 67, 43, 76, 45, 12],
      fill: true,
      tension: 0.4,
      // borderDash: [5, 5],
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: "#77778e",
          },
          gridLines: {
            color: "rgba(119, 119, 142, 0.2)",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#77778e",
          },
          gridLines: {
            color: "rgba(119, 119, 142, 0.2)",
          },
        },
      ],
    },
    legend: {
      labels: {
        fontColor: "#77778e",
      },
    },
  },
};

// DONUT CHART

export const dchart = {
  datasets: [
    {
      data: [20, 20, 30, 5, 25],
      backgroundColor: ["#6259ca", "#53caed", "#01b8ff", "#f16d75", "#29ccbb"],
    },
  ],
  hoverOffset: 4,
};

//  piechart
export const piechart = {
  datasets: [
    {
      data: [20, 20, 30, 5, 25],
      backgroundColor: ["#6259ca", "#53caed", "#01b8ff", "#f16d75", "#29ccbb"],
    },
  ],
  hoverOffset: 4,
};

// Radarchart
export const Radarchart1 = {
  labels: [
    ["Eating", "Dinner"],
    ["Drinking", "Water"],
    "Sleeping",
    ["Designing", "Graphics"],
    "Coding",
    "Cycling",
    "Running",
  ],

  datasets: [
    {
      label: "Data1",
      data: [65, 59, 66, 45, 56, 55, 40],
      borderColor: "rgba(113, 76, 190, 0.9)",
      borderWidth: "1",
      backgroundColor: "rgba(113, 76, 190, 0.5)",
    },
    {
      label: "Data2",
      data: [28, 12, 40, 19, 63, 27, 87],
      borderColor: "rgba(235, 111, 51,0.8)",
      borderWidth: "1",
      backgroundColor: "rgba(235, 111, 51,0.4)",
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scale: {
      angleLines: { color: "#77778e" },
      gridLines: {
        color: "rgba(119, 119, 142, 0.2)",
      },
      ticks: {
        beginAtZero: true,
      },
      pointLabels: {
        fontColor: "#77778e",
      },
    },
  },
};
// polarchart
export const Polarchart1 = {
  labels: ["Data1", "Data2", "Data3", "Data4"],
  datasets: [
    {
      data: [18, 15, 9, 6, 19],
      backgroundColor: ["#6259ca", "#53caed", "#01b8ff", "#f16d75", "#29ccbb"],
      hoverBackgroundColor: [
        "#6259ca",
        "#53caed",
        "#01b8ff",
        "#f16d75",
        "#29ccbb",
      ],
      borderColor: "transparent",
    },
  ],
  options: {
    responsive: true,
    scale: {
      gridLines: {
        color: "rgba(119, 119, 142, 0.2)",
      },
    },
    // responsive: true,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: "#77778e",
      },
    },
  },
};

//  sparkline charts
