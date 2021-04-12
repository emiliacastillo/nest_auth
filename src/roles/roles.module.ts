import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesController } from './roles.controller';
import { RoleEntity } from './roles.entity';
import { RoleMapper } from './roles.mapper';
import { RolesRepository } from './roles.repository';
import { RolesService } from './roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  controllers: [RolesController],
  providers: [RolesService, RolesRepository, RoleMapper],
  exports: [RolesService],
})
export class RolesModule {}
