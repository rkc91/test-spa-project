import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

// Register the loader
register('ts-node/esm', pathToFileURL('./'));

// Start the server
import('./src/server.ts');

