const { Client } = require('pg');

exports.handler = async function(event, context) {
    // This securely pulls your hidden connection string from Netlify's settings dashboard
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ message: "Backend folder created, but DATABASE_URL variable is still missing in Netlify settings!" })
        };
    }

    const client = new Client({
        connectionString: connectionString,
        ssl: { rejectUnauthorized: false } // Required for cloud databases
    });

    try {
        await client.connect();
        const result = await client.query('SELECT NOW() as server_time;');

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({
                message: "Successfully connected to Neon PostgreSQL!",
                queryTime: result.rows[0].server_time
            }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    } finally {
        if (client) await client.end();
    }
};