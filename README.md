# To-Do List App (React + TypeScript)

A modern, user-friendly To-Do List application built with **React** and **TypeScript**. This project is designed to manage tasks effectively with advanced features like filtering, task completion tracking, and data persistence using `localStorage`.

---

## 🛠 Features

- **Add, edit, and delete tasks**: Easily manage your to-do items.
- **Mark tasks as completed**: Keep track of completed and pending tasks.
- **Filter tasks**: View tasks based on their status - All, Completed, or Pending.
- **Persist data**: Tasks are stored in the browser's `localStorage` to maintain state across sessions

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser at [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🧱 Project Structure

```
src/
├── components/
│   ├── TaskForm.tsx       # Form for adding tasks
│   ├── TaskList.tsx       # List displaying all tasks
│   ├── TaskFilter.tsx     # Filter controls for tasks
├── styles.css             # CSS for styling the app
├── types.ts               # Type definitions for Task
└── App.tsx                # Main App component
```

---

## 🌟 Usage

1. **Add a task**: Type a task description and click "Add Task."
2. **Complete/Uncomplete a task**: Click the "Complete" or "Uncomplete" button on any task.
3. **Delete a task**: Click the "Delete" button to remove a task.
4. **Filter tasks**: Use the filter buttons (All, Completed, Pending) to view specific task categories.

---

## 🤝 Contribution

Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request.

1. Fork the project.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize the text to align with your specific repository and personal preferences! 😊
