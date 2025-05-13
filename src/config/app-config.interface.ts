// src/config/app-config.interface.ts
export interface AppConfig {
    nodeEnv: string;
    port: number;
    apiPrefix: string
    database: {
        postgres: {
            host: string;
            port: number;
            user: string;
            password: string;
            name: string;
        },
        redis : {
            host: string;
            port: number;
            password: string;
        }
    };
}
