import Head from 'next/head'
import Image from 'next/image'
import {Flex, Heading, Input, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

export default function Box() {
  const {toggleColorMode} = useColorMode()
  const formBackground = useColorModeValue("gray.200", "gray.600") 
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="toggleColorMode" p={12} rounded={6}>
        <Heading mb={3}>Hello Index</Heading> 
        <Button mb={3} onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  )
}
 