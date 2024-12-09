// import React from "react"

// props - שם מקובל
export function Person(props) {

    // props - properties
    console.log(props);

    // var - גלובלי - מוכר בכל מקום
    // var x
    // let - לוקאלי - מוכר רק במקום שהוגדר
    // let y
    // const - לוקאלי ואינו ניתן לשינוי
    // const z = 5

    // const name = 'Michal'
    // const age = 19

    return (
        // <div>
        //     {/* עטוף בסוגריים מסולסלות JS כל קוד */}
        //     <h4>name: {name}</h4>
        //     <h5>age: {age}</h5>
        // </div>

        // [
        //     <h4> name: { name }</h4>,
        //     <h5>age: {age}</h5>
        // ]

        // תגית ריקה
        // <React.Fragment>
        //     <h4>name: {name}</h4>
        //     <h5>age: {age}</h5>
        // </React.Fragment>

        <>
            <h3>~~~~~~~~~~~~~~~~~~~~</h3>
            <h4>name: {props.name}</h4>
            <h5>age: {props.age}</h5>
            <h3>~~~~~~~~~~~~~~~~~~~~</h3>
        </>

    )
}