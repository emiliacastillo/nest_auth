import { ApiProperty } from '@nestjs/swagger';
import { RoleEntity } from 'src/roles/roles.entity';

export class UserDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  roles: RoleEntity[];

  // @ApiProperty()
  // role: RoleEntity;

  constructor(id: string, name: string, password: string, status: string) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.status = status;
  }
}
