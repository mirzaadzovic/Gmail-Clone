import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ Icon, title, number, selected }) => {
  const selectedClass = selected ? " sidebarOption--active" : "";
  return (
    <div className={`sidebarOption ${selectedClass}`}>
      <Icon className="icon" />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOption;
