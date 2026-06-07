import React from "react";
import BoxItems from "./box-items";
import FormArea from "./form-area";
import TopBar from "./top-bar";

const ContactArea = () => {
  return (
    <React.Fragment>
      <TopBar
        title="GET TO KNOW US"
        subtitle="Smarter Shopping Starts Here"
      />
      <BoxItems/>
      <FormArea/>
    </React.Fragment>
  );
};

export default ContactArea;
