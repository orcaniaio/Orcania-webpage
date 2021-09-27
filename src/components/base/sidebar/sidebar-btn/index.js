import './sidebar-btn.scss';

import {Link} from 'react-router-dom';

const SidebarBtn = props => {
    return(
        <a
            className={`button has-text-left is-expanded is-fullwidth sidebar-btn my-3 is-medium`}
            to={props.to || "/temp"}
            onClick={props.onClick}
            >
            <span className="icon is-size-5 has-text-centered">
                {props.icon}
            </span>
            {
                props.name != null ?
                <span>&nbsp;{props.name}</span>
                :null
            }

        </a>
    );
}

export default SidebarBtn;
