<>
<form onSubmit={formik.handleSubmit}>
<label htmlFor='email'>Email Address</label>
<Input
  id='email'
  name='email'
  type='email'
  onChange={formik.handleChange}
  value={formik.values.email} />

<Button type='submit'>Submit</Button>
</form>
const [showPassword, setShowPassword] = useState(false); 

<FormControl id="password" isRequired>
<FormLabel>Password</FormLabel>
<InputGroup>
  <Input type={showPassword ? 'text' : 'password'} />
  <InputRightElement h={'full'}>
    <Button
      variant={'ghost'}
      onClick={() => setShowPassword((showPassword) => !showPassword)}>
      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
    </Button>
  </InputRightElement>
</InputGroup>
</FormControl>


<Stack pt={6}>
              <Text align={'center'}>
                Already a user?<Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
</>