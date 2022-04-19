import React from 'react';
import Card from './Card';
 
// able to create cardlist component that lists card
// and all we need to do is pass it to props of robots
const CardList = ({robots}) => {
	// if(true) {
	// 	throw new Error('nooooooo');
	// }

	return (
	  <div> 
	  	{
	    	robots.map((user, i) => {
				return (
				<Card 
				// way virtual dom works is by keeping track of how virtual DOM works
				// so in case cards gets deleted then dom wont get to know so will have to 
				// change entire dom. But we have to minimize working of DOM
				// key will ensure this problem is looked upon
				// key should have somnehting that doesnt change
					key={i} // is included because each child in array or iterator should have unique key prop
					id={robots[i].id} 
					name={robots[i].name} 
					email={robots[i].email}
				/>
			);
		})		
		}
	 </div>
  
	);
}

export default CardList;