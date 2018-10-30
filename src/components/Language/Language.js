import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components';
import chevron from '../../assets/svg/icon-chevron.svg'

const LanguageRoot = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 20px;
`;

const LanguageContainer = styled.div`
  position: relative;
`;

const TitleContainer = styled.div`
  position: relative;
`;

const Title = styled.span`
  display: block;
  position: relative;
  padding-right: 18px;
  font-size: 1.2rem;
  color: ${props => props.theme.palette.gray.dark};
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.8px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0px;
    width: 10px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${chevron});
  }
`;

const LanguageSelect = styled.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 110%;
  opacity: 0;
  font-size: 1.6rem;

  &:hover {
    cursor: pointer;
  }
`;

class Language extends Component {
  static contextTypes = {
    language: PropTypes.object,
  }

  state = {
    value: '',
  }

  componentDidMount() {
    const { language } = this.context
    this.setState({
      value: language.locale || language.detected,
    })
  }

  handleChange = event => {
    const { language } = this.context
    const { originalPath } = language
    const { value } = event.target

    if (value === this.state.value) {
      return
    }

    this.setState({ value }, () => {
      localStorage.setItem('language', value)
      window.location.href = `/${value}${originalPath}`
    })
  }

  render() {
    const { language } = this.context
    const { languages } = language
    const { value } = this.state

    if (!value) {
      return null
    }

    return (
      <LanguageRoot>
        <LanguageContainer>
          <TitleContainer>
            <Title>Change language</Title>
          </TitleContainer>
          <LanguageSelect value={value} onChange={this.handleChange}>
            {languages.map(({ value, text }) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </LanguageSelect>
        </LanguageContainer>
      </LanguageRoot>
    )
  }
}

export default Language
