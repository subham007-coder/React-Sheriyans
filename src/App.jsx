import React, { useState } from "react";
import "./index.css";
import Card from "./Components/Card";

function App() {

  const people = [
    {
      name: "Amit Sharma",
      age: 28,
      profession: "Software Engineer",
      city: "Bangalore",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Neha Gupta",
      age: 32,
      profession: "Graphic Designer",
      city: "Mumbai",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Rajiv Singh",
      age: 45,
      profession: "Project Manager",
      city: "Delhi",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Priya Nair",
      age: 24,
      profession: "Marketing Specialist",
      city: "Kochi",
      profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Karan Desai",
      age: 36,
      profession: "Data Analyst",
      city: "Pune",
      profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];

  const [plus, setPlus] = useState(1);
  const [minus, setMinus] = useState(1);

  const [username, setUsername] = useState("");

  return (
    <div className="bg-zinc-900 w-full max-h-full p-5">
      <div className="main flex gap-2 mb-5">
        <div className="card w-52 h-52 bg-slate-800 rounded flex flex-col items-center justify-center tracking-tighter">
          <h1 className="text-2xl text-white">Increment {plus}</h1>
          <button
            onClick={() => {
              setPlus(plus + 1);
            }}
            className="p-2 my-2 bg-blue-700 rounded text-white"
          >
            Increment Me
          </button>
        </div>

        <div className="card w-52 h-52 bg-slate-800 rounded flex flex-col items-center justify-center tracking-tighter">
          <h1 className="text-2xl text-white">Decrement {minus}</h1>
          <button
            onClick={() => {
              setMinus(minus - 1);
            }}
            className="p-2 my-2 bg-blue-700 rounded text-white"
          >
            Decrement Me
          </button>
        </div>

        <div className="card w-52 h-52 bg-slate-800 rounded flex flex-col items-center justify-center tracking-tighter">
          <h1 className="text-2xl text-white">Total {plus + minus}</h1>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(username);
          setUsername("");
        }}
        className="flex flex-col gap-4 w-52"
      >
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          className="p-2 rounded outline-none"
          placeholder="Enter Your Name"
        />
        <p className="text-blue-500 font-serif text-xl">{username}</p>
        <button className="p-2 bg-green-800 text-white rounded">Submit</button>
      </form>

      <div className="main flex gap-2 mt-5">
        {people.map(function (e, index) {
          return <Card key={index} photo={e.profileImage} name={e.name} age={e.age} city={e.city} profession={e.profession} />;
        })}
      </div>

    </div>
  );
}

export default App;