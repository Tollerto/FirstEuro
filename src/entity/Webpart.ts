import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type WebpartData = Omit<Webpart, "id"> 

@Entity()
export class Webpart {
  @PrimaryGeneratedColumn({ name: 'part_id' })
  id!: number;

  @Column()
  name!: string; //NAME FOR THE LIST

  @Column()
  title!: string; //NAME FOR THE TITLE

  @Column()
  text!: string;
}
