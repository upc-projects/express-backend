import {MigrationInterface, QueryRunner} from "typeorm";

export class userUpdate21557894734388 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `firstName`");
        await queryRunner.query("ALTER TABLE `user` ADD `firstName` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `lastName`");
        await queryRunner.query("ALTER TABLE `user` ADD `lastName` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `lastName`");
        await queryRunner.query("ALTER TABLE `user` ADD `lastName` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `firstName`");
        await queryRunner.query("ALTER TABLE `user` ADD `firstName` int NOT NULL");
    }

}
