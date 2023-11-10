import React, { useState } from 'react'
import data from './data'


const App = () => {
  const[count,setCount]=useState(1)
  const[text,setText]=useState([])
  const handleSubmit=(e)=>{
    e.preventDefault()
    let amount=parseInt(count)
    setText(data.slice(0,amount))
    
  }
  return <section className='section-center'><h4>Tired of boring Lorem Ipsum</h4>
  <form className='lorem-form' onSubmit={handleSubmit}><label htmlFor="amount">Paragraphs:</label>
  <input type="number" step='1' min='1' max={8} value={count} onChange={(e)=>setCount(e.target.value)}/>
  <button className='btn'>generate</button></form>
  <article className='lorem-text'>
    <>{text.map((paragraphs)=>{
      return <p>{paragraphs}</p>
    })}</>
  </article>
  
 
  </section>

  
}

export default App