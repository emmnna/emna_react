import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './Composants/ClassComponant'
import FunctionalComponent from './Composants/FunctionalComponent'
import Events from './Composants/Events'

function App() {
    
      const hello = () =>{
        return <p>hello world {10+8}</p>}
        name="Jane Doe"
        const element =<h1>hello,{name}</h1>
        const tab=[
          {name:"twin3",module:"react"},
          {name:"twin3",module:"express"}
        ]
        const fctTest=() =>{
         return tab.map((e,i) =>{
            return <li key={i}>{e.name}&{e.module}</li>
          })
        }
        return(
          <>
          
           <Events/>
          </>
        )
   

}

export default App
