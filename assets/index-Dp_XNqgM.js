import { i as Ae, h as qt, a as Gt, c as B, r as u, j as n, P as F, b as H, u as Ge, d as Xe, e as je, f as Xt, g as Ye, k as Yt, I as Qt, l as $, m as ie, n as Jt, o as Zt, p as J, q as en, s as oe, t as z, v as U, w as D, D as Qe, x as Je, y as Ze, z as et, A as X, T as Ce, B as tt, C as O, E as W, F as tn, L as Y, G as nn, H as Z, J as sn, K as we, M as rn, S as on, N as an, O as ln, Q as cn, U as dn, V as un, W as hn, X as fn, Y as mn, __tla as __tla_0 } from "./index-DBX1Vs2e.js";
import { Q as xn, a as gn, u as _e, __tla as __tla_1 } from "./useQuery-CsAv4r85.js";
let sr;
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
  var pn = class extends xn {
    constructor(e, o) {
      super(e, o);
    }
    bindMethods() {
      super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
    }
    setOptions(e) {
      super.setOptions({
        ...e,
        behavior: Ae()
      });
    }
    getOptimisticResult(e) {
      return e.behavior = Ae(), super.getOptimisticResult(e);
    }
    fetchNextPage(e) {
      return this.fetch({
        ...e,
        meta: {
          fetchMore: {
            direction: "forward"
          }
        }
      });
    }
    fetchPreviousPage(e) {
      return this.fetch({
        ...e,
        meta: {
          fetchMore: {
            direction: "backward"
          }
        }
      });
    }
    createResult(e, o) {
      var _a, _b;
      const { state: t } = e, r = super.createResult(e, o), { isFetching: s, isRefetching: a, isError: i, isRefetchError: l } = r, c = (_b = (_a = t.fetchMeta) == null ? void 0 : _a.fetchMore) == null ? void 0 : _b.direction, h = i && c === "forward", d = s && c === "forward", f = i && c === "backward", m = s && c === "backward";
      return {
        ...r,
        fetchNextPage: this.fetchNextPage,
        fetchPreviousPage: this.fetchPreviousPage,
        hasNextPage: Gt(o, t.data),
        hasPreviousPage: qt(o, t.data),
        isFetchNextPageError: h,
        isFetchingNextPage: d,
        isFetchPreviousPageError: f,
        isFetchingPreviousPage: m,
        isRefetchError: l && !h && !f,
        isRefetching: a && !d && !m
      };
    }
  };
  function nt(e, o) {
    return gn(e, pn);
  }
  const vn = [
    [
      "path",
      {
        d: "m3 16 4 4 4-4",
        key: "1co6wj"
      }
    ],
    [
      "path",
      {
        d: "M7 20V4",
        key: "1yoxec"
      }
    ],
    [
      "path",
      {
        d: "M11 4h10",
        key: "1w87gc"
      }
    ],
    [
      "path",
      {
        d: "M11 8h7",
        key: "djye34"
      }
    ],
    [
      "path",
      {
        d: "M11 12h4",
        key: "q8tih4"
      }
    ]
  ], bn = B("ArrowDownWideNarrow", vn);
  const yn = [
    [
      "path",
      {
        d: "M17 12H3",
        key: "8awo09"
      }
    ],
    [
      "path",
      {
        d: "m11 18 6-6-6-6",
        key: "8c2y43"
      }
    ],
    [
      "path",
      {
        d: "M21 5v14",
        key: "nzette"
      }
    ]
  ], wn = B("ArrowRightToLine", yn);
  const Sn = [
    [
      "path",
      {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
      }
    ]
  ], jn = B("Check", Sn);
  const Cn = [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
      }
    ],
    [
      "path",
      {
        d: "m15 9-6 6",
        key: "1uzhvr"
      }
    ],
    [
      "path",
      {
        d: "m9 9 6 6",
        key: "z0biqf"
      }
    ]
  ], he = B("CircleX", Cn);
  const Nn = [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
      }
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
      }
    ]
  ], En = B("Copy", Nn);
  const kn = [
    [
      "path",
      {
        d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
        key: "182aya"
      }
    ],
    [
      "path",
      {
        d: "M22 21H7",
        key: "t4ddhn"
      }
    ],
    [
      "path",
      {
        d: "m5 11 9 9",
        key: "1mo9qw"
      }
    ]
  ], Tn = B("Eraser", kn);
  const Pn = [
    [
      "circle",
      {
        cx: "5",
        cy: "6",
        r: "3",
        key: "1qnov2"
      }
    ],
    [
      "path",
      {
        d: "M12 6h5a2 2 0 0 1 2 2v7",
        key: "1yj91y"
      }
    ],
    [
      "path",
      {
        d: "m15 9-3-3 3-3",
        key: "1lwv8l"
      }
    ],
    [
      "circle",
      {
        cx: "19",
        cy: "18",
        r: "3",
        key: "1qljk2"
      }
    ],
    [
      "path",
      {
        d: "M12 18H7a2 2 0 0 1-2-2V9",
        key: "16sdep"
      }
    ],
    [
      "path",
      {
        d: "m9 15 3 3-3 3",
        key: "1m3kbl"
      }
    ]
  ], In = B("GitCompareArrows", Pn);
  const Rn = [
    [
      "path",
      {
        d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
        key: "1s6t7t"
      }
    ],
    [
      "circle",
      {
        cx: "16.5",
        cy: "7.5",
        r: ".5",
        fill: "currentColor",
        key: "w0ekpg"
      }
    ]
  ], Mn = B("KeyRound", Rn);
  const An = [
    [
      "path",
      {
        d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
        key: "g0fldk"
      }
    ],
    [
      "path",
      {
        d: "m21 2-9.6 9.6",
        key: "1j0ho8"
      }
    ],
    [
      "circle",
      {
        cx: "7.5",
        cy: "15.5",
        r: "5.5",
        key: "yqb3hr"
      }
    ]
  ], _n = B("Key", An);
  const zn = [
    [
      "path",
      {
        d: "m18 8 4 4-4 4",
        key: "1ak13k"
      }
    ],
    [
      "path",
      {
        d: "M2 12h20",
        key: "9i4pu4"
      }
    ],
    [
      "path",
      {
        d: "m6 8-4 4 4 4",
        key: "15zrgr"
      }
    ]
  ], Dn = B("MoveHorizontal", zn);
  const Ln = [
    [
      "rect",
      {
        x: "16",
        y: "16",
        width: "6",
        height: "6",
        rx: "1",
        key: "4q2zg0"
      }
    ],
    [
      "rect",
      {
        x: "2",
        y: "16",
        width: "6",
        height: "6",
        rx: "1",
        key: "8cvhb9"
      }
    ],
    [
      "rect",
      {
        x: "9",
        y: "2",
        width: "6",
        height: "6",
        rx: "1",
        key: "1egb70"
      }
    ],
    [
      "path",
      {
        d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
        key: "1jsf9p"
      }
    ],
    [
      "path",
      {
        d: "M12 12V8",
        key: "2874zd"
      }
    ]
  ], ze = B("Network", Ln);
  const On = [
    [
      "circle",
      {
        cx: "11",
        cy: "11",
        r: "8",
        key: "4ej97u"
      }
    ],
    [
      "path",
      {
        d: "m21 21-4.3-4.3",
        key: "1qie3q"
      }
    ]
  ], Se = B("Search", On);
  var Fn = "Separator", De = "horizontal", Hn = [
    "horizontal",
    "vertical"
  ], st = u.forwardRef((e, o) => {
    const { decorative: t, orientation: r = De, ...s } = e, a = $n(r) ? r : De, l = t ? {
      role: "none"
    } : {
      "aria-orientation": a === "vertical" ? a : void 0,
      role: "separator"
    };
    return n.jsx(F.div, {
      "data-orientation": a,
      ...l,
      ...s,
      ref: o
    });
  });
  st.displayName = Fn;
  function $n(e) {
    return Hn.includes(e);
  }
  var Bn = st;
  function Vn({ className: e, orientation: o = "horizontal", decorative: t = true, ...r }) {
    return n.jsx(Bn, {
      "data-slot": "separator",
      decorative: t,
      orientation: o,
      className: H("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", e),
      ...r
    });
  }
  function rt({ className: e, ...o }) {
    return n.jsx("div", {
      "data-slot": "card",
      className: H("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", e),
      ...o
    });
  }
  function ot({ className: e, ...o }) {
    return n.jsx("div", {
      "data-slot": "card-header",
      className: H("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e),
      ...o
    });
  }
  function at({ className: e, ...o }) {
    return n.jsx("div", {
      "data-slot": "card-title",
      className: H("leading-none font-semibold", e),
      ...o
    });
  }
  function it({ className: e, ...o }) {
    return n.jsx("div", {
      "data-slot": "card-content",
      className: H("px-6", e),
      ...o
    });
  }
  var pe = "Tabs", [Wn, er] = je(pe, [
    Ye
  ]), lt = Ye(), [Kn, Ne] = Wn(pe), Ee = u.forwardRef((e, o) => {
    const { __scopeTabs: t, value: r, onValueChange: s, defaultValue: a, orientation: i = "horizontal", dir: l, activationMode: c = "automatic", ...h } = e, d = Ge(l), [f, m] = Xe({
      prop: r,
      onChange: s,
      defaultProp: a ?? "",
      caller: pe
    });
    return n.jsx(Kn, {
      scope: t,
      baseId: Xt(),
      value: f,
      onValueChange: m,
      orientation: i,
      dir: d,
      activationMode: c,
      children: n.jsx(F.div, {
        dir: d,
        "data-orientation": i,
        ...h,
        ref: o
      })
    });
  });
  Ee.displayName = pe;
  var ct = "TabsList", ke = u.forwardRef((e, o) => {
    const { __scopeTabs: t, loop: r = true, ...s } = e, a = Ne(ct, t), i = lt(t);
    return n.jsx(Yt, {
      asChild: true,
      ...i,
      orientation: a.orientation,
      dir: a.dir,
      loop: r,
      children: n.jsx(F.div, {
        role: "tablist",
        "aria-orientation": a.orientation,
        ...s,
        ref: o
      })
    });
  });
  ke.displayName = ct;
  var dt = "TabsTrigger", fe = u.forwardRef((e, o) => {
    const { __scopeTabs: t, value: r, disabled: s = false, ...a } = e, i = Ne(dt, t), l = lt(t), c = ft(i.baseId, r), h = mt(i.baseId, r), d = r === i.value;
    return n.jsx(Qt, {
      asChild: true,
      ...l,
      focusable: !s,
      active: d,
      children: n.jsx(F.button, {
        type: "button",
        role: "tab",
        "aria-selected": d,
        "aria-controls": h,
        "data-state": d ? "active" : "inactive",
        "data-disabled": s ? "" : void 0,
        disabled: s,
        id: c,
        ...a,
        ref: o,
        onMouseDown: $(e.onMouseDown, (f) => {
          !s && f.button === 0 && f.ctrlKey === false ? i.onValueChange(r) : f.preventDefault();
        }),
        onKeyDown: $(e.onKeyDown, (f) => {
          [
            " ",
            "Enter"
          ].includes(f.key) && i.onValueChange(r);
        }),
        onFocus: $(e.onFocus, () => {
          const f = i.activationMode !== "manual";
          !d && !s && f && i.onValueChange(r);
        })
      })
    });
  });
  fe.displayName = dt;
  var ut = "TabsContent", ht = u.forwardRef((e, o) => {
    const { __scopeTabs: t, value: r, forceMount: s, children: a, ...i } = e, l = Ne(ut, t), c = ft(l.baseId, r), h = mt(l.baseId, r), d = r === l.value, f = u.useRef(d);
    return u.useEffect(() => {
      const m = requestAnimationFrame(() => f.current = false);
      return () => cancelAnimationFrame(m);
    }, []), n.jsx(ie, {
      present: s || d,
      children: ({ present: m }) => n.jsx(F.div, {
        "data-state": d ? "active" : "inactive",
        "data-orientation": l.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !m,
        id: h,
        tabIndex: 0,
        ...i,
        ref: o,
        style: {
          ...e.style,
          animationDuration: f.current ? "0s" : void 0
        },
        children: m && a
      })
    });
  });
  ht.displayName = ut;
  function ft(e, o) {
    return `${e}-trigger-${o}`;
  }
  function mt(e, o) {
    return `${e}-content-${o}`;
  }
  var Un = Ee, qn = ke, Gn = fe, Xn = ht;
  function xt({ className: e, ...o }) {
    return n.jsx(Un, {
      "data-slot": "tabs",
      className: H("flex flex-col gap-2", e),
      ...o
    });
  }
  function gt({ className: e, ...o }) {
    return n.jsx(qn, {
      "data-slot": "tabs-list",
      className: H("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", e),
      ...o
    });
  }
  function ne({ className: e, ...o }) {
    return n.jsx(Gn, {
      "data-slot": "tabs-trigger",
      className: H("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
      ...o
    });
  }
  function se({ className: e, ...o }) {
    return n.jsx(Xn, {
      "data-slot": "tabs-content",
      className: H("flex-1 outline-none", e),
      ...o
    });
  }
  function te(e, o, t) {
    let r = t.initialDeps ?? [], s;
    function a() {
      var i, l, c, h;
      let d;
      t.key && ((i = t.debug) != null && i.call(t)) && (d = Date.now());
      const f = e();
      if (!(f.length !== r.length || f.some((v, y) => r[y] !== v))) return s;
      r = f;
      let x;
      if (t.key && ((l = t.debug) != null && l.call(t)) && (x = Date.now()), s = o(...f), t.key && ((c = t.debug) != null && c.call(t))) {
        const v = Math.round((Date.now() - d) * 100) / 100, y = Math.round((Date.now() - x) * 100) / 100, E = y / 16, w = (S, p) => {
          for (S = String(S); S.length < p; ) S = " " + S;
          return S;
        };
        console.info(`%c\u23F1 ${w(y, 5)} /${w(v, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * E, 120))}deg 100% 31%);`, t == null ? void 0 : t.key);
      }
      return (h = t == null ? void 0 : t.onChange) == null || h.call(t, s), s;
    }
    return a.updateDeps = (i) => {
      r = i;
    }, a;
  }
  function Le(e, o) {
    if (e === void 0) throw new Error("Unexpected undefined");
    return e;
  }
  const Yn = (e, o) => Math.abs(e - o) <= 1, Qn = (e, o, t) => {
    let r;
    return function(...s) {
      e.clearTimeout(r), r = e.setTimeout(() => o.apply(this, s), t);
    };
  }, Oe = (e) => {
    const { offsetWidth: o, offsetHeight: t } = e;
    return {
      width: o,
      height: t
    };
  }, Jn = (e) => e, Zn = (e) => {
    const o = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
    for (let s = o; s <= t; s++) r.push(s);
    return r;
  }, es = (e, o) => {
    const t = e.scrollElement;
    if (!t) return;
    const r = e.targetWindow;
    if (!r) return;
    const s = (i) => {
      const { width: l, height: c } = i;
      o({
        width: Math.round(l),
        height: Math.round(c)
      });
    };
    if (s(Oe(t)), !r.ResizeObserver) return () => {
    };
    const a = new r.ResizeObserver((i) => {
      const l = () => {
        const c = i[0];
        if (c == null ? void 0 : c.borderBoxSize) {
          const h = c.borderBoxSize[0];
          if (h) {
            s({
              width: h.inlineSize,
              height: h.blockSize
            });
            return;
          }
        }
        s(Oe(t));
      };
      e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
    });
    return a.observe(t, {
      box: "border-box"
    }), () => {
      a.unobserve(t);
    };
  }, Fe = {
    passive: true
  }, He = typeof window > "u" ? true : "onscrollend" in window, ts = (e, o) => {
    const t = e.scrollElement;
    if (!t) return;
    const r = e.targetWindow;
    if (!r) return;
    let s = 0;
    const a = e.options.useScrollendEvent && He ? () => {
    } : Qn(r, () => {
      o(s, false);
    }, e.options.isScrollingResetDelay), i = (d) => () => {
      const { horizontal: f, isRtl: m } = e.options;
      s = f ? t.scrollLeft * (m && -1 || 1) : t.scrollTop, a(), o(s, d);
    }, l = i(true), c = i(false);
    c(), t.addEventListener("scroll", l, Fe);
    const h = e.options.useScrollendEvent && He;
    return h && t.addEventListener("scrollend", c, Fe), () => {
      t.removeEventListener("scroll", l), h && t.removeEventListener("scrollend", c);
    };
  }, ns = (e, o, t) => {
    if (o == null ? void 0 : o.borderBoxSize) {
      const r = o.borderBoxSize[0];
      if (r) return Math.round(r[t.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
  }, ss = (e, { adjustments: o = 0, behavior: t }, r) => {
    var s, a;
    const i = e + o;
    (a = (s = r.scrollElement) == null ? void 0 : s.scrollTo) == null || a.call(s, {
      [r.options.horizontal ? "left" : "top"]: i,
      behavior: t
    });
  };
  class rs {
    constructor(o) {
      this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = false, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
        let t = null;
        const r = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
          s.forEach((a) => {
            const i = () => {
              this._measureElement(a.target, a);
            };
            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
          });
        }));
        return {
          disconnect: () => {
            var s;
            (s = r()) == null || s.disconnect(), t = null;
          },
          observe: (s) => {
            var a;
            return (a = r()) == null ? void 0 : a.observe(s, {
              box: "border-box"
            });
          },
          unobserve: (s) => {
            var a;
            return (a = r()) == null ? void 0 : a.unobserve(s);
          }
        };
      })(), this.range = null, this.setOptions = (t) => {
        Object.entries(t).forEach(([r, s]) => {
          typeof s > "u" && delete t[r];
        }), this.options = {
          debug: false,
          initialOffset: 0,
          overscan: 1,
          paddingStart: 0,
          paddingEnd: 0,
          scrollPaddingStart: 0,
          scrollPaddingEnd: 0,
          horizontal: false,
          getItemKey: Jn,
          rangeExtractor: Zn,
          onChange: () => {
          },
          measureElement: ns,
          initialRect: {
            width: 0,
            height: 0
          },
          scrollMargin: 0,
          gap: 0,
          indexAttribute: "data-index",
          initialMeasurementsCache: [],
          lanes: 1,
          isScrollingResetDelay: 150,
          enabled: true,
          isRtl: false,
          useScrollendEvent: false,
          useAnimationFrameWithResizeObserver: false,
          ...t
        };
      }, this.notify = (t) => {
        var r, s;
        (s = (r = this.options).onChange) == null || s.call(r, this, t);
      }, this.maybeNotify = te(() => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]), (t) => {
        this.notify(t);
      }, {
        key: false,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }), this.cleanup = () => {
        this.unsubs.filter(Boolean).forEach((t) => t()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
      }, this._didMount = () => () => {
        this.cleanup();
      }, this._willUpdate = () => {
        var t;
        const r = this.options.enabled ? this.options.getScrollElement() : null;
        if (this.scrollElement !== r) {
          if (this.cleanup(), !r) {
            this.maybeNotify();
            return;
          }
          this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((s) => {
            this.observer.observe(s);
          }), this._scrollToOffset(this.getScrollOffset(), {
            adjustments: void 0,
            behavior: void 0
          }), this.unsubs.push(this.options.observeElementRect(this, (s) => {
            this.scrollRect = s, this.maybeNotify();
          })), this.unsubs.push(this.options.observeElementOffset(this, (s, a) => {
            this.scrollAdjustments = 0, this.scrollDirection = a ? this.getScrollOffset() < s ? "forward" : "backward" : null, this.scrollOffset = s, this.isScrolling = a, this.maybeNotify();
          }));
        }
      }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (t, r) => {
        const s = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
        for (let i = r - 1; i >= 0; i--) {
          const l = t[i];
          if (s.has(l.lane)) continue;
          const c = a.get(l.lane);
          if (c == null || l.end > c.end ? a.set(l.lane, l) : l.end < c.end && s.set(l.lane, true), s.size === this.options.lanes) break;
        }
        return a.size === this.options.lanes ? Array.from(a.values()).sort((i, l) => i.end === l.end ? i.index - l.index : i.end - l.end)[0] : void 0;
      }, this.getMeasurementOptions = te(() => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ], (t, r, s, a, i) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: r,
        scrollMargin: s,
        getItemKey: a,
        enabled: i
      }), {
        key: false
      }), this.getMeasurements = te(() => [
        this.getMeasurementOptions(),
        this.itemSizeCache
      ], ({ count: t, paddingStart: r, scrollMargin: s, getItemKey: a, enabled: i }, l) => {
        if (!i) return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((d) => {
          this.itemSizeCache.set(d.key, d.size);
        }));
        const c = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const h = this.measurementsCache.slice(0, c);
        for (let d = c; d < t; d++) {
          const f = a(d), m = this.options.lanes === 1 ? h[d - 1] : this.getFurthestMeasurement(h, d), x = m ? m.end + this.options.gap : r + s, v = l.get(f), y = typeof v == "number" ? v : this.options.estimateSize(d), E = x + y, w = m ? m.lane : d % this.options.lanes;
          h[d] = {
            index: d,
            start: x,
            size: y,
            end: E,
            key: f,
            lane: w
          };
        }
        return this.measurementsCache = h, h;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.calculateRange = te(() => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ], (t, r, s, a) => this.range = t.length > 0 && r > 0 ? os({
        measurements: t,
        outerSize: r,
        scrollOffset: s,
        lanes: a
      }) : null, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualIndexes = te(() => {
        let t = null, r = null;
        const s = this.calculateRange();
        return s && (t = s.startIndex, r = s.endIndex), this.maybeNotify.updateDeps([
          this.isScrolling,
          t,
          r
        ]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          r
        ];
      }, (t, r, s, a, i) => a === null || i === null ? [] : t({
        startIndex: a,
        endIndex: i,
        overscan: r,
        count: s
      }), {
        key: false,
        debug: () => this.options.debug
      }), this.indexFromElement = (t) => {
        const r = this.options.indexAttribute, s = t.getAttribute(r);
        return s ? parseInt(s, 10) : (console.warn(`Missing attribute name '${r}={index}' on measured element.`), -1);
      }, this._measureElement = (t, r) => {
        const s = this.indexFromElement(t), a = this.measurementsCache[s];
        if (!a) return;
        const i = a.key, l = this.elementsCache.get(i);
        l !== t && (l && this.observer.unobserve(l), this.observer.observe(t), this.elementsCache.set(i, t)), t.isConnected && this.resizeItem(s, this.options.measureElement(t, r, this));
      }, this.resizeItem = (t, r) => {
        const s = this.measurementsCache[t];
        if (!s) return;
        const a = this.itemSizeCache.get(s.key) ?? s.size, i = r - a;
        i !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(s, i, this) : s.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
          adjustments: this.scrollAdjustments += i,
          behavior: void 0
        }), this.pendingMeasuredCacheIndexes.push(s.index), this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, r)), this.notify(false));
      }, this.measureElement = (t) => {
        if (!t) {
          this.elementsCache.forEach((r, s) => {
            r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(s));
          });
          return;
        }
        this._measureElement(t, void 0);
      }, this.getVirtualItems = te(() => [
        this.getVirtualIndexes(),
        this.getMeasurements()
      ], (t, r) => {
        const s = [];
        for (let a = 0, i = t.length; a < i; a++) {
          const l = t[a], c = r[l];
          s.push(c);
        }
        return s;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualItemForOffset = (t) => {
        const r = this.getMeasurements();
        if (r.length !== 0) return Le(r[pt(0, r.length - 1, (s) => Le(r[s]).start, t)]);
      }, this.getOffsetForAlignment = (t, r, s = 0) => {
        const a = this.getSize(), i = this.getScrollOffset();
        r === "auto" && (r = t >= i + a ? "end" : "start"), r === "center" ? t += (s - a) / 2 : r === "end" && (t -= a);
        const l = this.getTotalSize() - a;
        return Math.max(Math.min(l, t), 0);
      }, this.getOffsetForIndex = (t, r = "auto") => {
        t = Math.max(0, Math.min(t, this.options.count - 1));
        const s = this.measurementsCache[t];
        if (!s) return;
        const a = this.getSize(), i = this.getScrollOffset();
        if (r === "auto") if (s.end >= i + a - this.options.scrollPaddingEnd) r = "end";
        else if (s.start <= i + this.options.scrollPaddingStart) r = "start";
        else return [
          i,
          r
        ];
        const l = r === "end" ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
        return [
          this.getOffsetForAlignment(l, r, s.size),
          r
        ];
      }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
        this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
      }, this.scrollToOffset = (t, { align: r = "start", behavior: s } = {}) => {
        this.cancelScrollToIndex(), s === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getOffsetForAlignment(t, r), {
          adjustments: void 0,
          behavior: s
        });
      }, this.scrollToIndex = (t, { align: r = "auto", behavior: s } = {}) => {
        t = Math.max(0, Math.min(t, this.options.count - 1)), this.cancelScrollToIndex(), s === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
        const a = this.getOffsetForIndex(t, r);
        if (!a) return;
        const [i, l] = a;
        this._scrollToOffset(i, {
          adjustments: void 0,
          behavior: s
        }), s !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
          if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(this.options.getItemKey(t))) {
            const h = this.getOffsetForIndex(t, l);
            if (!h) return;
            const [d] = h, f = this.getScrollOffset();
            Yn(d, f) || this.scrollToIndex(t, {
              align: l,
              behavior: s
            });
          } else this.scrollToIndex(t, {
            align: l,
            behavior: s
          });
        }));
      }, this.scrollBy = (t, { behavior: r } = {}) => {
        this.cancelScrollToIndex(), r === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getScrollOffset() + t, {
          adjustments: void 0,
          behavior: r
        });
      }, this.getTotalSize = () => {
        var t;
        const r = this.getMeasurements();
        let s;
        if (r.length === 0) s = this.options.paddingStart;
        else if (this.options.lanes === 1) s = ((t = r[r.length - 1]) == null ? void 0 : t.end) ?? 0;
        else {
          const a = Array(this.options.lanes).fill(null);
          let i = r.length - 1;
          for (; i >= 0 && a.some((l) => l === null); ) {
            const l = r[i];
            a[l.lane] === null && (a[l.lane] = l.end), i--;
          }
          s = Math.max(...a.filter((l) => l !== null));
        }
        return Math.max(s - this.options.scrollMargin + this.options.paddingEnd, 0);
      }, this._scrollToOffset = (t, { adjustments: r, behavior: s }) => {
        this.options.scrollToFn(t, {
          behavior: s,
          adjustments: r
        }, this);
      }, this.measure = () => {
        this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(false);
      }, this.setOptions(o);
    }
  }
  const pt = (e, o, t, r) => {
    for (; e <= o; ) {
      const s = (e + o) / 2 | 0, a = t(s);
      if (a < r) e = s + 1;
      else if (a > r) o = s - 1;
      else return s;
    }
    return e > 0 ? e - 1 : 0;
  };
  function os({ measurements: e, outerSize: o, scrollOffset: t, lanes: r }) {
    const s = e.length - 1, a = (c) => e[c].start;
    if (e.length <= r) return {
      startIndex: 0,
      endIndex: s
    };
    let i = pt(0, s, a, t), l = i;
    if (r === 1) for (; l < s && e[l].end < t + o; ) l++;
    else if (r > 1) {
      const c = Array(r).fill(0);
      for (; l < s && c.some((d) => d < t + o); ) {
        const d = e[l];
        c[d.lane] = d.end, l++;
      }
      const h = Array(r).fill(t + o);
      for (; i >= 0 && h.some((d) => d >= t); ) {
        const d = e[i];
        h[d.lane] = d.start, i--;
      }
      i = Math.max(0, i - i % r), l = Math.min(s, l + (r - 1 - l % r));
    }
    return {
      startIndex: i,
      endIndex: l
    };
  }
  const $e = typeof document < "u" ? u.useLayoutEffect : u.useEffect;
  function as(e) {
    const o = u.useReducer(() => ({}), {})[1], t = {
      ...e,
      onChange: (s, a) => {
        var i;
        a ? Jt.flushSync(o) : o(), (i = e.onChange) == null || i.call(e, s, a);
      }
    }, [r] = u.useState(() => new rs(t));
    return r.setOptions(t), $e(() => r._didMount(), []), $e(() => r._willUpdate()), r;
  }
  function vt(e) {
    return as({
      observeElementRect: es,
      observeElementOffset: ts,
      scrollToFn: ss,
      ...e
    });
  }
  function me({ className: e, ...o }) {
    return n.jsx(Zt, {
      "data-slot": "label",
      className: H("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
      ...o
    });
  }
  function is(e) {
    const o = u.useRef({
      value: e,
      previous: e
    });
    return u.useMemo(() => (o.current.value !== e && (o.current.previous = o.current.value, o.current.value = e), o.current.previous), [
      e
    ]);
  }
  var ve = "Checkbox", [ls, tr] = je(ve), [cs, Te] = ls(ve);
  function ds(e) {
    const { __scopeCheckbox: o, checked: t, children: r, defaultChecked: s, disabled: a, form: i, name: l, onCheckedChange: c, required: h, value: d = "on", internal_do_not_use_render: f } = e, [m, x] = Xe({
      prop: t,
      defaultProp: s ?? false,
      onChange: c,
      caller: ve
    }), [v, y] = u.useState(null), [E, w] = u.useState(null), S = u.useRef(false), p = v ? !!i || !!v.closest("form") : true, j = {
      checked: m,
      disabled: a,
      setChecked: x,
      control: v,
      setControl: y,
      name: l,
      form: i,
      value: d,
      hasConsumerStoppedPropagationRef: S,
      required: h,
      defaultChecked: Q(s) ? false : s,
      isFormControl: p,
      bubbleInput: E,
      setBubbleInput: w
    };
    return n.jsx(cs, {
      scope: o,
      ...j,
      children: us(f) ? f(j) : r
    });
  }
  var bt = "CheckboxTrigger", yt = u.forwardRef(({ __scopeCheckbox: e, onKeyDown: o, onClick: t, ...r }, s) => {
    const { control: a, value: i, disabled: l, checked: c, required: h, setControl: d, setChecked: f, hasConsumerStoppedPropagationRef: m, isFormControl: x, bubbleInput: v } = Te(bt, e), y = J(s, d), E = u.useRef(c);
    return u.useEffect(() => {
      const w = a == null ? void 0 : a.form;
      if (w) {
        const S = () => f(E.current);
        return w.addEventListener("reset", S), () => w.removeEventListener("reset", S);
      }
    }, [
      a,
      f
    ]), n.jsx(F.button, {
      type: "button",
      role: "checkbox",
      "aria-checked": Q(c) ? "mixed" : c,
      "aria-required": h,
      "data-state": Et(c),
      "data-disabled": l ? "" : void 0,
      disabled: l,
      value: i,
      ...r,
      ref: y,
      onKeyDown: $(o, (w) => {
        w.key === "Enter" && w.preventDefault();
      }),
      onClick: $(t, (w) => {
        f((S) => Q(S) ? true : !S), v && x && (m.current = w.isPropagationStopped(), m.current || w.stopPropagation());
      })
    });
  });
  yt.displayName = bt;
  var wt = u.forwardRef((e, o) => {
    const { __scopeCheckbox: t, name: r, checked: s, defaultChecked: a, required: i, disabled: l, value: c, onCheckedChange: h, form: d, ...f } = e;
    return n.jsx(ds, {
      __scopeCheckbox: t,
      checked: s,
      defaultChecked: a,
      disabled: l,
      required: i,
      onCheckedChange: h,
      name: r,
      form: d,
      value: c,
      internal_do_not_use_render: ({ isFormControl: m }) => n.jsxs(n.Fragment, {
        children: [
          n.jsx(yt, {
            ...f,
            ref: o,
            __scopeCheckbox: t
          }),
          m && n.jsx(Nt, {
            __scopeCheckbox: t
          })
        ]
      })
    });
  });
  wt.displayName = ve;
  var St = "CheckboxIndicator", jt = u.forwardRef((e, o) => {
    const { __scopeCheckbox: t, forceMount: r, ...s } = e, a = Te(St, t);
    return n.jsx(ie, {
      present: r || Q(a.checked) || a.checked === true,
      children: n.jsx(F.span, {
        "data-state": Et(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...s,
        ref: o,
        style: {
          pointerEvents: "none",
          ...e.style
        }
      })
    });
  });
  jt.displayName = St;
  var Ct = "CheckboxBubbleInput", Nt = u.forwardRef(({ __scopeCheckbox: e, ...o }, t) => {
    const { control: r, hasConsumerStoppedPropagationRef: s, checked: a, defaultChecked: i, required: l, disabled: c, name: h, value: d, form: f, bubbleInput: m, setBubbleInput: x } = Te(Ct, e), v = J(t, x), y = is(a), E = en(r);
    u.useEffect(() => {
      const S = m;
      if (!S) return;
      const p = window.HTMLInputElement.prototype, N = Object.getOwnPropertyDescriptor(p, "checked").set, R = !s.current;
      if (y !== a && N) {
        const M = new Event("click", {
          bubbles: R
        });
        S.indeterminate = Q(a), N.call(S, Q(a) ? false : a), S.dispatchEvent(M);
      }
    }, [
      m,
      y,
      a,
      s
    ]);
    const w = u.useRef(Q(a) ? false : a);
    return n.jsx(F.input, {
      type: "checkbox",
      "aria-hidden": true,
      defaultChecked: i ?? w.current,
      required: l,
      disabled: c,
      name: h,
      value: d,
      form: f,
      ...o,
      tabIndex: -1,
      ref: v,
      style: {
        ...o.style,
        ...E,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
        transform: "translateX(-100%)"
      }
    });
  });
  Nt.displayName = Ct;
  function us(e) {
    return typeof e == "function";
  }
  function Q(e) {
    return e === "indeterminate";
  }
  function Et(e) {
    return Q(e) ? "indeterminate" : e ? "checked" : "unchecked";
  }
  function Be({ className: e, ...o }) {
    return n.jsx(wt, {
      "data-slot": "checkbox",
      className: H("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", e),
      ...o,
      children: n.jsx(jt, {
        "data-slot": "checkbox-indicator",
        className: "flex items-center justify-center text-current transition-none",
        children: n.jsx(jn, {
          className: "size-3.5"
        })
      })
    });
  }
  function hs(e, o, t, r) {
    var s = this, a = u.useRef(null), i = u.useRef(0), l = u.useRef(0), c = u.useRef(null), h = u.useRef([]), d = u.useRef(), f = u.useRef(), m = u.useRef(e), x = u.useRef(true);
    m.current = e;
    var v = typeof window < "u", y = !o && o !== 0 && v;
    if (typeof e != "function") throw new TypeError("Expected a function");
    o = +o || 0;
    var E = !!(t = t || {}).leading, w = !("trailing" in t) || !!t.trailing, S = "maxWait" in t, p = "debounceOnServer" in t && !!t.debounceOnServer, j = S ? Math.max(+t.maxWait || 0, o) : null;
    u.useEffect(function() {
      return x.current = true, function() {
        x.current = false;
      };
    }, []);
    var N = u.useMemo(function() {
      var R = function(P) {
        var I = h.current, K = d.current;
        return h.current = d.current = null, i.current = P, l.current = l.current || P, f.current = m.current.apply(K, I);
      }, M = function(P, I) {
        y && cancelAnimationFrame(c.current), c.current = y ? requestAnimationFrame(P) : setTimeout(P, I);
      }, _ = function(P) {
        if (!x.current) return false;
        var I = P - a.current;
        return !a.current || I >= o || I < 0 || S && P - i.current >= j;
      }, k = function(P) {
        return c.current = null, w && h.current ? R(P) : (h.current = d.current = null, f.current);
      }, C = function P() {
        var I = Date.now();
        if (E && l.current === i.current && g(), _(I)) return k(I);
        if (x.current) {
          var K = o - (I - a.current), ee = S ? Math.min(K, j - (I - i.current)) : K;
          M(P, ee);
        }
      }, g = function() {
        r && r({});
      }, T = function() {
        if (v || p) {
          var P = Date.now(), I = _(P);
          if (h.current = [].slice.call(arguments), d.current = s, a.current = P, I) {
            if (!c.current && x.current) return i.current = a.current, M(C, o), E ? R(a.current) : f.current;
            if (S) return M(C, o), R(a.current);
          }
          return c.current || M(C, o), f.current;
        }
      };
      return T.cancel = function() {
        c.current && (y ? cancelAnimationFrame(c.current) : clearTimeout(c.current)), i.current = 0, h.current = a.current = d.current = c.current = null;
      }, T.isPending = function() {
        return !!c.current;
      }, T.flush = function() {
        return c.current ? k(Date.now()) : f.current;
      }, T;
    }, [
      E,
      S,
      o,
      j,
      w,
      y,
      v,
      p,
      r
    ]);
    return N;
  }
  function fs(e, o) {
    return e === o;
  }
  function re(e, o, t) {
    var r = fs, s = u.useRef(e), a = u.useState({})[1], i = hs(u.useCallback(function(c) {
      s.current = c, a({});
    }, [
      a
    ]), o, t, a), l = u.useRef(e);
    return r(l.current, e) || (i(e), l.current = e), [
      s.current,
      i
    ];
  }
  const Ve = (e) => {
    if (e.length === 0) return;
    const o = new Uint8Array(e);
    for (let t = o.length - 1; t >= 0; t--) if (o[t] < 255) return o[t]++, o.slice(0, t + 1);
  };
  function ms({ prly: e, entryKey: o, open: t, onOpenChange: r }) {
    const [s, a] = u.useState(""), [i, l] = u.useState(""), c = s !== o, h = u.useRef(t);
    u.useEffect(() => {
      async function p() {
        t && !h.current && (a(o ?? ""), l(W(await (e == null ? void 0 : e.tree.get(D(o ?? "")))))), h.current = t;
      }
      p();
    }, [
      t,
      o,
      e
    ]);
    const { mutate: d, isPending: f } = oe({
      mutationFn: async (p) => {
        let j = {
          key: p.key,
          value: p.value
        };
        console.log("updating entry", p);
        const N = p.newKey !== void 0 && p.newKey !== p.key;
        if (N) {
          if (await (e == null ? void 0 : e.tree.get(D(p.newKey)))) throw new Error("Key already in tree");
          j = {
            key: p.newKey,
            value: p.value
          };
        }
        await (e == null ? void 0 : e.tree.insert(D(j.key), D(j.value))), N && (console.log("moving entry", p.key, p.newKey), await (e == null ? void 0 : e.tree.delete(D(p.key))));
      },
      onSuccess: () => {
        r(false), z.success("Entry updated"), U.getState().treeUpdated((e == null ? void 0 : e.path) ?? "");
      },
      onError: (p) => {
        z.error(p.message);
      }
    }), { mutate: m, isPending: x } = oe({
      mutationFn: async (p) => {
        const j = await (e == null ? void 0 : e.tree.get(D(p.key)));
        if (!j) throw new Error("Entry not found");
        if (await (e == null ? void 0 : e.tree.get(D(p.newKey)))) throw new Error("Key already in tree");
        console.log("cloning entry", p.newKey, j), await (e == null ? void 0 : e.tree.insert(D(p.newKey), j));
      },
      onSuccess: () => {
        z.success("Entry cloned"), U.getState().treeUpdated((e == null ? void 0 : e.path) ?? "");
      },
      onError: (p) => {
        z.error(p.message);
      }
    }), { mutate: v } = oe({
      mutationFn: async (p) => {
        await (e == null ? void 0 : e.tree.delete(D(p.key)));
      },
      onSuccess: () => {
        z.success("Entry deleted"), r(false), U.getState().treeUpdated((e == null ? void 0 : e.path) ?? "");
      },
      onError: (p) => {
        z.error(p.message);
      }
    }), y = (p) => {
      p.preventDefault(), console.log("updating entry", s, i), d({
        key: o,
        value: i,
        newKey: s
      });
    }, E = (p) => {
      p.preventDefault(), m({
        key: o,
        newKey: s
      });
    }, w = (p) => {
      p.preventDefault(), v({
        key: o
      });
    }, S = (p) => {
      p.preventDefault(), r(false);
    };
    return n.jsx(Qe, {
      open: t,
      onOpenChange: r,
      children: n.jsxs(Je, {
        children: [
          n.jsx(Ze, {
            children: n.jsxs(et, {
              className: "text-lg font-light flex items-center gap-2",
              children: [
                n.jsx(_n, {
                  className: "w-4 h-4 text-yellow-500"
                }),
                o
              ]
            })
          }),
          n.jsxs("form", {
            onSubmit: y,
            className: "space-y-4",
            children: [
              n.jsx(X, {
                type: "text",
                placeholder: "Key",
                name: "key",
                value: s,
                onChange: (p) => a(p.target.value)
              }),
              n.jsx(Ce, {
                placeholder: "Value",
                name: "value",
                value: i,
                onChange: (p) => l(p.target.value)
              }),
              n.jsxs(tt, {
                className: "mt-4",
                children: [
                  n.jsx(O, {
                    onClick: w,
                    variant: "destructive",
                    className: "mr-auto",
                    children: "Delete"
                  }),
                  n.jsx(O, {
                    onClick: S,
                    variant: "outline",
                    children: "Cancel"
                  }),
                  n.jsx(O, {
                    variant: "outline",
                    onClick: E,
                    className: "bg-blue-500",
                    disabled: !c || x,
                    children: "Clone"
                  }),
                  n.jsx(O, {
                    type: "submit",
                    disabled: f,
                    children: f ? "Updating..." : "Update"
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  }
  const xs = (e) => e ? e.map((o) => ({
    key: W(o[0]),
    value: W(o[1])
  })) : [], We = 50, Ke = 32, gs = 350, ps = ({ prly: e, treePath: o, currentRoot: t }) => {
    const r = e == null ? void 0 : e.tree, [s, a] = u.useState("prefix"), [i, l] = u.useState(null), [c, h] = u.useState(null), [d, f] = u.useState(true), [m, x] = u.useState(false), [v] = re(i, 500), [y] = re(c, 500), [E] = re(d, 500), [w] = re(m, 500), [S] = u.useState(gs), [p, j] = u.useState(null), N = u.useMemo(() => ({
      startBound: v ?? void 0,
      endBound: y ?? void 0,
      startInclusive: E,
      endInclusive: w
    }), [
      v,
      y,
      E,
      w
    ]), R = u.useRef(null), M = u.useRef(null), { data: _, isLoading: k } = _e({
      queryKey: [
        "tree",
        o,
        t,
        "count"
      ],
      queryFn: async () => r ? r.countAllItems() : 0,
      enabled: !!r,
      staleTime: 1 / 0,
      placeholderData: (b) => b
    }), { data: C, isLoading: g } = _e({
      queryKey: [
        "tree",
        o,
        t,
        "count",
        N
      ],
      queryFn: async () => {
        if (!r) return 0;
        if (!N.startBound && !N.endBound) return _ ?? 0;
        let b = 0, A = 0;
        const G = 1e3;
        for (; ; ) try {
          const L = await r.scanItems({
            ...N,
            offset: A,
            limit: G
          });
          if (b += L.items.length, !L.hasNextPage || L.items.length < G) break;
          A += L.items.length;
        } catch (L) {
          throw console.error("Error counting filtered items:", L), z.error("Could not determine filtered item count."), L;
        }
        return b;
      },
      enabled: !!r && !k
    }), { data: T, fetchNextPage: P, hasNextPage: I, isFetchingNextPage: K, isLoading: ee, isError: Dt, error: Lt } = nt({
      queryKey: [
        "tree",
        o,
        t,
        "scan",
        N
      ],
      queryFn: async ({ pageParam: b = 0 }) => {
        if (!r) throw new Error("Tree not available for fetching items.");
        const A = {
          ...N,
          offset: b,
          limit: We
        };
        return r.scanItems(A);
      },
      initialPageParam: 0,
      getNextPageParam: (b, A, G) => {
        if (b.hasNextPage) return G + b.items.length;
      },
      enabled: !!r && C !== void 0 && C > 0
    }), Me = u.useMemo(() => (T == null ? void 0 : T.pages.flatMap((b) => b.items)) ?? [], [
      T
    ]), le = u.useMemo(() => xs(Me), [
      Me
    ]), ce = vt({
      count: C ?? 0,
      getScrollElement: () => M.current,
      estimateSize: () => Ke,
      overscan: 10
    }), de = ce.getVirtualItems();
    u.useEffect(() => {
      if (de.length === 0 || !I || K) return;
      const b = de[de.length - 1];
      b && b.index >= le.length - Math.floor(We / 2) && P();
    }, [
      de,
      I,
      K,
      P,
      le.length
    ]);
    const ue = tn({
      tree: r,
      treePath: o
    }), Ot = () => {
      if (!r) {
        z.error("Tree instance not available for download.");
        return;
      }
      ue.mutate(N);
    }, Ft = () => {
      l(null), h(null), f(true), x(false), R.current && (R.current.scrollTop = 0), ce.scrollToOffset(0), z.info("Filters cleared.");
    }, Ht = (b) => {
      const A = b, G = s;
      if (a(A), A === "prefix" && G === "range") if (i) {
        const L = Ve(i);
        f(true), h(L === void 0 ? null : L), x(false);
      } else f(true), h(null), x(false);
    }, $t = (b) => {
      const A = b.trim();
      if (!A) l(null), f(true), h(null), x(false);
      else {
        const G = D(A), L = Ve(G);
        l(G), f(true), h(L === void 0 ? null : L), x(false);
      }
    }, Bt = (b) => {
      l(b.trim() ? D(b.trim()) : null);
    }, Vt = (b) => {
      h(b.trim() ? D(b.trim()) : null);
    }, Wt = (b) => {
      f(b);
    }, Kt = (b) => {
      x(b);
    }, Ut = () => k || g && C === void 0 && (N.startBound || N.endBound) ? n.jsxs("div", {
      className: "flex flex-col items-center justify-center p-4",
      children: [
        n.jsx(Y, {
          className: "h-8 w-8 animate-spin text-muted-foreground mb-2"
        }),
        n.jsx("p", {
          className: "text-sm text-muted-foreground",
          children: "Loading item counts..."
        })
      ]
    }) : ee && le.length === 0 && (C ?? 0) > 0 ? n.jsxs("div", {
      className: "flex flex-col items-center justify-center p-4",
      children: [
        n.jsx(Y, {
          className: "h-8 w-8 animate-spin text-primary mb-2"
        }),
        n.jsx("p", {
          className: "text-sm text-muted-foreground",
          children: "Fetching items..."
        })
      ]
    }) : Dt ? n.jsxs("div", {
      className: "flex flex-col items-center justify-center p-4 text-destructive",
      children: [
        n.jsx(he, {
          className: "h-8 w-8 mb-2"
        }),
        n.jsx("p", {
          className: "text-sm font-semibold",
          children: "Error loading items"
        }),
        n.jsx("p", {
          className: "text-xs",
          children: (Lt == null ? void 0 : Lt.message) || "An unknown error occurred."
        })
      ]
    }) : (C ?? 0) === 0 && (N.startBound || N.endBound) ? n.jsxs("div", {
      className: "flex flex-col items-center justify-center p-4 text-center",
      children: [
        n.jsx(Se, {
          className: "h-12 w-12 text-muted-foreground/50 mb-3"
        }),
        n.jsx("p", {
          className: "text-muted-foreground text-sm",
          children: "No items match the current filters."
        }),
        _ !== void 0 && n.jsxs("p", {
          className: "text-xs text-muted-foreground/80 mt-1",
          children: [
            "(Total items in tree: ",
            _.toLocaleString(),
            ")"
          ]
        })
      ]
    }) : (C ?? 0) === 0 && !N.startBound && !N.endBound ? n.jsxs("div", {
      className: "flex flex-col items-center justify-center p-4 text-center",
      children: [
        n.jsx(Se, {
          className: "h-12 w-12 text-muted-foreground/50 mb-3"
        }),
        n.jsx("p", {
          className: "text-muted-foreground text-sm",
          children: "Tree is empty."
        })
      ]
    }) : n.jsx(n.Fragment, {
      children: n.jsxs("div", {
        ref: R,
        style: {
          border: "1px solid hsl(var(--border))",
          borderRadius: "var(--radius-md)"
        },
        className: "bg-muted/20 dark:bg-muted/10 flex-1 overflow-hidden min-h-0 flex flex-col",
        children: [
          (K || ee && le.length === 0 && (C ?? 0) > 0) && n.jsxs("div", {
            className: "sticky top-2 left-1/2 -translate-x-1/2 z-20 bg-background/80 backdrop-blur-sm p-2 rounded-md shadow-lg text-xs flex items-center",
            children: [
              n.jsx(Y, {
                className: "h-4 w-4 animate-spin inline-block mr-1"
              }),
              "Loading..."
            ]
          }),
          n.jsx("div", {
            ref: M,
            style: {
              position: "relative",
              borderCollapse: "collapse"
            },
            className: "h-full overflow-auto",
            children: n.jsx("div", {
              style: {
                height: ce.getTotalSize(),
                width: "100%",
                position: "relative"
              },
              children: ce.getVirtualItems().map((b) => {
                const A = le[b.index];
                return n.jsx("div", {
                  "data-row-key": A == null ? void 0 : A.key,
                  ref: ce.measureElement,
                  "data-index": b.index,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: `${b.size}px`,
                    transform: `translateY(${b.start}px)`
                  },
                  className: H("flex cursor-pointer", b.index % 2 === 0 ? "hover:bg-muted/20" : "bg-muted/10 dark:bg-black/10 hover:bg-muted/30"),
                  onPointerDown: () => {
                    j((A == null ? void 0 : A.key) ?? null);
                  },
                  children: A ? n.jsxs(n.Fragment, {
                    children: [
                      n.jsx("div", {
                        className: "font-mono text-sm text-muted-foreground py-1 px-3 align-top overflow-hidden text-ellipsis",
                        title: A.key,
                        style: {
                          flex: `0 0 ${S}px`,
                          width: `${S}px`
                        },
                        children: A.key
                      }),
                      n.jsx("div", {
                        className: "font-mono text-sm py-1 px-3 align-top text-ellipsis overflow-hidden whitespace-nowrap",
                        style: {
                          flex: "1 1 0"
                        },
                        title: A.value,
                        children: A.value
                      })
                    ]
                  }) : n.jsx("div", {
                    className: "text-xs text-muted-foreground/70 h-full text-center py-2.5 px-3",
                    style: {
                      height: `${Ke}px`
                    },
                    children: "\xA0"
                  })
                }, b.key);
              })
            })
          })
        ]
      })
    });
    return n.jsxs(n.Fragment, {
      children: [
        n.jsxs("div", {
          className: "flex flex-col space-y-3 h-full min-h-0",
          children: [
            n.jsxs("div", {
              className: " shadow-sm space-y-4 rounded-lg bg-card",
              children: [
                n.jsxs("div", {
                  className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-3",
                  children: [
                    n.jsx(Ee, {
                      value: s,
                      onValueChange: Ht,
                      className: "w-full sm:w-[20rem]",
                      children: n.jsxs(ke, {
                        className: "h-9 grid w-full grid-cols-2",
                        children: [
                          n.jsx(fe, {
                            value: "prefix",
                            className: "text-xs data-[state=active]:bg-primary/10 rounded-md h-full",
                            children: n.jsxs("div", {
                              className: "flex items-center justify-center mr-1 px-2 py-1.5",
                              children: [
                                n.jsx(wn, {
                                  className: "mr-1.5 h-3.5 w-3.5"
                                }),
                                "Prefix"
                              ]
                            })
                          }),
                          n.jsx(fe, {
                            value: "range",
                            className: "text-xs data-[state=active]:bg-primary/10 rounded-md h-full",
                            children: n.jsxs("div", {
                              className: "flex items-center justify-center mr-1 px-2 py-1.5",
                              children: [
                                n.jsx(Dn, {
                                  className: "mr-1.5 h-3.5 w-3.5"
                                }),
                                "Range"
                              ]
                            })
                          })
                        ]
                      })
                    }),
                    n.jsxs("div", {
                      className: "flex items-center gap-2 pt-2 justify-end w-full sm:w-auto",
                      children: [
                        n.jsxs(O, {
                          onClick: Ft,
                          size: "sm",
                          variant: "outline",
                          className: "h-9",
                          disabled: g || ee || k || ue.isPending,
                          children: [
                            n.jsx(he, {
                              className: "mr-2 h-4 w-4"
                            }),
                            " Clear"
                          ]
                        }),
                        n.jsxs(O, {
                          onClick: Ot,
                          size: "sm",
                          variant: "outline",
                          className: "h-9",
                          disabled: ue.isPending || ee || g || (C ?? 0) === 0,
                          title: (C ?? 0) === 0 ? "No items in current scan to download" : "Download current scan results as JSONL",
                          children: [
                            ue.isPending ? n.jsx(Y, {
                              className: "mr-2 h-4 w-4 animate-spin"
                            }) : n.jsx(nn, {
                              className: "mr-2 h-4 w-4"
                            }),
                            "Download"
                          ]
                        }),
                        n.jsxs("div", {
                          className: "text-right text-xs text-muted-foreground pt-1 pr-1",
                          children: [
                            (C ?? 0).toLocaleString(),
                            _ !== void 0 && _ !== (C ?? 0) && ` /\xA0${_.toLocaleString()}`
                          ]
                        })
                      ]
                    })
                  ]
                }),
                s === "range" && n.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4 items-start",
                  children: [
                    n.jsx("div", {
                      className: "flex flex-col space-y-1",
                      children: n.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          n.jsx(X, {
                            id: "startKey",
                            type: "text",
                            placeholder: "Start Key",
                            value: i ? W(i) : "",
                            onChange: (b) => Bt(b.target.value),
                            className: " "
                          }),
                          n.jsx(Be, {
                            id: "startInclusive",
                            checked: d,
                            onCheckedChange: (b) => Wt(!!b)
                          }),
                          n.jsx(me, {
                            htmlFor: "startInclusive",
                            className: "text-xs font-normal text-muted-foreground cursor-pointer",
                            children: "Incl."
                          })
                        ]
                      })
                    }),
                    n.jsx("div", {
                      className: "flex flex-col space-y-1",
                      children: n.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          n.jsx(X, {
                            id: "endKey",
                            type: "text",
                            placeholder: "End Key",
                            value: c ? W(c) : "",
                            onChange: (b) => Vt(b.target.value),
                            className: " "
                          }),
                          n.jsx(Be, {
                            id: "endInclusive",
                            checked: m,
                            onCheckedChange: (b) => Kt(!!b)
                          }),
                          n.jsx(me, {
                            htmlFor: "endInclusive",
                            className: "text-xs font-normal text-muted-foreground cursor-pointer",
                            children: "Incl."
                          })
                        ]
                      })
                    })
                  ]
                }),
                s === "prefix" && n.jsx("div", {
                  className: "flex flex-col space-y-1",
                  children: n.jsx(X, {
                    id: "prefixKey",
                    type: "text",
                    placeholder: "Prefix",
                    value: i ? W(i) : "",
                    onChange: (b) => $t(b.target.value)
                  })
                })
              ]
            }),
            Ut()
          ]
        }),
        n.jsx(ms, {
          prly: e,
          entryKey: p ?? "",
          open: p !== null,
          onOpenChange: (b) => {
            b || j(null);
          }
        })
      ]
    });
  };
  function vs(e, [o, t]) {
    return Math.min(t, Math.max(o, e));
  }
  function bs(e, o) {
    return u.useReducer((t, r) => o[t][r] ?? t, e);
  }
  var Pe = "ScrollArea", [kt, nr] = je(Pe), [ys, V] = kt(Pe), Tt = u.forwardRef((e, o) => {
    const { __scopeScrollArea: t, type: r = "hover", dir: s, scrollHideDelay: a = 600, ...i } = e, [l, c] = u.useState(null), [h, d] = u.useState(null), [f, m] = u.useState(null), [x, v] = u.useState(null), [y, E] = u.useState(null), [w, S] = u.useState(0), [p, j] = u.useState(0), [N, R] = u.useState(false), [M, _] = u.useState(false), k = J(o, (g) => c(g)), C = Ge(s);
    return n.jsx(ys, {
      scope: t,
      type: r,
      dir: C,
      scrollHideDelay: a,
      scrollArea: l,
      viewport: h,
      onViewportChange: d,
      content: f,
      onContentChange: m,
      scrollbarX: x,
      onScrollbarXChange: v,
      scrollbarXEnabled: N,
      onScrollbarXEnabledChange: R,
      scrollbarY: y,
      onScrollbarYChange: E,
      scrollbarYEnabled: M,
      onScrollbarYEnabledChange: _,
      onCornerWidthChange: S,
      onCornerHeightChange: j,
      children: n.jsx(F.div, {
        dir: C,
        ...i,
        ref: k,
        style: {
          position: "relative",
          "--radix-scroll-area-corner-width": w + "px",
          "--radix-scroll-area-corner-height": p + "px",
          ...e.style
        }
      })
    });
  });
  Tt.displayName = Pe;
  var Pt = "ScrollAreaViewport", ws = u.forwardRef((e, o) => {
    const { __scopeScrollArea: t, children: r, nonce: s, ...a } = e, i = V(Pt, t), l = u.useRef(null), c = J(o, l, i.onViewportChange);
    return n.jsxs(n.Fragment, {
      children: [
        n.jsx("style", {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: s
        }),
        n.jsx(F.div, {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: c,
          style: {
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: n.jsx("div", {
            ref: i.onContentChange,
            style: {
              minWidth: "100%",
              display: "table"
            },
            children: r
          })
        })
      ]
    });
  });
  ws.displayName = Pt;
  var q = "ScrollAreaScrollbar", Ss = u.forwardRef((e, o) => {
    const { forceMount: t, ...r } = e, s = V(q, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = s, l = e.orientation === "horizontal";
    return u.useEffect(() => (l ? a(true) : i(true), () => {
      l ? a(false) : i(false);
    }), [
      l,
      a,
      i
    ]), s.type === "hover" ? n.jsx(js, {
      ...r,
      ref: o,
      forceMount: t
    }) : s.type === "scroll" ? n.jsx(Cs, {
      ...r,
      ref: o,
      forceMount: t
    }) : s.type === "auto" ? n.jsx(It, {
      ...r,
      ref: o,
      forceMount: t
    }) : s.type === "always" ? n.jsx(Ie, {
      ...r,
      ref: o
    }) : null;
  });
  Ss.displayName = q;
  var js = u.forwardRef((e, o) => {
    const { forceMount: t, ...r } = e, s = V(q, e.__scopeScrollArea), [a, i] = u.useState(false);
    return u.useEffect(() => {
      const l = s.scrollArea;
      let c = 0;
      if (l) {
        const h = () => {
          window.clearTimeout(c), i(true);
        }, d = () => {
          c = window.setTimeout(() => i(false), s.scrollHideDelay);
        };
        return l.addEventListener("pointerenter", h), l.addEventListener("pointerleave", d), () => {
          window.clearTimeout(c), l.removeEventListener("pointerenter", h), l.removeEventListener("pointerleave", d);
        };
      }
    }, [
      s.scrollArea,
      s.scrollHideDelay
    ]), n.jsx(ie, {
      present: t || a,
      children: n.jsx(It, {
        "data-state": a ? "visible" : "hidden",
        ...r,
        ref: o
      })
    });
  }), Cs = u.forwardRef((e, o) => {
    const { forceMount: t, ...r } = e, s = V(q, e.__scopeScrollArea), a = e.orientation === "horizontal", i = ye(() => c("SCROLL_END"), 100), [l, c] = bs("hidden", {
      hidden: {
        SCROLL: "scrolling"
      },
      scrolling: {
        SCROLL_END: "idle",
        POINTER_ENTER: "interacting"
      },
      interacting: {
        SCROLL: "interacting",
        POINTER_LEAVE: "idle"
      },
      idle: {
        HIDE: "hidden",
        SCROLL: "scrolling",
        POINTER_ENTER: "interacting"
      }
    });
    return u.useEffect(() => {
      if (l === "idle") {
        const h = window.setTimeout(() => c("HIDE"), s.scrollHideDelay);
        return () => window.clearTimeout(h);
      }
    }, [
      l,
      s.scrollHideDelay,
      c
    ]), u.useEffect(() => {
      const h = s.viewport, d = a ? "scrollLeft" : "scrollTop";
      if (h) {
        let f = h[d];
        const m = () => {
          const x = h[d];
          f !== x && (c("SCROLL"), i()), f = x;
        };
        return h.addEventListener("scroll", m), () => h.removeEventListener("scroll", m);
      }
    }, [
      s.viewport,
      a,
      c,
      i
    ]), n.jsx(ie, {
      present: t || l !== "hidden",
      children: n.jsx(Ie, {
        "data-state": l === "hidden" ? "hidden" : "visible",
        ...r,
        ref: o,
        onPointerEnter: $(e.onPointerEnter, () => c("POINTER_ENTER")),
        onPointerLeave: $(e.onPointerLeave, () => c("POINTER_LEAVE"))
      })
    });
  }), It = u.forwardRef((e, o) => {
    const t = V(q, e.__scopeScrollArea), { forceMount: r, ...s } = e, [a, i] = u.useState(false), l = e.orientation === "horizontal", c = ye(() => {
      if (t.viewport) {
        const h = t.viewport.offsetWidth < t.viewport.scrollWidth, d = t.viewport.offsetHeight < t.viewport.scrollHeight;
        i(l ? h : d);
      }
    }, 10);
    return ae(t.viewport, c), ae(t.content, c), n.jsx(ie, {
      present: r || a,
      children: n.jsx(Ie, {
        "data-state": a ? "visible" : "hidden",
        ...s,
        ref: o
      })
    });
  }), Ie = u.forwardRef((e, o) => {
    const { orientation: t = "vertical", ...r } = e, s = V(q, e.__scopeScrollArea), a = u.useRef(null), i = u.useRef(0), [l, c] = u.useState({
      content: 0,
      viewport: 0,
      scrollbar: {
        size: 0,
        paddingStart: 0,
        paddingEnd: 0
      }
    }), h = At(l.viewport, l.content), d = {
      ...r,
      sizes: l,
      onSizesChange: c,
      hasThumb: h > 0 && h < 1,
      onThumbChange: (m) => a.current = m,
      onThumbPointerUp: () => i.current = 0,
      onThumbPointerDown: (m) => i.current = m
    };
    function f(m, x) {
      return Ms(m, i.current, l, x);
    }
    return t === "horizontal" ? n.jsx(Ns, {
      ...d,
      ref: o,
      onThumbPositionChange: () => {
        if (s.viewport && a.current) {
          const m = s.viewport.scrollLeft, x = Ue(m, l, s.dir);
          a.current.style.transform = `translate3d(${x}px, 0, 0)`;
        }
      },
      onWheelScroll: (m) => {
        s.viewport && (s.viewport.scrollLeft = m);
      },
      onDragScroll: (m) => {
        s.viewport && (s.viewport.scrollLeft = f(m, s.dir));
      }
    }) : t === "vertical" ? n.jsx(Es, {
      ...d,
      ref: o,
      onThumbPositionChange: () => {
        if (s.viewport && a.current) {
          const m = s.viewport.scrollTop, x = Ue(m, l);
          a.current.style.transform = `translate3d(0, ${x}px, 0)`;
        }
      },
      onWheelScroll: (m) => {
        s.viewport && (s.viewport.scrollTop = m);
      },
      onDragScroll: (m) => {
        s.viewport && (s.viewport.scrollTop = f(m));
      }
    }) : null;
  }), Ns = u.forwardRef((e, o) => {
    const { sizes: t, onSizesChange: r, ...s } = e, a = V(q, e.__scopeScrollArea), [i, l] = u.useState(), c = u.useRef(null), h = J(o, c, a.onScrollbarXChange);
    return u.useEffect(() => {
      c.current && l(getComputedStyle(c.current));
    }, [
      c
    ]), n.jsx(Mt, {
      "data-orientation": "horizontal",
      ...s,
      ref: h,
      sizes: t,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": be(t) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, f) => {
        if (a.viewport) {
          const m = a.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(m), zt(m, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: ge(i.paddingLeft),
            paddingEnd: ge(i.paddingRight)
          }
        });
      }
    });
  }), Es = u.forwardRef((e, o) => {
    const { sizes: t, onSizesChange: r, ...s } = e, a = V(q, e.__scopeScrollArea), [i, l] = u.useState(), c = u.useRef(null), h = J(o, c, a.onScrollbarYChange);
    return u.useEffect(() => {
      c.current && l(getComputedStyle(c.current));
    }, [
      c
    ]), n.jsx(Mt, {
      "data-orientation": "vertical",
      ...s,
      ref: h,
      sizes: t,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": be(t) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, f) => {
        if (a.viewport) {
          const m = a.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(m), zt(m, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: ge(i.paddingTop),
            paddingEnd: ge(i.paddingBottom)
          }
        });
      }
    });
  }), [ks, Rt] = kt(q), Mt = u.forwardRef((e, o) => {
    const { __scopeScrollArea: t, sizes: r, hasThumb: s, onThumbChange: a, onThumbPointerUp: i, onThumbPointerDown: l, onThumbPositionChange: c, onDragScroll: h, onWheelScroll: d, onResize: f, ...m } = e, x = V(q, t), [v, y] = u.useState(null), E = J(o, (k) => y(k)), w = u.useRef(null), S = u.useRef(""), p = x.viewport, j = r.content - r.viewport, N = Z(d), R = Z(c), M = ye(f, 10);
    function _(k) {
      if (w.current) {
        const C = k.clientX - w.current.left, g = k.clientY - w.current.top;
        h({
          x: C,
          y: g
        });
      }
    }
    return u.useEffect(() => {
      const k = (C) => {
        const g = C.target;
        (v == null ? void 0 : v.contains(g)) && N(C, j);
      };
      return document.addEventListener("wheel", k, {
        passive: false
      }), () => document.removeEventListener("wheel", k, {
        passive: false
      });
    }, [
      p,
      v,
      j,
      N
    ]), u.useEffect(R, [
      r,
      R
    ]), ae(v, M), ae(x.content, M), n.jsx(ks, {
      scope: t,
      scrollbar: v,
      hasThumb: s,
      onThumbChange: Z(a),
      onThumbPointerUp: Z(i),
      onThumbPositionChange: R,
      onThumbPointerDown: Z(l),
      children: n.jsx(F.div, {
        ...m,
        ref: E,
        style: {
          position: "absolute",
          ...m.style
        },
        onPointerDown: $(e.onPointerDown, (k) => {
          k.button === 0 && (k.target.setPointerCapture(k.pointerId), w.current = v.getBoundingClientRect(), S.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", x.viewport && (x.viewport.style.scrollBehavior = "auto"), _(k));
        }),
        onPointerMove: $(e.onPointerMove, _),
        onPointerUp: $(e.onPointerUp, (k) => {
          const C = k.target;
          C.hasPointerCapture(k.pointerId) && C.releasePointerCapture(k.pointerId), document.body.style.webkitUserSelect = S.current, x.viewport && (x.viewport.style.scrollBehavior = ""), w.current = null;
        })
      })
    });
  }), xe = "ScrollAreaThumb", Ts = u.forwardRef((e, o) => {
    const { forceMount: t, ...r } = e, s = Rt(xe, e.__scopeScrollArea);
    return n.jsx(ie, {
      present: t || s.hasThumb,
      children: n.jsx(Ps, {
        ref: o,
        ...r
      })
    });
  }), Ps = u.forwardRef((e, o) => {
    const { __scopeScrollArea: t, style: r, ...s } = e, a = V(xe, t), i = Rt(xe, t), { onThumbPositionChange: l } = i, c = J(o, (f) => i.onThumbChange(f)), h = u.useRef(void 0), d = ye(() => {
      h.current && (h.current(), h.current = void 0);
    }, 100);
    return u.useEffect(() => {
      const f = a.viewport;
      if (f) {
        const m = () => {
          if (d(), !h.current) {
            const x = As(f, l);
            h.current = x, l();
          }
        };
        return l(), f.addEventListener("scroll", m), () => f.removeEventListener("scroll", m);
      }
    }, [
      a.viewport,
      d,
      l
    ]), n.jsx(F.div, {
      "data-state": i.hasThumb ? "visible" : "hidden",
      ...s,
      ref: c,
      style: {
        width: "var(--radix-scroll-area-thumb-width)",
        height: "var(--radix-scroll-area-thumb-height)",
        ...r
      },
      onPointerDownCapture: $(e.onPointerDownCapture, (f) => {
        const x = f.target.getBoundingClientRect(), v = f.clientX - x.left, y = f.clientY - x.top;
        i.onThumbPointerDown({
          x: v,
          y
        });
      }),
      onPointerUp: $(e.onPointerUp, i.onThumbPointerUp)
    });
  });
  Ts.displayName = xe;
  var Re = "ScrollAreaCorner", Is = u.forwardRef((e, o) => {
    const t = V(Re, e.__scopeScrollArea), r = !!(t.scrollbarX && t.scrollbarY);
    return t.type !== "scroll" && r ? n.jsx(Rs, {
      ...e,
      ref: o
    }) : null;
  });
  Is.displayName = Re;
  var Rs = u.forwardRef((e, o) => {
    const { __scopeScrollArea: t, ...r } = e, s = V(Re, t), [a, i] = u.useState(0), [l, c] = u.useState(0), h = !!(a && l);
    return ae(s.scrollbarX, () => {
      var _a;
      const d = ((_a = s.scrollbarX) == null ? void 0 : _a.offsetHeight) || 0;
      s.onCornerHeightChange(d), c(d);
    }), ae(s.scrollbarY, () => {
      var _a;
      const d = ((_a = s.scrollbarY) == null ? void 0 : _a.offsetWidth) || 0;
      s.onCornerWidthChange(d), i(d);
    }), h ? n.jsx(F.div, {
      ...r,
      ref: o,
      style: {
        width: a,
        height: l,
        position: "absolute",
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }) : null;
  });
  function ge(e) {
    return e ? parseInt(e, 10) : 0;
  }
  function At(e, o) {
    const t = e / o;
    return isNaN(t) ? 0 : t;
  }
  function be(e) {
    const o = At(e.viewport, e.content), t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - t) * o;
    return Math.max(r, 18);
  }
  function Ms(e, o, t, r = "ltr") {
    const s = be(t), a = s / 2, i = o || a, l = s - i, c = t.scrollbar.paddingStart + i, h = t.scrollbar.size - t.scrollbar.paddingEnd - l, d = t.content - t.viewport, f = r === "ltr" ? [
      0,
      d
    ] : [
      d * -1,
      0
    ];
    return _t([
      c,
      h
    ], f)(e);
  }
  function Ue(e, o, t = "ltr") {
    const r = be(o), s = o.scrollbar.paddingStart + o.scrollbar.paddingEnd, a = o.scrollbar.size - s, i = o.content - o.viewport, l = a - r, c = t === "ltr" ? [
      0,
      i
    ] : [
      i * -1,
      0
    ], h = vs(e, c);
    return _t([
      0,
      i
    ], [
      0,
      l
    ])(h);
  }
  function _t(e, o) {
    return (t) => {
      if (e[0] === e[1] || o[0] === o[1]) return o[0];
      const r = (o[1] - o[0]) / (e[1] - e[0]);
      return o[0] + r * (t - e[0]);
    };
  }
  function zt(e, o) {
    return e > 0 && e < o;
  }
  var As = (e, o = () => {
  }) => {
    let t = {
      left: e.scrollLeft,
      top: e.scrollTop
    }, r = 0;
    return function s() {
      const a = {
        left: e.scrollLeft,
        top: e.scrollTop
      }, i = t.left !== a.left, l = t.top !== a.top;
      (i || l) && o(), t = a, r = window.requestAnimationFrame(s);
    }(), () => window.cancelAnimationFrame(r);
  };
  function ye(e, o) {
    const t = Z(e), r = u.useRef(0);
    return u.useEffect(() => () => window.clearTimeout(r.current), []), u.useCallback(() => {
      window.clearTimeout(r.current), r.current = window.setTimeout(t, o);
    }, [
      t,
      o
    ]);
  }
  function ae(e, o) {
    const t = Z(o);
    sn(() => {
      let r = 0;
      if (e) {
        const s = new ResizeObserver(() => {
          cancelAnimationFrame(r), r = window.requestAnimationFrame(t);
        });
        return s.observe(e), () => {
          window.cancelAnimationFrame(r), s.unobserve(e);
        };
      }
    }, [
      e,
      t
    ]);
  }
  const _s = ({ tree: e, treePath: o }) => {
    var _a;
    const [t, r] = u.useState(""), [s, a] = u.useState(""), i = oe({
      mutationFn: async ({ left: h, right: d }) => {
        const f = h.trim() ? we(h.trim()) : null, m = d.trim() ? we(d.trim()) : null;
        if (h.trim() && !f) throw new Error(`Invalid hex string for Left Root Hash: ${h}`);
        if (d.trim() && !m) throw new Error(`Invalid hex string for Right Root Hash: ${d}`);
        const v = (await e.diffRoots(f, m)).map((y) => ({
          key: W(y.key),
          left: y.leftValue ? W(y.leftValue) : void 0,
          right: y.rightValue ? W(y.rightValue) : void 0
        }));
        return {
          treePath: o,
          diffResult: v
        };
      },
      onSuccess: (h) => {
        U.getState().treeUpdated(o), z.success(`Diff computed with ${h.diffResult.length} differences.`), console.log(h);
      },
      onError: (h) => {
        U.getState().treeError(o, `Diff failed: ${h.message}`), z.error(`Diff failed: ${h.message}`);
      }
    }), l = () => {
      i.mutate({
        left: t,
        right: s
      });
    }, c = (_a = i.data) == null ? void 0 : _a.diffResult;
    return n.jsx(n.Fragment, {
      children: n.jsxs("div", {
        className: "space-y-2",
        children: [
          n.jsx("h4", {
            className: "font-medium text-sm",
            children: "Diff Hashes in this tree's store"
          }),
          n.jsxs("div", {
            className: "flex flex-col gap-2",
            children: [
              n.jsx(X, {
                placeholder: "Left",
                value: t,
                onChange: (h) => r(h.target.value),
                disabled: i.isPending
              }),
              n.jsx(X, {
                placeholder: "Right",
                value: s,
                onChange: (h) => a(h.target.value),
                disabled: i.isPending
              }),
              n.jsxs(O, {
                onClick: l,
                disabled: i.isPending,
                className: "w-full sm:w-auto",
                children: [
                  i.isPending ? n.jsx(Y, {
                    className: "mr-2 h-4 w-4 animate-spin"
                  }) : n.jsx(In, {
                    className: "mr-2 h-4 w-4"
                  }),
                  " ",
                  "Diff"
                ]
              })
            ]
          }),
          c && c.length > 0 && n.jsx(Tt, {
            className: "h-40 max-h-60 w-full rounded-md border p-2 mt-1 bg-muted/30",
            children: n.jsx("pre", {
              className: "text-xs text-left whitespace-pre-wrap break-all",
              children: c.map((h, d) => `Key: ${h.key}
  Left: ${h.left ?? "N/A"}
  Right: ${h.right ?? "N/A"}${d < c.length - 1 ? `
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500` : ""}`).join(`
`)
            })
          })
        ]
      })
    });
  }, zs = (e) => e ? Array.from(e).map((o) => o.toString(16).padStart(2, "0")).join("") : "null", Ds = (e, o) => {
    const t = {};
    let r = `${e.type}-${o}`, s = 0;
    const a = (i) => i ? zs(i) : void 0;
    switch (e.type) {
      case "Node":
        t.hash = a(e.hash), r = `node-${t.hash || o}`, s = e.pathIndices.length;
        break;
      case "InternalEntry":
        t.parentHash = a(e.parentHash), t.boundaryKey = e.boundaryKey ? W(e.boundaryKey) : void 0, t.childHash = a(e.childHash), r = `internal-${t.parentHash || o}-${e.entryIndex}`;
        break;
      case "LeafEntry":
        t.parentHash = a(e.parentHash), t.key = e.key ? W(e.key) : void 0, e.valueHash && (t.valueHash = a(e.valueHash)), r = `leaf-${t.parentHash || o}-${e.entryIndex}`;
        break;
    }
    return {
      id: r,
      type: e.type,
      data: e,
      formatted: t,
      level: s
    };
  }, qe = 30, Ls = ({ tree: e, currentRoot: o, height: t = "500px", itemHeight: r = 30 }) => {
    const [s, a] = u.useState(""), [i, l] = u.useState(""), [c] = re(s, 500), [h] = re(i, 500), d = u.useMemo(() => {
      const g = {};
      c.trim() && (g.startKey = D(c.trim()));
      const T = parseInt(h, 10);
      return !isNaN(T) && T >= 0 && (g.maxDepth = T), g;
    }, [
      c,
      h
    ]), f = u.useRef(null), { data: m, fetchNextPage: x, hasNextPage: v, isFetchingNextPage: y, isLoading: E, isError: w, error: S } = nt({
      queryKey: [
        "hierarchyScan",
        o,
        d
      ],
      queryFn: async ({ pageParam: g = 0 }) => {
        if (!e) throw new Error("Tree not available for hierarchy scan.");
        const T = {
          ...d,
          offset: g,
          limit: qe
        };
        return e.hierarchyScan(T);
      },
      initialPageParam: 0,
      getNextPageParam: (g, T, P) => {
        var _a;
        if (g.hasNextPage) return P + (((_a = g.items) == null ? void 0 : _a.length) || 0);
      },
      enabled: !!e && o !== null
    }), p = u.useMemo(() => (m == null ? void 0 : m.pages.flatMap((g) => g.items)) ?? [], [
      m
    ]), j = u.useMemo(() => p.map((g, T) => Ds(g, T)), [
      p
    ]), N = v ? j.length + qe : j.length, R = vt({
      count: N,
      getScrollElement: () => f.current,
      estimateSize: () => r,
      overscan: 10
    }), M = R.getVirtualItems();
    u.useEffect(() => {
      if (M.length === 0 || !v || y) return;
      const g = M[M.length - 1];
      g && g.index >= j.length - 1 && v && x();
    }, [
      M,
      v,
      y,
      x,
      j.length
    ]);
    const _ = () => {
      a(""), l(""), f.current && (f.current.scrollTop = 0), R.scrollToOffset(0), z.info("Hierarchy scan filters cleared.");
    }, k = (g) => {
      var _a, _b, _c;
      const T = {
        paddingLeft: `${(g.level || 0) * 18 + (g.type !== "Node" ? 18 : 0)}px`
      }, P = "text-xs text-muted-foreground truncate", I = "px-1.5 py-0.5 bg-muted rounded text-xs";
      switch (g.type) {
        case "Node":
          return n.jsxs("div", {
            style: T,
            className: "flex items-center gap-2 w-full",
            children: [
              n.jsx(ze, {
                size: 14,
                className: g.data.isLeaf ? "text-green-600" : "text-blue-600"
              }),
              n.jsx("span", {
                className: `font-medium text-xs ${g.data.isLeaf ? "text-green-700" : "text-blue-700"}`,
                children: g.data.isLeaf ? "LEAF" : "INTERNAL"
              }),
              n.jsxs("span", {
                className: P,
                children: [
                  "(L",
                  g.data.level,
                  ")"
                ]
              }),
              n.jsxs("span", {
                className: `${P} font-mono`,
                title: g.formatted.hash || "N/A",
                children: [
                  "H: ",
                  ((_a = g.formatted.hash) == null ? void 0 : _a.substring(0, 12)) || "N/A",
                  "..."
                ]
              }),
              n.jsxs("span", {
                className: I,
                children: [
                  "Entries: ",
                  g.data.numEntries
                ]
              })
            ]
          });
        case "InternalEntry":
          return n.jsxs("div", {
            style: T,
            className: "flex items-center gap-2 w-full",
            children: [
              n.jsxs("span", {
                className: "text-orange-600 text-xs",
                children: [
                  "\u21B3 Entry #",
                  g.data.entryIndex
                ]
              }),
              n.jsxs("span", {
                className: `${P} font-mono`,
                title: g.formatted.boundaryKey || "N/A",
                children: [
                  "BKey: ",
                  g.formatted.boundaryKey
                ]
              }),
              n.jsxs("span", {
                className: `${P} font-mono`,
                title: g.formatted.childHash || "N/A",
                children: [
                  "Child: ",
                  ((_b = g.formatted.childHash) == null ? void 0 : _b.substring(0, 12)) || "N/A",
                  "..."
                ]
              }),
              n.jsxs("span", {
                className: I,
                children: [
                  "Subtree: ",
                  g.data.numItemsSubtree
                ]
              })
            ]
          });
        case "LeafEntry":
          return n.jsxs("div", {
            style: T,
            className: "flex items-center gap-2 w-full",
            children: [
              n.jsxs("span", {
                className: "text-purple-600 text-xs",
                children: [
                  "\u21B3 Entry #",
                  g.data.entryIndex
                ]
              }),
              n.jsxs("span", {
                className: `${P} font-mono`,
                title: g.formatted.key || "N/A",
                children: [
                  "Key: ",
                  g.formatted.key
                ]
              }),
              n.jsx("span", {
                className: I,
                children: g.data.valueReprType
              }),
              g.data.valueHash && n.jsxs("span", {
                className: `${P} font-mono`,
                title: g.formatted.valueHash || "N/A",
                children: [
                  "VHash: ",
                  ((_c = g.formatted.valueHash) == null ? void 0 : _c.substring(0, 12)) || "N/A",
                  "..."
                ]
              }),
              n.jsxs("span", {
                className: I,
                children: [
                  "VSize: ",
                  g.data.valueSize
                ]
              })
            ]
          });
        default:
          const K = g;
          return n.jsxs("div", {
            style: T,
            className: "text-xs",
            children: [
              "Unknown item type: ",
              K.type
            ]
          });
      }
    }, C = () => {
      if (E && !(m == null ? void 0 : m.pages.length)) return n.jsxs("div", {
        className: "flex flex-col items-center justify-center p-4",
        style: {
          height: t
        },
        children: [
          n.jsx(Y, {
            className: "h-8 w-8 animate-spin text-primary mb-2"
          }),
          n.jsx("p", {
            className: "text-sm text-muted-foreground",
            children: "Scanning hierarchy..."
          })
        ]
      });
      if (w) return n.jsxs("div", {
        className: "flex flex-col items-center justify-center p-4 text-destructive",
        style: {
          height: t
        },
        children: [
          n.jsx(he, {
            className: "h-8 w-8 mb-2"
          }),
          n.jsx("p", {
            className: "text-sm font-semibold",
            children: "Error scanning hierarchy"
          }),
          n.jsx("p", {
            className: "text-xs",
            children: (S == null ? void 0 : S.message) || "An unknown error occurred."
          })
        ]
      });
      if (j.length === 0 && !y && !E) {
        const g = d.startKey || d.maxDepth !== void 0 ? n.jsxs(n.Fragment, {
          children: [
            n.jsx(Se, {
              className: "h-12 w-12 text-muted-foreground/50 mb-3"
            }),
            n.jsx("p", {
              className: "text-muted-foreground text-sm",
              children: "No hierarchy items match the current filters."
            })
          ]
        }) : n.jsxs(n.Fragment, {
          children: [
            n.jsx(ze, {
              className: "h-12 w-12 text-muted-foreground/50 mb-3"
            }),
            n.jsx("p", {
              className: "text-muted-foreground text-sm",
              children: "Hierarchy is empty or not available."
            })
          ]
        });
        return n.jsx("div", {
          className: "flex flex-col items-center justify-center p-4 text-center",
          style: {
            height: t
          },
          children: g
        });
      }
      return n.jsxs(n.Fragment, {
        children: [
          n.jsxs("div", {
            ref: f,
            style: {
              height: t,
              overflowY: "auto",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)"
            },
            className: "bg-muted/20 dark:bg-muted/10 relative",
            children: [
              y && n.jsxs("div", {
                className: "sticky top-2 left-1/2 -translate-x-1/2 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-md shadow-lg text-xs flex items-center",
                children: [
                  n.jsx(Y, {
                    className: "h-4 w-4 animate-spin inline-block mr-1"
                  }),
                  "Loading more..."
                ]
              }),
              n.jsx("div", {
                style: {
                  height: `${R.getTotalSize()}px`,
                  width: "100%",
                  position: "relative"
                },
                children: M.map((g) => {
                  const T = j[g.index];
                  return n.jsx("div", {
                    "data-index": g.index,
                    ref: R.measureElement,
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: `${g.size}px`,
                      transform: `translateY(${g.start}px)`,
                      padding: "5px 12px",
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1px solid hsl(var(--border)/0.3)"
                    },
                    className: g.index % 2 === 0 ? "bg-transparent hover:bg-muted/20" : "bg-muted/10 dark:bg-black/10 hover:bg-muted/30",
                    children: T ? k(T) : n.jsx("div", {
                      className: "w-full text-center text-xs",
                      children: "Loading row..."
                    })
                  }, T ? T.id : g.key);
                })
              })
            ]
          }),
          n.jsxs("div", {
            className: "text-right text-xs text-muted-foreground pt-1 pr-1",
            children: [
              "Displaying ",
              j.length.toLocaleString(),
              " items",
              v && " (more available)"
            ]
          })
        ]
      });
    };
    return n.jsxs("div", {
      className: "flex flex-col space-y-3",
      children: [
        n.jsxs("div", {
          className: "p-4 border bg-card rounded-lg shadow-sm space-y-4",
          children: [
            n.jsx("div", {
              className: "flex items-center justify-between mb-2",
              children: n.jsx("h3", {
                className: "text-md font-semibold",
                children: "Hierarchy Scan Parameters"
              })
            }),
            n.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-4 items-end",
              children: [
                n.jsxs("div", {
                  children: [
                    n.jsxs(me, {
                      htmlFor: "h_startKey",
                      className: "text-xs font-medium",
                      children: [
                        n.jsx(Mn, {
                          className: "inline-block mr-1 h-3 w-3"
                        }),
                        "Start Key (optional)"
                      ]
                    }),
                    n.jsx(X, {
                      id: "h_startKey",
                      type: "text",
                      placeholder: "Scan from key (UTF-8)",
                      value: s,
                      onChange: (g) => a(g.target.value),
                      className: "h-9 text-sm",
                      title: "If provided, the scan will attempt to start near this key's path."
                    })
                  ]
                }),
                n.jsxs("div", {
                  children: [
                    n.jsxs(me, {
                      htmlFor: "h_maxDepth",
                      className: "text-xs font-medium",
                      children: [
                        n.jsx(bn, {
                          className: "inline-block mr-1 h-3 w-3"
                        }),
                        "Max Depth (optional)"
                      ]
                    }),
                    n.jsx(X, {
                      id: "h_maxDepth",
                      type: "number",
                      placeholder: "e.g., 0, 1, 2...",
                      value: i,
                      onChange: (g) => l(g.target.value),
                      min: "0",
                      className: "h-9 text-sm",
                      title: "0 for root, 1 for root and direct children, etc. Blank for no limit."
                    })
                  ]
                })
              ]
            }),
            n.jsx("div", {
              className: "flex items-center gap-2 pt-2 justify-end",
              children: n.jsxs(O, {
                onClick: _,
                size: "sm",
                variant: "outline",
                className: "h-9",
                disabled: E || y,
                children: [
                  n.jsx(he, {
                    className: "mr-2 h-4 w-4"
                  }),
                  " Clear & Reset"
                ]
              })
            })
          ]
        }),
        C()
      ]
    });
  }, Os = async (e) => {
    const o = await e.exportChunks(), t = [];
    for (const [r, s] of o.entries()) t.push({
      hash: rn(r),
      size: s.length
    });
    return t;
  }, Fs = ({ tree: e, treePath: o }) => {
    const [t, r] = u.useState(""), s = oe({
      mutationFn: async ({ gcLiveHashesHex: i }) => {
        const l = i.split(",").map((d) => d.trim()).filter((d) => d.length > 0).map((d) => {
          const f = we(d);
          if (!f) throw new Error(`Invalid live hash hex string: ${d}`);
          return f;
        }), c = await e.triggerGc(l), h = await Os(e);
        return {
          gcCollectedCount: c,
          chunks: h
        };
      },
      onSuccess: (i) => {
        U.getState().treeUpdated(o), z.success(`${i.gcCollectedCount} chunk(s) collected by GC. Chunk list refreshed.`);
      },
      onError: (i) => {
        U.getState().treeError(o, `GC failed: ${i.message}`), z.error(`GC failed: ${i.message}`);
      }
    }), a = () => {
      s.mutate({
        gcLiveHashesHex: t
      });
    };
    return n.jsxs("div", {
      className: "space-y-2",
      children: [
        n.jsx("h4", {
          className: "font-medium text-sm",
          children: "Garbage Collection"
        }),
        n.jsx(Ce, {
          placeholder: "Live Root Hashes (comma-separated hex strings). Current tree's root is always included.",
          value: t,
          onChange: (i) => r(i.target.value),
          rows: 2,
          disabled: s.isPending
        }),
        n.jsxs(O, {
          onClick: a,
          disabled: s.isPending,
          className: "w-full sm:w-auto",
          children: [
            s.isPending ? n.jsx(Y, {
              className: "mr-2 h-4 w-4 animate-spin"
            }) : n.jsx(Tn, {
              className: "mr-2 h-4 w-4"
            }),
            " ",
            "Trigger GC"
          ]
        })
      ]
    });
  }, Hs = an("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  });
  function $s({ className: e, variant: o, asChild: t = false, ...r }) {
    const s = t ? on : "span";
    return n.jsx(s, {
      "data-slot": "badge",
      className: H(Hs({
        variant: o
      }), e),
      ...r
    });
  }
  const Bs = ({ treeState: e }) => {
    const o = () => {
      e.rootHash && navigator.clipboard.writeText(e.rootHash);
    };
    return n.jsxs(rt, {
      className: "w-full md:max-w-lg mx-auto",
      children: [
        n.jsxs(ot, {
          className: "pb-2",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                n.jsx(at, {
                  className: "text-sm font-medium tracking-wide",
                  children: "Tree Status"
                }),
                e.rootHash && n.jsxs(ln, {
                  children: [
                    n.jsx(cn, {
                      asChild: true,
                      children: n.jsx(O, {
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7",
                        onClick: o,
                        children: n.jsx(En, {
                          className: "h-4 w-4"
                        })
                      })
                    }),
                    n.jsx(dn, {
                      side: "left",
                      className: "text-xs",
                      children: "Copy root hash"
                    })
                  ]
                })
              ]
            }),
            n.jsx($s, {
              variant: "secondary",
              className: "mt-1 font-mono text-xs tracking-tight break-all",
              children: e.rootHash ?? "N/A (Empty Tree)"
            })
          ]
        }),
        e.treeConfig && n.jsxs(n.Fragment, {
          children: [
            n.jsx(Vn, {
              className: "my-2"
            }),
            n.jsxs(it, {
              className: "grid grid-cols-2 gap-y-1 text-xs",
              children: [
                n.jsx("span", {
                  className: "text-muted-foreground",
                  children: "Target Fanout"
                }),
                n.jsx("span", {
                  className: "font-medium",
                  children: e.treeConfig.targetFanout
                }),
                n.jsx("span", {
                  className: "text-muted-foreground",
                  children: "Min Fanout"
                }),
                n.jsx("span", {
                  className: "font-medium",
                  children: e.treeConfig.minFanout
                }),
                n.jsx("span", {
                  className: "text-muted-foreground",
                  children: "Max Inline Value"
                }),
                n.jsxs("span", {
                  className: "font-medium",
                  children: [
                    e.treeConfig.maxInlineValueSize,
                    "\xA0B"
                  ]
                }),
                n.jsx("span", {
                  className: "col-span-2 text-muted-foreground mt-1",
                  children: "Content-Defined Chunking"
                }),
                n.jsx("span", {
                  className: "text-muted-foreground pl-4",
                  children: "Min"
                }),
                n.jsxs("span", {
                  className: "font-medium",
                  children: [
                    e.treeConfig.cdcMinSize,
                    "\xA0B"
                  ]
                }),
                n.jsx("span", {
                  className: "text-muted-foreground pl-4",
                  children: "Avg"
                }),
                n.jsxs("span", {
                  className: "font-medium",
                  children: [
                    e.treeConfig.cdcAvgSize,
                    "\xA0B"
                  ]
                }),
                n.jsx("span", {
                  className: "text-muted-foreground pl-4",
                  children: "Max"
                }),
                n.jsxs("span", {
                  className: "font-medium",
                  children: [
                    e.treeConfig.cdcMaxSize,
                    "\xA0B"
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }, Vs = ({ treeConfig: e, rootHash: o }) => n.jsx("div", {
    className: "space-y-2 flex flex-col gap-2",
    children: n.jsx(Bs, {
      treeState: {
        rootHash: o,
        treeConfig: e
      }
    })
  });
  function Ws({ treeState: e, defaultTab: o = "config" }) {
    return n.jsxs(xt, {
      defaultValue: o,
      className: "w-full min-h-0 flex flex-col",
      children: [
        n.jsxs(gt, {
          className: "grid w-full grid-cols-4 mb-2 grid-rows-1 h-8 ",
          children: [
            n.jsx(ne, {
              value: "config",
              children: "Config"
            }),
            n.jsx(ne, {
              value: "hierarchyScan",
              children: "Nodes"
            }),
            n.jsx(ne, {
              value: "diff",
              children: "Diff"
            }),
            n.jsx(ne, {
              value: "gc",
              children: "GC"
            })
          ]
        }),
        n.jsx(se, {
          value: "hierarchyScan",
          className: "border-t pt-4",
          children: e.tree ? n.jsx(Ls, {
            currentRoot: e.rootHash,
            tree: e.tree,
            treePath: e.path,
            height: "400px",
            itemHeight: 65
          }) : n.jsx("p", {
            children: "Tree instance not available."
          })
        }),
        n.jsx(se, {
          value: "config",
          className: "border-t pt-4",
          children: n.jsx(Vs, {
            treeConfig: e.treeConfig,
            rootHash: e.rootHash
          })
        }),
        n.jsx(se, {
          value: "diff",
          className: "border-t pt-4",
          children: n.jsx(_s, {
            tree: e.tree,
            treePath: e.path
          })
        }),
        n.jsx(se, {
          value: "gc",
          className: "border-t pt-4",
          children: n.jsx(Fs, {
            tree: e.tree,
            treePath: e.path
          })
        })
      ]
    });
  }
  function Ks({ tree: e }) {
    const [o, t] = u.useState(false), { mutate: r, isPending: s } = oe({
      mutationFn: async (i) => {
        await e.tree.insert(D(i.key), D(i.value)), U.getState().treeUpdated(e.path);
      },
      onSuccess: () => {
        t(false), z.success("Entry added"), U.getState().treeUpdated(e.path);
      },
      onError: (i) => {
        z.error(i.message);
      }
    }), a = (i) => {
      i.preventDefault();
      const l = new FormData(i.target), c = l.get("key"), h = l.get("value");
      r({
        key: c,
        value: h
      });
    };
    return n.jsxs(Qe, {
      open: o,
      onOpenChange: t,
      children: [
        n.jsx(un, {
          asChild: true,
          children: n.jsx(O, {
            variant: "ghost",
            size: "icon",
            children: n.jsx(hn, {
              className: "w-4 h-4 text-green-500"
            })
          })
        }),
        n.jsxs(Je, {
          children: [
            n.jsx(Ze, {
              children: n.jsx(et, {
                className: "text-lg font-light",
                children: "Add Entry"
              })
            }),
            n.jsxs("form", {
              onSubmit: a,
              children: [
                n.jsx(X, {
                  type: "text",
                  placeholder: "Key",
                  name: "key"
                }),
                n.jsx(Ce, {
                  placeholder: "Value",
                  name: "value",
                  className: "resize-none"
                }),
                n.jsxs(tt, {
                  className: "mt-4",
                  children: [
                    n.jsx(O, {
                      onClick: () => t(false),
                      children: "Cancel"
                    }),
                    n.jsx(O, {
                      type: "submit",
                      disabled: s,
                      children: s ? "Adding..." : "Add"
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Us({ treeState: e }) {
    return n.jsxs(rt, {
      className: "w-full shadow-lg border flex-1 overflow-hidden h-full p-1",
      children: [
        n.jsx(ot, {
          children: n.jsxs(at, {
            className: "text-xl tracking-tight flex items-center gap-2",
            children: [
              n.jsx("span", {
                className: "px-2 py-1 rounded font-mono",
                children: e.path.replace(/\.prly$/, "")
              }),
              n.jsx("span", {
                className: "ml-2 flex gap-2 ml-auto",
                children: n.jsx(Ks, {
                  tree: e
                })
              })
            ]
          })
        }),
        n.jsx(it, {
          className: "space-y-1 pt-2 h-full min-h-0 flex flex-col p-1",
          children: n.jsxs(xt, {
            defaultValue: "scan",
            className: "w-full min-h-0 flex flex-col",
            children: [
              n.jsxs(gt, {
                className: "grid w-full grid-cols-2 mb-2 grid-rows-1 h-8 ",
                children: [
                  n.jsx(ne, {
                    value: "scan",
                    children: "Scan"
                  }),
                  n.jsx(ne, {
                    value: "management",
                    children: "Management"
                  })
                ]
              }),
              n.jsx(se, {
                value: "scan",
                className: "pt-2 min-h-0 flex-1 overflow-hidden min-h-0",
                children: e.tree ? n.jsx(ps, {
                  currentRoot: e.rootHash,
                  prly: e,
                  treePath: e.path,
                  height: "400px",
                  itemHeight: 65
                }, `tree-${e.path}-${e.rootHash}`) : n.jsx("p", {
                  children: "Tree instance not available."
                })
              }),
              n.jsx(se, {
                value: "management",
                className: "pt-4",
                children: n.jsx(Ws, {
                  treeState: e
                })
              })
            ]
          })
        })
      ]
    });
  }
  var qs = (e, o, t, r, s, a, i, l) => {
    let c = document.documentElement, h = [
      "light",
      "dark"
    ];
    function d(x) {
      (Array.isArray(e) ? e : [
        e
      ]).forEach((v) => {
        let y = v === "class", E = y && a ? s.map((w) => a[w] || w) : s;
        y ? (c.classList.remove(...E), c.classList.add(a && a[x] ? a[x] : x)) : c.setAttribute(v, x);
      }), f(x);
    }
    function f(x) {
      l && h.includes(x) && (c.style.colorScheme = x);
    }
    function m() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (r) d(r);
    else try {
      let x = localStorage.getItem(o) || t, v = i && x === "system" ? m() : x;
      d(v);
    } catch {
    }
  }, Gs = u.createContext(void 0), Xs = {
    setTheme: (e) => {
    },
    themes: []
  }, Ys = () => {
    var e;
    return (e = u.useContext(Gs)) != null ? e : Xs;
  };
  u.memo(({ forcedTheme: e, storageKey: o, attribute: t, enableSystem: r, enableColorScheme: s, defaultTheme: a, value: i, themes: l, nonce: c, scriptProps: h }) => {
    let d = JSON.stringify([
      t,
      o,
      a,
      e,
      l,
      i,
      r,
      s
    ]).slice(1, -1);
    return u.createElement("script", {
      ...h,
      suppressHydrationWarning: true,
      nonce: typeof window > "u" ? c : "",
      dangerouslySetInnerHTML: {
        __html: `(${qs.toString()})(${d})`
      }
    });
  });
  let Qs;
  Qs = ({ ...e }) => {
    const { theme: o = "system" } = Ys();
    return n.jsx(fn, {
      theme: o,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...e
    });
  };
  sr = function() {
    const { id: o } = mn.useParams(), r = U((s) => s.trees)[o];
    return n.jsxs("div", {
      className: "container mx-auto p-2 sm:p-1 space-y-1 h-screen overflow-hidden flex flex-col",
      children: [
        n.jsx(Qs, {
          richColors: true
        }),
        n.jsx("div", {
          className: "flex-1 flex flex-col min-h-0 overflow-hidden",
          children: r && n.jsx(Us, {
            treeState: r
          })
        })
      ]
    });
  };
});
export {
  __tla,
  sr as component
};
