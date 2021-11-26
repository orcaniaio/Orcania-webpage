import {useEffect} from 'react';
import Chart from "react-apexcharts";
import './chart.scss';

const tokenomicsData = new Map();

tokenomicsData.set('Nodes sale', {
    title: 'Nodes sale',
    body: 'The nodes sale is to help early node operators aquire CFC to run validator nodes and secure the Crypto Family Bridge on mainnet release. </br></br>' +
    'This sale will allow nodes to aquire CFC for 15% less than the IDO price to help increase the power of CFC securing the Crypto Family Bridge on release.</br></br>' +
    'The nodes sale is intended to help validator node operators secure thr bridge, and as such certain terms are set to make sure CFC purchased from the nodes sale is used for its intended purpose.</br></br>' + 
    'Users that aquire CFC from the nodes sale but does not use it to run a validator node will have a lock period of 2 years on their CFC.</br>' + 
    'Nodes that aquire CFC from the nodes sale but does not put it all into running a validator node and securing the bridge, will have a lock period of 2 years on their CFC.</br>' +
    'Nodes that aquire CFC from the nodes sale and put it all into running a node and securing the bridge will have a lock period of 1 year on their CFC.'
});

tokenomicsData.set('Public sale', {
    title: 'Public Sale',
    body: 'The ICO will be held after the nodes presale has been concluded. </br></br>' +
    'Any CFC remaining from the nodes presale will be added to the public ICO, it will allow everyone to aquire CFC on multiple blockchains. <br/></br>' +
    'The ICO will either be held on DAPPs on the supported blockchains of the Crypto Family Bridge, giving everyone a chance to participate without any limitations or requirements. <br/><br/>' +
    'Any CFC left from the ICO will be utilized in securing the Crypto Family Bridge and will be equally delegated to across all validator nodes operating the Bridge.'
});

tokenomicsData.set('Protocol development', {
    title: 'Protocol Development',
    body: '15% of the CFC launch supply has been allocated to further fund the development of the Crypto Family projects. </br></br>' +
    'This allocation is to cover the hard work of our developers as well as the current and future expenses of development, tests, servers, nodes and others. </br></br>'
});

tokenomicsData.set('Ecosystem development', {
    title: 'Ecosystem Development',
    body: 'After the mainnet release of the Crypto Family Bridge, the Crypto Family will be contributing to the growth of the ecosystem through grants, bounties and hackathons to encourage and support developers on expanding their ideas beyond one blockchain and building multichain apps.</br></br>' +
    '5% of the CFC release supply will be allocated to help fund such projects and push them forward on their journey, live development support from our team to the teams of these projects will be available to help them better grasp the architecture of the bridge and how to interact with it.</br></br>'
});

tokenomicsData.set('Crypto family node', {
    title: 'Crypto Family Node',
    body: 'The Crypto Family is gonna be running the first nodes of the Crypto Family Bridge, and to ensure a secure launch we have allocated 2.5% of the CFC release supply to these nodes.</br></br>'+
    'These CFC will forever be allocated to running Crypto Family validator nodes on the bridge, never to be sold or even transferred.'
});

tokenomicsData.set('Delegation to nodes', {
    title: 'Delegation To Nodes ',
    body: 'To ensure the Crypto Family Bridge is fully decentralized on release, and to make sure no node has the upper hand over other nodes. We have allocated 2.5% of the CFC total supply to be equally delegated among all validator nodes on the bridge.'
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
    const series = [40, 35, 15, 5, 2.5, 2.5];

    const options = {
        chart: {
            type: 'donut',
            events: {
                updated: (chartContext, config) => {

                },
                dataPointSelection: (event, chartContext, config) => {

                    console.log(config.dataPointIndex);
                    const data = tokenomicsData.get(config.w.globals.labels[config.dataPointIndex]);

                 

                    setShowData({
                        body: data.body,
                        title: data.title,
                    });
                },
                dataPointMouseEnter: function(event, chartContext, config) {
                    console.log( config.w.globals.labels[config.dataPointIndex] );

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
        labels: ['Public sale', 'Nodes presale', 'Protocol development', 'Ecosystem development', 'Crypto family node', 'Delegation to nodes'],
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
