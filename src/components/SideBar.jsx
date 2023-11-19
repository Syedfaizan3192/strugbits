import React from "react";
import assets from "../assets/images/Images";
import { Col, Row } from "react-bootstrap";

const SideBar = () => {
    const ListingSidebar = [
        {
            id: 1,
            icon: assets.iconuser,
            name: 'CUSTOMERS'
        },
    ]
    return (
        <>
            <div className="sidebar">
                <div className="logo">
                    <img src={assets.logo1} />
                </div>
                {ListingSidebar.map((data) => {
                    return (
                        <>
                            <div className="cat-listing" key={data?.id}>
                                <ul>
                                    <li>
                                        <div className="cat-listing-row">
                                            <img src={data?.icon} />
                                            <div className="name">
                                                {data?.name}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </>
                    )
                })}
            </div>
        </>
    )
}
export default SideBar