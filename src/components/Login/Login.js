import React, { useState } from 'react'
const Login = () =>{
    const [formData,setFormdata] = useState({
        'name':'',
        'username': '',
        'email':'',
        'password':''
        
    });

    const [errors,setError]=useState({
        'name':'',
        'username': '',
        'email':'',
        'password':''
    });

    const handleChange =(e)=>{
        const {name,value} = e.target;
        setFormdata((prevData) => ({
            ...prevData,
            [name]:value
        }))   
    }

    const validateForm = () =>{
        let valid = true
        if(!formData.username.trim()){
            setError((prevData) => ({
                ...prevData,
                'username':'Username should not empty'
            }))
            valid = false
        }

        if(!formData.password.trim()){
            setError((prevData) => ({
                ...prevData,
                'password':'password should not empty'
            }))
            valid = false
        }
        
        return valid
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validateForm()){
            console.log(formData);
            alert('Form Submitted')
        }
        else{
            alert('Validation Failed')
        }
        
    }


    return (
        <>
            <form onSubmit={(handleSubmit)}>

                <label>Name:</label>
                <input name='name' id='name' placeholder='name' onChange={handleChange} value={formData.name} />
                <br/>

                <label>UserName:</label>
                <input name='username' id='username' placeholder='username' onChange={handleChange} value={formData.username} />
                {errors.username && <span>{errors.username}</span>}
                <br/>   

                <label>Email:</label>
                <input name='email' id='email' placeholder='email' onChange={handleChange} value={formData.email} />
                <br/>

                <label>Password:</label>
                <input name='password' id='password' placeholder='password' onChange={handleChange} value={formData.password} />
                {errors.password && <span>{errors.password}</span>}

                <br/>

                <button>Submit</button>
            </form>
        </>
    )
}

export default Login