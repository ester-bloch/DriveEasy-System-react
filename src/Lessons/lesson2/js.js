// פונקציה אנונימית
// פונקצית חץ
// אין משמעות לפונקציה אנונימית
// כי אי אפשר להפעיל אותה
() => {
    return 5;
}

const func1 = () => {
    return 5;
}

// const x = 9;
// const y ="aaa"
// let arr
// arr = [1, 2, 3, 4]
// arr.forEach(element => {
//     console.log(element);
// });

console.log(func1());

// אם אין פרמטרים - חובה לשים סוגריים עגולות
const f1 = () => {
    console.log("f1");
}

// אם הפונקציה מקבלת רק משתנה אחד - ניתן לוותר על הסוגריים
const f2 = x => {
    console.log("f2 ", x);
}

const f3 = (x, y) => {
    return x * y
}

const f4 = (x, func) => {
    return func() > x
}

const f5 = () => {
    return Math.floor(Math.random() * 10 + 1)
}

console.log(f4(4, f5));

const f6 = () => {
    return 10;
}

console.log(f4(13, f6));

console.log(f4(40, () => {
    return Math.floor(Math.random() * 100)
}))