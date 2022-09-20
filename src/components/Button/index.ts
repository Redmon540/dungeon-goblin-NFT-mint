import dynamic from "next/dynamic";

//----------------------------------------------------------

export const ConnectButton = dynamic(
  () => import("./ConnectButton/ConnectButton")
);

export { default as ScrollTop } from "./ScrollTop/ScrollTop";
