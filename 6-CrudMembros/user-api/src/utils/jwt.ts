import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secretKey';

export const generateToken = (id: number) => {
  return jwt.sign({ id }, secret, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
};
