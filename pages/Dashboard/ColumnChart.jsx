import React from "react";
import ReactApexChart from "react-apexcharts";

const ColumnChart = ({ dataColor, periodData }) => {
  const options = {
    chart: {
      stacked: !0,
      toolbar: {
        show: 1,
      },
      zoom: {
        enabled: !0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: !1,
        columnWidth: "15%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: !1,
    },
    xaxis: {
      show: true,
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        show: true,
      },
    },
    colors: dataColor,
    legend: {
      position: "bottom",
    },
    fill: {
      opacity: 1,
    },
  };
  return (
    <div className="">
      <ReactApexChart
        options={options}
        series={[...periodData]}
        type="bar"
        height="359"
        className="apex-charts"
      />
    </div>
  );
};

export default ColumnChart;
