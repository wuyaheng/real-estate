import React from "react";

function SearchForm({ handleChange }) {
    return (
        <form className="d-flex justify-content-center">
        <div className="form-row align-items-center">
            <div className="col-auto">
            <input type="text" className="form-control" id="inlineFormInput" placeholder="Min Price" name="sel_min" onChange={handleChange}/>
            </div>
            <div className="col-auto">
                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Max Price" name="sel_max" onChange={handleChange}/>
            </div>
            <div className="col-auto">
            <button type="submit" className="btn">Done</button>
            </div>
        </div>
        </form>
    )
}

export default SearchForm; 