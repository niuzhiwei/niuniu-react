import React from 'react';
import IconExample from './icon.example';
import Demo from '../../demo';

const code = require('!!raw-loader!./icon.example.tsx')
const IconDemo = ()=>{
    return (
       <Demo code={code.default}>
           <IconExample></IconExample>
       </Demo>
    )
}
export default IconDemo