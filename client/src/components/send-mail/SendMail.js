import React from "react";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import "./SendMail.css";
import { useDispatch, useSelector } from "react-redux";
import { addEmail, closeSendMessage } from "../../reducers/mailSlice";
import guid from "../../helpers/guid";

function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(guid(13));
    dispatch(
      addEmail({
        id: guid(13),
        title: "Mirza",
        subject: data.subject,
        description: data.message,
        time: new Date().getTime(),
      })
    );
    dispatch(closeSendMessage());
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">Required field</p>}
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && <p className="sendMail__error">Required field</p>}

        <input
          type="text"
          placeholder="Message..."
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {errors.message && <p className="sendMail__error">Required field</p>}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send Mail
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
