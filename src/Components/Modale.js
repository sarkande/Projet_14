import { useState } from "react";

//params
/*
{
    title: "",

    buttons: [
        close_button: true,
        save_button: true,
        cancel_button: true,
        design_button: 'X'
    ],
    content: [
        {
            type: "text",
            id: "",
            value: "",   
        }
    ]
    ,
    callback: {
        save: () => {},
        cancel: () => {},
        close: () => {}
}
*/
const default_params = {
   title: "",
   custom_class: "",
   movable: true,
   resizable: true,
   buttons: {
      close_button: true,
      save_button: true,
      cancel_button: true,
      design_button: "X",
   },
   content: [],

   callback: {
      save: () => {},
      cancel: () => {},
      close: () => {},
   },
};

function Modale({ params }) {
   params = {
      ...default_params,
      ...params,
   };

   const [show, setShow] = useState(true);
   const handleClose = () => {
      setShow(false);
      params.callback.close();
   };
   const handleSave = () => {
      setShow(false);
      params.callback.save();
   };
   const handleCancel = () => {
      setShow(false);
      params.callback.cancel();
   };

   const classNameCustom = `modale-window ${params.custom_class}`;
   console.log(params);

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

   return show ? (
      <div className={classNameCustom}>
         <h1>{params.title}</h1>

         {params.buttons.close_button ? (
            <button onClick={handleClose}>
               {params.buttons.design_button}
            </button>
         ) : null}
         {constructText}

         {params.buttons.save_button ? (
            <button onClick={handleSave}>Save</button>
         ) : null}

         {params.buttons.cancel_button ? (
            <button onClick={handleCancel}>Cancel</button>
         ) : null}
      </div>
   ) : null;
}

export default Modale;
