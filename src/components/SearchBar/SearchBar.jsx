import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPais } from "../../redux/actions";

export default function SearchBar() {
  // SEARCH FUNCTION
  const dispatch = useDispatch();
  const [pais, setName] = useState("");
  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchPais(pais));
    document.getElementById("valueName").value = "";
  }

  return (
    <div className="flex w-72 h-14 justify-center align-center mt-12 mb-10">
      <form className="flex w-full h-14">
        <input
          id="valueName"
          className="inputsearch"
          onChange={(e) => handleInputChange(e)}
          type="text"
          placeholder="Buscar.."
        />
        <button
          className="w-12 h-14 bg-white grid place-items-center rounded-r-sm cursor-pointer"
          type={"submit"}
          onClick={(e) => handleSubmit(e)}
        >
          Buscar
        </button>
      </form>
    </div>
  );
}
