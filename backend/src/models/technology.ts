import { BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript'
import User from './user'
import { technologyAttributesType } from '../types/modelAttributesType'

@Table({
  tableName: 'technologies',
  paranoid: true,
  timestamps: true
})
class technology extends Model<technologyAttributesType> {

  @PrimaryKey
  @Column({
    allowNull: false,
    autoIncrement: true,
    type: DataType.INTEGER
  })
  id!: number

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  technologyLan!: string

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  level!: string

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  userId!: number

  @BelongsTo(() => User)
  user!: User

}

export default technology;