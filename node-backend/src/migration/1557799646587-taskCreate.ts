import {MigrationInterface, QueryRunner} from "typeorm";

export class taskCreate1557799646587 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `task` (`id` int NOT NULL AUTO_INCREMENT, `summary` varchar(255) NOT NULL, `acceptanceCriteria` varchar(255) NOT NULL, `status` int NOT NULL, `createdBy` varchar(255) NOT NULL, `modifiedBy` varchar(255) NOT NULL, `limitDate` datetime NOT NULL, `done` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `firstName` int NOT NULL, `lastName` int NOT NULL, `enabled` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `task`");
    }

}
