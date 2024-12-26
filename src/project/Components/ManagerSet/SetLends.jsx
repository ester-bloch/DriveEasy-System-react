import { useEffect, useState } from "react"
import { getLendsFromSql } from "./managerApi"
import { OneLend } from "./OneLend"

export const SetLends=()=>{
    const [lends,setLends]=useState()
    useEffect(()=>{
        getLendsFromSql().then(res=>{
            setLends(res.data)
        }).catch(err=>{
            console.log(err);
        })
    },[])
    return<>
    {lends&& lends.map(l=><div>
        <h4>{l.id}</h4>
        <OneLend props={l}></OneLend>
    </div>
    )}
    </>
}