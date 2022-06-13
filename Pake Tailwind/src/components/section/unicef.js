import React from "react";
import { NavLink } from "react-router-dom";
import UnicefLogo from "../../assets/image/unicef_logo.png";

export default function Unicef() {
	return (
		<div className='w-full h-[72px] bg-gray flex items-center justify-center'>
			<div className='w-[122px] h-8 bg-no-repeat bg-center'>
				<img src={UnicefLogo} alt='UNICEF Logo' />
			</div>
			<NavLink
				to='/store'
				className='text-center text-[14px] text-blue ml-4 hover:underline'>
				Donate to support families affected by the war in Ukraine
			</NavLink>
		</div>
	);
}
