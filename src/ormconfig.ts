import { ConnectionOptions } from 'typeorm';

// const config: ConnectionOptions = {
//     type: 'postgres',
//     host: process.env.DB_HOST,
//     port: parseInt(process.env.DB_PORT),
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     entities: [__dirname + '/**/*.entity{.ts,.js}'],
//     synchronize: false,
//     migrationsRun: true,
//     logging: true,
//     migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
//     cli: {
//         migrationsDir: './migrations',
//     }
// }

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: parseInt('5433'),
  username: 'postgres',
  password: 'postgres',
  database: 'ventacasas',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  logging: true,
  migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: './migrations',
  },
};
export = config;
