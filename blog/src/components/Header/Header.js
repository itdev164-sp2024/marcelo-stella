import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1 } from "../Heading"
import { Section } from '../Section'
import { IconButton } from "../Button"
import { Search } from 'styled-icons/feather'

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: ${({ theme }) => theme.variants.header.primary.backgroundColor};
`

const StyledLink = styled(Link)`
  font-size: var(--font-sm);
  text-decoration: none;
  color: ${({ theme }) => theme.variants.header.primary.color};
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Section width={11/12}>
      <H1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </H1>
    </Section>
    <Section width={1/12}>
      <IconButton icon={<Search></Search>} variant='contrast'></IconButton>
    </Section>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ""
}

export { Header }