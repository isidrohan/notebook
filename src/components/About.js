import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import {AiOutlineInstagram } from "react-icons/ai";
// import noteContext from '../Context/notes/noteContext';

const About = () => {
  return (
    <>
      <header>
        <h1 className="about-head">About us</h1>
      </header>
      <div className="about-des">
        <p>
        This web application serves as a convenient platform for note-taking, allowing users to create a personalized account through the sign-up feature. Once registered, users can add multiple notes to the notebook app, edit them as needed, and delete them at their discretion. Upon completion of note-taking, users can log out from their account with ease. To access the notes again, users can simply log in using their designated ID and password.
        </p>
      </div>
      <footer>
        <div className="social-media">
          <Link
            to="https://www.linkedin.com/in/siddharth-rohan-279385239/"
            target="_blank"
          >
            <AiFillLinkedin size={30} style={{color: "#435cb6"}}></AiFillLinkedin>
          </Link>
        </div>
        <div className="social-media">
          <Link
            to="https://github.com/isidrohan"
            target="_blank"
          >
            <AiFillGithub size={30} style={{color: "#433e3e"}}></AiFillGithub>
          </Link>
        </div>
        <div className="social-media">
          <Link
            to="https://www.instagram.com/isidd_rohan/"
            target="_blank"
          >
            <AiOutlineInstagram size={30} style={{color: "#e13972"}}></AiOutlineInstagram>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default About;
