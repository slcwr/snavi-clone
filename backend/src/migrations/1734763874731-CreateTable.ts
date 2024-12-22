import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1734763874731 implements MigrationInterface {
    name = 'CreateTable1734763874731'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "generateproducts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "generateproductno" character varying(100) NOT NULL, "generateproductname" character varying NOT NULL, "price" integer NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_4c7dbef917ab5e1a95f583b4267" UNIQUE ("generateproductname"), CONSTRAINT "PK_56d92ecd3702777afcdfe06acb9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "generateproducts"`);
    }

}
