import { Injectable } from '@angular/core';
import { CosmosClient } from '@azure/cosmos';

import { LoggingConfig } from './logger-config';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  private dbClient: CosmosClient;
  private database;
  private collection;
  private config: LoggingConfig;

  constructor() {
    this.init();
    this.logMessage('this.');
  }

  private init() {

    this.database = null;
    this.collection = null;
    this.config = new LoggingConfig();
    this.dbClient = new CosmosClient({ endpoint: this.config.endpoint, auth: { masterKey: this.config.primaryKey } });

    this.database = this.dbClient.database(this.config.database);
    this.collection = this.database.collection(this.config.container);
  };

  public logMessage(message) {
      var self = this;
  
      message.date = Date.now();
      message.completed = false;

      this.collection.items.create(message);
  };
}
