// הגדרה של פעולות שנרצה להפעיל על הסטייט
// פעולות - הוספה, עדכון, מחיקה
// שליפה תתבצע בדרך אחרת
// useSelector

// הגדרת פעולת - אובייקט ג'סון שמכיל שני מפתחות
// סוג - שם לפעולה
// פרמטרים

// הוספת מוצר
export const addStudent = (student) => {
    console.log('addStudentנכנסתי לאקשן ')
    return { type: 'ADD_STUDENT', payload: student }
}
// מחיקת תלמיד
export const removeStudent = (name) => {
    return { type: 'REMOVE_STUDENT', payload: name }
}
// הצבת היוזר הנוכחי - האם מנהל
export const setIsManager = (isManager) => {
    return { type: 'SET_IS_MANAGER', payload: isManager }
}
// הצבת התלמיד הנוכחי
export const setCurrentStudent= (id/*אין !!*/ ) => {
    return { type: 'SET_CURRENT_STUDENT', payload: id }
}
//שינוי גיל לתלמיד הנוכחי
export const changeAgeAction=(age)=>{
    console.log(`changeAgeActionנכנסתי ל age= ${age}`)
    return { type: 'CHANGE_AGE', payload: age}
}
