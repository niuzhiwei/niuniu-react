import React from 'react';
import {scopedClassMaker} from '../helpers/classnames'
import './layout.scss'

const sc = scopedClassMaker('fui-layout')

interface Props extends React.HtmlHTMLAttributes<HTMLElement>{}
    

const Layout:React.FunctionComponent<Props> = (props)=>{
    const {className,...rest} = props
    return (
        <div className={sc('header',{extra:className})} {...rest}>
              {props.children}
        </div>
    )
}

export default Layout;