import React from "react";
import "./index.scss";
import { AddForm } from "../../components/AddForm/index";
const Add = () => {
  return (
    <>
      <section id="add_page">
        <div className="add_container">
          <div className="add_content">
            <div className="add_title">
              <h3>Add Flower</h3>
            </div>
            <AddForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Add;
