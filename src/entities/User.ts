import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    Relation,
} from "typeorm";
import { Message } from "./Message.js";
import { Contact } from "./Contact.js";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
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

    @OneToMany(() => Message, (message) => message.userFrom)
    sentMessages: Relation<Message[]>;

    @OneToMany(() => Contact, (contact) => contact.userFrom)
    contacts: Relation<Contact[]>;

    @OneToMany(() => Contact, (contact) => contact.userTo)
    contactOf: Relation<Contact[]>;
}
