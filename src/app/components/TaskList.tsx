import React from 'react';
import { RiDeleteBinLine, RiEditLine, RiCheckboxCircleLine } from "react-icons/ri";

type Task = {
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
};

type TaskListProps = {
  tasks: any[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
  onToggleCompletion: (index: number) => void;
  isEditing: boolean;
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'bg-red-200';
    case 'Medium':
      return 'bg-yellow-200';
    case 'Low':
      return 'bg-green-200';
    default:
      return 'bg-gray-200';
  }
};

const sortByPriority = (tasks: Task[]) => {
  const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  return tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onEdit, onToggleCompletion, isEditing }) => {
  const sortedTasks = sortByPriority([...tasks]); 

  return (
    <div className="mt-4 overflow-y-auto max-h-[60vh] custom-scrollbar">
      {sortedTasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available.</p>
      ) : (
        <div className="flex flex-wrap">
          {sortedTasks.map((task, index) => (
            <div
              key={index}
              className={`p-4 mb-2 me-1 rounded shadow-md w-full ${getPriorityColor(task.priority)}`}
            >
              <h2 className="font-bold text-lg text-black">{task.title}</h2>
              <p className="text-gray-700">{task.description}</p>
              <span className="text-sm text-gray-500">Priority: {task.priority}</span>
              <div className="flex justify-between mt-2">
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => onEdit(index)}
                >
                  <RiEditLine size={20} />
                </button>
                <button
                  className={`text-green-600 hover:text-green-800 ${isEditing ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => !isEditing && onToggleCompletion(index)}
                  disabled={isEditing}
                >
                  <RiCheckboxCircleLine size={20} />
                </button>
                <button
                  className={`text-red-600 hover:text-red-800 ${isEditing ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => !isEditing && onDelete(index)}
                  disabled={isEditing}
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

export default TaskList;
