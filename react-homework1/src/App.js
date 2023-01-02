import LifecycleFuncComponent from "./components/LifecycleFuncComponent";
import LifecycleClassComponent from "./components/LifecycleClassComponent";
import ToDos from "./components/ToDos"

function App() {
  return (
    <>
      <div className="title">React Homework</div>
      <LifecycleFuncComponent />
      <LifecycleClassComponent />
      <ToDos />
    </>
  );
}

export default App;
