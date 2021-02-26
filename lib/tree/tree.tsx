import React from 'react';
import './tree.scss';
import { TreeProps } from './SourceDataItem';
import TreeItem from './tree-item';

const Tree: React.FunctionComponent<TreeProps> = (props) => {
    return (
        <div>
            {props.sourceData?.map(item =>
                <TreeItem
                    key={item.value}
                    treeProps={props}
                    item={item}
                    level={1}
                ></TreeItem>
            )}
        </div>
    )
}
export default Tree;