import Challah from './images/Challah and Knife 2.jpg'
import Cover from './images/Challah Cover 2.jpg'
import Talit from './images/Talleisim Davening.jpg'
import Flower from './images/Flower 03.jpg'

import './style.css'

export const Album = ({ pictures }) => {

    return <>
        <div className='album'>
            {/* <img className="img" alt="Challah" src={Challah}></img>
            <img className="img" alt="Cover" src={Cover}></img>
            <img className="img" alt="Talit" src={Talit}></img>
            <img className="img" alt="Flower" src={Flower}></img> */}

            {pictures.map(p => <img className="img" alt={p.description}
                // שמירת הקבצים בתייקיה הראשית של הפרויקט - קבצים סטטיים
                // process.env.PUBLIC_URL - גישה לתיקייה
                // /images/ - המשך ניתוב למיקום הקובץ
                // p.pic - שם התמונה כמו שנשמר באובייקט
                // .jpg - סיום הניתוב
                // אם במאפיין האובייקט נשמר גם הסיומת של סוג הקובץ, אין צורך לכתוב שוב
                //  src={`${process.env.PUBLIC_URL}/images/${p.pic}.jpg`}
                src={process.env.PUBLIC_URL + '/images/' + p.pic + '.jpg'}>

            </img>)}
        </div>
    </>
}