import { useEffect } from "react";
import { socket } from "./socket";

function App() {
  useEffect(() => {
    socket.emit("hello", { one: 1 });

    socket.on("bye", (data) => {
      alert("bye" + data.two);
    });

    return () => {
      socket.off("bye");
    };
  }, []);
  return (
    <>
      <main>
        <h1 className="font-black text-7xl">Hello</h1>
      </main>
    </>
  );
}

export default App;
