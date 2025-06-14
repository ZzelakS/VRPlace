import { useEffect, useRef, useState } from "react";
import "./Page1.css";

function hotspotLink(hotSpotDiv, args) {
  hotSpotDiv.classList.add("custom-tooltip", "hotspot-dark");
  hotSpotDiv.innerHTML = `<button class="hotspot-btn">${args.text}</button>`;
  hotSpotDiv.querySelector("button").onclick = () => args.onClick();
}

const preloadPanorama = (url) => {
  const img = new Image();
  img.src = url;
};

// Scene definitions
const scenes = [
  {
    id: "entrance",
    panorama: "/360/1.webp",
    pitch: 10,
    yaw: 0,
    hfov: 110,
    hotSpots: [
      {
        pitch: -31,
        yaw: 20,
        type: "custom",
        text: "Entrance",
        targetSceneId: "scene2",
      },
    ],
  },
  {
    id: "scene2",
    panorama: "/360/2.webp",
    pitch: 0,
    yaw: 0,
    hfov: 110,
    hotSpots: [
      {
        pitch: -40,
        yaw: 150,
        type: "custom",
        text: "Entrance",
        targetSceneId: "entrance",
      },
      {
        pitch: -14,
        yaw: -113,
        type: "custom",
        text: "Backyard Grill",
        targetSceneId: "scene3",
      },
      {
        pitch: -10,
        yaw: 65,
        type: "custom",
        text: "VR Entrance",
        targetSceneId: "scene9",
      },
    ],
  },
  {
    id: "scene3",
    panorama: "/360/3.webp",
    pitch: 0,
    yaw: 0,
    hfov: 110,
    hotSpots: [
      {
        pitch: -16,
        yaw: 161,
        type: "custom",
        text: "Entrance",
        targetSceneId: "scene2",
      },
      {
        pitch: -7,
        yaw: 43,
        type: "custom",
        text: "Games",
        targetSceneId: "scene5",
      },
      {
        pitch: -8,
        yaw: -17,
        type: "custom",
        text: "Stage",
        targetSceneId: "scene4",
      },
      {
        pitch: -26,
        yaw: -42,
        type: "custom",
        text: "Pictures",
        targetSceneId: "scene6",
      },
    ],
  },
  {
    id: "scene4",
    panorama: "/360/4.webp",
    pitch: 0,
    yaw: 87,
    hfov: 110,
    hotSpots: [
      {
        pitch: -11,
        yaw: 118,
        type: "custom",
        text: "Games",
        targetSceneId: "scene5",
      },
      {
        pitch: -9,
        yaw: 79,
        type: "custom",
        text: "Seats",
        targetSceneId: "scene7",
      },
      {
        pitch: -27,
        yaw: -179,
        type: "custom",
        text: "Pictures",
        targetSceneId: "scene6",
      },
    ],
  },
  {
    id: "scene5",
    panorama: "/360/5.webp",
    pitch: 0,
    yaw: -136,
    hfov: 110,
    hotSpots: [
      {
        pitch: -15,
        yaw: 95,
        type: "custom",
        text: "Pictures",
        targetSceneId: "scene6",
      },
      {
        pitch: -11,
        yaw: 129,
        type: "custom",
        text: "Stage",
        targetSceneId: "scene4",
      },
      {
        pitch: -10,
        yaw: -105,
        type: "custom",
        text: "Seats",
        targetSceneId: "scene7",
      },
    ],
  },
  {
    id: "scene6",
    panorama: "/360/6.webp",
    pitch: 0,
    yaw: 92,
    hfov: 110,
    hotSpots: [
      {
        pitch: -11,
        yaw: 118,
        type: "custom",
        text: "Games",
        targetSceneId: "scene5",
      },
      {
        pitch: -21,
        yaw: 19,
        type: "custom",
        text: "Stage",
        targetSceneId: "scene4",
      },
      {
        pitch: -17,
        yaw: -161,
        type: "custom",
        text: "Entrance",
        targetSceneId: "scene2",
      },
    ],
  },
  {
    id: "scene7",
    panorama: "/360/7.webp",
    pitch: 0,
    yaw: -33,
    hfov: 110,
    hotSpots: [
      {
        pitch: -6,
        yaw: 150,
        type: "custom",
        text: "Games",
        targetSceneId: "scene5",
      },
      {
        pitch: -5,
        yaw: -9,
        type: "custom",
        text: "Sip & Paint",
        targetSceneId: "scene8",
      },
    ],
  },
  {
    id: "scene8",
    panorama: "/360/8.webp",
    pitch: 0,
    yaw: 87,
    hfov: 110,
    hotSpots: [
      {
        pitch: -13,
        yaw: -132,
        type: "custom",
        text: "Seats",
        targetSceneId: "scene7",
      },
    ],
  },
  {
    id: "scene9",
    panorama: "/360/9.webp",
    pitch: 0,
    yaw: -33,
    hfov: 110,
    hotSpots: [
      {
        pitch: -3,
        yaw: -42,
        type: "custom",
        text: "VR Place Nigeria",
        targetSceneId: "scene10",
      },
      {
        pitch: -10,
        yaw: -128,
        type: "custom",
        text: "Entrance",
        targetSceneId: "scene2",
      },
    ],
  },
  {
    id: "scene10",
    panorama: "/360/10.webp",
    pitch: 0,
    yaw: 10,
    hfov: 110,
    hotSpots: [
      {
        pitch: -10,
        yaw: -51,
        type: "custom",
        text: "Throwball",
        targetSceneId: "scene12",
      },
      {
        pitch: -3,
        yaw: 27,
        type: "custom",
        text: "PlayStation",
        targetSceneId: "scene11",
      },
      {
        pitch: -4,
        yaw: -162,
        type: "custom",
        text: "VR Entrance",
        targetSceneId: "scene9",
      },
      {
        pitch: -0.5,
        yaw: -86,
        type: "custom",
        text: "Warzone",
        targetSceneId: "scene13",
      },
    ],
  },
  {
    id: "scene11",
    panorama: "/360/11.webp",
    pitch: 0,
    yaw: 3,
    hfov: 110,
    hotSpots: [
      {
        pitch: 0.8,
        yaw: -139,
        type: "custom",
        text: "Warzone",
        targetSceneId: "scene13",
      },
      {
        pitch: -2,
        yaw: 72,
        type: "custom",
        text: "Karaoke",
        targetSceneId: "scene14",
      },
      {
        pitch: -0.5,
        yaw: 174,
        type: "custom",
        text: "VR Entrance",
        targetSceneId: "scene10",
      },
    ],
  },
  {
    id: "scene12",
    panorama: "/360/12.webp",
    pitch: 0,
    yaw: -80,
    hfov: 110,
    hotSpots: [
      {
        pitch: -5,
        yaw: 122,
        type: "custom",
        text: "PlayStation",
        targetSceneId: "scene11",
      },
      {
        pitch: -3,
        yaw: 169,
        type: "custom",
        text: "VR Entrance",
        targetSceneId: "scene10",
      },
    ],
  },
  {
    id: "scene13",
    panorama: "/360/13.webp",
    pitch: 0,
    yaw: 24,
    hfov: 110,
    hotSpots: [
      {
        pitch: 0.7,
        yaw: 150,
        type: "custom",
        text: "PlayStation",
        targetSceneId: "scene11",
      },
      {
        pitch: 0.8,
        yaw: -176,
        type: "custom",
        text: "VR Entrance",
        targetSceneId: "scene10",
      },
    ],
  },
  {
    id: "scene14",
    panorama: "/360/14.webp",
    pitch: 0,
    yaw: 87,
    hfov: 110,
    hotSpots: [
      {
        pitch: -2,
        yaw: 146,
        type: "custom",
        text: "PlayStation",
        targetSceneId: "scene11",
      },
    ],
  },
];

