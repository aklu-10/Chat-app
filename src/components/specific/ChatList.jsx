import { Stack } from '@mui/material'
import React from 'react'
import ChatItem from '../shared/ChatItem'

const ChatList = ({
    w="100%",
    chats=[],
    chatId, 
    onlineUsers=[],
    newMessagesAlert=[{
        chatId: '1',
        count: 0
    }],
    handleDeleteChat
}) => {
  return (
    <Stack width={w}>
        {
            chats?.map(data=>{

                const {avatar, _id, name, groupChat, members} = data;

                const newMessageAlerts = newMessagesAlert.find(
                    (alert) => alert.chatId === _id
                );

                const isOnline = members?.some(member=>onlineUsers.includes(_id));


                return <ChatItem 
                        newMessageAlert={newMessageAlerts} 
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}
                        _id={_id}
                        key={_id}
                        groupChat={groupChat}
                        sameSender={chatId === _id}
                        handleDeleteChat={handleDeleteChat}
                    />
            })
        }
    </Stack>
  )
}

export default ChatList