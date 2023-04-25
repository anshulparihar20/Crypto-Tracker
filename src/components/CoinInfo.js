import React, { useEffect, useState } from "react";
import { CryptoState } from "../CryptoContext";
import axios from "axios";
import { CircularProgress, ThemeProvider, createTheme } from "@mui/material";
import { HistoricalChart } from "../config/api";
import { Line } from "react-chartjs-2";
import {chartDays} from "../config/data"
import SelectButton from "../components/SelectButton"
import { CategoryScale, registerables, Chart } from "chart.js";
Chart.register(CategoryScale);
Chart.register(...registerables);

const CoinInfo = ({ coin }) => {
  const [historicalData, sethistoricalData] = useState();
  const [days, setDays] = useState(1);

  const { currency } = CryptoState();

  const fetchHistoricalData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

    sethistoricalData(data.prices);
  };

  console.log("data", historicalData);

  useEffect(() => {
    fetchHistoricalData();
  }, [currency, days]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="coinInfo">
        {!historicalData ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicalData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicalData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div  
             style={{
              display : "flex",
              marginTop: 20,
              justifyContent: "space-around",
              width: '100%'
             }}
            >
              {chartDays.map((day) =>(
                <SelectButton
                  key={day.value}
                  onClick={()=> setDays(day.value)}
                  selected={day.value === days}
                >{day.label}</SelectButton>
              ))}
            </div>
          </>
        )}

        {/* chart */}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;
