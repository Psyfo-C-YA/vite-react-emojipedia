import React from "react";
import '../emojipedia.css'

function Entry({emoji, name, description}) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={name}>
          {emoji}
        </span>
        <span>{name}</span>
      </dt>
      <dd>{description}</dd>
    </div>
  );
}

export default Entry;
