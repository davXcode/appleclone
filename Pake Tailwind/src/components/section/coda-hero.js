import React from "react";

export default function CodaHero() {
	return (
		<div className='w-full h-[692px] flex flex-col box-border overflow-hidden relative'>
			<div className='abosolute top-0 left-0 w-full pt-[55px] flex z-20 bg-transparent flex-col items-center justify-center'>
				<h2 className='font-medium tracking-wide text-[24px] text-white leading-[1.07] capitalize'>
					an apple original film
				</h2>
				<div className='bg-[length:221px_55px] h-[55px] w-[221px] bg-no-repeat bg-CodaLogo mt-1'></div>
			</div>
			<div className='z-10 abosolute overflow-visible bg-white h-full w-full left-0 top-0'>
				<figure
					className='w-[3008px] h-[736px] bg-[length:3008px_736px] bg-Coda bg-white bg-no-repeat absolute border-0 p-0 m-0'
					style={{
						left: "calc(50% + 0px)",
						right: "auto",
						bottom: "0px",
						top: "auto",
						transform: "translatex(-50%)",
						// backgroundImage: `$`,
					}}></figure>
			</div>
		</div>
	);
}
