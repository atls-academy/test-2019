import { PrimaryGeneratedColumn, Entity, Column, OneToOne } from 'typeorm'
import { Profile } from './Profile'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @OneToOne(type => Profile)
  profile: Profile
}
