import React, { useEffect, useState } from 'react';
import { Pagination, SearchBox, ToggleSwitch } from '../../components';
import { genderType, IUser, PaginationSettings } from '../../core';
import { getUsers } from '../../services';
import { FilterUsers, TabularViewSearchResult, TileViewSearchResult } from './components';

export default function Users() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [tileView, setTileView] = useState(false);
  const [userList, setUserList] = useState<IUser[]>();
  const [initialPagedUserList, setInitialPagedUserList] = useState<IUser[]>([]);
  const [pageIndex, setPageIndex] = useState(PaginationSettings.initialPageIndex);
  const [appliedUserList, setAppliedUserList] = useState<IUser[]>();
  const [filterBy, setFilterBy] = useState<string>(genderType.All);

  useEffect(() => {
    getUsers().then((res) => {
      setUserList(res.data?.results);
      setInitialPagedUserList(res.data?.results?.slice(0, PaginationSettings.initialPageSize));
    });
  }, []);


  const applyGenderFilter = (pagedUserList: IUser[], filter: string) => {
    if (filter === genderType.All) return pagedUserList;
    const filteredList = (pagedUserList.filter(x => x?.gender === filter));
    return filteredList;
  };

  const applySearch = (pagedUserList: IUser[], searchKeyword: string) => {
    let result = pagedUserList?.filter(x => x.name?.first?.toLowerCase().includes(searchKeyword?.toLowerCase()) ||
      x.name?.last?.toLowerCase().includes(searchKeyword?.toLowerCase()) ||
      x.login?.username?.toLowerCase().includes(searchKeyword?.toLowerCase()) ||
      x.email?.toLowerCase().includes(searchKeyword?.toLowerCase()));
    return result;
  };

  const getUserList = (pagedUserList: IUser[], filter: string, search: string) => {
    let users: IUser[] = [];
    if (filter) users = applyGenderFilter(pagedUserList, filter);
    if (search) users = applySearch(users, search);
    if (users) setAppliedUserList(users);
  }

  const searchBoxChangeHandler = (e: any) => {
    e.preventDefault();
    setSearchKeyword(e.target.value);
    getUserList(initialPagedUserList, filterBy, e.target.value);
  };

  const onChangeFilter = (e: any) => {
    setFilterBy(e.target.value);
    getUserList(initialPagedUserList, e.target.value, searchKeyword);

  };

  const ontoggle = (e: any) => {
    setTileView((prev) => !prev);
  };

  const onChangePageIndex = (index: number) => {
    setPageIndex(index);
    const pagedUsers = userList?.slice((pageIndex - 1) * PaginationSettings.initialPageSize,
      (pageIndex - 1) * PaginationSettings.initialPageSize + PaginationSettings.initialPageSize) || [];
    setInitialPagedUserList(pagedUsers);
    getUserList(pagedUsers, filterBy, searchKeyword);
  };

  return (
    <>
      <div className="title mt-3"><h3>User List</h3></div>
      <div className="d-flex justify-content-between mt-3">
        <div className="col-5">
          <SearchBox
            placeholder='Search ..'
            searchKeyword={searchKeyword}
            changeHandler={searchBoxChangeHandler} />
        </div>
        <div className="col-4">
          <FilterUsers
            onChangeFilter={onChangeFilter}
            filterBy={filterBy} />
        </div>
        <div className="">
          <ToggleSwitch
            label="Tile View"
            onToggle={ontoggle}
            checked={tileView} />
        </div>
      </div>
      {
        !tileView ?
          <TabularViewSearchResult
            searchResultList={appliedUserList || initialPagedUserList}
          >
            <Pagination
              pageIndex={pageIndex}
              count={PaginationSettings.total}
              onChangePageIndex={onChangePageIndex}
            />
          </TabularViewSearchResult> :
          <TileViewSearchResult
            searchResultList={appliedUserList || initialPagedUserList}
          >
            <Pagination
              pageIndex={pageIndex}
              count={PaginationSettings.total}
              onChangePageIndex={onChangePageIndex}
            />
          </TileViewSearchResult>
      }

    </>

  )
}
