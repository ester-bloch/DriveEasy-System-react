// ייבוא של קובץ עיצוב - רק ניתוב
import './style.css'

export const InlineStyle = () => {

    // סטייל בתוך השורה:
    // נקיף ב 2 סוגריים מסולסלות
    // 1. כאובביקט ג'סון
    // 2. מאפיין שאינו מחרוזת

    // camelCase - מילה שניה באות גדלוה
    const s = { fontSize: '50px', color: 'hotpink' }

    return <>
        <p style={{ fontSize: '20px', color: 'orange' }}>Hello</p>
        <p style={s}>Hello</p>
        <p className="hello">Hello</p>
    </>
}