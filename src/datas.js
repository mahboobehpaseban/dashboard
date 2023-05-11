let xAxisData = [
    {
        "name": 'Jan',
        "Sale": 112_000
    },
    {
        "name": 'Feb',
        "Sale": 99_000
    },
    {
        "name": 'Mar',
        "Sale": 12_090
    },
    {
        "name": 'Apr',
        "Sale": 99_000
    },
    {
        "name": 'May',
        "Sale": 54_000
    },
    {
        "name": 'Jun',
        "Sale": 85_000
    },
    {
        "name": 'Jul',
        "Sale": 34_000
    },
    {
        "name": 'Agu',
        "Sale": 18_598
    },
    {
        "name": 'Sep',
        "Sale": 0
    },
    {
        "name": 'Oct',
        "Sale": 73_078
    },
    {
        "name": 'Nov',
        "Sale": 12_900
    },
    {
        "name": 'Dev',
        "Sale": 97_000
    },
]

const newMembers=[
    {id:1,
    username:"Hasanvand",
    title:'web Developer',
    img:'images/avatar.jpg'},
    {id:2,
        username:"Alibeygi",
        title:'IT-Ingonier',
        img:'images/avatar2.jpg'},
        {id:3,
            username:"Paseban",
            title:'web Developer',
            img:'images/avatar3.png'},
            {id:4,
                username:"Akbari",
                title:'web UIUX',
                img:'images/avatar4.jpg'},              
]
const transactions=[
    {
        id:1,
        customer:'Qadir Yolme',
        date:'12 Jan 2010',
        amount:123,
        status:'Declined',
        img:'images/avatar.jpg'
    },
    {
        id:2,
        customer:'Amin saidi',
        date:'12 Jan 2022',
        amount:1254,
        status:'Pending',
        img:'images/avatar2.jpg'
    },
    {
        id:3,
        customer:'sara Honari',
        date:'12 Jan 2020',
        amount:25410,
        status:'Approved',
        img:'images/avatar3.png'
    },
    {
        id:4,
        customer:'Qadir Yolme',
        date:'12 Jan 2018',
        amount:123,
        status:'Pendingg',
        img:'images/product1.jpg'
    }

]

let userRows = [
    {
        id: 1,
        username: 'Qadir Yolme',
        avatar: '/images/avatar.jpg',
        status: 'active',
        transaction: '$129.52',
        email: 'amin@gmail.com'
    },
    {
        id: 2,
        username: 'Amin Saeedi',
        avatar: '/images/avatar1.jpg',
        status: 'non-active',
        transaction: '$110',
        email: 'amin@gmail.com'
    },
    {
        id: 3,
        username: 'Sasan Moq',
        avatar: '/images/avatar2.png',
        status: 'active',
        transaction: '$98',
        email: 'amin@gmail.com'
    },
    {
        id: 4,
        username: 'Zahra Agayi',
        avatar: '/images/avatar3.jpg',
        status: 'active',
        transaction: '$0',
        email: 'amin@gmail.com'
    },
    {
        id: 5,
        username: 'Hamze mohammadi',
        avatar: '/images/avatar4.jpg',
        status: 'active',
        transaction: '$55.98',
        email: 'amin@gmail.com'
    }
]
let products=[{
    id:1,
    title:'Asus',
    avatar: '/images/avatar.jpg',
    price:890
},{
id:2,
title:'Hp',
avatar: '/images/avatar3.jpg',
price:9000
},{
    id:3,
    title:'Lenovo',
    avatar: '/images/avatar1.jpg',
    price:5000
},
{    id:4,
    title:'Aphal',
    avatar:'images/product4.jpg',
    price:4000
},
]
let prodactsData=[
    {
        name: 'Jan',
        Sale: 2000
    },
    {
        name: 'Feb',
        Sale: 12000
    },
    {
        name: 'Mar',
        Sale: 5000
    },
    {
        name: 'Apr',
        Sale: 15000
    },

]
export {xAxisData,newMembers,transactions,userRows,products,prodactsData}
