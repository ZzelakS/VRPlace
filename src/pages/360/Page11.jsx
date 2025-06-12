import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../style.css";

function hotspotLink(hotSpotDiv, args) {
  hotSpotDiv.classList.add("custom-tooltip", "hotspot-dark"); // Apply dark background
  hotSpotDiv.innerHTML = `<button class="hotspot-btn">${args.text}</button>`;
  hotSpotDiv.querySelector("button").onclick = () => args.navigate(args.path);
}

const Page11 = () => {
  const viewerRef = useRef(null);
  const pannellumInstance = useRef(null);
  const navigate = useNavigate();
  const [coords, setCoords] = useState({ pitch: null, yaw: null });

  useEffect(() => {
    pannellumInstance.current = pannellum.viewer(viewerRef.current, {
      type: "equirectangular",
      panorama: "/360/11.jpg",
      autoLoad: true,
      autoRotate: 2,
      compass: true,
      hfov: 110,
      pitch: 10,
      yaw: -141,
      showControls: true,
      hotSpots: [
         {
          pitch: 0.8, 
          yaw: -139,
          type: "custom",
          createTooltipFunc: hotspotLink,
          createTooltipArgs: { text: "Warzone", path: "/page13", navigate },
        },
        {
          pitch: -2, // from page1
          yaw: 72,
          type: "custom",
          createTooltipFunc: hotspotLink,
          createTooltipArgs: { text: "Karaoke", path: "/page14", navigate },
        },
        {
          pitch: -0.5, // from page1
          yaw: 174,
          type: "custom",
          createTooltipFunc: hotspotLink,
          createTooltipArgs: { text: "VR Entrance", path: "/page10", navigate },
        },
      ],
    });

    const handleClick = (event) => {
      if (pannellumInstance.current) {
        const coords = pannellumInstance.current.mouseEventToCoords(event);
        if (coords) {
          const [pitch, yaw] = coords;
          setCoords({ pitch: pitch.toFixed(2), yaw: yaw.toFixed(2) });
        }
      }
    };

    const viewerElement = viewerRef.current;
    viewerElement.addEventListener("click", handleClick);

    return () => {
      viewerElement.removeEventListener("click", handleClick);
      pannellumInstance.current.destroy();
    };
  }, [navigate]);

  return (
    <div className="page">
      <div className="pitch-yaw fixed bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white p-2 rounded-lg z-50 text-sm">
        <strong>Pitch:</strong> {coords.pitch ?? "--"} | <strong>Yaw:</strong>{" "}
        {coords.yaw ?? "--"}
      </div>

      <div className="pitch-yaw fixed bottom-2 left-4 text-white z-50">
        <h5 className="text-sm">© VR Place Nigeria</h5>
      </div>
      <div ref={viewerRef} style={{ width: "100%", height: "100vh" }} />
    </div>
  );
};

export default Page11;
