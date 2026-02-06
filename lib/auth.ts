import { betterAuth } from "better-auth";
import { Pool } from "pg";


export const auth = betterAuth({
    emailAndPassword: { 
      enabled: true, 
    }, 
    database: new Pool({
      user: 'postgres',
      password: 'passe',
      host: 'localhost',
      port: 15432,
      database: 'filatelia',
    }),
})