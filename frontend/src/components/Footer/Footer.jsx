import React from 'react';
import { BsLinkedin, BsGithub } from "react-icons/bs";


import styles from './footer.module.css';


const Footer = () => {
  return (
    <footer id="footer" className="wrapper style1-alt">
      <div className="inner">
        <div className={styles.footer_wrap} >
          <ul className="menu">
            <li>
              <a href='https://github.com/JSchutza' target='_blank'>
                <BsGithub />
                  <br /> GitHub
              </a>
            </li>

            <li>
              <a href='https://www.linkedin.com/in/joshua-schutza-559819ba/' target='_blank' >
                <BsLinkedin />
                  <br /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
  </footer>
  )
};

export default Footer;
