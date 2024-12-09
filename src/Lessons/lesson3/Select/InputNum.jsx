export const InputNum = (props) => {

    const { setNum } = props

    return <>
        <h4>Input Num Of Beds:</h4>
        <input type="number" placeholder="input name" onBlur={(e) => setNum(e.target.value)}></input>
    </>
}