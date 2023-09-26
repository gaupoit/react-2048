import React from "react";
import {
  CasperDashConnector,
  CasperSignerConnector,
  useConnect,
} from "@casperdash/usewallet";

const CasperDashButton = () => {
  const { connect } = useConnect({
    connector: new CasperDashConnector(),
  });

  return (
    <div className="resetButton" onClick={() => connect()}>
      Connect with CasperDash
    </div>
  );
};

const CasperWalletButton = () => {
  const { connect } = useConnect({
    connector: new CasperSignerConnector(),
  });

  return (
    <div className="resetButton" onClick={() => connect()}>
      Connect with Casper Wallet
    </div>
  );
};

const ConnectWallet = () => {
  return (
    <>
      <div className="wallet-box">
        <CasperDashButton />
        <CasperWalletButton />
      </div>
    </>
  );
};

export default ConnectWallet;
