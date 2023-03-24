import express from 'express';
import { logger } from './middleware.js';
import cors from 'cors'
import db from './model/index.js'

import users from './controllers/users.js'
import stdRouter from './routes/student.js';
import cityRouter from './routes/cite.js';
// import articles from './controllers/articles'

const port = 3000
const app = express()
app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin:'http://127.0.0.1:3000'
// }))

db.sequelize.sync()
.then(()=>{
    console.log('DB Sync Done successful')
})
.catch((err)=>{
    console.log(`DB failed ${err}`)
})

app.use(logger);

app.use('/users', users);
app.use('/api/students', stdRouter);
app.use('/api/cities', cityRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.use('/articles', articles);
// app.use('/comment', comment);

app.all('*', (req, res) => {
    res.status(404);
    res.send("Page notfound! error 404");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// app.use(express.static('public'))

// app.use('/static', express.static('public'))

// const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))