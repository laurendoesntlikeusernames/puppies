import { FormEvent, ChangeEvent, useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useFormik } from "formik";

const ClientForm = () => {
    const formik = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2))
        },
  })  
  return (
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor='email'>Email Address</label>
    <Input
        id='email'
        name='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <Button type='submit'>Submit</Button>
  </form>
    
  )
}

export default ClientForm