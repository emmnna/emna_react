
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export default function Event(props) {
    const [datas, setData] = useState(props.data);
    const buy=()=>{
        props.showAlert()
        setData((previous)=>({... previous,nbTickets:previous.nbTickets-1, nbParticipants:previous.nbParticipants+1}))
    
    }
    const like=()=>{
        setData((previous)=>({... previous, like:!previous.like}))
    }
    return( 
        <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={datas.nbTickets===0 ? `../images/sold_out.png` : `../images/${datas.img}`} />
    <Card.Body>
      <Card.Title>Festivale internationale de carthage</Card.Title>
      <Card.Text>
        price : {datas.price}
      </Card.Text>
      <Card.Text>number of tickets : {datas.nbTickets}</Card.Text>
      <Card.Text>
        number of participants : {datas.nbParticipants}
      </Card.Text>
      
      <Button variant="primary" onClick={buy} disabled={datas.nbTickets===0 ? true : false}>Book an event</Button>
      <Button variant="primary" onClick={like} >{datas.like=== true ? "dislike" : "like"}</Button> 
    </Card.Body>
    </Card>
    </>
    )
}
