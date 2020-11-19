import React from 'react'
import {Button , Checkbox, FormControlLabel, Grid, Link, TextField, Typography  } from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import  "./SignInForm.css"


function SignInForm() {
    return (
     
        <div className="container">
           <form>
          <div className="align">
            <div className="lock-icon">
              <LockOutlinedIcon fontSize="large" />
            </div>
            <Typography  style={{padding:'10px'}}  variant="h5">
             Sign in
            </Typography>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
           <FormControlLabel 
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
            <Button
           
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
          >
            Sign In
          </Button>
          <Grid style={{paddingTop:'10px'}} container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          </div>
          </form>
        </div>
        
        
        
      
    )
}

export default SignInForm
