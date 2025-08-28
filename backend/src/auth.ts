import { betterAuth } from "better-auth";
import { Pool } from "pg";
import { databaseConnectString } from "./config";

export const auth = betterAuth({
    database: new Pool({
        connectionString: databaseConnectString,
    }),
    emailAndPassword: {
        enabled: true,
    },
});
