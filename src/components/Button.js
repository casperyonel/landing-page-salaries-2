import axios from 'axios';
import React, {useState} from "react";

const Button = () => {
    let [email, setEmail] = useState({
        email: '',
    })

    let [companyName, setCompanyName] = useState({
        companyName: '',
    })

    let [count, setCount] = useState(0)

    

    const submit = e => {
        e.preventDefault()
        if (!email || !companyName) {
            alert('Please add your company name and email!')
            return
        }
        axios.post('/waitlist', { email, companyName })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        
        axios.get('/waitlistCount')
        .then(res => {
            setCount(res.data[0].count)
            // axios sends this to us in res.data form still, as an object, and then that object is an array since it's from database.
            // .count is the way we're accessing the 
        })
        .catch(err => console.log(err))

        setEmail('')
        setCompanyName('')
        setCount(0)

    }
    
    return (
        <form  classname="form-outer" >
            <div className="form-main">
                <label >
                    <input className="input-box" placeholder="Company Name" type="text" onChange={e => setCompanyName(e.target.value)}/>
                    <input className="input-box" placeholder="Email Address" type="text" onChange={e => setEmail(e.target.value)}/>
                </label>
            </div>
            <div className="btn-outer">
                <button onClick={submit} className='btn'>Join the Waitlist</button>
                
            </div>
            <div>Waitlist position: {count} </div>
        </form>
    )
}
    
export default Button