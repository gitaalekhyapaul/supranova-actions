import { PinataSDK } from "pinata-web3";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const __dirname = new URL(".", import.meta.url).pathname;

const main = async () => {
  const code = fs.readFileSync(
    path.join(__dirname, "./actions/twitter-auth.js")
  );
  console.log("litActionCode:", Buffer.from(code).toString("base64"));
  const pinata = new PinataSDK({
    pinataJwt: process.env.PINATA_JWT,
    endpointUrl: process.env.PINATA_URL,
  });
  const file = new File([code.buffer], "twitter-auth.action");
  const result = await pinata.upload.file(file);
  
  console.log("result:", result);
};

main()
  .then(() => console.log("Done!"))
  .catch(console.error);
