import React from "react";

const Card = ({
  unread,
  img,
  name,
  time,
  content,
  title,
  isPost,
  isPrivate,
  privateMessage,
  picture,
}) => {
  return (
    <div
      className={`p-4 rounded-lg ${
        unread ? "bg-[#f7fafd]" : "bg-white"
      } flex gap-4`}
    >
      <img src={img} alt="" className="w-12 h-12 rounded-full" />
      <div className={`${picture && "flex justify-between w-full"}`}>
        <div>
          <div className="flex items-center gap-2">
            <p>
              <span className="font-bold text-black cursor-pointer hover:text-[#0a317b]">
                {name}
              </span>{" "}
              {content}
              <span
                className={`font-bold cursor-pointer ${
                  !isPost && "text-[#0a317b]"
                } hover:text-[#0a317b]`}
              >
                {" "}
                {title}
              </span>
            </p>
            {unread && (
              <div className="w-2 h-2 rounded-full bg-[#f65351]"></div>
            )}
          </div>
          <p className="text-[#939dae]">{time}</p>
        </div>
        {isPrivate && (
          <p className="p-4 border rounded-lg mt-3 cursor-pointer hover:bg-[#e5effa]">
            {privateMessage}
          </p>
        )}
        {picture && (
          <img
            src={picture}
            alt=""
            className="w-12 h-12 p-1 rounded-lg cursor-pointer hover:border"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
