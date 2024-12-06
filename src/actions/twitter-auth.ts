interface TwitterGetMeResponse {
  data: {
    id: string;
    name: string;
    username: string;
  };
}
const authenticate = async (
  _accessToken: string
): Promise<TwitterGetMeResponse | undefined> => {
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
    return undefined;
  } catch (error) {
    console.error("Error authenticating user", error);
    return undefined;
  }
};

const run = async () => {
  console.log("Lit.Auth", Lit.Auth);
  const userInfo = await authenticate(accessToken);
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
