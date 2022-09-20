import React from "react";

// @styled-components
import { Layout } from "./ConnectButton.styled";

// @near
import { login, logout } from "near/utils";

//----------------------------------------------------------------

const ConnectButton: React.FC = () => {
  return (
    <Layout onClick={window?.walletConnection?.isSignedIn() ? logout : login}>
      {window?.walletConnection?.isSignedIn()
        ? window.accountId.substr(0, 5) +
          "..." +
          window.accountId.substr(
            window.accountId.length - 4,
            window.accountId.length
          )
        : "Wallet Connect"}
    </Layout>
  );
};
export default ConnectButton;
