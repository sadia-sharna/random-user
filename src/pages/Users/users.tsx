import React from 'react'
import { Button, TextInput } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

export default function Users() {
  return (
    <>
      <div className="title mt-3">User List</div>
      <div className="d-flex justify-content-between mt-3">
        <div className="col-5">
          <TextInput
            type="text"
            className="form-control"
            placeholder="Search by name.."
            value=""

          >
            <Button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <FontAwesomeIcon icon={Icons.faSearch} />
            </Button>
          </TextInput>
        </div>
        <div className="col-4">
          <label className='me-3'>Filter by:</label>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="inlineCheckbox1" value="option1" />
            <label className="form-check-label" >All</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" >Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="inlineCheckbox3" value="option3" />
            <label className="form-check-label" >Female </label>
          </div>
        </div>
        <div className="
        "><div className="form-check form-switch">

            <label className="form-check-label">Tile View </label>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
          </div></div>
      </div>
      <div className="table-view mt-3">
        <table className="table">
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
      <div className="tile-view mt-3">
        <div className="row row-cols-1 row-cols-md-5 g-4 search-result" >

          <div
            className="col"
            style={{ cursor: "pointer" }}
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
            style={{ cursor: "pointer" }}
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
    </>

  )
}
