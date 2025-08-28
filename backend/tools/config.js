export const databaseUser = {
    user: "postgres",
    host: "localhost",
    database: "test_db",
    password: "123",
    port: 5437,
}
export const databaseNormal = {
    ...databaseUser,
    port: 5436
}