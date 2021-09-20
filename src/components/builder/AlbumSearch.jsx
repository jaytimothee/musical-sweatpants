import React, { useEffect, useState, useCallback } from "react";
import { useDebounce } from "use-lodash-debounce";
import { useApiContext } from "../../providers/ApiProvider";
import { useCurrentAlbumContext } from "../../providers/CurrentAlbumProvider";
import "../../css/AlbumSearch.css";

const AlbumSearch = () => {
  const { getApi, buildQueryString } = useApiContext();
  const [inputFocused, setInputFocused] = useState(false);
  const [albumSearch, setAlbumSearch] = useState("");
  const [itunesJson, setItunesJson] = useState(null);
  const { currentAlbum, setCurrentAlbum } = useCurrentAlbumContext();
  const debouncedAlbumSearch = useDebounce(albumSearch, 1000);


  const doSearch = useCallback(async (input) => {
    const baseUrl = `https://itunes.apple.com/search?`;
    const urlOptions = {
      country: "us",
      media: "music",
      entity: "album",
      callback: "getApi",
      term: input === "test" ? "tes" : input  // If you search for "test" the api is mad
    };
    const completeUrl = `${baseUrl}${buildQueryString(urlOptions)}`;
    const results = await getApi(completeUrl);
    //This strips out unneeded content from returned data
    const data = JSON.parse(results.data.slice(9, -4).replace(/\u21b5/g, ""));
    setItunesJson(data);

  }, [buildQueryString, getApi])

  useEffect(() => {
    if (debouncedAlbumSearch) {
      doSearch(debouncedAlbumSearch);
    } else if (debouncedAlbumSearch === "") {
      setItunesJson(null);
    }
  }, [debouncedAlbumSearch, doSearch]);

  const SearchResult = ({ item, height }) => (
    <div
      className="flex vertical-flex results-wrapper"
      onClick={() => [setCurrentAlbum(item), setInputFocused(false)]}
    >
      <img
        alt="album-artwork"
        className={"album-artwork"}
        height={height}
        src={`${item && item.artworkUrl100}`}
      />
      <div className="chosen-input">
        <div className="light-text input-album-name text-overflow">
          {item && item.collectionName}
        </div>
        <div className="light-text input-artist-name text-overflow">
          {item && item.artistName}
        </div>
      </div>
    </div>
  );


  return (
    <div>
      <form>
        <label className="feature-title light-text">
          Album Art
        </label>
        <div className="input-container">
          {currentAlbum ?
            <i
              className="fa fa-close"
              onClick={() => [setCurrentAlbum(null), setAlbumSearch("")]}
            />
            :
            <i className="fa fa-search" />
          }
          {currentAlbum ?
            <div className="input input-with-image">
              <div className="flex vertical-flex">
                <SearchResult item={currentAlbum} height="48px" />
              </div>
            </div>
            :
            <input
              className="input full-width"
              value={albumSearch}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setTimeout(() => { setInputFocused(false); }, 500)}
              placeholder="Find Album"
              onChange={(event) => setAlbumSearch(event.target.value)}
            />
          }
        </div>
      </form>
      {itunesJson && albumSearch && inputFocused &&
        <div className="relative">
          <div className="results-container" style={{}}>
            {itunesJson && itunesJson.results.map((item, index) => (
              <SearchResult key={index} item={item} height="65px" />
            ))
            }
          </div>
        </div>

      }
    </div>
  );
};

export default AlbumSearch;
