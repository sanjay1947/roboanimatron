import React, {Component} from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	// react 16 newv mwethod like try catch block
	// for changinf hasError if error is there
	componentDidCatch(error, info) {
		//this.setState({hasError: true})
	}
	render() {
		if(this.state.hasError) {
			return <h1>This is not good </h1>
		}
		//  means anything between children i..e CardList
		return this.props.children 
	}
}
export default ErrorBoundary;