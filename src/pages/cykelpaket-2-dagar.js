import React from "react";
import { graphql } from "gatsby";
import { withIntl } from "../i18n";
import { ThemeProvider } from "styled-components";
import { FormattedMessage } from "react-intl";
import theme from "../components/theme";
import Layout from "../components/layout";
import Hero from "../components/Hero";

import {
  Article,
  Sidebar,
  SidebarTitle,
  List,
  Item,
  Content,
  ContentTitle,
  Price,
  PriceText,
  PriceAmount,
} from "./cykelpaket.styles";

const BikeTwoDay = props => (
  <ThemeProvider theme={theme}>
    <Layout langKey={props.pageContext.locale}>
      <Hero
        image={props.data.heroImage.childImageSharp.fluid}
        left
        title={<FormattedMessage id="bikeCardTitle2" />}
      />
      <Article>
        <Sidebar>
          <Price>
            <PriceText>Pris</PriceText>
            <PriceAmount>1600 kr/person</PriceAmount>
          </Price>
          <SidebarTitle>Ingår i priset</SidebarTitle>
          <List>
            <Item>1 övernattning i dubbelrum</Item>
            <Item>Lakan, handduk och städning</Item>
            <Item>Lunchpaket (dag 1 och 2)</Item>
            <Item>Frukost (dag 2)</Item>
            <Item>Middag (dag 1 exkl. dryck)</Item>
            <Item>Karta och guide</Item>
          </List>
          <SidebarTitle>Möjliga tillval</SidebarTitle>
          <List>
            <Item>Hyrcykel 100kr/dygn</Item>
            <Item>Parkering 100kr</Item>
            <Item>
              Paketet kompletteras enkelt med en eller flera övernattningar
              (dubbelrum 1050kr inkl. frukost)
            </Item>
            <Item>Barn i extrasäng 200 sek/dygn</Item>
          </List>
        </Sidebar>
        <Content>
          <ContentTitle>
            Välkommen till två dagars ”ö-luffning" på några av Öckerös 10 öar.
            Du tar dig fram med cykel, färja och till fots och bor på vårt
            familjära Bed & Bike på huvudön, Öckerö.
          </ContentTitle>
          <h3>Dag 1 - Cykla till Rörö med vandring i naturreservatet</h3>
          <p>
            Efter ankomsten, då ni avsmakat en god kopp latté, hoppar ni upp på
            era cyklar alt. våra hyrcyklar och far norrut mot Burö och där
            väntar den gula färjan till Rörö. Väl framme ta gärna ett stopp i
            Rörö hamn. Detta är hemmahamn för ”Astrid” ett av Sveriges största
            fiskefartyg. Här ligger också sjöräddningens fartyg för regionen.
            Vid kajkanten i hamnen finner ni, Röröboa Cafe och Restaurang, där
            ni hämtar ert lunchpaket.
          </p>
          <p>
            Tag gärna en cykeltur mellan underbart vackra skärgårdshus till den
            lilla hamnen Apelvik i nordost. På västsidan av ön ligger
            naturreservatet med fantastiska vandringsleder. Här sträcker sig
            stora klapperstensfält mot väst och mot syd en badvänlig sandstrand
            och har du tur kan du träffa vildhästarna och fåren som betar på
            ljunghedarna. På vägen hem stannar ni till på Evas på Hälsö och
            avnjuter er middag.
          </p>
          <List>
            <Item>Logi: Bed & Bike Öckerö</Item>
            <Item>Måltider: Lunchpaket och middag</Item>
            <Item>Cykling c:a 25 km och vandring (hela rundan 12 km)</Item>
          </List>
          <br />
          <h3>
            Dag 2 - Cykla till Björkö med avstickare till Kalvsund eller Grötö
          </h3>
          <p>
            Efter en berikande frukostbuffé cyklar ni till Öckerö färjeläge för
            en båttur till Björkö. Färjan passerar Kalvsund med sjömärket Valen
            och Bremerska villan. Ni går i land vid Framnäs och cyklar norrut,
            ner till Björkö hamn där ni hämtar ert lunchpaket i ” Feskeboa”
            besök gärna Skeppshandeln.
          </p>
          <p>
            När hamnturen är avklarad cyklar ni genom Björkö samhälle, passerar
            genom vacker ekskog, öppna landskap och bohuslänska klippor tills ni
            når det pittoreska fiskeläget Bovik. Under säsong kan man längs
            vägen hitta både orkidéer och blåsippor. På tillbakavägen kan man
            göra en avstickare till Grötö alt.Kalvsund. Avsluta gärna kvällen
            med middag på Tullhuset som har fantastiska fiskrätter och en
            vidunderlig utsikt mot Vinga.
          </p>
          <List>
            <Item>Måltider: Frukost och lunchpaket</Item>
            <Item>Cykling c:a 30 km</Item>
          </List>
          <br />
          <p>
            Cykelpaketet är ett förslag. Ni kan tillsammans med värdparet forma
            ert eget paket.  Hyppeln, Källö-Knippla, Kalvsund och Grötö är andra
            unika öar som man når med färja + cykel/vandring eller kajak. Dessa
            öar har också vandringsleder och underbar natur. Fantastiska
            matställen finns även på Hyppeln, Källö-Knippla och Björkö.
          </p>
        </Content>
      </Article>
    </Layout>
  </ThemeProvider>
);

export default withIntl(BikeTwoDay);

export const query = graphql`
  query {
    heroImage: file(relativePath: { regex: "/boat-and-bike-16_9/" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
