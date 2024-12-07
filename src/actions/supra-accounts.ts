const encryptData = async (_data, _ipfsCid: string) => {
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

  const { ciphertext, dataToEncryptHash } = await Lit.Actions.encrypt({
    accessControlConditions: JSON.stringify(accessControlConditions),
    to_encrypt: _data,
  });

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
    accessControlConditions: JSON.stringify(accessControlConditions),
    ciphertext: _ciphertext,
    dataToEncryptHash: _dataToEncryptHash,
    authSig: null,
    chain: "ethereum",
  });

  return decryptedData;
};

// Main function
(async () => {
  const method = "encrypt"; // or 'decrypt'
  const ipfsCid = "<YOUR_LIT_ACTION_IPFS_CID>"; // Replace with your actual IPFS CID

  if (method === "encrypt") {
    const data = "Hello world";
    const result = await encryptData(data, ipfsCid);
    console.log("Encrypted Result:", result);
  } else if (method === "decrypt") {
    const ciphertext = "<CIPHERTEXT>"; // Replace with actual ciphertext
    const dataToEncryptHash = "<DATA_TO_ENCRYPT_HASH>"; // Replace with actual hash
    const result = await decryptData(ciphertext, dataToEncryptHash, ipfsCid);
    console.log("Decrypted Result:", result);
  } else {
    console.error('Invalid method. Use "encrypt" or "decrypt".');
  }
})();

const go = async () => {
  if (method === "createAccount") {
    const account = new SupraAccount();
    const accountAddress = account.address().toString();
    console.log("newSupraAccount: ", accountAddress);
    const privateKeyObject = account.toPrivateKeyObject();
    console.log("privateKeyObject: ", privateKeyObject);
    const encryptedData = await encryptData(
      privateKeyObject.privateKeyHex,
      ipfsCID
    );
    Lit.Actions.setResponse({
      response: JSON.stringify({ ...encryptedData, accountAddress }),
    });
    return;
  } else {
    const decryptedData = await decryptData(
      ciphertext,
      dataToEncryptHash,
      ipfsCID
    );
    if (!decryptedData) {
      // silently return for nodes which do not have the decrypted key
      return;
    }
    const account = new SupraAccount(Buffer.from(decryptedData, "hex"));
    const accountAddress = account.address().toString();
    console.log("account: ", accountAddress);
    Lit.Actions.setResponse({ response: JSON.stringify({ accountAddress }) });
    return;
  }
};
go();
