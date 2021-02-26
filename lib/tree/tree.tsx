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
const renderItem = (item: SourceDataItem) => {
    return <div key={item.value}>
        {item.text}
        {item.children?.map(sub => {
            return renderItem(sub)
        })}
    </div>
}
const Tree: React.FunctionComponent<Props> = (props) => {
    return (
        <div>
            {props.sourceData?.map(item => {
                return renderItem(item)
            })}
        </div>
    )
}
export default Tree;