import {useState} from 'react';

import './team-card.scss';

const TeamCard = props => {

    const [name, setName] = useState(props.name);
    const [charge, setCharge] = useState(props.charge);


    const tempsrc = "https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg";

    return(
        <div class="card" style={{borderRadius: '0.25rem !important', overflow: 'hidden'}}>
            <div class="card-imagee has-background-primary2dark-v" style={{position: 'relative'}}>
                <figure class="image is-square " style={{transform: 'scale(0.7)'}} >
                    <img className="is-rounded has-border-contrast" src={props.imgsrc || tempsrc}  alt=""/>
                </figure>
                <div className="charge-div " >
                    <span className="icon has-text-white">{props.chargeIcon}</span>
                    <div className="charge-text p-1">
                        <h2 className="subtitle has-text-centered has-text-dark is-5">{charge}</h2>
                    </div>
                </div>

            </div>
            <div class="card-content has-background-dark">

                <div class="content">
                    <h1 className="title has-text-white has-text-centered is-4">{name}</h1>
                    <div className="has-text-centered is-size-5">
                    {
                        props.socialmedia
                    }

                    </div>
                </div>

            </div>
        </div>
    );
}

export default TeamCard;
