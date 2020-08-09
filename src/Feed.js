import React from 'react'
import './Feed.css';
import Tweetbox from './Tweetbox'

function Feed() {
    return (
        <div className="feed">
            {/*Header  */}
            <div className="feed-header">
                <h2>Home</h2>
            </div>

            {/* Tweet Box */}
            <Tweetbox/>

            {/* Post */}
            
        </div>
    )
}

export default Feed
