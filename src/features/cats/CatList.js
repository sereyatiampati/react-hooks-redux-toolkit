import React from "react";

function CatList({ catPics = [] }) {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {catPics.map((pic) => (
        <div class="card" style={{width: "18rem", margin: '2rem'}} key={pic.id}>
          <img src={pic.url} class="card-img-top" alt="..."/>
      </div>
      ))}
    </div>
  );
}

export default CatList;
