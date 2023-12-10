import React, { useState, useEffect } from "react";

export default function RegisterForm(){
    // details is used to control the form inputs including radiobox
    const [details,setDetails] = useState({
        name: '',
        email: '',
        phone: '',
        color: '',
    })
    // validName, validEmail, validPhone is to check validity with regular expression
    // isSubmit is permitted or set true if all the above are valid
    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPhone, setValidPhone] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    // handleChange function is to control form inputs
    const handleChange = (e) => {
        const {name,value} = e.target;
        setDetails({...details,[name]: value});
    }

    // this useEffect is used for name validation check whenever name input changes
    useEffect(()=>{
        if(/[a-z].*[0-9]|[0-9].*[a-z]/g.test(details.name)){
            setValidName(true);
        }
        else{
            setValidName(false);
        }
    },[details.name]);

    // this useEffect is used for email validation check whenever email input changes
    useEffect(()=>{
        if(/^([a-z]+)([\d.-])*([a-z])*@([a-z]+)\.([a-z]{2,})$/.test(details.email)){
            setValidEmail(true);
        }
        else{
            setValidEmail(false);
        }
    },[details.email]);

    // this useEffect is used for phone validation check whenever phone input changes
    useEffect(()=>{
        let removePlus = details.phone.replace(/\+/g,'')
        if(/^(9)([0-9]{9,11})$|^(0)([0-9]{8,10})$/.test(removePlus)){
            setValidPhone(true);
        }
        else{
            setValidPhone(false);
        }
    },[details.phone])

    // submitDetails is used so that the input values are not directly accessed to the div showing the details
    // submitDetails will be obtained only after the form is submitted
    const [submitDetails,setSubmitDetails] = useState({
        userName: '',
        userEmail: '',
        userPhone: '',
        userColor: '',
    })

    // after submitting the submitDetails are passed and the div containing details will display subdetails
    function handleSubmit(e){
        e.preventDefault();
        if(validName && validEmail && validPhone){
            setIsSubmit(true);
            setSubmitDetails({
                userName: `${details.name}`,
                userEmail: `${details.email}`,
                userPhone: `${details.phone}`,
                userColor: `${details.color}`,
            })
        }
        else{
            setIsSubmit(false);
            setSubmitDetails({
                userName: '',
                userEmail: '',
                userPhone: '',
                userColor: ''
            })
        }
    }
    return(
    <div className="side">
        <form className="form" onSubmit={handleSubmit}>
            <h2><span><i class="fa-solid fa-user"></i></span>Login</h2>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={details.name}
                    onChange={handleChange}
                />
                {/* if name is not valid the warning message will be shown */}
                {
                    !(validName) && <p>Name must include a lowercase letter and a number</p>
                }
            </div>
            
            <div>
                <label>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={details.email}
                    onChange={handleChange}
                />
                {/* if email is not valid the warning message will be shown */}
                {
                    !(validEmail) && <p>Invalid email format</p>
                }
            </div>
            
            <div>
                <label>Phone Number</label>
                <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={details.phone}
                    onChange={handleChange}
                />
                {/* if phone-number is not valid the warning message will be shown */}
                {
                    !(validPhone) && <p>Phone number must be digits only</p>
                }
            </div>
            
            <div>
                {/* for color picker */}
                <label>Choose Your Background Color</label>
                <div className="grid">
                    <input type="radio" name="color" id="red" value="red" onChange={handleChange}/>
                    <input type="radio" name="color" id="green" value="green" onChange={handleChange}/>
                    <input type="radio" name="color" id="blue" value="blue" onChange={handleChange}/>
                    <input type="radio" name="color" id="yellow" value="yellow" onChange={handleChange}/>
                    <input type="radio" name="color" id="cyan" value="cyan" onChange={handleChange}/>
                    <input type="radio" name="color" id="magenta" value="magenta" onChange={handleChange}/>
                    <label className="redtext" style={{ color: "red" }}>Red</label>
                    <label className="greentext" style={{ color: "green" }}>Green</label>
                    <label className="bluetext" style={{ color: "blue" }}>Blue</label>
                    <label className="yellowtext" style={{ color: "yellow" }}>Yellow</label>
                    <label className="cyantext" style={{ color: "cyan" }}>Cyan</label>
                    <label className="magentatext" style={{ color: "magenta" }}>Magenta</label>
                </div>  
            </div>
           
            <div>
                <button type="submit">Log in</button>
            </div> 
        </form>
        {
            // isSubmit will be true only after all the validation checks are true
            isSubmit &&
            <div style={{backgroundColor: submitDetails.userColor}} className="account" id={submitDetails.userColor}>
                <h1><span><i class="fa-solid fa-address-card"></i></span>{submitDetails.userName}</h1>
                <h3><span><i class="fa-solid fa-phone"></i></span>{submitDetails.userPhone}</h3>
                <h3><span><i class="fa-solid fa-envelope"></i></span>{submitDetails.userEmail}</h3>
            </div>
        }
    </div>
    )
}