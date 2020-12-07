import React from 'react';
import './importicons.js';
import './icon.scss';
import classes from  './helpers/classnames';

interface IconProps extends React.SVGAttributes<SVGElement>
{
    name:string;
}

const Icon:React.FunctionComponent<IconProps> =({className,name,...restProps})=>{
    return(
        <svg  className={classes('fui-icon',className)} {...restProps}>
            <use xlinkHref={`#${name}`}></use>
        </svg>
    );
};
export default Icon;