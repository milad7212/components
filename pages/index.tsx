import React from 'react'
import BlogPost from '../components/BlogPost'
import Card from '../components/Card'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import Card4 from '../components/Card4'
import Cards from '../components/Cards'
import Cards2 from '../components/Cards2'
import ChatCard from '../components/ChatCard'
import Input from '../components/Input'
import Input2 from '../components/Input2'
import Input3 from '../components/Input3'
import Input4 from '../components/Input4'
import Pricing from '../components/Pricing'
import Row from '../components/Row'
import Tabel1 from '../components/Tabel1'

function index() {
  return (
    <div className="">
      <BlogPost/>
      <Card/>
      <Card2/>
      <Card3/>
      <Card4/>
      <Cards/>
      <Cards2/>
      <Input/>
      <Input2/>
      <Input3/>
      <Input4/>
      <Row/>
        <Tabel1/>
        <ChatCard/>
        <BlogPost/>
        <Pricing/>
    </div>
  )
}

export default index