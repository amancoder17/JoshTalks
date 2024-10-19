# Task Management App

This is a simple **Task Management App** built with **React** and **Next.js**. It allows users to manage their tasks by adding, editing, deleting, and marking tasks as completed. Tasks are dynamically sorted by priority, and completed tasks are displayed at the bottom of the list. This app also supports server-side rendering for initial task loading and is styled using basic CSS for a responsive design.

## Features

1. **Add, Edit, Delete, and Mark Tasks as Completed**
   - Add a task with a title, description, and priority (high, medium, low).
   - Edit an existing task.
   - Mark a task as completed or pending.
   - Delete tasks from the list.

2. **Task Sorting by Priority**
   - Tasks are sorted dynamically based on priority (high, medium, low).
   - High priority tasks are displayed at the top, followed by medium and low priority.

3. **Server-Side Rendering (SSR) with Next.js**
   - The initial list of tasks is loaded using Next.js’ `getServerSideProps` function.

4. **Responsive Design**
   - Basic responsive UI to ensure the app looks good on both desktop and mobile devices.
   - Tasks are color-coded by priority (red for high, yellow for medium, green for low).
   - Completed tasks are displayed at the bottom.

5. **Search Functionality**
   - A search bar allows filtering tasks by title or description.
   - Tasks can be searched while dynamically updating the displayed task list.

6. **Modal for Editing Tasks**
   - Editing a task opens a modal for users to make changes and save them.

7. **Bonus Features**
   - **Local Storage**: Persist tasks between page reloads using local storage.
   - **Search Feature**: Filter tasks by title or description using a search bar.

## Technologies Used

- **React**: For building the UI components and managing state.
- **Next.js**: For server-side rendering and managing the app's routes.
- **TypeScript**: For type safety and better code maintainability.
- **Tailwind CSS**: For styling the app and making it responsive.
- **React Icons**: For intuitive icons in the search and other UI elements.

## Installation

1. **Clone the repository**:
   ```bash
   https://github.com/amancoder17/JoshTalks.git

2. Navigate to the project directory:

    ```bash
    cd JoshTalks
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## How It Works

### Adding a Task

- Use the input fields in the "Add Task" form to provide the task’s title, description, and priority.
- Click the **Add** button to add the task to the list.

### Editing a Task

- Click on the **Edit** icon next to any task to open the modal with the task details.
- Make the necessary changes and click **Save** to update the task.

### Deleting a Task

- Click the **Delete** icon next to any task to remove it from the list.

### Marking a Task as Completed

- Click the checkbox next to any task to toggle between completed and pending states.

### Searching for Tasks

- Click the **Search** icon to open the search bar.
- Type in the task title or description to filter tasks.


### Sorting Description
- In this TaskList component, tasks are sorted by priority using the sortByPriority function. Here's how it works:

- Task Priority Mapping: The function creates an object, priorityOrder, which maps each priority level to a numeric value:
   - "High" priority is assigned a value of 1.
   - "Medium" is assigned 2.
   - "Low" is assigned 3.

- Sorting Logic: The function sorts the tasks array using JavaScript's sort() method. It compares two tasks (a and b) at a time, using the numeric values from priorityOrder to determine the order:

- If task a has a higher priority (i.e., a lower numeric value in priorityOrder), it will come before task b.
- This way, tasks with "High" priority will appear first, followed by "Medium", and finally "Low".
- The function returns a sorted array of tasks, ensuring that higher-priority tasks are listed before lower-priority ones in the rendered output.

## Directory Structure
    JoshTalks/ 
    │ ├── .next/ # Next.js build directory 
      ├── node_modules/ # Node.js packages 
      ├── src/ 
      │ ├── app/ 
      │ │ ├── components/ 
      │ │ │ ├── subcomponents/ 
      │ │ │ │ ├── AddTask.tsx 
      │ │ │ │ ├── CompletedTask.tsx 
      │ │ │ │ ├── EditTask.tsx 
      │ │ │ │ ├── Modal.tsx 
      │ │ │ │ ├── SearchBar.tsx 
      │ │ │ │ └── TaskList.tsx 
      │ │ │ ├── TaskApp.tsx 
      │ │ ├── fonts/ # Custom fonts 
      │ │ ├── favicon.ico 
      │ │ ├── globals.css # Global styles 
      │ │ ├── layout.tsx # Layout component 
      │ │ └── page.tsx # Main page 
      ├── .eslintrc.json # ESLint configuration 
      ├── .gitignore # Git ignore rules 
      ├── next-env.d.ts # Next.js types 
      ├── next.config.mjs # Next.js configuration 
      ├── package-lock.json 
      ├── package.json # Project dependencies 
      ├── postcss.config.mjs # PostCSS configuration 
      ├── README.md 
      ├── tailwind.config.ts # Tailwind CSS configuration 
      └── tsconfig.json # TypeScript configuration


