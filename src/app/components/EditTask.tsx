import React, { useState } from 'react';

type Task = {
  title: string;
  description: string;
  priority: string;
};

type EditTaskProps = {
  task: Task;
  onSave: (updatedTask: Task) => void;
  onCancel: () => void;
};

const EditTask: React.FC<EditTaskProps> = ({ task, onSave, onCancel }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);

  const handleSubmit = () => {
    onSave({ title, description, priority });
  };

  return (
    <div className="p-4 bg-white rounded shadow-md mt-4">
      <h2 className="font-bold text-lg text-black">Edit Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="border p-2 w-full mb-2 text-black"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className="border p-2 w-full mb-2 text-black"
      />
      <label className="text-gray-700 font-medium me-2">Priority:</label>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 text-black bg-white"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <div className="flex justify-end">
        <button onClick={handleSubmit} className="bg-blue-600 text-white p-2 rounded mr-2">
          Save
        </button>
        <button onClick={onCancel} className="bg-gray-400 text-white p-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTask;
