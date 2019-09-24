import { resolve } from 'path';

export interface Parser {
  parse(filepath: string): {};
}

export class BaseParser implements Parser {
  constructor() {}

  private load(filepath) {
    try {
      const data = require(filepath);
      return data;
    } catch (error) {
      console.error('Could not load the file specified.');
      throw error;
    }
  }

  parse(file) {
    const filepath = resolve(__dirname, '..', '..', 'data', file);
    const data = this.load(filepath);
    return data;
  }
}
