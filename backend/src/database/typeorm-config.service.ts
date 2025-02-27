import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import * as path from 'path';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.configService.get('database.type'),
      url: this.configService.get('database.url'),
      host: this.configService.get('database.host'),
      port: this.configService.get('database.port'),
      username: this.configService.get('database.username'),
      password: this.configService.get('database.password'),
      database: this.configService.get('database.name'),
      synchronize: this.configService.get('database.synchronize'),
      dropSchema: false,
      keepConnectionAlive: true,
      logging: false,
      // logging: this.configService.get('app.nodeEnv') !== 'production',
      entities: [path.resolve(__dirname + '/../**/*.entity{.ts,.js}')],
      migrations: [path.resolve(__dirname + '/migrations/**/*{.ts,.js}')],
      cli: {
        entitiesDir: 'src',
        migrationsDir: 'src/database/migrations',
        subscribersDir: 'subscriber',
      },
      // AWS Postgres DB
      // extra: { ssl: true },
      // extra: {
      //   max: this.configService.get('database.maxConnections'),
      //   ssl: this.configService.get('database.sslEnabled')
      //     ? {
      //         rejectUnauthorized: this.configService.get(
      //           'database.rejectUnauthorized',
      //         ),
      //         ca: this.configService.get('database.ca') ?? undefined,
      //         key: this.configService.get('database.key') ?? undefined,
      //         cert: this.configService.get('database.cert') ?? undefined,
      //       }
      //     : undefined,
      // },
      autoLoadEntities: true,
      migrationsRun: false,
    } as TypeOrmModuleOptions;
  }
}
