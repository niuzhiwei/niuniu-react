import React,{useState} from 'react'
import Dialog,{alert,confirm,modal} from './dialog'

export default function(){
    const [x, setX] = useState(false)
    const openModal=()=>{
       const close =  modal(<div><h1>hi</h1><button onClick={()=>close()}>close</button></div>)
    }
    return (
        <div>
            <button onClick={()=>setX(!x)}>click</button>
            <Dialog visible={x} buttons={
                [<button onClick={()=>{setX(false)}}>1</button>,
                 <button onClick={()=>{setX(false)}}>2</button>]
            } onClose={()=>{setX(false)}} closeOnClickMask={true} >
                <div>hi</div>
            </Dialog>

            <button onClick={()=>alert("1")}>alert</button>
            <button onClick={()=>confirm("1",()=>{console.log('yes')},()=>{console.log('no')})}>confirm</button>
            <button onClick={openModal}>modal</button>
        </div>
    )
}