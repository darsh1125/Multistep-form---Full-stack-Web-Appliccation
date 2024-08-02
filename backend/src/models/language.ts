import { BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript'
import User from './user';
import { languageAttributesType } from '../types/modelAttributesType';

@Table({
  tableName: 'languages',
  paranoid: true,
  timestamps: true
})
class language extends Model<languageAttributesType> {

  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false
  })
  id!: number

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  languageName!: string

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  read!: boolean

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  write!: boolean

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  speak!: boolean

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  userId!: number

  @BelongsTo(() => User)
  user!: User

}

export default language;