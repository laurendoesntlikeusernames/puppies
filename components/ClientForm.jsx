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
          const endpoint = 'https://lsho6otfdl.execute-api.us-east-1.amazonaws.com/Prod/submitForm'
          const body = JSON.stringify({
            senderName: firstName.value,
            senderEmail: email.value,
            message: petName.value,
          });
          formik.resetForm()
          const requestOptions = {
            method: "POST",
            body
          };
          fetch(endpoint, requestOptions)
          .then((response) => {
            if(response.ok){
              document.getElementById("result-text").innerText =
              "Email sent successfully!";
              return
            }
          })
          throw new Error('Something went wrong');
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
                <FormControl isRequired > 
                  <FormLabel>Your Given Name</FormLabel>
                  <Input 
                  id="firstName"
                  type="text" 
                  name="firstName"
                  value={formik.values.firstName} onChange={formik.handleChange} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Your Last Name</FormLabel>
                  <Input 
                  id="lastName"
                  type="text" 
                  name="lastName"
                  value={formik.values.lastName} onChange={formik.handleChange} />
                </FormControl>
            </HStack>

            <FormControl isRequired >
              <FormLabel>Email address</FormLabel>
              <Input 
              type="email" 
              id='email'
              name='email'
              value={formik.values.email} onChange={formik.handleChange} />
            </FormControl>

           
            <Box>
                <FormControl isRequired >
                  <FormLabel>Your Animal's Name</FormLabel>
                  <Input 
                  id="petName"
                  name="petName"
                  type="text" 
                  value={formik.values.lastName} onChange={formik.handleChange}
                  />
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
                  id='submit'
                  type='submit' 
                  value="Submit"
                  >
                  Submit
              </Button>
              <Box>
               <Heading id="result-text"></Heading>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>

    </form>
    
  )
}

export default ClientForm