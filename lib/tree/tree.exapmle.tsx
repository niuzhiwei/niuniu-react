import React, { useState } from 'react';
import Tree from './tree';
import { SourceDataItem } from './tree'

const TreeExample: React.FunctionComponent = () => {
    const [array] = useState([{
        text: '1',
        value: '1',
        children: [
            {
                text: '1.1', value: '1.1',
                children: [
                    { text: '1.1.1', value: '1.1.1' },
                    { text: '1.1.2', value: '1.1.2' }
                ]
            },
            { text: '1.2', value: '1.2' }
        ]
    },
    {
        text: '2',
        value: '2',
        children: [
            { text: '2.1', value: '2.1' },
            { text: '2.2', value: '2.2' }
        ]
    },
    {
        text: '3',
        value: '3',
        children: [
            { text: '3.1', value: '3.1' },
            { text: '3.2', value: '3.2' }
        ]
    }])
    const [selectedValues, setSelectedValues] = useState(['1.1.1'])
    const onChange = (item: SourceDataItem, bool: boolean) => {
        if (bool) {
            setSelectedValues([...selectedValues, item.value])
        } else {
            setSelectedValues(selectedValues.filter(value => value !== item.value))
        }
    }
    return (
        <Tree
            sourceData={array}
            onChange={onChange}
            selected={selectedValues}
            multiple={true}
        ></Tree>
    )
}
export default TreeExample;