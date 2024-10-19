"use client";
import React, { useState, useEffect } from 'react';
import SearchBar from './subcomponents/SearchBar';
import AddTask from './subcomponents/AddTask';
import { RiMenuSearchLine, RiCloseLine } from "react-icons/ri";
import TaskList from './subcomponents/TaskList';
import EditTask from './subcomponents/EditTask';
import CompletedTask from './subcomponents/CompletedTask';
import Modal from './subcomponents/Modal';

type Task = {
  title: string;
  description: string;
  priority: string;
  completed: boolean;
};

const TaskApp = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const [editingTaskIndex, setEditingTaskIndex] = useState<number | null>(null);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setCompletedTasks(tasks.filter(task => task.completed));
    setFilteredTasks(tasks); 
  }, [tasks]);

  const handleAddTask = (newTask: { title: string; description: string; priority: string }) => {
    const taskObj: Task = { ...newTask, completed: false };
    setTasks(prevTasks => [...prevTasks, taskObj]);
  };

  const handleDeleteTask = (index: number) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  };

  const handleEditTask = (index: number) => {
    setEditingTaskIndex(index);
    setIsModalOpen(true);
  };

  const toggleTaskCompletion = (index: number) => {
    setTasks(prevTasks =>
      prevTasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task)
    );
  };

  const handleDeleteCompletedTask = (index: number) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => !(tasks[i].completed && i === index)));
  };

  const toggleSearchBar = () => {
    setShowSearch(prevState => !prevState);
  };

  const handleSaveEditedTask = (updatedTask: Task) => {
    if (editingTaskIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingTaskIndex] = updatedTask;
      setTasks(updatedTasks);
      setEditingTaskIndex(null);
      setIsModalOpen(false); 
    }
  };

  const closeModal =()=>{
    setIsModalOpen(false);
    setEditingTaskIndex(null)
  }

  const handleSearch = (results: Task[]) => {
    setFilteredTasks(results); 
  };

  const isEditing = editingTaskIndex !== null;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl p-8 bg-white rounded-lg shadow-md flex flex-col justify-center h-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-center text-black text-2xl sm:text-3xl">Task Manager</h1>
          <div className="flex justify-end">
            {showSearch ? (
              <RiCloseLine size={30} color='#000000' onClick={toggleSearchBar} className="cursor-pointer mb-2" />
            ) : (
              <RiMenuSearchLine size={30} color='#000000' onClick={toggleSearchBar} className="cursor-pointer mb-2" />
            )}
          </div>
        </div>

        {showSearch && <SearchBar data={tasks} onSearch={handleSearch} />}

         (
          <>
            <AddTask onPress={handleAddTask} />
            <TaskList
              tasks={filteredTasks.filter(task => !task.completed)}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
              onToggleCompletion={toggleTaskCompletion}
              isEditing={isEditing}
            />
{/* 
            {isEditing && editingTaskIndex !== null && (
              <EditTask
                task={tasks[editingTaskIndex]}
                onSave={()=>handleSaveEditedTask}
                onCancel={() => setEditingTaskIndex(null)}
              />
            )} */}

            {completedTasks.length !== 0 && (
              <CompletedTask completedTasks={completedTasks} onDelete={handleDeleteCompletedTask} />
            )}
              <Modal isOpen={isModalOpen} onClose={closeModal}>
          {isEditing && editingTaskIndex !== null && (
            <EditTask
              task={tasks[editingTaskIndex]}
              onSave={()=>handleSaveEditedTask}
              onCancel={() => {
                setEditingTaskIndex(null);
                setIsModalOpen(false); // Close modal on cancel
              }}
            />
          )}
        </Modal>
          </>
        )
      </div>
    </div>
  );
};


export default TaskApp;
