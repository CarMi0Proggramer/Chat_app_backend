var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, } from "typeorm";
import { Message } from "./Message.js";
import { Contact } from "./Contact.js";
let User = class User {
};
__decorate([
    PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    Column({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    Column({ type: "text", nullable: true }),
    __metadata("design:type", String)
], User.prototype, "description", void 0);
__decorate([
    Column({
        type: "json",
        default: {
            theme: "light",
            notifications: true,
        },
    }),
    __metadata("design:type", Object)
], User.prototype, "configurations", void 0);
__decorate([
    OneToMany(() => Message, (message) => message.userFrom),
    __metadata("design:type", Object)
], User.prototype, "sentMessages", void 0);
__decorate([
    OneToMany(() => Contact, (contact) => contact.userFrom),
    __metadata("design:type", Object)
], User.prototype, "contacts", void 0);
__decorate([
    OneToMany(() => Contact, (contact) => contact.userTo),
    __metadata("design:type", Object)
], User.prototype, "contactOf", void 0);
User = __decorate([
    Entity()
], User);
export { User };
//# sourceMappingURL=User.js.map