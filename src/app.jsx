require('jquery')
require('materialize.scss');
require('materialize');
import React from 'react';

class Message extends React.Component{
  render(){
    return  <div className="row">
              <a className="waves-effect waves-light btn">Stuff</a>
            </div>
  }
}

React.render(<Message/>, document.getElementById("container"));

// If hot swapping can be done, do it by resolving the current route
// and render the application again
if (module.hot) {
  module.hot.accept();
}
