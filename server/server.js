import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import audioRoutes from './routes/audio.routes.js';
import commentRoutes from './routes/comment.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`);
});

// Middleware
app.use(express.static('assets'));
app.use(express.json());
app.use(helmet());
app.use(cookieParser());
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
        allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    })
);

// Routes
app.use('/audio', audioRoutes);
app.use('/comment', commentRoutes);
app.use('', userRoutes);

app.use((err, req, res, next) => {
    const status = err.code || 500;
    const msg = err.message || 'Something went wrong';
    return res.status(status).json({
        success: false,
        status: status,
        message: msg,
    });
});
