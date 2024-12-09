export function Child(props) {

    const { name, age } = props

    return <>
        <h3>~~~~~~~~~~~~~~~~~~~~~~~~~</h3>
        <h2>{name} אני בן {age}</h2>
        {/* HTML בתוך JS שרשור קוד */}
        {/* shorted if */}
        {name && name.length > 4 ? <h5>שם ארוך</h5> : <h5>שם קצר</h5>}
        {/* condition */}
        {age >= 9 &&
            <>
                <h3>אני כבר ילד גדול!</h3>
                <h2>הידד! אני יכול לחצות את הכביש לבד!!!👍😁🚗</h2>
            </>
            // <h3>אני כבר ילד גדול!</h3> &&
            // <h2>הידד! אני יכול לחצות את הכביש לבד!!!👍😁🚗</h2>
        }
        {/* {age >= 9 ||
            <h2>הידד! אני יכול לחצות את הכביש לבד!!!👍😁🚗</h2>
        } */}
    </>
}
