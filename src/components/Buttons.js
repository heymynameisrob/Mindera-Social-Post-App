import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

export const ButtonPrimary = ({ children, ...rest }) => {
  return <StyledButtonPrimary {...rest}>{children}</StyledButtonPrimary>
}

export const ButtonAction = ({ children, ...rest }) => {
  return <StyledButtonAction {...rest}>{children}</StyledButtonAction>
}

const StyledButtonPrimary = styled.button`
  display:block;
  width:${props => props.size == 'lg' ? '100%' : 'auto'};
  padding:var(--spacing-xs) var(--spacing-sm);
  font-size:0.85rem;
  text-decoration:none;
  background-color:#0047FE;
  color:#fff;
  font-weight:700;
  border-radius:0.25rem;
  border:2px solid #0047FE;
  box-shadow:0 1px 3px rgba(0,0,0,0.08);
  margin:var(--spacing-sm) auto 0 auto;
  border:none;
  text-align:center;
  cursor:pointer;
  transition:all .2s ease;

  &.disabled {
    pointer-events:none;    
    opacity:0.5;
  }

  &:hover {
    background-color:${darken(0.2, '#0047FE')};
    transition:all .2s ease;
  }
`
const StyledButtonAction = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-flow:column nowrap;
  width:2.5rem;
  height:2.5rem;
  border-radius:50%;
  border:none; 
  text-align:center;
  outline:0;
  box-shadow:${props => props.isActive ? '0 0.25rem 1rem rgba(0,0,0,0.08)' : '0 1px 4px rgba(0,0,0,0.1)'};
  background-color:${props => props.isActive ? '#0047FE' : '#d8d8d8'};
  opacity:${props => props.isActive ? 1 : 0.5};
  color:${props => props.isActive ? '#FFF' : '#222'};
  will-change:background-color, color;
  transition:background-color, color 0.25s ease;  
`