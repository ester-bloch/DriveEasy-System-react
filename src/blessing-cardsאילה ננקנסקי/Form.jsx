import { Cards } from "./Cards"
import { useState } from "react"
export const Form = () => {
    const bless = ["birthday", "newBorn", "Shabbat"]
    const type = ["n", "z"]
    const [user, setUser] = useState({})

    const [flag, setFlag] = useState(false)

    const send = (event) => {
        event.preventDefault()
        setFlag(true)
    }

    return <>
        <form onSubmit={(e) => send(e)}>
            <input id="from" placeholder="from" onBlur={(e) => setUser({ ...user, from: e.target.value })}></input><br></br>
            <input id="to" placeholder="to" onBlur={(e) => setUser({ ...user, to: e.target.value })}></input><br></br>
            <select onChange={(e) => setUser({ ...user, bless: e.target.value })}>
                <option disabled selected>select bless</option>
                {bless.map((x) => <option key={x} value={x}>{x}</option>)}
            </select><br></br>
            <select onChange={(e) => setUser({ ...user, type: e.target.value })}>
                <option disabled selected>select type</option>
                {type.map((x) => <option key={x} value={x}>{x}</option>)}
            </select><br></br>
            <input id="amount" placeholder="input amount" onBlur={(e) => setUser({ ...user, amount: e.target.value })}></input><br></br>
            <input type="submit" value={'send'}></input>
        </form>

        {flag && <Cards card={user}></Cards>}
    </>
}
