const express = require('express');
const app = express()
const port = 3000
const user = {
    username: 'anh',
    password: 'theanh039'
}

const middleWareCheckLogin = ((req, res, next) => {
    if (require.username == user.username && require.password == user.password) {
        console.log('login success');
        next()
    } else {
        console.log('login error');
        res.redirect('/login')
    }
})
app.get('/', middleWareCheckLogin, (req, res) => {
    res.send('<h1>Đây là home page</h1>');
})
app.get('/payment', middleWareCheckLogin, (req, res) => {
    res.send('<h1>Đây là trag yêu cầu đăng nhập</h1>');
})
app.get('/login', (req, res) => {
    res.send('<h1>Đây là trang đăng nhập</h1>');
})
app.listen(port, () => {
    console.log('listening on post:http://localhost:3000/');
})