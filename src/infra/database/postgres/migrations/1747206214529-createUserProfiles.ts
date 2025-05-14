import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserProfiles1747206214529 implements MigrationInterface {
    name = 'CreateUserProfiles1747206214529'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_profiles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user" character varying(255), "class" character varying(255), "age" integer, "email" character varying(255), "inserted_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_1ec6662219f4605723f1e41b6cb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_profiles"`);
    }

}
