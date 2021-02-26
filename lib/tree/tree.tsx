import { scopedClassMaker } from '../helpers/classnames';
import React, { ChangeEventHandler, useState } from 'react';
import './tree.scss';

export interface SourceDataItem {
    text: string;
    value: string;
    children?: SourceDataItem[];
}

type Props = {
    sourceData: SourceDataItem[];
} & (
        { selected: string[], multiple: true, onChange: (newSelected: string[]) => void } |
        { selected: string, multiple?: false, onChange: (newSelected: string) => void }
    )
const scopedClass = scopedClassMaker('fui-tree');
const sc = scopedClass;

const Tree: React.FunctionComponent<Props> = (props) => {
    const renderItem = (item: SourceDataItem, level = 1) => {
        const classes = {
            ['level-' + level]: true,
            'item': true
        }
        const checked = props.multiple ? props.selected.indexOf(item.value) >= 0 : props.selected === item.value;
        const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
            if (props.multiple) {
                if (e.target.checked) {
                    props.onChange([...props.selected, item.value])
                } else {
                    props.onChange(props.selected.filter(value => value !== item.value))
                }
            } else {
                props.onChange(item.value)
            }

        }

        const expand = () => { setExpanded(true) }
        const collapse = () => {
            setExpanded(false)
        }
        const [expanded, setExpanded] = useState(true)
        return <div
            key={item.value}
            className={sc(classes)}>
            <div className={sc('text')}>
                <input
                    type="checkbox"
                    onChange={onChange}
                    checked={checked} />
                {item.text}
                {item.children &&
                    <span onSelect={e => e.preventDefault()}>
                        {expanded ? <span onClick={collapse}>-</span> : <span onClick={expand}>+</span>}
                    </span>}
            </div>
            <div className={sc({ children: true, collapsed: !expanded })}>
                {item.children?.map(sub => {
                    return renderItem(sub, level + 1)
                })}
            </div>
        </div>
    }

    return (
        <div>
            {props.sourceData?.map(item => {
                return renderItem(item)
            })}
        </div>
    )
}
export default Tree;