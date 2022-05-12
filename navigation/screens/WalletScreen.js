import React from "react";
import { SafeAreaView, Button } from "react-native";

import WalletConnectProvider, {
  useWalletConnect,
} from "react-native-walletconnect";

import QRCodeModal from "@walletconnect/qrcode-modal";

const WalletConnectExample = () => {
  const { createSession, killSession, session, sendTransaction, signTransaction } =
  useWalletConnect();
  const hasWallet = !!session.length;


  // Function to convert decimal to acceptable hexidecimal for transactions

  // const makeHex = (inputNumber) => {
  //   var hexNumber = new BN(String(inputNumber), 10);

  //   console.log(hexNumber)

  //   return "0x" + hexNumber.toString(16)

  // }

  console.log(session[0].accounts[0])

  const transactionDetails = {
    // from: "0x35aa69a3b9a11e814cb405f4b15bd83375c25da7",
    from: session[0].accounts[0],
    to: "0x73de20c61d696867a656b089762ad52342dc365e",
    value: "0x16345785d8a0000", // in Wei, or 10^-18 ETH
  }


  async function returnHash(transactionDetails) {
    const transactionHash = await sendTransaction(transactionDetails);

    console.log(transactionHash);

    return transactionHash;
  }





  return (
    <>
      {!hasWallet && <Button title="Connect" onPress={createSession} />}
      {!!hasWallet && (
        <Button
        title="Sign Transaction"
          onPress={() =>
            returnHash(transactionDetails)
          }
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
