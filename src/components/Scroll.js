import React from 'react';

// since scroll is not a self closing component
// and it wraps component, so the way we can tell 
// it to render what is inside scroll is by 
// using children i.e. props.children
// so using props.children we can create components 
// that wraps other component
const Scroll = (props) => {
	return (
		// adding style to div
		// in jsx aDDING styles using double curly bracket
		// in css we have overflow-y
		// in jsx we have overflowY
		<div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;