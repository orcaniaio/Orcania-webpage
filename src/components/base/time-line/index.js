import {useState, useEffect, useRef} from 'react';

import ScrollContainer from 'react-indiana-drag-scroll';

import './time-line.scss';

import data from './data';
import vars from '../../../scss/vars.scss';

const Timeline = props => {

    const pt1 = useRef(null);

    const [items, setItems] = useState(data);

    return(
        <ScrollContainer className="scroll-container" >

            <div className="notify"><h1 className="title is-5 has-text-primary has-text-centered mb-5">Grab & drag </h1></div>


            <div className="py-6">
                <div className="is-inline-flex pb-6" style={{position: 'relative'}}>
                    {
                        items.top.map( (item, i) =>
                            <div className={`mx-6 ${ i%2==1 ? 'is-invisible' : ' '}`} style={{width: '350px'}}>
                                <div className="box odd has-background-dark2primary-v is-flex is-flex-direction-column" style={{height: '350px'}}>
                                    <h1 className=" title has-text-white has-text-left is-4" >{item.title}</h1>
                                    <h1 className="subtitle has-text-contrast has-text-left is-6" >{item.subtitle}</h1>
                                    <div className="is-flex-grow-1 has-cool-scroll pr-3" style={{overflowY: 'auto'}}>
                                        <p className="has-text-white h is-size-6 has-text-distriute">
                                            {item.body}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                    <div className="timeline-line"></div>
                </div>
                <div className="is-inline-flex py-6" style={{borderTop: '0px solid white'}}>
                    {
                        items.bottom.map( (item, i) =>
                            <div className={` mx-6 ${ i%2==0 ? 'is-invisible' : ' '}`} style={{width: '350px'}}>
                                <div className="box even has-background-dark2primary-v is-flex is-flex-direction-column" style={{height: '350px'}}>
                                    <h1 className=" title has-text-white has-text-left is-4" >{item.title}</h1>
                                    <h1 className="subtitle has-text-contrast has-text-left is-6" >{item.subtitle}</h1>
                                    <div className="is-flex-grow-1 has-cool-scroll pr-3" style={{overflowY: 'auto'}}>
                                        <p className="has-text-white is-size-6 has-text-distriute">
                                            {item.body}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>


        </ScrollContainer>
    );
}

export default Timeline
