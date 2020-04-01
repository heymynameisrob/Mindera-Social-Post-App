import React, { useEffect, useRef, useState } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

export const Canvas = () => {

  const downloadImage = () => {
    domtoimage.toBlob(document.getElementById('test'), { height: 1080, width: 1080, bgcolor: '#fff' })
      .then(function (blob) {
        saveAs(blob, 'myImage.jpg');
      });
  }

  return (
    <div>
      <div id="test">Test</div>
      <button onClick={downloadImage}>Download</button>
    </div >
  )
}

