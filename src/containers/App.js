// we have app component(parent) then searchBox and then 
// cardList. 
// Now anytime the searchBox changes on change the function 
// will be made to run i.e in searchbox.js 
// onchange={searchChange will be called}
// so everytime onChange event is triggered call the 
// searchChange function 



/*
steps for componenet
first we create component searchbox write it in index.js

since searchbox and cardlist has to intreact so to do this we 
use state
*/


import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import './App.css'
import Scroll from '../components/Scroll';
// import ErrorBoundary from '../components/ErrorBoundary';

// using state i.e. which can changefor robots and searchfiled
// usually live in parent component
// const state = {
// 	robots: robots,
// 	searchfield: ''
// }

// to use state , we use create class
// state is something that change i.e. when input entered in 
// search bar then corresponding output i.ee robots appears
// so input and robots will change

/*      1
    2       3
1.is the app component
2. is the searchBox component
3. is the cardlist

anytime the searchbox changes, onChange i will run the function 
and call "onChange={searchChange}" searchChange  it means everyime
onChange event is trigerred call the searChange function

 and as searchange function which is the prop is on the searchange function
 // defined in the App.js, thats how communucation with parent is done and finally
 commmunication with 3.is done 



*/

class App extends Component {
	//to add state
	constructor() {
		super()
		// react uses them to pass them down as props
		this.state = {
			// below line is commented because now when website is loaded
			// data will be grabbed from somewhere else
			// robots: robots;
			robots: [],
			searchfield: ''
		}
	}

	// read react lifecycle https://reactjs.org/docs/react-component.html
	// after consructor, render this will execute
	componentDidMount() {
		// window object
		// fetches data from below website and grabs the response
		fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
			return response.json();
		})

		.then(users => {
			// after this function again render will execute because
		// every time state change updating life cycle executes
		// as per in life cycle method
		this.setState({robots: users})
		})
		
	}


	// with can event we also have event.target.value
	// this function is like everyimt the input changes we get an event
	// Also anytime we make our own method in react component 
	// we use below syntax, so this make sure that this in it 
	// is referring to App
	// https://reactjs.org/docs/handling-events.html
	onSearchChange = (event) => {
		// rule in react is want to update state use this.setState
		// updates the searchfield
		this.setState({searchfield: event.target.value})
		
		}
	
	render () {
		// for communication with 3.
		const filteredRobots = this.state.robots.filter(robot =>{
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})
		// console.log(filteredRobots);
		// if in case the link is taking too much time and there
		// are whole lot of user then 
		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>
		}
		else { 
			return (
				<div className='tc'> 
					<h1 className='f1'> RoboFriends </h1>
					 {/*searchChange={this.onSearchChange} this line means calling 
					this method bcoz in searchbox inout is entered  but since 
					this is an object we have to say this. 
				parallely in seachBox searchchange is added*/} 
					<SearchBox searchChange={this.onSearchChange}/>
					{/* this scroll coponent is when scrolling down search bar can 
					also be seen
					this component can be uses anywhere
					*/}
					<Scroll>
					{/* if anything in cardlist fails then that error will be catched
				        and displayed using error boundary */}
						{/*<ErrorBoundary>*/}
							{/* filteredRobots is passed to search for it*/}
							<CardList robots={filteredRobots} />
						{/*</ErrorBoundary>	*/}
					</Scroll>	
				</div>	
	
	); 
	}
}

}

export default App;