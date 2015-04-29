/* jshint esnext: true */

require('./file.png');
var folder = require('./folder.png');
import React from 'react';

var Item = React.createClass({
	render: function () {
		var classes = this.props.selected ? 'item selected' : 'item';
		return (
			<div className={classes}>
        <img src={folder}/>
				<h5>{this.props.title}</h5>
				<small>{this.props.year}</small>
			</div>
		);
	}
});

module.exports = Item;
