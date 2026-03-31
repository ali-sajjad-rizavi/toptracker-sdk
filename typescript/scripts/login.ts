import { createInterface } from "node:readline";
import { TopTrackerClient } from "../src/index.js";

function prompt(question: string, hidden = false): Promise<string> {
  return new Promise((resolve) => {
    if (hidden) {
      process.stdout.write(question);
      process.stdin.setRawMode?.(true);
      process.stdin.resume();
      let input = "";
      const onData = (buf: Buffer): void => {
        const c = buf.toString();
        if (c === "\n" || c === "\r" || c === "\u0004") {
          process.stdin.setRawMode?.(false);
          process.stdin.pause();
          process.stdin.removeListener("data", onData);
          process.stdout.write("\n");
          resolve(input);
        } else if (c === "\u007F" || c === "\b") {
          input = input.slice(0, -1);
        } else if (c === "\u0003") {
          process.exit(1);
        } else {
          input += c;
        }
      };
      process.stdin.on("data", onData);
    } else {
      const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question(question, (answer) => {
        rl.close();
        resolve(answer);
      });
    }
  });
}

const email = await prompt("Email: ");
const password = await prompt("Password: ", true);

const { response } = await TopTrackerClient.login({ email, password });
console.log(response.access_token);
