import React from 'react';
import './importicons.js';
import './icon.scss';
import classes from  './helpers/classnames';

interface IconProps extends React.SVGAttributes<SVGElement>
{
    name:string;
}

const Icon:React.FunctionComponent<IconProps> =(props)=>{
    const {className,...restProps} = props
    return(
        <svg  className={classes('fui-icon',className)} {...restProps}>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    );
};
export default Icon;