import React from "react";
import { Link } from "react-router-dom";
import { AppleIcon, SearchIcon, ShopIcon } from "../../assets";
import NavbarLinks from "./navbarLinks";

export default function Navbar() {
	return (
		<div className='z-[9999] w-full h-11 text-white bg-offBlack block sticky top-0 left-0'>
			<nav className='min-w-[1024px] max-w-[1024px] w-full h-full flex mx-auto'>
				<ul className='w-full h-full flex items-center justify-between'>
					<Link to='/' className='p-0 m-0'>
						<AppleIcon fill={"white"} />
					</Link>
					<NavbarLinks routeTo='/store' routeName='Store' />
					<NavbarLinks routeTo='/store' routeName='Mac' />
					<NavbarLinks routeTo='/store' routeName='iPad' />
					<NavbarLinks routeTo='/store' routeName='iPhone' />
					<NavbarLinks routeTo='/store' routeName='Watch' />
					<NavbarLinks routeTo='/store' routeName='AirPods' />
					<NavbarLinks routeTo='/store' routeName='TV & Home' />
					<NavbarLinks routeTo='/store' routeName='Only on Apple' />
					<NavbarLinks routeTo='/store' routeName='Accessories' />
					<NavbarLinks routeTo='/store' routeName='Suport' />
					<Link to='/' className='p-0 m-0'>
						<SearchIcon fill={"white"} />
					</Link>
					<Link to='/' className='p-0 m-0'>
						<ShopIcon fill={"white"} />
					</Link>
				</ul>
			</nav>
		</div>
	);
}
