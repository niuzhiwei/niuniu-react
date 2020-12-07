import ReactDOM from 'react-dom';
import React from 'react';
import Icon from './icon';
const fn:React.MouseEventHandler<Element> = (e)=>{
    console.log(e.target)
};
const fn1:React.MouseEventHandler<Element>=(e)=>{
    console.log(e)
}
ReactDOM.render(<div><Icon className='wechat' name="wechat" onClick={fn} onMouseEnter={fn1} /></div>,document.querySelector('#root'));