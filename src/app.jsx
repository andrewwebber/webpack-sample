/* jshint esnext: true */

require('jquery');
require('materialize.scss');
require('materialize');
import React from 'react';
import DirectoryView from './directory-view.jsx';

var data = require('./sample-data');

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
			'selectedItems': []
		};
    this.handleSelection = this.handleSelection.bind(this);
  }
  handleSelection(keys) {
		this.setState({
			selectedItems: keys
		});
	}
  render(){
    return   <div>
              <div className="sidebar">
                <div className="info">
                  {this.state.selectedItems.length > 0 &&
                    <h3>You have selected the following items:</h3>
                  }
                  {this.state.selectedItems.length === 0 &&
                    <p>Please select some items from the right. Click and drag your mouse to select multiple. Cmd/Ctrl-click to select non-adjacent items.</p>
                  }
                  <ul>
                  {this.state.selectedItems.map(function (key,i) {
                    return <li key={i}>{this.props.items[key].title}</li>;
                  }.bind(this))}
                  </ul>
                </div>
              </div>
              <DirectoryView onSelection={this.handleSelection} items={this.props.items} className="main"/>
            </div>;
  }
}

React.render(<App items={data}/>, document.body);

// If hot swapping can be done, do it by resolving the current route
// and render the application again
if (module.hot) {
  module.hot.accept();
}
