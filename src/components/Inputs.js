import React from 'react';
import styled from 'styled-components';
import { useData } from '../context/DataProvider';

export const HiringInputs = () => {
  const { content, addContent } = useData();
  return (
    <StyledTextField placeholder="Role" onChange={(e) => { addContent(e.target.value) }} value={content} />
  )
}

const StyledTextField = styled.input`
  display:block;
  width:100%;
  outline:0;
  appearance: none;
  padding:0.75rem;
  border:none;
  background-color:#f5f5f5;
  border-radius:0.5rem;
  color:var(--text-med);
  font-family:var(--font-stack);
  font-size:1rem;

  &:focus {
    border:2px solid #222;
    color:var(--text-high);
  }
`