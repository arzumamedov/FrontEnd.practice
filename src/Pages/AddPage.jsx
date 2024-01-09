import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddPage() {

  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState('')
  function handleAdd() {
    
    fetch("http://localhost:3000/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name:name, surname:surname, age:age })
    })
 navigate("/home")
  }

  

  return (
    <>
        <form onSubmit={handleAdd}>
          <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder='Enter Surname' onChange={(e) => setSurname(e.target.value)} />
          <input type="text" placeholder='Enter Age' onChange={(e) => setAge(e.target.value)} />
          <button>Add</button>
        </form>
    </>
  )
}

export default AddPage