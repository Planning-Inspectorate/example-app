import logger from '../../../src/lib/logger.js';
import connection from './sql-connection.js';

/**
 * Seed the to_do table with data if no records exist
 * @returns {Promise<void>}
 */
async function seedTable() {
    await connection.query(
        `INSERT INTO to_do (
            id,
            userId,
            createdAt,
            updatedAt,
            completeBy,
            title,
            description,
            priority
        )
        VALUES
            (1, 1, "2023-11-20 00:00:00", "2023-11-21 00:00:00", "2023-12-21 00:00:00", "Task title 1", "Task description 1", 1),
            (2, 1, "2023-11-19 00:00:00", "2023-11-20 00:00:00", "2023-12-21 00:00:00", "Task title 2", "Task description 2", 2),
            (3, 1, "2023-11-21 00:00:00", "2023-11-21 00:00:00", "2023-12-21 00:00:00", "Task title 3", "Task description 3", 3)   
        AS seed_data
        ON DUPLICATE KEY UPDATE
            id = seed_data.id,
            userId = seed_data.userId,
            createdAt = seed_data.createdAt,
            updatedAt = seed_data.updatedAt,
            completeBy = seed_data.completeBy,
            title = seed_data.title,
            description = seed_data.description,
            priority = seed_data.priority`
    );
}

seedTable()
    .then(async () => {
        await connection.end();
        logger.info('Data seeding completed');
    })
    .catch(async (error) => {
        await connection.end();
        logger.error(`Error seeding table: ${error}`);
    });





