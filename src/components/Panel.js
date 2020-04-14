import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { useData } from '../context/DataProvider';
import { ButtonPrimary, ButtonAction } from './Buttons';
import { HiringInputs } from './Inputs';

import AlignTop from '../static/align-top.svg';
import AlignCenter from '../static/align-center.svg';
import AlignBottom from '../static/align-bottom.svg';

export const ControlPanel = () => {
  const { downloadImage } = useData();
  return (
    <Card>
      <ControlGroup title={'Templates'}>
        <TemplateControls />
      </ControlGroup>
      <ControlGroup title={'Content'}>
        <ContentControls />
      </ControlGroup>
      <ControlGroup title={'Alignment'}>
        <AlignControls />
      </ControlGroup>
      {/* <ControlGroup title={'Channels'}>
        <p>Controls</p>
      </ControlGroup> */}
      <ButtonPrimary onClick={downloadImage} size="lg">Export</ButtonPrimary>
    </Card>
  )
}

const TemplateControls = () => {
  const { selectTemplate, template } = useData();
  return (
    <StyledControls>
      <ButtonAction
        isActive={template == 'hiring' && true}
        onClick={() => alert('test')}
        style={{ background: 'linear-gradient(45deg, #FEDE00 50%, #000000 50%)' }}>
      </ButtonAction>
    </StyledControls>
  )
}

const ContentControls = () => {
  const { template } = useData();
  return (
    <StyledControls>
      {template == 'hiring' && <HiringInputs />}
    </StyledControls>
  )
}

const AlignControls = () => {
  const { selectAlignment, alignment } = useData();
  return (
    <StyledControls>
      <ButtonAction onClick={() => selectAlignment('flex-start')} isActive={alignment == 'flex-start' ? true : false}>
        <SVG src={AlignTop} />
      </ButtonAction>
      <ButtonAction onClick={() => selectAlignment('center')} isActive={alignment == 'center' ? true : false}>
        <SVG src={AlignCenter} />
      </ButtonAction>
      <ButtonAction onClick={() => selectAlignment('flex-end')} isActive={alignment == 'flex-end' ? true : false}>
        <SVG src={AlignBottom} />
      </ButtonAction>
    </StyledControls>
  )
}

const ControlGroup = ({ title, children }) => {
  return (
    <StyledControlGroup>
      <h5>{title}</h5>
      <StyledControls>
        {children}
      </StyledControls>
    </StyledControlGroup>
  )
}


const Card = ({ children, ...rest }) => {
  return (
    <StyledCardBase {...rest}>
      {children}
    </StyledCardBase>
  )
}

const StyledCardBase = styled.div`
  display:block;
  width:100%;
  padding:var(--spacing-sm) var(--spacing-xs);
  border-radius:0.5rem;
  background-color:#fff;
  box-shadow:0 0.25rem 1rem rgba(0,0,0,0.08);
`
const StyledControlGroup = styled.section`
  display:block;
  margin-bottom:var(--spacing-md);

  h5 {
    margin-bottom:var(--spacing-xs);
  }
`
const StyledControls = styled.div`
  display:flex;
  justify-content:flex-start;  
  align-items:center;
  flex-flow:${props => props.flow == 'column' ? 'column nowrap' : 'row nowrap;'}
  width:100%;

  button {
    margin-right:var(--spacing-sm);
  }
`