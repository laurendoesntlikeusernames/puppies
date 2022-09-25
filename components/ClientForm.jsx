import { FormEvent, ChangeEvent, useState } from 'react';
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  Box,
  Flex,
  Grid,
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
        
<Box rounded={'lg'} boxShadow={'lg'}  p={1}>
<Stack spacing={4}>

<Grid gap={6}>
    <Box>
    <FormControl isRequired > 
    <FormLabel>Your First Name</FormLabel>
      <Input 
      id="firstName"
      type="text" 
      name="firstName"
      value={formik.values.firstName} onChange={formik.handleChange} 
      w="100%"/>
    </FormControl>
    </Box>
    <Box>
    <FormControl isRequired>
      <FormLabel>Your Last Name</FormLabel>
      <Input 
      id="lastName"
      type="text" 
      name="lastName"
      value={formik.values.lastName} onChange={formik.handleChange} 
      w="100%"/>
    </FormControl>
    </Box>
</Grid>
  
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
                  <FormLabel>Your Animal&apos;s Name</FormLabel>
                  <Input 
                  id="petName"
                  name="petName"
                  type="text" 
                  value={formik.values.petName} onChange={formik.handleChange}
                  />
                </FormControl>
             </Box>

            <Stack spacing={9} pt={6}>
              <Button
                  loadingText="Submitting"
                  size="md"
                  colorScheme='purple' 
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