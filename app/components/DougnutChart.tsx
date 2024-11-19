'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DougnutChart = ({accounts}:DoughnutChartProps) => {
    const data =
    {
        datasets:[
            {
                label:"Banks",
                data:[2040 , 6457 , 2993],
                backgroundColor:["#0747b6" , "#2265d8" , "#2f91fa"]
            }
          ],
          labels:["HDFC" , "SBI" , "IPPB"]
    }
  return  <Doughnut 
  data={data} 
  options={{
    cutout:"55%" , 
    plugins:{
        legend:{
            display:false
        }
  }}} />
}

export default DougnutChart