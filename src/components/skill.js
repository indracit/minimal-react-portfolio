import React from 'react';
import './skill.css'
const skill = () => {
  return (
    <div>
      <h2 className='skill-head'>Skills.</h2>
      <div className='skill-margin'>
        <div class='skill-body'>
          <div class='skills'>
            <div class='skill' id='html'>
              <span class='title'>HTML</span>
              <div class='progress-bar'>
                <div class='progress'></div>
              </div>
            </div>

            <div class='skill' id='css'>
              <span class='title'>CSS</span>
              <div class='progress-bar'>
                <div class='progress'></div>
              </div>
            </div>

            <div class='skill' id='js'>
              <span class='title'>JS</span>
              <div class='progress-bar'>
                <div class='progress'></div>
              </div>
            </div>

            <div class='skill' id='bootstrap'>
              <span class='title'>Bootstrap</span>
              <div class='progress-bar'>
                <div class='progress'></div>
              </div>
            </div>
            <div class='skill' id='jquery'>
              <span class='title'>Jquery</span>
              <div class='progress-bar'>
                <div class='progress'></div>
              </div>
            </div>
            <div class='skill' id='react'>
              <span class='title'>React.js</span>
              <div class='progress-bar'>
                <div class='progress'></div>
              </div>
            </div>
            <div class='skill' id='node'>
              <span class='title'>Node.js</span>
              <div class='progress-bar'>
                <div class='progress'></div>
              </div>
            </div>
            <div class='skill' id='java'>
              <span class='title'>Core Java</span>
              <div class='progress-bar'>
                <div class='progress'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default skill;
