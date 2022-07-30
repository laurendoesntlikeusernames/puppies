import {Flex, Heading, Input, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

export default function Login() {
    const {toggleColorMode} = useColorMode()
    const formBackground = useColorModeValue("gray.200", "gray.600") 
    return (
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Login</Heading> 
          <Input placeholder="email@yours.com" variant="filled" mb="3" type="email"/>
          <Input placeholder="********" variant="filled" mb="6" type="password"/>
          <Button mb={6} colorScheme="teal">Login</Button>
          <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
        </Flex>
      </Flex>
    )
  }