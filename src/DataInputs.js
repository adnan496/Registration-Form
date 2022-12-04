import React, { useState } from 'react'

function DataInputs() {
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""

    }
    );

    const [records, setRecords] = useState([]);


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log (name, value);

        setUserDetails( {...userDetails, [name] :value})
};
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...userDetails, id : new Date().getTime().toString() }

            setRecords([...records, newRecord]);
            console.log(records)

            setUserDetails({
                username: "",
                email:"",
                phone:"",
                password:""
            })
        
        };
    

   
    
   
    // setRecords ([...records, newRecords]);
   




    
  

  return (
    <>

        <form action='' onSubmit={handleSubmit}>
            <div>
            <label htmlFor='username' > Full Name :</label>
            <input  type="text" autoComplete='off' 
                    value={userDetails.name} onChange={handleInput} 
                    name='username' id='username'
                    className='mx-3'></input>
             </div>
            
            <div>
            <label htmlFor='email' > E-mail :</label>
            <input  type="text" autoComplete='off'  
                    value={userDetails.email} onChange={handleInput} 
                    name='email' id='email'
                    className='mx-3'>
             </input>
            </div>

            <div>
            <label htmlFor='phone' > Contact : </label>
            <input  type="text" autoComplete='off'
                    value={userDetails.phone} onChange={handleInput} 
                    name='phone' id='phone'  
                    className='mx-3'></input>
            </div>

            <div>
            <label htmlFor='password' > Password :</label>
            <input  type="password" autoComplete='off'
                    value={userDetails.password} onChange={handleInput} 
                    name='password' id='password' 
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