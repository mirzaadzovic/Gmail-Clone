import React from "react";
import CheckBox from "@mui/material/Checkbox/";
import { IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreIcon from "@mui/icons-material/More";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import InboxIcon from "@mui/icons-material/Inbox";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import "./EmailList.css";
import Section from "../section/Section";
import EmailRow from "../email-row/EmailRow";
import { useSelector } from "react-redux";
import { selectEmailList } from "../../reducers/mailSlice";

const EmailList = () => {
  const emailList = useSelector(selectEmailList);
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <CheckBox className="btn-transparent" />
          <IconButton className="btn-transparent">
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton className="btn-transparent">
            <RedoIcon />
          </IconButton>
          <IconButton className="btn-transparent">
            <MoreIcon />
          </IconButton>
        </div>

        <div className="emailList__settingsRight">
          <IconButton className="btn-transparent">
            <ChevronLeftIcon />
          </IconButton>
          <IconButton className="btn-transparent">
            <ChevronRightIcon />
          </IconButton>
          <IconButton className="btn-transparent">
            <KeyboardHideIcon />
          </IconButton>
          <IconButton className="btn-transparent">
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section
          Icon={InboxIcon}
          title={"Primary"}
          color={"--red-color"}
          selected={true}
        />
        <Section
          Icon={PeopleIcon}
          title={"Social"}
          color={"--blue-color"}
          selected={false}
        />
        <Section
          Icon={LocalOfferIcon}
          title={"Promotions"}
          color={"--green-color"}
          selected={false}
        />
      </div>

      <div className="emailList__list">
        {emailList.map((email) => (
          <EmailRow
            key={email.id}
            id={email.id}
            title={email.title}
            subject={email.subject}
            description={email.description}
            time={email.time}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
