import { useState } from "react"
import data from "../data/events.json"
import Event from "./Event"
import Alert from 'react-bootstrap/Alert';
export default function Events() {
    const [showAlert,setShowAlert]=useState(false)
    const activeAlert=()=>{
        setShowAlert(true)
        setTimeout(()=>setShowAlert(false), 2000)
    }
    return (
        <>
        {showAlert && <Alert >
          You have booked an event
        </Alert>
        
    }
        {data.map((d,i)=>{
            return <Event key={i} data={d} showAlert={activeAlert}/>

        }) 

    }
    
        
        </>

    )
}