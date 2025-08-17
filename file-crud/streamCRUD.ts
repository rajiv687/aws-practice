import * as fs from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "streamExample.txt");

export function streamCRUD() {
  console.log("\n--- STREAM CRUD ---");

  // Create / Write Stream
  const writeStream = fs.createWriteStream(filePath);
  writeStream.write("Hello Stream World!\n");
  writeStream.end("Stream writing finished.\n");

  writeStream.on("finish", () => {
    console.log("File created with stream.");

    // Read Stream
    const readStream = fs.createReadStream(filePath, { encoding: "utf-8" });
    readStream.on("data", (chunk) => {
      console.log("Read stream chunk:", chunk);
    });

    readStream.on("end", () => {
      // Update Stream (append)
      const appendStream = fs.createWriteStream(filePath, { flags: "a" });
      appendStream.write("Appended via Stream.\n");
      appendStream.end();

      appendStream.on("finish", () => {
        console.log("File updated with stream.");

        // Delete
        fs.unlink(filePath, (err) => {
          if (err) throw err;
          console.log("File deleted with stream.");
        });
      });
    });
  });
}
