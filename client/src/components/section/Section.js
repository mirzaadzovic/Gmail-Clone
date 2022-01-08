import React from "react";
import "./Section.css";

const Section = ({ Icon, title, color, selected }) => {
  const active = selected ? "section--active" : "";
  const colorTheme = selected
    ? {
        color: `var(${color})`,
        borderBottom: `3px solid var(${color})`,
      }
    : {};
  return (
    <div style={colorTheme} className={`section ${active}`}>
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

export default Section;
