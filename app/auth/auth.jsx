// utils/auth.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function signUp({ email, password }) {
  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: 'User already exists' };
    }

    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        email,
        password, // In a real-world scenario, you'd hash the password before saving it.
      },
    });

    return { user: newUser };
  } catch (error) {
    console.error('Sign-up error:', error);
    return { error: 'Internal server error' };
  }
}
