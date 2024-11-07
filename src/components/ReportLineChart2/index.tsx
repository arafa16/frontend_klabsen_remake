import Chart, { ChartElement } from "../../base-components/Chart";
import { ChartData, ChartOptions } from "chart.js/auto";
import { getColor } from "../../utils/colors";
import { selectColorScheme } from "../../stores/colorSchemeSlice";
import { selectDarkMode } from "../../stores/darkModeSlice";
import { useAppSelector } from "../../stores/hooks";
import { useMemo, useRef } from "react";

interface MainProps extends React.ComponentPropsWithoutRef<"canvas"> {
  width: number;
  height: number;
  index: number;
}

function Main(props: MainProps) {
  const reportLineChart2Ref = useRef<ChartElement | null>();
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);

  const getGradient = (el: ChartElement) => {
    const ctx = el.getContext("2d");
    const gradient = ctx?.createLinearGradient(0, 4, 0, 45);
    gradient?.addColorStop(0, getColor("primary", 0.3));
    gradient?.addColorStop(1, darkMode ? "#28344e00" : "#ffffff01");
    return gradient;
  };

  const data: ChartData = useMemo(() => {
    const data = [
      [
        0, 3, 1, 9, 18, 20, 10, 13, 21, 29, 23, 14, 16, 9, 11, 16, 7, 10, 15,
        23, 30, 28, 33, 36, 30, 26, 35, 32, 26, 35, 27, 31, 39, 41, 43, 51, 45,
        49, 58, 63, 54, 56, 53, 50, 42, 45, 48, 58, 54, 59, 63, 55, 51, 42, 40,
        48, 58, 56, 54, 48, 56, 62, 57, 65, 55, 47, 57, 67, 75, 68,
      ],
      [
        0, 3, 9, 11, 19, 25, 15, 8, 14, 16, 20, 16, 10, 4, 10, 16, 20, 26, 28,
        21, 18, 28, 37, 34, 32, 34, 24, 32, 41, 37, 40, 42, 40, 35, 45, 37, 34,
        42, 34, 28, 30, 22, 16, 21, 24, 28, 30, 40, 47, 54, 61, 69, 62, 59, 51,
        49, 55, 51, 41, 33, 37, 44, 53, 49, 56, 58, 48, 40, 34, 38,
      ],
      [
        0, 7, 3, 2, 4, 14, 8, 10, 16, 14, 18, 23, 20, 13, 9, 13, 10, 8, 3, 3, 6,
        4, 6, 4, 1, 2, 11, 17, 23, 19, 17, 23, 27, 17, 20, 24, 22, 16, 23, 32,
        22, 28, 35, 37, 29, 21, 18, 24, 18, 24, 21, 18, 14, 17, 15, 7, 16, 6,
        13, 15, 24, 30, 33, 42, 48, 38, 32, 27, 34, 30,
      ],
      [
        0, 3, 1, 9, 18, 20, 10, 13, 21, 29, 23, 14, 16, 9, 11, 16, 7, 10, 15,
        23, 30, 28, 33, 36, 30, 26, 35, 32, 26, 35, 27, 31, 39, 41, 43, 51, 45,
        49, 58, 63, 54, 56, 53, 50, 42, 45, 48, 58, 54, 59, 63, 55, 51, 42, 40,
        48, 58, 56, 54, 48, 56, 62, 57, 65, 55, 47, 57, 67, 75, 68,
      ],
    ];

    return {
      labels: data[props.index],
      datasets: [
        {
          data: data[props.index],
          borderWidth: 0.8,
          borderColor: colorScheme ? getColor("primary", 0.6) : "",
          pointRadius: 0,
          backgroundColor: reportLineChart2Ref.current
            ? getGradient(reportLineChart2Ref.current)
            : "transparent",
          tension: 0,
          fill: true,
        },
      ],
    };
  }, [reportLineChart2Ref.current, colorScheme, darkMode]);

  const options: ChartOptions = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
      },
    };
  }, [reportLineChart2Ref.current, colorScheme, darkMode]);

  return (
    <Chart
      type="line"
      width={props.width}
      height={props.height}
      data={data}
      options={options}
      className={props.className}
      getRef={(el) => {
        reportLineChart2Ref.current = el;
      }}
    />
  );
}

Main.defaultProps = {
  width: "auto",
  height: "auto",
  className: "",
  index: 0,
};

export default Main;
