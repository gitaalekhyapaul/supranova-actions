const go = async () => {
  const account = new SupraAccount();
  console.log("Created Supra account:", account);
  console.log("newSupraAccount: ", account.address().toString());
  Lit.Actions.setResponse({ response: account.address().toString() });
};
go();
