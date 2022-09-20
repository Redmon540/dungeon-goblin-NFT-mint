import dynamic from "next/dynamic";

//-------------------------------------------------------------
export { default as Hero } from "./Hero/Hero";
export { default as Mint } from "./Mint/Mint";

export const Network = dynamic(() => import("./Network/Network"));
export const NFTMeet = dynamic(() => import("./NFTMeet/NFTMeet"));
export const Roadmap = dynamic(() => import("./Roadmap/Roadmap"));
export const Team = dynamic(() => import("./Team/Team"));
export const FAQ = dynamic(() => import("./FAQ/FAQ"));
