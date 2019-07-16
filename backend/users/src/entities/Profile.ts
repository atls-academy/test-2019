import { User } from './User'
import { PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Entity } from 'typeorm'

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @OneToOne(type => User)
  @JoinColumn()
  user: User
}
