import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { RoleDTO } from './role.dto';
import { RoleEntity } from './roles.entity';
import { RoleMapper } from './roles.mapper';

@Injectable()
export class RolesRepository {
  constructor(
    @InjectRepository(RoleEntity)
    private rolesRepository: Repository<RoleEntity>,
    private mapper: RoleMapper,
  ) {}

  getAllRoles(): Promise<RoleEntity[]> {
    return this.rolesRepository.find();
  }

  getRoleById(id: string): Promise<RoleEntity> {
    return this.rolesRepository.findOne(id);
  }

  newRole(roleDTO: RoleDTO): Promise<RoleEntity> {
    const newRole = this.mapper.dtoToEntity(roleDTO);
    return this.rolesRepository.save(newRole);
  }

  async updateRole(id: string, roleDTO: RoleDTO): Promise<RoleEntity> {
    roleDTO.id = id;
    const updateRole = this.mapper.dtoToEntity(roleDTO);
    await this.rolesRepository.update(id, updateRole);
    return this.rolesRepository.findOne(id);
  }

  deleteRole(id: string): Promise<DeleteResult> {
    return this.rolesRepository.delete(id);
  }
  getRoleByName(name: string): Promise<RoleEntity> {
    return this.rolesRepository.findOne({ name });
  }
}
