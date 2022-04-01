import React from 'react'
import { Pagination } from '../../../components'

export function TileViewSearchResult() {
    return (
        <>
            <div className="tile-view mt-3">
                <div className="row row-cols-1 row-cols-md-5 g-4 search-result" >

                    <div
                        className="col"
                    >
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">LastName, First Name</h5>
                                <div className="card-text">email</div>
                                <div className="card-text">username</div>
                                <div className="card-text">registered</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col"
                    >
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">a</h5>
                                <div className="card-text">v</div>
                                <div className="card-text">g</div>
                                <div className="card-text">registered</div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Pagination
                pageIndex={1}
                count={100}
                onChangePageIndex={() => { }}
            />
        </>
    )
}
