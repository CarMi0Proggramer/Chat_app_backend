import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    Relation,
} from "typeorm";
import { Message } from "./Message.js";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ type: "text", nullable: true })
    description: string;

    @Column({
        type: "json",
        default: {
            theme: "light",
            notifications: true,
        },
    })
    configurations: JSON;

    @OneToMany(() => Message, (message) => message.sender)
    sentMessages: Relation<Message[]>;

    @OneToMany(() => Message, (message) => message.receiver)
    receivedMessages: Relation<Message[]>;
}
