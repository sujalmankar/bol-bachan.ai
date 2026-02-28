import { Header } from "./components/Header";
import { MaintenanceMessage } from "./components/MaintenanceMessage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <MaintenanceMessage />
      </main>
      <Footer />
    </div>
  );
}

export default App;