import { OakApplication } from './deps.ts';

const app = new OakApplication();

app.use((ctx) => {
  ctx.response.body = "Hello, Oak in Deno";
});

console.log("Starting server on localhost:3582");

await app.listen({ port: 3582 });
