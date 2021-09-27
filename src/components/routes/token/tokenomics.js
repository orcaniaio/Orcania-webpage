import {useEffect} from 'react';
import Chart from "react-apexcharts";
import './chart.scss';

const tokenomicsData = new Map();

tokenomicsData.set('ICO', {
    title: 'ICO',
    body: 'The ICO will be held after the nodes presale has been concluded. </br></br>' +
    'Any CFC remaining from the nodes presale will be added to the public ICO, it will allow everyone to aquire CFC on multiple blockchains. <br/></br>' +
    'The ICO will either be held on centralized services such as Binance with part of the ICO being held on DAPPs on the supported blockchains of the Crypto Family Bridge, or it will be fully held on DAPPs of the supported blockchains.'
});

tokenomicsData.set('Nodes presale', {
    title: 'Nodes presale',
    body: 'The nodes presale is to help early node operators aquire CFC to run validator nodes and secure the Crypto Family Bridge on mainnet release. </br></br>' +
    'This presale will allow nodes to aquire CFC for 15% less than the ICO price to help increase the power of CFC securing the Crypto Family Bridge on release.</br></br>' +
    'To join the nodes presale, a user has to have been an early node operator for the Crypto Family Bridge on the testnet release (Soon).'
});

tokenomicsData.set('Crypto Family nodes', {
    title: 'Crypto Family nodes',
    body: 'The Crypto Family is gonna be running the first nodes of the Crypto Family Bridge, and to ensure a secure launch we have allocated 5% of the CFC release supply to these nodes.</br></br>' +
    'These CFC will forever be allocated to running Crypto Family validator nodes on the bridge, never to be sold or even transfered.</br></br>' +
    'Remaining CFC from the ICO might also be used to operate more nodes if deemed necessary.'
});

tokenomicsData.set('Crypto Family', {
    title: 'Crypto Family',
    body: 'The Crypto Family has been allocated 1% of the CFC release supply to distribute to its partners, advisors, contributors, and team allocation.</br></br>' +
    'In reality, to acquire more CFC the Crypto Family team will be participating in the ICO like any other community member, giving the Crypto Family no upper hand over CFC or the Crypto Family Bridge and ensuring these projects are fully decentralized and community driven, and that the Crypto Family is but a part of that community</br></br>'
});

tokenomicsData.set('Hackathon', {
    title: 'Hackathon',
    body: 'After the mainnet release of the Crypto Family Bridge, a hackathon will be held to encourage and support developers on expanding their ideas beyond one blockchain and building multichain apps.</br></br>' +
    '1% of the CFC release supply will be allocated to help fund such projects and push them forward on their journey, live development support from our team to the teams of these projects will be available to help them better grasp the architecture of the bridge and how to interact with it.</br></br>'
});



const Tokenomics = props => {

    useEffect(
        () => {

            const elms = document.querySelectorAll('.apexcharts-legend-series');

            const elmsArr = Array.from( elms );



            elmsArr.map( (elm, i) => {
                elm.addEventListener('mouseenter', e => {
                    const seriesname = elm.getAttribute('seriesname').replace(/x/g, " ");
                    setShowData(tokenomicsData.get( seriesname ));
                });
            });

        }, []
    );

    const {showData, setShowData} = props;
    const series = [50, 43, 5, 1, 1];

    const options = {
        chart: {
            type: 'donut',
            events: {
                updated: (chartContext, config) => {

                },
                dataPointSelection: (event, chartContext, config) => {

                    const data = tokenomicsData.get(config.w.globals.labels[config.dataPointIndex]);

                    setShowData({
                        body: data.body,
                        title: data.title,
                    });
                },
                dataPointMouseEnter: function(event, chartContext, config) {
                    // console.log('enter');
                    const data = tokenomicsData.get(config.w.globals.labels[config.dataPointIndex]);

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
        labels: ['ICO', 'Nodes presale', 'Crypto Family nodes', 'Crypto Family', 'Hackathon'],
        fill: {
            opacity: 0.8
        },
        colors: ['#FF775F', '#23DCF5', '#8A3FFC', '#16C784', '#3861FB'],
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
