import { useDispatch, useSelector } from "react-redux"
import { decrease, increase, increaseBy } from "./redux/counterSlice"
import { useState } from "react"

export const PresentCounter = () => {

    const dispatch = useDispatch()

    const counter = useSelector(state => state.counter.value)

    const [num, setNum] = useState(0)

    return <>
        <h1>{counter}</h1>
        <button onClick={() => dispatch(increase())}>increase</button>
        <button onClick={() => dispatch(decrease())}>decrease</button>
        <input placeholder="input num" onBlur={(e) => setNum(+e.target.value)}></input>
        <button onClick={() => dispatch(increaseBy(num))}>increase by</button>
    </>
}