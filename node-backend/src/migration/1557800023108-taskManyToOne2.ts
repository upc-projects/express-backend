import {MigrationInterface, QueryRunner} from "typeorm";

export class taskManyToOne21557800023108 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `firstName` int NOT NULL, `lastName` int NOT NULL, `enabled` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `task` (`id` int NOT NULL AUTO_INCREMENT, `summary` varchar(255) NOT NULL, `acceptanceCriteria` varchar(255) NOT NULL, `status` int NOT NULL, `createdBy` varchar(255) NOT NULL, `modifiedBy` varchar(255) NOT NULL, `limitDate` datetime NOT NULL, `done` tinyint NOT NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `task` ADD CONSTRAINT `FK_f316d3fe53497d4d8a2957db8b9` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `task` DROP FOREIGN KEY `FK_f316d3fe53497d4d8a2957db8b9`");
        await queryRunner.query("DROP TABLE `task`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
