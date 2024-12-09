import { useState } from "react";
import { getByYearAndChildren, getPeople } from "./api";
import { Person } from "./Person";
import './style.css'
import { useEffect } from "react";

export const People = () => {

    // בעת טעינה של הקומפוננטה נשלוף את המערך מהשרת
    const [list, setList] = useState([])

    // 1. api request - קריאות שרת

    // 2. life cycle - מחזור החיים של הקומפוננטה
    useEffect(() => {
        // בעת טעינה
        getPeople()
            // בעת הצלחה - מה שיכנס לתוך הפרמטר - אובייקט שמכיל את מה שחזר מהשרת
            .then(x => {
                console.log(x);
                setList(x.data)
            })
            // בעת כישלון - מה שיכנס לתוך הפרמטר - השגיאה
            .catch(error => {
                console.log(error.message);
            })
    }, [])

    // const func = () => {
    //     console.log('func');
    // }

    // כל פונקציה שמופעלת בחוץ תופעל בכל רנדור של הקומפוננטה
    // func()

    const send = (e) => {
        e.preventDefault();
        let year = e.target[0].value
        let num = e.target[1].value
        getByYearAndChildren(year, num)
            .then(x => {
                setList(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })

    }

    return <>
        <form onSubmit={(e) => send(e)}>
            <input placeholder="input year"></input>
            <input placeholder="input num children"></input>
            <input type="submit" value="send"></input>
        </form>

        <div className="cards">
            {list && list.map((p, i) =>
                <Person
                    key={i}
                    id={p.id}
                    name={p.name}
                    numChildren={p.numChildren}
                    yearBorn={p.yearBorn}
                ></Person>)}
        </div>
    </>
}