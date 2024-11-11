import Chart, { ChartElement } from "../../base-components/Chart";
import { ChartData, ChartOptions } from "chart.js/auto";
import { getColor } from "../../utils/colors";
import { selectColorScheme } from "../../stores/colorSchemeSlice";
import { selectDarkMode } from "../../stores/darkModeSlice";
import { useAppSelector } from "../../stores/hooks";
import { useMemo } from "react";

// interface MainProps extends React.ComponentPropsWithoutRef<"canvas"> {
//   width: number;
//   height: number;
//   dataAbsen: number;
//   dataIn: number;
//   dataOut: number;
//   dataTidakAbsen: number;
// }

function Main(props: any) {
  const { dataNormal, dataPelanggaran, dataBelumAbsen} = props;
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);


  const data: ChartData = useMemo(() => {
    const configData = {
      labels: ["Pelanggaran (day)", "normal (day)", "Belum Absen (day)"],
      datasets: [
        {
          data: [dataPelanggaran, dataNormal, dataBelumAbsen],
          backgroundColor: colorScheme
            ? [
                getColor("pending", 0.5),
                getColor("primary", 0.5),
                getColor("secondary", 0.5),
              ]
            : "",
          hoverBackgroundColor: colorScheme
            ? [
                getColor("pending", 0.5),
                getColor("primary", 0.5),
                getColor("secondary", 0.5),
              ]
            : "",
          borderWidth: 1,
          borderColor: colorScheme
            ? [
                getColor("pending", 0.75),
                getColor("primary", 0.9),
                getColor("secondary", 0.5),
              ]
            : "",
        },
      ],
    };

    return darkMode ? configData : configData;
  }, [colorScheme, darkMode, dataPelanggaran, dataNormal, dataBelumAbsen]);

  const options: ChartOptions = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      cutout: "90%",
    };
  }, [colorScheme, darkMode, ]);

  return (
    <Chart
      type="doughnut"
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
