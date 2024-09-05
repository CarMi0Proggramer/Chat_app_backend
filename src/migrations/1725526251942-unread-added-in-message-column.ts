import { MigrationInterface, QueryRunner } from "typeorm";

export class UnreadAddedInMessageColumn1725526251942 implements MigrationInterface {
    name = 'UnreadAddedInMessageColumn1725526251942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" ADD "unread" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "unread"`);
    }

}
