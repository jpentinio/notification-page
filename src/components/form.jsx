import React from "react";
import Card from "./card";
import { data } from "../constants";

const Form = () => {
  return (
    <section className="w-[700px] bg-white rounded-lg p-4 sm:p-7 text-[#5e6778]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold text-black">Notifications</h2>
          <div className="text-white font-bold h-8 w-8 rounded-lg bg-[#0a317b]  flex items-center justify-center">
            3
          </div>
        </div>
        <p className="text-sm hover:text-[#0a317b] cursor-pointer">
          Mark all as read
        </p>
      </div>
      <div className="mt-7 flex flex-col gap-2">
        {data.map((item, index) => (
          <Card
            key={index}
            unread={item.isUnread}
            img={item.img}
            name={item.name}
            content={item.content}
            title={item.title}
            time={item.time}
            isPost={item.isPost}
            isPrivate={item.isPrivate}
            privateMessage={item.privateMessage}
            picture={item.picture}
          />
        ))}
      </div>
    </section>
  );
};

export default Form;
