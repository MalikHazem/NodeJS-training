import db from "../model/index.js";
import { Op } from "sequelize";

const create = (req, res) => {
    const std = {
        name: req.body.name,
        gpa: req.body.gpa,
        is_graduated: req.body.is_graduated
    }
    db.Student.create(std)
        .then(data => {
            res.status(201).send(data)
        })
        .catch(err => {
            res.status(500).send(err.message || "Something went wrong");
        });
}

const findAll = async (req, res) => {
    const minGPA = req.query.minGPA
    const where = {};
    if (minGPA) {
        where.gpa = { [Op.gte]: minGPA }
    }

    try {
        const students = await db.Student.findAll({
            // attributes: ['foo', 'bar'], To select only some attributes
            // attributes: ['foo', ['bar', 'baz'], 'qux'], // SELECT foo, bar AS baz, qux FROM ...
            where
        });
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(err.message || "Something went wrong");
    }
};

const stdDelete = async (req, res) => {
    const id = req.params.id
    const students = await db.Student.findOne({
        where: { id: id },
    });
    try {
        students.destroy()
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send("Student not fond");
    }
};

const stdUpdate = async (req, res) => {
    const id = req.params.id
    db.Student.update(
        {
            name: req.body.name,
            gpa: req.body.gpa,
            is_graduated: req.body.is_graduated
        },
        { 
            where: 
            {
                id: id
            }
        }
    ).then(students => {
        res.status(200).send(students);
    });
    
    // const id = req.params.id
    // const students = await db.Student.findOne({
    //     where: { id: id },
    // });
    // try {
    //     console.log(" First ID IS " + id)
    //     students.update(
    //         {
    //             name: req.body.name,
    //             gpa: req.body.gpa,
    //             is_graduated: req.body.is_graduated
    //         }
    //         )
    //     .success(function () {
    //         res.status(200).send(students);
    //     })
    //     .error(function () {
    //         res.status(500).send('Update student is failed');
    //     })
    // } 
    // catch (error) {
    //     res.status(500).send("Student not fond");
    // }
};

export default {
    create,
    findAll,
    stdDelete,
    stdUpdate
}