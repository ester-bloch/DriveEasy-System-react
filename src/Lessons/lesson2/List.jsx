export function List() {

    let fruits = [
        { name: 'peach', color: 'pink' },
        { name: 'apple', color: 'green' },
        { name: 'lemon', color: 'yellow' },
        { name: 'strawberry', color: 'red' },
        { name: 'bluberries', color: 'blue' },
        { name: 'orange', color: 'orange' },
    ]

    let arr = ['aaa', 'bbb', 'ccc', 'ddd']

    return <>
        {/* map - פונקציה שעוברת על מערך וממפה כל אחד מהאובייקטים במערך */}
        {/* ממפה - מחזירה תצוגה הטמלית */}
        {/* הפרמטר הראשון - האיבר בעצמו */}
        {/* הפרמטר השני - האינדקס */}
        {arr.map((item, index) => <p key={index}>{index} - {item}</p>)}
        {fruits.map((f, i) => <p key={i}>{f.name} is {f.color}</p>)}
        {/* {fruits.map(item => item.name.length > 5 && <p>{item.name} is {item.color}</p>)} */}
    </>
}

// class Array
// function map(){
//     array.forEach(element => {
//         return <p>{name} is {color}</p>
//     });
// }