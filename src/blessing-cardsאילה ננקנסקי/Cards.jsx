import './cardsStyle.css'

export const Cards = ({ card }) => {
    const { from, to, bless, type, min, count } = card
    return <>
        <p className={bless}>
            <p>לכבוד {to} היקר
                {count == 1 && min == 'n' && 'ה'}
                {count >= 2 && min == 'n' && 'ות'}
                {count >= 2 && min == 'z' && 'ים'}</p>
            <p>{bless}</p>
            <p>ממני {from}</p>
            <img className="carsdImageClass" src={process.env.PUBLIC_URL + '/pic/' + type + '.jpg'}></img>
        </p>
    </>

}