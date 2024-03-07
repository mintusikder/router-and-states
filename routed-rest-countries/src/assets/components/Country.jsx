import { Link } from "react-router-dom";

const Country = ({ country }) => {
  
  const { name } = country;
  return (
    <div>
      <h3>{name.common}</h3>
      <Link to={`/country/${country.cca3}`}>Details</Link>
    </div>
  );
};

export default Country;
