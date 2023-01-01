import React from "react";
import Alert from "../components/Alert";
import Alert2 from "../components/Alert2";
import Alert3 from "../components/Alert3";
import Alert4 from "../components/Alert4";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import Banner3 from "../components/Banner3";
import BlogPost from "../components/BlogPost";
import AllCards from "../components/card/AllCards";
import Card from "../components/card/Card";
import Card2 from "../components/card/Card2";
import Card3 from "../components/card/Card3";
import Card4 from "../components/card/Card4";
import Cards from "../components/card/Cards";
import Cards2 from "../components/card/Cards2";
import Cards3 from "../components/card/Cards3";

import ChatCard from "../components/ChatCard";
import FAQ from "../components/FAQ";
import FAQ2 from "../components/FAQ2";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Input from "../components/Input";
import Input2 from "../components/Input2";
import Input3 from "../components/Input3";
import Input4 from "../components/Input4";
import Modal from "../components/Modal";

import Newsletter from "../components/Newsletter";
import Newsletter2 from "../components/Newsletter2";
import Page1 from "../components/pages/Page1";
import Pricing from "../components/Pricing";
import Row from "../components/Row";
import SelectMenu from "../components/SelectMenu";
import SelectMenu2 from "../components/SelectMenu2";
import Tabel1 from "../components/Tabel1";
import AllNavbar from "../components/navigation/AllNavbar";
import AllButtons from "../components/buttons/AllButtons";

function index() {
  return (
    <div className="bg-gray-100">
      <AllNavbar />
      <AllButtons/>
      {/* <Page1/> */}
      <Alert />
      <Alert2 />
      <Alert3 />
      <Alert4 />
      <h1 className="text-4xl">Banner</h1>
      <Banner />
      <Banner2 />
      <Banner3 />
      <BlogPost />
      <h1 className="text-4xl">Cards</h1>

      <AllCards />
      <ChatCard />
      <FAQ />
      <FAQ2 />
      <Footer />
      <Hero />
      <Hero2 />

      <Input />
      <Input2 />
      <Input3 />
      <Input4 />
   

      
      <Newsletter />
      <Newsletter2 />

      <Row />

      <SelectMenu />
      <SelectMenu2 />

      <Tabel1 />

      <BlogPost />
      <Pricing />
    </div>
  );
}

export default index;
