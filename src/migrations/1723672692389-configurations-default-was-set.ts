import { MigrationInterface, QueryRunner } from "typeorm";

export class ConfigurationsDefaultWasSet1723672692389 implements MigrationInterface {
    name = 'ConfigurationsDefaultWasSet1723672692389'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "configurations" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "configurations" SET DEFAULT '{"theme":"light","notifications":true}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "configurations" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "configurations" DROP NOT NULL`);
    }

}
