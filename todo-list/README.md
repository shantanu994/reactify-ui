# Todo Lis- **Add New Todos** – Create tasks with title and description
- **Toggle Completion** – Mark todos as complete/incomplete with visual feedback
- **Delete Todos** – Remove unwanted tasks
- **Todo Statistics** – View counters for total, completed, and pending todos
- **Modern UI** – Beautiful gradients, card effects, and hover animations
- **Responsive Design** – Optimized for desktop and mobile devices
- **Side-by-Side Layout** – Add todos and view list simultaneously
- **Lightweight** – Fast performance with minimal dependenciestify UI

A modern and attractive **Todo List app** built using **React** with beautiful gradients, animations, and responsive design. This application demonstrates essential task management features with an intuitive user interface.

**[Live Demo](https://shantanu994.github.io/reactify-ui/)**

---

## Features

-  **Add New Todos** – Create tasks with title and description
-  **Toggle Completion** – Mark todos as complete/incomplete with visual feedback
-  **Delete Todos** – Remove unwanted tasks
-  **Todo Statistics** – View counters for total, completed, and pending todos
-  **Modern UI** – Beautiful gradients, card effects, and hover animations
-  **Responsive Design** – Optimized for desktop and mobile devices
-  **Side-by-Side Layout** – Add todos and view list simultaneously
-  **Lightweight** – Fast performance with minimal dependencies

---

## Tech Stack

- **React** – Frontend library for building user interfaces
- **JavaScript (ES6+)** – Modern JavaScript features
- **CSS3** – Custom styling with gradients and animations
- **HTML5** – Semantic markup structure

---

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shantanu994/reactify-ui.git
   cd reactify-ui/todo-list
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the app

---

## Usage

### Adding a Todo
1. Fill in the "Todo Title" field
2. Add a description in the "Todo Description" field
3. Click the **"Add"** button
4. Your todo will appear in the list on the right

### Managing Todos
- **Complete a Todo:** Click the "Complete" button to mark it as done
- **Revert Completion:** Click "Mark Incomplete" to undo completion
- **Delete a Todo:** Click the red "Delete" button to remove it
- **View Statistics:** Check the counter cards at the top for todo stats

---

## Project Structure

```
todo-list/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── MyComponents/
│   │   ├── AddTodo.js          # Add new todo form
│   │   ├── CounterCards.js     # Statistics display
│   │   ├── Footer.js           # App footer
│   │   ├── Header.js           # App header
│   │   ├── TodoItem.js         # Individual todo component
│   │   └── Todos.js            # Todo list container
│   ├── App.css                 # Main stylesheet
│   ├── App.js                  # Main app component
│   ├── index.css               # Global styles
│   └── index.js                # App entry point
├── package.json
└── README.md
```
---

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```
---

### Adding New Features
1. Create new components in `src/MyComponents/`
2. Import and use them in `App.js`
3. Add corresponding styles in `App.css`

---

**If you found this project helpful, please give it a star!**

   