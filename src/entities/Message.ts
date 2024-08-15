import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
    Relation,
} from "typeorm";
import { User } from "./User.js";
import { Contact } from "./Contact.js";

@Entity()
export class Message {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    content: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    date: Date;

    @ManyToOne(() => User, (user) => user.sentMessages)
    sender: Relation<User>;

    @ManyToOne(() => Contact, (contact) => contact.receivedMessages)
    receiver: Relation<Contact>;
}
