import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("orders")
export class OrderEntity {
  @PrimaryGeneratedColumn( {name: "id"})
  id: number;

  @Column({name: "name", type: "varchar"})
  name: string;
}
