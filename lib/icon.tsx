import React from 'react';
import './importicons.js';
import './icon.scss';
interface IconProps{
    name:string;
}

const Icon:React.FunctionComponent<IconProps> =(props)=>{
    return(
        <svg  className="fui-icon">
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    );
};
export default Icon;