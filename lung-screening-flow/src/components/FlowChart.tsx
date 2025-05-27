import { useAppDispatch } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1",
    data: { label: "Age\n50-80" },
    position: { x: 0, y: 0 },
    type: "input",
  },
  { id: "2", data: { label: "Current smoker" }, position: { x: 150, y: 100 } },
  { id: "3", data: { label: "Past smoker" }, position: { x: -150, y: 100 } },
  {
    id: "4",
    data: { label: "Quit less\nthan/equal to 15\nyears ago" },
    position: { x: -200, y: 200 },
  },
  {
    id: "5",
    data: { label: "Quit more than\n15 years ago" },
    position: { x: -50, y: 200 },
  },
  {
    id: "6",
    data: {
      label:
        "How many years have you\nbeen smoking?\nHow many packs/day on avg?",
    },
    position: { x: 100, y: 250 },
    style: { width: 300 },
  },
  { id: "7", data: { label: "20 or more" }, position: { x: 0, y: 400 } },
  { id: "8", data: { label: "Less than 20" }, position: { x: 250, y: 400 } },
  {
    id: "9",
    data: { label: "Refer to screening" },
    position: { x: 0, y: 500 },
  },
  {
    id: "10",
    data: { label: "PLCO:\nadditional screen" },
    position: { x: 250, y: 500 },
  },
  {
    id: "11",
    data: { label: "Direct to page 4B:\nRescreen in 1 year" },
    position: { x: 150, y: 600 },
    style: { width: 220 },
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e3-5", source: "3", target: "5" },
  { id: "e4-6", source: "4", target: "6" },
  { id: "e2-6", source: "2", target: "6" },
  { id: "e6-7", source: "6", target: "7" },
  { id: "e6-8", source: "6", target: "8" },
  { id: "e7-9", source: "7", target: "9" },
  { id: "e8-10", source: "8", target: "10" },
  { id: "e10-11", source: "10", target: "11" },
  { id: "e5-10", source: "5", target: "10" },
];

export default function FlowChart() {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full h-[80vh]">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
      <button
        className="w-full bg-[#043a66] cursor-pointer text-white font-semibold text-sm px-4 py-3 mt-8 rounded-[12px]"
        onClick={() => dispatch(setPageType("Page-0"))}
      >
        Next
      </button>
    </div>
  );
}
