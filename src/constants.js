import img1 from "./assets/avatar-mark-webber.webp";
import img2 from "./assets/avatar-angela-gray.webp";
import img3 from "./assets/avatar-jacob-thompson.webp";
import img4 from "./assets/avatar-rizky-hasanuddin.webp";
import img5 from "./assets/avatar-kimberly-smith.webp";
import img6 from "./assets/image-chess.webp";
import img7 from "./assets/avatar-nathan-peterson.webp";
import img8 from "./assets/avatar-anna-kim.webp";

export const data = [
  {
    name: "Mark Webber",
    content: "reacted to your recent post",
    title: "My first tournament today!",
    isUnread: true,
    img: img1,
    isPost: true,
    time: "1m ago",
  },
  {
    name: "Angela Gray",
    content: "followed you",
    title: "",
    isUnread: true,
    img: img2,
    isPost: false,
    time: "5m ago",
  },
  {
    name: "Jacob Thompson",
    content: "has joined your group",
    title: "Chess Club",
    isUnread: true,
    img: img3,
    isPost: false,
    time: "1 day ago",
  },
  {
    name: "Rizky Hasanuddin",
    content: "sent you a private message",
    title: "",
    isUnread: false,
    img: img4,
    isPost: false,
    time: "5 days ago",
    isPrivate: true,
    privateMessage:
      "Hello, thanks for setting up the Chess Club, I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    name: "Kimberly Smith",
    content: "commented on your picture",
    title: "",
    isUnread: false,
    img: img5,
    isPost: false,
    time: "1 week ago",
    picture: img6,
  },
  {
    name: "Nathan Peterson",
    content: "reacted to your recent post",
    title: "5 end-game strategies to increase your win rate",
    isUnread: false,
    img: img7,
    isPost: true,
    time: "2 weeks ago",
  },
  {
    name: "Anna Kim",
    content: "left the group",
    title: "Chess Club",
    isUnread: false,
    img: img8,
    isPost: false,
    time: "2 weeks ago",
  },
];
