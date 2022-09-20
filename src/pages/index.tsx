import type { NextPage } from "next";

// @component
import { Hero, Mint, Network, NFTMeet, Roadmap, Team, FAQ } from "view";

//--------------------------------------------------------------------

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Mint />
      <Network />
      <NFTMeet />
      <Roadmap />
      <Team />
      <FAQ />
    </div>
  );
};

export default Home;
