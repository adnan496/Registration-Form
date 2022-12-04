import React, { useState } from 'react'

function DataInputs() {
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log (name, value);
        setUserDetails( {...userDetails, [name]:value}
            )
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const newRecords = {...userDetails, id: new Date().getTime().toString()
        
    };
    setUserDetails({
        username: "",
        email:"",
        phone:"",
        password:""
    })
    console.log(records)
    setRecords ([...records, newRecords]);
   


    const [records, setRecords] = useState([])

    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""

    }
    );

  return (
    <>

        <form action='' onSubmit={handleSubmit}>
            <div>
            <label htmlFor='username' > Full Name :</label>
            <input  type="text" autoComplete='off' 
                    name='username' id='username'
                    value={userDetails.name} onChange={handleInput} 
                    className='mx-3'></input>
             </div>
            
            <div>
            <label htmlFor='username' > E-mail :</label>
            <input  type="text" autoComplete='off'  
                    name='email' id='username'
                    value={userDetails.email} onChange={handleInput} 
                    className='mx-3'>
             </input>
            </div>

            <div>
            <label htmlFor='username' > Contact : </label>
            <input  type="text" autoComplete='off' 
                    name='phone' id='username'  
                    value={userDetails.phone} onChange={handleInput} 
                    className='mx-3'></input>
            </div>

            <div>
            <label htmlFor='username' > Password :</label>
            <input  type="password" autoComplete='off'
                    name='password' id='username' 
                    value={userDetails.password} onChange={handleInput} 
                    className='mx-3'></input>
            </div>
            
            <button type='submit' 
                    className='bg-blue-600'> Registration </button>
        </form>


        <div>
            {
                records.map((element) => {
                    return(
                        <div className=' ' key={element.id}>
                            <p> {element.username}</p>
                            <p> {element.email}</p>
                            <p> {element.phone}</p>
                            <p> {element.password}</p>
                            </div>
                    )
                })
            }
        </div>

        </>
        
    
  )
}

export default DataInputs