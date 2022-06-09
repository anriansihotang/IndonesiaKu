import React from "react";
import "../styles/Article.css";
import "../styles/responsiveArticle.css";
import ItemDestination from "../components/itemArticle";
import HeaderArticle from "../components/headerArticle";
import Maps from "../components/mapsArticle";

class PageArticle extends React.Component {render(){
  return (
    <body >
      <HeaderArticle />
      <main>
        <article>
          <ItemDestination />
        </article>
        <div id="map-canvas">
          <Maps />
        </div>
      </main>
    </body>
  );
}}

export default PageArticle;
