export default function Hero() {
  return (
    <div className="bg-primary-100 sm:bg-transparent">
      <div className="bg-[url('/bg-hero.jpg')] aspect-auto bg-cover bg-center bg-no-repeat relative">
        <div className="max-w-7xl mx-auto min-h-[42rem] flex items-center px-4 xl:px-0">
          <div className="space-y-3">
            <h1 className="text-6xl font-semibold tracking-tight text-primary-600">
              ToDo List Application
            </h1>
            <p className="text-2xl font-semibold tracking-tight text-gray-700">
              Easy Management System!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
