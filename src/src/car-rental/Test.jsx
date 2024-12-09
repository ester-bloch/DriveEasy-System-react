import './test.css'
export const Test = () => {
  return(<><div id='divAddCar1'>
    <header>MINIMALISTIC FORM</header>
    <form  className="topBefore" id="form">

      <input className="inputAddCar" id="name" type="text" placeholder="NAME"/>
        <input className="inputAddCar" id="email" type="text" placeholder="E-MAIL"/>
        <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
        <button id="submit" type="submit" value="GO!"/>

          </form></div>
        </>)
}