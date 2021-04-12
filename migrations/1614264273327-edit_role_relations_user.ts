import {MigrationInterface, QueryRunner} from "typeorm";

export class editRoleRelationsUser1614264273327 implements MigrationInterface {
    name = 'editRoleRelationsUser1614264273327'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "name" text NOT NULL`);
    }

}
