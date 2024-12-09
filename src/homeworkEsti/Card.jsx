export const Card=( props)=>{
console.log(props)
    const {amount,pic,type,myname,min}=props
   // const {myname,min,amount,pic}=props;
   let single=min=="girl"?"יקרה":"יקר"
   let plural=min=="boy"?"יקרים":"יקרות"
    let description =  amount<2?single:plural
    let s=`ל${myname  } ה${description}`
    let Birthday={color:'red',fontSize:'40px',border:'2px solid blue',fontStyle:'italic'};
    let born={color:'salmon',border:'2px solid green',fontStyle:'italic'}
    let wedding={color:'green',fontSize:'30px',border:'2px solid red',fontStyle:'italic'}
    let year={color:'yellow',fontSize:'50px',border:'2px solid salmon',fontStyle:'italic'}
   //src=`${process.env.PUBLIC_URL}/images/${p.pic}.jpg`
   let wish=type=="birthday"?"happyBirthday":type=="new born"?"new born":type=="happy year"?"happy year":"wedding"
   let style=type=="birthday"?Birthday:type=="new born"?born:type=="happy year"?year:wedding
return <>
  <p>{s}</p>
  <p style={style}>{wish}</p>
  <p>{process.env.PUBLIC_URL}</p>
  <img src={`${process.env.PUBLIC_URL}/images/${pic}.jpg`}></img>
  {/* <p> {pic}</p>
<p>{myname+s} </p> */}

</>
}



