export interface SourceDataItem {
    text: string;
    value: string;
    children?: SourceDataItem[];
}
export type TreeProps = {
    sourceData: SourceDataItem[];
} & (
        { selected: string[], multiple: true, onChange: (newSelected: string[]) => void } |
        { selected: string, multiple?: false, onChange: (newSelected: string) => void }
    )
const scopedClass = scopedClassMaker('fui-tree');
const sc = scopedClass;