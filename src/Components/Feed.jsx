import { Box, Stack, styled } from '@mui/material'
import { FeedConversation, FeedInput, FeedPlugins } from './index'
import { sendMessageToOpenAI } from '../API/axios'
import { useState } from 'react'

const FeedStack = styled(Stack)({
    color: '#fff',
    flexGrow: '1',
    background: '#343541',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

const Feed = () => {

    const [messages, setMessages] = useState([]);
    const [srartConversation, setSrartConversation] = useState(false);
    const [error, setError] = useState(false);
    console.log(messages)

    const handleMessageSubmit = async (input) => {
        setSrartConversation(true)
        try {
            const response = await sendMessageToOpenAI(input);
            setMessages([
                ...messages,
                { text: input, isUser: true },
                { text: response, isUser: false },
            ]);

        }
        catch (erroe) {
            setError(erroe);
            console.log(error)
        }

    };


    return (
        <FeedStack width='100%'  >
            <Box width='100%' display='flex' alignContent='center' justifyContent='center' flexDirection='column' >
                {srartConversation ? <FeedConversation conversation={messages} /> : <FeedPlugins />}
            </Box >
            <Box sx={{
                width: { md: '100%', xs: '100%' }, bgcolor: '#343541',
                position: 'fixed', zIndex: '1', bottom: '0px', pb: '20px'
            }} display='flex' alignContent='center' justifyContent='center' >
                <FeedInput onHandleSubmit={handleMessageSubmit} />
            </Box>
        </FeedStack >
    )
}

export default Feed


