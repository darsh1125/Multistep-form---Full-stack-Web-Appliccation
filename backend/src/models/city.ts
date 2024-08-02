import { Model, Table, Column, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import state from './state';

@Table({
  tableName: 'cities'
})
class city extends Model {

  @PrimaryKey
  @Column({
    allowNull: false,
    autoIncrement: true
  })
  id!: number

  @Column({
    allowNull: false
  })
  city!: string

  @ForeignKey(() => state)
  @Column({
    allowNull: false
  })
  stateId!: number

  @BelongsTo(() => state)
  state!: state

}
export default city;