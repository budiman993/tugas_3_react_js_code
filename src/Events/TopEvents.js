import React from 'react';

const TopEvents = () => {
	const handleFooter = (value, e) => {
		e.preventDefault();
		alert(value);
	};
	return (
		<a href="/" onClick={e => handleFooter("Back To Home", e)}>
		Back To Home
		</a>
		)
}

export default TopEvents;