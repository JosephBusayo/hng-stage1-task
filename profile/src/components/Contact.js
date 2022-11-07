import React, {useState} from 'react';
import '../styles/Contact.css'


export function Contact(){
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
                <div className="form__name-wrapper">
                    <div className="firstname">
                        <label htmlFor="firstname">First name</label><br/>
                        <input className="textinput"
                            id="firstname"
                            type="text"
                            placeholder="Enter your first name"
                            onChange={handleChange}
                            label="First name"
                            name= "firstName"
                            value= {formData.firstName} //this allows the formData useState to be the one true state..controlled by react
                        />
                    </div>

                    <div className="lastname">
                        <label htmlFor="lastname">Last name</label><br/>
                        <input className="textinput"
                            id="lastname"
                            type="text"
                            placeholder="Enter your last name"
                            onChange={handleChange}
                            label="Last name"
                            name="lastName"
                            value= {formData.lastName}
                        />
                    </div>
                </div>

                <label htmlFor="firstname">Email</label><br/>
                <input className="textinput"
                    type="email"
                    placeholder="yourname@email.com"
                    onChange={handleChange}
                    label="Email"
                    name= "email"
                    value= {formData.email}
                /><br/>

                <label htmlFor="firstname">Message</label><br/>
                <textarea className="textarea"
                    rows="5" cols="28"
                    placeholder="Send me a message and I'll reply you as soon as possible..." onChange={handleChange}
                    label="Message"
                    name= "message"
                    value= {formData.message}
                ></textarea><br/>

                <input className="checkbox"
                    type="checkbox"
                    id="agreement"
                    checked={formData.agreement}
                    onChange={handleChange}
                    name="agreement"
                />
                <label htmlFor="agreement">You agree to providing your data to Joseph-busayo who may contact you.</label> <br/>

                {/* value of button disable changes on click of agreement  */}
                <button disabled={!formData.agreement} type="submit" className="form-btn">Send message</button>
            </form>

            <footer className="footer">
                <p>Zuri<span> </span>Internship</p>
                <p>HNG Internship 9 Frontend Task</p>
                <img src="./images/I4G.png" alt="I4G" />
            </footer>
        </section>
    )
}