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
        py={{ base: 15, md: 20 }}>

        <Stack align={'center'}>
        <Heading noOfLines={2}
        fontWeight={600}
        fontSize={{ base: '6xl', sm: '6xl', md: '7xl' }}
        marginTop={{base: '60'}}
        lineHeight={'130%'}
        textAlign="center">
        The puppy sitters from <br />
        <Text as={'span'} color={'orange.400'} fontSize={{ base: '7xl', sm: '7xl', md: '7xl' }}>
        Perth
        </Text>
        </Heading>
        </Stack>
        <Stack spacing={6} direction={'row'}>
         <Link href="/get-started">
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