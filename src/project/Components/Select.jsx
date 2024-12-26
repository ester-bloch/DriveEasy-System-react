export const Select = ({ref, funcOnChng, set,list, text }) => {
    // console.log(list);
    // console.log(text);

    return <>
        <h4>:select {text}</h4>
        <select ref={ref}onChange={(e) => {
            console.log(e.target.value)
            {set&&set(e.target.value)}
          {funcOnChng &&funcOnChng(e.target.value)}
        }}>
            <option selected disabled>select {text}</option>
            {list.map(x => <option key={x} value={x}>{x}</option>)}
        </select>
    </>
}