import './style.css'

export const Person = ({ id, name, numChildren, yearBorn }) => {

    return <>
        <div className="card">
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>year born: {yearBorn}</p>
            <p>num children: {numChildren}</p>
        </div>
    </>
}