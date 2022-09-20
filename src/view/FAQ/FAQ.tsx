import React from "react";

// @styled-component
import {
  Layout,
  MainLayout,
  Header,
  Row,
  Questions,
  Col,
  QuestionItem,
  Question,
  Answer,
} from "./FAQ.styled";

// @component
import Container from "components/Container/Container";

// ----------------------------------------------------------

export default function index() {
  return (
    <Layout id="faq">
      <Container>
        <MainLayout>
          <Header>FAQ</Header>
          <Row>
            <Questions>
              <Col>
                <QuestionItem>
                  <Question>How much will it cost to mint Goblin?</Question>
                  <Answer>
                    Whitelist Price: 10N
                    <br />
                    General Price: 20N
                  </Answer>
                </QuestionItem>
                <QuestionItem>
                  <Question>
                    Dungeon Goblins(DungeoNEAR standard) trade royalty
                  </Question>
                  <Answer>
                    5% royalty on NFT trading and in platform transactions.
                  </Answer>
                </QuestionItem>
                <QuestionItem>
                  <Question>What is the “DungeoNEAR” platform?</Question>
                  <Answer>
                    DungeoNEAR, is a NEAR NFT gaming, staking, minting and game
                    development platform, releasing its first proof of concept
                    NFT collection as “Dungeon Goblin’s”. This NFT collection is
                    the foundation for a new “Stake, Play, Earn” game ecosystem
                    model.
                  </Answer>
                </QuestionItem>
              </Col>
            </Questions>
            <Questions>
              <Col>
                <QuestionItem>
                  <Question>When is Goblin Mint?</Question>
                  <Answer>???</Answer>
                </QuestionItem>
                <QuestionItem>
                  <Question>
                    Use of Funds from Dungeon Goblins NFT Mint
                  </Question>
                  <Answer>
                    ● 5% goes to Musician
                    <br />● 5% goes to Graphic artist
                    <br />● 10% goes to Marketing/Dev Team
                    <br />● 25% goes to “DungeoNEAR” Treasury Wallet
                    <br />● 5% goes to Charity, Non Profit for Visually
                    Impaired.
                    <br />● Remaining Funds Raised will go to developing, and
                    growing the DungeoNEAR platform and ecosystem.
                  </Answer>
                </QuestionItem>
              </Col>
            </Questions>
          </Row>
        </MainLayout>
      </Container>
    </Layout>
  );
}
