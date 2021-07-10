import React from 'react';
import HOCHover from './hoverHOC';

const ForHover = (props) => {
	const style = {
		backgroundColor: props.hovered ? 'grey' : ''
	};
	return (
		<div style={style}>
			<h2> test hover with higher order component </h2>
		</div>
	);
};

export default HOCHover(ForHover);
