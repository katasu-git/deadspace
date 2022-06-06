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
    contents: [{ text: "🤔" }],
  },
  {
    year: 2022,
    contents: [
      { text: "zenlyの身の潔白性（クリーンな価値観）" },
      { text: "EV視点のズレ" },
      { text: "コンテキスト鈍器" },
      {
        text: "咲いてもない",
      },
      {
        text: "ああ、見たことあるぅ",
      },
    ],
  },
];
