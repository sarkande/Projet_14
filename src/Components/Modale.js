import { useState, useEffect } from "react";
import "../Styles/modale.css";

const DEFAULT_PARAMS = {
   title: "",
   custom_class: "",
   movable: true,
   resizable: true,
   width: "500px",

   close_button: {
      active: true,
      title: "X",
      callback: () => {},
   },
   save_button: {
      active: true,
      title: "Save",
      callback: () => {},
   },
   cancel_button: {
      active: true,
      title: "Cancel",
      callback: () => {},
   },

   content: [],
};

function Modale({ params }) {
   params = {
      ...DEFAULT_PARAMS,
      ...params,
   };

   const [show, setShow] = useState(true);
   const handleButton = (callback) => {
      setShow(false);
      if (callback) callback();
   };
   const classCustom =
      params.custom_class !== "" &&
      params.custom_class !== undefined &&
      params.custom_class !== null
         ? params.custom_class
         : "modale-window";

   //construct text
   const constructText = [];
   params.content.forEach((element) => {
      if (element.type === "text") {
         constructText.push(
            <p
               className={
                  element?.class !== null && element?.class !== ""
                     ? element.class
                     : null
               }
               key={element.value + Math.random()}
            >
               {element.value}
            </p>
         );
      } else if (element.type === "image") {
         constructText.push(
            <img
               className={
                  element?.class !== null && element?.class !== ""
                     ? element.class
                     : null
               }
               key={element.value + Math.random()}
               src={element.value}
               alt={element.value}
            />
         );
      }
   });

   //moveable
   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
   const [modalePos, setModalePos] = useState({ x: 100, y: 100 });
   const [modaleIsMoving, setModaleIsMoving] = useState(false);
   const handleClick = (e) => {
      //get the offset pos
      if (params.movable) {
         setModaleIsMoving(!modaleIsMoving);
         console.log("click", modaleIsMoving);
         if (modaleIsMoving) {
            setModalePos(mousePos);
         }
      }
   };

   useEffect(() => {
      const handleMouseMove = (event) => {
         setMousePos({ x: event.clientX, y: event.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);

      return () => {
         window.removeEventListener("mousemove", handleMouseMove);
      };
   }, []);

   //render
   return show ? (
      <div
         className={`${classCustom}`}
         style={{
            minWidth: params.width,
            left: `${!modaleIsMoving ? modalePos.x - 30 : mousePos.x - 30}px`,
            top: `${!modaleIsMoving ? modalePos.y - 15 : mousePos.y - 15}px`,
         }}
      >
         {params.title !== "" || params.close_button.active ? (
            <div
               className={`${classCustom}-header`}
               onClick={handleClick}
               style={modaleIsMoving ? { cursor: "move" } : null}
            >
               <span className={`${classCustom}-title`}>{params.title}</span>

               {params.close_button.active ? (
                  <button
                     className={`${classCustom}-close`}
                     onClick={() => handleButton(params.close_button?.callback)}
                  >
                     {params.close_button.title}
                  </button>
               ) : null}
            </div>
         ) : null}
         <div className={`${classCustom}-main`}>
            {mousePos.x} {mousePos.y}
            {modaleIsMoving ? "Deplacable" : null}
            {constructText}
         </div>
         {params.save_button.active || params.cancel_button.active ? (
            <div className={`${classCustom}-buttons`}>
               {params.save_button.active ? (
                  <button
                     className={`${classCustom}-save button-modale`}
                     onClick={() => handleButton(params.save_button?.callback)}
                  >
                     {params.save_button.title}
                  </button>
               ) : null}

               {params.cancel_button.active ? (
                  <button
                     className={`${classCustom}-cancel button-modale`}
                     onClick={() =>
                        handleButton(params.cancel_button?.callback)
                     }
                  >
                     {params.cancel_button.title}
                  </button>
               ) : null}
            </div>
         ) : null}
      </div>
   ) : null;
}

export default Modale;
