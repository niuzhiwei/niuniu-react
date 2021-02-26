import React, { useState } from 'react';
import Tree from './tree';

const TreeExample: React.FunctionComponent = () => {
    const [array, setArray] = useState([{
        text: '一',
        value: '1',
        children: [
            { text: '一之一', value: '1.1' },
            { text: '一之二', value: '1.2' }
        ]
    },
    {
        text: '二',
        value: '2',
        children: [
            { text: '二之一', value: '2.1' },
            { text: '二之二', value: '2.2' }
        ]
    }])
    return (
        <Tree sourceData={array}></Tree>
    )
}
export default TreeExample;