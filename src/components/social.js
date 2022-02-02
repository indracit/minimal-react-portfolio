import React from 'react';
import './social.css'
const social = () => {
  return (
    <div>
      <div class='footer-social-icons'>
        <ul class='social-icons'>
          <li>
            <a href='https://twitter.com/imindrajithij' class='social-icon'>
              
              <i class='fa fa-twitter'></i>
            </a>
          </li>

          <li>
            <a
              href='https://www.linkedin.com/in/indracits/'
              class='social-icon'
            >
              {' '}
              <i class='fa fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='https://github.com/indracit' class='social-icon'>
              {' '}
              <i class='fa fa-github'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default social;
