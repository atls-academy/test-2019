import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

export interface Permission {
  resource: string
  action: string
}

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column('jsonb', { default: [], nullable: true })
  permissions: Permission[] = []
}
