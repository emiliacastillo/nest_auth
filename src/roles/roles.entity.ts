import { UserEntity } from '../users/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
    JoinColumn,
    ManyToMany,
    OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  //@PrimaryGeneratedColumn()
  roleId: string;

  @Column({ type: 'varchar', length:255 })
  name: string;

  //esto es par una relacion de muchos a muchos con la tabla usuarios
  @ManyToMany(type => UserEntity, user => user.roles)
  @JoinColumn()
  users: UserEntity[];

  @Column({ type: 'varchar', length: 8, default: 'ACTIVE' })
  status: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' , nullable:true})
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable:true })
  updated_at: Date;

  constructor(roleId: string, name: string,  status: string) {
    this.roleId = roleId;
    this.name = name;
    this.status = status;
  }
}
