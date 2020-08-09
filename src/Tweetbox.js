import React from 'react'
import {Button, Avatar} from '@material-ui/core';
import './Tweetbox.css';

function Tweetbox() {
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox-input">
                    <Avatar src=""></Avatar>
                    <input placeholder="What's happening ?" type="text"></input>
                    
                </div>
                <input className="tweetbox-imageInput" placeholder="Optional to add a image Url" type="text"></input>
                <Button className="tweetbox-tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
