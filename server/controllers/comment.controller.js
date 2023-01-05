import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAudioComments = async (req, res, next) => {
    try {
        const audioID = req.params.id;
        const comments = await prisma.audio.findUnique({
            where: {
                id: audioID,
            },
            include: {
                comment: true,
            },
        }).comment;
        res.status(200).json({ comments: comments });
    } catch (err) {
        next(err);
    }
};
export const addComment = async (req, res, next) => {
    try {
        const audioID = req.params.id;
        const userID = req.params.uid;
        console.log(req.body);
        const comment = await prisma.audio.update({
            where: {
                id: audioID,
            },
            data: {
                comment: {
                    create: {
                        ...req.body,
                        author: {
                            connect: {
                                id: userID,
                            },
                        },
                    },
                },
            },
        });
        res.status(201).json(comment);
    } catch (err) {
        next(err);
    }
};
export const deleteComment = async (req, res, next) => {
    try {
        const commentID = req.params.cid;
        const deletedComment = await prisma.comment.delete({
            where: {
                id: commentID,
            },
        });
        res.status(200).json(deletedComment);
    } catch (err) {
        next(err);
    }
};

export const updateComment = async (req, res, next) => {
    try {
        const commentID = req.params.cid;
        const updatedComment = await prisma.comment.update({
            where: {
                id: commentID,
            },
            data: {
                ...req.body,
            },
        });
        res.status(200).json(updatedComment);
    } catch (err) {
        next(err);
    }
};
