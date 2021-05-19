import React from 'react';
import { graphql } from 'gatsby';
import { withIntl } from '../i18n';
import { ThemeProvider } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import theme from '../components/theme';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import Info from '../components/Info';

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
} from '../components/cykelpaket.styles';

const BikeOneDay = props => (
  <ThemeProvider theme={theme}>
    <Layout langKey={props.pageContext.locale}>
      <Hero
        image={props.data.heroImage.childImageSharp.fluid}
        left
        title={<FormattedMessage id="bikeCardTitle1" />}
      />
      <Article>
        <Sidebar>
          <Price>
            <PriceText>Pris</PriceText>
            <PriceAmount>800 kr/person</PriceAmount>
          </Price>
          <SidebarTitle>Ingår i priset</SidebarTitle>
          <List>
            <Item>Guidad båttur till Vinga (2.5h)</Item>
            <Item>Lunch på Tullhuset</Item>
            <Item>Karta och guide</Item>
          </List>
          <SidebarTitle>Möjliga tillval</SidebarTitle>
          <List>
            <Item>Hyrcykel 100kr/dygn</Item>
            <Item>Parkering 100kr</Item>
            <Item>
              Paketet kompletteras enkelt med en eller flera övernattningar
              (dubbelrum 1200kr inkl. frukost)
            </Item>
            <Item>Barn i extrasäng 300 sek/dygn</Item>
          </List>
        </Sidebar>
        <Content>
          <ContentTitle>
            Välkommen till en dags ”ö-luffning" på några av Öckerös 10 öar. Du
            tar dig fram med cykel, båt och till fots.
          </ContentTitle>
          <h3>Cykla till Hönö och Fotö</h3>
          <p>
            Efter ankomsten, då ni avsmakat en god kopp latté, hoppar ni upp på
            era cyklar alt. våra hyrcyklar och cyklar via Öckerö hembygdsmuseum,
            Hönö konsthall och Galleri Gårda vidare söderut och över bron till
            den sydligast belägna ön, Fotö. Där kan ni vandra omkring i den
            bevarade skärgårdsbebyggelsen.
          </p>
          <p>
            Styr därefter färden mot Hönö Klåvas centrum med dess många små och
            spännande butiker, restauranger och caféer. Här finns också öns
            fiskemuseum som visar livet på Öckerö-öarna över tid. Lunchen
            avnjuter ni på Tullhuset, en genuin fiskerestaurang med vidunderlig
            utsikt och fantastisk mat. Klockan 16.30 stiger ni ombord på
            ms/Belle–Amie som tar er, via kobbar och skär, ut på en mycket
            uppskattad och spännande guidad tur till Vinga.Turen tar 2.5 timmar.
          </p>
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe
              src="https://player.vimeo.com/video/312052598?autoplay=0&title=0&byline=0&portrait=0"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
              }}
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            />
          </div>
          <script src="https://player.vimeo.com/api/player.js" />
          <span>MS/Belle–Amie en vacker sommardag</span>
          <p>Cyklingen är ca 25 km</p>
          <p>
            Då gallerierna och hembygdsmuseum inte har öppet alla dagar.
            Vänligen besök deras resp.hemsidor.{' '}
          </p>
          <p>
            Cykelpaketet är ett förslag. Ni kan tillsammans med värdparet forma
            ert eget paket. Hyppeln, Källö-Knippla, Kalvsund och Grötö är andra
            unika öar som man når med färja + cykel/vandring eller kajak. Dessa
            öar har också vandringsleder och underbar natur.
          </p>
          <p>
            Fantastiska matställen finns även på Hyppeln, Källö-Knippla och
            Björkö.
          </p>
        </Content>
      </Article>
      {/* <Intro text={<FormattedMessage id="bike1Intro" />}/> */}
      <Info />
    </Layout>
  </ThemeProvider>
);

export default withIntl(BikeOneDay);

export const query = graphql`
  query {
    heroImage: file(relativePath: { regex: "/cliff-and-bike-large/" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
