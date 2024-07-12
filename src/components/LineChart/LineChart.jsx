import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({historicalData}) => {
    const [data, setData] = useState([["Date","Prices"]])
    useEffect(() => {
        let dataCopy = [["Date","Prices"]]
        if(historicalData.prices){
            historicalData.prices.map((iterm)=>{
                dataCopy.push([new Date(iterm[0]).toLocaleDateString().slice(0, -5), iterm[1]]);
            })
            setData(dataCopy);
        }
    },[historicalData])

    const color = "#fff";
  const options = {
        colors: ['lime' ,'green'],
    legend: {
            textStyle: { color:color , bold: true},
    },
    backgroundColor: {
      fillOpacity: 0.0,
    },
    hAxis: {
      title: "Date",
      textStyle: { color: color },
    },
    vAxis: {
      title: "Price",
      textStyle: { color: color },
    },
   
  };

  return (
    <Chart
    chartType='LineChart'
    data={(data)}
    options={options}   
    legendToggle
    />
  )
}


export default LineChart