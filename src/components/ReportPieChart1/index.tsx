import Chart from "../../base-components/Chart";
import { ChartData, ChartOptions } from "chart.js/auto";
import { getColor } from "../../utils/colors";
import { selectColorScheme } from "../../stores/colorSchemeSlice";
import { selectDarkMode } from "../../stores/darkModeSlice";
import { useAppSelector } from "../../stores/hooks";
import { useMemo } from "react";

interface MainProps extends React.ComponentPropsWithoutRef<"canvas"> {
  width: number;
  height: number;
}

function Main(props: MainProps) {
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);

  const data: ChartData = useMemo(() => {
    const configData = {
      labels: ["17 - 30 Years old", "31 - 50 Years old", ">= 50 Years old"],
      datasets: [
        {
          data: [15, 10, 65],
          backgroundColor: colorScheme
            ? [
                getColor("pending", 0.5),
                getColor("warning", 0.5),
                getColor("primary", 0.5),
              ]
            : "",
          hoverBackgroundColor: colorScheme
            ? [
                getColor("pending", 0.5),
                getColor("warning", 0.5),
                getColor("primary", 0.5),
              ]
            : "",
          borderWidth: 1,
          borderColor: colorScheme
            ? [
                getColor("pending", 0.75),
                getColor("warning", 0.9),
                getColor("primary", 0.5),
              ]
            : "",
        },
      ],
    };

    return darkMode ? configData : configData;
  }, [colorScheme, darkMode]);

  const options: ChartOptions = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    };
  }, [colorScheme, darkMode]);

  return (
    <Chart
      type="pie"
      width={props.width}
      height={props.height}
      data={data}
      options={options}
      className={props.className}
    />
  );
}

Main.defaultProps = {
  width: "auto",
  height: "auto",
  className: "",
};

export default Main;
