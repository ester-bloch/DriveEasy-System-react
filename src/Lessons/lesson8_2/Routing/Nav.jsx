import { NavLink } from 'react-router-dom'
import './style.css'
import { useSelector } from 'react-redux'

export const Nav = () => {

    let user = useSelector(x => x.user.current)

    return <>
        <div className="nav">
            {user && user.username && <p className='un'>{user.username}</p>}
            <NavLink to="/home" className="link">Home</NavLink>
            <NavLink to="/login" className="link">Login</NavLink>
            <NavLink to="/products" className="link">Products</NavLink>
        </div>
    </>
}