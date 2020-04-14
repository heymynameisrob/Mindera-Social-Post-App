import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Hiring = React.lazy(() => import('./Templates').then(module => ({ default: module.Hiring })));
const templates = [
  <Hiring />
]

export const Canvas = () => {
  const [zoomLevel, setZoomLevel] = useState('1');
  const [containerWidth, setContainerWidth] = useState(561);

  useEffect(() => {
    fitZoom();
  }, []);

  const fitZoom = () => {
    const baseZoom = (containerWidth / 1080);
    setZoomLevel(`${baseZoom}`);
  }

  return (
    <>
      <button onClick={() => fitZoom()}>Fit</button>
      <button onClick={() => setZoomLevel('1')}>200%</button>
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