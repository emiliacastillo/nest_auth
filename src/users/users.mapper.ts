import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserEntity } from './users.entity';

@Injectable()
export class UserMapper {
  dtoToEntity(userDTO: UserDTO): UserEntity {
    return new UserEntity(
      userDTO.id,
      userDTO.name,
      userDTO.password,
      userDTO.status

    );
  }

  entityToDto(userEntity: UserEntity): UserDTO {
    return new UserDTO(
      userEntity.userId,
      userEntity.name,
      userEntity.password,
      userEntity.status

    );
  }
}
