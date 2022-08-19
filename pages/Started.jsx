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
import Header from '../components/Header'


const Started = () => {
  return (
    <>
    <Header />
    <ClientForm />
    </>
  )
}

export default Started