import React from "react";

const Fab = ({ onClick, icon }) => {
	return (
		<button className="btn fab" onClick={onClick}>
			<span className="material-icons">{icon}</span>
		</button>
	);
};

export default Fab;
