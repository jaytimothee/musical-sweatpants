import React, { useContext, createContext, useState } from 'react';

export const CurrentAlbumContext = createContext(null);
export const useCurrentAlbumContext = () => useContext(CurrentAlbumContext);

export const CurrentAlbumProvider = ({ children }) => {

  const [currentAlbum, setCurrentAlbum] = useState(null);

  return (
    <CurrentAlbumContext.Provider value={{ currentAlbum, setCurrentAlbum }}>
      {children}
    </CurrentAlbumContext.Provider>
  );
};

export default CurrentAlbumProvider;
