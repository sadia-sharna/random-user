import React from 'react';
import { IUser } from '../../../core';

type IProps = {
    searchResultList?: IUser[];
    children: any;
};
export function TileViewSearchResult(props: IProps) {
    const { searchResultList, children } = props;

    return (
        <>
            <div className="tile-view mt-3">
                <div className="row row-cols-1 row-cols-md-5 g-4 search-result" >
                    {searchResultList && searchResultList.map(item =>
                        <div
                            className="col"
                            key={item?.login?.uuid}
                        >
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">{item?.name?.last}, {item?.name?.first}</h5>
                                    <div className="card-text">{item?.email}</div>
                                    <div className="card-text">{item?.login?.username}</div>
                                    <div className="card-text">{item?.registered?.date}</div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            {children}
        </>
    )
}
