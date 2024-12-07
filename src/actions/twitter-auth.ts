/// <reference path="../global.d.ts" />

interface TwitterGetMeResponse {
  data: {
    id: string;
    name: string;
    username: string;
  };
}
const authenticate = async (
  _accessToken: string,
  _isDev: boolean
): Promise<TwitterGetMeResponse | undefined> => {
  if (_isDev) {
    return {
      data: {
        id: "1234567890",
        name: "Test User",
        username: "testuser",
      },
    };
  } else {
    try {
      const response = await fetch("https://api.twitter.com/2/users/me", {
        headers: {
          Authorization: `Bearer ${_accessToken}`,
        },
      });
      if (response.ok) {
        const res = await response.json();
        console.log("Response from Twitter API:", res);
        return res;
      }
      console.error("Error authenticating user", response);
      return undefined;
    } catch (error) {
      console.error("Error authenticating user", error);
      return undefined;
    }
  }
};

const createSupraAccount = async () => {
  const account = new SupraAccount();
  console.log("Created Supra account:", account);
  console.log("newSupraAccount: ", account.address());
  return account;
};

const run = async () => {
  console.log("Lit.Auth", Lit.Auth);
  await createSupraAccount();
  const userInfo = await authenticate(accessToken, isDev);
  console.log("User info from Twitter API:", userInfo);
  if (!userInfo) {
    Lit.Actions.setResponse({ response: "false" });
    return;
  }
  const ipfsActionId = Lit.Auth.actionIpfsIds[0];
  // can't authorize if we're claiming a key, just authenticate
  if (method === "claimKey") {
    const userId = userInfo.data.id;
    console.log("Claiming key for Twitter user %s", userId);
    await Lit.Actions.claimKey({
      keyId: userId,
    });
    Lit.Actions.setResponse({ response: "true" });
    return;
  }
};

run();
