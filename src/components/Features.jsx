import React from "react";

const Features = () => {
  return (
    <div>
      <section class="bg-base-300 rounded-xl text-white py-10 min-h-full px-5">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-5">
            <h2 class="text-3xl font-semibold tracking-tight">
              Everything your team needs to move faster
            </h2>
            <p class="mt-4 text-gray-500 max-w-2xl mx-auto">
              Cyro combines clarity, control, and collaboration into a focused
              project management experience.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-200">
            <div class="p-8 border-b sm:border-r border-gray-200 hover:bg-black hover:text-white transition">
              <h3 class="text-lg font-medium mb-2">Visual Boards</h3>
              <p class="text-sm text-gray-500 group-hover:text-gray-300">
                Organize work with intuitive, column-based boards inspired by
                agile workflows.
              </p>
            </div>

            <div class="p-8 border-b lg:border-r border-gray-200 hover:bg-black hover:text-white transition">
              <h3 class="text-lg font-medium mb-2">Task Management</h3>
              <p class="text-sm text-gray-500">
                Create, assign, prioritize, and track tasks with complete
                visibility.
              </p>
            </div>

            <div class="p-8 border-b border-gray-200 hover:bg-black hover:text-white transition">
              <h3 class="text-lg font-medium mb-2">Custom Workflows</h3>
              <p class="text-sm text-gray-500">
                Adapt Cyro to your process with flexible task states and flows.
              </p>
            </div>

            <div class="p-8 border-b sm:border-r border-gray-200 hover:bg-black hover:text-white transition">
              <h3 class="text-lg font-medium mb-2">Role-Based Access</h3>
              <p class="text-sm text-gray-500">
                Tailored dashboards for admins, managers, and team members.
              </p>
            </div>

            <div class="p-8 border-b lg:border-r border-gray-200 hover:bg-black hover:text-white transition">
              <h3 class="text-lg font-medium mb-2">Real-Time Updates</h3>
              <p class="text-sm text-gray-500">
                Stay in sync as changes happen instantly across the board.
              </p>
            </div>

            <div class="p-8 hover:bg-black hover:text-white transition">
              <h3 class="text-lg font-medium mb-2">Clean Interface</h3>
              <p class="text-sm text-gray-500">
                A distraction-free design focused on clarity and speed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
