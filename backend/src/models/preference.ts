import { Model, Table, Column, PrimaryKey, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import User from './user';
import { preferenceTypes } from '../types/modelAttributesType';

@Table({
  tableName: 'preferences',
  timestamps: true,
  paranoid: true
})
class preference extends Model<preferenceTypes> {

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
  preferanceLocation!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  noticePeroid!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  expectedCtc!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  currentCtc!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  department!: string

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  userId!: number

  @BelongsTo(() => User)
  user!: User

}

export default preference;
