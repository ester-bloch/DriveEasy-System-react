import { useDispatch, useSelector } from "react-redux"
import { remove, selectAvailable } from "./redux/productSlice"

export const Products = () => {

    // const list = useSelector(state => state.product)

    const list = useSelector(selectAvailable)

    let dispatch = useDispatch()

    return <>
        {list && list.map(x => <div key={x.id}>
            <p>{x.desc}</p>
            <p>{x.amount}</p>
            <button onClick={() => dispatch(remove(x.id))}>delete</button>
        </div>)}
    </>
}