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

enum Status {
    READ = "READ",
    UNREAD = "UNREAD",
}

@Entity()
export class Message {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    content: string;

    @Column({ type: "enum", enum: Status, default: Status.UNREAD })
    status: Status;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    date: Date;

    @ManyToOne(() => User, (user) => user.sentMessages)
    userFrom: Relation<User>;

    @ManyToOne(() => Contact, (contact) => contact.receivedMessages)
    userTo: Relation<Contact>;
}
