import React from 'react'
import { useState } from 'react'

function FunctionForm() {
    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        gen: ""
    })

    function handleClick(event) {
        const {name, value} = event.target
        setDataForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(dataForm)
        setDataForm({
            name:"",
            email: "",
            gen: ""
        })
    }

  return (
    <div className='form'>
        <h1>Student Function Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type='text' name="name" 
            value={dataForm.name} 
            onChange={handleClick} />
            <br /><br />

            <label htmlFor='email'>Email:</label>
            <input type='text' name='email' 
            value={dataForm.email} 
            onChange={handleClick} />
            <br /><br />

            <label htmlFor='gen'>Gen:</label>
            <input type='text' name='gen'
            value={dataForm.gen}
            onChange={handleClick} />
            <br /><br />

            <button>Submit</button>
        </form>
      
    </div>
  )
}

export default FunctionForm
