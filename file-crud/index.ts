import { syncCRUD } from "./syncCRUD";
import { asyncCRUD } from "./asyncCRUD";
import { streamCRUD } from "./streamCRUD";

async function main() {
  syncCRUD();
  await asyncCRUD();
  streamCRUD();
}

main().catch(console.error);
