import { useRef, useState } from "react"
import { Card } from "../homeworkEsti/Card"

import { useNavigate } from "react-router"
export const Form = () => {
    const [flag, setFlag] = useState(false)
    const nameref = useRef()
    const minref = useRef()
    const amounteref = useRef()
    //const nameref = useRef()

    const navigate = useNavigate()
    const [niman, setNiman] = useState({})
    // const [user, setUser] = useState({})
    // {myname:'חברות',min:'girl', amount:9, pic:  List[3],type:"wedding"}
    const send = () => {
        navigate('/Card/' + niman)
        setFlag(true);

    }
    // return <>
    //     <form onSubmit={(e) => send(e) }>
    //         <h2>fill setails:</h2>

    //         <label htmlFor='name'>Name of Niman:</label><br></br>
    //         <input id="name" type="name" placeholder="input name of your niman" onBlur={(e) => setNiman({ ...niman, name: e.target.value })}></input><br></br>
    //         <label htmlFor='min'>min:</label><br></br>
    //         <input id="min" type="min" placeholder="input your niman's min" onBlur={(e) => setNiman({ ...niman, password: e.target.value })}></input><br></br>
    //         {/* <label htmlFor="amount"></label> */}
    //         {/* <input type="number" id="amount" placeholder="input amount of nimanim" onBlur={(e) => setNiman({ ...niman, amount: e.target.value })}> </input> */}
    //         {/* <input type="submit" value={"toSend"}></input> */}
    //     </form>
    //      {flag=true && <Card props={niman}></Card>} 
    // </>
    return <>
        <input id="to" placeholder="to" ref={nameref} onBlur={(e) => setNiman({ ...niman, myname: e.target.value })}></input><br></br>
        <input id="min" placeholder="min "ref={minref} onBlur={(e) => setNiman({ ...niman, min: e.target.value })}></input><br></br>

        {/* <select onChange={(e) => setUser({ ...user, bless: e.target.value })}>
                <option disabled selected>select bless</option>
                {bless.map((x) => <option key={x} value={x}>{x}</option>)}
            </select><br></br> */}
        {/* <select onChange={(e) => setUser({ ...user, type: e.target.value })}>
                <option disabled selected>select type</option>
                {type.map((x) => <option key={x} value={x}>{x}</option>)} */}
        {/* </select><br></br> */}
        <input id="amount" placeholder="input amount" ref={amounteref}onBlur={(e) => setNiman({ ...niman, amount: e.target.value })}></input><br></br>
        <button onClick={send}>send</button>

        {flag && <Card card={{myname:nameref.current.value,amount:amounteref.current.value,min:minref.current.value}}></Card>}
    </>
}