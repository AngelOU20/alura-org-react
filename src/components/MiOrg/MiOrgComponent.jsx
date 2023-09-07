import "./MiOrg.css";
import Add from "/image/add.png";
import PropTypes from "prop-types";

export const MiOrgComponent = ({ cambiarMostrar }) => {
  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <img src={Add} alt="add" onClick={cambiarMostrar} />
    </section>
  );
};

MiOrgComponent.propTypes = {
  cambiarMostrar: PropTypes.func,
};
