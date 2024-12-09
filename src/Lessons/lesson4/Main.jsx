import { Album } from "./Album"
import { DynamicStyle } from "./DymanicStyle"
import { InlineStyle } from "./InlineStyle"

export const Main = () => {

    const list = [
        { description: 'talit', pic: 'Talleisim Davening' },
        { description: 'flower', pic: 'Flower 03' },
        { description: 'challa', pic: 'Challah and Knife 2' },
        { description: 'cover', pic: 'Challah Cover 2' },
    ]

    return <>
        {<InlineStyle></InlineStyle>}
        <DynamicStyle num={50} color='red'></DynamicStyle>
        <DynamicStyle num={5} color='yellow'></DynamicStyle>
        <DynamicStyle num={14} color='salmon'></DynamicStyle>
        <DynamicStyle num={2} color='green'></DynamicStyle>
        {<Album pictures={list}></Album>}
    </>
}