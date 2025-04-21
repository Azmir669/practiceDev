import React from 'react'
const person=[
    {
        name:'azmir',
        city:'yadiki',
        job:'hunting'
    }
]

const Arraysample = () => {
  return (
    <div>
      {person.map((item)=>{
        return(
        <div>
            <h1>my name is{item.name}</h1>
            <h1>my place is{item.city}</h1>
            <h1>my job is is{item.job}</h1>
        </div>
        
    
    )
      })}
    </div>
  )
}

export default Arraysample
