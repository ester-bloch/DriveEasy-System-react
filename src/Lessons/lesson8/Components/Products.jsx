import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router"
import { setCurrentProduct } from '../redux/Actions'

export const Products = () => {

    // state.products
    // useSelector - שליפה מתוך הסטייט
    // מקבל ביטוי למבדא - הספק מכניס לתוך הפרמטר את הסטור
    // מתאפשרת גישה ישירה לסטייט
    // let list = useSelector(store => store.products)
    let list = useSelector(x => x.products)

    // לא כותבים בתוך פונקציה שבתוך קומפוננטה use כל מה שמתחיל ב
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const show = (id) => {
        // state - current product
        // dispatch - action
        dispatch(setCurrentProduct(id))
        // ניתן לא להגדיר פעולות - ליצור אותן בתוך הדיספצ
        // dispatch({ type: 'SET_CURRENT_PRODUCT', payload: id })

        navigate(`details`)
    }

    return <>
        {list && list.map(x => <div>
            <p key={x.id}>{x.description}</p>
            <button onClick={() => show(x.id)}>show details</button>
        </div>
        )}
        <Outlet></Outlet>
    </>
}