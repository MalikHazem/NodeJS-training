import { Router } from "express";
import { validateUser } from "../validator.js";
import { reqTime} from './../middleware.js'
import { faker } from '@faker-js/faker';
import mysql from 'mysql2'

const router = Router();
const Users = [];

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'nodejs'
});

db.connect((err) => {
    if (!err) {
        console.log('Connected to MySQL server');
    } else {
        console.log(`Failed to Connect to MySQL server, ${err.message}`);
    }
})


router.get('/', (req, res) => {
    db.query(
        'select * from users',
    (err, values)=>
    {
        if(err)
        {
            res.status(400).send(err)
        }
        else
        {
            res.status(200).send(values)
        }
    }
    )
    // res.send(Users)
})

router.post('/', (req, res) => {
    const validateRes = validateUser(req.body)
    if(req.headers.username !== 'Malik')
    {
        res.status(403).send();
    }
    else if(validateRes)
    {
        res.status(400).send(validateRes)
    }
    else if(!validateRes)
    {
        const id = req.body.id;
        const name = req.body.name;
        const age = req.body.age;
        const city = req.body.city;
        const value = [id, name, age, city];
        db.query(
            'insert into users values (?, ?, ?, ?)', value,
            (err)=>
            {
                if(err)
                {
                    res.status(400).send(err)
                }
                else
                {
                    res.status(200).send('insert 1 user')
                }
            }
        )
    }
})

router.post('/batch', reqTime, (req, res, next) => {
    const count = Number(req.query.count)
    
    for (let i = 0; i < count; i++) {
        Users.push({
            id: faker.random.numeric(3),
            name: faker.name.fullName()
        })
    }

    next();
    res.send(`${count} added add!`)
}, reqTime)

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    console.log(id);
    const userIndex = Users.findIndex(item => item.id === id)
    if (userIndex >= 0) {
        Users.splice(userIndex, 1)
        res.send("One user deleted!")
    } else {
        res.send("User notfound!")
    }
})

// app.on('close',
// {
//     // db.close;
// })

export default router;