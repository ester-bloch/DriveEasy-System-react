export const Select = ({ list, set, text }) => {
    return <>
        <h4>select {text}:</h4>
        <select onChange={(e) => set(e.target.value)}>
            <option selected disabled>select {text}</option>
            {/* Warning: Each chile in a list should have a unique key. */}
            {/* כל ילד במערך מומלץ שיהיה לו מפתח יחודי */}
            {list.map(x => <option key={x} value={x}>{x}</option>)}
        </select>
    </>
}