import { FC } from "react";
import Header from "../component/Header/Header";
import Chats from "../component/Chat/Chats";
import Footer from "../component/Footer/Footer"

const ChatPage: FC = () => {
  const header = { name: "Trip 1", from: "IGI Airport, T3", to: "Sector 28" };
  const chats = [
    {
      id: "586de268de18418e9c5e0789329b2a94",
      message:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Cras vel elit sed mi placerat pharetra eget vel odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Cras vel elit sed mi placerat pharetra eget vel odio.",
      sender: {
        image:
          "https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g",
        is_kyc_verified: false,
        self: false,
        user_id: "54fbcca87afa4527b28221df348018b1",
      },
      time: "2023-07-17 10:38:20",
    },
    {
      id: "6fda97f1e21a4323a853760ff6322391",
      message:
        "Duis ac nulla varius diam ultrices rutrum.Aenean ullamcorper orci et vulputate fermentum.Duis ac nulla varius diam ultrices rutrum.",
      sender: {
        image:
          "https://fastly.picsum.photos/id/1072/160/160.jpg?hmac=IDpbpA5neYzFjtkdFmBDKXwgr-907ewXLa9lLk9JuA8",
        is_kyc_verified: true,
        self: true,
        user_id: "67eab7475e5e4dd0903e133705213b43",
      },
      time: "2023-07-17 10:38:50",
    },
    {
      id: "b3bc97ef9b0c4287835eb2ff83a1628b",
      message:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Quisque vitae varius ex, eu volutpat orci.Cras vel elit sed mi placerat pharetra eget vel odio.<br>Page 0<br>Proin ipsum purus, laoreet quis dictum a, laoreet sed ligula.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      sender: {
        image:
          "https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o",
        is_kyc_verified: false,
        self: false,
        user_id: "a6c04ceed74b447280f5fa7ab053adcc",
      },
      time: "2023-07-17 10:39:20",
    },
    {
      id: "01c8d32f1b9042bbb3ee82854aaafc99",
      message:
        "Duis ac nulla varius diam ultrices rutrum.Cras erat dui, finibus vel lectus ac, pharetra dictum odio.Aenean ullamcorper orci et vulputate fermentum.Nullam tempus scelerisque purus, sed mattis elit condimentum nec.",
      sender: {
        image:
          "https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o",
        is_kyc_verified: false,
        self: false,
        user_id: "a6c04ceed74b447280f5fa7ab053adcc",
      },
      time: "2023-07-17 10:39:50",
    },
    {
      id: "d9145f941bf64d8b85b894d21071db3f",
      message:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Duis ac nulla varius diam ultrices rutrum.Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc.<br>Page 0<br>Duis ac nulla varius diam ultrices rutrum.Cras vel elit sed mi placerat pharetra eget vel odio.",
      sender: {
        image:
          "https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0",
        is_kyc_verified: true,
        self: false,
        user_id: "73785ed67d034f6290b0334c6e756433",
      },
      time: "2023-07-17 10:40:20",
    },
    {
      id: "d76406e933974935b95f2eda61953338",
      message:
        "Nullam tempus scelerisque purus, sed mattis elit condimentum nec.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br>Page 0<br>Aenean ullamcorper orci et vulputate fermentum.",
      sender: {
        image:
          "https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o",
        is_kyc_verified: false,
        self: false,
        user_id: "a6c04ceed74b447280f5fa7ab053adcc",
      },
      time: "2023-07-17 10:40:50",
    },
    {
      id: "51fe651cd8674d1cb09b7e0a292524ff",
      message:
        "Cras erat dui, finibus vel lectus ac, pharetra dictum odio.Integer ultricies malesuada quam.Aenean ullamcorper orci et vulputate fermentum.",
      sender: {
        image:
          "https://fastly.picsum.photos/id/1072/160/160.jpg?hmac=IDpbpA5neYzFjtkdFmBDKXwgr-907ewXLa9lLk9JuA8",
        is_kyc_verified: true,
        self: true,
        user_id: "67eab7475e5e4dd0903e133705213b43",
      },
      time: "2023-07-17 10:41:20",
    },
    {
      id: "4a1977b86c7d4dfb8ed1ea2a04017601",
      message:
        "Nullam tempus scelerisque purus, sed mattis elit condimentum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc.Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc.Duis ac nulla varius diam ultrices rutrum.",
      sender: {
        image:
          "https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0",
        is_kyc_verified: true,
        self: false,
        user_id: "73785ed67d034f6290b0334c6e756433",
      },
      time: "2023-07-17 10:41:50",
    },
    {
      id: "8db2c575dfd349a5b26ee0233a7cfafb",
      message:
        "Proin ipsum purus, laoreet quis dictum a, laoreet sed ligula.Aenean ullamcorper orci et vulputate fermentum.",
      sender: {
        image:
          "https://fastly.picsum.photos/id/1072/160/160.jpg?hmac=IDpbpA5neYzFjtkdFmBDKXwgr-907ewXLa9lLk9JuA8",
        is_kyc_verified: true,
        self: true,
        user_id: "67eab7475e5e4dd0903e133705213b43",
      },
      time: "2023-07-17 10:42:20",
    },
    {
      id: "4fcfa2a24c4540cea7e679d192eb7013",
      message:
        "Nullam tempus scelerisque purus, sed mattis elit condimentum nec.Duis ac nulla varius diam ultrices rutrum.<br>Page 0<br>",
      sender: {
        image:
          "https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o",
        is_kyc_verified: false,
        self: false,
        user_id: "a6c04ceed74b447280f5fa7ab053adcc",
      },
      time: "2023-07-17 10:42:50",
    },
  ];

  return (
    <div>
      <Header header={header} />
      <Chats chats={chats} />
      <Footer/>
    </div>
  );
};

export default ChatPage;
