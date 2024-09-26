import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { state } = useContext(ContextGlobal);

  const params = useParams();

  const dentist = state.data.find(
    (dentist) => dentist.id === parseInt(params.id)
  );
  const navigate = useNavigate();

  return (
    <section className="container-main">
      <div className="container">
        <h1>Detail Dentist {dentist?.id}</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist?.name}</td>
              <td>{dentist?.email}</td>
              <td>{dentist?.phone}</td>
              <td>{dentist?.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Detail;
