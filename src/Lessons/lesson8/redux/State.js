// npm i redux react-redux

// state - אובייקט שמכיל את כל המשתנים הגלובליים
// initialState - סטייט מאותחל
// שם מקובל, לא חובה
export const initialState = {
    // כל מפתח - משתנה גלובלי
    // חלק מהמשתנים הגלובליים יגיעו דרך קריאת שרת ממסד הנתונים
    // 
    products: [
        { id: 1, description: 'חלב', price: '6.71' },
        { id: 2, description: 'לחם', price: '8.9' },
        { id: 3, description: 'שמן', price: '6.9' },
        { id: 4, description: 'ביצים', price: '28' },
        { id: 5, description: 'מגבונים', price: '12' }
    ],
    currentUser: {},
    users: [
        { username: 'Sara', email: 's111@gmail.com', password: '111' },
        { username: 'Rivka', email: 'r222@gmail.com', password: '222' },
        { username: 'Rachel', email: 'r333@gmail.com', password: '333' },
        { username: 'Leah', email: 'l444@gmail.com', password: '444' },
        { username: 'Pnina', email: 'p555@gmail.com', password: '555' }
    ]
}