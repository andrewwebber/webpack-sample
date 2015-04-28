require('./Materialize/sass/materialize.scss');
require('./Materialize/js/bin/materialize.js');
import React from 'react';

class Message extends React.Component{
  render(){
    return  <div className="row">
              <a className="waves-effect waves-light btn">Stuff</a>
            </div>
  }
}

React.render(<Message/>, document.getElementById("container"));
