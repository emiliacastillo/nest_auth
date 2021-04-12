import {MigrationInterface, QueryRunner} from "typeorm";

export class editRoleNameType1614261533643 implements MigrationInterface {
    name = 'editRoleNameType1614261533643'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" DROP CONSTRAINT "PK_84da135492452965a3f9a96daf4"`);
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "roleid"`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "roleId" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "roles" ADD CONSTRAINT "PK_39bf7e8af8fe54d9d1c7a8efe6f" PRIMARY KEY ("roleId")`);
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "name" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "roles" DROP CONSTRAINT "PK_39bf7e8af8fe54d9d1c7a8efe6f"`);
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "roleId"`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "roleid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "roles" ADD CONSTRAINT "PK_84da135492452965a3f9a96daf4" PRIMARY KEY ("roleid")`);
    }

}
