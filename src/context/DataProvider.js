import React, { useState, useContext } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [template, setTemplate] = useState('hiring');
  const [content, setContent] = useState('');
  const [alignment, setAlignment] = useState('flex-start');
  const [channels, setChannels] = useState([]);

  const selectTemplate = async () => { }
  const addContent = (value) => {
    setContent(value);
  }
  const selectAlignment = (param) => {
    setAlignment(param)
  }
  const selectChannels = () => { }

  const downloadImage = () => {
    const element = document.getElementById('canvas');
    domtoimage.toBlob(element, { style: { transform: 'scale(1)' } })
      .then(function (blob) {
        saveAs(blob, 'myImage.jpg');
      });
  }

  return (
    <DataContext.Provider value={{
      template, content, alignment, channels,
      selectTemplate, addContent, selectAlignment, selectChannels, downloadImage
    }} {...props} />
  )
}

const useData = () => React.useContext(DataContext)

export { DataProvider, useData }