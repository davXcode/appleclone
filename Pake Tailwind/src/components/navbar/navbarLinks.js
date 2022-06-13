import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarLinks(props) {
	return (
		<NavLink
			className='text-offWhite text-[12px] font-normal hover:text-white'
			to={props.routeTo}>
			{props.routeName}
		</NavLink>
	);
}
