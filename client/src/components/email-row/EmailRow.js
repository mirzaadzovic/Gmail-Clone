import { Checkbox, IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import React from "react";
import "./EmailRow.css";
import { useNavigate } from "react-router-dom";

const EmailRow = ({ id, title, subject, description, time }) => {
  const navigate = useNavigate();
  return (
    <div className="emailRow" onClick={() => navigate("/mail")}>
      <div className="emailRow__options">
        <IconButton>
          <Checkbox className="btn-transparent" />
        </IconButton>
        <IconButton>
          <StarBorderOutlinedIcon className="btn-transparent" />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon className="btn-transparent" />
        </IconButton>
      </div>

      <div className="emailRow__title">{<h4>{title}</h4>}</div>

      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description"> - {description}</span>
        </h4>
      </div>

      <div className="emailRow__time">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default EmailRow;
