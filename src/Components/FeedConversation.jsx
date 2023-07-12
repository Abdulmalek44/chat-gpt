import { Box, Stack, styled } from '@mui/material'
import React from 'react'
import { FeedAnswer, FeedQuestion } from './index'

const FeedStack = styled(Stack)({
    color: '#d1d5db',
    flexGrow: '1',
    background: '#343541',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
})

const FeedConversation = ({ conversation }) => {
    return (
        <FeedStack>
            <Box width='100%'>
                {conversation.map((message, index) => (
                    message.isUser ? <FeedQuestion message={message.text} /> : <FeedAnswer message={message.text} />
                ))}
            </Box>

        </FeedStack>
    )
}

export default FeedConversation