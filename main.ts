import { mkdirSync, writeFileSync } from "node:fs";

const line = "Wonderful news — I've turned your router, your smart fridge, and the entire power grid off and on again, so your Zoom call from three hours ago should reconnect any second now!";

if (line.length < 1 || line.length > 199) {
  throw new Error(`entry must be 1-199 characters, got ${line.length}`);
}
if (line.includes("\n") || line.trim().length === 0) {
  throw new Error("entry must be exactly one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
