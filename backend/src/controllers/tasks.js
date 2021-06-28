import {connect} from '../database'

export const getTasks = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM tasks')
    res.json(rows)
}

export const getTasksCount = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT COUNT(*) FROM tasks')
    res.json(rows[0]["COUNT(*)"])
}

export const getTask = async (req, res) => {
    const id = req.params.id;
    const connection = await connect()
    const [rows] = await connection.query(`SELECT * FROM tasks where id=${id}`)
    res.json(rows[0])
}

export const saveTask = async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const connection = await connect()
    const [results] = await connection.query(`INSERT INTO tasks(title,description) VALUES("${title}","${description}")`)

    res.json({
        id: results.insertId,
        ...req.body
    })
}

export const deleteTask = async (req, res) => {
    const id = req.params.id;
    const connection = await connect()
    await connection.query(`DELETE FROM tasks where id=${id}`)
    res.sendStatus(204)
}

export const updateTask = async (req, res) => {
    const connection = await connect()
    await connection.query(`UPDATE tasks SET ? WHERE id=?`,[
        req.body,
        req.params.id
    ])

    res.sendStatus(204)

}