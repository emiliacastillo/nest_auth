import * as bcrypt from 'bcrypt';
import { RoleEntity } from '../roles/roles.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoleType } from 'src/roles/roletype.enum';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  //@PrimaryGeneratedColumn()
  userId: string;

  @Column({
    //unique: true,
  })
  name: string;

  @Column({ type: 'varchar', length: 70, nullable: true })
  password: string;

  //esto es par una relacion de muchos a muchos con la tabla roles
  @ManyToMany(type => RoleEntity, rol => rol.users)
  @JoinTable({name: 'user_roles'})
  roles: RoleEntity[];

  // @OneToOne(type => RoleEntity, { nullable: false })
  // @JoinColumn({name:'role_id'})
  // roles: RoleEntity;

  @Column({ type: 'varchar', length: 8, default: 'ACTIVE' })
  status: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updated_at: Date;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compareSync(password, this.password);
  }
  constructor(userId: string, name: string, pass: string, status: string) {
    this.userId = userId;
    this.name = name;
    this.password = pass;
    this.status = status;
  }
}
