import React, { useState, useEffect } from "react";
import Image from "next/image";

import { connect, transactions, keyStores } from "near-api-js";
// @styled-component
import {
  Layout,
  MintForm,
  ImageLayout,
  ImageContainer,
  TextSupply,
  MintLayout,
  Text,
  MainLayout,
  MintButtonAction,
  MintInputContainer,
  MintNumberInput,
  MintInputActions,
  MintInputIncrease,
  MintInputDecrease,
} from "./Mint.styled";

// @component
import Container from "components/Container/Container";

// @assets
import ImageNFT from "assets/gif/dungeo.gif";

// @context
import { useSupplyContext } from "context/SupplyContext";

const BN = require("bn.js");

// ----------------------------------------------------------

export default function Mint() {
  const { totalSupply } = useSupplyContext();

  const [status, setStatus] = useState(2);
  const [mintable, setMintable] = useState(5777);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    setMintable(5777 - totalSupply);
  }, [totalSupply]);

  const mintNFT = async () => {
    console.log("object");
    let recentCount = totalSupply;
    // for (let i = 1; i <= amount; i++) {
    console.log(totalSupply);
    console.log(recentCount);
    await window.contract.nft_mint(
      {},
      300000000000000, // attached GAS (optional)
      new BN("11000000000000000000000000")
    );
    // }
  };

  async function sendTransactions() {
    // console.log(window.accountId);
    let content = [];
    for (let i = 0; i < amount; i++) {
      content[i] = transactions.functionCall(
        "nft_mint",
        Buffer.from(JSON.stringify({})),
        3000000000000,
        new BN("11000000000000000000000000")
      );
    }
    const result = await window.contract.account.signAndSendTransaction({
      receiverId: "duegeon01.testnet",
      actions: content,
    });
  }

  return (
    <Layout id="mint">
      <Container>
        <MainLayout>
          <MintForm>
            <ImageLayout>
              <ImageContainer>
                <Image src={ImageNFT} alt="No Image" layout="fill" />
              </ImageContainer>
              <TextSupply>{totalSupply} / 5777</TextSupply>
            </ImageLayout>
            <MintLayout>
              <Text>{status === 1 ? "Presale" : "Public sale"}</Text>
              <Text>Price: 11 Near</Text>
              <Text>
                Address:
                {" " + window.accountId}
              </Text>
              <MintInputContainer>
                <MintNumberInput value={amount} readOnly />
                <MintInputActions>
                  <MintInputIncrease
                    onClick={() => {
                      setAmount(amount + 1);
                    }}
                  >
                    +
                  </MintInputIncrease>
                  <MintInputDecrease
                    onClick={() => {
                      setAmount(amount - 1);
                    }}
                  >
                    -
                  </MintInputDecrease>
                </MintInputActions>
              </MintInputContainer>
              <MintButtonAction
                disabled={mintable <= 0}
                onClick={() => sendTransactions()}
              >
                Mint
              </MintButtonAction>
            </MintLayout>
          </MintForm>
        </MainLayout>
      </Container>
    </Layout>
  );
}
