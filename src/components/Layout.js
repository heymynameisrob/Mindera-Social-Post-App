import React from 'react';
import styled from 'styled-components';

export const Grid = ({ cols, children, ...rest }) => {
  return (
    <StyledGrid cols={cols}>
      {children.map((child, i) => <StyledGridCell span={child.props.span} key={i}>{child}</StyledGridCell>)}
    </StyledGrid>
  )
}

export const Container = ({ children, ...rest }) => {
  return <section className="l-container"  {...rest}>{children}</section>
}

const StyledGrid = styled.ul`
  display:block;
  width:100%;
  --grid-tc:${props => props.cols || 3};
  grid-template-columns:repeat(var(--grid-tc), 1fr);
  grid-column-gap:var(--spacing-sm);

  @media(min-width:48rem) {
    display:grid;
  }
`
const StyledGridCell = styled.li`
  display:flex;
  align-items:center;
  list-style-type:none;
  margin-bottom:var(--spacing-sm);
  grid-column: span ${props => props.span};
  justify-items: center;

  > * {
    width:100%;
  }
`