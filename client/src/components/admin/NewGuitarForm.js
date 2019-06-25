import React from "react";
import { Link } from "react-router-dom";
const NewGuitarForm = () => {
  return (
    <Link
      to={{
        pathname: "/guitars/edit/:id",
        state: { name: "", price: "", description: "", files: [] }
      }}
    >
      Add a new Listing
    </Link>
  );
};
export default NewGuitarForm;
