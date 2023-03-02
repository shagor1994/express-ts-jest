import { createClient } from 'redis';

export const client = createClient({
  url: 'redis://127.0.0.1:6380'
});

client.on('error', err => console.log('Redis Client Error', err));