// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersModule } from './users/users.module';
// import { ConfigModule } from '@nestjs/config';
// import { Module } from '@nestjs/common';

// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: process.env.DB_HOST,
//       port: parseInt(process.env.DB_PORT),
//       username: process.env.DB_USER,
//       password: process.env.DB_PASS,
//       database: process.env.DB_NAME,
//       autoLoadEntities: true,
//       synchronize: !!process.env.DB_SYNC,
//     }),
//     UsersModule,
//   ],
//   controllers: [],
//   providers: [],
// })
// export class AppModule {}
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...ormconfig,
      keepConnectionAlive: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    AuthModule,
    RolesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
