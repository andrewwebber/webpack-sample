import React from 'react';

class Message extends React.Component{
  render(){
    return  <div className="row">
              <a className="waves-effect waves-light btn">Stuff</a>
              <a className="waves-effect waves-light btn"><i className="mdi-file-cloud left"></i>button</a>
              <a className="waves-effect waves-light btn"><i className="mdi-file-cloud right"></i>button</a>
            </div>
  }
}

React.render(<Message/>, document.getElementById("container"));
