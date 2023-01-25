import {Request, Response} from "express";

class UserController {
    async createUser(req: Request, res: Response) {
        const {name, surname} = req.body
        console.log(name, surname)
        res.json('ok')
    }
    async getUsers(req: Request, res: Response) {
        res.json([
            {id: 1, name: 'ivan', surname: 'cho'},
            {id: 2, name: 'vova', surname: 'che'}
        ])
    }
    async getUser(req: Request, res: Response) {
        res.json(
            {id: 1, name: 'ivan', surname: 'cho'}
        )
    }
    async updateUser(req: Request, res: Response) {
        res.json('ok')
    }
    async deleteUser(req: Request, res: Response) {
        res.json('ok')
    }
}

module.exports = new UserController()