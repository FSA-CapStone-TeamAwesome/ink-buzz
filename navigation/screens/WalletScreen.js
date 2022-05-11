import React from "react";
import { SafeAreaView, Button } from "react-native";

import WalletConnectProvider, {
  useWalletConnect,
} from "react-native-walletconnect";

import QRCodeModal from "@walletconnect/qrcode-modal";


const WalletConnectExample = () => {


const noncer = () => {
  const nonce = Date.now()
  return nonce
}

  const { createSession, killSession, session, sendTransaction } =
  useWalletConnect();
  const hasWallet = !!session.length;


  const payEth = React.useCallback(async () => {

const transactionDetails = {
  from: "0x35aa69a3b9a11e814cb405f4b15bd83375c25da7",
  to: "0x73de20c61d696867a656b089762ad52342dc365e",
  data: "0x636F6E74616374",
  // gasPrice: "200000000000",
  // gas: "1",
  value: "100000000000000000", // in Wei, or 10^-18 ETH
  nonce: noncer()}



    try {
      console.log("reaching")
       const resp = await sendTransaction(transactionDetails);
       console.log(resp)
    } catch (e) {
      console.error(e);
    }
  });


  return (
    <>
      {!hasWallet && <Button title="Connect" onPress={createSession} />}
      {!!hasWallet && (
        <Button
        title="Sign Transaction"
        onPress={payEth}
        />
        )}
      {!!hasWallet && <Button title="Disconnect" onPress={killSession} />}
    </>
  );
};


export default function App() {
  return (
    <WalletConnectProvider>
      <WalletConnectExample />
    </WalletConnectProvider>
  );
}
