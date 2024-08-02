import {PrimaryKey,Table,Model, Column, HasMany} from 'sequelize-typescript'
import city from './city';

  @Table({
    tableName:'states',
  })
  class state extends Model {
    
    @PrimaryKey
    @Column({
      allowNull:false,
      autoIncrement:true
    })
    id!:number

    @Column({
      allowNull:false
    })
    state!:string

    @HasMany(()=>city)
    cities!:city[]
  
  }

  export default state;
 