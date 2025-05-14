import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserProfileCopy1747201194479 implements MigrationInterface {
    name = 'CreateUserProfileCopy1747201194479'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_profile_copy" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user" character varying(255), "class" character varying(255), "age" integer, "email" character varying(255), "inserted_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_ae3f0f6a71e02fb4820fca6c8e0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_profile_copy"`);
    }

}
