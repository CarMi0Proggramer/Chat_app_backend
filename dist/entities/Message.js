var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, } from "typeorm";
import { User } from "./User.js";
import { Contact } from "./Contact.js";
let Message = class Message {
};
__decorate([
    PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Message.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Message.prototype, "content", void 0);
__decorate([
    CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Message.prototype, "date", void 0);
__decorate([
    ManyToOne(() => User, (user) => user.sentMessages),
    __metadata("design:type", Object)
], Message.prototype, "userFrom", void 0);
__decorate([
    ManyToOne(() => Contact, (contact) => contact.receivedMessages),
    __metadata("design:type", Object)
], Message.prototype, "userTo", void 0);
Message = __decorate([
    Entity()
], Message);
export { Message };
//# sourceMappingURL=Message.js.map