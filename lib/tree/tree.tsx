import React from 'react';
import './tree.scss';

interface SourceDataItem {
    text: string;
    value: string;
    children?: SourceDataItem[];
}
interface Props {
    sourceData: SourceDataItem[]
}

const Tree: React.FunctionComponent<Props> = (props) => {
    return (
        <div>
            {props.sourceData.map(item => {
                return <div>{item.text}
                    {item.children && item.children.map(item2 => {
                        return <div>{item2.text}</div>
                    })}
                </div>
            })}
        </div>
    )
}
export default Tree;