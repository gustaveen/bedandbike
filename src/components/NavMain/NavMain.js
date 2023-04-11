/* global location */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { List, Item, ItemLink } from './NavMain.styles';

const NavMain = props => (
  <List>
    <Item>
      <ItemLink
        to={`/cykelpaket`}
        className="NavMain__ItemLink"
        activeClassName="NavMain__ItemLink--Active"
      >
        <FormattedMessage id="bikePackage" />
      </ItemLink>
    </Item>
    <Item>
      <ItemLink
        to={`/vandringspaket`}
        className="NavMain__ItemLink"
        activeClassName="NavMain__ItemLink--Active"
      >
        <FormattedMessage id="hikePackage" />
      </ItemLink>
    </Item>
  </List>
);

export default NavMain;
