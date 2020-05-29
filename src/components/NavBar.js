import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Select from 'react-select'
import TwitterLogo from '../images/TwitterLogo.png';
import { userList } from '../resources/users';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'


const NavBar = params => {
    const [query, setQuery] = useState("");
    const [user, setUser] = useState({});
    const [isUserSelected, setIsUserSelected] = useState(false);
    const [seconds, setSeconds] = useState(60);
    const options = [];

    

    
    userList.forEach(x => {
        options.push({
            label: x.name,
            value: x.name,
            data: x
        })
    })

    /**
     * I had a hard time trying to fetch to pass the OAUTH1 since it's
     * the only way possible in order too fetch data but I couldn't with React
     * So I fetched them using Postman and put stored the result in a file 
     * so i can proceed the dev
     */
    const url = `https://api.twitter.com/1.1/users/search.json?q=${query}`;


    const USER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAMTREgEAAAAAK9yuHLjTdir8U1eJpkEas9krmX4%3DG5OzROvPW6NMG7hEsTO2eUtlOMQh7l2cKDniy8NozgmDZ8ZLTs";
    
    const AuthStr = 'Bearer '.concat(USER_TOKEN);
    const getData = async () => {
       
        setQuery("soccer");
      
        if (query !== "") {
    
            const result = await Axios.get(url, {
                headers: {
                    consumer_key: 'ED193gYLjZ6ILFApKWdvvmq3H',
                    consumer_secret: 'OTTFyWVrPBs4rX1GZkIfU8XUC8O2sRIZWOgnShjEogxX7OswwN',
                    token: '1265437826121961472-ro11qHcpi64ySBtb0DIzt7zsCHZgPf',
                    token_secret: 'JwiaaHi7mlnk42u5yTq6Y7fShg390d2rSxiDyMpx1vmeo',
                    signature_method: 'HMAC-SHA1',
                    grant_type: 'client_credentials'
                }
            });
            if (!result.data.more) {
                console.log("No user with such name");

               return setIsUserSelected(false);
            }
            
            console.log(result);
            setUser({
                label: result.data.hits.name,
                value: result.data.hits.name,
                data: result.data.hits
            });
            setIsUserSelected(true)
        } else {
            setIsUserSelected(false);
        }
    };
   

    

    const handleChange = (selectedOption) => {
      
        params.setUser(selectedOption.data);
        params.setIsUserSelected(true);
        setIsUserSelected(true);
        
        getData();

      };

      useEffect(() => {
        setTimeout(() => {
            if (isUserSelected) {
                if (seconds>0) {
                    setSeconds(seconds - 1);
                }else{
                    setIsUserSelected(false);
                    params.setIsUserSelected(false);
                    params.setUser({});
                }
                
            } else {
                
                setSeconds(60);
            }
            
        }, 1000);
      });

    return (
        <div  >
            <header class="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
              
                <div class="col-sm-2">
                    <img style={{ height: "80px", width: "80px" }} src={TwitterLogo} id="loader_img" />
                </div>
                <div class="col-sm-6">
                    <form class="form-inline-">
                        <Select
                            styles={{ width: "200px", float: "left" }}
                            placeholder="Search"
                            onChange={handleChange}
                            options={options} />
                   </form>
                </div>
                <div style={{ width: "30%"}}>
                    <div class="form-inline" style={{ float:"right", paddingRight:30 }}>
                    <h1>{seconds}  </h1>
                    <FontAwesomeIcon icon={faClock} size="lg" />
                    </div>
                    
                </div>
            </header>
        </div>
    );

    

}


export default NavBar;