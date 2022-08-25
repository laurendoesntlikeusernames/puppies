import React from 'react'
import {
    Stack,
    Form,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Field,
    Input,
    Button,
    useColorModeValue,
    Heading,
    Text,
    Box,
    HStack,
    RadioGroup,
    Radio,
    Alert,
  } from '@chakra-ui/react';

const ContactForm = () => {

  return (
    <Stack spacing={8} mx={'auto'} maxW={'3xl'} py={12} px={6}>
    <Stack align={'center'}>
    <Heading noOfLines={2}
        fontWeight={600}
        fontSize={'6xl'}
        lineHeight={'110%'}
        textAlign="center">
        Send us an Initial <br />
        <Text as={'span'} color={'green.500'} >
          Enquiry
        </Text>
    </Heading>
    </Stack>
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}>
      <Stack spacing={4}>
      <form>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text"/><br/><br/>
        <label htmlFor="email">Email:</label>
        <input name="email" type="email"/><br/><br/>
        <label htmlFor="name">Message:</label>
        <textarea name="message"></textarea><br/><br/>
        <input type="submit"/>
        <div>
            <p id="result-text"></p>
        </div>
        </form>
      </Stack>
    </Box>
  </Stack>

  )
}

export default ContactForm