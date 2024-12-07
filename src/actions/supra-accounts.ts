/// <reference path="../global.d.ts" />

import { count } from "console";

const encryptData = async (_data: Uint8Array, _ipfsCid: string) => {
  const accessControlConditions = [
    {
      contractAddress: "",
      standardContractType: "",
      chain: "ethereum",
      method: "",
      parameters: [":currentActionIpfsId"],
      returnValueTest: {
        comparator: "=",
        value: _ipfsCid,
      },
    },
  ];
  console.log("accessControlConditions:", accessControlConditions);
  console.log("data:", _data);
  const { ciphertext, dataToEncryptHash } = await Lit.Actions.encrypt({
    accessControlConditions: accessControlConditions,
    to_encrypt: _data,
  });
  console.log("ciphertext: ", ciphertext);
  console.log("dataToEncryptHash: ", dataToEncryptHash);

  return { ciphertext, dataToEncryptHash };
};

const decryptData = async (
  _ciphertext: string,
  _dataToEncryptHash: string,
  _ipfsCid: string
) => {
  const accessControlConditions = [
    {
      contractAddress: "",
      standardContractType: "",
      chain: "ethereum",
      method: "",
      parameters: [":currentActionIpfsId"],
      returnValueTest: {
        comparator: "=",
        value: _ipfsCid,
      },
    },
  ];

  const decryptedData = await Lit.Actions.decryptToSingleNode({
    accessControlConditions: accessControlConditions,
    ciphertext: _ciphertext,
    dataToEncryptHash: _dataToEncryptHash,
    authSig: null,
    chain: "ethereum",
  });
  console.log("decryptedData: ", decryptedData.slice(2));

  return decryptedData.slice(2);
};

const go = async () => {
  if (method === "createAccount") {
    const result = await Lit.Actions.runOnce(
      { waitForResponse: true, name: "encryptedPrivateKey" },
      async () => {
        const account = new SupraAccount();
        const accountAddress = account.address().toString();
        console.log("newSupraAccount: ", accountAddress);
        const privateKeyObject = account.toPrivateKeyObject();
        console.log("privateKeyObject: ", privateKeyObject);
        const encryptedData = await encryptData(
          new TextEncoder().encode(privateKeyObject.privateKeyHex),
          ipfsCID
        );
        return JSON.stringify({ ...encryptedData, accountAddress });
      }
    );
    Lit.Actions.setResponse({
      response: result,
    });
  } else if (method === "mintToken") {
    const decryptedData = await decryptData(
      ciphertext,
      dataToEncryptHash,
      ipfsCID
    );
    if (!decryptedData) {
      // silently return for nodes which do not have the decrypted key
      return;
    }
    const privateKey = decryptedData;
    console.log("privateKey: ", privateKey);
    const account = new SupraAccount(Buffer.from(decryptedData, "hex"));
    const accountAddress = account.address().toString();
    console.log("account: ", accountAddress);
    const apiPayload = {
      name: tokenName,
      symbol: tokenSymbol,
      tokenType,
      tokenOwnerPrivateKey: privateKey,
    };
    console.log("apiPayload: ", apiPayload);
    console.log("tokenApiUrl: ", tokenApiUrl);
    const _res = await fetch(`${tokenApiUrl}/api/tokens/create`, {
      method: "POST",
      body: JSON.stringify(apiPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!_res.ok) {
      console.log("error response from Token mint API: ", await _res.json());
      Lit.Actions.setResponse({
        response: "false",
      });
      return;
    }
    const response = await _res.json();
    console.log("response from Token mint API: ", response);
    Lit.Actions.setResponse({
      response: JSON.stringify({ ...response }),
    });
  } else if (method === "transfer") {
    const decryptedData = await decryptData(
      ciphertext,
      dataToEncryptHash,
      ipfsCID
    );
    if (!decryptedData) {
      // silently return for nodes which do not have the decrypted key
      return;
    }
    const privateKey = decryptedData;
    console.log("privateKey: ", privateKey);
    const account = new SupraAccount(Buffer.from(decryptedData, "hex"));
    const accountAddress = account.address().toString();
    console.log("account: ", accountAddress);
    const apiPayload = {
      name: tokenName,
      symbol: tokenSymbol,
      tokenType,
      tokenOwnerPrivateKey: privateKey,
    };
    console.log("apiPayload: ", apiPayload);
    console.log("tokenApiUrl: ", tokenApiUrl);
    const _res = await fetch(`${tokenApiUrl}/api/tokens/create`, {
      method: "POST",
      body: JSON.stringify(apiPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!_res.ok) {
      console.log("error response from Token mint API: ", await _res.json());
      Lit.Actions.setResponse({
        response: "false",
      });
      return;
    }
    const response = await _res.json();
    console.log("response from Token mint API: ", response);
    Lit.Actions.setResponse({
      response: JSON.stringify({ ...response }),
    });
  } else if (method === "getBalance") {
    console.log("getBalance");
    const decryptedData = await decryptData(
      ciphertext,
      dataToEncryptHash,
      ipfsCID
    );
    if (!decryptedData) {
      // silently return for nodes which do not have the decrypted key
      return;
    }
    const privateKey = decryptedData;
    console.log("privateKey: ", privateKey);
    const account = new SupraAccount(Buffer.from(decryptedData, "hex"));
    const accountAddress = account.address();
    console.log("accountAddress: ", accountAddress.toString());
    const client = new SupraClient("https://rpc-testnet.supra.com/");
    const balance = await client.getAccountSupraCoinBalance(accountAddress);
    console.log("balance: ", balance);
    const tx = await client.getAccountTransactionsDetail(accountAddress, {
      count: 3,
    });
    console.log("tx: ", tx);
    Lit.Actions.setResponse({
      response: JSON.stringify({ balance, tx }),
    });
  } else {
    console.log("method not found");
    Lit.Actions.setResponse({
      response: "method not found",
    });
    return;
  }
};
go();
