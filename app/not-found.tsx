export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-4">404 — Page Not Found</h1>
        <p className="text-muted-foreground">We couldn't find the package you were looking for. Please check the URL and try again.</p>
      </div>
    </div>
  );
}
