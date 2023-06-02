import { PrismaClient } from '@prisma/client';
import { uploadConverter, youtubeConverter } from '../utils/converter.js';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { dirname } from 'path';
import createError from '../utils/error.js';
import { v4 as uuidv4 } from 'uuid';
import { title } from 'process';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prisma = new PrismaClient();

const createAudio = async (req, audioName) => {
    const reqID = req.params.uid;
    const { tag, youtubeURL, ...details } = req.body;
    const tags = [...tag];
    const audio = await prisma.audio.create({
        data: {
            author: {
                connect: {
                    id: reqID,
                },
            },
            url: audioName,
            ...details,
        },
    });
    if (tags) {
        await Promise.all(
            tags.map(
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
    }
    return audio;
};
export const getAudioAll = async (req, res, next) => {
    try {
        var audio;
        if (Object.keys(req.query).length != 0) {
            if ((req.query.search = null)) {
                audio = null;
            } else {
                audio = await prisma.audio.findMany({
                    where: {
                        OR: [
                            {
                                title: {
                                    contains: req.query.search,
                                    mode: 'insensitive',
                                },
                            },
                            {
                                description: {
                                    contains: req.query.search,
                                    mode: 'insensitive',
                                },
                            },
                        ],
                    },
                    include: { author: true },
                });
            }
        } else {
            audio = await prisma.audio.findMany({
                include: { author: true },
            });
        }
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
                comment: {
                    include: {
                        author: true,
                    },
                },
                tags: true,
                author: true,
            },
        });
        if (!audio) {
            return next(createError(404, 'Media Not Found'));
        }
        return res.status(200).json(audio);
    } catch (err) {
        next(err);
    }
};

export const addAudio = async (req, res, next) => {
    try {
        const audioName = `${uuidv4()}`;
        await uploadConverter(req.file.filename, req.body.format, audioName);
        const audio = await createAudio(req, audioName);
        res.status(201).json(audio);
    } catch (err) {
        next(err);
    }
};

export const addAudioYT = async (req, res, next) => {
    try {
        const audioName = `${uuidv4()}`;
        const VideoSource = uuidv4();
        await youtubeConverter(
            req.body.youtubeURL,
            req.body.format,
            audioName,
            `${VideoSource}.mp4`
        );
        const audio = await createAudio(req, audioName);
        res.status(201).json(audio);
    } catch (err) {
        next(err);
    }
};
export const deleteAudio = async (req, res, next) => {
    const reqID = req.params.id;
    const audioinfo = await prisma.audio.findUnique({
        where: {
            id: reqID,
        },
    });
    fs.unlink(
        `${__dirname}/../assets/audio/${audioinfo.url}.${audioinfo.format}`
    );
    const audio = await prisma.audio.delete({
        where: {
            id: reqID,
        },
    });
    res.status(205).json(audio);
};
