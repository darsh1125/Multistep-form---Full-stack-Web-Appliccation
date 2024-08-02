import { BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript'
import User from './user'
import { referenceContactTypes } from '../types/modelAttributesType'

@Table({
  tableName: 'referenceContacts',
  paranoid: true,
  timestamps: true
})
class referenceContact extends Model<referenceContactTypes> {

  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true
  })
  id!: number

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  refName!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  refContactNumber!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  refRelation!: string

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  userId!: number

  @BelongsTo(() => User)
  user!: User

}

export default referenceContact;
