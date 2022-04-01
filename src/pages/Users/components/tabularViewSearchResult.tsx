import React from 'react'
import { Pagination } from '../../../components'

export function TabularViewSearchResult() {
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
                        <tr>

                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>

                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>

                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Pagination
                pageIndex={1}
                count={100}
                onChangePageIndex={() => { }}
            />
        </>

    )
}
