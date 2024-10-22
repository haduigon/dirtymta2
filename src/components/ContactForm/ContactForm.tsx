import { Box, Container, FormControl, FormHelperText, Input, InputLabel, Typography, Button } from "@mui/material";
import { useState } from "react";
// import emailHandler from "@/pages/api/sendEmail";

interface FormData {
  email: string,
  name: string,
  message: string
}

const defaultFormData: FormData = {
  email: '',
  name: '',
  message: ''
}

function ContactForm() {

  const [formData, setFormData] = useState(defaultFormData);

  function handleChange(
    field: 'email' | 'name' | 'message',
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: event.target.value,
    }));
  }

  async function handleSumbit(event: React.FormEvent) {
    event.preventDefault();

    try {
      const resp = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (resp.ok) {
        console.log('Email sent');

      } else {
        console.log('Error', resp);

      }
    } catch (error) {
      console.error(error, 'error')
    }
  }

  return (
    <Container maxWidth="sm" sx={{
   
    }}>
      <Box
        component='form'
        onSubmit={handleSumbit}
        sx={{
          mt: 3
        }}
      >
        <Typography
          // variant="h6"
          gutterBottom
          // component='h6'
        >
          Send an email for us
        </Typography>

        <FormControl
          fullWidth
          margin="normal"
        >
          <InputLabel
            htmlFor='name-input'
          >
            Name
          </InputLabel>
          <Input
            id='name-input'
            name='name'
            value={formData.name}
            onChange={(event) => handleChange('name', event as React.ChangeEvent<HTMLInputElement>)}
            required
          />
          <FormHelperText>
            How we can call you ?
          </FormHelperText>
        </FormControl>

        <FormControl
          fullWidth
          margin="normal"
        >
          <InputLabel
            htmlFor='email-input'
          >
            Email
          </InputLabel>
          <Input
            id='email-input'
            name='email'
            value={formData.email}
            onChange={(event) => handleChange('email', event as React.ChangeEvent<HTMLInputElement>)}
            required
          />
          <FormHelperText>
            Please input your email
          </FormHelperText>
        </FormControl>

        <FormControl
          fullWidth
          margin="normal"
        >
          <InputLabel
            htmlFor='message-input'
          >
            Message
          </InputLabel>
          <Input
            id='message-input'
            name='message'
            value={formData.message}
            onChange={(event) => handleChange('message', event as React.ChangeEvent<HTMLInputElement>)}
            multiline
            rows={4}
            required
          />
          <FormHelperText>
            Describe your issue
          </FormHelperText>
        </FormControl>

        <Button
          variant='contained'
          color='primary'
          type='submit'
          sx={{ mt: 2 }}
        >
          Send message
        </Button>

      </Box>
    </Container>
  )
}

export default ContactForm;