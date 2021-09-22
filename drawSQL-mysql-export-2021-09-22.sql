CREATE TABLE `Group`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `Group` ADD PRIMARY KEY `group_id_primary`(`id`);
CREATE TABLE `Parent`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `first_name` INT NOT NULL,
    `last_name` INT NOT NULL
);
ALTER TABLE
    `Parent` ADD PRIMARY KEY `parent_id_primary`(`id`);
CREATE TABLE `Player`(
    `id` INT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `number` SMALLINT NOT NULL,
    `personal_code` VARCHAR(255) NOT NULL COMMENT 'isikukood',
    `group_id` INT UNSIGNED NOT NULL
);
ALTER TABLE
    `Player` ADD PRIMARY KEY `player_id_primary`(`id`);
CREATE TABLE `Contact`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `parent_id` INT UNSIGNED NOT NULL,
    `contact_type_id` INT UNSIGNED NOT NULL,
    `value` INT NOT NULL
);
ALTER TABLE
    `Contact` ADD PRIMARY KEY `contact_id_primary`(`id`);
CREATE TABLE `ContactType`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` INT NOT NULL
);
ALTER TABLE
    `ContactType` ADD PRIMARY KEY `contacttype_id_primary`(`id`);
CREATE TABLE `Payment`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `player_id` INT UNSIGNED NOT NULL,
    `amount` DECIMAL(8, 2) NOT NULL,
    `date` DATETIME NOT NULL
);
ALTER TABLE
    `Payment` ADD PRIMARY KEY `payment_id_primary`(`id`);
CREATE TABLE `Training`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `date` DATETIME NOT NULL,
    `description` INT NOT NULL
);
ALTER TABLE
    `Training` ADD PRIMARY KEY `training_id_primary`(`id`);
CREATE TABLE `PlayerTraining`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `player_id` INT UNSIGNED NOT NULL,
    `training_id` INT UNSIGNED NOT NULL
);
ALTER TABLE
    `PlayerTraining` ADD PRIMARY KEY `playertraining_id_primary`(`id`);
CREATE TABLE `Test`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `player_id` INT UNSIGNED NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `date` DATETIME NOT NULL
);
ALTER TABLE
    `Test` ADD PRIMARY KEY `test_id_primary`(`id`);
CREATE TABLE `PlayerParent`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `player_id` INT UNSIGNED NOT NULL,
    `parent_id` INT UNSIGNED NOT NULL
);
ALTER TABLE
    `PlayerParent` ADD PRIMARY KEY `playerparent_id_primary`(`id`);
ALTER TABLE
    `Player` ADD CONSTRAINT `player_group_id_foreign` FOREIGN KEY(`group_id`) REFERENCES `Group`(`id`);
ALTER TABLE
    `PlayerParent` ADD CONSTRAINT `playerparent_parent_id_foreign` FOREIGN KEY(`parent_id`) REFERENCES `Parent`(`id`);
ALTER TABLE
    `Contact` ADD CONSTRAINT `contact_parent_id_foreign` FOREIGN KEY(`parent_id`) REFERENCES `Parent`(`id`);
ALTER TABLE
    `Contact` ADD CONSTRAINT `contact_contact_type_id_foreign` FOREIGN KEY(`contact_type_id`) REFERENCES `ContactType`(`id`);
ALTER TABLE
    `Payment` ADD CONSTRAINT `payment_player_id_foreign` FOREIGN KEY(`player_id`) REFERENCES `Player`(`id`);
ALTER TABLE
    `PlayerTraining` ADD CONSTRAINT `playertraining_training_id_foreign` FOREIGN KEY(`training_id`) REFERENCES `Training`(`id`);
ALTER TABLE
    `PlayerTraining` ADD CONSTRAINT `playertraining_player_id_foreign` FOREIGN KEY(`player_id`) REFERENCES `Player`(`id`);
ALTER TABLE
    `Test` ADD CONSTRAINT `test_player_id_foreign` FOREIGN KEY(`player_id`) REFERENCES `Player`(`id`);
ALTER TABLE
    `PlayerParent` ADD CONSTRAINT `playerparent_player_id_foreign` FOREIGN KEY(`player_id`) REFERENCES `Player`(`id`);