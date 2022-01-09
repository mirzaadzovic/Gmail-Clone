import React from "react";
import "./Mail.css";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PrintIcon from "@mui/icons-material/Print";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>

      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>Subject</h2>
          <LabelImportantIcon className="mail__important btn-transparent" />
          <p>Title</p>
          <p className="mail__time">13:12 AM</p>
        </div>

        <div className="mail__message">
          <p>Ovo je poruka</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
