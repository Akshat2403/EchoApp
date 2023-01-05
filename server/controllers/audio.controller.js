import { PrismaClient } from '@prisma/client';
import { uploadConverter } from '../utils/converter.js';
import createError from '../utils/error.js';

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
            include: {
                comment: true,
                tags: true,
            },
        });
        if (!audio) {
            next(createError(404, 'Media Not Found'));
        }
        return res.status(200).json(audio);
    } catch (err) {
        next(err);
    }
};

export const addAudio = async (req, res, next) => {
    try {
        const reqID = req.params.uid;
        const { tag, ...details } = req.body;
        await uploadConverter(req.file.filename, 'mp3', 'output').then(
            async () => {
                const audio = await prisma.audio.create({
                    data: {
                        author: {
                            connect: {
                                id: reqID,
                            },
                        },
                        ...details,
                    },
                });
                await Promise.all(
                    tag.map(
                        async (ele) =>
                            await prisma.tag.upsert({
                                where: { name: ele },
                                update: {
                                    audio: {
                                        connect: { id: audio.id },
                                    },
                                },
                                create: {
                                    name: ele,
                                    audio: {
                                        connect: { id: audio.id },
                                    },
                                    createdBy: {
                                        connect: { id: reqID },
                                    },
                                },
                            })
                    )
                );

                res.status(201).json(audio);
            }
        );
    } catch (err) {
        next(err);
    }
};
