export class ConfigurationsDefaultWasSet1723672692389 {
    constructor() {
        this.name = 'ConfigurationsDefaultWasSet1723672692389';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "configurations" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "configurations" SET DEFAULT '{"theme":"light","notifications":true}'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "configurations" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "configurations" DROP NOT NULL`);
    }
}
//# sourceMappingURL=1723672692389-configurations-default-was-set.js.map