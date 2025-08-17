import { promises as fsp } from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "asyncExample.txt");

export async function asyncCRUD() {
  console.log("\n--- ASYNC CRUD ---");

  // Create / Write
  await fsp.writeFile(filePath, "Hello Async World!", "utf-8");
  console.log("File created asynchronously.");

  // Read
  const data = await fsp.readFile(filePath, "utf-8");
  console.log("Read async:", data);

  // Update
  await fsp.appendFile(filePath, "\nAppended Async Data.");
  console.log("File updated asynchronously.");

  // Delete
  await fsp.unlink(filePath);
  console.log("File deleted asynchronously.");
}
