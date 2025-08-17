import * as fs from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "syncExample.txt");

export function syncCRUD() {
  console.log("\n--- SYNC CRUD ---");

  // Create / Write
  fs.writeFileSync(filePath, "Hello Sync World!", "utf-8");
  console.log("File created synchronously.");

  // Read
  const data = fs.readFileSync(filePath, "utf-8");
  console.log("Read sync:", data);

  // Update
  fs.appendFileSync(filePath, "\nAppended Sync Data.");
  console.log("File updated synchronously.");

  // Delete
  fs.unlinkSync(filePath);
  console.log("File deleted synchronously.");
}
