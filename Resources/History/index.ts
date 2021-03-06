type Contents = {
  text: string;
  detail?: string;
};

type History = {
  year: number;
  contents: Contents[];
};

export const History: History[] = [
  {
    year: 2021,
    contents: [{ text: "ð¤" }],
  },
  {
    year: 2022,
    contents: [
      { text: "zenlyã®èº«ã®æ½ç½æ§ï¼ã¯ãªã¼ã³ãªä¾¡å¤è¦³ï¼" },
      { text: "EVè¦ç¹ã®ãºã¬" },
      { text: "ã³ã³ãã­ã¹ãéå¨" },
      {
        text: "å²ãã¦ããªã",
      },
      {
        text: "ãããè¦ããã¨ããã",
      },
    ],
  },
];
