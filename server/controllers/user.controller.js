import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import createError from '../utils/error.js';
const prisma = new PrismaClient();

export const login = async (req, res, next) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email,
            },
        });
        if (!user) {
            return next(createError(404, 'User Not Found'));
        }

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect) {
            return next(createError(400, 'Incorrect Password or Username'));
        }
        const token = jwt.sign(
            {
                id: user.id,
            },
            process.env.JWT_SECRETKEY
        );

        const { password, ...details } = user;
        res.cookie('access_token', token, {
            httpOnly: true,
        })
            .status(200)
            .json({ ...details });
    } catch (err) {
        next(err);
    }
};

export const register = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
        const userExist = await prisma.user.findUnique({
            where: {
                email: req.body.email,
            },
        });
        if (userExist) {
            return next(createError(409, 'User already exists'));
        }
        const newUser = await prisma.user.create({
            data: {
                ...req.body,
                password: hash,
            },
        });
        const { password, ...otherDetails } = newUser;
        res.status(201).json({ ...otherDetails });
    } catch (err) {
        next(err);
    }
};

export const getUser = async (req, res, next) => {
    const reqID = req.params.uid;
    const user = await prisma.user.findUnique({
        where: {
            id: reqID,
        },
        include: {
            audio: true,
        },
    });
    if (!user) {
        return next(createError('404', 'Unable to fetch User'));
    }
    const { password, ...details } = user;
    res.status(200).json({ ...details });
};

export const logout = (req, res, next) => {
    res.cookie('access_token', '', { maxAge: 1 });
};
