/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
import React from "react";
import "../styles/Destinasi.css";
import data from "../data/umkm2.json";
import parse from "html-react-parser";
import { Col, Container, Row } from "react-bootstrap";
import Maps from "./MapsArticle";

const KontenUMKM = (props) => {
  const umkms = data.umkms;
  return (
    <Container>
      {" "}
      {umkms
        .filter((umkm) => umkm.id == props.umkmID)
        .map(
          (
            {
              city,
              intro1,
              title2,
              intro2,
              umkm,
              maps,
            } = filteredumkms,
            index
          ) => (
            <Row className="mt-5 mb-4" key={`destination-city-${index}`}>
              <Col lg="8">
                <p className="title"> {city} </p>{" "}
                <p className="konten-intro"> {intro1} </p>{" "}
                <p className="title2"> {title2} </p>{" "}
                <p className="konten-intro"> {parse(intro2)} </p>{" "}
                {umkm.map(
                  (
                    {
                      id,
                      name,
                      img_folder,
                      picture,
                      description,
                      open,
                      close,
                      ticketPrice,
                    } = filteredumkm,
                    index
                  ) => (
                    <div key={`destination-item-${index}`}>
                      <p className="nama-destinasi">
                        {" "}
                        {id}. {name}{" "}
                      </p>{" "}
                      <img
                        className="img-wisata"
                        alt=""
                        src={require(`../assets/images/other/${img_folder}/${picture}`)}
                      ></img>{" "}
                      <div className="description"> {parse(description)} </div>{" "}
                      
                    </div>
                  )
                )}{" "}
              </Col>{" "}
              <Col lg="4">
                <Maps maps={maps} />{" "}
              </Col>{" "}
            </Row>
          )
        )}{" "}
    </Container>
  );
};

export default KontenUMKM;