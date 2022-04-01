import {
    faAngleDoubleLeft,
    faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
    pageIndex: number;
    count: number;
    onChangePageIndex?: any;
};

export function Pagination(props: Props): JSX.Element {
    const { pageIndex, count, onChangePageIndex } = props;
    const pageSize = 10;
    const pageNumbers = Math.ceil(count / pageSize);

    return (
        <div className=" mt-4 d-flex justify-content-end">
            <nav aria-label="table Page navigation">
                <ul className="pagination justify-content-sm-end">
                    <li
                        className={pageIndex <= 1 ? "page-item disabled" : "page-item "}
                        onClick={() => {
                            (pageIndex <= 1) || onChangePageIndex(pageIndex - 1);
                        }}
                    >
                        <button className="page-link" tabIndex={-1}>
                            <FontAwesomeIcon icon={faAngleDoubleLeft} />
                        </button>
                    </li>
                    {
                        Array.from({ length: pageNumbers }, (_, i) => (
                            <li key={i}
                                className={
                                    pageIndex === i + 1 ? "page-item active" : "page-item"
                                }
                                onClick={() => {
                                    onChangePageIndex(i + 1);
                                }}
                            >
                                <button className="page-link" tabIndex={-1}>
                                    {i + 1}
                                </button>
                            </li>
                        ))
                    }

                    <li
                        className={pageIndex >= pageNumbers ? "page-item disabled" : "page-item "}
                        onClick={() => {
                            pageIndex >= pageNumbers || onChangePageIndex(pageIndex + 1);
                        }}
                    >
                        <button className="page-link" tabIndex={-1}>
                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
