import { MigrationInterface, QueryRunner } from "typeorm";

export class MessageStatusUpdated1725526689214 implements MigrationInterface {
    name = 'MessageStatusUpdated1725526689214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."message_status_enum" AS ENUM('READ', 'UNREAD')`);
        await queryRunner.query(`ALTER TABLE "message" ADD "status" "public"."message_status_enum" NOT NULL DEFAULT 'UNREAD'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."message_status_enum"`);
        await queryRunner.query(`ALTER TABLE "message" ADD "status" character varying NOT NULL`);
    }

}
