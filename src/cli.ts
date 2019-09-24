#!/usr/bin/env node

import { WowClassicLiveParser } from './parsers/index';
const program = require('commander');

program.version('0.0.1');

program
  .command('convert <file> [to]')
  .description('converts a classic guide to specified format')
  .action((file, to) => {
    new WowClassicLiveParser().parse(file);
  });

program.parse(process.argv);
