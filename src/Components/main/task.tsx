'use client';

import React, { useState } from "react"

interface Task{
    title: String,
    tag: String,
    date: String
}

const tasks: Task[] = [
    { title: 'Homework', tag: 'Complete', date: 'Today' },

]
export default function Task(){
    const [checked, setChecked] = useState<boolean>(false);

    const handleCheck = () => {
        
    }
    return(
      <div className="flex flex-col space-y-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded shadow-sm hover:shadow-md transition"
          >
            <div>
            <input type="checkbox" />
              <h2 className="text-base font-medium">{task.title}</h2>
              <p className="text-sm text-gray-500">
                {task.tag} - {task.date}
              </p>
            </div>
            <div className="text-gray-400 hover:text-blue-500 cursor-pointer text-xl">
              ☆
            </div>
          </div>
        ))}
      </div>
    )
}