import React, { useState } from "react";

function Notes(props) {
  return (
    <div className="grid-item4 notes-container">
      <ul className="notes">
        <li className="note">
          <p>
            Nam fringilla iaculis orci, vitae vehicula ante condimentum eget.
            Duis ornare varius sollicitudin. Duis finibus ipsum a pharetra
            venenatis.{" "}
          </p>
        </li>

        <li className="note">
          <p>Vivamus laoreet nibh vel magna sodales laoreet.</p>
        </li>

        <li className="note">
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Notes;
