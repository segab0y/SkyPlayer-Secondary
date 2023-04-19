import BarContent from "./components/BarContent";
import CenterBlock from "./components/CenterBlock";
import LeftMenuItems from "./components/LeftMenu";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  return (
    <div className="wrapper m-0 p-0 box-border w-full min-h-full overflow-hidden bg-[#383838] text-[#FFFFFF]">
      <div className="container flex max-w-[1920px] h-screen m-auto relative bg-[#181818]">
        <div className="main flex-auto flex flex-wrap justify-between">
          <LeftMenuItems />
          <CenterBlock />
          <SideBar />
        </div>
        <div className="bar absolute bottom-0 left-0 w-full bg-[#1c1c1c80]">
          <BarContent />
        </div>
        <footer className="footer" />
      </div>
    </div>
  );
}

export default App;
