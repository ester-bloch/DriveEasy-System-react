export const Details = props => {

    const { num, city, hotel } = props

    return <>
        {/* שלום לפלוני */}
        {/* הזמנת 5 כרטיסים במלון אלמוני בעיר פלמונית */}
        <h3>You order {num} beds in {hotel} hotel in {city}.</h3>
        <h4>HAVE AN AMAZING VACATION!!🛌🌴😊</h4>
    </>
}