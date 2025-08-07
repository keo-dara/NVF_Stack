import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
    database: new Pool({
        connectionString: 'postgresql://postgres:123@localhost:5437/test_db',
    }),
    emailAndPassword: {
        enabled: true,
    },
});
