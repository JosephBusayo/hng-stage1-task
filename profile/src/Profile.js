import React from 'react';


export default function Profile(){
    return (
        <section className="profile">
            <section className="">
                <img id="profile__img" src="./images/profile__img.png" alt="profile image"/>
                <h3 id= "twitter">Annette Black</h3>
                <h3 id="slack">Slack username</h3>
            </section>

            <section className="links">
                <a href="" className="link">Twiiter Link</a>
                <a href="" className="link">Zuri Team</a>
                <a href="" className="link">Zuri Books</a>

                <a href="" className="link">Python Books</a>
                <a href="" className="link">Background Check for Coders</a>
                <a href="" className="link">Design Books</a>

                <div className="links__logo">
                    <img className="logo" src="./images/slack.png" alt="slack" />
                    <img className="logo" src="./images/github.png" alt="github" />
                </div>
            </section>

            <footer className="footer">
                <p>Zuri<span></span>Internship</p>
                <p>HNG Internship 9 Frontend Task</p>
                <img src="./images/I4G.png" alt="I4G" />
            </footer>
        </section>
    )
}