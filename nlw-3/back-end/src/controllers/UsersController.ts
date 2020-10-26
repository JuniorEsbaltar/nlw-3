import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/Users';
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export default {
  async index(request: Request, response: Response) {
    const UsersRepository = getRepository(User);
    const { email, password } = request.body;

    const user = await UsersRepository.findOne({ email });

    if (!user) {
      return response.status(400).json({ error: 'Email not find' });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return response.status(400).json({ error: 'password invalid' });
    }

    const token = jwt.sign({ id: user.id }, 'secret', {
      expiresIn: 86400,
    });

    return response.status(200).json({
      user,
      token,
    });
  },

  async create(request: Request, response: Response) {
    const UsersRepository = getRepository(User);

    const { name, email } = request.body;
    let { password } = request.body;

    const salt = bcrypt.genSaltSync();
    password = bcrypt.hashSync(password, salt);

    const data = { name, email, password };

    const user = UsersRepository.create(data);

    await UsersRepository.save(user);

    return response.status(201).json('OK');
  },
};
