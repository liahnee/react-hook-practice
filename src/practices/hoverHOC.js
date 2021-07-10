import React, { useState } from 'react';

const HoverHOC = (Component) => {
	const DetectHover = (props) => {
		const [ hovered, setHovered ] = useState(false);

		const handleMouseOver = () => {
			setHovered(true);
			return;
		};

		const handleMouseLeave = () => {
			setHovered(false);
			return;
		};
		return (
			<div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
				<Component hovered={hovered} {...props} />
			</div>
		);
	};

	return DetectHover;
};

export default HoverHOC;
