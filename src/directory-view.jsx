/* jshint esnext: true */

require("./directory-view.css");
import React from 'react';
import Selectable from 'react-selectable';
import DirectoryItem from './directory-item.jsx';

var DirectoryView = React.createClass({
	getInitialState: function () {
		return {
			'selectedItems': [],
			tolerance: 0,
			distance: 0,
			isGlobal: false
		};
	},

	render: function () {
    var items = this.props.items.map((item, i) => <DirectoryItem key={i} title={item.title} year={item.year} />);
		return (
				<Selectable
          className={this.props.className}
					onSelection={this.handleSelection}
					tolerance={this.state.tolerance}
					globalMouse={this.state.isGlobal}
					distance={this.state.distance}>
				      {items}
				</Selectable>
		);
	},

	handleSelection: function (keys) {
		this.setState({
			selectedItems: keys
		});

    this.props.onSelection(keys);
	},

	createRangeHandler: function (state) {
		return function (e) {
			var newState = {};

			newState[state] = parseInt(e.target.value);
			this.setState(newState);
		}.bind(this);
	},

	toggleGlobal: function (e) {
		this.setState({
			isGlobal: e.target.checked
		});
	}
});

module.exports = DirectoryView;
