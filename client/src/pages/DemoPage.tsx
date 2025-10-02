export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground">CareerToDo - Demo</h1>
          <p className="text-muted-foreground">Test the platform features</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6">
        <div className="bg-card rounded-lg p-6 border">
          <h2 className="text-xl font-semibold mb-4">Platform Demo</h2>
          <p className="text-muted-foreground">
            This is a demo version of CareerToDo. The full platform includes:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
            <li>Interactive job simulations</li>
            <li>Real-world business tools</li>
            <li>Career path tracking</li>
            <li>Progress analytics</li>
            <li>Professional certifications</li>
          </ul>
        </div>
      </div>
    </div>
  )
}