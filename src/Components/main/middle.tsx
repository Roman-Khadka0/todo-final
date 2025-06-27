import Button from "./button";
import Task from "./task";

export default function Middle() {
  return (
    <div className="flex flex-col h-screen px-9 py-8 bg-gray-50 flex-1">
      {/* Header with title and button */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">My Day</h1>
          <p className="text-sm text-gray-500">December 2022</p>
        </div>
        <Button />
      </div>

      {/* Tasks below */}
      <div className="space-y-4">
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
}
