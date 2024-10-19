"use client";
import { useState } from "react";

type AddTaskProps = {
  onPress?: (task: { title: string; description: string; priority: string }) => void;
};

const AddTask: React.FC<AddTaskProps> = ({ onPress }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("High");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority((e.target.value));
  };

  const handleAddTask = () => {
    if (onPress) {
      onPress({ title, description, priority });
      setTitle("");
      setDescription("");
      setPriority("High");
    }
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter Task Title..."
          className="w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter Task Description..."
          className="w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          rows={3}
        />
      </div>

      <div className="flex items-center space-x-4">
        <label className="text-gray-700 font-medium">Priority:</label>
        <select
          value={priority}
          onChange={handlePriorityChange}
          className="p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 text-black bg-white"
        >
          <option value={"High"}>High</option>
          <option value={"Medium"}>Medium</option>
          <option value={"Low"}>Low</option>
        </select>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 w-full md:w-1/2 transition-colors"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddTask;
