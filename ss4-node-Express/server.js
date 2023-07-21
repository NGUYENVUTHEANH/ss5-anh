const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: true }))
// app.[get, post, put, patch, delete](‘<đường dẫn định tuyến>’,function(req,res){
//     ///Code xử lý logic cho router
//     })
const users = {
    name: [
        {
            name: "Adam",
            address: "đỉnh tháp skytree",
            phone: "0919278957"
        },
        {
            name: "Evar",
            address: "đỉnh tháp tokyo",
            phone: "0919278957"
        },
        {
            name: "snackPink",
            address: "kim tự tháp",
            phone: "0919278957"
        },
        {
            name: "blackBig",
            address: "toà nhà max",
            phone: "0919278957"
        }
    ]
}
//req là 1 object chứa thông tin ng dùng gủei về cho server
//console.log(req.params);
//res là 1 object chứa các phương thức chứa mà server gửi về cho client 
//    console.log(res);



app.get('/', (req, res) => {
    res.send('Đây là home page')
})
app.get('/products', (req, res) => {
    res.send('Đây là product page')
})
app.get('/product-detail', (req, res) => {
    res.send('Đây là product detail page')
})

app.get('/json/:id', (req, res) => {
    res.json(users)
})
app.post('/product', (req, res) => {
    const data = req.body;
    users.users.push(data)
    res.send({ dataUser })
    console.log(req.body);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})