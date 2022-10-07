import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import CardInformation from "../../components/CardInformation/CardInformation";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPackById } from "../../redux/actions";




export default function InfoCard() {
  const packById = useSelector((state) => state.packById);
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(id);
  console.log(packById);
  
  useEffect(() => {
    dispatch(getPackById(id));

  }, [dispatch,id]);



  return (
    <div>
      <NavBar />
      <CardInformation />
      <Footer />
    </div>
  );
}
