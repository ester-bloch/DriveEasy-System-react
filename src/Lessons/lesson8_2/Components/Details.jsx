import { useSelector } from "react-redux"

export const Details = () => {

    let product = useSelector(store => store.product.current)

    return <>
        {product &&
            <div>
                <p>description: {product.description}</p>
                <p>price: {product.price}</p>
            </div>
        }
    </>
}