#!/usr/bin/env node

process.title = 'mmdc';

(async () => {
  const {cli} = await import('@mermaid-js/mermaid-cli');
  cli();
})().catch((exception) => {
  console.error(exception instanceof Error ? exception.stack : exception);
  process.exitCode = 1;
});
