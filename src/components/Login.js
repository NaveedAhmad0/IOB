import React from 'react'
import "./Login.css"
import img from '../img/5163951.png'
import facebook from '../img/facebook.png'
import Google from '../img/google.png'

// import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

function Login() {
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    
    return (
        <div className="container">
            
            <div className="col1">
              <section>
              <h2 classname='para' style={{color:'white',fontSize:'35px', fontFamily:'Poppins'}}>WELCOME</h2>
              <h1 className='para1'style={{color:'white',fontSize:'55px',marginBlock:'auto',marginTop:'-15px', fontFamily:'Poppins'}}>PLEASE LOGIN</h1>
              <h2 className='para2'style={{color:'white',fontSize:'25px',marginBlock:'auto', fontFamily:'Poppins'}}>TO CONTINUE!</h2>
              <img style={{height:"300px",marginTop:"100px",marginLeft:"110px"}} src={img}/>
              </section>

            </div>
            <div className="col2" >
              {/* <Card id="card" > */}
              <form onSubmit={formik.handleSubmit}>
               <Box sx={{textAlign:'center'}}>
                  <Typography variant='h5' className="textSign" style={{fontFamily:'Poppins'}}><h5>Sign In to your account</h5></Typography>
                  <Typography body='2' className="textSign"  style={{fontFamily:'Poppins'}}>Dont have an account.Create your account,</Typography>
                  <Typography body='2' className="textSign" style={{fontFamily:'Poppins'}} >it takes less than a minute</Typography>   
               </Box>
                <Box sx={{ width: '500px', maxWidth: '100%', padding:'15px',}}>
                    <TextField fullWidth label="Email Address" id="emailaddress" />

                </Box>
                <Box sx={{ width: 500, maxWidth: '100%', padding:'15px',}}>
                    <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    />
                </Box>
                  <Box sx={{marginLeft:'350px'}}>
                     <a className="text-muted" style={{textDecoration:'none'}} href="#">Forget Password?</a>
                  </Box>
                <Box sx={{display:'flex',justifyContent:'space-between' ,padding:'15px'}}>

                  <Button color="primary" variant="contained" type="submit" className="Logbuttn">
                  Login
                  </Button>
                  
                  <Typography body='2' className="text-muted" style={{fontFamily:'Poppins'}} >Don't have an account? <a className="SignButton"href="#">Sign Up</a></Typography> 
                </Box>
                <Box sx={{display:'flex',justifyContent:'center' ,padding:'15px' }}> 
                <Typography body='2' className="text-muted"  > Or connect using </Typography>   
                </Box>
                
                <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
                <Card style={{width:'150px'}}>
                
                <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
                <img src={facebook} alt="" />
                <Typography body='2' className="text-muted"  >Facebook</Typography> 
                </Box>
                </Card>
                <Card style={{width:'150px'}}>
                
                <Box sx={{display:'flex',justifyContent:'space-evenly' , boxShadow:"0px 2px 5px", opacity:"1"}}>
                <img src={Google} alt="" />
                <Typography body='2' className="text-muted"  >Google</Typography> 
                </Box>
                </Card>
                </Box>
              </form>
              {/* </Card> */}
                
            </div>
        </div>
    )
}

export default Login
// ReactDOM.render(<WithMaterialUI />, document.getElementById('root'));
