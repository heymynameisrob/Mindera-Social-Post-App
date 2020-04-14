import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Minus, Plus } from 'react-feather';

const Hiring = React.lazy(() => import('./Templates').then(module => ({ default: module.Hiring })));
const templates = [
  <Hiring />
]

const Zoom = ({ zoomLevel, decrease, increase, reset }) => {
  return (
    <StyledZoomContainer>
      <StyledZoomBox>
        <Minus onClick={decrease} color={zoomLevel === 1 ? '#222' : '#888'} />
        <p>{zoomLevel === 1 ? '200%' : '100%'}</p>
        <Plus onClick={increase} color={zoomLevel !== 1 ? '#222' : '#888'} />
      </StyledZoomBox>
    </StyledZoomContainer>
  )
}

export const Canvas = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [containerWidth, setContainerWidth] = useState(561);

  useEffect(() => {
    fitZoom()
  }, []);

  const fitZoom = () => {
    const baseZoom = (containerWidth / 1080);
    setZoomLevel(baseZoom);
  }

  return (
    <>
      <Zoom
        zoomLevel={zoomLevel}
        increase={() => setZoomLevel(1)}
        decrease={() => fitZoom()}
      />
      <StyledCanvas>
        <div id="canvas" style={{ transform: `scale(${zoomLevel}`, transformOrigin: 'top left' }}>
          <React.Suspense fallback={<div>Loading...</div>}>
            {templates[0]}
          </React.Suspense>
        </div>
      </StyledCanvas>
    </>
  )
}

const StyledCanvas = styled.div`
  position:relative;
  display:block;
  overflow:auto;
  padding-top:100%;
  border-radius:0.5rem;
  box-shadow:0 0.25rem 1rem rgba(0,0,0,0.08);

  #canvas {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
`

const StyledZoomContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  margin-bottom:var(--spacing-xs);
`
const StyledZoomBox = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0.5rem var(--spacing-xs);
  border-radius:0.25rem;
  background-color:#fff;
  box-shadow:0 1px 4px rgba(0,0,0,0.08);  

  p {
    padding:0 var(--spacing-xs);
    color:#222;
  }
`