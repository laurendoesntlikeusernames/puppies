import React from 'react'
import ClientForm from '../components/ClientForm'
import {
  Flex,
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Box,
  Button,
} from '@chakra-ui/react';
import NavBar from '../components/NavBar.tsx'


const Started = () => {
  return (
    <>
    <NavBar />
    <ClientForm />
    </>
  )
}

export default Started