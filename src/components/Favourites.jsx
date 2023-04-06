import { useEffect } from "react";
import { useSelector } from "react-redux";

const Favourites = ({ data }) => {
  const favourites = useSelector(state => state.favourites);

  useEffect(() => {}, [favourites]);

  return (
    <div>
      <h2>Aziende preferite</h2>
      {favourites.length === 0 ? (
        <p>Nessuna azienda preferita</p>
      ) : (
        <ul>
          {favourites.map(data, i => {
            return <li key={data.id}>{data.company_name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Favourites;
