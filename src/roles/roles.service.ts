import { Injectable } from '@nestjs/common';
import { RoleDTO } from './role.dto';
import { RoleEntity } from './roles.entity';
import { RoleMapper } from './roles.mapper';
import { RolesRepository } from './roles.repository';

@Injectable()
export class RolesService {
  constructor(
    private rolesRepository: RolesRepository,
    private mapper: RoleMapper,
  ) {}

  async getAllRoles(): Promise<RoleDTO[]> {
    const users: RoleEntity[] = await this.rolesRepository.getAllRoles();
    return users.map((user) => this.mapper.entityToDto(user));
  }

  async getRoleById(id: string): Promise<RoleDTO> {
    const user: RoleEntity = await this.rolesRepository.getRoleById(id);
    return this.mapper.entityToDto(user);
  }

  async newRole(roleDTO: RoleDTO): Promise<RoleDTO> {
    const newRole: RoleEntity = await this.rolesRepository.newRole(roleDTO);
    return this.mapper.entityToDto(newRole);
  }

  async updateRole(id: string, roleDTO: RoleDTO): Promise<RoleDTO> {
    const updateRole = await this.rolesRepository.updateRole(id, roleDTO);
    return this.mapper.entityToDto(updateRole);
  }

  async deleteRole(id: string): Promise<void> {
    await this.rolesRepository.deleteRole(id);
  }
  async getRoleByName(name: string): Promise<RoleEntity> {
    return await this.rolesRepository.getRoleByName(name);
  }
}
