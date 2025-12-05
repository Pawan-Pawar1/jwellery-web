import React, { useState, useEffect } from "react";

import Intro from "./Intro";
import BraceletsIntro from "../catagory/BraceletsIntro";
import EaringsIntro from "../catagory/EaringsIntro"
import NecklaceIntro from "../catagory/NecklaceIntro";
import RingsIntro from "../catagory/RingIntro";
export default function Home() {
  return(
  <>
  
    <Intro />
    <BraceletsIntro />
    <NecklaceIntro />
    <EaringsIntro />
    <RingsIntro />
  </>
  );
}
