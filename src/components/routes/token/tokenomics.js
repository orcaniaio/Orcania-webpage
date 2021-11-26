import {useEffect} from 'react';
import Chart from "react-apexcharts";
import './chart.scss';
import tokenomicsData from './tokenomics-data';


const Tokenomics = props => {

    useEffect(
        () => {

            const elms = document.querySelectorAll('.apexcharts-legend-series');

            const elmsArr = Array.from( elms );



            elmsArr.map( (elm, i) => {
                elm.addEventListener('mouseenter', e => {
                    
                    const seriesname = elm.getAttribute('seriesname').replace(/x/g, " ");

                    const data = tokenomicsData.find( item => item.title.toLowerCase() === seriesname.toLowerCase() );

                    setShowData(data);
                });
            });

        }, []
    );

    const {showData, setShowData} = props;
    const series = tokenomicsData.map(data => data.percentage);
    const labels = tokenomicsData.map(data => data.title);

    const options = {
        chart: {
            type: 'donut',
            events: {
                updated: (chartContext, config) => {

                },
                dataPointSelection: (event, chartContext, config) => {

                    
                    // const data = tokenomicsData.get(config.w.globals.labels[config.dataPointIndex]);
                    const data = tokenomicsData.find(d => d.title.toLowerCase() === config.w.globals.labels[config.dataPointIndex].toLowerCase());
                    
                    
                    setShowData({
                        body: data.body,
                        title: data.title,
                    });
                },
                dataPointMouseEnter: function(event, chartContext, config) {
                    // console.log( config.w.globals.labels[config.dataPointIndex] );

                    const data = tokenomicsData.find(d => d.title.toLowerCase() === config.w.globals.labels[config.dataPointIndex].toLowerCase());

                    setShowData({
                        body: data.body,
                        title: data.title,
                    });
                }
            }
            // background: '#000'
        },
        legend: {
             position: 'bottom',
        },
        title: {
            text: ''
        },
        stroke: {
            colors: ["#DEDEDE"]
        },
        labels: labels,
        fill: {
            opacity: 0.8
        },
        colors: ['#FF775F', '#23DCF5', '#8A3FFC', '#16C784', '#3861FB', '#c4003e'],
        tooltip: {
            enabled: true,
            followCursor: false,
            custom: function({series, seriesIndex, dataPointIndex, w}) {
                return `<div class="p-2" style="background: ${w.globals.colors[seriesIndex]}"><span>${w.globals.labels[seriesIndex]} ${series[seriesIndex]}% </span></div>`;
            },
            fixed: {
                enabled: false,
                position: 'topRight',
                offsetX: 0,
                offsetY: 0,
            }
        },
        responsive: [{
            breakpoint: 769,
            options: {
                chart: {
                    width: 350,
                    height: 350
                },
                legend: {
                    // position: 'bottom'
                }
            }
        }],




    }
    return(
       <Chart options={options} series={series} type="donut" width="100%"/>
    );
}

export default Tokenomics;
