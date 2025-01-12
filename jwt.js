import { sign } from 'jsonwebtoken';

const generateToken = (userId) => {
    return sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export default { generateToken };
