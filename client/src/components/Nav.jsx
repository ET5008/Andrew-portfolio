import { useState } from "react";

export default function Nav() {
  const [physicsHovered, setPhysicsHovered] = useState(false);
  return (
    <aside className="w-72 h-screen bg-slate-500 text-white fixed left-0 top-0">
      <nav className="flex flex-col p-4 space-y-4 text-left text-2xl">
        <a href="" className="p-4 rounded-md bg-slate-600">
          Home
        </a>
        <hr />

        <a
          href=""
          className={` transition duration-300 ease-in p-4 rounded-md bg-slate-600 ${
            physicsHovered ? "hidden" : ""
          }`}
          onMouseEnter={() => setPhysicsHovered(true)}
        >
          Physics
        </a>
        <div
          onMouseLeave={() => setPhysicsHovered(false)}
          className={`transition-[max-height_0.7s_ease-in-out,opacity_0.05s_ease-out] overflow-hidden flex-col bg-slate-700 rounded-md  ${
            physicsHovered ? "flex max-h-200" : "max-h-0 opacity-0"
          } `}
        >
          <a href="" className="p-4 rounded-md bg-slate-600">
            Physics
          </a>
          <div className="flex flex-col">
            <a href="" className="p-4 mx-4 rounded-lg mb-4 mt-6 bg-slate-400">
              Lab Work
            </a>
            <a href="" className="p-4 mx-4 rounded-lg mb-6 bg-slate-400">
              Activities
            </a>
          </div>
        </div>
        <a href="" className="p-4 rounded-md bg-slate-600">
          Photography
        </a>
      </nav>
    </aside>
  );
}
