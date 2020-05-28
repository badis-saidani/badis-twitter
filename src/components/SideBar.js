import React, { useState } from 'react';
import Select from 'react-select'
import './SideBar.css';
import Profile from './profile/Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'

const SideBar = ({ user, isUserSelected }) => {

  const options = [
    { value: 1, label: "1 day" },
    { value: 7, label: "7 days" },
    { value: 30, label: "30 days" }
  ];

  return (
    <div className="sideBar m-1 mt-2 d-flex justify-content-center">

      <div style={{ justifyContent: "center" , marginTop: 30}}>

        {isUserSelected ? <div class="card" style={{minWidth:"100%"}}>

          <Profile user={user} />

        </div> : <div class="card" style={{minWidth:"100%"}}></div>}

        <div className="p-2">
          <div className="m-auto">
            <div className="m-3">
             <Select options={options} />
              <div>
                <button className="btn" >
                  ❤️
                </button>
                <button className="btn" >
                <FontAwesomeIcon icon={faRetweet} />
                </button>
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SideBar;