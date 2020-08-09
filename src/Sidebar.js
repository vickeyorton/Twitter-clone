import React, { Component } from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core';
import './Sidebar.css'

function Sidebar (){
    return(
        <div className="sidebar">
            {/* Twitter Icon */}
            <TwitterIcon className="sidebar--twitterIcon" />

            {/* <SidebarOption /> */}
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explorer"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notification"/>
            <SidebarOption Icon={MailOutlineIcon} text="Message"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark"/>
            <SidebarOption Icon={ListAltIcon} text="List"/>
            <SidebarOption Icon={PersonOutlineIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>
            
            {/* Tiwtter Button */}
            <Button variant="outlined" className="sidebar--tweet-button" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar;