import React from 'react';
import {
  Avatar,
  CssBaseline,
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  FormControlLabel,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Checkbox, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <Grid container className='h-screen flex'>
      <Grid
        item
        className="bg-[url('https://source.unsplash.com/random')] bg-cover sm:w-[58%] sm:block hidden"
      />
      <CssBaseline />
      <Grid
        item
        className='sm:w-[42%] w-full px-8 flex flex-col justify-center'
        component={Paper}
        elevation={8}
        square
      >
        <Avatar className='bg-red-500 mx-auto mb-2'>
          <LockOutlinedIcon />
        </Avatar>

        <Typography className='text-2xl pb-6 text-center'>Sign in</Typography>
        <form className='grid gap-5' action=''>
          <TextField
            variant='outlined'
            id='email'
            label='Email Address'
            name='email'
            fullWidth
            autoFocus
            autoComplete='email'
            required
          />
          <TextField
            variant='outlined'
            id='password'
            label='Password'
            name='email'
            autoComplete='current-password'
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox value='remember' />}
            label='Remember Me'
          />
          <Button variant='contained'>Sign In</Button>
          <Link to='/sign-up' underline='hover' className='text-sm mx-auto'>
            <div>Don't have an account? Sign Up</div>
          </Link>
        </form>
      </Grid>
    </Grid>
  );
}

export default SignIn;
