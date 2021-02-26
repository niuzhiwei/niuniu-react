import React, { HTMLAttributes, UIEventHandler, MouseEventHandler, useState, useEffect, useRef } from 'react';
import './scroll.scss';
import scrollbarWidth from './scrollbar-width';

interface Props extends HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<Props> = (props) => {
    const { children, ...rest } = props;
    const [barHeight, setBarHeight] = useState(0);
    const [barTop, _setBarTop] = useState(0);
    const [BarVisible, setBarVisible] = useState(false)
    const setBarTop = (number: number) => {
        const { current } = containerRef
        const scrollHeight = current!.scrollHeight;//滚动全高
        const viewHeight = current!.getBoundingClientRect().height;//可视范围高度
        const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight
        if (number < 0) { return }
        if (number > maxBarTop) { return }
        _setBarTop(number)
    }
    const timerIdRef = useRef<number | null>(null);
    const onScroll: UIEventHandler = (e) => {
        setBarVisible(true);
        const { current } = containerRef
        const scrollHeight = current!.scrollHeight;//滚动全高
        const viewHeight = current!.getBoundingClientRect().height;//可视范围高度
        const scrollTop = current!.scrollTop;
        setBarTop(scrollTop * viewHeight / scrollHeight);
        if (timerIdRef.current !== null) {
            window.clearTimeout(timerIdRef.current)
        }
        timerIdRef.current = window.setTimeout(() => {
            setBarVisible(false)
        }, 300)
    }
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {//mounted的时候计算高度
        const scrollHeight = containerRef.current!.scrollHeight;//滚动全高
        const viewHeight = containerRef.current!.getBoundingClientRect().height;//可视范围高度
        setBarHeight(viewHeight * viewHeight / scrollHeight)
    }, []);

    const draggingRef = useRef(false);
    const firstYRef = useRef(0);
    const firstBarTopRef = useRef(0);
    const onMouseDownBar: MouseEventHandler = (e) => {
        draggingRef.current = true;
        firstYRef.current = e.clientY;
        firstBarTopRef.current = barTop
    }
    const onMouseMoveBar = (e: MouseEvent) => {
        if (draggingRef.current) {
            const delta = e.clientY - firstYRef.current;
            const newBarTop = firstBarTopRef.current + delta
            setBarTop(newBarTop);
            const { current } = containerRef
            const scrollHeight = current!.scrollHeight;//滚动全高
            const viewHeight = current!.getBoundingClientRect().height;//可视范围高度
            containerRef.current!.scrollTop = newBarTop * scrollHeight / viewHeight;
        }
    }
    const onMouseUpBar = () => {
        draggingRef.current = false
    }
    const onSelect = (e: Event) => {
        if (draggingRef.current) {
            e.preventDefault();
        }
    }
    useEffect(() => {
        document.addEventListener('mouseup', onMouseUpBar)
        document.addEventListener('mousemove', onMouseMoveBar)
        document.addEventListener('selectstart', onSelect)
        return () => {
            document.removeEventListener('mouseup', onMouseUpBar)
            document.removeEventListener('mousemove', onMouseMoveBar)
            document.removeEventListener('selectstart', onSelect)
        }
    }, [])
    return (
        <div
            className='fui-scroll'
            {...rest}>
            <div
                className='fui-scroll-inner'
                style={{ right: -scrollbarWidth() }}
                ref={containerRef}
                onScroll={onScroll}
            >
                {children}
            </div>
            {BarVisible &&
                <div className='fui-scroll-track'>
                    <div
                        className="fui-scroll-bar"
                        style={{ height: barHeight, transform: `translateY(${barTop}px)` }}
                        onMouseDown={onMouseDownBar}

                    ></div>
                </div>
            }
        </div>
    )
}
export default Scroll