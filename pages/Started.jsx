import React from 'react'
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

const Started = () => {
  return (
    <Container maxW={'5xl'}>
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
          </Flex> 
        </Stack>
        <VStack spacing='24px'>
          <Box w='500px' h='40px' bg='yellow.200'>
            1
          </Box>
          <Box w='500px' h='40px' bg='tomato'>
            2
          </Box>
          <Box w='500px' h='40px' bg='pink.100'>
            3
          </Box>
        </VStack>
    </Container>
  )
}

export default Started