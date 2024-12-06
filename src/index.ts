import { PinataSDK } from "pinata-web3";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const __dirname = new URL(".", import.meta.url).pathname;

const main = async () => {
  const actionPath = path.join(__dirname, "..", "actions", "twitter-auth.js");
  const code = fs.readFileSync(actionPath);
  console.log("litActionCode:", Buffer.from(code).toString("base64"));

  const pinata = new PinataSDK({
    pinataJwt: process.env.PINATA_JWT,
    pinataGateway: process.env.PINATA_URL,
  });

  // Create readable stream from code buffer
  const stream = fs.createReadStream(actionPath);
  const result = await pinata.upload.stream(stream).cidVersion(0);
  const outputPath = path.join(__dirname, "..", "actions", "ipfs.json");
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));

  console.log("result:", result);
};

main()
  .then(() => console.log("Done!"))
  .catch(console.error);
