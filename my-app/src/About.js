import React, { useState } from 'react'

const About = () => {
    const [data,setdata] = useState(new Date())
    const handelsubmit = (e) =>{
        e.preventDefault();
let vv = data
console.log('33',vv)
    }
  return (
    <div>
      <input  type="text" onChange={(e)=>setdata(e.target.value)} value={data} />
      <button onClick={handelsubmit}>submit</button>
    </div>
  )
}

export default About
