import {MigrationInterface, QueryRunner} from "typeorm";

export class fixMigrate1614266407453 implements MigrationInterface {
    name = 'fixMigrate1614266407453'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_roles" ("usersUserId" uuid NOT NULL, "rolesRoleId" uuid NOT NULL, CONSTRAINT "PK_db333db8feb2d81df7812f9ecc2" PRIMARY KEY ("usersUserId", "rolesRoleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c4cf52cd250f708f01691ec9dd" ON "user_roles" ("usersUserId") `);
        await queryRunner.query(`CREATE INDEX "IDX_17b9c62d0a0ca0c2199e15c525" ON "user_roles" ("rolesRoleId") `);
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_c4cf52cd250f708f01691ec9ddb" FOREIGN KEY ("usersUserId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_17b9c62d0a0ca0c2199e15c525d" FOREIGN KEY ("rolesRoleId") REFERENCES "roles"("roleId") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_17b9c62d0a0ca0c2199e15c525d"`);
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_c4cf52cd250f708f01691ec9ddb"`);
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`DROP INDEX "IDX_17b9c62d0a0ca0c2199e15c525"`);
        await queryRunner.query(`DROP INDEX "IDX_c4cf52cd250f708f01691ec9dd"`);
        await queryRunner.query(`DROP TABLE "user_roles"`);
    }

}
