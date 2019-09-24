import { resolve } from 'path';

export interface Parser {
  file: string;
  parse(file?: string): {};
}

export class BaseParser implements Parser {
  file = null;

  constructor(file) {
    this.file = file;
  }

  private load(filepath) {
    try {
      const data = require(filepath);
      return data;
    } catch (error) {
      console.error('Could not load the file specified.');
      throw error;
    }
  }

  parse(file = this.file) {
    const filepath = resolve(__dirname, '..', '..', 'data', file);
    const data = this.load(filepath);
    return data;
  }
}
