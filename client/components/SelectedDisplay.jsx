import React, { useState, useEffect } from 'react'
import { getMarketData } from '../api'
import { Line } from 'react-chartjs-2';


function SelectedDisplay(props) {

    const [coinData, setCoinData] = useState(null)

    useEffect(() => {
        getMarketData(props.activeCoin)
            .then(res => {
                return setCoinData(res)
            })
    }, [props.activeCoin])

    function buildChart(displayCoin) {

        const data = {
            // display: true,
            labels: displayCoin.dates[0],
            datasets: [
                {
                    label: "Price",
                    data: displayCoin.values[0],
                    fill: true,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
        }

        const config = {
            type: 'line',
            data: data,
        }

        return <Line data={data} labels={data.labels} config={config} />
    }

    function capitalize (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    console.log(coinData);
    return (
        <>
            { coinData &&
                <>  
                    <h1 className="hero-heading">{capitalize(props.activeCoin)}</h1>
                    <div className="chart">{buildChart(coinData)}</div>
                </>
            }
        </>
    )

}


export default SelectedDisplay