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
          alert(JSON.stringify(values, null, 2))
        },
  }) 
  return (
    <form onSubmit={formik.handleSubmit}>

    <Stack spacing={8} mx={'auto'} maxW={'3xl'} py={12} px={6}>
        <Stack align={'center'}>
        <Heading noOfLines={2}
            fontWeight={600}
            fontSize={'2xl'}
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
          bg={useColorModeValue('white', 'gray.500')}
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
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  type='submit'
                  >
                  Submit
              </Button>

   
            
            </Stack>
          </Stack>
        </Box>
      </Stack>

    </form>
    
  )
}

export default ClientForm