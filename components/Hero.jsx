import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
        py={{ base: 20, md: 20 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '6xl', sm: '6xl', md: '6xl' }}
          lineHeight={'110%'}>
          The Puppy Sitters{' '}
          <Text as={'span'} color={'orange.400'}>
            from Perth
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'2xl'}>
        It’s holiday time!! I’m so excited, I finally get to go away and have some much needed relaxation! But wait. What do I do with the pets? Who’s going to look after them!?!
        </Text>
        <Stack spacing={6} direction={'row'}>
         <Link href="/Started">
         <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            Get started
          </Button >
         </Link>
          <Link href="/Learn">
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
          </Link>
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