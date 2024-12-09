import { useState } from "react";
import { getByYearAndChildren } from "./api"

export const OnePerson = () => {

    const [person, setPerson] = useState()

    const send = (e) => {
        e.preventDefault();
        let year = e.target[0].value
        let num = e.target[1].value
        getByYearAndChildren(year, num)
            .then(x => {
                setPerson(x.data[0])
            })
            .catch(err => {
                console.log(err.message);
            })

    }

    return <>
        <form onSubmit={(e) => send(e)}>
            <input placeholder="input year"></input>
            <input placeholder="input num children"></input>
            <input type="submit">send</input>
        </form>
    </>
}