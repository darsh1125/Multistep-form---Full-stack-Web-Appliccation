import { DataType, Table, Model, PrimaryKey, Column, ForeignKey, BelongsTo } from 'sequelize-typescript'
import User from './user'
import { workExperienceType } from '../types/modelAttributesType'
import { DateOnlyDataType } from 'sequelize'

@Table({
  tableName: 'workExperiences',
  paranoid: true,
  timestamps: true
})
class workExperience extends Model<workExperienceType> {

  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true
  })
  id!: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  companyName!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  designation!: string

  @Column({
    type: DataType.DATEONLY,
    allowNull: false
  })
  from!: DateOnlyDataType

  @Column({
    type: DataType.DATEONLY,
    allowNull: false
  })
  to!: DateOnlyDataType

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  userId!: number

  @BelongsTo(() => User)
  user!: User

}

export default workExperience;
