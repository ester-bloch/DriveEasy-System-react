import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    const thisUser = useSelector(x => x.thisUser);
    return (<>
        <div className='nav'>

            <NavLink to={'home'} className='link'>דף הבית</NavLink>
            <NavLink to={'login'} className='link'>התחברות</NavLink>
            <NavLink to={'fleetCars'} className='link'>צי הרכבים</NavLink>
            {thisUser && thisUser.codeTypeUser == '1' &&
                <NavLink to={'rentInformation'} className='link'>השאלות</NavLink>}
            {thisUser && <NavLink to={'/home#return'} className='link link1'>החזרת רכב</NavLink>}

        </div>
        {thisUser && <div id='profil'>{thisUser.userName[0]}</div>}
        <img id='logo' src='/pics/logo.png'/>

    </>
    );
};