// src/components/ChatbaseWidget.jsx
import { useEffect, useRef } from 'react';

export default function ChatbaseWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure the container is available
    if (!containerRef.current) return;

    // Create a script element and set its content to the embed code
    const script = document.createElement("script");
    script.text = `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="98T3VFnHVGNIX6nmhFdG1";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
    `;
    containerRef.current.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      id="chatbase-container"
      ref={containerRef}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    />
  );
}
