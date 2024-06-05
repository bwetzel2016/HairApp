import React from "react";
import Hairstudio from './Photos/Hairstudio.avif';
import './home.css';

export function Home() {
  return (
    <div>
      <div className="card">
        <h1>Christine's Cut's</h1>
        <img src={Hairstudio} className="card-img-top large-image" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Location:</h5>
          <p className="card-text">1923 West Malbory Lane, Florida</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        <div className="card">
          <h2 className="card-title">Prices:</h2>
          <ol class="list-group">
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
</ol>
        </div>
      </div>
    </div>
  );
}