
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
} from '@nestjs/common';
//import { Auth } from '../auth/auth.decorator';
import { RoleDTO } from './role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get()
  async getAllRoles(): Promise<RoleDTO[]> {
    return await this.rolesService.getAllRoles();
  }

  @Get(':id')
  async getRoleById(@Param('id') id: string): Promise<RoleDTO> {
    return await this.rolesService.getRoleById(id);
  }

  @Post()
  async newRole(@Body() role: RoleDTO): Promise<RoleDTO> {
    return await this.rolesService.newRole(role);
  }

  @Put(':id') 
  async updateRole(
    @Param('id') id: string,
    @Body() user: RoleDTO,
  ): Promise<RoleDTO> {
    return await this.rolesService.updateRole(id, user);
  }


  @Delete(':id')
  async deleteRole(@Param('id') id: string): Promise<void> {
    return await this.rolesService.deleteRole(id);
  }

  
}
