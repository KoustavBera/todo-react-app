import React, { useState } from "react";

const Hero = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  //check if enter key is pressed
  const ifPressed = (event) => {
    if (event.key == "Enter") {
      addTask();
    }
  };
  // Add Task - it takes the newTask and checks if it is empty...if not then adds it to setTasks
  const addTask = () => {
    if (newTask.trim() === "") return; // Avoid adding empty tasks
    const currentTime = new Date().toLocaleTimeString();
    setTasks([
      ...tasks,
      { text: newTask, completed: false, time: currentTime },
    ]); // Add new task with time
    setNewTask(""); // Clear input field
  };

  // Mark Task as Completed
  const markAsComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Delete Task
  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  return (
    <div className="absolute inset-0 h-full w-full bg-violet-500 bg-[linear-gradient(to_right,#7e57c2_1px,transparent_1px),linear-gradient(to_bottom,#7e57c2_1px,transparent_1px)] bg-[size:24px_24px] custom-blur-corners">
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-full max-h-16 lg:w-1/2 lg:h-auto ">
          <img
            className="object-cover my-12 rotate-3"
            src="https://img.freepik.com/free-photo/3d-mountain-landscape-against-sunset-sky-with-low-clouds_1048-12442.jpg?t=st=1728302375~exp=1728305975~hmac=a7dea5db78ccb54a04803bc53126d00051d2bf82f49ac92fb8d5e9facfe25abe&w=826"
            alt="Winding mountain road"
          />
        </div>
        <div className="max-w-lg rounded bg-indigo-950 md:max-w-2xl md:z-10 md:shadow-2xl  md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 shadow-md shadow-purple-500 ">
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-yellow-300 lg:text-4xl  ">
              Todo
            </h2>
            {/* Input for new task */}
            <div className="w-full min-w-[200px] flex items-center">
              <input
                type="text"
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
                className="w-full bg-transparent placeholder:text-slate-300 text-purple-300 text-sm border border-white rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 "
                placeholder="Type here..."
                onKeyDown={ifPressed}
              />
              <button
                onClick={addTask}
                className="bg-violet-400 hover:bg-violet-300 hover:border-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 rounded mx-3"
                style={{
                  fontSize: "0.75rem",
                  height: "2.4rem",
                  width: "5rem",
                  textAlign: "center",
                }}
              >
                Add
              </button>
            </div>
            {/* List of tasks */}
            <div
              className="space-y-1 relative max-h-40 overflow-hidden "
              style={{
                maskImage:
                  tasks.length > 3
                    ? "linear-gradient(to bottom, black 30%, transparent)"
                    : "none",
              }}
            >
              {tasks.length > 0 ? (
                tasks.map((task, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b-2 border-teal-300"
                  >
                    <div>
                      <span
                        className={`text-lg ${
                          task.completed
                            ? "line-through text-green-400"
                            : "text-slate-200"
                        }`}
                      >
                        {task.text}
                      </span>
                      <br />
                      <small className="text-blue-400">{task.time}</small>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => markAsComplete(index)}
                        className={`bg-indigo-950 ${
                          task.completed
                            ? "hover:bg-blue-400"
                            : "hover:bg-green-400"
                        } text-green-300 font-semibold rounded shadow px-4 py-1`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          height: "2rem",
                          width: "4rem",
                          textAlign: "center",
                        }}
                      >
                        <img
                          src={
                            task.completed
                              ? "/images/restart.png"
                              : "/images/done.png"
                          }
                          alt={task.completed ? "Restart" : "Completed"}
                          style={{ height: "1.1rem", width: "1.1rem" }}
                        />
                      </button>
                      <button
                        onClick={() => deleteTask(index)}
                        className="bg-indigo-950 hover:bg-pink-500 text-gray-800 font-semibold  rounded shadow px-4 py-1"
                        style={{
                          fontSize: "0.75rem",
                          height: "2rem",
                          width: "4rem",
                          textAlign: "center",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="/images/delete.png"
                          alt="delete"
                          style={{ height: "1.1rem", width: "1.1rem" }}
                        />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No tasks available. Add one!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
