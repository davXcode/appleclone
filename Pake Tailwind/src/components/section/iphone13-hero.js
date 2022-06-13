import React from "react";
import { Link } from "react-router-dom";
import { ChevronrightIcon } from "../../assets";

export default function Iphone13Pro(props) {
  return (
    <div className="w-full h-[692px] flex flex-col box-border overflow-hidden relative">
      <div className="abosolute top-0 left-0 w-full pt-[55px] flex z-20 bg-transparent flex-col items-center justify-center">
        <h2 className="font-semibold tracking-tighter text-[56px] leading-[1.07]">
          iPhone 13 Pro
        </h2>
        <h3 className="font-normal text-[28px] leading-[1.10722] tracking-[.004em] mt-1.5">
          Oh.So.Pro
        </h3>
        <div className="flex mt-[.65em] text-center text-[21px] font-normal tracking-[.011em]">
          <Link
            to="/store"
            className="flex items-center text-blue text-[21px] tracking-inherit leading-[1.381] hover:underline"
          >
            Learn more
            <ChevronrightIcon />
          </Link>
          <Link
            to="/store"
            className="flex items-center text-blue text-[21px] tracking-inherit leading-[1.381] ml-[35px] hover:underline"
          >
            Buy
            <ChevronrightIcon />
          </Link>
        </div>
      </div>
      <div className="z-10 abosolute overflow-visible bg-white h-full w-full left-0 top-0">
        <figure
          className="w-[3008px] h-[736px] bg-[length:3008px_736px] bg-iPhone13Pro bg-white bg-no-repeat absolute border-0 p-0 m-0"
          style={{
            left: "calc(50% + 0px)",
            right: "auto",
            bottom: "0px",
            top: "auto",
            transform: "translatex(-50%)",
            // backgroundImage: `$`,
          }}
        ></figure>
      </div>
    </div>
  );
}
