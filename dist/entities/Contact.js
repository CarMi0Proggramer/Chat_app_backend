var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, } from "typeorm";
import { User } from "./User.js";
import { Message } from "./Message.js";
let Contact = class Contact {
};
__decorate([
    PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Contact.prototype, "id", void 0);
__decorate([
    ManyToOne(() => User, (user) => user.contacts, { onDelete: "CASCADE" }),
    __metadata("design:type", Object)
], Contact.prototype, "userFrom", void 0);
__decorate([
    ManyToOne(() => User, (user) => user.contactOf, { onDelete: "CASCADE" }),
    __metadata("design:type", Object)
], Contact.prototype, "userTo", void 0);
__decorate([
    OneToMany(() => Message, (message) => message.userTo),
    __metadata("design:type", Object)
], Contact.prototype, "receivedMessages", void 0);
Contact = __decorate([
    Entity()
], Contact);
export { Contact };
//# sourceMappingURL=Contact.js.map