import React from 'react'
import {StackDivider, VStack} from '@chakra-ui/react'
import Header from '../components/Header'
import Hero from '../components/Hero'


export default function Index() {
  return (
    <VStack   divider={<StackDivider borderColor='gray.200' />}
    spacing={4}
    align='stretch'>
      <Header />
      <Hero />
    </VStack>     
  )
}
 