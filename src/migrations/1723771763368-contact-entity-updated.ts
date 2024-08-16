import { MigrationInterface, QueryRunner } from "typeorm";

export class ContactEntityUpdated1723771763368 implements MigrationInterface {
    name = 'ContactEntityUpdated1723771763368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e7e34fa8e409e9146f4729fd0cb"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_81d0572d7bf850a3b64b328ed13"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_bc096b4e18b1f9508197cd98066"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_71fb36906595c602056d936fc13"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "contactId"`);
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "senderId"`);
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "receiverId"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "userFromId" uuid`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "userToId" uuid`);
        await queryRunner.query(`ALTER TABLE "message" ADD "userFromId" uuid`);
        await queryRunner.query(`ALTER TABLE "message" ADD "userToId" uuid`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_532b4ca4e2e7dde54ab2af98855" FOREIGN KEY ("userFromId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_02fbb57e8aefc3ae06446d7a841" FOREIGN KEY ("userToId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_8ed093d8ed0a928c8d0e6e025a3" FOREIGN KEY ("userFromId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_dc90d6d7da22e2435619bdab4e9" FOREIGN KEY ("userToId") REFERENCES "contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_dc90d6d7da22e2435619bdab4e9"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_8ed093d8ed0a928c8d0e6e025a3"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_02fbb57e8aefc3ae06446d7a841"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_532b4ca4e2e7dde54ab2af98855"`);
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "userToId"`);
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "userFromId"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "userToId"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "userFromId"`);
        await queryRunner.query(`ALTER TABLE "message" ADD "receiverId" uuid`);
        await queryRunner.query(`ALTER TABLE "message" ADD "senderId" uuid`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "contactId" uuid`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_71fb36906595c602056d936fc13" FOREIGN KEY ("receiverId") REFERENCES "contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_bc096b4e18b1f9508197cd98066" FOREIGN KEY ("senderId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_81d0572d7bf850a3b64b328ed13" FOREIGN KEY ("contactId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e7e34fa8e409e9146f4729fd0cb" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
