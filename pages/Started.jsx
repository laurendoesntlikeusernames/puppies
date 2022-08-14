import React from 'react'
import Script from 'next/script'
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
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
          <Script type="text/javascript" src="https://form.jotform.com/jsform/222218832403852" />
          </Flex>  
        </Stack>
    </Container>
  )
}

export default Started