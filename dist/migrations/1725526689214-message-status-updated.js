export class MessageStatusUpdated1725526689214 {
    constructor() {
        this.name = 'MessageStatusUpdated1725526689214';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."message_status_enum" AS ENUM('READ', 'UNREAD')`);
        await queryRunner.query(`ALTER TABLE "message" ADD "status" "public"."message_status_enum" NOT NULL DEFAULT 'UNREAD'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."message_status_enum"`);
        await queryRunner.query(`ALTER TABLE "message" ADD "status" character varying NOT NULL`);
    }
}
//# sourceMappingURL=1725526689214-message-status-updated.js.map