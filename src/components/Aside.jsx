import React from "react";
import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";


function Aside({handleChange}) {
  return (
    <section>
      <div className="main flex flex-col">
        <div className="aside md:w-40 w-24   border-r-2 border-gray-500 max-h-screen-lg  max-h  flex flex-col dark:border-white ">
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
      </div>
    </section>
  );
}

export default Aside;
