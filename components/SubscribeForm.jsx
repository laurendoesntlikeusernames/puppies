import React from 'react';
import { useFormik } from 'formik';
import {Flex, Heading, Input, Button} from '@chakra-ui/react'


const SubscribeForm = () => {

        // Pass the useFormik() hook initial form values and a submit function that will
        // be called when the form is submitted
        const formik = useFormik({
          initialValues: {
            email: '',
          },
          onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
            formik.resetForm()
          },
        });
        return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" p={12} rounded={6}>
        <Heading mb={6}>Login</Heading> 
        <form onSubmit={formik.handleSubmit}>
            <Input 
            type="email" id="email" name="email"
            placeholder="email@peemails.com" 
            variant="filled" 
            mb="3" 
            onChange={formik.handleChange} value={formik.values.email || ""}/>
            <Button mb={6} colorScheme="teal" type="submit">Submit</Button>
        </form>
        </Flex>
        </Flex>
        );
      
}

export default SubscribeForm