import React, { useState } from 'react';
import './Timeline.css';
import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

const Timeline = ({ user, isUserSelected }) => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    
    return (

        <div className="mx-1 mt-2 tweetList">
            <div id="input_tweet">
                <div className="input-group mb-3 p-2" width="100%">
                    <button
                        style={{width: "-webkit-fill-available"}} 
                        disabled={!isUserSelected}
                        onClick={increment}
                        type="button"
                        className="form-control rounded-right"
                        class="btn btn-secondary btn-lg btn-info">Load</button>
                </div>
            </div>
            <div className="m-3">
                
            <h3 className="font-weight-bold">
                {(isUserSelected && count>0)? <span>There you go</span>: <span>What? No Tweets yet?</span>}
                </h3>
            <p>
              This empty timeline won’t be around for long. Choose a user, then click Load button and you’ll see Tweets show up here.
            </p>

                <div class="form-inline" >
                    <div class="card" style={{ margin: 50 }}>

                        {(isUserSelected && count>0) ?
                            <div color="blue">
                                <h5>{user.status.created_at}</h5><br /><br />
                                <p>{user.status.text}</p><br /><br /><br /><br />

                                <button className="btn btn-outline-danger rounded-pill btn-sm" >
                                    ❤️ {user.status.favorite_count}
                                </button>
                                <button className="btn btn-outline-primary rounded-pill btn-sm" >
                                    <FontAwesomeIcon icon={faRetweet} />
                                    {user.status.retweet_count}
                                </button>
                            </div> : null}

                    </div>

                    <div class="card" style={{ margin: 50 }}>

                        {(isUserSelected && count>0)?
                            <div  color="blue">
                                {user.status.create_at}<br />
                                {user.status.text}<br />

                                <button className="btn btn-outline-danger rounded-pill btn-sm" >
                                    ❤️ {user.status.favorite_count}
                                </button>
                                <button className="btn btn-outline-primary rounded-pill btn-sm" >
                                    <FontAwesomeIcon icon={faRetweet} />
                                    {user.status.retweet_count}
                                </button>
                            </div> : null}

                    </div>
                    <div class="card" style={{ margin: 50 }}>

                        {(isUserSelected && count>0) ?
                            <div  color="blue">
                                {user.status.create_at}<br />
                                {user.status.text}<br />

                                <button className="btn btn-outline-danger rounded-pill btn-sm" >
                                    ❤️ {user.status.favorite_count}
                                </button>
                                <button className="btn btn-outline-primary rounded-pill btn-sm" >
                                    <FontAwesomeIcon icon={faRetweet} />
                                    {user.status.retweet_count}
                                </button>
                            </div> : null}

                    </div>

                </div>


            </div>
        </div>

    );
}

export default Timeline;