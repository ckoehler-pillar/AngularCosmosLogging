export class LoggingConfig {
    public endpoint: string;
    public primaryKey: string;
    public database: string;
    public container: string;

    constructor() {
        this.endpoint = "https://localhost:8081/";
        this.primaryKey = "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==";
        this.database = "CmsLogging";
        this.container = "logs";
    }
}