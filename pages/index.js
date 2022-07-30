import React from 'react'
import {Flex, Heading, Input, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from 'next/image'
import dog from '../public/logo.png'


export default function Index() {
  const {toggleColorMode} = useColorMode()
  const formBackground = useColorModeValue("gray.200", "gray.600") 
  return (
      <>
    <Header />
      <Hero />
    
      </>
  )
}
 