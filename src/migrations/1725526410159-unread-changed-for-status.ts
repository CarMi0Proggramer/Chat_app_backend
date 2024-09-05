import { MigrationInterface, QueryRunner } from "typeorm";

export class UnreadChangedForStatus1725526410159 implements MigrationInterface {
    name = 'UnreadChangedForStatus1725526410159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" RENAME COLUMN "unread" TO "status"`);
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "message" ADD "status" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "message" ADD "status" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "message" RENAME COLUMN "status" TO "unread"`);
    }

}
