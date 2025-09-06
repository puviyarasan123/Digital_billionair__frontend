import Header from "../Components/Header";
import Main from "../Components/Main_content";

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Section */}
      <div className="w-full flex-1">
        <Main />
      </div>
    </div>
  );
}
