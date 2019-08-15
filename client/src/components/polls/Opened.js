import React, { Fragment } from "react";

const Opened = () => {
  return (
    <Fragment>
      {/* <!-- BEGIN ENQUETES EM ABERTO --> */}
      <div className="mb-3 p-3 bg-white rounded shadow-sm">
        {/* <!-- BEGIN TABLE --> */}
        <table className="table text-secondary table-hover table-borderless table-striped  text-sm">
          <thead>
            <tr>
              <th scope="col" width="5%" />
              <th scope="col" width="30%" />
              <th scope="col" width="20%">
                Início
              </th>
              <th scope="col" width="20%">
                Término
              </th>
              <th scope="col" width="15%">
                Votos
              </th>
              <th scope="col" width="10%" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Qual o melhor pão do mundo?</td>
              <td>
                <span className="badge badge-secondary">09/08/2019</span>
              </td>
              <td>
                <span className="badge badge-warning">10/08/2019 </span>
              </td>
              <td>125</td>
              <td>
                <a href="enquete.html" className="badge badge-primary">
                  Ver
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <!-- END TABLE --> */}
      </div>
      {/* <!-- END ENQUETES EM ABERTO --> */}
    </Fragment>
  );
};

export default Opened;
