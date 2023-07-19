import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";

const NewChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let root = am5.Root.new(chartRef.current);

    // Create chart
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalHorizontal,
      })
    );

    // Define data
    let data = [
      {
        country: "France",
        sales: 100000,
      },
      {
        country: "Spain",
        sales: 160000,
      },
      {
        country: "United Kingdom",
        sales: 80000,
      },
      {
        country: "Spain",
        sales: 160000,
      },
      {
        country: "United Kingdom",
        sales: 80000,
      },
      {
        country: "Spain",
        sales: 160000,
      },
      {
        country: "United Kingdom",
        sales: 80000,
      },
      {
        country: "United Kingdom",
        sales: 80000,
      },
      {
        country: "Spain",
        sales: 160000,
      },
      {
        country: "United Kingdom",
        sales: 80000,
      },
      {
        country: "United Kingdom",
        sales: 80000,
      },
      {
        country: "Spain",
        sales: 160000,
      },
      {
        country: "United Kingdom",
        sales: 80000,
      },
    ];

    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        valueField: "sales",
        categoryField: "country",
      })
    );
    series.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.percent(50),
      x: am5.percent(50),
      layout: root.horizontalLayout
    }));
    legend.data.setAll(series.dataItems.values);

    return () => {
      if (root) {
        root.dispose();
      }
    };
  }, []);

  return <div id="chartdiv" ref={chartRef} style={{ width: "100%", height: "500px" }}></div>;
};

export default NewChart;

// import React, { useEffect, useRef } from "react";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5xy from "@amcharts/amcharts5/xy";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

// const NewChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     let root = am5.Root.new(chartRef.current);

//     root.setThemes([am5themes_Animated.new(root)]);

//     let chart = root.container.children.push(
//       am5xy.XYChart.new(root, {
//         panY: false,
//         layout: root.verticalLayout,
//       })
//     );

//     // Define data
//     let data = [
//       {
//         category: "Research",
//         value1: 1000,
//         value2: 588,
//       },
//       {
//         category: "Marketing",
//         value1: 1200,
//         value2: 1800,
//       },
//       {
//         category: "Sales",
//         value1: 850,
//         value2: 1230,
//       },
//     ];

//     // Create Y-axis
//     let yAxis = chart.yAxes.push(
//       am5xy.ValueAxis.new(root, {
//         renderer: am5xy.AxisRendererY.new(root, {}),
//       })
//     );

//     // Create X-Axis
//     let xAxis = chart.xAxes.push(
//       am5xy.CategoryAxis.new(root, {
//         renderer: am5xy.AxisRendererX.new(root, {}),
//         categoryField: "category",
//       })
//     );
//     xAxis.data.setAll(data);

//     // Create series
//     let series1 = chart.series.push(
//       am5xy.ColumnSeries.new(root, {
//         name: "Series",
//         xAxis: xAxis,
//         yAxis: yAxis,
//         valueYField: "value1",
//         categoryXField: "category",
//       })
//     );
//     series1.data.setAll(data);

//     let series2 = chart.series.push(
//       am5xy.ColumnSeries.new(root, {
//         name: "Series",
//         xAxis: xAxis,
//         yAxis: yAxis,
//         valueYField: "value2",
//         categoryXField: "category",
//       })
//     );
//     series2.data.setAll(data);

//     // Add legend
//     let legend = chart.children.push(am5.Legend.new(root, {}));
//     legend.data.setAll(chart.series.values);

//     // Add cursor
//     chart.set("cursor", am5xy.XYCursor.new(root, {}));

//     return () => {
//       if (root) {
//         root.dispose();
//       }
//     };
//   }, []);

//   return <div ref={chartRef} style={{ width: "100%", height: "500px" }}></div>;
// };

// export default NewChart;
