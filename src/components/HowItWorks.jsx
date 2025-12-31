import React from "react";

const HowItWorks = () => {
  return (
    <div>
      <section class="bg-base-300 text-white py-10 px-6 rounded-xl">
        <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-semibold mb-6">
              Built around how teams actually work
            </h2>

            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium">Create Projects</h3>
                <p class="text-gray-400 text-sm">
                  Spin up projects quickly and define workflows that fit your
                  process.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-medium">Organize Tasks</h3>
                <p class="text-gray-400 text-sm">
                  Assign, prioritize, and move tasks across visual boards.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-medium">Track Progress</h3>
                <p class="text-gray-400 text-sm">
                  Stay informed with real-time updates and clear project
                  insights.
                </p>
              </div>
            </div>
          </div>

          <div class="rounded-xl overflow-hidden border border-neutral-800 flex flex-col gap-2.5">
            <img
              src="https://i.ibb.co.com/3YhbJKRG/undraw-database-tables-yft5.png"
              alt="Cyro workflow preview"
              class="w-full h-full object-cover"
            />
            <img
              src="https://i.ibb.co.com/rfNTTTbt/undraw-news-editor-5nnl.png"
              alt="Cyro workflow preview"
              class="w-full h-full object-cover"
            />
            <img
              src="https://i.ibb.co.com/wNp3KXhx/undraw-all-the-data-ijgn.png"
              alt="Cyro workflow preview"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
