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
  _isDev: boolean,
  _overrideUserID: string
): Promise<TwitterGetMeResponse | undefined> => {
  if (_isDev) {
    return {
      data: {
        id: _overrideUserID,
        name: `Dev Mode User ${_overrideUserID}`,
        username: `devuser-${_overrideUserID}`,
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

const run = async () => {
  console.log("Lit.Auth", Lit.Auth);
  const userInfo = await authenticate(accessToken, isDev, overrideUserID);
  console.log("User info from Twitter API:", userInfo);
  if (!userInfo) {
    Lit.Actions.setResponse({ response: "false" });
    return;
  }
  if (method === "claimKey") {
    const userId = userInfo.data.id;
    console.log("Claiming key for Twitter user %s", userId);
    await Lit.Actions.claimKey({
      keyId: userId,
    });
    Lit.Actions.setResponse({ response: "true" });
    return;
  } else {
    Lit.Actions.setResponse({ response: "true" });
    return;
  }
};

run();
