import TodoList from "./components/todo-list";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-20 text-center text-4xl font-black leading-9 tracking-tight text-gray-900">To Do List</h1>
      </div>
      <main className="flex min-h-full flex-col items-center justify-between px-20 py-20">
        <TodoList/>
      </main>
      <div className="mt-auto">
        <p className="mt-2 text-center">By Fragas</p>
      </div>
    </div>
  );
}
