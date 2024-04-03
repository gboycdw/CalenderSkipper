import Timer from "@components/Timer/Timer";

export default function App() {
  // const env = process.env.VITE_MY_KEY;
  return (
    <div className="text-gomao w-full h-full bg-green-50" style={{ padding: 15 }}>
      <Timer />
    </div>
  );
}
