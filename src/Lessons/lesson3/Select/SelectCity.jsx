export const SelectCity = ({ cities, set }) => {
    return <>
        <h4>Select City:</h4>
        <select onChange={(e) => set(e.target.value)}>
            <option selected disabled>select city</option>
            {/* Warning: Each chile in a list should have a unique key. */}
            {/* כל ילד במערך מומלץ שיהיה לו מפתח יחודי */}
            {cities.map(city => <option key={city} value={city}>{city}</option>)}
        </select>
    </>
}