import { FormEvent, ChangeEvent, useState } from 'react';
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Box,
  HStack,
} from '@chakra-ui/react';
import { useFormik } from "formik";

const ClientForm = () => {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          petName: '',
          email: '',
        },
        onSubmit: (values) => {
          const { name, email, message } = event.target;
          const endpoint = 'https://xaaz6znly1.execute-api.ap-southeast-2.amazonaws.com/Prod/submitForm'
          const body = JSON.stringify({
            senderName: firstName.value,
            senderEmail: email.value,
            message: petName.value
          });
          const requestOptions = {
            method: "POST",
            body
          };
          fetch(endpoint, requestOptions)
          .then((response) => {
            if (!response.ok) throw new Error("Error in fetch");
            return response.json();
          })
          .then((response) => {
            document.getElementById("result-text").innerText =
              "Email sent successfully!";
          })
          .catch((error) => {
            document.getElementById("result-text").innerText =
              "An unkown error occured.";
          });
          
          alert(JSON.stringify(values, null, 2))        
        },
  }) 
  return (
    <form onSubmit={formik.handleSubmit}>
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
            <HStack>
        
                <FormControl id="firstName" isRequired
                  onChange={formik.handleChange}
                  value={formik.values.firstName}>
                  <FormLabel>Owner First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
      
                <FormControl 
                id="lastName" isRequired
                onChange={formik.handleChange}
                value={formik.values.lastName}>
                  <FormLabel>Owner Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
             
            </HStack>

            <FormControl 
            isRequired
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            >
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>

           
              <Box>
                <FormControl id="petName" isRequired
                  onChange={formik.handleChange}
                  value={formik.values.lastName}>
                  <FormLabel>Fur Baby Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            <Stack spacing={10} pt={2}>
              <Button
                  loadingText="Submitting"
                  size="md"
                  bg={'purple.400'}
                  color={'white'}
                  _hover={{
                    bg: 'purple.500',
                  }}
                  type='submit'
                  >
                  Submit
              </Button>
              <Box>
               <p id="result-text"></p>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>

    </form>
    
  )
}

export default ClientForm