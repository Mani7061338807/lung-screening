import { useAppDispatch } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";
import { useEffect, useState } from "react";

export default function Flowchart() {
  const dispatch = useAppDispatch();
  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isLandscape) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-[#043a66] font-bierstadt">
            Please rotate your device
          </h2>
          <p className="text-[#043a66] font-bierstadt">
            This flowchart works best in <strong>landscape</strong> mode.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-[450px]">
      <div className="relative w-[1000px]  h-[580px]">
        {/* Page Labels */}
        <div className="absolute top-[180px] left-[55px] text-xs text-gray-600">
          Page 1
        </div>
        <div className="absolute top-[60px] left-[385px] text-xs text-gray-600">
          Page 2
        </div>
        <div className="absolute top-[200px] left-[385px] text-xs text-gray-600">
          Page 1A
        </div>
        <div className="absolute top-[160px] left-[925px] text-xs text-gray-600">
          Page 3/3A
        </div>
        <div className="absolute top-[40px] left-[925px] text-xs text-gray-600">
          Page 4A
        </div>
        <div className="absolute top-[300px] left-[585px] text-xs text-gray-600">
          Page 3/3A
        </div>

        {/* Flowchart Boxes */}

        {/* Age Box */}
        <div className="absolute border-[#043a66] top-[200px] left-[50px] w-[80px] h-[60px] border-2 bg-white flex items-center justify-center text-sm font-medium text-center font-bierstadt">
          Age
          <br />
          50-80
        </div>

        {/* Current Smoker Box */}
        <div className="absolute border-[#043a66] top-[120px] left-[200px] w-[100px] h-[60px] border-2 bg-white flex items-center justify-center text-sm font-medium text-center font-bierstadt">
          Current
          <br />
          smoker
        </div>

        {/* Past Smoker Box */}
        <div className="absolute border-[#043a66] top-[280px] left-[200px] w-[100px] h-[60px] border-2 bg-white flex items-center justify-center text-sm font-medium text-center font-bierstadt">
          Past
          <br />
          smoker
        </div>

        {/* Smoking Questions Box */}
        <div className="absolute border-[#043a66] top-[80px] left-[380px] w-[180px] h-[80px] border-2 bg-white flex items-center justify-center text-sm font-medium text-center leading-tight font-bierstadt">
          How many years have you
          <br />
          been smoking?
          <br />
          How many packs/day on
          <br />
          avg?
        </div>

        {/* Quit Less Than Box */}
        <div className="absolute border-[#043a66] top-[220px] left-[380px] w-[140px] h-[60px] border-2 bg-white flex items-center justify-center text-sm font-medium text-center leading-tight font-bierstadt">
          Quit less
          <br />
          than/equal to 15
          <br />
          years ago
        </div>

        {/* Quit More Than Box */}
        <div className="absolute border-[#043a66] top-[320px] left-[380px] w-[140px] h-[60px] border-2 bg-white flex items-center justify-center text-sm font-medium text-center leading-tight font-bierstadt">
          Quit more than
          <br />
          15 years ago
        </div>

        {/* 20 or More Box */}
        <div className="absolute border-[#043a66] top-[60px] left-[750px] w-[80px] h-[60px] border-2 bg-white flex items-center justify-center text-sm font-medium text-center leading-tight font-bierstadt">
          20 or
          <br />
          more
        </div>

        {/* Less than 20 Box */}
        <div className="absolute border-[#043a66] top-[180px] left-[750px] w-[80px] h-[60px] border-2 bg-white flex items-center justify-center text-sm font-medium text-center leading-tight font-bierstadt">
          Less
          <br />
          than 20
        </div>

        {/* Refer to Screening Box */}
        <div className="absolute border-[#043a66] top-[60px] left-[920px] w-[100px] h-[60px] border-2 bg-white flex items-center justify-center text-sm font-medium text-center leading-tight font-bierstadt">
          Refer to
          <br />
          screening
        </div>

        {/* PLCO Additional Screen Box */}
        <div className="absolute border-[#043a66] top-[180px] left-[920px] w-[100px] h-[60px] border-2 bg-white flex items-center justify-center text-sm font-medium text-center leading-tight font-bierstadt">
          <div>
            <div className="text-black">PLCO:</div>
            <div className="text-orange-600">
              additional
              <br />
              screen
            </div>
          </div>
        </div>

        {/* PLCO Quit Box */}
        <div className="absolute border-[#043a66] top-[320px] left-[580px] w-[100px] h-[60px] border-2 bg-white flex items-center justify-center text-sm font-medium text-center leading-tight font-bierstadt">
          <div>
            <div className="text-black">PLCO:</div>
            <div className="text-orange-600">
              additional
              <br />
              screen
            </div>
          </div>
        </div>

        {/* Rescreen Box */}
        <div className="absolute border-[#043a66] top-[420px] left-[750px] w-[200px] h-[60px] border-2 bg-white flex items-center justify-center text-sm font-medium text-center leading-tight font-bierstadt">
          Direct to page 4B: Rescreen in
          <br />1 year
        </div>

        {/* SVG for Arrows */}
        <svg
          width="1200"
          height="450"
          className="absolute top-0 left-0 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="6"
              markerHeight="4"
              refX="5"
              refY="2"
              orient="auto"
            >
              <polygon points="0 0, 6 2, 0 4" fill="#043a66" />
            </marker>
          </defs>

          {/* Age to Current smoker - diagonal straight line */}
          <line
            x1="130"
            y1="230"
            x2="200"
            y2="150"
            stroke="#043a66"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          />

          {/* Age to Past smoker - diagonal straight line */}
          <line
            x1="130"
            y1="250"
            x2="200"
            y2="310"
            stroke="#043a66"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          />

          {/* Current smoker to smoking questions - straight horizontal */}
          <line
            x1="300"
            y1="150"
            x2="380"
            y2="120"
            stroke="#043a66"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          />

          {/* Past smoker to quit less than - straight diagonal */}
          <line
            x1="300"
            y1="300"
            x2="380"
            y2="250"
            stroke="#043a66"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          />

          {/* Past smoker to quit more than - straight diagonal */}
          <line
            x1="300"
            y1="320"
            x2="380"
            y2="350"
            stroke="#043a66"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          />

          {/* Smoking questions to 20 or more - straight diagonal up */}
          <line
            x1="560"
            y1="110"
            x2="750"
            y2="90"
            stroke="#043a66"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          />

          {/* Smoking questions to less than 20 - straight diagonal down */}
          <line
            x1="560"
            y1="140"
            x2="750"
            y2="210"
            stroke="#043a66"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          />

          {/* Quit less than back to smoking questions - straight diagonal */}
          <line
            x1="430"
            y1="220"
            x2="510"
            y2="160"
            stroke="#043a66"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          />

          {/* 20 or more to refer screening - straight horizontal */}
          <line
            x1="830"
            y1="90"
            x2="920"
            y2="90"
            stroke="#043a66"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          />

          {/* Less than 20 to PLCO additional - straight horizontal */}
          <line
            x1="830"
            y1="210"
            x2="920"
            y2="210"
            stroke="#043a66"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          />

          {/* Quit more than to PLCO quit - straight horizontal */}
          <line
            x1="520"
            y1="350"
            x2="580"
            y2="350"
            stroke="#043a66"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          />

          {/* PLCO quit to rescreen - straight diagonal */}
          <line
            x1="630"
            y1="380"
            x2="750"
            y2="420"
            stroke="#043a66"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          />

          {/* PLCO additional to rescreen - straight diagonal */}
          <line
            x1="970"
            y1="240"
            x2="850"
            y2="420"
            stroke="#043a66"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          />
        </svg>
        <div className="absolute bottom-10 left-10 text-md  font-bierstadt">
          USPSTF: adults aged 50-80 who have 20 pack year smoking history who
          currently smoke or have quit within the past 15 years
        </div>
        <button
          className="absolute  font-bierstadt flex justify-center items-center right-0 bottom-0 bg-[#043a66] cursor-pointer text-white px-5 py-1.5 rounded-md text-sm font-semibold"
          onClick={() => dispatch(setPageType("Page-0"))}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
