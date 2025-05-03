import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">About This Project</h1>
      <p className="text-lg">
        Welcome to <span className="font-semibold">"Funniest Quotes to Ever Grace the Internet!"</span> 😂
        This is a collection of the wittiest, weirdest, and most laugh-out-loud
        quotes that have taken the internet by storm.
      </p>
      <p className="mt-4">
        Whether it's a legendary tweet, an iconic meme, or a hilariously
        out-of-context statement, we've got it all.
      </p>
      <p className="mt-4 italic">
        "I am not arguing, I’m just explaining why I’m right." – Someone very wise
      </p>
      <p className="mt-6">Enjoy, laugh, and don’t take life too seriously! 😆</p>
      
      <div>
        <button onClick={() => navigate("/uglyshoes")}>Dummy</button>
        <button onClick={() => navigate("/DBdata")}>Database Data</button>
        <button onClick={() => navigate("/form")}>Add Shoe</button>
      </div>
    </div>
  );
};

export default About;