const animateZoomIn = (viewer, targetSceneId, setCurrentScene) => {
  let hfov = viewer.getHfov();
  const minHfov = 30;

  const step = () => {
    if (hfov <= minHfov) {
      viewer.loadScene(targetSceneId);
      viewer.setHfov(110); // Reset zoom for next scene
      setCurrentScene(targetSceneId);
      return;
    }
    hfov -= 1.5;
    viewer.setHfov(hfov);
    requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const Page1 = () => {
  const viewerRef = useRef(null);
  const pannellumInstance = useRef(null);
  const [coords, setCoords] = useState({ pitch: null, yaw: null });
  const [currentScene, setCurrentScene] = useState("entrance");

  useEffect(() => {
    const sceneConfig = {};
    scenes.forEach((scene) => {
      sceneConfig[scene.id] = {
        type: "equirectangular",
        panorama: scene.panorama,
        pitch: scene.pitch,
        yaw: scene.yaw,
        hfov: scene.hfov,
        hotSpots: scene.hotSpots.map((spot) => ({
          pitch: spot.pitch,
          yaw: spot.yaw,
          type: spot.type,
          createTooltipFunc: hotspotLink,
          createTooltipArgs: {
            text: spot.text,
            onClick: () => {
              const viewer = pannellumInstance.current;
              if (!viewer) return;

              animateZoomIn(viewer, spot.targetSceneId, setCurrentScene);

              // Preload the next scene (one step ahead)
              const nextScene = scenes.find(s => s.id === spot.targetSceneId);
              const afterNextId = nextScene?.hotSpots?.[0]?.targetSceneId;
              const afterNextScene = scenes.find(s => s.id === afterNextId);
              if (afterNextScene?.panorama) {
                preloadPanorama(afterNextScene.panorama);
              }
            },
          },
        })),
      };
    });

    pannellumInstance.current = pannellum.viewer(viewerRef.current, {
      default: {
        firstScene: currentScene,
        sceneFadeDuration: 0,
      },
      scenes: sceneConfig,
      autoLoad: true,
      showControls: true,
      compass: true,
      showFullscreenCtrl: true,
      showZoomCtrl: true,
      showControlsOnHover: false,
      showLoading: false,
      autoRotate: 2
    });

    // Preload initial next scene
    const currentSceneData = scenes.find(s => s.id === currentScene);
    const firstNextId = currentSceneData?.hotSpots?.[0]?.targetSceneId;
    const firstNext = scenes.find(s => s.id === firstNextId);
    if (firstNext?.panorama) preloadPanorama(firstNext.panorama);

    const handleClick = (event) => {
      const coords = pannellumInstance.current?.mouseEventToCoords(event);
      if (coords) {
        const [pitch, yaw] = coords;
        setCoords({ pitch: pitch.toFixed(2), yaw: yaw.toFixed(2) });
      }
    };

    const viewerElement = viewerRef.current;
    viewerElement?.addEventListener("click", handleClick);

    return () => {
      viewerElement?.removeEventListener("click", handleClick);
      pannellumInstance.current?.destroy();
    };
  }, []);

  return (
    <div className="page relative">
      <div className="pitch-yaw fixed bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white p-2 rounded-lg z-50 text-sm">
        <strong>Pitch:</strong> {coords.pitch ?? "--"} | <strong>Yaw:</strong> {coords.yaw ?? "--"}
      </div>

      <div className="pitch-yaw fixed bottom-2 left-4 text-white z-50">
        <h5 className="text-sm">© VR Place Nigeria</h5>
      </div>

      <div ref={viewerRef} style={{ width: "100%", height: "100vh" }} />
    </div>
  );
};

export default Page1;
