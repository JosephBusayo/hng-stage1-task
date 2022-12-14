import React from 'react';
import '../styles/Profile.css'
import {Link} from 'react-router-dom'

export function Profile(){
    return (
        <section className="profile">
            <section className="img-wrapper">
                <img id="profile__img" src="./images/profile__img.png" alt="profile"/>
                <h3 id= "twitter">Joseph-busayo</h3>
                <h3 id="slack">Joseph-busayo</h3>
            </section>

            <section className="links">
                <div className="link-wrapper">
                    <a href="www.twitter.com/josephbusayo9" className="link">Twitter</a>
                    <a href="https://training.zuri.team/" className="link">Zuri Team</a>
                    <a href="http://books.zuri.team/" className="link">Zuri Books</a>

                    <a href="https://books.zuri.team/python-for-beginners?ref_id=Joseph-busayo" className="link">Python Books</a>
                    <a href="python-for-beginners?ref_id=<yourslackname>" className="link">Background Check for Coders</a>
                    <a href="python-for-beginners?ref_id=<yourslackname>" className="link">Design Books</a>
                    <Link to="/contact" className="link">Contact me</Link>
                </div>
                
                <div className="links__logo">
                    <a> <img className="logo" src="./images/slack.png" alt="slack" /> </a>
                    <a href="https://github.com/JosephBusayo/hng-stage1-task"> <img className="logo" src="./images/github.png" alt="github" /> </a>
                </div>
            </section>

            <footer className="footer">
                <p>Zuri<span> </span>Internship</p>
                <p>HNG Internship 9 Frontend Task</p>
                <img src="./images/I4G.png" alt="I4G" />
            </footer>
        </section>
    )
}