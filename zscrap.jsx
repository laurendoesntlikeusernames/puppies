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