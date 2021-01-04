import React from 'react';
import { Fragment } from 'react';
import _ from "lodash";

const Pages = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    console.log(currentPage);
    //const { itemsCount, pageSize,onPageChange } = props;
    const pagination = Math.ceil(itemsCount / pageSize);
   // console.log(pagination);
    if (pagination === 1) return null;
    const pages = _.range(1,pagination + 1)

    return (
        <Fragment>
            <ul className="pagination">
                {pages.map((page) => (
                    <li className={page === currentPage ? "page-item active" : "page-item"} aria-current="page" key={page}>
                        <a className="page-link" onClick={()=>onPageChange(page)}>{page}</a>
                    </li>
                ))

                }
    
                    </ul>
        
        </Fragment>
    );
}

export default Pages;
