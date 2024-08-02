import { DateOnlyDataType, DecimalDataType } from "sequelize"
import { BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript"
import User from "./user"
import { schDetailTypes } from "../types/modelAttributesType"
// modelName: 'schDetail',

@Table({
  tableName: 'schDetails',
  paranoid: true,
  timestamps: true
})
class schDetail extends Model<schDetailTypes> {

  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    autoIncrement: true
  })
  id!: number

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  courseName!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  instituteName!: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  passingYear!:number

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  percentage!: number

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  userId!: number

  @BelongsTo(() => User)
  user!: User


}

export default schDetail;