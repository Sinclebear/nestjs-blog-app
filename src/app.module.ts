import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      // ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({
        // NODE_ENV: Joi.string().valid('dev', 'prod').required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    //TypeOrmModule.forRoot(typeORMConfig),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      // entities: [__dirname + '/../**/*.entity.{js,ts}'],
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    BoardsModule,
    AuthModule,
  ],
})
export class AppModule {}
