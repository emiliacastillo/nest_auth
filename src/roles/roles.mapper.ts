import { Injectable } from '@nestjs/common';
import { RoleDTO} from './role.dto';
import { RoleEntity } from './roles.entity';

@Injectable()
export class RoleMapper {
  dtoToEntity(roleDTO: RoleDTO): RoleEntity {
    return new RoleEntity(
      roleDTO.id,
      roleDTO.name,
      roleDTO.status
    );
  }

  entityToDto(roleEntity: RoleEntity): RoleDTO {
    return new RoleDTO(
      roleEntity.roleId,
      roleEntity.name,
      roleEntity.status
    );
  }
}
