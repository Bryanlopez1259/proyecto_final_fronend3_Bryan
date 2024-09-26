import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context.jsx";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {state.favorites.length > 0 ? (
          state.favorites.map((dentist) => (
            <Card key={dentist.id} {...dentist} />
          ))
        ) : (
            <h2 className="fav">Sin Favoritos</h2>
        )}
      </div>
    </main>
  );
};

export default Favs;
