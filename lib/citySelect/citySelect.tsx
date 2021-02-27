import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './citySelect.scss';
import pinyin from 'tiny-pinyin';

interface Props {
    dataSource: string[];
    onChange: (p1: string) => void;
}
interface Context {
    map: { [key: string]: string[] };
    onChange: (p1: string) => void;
}

const CitySelectContext = React.createContext<Context>({ map: {}, onChange: (p1: string) => { } });
const CitySelect: React.FunctionComponent<Props> = (props) => {
    const { dataSource, children } = props;
    const [dialogVisible, setDialogVisible] = useState(true);
    const map: Context['map'] = {};
    dataSource.map((city) => {
        const py = pinyin.convertToPinyin(city);
        const index = py[0];
        map[index] = map[index] || []
        map[index].push(city)
    })

    const onClick = () => {
        setDialogVisible(true)
    }
    return (
        <CitySelectContext.Provider value={{ map, onChange: props.onChange }}>
            <div onClick={onClick}>{children}</div>
            {dialogVisible && <Dialog onClose={() => { setDialogVisible(false) }}></Dialog>}
        </CitySelectContext.Provider>
    )
};

const Dialog: React.FunctionComponent<{ onClose: () => void }> = (props) => {
    const { map, onChange } = useContext(CitySelectContext)
    const indexList = Object.keys(map).sort();
    const cityList = Object.entries(map)
        .sort((a, b) => (a[0].charCodeAt(0) - b[0].charCodeAt(0)))
    const onClick = (city: string) => {
        onChange(city)
    }
    return ReactDOM.createPortal(
        <div
            className='fui-citySelect-dialog'
        >
            <header>
                <span onClick={props.onClose} className='icon'>&lt;</span>
                <span>选择城市</span>
            </header>
            <CurrentLocation></CurrentLocation>
            <h2>全部城市</h2>
            <ol className="fui-citySelect-index">
                {indexList.map(a => <li key={a}>{a}</li>)}
            </ol>
            <div className="cityList">
                {cityList.map(([letter, list]) => {
                    return (
                        <div
                            className='fui-citySelect-citySection'
                            key={letter}>
                            <h4>{letter}</h4>
                            {list.map(city =>
                                <div
                                    onClick={() => onClick(city)}
                                    className='fui-citySelect-cityName'
                                    key={city}
                                >
                                    {city}
                                </div>)
                            }
                        </div>
                    )
                })}
            </div>
        </div>,
        document.body);
}

const CurrentLocation: React.FunctionComponent = () => {
    const [city, setCity] = useState<string>('加载中');
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', 'http://ip-api.com/json/?lang=zh-CN')
        xhr.onload = () => {
            const string = xhr.responseText;
            const obj = JSON.parse(string)
            const c = obj.city;
            setCity(c)
        }
        xhr.onerror = () => {
            setCity('未知')
        }
        xhr.send();
    }, [])
    return (
        <div className="currentCity">当前城市：{city}</div>
    )
}
export default CitySelect;