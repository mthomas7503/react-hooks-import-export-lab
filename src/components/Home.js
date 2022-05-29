import React from "react";
import { username, city } from '/Users/michaelthomas/Development/code/phase-2/react-hooks-import-export-lab/src/data/user'

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home