import React, { Component } from 'react';
import { getParagraph } from './bullShit'
class App extends Component {
	state = {
		randomBS: getParagraph()
	}

	getNewBS = () => {
		this.setState({randomBS: getParagraph()})
	}
	render() {
		return (
			<>
				<h1>{this.state.randomBS}</h1>
				<button
					onClick={this.getNewBS}
				>Tell me more....</button>
			</>
		);
	}
}

export default App;