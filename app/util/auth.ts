import jwt from 'jsonwebtoken';
import IUser from '../interfaces/user';

export const verifyToken = (req: any, res: any, next: any) => {
    const authHeader = req.headers['authorization'];

    if (authHeader != null) {
        const splittedToken = authHeader.split(' ');
        const token = splittedToken[1];
        jwt.verify(token,
        process.env.JWT_SECRET!,
        (err: any, authData: any) => {
            if (err) {
                res.status(403).json({
                    message: 'Invalid token',
                });
            } else {
                next();
            }
        });
    } else {
        res.status(403).json({
            message: 'Please provide a token',
        });
    }
};

export const getToken = (user: IUser) => {
    return jwt.sign(user, process.env.JWT_SECRET!);
};
