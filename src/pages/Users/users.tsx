import React, { useState } from 'react'
import { Button, SearchBox, TextInput, ToggleSwitch } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { FilterUsers, TabularViewSearchResult, TileViewSearchResult } from './components';

export default function Users() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [tileView, setTileView] = useState(false);

  const searchBoxChangeHandler = (e: any) => {
    e.preventDefault();
    setSearchKeyword(e.target.value);
  };

  const searchBoxKeyDownHandler = (e: any) => {

  };

  const searchHandler = (e: any) => {

  };

  const ontoggle = (e: any) => {
    setTileView((prev) => !prev);
  };

  return (
    <>
      <div className="title mt-3">User List</div>
      <div className="d-flex justify-content-between mt-3">
        <div className="col-5">
          <SearchBox
            placeholder='Search ..'
            searchKeyword={searchKeyword}
            changeHandler={searchBoxChangeHandler}
            handleSearch={searchHandler}
            handleKeyDown={searchBoxKeyDownHandler} />
        </div>
        <div className="col-4">
          <FilterUsers />
        </div>
        <div className="">
          <ToggleSwitch
            label="Tile View"
            onToggle={ontoggle}
            checked={tileView} />
        </div>
      </div>
      {
        !tileView ? <TabularViewSearchResult /> : <TileViewSearchResult />
      }

    </>

  )
}
