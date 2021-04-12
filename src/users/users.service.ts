import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { RoleEntity } from '../roles/roles.entity';
import { RolesRepository } from '../roles/roles.repository';
import { UserDTO } from './user.dto';
import { UserEntity } from './users.entity';
import { UserMapper } from './users.mapper';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    //private rolesRepository: RolesRepository,
    private usersRepository: UsersRepository,
    private mapper: UserMapper,
  ) {}

  async getAllUsers(): Promise<UserDTO[]> {
    const users: UserEntity[] = await this.usersRepository.getAllUsers();
    return users.map((user) => this.mapper.entityToDto(user));
  }

  async getUserById(id: string): Promise<UserDTO> {
    const user: UserEntity = await this.usersRepository.getUserById(id);
    return this.mapper.entityToDto(user);
  }

  async newUser(userDTO: UserDTO): Promise<UserDTO> {
    //const roles=await this.rolesRepository.getRoleByName('GENERAL');
   // userDTO.roles=[roles];
   const repo = getConnection().getRepository(RoleEntity);
   const defaultrole = await repo.findOne({where: {name: 'ADMIN'}});
   userDTO.roles=[defaultrole];
    const newUser: UserEntity = await this.usersRepository.newUser(userDTO);
    return this.mapper.entityToDto(newUser);
  }

  async updateUser(id: string, userDTO: UserDTO): Promise<UserDTO> {
    const updateUser = await this.usersRepository.updateUser(id, userDTO);
    return this.mapper.entityToDto(updateUser);
  }

  async deleteUser(id: string): Promise<void> {
    await this.usersRepository.deleteUser(id);
  }
  async getUserByName(name: string): Promise<UserEntity> {
    return await this.usersRepository.getUserByName(name);
  }
}
