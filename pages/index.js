import React from 'react'
import {Container, VStack} from '@chakra-ui/react'
import Header from '../components/Header'
import Hero from '../components/Hero'


export default function Index() {
  return (
    <VStack spacing={4} align='stretch' width='100vh'>
      <Container centerContent bg='red.400'>
        <Header />
      </Container>
      <Container centerContent bg='blue.400'>
        <Hero />
      </Container>
    </VStack>     
  )
}
 