export class UnreadAddedInMessageColumn1725526251942 {
    constructor() {
        this.name = 'UnreadAddedInMessageColumn1725526251942';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "message" ADD "unread" boolean NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "unread"`);
    }
}
//# sourceMappingURL=1725526251942-unread-added-in-message-column.js.map