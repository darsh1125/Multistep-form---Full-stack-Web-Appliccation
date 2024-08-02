import { DateOnlyDataType } from "sequelize";
import { Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import schDetail from "./schdetail";
import workExperience from "./workexperience";
import language from "./language";
import technology from "./technology";
import referenceContact from "./referencecontact";
import preference from "./preference";
import { userAttributes } from "../types/modelAttributesType";

@Table({
  tableName: 'Users',
  paranoid: true,
  timestamps: true
})
class User extends Model<userAttributes> {

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
  firstName!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  lastName!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  desiganation!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  address1!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  address2!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  phoneNumber!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  gender!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  zipcode!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  state!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  city!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  relationshipStatus!: string

  @Column({
    type: DataType.DATEONLY,
    allowNull: false
  })
  dateOfBirth!: DateOnlyDataType

  @HasMany(() => schDetail)
  schDetails!: schDetail[]

  @HasMany(() => workExperience)
  workExperiences!: workExperience[]

  @HasMany(() => language)
  languages!: language[]

  @HasMany(() => technology)
  technologies!: technology[]

  @HasMany(() => referenceContact)
  referenceContacts!: referenceContact[]

  @HasMany(() => preference)
  preferences!: preference[]

}

export default User;