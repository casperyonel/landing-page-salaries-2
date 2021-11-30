import axios from 'axios';
import React, {useState} from "react";

const Button = () => {
    let [email, setEmail] = useState({
        email: '',
    })

    const submit = e => {
        e.preventDefault()

        if (!e.target.value === '') {
            alert('Please add an email')
            return
        }
        // this doesn't work currently

        axios.post('/waitlist', { email })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    
        setEmail('')

    }
    
    return (
        <form  classname="form-outer" >
            <div className="form-main">
                <label >
                    <input className="input-box" placeholder="Company Name" type="text" onChange={e => setEmail(e.target.value)}/>
                    <input className="input-box" placeholder="Email Address" type="text" onChange={e => setEmail(e.target.value)}/>
                </label>
            </div>
            <div className="btn-outer">
                <button onClick={submit} className='btn'>Join the Waitlist</button>
                
             
            </div>
        </form>
    )
}
    
export default Button