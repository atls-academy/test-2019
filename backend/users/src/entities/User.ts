import { PrimaryGeneratedColumn, Entity, Column, OneToOne, ManyToOne, JoinColumn } from 'typeorm'
import { Profile } from './Profile'
import { Role } from '@backend/roles/src/entities'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @OneToOne(type => Profile)
  profile: Profile

  @ManyToOne(type => Role)
  @JoinColumn()
  role: Role
}
