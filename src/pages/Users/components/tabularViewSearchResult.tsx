import React from 'react'
import { Pagination } from '../../../components'
import { IUser } from '../../../core';
import { PaginationSettings } from '../../../core/appConsts';

type IProps = {
    searchResultList?: IUser[];
    children: any;
};

export function TabularViewSearchResult(props: IProps) {
    const { searchResultList, children } = props;

    return (
        <>
            <div className="table-view mt-3">
                <table className="table  border">
                    <thead>
                        <tr className='table-light'>
                            <th scope="col">Name</th>
                            <th scope="col">Registration Date</th>
                            <th scope="col">Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResultList && searchResultList.map(item =>
                            <tr key={item?.login?.uuid}>
                                <td>
                                    <p>{item?.name?.last}, {item?.name?.first}</p>
                                    <p>{item?.email}</p>
                                </td>
                                <td>{item?.registered?.date}</td>
                                <td>{item?.login?.username}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {children}
        </>

    )
}
