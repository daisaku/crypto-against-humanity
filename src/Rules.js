import React, { Component } from "react";
import ReactGA from 'react-ga';
import ContainerColumn from './components/ContainerColumn';
import {
  H1, H3, PARAGRAPH,
} from './StyleGuide';


class Rules extends Component {
    constructor(props) {
        super(props);
        ReactGA.initialize('UA-120470128-1');
        ReactGA.pageview(window.location.hash);
    }

  render() {
    return (
      <ContainerCentered>
        <H1>How to play</H1>
        <H3>Crypto Against Humanity is a never ending game of Cards Against Humanity, that rewards terrible people for creating and curating tasteless card combinations.</H3>
        <PARAGRAPH>There are two types of cards: white cards and black cards. White cards, which typically represent a noun or pronoun, and black
        cards, which usually are sentences or phrases with blank spaces. These cards and the resulting combinations of both
        are completely generated by the community.</PARAGRAPH>
        <PARAGRAPH>Users can create white cards which can then be bought and sold for Eth on the Play page.
        As more people buy into a white card they think goes best with the current black card the price goes up.
        And if the white card falls out of favor and people start to sell it the price falls</PARAGRAPH>
        <PARAGRAPH>Users can also submit Black cards to the Token Curated Registry (TCR) from which a new black card is chosen at random
        every 3 hours.</PARAGRAPH>

        <H3> How Alice makes money off her sinister sense of humor </H3>
        <PARAGRAPH>Alice opens Crypto Against Humanity and notices the black card with the text "_____, Satoshi's true vision".
        She scrolls through the list of available white cards and notices one labeled "Bitconnect". Obviously that is hilarious.
        She also notices it is very cheap in comparison to the rest of the cards. Alice, ever the savy investor, buys some.</PARAGRAPH>
        <PARAGRAPH>After a few hours the card becomes really popular and as other people discover it and buy in the price soars. Now that
        it's worth quite a bit more than what Alice bought it for, she sells her cards back to the market for Eth.
        Having been handsomely rewarded for her highly sophisticated sense of sarcasm she gets ready to play again!</PARAGRAPH>
      </ContainerCentered>
    );
  }
}

const ContainerCentered = ContainerColumn.extend`
  >* {
    text-align: center;
  }
`;

export default Rules;