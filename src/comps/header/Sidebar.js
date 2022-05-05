import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { HouseSimple } from "phosphor-react";

const Sidebar = () => {
  return (
    <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right>
      <Link to="/rsvp">rsvp</Link>

      <Link to="lodging">lodging</Link>

      <Link to="schedule">schedule</Link>

      <Link to="weekend">weekend</Link>
      <Link to="/">
        <HouseSimple size={32} />
      </Link>
    </Menu>
  );
};

export default Sidebar;
