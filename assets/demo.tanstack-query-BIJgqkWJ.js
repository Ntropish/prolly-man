import { j as e, __tla as __tla_0 } from "./index-ChdLfEre.js";
import { u as o, __tla as __tla_1 } from "./useQuery-DU5p-XCB.js";
let r;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  r = function() {
    const { data: a } = o({
      queryKey: [
        "people"
      ],
      queryFn: () => Promise.resolve([
        {
          name: "John Doe"
        },
        {
          name: "Jane Doe"
        }
      ]),
      initialData: []
    });
    return e.jsxs("div", {
      className: "p-4",
      children: [
        e.jsx("h1", {
          className: "text-2xl mb-4",
          children: "People list"
        }),
        e.jsx("ul", {
          children: a.map((n) => e.jsx("li", {
            children: n.name
          }, n.name))
        })
      ]
    });
  };
});
export {
  __tla,
  r as component
};
