import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({
    first_name: "",
    last_name: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    setData({
      first_name : e.target[0].value,
      last_name : e.target[1].value
    })
  }

  return (
    <>
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>

        <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center' }}>
          <p>First Name : </p>
          <input type='text' name="first_name" style={{ height: "25px", marginLeft: '15px' }} />
        </div>

        <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center' }}>
          <p>Last Name : </p>
          <input type='text' name="last_name" style={{ height: "25px", marginLeft: '15px' }} />
        </div>

        <br />
        <button type='submit'>Submit</button>
      </form>

      {data.first_name && <p> Full Name: {data.first_name} {data.last_name}</p>}
    </>
  )
}

export default App
