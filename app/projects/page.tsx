const projects = [
  {
    name: "Barangay Management System",
    description: "A system for managing barangay residents and records.",
  },
  {
    name: "RevZone",
    description: "A motorcycle product management application.",
  },
  {
    name: "EventHub",
    description: "A website for viewing and registering for events.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        My Projects
      </h1>

      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.name} className="border rounded-lg p-4">
            <h2 className="font-bold">
              {project.name}
            </h2>

            <p className="mt-2">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
