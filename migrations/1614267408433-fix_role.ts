import {MigrationInterface, QueryRunner} from "typeorm";

export class fixRole1614267408433 implements MigrationInterface {
    name = 'fixRole1614267408433'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created_at" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "roles"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "updated_at" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "roles"."updated_at" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "roles"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "updated_at" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "roles"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created_at" SET NOT NULL`);
    }

}
