import { BrowserRouter } from 'react-router-dom'
import { Card } from './Card'
import { Form } from './Form'
import {RoutingGood}from './RoutingGood'
export const Main = () => {
  //צרי פרויקט להכנת כרטיסי ברכה
  // עבור כל כרטיס נקבל את המאפיינים הבאים כפרופס:

  // מוען, נמען, איחול, איחול משני – לא חובה, סוג (יומולדת, ניו בורן, שנה טובה, חתונה, בר מצוה), מין, כמות – יחיד או רבים, תמונה

  // עיצוב הכרטיס לפי סוג – קלאס 
  // הצגת מין וכמות : לחני היקרה! / לשכנים היקרים!

  // צרי לפחות 3 כרטיסים שונים
  const List = [
    { description: 'talit', pic: 'Talleisim Davening' },
    { description: 'flower', pic: 'Flower 03' },
    { description: 'challa', pic: 'Challah and Knife 2' },
    { description: 'cover', pic: 'Challah Cover 2' },
  ]
  const nimamList = [
    { myname: 'אברהם', min: 'boy', amount: 1, pic: List[0], type: "birthday" }
    , { myname: 'חני', min: 'girl', amount: 0, pic: List[1], type: "new born" }
    , { myname: 'אבא ואמא', min: 'boy', amount: 2, pic: List[2], type: "happy year" }
    , { myname: 'חברות', min: 'girl', amount: 9, pic: List[3], type: "wedding" }
  ]
console.log("I'm in the main")
  return <>

    <BrowserRouter>
      <Form></Form>
      <RoutingGood></RoutingGood>
    </BrowserRouter>
    {/* <Card props={nimamList[0]}></Card>
   <Card props={nimamList[1]}></Card>
  <Card props={nimamList[2]}></Card>
  <Card props={nimamList[3] }></Card> */}

  </>
}