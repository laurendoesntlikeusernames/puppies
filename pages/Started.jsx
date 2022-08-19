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
    <><Header /><Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '6xl', sm: '6xl', md: '6xl' }}
          lineHeight={'110%'}>
          The Puppy Sitters{' '}
          <Text as={'span'} color={'orange.400'}>
            from Perth
          </Text>
        </Heading>
        <Flex minWidth='max-content' alignItems='center'>
          <VStack spacing='24px'>

            <ClientForm />

            <Box w='500px' h='40px' bg='yellow.200'>

            </Box>
            <Box w='500px' h='40px' bg='tomato'>

            </Box>
            <Box w='500px' h='40px' bg='pink.100'>

            </Box>

          </VStack>
        </Flex>
      </Stack>
    </Container></>
  )
}

export default Started