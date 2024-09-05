export class UnreadChangedForStatus1725526410159 {
    constructor() {
        this.name = 'UnreadChangedForStatus1725526410159';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "message" RENAME COLUMN "unread" TO "status"`);
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "message" ADD "status" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "message" ADD "status" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "message" RENAME COLUMN "status" TO "unread"`);
    }
}
//# sourceMappingURL=1725526410159-unread-changed-for-status.js.map