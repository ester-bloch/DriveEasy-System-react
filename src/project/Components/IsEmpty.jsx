import { blue } from "@mui/material/colors"

export const IsEmpty = ({ color }) => {
    const s={ "background-color": `${color=="green"?color:"brown"}` }
    return <div className="IsEmpty" style={s}>
        {/* {console.log(color + "color")} */}
        {color == "green" && <Empty></Empty>}
        {color == "red" && <Full></Full>}
    </div>
}
const Empty = () => {
    return <>
        <div  color="green">✌🏼</div>
    </>

}

const Full = () => {
    return <>
        <div  color="brown" >❌</div>
    </>
}
const signs="🚫❌❗🛑✋🏼"


