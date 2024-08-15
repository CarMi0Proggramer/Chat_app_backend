import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Relation,
    OneToMany,
} from "typeorm";
import { User } from "./User.js";
import { Message } from "./Message.js";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => User, (user) => user.contacts, { onDelete: "CASCADE" })
    user: Relation<User>;

    @ManyToOne(() => User, (user) => user.contactOf, { onDelete: "CASCADE" })
    contact: Relation<User>;

    @OneToMany(() => Message, (message) => message.receiver)
    receivedMessages: Relation<Message[]>;
}
