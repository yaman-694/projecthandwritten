import React, { Component } from 'react';

import './Title.css';

class Title extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postreq: '',
			postres: ''
		}
	}

	render() {
		return (
			<div className="title">
				<div className="main-title card-panel blue lighten-5 center">
					<h3 className="center"><b>Deep Learning Handwriting Recognition</b></h3>
				</div>
				<div className="title-sub">
					
				</div>
			</div>
		)
	}
}

export default Title