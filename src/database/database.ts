import * as mongoose from "mongoose";

export class Database {
  private _isStarted: boolean = false;

  public get isStarted() {
    return this._isStarted;
  }

  public async start() {
    if (this._isStarted) {
      return;
    }

    await mongoose.connect("");
    this._isStarted = true;
  }

  public async stop() {
    if (!this._isStarted) {
      return;
    }

    await mongoose.disconnect();
    this._isStarted = false;
  }

  private async [Symbol.asyncDispose]() {
    await this.stop();
  }
}
