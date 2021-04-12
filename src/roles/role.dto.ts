import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/users/users.entity';

export class RoleDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;  

  @ApiProperty()
  status: string;

  @ApiProperty()
  users: UserEntity[];

  constructor(id: string, name: string, status: string) {
    this.id = id;
    this.name = name;
    this.status = status;
  }
}
