export const sampleChats = [
    {
        avatar: ['https://randomuser.me/api/portraits/men/85.jpg', 'https://randomuser.me/api/portraits/men/86.jpg', 'https://randomuser.me/api/portraits/men/87.jpg'],
        name: 'John Doe',
        _id: '1',
        groupChat: false,
        members: ['1', '2']
    },
    {
        avatar: ['https://randomuser.me/api/portraits/men/82.jpg'],
        name: 'Jane Singh',
        _id: '2',
        groupChat: false,
        members: ['1', '2']
    }
]

export const sampleUsers = [
    {
        avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
        name: 'John Doe',
        _id: '1',
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
        name: 'Jane Singh',
        _id: '2',
    }

]

export const sampleNotifications = [
    {
        sender:{
            avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
            name: 'John Doe',
        },
        _id: '1'
    },
    {
        sender:{
            avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
            name: 'Jane Singh',
        },
        _id: '2'
    }
]

export const sampleMessages= [
    {
        attachments: [],
        content: 'ABC',
        _id: 'asd',
        sender: {
            _id: 'user._id',
            name: 'Chaman'
        },
        chat: 'chatId',
        createdAt: '2024-09-02T00:00:00.000Z'
    },
    {
        attachments: [
            {
                url: 'https://randomuser.me/api/portraits/men/85.jpg',
                public_id: '123'
            }
        ],
        content: '',
        _id: 'asd2',
        sender: {
            _id: '12345',
            name: 'Chaman 2'
        },
        chat: 'chatId',
        createdAt: '2024-09-02T00:00:00.000Z'
    }
]