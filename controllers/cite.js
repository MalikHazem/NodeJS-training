import db from "../model/index.js";
import { Op } from "sequelize";

const Create = (req, res) =>
{
    const city = {
        name: req.body.name
    }
    db.Cite.create(city)
    .then(data =>
        {
            res.status(200).send(data)
        }
    )
    .catch( err => {
        res.status(500).send(err.message || "Something went wrong");
    }
    )
}

const Show = (req, res) =>
{
    db.Cite.findAll()
    .then(data =>
        {
            res.status(200).send(data)
        }
    )
    .catch( err => {
        res.status(500).send(err.message || "Something went wrong");
    }
    )
}

const Delete = (req, res) =>
{
    const id =  req.params.id
    db.Cite.destroy(
        {
            where: 
            {
                id: id
            }
        }
    )
    .then(data =>
        {
            res.status(200).send(data)
        }
    )
    .catch( err => {
        res.status(500).send(err.message || "Something went wrong");
    }
    )
}

const Update = (req, res) =>
{
    const id =  req.params.id
    db.Cite.update(
        {
            name: req.body.name
        },
        {
            where: 
            {
                id: id
            }
        }
    )
    .then(data =>
        {
            res.status(200).send(data)
        }
    )
    .catch( err => {
        res.status(500).send(err.message || "Something went wrong");
    }
    )
}

export default 
{
    Create,
    Show,
    Delete,
    Update
}