import { c as t, j as e, __tla as __tla_0 } from "./index-DBX1Vs2e.js";
let o;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let c, r;
  c = [
    [
      "path",
      {
        d: "M7 17V7h10",
        key: "11bw93"
      }
    ],
    [
      "path",
      {
        d: "M17 17 7 7",
        key: "2786uv"
      }
    ]
  ];
  r = t("ArrowUpLeft", c);
  o = function() {
    return e.jsx("div", {
      className: "text-center",
      children: e.jsxs("header", {
        className: "min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]",
        children: [
          e.jsx(r, {
            className: "h-10 w-10"
          }),
          e.jsx("p", {
            children: "Create a Prolly Tree to get started."
          })
        ]
      })
    });
  };
});
export {
  __tla,
  o as component
};
