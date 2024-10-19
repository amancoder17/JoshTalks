import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";


type CompletedTaskProps = {
  completedTasks: any[];
  onDelete: (index: number) => void;
};

const CompletedTask: React.FC<CompletedTaskProps> = ({ completedTasks, onDelete }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2 text-blue-500">Completed Tasks</h2>
      {completedTasks.length === 0 ? (
        <p className="text-gray-500">No completed tasks yet.</p>
      ) : (
        <div className="flex flex-wrap">
          {completedTasks.map((task, index) => (
            <div
              key={index}
              className="p-4 mb-2 rounded shadow-md w-full bg-gray-200"
            >
              <h2 className="font-bold text-lg text-black">{task.title}</h2>
              <p className="text-gray-700">{task.description}</p>
              <span className="text-sm text-gray-500">Priority: {task.priority}</span>
              <div className="flex justify-end mt-2">
                <button 
                  className="text-red-600 hover:text-red-800"
                  onClick={() => onDelete(index)}
                >
                  <RiDeleteBinLine size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompletedTask;
