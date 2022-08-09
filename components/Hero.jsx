import React from 'react'
import Image from 'next/image'
import Dog from '../public/puppy.svg'
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,

  } from '@chakra-ui/react';

const Hero = () => {
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
        <Text color={'gray.500'} maxW={'3xl'}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex minWidth='max-content' alignItems='center'>
        <Image
                width={500}
                height={400}
                src={Dog}
                alt="Perth Puppy Logo"
            />
        </Flex>
      </Stack>
    </Container>
  );
}



export default Hero