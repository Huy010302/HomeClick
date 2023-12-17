import React from 'react'

export default function FilterProduct() {
    return (
        <>
            <div className="container filter-product">
                <div className="row" id="filter">
                    <form className= "form">
                        <div className="form-group">
                            <select data-filter="make" className="filter-make filter form-control">
                                <option value>Loại phòng</option>
                                <option value>Show All</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select data-filter="model" className="filter-model filter form-control">
                                <option value>Danh mục</option>
                                <option value>Show All</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select data-filter="type" className="filter-type filter form-control">
                                <option value>Giá</option>
                                <option value>Show All</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select data-filter="price" className="filter-price filter form-control">
                                <option value>Tất cả bộ lọc</option>
                                <option value>Show All</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select data-filter="price" className="filter-price filter form-control">
                                <option value>Sắp xếp</option>
                                <option value>Show All</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className="row" id="products">
                </div>
            </div>

        </>
    )
}