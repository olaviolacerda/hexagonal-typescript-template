import dotenv from 'dotenv';

dotenv.config();

const env = {
  projectName: process.env.PROJECT_NAME || 'hexagonal-template',
};

export { env };
