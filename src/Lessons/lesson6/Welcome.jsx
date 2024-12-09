import { useParams } from "react-router"

export const Welcome = () => {

    // params - פרמטרים שנשלחו בניתוב
    const params = useParams()
    console.log(params);

    return <>
        <h1>Welcome {params.name}!</h1>
        <p>your password is: {params.password}</p>
    </>
}