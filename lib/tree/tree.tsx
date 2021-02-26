import { scopedClassMaker } from '../helpers/classnames';
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
const scopedClass = scopedClassMaker('fui-tree');
const sc = scopedClass;
const renderItem = (item: SourceDataItem, level = 1) => {
    const classes = {
        ['level-' + level]: true,
        'item': true
    }
    return <div
        key={item.value}
        className={sc(classes)}>
        {item.text}
        {item.children?.map(sub => {
            return renderItem(sub, level + 1)
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