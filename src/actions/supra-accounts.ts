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
    // accessControlConditions: JSON.stringify(accessControlConditions),
    //@ts-expect-error
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
    accessControlConditions: JSON.stringify(accessControlConditions),
    ciphertext: _ciphertext,
    dataToEncryptHash: _dataToEncryptHash,
    authSig: null,
    chain: "ethereum",
  });

  return decryptedData;
};

const go = async () => {
  if (method === "createAccount") {
    const account = new SupraAccount();
    const accountAddress = account.address().toString();
    console.log("newSupraAccount: ", accountAddress);
    const privateKeyObject = account.toPrivateKeyObject();
    console.log("privateKeyObject: ", privateKeyObject);
    const encryptedData = await encryptData(
      new TextEncoder().encode(privateKeyObject.privateKeyHex),
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
