const config = {
    HOST: '127.0.0.1',
    PORT: '3306',
    USER: 'root',
    PASSWORD: '',
    DB: 'nodejs',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

export default config;

