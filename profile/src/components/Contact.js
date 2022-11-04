import React, {useState} from 'react';
import '../styles/Contact.css'


export default function Contact(){
    //useState handling the form
    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            agreement: false,
        }
    )
    
    console.log (formData)
    function handleChange(event){
        setFormData(prevFormData => {
            const {name, value, type, checked} = event.target //distructing event.value
            return {
                ...prevFormData, //return the cuurent values of the form
                [name]: type === 'checkbox' ? checked : value //but update the active and correct input only
            }
        })
    }
    return(
        <section className="contact">
            <section className="header">
                <h1 className="header__title">Contact Me</h1>
                <p className="header__p">Hi there, contact me to ask me about anything you have in mind.</p>
            </section>

            <form className="form">
                <input
                    type="text"
                    placeholder="Enter your first name"
                    onChange={handleChange}
                    label="First name"
                    name= "firstName"
                    //this allows the formData useState to be the one true state..controlled by react
                    value= {formData.firstName} 
                />

                <input
                    type="text"
                    placeholder="Enter your last name"
                    onChange={handleChange}
                    label="Last name"
                    name= "lastName"
                    value= {formData.lastName}
                />

                <input
                    type="email"
                    placeholder="yourname@email.com"
                    onChange={handleChange}
                    label="Email"
                    name= "email"
                    value= {formData.email}
                />

                <textarea
                    placeholder="Send me a message and I'll reply you as soon as possible..."
                    onChange={handleChange}
                    label="Message"
                    name= "message"
                    value= {formData.message}
                />

                <input 
                    type="checkbox"
                    id="agreement"
                    checked={formData.agreement}
                    onChange={handleChange}
                    name="agreement"
                />
                <label htmlFor="agreement">You agree to providing your data to Joseph-busayo who may contact you.</label> <br/>
            </form>

            <section className="footer"></section>
        </section>
    )
}