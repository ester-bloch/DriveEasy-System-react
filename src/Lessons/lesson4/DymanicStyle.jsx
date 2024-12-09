export const DynamicStyle = ({ num, color }) => {

    // let x = num > 40 ? num / 5 : num * 8

    let s = {
        color: 'purple',
        fontSize: num > 10 ? '70px' : '30px',
        border: num > 10 ? '1px black solid' : 'none',
        fontStyle: num > 10 && 'italic'
    }
    let style = num > 10 ? {
        // color: 'purple',
        color,
        fontSize: '70px',
        fontStyle: 'bold'
    } : {
        // color: 'applegreen',
        color,
        fontSize: '20px'
    }

    return <>
        { <p style={{ fontSize: num > 10 ? '80px' : '30px' }}>{num}</p> }
        { <p style={s}>{num}</p> }
        <p style={style}>{num}</p>
        { <p className={num > 10 ? 'big' : 'small'}>{num}</p> }

    </>
}