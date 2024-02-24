import React from 'react';
export default class ClassComponent 
extends React.Component{
    // bch naamlou state bl constructeur
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         val : "hello val state 1",
    //         obj : {
    //             valobj : 10
    //         }
    //     }
    // }

    state ={
                val : "hello val state 1",
                obj : {
                    valobj : 10
                }
            }
    render(){
        return(
        <>
        <h1> Class Component {this.props.name}</h1>
        <p>{state.val}&{state.obj.valobj}</p>
        </>
        )
    }

}