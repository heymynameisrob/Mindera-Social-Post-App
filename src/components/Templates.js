import React, { useEffect } from 'react';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import { useData } from '../context/DataProvider';
import logo from '../static/logo.svg'
import gridImage from '../static/grid.png';

export const Hiring = () => {
  const { alignment, content } = useData();

  useEffect(() => {
    let link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Anton&display=swap";
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
  }, [])

  const title = { display: 'inline-block', backgroundColor: '#000', padding: '1rem', textAlign: 'left', marginRight: 'auto', marginBottom: '5%' };
  const location = { color: '#FEDE00', fontSize: '80px', fontFamily: 'Anton', textTransform: 'uppercase' }
  const overline = { color: '#fff', fontSize: '80px', fontFamily: 'Anton', textTransform: 'uppercase' };
  const role = { color: '#fff', fontSize: '120px', fontFamily: 'Anton', textTransform: 'uppercase', wordWrap: 'break-word', boxDecorationBreak: 'clone' };
  const logoWrap = { position: 'absolute', top: '1.5rem', right: '1.5rem', maxWidth: '5%' }
  return (
    <Template base="#FEDE00" primary="#000" alignY={alignment} style={{ backgroundImage: `url(${gridImage})`, backgroundSize: 'cover' }}>
      <div style={{ textAlign: 'left', maxWidth: '55%' }}>
        <div style={logoWrap}>
          <SVG src={logo} />
        </div>
        <div style={title}>
          <span style={overline}>We're Hiring</span>
        </div>
        <div style={{ ...title, marginBottom: 0 }}>
          <span style={role}>{content.length > 1 ? content : 'Android Developer'}</span>
        </div>
        <div style={title}>
          <span style={location}>Leicester, UK</span>
        </div>
      </div>
    </Template >
  )
}

const Template = ({ base, primary, alignX, alignY, children, ...rest }) => {
  return (
    <StyledTemplateBox base={base} primary={primary} {...rest}>
      <StyledContent alignY={alignY}>
        {children}
      </StyledContent>
    </StyledTemplateBox>
  )
}

const StyledTemplateBox = styled.div`
  position:relative;
  display:block;
  padding-top:100%;
  width:1080px;
  height:1080px;
  background-color:${props => props.base || '#FEDE00'};
  color:${props => props.base || '#000'};
`
const StyledContent = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  text-align:left;
  padding:var(--spacing-md) 2.4rem;
  display:flex;
  justify-content:${props => props.alignY || 'flex-start'};
  align-items:flex-start;
  flex-flow:column nowrap;
  text-align:center;  

  svg {
    width:100%;
    height:100%;
  }
  svg text {
    display:block;  
    font-size:100px;    
    font-family:'Anton', sans-serif;
    font-weight:normal;  
    text-align:left;
    text-transform:uppercase;  
    background-color:#000;
    margin:2rem 0 0 0;
  }
  svg text:nth-of-type(2) {
    font-size:160px;
  }
`
const StyledTitle = styled.h2`
  display:block;  
  font-size:${props => props.size == 'lg' ? '500%' : '300%'};
  color:${props => props.color || '#fff'};  
  font-family:'Anton', sans-serif;
  font-weight:normal;  
  text-align:left;
  text-transform:uppercase;  
  margin:2rem 0 0 0;
  
  span {
    line-height:1.3;
    padding:0 0.5rem;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    background-color:#000; 
  }
`