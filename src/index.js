import React from "react";
import ReactDOM from "react-dom/client";
import {
  CasperProvider,
  createClient,
  CasperDashConnector,
  CasperSignerConnector,
  useAccount,
} from "@casperdash/usewallet";
import ConnectWallet from "./components/ConnectWallet";
import BoardView from "./components/Board";
import "./main.scss";
import "./styles.scss";

const client = createClient({
  connectors: [new CasperSignerConnector(), new CasperDashConnector()],
  autoConnect: true,
});

const App = () => {
  const { publicKey } = useAccount();
  return (
    <CasperProvider client={client}>
      {publicKey ? (
        <BoardView resultCallback={(board) => console.log("OK", board)} />
      ) : (
        <ConnectWallet />
      )}
    </CasperProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>EggForce 2048</h1>
    <App />
  </>
);
