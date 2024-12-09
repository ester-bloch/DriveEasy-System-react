// import React from "react"

// props - שם מקובל
// export function Person(props) {
// חובה לקבל אובייקט ג'סון
export function Person({ name, age }) {

    // props - properties
    // console.log(props);

    // חילוץ הפרמרטים שנשלחו למשתנים
    // כדאי בעיקר כאשר משתמשים מס' פעמים בערך
    // props.key חסכון בכתיבת 
    // const name = props.name
    // const age = props.age

    // js - json 
    // שליפת ערכים מתוך אובייקט ג'סון
    // באמצעות הגדרת אובייקט המכיל את שמות המפתחות
    // const { name, age } = props

    return (
        <>
            <h3>~~~~~~~~~~~~~~~~~~~~</h3>
            <h4>name: {name}</h4>
            <h5>age: {age}</h5>
            <h3>~~~~~~~~~~~~~~~~~~~~</h3>
        </>
    )
}

// הגדרת ערך ברירת מחדל למאפיינים מסוימים
Person.defaultProps = {
    name: 'Annonymous',
    age: 0
}