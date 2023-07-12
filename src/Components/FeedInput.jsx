import { IconButton, Paper } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react'

const FeedInput = ({ onHandleSubmit }) => {
    const [input, setInput] = useState('');


    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onHandleSubmit(input)
        setInput('')
    }
    return (
        <>
            <Paper
                onSubmit={handleSubmit}
                component="form"
                sx={{
                    bgcolor: '#40414f', p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: { md: '50%', xs: '90%' }, borderRadius: '10px', margin: '30px',
                }} >
                <input type='text' placeholder='Send a message' onChange={handleChange} value={input}
                    style={{
                        marginLeft: '10px', color: '#fff', background: 'transparent', border: 'none', outline: 'none',
                        width: '90%',
                    }} />
                <IconButton onClick={handleSubmit}>
                    <SendIcon />
                </IconButton>
            </Paper >

        </>
    )
}

export default FeedInput