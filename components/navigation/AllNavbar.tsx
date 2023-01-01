import React from "react";
import { Navbar, Navbar2, Navbar3, Navbar1, Navbar4, Navbar5,Navbar6 } from "./";
import Wrapper from "./Wrapper";

function AllNavbar() {
  return (
    <div>
      <Wrapper>
        <Navbar />
      </Wrapper>
      <Wrapper>
        <Navbar1 />
      </Wrapper>
      <Wrapper>
        <Navbar2 />
      </Wrapper>
      <Wrapper>
        <Navbar3 />
      </Wrapper>
      <Wrapper>
        <Navbar4 />
      </Wrapper>
      <Wrapper>
        <Navbar5 />
      </Wrapper>
      <Wrapper>
        <Navbar6/>
      </Wrapper>
    </div>
  );
}

export default AllNavbar;
