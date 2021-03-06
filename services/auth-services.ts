import bcrypt from 'bcryptjs'

export const generateHashedPassword = async (password: any) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}