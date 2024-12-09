import { useRef } from "react"

export const LoginRef = ({ login }) => {

    // ref - מצביע לפקד
    // reference
    // document.getElementById()
    const emailRef = useRef()
    const passRef = useRef()
    const hRef = useRef()

    const send = () => {
        console.log(emailRef);
        // emailRef - מצביע
        // .current - האלמנט שעליו הצביע
        const user = {
            email: emailRef.current.value,
            password: passRef.current.value
        }
        console.log(user);
        let f = login(user)
        if (f) {
            hRef.current.innerText = `Hello ${f.username}`
            hRef.current.style.color = 'salmon'
        }
        else{
            hRef.current.innerText = `Oopps!!!! We're sorry 😢`
            hRef.current.style.color = 'red'
        }
    }

    return <>
        <h2 ref={hRef}>Login:</h2>
        <label htmlFor='E'>Email:</label><br></br>
        <input id="E" type="email" ref={emailRef} placeholder="input email"></input><br></br>
        <label htmlFor='PW'>Password:</label><br></br>
        <input id="PW" type="password" ref={passRef} placeholder="input password"></input><br></br>
        <button onClick={send}>send</button>
    </>
}