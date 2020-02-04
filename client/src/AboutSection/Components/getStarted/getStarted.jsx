import React, { useState } from 'react';
import { Button, FormControl, Box, Grid, Paper, Card, CardHeader, Typography, makeStyles, CardContent, Input, TextField } from '@material-ui/core';
import { Form } from 'multiparty';
import Axios from 'axios'
import { isMobile } from 'react-device-detect';
import { useEffect } from 'react';

const styles = makeStyles({
    cardRoot: {
        width: '1000px',
        height: '500px',
        backgroundColor: 'rgb(54, 57, 63, .5)',
        color: '#FFFFFF'
    },
    cardRootMobile: {
        minHeight: '500px',
        backgroundColor: 'rgb(54, 57, 63, .5)',
        color: '#FFFFFF'
    },
    input: {
        color: 'white'
    }
})

let onSubmit = (e, email, name) => {
    (e).preventDefault()
    Axios.post('/api/users/newsLetter',
        {
            email: email,
            name: name
        })
}

function GetStarted(props) {
    let style = styles()
    let [email, setEmail] = useState(null)
    let [name, setName] = useState(null)
    let [amount, setAmount] = useState(null)

    useEffect(
        () => {
            Axios.get(
                '/api/users/getNL'
            )
            .then(
                (res)=>{
                    setAmount(res.data.data.length + 30)
                }
            )
        }
    )
    return (
        <Grid container justify='center'>
            <Card variant='outlined' item className={isMobile ? style.cardRootMobile : style.cardRoot}>
                <CardContent>
                    <Box width='100%'>
                        <Grid container justify='space-between' direction='row'>
                            <Typography variant='h4' color='white'>
                                <Box w='60%' item p={5}>Sign Up For News Letter</Box>
                            </Typography>
                            <Typography variant='h6'>
                                <Box width='50%' textAlign='center' item>People Signed up {amount}</Box>
                            </Typography>
                        </Grid>
                    </Box>
                    <form onSubmit={(e) => { onSubmit(e, email, name) }}>
                        <FormControl
                            variant='outlined'
                            fullWidth
                            style={{
                                backgroundColor: 'white',
                                minHeight: '200px',
                                padding: '20px',
                                borderRadius: '15px'
                            }}>
                            <Typography variant='h4'>
                                <Box mb={4} color='black'>Sign up</Box>
                            </Typography>
                            <TextField
                                label='Email'
                                type='email'
                                variant='outlined'
                                style={{
                                    backgroundColor: "white",
                                    padding: '10px',
                                }}
                                placeholder='Input here'
                                padding='dense'
                                required
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                            <TextField
                                label='Name'
                                variant='outlined'
                                style={{
                                    backgroundColor: "white",
                                    padding: '10px',
                                }}
                                placeholder='Input here'
                                padding='dense'
                                required
                                onChange={(e) => { setName(e.target.value) }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={style.submit}

                            >
                                Sign in
                            </Button>
                        </FormControl>
                    </form>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default GetStarted;