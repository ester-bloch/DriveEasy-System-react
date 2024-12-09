export const SelectHotel = ({ list, setHotel }) => {
    return <>
        <h4>Select Hotel:</h4>
        <select onChange={(e) => setHotel(e.target.value)}>
            <option disabled selected>select hotel</option>
            {list.map((x, i) => <option key={i} value={x}>{x}</option>)}
        </select>
    </>
}