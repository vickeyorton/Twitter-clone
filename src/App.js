import React, { Component } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from './Feed';
import Widget from './Widget';

class App extends Component {
  render() {
    return (
      <div className="app">
        
        
        {/* SideBar */}
        <Sidebar/>

        {/* Feeds */}
        <Feed />

        {/* Widgets */}
        <Widget />
      </div>
    );
  }
}

export default App;
