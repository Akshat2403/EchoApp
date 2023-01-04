import { PrismaClient } from '@prisma/client';
import { uploadConverter } from '../utils/converter.js';

const prisma = new PrismaClient();
export const getAudioAll = async (req, res, next) => {
    try {
        const audio = await prisma.audio.findMany();
        res.status(200).json(audio);
    } catch (err) {
        next(err);
    }
};

export const getAudio = async (req, res, next) => {
    try {
        const reqID = req.params.id;
        const audio = await prisma.audio.findUnique({
            where: {
                id: reqID,
            },
        });
        return res.status(200).json(audio);
    } catch (err) {
        next(err);
    }
};

export const addAudio = async (req, res, next) => {
    try {
        const reqID = req.params.uid;
        await uploadConverter(req.file.filename, 'mp3', 'output').then(
            async () => {
                const audio = await prisma.audio.create({
                    data: {
                        author: {
                            connect: {
                                id: reqID,
                            },
                        },
                        ...req.body,
                        tag: {
                            connectOrCreate: {
                                where: {
                                    id:req.body.tag
                                },
                                createMany: {
                                    ...req.body.tag
                                }
                            }
                        }
                    },
                });
                res.status(200).json(audio);
            }
        );
    } catch (err) {
        next(err);
    }
};

