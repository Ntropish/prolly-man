const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/demo.tanstack-query-BIJgqkWJ.js","assets/useQuery-DU5p-XCB.js","assets/index-D-QEgqg1.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
let X1, Kb, Zy, ma, Qy, Py, t4, DE, sr, TD, Pr, A4, oy, da, Nb, jC, $e, zC, oe, Mb, e4, kC, z4, AE, O4, dw, is, aE, S4, $1, Nd, fn, gc, I1, Q1, bb, cE, J1, St, tE, gE, Be, Pn, yc, Ea, va, E_, E4, ey, x, RD, xe, Hn, mc, D4, dt, nC, b, uh, ft, x_, Oo, By, Xy, $y, Jy;
let __tla = (async () => {
  var _e, _t, _n2, _a2, _e2, _t2, _n3, _b2, _e3, _c2, _e4, _t3, _n4, _r, _a3, _i, _s, _lE_instances, o_fn, _d2, _e5, _e6, _e7, _t4, _n5, _dE_instances, r_fn, _f, _e8, _t5, _n6, _g, _e9, _t6, _n7, _r2, _a4, _i2, _s2, _o2, _h2, _e10, _t7, _n8, _r3, _mE_instances, a_fn, i_fn, _i3;
  function wS(t, r) {
    for (var o = 0; o < r.length; o++) {
      const i = r[o];
      if (typeof i != "string" && !Array.isArray(i)) {
        for (const l in i) if (l !== "default" && !(l in t)) {
          const u = Object.getOwnPropertyDescriptor(i, l);
          u && Object.defineProperty(t, l, u.get ? u : {
            enumerable: true,
            get: () => i[l]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  (function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) i(l);
    new MutationObserver((l) => {
      for (const u of l) if (u.type === "childList") for (const d of u.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && i(d);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function o(l) {
      const u = {};
      return l.integrity && (u.integrity = l.integrity), l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? u.credentials = "include" : l.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u;
    }
    function i(l) {
      if (l.ep) return;
      l.ep = true;
      const u = o(l);
      fetch(l.href, u);
    }
  })();
  function th(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var Yf = {
    exports: {}
  }, Hi = {};
  var Mv;
  function xS() {
    if (Mv) return Hi;
    Mv = 1;
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
    function o(i, l, u) {
      var d = null;
      if (u !== void 0 && (d = "" + u), l.key !== void 0 && (d = "" + l.key), "key" in l) {
        u = {};
        for (var h in l) h !== "key" && (u[h] = l[h]);
      } else u = l;
      return l = u.ref, {
        $$typeof: t,
        type: i,
        key: d,
        ref: l !== void 0 ? l : null,
        props: u
      };
    }
    return Hi.Fragment = r, Hi.jsx = o, Hi.jsxs = o, Hi;
  }
  var Av;
  function SS() {
    return Av || (Av = 1, Yf.exports = xS()), Yf.exports;
  }
  let Kf, Ee;
  x = SS();
  Kf = {
    exports: {}
  };
  Ee = {};
  var Ov;
  function ES() {
    if (Ov) return Ee;
    Ov = 1;
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.iterator;
    function w(T) {
      return T === null || typeof T != "object" ? null : (T = m && T[m] || T["@@iterator"], typeof T == "function" ? T : null);
    }
    var S = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, E = Object.assign, R = {};
    function C(T, L, $) {
      this.props = T, this.context = L, this.refs = R, this.updater = $ || S;
    }
    C.prototype.isReactComponent = {}, C.prototype.setState = function(T, L) {
      if (typeof T != "object" && typeof T != "function" && T != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, T, L, "setState");
    }, C.prototype.forceUpdate = function(T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    };
    function O() {
    }
    O.prototype = C.prototype;
    function k(T, L, $) {
      this.props = T, this.context = L, this.refs = R, this.updater = $ || S;
    }
    var j = k.prototype = new O();
    j.constructor = k, E(j, C.prototype), j.isPureReactComponent = true;
    var H = Array.isArray, q = {
      H: null,
      A: null,
      T: null,
      S: null,
      V: null
    }, V = Object.prototype.hasOwnProperty;
    function K(T, L, $, Q, J, ce) {
      return $ = ce.ref, {
        $$typeof: t,
        type: T,
        key: L,
        ref: $ !== void 0 ? $ : null,
        props: ce
      };
    }
    function D(T, L) {
      return K(T.type, L, void 0, void 0, void 0, T.props);
    }
    function U(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function ae(T) {
      var L = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + T.replace(/[=:]/g, function($) {
        return L[$];
      });
    }
    var ie = /\/+/g;
    function ee(T, L) {
      return typeof T == "object" && T !== null && T.key != null ? ae("" + T.key) : L.toString(36);
    }
    function re() {
    }
    function fe(T) {
      switch (T.status) {
        case "fulfilled":
          return T.value;
        case "rejected":
          throw T.reason;
        default:
          switch (typeof T.status == "string" ? T.then(re, re) : (T.status = "pending", T.then(function(L) {
            T.status === "pending" && (T.status = "fulfilled", T.value = L);
          }, function(L) {
            T.status === "pending" && (T.status = "rejected", T.reason = L);
          })), T.status) {
            case "fulfilled":
              return T.value;
            case "rejected":
              throw T.reason;
          }
      }
      throw T;
    }
    function se(T, L, $, Q, J) {
      var ce = typeof T;
      (ce === "undefined" || ce === "boolean") && (T = null);
      var ne = false;
      if (T === null) ne = true;
      else switch (ce) {
        case "bigint":
        case "string":
        case "number":
          ne = true;
          break;
        case "object":
          switch (T.$$typeof) {
            case t:
            case r:
              ne = true;
              break;
            case v:
              return ne = T._init, se(ne(T._payload), L, $, Q, J);
          }
      }
      if (ne) return J = J(T), ne = Q === "" ? "." + ee(T, 0) : Q, H(J) ? ($ = "", ne != null && ($ = ne.replace(ie, "$&/") + "/"), se(J, L, $, "", function(ye) {
        return ye;
      })) : J != null && (U(J) && (J = D(J, $ + (J.key == null || T && T.key === J.key ? "" : ("" + J.key).replace(ie, "$&/") + "/") + ne)), L.push(J)), 1;
      ne = 0;
      var le = Q === "" ? "." : Q + ":";
      if (H(T)) for (var ue = 0; ue < T.length; ue++) Q = T[ue], ce = le + ee(Q, ue), ne += se(Q, L, $, ce, J);
      else if (ue = w(T), typeof ue == "function") for (T = ue.call(T), ue = 0; !(Q = T.next()).done; ) Q = Q.value, ce = le + ee(Q, ue++), ne += se(Q, L, $, ce, J);
      else if (ce === "object") {
        if (typeof T.then == "function") return se(fe(T), L, $, Q, J);
        throw L = String(T), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
      }
      return ne;
    }
    function A(T, L, $) {
      if (T == null) return T;
      var Q = [], J = 0;
      return se(T, Q, "", "", function(ce) {
        return L.call($, ce, J++);
      }), Q;
    }
    function I(T) {
      if (T._status === -1) {
        var L = T._result;
        L = L(), L.then(function($) {
          (T._status === 0 || T._status === -1) && (T._status = 1, T._result = $);
        }, function($) {
          (T._status === 0 || T._status === -1) && (T._status = 2, T._result = $);
        }), T._status === -1 && (T._status = 0, T._result = L);
      }
      if (T._status === 1) return T._result.default;
      throw T._result;
    }
    var B = typeof reportError == "function" ? reportError : function(T) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var L = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
          error: T
        });
        if (!window.dispatchEvent(L)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", T);
        return;
      }
      console.error(T);
    };
    function Z() {
    }
    return Ee.Children = {
      map: A,
      forEach: function(T, L, $) {
        A(T, function() {
          L.apply(this, arguments);
        }, $);
      },
      count: function(T) {
        var L = 0;
        return A(T, function() {
          L++;
        }), L;
      },
      toArray: function(T) {
        return A(T, function(L) {
          return L;
        }) || [];
      },
      only: function(T) {
        if (!U(T)) throw Error("React.Children.only expected to receive a single React element child.");
        return T;
      }
    }, Ee.Component = C, Ee.Fragment = o, Ee.Profiler = l, Ee.PureComponent = k, Ee.StrictMode = i, Ee.Suspense = g, Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q, Ee.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(T) {
        return q.H.useMemoCache(T);
      }
    }, Ee.cache = function(T) {
      return function() {
        return T.apply(null, arguments);
      };
    }, Ee.cloneElement = function(T, L, $) {
      if (T == null) throw Error("The argument must be a React element, but you passed " + T + ".");
      var Q = E({}, T.props), J = T.key, ce = void 0;
      if (L != null) for (ne in L.ref !== void 0 && (ce = void 0), L.key !== void 0 && (J = "" + L.key), L) !V.call(L, ne) || ne === "key" || ne === "__self" || ne === "__source" || ne === "ref" && L.ref === void 0 || (Q[ne] = L[ne]);
      var ne = arguments.length - 2;
      if (ne === 1) Q.children = $;
      else if (1 < ne) {
        for (var le = Array(ne), ue = 0; ue < ne; ue++) le[ue] = arguments[ue + 2];
        Q.children = le;
      }
      return K(T.type, J, void 0, void 0, ce, Q);
    }, Ee.createContext = function(T) {
      return T = {
        $$typeof: d,
        _currentValue: T,
        _currentValue2: T,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, T.Provider = T, T.Consumer = {
        $$typeof: u,
        _context: T
      }, T;
    }, Ee.createElement = function(T, L, $) {
      var Q, J = {}, ce = null;
      if (L != null) for (Q in L.key !== void 0 && (ce = "" + L.key), L) V.call(L, Q) && Q !== "key" && Q !== "__self" && Q !== "__source" && (J[Q] = L[Q]);
      var ne = arguments.length - 2;
      if (ne === 1) J.children = $;
      else if (1 < ne) {
        for (var le = Array(ne), ue = 0; ue < ne; ue++) le[ue] = arguments[ue + 2];
        J.children = le;
      }
      if (T && T.defaultProps) for (Q in ne = T.defaultProps, ne) J[Q] === void 0 && (J[Q] = ne[Q]);
      return K(T, ce, void 0, void 0, null, J);
    }, Ee.createRef = function() {
      return {
        current: null
      };
    }, Ee.forwardRef = function(T) {
      return {
        $$typeof: h,
        render: T
      };
    }, Ee.isValidElement = U, Ee.lazy = function(T) {
      return {
        $$typeof: v,
        _payload: {
          _status: -1,
          _result: T
        },
        _init: I
      };
    }, Ee.memo = function(T, L) {
      return {
        $$typeof: p,
        type: T,
        compare: L === void 0 ? null : L
      };
    }, Ee.startTransition = function(T) {
      var L = q.T, $ = {};
      q.T = $;
      try {
        var Q = T(), J = q.S;
        J !== null && J($, Q), typeof Q == "object" && Q !== null && typeof Q.then == "function" && Q.then(Z, B);
      } catch (ce) {
        B(ce);
      } finally {
        q.T = L;
      }
    }, Ee.unstable_useCacheRefresh = function() {
      return q.H.useCacheRefresh();
    }, Ee.use = function(T) {
      return q.H.use(T);
    }, Ee.useActionState = function(T, L, $) {
      return q.H.useActionState(T, L, $);
    }, Ee.useCallback = function(T, L) {
      return q.H.useCallback(T, L);
    }, Ee.useContext = function(T) {
      return q.H.useContext(T);
    }, Ee.useDebugValue = function() {
    }, Ee.useDeferredValue = function(T, L) {
      return q.H.useDeferredValue(T, L);
    }, Ee.useEffect = function(T, L, $) {
      var Q = q.H;
      if (typeof $ == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return Q.useEffect(T, L);
    }, Ee.useId = function() {
      return q.H.useId();
    }, Ee.useImperativeHandle = function(T, L, $) {
      return q.H.useImperativeHandle(T, L, $);
    }, Ee.useInsertionEffect = function(T, L) {
      return q.H.useInsertionEffect(T, L);
    }, Ee.useLayoutEffect = function(T, L) {
      return q.H.useLayoutEffect(T, L);
    }, Ee.useMemo = function(T, L) {
      return q.H.useMemo(T, L);
    }, Ee.useOptimistic = function(T, L) {
      return q.H.useOptimistic(T, L);
    }, Ee.useReducer = function(T, L, $) {
      return q.H.useReducer(T, L, $);
    }, Ee.useRef = function(T) {
      return q.H.useRef(T);
    }, Ee.useState = function(T) {
      return q.H.useState(T);
    }, Ee.useSyncExternalStore = function(T, L, $) {
      return q.H.useSyncExternalStore(T, L, $);
    }, Ee.useTransition = function() {
      return q.H.useTransition();
    }, Ee.version = "19.1.0", Ee;
  }
  var Dv;
  function rs() {
    return Dv || (Dv = 1, Kf.exports = ES()), Kf.exports;
  }
  b = rs();
  let tb;
  oe = th(b);
  tb = wS({
    __proto__: null,
    default: oe
  }, [
    b
  ]);
  var If = {
    exports: {}
  }, qi = {}, Qf = {
    exports: {}
  }, Xf = {};
  var Nv;
  function RS() {
    return Nv || (Nv = 1, function(t) {
      function r(A, I) {
        var B = A.length;
        A.push(I);
        e: for (; 0 < B; ) {
          var Z = B - 1 >>> 1, T = A[Z];
          if (0 < l(T, I)) A[Z] = I, A[B] = T, B = Z;
          else break e;
        }
      }
      function o(A) {
        return A.length === 0 ? null : A[0];
      }
      function i(A) {
        if (A.length === 0) return null;
        var I = A[0], B = A.pop();
        if (B !== I) {
          A[0] = B;
          e: for (var Z = 0, T = A.length, L = T >>> 1; Z < L; ) {
            var $ = 2 * (Z + 1) - 1, Q = A[$], J = $ + 1, ce = A[J];
            if (0 > l(Q, B)) J < T && 0 > l(ce, Q) ? (A[Z] = ce, A[J] = B, Z = J) : (A[Z] = Q, A[$] = B, Z = $);
            else if (J < T && 0 > l(ce, B)) A[Z] = ce, A[J] = B, Z = J;
            else break e;
          }
        }
        return I;
      }
      function l(A, I) {
        var B = A.sortIndex - I.sortIndex;
        return B !== 0 ? B : A.id - I.id;
      }
      if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var u = performance;
        t.unstable_now = function() {
          return u.now();
        };
      } else {
        var d = Date, h = d.now();
        t.unstable_now = function() {
          return d.now() - h;
        };
      }
      var g = [], p = [], v = 1, m = null, w = 3, S = false, E = false, R = false, C = false, O = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, j = typeof setImmediate < "u" ? setImmediate : null;
      function H(A) {
        for (var I = o(p); I !== null; ) {
          if (I.callback === null) i(p);
          else if (I.startTime <= A) i(p), I.sortIndex = I.expirationTime, r(g, I);
          else break;
          I = o(p);
        }
      }
      function q(A) {
        if (R = false, H(A), !E) if (o(g) !== null) E = true, V || (V = true, ee());
        else {
          var I = o(p);
          I !== null && se(q, I.startTime - A);
        }
      }
      var V = false, K = -1, D = 5, U = -1;
      function ae() {
        return C ? true : !(t.unstable_now() - U < D);
      }
      function ie() {
        if (C = false, V) {
          var A = t.unstable_now();
          U = A;
          var I = true;
          try {
            e: {
              E = false, R && (R = false, k(K), K = -1), S = true;
              var B = w;
              try {
                t: {
                  for (H(A), m = o(g); m !== null && !(m.expirationTime > A && ae()); ) {
                    var Z = m.callback;
                    if (typeof Z == "function") {
                      m.callback = null, w = m.priorityLevel;
                      var T = Z(m.expirationTime <= A);
                      if (A = t.unstable_now(), typeof T == "function") {
                        m.callback = T, H(A), I = true;
                        break t;
                      }
                      m === o(g) && i(g), H(A);
                    } else i(g);
                    m = o(g);
                  }
                  if (m !== null) I = true;
                  else {
                    var L = o(p);
                    L !== null && se(q, L.startTime - A), I = false;
                  }
                }
                break e;
              } finally {
                m = null, w = B, S = false;
              }
              I = void 0;
            }
          } finally {
            I ? ee() : V = false;
          }
        }
      }
      var ee;
      if (typeof j == "function") ee = function() {
        j(ie);
      };
      else if (typeof MessageChannel < "u") {
        var re = new MessageChannel(), fe = re.port2;
        re.port1.onmessage = ie, ee = function() {
          fe.postMessage(null);
        };
      } else ee = function() {
        O(ie, 0);
      };
      function se(A, I) {
        K = O(function() {
          A(t.unstable_now());
        }, I);
      }
      t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(A) {
        A.callback = null;
      }, t.unstable_forceFrameRate = function(A) {
        0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < A ? Math.floor(1e3 / A) : 5;
      }, t.unstable_getCurrentPriorityLevel = function() {
        return w;
      }, t.unstable_next = function(A) {
        switch (w) {
          case 1:
          case 2:
          case 3:
            var I = 3;
            break;
          default:
            I = w;
        }
        var B = w;
        w = I;
        try {
          return A();
        } finally {
          w = B;
        }
      }, t.unstable_requestPaint = function() {
        C = true;
      }, t.unstable_runWithPriority = function(A, I) {
        switch (A) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            A = 3;
        }
        var B = w;
        w = A;
        try {
          return I();
        } finally {
          w = B;
        }
      }, t.unstable_scheduleCallback = function(A, I, B) {
        var Z = t.unstable_now();
        switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? Z + B : Z) : B = Z, A) {
          case 1:
            var T = -1;
            break;
          case 2:
            T = 250;
            break;
          case 5:
            T = 1073741823;
            break;
          case 4:
            T = 1e4;
            break;
          default:
            T = 5e3;
        }
        return T = B + T, A = {
          id: v++,
          callback: I,
          priorityLevel: A,
          startTime: B,
          expirationTime: T,
          sortIndex: -1
        }, B > Z ? (A.sortIndex = B, r(p, A), o(g) === null && A === o(p) && (R ? (k(K), K = -1) : R = true, se(q, B - Z))) : (A.sortIndex = T, r(g, A), E || S || (E = true, V || (V = true, ee()))), A;
      }, t.unstable_shouldYield = ae, t.unstable_wrapCallback = function(A) {
        var I = w;
        return function() {
          var B = w;
          w = I;
          try {
            return A.apply(this, arguments);
          } finally {
            w = B;
          }
        };
      };
    }(Xf)), Xf;
  }
  var jv;
  function TS() {
    return jv || (jv = 1, Qf.exports = RS()), Qf.exports;
  }
  var $f = {
    exports: {}
  }, Ct = {};
  var zv;
  function CS() {
    if (zv) return Ct;
    zv = 1;
    var t = rs();
    function r(g) {
      var p = "https://react.dev/errors/" + g;
      if (1 < arguments.length) {
        p += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var v = 2; v < arguments.length; v++) p += "&args[]=" + encodeURIComponent(arguments[v]);
      }
      return "Minified React error #" + g + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function o() {
    }
    var i = {
      d: {
        f: o,
        r: function() {
          throw Error(r(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o
      },
      p: 0,
      findDOMNode: null
    }, l = Symbol.for("react.portal");
    function u(g, p, v) {
      var m = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: l,
        key: m == null ? null : "" + m,
        children: g,
        containerInfo: p,
        implementation: v
      };
    }
    var d = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function h(g, p) {
      if (g === "font") return "";
      if (typeof p == "string") return p === "use-credentials" ? p : "";
    }
    return Ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, Ct.createPortal = function(g, p) {
      var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(r(299));
      return u(g, p, null, v);
    }, Ct.flushSync = function(g) {
      var p = d.T, v = i.p;
      try {
        if (d.T = null, i.p = 2, g) return g();
      } finally {
        d.T = p, i.p = v, i.d.f();
      }
    }, Ct.preconnect = function(g, p) {
      typeof g == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, i.d.C(g, p));
    }, Ct.prefetchDNS = function(g) {
      typeof g == "string" && i.d.D(g);
    }, Ct.preinit = function(g, p) {
      if (typeof g == "string" && p && typeof p.as == "string") {
        var v = p.as, m = h(v, p.crossOrigin), w = typeof p.integrity == "string" ? p.integrity : void 0, S = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        v === "style" ? i.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
          crossOrigin: m,
          integrity: w,
          fetchPriority: S
        }) : v === "script" && i.d.X(g, {
          crossOrigin: m,
          integrity: w,
          fetchPriority: S,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0
        });
      }
    }, Ct.preinitModule = function(g, p) {
      if (typeof g == "string") if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var v = h(p.as, p.crossOrigin);
          i.d.M(g, {
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && i.d.M(g);
    }, Ct.preload = function(g, p) {
      if (typeof g == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
        var v = p.as, m = h(v, p.crossOrigin);
        i.d.L(g, v, {
          crossOrigin: m,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0
        });
      }
    }, Ct.preloadModule = function(g, p) {
      if (typeof g == "string") if (p) {
        var v = h(p.as, p.crossOrigin);
        i.d.m(g, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: v,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else i.d.m(g);
    }, Ct.requestFormReset = function(g) {
      i.d.r(g);
    }, Ct.unstable_batchedUpdates = function(g, p) {
      return g(p);
    }, Ct.useFormState = function(g, p, v) {
      return d.H.useFormState(g, p, v);
    }, Ct.useFormStatus = function() {
      return d.H.useHostTransitionStatus();
    }, Ct.version = "19.1.0", Ct;
  }
  var kv;
  function nb() {
    if (kv) return $f.exports;
    kv = 1;
    function t() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
    }
    return t(), $f.exports = CS(), $f.exports;
  }
  var Lv;
  function MS() {
    if (Lv) return qi;
    Lv = 1;
    var t = TS(), r = rs(), o = nb();
    function i(e) {
      var n = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        n += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var a = 2; a < arguments.length; a++) n += "&args[]=" + encodeURIComponent(arguments[a]);
      }
      return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function l(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function u(e) {
      var n = e, a = e;
      if (e.alternate) for (; n.return; ) n = n.return;
      else {
        e = n;
        do
          n = e, (n.flags & 4098) !== 0 && (a = n.return), e = n.return;
        while (e);
      }
      return n.tag === 3 ? a : null;
    }
    function d(e) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
      }
      return null;
    }
    function h(e) {
      if (u(e) !== e) throw Error(i(188));
    }
    function g(e) {
      var n = e.alternate;
      if (!n) {
        if (n = u(e), n === null) throw Error(i(188));
        return n !== e ? null : e;
      }
      for (var a = e, s = n; ; ) {
        var c = a.return;
        if (c === null) break;
        var f = c.alternate;
        if (f === null) {
          if (s = c.return, s !== null) {
            a = s;
            continue;
          }
          break;
        }
        if (c.child === f.child) {
          for (f = c.child; f; ) {
            if (f === a) return h(c), e;
            if (f === s) return h(c), n;
            f = f.sibling;
          }
          throw Error(i(188));
        }
        if (a.return !== s.return) a = c, s = f;
        else {
          for (var y = false, _ = c.child; _; ) {
            if (_ === a) {
              y = true, a = c, s = f;
              break;
            }
            if (_ === s) {
              y = true, s = c, a = f;
              break;
            }
            _ = _.sibling;
          }
          if (!y) {
            for (_ = f.child; _; ) {
              if (_ === a) {
                y = true, a = f, s = c;
                break;
              }
              if (_ === s) {
                y = true, s = f, a = c;
                break;
              }
              _ = _.sibling;
            }
            if (!y) throw Error(i(189));
          }
        }
        if (a.alternate !== s) throw Error(i(190));
      }
      if (a.tag !== 3) throw Error(i(188));
      return a.stateNode.current === a ? e : n;
    }
    function p(e) {
      var n = e.tag;
      if (n === 5 || n === 26 || n === 27 || n === 6) return e;
      for (e = e.child; e !== null; ) {
        if (n = p(e), n !== null) return n;
        e = e.sibling;
      }
      return null;
    }
    var v = Object.assign, m = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), k = Symbol.for("react.consumer"), j = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), U = Symbol.for("react.activity"), ae = Symbol.for("react.memo_cache_sentinel"), ie = Symbol.iterator;
    function ee(e) {
      return e === null || typeof e != "object" ? null : (e = ie && e[ie] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var re = Symbol.for("react.client.reference");
    function fe(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.$$typeof === re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case E:
          return "Fragment";
        case C:
          return "Profiler";
        case R:
          return "StrictMode";
        case q:
          return "Suspense";
        case V:
          return "SuspenseList";
        case U:
          return "Activity";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case S:
          return "Portal";
        case j:
          return (e.displayName || "Context") + ".Provider";
        case k:
          return (e._context.displayName || "Context") + ".Consumer";
        case H:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case K:
          return n = e.displayName || null, n !== null ? n : fe(e.type) || "Memo";
        case D:
          n = e._payload, e = e._init;
          try {
            return fe(e(n));
          } catch {
          }
      }
      return null;
    }
    var se = Array.isArray, A = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, Z = [], T = -1;
    function L(e) {
      return {
        current: e
      };
    }
    function $(e) {
      0 > T || (e.current = Z[T], Z[T] = null, T--);
    }
    function Q(e, n) {
      T++, Z[T] = e.current, e.current = n;
    }
    var J = L(null), ce = L(null), ne = L(null), le = L(null);
    function ue(e, n) {
      switch (Q(ne, n), Q(ce, e), Q(J, null), n.nodeType) {
        case 9:
        case 11:
          e = (e = n.documentElement) && (e = e.namespaceURI) ? nv(e) : 0;
          break;
        default:
          if (e = n.tagName, n = n.namespaceURI) n = nv(n), e = rv(n, e);
          else switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
      }
      $(J), Q(J, e);
    }
    function ye() {
      $(J), $(ce), $(ne);
    }
    function Re(e) {
      e.memoizedState !== null && Q(le, e);
      var n = J.current, a = rv(n, e.type);
      n !== a && (Q(ce, e), Q(J, a));
    }
    function Le(e) {
      ce.current === e && ($(J), $(ce)), le.current === e && ($(le), ki._currentValue = B);
    }
    var Ue = Object.prototype.hasOwnProperty, Rt = t.unstable_scheduleCallback, Mt = t.unstable_cancelCallback, Rn = t.unstable_shouldYield, At = t.unstable_requestPaint, Ie = t.unstable_now, hn = t.unstable_getCurrentPriorityLevel, Ot = t.unstable_ImmediatePriority, Gr = t.unstable_UserBlockingPriority, je = t.unstable_NormalPriority, Ae = t.unstable_LowPriority, Ht = t.unstable_IdlePriority, Ca = t.log, Fo = t.unstable_setDisableYieldValue, Jt = null, Dt = null;
    function pn(e) {
      if (typeof Ca == "function" && Fo(e), Dt && typeof Dt.setStrictMode == "function") try {
        Dt.setStrictMode(Jt, e);
      } catch {
      }
    }
    var yt = Math.clz32 ? Math.clz32 : fr, ur = Math.log, ms = Math.LN2;
    function fr(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (ur(e) / ms | 0) | 0;
    }
    var Ma = 256, Aa = 4194304;
    function Tn(e) {
      var n = e & 42;
      if (n !== 0) return n;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function Fr(e, n, a) {
      var s = e.pendingLanes;
      if (s === 0) return 0;
      var c = 0, f = e.suspendedLanes, y = e.pingedLanes;
      e = e.warmLanes;
      var _ = s & 134217727;
      return _ !== 0 ? (s = _ & ~f, s !== 0 ? c = Tn(s) : (y &= _, y !== 0 ? c = Tn(y) : a || (a = _ & ~e, a !== 0 && (c = Tn(a))))) : (_ = s & ~f, _ !== 0 ? c = Tn(_) : y !== 0 ? c = Tn(y) : a || (a = s & ~e, a !== 0 && (c = Tn(a)))), c === 0 ? 0 : n !== 0 && n !== c && (n & f) === 0 && (f = c & -c, a = n & -n, f >= a || f === 32 && (a & 4194048) !== 0) ? n : c;
    }
    function Vr(e, n) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
    }
    function Vo(e, n) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return n + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return n + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function mn() {
      var e = Ma;
      return Ma <<= 1, (Ma & 4194048) === 0 && (Ma = 256), e;
    }
    function gs() {
      var e = Aa;
      return Aa <<= 1, (Aa & 62914560) === 0 && (Aa = 4194304), e;
    }
    function Yo(e) {
      for (var n = [], a = 0; 31 > a; a++) n.push(e);
      return n;
    }
    function dr(e, n) {
      e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function vs(e, n, a, s, c, f) {
      var y = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var _ = e.entanglements, M = e.expirationTimes, G = e.hiddenUpdates;
      for (a = y & ~a; 0 < a; ) {
        var X = 31 - yt(a), te = 1 << X;
        _[X] = 0, M[X] = -1;
        var F = G[X];
        if (F !== null) for (G[X] = null, X = 0; X < F.length; X++) {
          var Y = F[X];
          Y !== null && (Y.lane &= -536870913);
        }
        a &= ~te;
      }
      s !== 0 && Se(e, s, 0), f !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(y & ~n));
    }
    function Se(e, n, a) {
      e.pendingLanes |= n, e.suspendedLanes &= ~n;
      var s = 31 - yt(n);
      e.entangledLanes |= n, e.entanglements[s] = e.entanglements[s] | 1073741824 | a & 4194090;
    }
    function We(e, n) {
      var a = e.entangledLanes |= n;
      for (e = e.entanglements; a; ) {
        var s = 31 - yt(a), c = 1 << s;
        c & n | e[s] & n && (e[s] |= n), a &= ~c;
      }
    }
    function at(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function bt(e) {
      return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Yr() {
      var e = I.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : xv(e.type));
    }
    function st(e, n) {
      var a = I.p;
      try {
        return I.p = e, n();
      } finally {
        I.p = a;
      }
    }
    var et = Math.random().toString(36).slice(2), tt = "__reactFiber$" + et, Ye = "__reactProps$" + et, ht = "__reactContainer$" + et, Oa = "__reactEvents$" + et, Gn = "__reactListeners$" + et, Fh = "__reactHandles$" + et, Vh = "__reactResources$" + et, Ko = "__reactMarker$" + et;
    function Uc(e) {
      delete e[tt], delete e[Ye], delete e[Oa], delete e[Gn], delete e[Fh];
    }
    function Da(e) {
      var n = e[tt];
      if (n) return n;
      for (var a = e.parentNode; a; ) {
        if (n = a[ht] || a[tt]) {
          if (a = n.alternate, n.child !== null || a !== null && a.child !== null) for (e = sv(e); e !== null; ) {
            if (a = e[tt]) return a;
            e = sv(e);
          }
          return n;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Na(e) {
      if (e = e[tt] || e[ht]) {
        var n = e.tag;
        if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3) return e;
      }
      return null;
    }
    function Io(e) {
      var n = e.tag;
      if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
      throw Error(i(33));
    }
    function ja(e) {
      var n = e[Vh];
      return n || (n = e[Vh] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), n;
    }
    function pt(e) {
      e[Ko] = true;
    }
    var Yh = /* @__PURE__ */ new Set(), Kh = {};
    function Kr(e, n) {
      za(e, n), za(e + "Capture", n);
    }
    function za(e, n) {
      for (Kh[e] = n, e = 0; e < n.length; e++) Yh.add(n[e]);
    }
    var hw = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ih = {}, Qh = {};
    function pw(e) {
      return Ue.call(Qh, e) ? true : Ue.call(Ih, e) ? false : hw.test(e) ? Qh[e] = true : (Ih[e] = true, false);
    }
    function ys(e, n, a) {
      if (pw(n)) if (a === null) e.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var s = n.toLowerCase().slice(0, 5);
            if (s !== "data-" && s !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + a);
      }
    }
    function bs(e, n, a) {
      if (a === null) e.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(n);
            return;
        }
        e.setAttribute(n, "" + a);
      }
    }
    function Fn(e, n, a, s) {
      if (s === null) e.removeAttribute(a);
      else {
        switch (typeof s) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        e.setAttributeNS(n, a, "" + s);
      }
    }
    var Bc, Xh;
    function ka(e) {
      if (Bc === void 0) try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        Bc = n && n[1] || "", Xh = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + Bc + e + Xh;
    }
    var Pc = false;
    function Hc(e, n) {
      if (!e || Pc) return "";
      Pc = true;
      var a = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var s = {
          DetermineComponentFrameRoot: function() {
            try {
              if (n) {
                var te = function() {
                  throw Error();
                };
                if (Object.defineProperty(te.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(te, []);
                  } catch (Y) {
                    var F = Y;
                  }
                  Reflect.construct(e, [], te);
                } else {
                  try {
                    te.call();
                  } catch (Y) {
                    F = Y;
                  }
                  e.call(te.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Y) {
                  F = Y;
                }
                (te = e()) && typeof te.catch == "function" && te.catch(function() {
                });
              }
            } catch (Y) {
              if (Y && F && typeof Y.stack == "string") return [
                Y.stack,
                F.stack
              ];
            }
            return [
              null,
              null
            ];
          }
        };
        s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var c = Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot, "name");
        c && c.configurable && Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var f = s.DetermineComponentFrameRoot(), y = f[0], _ = f[1];
        if (y && _) {
          var M = y.split(`
`), G = _.split(`
`);
          for (c = s = 0; s < M.length && !M[s].includes("DetermineComponentFrameRoot"); ) s++;
          for (; c < G.length && !G[c].includes("DetermineComponentFrameRoot"); ) c++;
          if (s === M.length || c === G.length) for (s = M.length - 1, c = G.length - 1; 1 <= s && 0 <= c && M[s] !== G[c]; ) c--;
          for (; 1 <= s && 0 <= c; s--, c--) if (M[s] !== G[c]) {
            if (s !== 1 || c !== 1) do
              if (s--, c--, 0 > c || M[s] !== G[c]) {
                var X = `
` + M[s].replace(" at new ", " at ");
                return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), X;
              }
            while (1 <= s && 0 <= c);
            break;
          }
        }
      } finally {
        Pc = false, Error.prepareStackTrace = a;
      }
      return (a = e ? e.displayName || e.name : "") ? ka(a) : "";
    }
    function mw(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ka(e.type);
        case 16:
          return ka("Lazy");
        case 13:
          return ka("Suspense");
        case 19:
          return ka("SuspenseList");
        case 0:
        case 15:
          return Hc(e.type, false);
        case 11:
          return Hc(e.type.render, false);
        case 1:
          return Hc(e.type, true);
        case 31:
          return ka("Activity");
        default:
          return "";
      }
    }
    function $h(e) {
      try {
        var n = "";
        do
          n += mw(e), e = e.return;
        while (e);
        return n;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    function Wt(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function Zh(e) {
      var n = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
    }
    function gw(e) {
      var n = Zh(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), s = "" + e[n];
      if (!e.hasOwnProperty(n) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var c = a.get, f = a.set;
        return Object.defineProperty(e, n, {
          configurable: true,
          get: function() {
            return c.call(this);
          },
          set: function(y) {
            s = "" + y, f.call(this, y);
          }
        }), Object.defineProperty(e, n, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return s;
          },
          setValue: function(y) {
            s = "" + y;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[n];
          }
        };
      }
    }
    function _s3(e) {
      e._valueTracker || (e._valueTracker = gw(e));
    }
    function Jh(e) {
      if (!e) return false;
      var n = e._valueTracker;
      if (!n) return true;
      var a = n.getValue(), s = "";
      return e && (s = Zh(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== a ? (n.setValue(e), true) : false;
    }
    function ws(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var vw = /[\n"\\]/g;
    function en(e) {
      return e.replace(vw, function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      });
    }
    function qc(e, n, a, s, c, f, y, _) {
      e.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + Wt(n)) : e.value !== "" + Wt(n) && (e.value = "" + Wt(n)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"), n != null ? Gc(e, y, Wt(n)) : a != null ? Gc(e, y, Wt(a)) : s != null && e.removeAttribute("value"), c == null && f != null && (e.defaultChecked = !!f), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? e.name = "" + Wt(_) : e.removeAttribute("name");
    }
    function Wh(e, n, a, s, c, f, y, _) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), n != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || n != null)) return;
        a = a != null ? "" + Wt(a) : "", n = n != null ? "" + Wt(n) : a, _ || n === e.value || (e.value = n), e.defaultValue = n;
      }
      s = s ?? c, s = typeof s != "function" && typeof s != "symbol" && !!s, e.checked = _ ? e.checked : !!s, e.defaultChecked = !!s, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y);
    }
    function Gc(e, n, a) {
      n === "number" && ws(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function La(e, n, a, s) {
      if (e = e.options, n) {
        n = {};
        for (var c = 0; c < a.length; c++) n["$" + a[c]] = true;
        for (a = 0; a < e.length; a++) c = n.hasOwnProperty("$" + e[a].value), e[a].selected !== c && (e[a].selected = c), c && s && (e[a].defaultSelected = true);
      } else {
        for (a = "" + Wt(a), n = null, c = 0; c < e.length; c++) {
          if (e[c].value === a) {
            e[c].selected = true, s && (e[c].defaultSelected = true);
            return;
          }
          n !== null || e[c].disabled || (n = e[c]);
        }
        n !== null && (n.selected = true);
      }
    }
    function ep(e, n, a) {
      if (n != null && (n = "" + Wt(n), n !== e.value && (e.value = n), a == null)) {
        e.defaultValue !== n && (e.defaultValue = n);
        return;
      }
      e.defaultValue = a != null ? "" + Wt(a) : "";
    }
    function tp(e, n, a, s) {
      if (n == null) {
        if (s != null) {
          if (a != null) throw Error(i(92));
          if (se(s)) {
            if (1 < s.length) throw Error(i(93));
            s = s[0];
          }
          a = s;
        }
        a == null && (a = ""), n = a;
      }
      a = Wt(n), e.defaultValue = a, s = e.textContent, s === a && s !== "" && s !== null && (e.value = s);
    }
    function Ua(e, n) {
      if (n) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = n;
          return;
        }
      }
      e.textContent = n;
    }
    var yw = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function np(e, n, a) {
      var s = n.indexOf("--") === 0;
      a == null || typeof a == "boolean" || a === "" ? s ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : s ? e.setProperty(n, a) : typeof a != "number" || a === 0 || yw.has(n) ? n === "float" ? e.cssFloat = a : e[n] = ("" + a).trim() : e[n] = a + "px";
    }
    function rp(e, n, a) {
      if (n != null && typeof n != "object") throw Error(i(62));
      if (e = e.style, a != null) {
        for (var s in a) !a.hasOwnProperty(s) || n != null && n.hasOwnProperty(s) || (s.indexOf("--") === 0 ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "");
        for (var c in n) s = n[c], n.hasOwnProperty(c) && a[c] !== s && np(e, c, s);
      } else for (var f in n) n.hasOwnProperty(f) && np(e, f, n[f]);
    }
    function Fc(e) {
      if (e.indexOf("-") === -1) return false;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var bw = /* @__PURE__ */ new Map([
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ],
      [
        "crossOrigin",
        "crossorigin"
      ],
      [
        "accentHeight",
        "accent-height"
      ],
      [
        "alignmentBaseline",
        "alignment-baseline"
      ],
      [
        "arabicForm",
        "arabic-form"
      ],
      [
        "baselineShift",
        "baseline-shift"
      ],
      [
        "capHeight",
        "cap-height"
      ],
      [
        "clipPath",
        "clip-path"
      ],
      [
        "clipRule",
        "clip-rule"
      ],
      [
        "colorInterpolation",
        "color-interpolation"
      ],
      [
        "colorInterpolationFilters",
        "color-interpolation-filters"
      ],
      [
        "colorProfile",
        "color-profile"
      ],
      [
        "colorRendering",
        "color-rendering"
      ],
      [
        "dominantBaseline",
        "dominant-baseline"
      ],
      [
        "enableBackground",
        "enable-background"
      ],
      [
        "fillOpacity",
        "fill-opacity"
      ],
      [
        "fillRule",
        "fill-rule"
      ],
      [
        "floodColor",
        "flood-color"
      ],
      [
        "floodOpacity",
        "flood-opacity"
      ],
      [
        "fontFamily",
        "font-family"
      ],
      [
        "fontSize",
        "font-size"
      ],
      [
        "fontSizeAdjust",
        "font-size-adjust"
      ],
      [
        "fontStretch",
        "font-stretch"
      ],
      [
        "fontStyle",
        "font-style"
      ],
      [
        "fontVariant",
        "font-variant"
      ],
      [
        "fontWeight",
        "font-weight"
      ],
      [
        "glyphName",
        "glyph-name"
      ],
      [
        "glyphOrientationHorizontal",
        "glyph-orientation-horizontal"
      ],
      [
        "glyphOrientationVertical",
        "glyph-orientation-vertical"
      ],
      [
        "horizAdvX",
        "horiz-adv-x"
      ],
      [
        "horizOriginX",
        "horiz-origin-x"
      ],
      [
        "imageRendering",
        "image-rendering"
      ],
      [
        "letterSpacing",
        "letter-spacing"
      ],
      [
        "lightingColor",
        "lighting-color"
      ],
      [
        "markerEnd",
        "marker-end"
      ],
      [
        "markerMid",
        "marker-mid"
      ],
      [
        "markerStart",
        "marker-start"
      ],
      [
        "overlinePosition",
        "overline-position"
      ],
      [
        "overlineThickness",
        "overline-thickness"
      ],
      [
        "paintOrder",
        "paint-order"
      ],
      [
        "panose-1",
        "panose-1"
      ],
      [
        "pointerEvents",
        "pointer-events"
      ],
      [
        "renderingIntent",
        "rendering-intent"
      ],
      [
        "shapeRendering",
        "shape-rendering"
      ],
      [
        "stopColor",
        "stop-color"
      ],
      [
        "stopOpacity",
        "stop-opacity"
      ],
      [
        "strikethroughPosition",
        "strikethrough-position"
      ],
      [
        "strikethroughThickness",
        "strikethrough-thickness"
      ],
      [
        "strokeDasharray",
        "stroke-dasharray"
      ],
      [
        "strokeDashoffset",
        "stroke-dashoffset"
      ],
      [
        "strokeLinecap",
        "stroke-linecap"
      ],
      [
        "strokeLinejoin",
        "stroke-linejoin"
      ],
      [
        "strokeMiterlimit",
        "stroke-miterlimit"
      ],
      [
        "strokeOpacity",
        "stroke-opacity"
      ],
      [
        "strokeWidth",
        "stroke-width"
      ],
      [
        "textAnchor",
        "text-anchor"
      ],
      [
        "textDecoration",
        "text-decoration"
      ],
      [
        "textRendering",
        "text-rendering"
      ],
      [
        "transformOrigin",
        "transform-origin"
      ],
      [
        "underlinePosition",
        "underline-position"
      ],
      [
        "underlineThickness",
        "underline-thickness"
      ],
      [
        "unicodeBidi",
        "unicode-bidi"
      ],
      [
        "unicodeRange",
        "unicode-range"
      ],
      [
        "unitsPerEm",
        "units-per-em"
      ],
      [
        "vAlphabetic",
        "v-alphabetic"
      ],
      [
        "vHanging",
        "v-hanging"
      ],
      [
        "vIdeographic",
        "v-ideographic"
      ],
      [
        "vMathematical",
        "v-mathematical"
      ],
      [
        "vectorEffect",
        "vector-effect"
      ],
      [
        "vertAdvY",
        "vert-adv-y"
      ],
      [
        "vertOriginX",
        "vert-origin-x"
      ],
      [
        "vertOriginY",
        "vert-origin-y"
      ],
      [
        "wordSpacing",
        "word-spacing"
      ],
      [
        "writingMode",
        "writing-mode"
      ],
      [
        "xmlnsXlink",
        "xmlns:xlink"
      ],
      [
        "xHeight",
        "x-height"
      ]
    ]), _w = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function xs(e) {
      return _w.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    var Vc = null;
    function Yc(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var Ba = null, Pa = null;
    function ap(e) {
      var n = Na(e);
      if (n && (e = n.stateNode)) {
        var a = e[Ye] || null;
        e: switch (e = n.stateNode, n.type) {
          case "input":
            if (qc(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), n = a.name, a.type === "radio" && n != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (a = a.querySelectorAll('input[name="' + en("" + n) + '"][type="radio"]'), n = 0; n < a.length; n++) {
                var s = a[n];
                if (s !== e && s.form === e.form) {
                  var c = s[Ye] || null;
                  if (!c) throw Error(i(90));
                  qc(s, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name);
                }
              }
              for (n = 0; n < a.length; n++) s = a[n], s.form === e.form && Jh(s);
            }
            break e;
          case "textarea":
            ep(e, a.value, a.defaultValue);
            break e;
          case "select":
            n = a.value, n != null && La(e, !!a.multiple, n, false);
        }
      }
    }
    var Kc = false;
    function op(e, n, a) {
      if (Kc) return e(n, a);
      Kc = true;
      try {
        var s = e(n);
        return s;
      } finally {
        if (Kc = false, (Ba !== null || Pa !== null) && (sl(), Ba && (n = Ba, e = Pa, Pa = Ba = null, ap(n), e))) for (n = 0; n < e.length; n++) ap(e[n]);
      }
    }
    function Qo(e, n) {
      var a = e.stateNode;
      if (a === null) return null;
      var s = a[Ye] || null;
      if (s === null) return null;
      a = s[n];
      e: switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
          break e;
        default:
          e = false;
      }
      if (e) return null;
      if (a && typeof a != "function") throw Error(i(231, n, typeof a));
      return a;
    }
    var Vn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ic = false;
    if (Vn) try {
      var Xo = {};
      Object.defineProperty(Xo, "passive", {
        get: function() {
          Ic = true;
        }
      }), window.addEventListener("test", Xo, Xo), window.removeEventListener("test", Xo, Xo);
    } catch {
      Ic = false;
    }
    var hr = null, Qc = null, Ss = null;
    function ip() {
      if (Ss) return Ss;
      var e, n = Qc, a = n.length, s, c = "value" in hr ? hr.value : hr.textContent, f = c.length;
      for (e = 0; e < a && n[e] === c[e]; e++) ;
      var y = a - e;
      for (s = 1; s <= y && n[a - s] === c[f - s]; s++) ;
      return Ss = c.slice(e, 1 < s ? 1 - s : void 0);
    }
    function Es(e) {
      var n = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Rs() {
      return true;
    }
    function sp() {
      return false;
    }
    function kt(e) {
      function n(a, s, c, f, y) {
        this._reactName = a, this._targetInst = c, this.type = s, this.nativeEvent = f, this.target = y, this.currentTarget = null;
        for (var _ in e) e.hasOwnProperty(_) && (a = e[_], this[_] = a ? a(f) : f[_]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? Rs : sp, this.isPropagationStopped = sp, this;
      }
      return v(n.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = false), this.isDefaultPrevented = Rs);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = true), this.isPropagationStopped = Rs);
        },
        persist: function() {
        },
        isPersistent: Rs
      }), n;
    }
    var Ir = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ts = kt(Ir), $o = v({}, Ir, {
      view: 0,
      detail: 0
    }), ww = kt($o), Xc, $c, Zo, Cs = v({}, $o, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Jc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== Zo && (Zo && e.type === "mousemove" ? (Xc = e.screenX - Zo.screenX, $c = e.screenY - Zo.screenY) : $c = Xc = 0, Zo = e), Xc);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : $c;
      }
    }), lp = kt(Cs), xw = v({}, Cs, {
      dataTransfer: 0
    }), Sw = kt(xw), Ew = v({}, $o, {
      relatedTarget: 0
    }), Zc = kt(Ew), Rw = v({}, Ir, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Tw = kt(Rw), Cw = v({}, Ir, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Mw = kt(Cw), Aw = v({}, Ir, {
      data: 0
    }), cp = kt(Aw), Ow = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Dw = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, Nw = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function jw(e) {
      var n = this.nativeEvent;
      return n.getModifierState ? n.getModifierState(e) : (e = Nw[e]) ? !!n[e] : false;
    }
    function Jc() {
      return jw;
    }
    var zw = v({}, $o, {
      key: function(e) {
        if (e.key) {
          var n = Ow[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress" ? (e = Es(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Dw[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Jc,
      charCode: function(e) {
        return e.type === "keypress" ? Es(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Es(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), kw = kt(zw), Lw = v({}, Cs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), up = kt(Lw), Uw = v({}, $o, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Jc
    }), Bw = kt(Uw), Pw = v({}, Ir, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Hw = kt(Pw), qw = v({}, Cs, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Gw = kt(qw), Fw = v({}, Ir, {
      newState: 0,
      oldState: 0
    }), Vw = kt(Fw), Yw = [
      9,
      13,
      27,
      32
    ], Wc = Vn && "CompositionEvent" in window, Jo = null;
    Vn && "documentMode" in document && (Jo = document.documentMode);
    var Kw = Vn && "TextEvent" in window && !Jo, fp = Vn && (!Wc || Jo && 8 < Jo && 11 >= Jo), dp = " ", hp = false;
    function pp(e, n) {
      switch (e) {
        case "keyup":
          return Yw.indexOf(n.keyCode) !== -1;
        case "keydown":
          return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function mp(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Ha = false;
    function Iw(e, n) {
      switch (e) {
        case "compositionend":
          return mp(n);
        case "keypress":
          return n.which !== 32 ? null : (hp = true, dp);
        case "textInput":
          return e = n.data, e === dp && hp ? null : e;
        default:
          return null;
      }
    }
    function Qw(e, n) {
      if (Ha) return e === "compositionend" || !Wc && pp(e, n) ? (e = ip(), Ss = Qc = hr = null, Ha = false, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
            if (n.char && 1 < n.char.length) return n.char;
            if (n.which) return String.fromCharCode(n.which);
          }
          return null;
        case "compositionend":
          return fp && n.locale !== "ko" ? null : n.data;
        default:
          return null;
      }
    }
    var Xw = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function gp(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return n === "input" ? !!Xw[e.type] : n === "textarea";
    }
    function vp(e, n, a, s) {
      Ba ? Pa ? Pa.push(s) : Pa = [
        s
      ] : Ba = s, n = hl(n, "onChange"), 0 < n.length && (a = new Ts("onChange", "change", null, a, s), e.push({
        event: a,
        listeners: n
      }));
    }
    var Wo = null, ei = null;
    function $w(e) {
      Zg(e, 0);
    }
    function Ms(e) {
      var n = Io(e);
      if (Jh(n)) return e;
    }
    function yp(e, n) {
      if (e === "change") return n;
    }
    var bp = false;
    if (Vn) {
      var eu;
      if (Vn) {
        var tu = "oninput" in document;
        if (!tu) {
          var _p = document.createElement("div");
          _p.setAttribute("oninput", "return;"), tu = typeof _p.oninput == "function";
        }
        eu = tu;
      } else eu = false;
      bp = eu && (!document.documentMode || 9 < document.documentMode);
    }
    function wp() {
      Wo && (Wo.detachEvent("onpropertychange", xp), ei = Wo = null);
    }
    function xp(e) {
      if (e.propertyName === "value" && Ms(ei)) {
        var n = [];
        vp(n, ei, e, Yc(e)), op($w, n);
      }
    }
    function Zw(e, n, a) {
      e === "focusin" ? (wp(), Wo = n, ei = a, Wo.attachEvent("onpropertychange", xp)) : e === "focusout" && wp();
    }
    function Jw(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ms(ei);
    }
    function Ww(e, n) {
      if (e === "click") return Ms(n);
    }
    function ex(e, n) {
      if (e === "input" || e === "change") return Ms(n);
    }
    function tx(e, n) {
      return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
    }
    var qt = typeof Object.is == "function" ? Object.is : tx;
    function ti(e, n) {
      if (qt(e, n)) return true;
      if (typeof e != "object" || e === null || typeof n != "object" || n === null) return false;
      var a = Object.keys(e), s = Object.keys(n);
      if (a.length !== s.length) return false;
      for (s = 0; s < a.length; s++) {
        var c = a[s];
        if (!Ue.call(n, c) || !qt(e[c], n[c])) return false;
      }
      return true;
    }
    function Sp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Ep(e, n) {
      var a = Sp(e);
      e = 0;
      for (var s; a; ) {
        if (a.nodeType === 3) {
          if (s = e + a.textContent.length, e <= n && s >= n) return {
            node: a,
            offset: n - e
          };
          e = s;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = Sp(a);
      }
    }
    function Rp(e, n) {
      return e && n ? e === n ? true : e && e.nodeType === 3 ? false : n && n.nodeType === 3 ? Rp(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : false : false;
    }
    function Tp(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var n = ws(e.document); n instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof n.contentWindow.location.href == "string";
        } catch {
          a = false;
        }
        if (a) e = n.contentWindow;
        else break;
        n = ws(e.document);
      }
      return n;
    }
    function nu(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
    }
    var nx = Vn && "documentMode" in document && 11 >= document.documentMode, qa = null, ru = null, ni = null, au = false;
    function Cp(e, n, a) {
      var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      au || qa == null || qa !== ws(s) || (s = qa, "selectionStart" in s && nu(s) ? s = {
        start: s.selectionStart,
        end: s.selectionEnd
      } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
        anchorNode: s.anchorNode,
        anchorOffset: s.anchorOffset,
        focusNode: s.focusNode,
        focusOffset: s.focusOffset
      }), ni && ti(ni, s) || (ni = s, s = hl(ru, "onSelect"), 0 < s.length && (n = new Ts("onSelect", "select", null, n, a), e.push({
        event: n,
        listeners: s
      }), n.target = qa)));
    }
    function Qr(e, n) {
      var a = {};
      return a[e.toLowerCase()] = n.toLowerCase(), a["Webkit" + e] = "webkit" + n, a["Moz" + e] = "moz" + n, a;
    }
    var Ga = {
      animationend: Qr("Animation", "AnimationEnd"),
      animationiteration: Qr("Animation", "AnimationIteration"),
      animationstart: Qr("Animation", "AnimationStart"),
      transitionrun: Qr("Transition", "TransitionRun"),
      transitionstart: Qr("Transition", "TransitionStart"),
      transitioncancel: Qr("Transition", "TransitionCancel"),
      transitionend: Qr("Transition", "TransitionEnd")
    }, ou = {}, Mp = {};
    Vn && (Mp = document.createElement("div").style, "AnimationEvent" in window || (delete Ga.animationend.animation, delete Ga.animationiteration.animation, delete Ga.animationstart.animation), "TransitionEvent" in window || delete Ga.transitionend.transition);
    function Xr(e) {
      if (ou[e]) return ou[e];
      if (!Ga[e]) return e;
      var n = Ga[e], a;
      for (a in n) if (n.hasOwnProperty(a) && a in Mp) return ou[e] = n[a];
      return e;
    }
    var Ap = Xr("animationend"), Op = Xr("animationiteration"), Dp = Xr("animationstart"), rx = Xr("transitionrun"), ax = Xr("transitionstart"), ox = Xr("transitioncancel"), Np = Xr("transitionend"), jp = /* @__PURE__ */ new Map(), iu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    iu.push("scrollEnd");
    function gn(e, n) {
      jp.set(e, n), Kr(n, [
        e
      ]);
    }
    var zp = /* @__PURE__ */ new WeakMap();
    function tn(e, n) {
      if (typeof e == "object" && e !== null) {
        var a = zp.get(e);
        return a !== void 0 ? a : (n = {
          value: e,
          source: n,
          stack: $h(n)
        }, zp.set(e, n), n);
      }
      return {
        value: e,
        source: n,
        stack: $h(n)
      };
    }
    var nn = [], Fa = 0, su = 0;
    function As() {
      for (var e = Fa, n = su = Fa = 0; n < e; ) {
        var a = nn[n];
        nn[n++] = null;
        var s = nn[n];
        nn[n++] = null;
        var c = nn[n];
        nn[n++] = null;
        var f = nn[n];
        if (nn[n++] = null, s !== null && c !== null) {
          var y = s.pending;
          y === null ? c.next = c : (c.next = y.next, y.next = c), s.pending = c;
        }
        f !== 0 && kp(a, c, f);
      }
    }
    function Os(e, n, a, s) {
      nn[Fa++] = e, nn[Fa++] = n, nn[Fa++] = a, nn[Fa++] = s, su |= s, e.lanes |= s, e = e.alternate, e !== null && (e.lanes |= s);
    }
    function lu(e, n, a, s) {
      return Os(e, n, a, s), Ds(e);
    }
    function Va(e, n) {
      return Os(e, null, null, n), Ds(e);
    }
    function kp(e, n, a) {
      e.lanes |= a;
      var s = e.alternate;
      s !== null && (s.lanes |= a);
      for (var c = false, f = e.return; f !== null; ) f.childLanes |= a, s = f.alternate, s !== null && (s.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (c = true)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, c && n !== null && (c = 31 - yt(a), e = f.hiddenUpdates, s = e[c], s === null ? e[c] = [
        n
      ] : s.push(n), n.lane = a | 536870912), f) : null;
    }
    function Ds(e) {
      if (50 < Ci) throw Ci = 0, mf = null, Error(i(185));
      for (var n = e.return; n !== null; ) e = n, n = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    var Ya = {};
    function ix(e, n, a, s) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Gt(e, n, a, s) {
      return new ix(e, n, a, s);
    }
    function cu(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Yn(e, n) {
      var a = e.alternate;
      return a === null ? (a = Gt(e.tag, n, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = n, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, n = e.dependencies, a.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
    }
    function Lp(e, n) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, n = a.dependencies, e.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
      }), e;
    }
    function Ns(e, n, a, s, c, f) {
      var y = 0;
      if (s = e, typeof e == "function") cu(e) && (y = 1);
      else if (typeof e == "string") y = lS(e, a, J.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else e: switch (e) {
        case U:
          return e = Gt(31, a, n, c), e.elementType = U, e.lanes = f, e;
        case E:
          return $r(a.children, c, f, n);
        case R:
          y = 8, c |= 24;
          break;
        case C:
          return e = Gt(12, a, n, c | 2), e.elementType = C, e.lanes = f, e;
        case q:
          return e = Gt(13, a, n, c), e.elementType = q, e.lanes = f, e;
        case V:
          return e = Gt(19, a, n, c), e.elementType = V, e.lanes = f, e;
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case O:
            case j:
              y = 10;
              break e;
            case k:
              y = 9;
              break e;
            case H:
              y = 11;
              break e;
            case K:
              y = 14;
              break e;
            case D:
              y = 16, s = null;
              break e;
          }
          y = 29, a = Error(i(130, e === null ? "null" : typeof e, "")), s = null;
      }
      return n = Gt(y, a, n, c), n.elementType = e, n.type = s, n.lanes = f, n;
    }
    function $r(e, n, a, s) {
      return e = Gt(7, e, s, n), e.lanes = a, e;
    }
    function uu(e, n, a) {
      return e = Gt(6, e, null, n), e.lanes = a, e;
    }
    function fu(e, n, a) {
      return n = Gt(4, e.children !== null ? e.children : [], e.key, n), n.lanes = a, n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, n;
    }
    var Ka = [], Ia = 0, js = null, zs = 0, rn = [], an = 0, Zr = null, Kn = 1, In = "";
    function Jr(e, n) {
      Ka[Ia++] = zs, Ka[Ia++] = js, js = e, zs = n;
    }
    function Up(e, n, a) {
      rn[an++] = Kn, rn[an++] = In, rn[an++] = Zr, Zr = e;
      var s = Kn;
      e = In;
      var c = 32 - yt(s) - 1;
      s &= ~(1 << c), a += 1;
      var f = 32 - yt(n) + c;
      if (30 < f) {
        var y = c - c % 5;
        f = (s & (1 << y) - 1).toString(32), s >>= y, c -= y, Kn = 1 << 32 - yt(n) + c | a << c | s, In = f + e;
      } else Kn = 1 << f | a << c | s, In = e;
    }
    function du(e) {
      e.return !== null && (Jr(e, 1), Up(e, 1, 0));
    }
    function hu(e) {
      for (; e === js; ) js = Ka[--Ia], Ka[Ia] = null, zs = Ka[--Ia], Ka[Ia] = null;
      for (; e === Zr; ) Zr = rn[--an], rn[an] = null, In = rn[--an], rn[an] = null, Kn = rn[--an], rn[an] = null;
    }
    var Nt = null, Ze = null, ke = false, Wr = null, Cn = false, pu = Error(i(519));
    function ea(e) {
      var n = Error(i(418, ""));
      throw oi(tn(n, e)), pu;
    }
    function Bp(e) {
      var n = e.stateNode, a = e.type, s = e.memoizedProps;
      switch (n[tt] = e, n[Ye] = s, a) {
        case "dialog":
          De("cancel", n), De("close", n);
          break;
        case "iframe":
        case "object":
        case "embed":
          De("load", n);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Ai.length; a++) De(Ai[a], n);
          break;
        case "source":
          De("error", n);
          break;
        case "img":
        case "image":
        case "link":
          De("error", n), De("load", n);
          break;
        case "details":
          De("toggle", n);
          break;
        case "input":
          De("invalid", n), Wh(n, s.value, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name, true), _s3(n);
          break;
        case "select":
          De("invalid", n);
          break;
        case "textarea":
          De("invalid", n), tp(n, s.value, s.defaultValue, s.children), _s3(n);
      }
      a = s.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || s.suppressHydrationWarning === true || tv(n.textContent, a) ? (s.popover != null && (De("beforetoggle", n), De("toggle", n)), s.onScroll != null && De("scroll", n), s.onScrollEnd != null && De("scrollend", n), s.onClick != null && (n.onclick = pl), n = true) : n = false, n || ea(e);
    }
    function Pp(e) {
      for (Nt = e.return; Nt; ) switch (Nt.tag) {
        case 5:
        case 13:
          Cn = false;
          return;
        case 27:
        case 3:
          Cn = true;
          return;
        default:
          Nt = Nt.return;
      }
    }
    function ri(e) {
      if (e !== Nt) return false;
      if (!ke) return Pp(e), ke = true, false;
      var n = e.tag, a;
      if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Df(e.type, e.memoizedProps)), a = !a), a && Ze && ea(e), Pp(e), n === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
        e: {
          for (e = e.nextSibling, n = 0; e; ) {
            if (e.nodeType === 8) if (a = e.data, a === "/$") {
              if (n === 0) {
                Ze = yn(e.nextSibling);
                break e;
              }
              n--;
            } else a !== "$" && a !== "$!" && a !== "$?" || n++;
            e = e.nextSibling;
          }
          Ze = null;
        }
      } else n === 27 ? (n = Ze, Ar(e.type) ? (e = kf, kf = null, Ze = e) : Ze = n) : Ze = Nt ? yn(e.stateNode.nextSibling) : null;
      return true;
    }
    function ai() {
      Ze = Nt = null, ke = false;
    }
    function Hp() {
      var e = Wr;
      return e !== null && (Bt === null ? Bt = e : Bt.push.apply(Bt, e), Wr = null), e;
    }
    function oi(e) {
      Wr === null ? Wr = [
        e
      ] : Wr.push(e);
    }
    var mu = L(null), ta = null, Qn = null;
    function pr(e, n, a) {
      Q(mu, n._currentValue), n._currentValue = a;
    }
    function Xn(e) {
      e._currentValue = mu.current, $(mu);
    }
    function gu(e, n, a) {
      for (; e !== null; ) {
        var s = e.alternate;
        if ((e.childLanes & n) !== n ? (e.childLanes |= n, s !== null && (s.childLanes |= n)) : s !== null && (s.childLanes & n) !== n && (s.childLanes |= n), e === a) break;
        e = e.return;
      }
    }
    function vu(e, n, a, s) {
      var c = e.child;
      for (c !== null && (c.return = e); c !== null; ) {
        var f = c.dependencies;
        if (f !== null) {
          var y = c.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var _ = f;
            f = c;
            for (var M = 0; M < n.length; M++) if (_.context === n[M]) {
              f.lanes |= a, _ = f.alternate, _ !== null && (_.lanes |= a), gu(f.return, a, e), s || (y = null);
              break e;
            }
            f = _.next;
          }
        } else if (c.tag === 18) {
          if (y = c.return, y === null) throw Error(i(341));
          y.lanes |= a, f = y.alternate, f !== null && (f.lanes |= a), gu(y, a, e), y = null;
        } else y = c.child;
        if (y !== null) y.return = c;
        else for (y = c; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (c = y.sibling, c !== null) {
            c.return = y.return, y = c;
            break;
          }
          y = y.return;
        }
        c = y;
      }
    }
    function ii(e, n, a, s) {
      e = null;
      for (var c = n, f = false; c !== null; ) {
        if (!f) {
          if ((c.flags & 524288) !== 0) f = true;
          else if ((c.flags & 262144) !== 0) break;
        }
        if (c.tag === 10) {
          var y = c.alternate;
          if (y === null) throw Error(i(387));
          if (y = y.memoizedProps, y !== null) {
            var _ = c.type;
            qt(c.pendingProps.value, y.value) || (e !== null ? e.push(_) : e = [
              _
            ]);
          }
        } else if (c === le.current) {
          if (y = c.alternate, y === null) throw Error(i(387));
          y.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(ki) : e = [
            ki
          ]);
        }
        c = c.return;
      }
      e !== null && vu(n, e, a, s), n.flags |= 262144;
    }
    function ks(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!qt(e.context._currentValue, e.memoizedValue)) return true;
        e = e.next;
      }
      return false;
    }
    function na(e) {
      ta = e, Qn = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Tt(e) {
      return qp(ta, e);
    }
    function Ls(e, n) {
      return ta === null && na(e), qp(e, n);
    }
    function qp(e, n) {
      var a = n._currentValue;
      if (n = {
        context: n,
        memoizedValue: a,
        next: null
      }, Qn === null) {
        if (e === null) throw Error(i(308));
        Qn = n, e.dependencies = {
          lanes: 0,
          firstContext: n
        }, e.flags |= 524288;
      } else Qn = Qn.next = n;
      return a;
    }
    var sx = typeof AbortController < "u" ? AbortController : function() {
      var e = [], n = this.signal = {
        aborted: false,
        addEventListener: function(a, s) {
          e.push(s);
        }
      };
      this.abort = function() {
        n.aborted = true, e.forEach(function(a) {
          return a();
        });
      };
    }, lx = t.unstable_scheduleCallback, cx = t.unstable_NormalPriority, lt = {
      $$typeof: j,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function yu() {
      return {
        controller: new sx(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function si(e) {
      e.refCount--, e.refCount === 0 && lx(cx, function() {
        e.controller.abort();
      });
    }
    var li = null, bu = 0, Qa = 0, Xa = null;
    function ux(e, n) {
      if (li === null) {
        var a = li = [];
        bu = 0, Qa = xf(), Xa = {
          status: "pending",
          value: void 0,
          then: function(s) {
            a.push(s);
          }
        };
      }
      return bu++, n.then(Gp, Gp), n;
    }
    function Gp() {
      if (--bu === 0 && li !== null) {
        Xa !== null && (Xa.status = "fulfilled");
        var e = li;
        li = null, Qa = 0, Xa = null;
        for (var n = 0; n < e.length; n++) (0, e[n])();
      }
    }
    function fx(e, n) {
      var a = [], s = {
        status: "pending",
        value: null,
        reason: null,
        then: function(c) {
          a.push(c);
        }
      };
      return e.then(function() {
        s.status = "fulfilled", s.value = n;
        for (var c = 0; c < a.length; c++) (0, a[c])(n);
      }, function(c) {
        for (s.status = "rejected", s.reason = c, c = 0; c < a.length; c++) (0, a[c])(void 0);
      }), s;
    }
    var Fp = A.S;
    A.S = function(e, n) {
      typeof n == "object" && n !== null && typeof n.then == "function" && ux(e, n), Fp !== null && Fp(e, n);
    };
    var ra = L(null);
    function _u() {
      var e = ra.current;
      return e !== null ? e : Ke.pooledCache;
    }
    function Us(e, n) {
      n === null ? Q(ra, ra.current) : Q(ra, n.pool);
    }
    function Vp() {
      var e = _u();
      return e === null ? null : {
        parent: lt._currentValue,
        pool: e
      };
    }
    var ci = Error(i(460)), Yp = Error(i(474)), Bs = Error(i(542)), wu = {
      then: function() {
      }
    };
    function Kp(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Ps() {
    }
    function Ip(e, n, a) {
      switch (a = e[a], a === void 0 ? e.push(n) : a !== n && (n.then(Ps, Ps), n = a), n.status) {
        case "fulfilled":
          return n.value;
        case "rejected":
          throw e = n.reason, Xp(e), e;
        default:
          if (typeof n.status == "string") n.then(Ps, Ps);
          else {
            if (e = Ke, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
            e = n, e.status = "pending", e.then(function(s) {
              if (n.status === "pending") {
                var c = n;
                c.status = "fulfilled", c.value = s;
              }
            }, function(s) {
              if (n.status === "pending") {
                var c = n;
                c.status = "rejected", c.reason = s;
              }
            });
          }
          switch (n.status) {
            case "fulfilled":
              return n.value;
            case "rejected":
              throw e = n.reason, Xp(e), e;
          }
          throw ui = n, ci;
      }
    }
    var ui = null;
    function Qp() {
      if (ui === null) throw Error(i(459));
      var e = ui;
      return ui = null, e;
    }
    function Xp(e) {
      if (e === ci || e === Bs) throw Error(i(483));
    }
    var mr = false;
    function xu(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null
        },
        callbacks: null
      };
    }
    function Su(e, n) {
      e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function gr(e) {
      return {
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function vr(e, n, a) {
      var s = e.updateQueue;
      if (s === null) return null;
      if (s = s.shared, (Pe & 2) !== 0) {
        var c = s.pending;
        return c === null ? n.next = n : (n.next = c.next, c.next = n), s.pending = n, n = Ds(e), kp(e, null, a), n;
      }
      return Os(e, s, n, a), Ds(e);
    }
    function fi(e, n, a) {
      if (n = n.updateQueue, n !== null && (n = n.shared, (a & 4194048) !== 0)) {
        var s = n.lanes;
        s &= e.pendingLanes, a |= s, n.lanes = a, We(e, a);
      }
    }
    function Eu(e, n) {
      var a = e.updateQueue, s = e.alternate;
      if (s !== null && (s = s.updateQueue, a === s)) {
        var c = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var y = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? c = f = y : f = f.next = y, a = a.next;
          } while (a !== null);
          f === null ? c = f = n : f = f.next = n;
        } else c = f = n;
        a = {
          baseState: s.baseState,
          firstBaseUpdate: c,
          lastBaseUpdate: f,
          shared: s.shared,
          callbacks: s.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = n : e.next = n, a.lastBaseUpdate = n;
    }
    var Ru = false;
    function di() {
      if (Ru) {
        var e = Xa;
        if (e !== null) throw e;
      }
    }
    function hi(e, n, a, s) {
      Ru = false;
      var c = e.updateQueue;
      mr = false;
      var f = c.firstBaseUpdate, y = c.lastBaseUpdate, _ = c.shared.pending;
      if (_ !== null) {
        c.shared.pending = null;
        var M = _, G = M.next;
        M.next = null, y === null ? f = G : y.next = G, y = M;
        var X = e.alternate;
        X !== null && (X = X.updateQueue, _ = X.lastBaseUpdate, _ !== y && (_ === null ? X.firstBaseUpdate = G : _.next = G, X.lastBaseUpdate = M));
      }
      if (f !== null) {
        var te = c.baseState;
        y = 0, X = G = M = null, _ = f;
        do {
          var F = _.lane & -536870913, Y = F !== _.lane;
          if (Y ? (Ne & F) === F : (s & F) === F) {
            F !== 0 && F === Qa && (Ru = true), X !== null && (X = X.next = {
              lane: 0,
              tag: _.tag,
              payload: _.payload,
              callback: null,
              next: null
            });
            e: {
              var _e11 = e, ve = _;
              F = n;
              var Fe = a;
              switch (ve.tag) {
                case 1:
                  if (_e11 = ve.payload, typeof _e11 == "function") {
                    te = _e11.call(Fe, te, F);
                    break e;
                  }
                  te = _e11;
                  break e;
                case 3:
                  _e11.flags = _e11.flags & -65537 | 128;
                case 0:
                  if (_e11 = ve.payload, F = typeof _e11 == "function" ? _e11.call(Fe, te, F) : _e11, F == null) break e;
                  te = v({}, te, F);
                  break e;
                case 2:
                  mr = true;
              }
            }
            F = _.callback, F !== null && (e.flags |= 64, Y && (e.flags |= 8192), Y = c.callbacks, Y === null ? c.callbacks = [
              F
            ] : Y.push(F));
          } else Y = {
            lane: F,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          }, X === null ? (G = X = Y, M = te) : X = X.next = Y, y |= F;
          if (_ = _.next, _ === null) {
            if (_ = c.shared.pending, _ === null) break;
            Y = _, _ = Y.next, Y.next = null, c.lastBaseUpdate = Y, c.shared.pending = null;
          }
        } while (true);
        X === null && (M = te), c.baseState = M, c.firstBaseUpdate = G, c.lastBaseUpdate = X, f === null && (c.shared.lanes = 0), Rr |= y, e.lanes = y, e.memoizedState = te;
      }
    }
    function $p(e, n) {
      if (typeof e != "function") throw Error(i(191, e));
      e.call(n);
    }
    function Zp(e, n) {
      var a = e.callbacks;
      if (a !== null) for (e.callbacks = null, e = 0; e < a.length; e++) $p(a[e], n);
    }
    var $a = L(null), Hs = L(0);
    function Jp(e, n) {
      e = nr, Q(Hs, e), Q($a, n), nr = e | n.baseLanes;
    }
    function Tu() {
      Q(Hs, nr), Q($a, $a.current);
    }
    function Cu() {
      nr = Hs.current, $($a), $(Hs);
    }
    var yr = 0, Te = null, qe = null, ot = null, qs = false, Za = false, aa = false, Gs = 0, pi = 0, Ja = null, dx = 0;
    function nt() {
      throw Error(i(321));
    }
    function Mu(e, n) {
      if (n === null) return false;
      for (var a = 0; a < n.length && a < e.length; a++) if (!qt(e[a], n[a])) return false;
      return true;
    }
    function Au(e, n, a, s, c, f) {
      return yr = f, Te = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, A.H = e === null || e.memoizedState === null ? km : Lm, aa = false, f = a(s, c), aa = false, Za && (f = em(n, a, s, c)), Wp(e), f;
    }
    function Wp(e) {
      A.H = Qs;
      var n = qe !== null && qe.next !== null;
      if (yr = 0, ot = qe = Te = null, qs = false, pi = 0, Ja = null, n) throw Error(i(300));
      e === null || mt || (e = e.dependencies, e !== null && ks(e) && (mt = true));
    }
    function em(e, n, a, s) {
      Te = e;
      var c = 0;
      do {
        if (Za && (Ja = null), pi = 0, Za = false, 25 <= c) throw Error(i(301));
        if (c += 1, ot = qe = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        A.H = bx, f = n(a, s);
      } while (Za);
      return f;
    }
    function hx() {
      var e = A.H, n = e.useState()[0];
      return n = typeof n.then == "function" ? mi(n) : n, e = e.useState()[0], (qe !== null ? qe.memoizedState : null) !== e && (Te.flags |= 1024), n;
    }
    function Ou() {
      var e = Gs !== 0;
      return Gs = 0, e;
    }
    function Du(e, n, a) {
      n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a;
    }
    function Nu(e) {
      if (qs) {
        for (e = e.memoizedState; e !== null; ) {
          var n = e.queue;
          n !== null && (n.pending = null), e = e.next;
        }
        qs = false;
      }
      yr = 0, ot = qe = Te = null, Za = false, pi = Gs = 0, Ja = null;
    }
    function Lt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return ot === null ? Te.memoizedState = ot = e : ot = ot.next = e, ot;
    }
    function it() {
      if (qe === null) {
        var e = Te.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = qe.next;
      var n = ot === null ? Te.memoizedState : ot.next;
      if (n !== null) ot = n, qe = e;
      else {
        if (e === null) throw Te.alternate === null ? Error(i(467)) : Error(i(310));
        qe = e, e = {
          memoizedState: qe.memoizedState,
          baseState: qe.baseState,
          baseQueue: qe.baseQueue,
          queue: qe.queue,
          next: null
        }, ot === null ? Te.memoizedState = ot = e : ot = ot.next = e;
      }
      return ot;
    }
    function ju() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function mi(e) {
      var n = pi;
      return pi += 1, Ja === null && (Ja = []), e = Ip(Ja, e, n), n = Te, (ot === null ? n.memoizedState : ot.next) === null && (n = n.alternate, A.H = n === null || n.memoizedState === null ? km : Lm), e;
    }
    function Fs(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return mi(e);
        if (e.$$typeof === j) return Tt(e);
      }
      throw Error(i(438, String(e)));
    }
    function zu(e) {
      var n = null, a = Te.updateQueue;
      if (a !== null && (n = a.memoCache), n == null) {
        var s = Te.alternate;
        s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (n = {
          data: s.data.map(function(c) {
            return c.slice();
          }),
          index: 0
        })));
      }
      if (n == null && (n = {
        data: [],
        index: 0
      }), a === null && (a = ju(), Te.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0) for (a = n.data[n.index] = Array(e), s = 0; s < e; s++) a[s] = ae;
      return n.index++, a;
    }
    function $n(e, n) {
      return typeof n == "function" ? n(e) : n;
    }
    function Vs(e) {
      var n = it();
      return ku(n, qe, e);
    }
    function ku(e, n, a) {
      var s = e.queue;
      if (s === null) throw Error(i(311));
      s.lastRenderedReducer = a;
      var c = e.baseQueue, f = s.pending;
      if (f !== null) {
        if (c !== null) {
          var y = c.next;
          c.next = f.next, f.next = y;
        }
        n.baseQueue = c = f, s.pending = null;
      }
      if (f = e.baseState, c === null) e.memoizedState = f;
      else {
        n = c.next;
        var _ = y = null, M = null, G = n, X = false;
        do {
          var te = G.lane & -536870913;
          if (te !== G.lane ? (Ne & te) === te : (yr & te) === te) {
            var F = G.revertLane;
            if (F === 0) M !== null && (M = M.next = {
              lane: 0,
              revertLane: 0,
              action: G.action,
              hasEagerState: G.hasEagerState,
              eagerState: G.eagerState,
              next: null
            }), te === Qa && (X = true);
            else if ((yr & F) === F) {
              G = G.next, F === Qa && (X = true);
              continue;
            } else te = {
              lane: 0,
              revertLane: G.revertLane,
              action: G.action,
              hasEagerState: G.hasEagerState,
              eagerState: G.eagerState,
              next: null
            }, M === null ? (_ = M = te, y = f) : M = M.next = te, Te.lanes |= F, Rr |= F;
            te = G.action, aa && a(f, te), f = G.hasEagerState ? G.eagerState : a(f, te);
          } else F = {
            lane: te,
            revertLane: G.revertLane,
            action: G.action,
            hasEagerState: G.hasEagerState,
            eagerState: G.eagerState,
            next: null
          }, M === null ? (_ = M = F, y = f) : M = M.next = F, Te.lanes |= te, Rr |= te;
          G = G.next;
        } while (G !== null && G !== n);
        if (M === null ? y = f : M.next = _, !qt(f, e.memoizedState) && (mt = true, X && (a = Xa, a !== null))) throw a;
        e.memoizedState = f, e.baseState = y, e.baseQueue = M, s.lastRenderedState = f;
      }
      return c === null && (s.lanes = 0), [
        e.memoizedState,
        s.dispatch
      ];
    }
    function Lu(e) {
      var n = it(), a = n.queue;
      if (a === null) throw Error(i(311));
      a.lastRenderedReducer = e;
      var s = a.dispatch, c = a.pending, f = n.memoizedState;
      if (c !== null) {
        a.pending = null;
        var y = c = c.next;
        do
          f = e(f, y.action), y = y.next;
        while (y !== c);
        qt(f, n.memoizedState) || (mt = true), n.memoizedState = f, n.baseQueue === null && (n.baseState = f), a.lastRenderedState = f;
      }
      return [
        f,
        s
      ];
    }
    function tm(e, n, a) {
      var s = Te, c = it(), f = ke;
      if (f) {
        if (a === void 0) throw Error(i(407));
        a = a();
      } else a = n();
      var y = !qt((qe || c).memoizedState, a);
      y && (c.memoizedState = a, mt = true), c = c.queue;
      var _ = am.bind(null, s, c, e);
      if (gi(2048, 8, _, [
        e
      ]), c.getSnapshot !== n || y || ot !== null && ot.memoizedState.tag & 1) {
        if (s.flags |= 2048, Wa(9, Ys(), rm.bind(null, s, c, a, n), null), Ke === null) throw Error(i(349));
        f || (yr & 124) !== 0 || nm(s, n, a);
      }
      return a;
    }
    function nm(e, n, a) {
      e.flags |= 16384, e = {
        getSnapshot: n,
        value: a
      }, n = Te.updateQueue, n === null ? (n = ju(), Te.updateQueue = n, n.stores = [
        e
      ]) : (a = n.stores, a === null ? n.stores = [
        e
      ] : a.push(e));
    }
    function rm(e, n, a, s) {
      n.value = a, n.getSnapshot = s, om(n) && im(e);
    }
    function am(e, n, a) {
      return a(function() {
        om(n) && im(e);
      });
    }
    function om(e) {
      var n = e.getSnapshot;
      e = e.value;
      try {
        var a = n();
        return !qt(e, a);
      } catch {
        return true;
      }
    }
    function im(e) {
      var n = Va(e, 2);
      n !== null && It(n, e, 2);
    }
    function Uu(e) {
      var n = Lt();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), aa) {
          pn(true);
          try {
            a();
          } finally {
            pn(false);
          }
        }
      }
      return n.memoizedState = n.baseState = e, n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $n,
        lastRenderedState: e
      }, n;
    }
    function sm(e, n, a, s) {
      return e.baseState = a, ku(e, qe, typeof s == "function" ? s : $n);
    }
    function px(e, n, a, s, c) {
      if (Is(e)) throw Error(i(485));
      if (e = n.action, e !== null) {
        var f = {
          payload: c,
          action: e,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(y) {
            f.listeners.push(y);
          }
        };
        A.T !== null ? a(true) : f.isTransition = false, s(f), a = n.pending, a === null ? (f.next = n.pending = f, lm(n, f)) : (f.next = a.next, n.pending = a.next = f);
      }
    }
    function lm(e, n) {
      var a = n.action, s = n.payload, c = e.state;
      if (n.isTransition) {
        var f = A.T, y = {};
        A.T = y;
        try {
          var _ = a(c, s), M = A.S;
          M !== null && M(y, _), cm(e, n, _);
        } catch (G) {
          Bu(e, n, G);
        } finally {
          A.T = f;
        }
      } else try {
        f = a(c, s), cm(e, n, f);
      } catch (G) {
        Bu(e, n, G);
      }
    }
    function cm(e, n, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(s) {
        um(e, n, s);
      }, function(s) {
        return Bu(e, n, s);
      }) : um(e, n, a);
    }
    function um(e, n, a) {
      n.status = "fulfilled", n.value = a, fm(n), e.state = a, n = e.pending, n !== null && (a = n.next, a === n ? e.pending = null : (a = a.next, n.next = a, lm(e, a)));
    }
    function Bu(e, n, a) {
      var s = e.pending;
      if (e.pending = null, s !== null) {
        s = s.next;
        do
          n.status = "rejected", n.reason = a, fm(n), n = n.next;
        while (n !== s);
      }
      e.action = null;
    }
    function fm(e) {
      e = e.listeners;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
    function dm(e, n) {
      return n;
    }
    function hm(e, n) {
      if (ke) {
        var a = Ke.formState;
        if (a !== null) {
          e: {
            var s = Te;
            if (ke) {
              if (Ze) {
                t: {
                  for (var c = Ze, f = Cn; c.nodeType !== 8; ) {
                    if (!f) {
                      c = null;
                      break t;
                    }
                    if (c = yn(c.nextSibling), c === null) {
                      c = null;
                      break t;
                    }
                  }
                  f = c.data, c = f === "F!" || f === "F" ? c : null;
                }
                if (c) {
                  Ze = yn(c.nextSibling), s = c.data === "F!";
                  break e;
                }
              }
              ea(s);
            }
            s = false;
          }
          s && (n = a[0]);
        }
      }
      return a = Lt(), a.memoizedState = a.baseState = n, s = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dm,
        lastRenderedState: n
      }, a.queue = s, a = Nm.bind(null, Te, s), s.dispatch = a, s = Uu(false), f = Fu.bind(null, Te, false, s.queue), s = Lt(), c = {
        state: n,
        dispatch: null,
        action: e,
        pending: null
      }, s.queue = c, a = px.bind(null, Te, c, f, a), c.dispatch = a, s.memoizedState = e, [
        n,
        a,
        false
      ];
    }
    function pm(e) {
      var n = it();
      return mm(n, qe, e);
    }
    function mm(e, n, a) {
      if (n = ku(e, n, dm)[0], e = Vs($n)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
        var s = mi(n);
      } catch (y) {
        throw y === ci ? Bs : y;
      }
      else s = n;
      n = it();
      var c = n.queue, f = c.dispatch;
      return a !== n.memoizedState && (Te.flags |= 2048, Wa(9, Ys(), mx.bind(null, c, a), null)), [
        s,
        f,
        e
      ];
    }
    function mx(e, n) {
      e.action = n;
    }
    function gm(e) {
      var n = it(), a = qe;
      if (a !== null) return mm(n, a, e);
      it(), n = n.memoizedState, a = it();
      var s = a.queue.dispatch;
      return a.memoizedState = e, [
        n,
        s,
        false
      ];
    }
    function Wa(e, n, a, s) {
      return e = {
        tag: e,
        create: a,
        deps: s,
        inst: n,
        next: null
      }, n = Te.updateQueue, n === null && (n = ju(), Te.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = e.next = e : (s = a.next, a.next = e, e.next = s, n.lastEffect = e), e;
    }
    function Ys() {
      return {
        destroy: void 0,
        resource: void 0
      };
    }
    function vm() {
      return it().memoizedState;
    }
    function Ks(e, n, a, s) {
      var c = Lt();
      s = s === void 0 ? null : s, Te.flags |= e, c.memoizedState = Wa(1 | n, Ys(), a, s);
    }
    function gi(e, n, a, s) {
      var c = it();
      s = s === void 0 ? null : s;
      var f = c.memoizedState.inst;
      qe !== null && s !== null && Mu(s, qe.memoizedState.deps) ? c.memoizedState = Wa(n, f, a, s) : (Te.flags |= e, c.memoizedState = Wa(1 | n, f, a, s));
    }
    function ym(e, n) {
      Ks(8390656, 8, e, n);
    }
    function bm(e, n) {
      gi(2048, 8, e, n);
    }
    function _m(e, n) {
      return gi(4, 2, e, n);
    }
    function wm(e, n) {
      return gi(4, 4, e, n);
    }
    function xm(e, n) {
      if (typeof n == "function") {
        e = e();
        var a = n(e);
        return function() {
          typeof a == "function" ? a() : n(null);
        };
      }
      if (n != null) return e = e(), n.current = e, function() {
        n.current = null;
      };
    }
    function Sm(e, n, a) {
      a = a != null ? a.concat([
        e
      ]) : null, gi(4, 4, xm.bind(null, n, e), a);
    }
    function Pu() {
    }
    function Em(e, n) {
      var a = it();
      n = n === void 0 ? null : n;
      var s = a.memoizedState;
      return n !== null && Mu(n, s[1]) ? s[0] : (a.memoizedState = [
        e,
        n
      ], e);
    }
    function Rm(e, n) {
      var a = it();
      n = n === void 0 ? null : n;
      var s = a.memoizedState;
      if (n !== null && Mu(n, s[1])) return s[0];
      if (s = e(), aa) {
        pn(true);
        try {
          e();
        } finally {
          pn(false);
        }
      }
      return a.memoizedState = [
        s,
        n
      ], s;
    }
    function Hu(e, n, a) {
      return a === void 0 || (yr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = a, e = Mg(), Te.lanes |= e, Rr |= e, a);
    }
    function Tm(e, n, a, s) {
      return qt(a, n) ? a : $a.current !== null ? (e = Hu(e, a, s), qt(e, n) || (mt = true), e) : (yr & 42) === 0 ? (mt = true, e.memoizedState = a) : (e = Mg(), Te.lanes |= e, Rr |= e, n);
    }
    function Cm(e, n, a, s, c) {
      var f = I.p;
      I.p = f !== 0 && 8 > f ? f : 8;
      var y = A.T, _ = {};
      A.T = _, Fu(e, false, n, a);
      try {
        var M = c(), G = A.S;
        if (G !== null && G(_, M), M !== null && typeof M == "object" && typeof M.then == "function") {
          var X = fx(M, s);
          vi(e, n, X, Kt(e));
        } else vi(e, n, s, Kt(e));
      } catch (te) {
        vi(e, n, {
          then: function() {
          },
          status: "rejected",
          reason: te
        }, Kt());
      } finally {
        I.p = f, A.T = y;
      }
    }
    function gx() {
    }
    function qu(e, n, a, s) {
      if (e.tag !== 5) throw Error(i(476));
      var c = Mm(e).queue;
      Cm(e, c, n, B, a === null ? gx : function() {
        return Am(e), a(s);
      });
    }
    function Mm(e) {
      var n = e.memoizedState;
      if (n !== null) return n;
      n = {
        memoizedState: B,
        baseState: B,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $n,
          lastRenderedState: B
        },
        next: null
      };
      var a = {};
      return n.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $n,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
    }
    function Am(e) {
      var n = Mm(e).next.queue;
      vi(e, n, {}, Kt());
    }
    function Gu() {
      return Tt(ki);
    }
    function Om() {
      return it().memoizedState;
    }
    function Dm() {
      return it().memoizedState;
    }
    function vx(e) {
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case 24:
          case 3:
            var a = Kt();
            e = gr(a);
            var s = vr(n, e, a);
            s !== null && (It(s, n, a), fi(s, n, a)), n = {
              cache: yu()
            }, e.payload = n;
            return;
        }
        n = n.return;
      }
    }
    function yx(e, n, a) {
      var s = Kt();
      a = {
        lane: s,
        revertLane: 0,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Is(e) ? jm(n, a) : (a = lu(e, n, a, s), a !== null && (It(a, e, s), zm(a, n, s)));
    }
    function Nm(e, n, a) {
      var s = Kt();
      vi(e, n, a, s);
    }
    function vi(e, n, a, s) {
      var c = {
        lane: s,
        revertLane: 0,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Is(e)) jm(n, c);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = n.lastRenderedReducer, f !== null)) try {
          var y = n.lastRenderedState, _ = f(y, a);
          if (c.hasEagerState = true, c.eagerState = _, qt(_, y)) return Os(e, n, c, 0), Ke === null && As(), false;
        } catch {
        } finally {
        }
        if (a = lu(e, n, c, s), a !== null) return It(a, e, s), zm(a, n, s), true;
      }
      return false;
    }
    function Fu(e, n, a, s) {
      if (s = {
        lane: 2,
        revertLane: xf(),
        action: s,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Is(e)) {
        if (n) throw Error(i(479));
      } else n = lu(e, a, s, 2), n !== null && It(n, e, 2);
    }
    function Is(e) {
      var n = e.alternate;
      return e === Te || n !== null && n === Te;
    }
    function jm(e, n) {
      Za = qs = true;
      var a = e.pending;
      a === null ? n.next = n : (n.next = a.next, a.next = n), e.pending = n;
    }
    function zm(e, n, a) {
      if ((a & 4194048) !== 0) {
        var s = n.lanes;
        s &= e.pendingLanes, a |= s, n.lanes = a, We(e, a);
      }
    }
    var Qs = {
      readContext: Tt,
      use: Fs,
      useCallback: nt,
      useContext: nt,
      useEffect: nt,
      useImperativeHandle: nt,
      useLayoutEffect: nt,
      useInsertionEffect: nt,
      useMemo: nt,
      useReducer: nt,
      useRef: nt,
      useState: nt,
      useDebugValue: nt,
      useDeferredValue: nt,
      useTransition: nt,
      useSyncExternalStore: nt,
      useId: nt,
      useHostTransitionStatus: nt,
      useFormState: nt,
      useActionState: nt,
      useOptimistic: nt,
      useMemoCache: nt,
      useCacheRefresh: nt
    }, km = {
      readContext: Tt,
      use: Fs,
      useCallback: function(e, n) {
        return Lt().memoizedState = [
          e,
          n === void 0 ? null : n
        ], e;
      },
      useContext: Tt,
      useEffect: ym,
      useImperativeHandle: function(e, n, a) {
        a = a != null ? a.concat([
          e
        ]) : null, Ks(4194308, 4, xm.bind(null, n, e), a);
      },
      useLayoutEffect: function(e, n) {
        return Ks(4194308, 4, e, n);
      },
      useInsertionEffect: function(e, n) {
        Ks(4, 2, e, n);
      },
      useMemo: function(e, n) {
        var a = Lt();
        n = n === void 0 ? null : n;
        var s = e();
        if (aa) {
          pn(true);
          try {
            e();
          } finally {
            pn(false);
          }
        }
        return a.memoizedState = [
          s,
          n
        ], s;
      },
      useReducer: function(e, n, a) {
        var s = Lt();
        if (a !== void 0) {
          var c = a(n);
          if (aa) {
            pn(true);
            try {
              a(n);
            } finally {
              pn(false);
            }
          }
        } else c = n;
        return s.memoizedState = s.baseState = c, e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: c
        }, s.queue = e, e = e.dispatch = yx.bind(null, Te, e), [
          s.memoizedState,
          e
        ];
      },
      useRef: function(e) {
        var n = Lt();
        return e = {
          current: e
        }, n.memoizedState = e;
      },
      useState: function(e) {
        e = Uu(e);
        var n = e.queue, a = Nm.bind(null, Te, n);
        return n.dispatch = a, [
          e.memoizedState,
          a
        ];
      },
      useDebugValue: Pu,
      useDeferredValue: function(e, n) {
        var a = Lt();
        return Hu(a, e, n);
      },
      useTransition: function() {
        var e = Uu(false);
        return e = Cm.bind(null, Te, e.queue, true, false), Lt().memoizedState = e, [
          false,
          e
        ];
      },
      useSyncExternalStore: function(e, n, a) {
        var s = Te, c = Lt();
        if (ke) {
          if (a === void 0) throw Error(i(407));
          a = a();
        } else {
          if (a = n(), Ke === null) throw Error(i(349));
          (Ne & 124) !== 0 || nm(s, n, a);
        }
        c.memoizedState = a;
        var f = {
          value: a,
          getSnapshot: n
        };
        return c.queue = f, ym(am.bind(null, s, f, e), [
          e
        ]), s.flags |= 2048, Wa(9, Ys(), rm.bind(null, s, f, a, n), null), a;
      },
      useId: function() {
        var e = Lt(), n = Ke.identifierPrefix;
        if (ke) {
          var a = In, s = Kn;
          a = (s & ~(1 << 32 - yt(s) - 1)).toString(32) + a, n = "\xAB" + n + "R" + a, a = Gs++, 0 < a && (n += "H" + a.toString(32)), n += "\xBB";
        } else a = dx++, n = "\xAB" + n + "r" + a.toString(32) + "\xBB";
        return e.memoizedState = n;
      },
      useHostTransitionStatus: Gu,
      useFormState: hm,
      useActionState: hm,
      useOptimistic: function(e) {
        var n = Lt();
        n.memoizedState = n.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return n.queue = a, n = Fu.bind(null, Te, true, a), a.dispatch = n, [
          e,
          n
        ];
      },
      useMemoCache: zu,
      useCacheRefresh: function() {
        return Lt().memoizedState = vx.bind(null, Te);
      }
    }, Lm = {
      readContext: Tt,
      use: Fs,
      useCallback: Em,
      useContext: Tt,
      useEffect: bm,
      useImperativeHandle: Sm,
      useInsertionEffect: _m,
      useLayoutEffect: wm,
      useMemo: Rm,
      useReducer: Vs,
      useRef: vm,
      useState: function() {
        return Vs($n);
      },
      useDebugValue: Pu,
      useDeferredValue: function(e, n) {
        var a = it();
        return Tm(a, qe.memoizedState, e, n);
      },
      useTransition: function() {
        var e = Vs($n)[0], n = it().memoizedState;
        return [
          typeof e == "boolean" ? e : mi(e),
          n
        ];
      },
      useSyncExternalStore: tm,
      useId: Om,
      useHostTransitionStatus: Gu,
      useFormState: pm,
      useActionState: pm,
      useOptimistic: function(e, n) {
        var a = it();
        return sm(a, qe, e, n);
      },
      useMemoCache: zu,
      useCacheRefresh: Dm
    }, bx = {
      readContext: Tt,
      use: Fs,
      useCallback: Em,
      useContext: Tt,
      useEffect: bm,
      useImperativeHandle: Sm,
      useInsertionEffect: _m,
      useLayoutEffect: wm,
      useMemo: Rm,
      useReducer: Lu,
      useRef: vm,
      useState: function() {
        return Lu($n);
      },
      useDebugValue: Pu,
      useDeferredValue: function(e, n) {
        var a = it();
        return qe === null ? Hu(a, e, n) : Tm(a, qe.memoizedState, e, n);
      },
      useTransition: function() {
        var e = Lu($n)[0], n = it().memoizedState;
        return [
          typeof e == "boolean" ? e : mi(e),
          n
        ];
      },
      useSyncExternalStore: tm,
      useId: Om,
      useHostTransitionStatus: Gu,
      useFormState: gm,
      useActionState: gm,
      useOptimistic: function(e, n) {
        var a = it();
        return qe !== null ? sm(a, qe, e, n) : (a.baseState = e, [
          e,
          a.queue.dispatch
        ]);
      },
      useMemoCache: zu,
      useCacheRefresh: Dm
    }, eo = null, yi = 0;
    function Xs(e) {
      var n = yi;
      return yi += 1, eo === null && (eo = []), Ip(eo, e, n);
    }
    function bi(e, n) {
      n = n.props.ref, e.ref = n !== void 0 ? n : null;
    }
    function $s(e, n) {
      throw n.$$typeof === m ? Error(i(525)) : (e = Object.prototype.toString.call(n), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)));
    }
    function Um(e) {
      var n = e._init;
      return n(e._payload);
    }
    function Bm(e) {
      function n(z, N) {
        if (e) {
          var P = z.deletions;
          P === null ? (z.deletions = [
            N
          ], z.flags |= 16) : P.push(N);
        }
      }
      function a(z, N) {
        if (!e) return null;
        for (; N !== null; ) n(z, N), N = N.sibling;
        return null;
      }
      function s(z) {
        for (var N = /* @__PURE__ */ new Map(); z !== null; ) z.key !== null ? N.set(z.key, z) : N.set(z.index, z), z = z.sibling;
        return N;
      }
      function c(z, N) {
        return z = Yn(z, N), z.index = 0, z.sibling = null, z;
      }
      function f(z, N, P) {
        return z.index = P, e ? (P = z.alternate, P !== null ? (P = P.index, P < N ? (z.flags |= 67108866, N) : P) : (z.flags |= 67108866, N)) : (z.flags |= 1048576, N);
      }
      function y(z) {
        return e && z.alternate === null && (z.flags |= 67108866), z;
      }
      function _(z, N, P, W) {
        return N === null || N.tag !== 6 ? (N = uu(P, z.mode, W), N.return = z, N) : (N = c(N, P), N.return = z, N);
      }
      function M(z, N, P, W) {
        var he = P.type;
        return he === E ? X(z, N, P.props.children, W, P.key) : N !== null && (N.elementType === he || typeof he == "object" && he !== null && he.$$typeof === D && Um(he) === N.type) ? (N = c(N, P.props), bi(N, P), N.return = z, N) : (N = Ns(P.type, P.key, P.props, null, z.mode, W), bi(N, P), N.return = z, N);
      }
      function G(z, N, P, W) {
        return N === null || N.tag !== 4 || N.stateNode.containerInfo !== P.containerInfo || N.stateNode.implementation !== P.implementation ? (N = fu(P, z.mode, W), N.return = z, N) : (N = c(N, P.children || []), N.return = z, N);
      }
      function X(z, N, P, W, he) {
        return N === null || N.tag !== 7 ? (N = $r(P, z.mode, W, he), N.return = z, N) : (N = c(N, P), N.return = z, N);
      }
      function te(z, N, P) {
        if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return N = uu("" + N, z.mode, P), N.return = z, N;
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case w:
              return P = Ns(N.type, N.key, N.props, null, z.mode, P), bi(P, N), P.return = z, P;
            case S:
              return N = fu(N, z.mode, P), N.return = z, N;
            case D:
              var W = N._init;
              return N = W(N._payload), te(z, N, P);
          }
          if (se(N) || ee(N)) return N = $r(N, z.mode, P, null), N.return = z, N;
          if (typeof N.then == "function") return te(z, Xs(N), P);
          if (N.$$typeof === j) return te(z, Ls(z, N), P);
          $s(z, N);
        }
        return null;
      }
      function F(z, N, P, W) {
        var he = N !== null ? N.key : null;
        if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint") return he !== null ? null : _(z, N, "" + P, W);
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case w:
              return P.key === he ? M(z, N, P, W) : null;
            case S:
              return P.key === he ? G(z, N, P, W) : null;
            case D:
              return he = P._init, P = he(P._payload), F(z, N, P, W);
          }
          if (se(P) || ee(P)) return he !== null ? null : X(z, N, P, W, null);
          if (typeof P.then == "function") return F(z, N, Xs(P), W);
          if (P.$$typeof === j) return F(z, N, Ls(z, P), W);
          $s(z, P);
        }
        return null;
      }
      function Y(z, N, P, W, he) {
        if (typeof W == "string" && W !== "" || typeof W == "number" || typeof W == "bigint") return z = z.get(P) || null, _(N, z, "" + W, he);
        if (typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case w:
              return z = z.get(W.key === null ? P : W.key) || null, M(N, z, W, he);
            case S:
              return z = z.get(W.key === null ? P : W.key) || null, G(N, z, W, he);
            case D:
              var Me = W._init;
              return W = Me(W._payload), Y(z, N, P, W, he);
          }
          if (se(W) || ee(W)) return z = z.get(P) || null, X(N, z, W, he, null);
          if (typeof W.then == "function") return Y(z, N, P, Xs(W), he);
          if (W.$$typeof === j) return Y(z, N, P, Ls(N, W), he);
          $s(N, W);
        }
        return null;
      }
      function _e11(z, N, P, W) {
        for (var he = null, Me = null, ge = N, be = N = 0, vt = null; ge !== null && be < P.length; be++) {
          ge.index > be ? (vt = ge, ge = null) : vt = ge.sibling;
          var ze = F(z, ge, P[be], W);
          if (ze === null) {
            ge === null && (ge = vt);
            break;
          }
          e && ge && ze.alternate === null && n(z, ge), N = f(ze, N, be), Me === null ? he = ze : Me.sibling = ze, Me = ze, ge = vt;
        }
        if (be === P.length) return a(z, ge), ke && Jr(z, be), he;
        if (ge === null) {
          for (; be < P.length; be++) ge = te(z, P[be], W), ge !== null && (N = f(ge, N, be), Me === null ? he = ge : Me.sibling = ge, Me = ge);
          return ke && Jr(z, be), he;
        }
        for (ge = s(ge); be < P.length; be++) vt = Y(ge, z, be, P[be], W), vt !== null && (e && vt.alternate !== null && ge.delete(vt.key === null ? be : vt.key), N = f(vt, N, be), Me === null ? he = vt : Me.sibling = vt, Me = vt);
        return e && ge.forEach(function(zr) {
          return n(z, zr);
        }), ke && Jr(z, be), he;
      }
      function ve(z, N, P, W) {
        if (P == null) throw Error(i(151));
        for (var he = null, Me = null, ge = N, be = N = 0, vt = null, ze = P.next(); ge !== null && !ze.done; be++, ze = P.next()) {
          ge.index > be ? (vt = ge, ge = null) : vt = ge.sibling;
          var zr = F(z, ge, ze.value, W);
          if (zr === null) {
            ge === null && (ge = vt);
            break;
          }
          e && ge && zr.alternate === null && n(z, ge), N = f(zr, N, be), Me === null ? he = zr : Me.sibling = zr, Me = zr, ge = vt;
        }
        if (ze.done) return a(z, ge), ke && Jr(z, be), he;
        if (ge === null) {
          for (; !ze.done; be++, ze = P.next()) ze = te(z, ze.value, W), ze !== null && (N = f(ze, N, be), Me === null ? he = ze : Me.sibling = ze, Me = ze);
          return ke && Jr(z, be), he;
        }
        for (ge = s(ge); !ze.done; be++, ze = P.next()) ze = Y(ge, z, be, ze.value, W), ze !== null && (e && ze.alternate !== null && ge.delete(ze.key === null ? be : ze.key), N = f(ze, N, be), Me === null ? he = ze : Me.sibling = ze, Me = ze);
        return e && ge.forEach(function(_S) {
          return n(z, _S);
        }), ke && Jr(z, be), he;
      }
      function Fe(z, N, P, W) {
        if (typeof P == "object" && P !== null && P.type === E && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case w:
              e: {
                for (var he = P.key; N !== null; ) {
                  if (N.key === he) {
                    if (he = P.type, he === E) {
                      if (N.tag === 7) {
                        a(z, N.sibling), W = c(N, P.props.children), W.return = z, z = W;
                        break e;
                      }
                    } else if (N.elementType === he || typeof he == "object" && he !== null && he.$$typeof === D && Um(he) === N.type) {
                      a(z, N.sibling), W = c(N, P.props), bi(W, P), W.return = z, z = W;
                      break e;
                    }
                    a(z, N);
                    break;
                  } else n(z, N);
                  N = N.sibling;
                }
                P.type === E ? (W = $r(P.props.children, z.mode, W, P.key), W.return = z, z = W) : (W = Ns(P.type, P.key, P.props, null, z.mode, W), bi(W, P), W.return = z, z = W);
              }
              return y(z);
            case S:
              e: {
                for (he = P.key; N !== null; ) {
                  if (N.key === he) if (N.tag === 4 && N.stateNode.containerInfo === P.containerInfo && N.stateNode.implementation === P.implementation) {
                    a(z, N.sibling), W = c(N, P.children || []), W.return = z, z = W;
                    break e;
                  } else {
                    a(z, N);
                    break;
                  }
                  else n(z, N);
                  N = N.sibling;
                }
                W = fu(P, z.mode, W), W.return = z, z = W;
              }
              return y(z);
            case D:
              return he = P._init, P = he(P._payload), Fe(z, N, P, W);
          }
          if (se(P)) return _e11(z, N, P, W);
          if (ee(P)) {
            if (he = ee(P), typeof he != "function") throw Error(i(150));
            return P = he.call(P), ve(z, N, P, W);
          }
          if (typeof P.then == "function") return Fe(z, N, Xs(P), W);
          if (P.$$typeof === j) return Fe(z, N, Ls(z, P), W);
          $s(z, P);
        }
        return typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint" ? (P = "" + P, N !== null && N.tag === 6 ? (a(z, N.sibling), W = c(N, P), W.return = z, z = W) : (a(z, N), W = uu(P, z.mode, W), W.return = z, z = W), y(z)) : a(z, N);
      }
      return function(z, N, P, W) {
        try {
          yi = 0;
          var he = Fe(z, N, P, W);
          return eo = null, he;
        } catch (ge) {
          if (ge === ci || ge === Bs) throw ge;
          var Me = Gt(29, ge, null, z.mode);
          return Me.lanes = W, Me.return = z, Me;
        } finally {
        }
      };
    }
    var to = Bm(true), Pm = Bm(false), on = L(null), Mn = null;
    function br(e) {
      var n = e.alternate;
      Q(ct, ct.current & 1), Q(on, e), Mn === null && (n === null || $a.current !== null || n.memoizedState !== null) && (Mn = e);
    }
    function Hm(e) {
      if (e.tag === 22) {
        if (Q(ct, ct.current), Q(on, e), Mn === null) {
          var n = e.alternate;
          n !== null && n.memoizedState !== null && (Mn = e);
        }
      } else _r4();
    }
    function _r4() {
      Q(ct, ct.current), Q(on, on.current);
    }
    function Zn(e) {
      $(on), Mn === e && (Mn = null), $(ct);
    }
    var ct = L(0);
    function Zs(e) {
      for (var n = e; n !== null; ) {
        if (n.tag === 13) {
          var a = n.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || zf(a))) return n;
        } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
          if ((n.flags & 128) !== 0) return n;
        } else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return null;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      return null;
    }
    function Vu(e, n, a, s) {
      n = e.memoizedState, a = a(s, n), a = a == null ? n : v({}, n, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
    }
    var Yu = {
      enqueueSetState: function(e, n, a) {
        e = e._reactInternals;
        var s = Kt(), c = gr(s);
        c.payload = n, a != null && (c.callback = a), n = vr(e, c, s), n !== null && (It(n, e, s), fi(n, e, s));
      },
      enqueueReplaceState: function(e, n, a) {
        e = e._reactInternals;
        var s = Kt(), c = gr(s);
        c.tag = 1, c.payload = n, a != null && (c.callback = a), n = vr(e, c, s), n !== null && (It(n, e, s), fi(n, e, s));
      },
      enqueueForceUpdate: function(e, n) {
        e = e._reactInternals;
        var a = Kt(), s = gr(a);
        s.tag = 2, n != null && (s.callback = n), n = vr(e, s, a), n !== null && (It(n, e, a), fi(n, e, a));
      }
    };
    function qm(e, n, a, s, c, f, y) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, f, y) : n.prototype && n.prototype.isPureReactComponent ? !ti(a, s) || !ti(c, f) : true;
    }
    function Gm(e, n, a, s) {
      e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, s), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, s), n.state !== e && Yu.enqueueReplaceState(n, n.state, null);
    }
    function oa(e, n) {
      var a = n;
      if ("ref" in n) {
        a = {};
        for (var s in n) s !== "ref" && (a[s] = n[s]);
      }
      if (e = e.defaultProps) {
        a === n && (a = v({}, a));
        for (var c in e) a[c] === void 0 && (a[c] = e[c]);
      }
      return a;
    }
    var Js = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var n = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(n)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    };
    function Fm(e) {
      Js(e);
    }
    function Vm(e) {
      console.error(e);
    }
    function Ym(e) {
      Js(e);
    }
    function Ws(e, n) {
      try {
        var a = e.onUncaughtError;
        a(n.value, {
          componentStack: n.stack
        });
      } catch (s) {
        setTimeout(function() {
          throw s;
        });
      }
    }
    function Km(e, n, a) {
      try {
        var s = e.onCaughtError;
        s(a.value, {
          componentStack: a.stack,
          errorBoundary: n.tag === 1 ? n.stateNode : null
        });
      } catch (c) {
        setTimeout(function() {
          throw c;
        });
      }
    }
    function Ku(e, n, a) {
      return a = gr(a), a.tag = 3, a.payload = {
        element: null
      }, a.callback = function() {
        Ws(e, n);
      }, a;
    }
    function Im(e) {
      return e = gr(e), e.tag = 3, e;
    }
    function Qm(e, n, a, s) {
      var c = a.type.getDerivedStateFromError;
      if (typeof c == "function") {
        var f = s.value;
        e.payload = function() {
          return c(f);
        }, e.callback = function() {
          Km(n, a, s);
        };
      }
      var y = a.stateNode;
      y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
        Km(n, a, s), typeof c != "function" && (Tr === null ? Tr = /* @__PURE__ */ new Set([
          this
        ]) : Tr.add(this));
        var _ = s.stack;
        this.componentDidCatch(s.value, {
          componentStack: _ !== null ? _ : ""
        });
      });
    }
    function _x(e, n, a, s, c) {
      if (a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
        if (n = a.alternate, n !== null && ii(n, a, c, true), a = on.current, a !== null) {
          switch (a.tag) {
            case 13:
              return Mn === null ? vf() : a.alternate === null && Je === 0 && (Je = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, s === wu ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = /* @__PURE__ */ new Set([
                s
              ]) : n.add(s), bf(e, s, c)), false;
            case 22:
              return a.flags |= 65536, s === wu ? a.flags |= 16384 : (n = a.updateQueue, n === null ? (n = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  s
                ])
              }, a.updateQueue = n) : (a = n.retryQueue, a === null ? n.retryQueue = /* @__PURE__ */ new Set([
                s
              ]) : a.add(s)), bf(e, s, c)), false;
          }
          throw Error(i(435, a.tag));
        }
        return bf(e, s, c), vf(), false;
      }
      if (ke) return n = on.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, s !== pu && (e = Error(i(422), {
        cause: s
      }), oi(tn(e, a)))) : (s !== pu && (n = Error(i(423), {
        cause: s
      }), oi(tn(n, a))), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, s = tn(s, a), c = Ku(e.stateNode, s, c), Eu(e, c), Je !== 4 && (Je = 2)), false;
      var f = Error(i(520), {
        cause: s
      });
      if (f = tn(f, a), Ti === null ? Ti = [
        f
      ] : Ti.push(f), Je !== 4 && (Je = 2), n === null) return true;
      s = tn(s, a), a = n;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = c & -c, a.lanes |= e, e = Ku(a.stateNode, s, e), Eu(a, e), false;
          case 1:
            if (n = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Tr === null || !Tr.has(f)))) return a.flags |= 65536, c &= -c, a.lanes |= c, c = Im(c), Qm(c, e, a, s), Eu(a, c), false;
        }
        a = a.return;
      } while (a !== null);
      return false;
    }
    var Xm = Error(i(461)), mt = false;
    function _t8(e, n, a, s) {
      n.child = e === null ? Pm(n, null, a, s) : to(n, e.child, a, s);
    }
    function $m(e, n, a, s, c) {
      a = a.render;
      var f = n.ref;
      if ("ref" in s) {
        var y = {};
        for (var _ in s) _ !== "ref" && (y[_] = s[_]);
      } else y = s;
      return na(n), s = Au(e, n, a, y, f, c), _ = Ou(), e !== null && !mt ? (Du(e, n, c), Jn(e, n, c)) : (ke && _ && du(n), n.flags |= 1, _t8(e, n, s, c), n.child);
    }
    function Zm(e, n, a, s, c) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !cu(f) && f.defaultProps === void 0 && a.compare === null ? (n.tag = 15, n.type = f, Jm(e, n, f, s, c)) : (e = Ns(a.type, null, s, n, n.mode, c), e.ref = n.ref, e.return = n, n.child = e);
      }
      if (f = e.child, !ef(e, c)) {
        var y = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : ti, a(y, s) && e.ref === n.ref) return Jn(e, n, c);
      }
      return n.flags |= 1, e = Yn(f, s), e.ref = n.ref, e.return = n, n.child = e;
    }
    function Jm(e, n, a, s, c) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (ti(f, s) && e.ref === n.ref) if (mt = false, n.pendingProps = s = f, ef(e, c)) (e.flags & 131072) !== 0 && (mt = true);
        else return n.lanes = e.lanes, Jn(e, n, c);
      }
      return Iu(e, n, a, s, c);
    }
    function Wm(e, n, a) {
      var s = n.pendingProps, c = s.children, f = e !== null ? e.memoizedState : null;
      if (s.mode === "hidden") {
        if ((n.flags & 128) !== 0) {
          if (s = f !== null ? f.baseLanes | a : a, e !== null) {
            for (c = n.child = e.child, f = 0; c !== null; ) f = f | c.lanes | c.childLanes, c = c.sibling;
            n.childLanes = f & ~s;
          } else n.childLanes = 0, n.child = null;
          return eg(e, n, s, a);
        }
        if ((a & 536870912) !== 0) n.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, e !== null && Us(n, f !== null ? f.cachePool : null), f !== null ? Jp(n, f) : Tu(), Hm(n);
        else return n.lanes = n.childLanes = 536870912, eg(e, n, f !== null ? f.baseLanes | a : a, a);
      } else f !== null ? (Us(n, f.cachePool), Jp(n, f), _r4(), n.memoizedState = null) : (e !== null && Us(n, null), Tu(), _r4());
      return _t8(e, n, c, a), n.child;
    }
    function eg(e, n, a, s) {
      var c = _u();
      return c = c === null ? null : {
        parent: lt._currentValue,
        pool: c
      }, n.memoizedState = {
        baseLanes: a,
        cachePool: c
      }, e !== null && Us(n, null), Tu(), Hm(n), e !== null && ii(e, n, s, true), null;
    }
    function el(e, n) {
      var a = n.ref;
      if (a === null) e !== null && e.ref !== null && (n.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object") throw Error(i(284));
        (e === null || e.ref !== a) && (n.flags |= 4194816);
      }
    }
    function Iu(e, n, a, s, c) {
      return na(n), a = Au(e, n, a, s, void 0, c), s = Ou(), e !== null && !mt ? (Du(e, n, c), Jn(e, n, c)) : (ke && s && du(n), n.flags |= 1, _t8(e, n, a, c), n.child);
    }
    function tg(e, n, a, s, c, f) {
      return na(n), n.updateQueue = null, a = em(n, s, a, c), Wp(e), s = Ou(), e !== null && !mt ? (Du(e, n, f), Jn(e, n, f)) : (ke && s && du(n), n.flags |= 1, _t8(e, n, a, f), n.child);
    }
    function ng(e, n, a, s, c) {
      if (na(n), n.stateNode === null) {
        var f = Ya, y = a.contextType;
        typeof y == "object" && y !== null && (f = Tt(y)), f = new a(s, f), n.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Yu, n.stateNode = f, f._reactInternals = n, f = n.stateNode, f.props = s, f.state = n.memoizedState, f.refs = {}, xu(n), y = a.contextType, f.context = typeof y == "object" && y !== null ? Tt(y) : Ya, f.state = n.memoizedState, y = a.getDerivedStateFromProps, typeof y == "function" && (Vu(n, a, y, s), f.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (y = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), y !== f.state && Yu.enqueueReplaceState(f, f.state, null), hi(n, s, f, c), di(), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308), s = true;
      } else if (e === null) {
        f = n.stateNode;
        var _ = n.memoizedProps, M = oa(a, _);
        f.props = M;
        var G = f.context, X = a.contextType;
        y = Ya, typeof X == "object" && X !== null && (y = Tt(X));
        var te = a.getDerivedStateFromProps;
        X = typeof te == "function" || typeof f.getSnapshotBeforeUpdate == "function", _ = n.pendingProps !== _, X || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ || G !== y) && Gm(n, f, s, y), mr = false;
        var F = n.memoizedState;
        f.state = F, hi(n, s, f, c), di(), G = n.memoizedState, _ || F !== G || mr ? (typeof te == "function" && (Vu(n, a, te, s), G = n.memoizedState), (M = mr || qm(n, a, M, s, F, G, y)) ? (X || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = s, n.memoizedState = G), f.props = s, f.state = G, f.context = y, s = M) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), s = false);
      } else {
        f = n.stateNode, Su(e, n), y = n.memoizedProps, X = oa(a, y), f.props = X, te = n.pendingProps, F = f.context, G = a.contextType, M = Ya, typeof G == "object" && G !== null && (M = Tt(G)), _ = a.getDerivedStateFromProps, (G = typeof _ == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (y !== te || F !== M) && Gm(n, f, s, M), mr = false, F = n.memoizedState, f.state = F, hi(n, s, f, c), di();
        var Y = n.memoizedState;
        y !== te || F !== Y || mr || e !== null && e.dependencies !== null && ks(e.dependencies) ? (typeof _ == "function" && (Vu(n, a, _, s), Y = n.memoizedState), (X = mr || qm(n, a, X, s, F, Y, M) || e !== null && e.dependencies !== null && ks(e.dependencies)) ? (G || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(s, Y, M), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(s, Y, M)), typeof f.componentDidUpdate == "function" && (n.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), n.memoizedProps = s, n.memoizedState = Y), f.props = s, f.state = Y, f.context = M, s = X) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), s = false);
      }
      return f = s, el(e, n), s = (n.flags & 128) !== 0, f || s ? (f = n.stateNode, a = s && typeof a.getDerivedStateFromError != "function" ? null : f.render(), n.flags |= 1, e !== null && s ? (n.child = to(n, e.child, null, c), n.child = to(n, null, a, c)) : _t8(e, n, a, c), n.memoizedState = f.state, e = n.child) : e = Jn(e, n, c), e;
    }
    function rg(e, n, a, s) {
      return ai(), n.flags |= 256, _t8(e, n, a, s), n.child;
    }
    var Qu = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function Xu(e) {
      return {
        baseLanes: e,
        cachePool: Vp()
      };
    }
    function $u(e, n, a) {
      return e = e !== null ? e.childLanes & ~a : 0, n && (e |= sn), e;
    }
    function ag(e, n, a) {
      var s = n.pendingProps, c = false, f = (n.flags & 128) !== 0, y;
      if ((y = f) || (y = e !== null && e.memoizedState === null ? false : (ct.current & 2) !== 0), y && (c = true, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
        if (ke) {
          if (c ? br(n) : _r4(), ke) {
            var _ = Ze, M;
            if (M = _) {
              e: {
                for (M = _, _ = Cn; M.nodeType !== 8; ) {
                  if (!_) {
                    _ = null;
                    break e;
                  }
                  if (M = yn(M.nextSibling), M === null) {
                    _ = null;
                    break e;
                  }
                }
                _ = M;
              }
              _ !== null ? (n.memoizedState = {
                dehydrated: _,
                treeContext: Zr !== null ? {
                  id: Kn,
                  overflow: In
                } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, M = Gt(18, null, null, 0), M.stateNode = _, M.return = n, n.child = M, Nt = n, Ze = null, M = true) : M = false;
            }
            M || ea(n);
          }
          if (_ = n.memoizedState, _ !== null && (_ = _.dehydrated, _ !== null)) return zf(_) ? n.lanes = 32 : n.lanes = 536870912, null;
          Zn(n);
        }
        return _ = s.children, s = s.fallback, c ? (_r4(), c = n.mode, _ = tl({
          mode: "hidden",
          children: _
        }, c), s = $r(s, c, a, null), _.return = n, s.return = n, _.sibling = s, n.child = _, c = n.child, c.memoizedState = Xu(a), c.childLanes = $u(e, y, a), n.memoizedState = Qu, s) : (br(n), Zu(n, _));
      }
      if (M = e.memoizedState, M !== null && (_ = M.dehydrated, _ !== null)) {
        if (f) n.flags & 256 ? (br(n), n.flags &= -257, n = Ju(e, n, a)) : n.memoizedState !== null ? (_r4(), n.child = e.child, n.flags |= 128, n = null) : (_r4(), c = s.fallback, _ = n.mode, s = tl({
          mode: "visible",
          children: s.children
        }, _), c = $r(c, _, a, null), c.flags |= 2, s.return = n, c.return = n, s.sibling = c, n.child = s, to(n, e.child, null, a), s = n.child, s.memoizedState = Xu(a), s.childLanes = $u(e, y, a), n.memoizedState = Qu, n = c);
        else if (br(n), zf(_)) {
          if (y = _.nextSibling && _.nextSibling.dataset, y) var G = y.dgst;
          y = G, s = Error(i(419)), s.stack = "", s.digest = y, oi({
            value: s,
            source: null,
            stack: null
          }), n = Ju(e, n, a);
        } else if (mt || ii(e, n, a, false), y = (a & e.childLanes) !== 0, mt || y) {
          if (y = Ke, y !== null && (s = a & -a, s = (s & 42) !== 0 ? 1 : at(s), s = (s & (y.suspendedLanes | a)) !== 0 ? 0 : s, s !== 0 && s !== M.retryLane)) throw M.retryLane = s, Va(e, s), It(y, e, s), Xm;
          _.data === "$?" || vf(), n = Ju(e, n, a);
        } else _.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = M.treeContext, Ze = yn(_.nextSibling), Nt = n, ke = true, Wr = null, Cn = false, e !== null && (rn[an++] = Kn, rn[an++] = In, rn[an++] = Zr, Kn = e.id, In = e.overflow, Zr = n), n = Zu(n, s.children), n.flags |= 4096);
        return n;
      }
      return c ? (_r4(), c = s.fallback, _ = n.mode, M = e.child, G = M.sibling, s = Yn(M, {
        mode: "hidden",
        children: s.children
      }), s.subtreeFlags = M.subtreeFlags & 65011712, G !== null ? c = Yn(G, c) : (c = $r(c, _, a, null), c.flags |= 2), c.return = n, s.return = n, s.sibling = c, n.child = s, s = c, c = n.child, _ = e.child.memoizedState, _ === null ? _ = Xu(a) : (M = _.cachePool, M !== null ? (G = lt._currentValue, M = M.parent !== G ? {
        parent: G,
        pool: G
      } : M) : M = Vp(), _ = {
        baseLanes: _.baseLanes | a,
        cachePool: M
      }), c.memoizedState = _, c.childLanes = $u(e, y, a), n.memoizedState = Qu, s) : (br(n), a = e.child, e = a.sibling, a = Yn(a, {
        mode: "visible",
        children: s.children
      }), a.return = n, a.sibling = null, e !== null && (y = n.deletions, y === null ? (n.deletions = [
        e
      ], n.flags |= 16) : y.push(e)), n.child = a, n.memoizedState = null, a);
    }
    function Zu(e, n) {
      return n = tl({
        mode: "visible",
        children: n
      }, e.mode), n.return = e, e.child = n;
    }
    function tl(e, n) {
      return e = Gt(22, e, null, n), e.lanes = 0, e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function Ju(e, n, a) {
      return to(n, e.child, null, a), e = Zu(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
    }
    function og(e, n, a) {
      e.lanes |= n;
      var s = e.alternate;
      s !== null && (s.lanes |= n), gu(e.return, n, a);
    }
    function Wu(e, n, a, s, c) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: s,
        tail: a,
        tailMode: c
      } : (f.isBackwards = n, f.rendering = null, f.renderingStartTime = 0, f.last = s, f.tail = a, f.tailMode = c);
    }
    function ig(e, n, a) {
      var s = n.pendingProps, c = s.revealOrder, f = s.tail;
      if (_t8(e, n, s.children, a), s = ct.current, (s & 2) !== 0) s = s & 1 | 2, n.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && og(e, a, n);
          else if (e.tag === 19) og(e, a, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
        s &= 1;
      }
      switch (Q(ct, s), c) {
        case "forwards":
          for (a = n.child, c = null; a !== null; ) e = a.alternate, e !== null && Zs(e) === null && (c = a), a = a.sibling;
          a = c, a === null ? (c = n.child, n.child = null) : (c = a.sibling, a.sibling = null), Wu(n, false, c, a, f);
          break;
        case "backwards":
          for (a = null, c = n.child, n.child = null; c !== null; ) {
            if (e = c.alternate, e !== null && Zs(e) === null) {
              n.child = c;
              break;
            }
            e = c.sibling, c.sibling = a, a = c, c = e;
          }
          Wu(n, true, a, null, f);
          break;
        case "together":
          Wu(n, false, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
      return n.child;
    }
    function Jn(e, n, a) {
      if (e !== null && (n.dependencies = e.dependencies), Rr |= n.lanes, (a & n.childLanes) === 0) if (e !== null) {
        if (ii(e, n, a, false), (a & n.childLanes) === 0) return null;
      } else return null;
      if (e !== null && n.child !== e.child) throw Error(i(153));
      if (n.child !== null) {
        for (e = n.child, a = Yn(e, e.pendingProps), n.child = a, a.return = n; e.sibling !== null; ) e = e.sibling, a = a.sibling = Yn(e, e.pendingProps), a.return = n;
        a.sibling = null;
      }
      return n.child;
    }
    function ef(e, n) {
      return (e.lanes & n) !== 0 ? true : (e = e.dependencies, !!(e !== null && ks(e)));
    }
    function wx(e, n, a) {
      switch (n.tag) {
        case 3:
          ue(n, n.stateNode.containerInfo), pr(n, lt, e.memoizedState.cache), ai();
          break;
        case 27:
        case 5:
          Re(n);
          break;
        case 4:
          ue(n, n.stateNode.containerInfo);
          break;
        case 10:
          pr(n, n.type, n.memoizedProps.value);
          break;
        case 13:
          var s = n.memoizedState;
          if (s !== null) return s.dehydrated !== null ? (br(n), n.flags |= 128, null) : (a & n.child.childLanes) !== 0 ? ag(e, n, a) : (br(n), e = Jn(e, n, a), e !== null ? e.sibling : null);
          br(n);
          break;
        case 19:
          var c = (e.flags & 128) !== 0;
          if (s = (a & n.childLanes) !== 0, s || (ii(e, n, a, false), s = (a & n.childLanes) !== 0), c) {
            if (s) return ig(e, n, a);
            n.flags |= 128;
          }
          if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Q(ct, ct.current), s) break;
          return null;
        case 22:
        case 23:
          return n.lanes = 0, Wm(e, n, a);
        case 24:
          pr(n, lt, e.memoizedState.cache);
      }
      return Jn(e, n, a);
    }
    function sg(e, n, a) {
      if (e !== null) if (e.memoizedProps !== n.pendingProps) mt = true;
      else {
        if (!ef(e, a) && (n.flags & 128) === 0) return mt = false, wx(e, n, a);
        mt = (e.flags & 131072) !== 0;
      }
      else mt = false, ke && (n.flags & 1048576) !== 0 && Up(n, zs, n.index);
      switch (n.lanes = 0, n.tag) {
        case 16:
          e: {
            e = n.pendingProps;
            var s = n.elementType, c = s._init;
            if (s = c(s._payload), n.type = s, typeof s == "function") cu(s) ? (e = oa(s, e), n.tag = 1, n = ng(null, n, s, e, a)) : (n.tag = 0, n = Iu(null, n, s, e, a));
            else {
              if (s != null) {
                if (c = s.$$typeof, c === H) {
                  n.tag = 11, n = $m(null, n, s, e, a);
                  break e;
                } else if (c === K) {
                  n.tag = 14, n = Zm(null, n, s, e, a);
                  break e;
                }
              }
              throw n = fe(s) || s, Error(i(306, n, ""));
            }
          }
          return n;
        case 0:
          return Iu(e, n, n.type, n.pendingProps, a);
        case 1:
          return s = n.type, c = oa(s, n.pendingProps), ng(e, n, s, c, a);
        case 3:
          e: {
            if (ue(n, n.stateNode.containerInfo), e === null) throw Error(i(387));
            s = n.pendingProps;
            var f = n.memoizedState;
            c = f.element, Su(e, n), hi(n, s, null, a);
            var y = n.memoizedState;
            if (s = y.cache, pr(n, lt, s), s !== f.cache && vu(n, [
              lt
            ], a, true), di(), s = y.element, f.isDehydrated) if (f = {
              element: s,
              isDehydrated: false,
              cache: y.cache
            }, n.updateQueue.baseState = f, n.memoizedState = f, n.flags & 256) {
              n = rg(e, n, s, a);
              break e;
            } else if (s !== c) {
              c = tn(Error(i(424)), n), oi(c), n = rg(e, n, s, a);
              break e;
            } else {
              switch (e = n.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Ze = yn(e.firstChild), Nt = n, ke = true, Wr = null, Cn = true, a = Pm(n, null, s, a), n.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
            else {
              if (ai(), s === c) {
                n = Jn(e, n, a);
                break e;
              }
              _t8(e, n, s, a);
            }
            n = n.child;
          }
          return n;
        case 26:
          return el(e, n), e === null ? (a = fv(n.type, null, n.pendingProps, null)) ? n.memoizedState = a : ke || (a = n.type, e = n.pendingProps, s = ml(ne.current).createElement(a), s[tt] = n, s[Ye] = e, xt(s, a, e), pt(s), n.stateNode = s) : n.memoizedState = fv(n.type, e.memoizedProps, n.pendingProps, e.memoizedState), null;
        case 27:
          return Re(n), e === null && ke && (s = n.stateNode = lv(n.type, n.pendingProps, ne.current), Nt = n, Cn = true, c = Ze, Ar(n.type) ? (kf = c, Ze = yn(s.firstChild)) : Ze = c), _t8(e, n, n.pendingProps.children, a), el(e, n), e === null && (n.flags |= 4194304), n.child;
        case 5:
          return e === null && ke && ((c = s = Ze) && (s = Xx(s, n.type, n.pendingProps, Cn), s !== null ? (n.stateNode = s, Nt = n, Ze = yn(s.firstChild), Cn = false, c = true) : c = false), c || ea(n)), Re(n), c = n.type, f = n.pendingProps, y = e !== null ? e.memoizedProps : null, s = f.children, Df(c, f) ? s = null : y !== null && Df(c, y) && (n.flags |= 32), n.memoizedState !== null && (c = Au(e, n, hx, null, null, a), ki._currentValue = c), el(e, n), _t8(e, n, s, a), n.child;
        case 6:
          return e === null && ke && ((e = a = Ze) && (a = $x(a, n.pendingProps, Cn), a !== null ? (n.stateNode = a, Nt = n, Ze = null, e = true) : e = false), e || ea(n)), null;
        case 13:
          return ag(e, n, a);
        case 4:
          return ue(n, n.stateNode.containerInfo), s = n.pendingProps, e === null ? n.child = to(n, null, s, a) : _t8(e, n, s, a), n.child;
        case 11:
          return $m(e, n, n.type, n.pendingProps, a);
        case 7:
          return _t8(e, n, n.pendingProps, a), n.child;
        case 8:
          return _t8(e, n, n.pendingProps.children, a), n.child;
        case 12:
          return _t8(e, n, n.pendingProps.children, a), n.child;
        case 10:
          return s = n.pendingProps, pr(n, n.type, s.value), _t8(e, n, s.children, a), n.child;
        case 9:
          return c = n.type._context, s = n.pendingProps.children, na(n), c = Tt(c), s = s(c), n.flags |= 1, _t8(e, n, s, a), n.child;
        case 14:
          return Zm(e, n, n.type, n.pendingProps, a);
        case 15:
          return Jm(e, n, n.type, n.pendingProps, a);
        case 19:
          return ig(e, n, a);
        case 31:
          return s = n.pendingProps, a = n.mode, s = {
            mode: s.mode,
            children: s.children
          }, e === null ? (a = tl(s, a), a.ref = n.ref, n.child = a, a.return = n, n = a) : (a = Yn(e.child, s), a.ref = n.ref, n.child = a, a.return = n, n = a), n;
        case 22:
          return Wm(e, n, a);
        case 24:
          return na(n), s = Tt(lt), e === null ? (c = _u(), c === null && (c = Ke, f = yu(), c.pooledCache = f, f.refCount++, f !== null && (c.pooledCacheLanes |= a), c = f), n.memoizedState = {
            parent: s,
            cache: c
          }, xu(n), pr(n, lt, c)) : ((e.lanes & a) !== 0 && (Su(e, n), hi(n, null, null, a), di()), c = e.memoizedState, f = n.memoizedState, c.parent !== s ? (c = {
            parent: s,
            cache: s
          }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), pr(n, lt, s)) : (s = f.cache, pr(n, lt, s), s !== c.cache && vu(n, [
            lt
          ], a, true))), _t8(e, n, n.pendingProps.children, a), n.child;
        case 29:
          throw n.pendingProps;
      }
      throw Error(i(156, n.tag));
    }
    function Wn(e) {
      e.flags |= 4;
    }
    function lg(e, n) {
      if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) e.flags &= -16777217;
      else if (e.flags |= 16777216, !gv(n)) {
        if (n = on.current, n !== null && ((Ne & 4194048) === Ne ? Mn !== null : (Ne & 62914560) !== Ne && (Ne & 536870912) === 0 || n !== Mn)) throw ui = wu, Yp;
        e.flags |= 8192;
      }
    }
    function nl(e, n) {
      n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? gs() : 536870912, e.lanes |= n, oo |= n);
    }
    function _i4(e, n) {
      if (!ke) switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var a = null; n !== null; ) n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var s = null; a !== null; ) a.alternate !== null && (s = a), a = a.sibling;
          s === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
      }
    }
    function Xe(e) {
      var n = e.alternate !== null && e.alternate.child === e.child, a = 0, s = 0;
      if (n) for (var c = e.child; c !== null; ) a |= c.lanes | c.childLanes, s |= c.subtreeFlags & 65011712, s |= c.flags & 65011712, c.return = e, c = c.sibling;
      else for (c = e.child; c !== null; ) a |= c.lanes | c.childLanes, s |= c.subtreeFlags, s |= c.flags, c.return = e, c = c.sibling;
      return e.subtreeFlags |= s, e.childLanes = a, n;
    }
    function xx(e, n, a) {
      var s = n.pendingProps;
      switch (hu(n), n.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Xe(n), null;
        case 1:
          return Xe(n), null;
        case 3:
          return a = n.stateNode, s = null, e !== null && (s = e.memoizedState.cache), n.memoizedState.cache !== s && (n.flags |= 2048), Xn(lt), ye(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (ri(n) ? Wn(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Hp())), Xe(n), null;
        case 26:
          return a = n.memoizedState, e === null ? (Wn(n), a !== null ? (Xe(n), lg(n, a)) : (Xe(n), n.flags &= -16777217)) : a ? a !== e.memoizedState ? (Wn(n), Xe(n), lg(n, a)) : (Xe(n), n.flags &= -16777217) : (e.memoizedProps !== s && Wn(n), Xe(n), n.flags &= -16777217), null;
        case 27:
          Le(n), a = ne.current;
          var c = n.type;
          if (e !== null && n.stateNode != null) e.memoizedProps !== s && Wn(n);
          else {
            if (!s) {
              if (n.stateNode === null) throw Error(i(166));
              return Xe(n), null;
            }
            e = J.current, ri(n) ? Bp(n) : (e = lv(c, s, a), n.stateNode = e, Wn(n));
          }
          return Xe(n), null;
        case 5:
          if (Le(n), a = n.type, e !== null && n.stateNode != null) e.memoizedProps !== s && Wn(n);
          else {
            if (!s) {
              if (n.stateNode === null) throw Error(i(166));
              return Xe(n), null;
            }
            if (e = J.current, ri(n)) Bp(n);
            else {
              switch (c = ml(ne.current), e) {
                case 1:
                  e = c.createElementNS("http://www.w3.org/2000/svg", a);
                  break;
                case 2:
                  e = c.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = c.createElementNS("http://www.w3.org/2000/svg", a);
                      break;
                    case "math":
                      e = c.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                      break;
                    case "script":
                      e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof s.is == "string" ? c.createElement("select", {
                        is: s.is
                      }) : c.createElement("select"), s.multiple ? e.multiple = true : s.size && (e.size = s.size);
                      break;
                    default:
                      e = typeof s.is == "string" ? c.createElement(a, {
                        is: s.is
                      }) : c.createElement(a);
                  }
              }
              e[tt] = n, e[Ye] = s;
              e: for (c = n.child; c !== null; ) {
                if (c.tag === 5 || c.tag === 6) e.appendChild(c.stateNode);
                else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                  c.child.return = c, c = c.child;
                  continue;
                }
                if (c === n) break e;
                for (; c.sibling === null; ) {
                  if (c.return === null || c.return === n) break e;
                  c = c.return;
                }
                c.sibling.return = c.return, c = c.sibling;
              }
              n.stateNode = e;
              e: switch (xt(e, a, s), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!s.autoFocus;
                  break e;
                case "img":
                  e = true;
                  break e;
                default:
                  e = false;
              }
              e && Wn(n);
            }
          }
          return Xe(n), n.flags &= -16777217, null;
        case 6:
          if (e && n.stateNode != null) e.memoizedProps !== s && Wn(n);
          else {
            if (typeof s != "string" && n.stateNode === null) throw Error(i(166));
            if (e = ne.current, ri(n)) {
              if (e = n.stateNode, a = n.memoizedProps, s = null, c = Nt, c !== null) switch (c.tag) {
                case 27:
                case 5:
                  s = c.memoizedProps;
              }
              e[tt] = n, e = !!(e.nodeValue === a || s !== null && s.suppressHydrationWarning === true || tv(e.nodeValue, a)), e || ea(n);
            } else e = ml(e).createTextNode(s), e[tt] = n, n.stateNode = e;
          }
          return Xe(n), null;
        case 13:
          if (s = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (c = ri(n), s !== null && s.dehydrated !== null) {
              if (e === null) {
                if (!c) throw Error(i(318));
                if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(i(317));
                c[tt] = n;
              } else ai(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
              Xe(n), c = false;
            } else c = Hp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = true;
            if (!c) return n.flags & 256 ? (Zn(n), n) : (Zn(n), null);
          }
          if (Zn(n), (n.flags & 128) !== 0) return n.lanes = a, n;
          if (a = s !== null, e = e !== null && e.memoizedState !== null, a) {
            s = n.child, c = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (c = s.alternate.memoizedState.cachePool.pool);
            var f = null;
            s.memoizedState !== null && s.memoizedState.cachePool !== null && (f = s.memoizedState.cachePool.pool), f !== c && (s.flags |= 2048);
          }
          return a !== e && a && (n.child.flags |= 8192), nl(n, n.updateQueue), Xe(n), null;
        case 4:
          return ye(), e === null && Tf(n.stateNode.containerInfo), Xe(n), null;
        case 10:
          return Xn(n.type), Xe(n), null;
        case 19:
          if ($(ct), c = n.memoizedState, c === null) return Xe(n), null;
          if (s = (n.flags & 128) !== 0, f = c.rendering, f === null) if (s) _i4(c, false);
          else {
            if (Je !== 0 || e !== null && (e.flags & 128) !== 0) for (e = n.child; e !== null; ) {
              if (f = Zs(e), f !== null) {
                for (n.flags |= 128, _i4(c, false), e = f.updateQueue, n.updateQueue = e, nl(n, e), n.subtreeFlags = 0, e = a, a = n.child; a !== null; ) Lp(a, e), a = a.sibling;
                return Q(ct, ct.current & 1 | 2), n.child;
              }
              e = e.sibling;
            }
            c.tail !== null && Ie() > ol && (n.flags |= 128, s = true, _i4(c, false), n.lanes = 4194304);
          }
          else {
            if (!s) if (e = Zs(f), e !== null) {
              if (n.flags |= 128, s = true, e = e.updateQueue, n.updateQueue = e, nl(n, e), _i4(c, true), c.tail === null && c.tailMode === "hidden" && !f.alternate && !ke) return Xe(n), null;
            } else 2 * Ie() - c.renderingStartTime > ol && a !== 536870912 && (n.flags |= 128, s = true, _i4(c, false), n.lanes = 4194304);
            c.isBackwards ? (f.sibling = n.child, n.child = f) : (e = c.last, e !== null ? e.sibling = f : n.child = f, c.last = f);
          }
          return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = Ie(), n.sibling = null, e = ct.current, Q(ct, s ? e & 1 | 2 : e & 1), n) : (Xe(n), null);
        case 22:
        case 23:
          return Zn(n), Cu(), s = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== s && (n.flags |= 8192) : s && (n.flags |= 8192), s ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (Xe(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Xe(n), a = n.updateQueue, a !== null && nl(n, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), s = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (s = n.memoizedState.cachePool.pool), s !== a && (n.flags |= 2048), e !== null && $(ra), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), Xn(lt), Xe(n), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, n.tag));
    }
    function Sx(e, n) {
      switch (hu(n), n.tag) {
        case 1:
          return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
        case 3:
          return Xn(lt), ye(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
        case 26:
        case 27:
        case 5:
          return Le(n), null;
        case 13:
          if (Zn(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
            if (n.alternate === null) throw Error(i(340));
            ai();
          }
          return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
        case 19:
          return $(ct), null;
        case 4:
          return ye(), null;
        case 10:
          return Xn(n.type), null;
        case 22:
        case 23:
          return Zn(n), Cu(), e !== null && $(ra), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
        case 24:
          return Xn(lt), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function cg(e, n) {
      switch (hu(n), n.tag) {
        case 3:
          Xn(lt), ye();
          break;
        case 26:
        case 27:
        case 5:
          Le(n);
          break;
        case 4:
          ye();
          break;
        case 13:
          Zn(n);
          break;
        case 19:
          $(ct);
          break;
        case 10:
          Xn(n.type);
          break;
        case 22:
        case 23:
          Zn(n), Cu(), e !== null && $(ra);
          break;
        case 24:
          Xn(lt);
      }
    }
    function wi(e, n) {
      try {
        var a = n.updateQueue, s = a !== null ? a.lastEffect : null;
        if (s !== null) {
          var c = s.next;
          a = c;
          do {
            if ((a.tag & e) === e) {
              s = void 0;
              var f = a.create, y = a.inst;
              s = f(), y.destroy = s;
            }
            a = a.next;
          } while (a !== c);
        }
      } catch (_) {
        Ve(n, n.return, _);
      }
    }
    function wr(e, n, a) {
      try {
        var s = n.updateQueue, c = s !== null ? s.lastEffect : null;
        if (c !== null) {
          var f = c.next;
          s = f;
          do {
            if ((s.tag & e) === e) {
              var y = s.inst, _ = y.destroy;
              if (_ !== void 0) {
                y.destroy = void 0, c = n;
                var M = a, G = _;
                try {
                  G();
                } catch (X) {
                  Ve(c, M, X);
                }
              }
            }
            s = s.next;
          } while (s !== f);
        }
      } catch (X) {
        Ve(n, n.return, X);
      }
    }
    function ug(e) {
      var n = e.updateQueue;
      if (n !== null) {
        var a = e.stateNode;
        try {
          Zp(n, a);
        } catch (s) {
          Ve(e, e.return, s);
        }
      }
    }
    function fg(e, n, a) {
      a.props = oa(e.type, e.memoizedProps), a.state = e.memoizedState;
      try {
        a.componentWillUnmount();
      } catch (s) {
        Ve(e, n, s);
      }
    }
    function xi(e, n) {
      try {
        var a = e.ref;
        if (a !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var s = e.stateNode;
              break;
            case 30:
              s = e.stateNode;
              break;
            default:
              s = e.stateNode;
          }
          typeof a == "function" ? e.refCleanup = a(s) : a.current = s;
        }
      } catch (c) {
        Ve(e, n, c);
      }
    }
    function An(e, n) {
      var a = e.ref, s = e.refCleanup;
      if (a !== null) if (typeof s == "function") try {
        s();
      } catch (c) {
        Ve(e, n, c);
      } finally {
        e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
      }
      else if (typeof a == "function") try {
        a(null);
      } catch (c) {
        Ve(e, n, c);
      }
      else a.current = null;
    }
    function dg(e) {
      var n = e.type, a = e.memoizedProps, s = e.stateNode;
      try {
        e: switch (n) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            a.autoFocus && s.focus();
            break e;
          case "img":
            a.src ? s.src = a.src : a.srcSet && (s.srcset = a.srcSet);
        }
      } catch (c) {
        Ve(e, e.return, c);
      }
    }
    function tf(e, n, a) {
      try {
        var s = e.stateNode;
        Vx(s, e.type, a, n), s[Ye] = n;
      } catch (c) {
        Ve(e, e.return, c);
      }
    }
    function hg(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ar(e.type) || e.tag === 4;
    }
    function nf(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || hg(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Ar(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function rf(e, n, a) {
      var s = e.tag;
      if (s === 5 || s === 6) e = e.stateNode, n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, n.appendChild(e), a = a._reactRootContainer, a != null || n.onclick !== null || (n.onclick = pl));
      else if (s !== 4 && (s === 27 && Ar(e.type) && (a = e.stateNode, n = null), e = e.child, e !== null)) for (rf(e, n, a), e = e.sibling; e !== null; ) rf(e, n, a), e = e.sibling;
    }
    function rl(e, n, a) {
      var s = e.tag;
      if (s === 5 || s === 6) e = e.stateNode, n ? a.insertBefore(e, n) : a.appendChild(e);
      else if (s !== 4 && (s === 27 && Ar(e.type) && (a = e.stateNode), e = e.child, e !== null)) for (rl(e, n, a), e = e.sibling; e !== null; ) rl(e, n, a), e = e.sibling;
    }
    function pg(e) {
      var n = e.stateNode, a = e.memoizedProps;
      try {
        for (var s = e.type, c = n.attributes; c.length; ) n.removeAttributeNode(c[0]);
        xt(n, s, a), n[tt] = e, n[Ye] = a;
      } catch (f) {
        Ve(e, e.return, f);
      }
    }
    var er = false, rt = false, af = false, mg = typeof WeakSet == "function" ? WeakSet : Set, gt = null;
    function Ex(e, n) {
      if (e = e.containerInfo, Af = wl, e = Tp(e), nu(e)) {
        if ("selectionStart" in e) var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
        else e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var s = a.getSelection && a.getSelection();
          if (s && s.rangeCount !== 0) {
            a = s.anchorNode;
            var c = s.anchorOffset, f = s.focusNode;
            s = s.focusOffset;
            try {
              a.nodeType, f.nodeType;
            } catch {
              a = null;
              break e;
            }
            var y = 0, _ = -1, M = -1, G = 0, X = 0, te = e, F = null;
            t: for (; ; ) {
              for (var Y; te !== a || c !== 0 && te.nodeType !== 3 || (_ = y + c), te !== f || s !== 0 && te.nodeType !== 3 || (M = y + s), te.nodeType === 3 && (y += te.nodeValue.length), (Y = te.firstChild) !== null; ) F = te, te = Y;
              for (; ; ) {
                if (te === e) break t;
                if (F === a && ++G === c && (_ = y), F === f && ++X === s && (M = y), (Y = te.nextSibling) !== null) break;
                te = F, F = te.parentNode;
              }
              te = Y;
            }
            a = _ === -1 || M === -1 ? null : {
              start: _,
              end: M
            };
          } else a = null;
        }
        a = a || {
          start: 0,
          end: 0
        };
      } else a = null;
      for (Of = {
        focusedElem: e,
        selectionRange: a
      }, wl = false, gt = n; gt !== null; ) if (n = gt, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null) e.return = n, gt = e;
      else for (; gt !== null; ) {
        switch (n = gt, f = n.alternate, e = n.flags, n.tag) {
          case 0:
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((e & 1024) !== 0 && f !== null) {
              e = void 0, a = n, c = f.memoizedProps, f = f.memoizedState, s = a.stateNode;
              try {
                var _e11 = oa(a.type, c, a.elementType === a.type);
                e = s.getSnapshotBeforeUpdate(_e11, f), s.__reactInternalSnapshotBeforeUpdate = e;
              } catch (ve) {
                Ve(a, a.return, ve);
              }
            }
            break;
          case 3:
            if ((e & 1024) !== 0) {
              if (e = n.stateNode.containerInfo, a = e.nodeType, a === 9) jf(e);
              else if (a === 1) switch (e.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  jf(e);
                  break;
                default:
                  e.textContent = "";
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if ((e & 1024) !== 0) throw Error(i(163));
        }
        if (e = n.sibling, e !== null) {
          e.return = n.return, gt = e;
          break;
        }
        gt = n.return;
      }
    }
    function gg(e, n, a) {
      var s = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          xr(e, a), s & 4 && wi(5, a);
          break;
        case 1:
          if (xr(e, a), s & 4) if (e = a.stateNode, n === null) try {
            e.componentDidMount();
          } catch (y) {
            Ve(a, a.return, y);
          }
          else {
            var c = oa(a.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(c, n, e.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              Ve(a, a.return, y);
            }
          }
          s & 64 && ug(a), s & 512 && xi(a, a.return);
          break;
        case 3:
          if (xr(e, a), s & 64 && (e = a.updateQueue, e !== null)) {
            if (n = null, a.child !== null) switch (a.child.tag) {
              case 27:
              case 5:
                n = a.child.stateNode;
                break;
              case 1:
                n = a.child.stateNode;
            }
            try {
              Zp(e, n);
            } catch (y) {
              Ve(a, a.return, y);
            }
          }
          break;
        case 27:
          n === null && s & 4 && pg(a);
        case 26:
        case 5:
          xr(e, a), n === null && s & 4 && dg(a), s & 512 && xi(a, a.return);
          break;
        case 12:
          xr(e, a);
          break;
        case 13:
          xr(e, a), s & 4 && bg(e, a), s & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = jx.bind(null, a), Zx(e, a))));
          break;
        case 22:
          if (s = a.memoizedState !== null || er, !s) {
            n = n !== null && n.memoizedState !== null || rt, c = er;
            var f = rt;
            er = s, (rt = n) && !f ? Sr(e, a, (a.subtreeFlags & 8772) !== 0) : xr(e, a), er = c, rt = f;
          }
          break;
        case 30:
          break;
        default:
          xr(e, a);
      }
    }
    function vg(e) {
      var n = e.alternate;
      n !== null && (e.alternate = null, vg(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Uc(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    var Qe = null, Ut = false;
    function tr(e, n, a) {
      for (a = a.child; a !== null; ) yg(e, n, a), a = a.sibling;
    }
    function yg(e, n, a) {
      if (Dt && typeof Dt.onCommitFiberUnmount == "function") try {
        Dt.onCommitFiberUnmount(Jt, a);
      } catch {
      }
      switch (a.tag) {
        case 26:
          rt || An(a, n), tr(e, n, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          rt || An(a, n);
          var s = Qe, c = Ut;
          Ar(a.type) && (Qe = a.stateNode, Ut = false), tr(e, n, a), Di(a.stateNode), Qe = s, Ut = c;
          break;
        case 5:
          rt || An(a, n);
        case 6:
          if (s = Qe, c = Ut, Qe = null, tr(e, n, a), Qe = s, Ut = c, Qe !== null) if (Ut) try {
            (Qe.nodeType === 9 ? Qe.body : Qe.nodeName === "HTML" ? Qe.ownerDocument.body : Qe).removeChild(a.stateNode);
          } catch (f) {
            Ve(a, n, f);
          }
          else try {
            Qe.removeChild(a.stateNode);
          } catch (f) {
            Ve(a, n, f);
          }
          break;
        case 18:
          Qe !== null && (Ut ? (e = Qe, iv(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), Pi(e)) : iv(Qe, a.stateNode));
          break;
        case 4:
          s = Qe, c = Ut, Qe = a.stateNode.containerInfo, Ut = true, tr(e, n, a), Qe = s, Ut = c;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          rt || wr(2, a, n), rt || wr(4, a, n), tr(e, n, a);
          break;
        case 1:
          rt || (An(a, n), s = a.stateNode, typeof s.componentWillUnmount == "function" && fg(a, n, s)), tr(e, n, a);
          break;
        case 21:
          tr(e, n, a);
          break;
        case 22:
          rt = (s = rt) || a.memoizedState !== null, tr(e, n, a), rt = s;
          break;
        default:
          tr(e, n, a);
      }
    }
    function bg(e, n) {
      if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
        Pi(e);
      } catch (a) {
        Ve(n, n.return, a);
      }
    }
    function Rx(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var n = e.stateNode;
          return n === null && (n = e.stateNode = new mg()), n;
        case 22:
          return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new mg()), n;
        default:
          throw Error(i(435, e.tag));
      }
    }
    function of(e, n) {
      var a = Rx(e);
      n.forEach(function(s) {
        var c = zx.bind(null, e, s);
        a.has(s) || (a.add(s), s.then(c, c));
      });
    }
    function Ft(e, n) {
      var a = n.deletions;
      if (a !== null) for (var s = 0; s < a.length; s++) {
        var c = a[s], f = e, y = n, _ = y;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 27:
              if (Ar(_.type)) {
                Qe = _.stateNode, Ut = false;
                break e;
              }
              break;
            case 5:
              Qe = _.stateNode, Ut = false;
              break e;
            case 3:
            case 4:
              Qe = _.stateNode.containerInfo, Ut = true;
              break e;
          }
          _ = _.return;
        }
        if (Qe === null) throw Error(i(160));
        yg(f, y, c), Qe = null, Ut = false, f = c.alternate, f !== null && (f.return = null), c.return = null;
      }
      if (n.subtreeFlags & 13878) for (n = n.child; n !== null; ) _g2(n, e), n = n.sibling;
    }
    var vn = null;
    function _g2(e, n) {
      var a = e.alternate, s = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ft(n, e), Vt(e), s & 4 && (wr(3, e, e.return), wi(3, e), wr(5, e, e.return));
          break;
        case 1:
          Ft(n, e), Vt(e), s & 512 && (rt || a === null || An(a, a.return)), s & 64 && er && (e = e.updateQueue, e !== null && (s = e.callbacks, s !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? s : a.concat(s))));
          break;
        case 26:
          var c = vn;
          if (Ft(n, e), Vt(e), s & 512 && (rt || a === null || An(a, a.return)), s & 4) {
            var f = a !== null ? a.memoizedState : null;
            if (s = e.memoizedState, a === null) if (s === null) if (e.stateNode === null) {
              e: {
                s = e.type, a = e.memoizedProps, c = c.ownerDocument || c;
                t: switch (s) {
                  case "title":
                    f = c.getElementsByTagName("title")[0], (!f || f[Ko] || f[tt] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = c.createElement(s), c.head.insertBefore(f, c.querySelector("head > title"))), xt(f, s, a), f[tt] = e, pt(f), s = f;
                    break e;
                  case "link":
                    var y = pv("link", "href", c).get(s + (a.href || ""));
                    if (y) {
                      for (var _ = 0; _ < y.length; _++) if (f = y[_], f.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && f.getAttribute("rel") === (a.rel == null ? null : a.rel) && f.getAttribute("title") === (a.title == null ? null : a.title) && f.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                        y.splice(_, 1);
                        break t;
                      }
                    }
                    f = c.createElement(s), xt(f, s, a), c.head.appendChild(f);
                    break;
                  case "meta":
                    if (y = pv("meta", "content", c).get(s + (a.content || ""))) {
                      for (_ = 0; _ < y.length; _++) if (f = y[_], f.getAttribute("content") === (a.content == null ? null : "" + a.content) && f.getAttribute("name") === (a.name == null ? null : a.name) && f.getAttribute("property") === (a.property == null ? null : a.property) && f.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && f.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                        y.splice(_, 1);
                        break t;
                      }
                    }
                    f = c.createElement(s), xt(f, s, a), c.head.appendChild(f);
                    break;
                  default:
                    throw Error(i(468, s));
                }
                f[tt] = e, pt(f), s = f;
              }
              e.stateNode = s;
            } else mv(c, e.type, e.stateNode);
            else e.stateNode = hv(c, s, e.memoizedProps);
            else f !== s ? (f === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : f.count--, s === null ? mv(c, e.type, e.stateNode) : hv(c, s, e.memoizedProps)) : s === null && e.stateNode !== null && tf(e, e.memoizedProps, a.memoizedProps);
          }
          break;
        case 27:
          Ft(n, e), Vt(e), s & 512 && (rt || a === null || An(a, a.return)), a !== null && s & 4 && tf(e, e.memoizedProps, a.memoizedProps);
          break;
        case 5:
          if (Ft(n, e), Vt(e), s & 512 && (rt || a === null || An(a, a.return)), e.flags & 32) {
            c = e.stateNode;
            try {
              Ua(c, "");
            } catch (Y) {
              Ve(e, e.return, Y);
            }
          }
          s & 4 && e.stateNode != null && (c = e.memoizedProps, tf(e, c, a !== null ? a.memoizedProps : c)), s & 1024 && (af = true);
          break;
        case 6:
          if (Ft(n, e), Vt(e), s & 4) {
            if (e.stateNode === null) throw Error(i(162));
            s = e.memoizedProps, a = e.stateNode;
            try {
              a.nodeValue = s;
            } catch (Y) {
              Ve(e, e.return, Y);
            }
          }
          break;
        case 3:
          if (yl = null, c = vn, vn = gl(n.containerInfo), Ft(n, e), vn = c, Vt(e), s & 4 && a !== null && a.memoizedState.isDehydrated) try {
            Pi(n.containerInfo);
          } catch (Y) {
            Ve(e, e.return, Y);
          }
          af && (af = false, wg(e));
          break;
        case 4:
          s = vn, vn = gl(e.stateNode.containerInfo), Ft(n, e), Vt(e), vn = s;
          break;
        case 12:
          Ft(n, e), Vt(e);
          break;
        case 13:
          Ft(n, e), Vt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (df = Ie()), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, of(e, s)));
          break;
        case 22:
          c = e.memoizedState !== null;
          var M = a !== null && a.memoizedState !== null, G = er, X = rt;
          if (er = G || c, rt = X || M, Ft(n, e), rt = X, er = G, Vt(e), s & 8192) e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (a === null || M || er || rt || ia(e)), a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                M = a = n;
                try {
                  if (f = M.stateNode, c) y = f.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    _ = M.stateNode;
                    var te = M.memoizedProps.style, F = te != null && te.hasOwnProperty("display") ? te.display : null;
                    _.style.display = F == null || typeof F == "boolean" ? "" : ("" + F).trim();
                  }
                } catch (Y) {
                  Ve(M, M.return, Y);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                M = n;
                try {
                  M.stateNode.nodeValue = c ? "" : M.memoizedProps;
                } catch (Y) {
                  Ve(M, M.return, Y);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              a === n && (a = null), n = n.return;
            }
            a === n && (a = null), n.sibling.return = n.return, n = n.sibling;
          }
          s & 4 && (s = e.updateQueue, s !== null && (a = s.retryQueue, a !== null && (s.retryQueue = null, of(e, a))));
          break;
        case 19:
          Ft(n, e), Vt(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, of(e, s)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Ft(n, e), Vt(e);
      }
    }
    function Vt(e) {
      var n = e.flags;
      if (n & 2) {
        try {
          for (var a, s = e.return; s !== null; ) {
            if (hg(s)) {
              a = s;
              break;
            }
            s = s.return;
          }
          if (a == null) throw Error(i(160));
          switch (a.tag) {
            case 27:
              var c = a.stateNode, f = nf(e);
              rl(e, f, c);
              break;
            case 5:
              var y = a.stateNode;
              a.flags & 32 && (Ua(y, ""), a.flags &= -33);
              var _ = nf(e);
              rl(e, _, y);
              break;
            case 3:
            case 4:
              var M = a.stateNode.containerInfo, G = nf(e);
              rf(e, G, M);
              break;
            default:
              throw Error(i(161));
          }
        } catch (X) {
          Ve(e, e.return, X);
        }
        e.flags &= -3;
      }
      n & 4096 && (e.flags &= -4097);
    }
    function wg(e) {
      if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
        var n = e;
        wg(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
    }
    function xr(e, n) {
      if (n.subtreeFlags & 8772) for (n = n.child; n !== null; ) gg(e, n.alternate, n), n = n.sibling;
    }
    function ia(e) {
      for (e = e.child; e !== null; ) {
        var n = e;
        switch (n.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            wr(4, n, n.return), ia(n);
            break;
          case 1:
            An(n, n.return);
            var a = n.stateNode;
            typeof a.componentWillUnmount == "function" && fg(n, n.return, a), ia(n);
            break;
          case 27:
            Di(n.stateNode);
          case 26:
          case 5:
            An(n, n.return), ia(n);
            break;
          case 22:
            n.memoizedState === null && ia(n);
            break;
          case 30:
            ia(n);
            break;
          default:
            ia(n);
        }
        e = e.sibling;
      }
    }
    function Sr(e, n, a) {
      for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
        var s = n.alternate, c = e, f = n, y = f.flags;
        switch (f.tag) {
          case 0:
          case 11:
          case 15:
            Sr(c, f, a), wi(4, f);
            break;
          case 1:
            if (Sr(c, f, a), s = f, c = s.stateNode, typeof c.componentDidMount == "function") try {
              c.componentDidMount();
            } catch (G) {
              Ve(s, s.return, G);
            }
            if (s = f, c = s.updateQueue, c !== null) {
              var _ = s.stateNode;
              try {
                var M = c.shared.hiddenCallbacks;
                if (M !== null) for (c.shared.hiddenCallbacks = null, c = 0; c < M.length; c++) $p(M[c], _);
              } catch (G) {
                Ve(s, s.return, G);
              }
            }
            a && y & 64 && ug(f), xi(f, f.return);
            break;
          case 27:
            pg(f);
          case 26:
          case 5:
            Sr(c, f, a), a && s === null && y & 4 && dg(f), xi(f, f.return);
            break;
          case 12:
            Sr(c, f, a);
            break;
          case 13:
            Sr(c, f, a), a && y & 4 && bg(c, f);
            break;
          case 22:
            f.memoizedState === null && Sr(c, f, a), xi(f, f.return);
            break;
          case 30:
            break;
          default:
            Sr(c, f, a);
        }
        n = n.sibling;
      }
    }
    function sf(e, n) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && si(a));
    }
    function lf(e, n) {
      e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && si(e));
    }
    function On(e, n, a, s) {
      if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) xg(e, n, a, s), n = n.sibling;
    }
    function xg(e, n, a, s) {
      var c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          On(e, n, a, s), c & 2048 && wi(9, n);
          break;
        case 1:
          On(e, n, a, s);
          break;
        case 3:
          On(e, n, a, s), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && si(e)));
          break;
        case 12:
          if (c & 2048) {
            On(e, n, a, s), e = n.stateNode;
            try {
              var f = n.memoizedProps, y = f.id, _ = f.onPostCommit;
              typeof _ == "function" && _(y, n.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
            } catch (M) {
              Ve(n, n.return, M);
            }
          } else On(e, n, a, s);
          break;
        case 13:
          On(e, n, a, s);
          break;
        case 23:
          break;
        case 22:
          f = n.stateNode, y = n.alternate, n.memoizedState !== null ? f._visibility & 2 ? On(e, n, a, s) : Si(e, n) : f._visibility & 2 ? On(e, n, a, s) : (f._visibility |= 2, no(e, n, a, s, (n.subtreeFlags & 10256) !== 0)), c & 2048 && sf(y, n);
          break;
        case 24:
          On(e, n, a, s), c & 2048 && lf(n.alternate, n);
          break;
        default:
          On(e, n, a, s);
      }
    }
    function no(e, n, a, s, c) {
      for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
        var f = e, y = n, _ = a, M = s, G = y.flags;
        switch (y.tag) {
          case 0:
          case 11:
          case 15:
            no(f, y, _, M, c), wi(8, y);
            break;
          case 23:
            break;
          case 22:
            var X = y.stateNode;
            y.memoizedState !== null ? X._visibility & 2 ? no(f, y, _, M, c) : Si(f, y) : (X._visibility |= 2, no(f, y, _, M, c)), c && G & 2048 && sf(y.alternate, y);
            break;
          case 24:
            no(f, y, _, M, c), c && G & 2048 && lf(y.alternate, y);
            break;
          default:
            no(f, y, _, M, c);
        }
        n = n.sibling;
      }
    }
    function Si(e, n) {
      if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) {
        var a = e, s = n, c = s.flags;
        switch (s.tag) {
          case 22:
            Si(a, s), c & 2048 && sf(s.alternate, s);
            break;
          case 24:
            Si(a, s), c & 2048 && lf(s.alternate, s);
            break;
          default:
            Si(a, s);
        }
        n = n.sibling;
      }
    }
    var Ei = 8192;
    function ro(e) {
      if (e.subtreeFlags & Ei) for (e = e.child; e !== null; ) Sg(e), e = e.sibling;
    }
    function Sg(e) {
      switch (e.tag) {
        case 26:
          ro(e), e.flags & Ei && e.memoizedState !== null && uS(vn, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          ro(e);
          break;
        case 3:
        case 4:
          var n = vn;
          vn = gl(e.stateNode.containerInfo), ro(e), vn = n;
          break;
        case 22:
          e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Ei, Ei = 16777216, ro(e), Ei = n) : ro(e));
          break;
        default:
          ro(e);
      }
    }
    function Eg(e) {
      var n = e.alternate;
      if (n !== null && (e = n.child, e !== null)) {
        n.child = null;
        do
          n = e.sibling, e.sibling = null, e = n;
        while (e !== null);
      }
    }
    function Ri(e) {
      var n = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (n !== null) for (var a = 0; a < n.length; a++) {
          var s = n[a];
          gt = s, Tg(s, e);
        }
        Eg(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Rg(e), e = e.sibling;
    }
    function Rg(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ri(e), e.flags & 2048 && wr(9, e, e.return);
          break;
        case 3:
          Ri(e);
          break;
        case 12:
          Ri(e);
          break;
        case 22:
          var n = e.stateNode;
          e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, al(e)) : Ri(e);
          break;
        default:
          Ri(e);
      }
    }
    function al(e) {
      var n = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (n !== null) for (var a = 0; a < n.length; a++) {
          var s = n[a];
          gt = s, Tg(s, e);
        }
        Eg(e);
      }
      for (e = e.child; e !== null; ) {
        switch (n = e, n.tag) {
          case 0:
          case 11:
          case 15:
            wr(8, n, n.return), al(n);
            break;
          case 22:
            a = n.stateNode, a._visibility & 2 && (a._visibility &= -3, al(n));
            break;
          default:
            al(n);
        }
        e = e.sibling;
      }
    }
    function Tg(e, n) {
      for (; gt !== null; ) {
        var a = gt;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            wr(8, a, n);
            break;
          case 23:
          case 22:
            if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
              var s = a.memoizedState.cachePool.pool;
              s != null && s.refCount++;
            }
            break;
          case 24:
            si(a.memoizedState.cache);
        }
        if (s = a.child, s !== null) s.return = a, gt = s;
        else e: for (a = e; gt !== null; ) {
          s = gt;
          var c = s.sibling, f = s.return;
          if (vg(s), s === a) {
            gt = null;
            break e;
          }
          if (c !== null) {
            c.return = f, gt = c;
            break e;
          }
          gt = f;
        }
      }
    }
    var Tx = {
      getCacheForType: function(e) {
        var n = Tt(lt), a = n.data.get(e);
        return a === void 0 && (a = e(), n.data.set(e, a)), a;
      }
    }, Cx = typeof WeakMap == "function" ? WeakMap : Map, Pe = 0, Ke = null, Oe = null, Ne = 0, He = 0, Yt = null, Er = false, ao = false, cf = false, nr = 0, Je = 0, Rr = 0, sa = 0, uf = 0, sn = 0, oo = 0, Ti = null, Bt = null, ff = false, df = 0, ol = 1 / 0, il = null, Tr = null, wt = 0, Cr = null, io = null, so = 0, hf = 0, pf = null, Cg = null, Ci = 0, mf = null;
    function Kt() {
      if ((Pe & 2) !== 0 && Ne !== 0) return Ne & -Ne;
      if (A.T !== null) {
        var e = Qa;
        return e !== 0 ? e : xf();
      }
      return Yr();
    }
    function Mg() {
      sn === 0 && (sn = (Ne & 536870912) === 0 || ke ? mn() : 536870912);
      var e = on.current;
      return e !== null && (e.flags |= 32), sn;
    }
    function It(e, n, a) {
      (e === Ke && (He === 2 || He === 9) || e.cancelPendingCommit !== null) && (lo(e, 0), Mr(e, Ne, sn, false)), dr(e, a), ((Pe & 2) === 0 || e !== Ke) && (e === Ke && ((Pe & 2) === 0 && (sa |= a), Je === 4 && Mr(e, Ne, sn, false)), Dn(e));
    }
    function Ag(e, n, a) {
      if ((Pe & 6) !== 0) throw Error(i(327));
      var s = !a && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Vr(e, n), c = s ? Ox(e, n) : yf(e, n, true), f = s;
      do {
        if (c === 0) {
          ao && !s && Mr(e, n, 0, false);
          break;
        } else {
          if (a = e.current.alternate, f && !Mx(a)) {
            c = yf(e, n, false), f = false;
            continue;
          }
          if (c === 2) {
            if (f = n, e.errorRecoveryDisabledLanes & f) var y = 0;
            else y = e.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
            if (y !== 0) {
              n = y;
              e: {
                var _ = e;
                c = Ti;
                var M = _.current.memoizedState.isDehydrated;
                if (M && (lo(_, y).flags |= 256), y = yf(_, y, false), y !== 2) {
                  if (cf && !M) {
                    _.errorRecoveryDisabledLanes |= f, sa |= f, c = 4;
                    break e;
                  }
                  f = Bt, Bt = c, f !== null && (Bt === null ? Bt = f : Bt.push.apply(Bt, f));
                }
                c = y;
              }
              if (f = false, c !== 2) continue;
            }
          }
          if (c === 1) {
            lo(e, 0), Mr(e, n, 0, true);
            break;
          }
          e: {
            switch (s = e, f = c, f) {
              case 0:
              case 1:
                throw Error(i(345));
              case 4:
                if ((n & 4194048) !== n) break;
              case 6:
                Mr(s, n, sn, !Er);
                break e;
              case 2:
                Bt = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i(329));
            }
            if ((n & 62914560) === n && (c = df + 300 - Ie(), 10 < c)) {
              if (Mr(s, n, sn, !Er), Fr(s, 0, true) !== 0) break e;
              s.timeoutHandle = av(Og.bind(null, s, a, Bt, il, ff, n, sn, sa, oo, Er, f, 2, -0, 0), c);
              break e;
            }
            Og(s, a, Bt, il, ff, n, sn, sa, oo, Er, f, 0, -0, 0);
          }
        }
        break;
      } while (true);
      Dn(e);
    }
    function Og(e, n, a, s, c, f, y, _, M, G, X, te, F, Y) {
      if (e.timeoutHandle = -1, te = n.subtreeFlags, (te & 8192 || (te & 16785408) === 16785408) && (zi = {
        stylesheets: null,
        count: 0,
        unsuspend: cS
      }, Sg(n), te = fS(), te !== null)) {
        e.cancelPendingCommit = te(Ug.bind(null, e, n, f, a, s, c, y, _, M, X, 1, F, Y)), Mr(e, f, y, !G);
        return;
      }
      Ug(e, n, f, a, s, c, y, _, M);
    }
    function Mx(e) {
      for (var n = e; ; ) {
        var a = n.tag;
        if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue, a !== null && (a = a.stores, a !== null))) for (var s = 0; s < a.length; s++) {
          var c = a[s], f = c.getSnapshot;
          c = c.value;
          try {
            if (!qt(f(), c)) return false;
          } catch {
            return false;
          }
        }
        if (a = n.child, n.subtreeFlags & 16384 && a !== null) a.return = n, n = a;
        else {
          if (n === e) break;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === e) return true;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
      }
      return true;
    }
    function Mr(e, n, a, s) {
      n &= ~uf, n &= ~sa, e.suspendedLanes |= n, e.pingedLanes &= ~n, s && (e.warmLanes |= n), s = e.expirationTimes;
      for (var c = n; 0 < c; ) {
        var f = 31 - yt(c), y = 1 << f;
        s[f] = -1, c &= ~y;
      }
      a !== 0 && Se(e, a, n);
    }
    function sl() {
      return (Pe & 6) === 0 ? (Mi(0), false) : true;
    }
    function gf() {
      if (Oe !== null) {
        if (He === 0) var e = Oe.return;
        else e = Oe, Qn = ta = null, Nu(e), eo = null, yi = 0, e = Oe;
        for (; e !== null; ) cg(e.alternate, e), e = e.return;
        Oe = null;
      }
    }
    function lo(e, n) {
      var a = e.timeoutHandle;
      a !== -1 && (e.timeoutHandle = -1, Kx(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), gf(), Ke = e, Oe = a = Yn(e.current, null), Ne = n, He = 0, Yt = null, Er = false, ao = Vr(e, n), cf = false, oo = sn = uf = sa = Rr = Je = 0, Bt = Ti = null, ff = false, (n & 8) !== 0 && (n |= n & 32);
      var s = e.entangledLanes;
      if (s !== 0) for (e = e.entanglements, s &= n; 0 < s; ) {
        var c = 31 - yt(s), f = 1 << c;
        n |= e[c], s &= ~f;
      }
      return nr = n, As(), a;
    }
    function Dg(e, n) {
      Te = null, A.H = Qs, n === ci || n === Bs ? (n = Qp(), He = 3) : n === Yp ? (n = Qp(), He = 4) : He = n === Xm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Yt = n, Oe === null && (Je = 1, Ws(e, tn(n, e.current)));
    }
    function Ng() {
      var e = A.H;
      return A.H = Qs, e === null ? Qs : e;
    }
    function jg() {
      var e = A.A;
      return A.A = Tx, e;
    }
    function vf() {
      Je = 4, Er || (Ne & 4194048) !== Ne && on.current !== null || (ao = true), (Rr & 134217727) === 0 && (sa & 134217727) === 0 || Ke === null || Mr(Ke, Ne, sn, false);
    }
    function yf(e, n, a) {
      var s = Pe;
      Pe |= 2;
      var c = Ng(), f = jg();
      (Ke !== e || Ne !== n) && (il = null, lo(e, n)), n = false;
      var y = Je;
      e: do
        try {
          if (He !== 0 && Oe !== null) {
            var _ = Oe, M = Yt;
            switch (He) {
              case 8:
                gf(), y = 6;
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                on.current === null && (n = true);
                var G = He;
                if (He = 0, Yt = null, co(e, _, M, G), a && ao) {
                  y = 0;
                  break e;
                }
                break;
              default:
                G = He, He = 0, Yt = null, co(e, _, M, G);
            }
          }
          Ax(), y = Je;
          break;
        } catch (X) {
          Dg(e, X);
        }
      while (true);
      return n && e.shellSuspendCounter++, Qn = ta = null, Pe = s, A.H = c, A.A = f, Oe === null && (Ke = null, Ne = 0, As()), y;
    }
    function Ax() {
      for (; Oe !== null; ) zg(Oe);
    }
    function Ox(e, n) {
      var a = Pe;
      Pe |= 2;
      var s = Ng(), c = jg();
      Ke !== e || Ne !== n ? (il = null, ol = Ie() + 500, lo(e, n)) : ao = Vr(e, n);
      e: do
        try {
          if (He !== 0 && Oe !== null) {
            n = Oe;
            var f = Yt;
            t: switch (He) {
              case 1:
                He = 0, Yt = null, co(e, n, f, 1);
                break;
              case 2:
              case 9:
                if (Kp(f)) {
                  He = 0, Yt = null, kg(n);
                  break;
                }
                n = function() {
                  He !== 2 && He !== 9 || Ke !== e || (He = 7), Dn(e);
                }, f.then(n, n);
                break e;
              case 3:
                He = 7;
                break e;
              case 4:
                He = 5;
                break e;
              case 7:
                Kp(f) ? (He = 0, Yt = null, kg(n)) : (He = 0, Yt = null, co(e, n, f, 7));
                break;
              case 5:
                var y = null;
                switch (Oe.tag) {
                  case 26:
                    y = Oe.memoizedState;
                  case 5:
                  case 27:
                    var _ = Oe;
                    if (!y || gv(y)) {
                      He = 0, Yt = null;
                      var M = _.sibling;
                      if (M !== null) Oe = M;
                      else {
                        var G = _.return;
                        G !== null ? (Oe = G, ll(G)) : Oe = null;
                      }
                      break t;
                    }
                }
                He = 0, Yt = null, co(e, n, f, 5);
                break;
              case 6:
                He = 0, Yt = null, co(e, n, f, 6);
                break;
              case 8:
                gf(), Je = 6;
                break e;
              default:
                throw Error(i(462));
            }
          }
          Dx();
          break;
        } catch (X) {
          Dg(e, X);
        }
      while (true);
      return Qn = ta = null, A.H = s, A.A = c, Pe = a, Oe !== null ? 0 : (Ke = null, Ne = 0, As(), Je);
    }
    function Dx() {
      for (; Oe !== null && !Rn(); ) zg(Oe);
    }
    function zg(e) {
      var n = sg(e.alternate, e, nr);
      e.memoizedProps = e.pendingProps, n === null ? ll(e) : Oe = n;
    }
    function kg(e) {
      var n = e, a = n.alternate;
      switch (n.tag) {
        case 15:
        case 0:
          n = tg(a, n, n.pendingProps, n.type, void 0, Ne);
          break;
        case 11:
          n = tg(a, n, n.pendingProps, n.type.render, n.ref, Ne);
          break;
        case 5:
          Nu(n);
        default:
          cg(a, n), n = Oe = Lp(n, nr), n = sg(a, n, nr);
      }
      e.memoizedProps = e.pendingProps, n === null ? ll(e) : Oe = n;
    }
    function co(e, n, a, s) {
      Qn = ta = null, Nu(n), eo = null, yi = 0;
      var c = n.return;
      try {
        if (_x(e, c, n, a, Ne)) {
          Je = 1, Ws(e, tn(a, e.current)), Oe = null;
          return;
        }
      } catch (f) {
        if (c !== null) throw Oe = c, f;
        Je = 1, Ws(e, tn(a, e.current)), Oe = null;
        return;
      }
      n.flags & 32768 ? (ke || s === 1 ? e = true : ao || (Ne & 536870912) !== 0 ? e = false : (Er = e = true, (s === 2 || s === 9 || s === 3 || s === 6) && (s = on.current, s !== null && s.tag === 13 && (s.flags |= 16384))), Lg(n, e)) : ll(n);
    }
    function ll(e) {
      var n = e;
      do {
        if ((n.flags & 32768) !== 0) {
          Lg(n, Er);
          return;
        }
        e = n.return;
        var a = xx(n.alternate, n, nr);
        if (a !== null) {
          Oe = a;
          return;
        }
        if (n = n.sibling, n !== null) {
          Oe = n;
          return;
        }
        Oe = n = e;
      } while (n !== null);
      Je === 0 && (Je = 5);
    }
    function Lg(e, n) {
      do {
        var a = Sx(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, Oe = a;
          return;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !n && (e = e.sibling, e !== null)) {
          Oe = e;
          return;
        }
        Oe = e = a;
      } while (e !== null);
      Je = 6, Oe = null;
    }
    function Ug(e, n, a, s, c, f, y, _, M) {
      e.cancelPendingCommit = null;
      do
        cl();
      while (wt !== 0);
      if ((Pe & 6) !== 0) throw Error(i(327));
      if (n !== null) {
        if (n === e.current) throw Error(i(177));
        if (f = n.lanes | n.childLanes, f |= su, vs(e, a, f, y, _, M), e === Ke && (Oe = Ke = null, Ne = 0), io = n, Cr = e, so = a, hf = f, pf = c, Cg = s, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, kx(je, function() {
          return Gg(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), s = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || s) {
          s = A.T, A.T = null, c = I.p, I.p = 2, y = Pe, Pe |= 4;
          try {
            Ex(e, n, a);
          } finally {
            Pe = y, I.p = c, A.T = s;
          }
        }
        wt = 1, Bg(), Pg(), Hg();
      }
    }
    function Bg() {
      if (wt === 1) {
        wt = 0;
        var e = Cr, n = io, a = (n.flags & 13878) !== 0;
        if ((n.subtreeFlags & 13878) !== 0 || a) {
          a = A.T, A.T = null;
          var s = I.p;
          I.p = 2;
          var c = Pe;
          Pe |= 4;
          try {
            _g2(n, e);
            var f = Of, y = Tp(e.containerInfo), _ = f.focusedElem, M = f.selectionRange;
            if (y !== _ && _ && _.ownerDocument && Rp(_.ownerDocument.documentElement, _)) {
              if (M !== null && nu(_)) {
                var G = M.start, X = M.end;
                if (X === void 0 && (X = G), "selectionStart" in _) _.selectionStart = G, _.selectionEnd = Math.min(X, _.value.length);
                else {
                  var te = _.ownerDocument || document, F = te && te.defaultView || window;
                  if (F.getSelection) {
                    var Y = F.getSelection(), _e11 = _.textContent.length, ve = Math.min(M.start, _e11), Fe = M.end === void 0 ? ve : Math.min(M.end, _e11);
                    !Y.extend && ve > Fe && (y = Fe, Fe = ve, ve = y);
                    var z = Ep(_, ve), N = Ep(_, Fe);
                    if (z && N && (Y.rangeCount !== 1 || Y.anchorNode !== z.node || Y.anchorOffset !== z.offset || Y.focusNode !== N.node || Y.focusOffset !== N.offset)) {
                      var P = te.createRange();
                      P.setStart(z.node, z.offset), Y.removeAllRanges(), ve > Fe ? (Y.addRange(P), Y.extend(N.node, N.offset)) : (P.setEnd(N.node, N.offset), Y.addRange(P));
                    }
                  }
                }
              }
              for (te = [], Y = _; Y = Y.parentNode; ) Y.nodeType === 1 && te.push({
                element: Y,
                left: Y.scrollLeft,
                top: Y.scrollTop
              });
              for (typeof _.focus == "function" && _.focus(), _ = 0; _ < te.length; _++) {
                var W = te[_];
                W.element.scrollLeft = W.left, W.element.scrollTop = W.top;
              }
            }
            wl = !!Af, Of = Af = null;
          } finally {
            Pe = c, I.p = s, A.T = a;
          }
        }
        e.current = n, wt = 2;
      }
    }
    function Pg() {
      if (wt === 2) {
        wt = 0;
        var e = Cr, n = io, a = (n.flags & 8772) !== 0;
        if ((n.subtreeFlags & 8772) !== 0 || a) {
          a = A.T, A.T = null;
          var s = I.p;
          I.p = 2;
          var c = Pe;
          Pe |= 4;
          try {
            gg(e, n.alternate, n);
          } finally {
            Pe = c, I.p = s, A.T = a;
          }
        }
        wt = 3;
      }
    }
    function Hg() {
      if (wt === 4 || wt === 3) {
        wt = 0, At();
        var e = Cr, n = io, a = so, s = Cg;
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? wt = 5 : (wt = 0, io = Cr = null, qg(e, e.pendingLanes));
        var c = e.pendingLanes;
        if (c === 0 && (Tr = null), bt(a), n = n.stateNode, Dt && typeof Dt.onCommitFiberRoot == "function") try {
          Dt.onCommitFiberRoot(Jt, n, void 0, (n.current.flags & 128) === 128);
        } catch {
        }
        if (s !== null) {
          n = A.T, c = I.p, I.p = 2, A.T = null;
          try {
            for (var f = e.onRecoverableError, y = 0; y < s.length; y++) {
              var _ = s[y];
              f(_.value, {
                componentStack: _.stack
              });
            }
          } finally {
            A.T = n, I.p = c;
          }
        }
        (so & 3) !== 0 && cl(), Dn(e), c = e.pendingLanes, (a & 4194090) !== 0 && (c & 42) !== 0 ? e === mf ? Ci++ : (Ci = 0, mf = e) : Ci = 0, Mi(0);
      }
    }
    function qg(e, n) {
      (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, si(n)));
    }
    function cl(e) {
      return Bg(), Pg(), Hg(), Gg();
    }
    function Gg() {
      if (wt !== 5) return false;
      var e = Cr, n = hf;
      hf = 0;
      var a = bt(so), s = A.T, c = I.p;
      try {
        I.p = 32 > a ? 32 : a, A.T = null, a = pf, pf = null;
        var f = Cr, y = so;
        if (wt = 0, io = Cr = null, so = 0, (Pe & 6) !== 0) throw Error(i(331));
        var _ = Pe;
        if (Pe |= 4, Rg(f.current), xg(f, f.current, y, a), Pe = _, Mi(0, false), Dt && typeof Dt.onPostCommitFiberRoot == "function") try {
          Dt.onPostCommitFiberRoot(Jt, f);
        } catch {
        }
        return true;
      } finally {
        I.p = c, A.T = s, qg(e, n);
      }
    }
    function Fg(e, n, a) {
      n = tn(a, n), n = Ku(e.stateNode, n, 2), e = vr(e, n, 2), e !== null && (dr(e, 2), Dn(e));
    }
    function Ve(e, n, a) {
      if (e.tag === 3) Fg(e, e, a);
      else for (; n !== null; ) {
        if (n.tag === 3) {
          Fg(n, e, a);
          break;
        } else if (n.tag === 1) {
          var s = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Tr === null || !Tr.has(s))) {
            e = tn(a, e), a = Im(2), s = vr(n, a, 2), s !== null && (Qm(a, s, n, e), dr(s, 2), Dn(s));
            break;
          }
        }
        n = n.return;
      }
    }
    function bf(e, n, a) {
      var s = e.pingCache;
      if (s === null) {
        s = e.pingCache = new Cx();
        var c = /* @__PURE__ */ new Set();
        s.set(n, c);
      } else c = s.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), s.set(n, c));
      c.has(a) || (cf = true, c.add(a), e = Nx.bind(null, e, n, a), n.then(e, e));
    }
    function Nx(e, n, a) {
      var s = e.pingCache;
      s !== null && s.delete(n), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Ke === e && (Ne & a) === a && (Je === 4 || Je === 3 && (Ne & 62914560) === Ne && 300 > Ie() - df ? (Pe & 2) === 0 && lo(e, 0) : uf |= a, oo === Ne && (oo = 0)), Dn(e);
    }
    function Vg(e, n) {
      n === 0 && (n = gs()), e = Va(e, n), e !== null && (dr(e, n), Dn(e));
    }
    function jx(e) {
      var n = e.memoizedState, a = 0;
      n !== null && (a = n.retryLane), Vg(e, a);
    }
    function zx(e, n) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var s = e.stateNode, c = e.memoizedState;
          c !== null && (a = c.retryLane);
          break;
        case 19:
          s = e.stateNode;
          break;
        case 22:
          s = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      s !== null && s.delete(n), Vg(e, a);
    }
    function kx(e, n) {
      return Rt(e, n);
    }
    var ul = null, uo = null, _f2 = false, fl = false, wf = false, la = 0;
    function Dn(e) {
      e !== uo && e.next === null && (uo === null ? ul = uo = e : uo = uo.next = e), fl = true, _f2 || (_f2 = true, Ux());
    }
    function Mi(e, n) {
      if (!wf && fl) {
        wf = true;
        do
          for (var a = false, s = ul; s !== null; ) {
            if (e !== 0) {
              var c = s.pendingLanes;
              if (c === 0) var f = 0;
              else {
                var y = s.suspendedLanes, _ = s.pingedLanes;
                f = (1 << 31 - yt(42 | e) + 1) - 1, f &= c & ~(y & ~_), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = true, Qg(s, f));
            } else f = Ne, f = Fr(s, s === Ke ? f : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== -1), (f & 3) === 0 || Vr(s, f) || (a = true, Qg(s, f));
            s = s.next;
          }
        while (a);
        wf = false;
      }
    }
    function Lx() {
      Yg();
    }
    function Yg() {
      fl = _f2 = false;
      var e = 0;
      la !== 0 && (Yx() && (e = la), la = 0);
      for (var n = Ie(), a = null, s = ul; s !== null; ) {
        var c = s.next, f = Kg(s, n);
        f === 0 ? (s.next = null, a === null ? ul = c : a.next = c, c === null && (uo = a)) : (a = s, (e !== 0 || (f & 3) !== 0) && (fl = true)), s = c;
      }
      Mi(e);
    }
    function Kg(e, n) {
      for (var a = e.suspendedLanes, s = e.pingedLanes, c = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var y = 31 - yt(f), _ = 1 << y, M = c[y];
        M === -1 ? ((_ & a) === 0 || (_ & s) !== 0) && (c[y] = Vo(_, n)) : M <= n && (e.expiredLanes |= _), f &= ~_;
      }
      if (n = Ke, a = Ne, a = Fr(e, e === n ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), s = e.callbackNode, a === 0 || e === n && (He === 2 || He === 9) || e.cancelPendingCommit !== null) return s !== null && s !== null && Mt(s), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || Vr(e, a)) {
        if (n = a & -a, n === e.callbackPriority) return n;
        switch (s !== null && Mt(s), bt(a)) {
          case 2:
          case 8:
            a = Gr;
            break;
          case 32:
            a = je;
            break;
          case 268435456:
            a = Ht;
            break;
          default:
            a = je;
        }
        return s = Ig.bind(null, e), a = Rt(a, s), e.callbackPriority = n, e.callbackNode = a, n;
      }
      return s !== null && s !== null && Mt(s), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Ig(e, n) {
      if (wt !== 0 && wt !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (cl() && e.callbackNode !== a) return null;
      var s = Ne;
      return s = Fr(e, e === Ke ? s : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), s === 0 ? null : (Ag(e, s, n), Kg(e, Ie()), e.callbackNode != null && e.callbackNode === a ? Ig.bind(null, e) : null);
    }
    function Qg(e, n) {
      if (cl()) return null;
      Ag(e, n, true);
    }
    function Ux() {
      Ix(function() {
        (Pe & 6) !== 0 ? Rt(Ot, Lx) : Yg();
      });
    }
    function xf() {
      return la === 0 && (la = mn()), la;
    }
    function Xg(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : xs("" + e);
    }
    function $g(e, n) {
      var a = n.ownerDocument.createElement("input");
      return a.name = n.name, a.value = n.value, e.id && a.setAttribute("form", e.id), n.parentNode.insertBefore(a, n), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function Bx(e, n, a, s, c) {
      if (n === "submit" && a && a.stateNode === c) {
        var f = Xg((c[Ye] || null).action), y = s.submitter;
        y && (n = (n = y[Ye] || null) ? Xg(n.formAction) : y.getAttribute("formAction"), n !== null && (f = n, y = null));
        var _ = new Ts("action", "action", null, s, c);
        e.push({
          event: _,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (s.defaultPrevented) {
                  if (la !== 0) {
                    var M = y ? $g(c, y) : new FormData(c);
                    qu(a, {
                      pending: true,
                      data: M,
                      method: c.method,
                      action: f
                    }, null, M);
                  }
                } else typeof f == "function" && (_.preventDefault(), M = y ? $g(c, y) : new FormData(c), qu(a, {
                  pending: true,
                  data: M,
                  method: c.method,
                  action: f
                }, f, M));
              },
              currentTarget: c
            }
          ]
        });
      }
    }
    for (var Sf = 0; Sf < iu.length; Sf++) {
      var Ef = iu[Sf], Px = Ef.toLowerCase(), Hx = Ef[0].toUpperCase() + Ef.slice(1);
      gn(Px, "on" + Hx);
    }
    gn(Ap, "onAnimationEnd"), gn(Op, "onAnimationIteration"), gn(Dp, "onAnimationStart"), gn("dblclick", "onDoubleClick"), gn("focusin", "onFocus"), gn("focusout", "onBlur"), gn(rx, "onTransitionRun"), gn(ax, "onTransitionStart"), gn(ox, "onTransitionCancel"), gn(Np, "onTransitionEnd"), za("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), za("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), za("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), za("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), Kr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Kr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Kr("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Kr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Kr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Kr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ai = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qx = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ai));
    function Zg(e, n) {
      n = (n & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var s = e[a], c = s.event;
        s = s.listeners;
        e: {
          var f = void 0;
          if (n) for (var y = s.length - 1; 0 <= y; y--) {
            var _ = s[y], M = _.instance, G = _.currentTarget;
            if (_ = _.listener, M !== f && c.isPropagationStopped()) break e;
            f = _, c.currentTarget = G;
            try {
              f(c);
            } catch (X) {
              Js(X);
            }
            c.currentTarget = null, f = M;
          }
          else for (y = 0; y < s.length; y++) {
            if (_ = s[y], M = _.instance, G = _.currentTarget, _ = _.listener, M !== f && c.isPropagationStopped()) break e;
            f = _, c.currentTarget = G;
            try {
              f(c);
            } catch (X) {
              Js(X);
            }
            c.currentTarget = null, f = M;
          }
        }
      }
    }
    function De(e, n) {
      var a = n[Oa];
      a === void 0 && (a = n[Oa] = /* @__PURE__ */ new Set());
      var s = e + "__bubble";
      a.has(s) || (Jg(n, e, 2, false), a.add(s));
    }
    function Rf(e, n, a) {
      var s = 0;
      n && (s |= 4), Jg(a, e, s, n);
    }
    var dl = "_reactListening" + Math.random().toString(36).slice(2);
    function Tf(e) {
      if (!e[dl]) {
        e[dl] = true, Yh.forEach(function(a) {
          a !== "selectionchange" && (qx.has(a) || Rf(a, false, e), Rf(a, true, e));
        });
        var n = e.nodeType === 9 ? e : e.ownerDocument;
        n === null || n[dl] || (n[dl] = true, Rf("selectionchange", false, n));
      }
    }
    function Jg(e, n, a, s) {
      switch (xv(n)) {
        case 2:
          var c = pS;
          break;
        case 8:
          c = mS;
          break;
        default:
          c = Hf;
      }
      a = c.bind(null, n, a, e), c = void 0, !Ic || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = true), s ? c !== void 0 ? e.addEventListener(n, a, {
        capture: true,
        passive: c
      }) : e.addEventListener(n, a, true) : c !== void 0 ? e.addEventListener(n, a, {
        passive: c
      }) : e.addEventListener(n, a, false);
    }
    function Cf(e, n, a, s, c) {
      var f = s;
      if ((n & 1) === 0 && (n & 2) === 0 && s !== null) e: for (; ; ) {
        if (s === null) return;
        var y = s.tag;
        if (y === 3 || y === 4) {
          var _ = s.stateNode.containerInfo;
          if (_ === c) break;
          if (y === 4) for (y = s.return; y !== null; ) {
            var M = y.tag;
            if ((M === 3 || M === 4) && y.stateNode.containerInfo === c) return;
            y = y.return;
          }
          for (; _ !== null; ) {
            if (y = Da(_), y === null) return;
            if (M = y.tag, M === 5 || M === 6 || M === 26 || M === 27) {
              s = f = y;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        s = s.return;
      }
      op(function() {
        var G = f, X = Yc(a), te = [];
        e: {
          var F = jp.get(e);
          if (F !== void 0) {
            var Y = Ts, _e11 = e;
            switch (e) {
              case "keypress":
                if (Es(a) === 0) break e;
              case "keydown":
              case "keyup":
                Y = kw;
                break;
              case "focusin":
                _e11 = "focus", Y = Zc;
                break;
              case "focusout":
                _e11 = "blur", Y = Zc;
                break;
              case "beforeblur":
              case "afterblur":
                Y = Zc;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                Y = lp;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                Y = Sw;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                Y = Bw;
                break;
              case Ap:
              case Op:
              case Dp:
                Y = Tw;
                break;
              case Np:
                Y = Hw;
                break;
              case "scroll":
              case "scrollend":
                Y = ww;
                break;
              case "wheel":
                Y = Gw;
                break;
              case "copy":
              case "cut":
              case "paste":
                Y = Mw;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                Y = up;
                break;
              case "toggle":
              case "beforetoggle":
                Y = Vw;
            }
            var ve = (n & 4) !== 0, Fe = !ve && (e === "scroll" || e === "scrollend"), z = ve ? F !== null ? F + "Capture" : null : F;
            ve = [];
            for (var N = G, P; N !== null; ) {
              var W = N;
              if (P = W.stateNode, W = W.tag, W !== 5 && W !== 26 && W !== 27 || P === null || z === null || (W = Qo(N, z), W != null && ve.push(Oi(N, W, P))), Fe) break;
              N = N.return;
            }
            0 < ve.length && (F = new Y(F, _e11, null, a, X), te.push({
              event: F,
              listeners: ve
            }));
          }
        }
        if ((n & 7) === 0) {
          e: {
            if (F = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", F && a !== Vc && (_e11 = a.relatedTarget || a.fromElement) && (Da(_e11) || _e11[ht])) break e;
            if ((Y || F) && (F = X.window === X ? X : (F = X.ownerDocument) ? F.defaultView || F.parentWindow : window, Y ? (_e11 = a.relatedTarget || a.toElement, Y = G, _e11 = _e11 ? Da(_e11) : null, _e11 !== null && (Fe = u(_e11), ve = _e11.tag, _e11 !== Fe || ve !== 5 && ve !== 27 && ve !== 6) && (_e11 = null)) : (Y = null, _e11 = G), Y !== _e11)) {
              if (ve = lp, W = "onMouseLeave", z = "onMouseEnter", N = "mouse", (e === "pointerout" || e === "pointerover") && (ve = up, W = "onPointerLeave", z = "onPointerEnter", N = "pointer"), Fe = Y == null ? F : Io(Y), P = _e11 == null ? F : Io(_e11), F = new ve(W, N + "leave", Y, a, X), F.target = Fe, F.relatedTarget = P, W = null, Da(X) === G && (ve = new ve(z, N + "enter", _e11, a, X), ve.target = P, ve.relatedTarget = Fe, W = ve), Fe = W, Y && _e11) t: {
                for (ve = Y, z = _e11, N = 0, P = ve; P; P = fo(P)) N++;
                for (P = 0, W = z; W; W = fo(W)) P++;
                for (; 0 < N - P; ) ve = fo(ve), N--;
                for (; 0 < P - N; ) z = fo(z), P--;
                for (; N--; ) {
                  if (ve === z || z !== null && ve === z.alternate) break t;
                  ve = fo(ve), z = fo(z);
                }
                ve = null;
              }
              else ve = null;
              Y !== null && Wg(te, F, Y, ve, false), _e11 !== null && Fe !== null && Wg(te, Fe, _e11, ve, true);
            }
          }
          e: {
            if (F = G ? Io(G) : window, Y = F.nodeName && F.nodeName.toLowerCase(), Y === "select" || Y === "input" && F.type === "file") var he = yp;
            else if (gp(F)) if (bp) he = ex;
            else {
              he = Jw;
              var Me = Zw;
            }
            else Y = F.nodeName, !Y || Y.toLowerCase() !== "input" || F.type !== "checkbox" && F.type !== "radio" ? G && Fc(G.elementType) && (he = yp) : he = Ww;
            if (he && (he = he(e, G))) {
              vp(te, he, a, X);
              break e;
            }
            Me && Me(e, F, G), e === "focusout" && G && F.type === "number" && G.memoizedProps.value != null && Gc(F, "number", F.value);
          }
          switch (Me = G ? Io(G) : window, e) {
            case "focusin":
              (gp(Me) || Me.contentEditable === "true") && (qa = Me, ru = G, ni = null);
              break;
            case "focusout":
              ni = ru = qa = null;
              break;
            case "mousedown":
              au = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              au = false, Cp(te, a, X);
              break;
            case "selectionchange":
              if (nx) break;
            case "keydown":
            case "keyup":
              Cp(te, a, X);
          }
          var ge;
          if (Wc) e: {
            switch (e) {
              case "compositionstart":
                var be = "onCompositionStart";
                break e;
              case "compositionend":
                be = "onCompositionEnd";
                break e;
              case "compositionupdate":
                be = "onCompositionUpdate";
                break e;
            }
            be = void 0;
          }
          else Ha ? pp(e, a) && (be = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (be = "onCompositionStart");
          be && (fp && a.locale !== "ko" && (Ha || be !== "onCompositionStart" ? be === "onCompositionEnd" && Ha && (ge = ip()) : (hr = X, Qc = "value" in hr ? hr.value : hr.textContent, Ha = true)), Me = hl(G, be), 0 < Me.length && (be = new cp(be, e, null, a, X), te.push({
            event: be,
            listeners: Me
          }), ge ? be.data = ge : (ge = mp(a), ge !== null && (be.data = ge)))), (ge = Kw ? Iw(e, a) : Qw(e, a)) && (be = hl(G, "onBeforeInput"), 0 < be.length && (Me = new cp("onBeforeInput", "beforeinput", null, a, X), te.push({
            event: Me,
            listeners: be
          }), Me.data = ge)), Bx(te, e, G, a, X);
        }
        Zg(te, n);
      });
    }
    function Oi(e, n, a) {
      return {
        instance: e,
        listener: n,
        currentTarget: a
      };
    }
    function hl(e, n) {
      for (var a = n + "Capture", s = []; e !== null; ) {
        var c = e, f = c.stateNode;
        if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || f === null || (c = Qo(e, a), c != null && s.unshift(Oi(e, c, f)), c = Qo(e, n), c != null && s.push(Oi(e, c, f))), e.tag === 3) return s;
        e = e.return;
      }
      return [];
    }
    function fo(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Wg(e, n, a, s, c) {
      for (var f = n._reactName, y = []; a !== null && a !== s; ) {
        var _ = a, M = _.alternate, G = _.stateNode;
        if (_ = _.tag, M !== null && M === s) break;
        _ !== 5 && _ !== 26 && _ !== 27 || G === null || (M = G, c ? (G = Qo(a, f), G != null && y.unshift(Oi(a, G, M))) : c || (G = Qo(a, f), G != null && y.push(Oi(a, G, M)))), a = a.return;
      }
      y.length !== 0 && e.push({
        event: n,
        listeners: y
      });
    }
    var Gx = /\r\n?/g, Fx = /\u0000|\uFFFD/g;
    function ev(e) {
      return (typeof e == "string" ? e : "" + e).replace(Gx, `
`).replace(Fx, "");
    }
    function tv(e, n) {
      return n = ev(n), ev(e) === n;
    }
    function pl() {
    }
    function Ge(e, n, a, s, c, f) {
      switch (a) {
        case "children":
          typeof s == "string" ? n === "body" || n === "textarea" && s === "" || Ua(e, s) : (typeof s == "number" || typeof s == "bigint") && n !== "body" && Ua(e, "" + s);
          break;
        case "className":
          bs(e, "class", s);
          break;
        case "tabIndex":
          bs(e, "tabindex", s);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          bs(e, a, s);
          break;
        case "style":
          rp(e, s, f);
          break;
        case "data":
          if (n !== "object") {
            bs(e, "data", s);
            break;
          }
        case "src":
        case "href":
          if (s === "" && (n !== "a" || a !== "href")) {
            e.removeAttribute(a);
            break;
          }
          if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
            e.removeAttribute(a);
            break;
          }
          s = xs("" + s), e.setAttribute(a, s);
          break;
        case "action":
        case "formAction":
          if (typeof s == "function") {
            e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof f == "function" && (a === "formAction" ? (n !== "input" && Ge(e, n, "name", c.name, c, null), Ge(e, n, "formEncType", c.formEncType, c, null), Ge(e, n, "formMethod", c.formMethod, c, null), Ge(e, n, "formTarget", c.formTarget, c, null)) : (Ge(e, n, "encType", c.encType, c, null), Ge(e, n, "method", c.method, c, null), Ge(e, n, "target", c.target, c, null)));
          if (s == null || typeof s == "symbol" || typeof s == "boolean") {
            e.removeAttribute(a);
            break;
          }
          s = xs("" + s), e.setAttribute(a, s);
          break;
        case "onClick":
          s != null && (e.onclick = pl);
          break;
        case "onScroll":
          s != null && De("scroll", e);
          break;
        case "onScrollEnd":
          s != null && De("scrollend", e);
          break;
        case "dangerouslySetInnerHTML":
          if (s != null) {
            if (typeof s != "object" || !("__html" in s)) throw Error(i(61));
            if (a = s.__html, a != null) {
              if (c.children != null) throw Error(i(60));
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = s && typeof s != "function" && typeof s != "symbol";
          break;
        case "muted":
          e.muted = s && typeof s != "function" && typeof s != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          a = xs("" + s), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "" + s) : e.removeAttribute(a);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          s && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          s === true ? e.setAttribute(a, "") : s !== false && s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, s) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s ? e.setAttribute(a, s) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s) ? e.removeAttribute(a) : e.setAttribute(a, s);
          break;
        case "popover":
          De("beforetoggle", e), De("toggle", e), ys(e, "popover", s);
          break;
        case "xlinkActuate":
          Fn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
          break;
        case "xlinkArcrole":
          Fn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
          break;
        case "xlinkRole":
          Fn(e, "http://www.w3.org/1999/xlink", "xlink:role", s);
          break;
        case "xlinkShow":
          Fn(e, "http://www.w3.org/1999/xlink", "xlink:show", s);
          break;
        case "xlinkTitle":
          Fn(e, "http://www.w3.org/1999/xlink", "xlink:title", s);
          break;
        case "xlinkType":
          Fn(e, "http://www.w3.org/1999/xlink", "xlink:type", s);
          break;
        case "xmlBase":
          Fn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
          break;
        case "xmlLang":
          Fn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
          break;
        case "xmlSpace":
          Fn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
          break;
        case "is":
          ys(e, "is", s);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = bw.get(a) || a, ys(e, a, s));
      }
    }
    function Mf(e, n, a, s, c, f) {
      switch (a) {
        case "style":
          rp(e, s, f);
          break;
        case "dangerouslySetInnerHTML":
          if (s != null) {
            if (typeof s != "object" || !("__html" in s)) throw Error(i(61));
            if (a = s.__html, a != null) {
              if (c.children != null) throw Error(i(60));
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof s == "string" ? Ua(e, s) : (typeof s == "number" || typeof s == "bigint") && Ua(e, "" + s);
          break;
        case "onScroll":
          s != null && De("scroll", e);
          break;
        case "onScrollEnd":
          s != null && De("scrollend", e);
          break;
        case "onClick":
          s != null && (e.onclick = pl);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!Kh.hasOwnProperty(a)) e: {
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), n = a.slice(2, c ? a.length - 7 : void 0), f = e[Ye] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(n, f, c), typeof s == "function")) {
              typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(n, s, c);
              break e;
            }
            a in e ? e[a] = s : s === true ? e.setAttribute(a, "") : ys(e, a, s);
          }
      }
    }
    function xt(e, n, a) {
      switch (n) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          De("error", e), De("load", e);
          var s = false, c = false, f;
          for (f in a) if (a.hasOwnProperty(f)) {
            var y = a[f];
            if (y != null) switch (f) {
              case "src":
                s = true;
                break;
              case "srcSet":
                c = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, n));
              default:
                Ge(e, n, f, y, a, null);
            }
          }
          c && Ge(e, n, "srcSet", a.srcSet, a, null), s && Ge(e, n, "src", a.src, a, null);
          return;
        case "input":
          De("invalid", e);
          var _ = f = y = c = null, M = null, G = null;
          for (s in a) if (a.hasOwnProperty(s)) {
            var X = a[s];
            if (X != null) switch (s) {
              case "name":
                c = X;
                break;
              case "type":
                y = X;
                break;
              case "checked":
                M = X;
                break;
              case "defaultChecked":
                G = X;
                break;
              case "value":
                f = X;
                break;
              case "defaultValue":
                _ = X;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (X != null) throw Error(i(137, n));
                break;
              default:
                Ge(e, n, s, X, a, null);
            }
          }
          Wh(e, f, _, M, G, y, c, false), _s3(e);
          return;
        case "select":
          De("invalid", e), s = y = f = null;
          for (c in a) if (a.hasOwnProperty(c) && (_ = a[c], _ != null)) switch (c) {
            case "value":
              f = _;
              break;
            case "defaultValue":
              y = _;
              break;
            case "multiple":
              s = _;
            default:
              Ge(e, n, c, _, a, null);
          }
          n = f, a = y, e.multiple = !!s, n != null ? La(e, !!s, n, false) : a != null && La(e, !!s, a, true);
          return;
        case "textarea":
          De("invalid", e), f = c = s = null;
          for (y in a) if (a.hasOwnProperty(y) && (_ = a[y], _ != null)) switch (y) {
            case "value":
              s = _;
              break;
            case "defaultValue":
              c = _;
              break;
            case "children":
              f = _;
              break;
            case "dangerouslySetInnerHTML":
              if (_ != null) throw Error(i(91));
              break;
            default:
              Ge(e, n, y, _, a, null);
          }
          tp(e, s, c, f), _s3(e);
          return;
        case "option":
          for (M in a) if (a.hasOwnProperty(M) && (s = a[M], s != null)) switch (M) {
            case "selected":
              e.selected = s && typeof s != "function" && typeof s != "symbol";
              break;
            default:
              Ge(e, n, M, s, a, null);
          }
          return;
        case "dialog":
          De("beforetoggle", e), De("toggle", e), De("cancel", e), De("close", e);
          break;
        case "iframe":
        case "object":
          De("load", e);
          break;
        case "video":
        case "audio":
          for (s = 0; s < Ai.length; s++) De(Ai[s], e);
          break;
        case "image":
          De("error", e), De("load", e);
          break;
        case "details":
          De("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          De("error", e), De("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (G in a) if (a.hasOwnProperty(G) && (s = a[G], s != null)) switch (G) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(i(137, n));
            default:
              Ge(e, n, G, s, a, null);
          }
          return;
        default:
          if (Fc(n)) {
            for (X in a) a.hasOwnProperty(X) && (s = a[X], s !== void 0 && Mf(e, n, X, s, a, void 0));
            return;
          }
      }
      for (_ in a) a.hasOwnProperty(_) && (s = a[_], s != null && Ge(e, n, _, s, a, null));
    }
    function Vx(e, n, a, s) {
      switch (n) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var c = null, f = null, y = null, _ = null, M = null, G = null, X = null;
          for (Y in a) {
            var te = a[Y];
            if (a.hasOwnProperty(Y) && te != null) switch (Y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = te;
              default:
                s.hasOwnProperty(Y) || Ge(e, n, Y, null, s, te);
            }
          }
          for (var F in s) {
            var Y = s[F];
            if (te = a[F], s.hasOwnProperty(F) && (Y != null || te != null)) switch (F) {
              case "type":
                f = Y;
                break;
              case "name":
                c = Y;
                break;
              case "checked":
                G = Y;
                break;
              case "defaultChecked":
                X = Y;
                break;
              case "value":
                y = Y;
                break;
              case "defaultValue":
                _ = Y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null) throw Error(i(137, n));
                break;
              default:
                Y !== te && Ge(e, n, F, Y, s, te);
            }
          }
          qc(e, y, _, M, G, X, f, c);
          return;
        case "select":
          Y = y = _ = F = null;
          for (f in a) if (M = a[f], a.hasOwnProperty(f) && M != null) switch (f) {
            case "value":
              break;
            case "multiple":
              Y = M;
            default:
              s.hasOwnProperty(f) || Ge(e, n, f, null, s, M);
          }
          for (c in s) if (f = s[c], M = a[c], s.hasOwnProperty(c) && (f != null || M != null)) switch (c) {
            case "value":
              F = f;
              break;
            case "defaultValue":
              _ = f;
              break;
            case "multiple":
              y = f;
            default:
              f !== M && Ge(e, n, c, f, s, M);
          }
          n = _, a = y, s = Y, F != null ? La(e, !!a, F, false) : !!s != !!a && (n != null ? La(e, !!a, n, true) : La(e, !!a, a ? [] : "", false));
          return;
        case "textarea":
          Y = F = null;
          for (_ in a) if (c = a[_], a.hasOwnProperty(_) && c != null && !s.hasOwnProperty(_)) switch (_) {
            case "value":
              break;
            case "children":
              break;
            default:
              Ge(e, n, _, null, s, c);
          }
          for (y in s) if (c = s[y], f = a[y], s.hasOwnProperty(y) && (c != null || f != null)) switch (y) {
            case "value":
              F = c;
              break;
            case "defaultValue":
              Y = c;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (c != null) throw Error(i(91));
              break;
            default:
              c !== f && Ge(e, n, y, c, s, f);
          }
          ep(e, F, Y);
          return;
        case "option":
          for (var _e11 in a) if (F = a[_e11], a.hasOwnProperty(_e11) && F != null && !s.hasOwnProperty(_e11)) switch (_e11) {
            case "selected":
              e.selected = false;
              break;
            default:
              Ge(e, n, _e11, null, s, F);
          }
          for (M in s) if (F = s[M], Y = a[M], s.hasOwnProperty(M) && F !== Y && (F != null || Y != null)) switch (M) {
            case "selected":
              e.selected = F && typeof F != "function" && typeof F != "symbol";
              break;
            default:
              Ge(e, n, M, F, s, Y);
          }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var ve in a) F = a[ve], a.hasOwnProperty(ve) && F != null && !s.hasOwnProperty(ve) && Ge(e, n, ve, null, s, F);
          for (G in s) if (F = s[G], Y = a[G], s.hasOwnProperty(G) && F !== Y && (F != null || Y != null)) switch (G) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (F != null) throw Error(i(137, n));
              break;
            default:
              Ge(e, n, G, F, s, Y);
          }
          return;
        default:
          if (Fc(n)) {
            for (var Fe in a) F = a[Fe], a.hasOwnProperty(Fe) && F !== void 0 && !s.hasOwnProperty(Fe) && Mf(e, n, Fe, void 0, s, F);
            for (X in s) F = s[X], Y = a[X], !s.hasOwnProperty(X) || F === Y || F === void 0 && Y === void 0 || Mf(e, n, X, F, s, Y);
            return;
          }
      }
      for (var z in a) F = a[z], a.hasOwnProperty(z) && F != null && !s.hasOwnProperty(z) && Ge(e, n, z, null, s, F);
      for (te in s) F = s[te], Y = a[te], !s.hasOwnProperty(te) || F === Y || F == null && Y == null || Ge(e, n, te, F, s, Y);
    }
    var Af = null, Of = null;
    function ml(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function nv(e) {
      switch (e) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function rv(e, n) {
      if (e === 0) switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return e === 1 && n === "foreignObject" ? 0 : e;
    }
    function Df(e, n) {
      return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
    }
    var Nf = null;
    function Yx() {
      var e = window.event;
      return e && e.type === "popstate" ? e === Nf ? false : (Nf = e, true) : (Nf = null, false);
    }
    var av = typeof setTimeout == "function" ? setTimeout : void 0, Kx = typeof clearTimeout == "function" ? clearTimeout : void 0, ov = typeof Promise == "function" ? Promise : void 0, Ix = typeof queueMicrotask == "function" ? queueMicrotask : typeof ov < "u" ? function(e) {
      return ov.resolve(null).then(e).catch(Qx);
    } : av;
    function Qx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Ar(e) {
      return e === "head";
    }
    function iv(e, n) {
      var a = n, s = 0, c = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8) if (a = f.data, a === "/$") {
          if (0 < s && 8 > s) {
            a = s;
            var y = e.ownerDocument;
            if (a & 1 && Di(y.documentElement), a & 2 && Di(y.body), a & 4) for (a = y.head, Di(a), y = a.firstChild; y; ) {
              var _ = y.nextSibling, M = y.nodeName;
              y[Ko] || M === "SCRIPT" || M === "STYLE" || M === "LINK" && y.rel.toLowerCase() === "stylesheet" || a.removeChild(y), y = _;
            }
          }
          if (c === 0) {
            e.removeChild(f), Pi(n);
            return;
          }
          c--;
        } else a === "$" || a === "$?" || a === "$!" ? c++ : s = a.charCodeAt(0) - 48;
        else s = 0;
        a = f;
      } while (a);
      Pi(n);
    }
    function jf(e) {
      var n = e.firstChild;
      for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
        var a = n;
        switch (n = n.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            jf(a), Uc(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Xx(e, n, a, s) {
      for (; e.nodeType === 1; ) {
        var c = a;
        if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
          if (!s && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
        } else if (s) {
          if (!e[Ko]) switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence")) break;
              if (f !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title)) break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (f = e.getAttribute("src"), (f !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
              return e;
            default:
              return e;
          }
        } else if (n === "input" && e.type === "hidden") {
          var f = c.name == null ? null : "" + c.name;
          if (c.type === "hidden" && e.getAttribute("name") === f) return e;
        } else return e;
        if (e = yn(e.nextSibling), e === null) break;
      }
      return null;
    }
    function $x(e, n, a) {
      if (n === "") return null;
      for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = yn(e.nextSibling), e === null)) return null;
      return e;
    }
    function zf(e) {
      return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
    }
    function Zx(e, n) {
      var a = e.ownerDocument;
      if (e.data !== "$?" || a.readyState === "complete") n();
      else {
        var s = function() {
          n(), a.removeEventListener("DOMContentLoaded", s);
        };
        a.addEventListener("DOMContentLoaded", s), e._reactRetry = s;
      }
    }
    function yn(e) {
      for (; e != null; e = e.nextSibling) {
        var n = e.nodeType;
        if (n === 1 || n === 3) break;
        if (n === 8) {
          if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F") break;
          if (n === "/$") return null;
        }
      }
      return e;
    }
    var kf = null;
    function sv(e) {
      e = e.previousSibling;
      for (var n = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === "$" || a === "$!" || a === "$?") {
            if (n === 0) return e;
            n--;
          } else a === "/$" && n++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function lv(e, n, a) {
      switch (n = ml(a), e) {
        case "html":
          if (e = n.documentElement, !e) throw Error(i(452));
          return e;
        case "head":
          if (e = n.head, !e) throw Error(i(453));
          return e;
        case "body":
          if (e = n.body, !e) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function Di(e) {
      for (var n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
      Uc(e);
    }
    var ln = /* @__PURE__ */ new Map(), cv = /* @__PURE__ */ new Set();
    function gl(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var rr = I.d;
    I.d = {
      f: Jx,
      r: Wx,
      D: eS,
      C: tS,
      L: nS,
      m: rS,
      X: oS,
      S: aS,
      M: iS
    };
    function Jx() {
      var e = rr.f(), n = sl();
      return e || n;
    }
    function Wx(e) {
      var n = Na(e);
      n !== null && n.tag === 5 && n.type === "form" ? Am(n) : rr.r(e);
    }
    var ho = typeof document > "u" ? null : document;
    function uv(e, n, a) {
      var s = ho;
      if (s && typeof n == "string" && n) {
        var c = en(n);
        c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), cv.has(c) || (cv.add(c), e = {
          rel: e,
          crossOrigin: a,
          href: n
        }, s.querySelector(c) === null && (n = s.createElement("link"), xt(n, "link", e), pt(n), s.head.appendChild(n)));
      }
    }
    function eS(e) {
      rr.D(e), uv("dns-prefetch", e, null);
    }
    function tS(e, n) {
      rr.C(e, n), uv("preconnect", e, n);
    }
    function nS(e, n, a) {
      rr.L(e, n, a);
      var s = ho;
      if (s && e && n) {
        var c = 'link[rel="preload"][as="' + en(n) + '"]';
        n === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + en(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + en(a.imageSizes) + '"]')) : c += '[href="' + en(e) + '"]';
        var f = c;
        switch (n) {
          case "style":
            f = po(e);
            break;
          case "script":
            f = mo(e);
        }
        ln.has(f) || (e = v({
          rel: "preload",
          href: n === "image" && a && a.imageSrcSet ? void 0 : e,
          as: n
        }, a), ln.set(f, e), s.querySelector(c) !== null || n === "style" && s.querySelector(Ni(f)) || n === "script" && s.querySelector(ji(f)) || (n = s.createElement("link"), xt(n, "link", e), pt(n), s.head.appendChild(n)));
      }
    }
    function rS(e, n) {
      rr.m(e, n);
      var a = ho;
      if (a && e) {
        var s = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + en(s) + '"][href="' + en(e) + '"]', f = c;
        switch (s) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            f = mo(e);
        }
        if (!ln.has(f) && (e = v({
          rel: "modulepreload",
          href: e
        }, n), ln.set(f, e), a.querySelector(c) === null)) {
          switch (s) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (a.querySelector(ji(f))) return;
          }
          s = a.createElement("link"), xt(s, "link", e), pt(s), a.head.appendChild(s);
        }
      }
    }
    function aS(e, n, a) {
      rr.S(e, n, a);
      var s = ho;
      if (s && e) {
        var c = ja(s).hoistableStyles, f = po(e);
        n = n || "default";
        var y = c.get(f);
        if (!y) {
          var _ = {
            loading: 0,
            preload: null
          };
          if (y = s.querySelector(Ni(f))) _.loading = 5;
          else {
            e = v({
              rel: "stylesheet",
              href: e,
              "data-precedence": n
            }, a), (a = ln.get(f)) && Lf(e, a);
            var M = y = s.createElement("link");
            pt(M), xt(M, "link", e), M._p = new Promise(function(G, X) {
              M.onload = G, M.onerror = X;
            }), M.addEventListener("load", function() {
              _.loading |= 1;
            }), M.addEventListener("error", function() {
              _.loading |= 2;
            }), _.loading |= 4, vl(y, n, s);
          }
          y = {
            type: "stylesheet",
            instance: y,
            count: 1,
            state: _
          }, c.set(f, y);
        }
      }
    }
    function oS(e, n) {
      rr.X(e, n);
      var a = ho;
      if (a && e) {
        var s = ja(a).hoistableScripts, c = mo(e), f = s.get(c);
        f || (f = a.querySelector(ji(c)), f || (e = v({
          src: e,
          async: true
        }, n), (n = ln.get(c)) && Uf(e, n), f = a.createElement("script"), pt(f), xt(f, "link", e), a.head.appendChild(f)), f = {
          type: "script",
          instance: f,
          count: 1,
          state: null
        }, s.set(c, f));
      }
    }
    function iS(e, n) {
      rr.M(e, n);
      var a = ho;
      if (a && e) {
        var s = ja(a).hoistableScripts, c = mo(e), f = s.get(c);
        f || (f = a.querySelector(ji(c)), f || (e = v({
          src: e,
          async: true,
          type: "module"
        }, n), (n = ln.get(c)) && Uf(e, n), f = a.createElement("script"), pt(f), xt(f, "link", e), a.head.appendChild(f)), f = {
          type: "script",
          instance: f,
          count: 1,
          state: null
        }, s.set(c, f));
      }
    }
    function fv(e, n, a, s) {
      var c = (c = ne.current) ? gl(c) : null;
      if (!c) throw Error(i(446));
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (n = po(a.href), a = ja(c).hoistableStyles, s = a.get(n), s || (s = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, a.set(n, s)), s) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = po(a.href);
            var f = ja(c).hoistableStyles, y = f.get(e);
            if (y || (c = c.ownerDocument || c, y = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, f.set(e, y), (f = c.querySelector(Ni(e))) && !f._p && (y.instance = f, y.state.loading = 5), ln.has(e) || (a = {
              rel: "preload",
              as: "style",
              href: a.href,
              crossOrigin: a.crossOrigin,
              integrity: a.integrity,
              media: a.media,
              hrefLang: a.hrefLang,
              referrerPolicy: a.referrerPolicy
            }, ln.set(e, a), f || sS(c, e, a, y.state))), n && s === null) throw Error(i(528, ""));
            return y;
          }
          if (n && s !== null) throw Error(i(529, ""));
          return null;
        case "script":
          return n = a.async, a = a.src, typeof a == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = mo(a), a = ja(c).hoistableScripts, s = a.get(n), s || (s = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, a.set(n, s)), s) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(i(444, e));
      }
    }
    function po(e) {
      return 'href="' + en(e) + '"';
    }
    function Ni(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function dv(e) {
      return v({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function sS(e, n, a, s) {
      e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? s.loading = 1 : (n = e.createElement("link"), s.preload = n, n.addEventListener("load", function() {
        return s.loading |= 1;
      }), n.addEventListener("error", function() {
        return s.loading |= 2;
      }), xt(n, "link", a), pt(n), e.head.appendChild(n));
    }
    function mo(e) {
      return '[src="' + en(e) + '"]';
    }
    function ji(e) {
      return "script[async]" + e;
    }
    function hv(e, n, a) {
      if (n.count++, n.instance === null) switch (n.type) {
        case "style":
          var s = e.querySelector('style[data-href~="' + en(a.href) + '"]');
          if (s) return n.instance = s, pt(s), s;
          var c = v({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return s = (e.ownerDocument || e).createElement("style"), pt(s), xt(s, "style", c), vl(s, a.precedence, e), n.instance = s;
        case "stylesheet":
          c = po(a.href);
          var f = e.querySelector(Ni(c));
          if (f) return n.state.loading |= 4, n.instance = f, pt(f), f;
          s = dv(a), (c = ln.get(c)) && Lf(s, c), f = (e.ownerDocument || e).createElement("link"), pt(f);
          var y = f;
          return y._p = new Promise(function(_, M) {
            y.onload = _, y.onerror = M;
          }), xt(f, "link", s), n.state.loading |= 4, vl(f, a.precedence, e), n.instance = f;
        case "script":
          return f = mo(a.src), (c = e.querySelector(ji(f))) ? (n.instance = c, pt(c), c) : (s = a, (c = ln.get(f)) && (s = v({}, a), Uf(s, c)), e = e.ownerDocument || e, c = e.createElement("script"), pt(c), xt(c, "link", s), e.head.appendChild(c), n.instance = c);
        case "void":
          return null;
        default:
          throw Error(i(443, n.type));
      }
      else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (s = n.instance, n.state.loading |= 4, vl(s, a.precedence, e));
      return n.instance;
    }
    function vl(e, n, a) {
      for (var s = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), c = s.length ? s[s.length - 1] : null, f = c, y = 0; y < s.length; y++) {
        var _ = s[y];
        if (_.dataset.precedence === n) f = _;
        else if (f !== c) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (n = a.nodeType === 9 ? a.head : a, n.insertBefore(e, n.firstChild));
    }
    function Lf(e, n) {
      e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
    }
    function Uf(e, n) {
      e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
    }
    var yl = null;
    function pv(e, n, a) {
      if (yl === null) {
        var s = /* @__PURE__ */ new Map(), c = yl = /* @__PURE__ */ new Map();
        c.set(a, s);
      } else c = yl, s = c.get(a), s || (s = /* @__PURE__ */ new Map(), c.set(a, s));
      if (s.has(e)) return s;
      for (s.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
        var f = a[c];
        if (!(f[Ko] || f[tt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
          var y = f.getAttribute(n) || "";
          y = e + y;
          var _ = s.get(y);
          _ ? _.push(f) : s.set(y, [
            f
          ]);
        }
      }
      return s;
    }
    function mv(e, n, a) {
      e = e.ownerDocument || e, e.head.insertBefore(a, n === "title" ? e.querySelector("head > title") : null);
    }
    function lS(e, n, a) {
      if (a === 1 || n.itemProp != null) return false;
      switch (e) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break;
          return true;
        case "link":
          if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError) break;
          switch (n.rel) {
            case "stylesheet":
              return e = n.disabled, typeof n.precedence == "string" && e == null;
            default:
              return true;
          }
        case "script":
          if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string") return true;
      }
      return false;
    }
    function gv(e) {
      return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
    }
    var zi = null;
    function cS() {
    }
    function uS(e, n, a) {
      if (zi === null) throw Error(i(475));
      var s = zi;
      if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (n.state.loading & 4) === 0) {
        if (n.instance === null) {
          var c = po(a.href), f = e.querySelector(Ni(c));
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (s.count++, s = bl.bind(s), e.then(s, s)), n.state.loading |= 4, n.instance = f, pt(f);
            return;
          }
          f = e.ownerDocument || e, a = dv(a), (c = ln.get(c)) && Lf(a, c), f = f.createElement("link"), pt(f);
          var y = f;
          y._p = new Promise(function(_, M) {
            y.onload = _, y.onerror = M;
          }), xt(f, "link", a), n.instance = f;
        }
        s.stylesheets === null && (s.stylesheets = /* @__PURE__ */ new Map()), s.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (s.count++, n = bl.bind(s), e.addEventListener("load", n), e.addEventListener("error", n));
      }
    }
    function fS() {
      if (zi === null) throw Error(i(475));
      var e = zi;
      return e.stylesheets && e.count === 0 && Bf(e, e.stylesheets), 0 < e.count ? function(n) {
        var a = setTimeout(function() {
          if (e.stylesheets && Bf(e, e.stylesheets), e.unsuspend) {
            var s = e.unsuspend;
            e.unsuspend = null, s();
          }
        }, 6e4);
        return e.unsuspend = n, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function bl() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets) Bf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    var _l = null;
    function Bf(e, n) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, _l = /* @__PURE__ */ new Map(), n.forEach(dS, e), _l = null, bl.call(e));
    }
    function dS(e, n) {
      if (!(n.state.loading & 4)) {
        var a = _l.get(e);
        if (a) var s = a.get(null);
        else {
          a = /* @__PURE__ */ new Map(), _l.set(e, a);
          for (var c = e.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < c.length; f++) {
            var y = c[f];
            (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (a.set(y.dataset.precedence, y), s = y);
          }
          s && a.set(null, s);
        }
        c = n.instance, y = c.getAttribute("data-precedence"), f = a.get(y) || s, f === s && a.set(null, c), a.set(y, c), this.count++, s = bl.bind(this), c.addEventListener("load", s), c.addEventListener("error", s), f ? f.parentNode.insertBefore(c, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
      }
    }
    var ki = {
      $$typeof: j,
      Provider: null,
      Consumer: null,
      _currentValue: B,
      _currentValue2: B,
      _threadCount: 0
    };
    function hS(e, n, a, s, c, f, y, _) {
      this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yo(0), this.hiddenUpdates = Yo(null), this.identifierPrefix = s, this.onUncaughtError = c, this.onCaughtError = f, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function vv(e, n, a, s, c, f, y, _, M, G, X, te) {
      return e = new hS(e, n, a, y, _, M, G, te), n = 1, f === true && (n |= 24), f = Gt(3, null, null, n), e.current = f, f.stateNode = e, n = yu(), n.refCount++, e.pooledCache = n, n.refCount++, f.memoizedState = {
        element: s,
        isDehydrated: a,
        cache: n
      }, xu(f), e;
    }
    function yv(e) {
      return e ? (e = Ya, e) : Ya;
    }
    function bv(e, n, a, s, c, f) {
      c = yv(c), s.context === null ? s.context = c : s.pendingContext = c, s = gr(n), s.payload = {
        element: a
      }, f = f === void 0 ? null : f, f !== null && (s.callback = f), a = vr(e, s, n), a !== null && (It(a, e, n), fi(a, e, n));
    }
    function _v(e, n) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < n ? a : n;
      }
    }
    function Pf(e, n) {
      _v(e, n), (e = e.alternate) && _v(e, n);
    }
    function wv(e) {
      if (e.tag === 13) {
        var n = Va(e, 67108864);
        n !== null && It(n, e, 67108864), Pf(e, 67108864);
      }
    }
    var wl = true;
    function pS(e, n, a, s) {
      var c = A.T;
      A.T = null;
      var f = I.p;
      try {
        I.p = 2, Hf(e, n, a, s);
      } finally {
        I.p = f, A.T = c;
      }
    }
    function mS(e, n, a, s) {
      var c = A.T;
      A.T = null;
      var f = I.p;
      try {
        I.p = 8, Hf(e, n, a, s);
      } finally {
        I.p = f, A.T = c;
      }
    }
    function Hf(e, n, a, s) {
      if (wl) {
        var c = qf(s);
        if (c === null) Cf(e, n, s, xl, a), Sv(e, s);
        else if (vS(c, e, n, a, s)) s.stopPropagation();
        else if (Sv(e, s), n & 4 && -1 < gS.indexOf(e)) {
          for (; c !== null; ) {
            var f = Na(c);
            if (f !== null) switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var y = Tn(f.pendingLanes);
                  if (y !== 0) {
                    var _ = f;
                    for (_.pendingLanes |= 2, _.entangledLanes |= 2; y; ) {
                      var M = 1 << 31 - yt(y);
                      _.entanglements[1] |= M, y &= ~M;
                    }
                    Dn(f), (Pe & 6) === 0 && (ol = Ie() + 500, Mi(0));
                  }
                }
                break;
              case 13:
                _ = Va(f, 2), _ !== null && It(_, f, 2), sl(), Pf(f, 2);
            }
            if (f = qf(s), f === null && Cf(e, n, s, xl, a), f === c) break;
            c = f;
          }
          c !== null && s.stopPropagation();
        } else Cf(e, n, s, null, a);
      }
    }
    function qf(e) {
      return e = Yc(e), Gf(e);
    }
    var xl = null;
    function Gf(e) {
      if (xl = null, e = Da(e), e !== null) {
        var n = u(e);
        if (n === null) e = null;
        else {
          var a = n.tag;
          if (a === 13) {
            if (e = d(n), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
            e = null;
          } else n !== e && (e = null);
        }
      }
      return xl = e, null;
    }
    function xv(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (hn()) {
            case Ot:
              return 2;
            case Gr:
              return 8;
            case je:
            case Ae:
              return 32;
            case Ht:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Ff = false, Or = null, Dr = null, Nr = null, Li = /* @__PURE__ */ new Map(), Ui = /* @__PURE__ */ new Map(), jr = [], gS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Sv(e, n) {
      switch (e) {
        case "focusin":
        case "focusout":
          Or = null;
          break;
        case "dragenter":
        case "dragleave":
          Dr = null;
          break;
        case "mouseover":
        case "mouseout":
          Nr = null;
          break;
        case "pointerover":
        case "pointerout":
          Li.delete(n.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Ui.delete(n.pointerId);
      }
    }
    function Bi(e, n, a, s, c, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: n,
        domEventName: a,
        eventSystemFlags: s,
        nativeEvent: f,
        targetContainers: [
          c
        ]
      }, n !== null && (n = Na(n), n !== null && wv(n)), e) : (e.eventSystemFlags |= s, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
    }
    function vS(e, n, a, s, c) {
      switch (n) {
        case "focusin":
          return Or = Bi(Or, e, n, a, s, c), true;
        case "dragenter":
          return Dr = Bi(Dr, e, n, a, s, c), true;
        case "mouseover":
          return Nr = Bi(Nr, e, n, a, s, c), true;
        case "pointerover":
          var f = c.pointerId;
          return Li.set(f, Bi(Li.get(f) || null, e, n, a, s, c)), true;
        case "gotpointercapture":
          return f = c.pointerId, Ui.set(f, Bi(Ui.get(f) || null, e, n, a, s, c)), true;
      }
      return false;
    }
    function Ev(e) {
      var n = Da(e.target);
      if (n !== null) {
        var a = u(n);
        if (a !== null) {
          if (n = a.tag, n === 13) {
            if (n = d(a), n !== null) {
              e.blockedOn = n, st(e.priority, function() {
                if (a.tag === 13) {
                  var s = Kt();
                  s = at(s);
                  var c = Va(a, s);
                  c !== null && It(c, a, s), Pf(a, s);
                }
              });
              return;
            }
          } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Sl(e) {
      if (e.blockedOn !== null) return false;
      for (var n = e.targetContainers; 0 < n.length; ) {
        var a = qf(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var s = new a.constructor(a.type, a);
          Vc = s, a.target.dispatchEvent(s), Vc = null;
        } else return n = Na(a), n !== null && wv(n), e.blockedOn = a, false;
        n.shift();
      }
      return true;
    }
    function Rv(e, n, a) {
      Sl(e) && a.delete(n);
    }
    function yS() {
      Ff = false, Or !== null && Sl(Or) && (Or = null), Dr !== null && Sl(Dr) && (Dr = null), Nr !== null && Sl(Nr) && (Nr = null), Li.forEach(Rv), Ui.forEach(Rv);
    }
    function El(e, n) {
      e.blockedOn === n && (e.blockedOn = null, Ff || (Ff = true, t.unstable_scheduleCallback(t.unstable_NormalPriority, yS)));
    }
    var Rl = null;
    function Tv(e) {
      Rl !== e && (Rl = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
        Rl === e && (Rl = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n], s = e[n + 1], c = e[n + 2];
          if (typeof s != "function") {
            if (Gf(s || a) === null) continue;
            break;
          }
          var f = Na(a);
          f !== null && (e.splice(n, 3), n -= 3, qu(f, {
            pending: true,
            data: c,
            method: a.method,
            action: s
          }, s, c));
        }
      }));
    }
    function Pi(e) {
      function n(M) {
        return El(M, e);
      }
      Or !== null && El(Or, e), Dr !== null && El(Dr, e), Nr !== null && El(Nr, e), Li.forEach(n), Ui.forEach(n);
      for (var a = 0; a < jr.length; a++) {
        var s = jr[a];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; 0 < jr.length && (a = jr[0], a.blockedOn === null); ) Ev(a), a.blockedOn === null && jr.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null) for (s = 0; s < a.length; s += 3) {
        var c = a[s], f = a[s + 1], y = c[Ye] || null;
        if (typeof f == "function") y || Tv(a);
        else if (y) {
          var _ = null;
          if (f && f.hasAttribute("formAction")) {
            if (c = f, y = f[Ye] || null) _ = y.formAction;
            else if (Gf(c) !== null) continue;
          } else _ = y.action;
          typeof _ == "function" ? a[s + 1] = _ : (a.splice(s, 3), s -= 3), Tv(a);
        }
      }
    }
    function Vf(e) {
      this._internalRoot = e;
    }
    Tl.prototype.render = Vf.prototype.render = function(e) {
      var n = this._internalRoot;
      if (n === null) throw Error(i(409));
      var a = n.current, s = Kt();
      bv(a, s, e, n, null, null);
    }, Tl.prototype.unmount = Vf.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var n = e.containerInfo;
        bv(e.current, 2, null, e, null, null), sl(), n[ht] = null;
      }
    };
    function Tl(e) {
      this._internalRoot = e;
    }
    Tl.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var n = Yr();
        e = {
          blockedOn: null,
          target: e,
          priority: n
        };
        for (var a = 0; a < jr.length && n !== 0 && n < jr[a].priority; a++) ;
        jr.splice(a, 0, e), a === 0 && Ev(e);
      }
    };
    var Cv = r.version;
    if (Cv !== "19.1.0") throw Error(i(527, Cv, "19.1.0"));
    I.findDOMNode = function(e) {
      var n = e._reactInternals;
      if (n === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
      return e = g(n), e = e !== null ? p(e) : null, e = e === null ? null : e.stateNode, e;
    };
    var bS = {
      bundleType: 0,
      version: "19.1.0",
      rendererPackageName: "react-dom",
      currentDispatcherRef: A,
      reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Cl.isDisabled && Cl.supportsFiber) try {
        Jt = Cl.inject(bS), Dt = Cl;
      } catch {
      }
    }
    return qi.createRoot = function(e, n) {
      if (!l(e)) throw Error(i(299));
      var a = false, s = "", c = Fm, f = Vm, y = Ym, _ = null;
      return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (_ = n.unstable_transitionCallbacks)), n = vv(e, 1, false, null, null, a, s, c, f, y, _, null), e[ht] = n.current, Tf(e), new Vf(n);
    }, qi.hydrateRoot = function(e, n, a) {
      if (!l(e)) throw Error(i(299));
      var s = false, c = "", f = Fm, y = Vm, _ = Ym, M = null, G = null;
      return a != null && (a.unstable_strictMode === true && (s = true), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (y = a.onCaughtError), a.onRecoverableError !== void 0 && (_ = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (M = a.unstable_transitionCallbacks), a.formState !== void 0 && (G = a.formState)), n = vv(e, 1, true, n, a ?? null, s, c, f, y, _, M, G), n.context = yv(null), a = n.current, s = Kt(), s = at(s), c = gr(s), c.callback = null, vr(a, c, s), a = s, n.current.lanes = a, dr(n, a), Dn(n), e[ht] = n.current, Tf(e), new Tl(n);
    }, qi.version = "19.1.0", qi;
  }
  var Uv;
  function AS() {
    if (Uv) return If.exports;
    Uv = 1;
    function t() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
    }
    return t(), If.exports = MS(), If.exports;
  }
  var OS = AS();
  const DS = th(OS);
  var NS = "Invariant failed";
  function or(t, r) {
    if (!t) throw new Error(NS);
  }
  const Ro = /* @__PURE__ */ new WeakMap(), Gl = /* @__PURE__ */ new WeakMap(), Xl = {
    current: []
  };
  let Zf = false, Ii = 0;
  const Vi = /* @__PURE__ */ new Set(), Ml = /* @__PURE__ */ new Map();
  function rb(t) {
    const r = Array.from(t).sort((o, i) => o instanceof To && o.options.deps.includes(i) ? 1 : i instanceof To && i.options.deps.includes(o) ? -1 : 0);
    for (const o of r) {
      if (Xl.current.includes(o)) continue;
      Xl.current.push(o), o.recompute();
      const i = Gl.get(o);
      if (i) for (const l of i) {
        const u = Ro.get(l);
        u && rb(u);
      }
    }
  }
  function jS(t) {
    t.listeners.forEach((r) => r({
      prevVal: t.prevState,
      currentVal: t.state
    }));
  }
  function zS(t) {
    t.listeners.forEach((r) => r({
      prevVal: t.prevState,
      currentVal: t.state
    }));
  }
  function ab(t) {
    if (Ii > 0 && !Ml.has(t) && Ml.set(t, t.prevState), Vi.add(t), !(Ii > 0) && !Zf) try {
      for (Zf = true; Vi.size > 0; ) {
        const r = Array.from(Vi);
        Vi.clear();
        for (const o of r) {
          const i = Ml.get(o) ?? o.prevState;
          o.prevState = i, jS(o);
        }
        for (const o of r) {
          const i = Ro.get(o);
          i && (Xl.current.push(o), rb(i));
        }
        for (const o of r) {
          const i = Ro.get(o);
          if (i) for (const l of i) zS(l);
        }
      }
    } finally {
      Zf = false, Xl.current = [], Ml.clear();
    }
  }
  function go(t) {
    Ii++;
    try {
      t();
    } finally {
      if (Ii--, Ii === 0) {
        const r = Array.from(Vi)[0];
        r && ab(r);
      }
    }
  }
  function kS(t) {
    return typeof t == "function";
  }
  class Cd {
    constructor(r, o) {
      this.listeners = /* @__PURE__ */ new Set(), this.subscribe = (i) => {
        var l, u;
        this.listeners.add(i);
        const d = (u = (l = this.options) == null ? void 0 : l.onSubscribe) == null ? void 0 : u.call(l, i, this);
        return () => {
          this.listeners.delete(i), d == null ? void 0 : d();
        };
      }, this.prevState = r, this.state = r, this.options = o;
    }
    setState(r) {
      var o, i, l;
      this.prevState = this.state, (o = this.options) != null && o.updateFn ? this.state = this.options.updateFn(this.prevState)(r) : kS(r) ? this.state = r(this.prevState) : this.state = r, (l = (i = this.options) == null ? void 0 : i.onUpdate) == null || l.call(i), ab(this);
    }
  }
  class To {
    constructor(r) {
      this.listeners = /* @__PURE__ */ new Set(), this._subscriptions = [], this.lastSeenDepValues = [], this.getDepVals = () => {
        const o = [], i = [];
        for (const l of this.options.deps) o.push(l.prevState), i.push(l.state);
        return this.lastSeenDepValues = i, {
          prevDepVals: o,
          currDepVals: i,
          prevVal: this.prevState ?? void 0
        };
      }, this.recompute = () => {
        var o, i;
        this.prevState = this.state;
        const { prevDepVals: l, currDepVals: u, prevVal: d } = this.getDepVals();
        this.state = this.options.fn({
          prevDepVals: l,
          currDepVals: u,
          prevVal: d
        }), (i = (o = this.options).onUpdate) == null || i.call(o);
      }, this.checkIfRecalculationNeededDeeply = () => {
        for (const u of this.options.deps) u instanceof To && u.checkIfRecalculationNeededDeeply();
        let o = false;
        const i = this.lastSeenDepValues, { currDepVals: l } = this.getDepVals();
        for (let u = 0; u < l.length; u++) if (l[u] !== i[u]) {
          o = true;
          break;
        }
        o && this.recompute();
      }, this.mount = () => (this.registerOnGraph(), this.checkIfRecalculationNeededDeeply(), () => {
        this.unregisterFromGraph();
        for (const o of this._subscriptions) o();
      }), this.subscribe = (o) => {
        var i, l;
        this.listeners.add(o);
        const u = (l = (i = this.options).onSubscribe) == null ? void 0 : l.call(i, o, this);
        return () => {
          this.listeners.delete(o), u == null ? void 0 : u();
        };
      }, this.options = r, this.state = r.fn({
        prevDepVals: void 0,
        prevVal: void 0,
        currDepVals: this.getDepVals().currDepVals
      });
    }
    registerOnGraph(r = this.options.deps) {
      for (const o of r) if (o instanceof To) o.registerOnGraph(), this.registerOnGraph(o.options.deps);
      else if (o instanceof Cd) {
        let i = Ro.get(o);
        i || (i = /* @__PURE__ */ new Set(), Ro.set(o, i)), i.add(this);
        let l = Gl.get(this);
        l || (l = /* @__PURE__ */ new Set(), Gl.set(this, l)), l.add(o);
      }
    }
    unregisterFromGraph(r = this.options.deps) {
      for (const o of r) if (o instanceof To) this.unregisterFromGraph(o.options.deps);
      else if (o instanceof Cd) {
        const i = Ro.get(o);
        i && i.delete(this);
        const l = Gl.get(this);
        l && l.delete(o);
      }
    }
  }
  const Ur = "__TSR_index", Bv = "popstate", Pv = "beforeunload";
  function ob(t) {
    let r = t.getLocation();
    const o = /* @__PURE__ */ new Set(), i = (d) => {
      r = t.getLocation(), o.forEach((h) => h({
        location: r,
        action: d
      }));
    }, l = (d) => {
      t.notifyOnIndexChange ?? true ? i(d) : r = t.getLocation();
    }, u = async ({ task: d, navigateOpts: h, ...g }) => {
      var p, v;
      if ((h == null ? void 0 : h.ignoreBlocker) ?? false) {
        d();
        return;
      }
      const w = ((p = t.getBlockers) == null ? void 0 : p.call(t)) ?? [], S = g.type === "PUSH" || g.type === "REPLACE";
      if (typeof document < "u" && w.length && S) for (const E of w) {
        const R = Qi(g.path, g.state);
        if (await E.blockerFn({
          currentLocation: r,
          nextLocation: R,
          action: g.type
        })) {
          (v = t.onBlocked) == null || v.call(t);
          return;
        }
      }
      d();
    };
    return {
      get location() {
        return r;
      },
      get length() {
        return t.getLength();
      },
      subscribers: o,
      subscribe: (d) => (o.add(d), () => {
        o.delete(d);
      }),
      push: (d, h, g) => {
        const p = r.state[Ur];
        h = Md(p + 1, h), u({
          task: () => {
            t.pushState(d, h), i({
              type: "PUSH"
            });
          },
          navigateOpts: g,
          type: "PUSH",
          path: d,
          state: h
        });
      },
      replace: (d, h, g) => {
        const p = r.state[Ur];
        h = Md(p, h), u({
          task: () => {
            t.replaceState(d, h), i({
              type: "REPLACE"
            });
          },
          navigateOpts: g,
          type: "REPLACE",
          path: d,
          state: h
        });
      },
      go: (d, h) => {
        u({
          task: () => {
            t.go(d), l({
              type: "GO",
              index: d
            });
          },
          navigateOpts: h,
          type: "GO"
        });
      },
      back: (d) => {
        u({
          task: () => {
            t.back((d == null ? void 0 : d.ignoreBlocker) ?? false), l({
              type: "BACK"
            });
          },
          navigateOpts: d,
          type: "BACK"
        });
      },
      forward: (d) => {
        u({
          task: () => {
            t.forward((d == null ? void 0 : d.ignoreBlocker) ?? false), l({
              type: "FORWARD"
            });
          },
          navigateOpts: d,
          type: "FORWARD"
        });
      },
      canGoBack: () => r.state[Ur] !== 0,
      createHref: (d) => t.createHref(d),
      block: (d) => {
        var h;
        if (!t.setBlockers) return () => {
        };
        const g = ((h = t.getBlockers) == null ? void 0 : h.call(t)) ?? [];
        return t.setBlockers([
          ...g,
          d
        ]), () => {
          var p, v;
          const m = ((p = t.getBlockers) == null ? void 0 : p.call(t)) ?? [];
          (v = t.setBlockers) == null || v.call(t, m.filter((w) => w !== d));
        };
      },
      flush: () => {
        var d;
        return (d = t.flush) == null ? void 0 : d.call(t);
      },
      destroy: () => {
        var d;
        return (d = t.destroy) == null ? void 0 : d.call(t);
      },
      notify: i
    };
  }
  function Md(t, r) {
    return r || (r = {}), {
      ...r,
      key: nh(),
      [Ur]: t
    };
  }
  function LS(t) {
    var r;
    const o = typeof document < "u" ? window : void 0, i = o.history.pushState, l = o.history.replaceState;
    let u = [];
    const d = () => u, h = (U) => u = U, g = (U) => U, p = () => Qi(`${o.location.pathname}${o.location.search}${o.location.hash}`, o.history.state);
    (r = o.history.state) != null && r.key || o.history.replaceState({
      [Ur]: 0,
      key: nh()
    }, "");
    let v = p(), m, w = false, S = false, E = false, R = false;
    const C = () => v;
    let O, k;
    const j = () => {
      O && (D._ignoreSubscribers = true, (O.isPush ? o.history.pushState : o.history.replaceState)(O.state, "", O.href), D._ignoreSubscribers = false, O = void 0, k = void 0, m = void 0);
    }, H = (U, ae, ie) => {
      const ee = g(ae);
      k || (m = v), v = Qi(ae, ie), O = {
        href: ee,
        state: ie,
        isPush: (O == null ? void 0 : O.isPush) || U === "push"
      }, k || (k = Promise.resolve().then(() => j()));
    }, q = (U) => {
      v = p(), D.notify({
        type: U
      });
    }, V = async () => {
      if (S) {
        S = false;
        return;
      }
      const U = p(), ae = U.state[Ur] - v.state[Ur], ie = ae === 1, ee = ae === -1, re = !ie && !ee || w;
      w = false;
      const fe = re ? "GO" : ee ? "BACK" : "FORWARD", se = re ? {
        type: "GO",
        index: ae
      } : {
        type: ee ? "BACK" : "FORWARD"
      };
      if (E) E = false;
      else {
        const A = d();
        if (typeof document < "u" && A.length) {
          for (const I of A) if (await I.blockerFn({
            currentLocation: v,
            nextLocation: U,
            action: fe
          })) {
            S = true, o.history.go(1), D.notify(se);
            return;
          }
        }
      }
      v = p(), D.notify(se);
    }, K = (U) => {
      if (R) {
        R = false;
        return;
      }
      let ae = false;
      const ie = d();
      if (typeof document < "u" && ie.length) for (const ee of ie) {
        const re = ee.enableBeforeUnload ?? true;
        if (re === true) {
          ae = true;
          break;
        }
        if (typeof re == "function" && re() === true) {
          ae = true;
          break;
        }
      }
      if (ae) return U.preventDefault(), U.returnValue = "";
    }, D = ob({
      getLocation: C,
      getLength: () => o.history.length,
      pushState: (U, ae) => H("push", U, ae),
      replaceState: (U, ae) => H("replace", U, ae),
      back: (U) => (U && (E = true), R = true, o.history.back()),
      forward: (U) => {
        U && (E = true), R = true, o.history.forward();
      },
      go: (U) => {
        w = true, o.history.go(U);
      },
      createHref: (U) => g(U),
      flush: j,
      destroy: () => {
        o.history.pushState = i, o.history.replaceState = l, o.removeEventListener(Pv, K, {
          capture: true
        }), o.removeEventListener(Bv, V);
      },
      onBlocked: () => {
        m && v !== m && (v = m);
      },
      getBlockers: d,
      setBlockers: h,
      notifyOnIndexChange: false
    });
    return o.addEventListener(Pv, K, {
      capture: true
    }), o.addEventListener(Bv, V), o.history.pushState = function(...U) {
      const ae = i.apply(o.history, U);
      return D._ignoreSubscribers || q("PUSH"), ae;
    }, o.history.replaceState = function(...U) {
      const ae = l.apply(o.history, U);
      return D._ignoreSubscribers || q("REPLACE"), ae;
    }, D;
  }
  function US(t = {
    initialEntries: [
      "/"
    ]
  }) {
    const r = t.initialEntries;
    let o = t.initialIndex ? Math.min(Math.max(t.initialIndex, 0), r.length - 1) : r.length - 1;
    const i = r.map((u, d) => Md(d, void 0));
    return ob({
      getLocation: () => Qi(r[o], i[o]),
      getLength: () => r.length,
      pushState: (u, d) => {
        o < r.length - 1 && (r.splice(o + 1), i.splice(o + 1)), i.push(d), r.push(u), o = Math.max(r.length - 1, 0);
      },
      replaceState: (u, d) => {
        i[o] = d, r[o] = u;
      },
      back: () => {
        o = Math.max(o - 1, 0);
      },
      forward: () => {
        o = Math.min(o + 1, r.length - 1);
      },
      go: (u) => {
        o = Math.min(Math.max(o + u, 0), r.length - 1);
      },
      createHref: (u) => u
    });
  }
  function Qi(t, r) {
    const o = t.indexOf("#"), i = t.indexOf("?");
    return {
      href: t,
      pathname: t.substring(0, o > 0 ? i > 0 ? Math.min(o, i) : o : i > 0 ? i : t.length),
      hash: o > -1 ? t.substring(o) : "",
      search: i > -1 ? t.slice(i, o === -1 ? void 0 : o) : "",
      state: r || {
        [Ur]: 0,
        key: nh()
      }
    };
  }
  function nh() {
    return (Math.random() + 1).toString(36).substring(7);
  }
  function Eo(t) {
    return t[t.length - 1];
  }
  function BS(t) {
    return typeof t == "function";
  }
  function ha(t, r) {
    return BS(t) ? t(r) : t;
  }
  function Ad(t, r) {
    return r.reduce((o, i) => (o[i] = t[i], o), {});
  }
  function cn(t, r) {
    if (t === r) return t;
    const o = r, i = Gv(t) && Gv(o);
    if (i || Hv(t) && Hv(o)) {
      const l = i ? t : Object.keys(t).concat(Object.getOwnPropertySymbols(t)), u = l.length, d = i ? o : Object.keys(o).concat(Object.getOwnPropertySymbols(o)), h = d.length, g = i ? [] : {};
      let p = 0;
      for (let v = 0; v < h; v++) {
        const m = i ? v : d[v];
        (!i && l.includes(m) || i) && t[m] === void 0 && o[m] === void 0 ? (g[m] = void 0, p++) : (g[m] = cn(t[m], o[m]), g[m] === t[m] && t[m] !== void 0 && p++);
      }
      return u === h && p === u ? t : g;
    }
    return o;
  }
  function Hv(t) {
    return Od(t) && Object.getOwnPropertyNames(t).length === Object.keys(t).length;
  }
  function Od(t) {
    if (!qv(t)) return false;
    const r = t.constructor;
    if (typeof r > "u") return true;
    const o = r.prototype;
    return !(!qv(o) || !o.hasOwnProperty("isPrototypeOf"));
  }
  function qv(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
  function Gv(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length;
  }
  function Fv(t, r) {
    let o = Object.keys(t);
    return r && (o = o.filter((i) => t[i] !== void 0)), o;
  }
  function Co(t, r, o) {
    if (t === r) return true;
    if (typeof t != typeof r) return false;
    if (Od(t) && Od(r)) {
      const i = (o == null ? void 0 : o.ignoreUndefined) ?? true, l = Fv(t, i), u = Fv(r, i);
      return !(o == null ? void 0 : o.partial) && l.length !== u.length ? false : u.every((d) => Co(t[d], r[d], o));
    }
    return Array.isArray(t) && Array.isArray(r) ? t.length !== r.length ? false : !t.some((i, l) => !Co(i, r[l], o)) : false;
  }
  function So(t) {
    let r, o;
    const i = new Promise((l, u) => {
      r = l, o = u;
    });
    return i.status = "pending", i.resolve = (l) => {
      i.status = "resolved", i.value = l, r(l), t == null ? void 0 : t(l);
    }, i.reject = (l) => {
      i.status = "rejected", o(l);
    }, i;
  }
  function ir(t) {
    return dc(t.filter((r) => r !== void 0).join("/"));
  }
  function dc(t) {
    return t.replace(/\/{2,}/g, "/");
  }
  function rh(t) {
    return t === "/" ? t : t.replace(/^\/{1,}/, "");
  }
  function pa(t) {
    return t === "/" ? t : t.replace(/\/{1,}$/, "");
  }
  function PS(t) {
    return pa(rh(t));
  }
  function $l(t, r) {
    return (t == null ? void 0 : t.endsWith("/")) && t !== "/" && t !== `${r}/` ? t.slice(0, -1) : t;
  }
  function HS(t, r, o) {
    return $l(t, o) === $l(r, o);
  }
  function qS({ basepath: t, base: r, to: o, trailingSlash: i = "never", caseSensitive: l }) {
    var u, d;
    r = Zl(t, r, l), o = Zl(t, o, l);
    let h = Do(r);
    const g = Do(o);
    h.length > 1 && ((u = Eo(h)) == null ? void 0 : u.value) === "/" && h.pop(), g.forEach((v, m) => {
      v.value === "/" ? m ? m === g.length - 1 && h.push(v) : h = [
        v
      ] : v.value === ".." ? h.pop() : v.value === "." || h.push(v);
    }), h.length > 1 && (((d = Eo(h)) == null ? void 0 : d.value) === "/" ? i === "never" && h.pop() : i === "always" && h.push({
      type: "pathname",
      value: "/"
    }));
    const p = ir([
      t,
      ...h.map((v) => v.value)
    ]);
    return dc(p);
  }
  function Do(t) {
    if (!t) return [];
    t = dc(t);
    const r = [];
    if (t.slice(0, 1) === "/" && (t = t.substring(1), r.push({
      type: "pathname",
      value: "/"
    })), !t) return r;
    const o = t.split("/").filter(Boolean);
    return r.push(...o.map((i) => i === "$" || i === "*" ? {
      type: "wildcard",
      value: i
    } : i.charAt(0) === "$" ? {
      type: "param",
      value: i
    } : {
      type: "pathname",
      value: i.includes("%25") ? i.split("%25").map((l) => decodeURI(l)).join("%25") : decodeURI(i)
    })), t.slice(-1) === "/" && (t = t.substring(1), r.push({
      type: "pathname",
      value: "/"
    })), r;
  }
  function Al({ path: t, params: r, leaveWildcards: o, leaveParams: i, decodeCharMap: l }) {
    const u = Do(t);
    function d(v) {
      const m = r[v], w = typeof m == "string";
      return [
        "*",
        "_splat"
      ].includes(v) ? w ? encodeURI(m) : m : w ? GS(m, l) : m;
    }
    let h = false;
    const g = {}, p = ir(u.map((v) => {
      if (v.type === "wildcard") {
        g._splat = r._splat;
        const m = d("_splat");
        return o ? `${v.value}${m ?? ""}` : m;
      }
      if (v.type === "param") {
        const m = v.value.substring(1);
        if (!h && !(m in r) && (h = true), g[m] = r[m], i) {
          const w = d(v.value);
          return `${v.value}${w ?? ""}`;
        }
        return d(m) ?? "undefined";
      }
      return v.value;
    }));
    return {
      usedParams: g,
      interpolatedPath: p,
      isMissingParams: h
    };
  }
  function GS(t, r) {
    let o = encodeURIComponent(t);
    if (r) for (const [i, l] of r) o = o.replaceAll(i, l);
    return o;
  }
  function Ol(t, r, o) {
    const i = FS(t, r, o);
    if (!(o.to && !i)) return i ?? {};
  }
  function Zl(t, r, o = false) {
    const i = o ? t : t.toLowerCase(), l = o ? r : r.toLowerCase();
    switch (true) {
      case i === "/":
        return r;
      case l === i:
        return "";
      case r.length < t.length:
        return r;
      case l[i.length] !== "/":
        return r;
      case l.startsWith(i):
        return r.slice(t.length);
      default:
        return r;
    }
  }
  function FS(t, r, o) {
    if (t !== "/" && !r.startsWith(t)) return;
    r = Zl(t, r, o.caseSensitive);
    const i = Zl(t, `${o.to ?? "$"}`, o.caseSensitive), l = Do(r), u = Do(i);
    r.startsWith("/") || l.unshift({
      type: "pathname",
      value: "/"
    }), i.startsWith("/") || u.unshift({
      type: "pathname",
      value: "/"
    });
    const d = {};
    return (() => {
      for (let g = 0; g < Math.max(l.length, u.length); g++) {
        const p = l[g], v = u[g], m = g >= l.length - 1, w = g >= u.length - 1;
        if (v) {
          if (v.type === "wildcard") {
            const S = decodeURI(ir(l.slice(g).map((E) => E.value)));
            return d["*"] = S, d._splat = S, true;
          }
          if (v.type === "pathname") {
            if (v.value === "/" && !(p == null ? void 0 : p.value)) return true;
            if (p) {
              if (o.caseSensitive) {
                if (v.value !== p.value) return false;
              } else if (v.value.toLowerCase() !== p.value.toLowerCase()) return false;
            }
          }
          if (!p) return false;
          if (v.type === "param") {
            if (p.value === "/") return false;
            p.value.charAt(0) !== "$" && (d[v.value.substring(1)] = decodeURIComponent(p.value));
          }
        }
        if (!m && w) return d["**"] = ir(l.slice(g + 1).map((S) => S.value)), !!o.fuzzy && (v == null ? void 0 : v.value) !== "/";
      }
      return true;
    })() ? d : void 0;
  }
  function un(t) {
    return !!(t == null ? void 0 : t.isNotFound);
  }
  function VS() {
    try {
      if (typeof window < "u" && typeof window.sessionStorage == "object") return window.sessionStorage;
    } catch {
      return;
    }
  }
  const Jl = "tsr-scroll-restoration-v1_3", YS = (t, r) => {
    let o;
    return (...i) => {
      o || (o = setTimeout(() => {
        t(...i), o = null;
      }, r));
    };
  };
  function KS() {
    const t = VS();
    if (!t) return;
    const r = t.getItem(Jl);
    let o = r ? JSON.parse(r) : {};
    return {
      state: o,
      set: (i) => (o = ha(i, o) || o, t.setItem(Jl, JSON.stringify(o)))
    };
  }
  const Jf = KS(), Dd = (t) => t.state.key || t.href;
  function IS(t) {
    const r = [];
    let o;
    for (; o = t.parentNode; ) r.unshift(`${t.tagName}:nth-child(${[].indexOf.call(o.children, t) + 1})`), t = o;
    return `${r.join(" > ")}`.toLowerCase();
  }
  let Wl = false;
  function ib(t, r, o, i, l) {
    var u;
    let d;
    try {
      d = JSON.parse(sessionStorage.getItem(t) || "{}");
    } catch (p) {
      console.error(p);
      return;
    }
    const h = r || ((u = window.history.state) == null ? void 0 : u.key), g = d[h];
    Wl = true, (() => {
      if (i && g) {
        for (const v in g) {
          const m = g[v];
          if (v === "window") window.scrollTo({
            top: m.scrollY,
            left: m.scrollX,
            behavior: o
          });
          else if (v) {
            const w = document.querySelector(v);
            w && (w.scrollLeft = m.scrollX, w.scrollTop = m.scrollY);
          }
        }
        return;
      }
      const p = window.location.hash.split("#")[1];
      if (p) {
        const v = (window.history.state || {}).__hashScrollIntoViewOptions ?? true;
        if (v) {
          const m = document.getElementById(p);
          m && m.scrollIntoView(v);
        }
        return;
      }
      [
        "window",
        ...(l == null ? void 0 : l.filter((v) => v !== "window")) ?? []
      ].forEach((v) => {
        const m = v === "window" ? window : typeof v == "function" ? v() : document.querySelector(v);
        m && m.scrollTo({
          top: 0,
          left: 0,
          behavior: o
        });
      });
    })(), Wl = false;
  }
  function QS(t, r) {
    if (Jf === void 0 || ((t.options.scrollRestoration ?? false) && (t.isScrollRestoring = true), typeof document > "u" || t.isScrollRestorationSetup)) return;
    t.isScrollRestorationSetup = true, Wl = false;
    const i = t.options.getScrollRestorationKey || Dd;
    window.history.scrollRestoration = "manual";
    const l = (u) => {
      if (Wl || !t.isScrollRestoring) return;
      let d = "";
      if (u.target === document || u.target === window) d = "window";
      else {
        const g = u.target.getAttribute("data-scroll-restoration-id");
        g ? d = `[data-scroll-restoration-id="${g}"]` : d = IS(u.target);
      }
      const h = i(t.state.location);
      Jf.set((g) => {
        const p = g[h] = g[h] || {}, v = p[d] = p[d] || {};
        if (d === "window") v.scrollX = window.scrollX || 0, v.scrollY = window.scrollY || 0;
        else if (d) {
          const m = document.querySelector(d);
          m && (v.scrollX = m.scrollLeft || 0, v.scrollY = m.scrollTop || 0);
        }
        return g;
      });
    };
    typeof document < "u" && document.addEventListener("scroll", YS(l, 100), true), t.subscribe("onRendered", (u) => {
      const d = i(u.toLocation);
      if (!t.resetNextScroll) {
        t.resetNextScroll = true;
        return;
      }
      ib(Jl, d, t.options.scrollRestorationBehavior || void 0, t.isScrollRestoring || void 0, t.options.scrollToTopSelectors || void 0), t.isScrollRestoring && Jf.set((h) => (h[d] = h[d] || {}, h));
    });
  }
  function XS(t) {
    if (typeof document < "u" && document.querySelector) {
      const r = t.state.location.state.__hashScrollIntoViewOptions ?? true;
      if (r && t.state.location.hash !== "") {
        const o = document.getElementById(t.state.location.hash);
        o && o.scrollIntoView(r);
      }
    }
  }
  function $S(t, r) {
    const o = Object.entries(t).flatMap(([l, u]) => Array.isArray(u) ? u.map((d) => [
      l,
      String(d)
    ]) : [
      [
        l,
        String(u)
      ]
    ]);
    return "" + new URLSearchParams(o).toString();
  }
  function Wf(t) {
    return t ? t === "false" ? false : t === "true" ? true : +t * 0 === 0 && +t + "" === t ? +t : t : "";
  }
  function ZS(t, r) {
    const o = t;
    return [
      ...new URLSearchParams(o).entries()
    ].reduce((u, [d, h]) => {
      const g = u[d];
      return g == null ? u[d] = Wf(h) : u[d] = Array.isArray(g) ? [
        ...g,
        Wf(h)
      ] : [
        g,
        Wf(h)
      ], u;
    }, {});
  }
  const JS = e1(JSON.parse), WS = t1(JSON.stringify, JSON.parse);
  function e1(t) {
    return (r) => {
      r.substring(0, 1) === "?" && (r = r.substring(1));
      const o = ZS(r);
      for (const i in o) {
        const l = o[i];
        if (typeof l == "string") try {
          o[i] = t(l);
        } catch {
        }
      }
      return o;
    };
  }
  function t1(t, r) {
    function o(i) {
      if (typeof i == "object" && i !== null) try {
        return t(i);
      } catch {
      }
      else if (typeof i == "string" && typeof r == "function") try {
        return r(i), t(i);
      } catch {
      }
      return i;
    }
    return (i) => {
      i = {
        ...i
      }, Object.keys(i).forEach((u) => {
        const d = i[u];
        typeof d > "u" || d === void 0 ? delete i[u] : i[u] = o(d);
      });
      const l = $S(i).toString();
      return l ? `?${l}` : "";
    };
  }
  const bn = "__root__";
  function ua(t) {
    return !!(t == null ? void 0 : t.isRedirect);
  }
  function ed(t) {
    return !!(t == null ? void 0 : t.isRedirect) && t.href;
  }
  function ga(t) {
    const r = t.resolvedLocation, o = t.location, i = (r == null ? void 0 : r.pathname) !== o.pathname, l = (r == null ? void 0 : r.href) !== o.href, u = (r == null ? void 0 : r.hash) !== o.hash;
    return {
      fromLocation: r,
      toLocation: o,
      pathChanged: i,
      hrefChanged: l,
      hashChanged: u
    };
  }
  class n1 {
    constructor(r) {
      this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`, this.resetNextScroll = true, this.shouldViewTransition = void 0, this.isViewTransitionTypesSupported = void 0, this.subscribers = /* @__PURE__ */ new Set(), this.isScrollRestoring = false, this.isScrollRestorationSetup = false, this.startTransition = (o) => o(), this.update = (o) => {
        var i;
        o.notFoundRoute && console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.");
        const l = this.options;
        this.options = {
          ...this.options,
          ...o
        }, this.isServer = this.options.isServer ?? typeof document > "u", this.pathParamsDecodeCharMap = this.options.pathParamsAllowedCharacters ? new Map(this.options.pathParamsAllowedCharacters.map((u) => [
          encodeURIComponent(u),
          u
        ])) : void 0, (!this.basepath || o.basepath && o.basepath !== l.basepath) && (o.basepath === void 0 || o.basepath === "" || o.basepath === "/" ? this.basepath = "/" : this.basepath = `/${PS(o.basepath)}`), (!this.history || this.options.history && this.options.history !== this.history) && (this.history = this.options.history ?? (this.isServer ? US({
          initialEntries: [
            this.basepath || "/"
          ]
        }) : LS()), this.latestLocation = this.parseLocation()), this.options.routeTree !== this.routeTree && (this.routeTree = this.options.routeTree, this.buildRouteTree()), this.__store || (this.__store = new Cd(a1(this.latestLocation), {
          onUpdate: () => {
            this.__store.state = {
              ...this.state,
              cachedMatches: this.state.cachedMatches.filter((u) => ![
                "redirected"
              ].includes(u.status))
            };
          }
        }), QS(this)), typeof window < "u" && "CSS" in window && typeof ((i = window.CSS) == null ? void 0 : i.supports) == "function" && (this.isViewTransitionTypesSupported = window.CSS.supports("selector(:active-view-transition-type(a)"));
      }, this.buildRouteTree = () => {
        this.routesById = {}, this.routesByPath = {};
        const o = this.options.notFoundRoute;
        o && (o.init({
          originalIndex: 99999999999,
          defaultSsr: this.options.defaultSsr
        }), this.routesById[o.id] = o);
        const i = (d) => {
          d.forEach((h, g) => {
            h.init({
              originalIndex: g,
              defaultSsr: this.options.defaultSsr
            });
            const p = this.routesById[h.id];
            if (or(!p, `Duplicate routes found with id: ${String(h.id)}`), this.routesById[h.id] = h, !h.isRoot && h.path) {
              const m = pa(h.fullPath);
              (!this.routesByPath[m] || h.fullPath.endsWith("/")) && (this.routesByPath[m] = h);
            }
            const v = h.children;
            (v == null ? void 0 : v.length) && i(v);
          });
        };
        i([
          this.routeTree
        ]);
        const l = [];
        Object.values(this.routesById).forEach((d, h) => {
          var g;
          if (d.isRoot || !d.path) return;
          const p = rh(d.fullPath), v = Do(p);
          for (; v.length > 1 && ((g = v[0]) == null ? void 0 : g.value) === "/"; ) v.shift();
          const m = v.map((w) => w.value === "/" ? 0.75 : w.type === "param" ? 0.5 : w.type === "wildcard" ? 0.25 : 1);
          l.push({
            child: d,
            trimmed: p,
            parsed: v,
            index: h,
            scores: m
          });
        }), this.flatRoutes = l.sort((d, h) => {
          const g = Math.min(d.scores.length, h.scores.length);
          for (let p = 0; p < g; p++) if (d.scores[p] !== h.scores[p]) return h.scores[p] - d.scores[p];
          if (d.scores.length !== h.scores.length) return h.scores.length - d.scores.length;
          for (let p = 0; p < g; p++) if (d.parsed[p].value !== h.parsed[p].value) return d.parsed[p].value > h.parsed[p].value ? 1 : -1;
          return d.index - h.index;
        }).map((d, h) => (d.child.rank = h, d.child));
      }, this.subscribe = (o, i) => {
        const l = {
          eventType: o,
          fn: i
        };
        return this.subscribers.add(l), () => {
          this.subscribers.delete(l);
        };
      }, this.emit = (o) => {
        this.subscribers.forEach((i) => {
          i.eventType === o.type && i.fn(o);
        });
      }, this.parseLocation = (o, i) => {
        const l = ({ pathname: g, search: p, hash: v, state: m }) => {
          const w = this.options.parseSearch(p), S = this.options.stringifySearch(w);
          return {
            pathname: g,
            searchStr: S,
            search: cn(o == null ? void 0 : o.search, w),
            hash: v.split("#").reverse()[0] ?? "",
            href: `${g}${S}${v}`,
            state: cn(o == null ? void 0 : o.state, m)
          };
        }, u = l(i ?? this.history.location), { __tempLocation: d, __tempKey: h } = u.state;
        if (d && (!h || h === this.tempLocationKey)) {
          const g = l(d);
          return g.state.key = u.state.key, delete g.state.__tempLocation, {
            ...g,
            maskedLocation: u
          };
        }
        return u;
      }, this.resolvePathWithBase = (o, i) => qS({
        basepath: this.basepath,
        base: o,
        to: dc(i),
        trailingSlash: this.options.trailingSlash,
        caseSensitive: this.options.caseSensitive
      }), this.matchRoutes = (o, i, l) => typeof o == "string" ? this.matchRoutesInternal({
        pathname: o,
        search: i
      }, l) : this.matchRoutesInternal(o, i), this.getMatchedRoutes = (o, i) => {
        let l = {};
        const u = pa(o.pathname), d = (v) => Ol(this.basepath, u, {
          to: v.fullPath,
          caseSensitive: v.options.caseSensitive ?? this.options.caseSensitive,
          fuzzy: true
        });
        let h = (i == null ? void 0 : i.to) !== void 0 ? this.routesByPath[i.to] : void 0;
        h ? l = d(h) : h = this.flatRoutes.find((v) => {
          const m = d(v);
          return m ? (l = m, true) : false;
        });
        let g = h || this.routesById[bn];
        const p = [
          g
        ];
        for (; g.parentRoute; ) g = g.parentRoute, p.unshift(g);
        return {
          matchedRoutes: p,
          routeParams: l,
          foundRoute: h
        };
      }, this.cancelMatch = (o) => {
        const i = this.getMatch(o);
        i && (i.abortController.abort(), clearTimeout(i.pendingTimeout));
      }, this.cancelMatches = () => {
        var o;
        (o = this.state.pendingMatches) == null || o.forEach((i) => {
          this.cancelMatch(i.id);
        });
      }, this.buildLocation = (o) => {
        const i = (u = {}, d) => {
          var h, g, p, v, m, w, S;
          const E = u._fromLocation ? this.matchRoutes(u._fromLocation, {
            _buildLocation: true
          }) : this.state.matches, R = u.from != null ? E.find((ee) => Ol(this.basepath, pa(ee.pathname), {
            to: u.from,
            caseSensitive: false,
            fuzzy: false
          })) : void 0, C = (R == null ? void 0 : R.pathname) || this.latestLocation.pathname;
          or(u.from == null || R != null, "Could not find match for from: " + u.from);
          const O = (h = this.state.pendingMatches) != null && h.length ? (g = Eo(this.state.pendingMatches)) == null ? void 0 : g.search : ((p = Eo(E)) == null ? void 0 : p.search) || this.latestLocation.search, k = d == null ? void 0 : d.matchedRoutes.filter((ee) => E.find((re) => re.routeId === ee.id));
          let j;
          if (u.to) {
            const ee = (R == null ? void 0 : R.fullPath) || ((v = Eo(E)) == null ? void 0 : v.fullPath) || this.latestLocation.pathname;
            j = this.resolvePathWithBase(ee, `${u.to}`);
          } else {
            const ee = this.routesById[(m = k == null ? void 0 : k.find((re) => {
              const fe = Al({
                path: re.fullPath,
                params: (d == null ? void 0 : d.routeParams) ?? {},
                decodeCharMap: this.pathParamsDecodeCharMap
              }).interpolatedPath;
              return ir([
                this.basepath,
                fe
              ]) === C;
            })) == null ? void 0 : m.id];
            j = this.resolvePathWithBase(C, (ee == null ? void 0 : ee.to) ?? C);
          }
          const H = {
            ...(w = Eo(E)) == null ? void 0 : w.params
          };
          let q = (u.params ?? true) === true ? H : {
            ...H,
            ...ha(u.params, H)
          };
          Object.keys(q).length > 0 && (d == null ? void 0 : d.matchedRoutes.map((ee) => {
            var re;
            return ((re = ee.options.params) == null ? void 0 : re.stringify) ?? ee.options.stringifyParams;
          }).filter(Boolean).forEach((ee) => {
            q = {
              ...q,
              ...ee(q)
            };
          })), j = Al({
            path: j,
            params: q ?? {},
            leaveWildcards: false,
            leaveParams: o.leaveParams,
            decodeCharMap: this.pathParamsDecodeCharMap
          }).interpolatedPath;
          let V = O;
          if (o._includeValidateSearch && ((S = this.options.search) != null && S.strict)) {
            let ee = {};
            d == null ? void 0 : d.matchedRoutes.forEach((re) => {
              try {
                re.options.validateSearch && (ee = {
                  ...ee,
                  ...td(re.options.validateSearch, {
                    ...ee,
                    ...V
                  }) ?? {}
                });
              } catch {
              }
            }), V = ee;
          }
          V = ((ee) => {
            const re = (d == null ? void 0 : d.matchedRoutes.reduce((A, I) => {
              var B;
              const Z = [];
              if ("search" in I.options) (B = I.options.search) != null && B.middlewares && Z.push(...I.options.search.middlewares);
              else if (I.options.preSearchFilters || I.options.postSearchFilters) {
                const T = ({ search: L, next: $ }) => {
                  let Q = L;
                  "preSearchFilters" in I.options && I.options.preSearchFilters && (Q = I.options.preSearchFilters.reduce((ce, ne) => ne(ce), L));
                  const J = $(Q);
                  return "postSearchFilters" in I.options && I.options.postSearchFilters ? I.options.postSearchFilters.reduce((ce, ne) => ne(ce), J) : J;
                };
                Z.push(T);
              }
              if (o._includeValidateSearch && I.options.validateSearch) {
                const T = ({ search: L, next: $ }) => {
                  const Q = $(L);
                  try {
                    return {
                      ...Q,
                      ...td(I.options.validateSearch, Q) ?? {}
                    };
                  } catch {
                    return Q;
                  }
                };
                Z.push(T);
              }
              return A.concat(Z);
            }, [])) ?? [], fe = ({ search: A }) => u.search ? u.search === true ? A : ha(u.search, A) : {};
            re.push(fe);
            const se = (A, I) => {
              if (A >= re.length) return I;
              const B = re[A];
              return B({
                search: I,
                next: (T) => se(A + 1, T)
              });
            };
            return se(0, ee);
          })(V), V = cn(O, V);
          const D = this.options.stringifySearch(V), U = u.hash === true ? this.latestLocation.hash : u.hash ? ha(u.hash, this.latestLocation.hash) : void 0, ae = U ? `#${U}` : "";
          let ie = u.state === true ? this.latestLocation.state : u.state ? ha(u.state, this.latestLocation.state) : {};
          return ie = cn(this.latestLocation.state, ie), {
            pathname: j,
            search: V,
            searchStr: D,
            state: ie,
            hash: U ?? "",
            href: `${j}${D}${ae}`,
            unmaskOnReload: u.unmaskOnReload
          };
        }, l = (u = {}, d) => {
          var h;
          const g = i(u);
          let p = d ? i(d) : void 0;
          if (!p) {
            let w = {};
            const S = (h = this.options.routeMasks) == null ? void 0 : h.find((E) => {
              const R = Ol(this.basepath, g.pathname, {
                to: E.from,
                caseSensitive: false,
                fuzzy: false
              });
              return R ? (w = R, true) : false;
            });
            if (S) {
              const { from: E, ...R } = S;
              d = {
                ...Ad(o, [
                  "from"
                ]),
                ...R,
                params: w
              }, p = i(d);
            }
          }
          const v = this.getMatchedRoutes(g, u), m = i(u, v);
          if (p) {
            const w = this.getMatchedRoutes(p, d), S = i(d, w);
            m.maskedLocation = S;
          }
          return m;
        };
        return o.mask ? l(o, {
          ...Ad(o, [
            "from"
          ]),
          ...o.mask
        }) : l(o);
      }, this.commitLocation = ({ viewTransition: o, ignoreBlocker: i, ...l }) => {
        const u = () => {
          const g = [
            "key",
            "__TSR_index",
            "__hashScrollIntoViewOptions"
          ];
          g.forEach((v) => {
            l.state[v] = this.latestLocation.state[v];
          });
          const p = Co(l.state, this.latestLocation.state);
          return g.forEach((v) => {
            delete l.state[v];
          }), p;
        }, d = this.latestLocation.href === l.href, h = this.commitLocationPromise;
        if (this.commitLocationPromise = So(() => {
          h == null ? void 0 : h.resolve();
        }), d && u()) this.load();
        else {
          let { maskedLocation: g, hashScrollIntoView: p, ...v } = l;
          g && (v = {
            ...g,
            state: {
              ...g.state,
              __tempKey: void 0,
              __tempLocation: {
                ...v,
                search: v.searchStr,
                state: {
                  ...v.state,
                  __tempKey: void 0,
                  __tempLocation: void 0,
                  key: void 0
                }
              }
            }
          }, (v.unmaskOnReload ?? this.options.unmaskOnReload ?? false) && (v.state.__tempKey = this.tempLocationKey)), v.state.__hashScrollIntoViewOptions = p ?? this.options.defaultHashScrollIntoView ?? true, this.shouldViewTransition = o, this.history[l.replace ? "replace" : "push"](v.href, v.state, {
            ignoreBlocker: i
          });
        }
        return this.resetNextScroll = l.resetScroll ?? true, this.history.subscribers.size || this.load(), this.commitLocationPromise;
      }, this.buildAndCommitLocation = ({ replace: o, resetScroll: i, hashScrollIntoView: l, viewTransition: u, ignoreBlocker: d, href: h, ...g } = {}) => {
        if (h) {
          const v = this.history.location.state.__TSR_index, m = Qi(h, {
            __TSR_index: o ? v : v + 1
          });
          g.to = m.pathname, g.search = this.options.parseSearch(m.search), g.hash = m.hash.slice(1);
        }
        const p = this.buildLocation({
          ...g,
          _includeValidateSearch: true
        });
        return this.commitLocation({
          ...p,
          viewTransition: u,
          replace: o,
          resetScroll: i,
          hashScrollIntoView: l,
          ignoreBlocker: d
        });
      }, this.navigate = ({ to: o, reloadDocument: i, href: l, ...u }) => {
        if (i) {
          if (!l) {
            const d = this.buildLocation({
              to: o,
              ...u
            });
            l = this.history.createHref(d.href);
          }
          u.replace ? window.location.replace(l) : window.location.href = l;
          return;
        }
        return this.buildAndCommitLocation({
          ...u,
          href: l,
          to: o
        });
      }, this.load = async (o) => {
        this.latestLocation = this.parseLocation(this.latestLocation);
        let i, l, u;
        for (u = new Promise((d) => {
          this.startTransition(async () => {
            var h;
            try {
              const g = this.latestLocation, p = this.state.resolvedLocation;
              this.cancelMatches();
              let v;
              go(() => {
                v = this.matchRoutes(g), this.__store.setState((m) => ({
                  ...m,
                  status: "pending",
                  isLoading: true,
                  location: g,
                  pendingMatches: v,
                  cachedMatches: m.cachedMatches.filter((w) => !v.find((S) => S.id === w.id))
                }));
              }), this.state.redirect || this.emit({
                type: "onBeforeNavigate",
                ...ga({
                  resolvedLocation: p,
                  location: g
                })
              }), this.emit({
                type: "onBeforeLoad",
                ...ga({
                  resolvedLocation: p,
                  location: g
                })
              }), await this.loadMatches({
                sync: o == null ? void 0 : o.sync,
                matches: v,
                location: g,
                onReady: async () => {
                  this.startViewTransition(async () => {
                    let m, w, S;
                    go(() => {
                      this.__store.setState((E) => {
                        const R = E.matches, C = E.pendingMatches || E.matches;
                        return m = R.filter((O) => !C.find((k) => k.id === O.id)), w = C.filter((O) => !R.find((k) => k.id === O.id)), S = R.filter((O) => C.find((k) => k.id === O.id)), {
                          ...E,
                          isLoading: false,
                          loadedAt: Date.now(),
                          matches: C,
                          pendingMatches: void 0,
                          cachedMatches: [
                            ...E.cachedMatches,
                            ...m.filter((O) => O.status !== "error")
                          ]
                        };
                      }), this.clearExpiredCache();
                    }), [
                      [
                        m,
                        "onLeave"
                      ],
                      [
                        w,
                        "onEnter"
                      ],
                      [
                        S,
                        "onStay"
                      ]
                    ].forEach(([E, R]) => {
                      E.forEach((C) => {
                        var O, k;
                        (k = (O = this.looseRoutesById[C.routeId].options)[R]) == null || k.call(O, C);
                      });
                    });
                  });
                }
              });
            } catch (g) {
              ed(g) ? (i = g, this.isServer || this.navigate({
                ...i,
                replace: true,
                ignoreBlocker: true
              })) : un(g) && (l = g), this.__store.setState((p) => ({
                ...p,
                statusCode: i ? i.statusCode : l ? 404 : p.matches.some((v) => v.status === "error") ? 500 : 200,
                redirect: i
              }));
            }
            this.latestLoadPromise === u && ((h = this.commitLocationPromise) == null || h.resolve(), this.latestLoadPromise = void 0, this.commitLocationPromise = void 0), d();
          });
        }), this.latestLoadPromise = u, await u; this.latestLoadPromise && u !== this.latestLoadPromise; ) await this.latestLoadPromise;
        this.hasNotFoundMatch() && this.__store.setState((d) => ({
          ...d,
          statusCode: 404
        }));
      }, this.startViewTransition = (o) => {
        const i = this.shouldViewTransition ?? this.options.defaultViewTransition;
        if (delete this.shouldViewTransition, i && typeof document < "u" && "startViewTransition" in document && typeof document.startViewTransition == "function") {
          let l;
          if (typeof i == "object" && this.isViewTransitionTypesSupported) {
            const u = this.latestLocation, d = this.state.resolvedLocation, h = typeof i.types == "function" ? i.types(ga({
              resolvedLocation: d,
              location: u
            })) : i.types;
            l = {
              update: o,
              types: h
            };
          } else l = o;
          document.startViewTransition(l);
        } else o();
      }, this.updateMatch = (o, i) => {
        var l;
        let u;
        const d = (l = this.state.pendingMatches) == null ? void 0 : l.find((v) => v.id === o), h = this.state.matches.find((v) => v.id === o), g = this.state.cachedMatches.find((v) => v.id === o), p = d ? "pendingMatches" : h ? "matches" : g ? "cachedMatches" : "";
        return p && this.__store.setState((v) => {
          var m;
          return {
            ...v,
            [p]: (m = v[p]) == null ? void 0 : m.map((w) => w.id === o ? u = i(w) : w)
          };
        }), u;
      }, this.getMatch = (o) => [
        ...this.state.cachedMatches,
        ...this.state.pendingMatches ?? [],
        ...this.state.matches
      ].find((i) => i.id === o), this.loadMatches = async ({ location: o, matches: i, preload: l, onReady: u, updateMatch: d = this.updateMatch, sync: h }) => {
        let g, p = false;
        const v = async () => {
          p || (p = true, await (u == null ? void 0 : u()));
        }, m = (S) => !!(l && !this.state.matches.find((E) => E.id === S)), w = (S, E) => {
          var R, C, O, k;
          if (ed(E) && !E.reloadDocument) throw E;
          if (ua(E) || un(E)) {
            if (d(S.id, (j) => ({
              ...j,
              status: ua(E) ? "redirected" : un(E) ? "notFound" : "error",
              isFetching: false,
              error: E,
              beforeLoadPromise: void 0,
              loaderPromise: void 0
            })), E.routeId || (E.routeId = S.routeId), (R = S.beforeLoadPromise) == null || R.resolve(), (C = S.loaderPromise) == null || C.resolve(), (O = S.loadPromise) == null || O.resolve(), ua(E)) throw p = true, E = this.resolveRedirect({
              ...E,
              _fromLocation: o
            }), E;
            if (un(E)) throw this._handleNotFound(i, E, {
              updateMatch: d
            }), (k = this.serverSsr) == null || k.onMatchSettled({
              router: this,
              match: this.getMatch(S.id)
            }), E;
          }
        };
        try {
          await new Promise((S, E) => {
            (async () => {
              var R, C, O, k;
              try {
                const j = (V, K, D) => {
                  var U, ae;
                  const { id: ie, routeId: ee } = i[V], re = this.looseRoutesById[ee];
                  if (K instanceof Promise) throw K;
                  K.routerCode = D, g = g ?? V, w(this.getMatch(ie), K);
                  try {
                    (ae = (U = re.options).onError) == null || ae.call(U, K);
                  } catch (fe) {
                    K = fe, w(this.getMatch(ie), K);
                  }
                  d(ie, (fe) => {
                    var se, A;
                    return (se = fe.beforeLoadPromise) == null || se.resolve(), (A = fe.loadPromise) == null || A.resolve(), {
                      ...fe,
                      error: K,
                      status: "error",
                      isFetching: false,
                      updatedAt: Date.now(),
                      abortController: new AbortController(),
                      beforeLoadPromise: void 0
                    };
                  });
                };
                for (const [V, { id: K, routeId: D }] of i.entries()) {
                  const U = this.getMatch(K), ae = (R = i[V - 1]) == null ? void 0 : R.id, ie = this.looseRoutesById[D], ee = ie.options.pendingMs ?? this.options.defaultPendingMs, re = !!(u && !this.isServer && !m(K) && (ie.options.loader || ie.options.beforeLoad || Vv(ie)) && typeof ee == "number" && ee !== 1 / 0 && (ie.options.pendingComponent ?? ((C = this.options) == null ? void 0 : C.defaultPendingComponent)));
                  let fe = true;
                  if ((U.beforeLoadPromise || U.loaderPromise) && (re && setTimeout(() => {
                    try {
                      v();
                    } catch {
                    }
                  }, ee), await U.beforeLoadPromise, fe = this.getMatch(K).status !== "success"), fe) {
                    try {
                      d(K, (le) => {
                        const ue = le.loadPromise;
                        return {
                          ...le,
                          loadPromise: So(() => {
                            ue == null ? void 0 : ue.resolve();
                          }),
                          beforeLoadPromise: So()
                        };
                      });
                      const se = new AbortController();
                      let A;
                      re && (A = setTimeout(() => {
                        try {
                          v();
                        } catch {
                        }
                      }, ee));
                      const { paramsError: I, searchError: B } = this.getMatch(K);
                      I && j(V, I, "PARSE_PARAMS"), B && j(V, B, "VALIDATE_SEARCH");
                      const Z = () => ae ? this.getMatch(ae).context : this.options.context ?? {};
                      d(K, (le) => ({
                        ...le,
                        isFetching: "beforeLoad",
                        fetchCount: le.fetchCount + 1,
                        abortController: se,
                        pendingTimeout: A,
                        context: {
                          ...Z(),
                          ...le.__routeContext
                        }
                      }));
                      const { search: T, params: L, context: $, cause: Q } = this.getMatch(K), J = m(K), ce = {
                        search: T,
                        abortController: se,
                        params: L,
                        preload: J,
                        context: $,
                        location: o,
                        navigate: (le) => this.navigate({
                          ...le,
                          _fromLocation: o
                        }),
                        buildLocation: this.buildLocation,
                        cause: J ? "preload" : Q,
                        matches: i
                      }, ne = await ((k = (O = ie.options).beforeLoad) == null ? void 0 : k.call(O, ce)) ?? {};
                      (ua(ne) || un(ne)) && j(V, ne, "BEFORE_LOAD"), d(K, (le) => ({
                        ...le,
                        __beforeLoadContext: ne,
                        context: {
                          ...Z(),
                          ...le.__routeContext,
                          ...ne
                        },
                        abortController: se
                      }));
                    } catch (se) {
                      j(V, se, "BEFORE_LOAD");
                    }
                    d(K, (se) => {
                      var A;
                      return (A = se.beforeLoadPromise) == null || A.resolve(), {
                        ...se,
                        beforeLoadPromise: void 0,
                        isFetching: false
                      };
                    });
                  }
                }
                const H = i.slice(0, g), q = [];
                H.forEach(({ id: V, routeId: K }, D) => {
                  q.push((async () => {
                    const { loaderPromise: U } = this.getMatch(V);
                    let ae = false, ie = false;
                    if (U) {
                      await U;
                      const ee = this.getMatch(V);
                      ee.error && w(ee, ee.error);
                    } else {
                      const ee = q[D - 1], re = this.looseRoutesById[K], fe = () => {
                        const { params: J, loaderDeps: ce, abortController: ne, context: le, cause: ue } = this.getMatch(V), ye = m(V);
                        return {
                          params: J,
                          deps: ce,
                          preload: !!ye,
                          parentMatchPromise: ee,
                          abortController: ne,
                          context: le,
                          location: o,
                          navigate: (Re) => this.navigate({
                            ...Re,
                            _fromLocation: o
                          }),
                          cause: ye ? "preload" : ue,
                          route: re
                        };
                      }, se = Date.now() - this.getMatch(V).updatedAt, A = m(V), I = A ? re.options.preloadStaleTime ?? this.options.defaultPreloadStaleTime ?? 3e4 : re.options.staleTime ?? this.options.defaultStaleTime ?? 0, B = re.options.shouldReload, Z = typeof B == "function" ? B(fe()) : B;
                      d(V, (J) => ({
                        ...J,
                        loaderPromise: So(),
                        preload: !!A && !this.state.matches.find((ce) => ce.id === V)
                      }));
                      const T = () => {
                        var J, ce, ne, le, ue, ye;
                        const Re = this.getMatch(V);
                        if (!Re) return;
                        const Le = {
                          matches: i,
                          match: Re,
                          params: Re.params,
                          loaderData: Re.loaderData
                        }, Ue = (ce = (J = re.options).head) == null ? void 0 : ce.call(J, Le), Rt = Ue == null ? void 0 : Ue.meta, Mt = Ue == null ? void 0 : Ue.links, Rn = Ue == null ? void 0 : Ue.scripts, At = (le = (ne = re.options).scripts) == null ? void 0 : le.call(ne, Le), Ie = (ye = (ue = re.options).headers) == null ? void 0 : ye.call(ue, Le);
                        d(V, (hn) => ({
                          ...hn,
                          meta: Rt,
                          links: Mt,
                          headScripts: Rn,
                          headers: Ie,
                          scripts: At
                        }));
                      }, L = async () => {
                        var J, ce, ne, le, ue;
                        try {
                          const ye = async () => {
                            const Re = this.getMatch(V);
                            Re.minPendingPromise && await Re.minPendingPromise;
                          };
                          try {
                            this.loadRouteChunk(re), d(V, (Le) => ({
                              ...Le,
                              isFetching: "loader"
                            }));
                            const Re = await ((ce = (J = re.options).loader) == null ? void 0 : ce.call(J, fe()));
                            w(this.getMatch(V), Re), await re._lazyPromise, await ye(), await re._componentsPromise, go(() => {
                              d(V, (Le) => ({
                                ...Le,
                                error: void 0,
                                status: "success",
                                isFetching: false,
                                updatedAt: Date.now(),
                                loaderData: Re
                              })), T();
                            });
                          } catch (Re) {
                            let Le = Re;
                            await ye(), w(this.getMatch(V), Re);
                            try {
                              (le = (ne = re.options).onError) == null || le.call(ne, Re);
                            } catch (Ue) {
                              Le = Ue, w(this.getMatch(V), Ue);
                            }
                            go(() => {
                              d(V, (Ue) => ({
                                ...Ue,
                                error: Le,
                                status: "error",
                                isFetching: false
                              })), T();
                            });
                          }
                          (ue = this.serverSsr) == null || ue.onMatchSettled({
                            router: this,
                            match: this.getMatch(V)
                          });
                        } catch (ye) {
                          go(() => {
                            d(V, (Re) => ({
                              ...Re,
                              loaderPromise: void 0
                            })), T();
                          }), w(this.getMatch(V), ye);
                        }
                      }, { status: $, invalid: Q } = this.getMatch(V);
                      ae = $ === "success" && (Q || (Z ?? se > I)), A && re.options.preload === false || (ae && !h ? (ie = true, (async () => {
                        try {
                          await L();
                          const { loaderPromise: J, loadPromise: ce } = this.getMatch(V);
                          J == null ? void 0 : J.resolve(), ce == null ? void 0 : ce.resolve(), d(V, (ne) => ({
                            ...ne,
                            loaderPromise: void 0
                          }));
                        } catch (J) {
                          ed(J) && await this.navigate(J);
                        }
                      })()) : $ !== "success" || ae && h ? await L() : T());
                    }
                    if (!ie) {
                      const { loaderPromise: ee, loadPromise: re } = this.getMatch(V);
                      ee == null ? void 0 : ee.resolve(), re == null ? void 0 : re.resolve();
                    }
                    return d(V, (ee) => ({
                      ...ee,
                      isFetching: ie ? ee.isFetching : false,
                      loaderPromise: ie ? ee.loaderPromise : void 0,
                      invalid: false
                    })), this.getMatch(V);
                  })());
                }), await Promise.all(q), S();
              } catch (j) {
                E(j);
              }
            })();
          }), await v();
        } catch (S) {
          if (ua(S) || un(S)) throw un(S) && !l && await v(), S;
        }
        return i;
      }, this.invalidate = (o) => {
        const i = (l) => {
          var u;
          return ((u = o == null ? void 0 : o.filter) == null ? void 0 : u.call(o, l)) ?? true ? {
            ...l,
            invalid: true,
            ...l.status === "error" ? {
              status: "pending",
              error: void 0
            } : {}
          } : l;
        };
        return this.__store.setState((l) => {
          var u;
          return {
            ...l,
            matches: l.matches.map(i),
            cachedMatches: l.cachedMatches.map(i),
            pendingMatches: (u = l.pendingMatches) == null ? void 0 : u.map(i)
          };
        }), this.load({
          sync: o == null ? void 0 : o.sync
        });
      }, this.resolveRedirect = (o) => {
        const i = o;
        return i.href || (i.href = this.buildLocation(i).href), i;
      }, this.clearCache = (o) => {
        const i = o == null ? void 0 : o.filter;
        i !== void 0 ? this.__store.setState((l) => ({
          ...l,
          cachedMatches: l.cachedMatches.filter((u) => !i(u))
        })) : this.__store.setState((l) => ({
          ...l,
          cachedMatches: []
        }));
      }, this.clearExpiredCache = () => {
        const o = (i) => {
          const l = this.looseRoutesById[i.routeId];
          if (!l.options.loader) return true;
          const u = (i.preload ? l.options.preloadGcTime ?? this.options.defaultPreloadGcTime : l.options.gcTime ?? this.options.defaultGcTime) ?? 5 * 60 * 1e3;
          return !(i.status !== "error" && Date.now() - i.updatedAt < u);
        };
        this.clearCache({
          filter: o
        });
      }, this.loadRouteChunk = (o) => (o._lazyPromise === void 0 && (o.lazyFn ? o._lazyPromise = o.lazyFn().then((i) => {
        const { id: l, ...u } = i.options;
        Object.assign(o.options, u);
      }) : o._lazyPromise = Promise.resolve()), o._componentsPromise === void 0 && (o._componentsPromise = o._lazyPromise.then(() => Promise.all(sb.map(async (i) => {
        const l = o.options[i];
        (l == null ? void 0 : l.preload) && await l.preload();
      })))), o._componentsPromise), this.preloadRoute = async (o) => {
        const i = this.buildLocation(o);
        let l = this.matchRoutes(i, {
          throwOnError: true,
          preload: true,
          dest: o
        });
        const u = new Set([
          ...this.state.matches,
          ...this.state.pendingMatches ?? []
        ].map((h) => h.id)), d = /* @__PURE__ */ new Set([
          ...u,
          ...this.state.cachedMatches.map((h) => h.id)
        ]);
        go(() => {
          l.forEach((h) => {
            d.has(h.id) || this.__store.setState((g) => ({
              ...g,
              cachedMatches: [
                ...g.cachedMatches,
                h
              ]
            }));
          });
        });
        try {
          return l = await this.loadMatches({
            matches: l,
            location: i,
            preload: true,
            updateMatch: (h, g) => {
              u.has(h) ? l = l.map((p) => p.id === h ? g(p) : p) : this.updateMatch(h, g);
            }
          }), l;
        } catch (h) {
          if (ua(h)) return h.reloadDocument ? void 0 : await this.preloadRoute({
            ...h,
            _fromLocation: i
          });
          un(h) || console.error(h);
          return;
        }
      }, this.matchRoute = (o, i) => {
        const l = {
          ...o,
          to: o.to ? this.resolvePathWithBase(o.from || "", o.to) : void 0,
          params: o.params || {},
          leaveParams: true
        }, u = this.buildLocation(l);
        if ((i == null ? void 0 : i.pending) && this.state.status !== "pending") return false;
        const h = ((i == null ? void 0 : i.pending) === void 0 ? !this.state.isLoading : i.pending) ? this.latestLocation : this.state.resolvedLocation || this.state.location, g = Ol(this.basepath, h.pathname, {
          ...i,
          to: u.pathname
        });
        return !g || o.params && !Co(g, o.params, {
          partial: true
        }) ? false : g && ((i == null ? void 0 : i.includeSearch) ?? true) ? Co(h.search, u.search, {
          partial: true
        }) ? g : false : g;
      }, this._handleNotFound = (o, i, { updateMatch: l = this.updateMatch } = {}) => {
        var u;
        const d = this.routesById[i.routeId ?? ""] ?? this.routeTree, h = {};
        for (const p of o) h[p.routeId] = p;
        !d.options.notFoundComponent && ((u = this.options) != null && u.defaultNotFoundComponent) && (d.options.notFoundComponent = this.options.defaultNotFoundComponent), or(d.options.notFoundComponent);
        const g = h[d.id];
        or(g, "Could not find match for route: " + d.id), l(g.id, (p) => ({
          ...p,
          status: "notFound",
          error: i,
          isFetching: false
        })), i.routerCode === "BEFORE_LOAD" && d.parentRoute && (i.routeId = d.parentRoute.id, this._handleNotFound(o, i, {
          updateMatch: l
        }));
      }, this.hasNotFoundMatch = () => this.__store.state.matches.some((o) => o.status === "notFound" || o.globalNotFound), this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...r,
        caseSensitive: r.caseSensitive ?? false,
        notFoundMode: r.notFoundMode ?? "fuzzy",
        stringifySearch: r.stringifySearch ?? WS,
        parseSearch: r.parseSearch ?? JS
      }), typeof document < "u" && (window.__TSR_ROUTER__ = this);
    }
    get state() {
      return this.__store.state;
    }
    get looseRoutesById() {
      return this.routesById;
    }
    matchRoutesInternal(r, o) {
      const { foundRoute: i, matchedRoutes: l, routeParams: u } = this.getMatchedRoutes(r, o == null ? void 0 : o.dest);
      let d = false;
      (i ? i.path !== "/" && u["**"] : pa(r.pathname)) && (this.options.notFoundRoute ? l.push(this.options.notFoundRoute) : d = true);
      const h = (() => {
        if (d) {
          if (this.options.notFoundMode !== "root") for (let m = l.length - 1; m >= 0; m--) {
            const w = l[m];
            if (w.children) return w.id;
          }
          return bn;
        }
      })(), g = l.map((m) => {
        var w;
        let S;
        const E = ((w = m.options.params) == null ? void 0 : w.parse) ?? m.options.parseParams;
        if (E) try {
          const R = E(u);
          Object.assign(u, R);
        } catch (R) {
          if (S = new r1(R.message, {
            cause: R
          }), o == null ? void 0 : o.throwOnError) throw S;
          return S;
        }
      }), p = [], v = (m) => (m == null ? void 0 : m.id) ? m.context ?? this.options.context ?? {} : this.options.context ?? {};
      return l.forEach((m, w) => {
        var S, E;
        const R = p[w - 1], [C, O, k] = (() => {
          const re = (R == null ? void 0 : R.search) ?? r.search, fe = (R == null ? void 0 : R._strictSearch) ?? {};
          try {
            const se = td(m.options.validateSearch, {
              ...re
            }) ?? {};
            return [
              {
                ...re,
                ...se
              },
              {
                ...fe,
                ...se
              },
              void 0
            ];
          } catch (se) {
            let A = se;
            if (se instanceof ec || (A = new ec(se.message, {
              cause: se
            })), o == null ? void 0 : o.throwOnError) throw A;
            return [
              re,
              {},
              A
            ];
          }
        })(), j = ((E = (S = m.options).loaderDeps) == null ? void 0 : E.call(S, {
          search: C
        })) ?? "", H = j ? JSON.stringify(j) : "", { usedParams: q, interpolatedPath: V } = Al({
          path: m.fullPath,
          params: u,
          decodeCharMap: this.pathParamsDecodeCharMap
        }), K = Al({
          path: m.id,
          params: u,
          leaveWildcards: true,
          decodeCharMap: this.pathParamsDecodeCharMap
        }).interpolatedPath + H, D = this.getMatch(K), U = this.state.matches.find((re) => re.routeId === m.id), ae = U ? "stay" : "enter";
        let ie;
        if (D) ie = {
          ...D,
          cause: ae,
          params: U ? cn(U.params, u) : u,
          _strictParams: q,
          search: cn(U ? U.search : D.search, C),
          _strictSearch: O
        };
        else {
          const re = m.options.loader || m.options.beforeLoad || m.lazyFn || Vv(m) ? "pending" : "success";
          ie = {
            id: K,
            index: w,
            routeId: m.id,
            params: U ? cn(U.params, u) : u,
            _strictParams: q,
            pathname: ir([
              this.basepath,
              V
            ]),
            updatedAt: Date.now(),
            search: U ? cn(U.search, C) : C,
            _strictSearch: O,
            searchError: void 0,
            status: re,
            isFetching: false,
            error: void 0,
            paramsError: g[w],
            __routeContext: {},
            __beforeLoadContext: {},
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: ae,
            loaderDeps: U ? cn(U.loaderDeps, j) : j,
            invalid: false,
            preload: false,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: m.options.staticData || {},
            loadPromise: So(),
            fullPath: m.fullPath
          };
        }
        (o == null ? void 0 : o.preload) || (ie.globalNotFound = h === m.id), ie.searchError = k;
        const ee = v(R);
        ie.context = {
          ...ee,
          ...ie.__routeContext,
          ...ie.__beforeLoadContext
        }, p.push(ie);
      }), p.forEach((m, w) => {
        var S, E;
        const R = this.looseRoutesById[m.routeId];
        if (!this.getMatch(m.id) && (o == null ? void 0 : o._buildLocation) !== true) {
          const O = p[w - 1], k = v(O), j = {
            deps: m.loaderDeps,
            params: m.params,
            context: k,
            location: r,
            navigate: (H) => this.navigate({
              ...H,
              _fromLocation: r
            }),
            buildLocation: this.buildLocation,
            cause: m.cause,
            abortController: m.abortController,
            preload: !!m.preload,
            matches: p
          };
          m.__routeContext = ((E = (S = R.options).context) == null ? void 0 : E.call(S, j)) ?? {}, m.context = {
            ...k,
            ...m.__routeContext,
            ...m.__beforeLoadContext
          };
        }
      }), p;
    }
  }
  class ec extends Error {
  }
  class r1 extends Error {
  }
  function a1(t) {
    return {
      loadedAt: 0,
      isLoading: false,
      isTransitioning: false,
      status: "idle",
      resolvedLocation: void 0,
      location: t,
      matches: [],
      pendingMatches: [],
      cachedMatches: [],
      statusCode: 200
    };
  }
  function td(t, r) {
    if (t == null) return {};
    if ("~standard" in t) {
      const o = t["~standard"].validate(r);
      if (o instanceof Promise) throw new ec("Async validation not supported");
      if (o.issues) throw new ec(JSON.stringify(o.issues, void 0, 2), {
        cause: o
      });
      return o.value;
    }
    return "parse" in t ? t.parse(r) : typeof t == "function" ? t(r) : {};
  }
  const sb = [
    "component",
    "errorComponent",
    "pendingComponent",
    "notFoundComponent"
  ];
  function Vv(t) {
    var r;
    for (const o of sb) if ((r = t.options[o]) != null && r.preload) return true;
    return false;
  }
  const o1 = "Error preloading route! \u261D\uFE0F";
  class lb {
    constructor(r) {
      if (this.init = (o) => {
        var i, l;
        this.originalIndex = o.originalIndex;
        const u = this.options, d = !(u == null ? void 0 : u.path) && !(u == null ? void 0 : u.id);
        if (this.parentRoute = (l = (i = this.options).getParentRoute) == null ? void 0 : l.call(i), d) this._path = bn;
        else if (!this.parentRoute) throw new Error("Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.");
        let h = d ? bn : u == null ? void 0 : u.path;
        h && h !== "/" && (h = rh(h));
        const g = (u == null ? void 0 : u.id) || h;
        let p = d ? bn : ir([
          this.parentRoute.id === bn ? "" : this.parentRoute.id,
          g
        ]);
        h === bn && (h = "/"), p !== bn && (p = ir([
          "/",
          p
        ]));
        const v = p === bn ? "/" : ir([
          this.parentRoute.fullPath,
          h
        ]);
        this._path = h, this._id = p, this._fullPath = v, this._to = v, this._ssr = (u == null ? void 0 : u.ssr) ?? o.defaultSsr ?? true;
      }, this.clone = (o) => {
        this._path = o._path, this._id = o._id, this._fullPath = o._fullPath, this._to = o._to, this._ssr = o._ssr, this.options.getParentRoute = o.options.getParentRoute, this.children = o.children;
      }, this.addChildren = (o) => this._addFileChildren(o), this._addFileChildren = (o) => (Array.isArray(o) && (this.children = o), typeof o == "object" && o !== null && (this.children = Object.values(o)), this), this._addFileTypes = () => this, this.updateLoader = (o) => (Object.assign(this.options, o), this), this.update = (o) => (Object.assign(this.options, o), this), this.lazy = (o) => (this.lazyFn = o, this), this.options = r || {}, this.isRoot = !(r == null ? void 0 : r.getParentRoute), (r == null ? void 0 : r.id) && (r == null ? void 0 : r.path)) throw new Error("Route cannot have both an 'id' and a 'path' option.");
    }
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    get ssr() {
      return this._ssr;
    }
  }
  class i1 extends lb {
    constructor(r) {
      super(r);
    }
  }
  function ah(t) {
    const r = t.errorComponent ?? hc;
    return x.jsx(s1, {
      getResetKey: t.getResetKey,
      onCatch: t.onCatch,
      children: ({ error: o, reset: i }) => o ? b.createElement(r, {
        error: o,
        reset: i
      }) : t.children
    });
  }
  class s1 extends b.Component {
    constructor() {
      super(...arguments), this.state = {
        error: null
      };
    }
    static getDerivedStateFromProps(r) {
      return {
        resetKey: r.getResetKey()
      };
    }
    static getDerivedStateFromError(r) {
      return {
        error: r
      };
    }
    reset() {
      this.setState({
        error: null
      });
    }
    componentDidUpdate(r, o) {
      o.error && o.resetKey !== this.state.resetKey && this.reset();
    }
    componentDidCatch(r, o) {
      this.props.onCatch && this.props.onCatch(r, o);
    }
    render() {
      return this.props.children({
        error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error,
        reset: () => {
          this.reset();
        }
      });
    }
  }
  function hc({ error: t }) {
    const [r, o] = b.useState(false);
    return x.jsxs("div", {
      style: {
        padding: ".5rem",
        maxWidth: "100%"
      },
      children: [
        x.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: ".5rem"
          },
          children: [
            x.jsx("strong", {
              style: {
                fontSize: "1rem"
              },
              children: "Something went wrong!"
            }),
            x.jsx("button", {
              style: {
                appearance: "none",
                fontSize: ".6em",
                border: "1px solid currentColor",
                padding: ".1rem .2rem",
                fontWeight: "bold",
                borderRadius: ".25rem"
              },
              onClick: () => o((i) => !i),
              children: r ? "Hide Error" : "Show Error"
            })
          ]
        }),
        x.jsx("div", {
          style: {
            height: ".25rem"
          }
        }),
        r ? x.jsx("div", {
          children: x.jsx("pre", {
            style: {
              fontSize: ".7em",
              border: "1px solid red",
              borderRadius: ".25rem",
              padding: ".3rem",
              color: "red",
              overflow: "auto"
            },
            children: t.message ? x.jsx("code", {
              children: t.message
            }) : null
          })
        }) : null
      ]
    });
  }
  function l1({ children: t, fallback: r = null }) {
    return c1() ? x.jsx(oe.Fragment, {
      children: t
    }) : x.jsx(oe.Fragment, {
      children: r
    });
  }
  function c1() {
    return oe.useSyncExternalStore(u1, () => true, () => false);
  }
  function u1() {
    return () => {
    };
  }
  var nd = {
    exports: {}
  }, rd = {}, ad = {
    exports: {}
  }, od = {};
  var Yv;
  function f1() {
    if (Yv) return od;
    Yv = 1;
    var t = rs();
    function r(m, w) {
      return m === w && (m !== 0 || 1 / m === 1 / w) || m !== m && w !== w;
    }
    var o = typeof Object.is == "function" ? Object.is : r, i = t.useState, l = t.useEffect, u = t.useLayoutEffect, d = t.useDebugValue;
    function h(m, w) {
      var S = w(), E = i({
        inst: {
          value: S,
          getSnapshot: w
        }
      }), R = E[0].inst, C = E[1];
      return u(function() {
        R.value = S, R.getSnapshot = w, g(R) && C({
          inst: R
        });
      }, [
        m,
        S,
        w
      ]), l(function() {
        return g(R) && C({
          inst: R
        }), m(function() {
          g(R) && C({
            inst: R
          });
        });
      }, [
        m
      ]), d(S), S;
    }
    function g(m) {
      var w = m.getSnapshot;
      m = m.value;
      try {
        var S = w();
        return !o(m, S);
      } catch {
        return true;
      }
    }
    function p(m, w) {
      return w();
    }
    var v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : h;
    return od.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : v, od;
  }
  var Kv;
  function d1() {
    return Kv || (Kv = 1, ad.exports = f1()), ad.exports;
  }
  var Iv;
  function h1() {
    if (Iv) return rd;
    Iv = 1;
    var t = rs(), r = d1();
    function o(p, v) {
      return p === v && (p !== 0 || 1 / p === 1 / v) || p !== p && v !== v;
    }
    var i = typeof Object.is == "function" ? Object.is : o, l = r.useSyncExternalStore, u = t.useRef, d = t.useEffect, h = t.useMemo, g = t.useDebugValue;
    return rd.useSyncExternalStoreWithSelector = function(p, v, m, w, S) {
      var E = u(null);
      if (E.current === null) {
        var R = {
          hasValue: false,
          value: null
        };
        E.current = R;
      } else R = E.current;
      E = h(function() {
        function O(V) {
          if (!k) {
            if (k = true, j = V, V = w(V), S !== void 0 && R.hasValue) {
              var K = R.value;
              if (S(K, V)) return H = K;
            }
            return H = V;
          }
          if (K = H, i(j, V)) return K;
          var D = w(V);
          return S !== void 0 && S(K, D) ? (j = V, K) : (j = V, H = D);
        }
        var k = false, j, H, q = m === void 0 ? null : m;
        return [
          function() {
            return O(v());
          },
          q === null ? void 0 : function() {
            return O(q());
          }
        ];
      }, [
        v,
        m,
        w,
        S
      ]);
      var C = l(p, E[0], E[1]);
      return d(function() {
        R.hasValue = true, R.value = C;
      }, [
        C
      ]), g(C), C;
    }, rd;
  }
  var Qv;
  function p1() {
    return Qv || (Qv = 1, nd.exports = h1()), nd.exports;
  }
  var m1 = p1();
  function g1(t, r = (o) => o) {
    return m1.useSyncExternalStoreWithSelector(t.subscribe, () => t.state, () => t.state, r, v1);
  }
  function v1(t, r) {
    if (Object.is(t, r)) return true;
    if (typeof t != "object" || t === null || typeof r != "object" || r === null) return false;
    if (t instanceof Map && r instanceof Map) {
      if (t.size !== r.size) return false;
      for (const [i, l] of t) if (!r.has(i) || !Object.is(l, r.get(i))) return false;
      return true;
    }
    if (t instanceof Set && r instanceof Set) {
      if (t.size !== r.size) return false;
      for (const i of t) if (!r.has(i)) return false;
      return true;
    }
    const o = Object.keys(t);
    if (o.length !== Object.keys(r).length) return false;
    for (let i = 0; i < o.length; i++) if (!Object.prototype.hasOwnProperty.call(r, o[i]) || !Object.is(t[o[i]], r[o[i]])) return false;
    return true;
  }
  const id = b.createContext(null);
  function cb() {
    return typeof document > "u" ? id : window.__TSR_ROUTER_CONTEXT__ ? window.__TSR_ROUTER_CONTEXT__ : (window.__TSR_ROUTER_CONTEXT__ = id, id);
  }
  function Bn(t) {
    const r = b.useContext(cb());
    return t == null ? void 0 : t.warn, r;
  }
  function Et(t) {
    const r = Bn({
      warn: (t == null ? void 0 : t.router) === void 0
    }), o = (t == null ? void 0 : t.router) || r, i = b.useRef(void 0);
    return g1(o.__store, (l) => {
      if (t == null ? void 0 : t.select) {
        if (t.structuralSharing ?? o.options.defaultStructuralSharing) {
          const u = cn(i.current, t.select(l));
          return i.current = u, u;
        }
        return t.select(l);
      }
      return l;
    });
  }
  const pc = b.createContext(void 0), y1 = b.createContext(void 0);
  function Br(t) {
    const r = b.useContext(t.from ? y1 : pc);
    return Et({
      select: (i) => {
        const l = i.matches.find((u) => t.from ? t.from === u.routeId : u.id === r);
        if (or(!((t.shouldThrow ?? true) && !l), `Could not find ${t.from ? `an active match from "${t.from}"` : "a nearest match!"}`), l !== void 0) return t.select ? t.select(l) : l;
      },
      structuralSharing: t.structuralSharing
    });
  }
  function ub(t) {
    return Br({
      from: t.from,
      strict: t.strict,
      structuralSharing: t.structuralSharing,
      select: (r) => t.select ? t.select(r.loaderData) : r.loaderData
    });
  }
  function fb(t) {
    const { select: r, ...o } = t;
    return Br({
      ...o,
      select: (i) => r ? r(i.loaderDeps) : i.loaderDeps
    });
  }
  function db(t) {
    return Br({
      from: t.from,
      strict: t.strict,
      shouldThrow: t.shouldThrow,
      structuralSharing: t.structuralSharing,
      select: (r) => t.select ? t.select(r.params) : r.params
    });
  }
  function hb(t) {
    return Br({
      from: t.from,
      strict: t.strict,
      shouldThrow: t.shouldThrow,
      structuralSharing: t.structuralSharing,
      select: (r) => t.select ? t.select(r.search) : r.search
    });
  }
  function oh(t) {
    const { navigate: r } = Bn();
    return b.useCallback((o) => r({
      from: t == null ? void 0 : t.from,
      ...o
    }), [
      t == null ? void 0 : t.from,
      r
    ]);
  }
  mc = nb();
  const pb = th(mc), Yi = typeof window < "u" ? b.useLayoutEffect : b.useEffect;
  function sd(t) {
    const r = b.useRef({
      value: t,
      prev: null
    }), o = r.current.value;
    return t !== o && (r.current = {
      value: t,
      prev: o
    }), r.current.prev;
  }
  function b1(t, r, o = {}, i = {}) {
    const l = b.useRef(typeof IntersectionObserver == "function"), u = b.useRef(null);
    return b.useEffect(() => {
      if (!(!t.current || !l.current || i.disabled)) return u.current = new IntersectionObserver(([d]) => {
        r(d);
      }, o), u.current.observe(t.current), () => {
        var d;
        (d = u.current) == null || d.disconnect();
      };
    }, [
      r,
      o,
      i.disabled,
      t
    ]), u.current;
  }
  function _1(t) {
    const r = b.useRef(null);
    return b.useImperativeHandle(t, () => r.current, []), r;
  }
  function w1() {
    const t = Bn(), r = b.useRef({
      router: t,
      mounted: false
    }), o = Et({
      select: ({ isLoading: m }) => m
    }), [i, l] = b.useState(false), u = Et({
      select: (m) => m.matches.some((w) => w.status === "pending"),
      structuralSharing: true
    }), d = sd(o), h = o || i || u, g = sd(h), p = o || u, v = sd(p);
    return t.isServer || (t.startTransition = (m) => {
      l(true), b.startTransition(() => {
        m(), l(false);
      });
    }), b.useEffect(() => {
      const m = t.history.subscribe(t.load), w = t.buildLocation({
        to: t.latestLocation.pathname,
        search: true,
        params: true,
        hash: true,
        state: true,
        _includeValidateSearch: true
      });
      return pa(t.latestLocation.href) !== pa(w.href) && t.commitLocation({
        ...w,
        replace: true
      }), () => {
        m();
      };
    }, [
      t,
      t.history
    ]), Yi(() => {
      if (typeof window < "u" && t.clientSsr || r.current.router === t && r.current.mounted) return;
      r.current = {
        router: t,
        mounted: true
      }, (async () => {
        try {
          await t.load();
        } catch (w) {
          console.error(w);
        }
      })();
    }, [
      t
    ]), Yi(() => {
      d && !o && t.emit({
        type: "onLoad",
        ...ga(t.state)
      });
    }, [
      d,
      t,
      o
    ]), Yi(() => {
      v && !p && t.emit({
        type: "onBeforeRouteMount",
        ...ga(t.state)
      });
    }, [
      p,
      v,
      t
    ]), Yi(() => {
      g && !h && (t.emit({
        type: "onResolved",
        ...ga(t.state)
      }), t.__store.setState((m) => ({
        ...m,
        status: "idle",
        resolvedLocation: m.location
      })), XS(t));
    }, [
      h,
      g,
      t
    ]), null;
  }
  function x1(t) {
    const r = Et({
      select: (o) => `not-found-${o.location.pathname}-${o.status}`
    });
    return x.jsx(ah, {
      getResetKey: () => r,
      onCatch: (o, i) => {
        var l;
        if (un(o)) (l = t.onCatch) == null || l.call(t, o, i);
        else throw o;
      },
      errorComponent: ({ error: o }) => {
        var i;
        if (un(o)) return (i = t.fallback) == null ? void 0 : i.call(t, o);
        throw o;
      },
      children: t.children
    });
  }
  function S1() {
    return x.jsx("p", {
      children: "Not Found"
    });
  }
  function Fl(t) {
    return x.jsx(x.Fragment, {
      children: t.children
    });
  }
  function mb(t, r, o) {
    return r.options.notFoundComponent ? x.jsx(r.options.notFoundComponent, {
      data: o
    }) : t.options.defaultNotFoundComponent ? x.jsx(t.options.defaultNotFoundComponent, {
      data: o
    }) : x.jsx(S1, {});
  }
  var ld, Xv;
  function E1() {
    if (Xv) return ld;
    Xv = 1;
    const t = {}, r = t.hasOwnProperty, o = (D, U) => {
      for (const ae in D) r.call(D, ae) && U(ae, D[ae]);
    }, i = (D, U) => (U && o(U, (ae, ie) => {
      D[ae] = ie;
    }), D), l = (D, U) => {
      const ae = D.length;
      let ie = -1;
      for (; ++ie < ae; ) U(D[ie]);
    }, u = (D) => "\\u" + ("0000" + D).slice(-4), d = (D, U) => {
      let ae = D.toString(16);
      return U ? ae : ae.toUpperCase();
    }, h = t.toString, g = Array.isArray, p = (D) => typeof Buffer == "function" && Buffer.isBuffer(D), v = (D) => h.call(D) == "[object Object]", m = (D) => typeof D == "string" || h.call(D) == "[object String]", w = (D) => typeof D == "number" || h.call(D) == "[object Number]", S = (D) => typeof D == "bigint", E = (D) => typeof D == "function", R = (D) => h.call(D) == "[object Map]", C = (D) => h.call(D) == "[object Set]", O = {
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t"
    }, k = /[\\\b\f\n\r\t]/, j = /[0-9]/, H = /[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, q = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g, V = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g, K = (D, U) => {
      const ae = () => {
        I = A, ++U.indentLevel, A = U.indent.repeat(U.indentLevel);
      }, ie = {
        escapeEverything: false,
        minimal: false,
        isScriptContext: false,
        quotes: "single",
        wrap: false,
        es6: false,
        json: false,
        compact: true,
        lowercaseHex: false,
        numbers: "decimal",
        indent: "	",
        indentLevel: 0,
        __inline1__: false,
        __inline2__: false
      }, ee = U && U.json;
      ee && (ie.quotes = "double", ie.wrap = true), U = i(ie, U), U.quotes != "single" && U.quotes != "double" && U.quotes != "backtick" && (U.quotes = "single");
      const re = U.quotes == "double" ? '"' : U.quotes == "backtick" ? "`" : "'", fe = U.compact, se = U.lowercaseHex;
      let A = U.indent.repeat(U.indentLevel), I = "";
      const B = U.__inline1__, Z = U.__inline2__, T = fe ? "" : `
`;
      let L, $ = true;
      const Q = U.numbers == "binary", J = U.numbers == "octal", ce = U.numbers == "decimal", ne = U.numbers == "hexadecimal";
      if (ee && D && E(D.toJSON) && (D = D.toJSON()), !m(D)) {
        if (R(D)) return D.size == 0 ? "new Map()" : (fe || (U.__inline1__ = true, U.__inline2__ = false), "new Map(" + K(Array.from(D), U) + ")");
        if (C(D)) return D.size == 0 ? "new Set()" : "new Set(" + K(Array.from(D), U) + ")";
        if (p(D)) return D.length == 0 ? "Buffer.from([])" : "Buffer.from(" + K(Array.from(D), U) + ")";
        if (g(D)) return L = [], U.wrap = true, B && (U.__inline1__ = false, U.__inline2__ = true), Z || ae(), l(D, (ue) => {
          $ = false, Z && (U.__inline2__ = false), L.push((fe || Z ? "" : A) + K(ue, U));
        }), $ ? "[]" : Z ? "[" + L.join(", ") + "]" : "[" + T + L.join("," + T) + T + (fe ? "" : I) + "]";
        if (w(D) || S(D)) {
          if (ee) return JSON.stringify(Number(D));
          let ue;
          if (ce) ue = String(D);
          else if (ne) {
            let ye = D.toString(16);
            se || (ye = ye.toUpperCase()), ue = "0x" + ye;
          } else Q ? ue = "0b" + D.toString(2) : J && (ue = "0o" + D.toString(8));
          return S(D) ? ue + "n" : ue;
        } else return S(D) ? ee ? JSON.stringify(Number(D)) : D + "n" : v(D) ? (L = [], U.wrap = true, ae(), o(D, (ue, ye) => {
          $ = false, L.push((fe ? "" : A) + K(ue, U) + ":" + (fe ? "" : " ") + K(ye, U));
        }), $ ? "{}" : "{" + T + L.join("," + T) + T + (fe ? "" : I) + "}") : ee ? JSON.stringify(D) || "null" : String(D);
      }
      const le = U.escapeEverything ? q : V;
      return L = D.replace(le, (ue, ye, Re, Le, Ue, Rt) => {
        if (ye) {
          if (U.minimal) return ye;
          const Rn = ye.charCodeAt(0), At = ye.charCodeAt(1);
          if (U.es6) {
            const Ie = (Rn - 55296) * 1024 + At - 56320 + 65536;
            return "\\u{" + d(Ie, se) + "}";
          }
          return u(d(Rn, se)) + u(d(At, se));
        }
        if (Re) return u(d(Re.charCodeAt(0), se));
        if (ue == "\0" && !ee && !j.test(Rt.charAt(Ue + 1))) return "\\0";
        if (Le) return Le == re || U.escapeEverything ? "\\" + Le : Le;
        if (k.test(ue)) return O[ue];
        if (U.minimal && !H.test(ue)) return ue;
        const Mt = d(ue.charCodeAt(0), se);
        return ee || Mt.length > 2 ? u(Mt) : "\\x" + ("00" + Mt).slice(-2);
      }), re == "`" && (L = L.replace(/\$\{/g, "\\${")), U.isScriptContext && (L = L.replace(/<\/(script|style)/gi, "<\\/$1").replace(/<!--/g, ee ? "\\u003C!--" : "\\x3C!--")), U.wrap && (L = re + L + re), L;
    };
    return K.version = "3.0.2", ld = K, ld;
  }
  E1();
  function R1({ children: t, log: r }) {
    return typeof document < "u" ? null : x.jsx("script", {
      className: "tsr-once",
      dangerouslySetInnerHTML: {
        __html: [
          t,
          "",
          'if (typeof __TSR_SSR__ !== "undefined") __TSR_SSR__.cleanScripts()'
        ].filter(Boolean).join(`
`)
      }
    });
  }
  function T1() {
    const t = Bn(), o = (t.options.getScrollRestorationKey || Dd)(t.latestLocation), i = o !== Dd(t.latestLocation) ? o : null;
    return !t.isScrollRestoring || !t.isServer ? null : x.jsx(R1, {
      children: `(${ib.toString()})(${JSON.stringify(Jl)},${JSON.stringify(i)}, undefined, true)`,
      log: false
    });
  }
  const gb = b.memo(function({ matchId: r }) {
    var o, i;
    const l = Bn(), u = Et({
      select: (O) => {
        var k;
        return (k = O.matches.find((j) => j.id === r)) == null ? void 0 : k.routeId;
      }
    });
    or(u);
    const d = l.routesById[u], h = d.options.pendingComponent ?? l.options.defaultPendingComponent, g = h ? x.jsx(h, {}) : null, p = d.options.errorComponent ?? l.options.defaultErrorComponent, v = d.options.onCatch ?? l.options.defaultOnCatch, m = d.isRoot ? d.options.notFoundComponent ?? ((o = l.options.notFoundRoute) == null ? void 0 : o.options.component) : d.options.notFoundComponent, w = (!d.isRoot || d.options.wrapInSuspense) && (d.options.wrapInSuspense ?? h ?? ((i = d.options.errorComponent) == null ? void 0 : i.preload)) ? b.Suspense : Fl, S = p ? ah : Fl, E = m ? x1 : Fl, R = Et({
      select: (O) => O.loadedAt
    }), C = Et({
      select: (O) => {
        var k;
        const j = O.matches.findIndex((H) => H.id === r);
        return (k = O.matches[j - 1]) == null ? void 0 : k.routeId;
      }
    });
    return x.jsxs(x.Fragment, {
      children: [
        x.jsx(pc.Provider, {
          value: r,
          children: x.jsx(w, {
            fallback: g,
            children: x.jsx(S, {
              getResetKey: () => R,
              errorComponent: p || hc,
              onCatch: (O, k) => {
                if (un(O)) throw O;
                v == null ? void 0 : v(O, k);
              },
              children: x.jsx(E, {
                fallback: (O) => {
                  if (!m || O.routeId && O.routeId !== u || !O.routeId && !d.isRoot) throw O;
                  return b.createElement(m, O);
                },
                children: x.jsx(M1, {
                  matchId: r
                })
              })
            })
          })
        }),
        C === bn && l.options.scrollRestoration ? x.jsxs(x.Fragment, {
          children: [
            x.jsx(C1, {}),
            x.jsx(T1, {})
          ]
        }) : null
      ]
    });
  });
  function C1() {
    const t = Bn(), r = b.useRef(void 0);
    return x.jsx("script", {
      suppressHydrationWarning: true,
      ref: (o) => {
        o && (r.current === void 0 || r.current.href !== t.latestLocation.href) && (t.emit({
          type: "onRendered",
          ...ga(t.state)
        }), r.current = t.latestLocation);
      }
    }, t.latestLocation.state.key);
  }
  const M1 = b.memo(function({ matchId: r }) {
    var o, i, l;
    const u = Bn(), { match: d, key: h, routeId: g } = Et({
      select: (w) => {
        const S = w.matches.findIndex((j) => j.id === r), E = w.matches[S], R = E.routeId, C = u.routesById[R].options.remountDeps ?? u.options.defaultRemountDeps, O = C == null ? void 0 : C({
          routeId: R,
          loaderDeps: E.loaderDeps,
          params: E._strictParams,
          search: E._strictSearch
        });
        return {
          key: O ? JSON.stringify(O) : void 0,
          routeId: R,
          match: Ad(E, [
            "id",
            "status",
            "error"
          ])
        };
      },
      structuralSharing: true
    }), p = u.routesById[g], v = b.useMemo(() => {
      const w = p.options.component ?? u.options.defaultComponent;
      return w ? x.jsx(w, {}, h) : x.jsx(ih, {});
    }, [
      h,
      p.options.component,
      u.options.defaultComponent
    ]), m = (p.options.errorComponent ?? u.options.defaultErrorComponent) || hc;
    if (d.status === "notFound") return or(un(d.error)), mb(u, p, d.error);
    if (d.status === "redirected") throw or(ua(d.error)), (o = u.getMatch(d.id)) == null ? void 0 : o.loadPromise;
    if (d.status === "error") {
      if (u.isServer) return x.jsx(m, {
        error: d.error,
        reset: void 0,
        info: {
          componentStack: ""
        }
      });
      throw d.error;
    }
    if (d.status === "pending") {
      const w = p.options.pendingMinMs ?? u.options.defaultPendingMinMs;
      if (w && !((i = u.getMatch(d.id)) != null && i.minPendingPromise) && !u.isServer) {
        const S = So();
        Promise.resolve().then(() => {
          u.updateMatch(d.id, (E) => ({
            ...E,
            minPendingPromise: S
          }));
        }), setTimeout(() => {
          S.resolve(), u.updateMatch(d.id, (E) => ({
            ...E,
            minPendingPromise: void 0
          }));
        }, w);
      }
      throw (l = u.getMatch(d.id)) == null ? void 0 : l.loadPromise;
    }
    return v;
  }), ih = b.memo(function() {
    const r = Bn(), o = b.useContext(pc), i = Et({
      select: (p) => {
        var v;
        return (v = p.matches.find((m) => m.id === o)) == null ? void 0 : v.routeId;
      }
    }), l = r.routesById[i], u = Et({
      select: (p) => {
        const m = p.matches.find((w) => w.id === o);
        return or(m), m.globalNotFound;
      }
    }), d = Et({
      select: (p) => {
        var v;
        const m = p.matches, w = m.findIndex((S) => S.id === o);
        return (v = m[w + 1]) == null ? void 0 : v.id;
      }
    });
    if (u) return mb(r, l, void 0);
    if (!d) return null;
    const h = x.jsx(gb, {
      matchId: d
    }), g = r.options.defaultPendingComponent ? x.jsx(r.options.defaultPendingComponent, {}) : null;
    return o === bn ? x.jsx(b.Suspense, {
      fallback: g,
      children: h
    }) : h;
  });
  function A1() {
    const t = Bn(), r = t.options.defaultPendingComponent ? x.jsx(t.options.defaultPendingComponent, {}) : null, o = t.isServer || typeof document < "u" && t.clientSsr ? Fl : b.Suspense, i = x.jsxs(o, {
      fallback: r,
      children: [
        x.jsx(w1, {}),
        x.jsx(O1, {})
      ]
    });
    return t.options.InnerWrap ? x.jsx(t.options.InnerWrap, {
      children: i
    }) : i;
  }
  function O1() {
    const t = Et({
      select: (o) => {
        var i;
        return (i = o.matches[0]) == null ? void 0 : i.id;
      }
    }), r = Et({
      select: (o) => o.loadedAt
    });
    return x.jsx(pc.Provider, {
      value: t,
      children: x.jsx(ah, {
        getResetKey: () => r,
        errorComponent: hc,
        onCatch: (o) => {
          o.message || o.toString();
        },
        children: t ? x.jsx(gb, {
          matchId: t
        }) : null
      })
    });
  }
  function D1(t) {
    return Et({
      select: (r) => {
        const o = r.matches;
        return (t == null ? void 0 : t.select) ? t.select(o) : o;
      },
      structuralSharing: t == null ? void 0 : t.structuralSharing
    });
  }
  function N1(t, r) {
    const o = Bn(), [i, l] = b.useState(false), u = b.useRef(false), d = _1(r), { activeProps: h = () => ({
      className: "active"
    }), inactiveProps: g = () => ({}), activeOptions: p, to: v, preload: m, preloadDelay: w, hashScrollIntoView: S, replace: E, startTransition: R, resetScroll: C, viewTransition: O, children: k, target: j, disabled: H, style: q, className: V, onClick: K, onFocus: D, onMouseEnter: U, onMouseLeave: ae, onTouchStart: ie, ignoreBlocker: ee, ...re } = t, { params: fe, search: se, hash: A, state: I, mask: B, reloadDocument: Z, ...T } = re, L = b.useMemo(() => {
      try {
        return new URL(`${v}`), "external";
      } catch {
      }
      return "internal";
    }, [
      v
    ]), $ = Et({
      select: (je) => je.location.search,
      structuralSharing: true
    }), Q = D1({
      select: (je) => {
        var Ae;
        return t.from ?? ((Ae = je[je.length - 1]) == null ? void 0 : Ae.fullPath);
      }
    }), J = b.useMemo(() => ({
      ...t,
      from: Q
    }), [
      t,
      Q
    ]), ce = b.useMemo(() => o.buildLocation(J), [
      o,
      J,
      $
    ]), ne = b.useMemo(() => J.reloadDocument ? false : m ?? o.options.defaultPreload, [
      o.options.defaultPreload,
      m,
      J.reloadDocument
    ]), le = w ?? o.options.defaultPreloadDelay ?? 0, ue = Et({
      select: (je) => {
        if (p == null ? void 0 : p.exact) {
          if (!HS(je.location.pathname, ce.pathname, o.basepath)) return false;
        } else {
          const Ae = $l(je.location.pathname, o.basepath).split("/");
          if (!$l(ce.pathname, o.basepath).split("/").every((Fo, Jt) => Fo === Ae[Jt])) return false;
        }
        return ((p == null ? void 0 : p.includeSearch) ?? true) && !Co(je.location.search, ce.search, {
          partial: !(p == null ? void 0 : p.exact),
          ignoreUndefined: !(p == null ? void 0 : p.explicitUndefined)
        }) ? false : (p == null ? void 0 : p.includeHash) ? je.location.hash === ce.hash : true;
      }
    }), ye = b.useCallback(() => {
      o.preloadRoute(J).catch((je) => {
        console.warn(je), console.warn(o1);
      });
    }, [
      J,
      o
    ]), Re = b.useCallback((je) => {
      (je == null ? void 0 : je.isIntersecting) && ye();
    }, [
      ye
    ]);
    if (b1(d, Re, {
      rootMargin: "100px"
    }, {
      disabled: !!H || ne !== "viewport"
    }), Yi(() => {
      u.current || !H && ne === "render" && (ye(), u.current = true);
    }, [
      H,
      ye,
      ne
    ]), L === "external") return {
      ...T,
      ref: d,
      type: L,
      href: v,
      ...k && {
        children: k
      },
      ...j && {
        target: j
      },
      ...H && {
        disabled: H
      },
      ...q && {
        style: q
      },
      ...V && {
        className: V
      },
      ...K && {
        onClick: K
      },
      ...D && {
        onFocus: D
      },
      ...U && {
        onMouseEnter: U
      },
      ...ae && {
        onMouseLeave: ae
      },
      ...ie && {
        onTouchStart: ie
      }
    };
    const Le = (je) => {
      if (!H && !j1(je) && !je.defaultPrevented && (!j || j === "_self") && je.button === 0) {
        je.preventDefault(), mc.flushSync(() => {
          l(true);
        });
        const Ae = o.subscribe("onResolved", () => {
          Ae(), l(false);
        });
        return o.navigate({
          ...J,
          replace: E,
          resetScroll: C,
          hashScrollIntoView: S,
          startTransition: R,
          viewTransition: O,
          ignoreBlocker: ee
        });
      }
    }, Ue = (je) => {
      H || ne && ye();
    }, Rt = Ue, Mt = (je) => {
      if (H) return;
      const Ae = je.target || {};
      if (ne) {
        if (Ae.preloadTimeout) return;
        Ae.preloadTimeout = setTimeout(() => {
          Ae.preloadTimeout = null, ye();
        }, le);
      }
    }, Rn = (je) => {
      if (H) return;
      const Ae = je.target || {};
      Ae.preloadTimeout && (clearTimeout(Ae.preloadTimeout), Ae.preloadTimeout = null);
    }, At = (je) => (Ae) => {
      var Ht;
      (Ht = Ae.persist) == null || Ht.call(Ae), je.filter(Boolean).forEach((Ca) => {
        Ae.defaultPrevented || Ca(Ae);
      });
    }, Ie = ue ? ha(h, {}) ?? {} : {}, hn = ue ? {} : ha(g, {}), Ot = [
      V,
      Ie.className,
      hn.className
    ].filter(Boolean).join(" "), Gr = {
      ...q,
      ...Ie.style,
      ...hn.style
    };
    return {
      ...T,
      ...Ie,
      ...hn,
      href: H ? void 0 : ce.maskedLocation ? o.history.createHref(ce.maskedLocation.href) : o.history.createHref(ce.href),
      ref: d,
      onClick: At([
        K,
        Le
      ]),
      onFocus: At([
        D,
        Ue
      ]),
      onMouseEnter: At([
        U,
        Mt
      ]),
      onMouseLeave: At([
        ae,
        Rn
      ]),
      onTouchStart: At([
        ie,
        Rt
      ]),
      disabled: !!H,
      target: j,
      ...Object.keys(Gr).length && {
        style: Gr
      },
      ...Ot && {
        className: Ot
      },
      ...H && {
        role: "link",
        "aria-disabled": true
      },
      ...ue && {
        "data-status": "active",
        "aria-current": "page"
      },
      ...i && {
        "data-transitioning": "transitioning"
      }
    };
  }
  const sh = b.forwardRef((t, r) => {
    const { _asChild: o, ...i } = t, { type: l, ref: u, ...d } = N1(i, r), h = typeof i.children == "function" ? i.children({
      isActive: d["data-status"] === "active"
    }) : i.children;
    return typeof o > "u" && delete d.disabled, b.createElement(o || "a", {
      ...d,
      ref: u
    }, h);
  });
  function j1(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
  }
  let z1 = class extends lb {
    constructor(r) {
      super(r), this.useMatch = (o) => Br({
        select: o == null ? void 0 : o.select,
        from: this.id,
        structuralSharing: o == null ? void 0 : o.structuralSharing
      }), this.useRouteContext = (o) => Br({
        ...o,
        from: this.id,
        select: (i) => (o == null ? void 0 : o.select) ? o.select(i.context) : i.context
      }), this.useSearch = (o) => hb({
        select: o == null ? void 0 : o.select,
        structuralSharing: o == null ? void 0 : o.structuralSharing,
        from: this.id
      }), this.useParams = (o) => db({
        select: o == null ? void 0 : o.select,
        structuralSharing: o == null ? void 0 : o.structuralSharing,
        from: this.id
      }), this.useLoaderDeps = (o) => fb({
        ...o,
        from: this.id
      }), this.useLoaderData = (o) => ub({
        ...o,
        from: this.id
      }), this.useNavigate = () => oh({
        from: this.fullPath
      }), this.Link = oe.forwardRef((o, i) => x.jsx(sh, {
        ref: i,
        from: this.fullPath,
        ...o
      })), this.$$typeof = Symbol.for("react.memo");
    }
  };
  function k1(t) {
    return new z1(t);
  }
  function L1() {
    return (t) => B1(t);
  }
  class U1 extends i1 {
    constructor(r) {
      super(r), this.useMatch = (o) => Br({
        select: o == null ? void 0 : o.select,
        from: this.id,
        structuralSharing: o == null ? void 0 : o.structuralSharing
      }), this.useRouteContext = (o) => Br({
        ...o,
        from: this.id,
        select: (i) => (o == null ? void 0 : o.select) ? o.select(i.context) : i.context
      }), this.useSearch = (o) => hb({
        select: o == null ? void 0 : o.select,
        structuralSharing: o == null ? void 0 : o.structuralSharing,
        from: this.id
      }), this.useParams = (o) => db({
        select: o == null ? void 0 : o.select,
        structuralSharing: o == null ? void 0 : o.structuralSharing,
        from: this.id
      }), this.useLoaderDeps = (o) => fb({
        ...o,
        from: this.id
      }), this.useLoaderData = (o) => ub({
        ...o,
        from: this.id
      }), this.useNavigate = () => oh({
        from: this.fullPath
      }), this.Link = oe.forwardRef((o, i) => x.jsx(sh, {
        ref: i,
        from: this.fullPath,
        ...o
      })), this.$$typeof = Symbol.for("react.memo");
    }
  }
  function B1(t) {
    return new U1(t);
  }
  function as(t) {
    return new P1(t, {
      silent: true
    }).createRoute;
  }
  class P1 {
    constructor(r, o) {
      this.path = r, this.createRoute = (i) => {
        this.silent;
        const l = k1(i);
        return l.isRoot = false, l;
      }, this.silent = o == null ? void 0 : o.silent;
    }
  }
  function H1(t) {
    return typeof (t == null ? void 0 : t.message) != "string" ? false : t.message.startsWith("Failed to fetch dynamically imported module") || t.message.startsWith("error loading dynamically imported module") || t.message.startsWith("Importing a module script failed");
  }
  function os(t, r, o) {
    let i, l, u, d;
    const h = () => typeof document > "u" && (o == null ? void 0 : o()) === false ? (l = () => null, Promise.resolve()) : (i || (i = t().then((p) => {
      i = void 0, l = p[r];
    }).catch((p) => {
      if (u = p, H1(u) && u instanceof Error && typeof window < "u" && typeof sessionStorage < "u") {
        const v = `tanstack_router_reload:${u.message}`;
        sessionStorage.getItem(v) || (sessionStorage.setItem(v, "1"), d = true);
      }
    })), i), g = function(v) {
      if (d) throw window.location.reload(), new Promise(() => {
      });
      if (u) throw u;
      if (!l) throw h();
      return (o == null ? void 0 : o()) === false ? x.jsx(l1, {
        fallback: x.jsx(ih, {}),
        children: b.createElement(l, v)
      }) : b.createElement(l, v);
    };
    return g.preload = h, g;
  }
  const q1 = (t) => new G1(t);
  class G1 extends n1 {
    constructor(r) {
      super(r);
    }
  }
  function F1({ router: t, children: r, ...o }) {
    t.update({
      ...t.options,
      ...o,
      context: {
        ...t.options.context,
        ...o.context
      }
    });
    const i = cb(), l = x.jsx(i.Provider, {
      value: t,
      children: r
    });
    return t.options.Wrap ? x.jsx(t.options.Wrap, {
      children: l
    }) : l;
  }
  function V1({ router: t, ...r }) {
    return x.jsx(F1, {
      router: t,
      ...r,
      children: x.jsx(A1, {})
    });
  }
  function Y1(t) {
    return Et({
      select: (r) => (t == null ? void 0 : t.select) ? t.select(r.location) : r.location
    });
  }
  is = class {
    constructor() {
      this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
    }
    subscribe(t) {
      return this.listeners.add(t), this.onSubscribe(), () => {
        this.listeners.delete(t), this.onUnsubscribe();
      };
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {
    }
    onUnsubscribe() {
    }
  };
  gc = typeof window > "u" || "Deno" in globalThis;
  fn = function() {
  };
  function K1(t, r) {
    return typeof t == "function" ? t(r) : t;
  }
  I1 = function(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0;
  };
  Q1 = function(t, r) {
    return Math.max(t + (r || 0) - Date.now(), 0);
  };
  Nd = function(t, r) {
    return typeof t == "function" ? t(r) : t;
  };
  X1 = function(t, r) {
    return typeof t == "function" ? t(r) : t;
  };
  function $v(t, r) {
    const { type: o = "all", exact: i, fetchStatus: l, predicate: u, queryKey: d, stale: h } = t;
    if (d) {
      if (i) {
        if (r.queryHash !== lh(d, r.options)) return false;
      } else if (!Xi(r.queryKey, d)) return false;
    }
    if (o !== "all") {
      const g = r.isActive();
      if (o === "active" && !g || o === "inactive" && g) return false;
    }
    return !(typeof h == "boolean" && r.isStale() !== h || l && l !== r.state.fetchStatus || u && !u(r));
  }
  function Zv(t, r) {
    const { exact: o, status: i, predicate: l, mutationKey: u } = t;
    if (u) {
      if (!r.options.mutationKey) return false;
      if (o) {
        if (ya(r.options.mutationKey) !== ya(u)) return false;
      } else if (!Xi(r.options.mutationKey, u)) return false;
    }
    return !(i && r.state.status !== i || l && !l(r));
  }
  function lh(t, r) {
    return ((r == null ? void 0 : r.queryKeyHashFn) || ya)(t);
  }
  function ya(t) {
    return JSON.stringify(t, (r, o) => jd(o) ? Object.keys(o).sort().reduce((i, l) => (i[l] = o[l], i), {}) : o);
  }
  function Xi(t, r) {
    return t === r ? true : typeof t != typeof r ? false : t && r && typeof t == "object" && typeof r == "object" ? Object.keys(r).every((o) => Xi(t[o], r[o])) : false;
  }
  function vb(t, r) {
    if (t === r) return t;
    const o = Jv(t) && Jv(r);
    if (o || jd(t) && jd(r)) {
      const i = o ? t : Object.keys(t), l = i.length, u = o ? r : Object.keys(r), d = u.length, h = o ? [] : {}, g = new Set(i);
      let p = 0;
      for (let v = 0; v < d; v++) {
        const m = o ? v : u[v];
        (!o && g.has(m) || o) && t[m] === void 0 && r[m] === void 0 ? (h[m] = void 0, p++) : (h[m] = vb(t[m], r[m]), h[m] === t[m] && t[m] !== void 0 && p++);
      }
      return l === d && p === l ? t : h;
    }
    return r;
  }
  $1 = function(t, r) {
    if (!r || Object.keys(t).length !== Object.keys(r).length) return false;
    for (const o in t) if (t[o] !== r[o]) return false;
    return true;
  };
  function Jv(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length;
  }
  function jd(t) {
    if (!Wv(t)) return false;
    const r = t.constructor;
    if (r === void 0) return true;
    const o = r.prototype;
    return !(!Wv(o) || !o.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
  }
  function Wv(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
  function Z1(t) {
    return new Promise((r) => {
      setTimeout(r, t);
    });
  }
  J1 = function(t, r, o) {
    return typeof o.structuralSharing == "function" ? o.structuralSharing(t, r) : o.structuralSharing !== false ? vb(t, r) : r;
  };
  function W1(t, r, o = 0) {
    const i = [
      ...t,
      r
    ];
    return o && i.length > o ? i.slice(1) : i;
  }
  function eE(t, r, o = 0) {
    const i = [
      r,
      ...t
    ];
    return o && i.length > o ? i.slice(0, -1) : i;
  }
  var ch = Symbol();
  function yb(t, r) {
    return !t.queryFn && (r == null ? void 0 : r.initialPromise) ? () => r.initialPromise : !t.queryFn || t.queryFn === ch ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
  }
  tE = function(t, r) {
    return typeof t == "function" ? t(...r) : !!t;
  };
  let nE, rE, tc;
  nE = (_a2 = class extends is {
    constructor() {
      super();
      __privateAdd(this, _e);
      __privateAdd(this, _t);
      __privateAdd(this, _n2);
      __privateSet(this, _n2, (t) => {
        if (!gc && window.addEventListener) {
          const r = () => t();
          return window.addEventListener("visibilitychange", r, false), () => {
            window.removeEventListener("visibilitychange", r);
          };
        }
      });
    }
    onSubscribe() {
      __privateGet(this, _t) || this.setEventListener(__privateGet(this, _n2));
    }
    onUnsubscribe() {
      var _a5;
      this.hasListeners() || ((_a5 = __privateGet(this, _t)) == null ? void 0 : _a5.call(this), __privateSet(this, _t, void 0));
    }
    setEventListener(t) {
      var _a5;
      __privateSet(this, _n2, t), (_a5 = __privateGet(this, _t)) == null ? void 0 : _a5.call(this), __privateSet(this, _t, t((r) => {
        typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
      }));
    }
    setFocused(t) {
      __privateGet(this, _e) !== t && (__privateSet(this, _e, t), this.onFocus());
    }
    onFocus() {
      const t = this.isFocused();
      this.listeners.forEach((r) => {
        r(t);
      });
    }
    isFocused() {
      var _a5;
      return typeof __privateGet(this, _e) == "boolean" ? __privateGet(this, _e) : ((_a5 = globalThis.document) == null ? void 0 : _a5.visibilityState) !== "hidden";
    }
  }, _e = new WeakMap(), _t = new WeakMap(), _n2 = new WeakMap(), _a2);
  bb = new nE();
  rE = (_b2 = class extends is {
    constructor() {
      super();
      __privateAdd(this, _e2, true);
      __privateAdd(this, _t2);
      __privateAdd(this, _n3);
      __privateSet(this, _n3, (t) => {
        if (!gc && window.addEventListener) {
          const r = () => t(true), o = () => t(false);
          return window.addEventListener("online", r, false), window.addEventListener("offline", o, false), () => {
            window.removeEventListener("online", r), window.removeEventListener("offline", o);
          };
        }
      });
    }
    onSubscribe() {
      __privateGet(this, _t2) || this.setEventListener(__privateGet(this, _n3));
    }
    onUnsubscribe() {
      var _a5;
      this.hasListeners() || ((_a5 = __privateGet(this, _t2)) == null ? void 0 : _a5.call(this), __privateSet(this, _t2, void 0));
    }
    setEventListener(t) {
      var _a5;
      __privateSet(this, _n3, t), (_a5 = __privateGet(this, _t2)) == null ? void 0 : _a5.call(this), __privateSet(this, _t2, t(this.setOnline.bind(this)));
    }
    setOnline(t) {
      __privateGet(this, _e2) !== t && (__privateSet(this, _e2, t), this.listeners.forEach((o) => {
        o(t);
      }));
    }
    isOnline() {
      return __privateGet(this, _e2);
    }
  }, _e2 = new WeakMap(), _t2 = new WeakMap(), _n3 = new WeakMap(), _b2);
  tc = new rE();
  aE = function() {
    let t, r;
    const o = new Promise((l, u) => {
      t = l, r = u;
    });
    o.status = "pending", o.catch(() => {
    });
    function i(l) {
      Object.assign(o, l), delete o.resolve, delete o.reject;
    }
    return o.resolve = (l) => {
      i({
        status: "fulfilled",
        value: l
      }), t(l);
    }, o.reject = (l) => {
      i({
        status: "rejected",
        reason: l
      }), r(l);
    }, o;
  };
  function oE(t) {
    return Math.min(1e3 * 2 ** t, 3e4);
  }
  function _b(t) {
    return (t ?? "online") === "online" ? tc.isOnline() : true;
  }
  var wb = class extends Error {
    constructor(t) {
      super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
    }
  };
  function cd(t) {
    return t instanceof wb;
  }
  function xb(t) {
    let r = false, o = 0, i = false, l;
    const u = aE(), d = (R) => {
      var _a5;
      i || (w(new wb(R)), (_a5 = t.abort) == null ? void 0 : _a5.call(t));
    }, h = () => {
      r = true;
    }, g = () => {
      r = false;
    }, p = () => bb.isFocused() && (t.networkMode === "always" || tc.isOnline()) && t.canRun(), v = () => _b(t.networkMode) && t.canRun(), m = (R) => {
      var _a5;
      i || (i = true, (_a5 = t.onSuccess) == null ? void 0 : _a5.call(t, R), l == null ? void 0 : l(), u.resolve(R));
    }, w = (R) => {
      var _a5;
      i || (i = true, (_a5 = t.onError) == null ? void 0 : _a5.call(t, R), l == null ? void 0 : l(), u.reject(R));
    }, S = () => new Promise((R) => {
      var _a5;
      l = (C) => {
        (i || p()) && R(C);
      }, (_a5 = t.onPause) == null ? void 0 : _a5.call(t);
    }).then(() => {
      var _a5;
      l = void 0, i || ((_a5 = t.onContinue) == null ? void 0 : _a5.call(t));
    }), E = () => {
      if (i) return;
      let R;
      const C = o === 0 ? t.initialPromise : void 0;
      try {
        R = C ?? t.fn();
      } catch (O) {
        R = Promise.reject(O);
      }
      Promise.resolve(R).then(m).catch((O) => {
        var _a5;
        if (i) return;
        const k = t.retry ?? (gc ? 0 : 3), j = t.retryDelay ?? oE, H = typeof j == "function" ? j(o, O) : j, q = k === true || typeof k == "number" && o < k || typeof k == "function" && k(o, O);
        if (r || !q) {
          w(O);
          return;
        }
        o++, (_a5 = t.onFail) == null ? void 0 : _a5.call(t, o, O), Z1(H).then(() => p() ? void 0 : S()).then(() => {
          r ? w(O) : E();
        });
      });
    };
    return {
      promise: u,
      cancel: d,
      continue: () => (l == null ? void 0 : l(), u),
      cancelRetry: h,
      continueRetry: g,
      canStart: v,
      start: () => (v() ? E() : S().then(E), u)
    };
  }
  var iE = (t) => setTimeout(t, 0);
  function sE() {
    let t = [], r = 0, o = (h) => {
      h();
    }, i = (h) => {
      h();
    }, l = iE;
    const u = (h) => {
      r ? t.push(h) : l(() => {
        o(h);
      });
    }, d = () => {
      const h = t;
      t = [], h.length && l(() => {
        i(() => {
          h.forEach((g) => {
            o(g);
          });
        });
      });
    };
    return {
      batch: (h) => {
        let g;
        r++;
        try {
          g = h();
        } finally {
          r--, r || d();
        }
        return g;
      },
      batchCalls: (h) => (...g) => {
        u(() => {
          h(...g);
        });
      },
      schedule: u,
      setNotifyFunction: (h) => {
        o = h;
      },
      setBatchNotifyFunction: (h) => {
        i = h;
      },
      setScheduler: (h) => {
        l = h;
      }
    };
  }
  let Sb, lE;
  St = sE();
  Sb = (_c2 = class {
    constructor() {
      __privateAdd(this, _e3);
    }
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(), I1(this.gcTime) && __privateSet(this, _e3, setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime));
    }
    updateGcTime(t) {
      this.gcTime = Math.max(this.gcTime || 0, t ?? (gc ? 1 / 0 : 5 * 60 * 1e3));
    }
    clearGcTimeout() {
      __privateGet(this, _e3) && (clearTimeout(__privateGet(this, _e3)), __privateSet(this, _e3, void 0));
    }
  }, _e3 = new WeakMap(), _c2);
  lE = (_d2 = class extends Sb {
    constructor(t) {
      super();
      __privateAdd(this, _lE_instances);
      __privateAdd(this, _e4);
      __privateAdd(this, _t3);
      __privateAdd(this, _n4);
      __privateAdd(this, _r);
      __privateAdd(this, _a3);
      __privateAdd(this, _i);
      __privateAdd(this, _s);
      __privateSet(this, _s, false), __privateSet(this, _i, t.defaultOptions), this.setOptions(t.options), this.observers = [], __privateSet(this, _r, t.client), __privateSet(this, _n4, __privateGet(this, _r).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, __privateSet(this, _e4, uE(this.options)), this.state = t.state ?? __privateGet(this, _e4), this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      var _a5;
      return (_a5 = __privateGet(this, _a3)) == null ? void 0 : _a5.promise;
    }
    setOptions(t) {
      this.options = {
        ...__privateGet(this, _i),
        ...t
      }, this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
      !this.observers.length && this.state.fetchStatus === "idle" && __privateGet(this, _n4).remove(this);
    }
    setData(t, r) {
      const o = J1(this.state.data, t, this.options);
      return __privateMethod(this, _lE_instances, o_fn).call(this, {
        data: o,
        type: "success",
        dataUpdatedAt: r == null ? void 0 : r.updatedAt,
        manual: r == null ? void 0 : r.manual
      }), o;
    }
    setState(t, r) {
      __privateMethod(this, _lE_instances, o_fn).call(this, {
        type: "setState",
        state: t,
        setStateOptions: r
      });
    }
    cancel(t) {
      var _a5, _b3;
      const r = (_a5 = __privateGet(this, _a3)) == null ? void 0 : _a5.promise;
      return (_b3 = __privateGet(this, _a3)) == null ? void 0 : _b3.cancel(t), r ? r.then(fn).catch(fn) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({
        silent: true
      });
    }
    reset() {
      this.destroy(), this.setState(__privateGet(this, _e4));
    }
    isActive() {
      return this.observers.some((t) => X1(t.options.enabled, this) !== false);
    }
    isDisabled() {
      return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ch || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0 ? this.observers.some((t) => Nd(t.options.staleTime, this) === "static") : false;
    }
    isStale() {
      return this.getObserversCount() > 0 ? this.observers.some((t) => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(t = 0) {
      return this.state.data === void 0 ? true : t === "static" ? false : this.state.isInvalidated ? true : !Q1(this.state.dataUpdatedAt, t);
    }
    onFocus() {
      var _a5, _b3;
      (_a5 = this.observers.find((r) => r.shouldFetchOnWindowFocus())) == null ? void 0 : _a5.refetch({
        cancelRefetch: false
      }), (_b3 = __privateGet(this, _a3)) == null ? void 0 : _b3.continue();
    }
    onOnline() {
      var _a5, _b3;
      (_a5 = this.observers.find((r) => r.shouldFetchOnReconnect())) == null ? void 0 : _a5.refetch({
        cancelRefetch: false
      }), (_b3 = __privateGet(this, _a3)) == null ? void 0 : _b3.continue();
    }
    addObserver(t) {
      this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), __privateGet(this, _n4).notify({
        type: "observerAdded",
        query: this,
        observer: t
      }));
    }
    removeObserver(t) {
      this.observers.includes(t) && (this.observers = this.observers.filter((r) => r !== t), this.observers.length || (__privateGet(this, _a3) && (__privateGet(this, _s) ? __privateGet(this, _a3).cancel({
        revert: true
      }) : __privateGet(this, _a3).cancelRetry()), this.scheduleGc()), __privateGet(this, _n4).notify({
        type: "observerRemoved",
        query: this,
        observer: t
      }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || __privateMethod(this, _lE_instances, o_fn).call(this, {
        type: "invalidate"
      });
    }
    fetch(t, r) {
      var _a5, _b3, _c3;
      if (this.state.fetchStatus !== "idle") {
        if (this.state.data !== void 0 && (r == null ? void 0 : r.cancelRefetch)) this.cancel({
          silent: true
        });
        else if (__privateGet(this, _a3)) return __privateGet(this, _a3).continueRetry(), __privateGet(this, _a3).promise;
      }
      if (t && this.setOptions(t), !this.options.queryFn) {
        const g = this.observers.find((p) => p.options.queryFn);
        g && this.setOptions(g.options);
      }
      const o = new AbortController(), i = (g) => {
        Object.defineProperty(g, "signal", {
          enumerable: true,
          get: () => (__privateSet(this, _s, true), o.signal)
        });
      }, l = () => {
        const g = yb(this.options, r), v = (() => {
          const m = {
            client: __privateGet(this, _r),
            queryKey: this.queryKey,
            meta: this.meta
          };
          return i(m), m;
        })();
        return __privateSet(this, _s, false), this.options.persister ? this.options.persister(g, v, this) : g(v);
      }, d = (() => {
        const g = {
          fetchOptions: r,
          options: this.options,
          queryKey: this.queryKey,
          client: __privateGet(this, _r),
          state: this.state,
          fetchFn: l
        };
        return i(g), g;
      })();
      (_a5 = this.options.behavior) == null ? void 0 : _a5.onFetch(d, this), __privateSet(this, _t3, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_b3 = d.fetchOptions) == null ? void 0 : _b3.meta)) && __privateMethod(this, _lE_instances, o_fn).call(this, {
        type: "fetch",
        meta: (_c3 = d.fetchOptions) == null ? void 0 : _c3.meta
      });
      const h = (g) => {
        var _a6, _b4, _c4, _d3;
        cd(g) && g.silent || __privateMethod(this, _lE_instances, o_fn).call(this, {
          type: "error",
          error: g
        }), cd(g) || ((_b4 = (_a6 = __privateGet(this, _n4).config).onError) == null ? void 0 : _b4.call(_a6, g, this), (_d3 = (_c4 = __privateGet(this, _n4).config).onSettled) == null ? void 0 : _d3.call(_c4, this.state.data, g, this)), this.scheduleGc();
      };
      return __privateSet(this, _a3, xb({
        initialPromise: r == null ? void 0 : r.initialPromise,
        fn: d.fetchFn,
        abort: o.abort.bind(o),
        onSuccess: (g) => {
          var _a6, _b4, _c4, _d3;
          if (g === void 0) {
            h(new Error(`${this.queryHash} data is undefined`));
            return;
          }
          try {
            this.setData(g);
          } catch (p) {
            h(p);
            return;
          }
          (_b4 = (_a6 = __privateGet(this, _n4).config).onSuccess) == null ? void 0 : _b4.call(_a6, g, this), (_d3 = (_c4 = __privateGet(this, _n4).config).onSettled) == null ? void 0 : _d3.call(_c4, g, this.state.error, this), this.scheduleGc();
        },
        onError: h,
        onFail: (g, p) => {
          __privateMethod(this, _lE_instances, o_fn).call(this, {
            type: "failed",
            failureCount: g,
            error: p
          });
        },
        onPause: () => {
          __privateMethod(this, _lE_instances, o_fn).call(this, {
            type: "pause"
          });
        },
        onContinue: () => {
          __privateMethod(this, _lE_instances, o_fn).call(this, {
            type: "continue"
          });
        },
        retry: d.options.retry,
        retryDelay: d.options.retryDelay,
        networkMode: d.options.networkMode,
        canRun: () => true
      })), __privateGet(this, _a3).start();
    }
  }, _e4 = new WeakMap(), _t3 = new WeakMap(), _n4 = new WeakMap(), _r = new WeakMap(), _a3 = new WeakMap(), _i = new WeakMap(), _s = new WeakMap(), _lE_instances = new WeakSet(), o_fn = function(t) {
    const r = (o) => {
      switch (t.type) {
        case "failed":
          return {
            ...o,
            fetchFailureCount: t.failureCount,
            fetchFailureReason: t.error
          };
        case "pause":
          return {
            ...o,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...o,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...o,
            ...cE(o.data, this.options),
            fetchMeta: t.meta ?? null
          };
        case "success":
          return {
            ...o,
            data: t.data,
            dataUpdateCount: o.dataUpdateCount + 1,
            dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
            error: null,
            isInvalidated: false,
            status: "success",
            ...!t.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const i = t.error;
          return cd(i) && i.revert && __privateGet(this, _t3) ? {
            ...__privateGet(this, _t3),
            fetchStatus: "idle"
          } : {
            ...o,
            error: i,
            errorUpdateCount: o.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: o.fetchFailureCount + 1,
            fetchFailureReason: i,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...o,
            isInvalidated: true
          };
        case "setState":
          return {
            ...o,
            ...t.state
          };
      }
    };
    this.state = r(this.state), St.batch(() => {
      this.observers.forEach((o) => {
        o.onQueryUpdate();
      }), __privateGet(this, _n4).notify({
        query: this,
        type: "updated",
        action: t
      });
    });
  }, _d2);
  cE = function(t, r) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: _b(r.networkMode) ? "fetching" : "paused",
      ...t === void 0 && {
        error: null,
        status: "pending"
      }
    };
  };
  function uE(t) {
    const r = typeof t.initialData == "function" ? t.initialData() : t.initialData, o = r !== void 0, i = o ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
      data: r,
      dataUpdateCount: 0,
      dataUpdatedAt: o ? i ?? Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: false,
      status: o ? "success" : "pending",
      fetchStatus: "idle"
    };
  }
  var fE = (_e6 = class extends is {
    constructor(t = {}) {
      super();
      __privateAdd(this, _e5);
      this.config = t, __privateSet(this, _e5, /* @__PURE__ */ new Map());
    }
    build(t, r, o) {
      const i = r.queryKey, l = r.queryHash ?? lh(i, r);
      let u = this.get(l);
      return u || (u = new lE({
        client: t,
        queryKey: i,
        queryHash: l,
        options: t.defaultQueryOptions(r),
        state: o,
        defaultOptions: t.getQueryDefaults(i)
      }), this.add(u)), u;
    }
    add(t) {
      __privateGet(this, _e5).has(t.queryHash) || (__privateGet(this, _e5).set(t.queryHash, t), this.notify({
        type: "added",
        query: t
      }));
    }
    remove(t) {
      const r = __privateGet(this, _e5).get(t.queryHash);
      r && (t.destroy(), r === t && __privateGet(this, _e5).delete(t.queryHash), this.notify({
        type: "removed",
        query: t
      }));
    }
    clear() {
      St.batch(() => {
        this.getAll().forEach((t) => {
          this.remove(t);
        });
      });
    }
    get(t) {
      return __privateGet(this, _e5).get(t);
    }
    getAll() {
      return [
        ...__privateGet(this, _e5).values()
      ];
    }
    find(t) {
      const r = {
        exact: true,
        ...t
      };
      return this.getAll().find((o) => $v(r, o));
    }
    findAll(t = {}) {
      const r = this.getAll();
      return Object.keys(t).length > 0 ? r.filter((o) => $v(t, o)) : r;
    }
    notify(t) {
      St.batch(() => {
        this.listeners.forEach((r) => {
          r(t);
        });
      });
    }
    onFocus() {
      St.batch(() => {
        this.getAll().forEach((t) => {
          t.onFocus();
        });
      });
    }
    onOnline() {
      St.batch(() => {
        this.getAll().forEach((t) => {
          t.onOnline();
        });
      });
    }
  }, _e5 = new WeakMap(), _e6), dE = (_f = class extends Sb {
    constructor(t) {
      super();
      __privateAdd(this, _dE_instances);
      __privateAdd(this, _e7);
      __privateAdd(this, _t4);
      __privateAdd(this, _n5);
      this.mutationId = t.mutationId, __privateSet(this, _t4, t.mutationCache), __privateSet(this, _e7, []), this.state = t.state || Eb(), this.setOptions(t.options), this.scheduleGc();
    }
    setOptions(t) {
      this.options = t, this.updateGcTime(this.options.gcTime);
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(t) {
      __privateGet(this, _e7).includes(t) || (__privateGet(this, _e7).push(t), this.clearGcTimeout(), __privateGet(this, _t4).notify({
        type: "observerAdded",
        mutation: this,
        observer: t
      }));
    }
    removeObserver(t) {
      __privateSet(this, _e7, __privateGet(this, _e7).filter((r) => r !== t)), this.scheduleGc(), __privateGet(this, _t4).notify({
        type: "observerRemoved",
        mutation: this,
        observer: t
      });
    }
    optionalRemove() {
      __privateGet(this, _e7).length || (this.state.status === "pending" ? this.scheduleGc() : __privateGet(this, _t4).remove(this));
    }
    continue() {
      var _a5;
      return ((_a5 = __privateGet(this, _n5)) == null ? void 0 : _a5.continue()) ?? this.execute(this.state.variables);
    }
    async execute(t) {
      var _a5, _b3, _c3, _d3, _e11, _f2, _g2, _h3, _i4, _j, _k, _l, _m, _n9, _o3, _p, _q, _r4, _s3, _t8;
      const r = () => {
        __privateMethod(this, _dE_instances, r_fn).call(this, {
          type: "continue"
        });
      };
      __privateSet(this, _n5, xb({
        fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
        onFail: (l, u) => {
          __privateMethod(this, _dE_instances, r_fn).call(this, {
            type: "failed",
            failureCount: l,
            error: u
          });
        },
        onPause: () => {
          __privateMethod(this, _dE_instances, r_fn).call(this, {
            type: "pause"
          });
        },
        onContinue: r,
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => __privateGet(this, _t4).canRun(this)
      }));
      const o = this.state.status === "pending", i = !__privateGet(this, _n5).canStart();
      try {
        if (o) r();
        else {
          __privateMethod(this, _dE_instances, r_fn).call(this, {
            type: "pending",
            variables: t,
            isPaused: i
          }), await ((_b3 = (_a5 = __privateGet(this, _t4).config).onMutate) == null ? void 0 : _b3.call(_a5, t, this));
          const u = await ((_d3 = (_c3 = this.options).onMutate) == null ? void 0 : _d3.call(_c3, t));
          u !== this.state.context && __privateMethod(this, _dE_instances, r_fn).call(this, {
            type: "pending",
            context: u,
            variables: t,
            isPaused: i
          });
        }
        const l = await __privateGet(this, _n5).start();
        return await ((_f2 = (_e11 = __privateGet(this, _t4).config).onSuccess) == null ? void 0 : _f2.call(_e11, l, t, this.state.context, this)), await ((_h3 = (_g2 = this.options).onSuccess) == null ? void 0 : _h3.call(_g2, l, t, this.state.context)), await ((_j = (_i4 = __privateGet(this, _t4).config).onSettled) == null ? void 0 : _j.call(_i4, l, null, this.state.variables, this.state.context, this)), await ((_l = (_k = this.options).onSettled) == null ? void 0 : _l.call(_k, l, null, t, this.state.context)), __privateMethod(this, _dE_instances, r_fn).call(this, {
          type: "success",
          data: l
        }), l;
      } catch (l) {
        try {
          throw await ((_n9 = (_m = __privateGet(this, _t4).config).onError) == null ? void 0 : _n9.call(_m, l, t, this.state.context, this)), await ((_p = (_o3 = this.options).onError) == null ? void 0 : _p.call(_o3, l, t, this.state.context)), await ((_r4 = (_q = __privateGet(this, _t4).config).onSettled) == null ? void 0 : _r4.call(_q, void 0, l, this.state.variables, this.state.context, this)), await ((_t8 = (_s3 = this.options).onSettled) == null ? void 0 : _t8.call(_s3, void 0, l, t, this.state.context)), l;
        } finally {
          __privateMethod(this, _dE_instances, r_fn).call(this, {
            type: "error",
            error: l
          });
        }
      } finally {
        __privateGet(this, _t4).runNext(this);
      }
    }
  }, _e7 = new WeakMap(), _t4 = new WeakMap(), _n5 = new WeakMap(), _dE_instances = new WeakSet(), r_fn = function(t) {
    const r = (o) => {
      switch (t.type) {
        case "failed":
          return {
            ...o,
            failureCount: t.failureCount,
            failureReason: t.error
          };
        case "pause":
          return {
            ...o,
            isPaused: true
          };
        case "continue":
          return {
            ...o,
            isPaused: false
          };
        case "pending":
          return {
            ...o,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: t.isPaused,
            status: "pending",
            variables: t.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...o,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...o,
            data: void 0,
            error: t.error,
            failureCount: o.failureCount + 1,
            failureReason: t.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = r(this.state), St.batch(() => {
      __privateGet(this, _e7).forEach((o) => {
        o.onMutationUpdate(t);
      }), __privateGet(this, _t4).notify({
        mutation: this,
        type: "updated",
        action: t
      });
    });
  }, _f);
  function Eb() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: false,
      status: "idle",
      variables: void 0,
      submittedAt: 0
    };
  }
  var hE = (_g = class extends is {
    constructor(t = {}) {
      super();
      __privateAdd(this, _e8);
      __privateAdd(this, _t5);
      __privateAdd(this, _n6);
      this.config = t, __privateSet(this, _e8, /* @__PURE__ */ new Set()), __privateSet(this, _t5, /* @__PURE__ */ new Map()), __privateSet(this, _n6, 0);
    }
    build(t, r, o) {
      const i = new dE({
        mutationCache: this,
        mutationId: ++__privateWrapper(this, _n6)._,
        options: t.defaultMutationOptions(r),
        state: o
      });
      return this.add(i), i;
    }
    add(t) {
      __privateGet(this, _e8).add(t);
      const r = Dl(t);
      if (typeof r == "string") {
        const o = __privateGet(this, _t5).get(r);
        o ? o.push(t) : __privateGet(this, _t5).set(r, [
          t
        ]);
      }
      this.notify({
        type: "added",
        mutation: t
      });
    }
    remove(t) {
      if (__privateGet(this, _e8).delete(t)) {
        const r = Dl(t);
        if (typeof r == "string") {
          const o = __privateGet(this, _t5).get(r);
          if (o) if (o.length > 1) {
            const i = o.indexOf(t);
            i !== -1 && o.splice(i, 1);
          } else o[0] === t && __privateGet(this, _t5).delete(r);
        }
      }
      this.notify({
        type: "removed",
        mutation: t
      });
    }
    canRun(t) {
      var _a5;
      const r = Dl(t);
      if (typeof r == "string") {
        const i = (_a5 = __privateGet(this, _t5).get(r)) == null ? void 0 : _a5.find((l) => l.state.status === "pending");
        return !i || i === t;
      } else return true;
    }
    runNext(t) {
      var _a5, _b3;
      const r = Dl(t);
      return typeof r == "string" ? ((_b3 = (_a5 = __privateGet(this, _t5).get(r)) == null ? void 0 : _a5.find((i) => i !== t && i.state.isPaused)) == null ? void 0 : _b3.continue()) ?? Promise.resolve() : Promise.resolve();
    }
    clear() {
      St.batch(() => {
        __privateGet(this, _e8).forEach((t) => {
          this.notify({
            type: "removed",
            mutation: t
          });
        }), __privateGet(this, _e8).clear(), __privateGet(this, _t5).clear();
      });
    }
    getAll() {
      return Array.from(__privateGet(this, _e8));
    }
    find(t) {
      const r = {
        exact: true,
        ...t
      };
      return this.getAll().find((o) => Zv(r, o));
    }
    findAll(t = {}) {
      return this.getAll().filter((r) => Zv(t, r));
    }
    notify(t) {
      St.batch(() => {
        this.listeners.forEach((r) => {
          r(t);
        });
      });
    }
    resumePausedMutations() {
      const t = this.getAll().filter((r) => r.state.isPaused);
      return St.batch(() => Promise.all(t.map((r) => r.continue().catch(fn))));
    }
  }, _e8 = new WeakMap(), _t5 = new WeakMap(), _n6 = new WeakMap(), _g);
  function Dl(t) {
    var _a5;
    return (_a5 = t.options.scope) == null ? void 0 : _a5.id;
  }
  ey = function(t) {
    return {
      onFetch: (r, o) => {
        var _a5, _b3, _c3, _d3, _e11;
        const i = r.options, l = (_c3 = (_b3 = (_a5 = r.fetchOptions) == null ? void 0 : _a5.meta) == null ? void 0 : _b3.fetchMore) == null ? void 0 : _c3.direction, u = ((_d3 = r.state.data) == null ? void 0 : _d3.pages) || [], d = ((_e11 = r.state.data) == null ? void 0 : _e11.pageParams) || [];
        let h = {
          pages: [],
          pageParams: []
        }, g = 0;
        const p = async () => {
          let v = false;
          const m = (E) => {
            Object.defineProperty(E, "signal", {
              enumerable: true,
              get: () => (r.signal.aborted ? v = true : r.signal.addEventListener("abort", () => {
                v = true;
              }), r.signal)
            });
          }, w = yb(r.options, r.fetchOptions), S = async (E, R, C) => {
            if (v) return Promise.reject();
            if (R == null && E.pages.length) return Promise.resolve(E);
            const k = (() => {
              const V = {
                client: r.client,
                queryKey: r.queryKey,
                pageParam: R,
                direction: C ? "backward" : "forward",
                meta: r.options.meta
              };
              return m(V), V;
            })(), j = await w(k), { maxPages: H } = r.options, q = C ? eE : W1;
            return {
              pages: q(E.pages, j, H),
              pageParams: q(E.pageParams, R, H)
            };
          };
          if (l && u.length) {
            const E = l === "backward", R = E ? Rb : zd, C = {
              pages: u,
              pageParams: d
            }, O = R(i, C);
            h = await S(C, O, E);
          } else {
            const E = t ?? u.length;
            do {
              const R = g === 0 ? d[0] ?? i.initialPageParam : zd(i, h);
              if (g > 0 && R == null) break;
              h = await S(h, R), g++;
            } while (g < E);
          }
          return h;
        };
        r.options.persister ? r.fetchFn = () => {
          var _a6, _b4;
          return (_b4 = (_a6 = r.options).persister) == null ? void 0 : _b4.call(_a6, p, {
            client: r.client,
            queryKey: r.queryKey,
            meta: r.options.meta,
            signal: r.signal
          }, o);
        } : r.fetchFn = p;
      }
    };
  };
  function zd(t, { pages: r, pageParams: o }) {
    const i = r.length - 1;
    return r.length > 0 ? t.getNextPageParam(r[i], r, o[i], o) : void 0;
  }
  function Rb(t, { pages: r, pageParams: o }) {
    var _a5;
    return r.length > 0 ? (_a5 = t.getPreviousPageParam) == null ? void 0 : _a5.call(t, r[0], r, o[0], o) : void 0;
  }
  S4 = function(t, r) {
    return r ? zd(t, r) != null : false;
  };
  E4 = function(t, r) {
    return !r || !t.getPreviousPageParam ? false : Rb(t, r) != null;
  };
  let pE, mE, Tb, vE;
  pE = (_h2 = class {
    constructor(t = {}) {
      __privateAdd(this, _e9);
      __privateAdd(this, _t6);
      __privateAdd(this, _n7);
      __privateAdd(this, _r2);
      __privateAdd(this, _a4);
      __privateAdd(this, _i2);
      __privateAdd(this, _s2);
      __privateAdd(this, _o2);
      __privateSet(this, _e9, t.queryCache || new fE()), __privateSet(this, _t6, t.mutationCache || new hE()), __privateSet(this, _n7, t.defaultOptions || {}), __privateSet(this, _r2, /* @__PURE__ */ new Map()), __privateSet(this, _a4, /* @__PURE__ */ new Map()), __privateSet(this, _i2, 0);
    }
    mount() {
      __privateWrapper(this, _i2)._++, __privateGet(this, _i2) === 1 && (__privateSet(this, _s2, bb.subscribe(async (t) => {
        t && (await this.resumePausedMutations(), __privateGet(this, _e9).onFocus());
      })), __privateSet(this, _o2, tc.subscribe(async (t) => {
        t && (await this.resumePausedMutations(), __privateGet(this, _e9).onOnline());
      })));
    }
    unmount() {
      var _a5, _b3;
      __privateWrapper(this, _i2)._--, __privateGet(this, _i2) === 0 && ((_a5 = __privateGet(this, _s2)) == null ? void 0 : _a5.call(this), __privateSet(this, _s2, void 0), (_b3 = __privateGet(this, _o2)) == null ? void 0 : _b3.call(this), __privateSet(this, _o2, void 0));
    }
    isFetching(t) {
      return __privateGet(this, _e9).findAll({
        ...t,
        fetchStatus: "fetching"
      }).length;
    }
    isMutating(t) {
      return __privateGet(this, _t6).findAll({
        ...t,
        status: "pending"
      }).length;
    }
    getQueryData(t) {
      var _a5;
      const r = this.defaultQueryOptions({
        queryKey: t
      });
      return (_a5 = __privateGet(this, _e9).get(r.queryHash)) == null ? void 0 : _a5.state.data;
    }
    ensureQueryData(t) {
      const r = this.defaultQueryOptions(t), o = __privateGet(this, _e9).build(this, r), i = o.state.data;
      return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && o.isStaleByTime(Nd(r.staleTime, o)) && this.prefetchQuery(r), Promise.resolve(i));
    }
    getQueriesData(t) {
      return __privateGet(this, _e9).findAll(t).map(({ queryKey: r, state: o }) => {
        const i = o.data;
        return [
          r,
          i
        ];
      });
    }
    setQueryData(t, r, o) {
      var _a5;
      const i = this.defaultQueryOptions({
        queryKey: t
      }), u = (_a5 = __privateGet(this, _e9).get(i.queryHash)) == null ? void 0 : _a5.state.data, d = K1(r, u);
      if (d !== void 0) return __privateGet(this, _e9).build(this, i).setData(d, {
        ...o,
        manual: true
      });
    }
    setQueriesData(t, r, o) {
      return St.batch(() => __privateGet(this, _e9).findAll(t).map(({ queryKey: i }) => [
        i,
        this.setQueryData(i, r, o)
      ]));
    }
    getQueryState(t) {
      var _a5;
      const r = this.defaultQueryOptions({
        queryKey: t
      });
      return (_a5 = __privateGet(this, _e9).get(r.queryHash)) == null ? void 0 : _a5.state;
    }
    removeQueries(t) {
      const r = __privateGet(this, _e9);
      St.batch(() => {
        r.findAll(t).forEach((o) => {
          r.remove(o);
        });
      });
    }
    resetQueries(t, r) {
      const o = __privateGet(this, _e9);
      return St.batch(() => (o.findAll(t).forEach((i) => {
        i.reset();
      }), this.refetchQueries({
        type: "active",
        ...t
      }, r)));
    }
    cancelQueries(t, r = {}) {
      const o = {
        revert: true,
        ...r
      }, i = St.batch(() => __privateGet(this, _e9).findAll(t).map((l) => l.cancel(o)));
      return Promise.all(i).then(fn).catch(fn);
    }
    invalidateQueries(t, r = {}) {
      return St.batch(() => (__privateGet(this, _e9).findAll(t).forEach((o) => {
        o.invalidate();
      }), (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
        ...t,
        type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active"
      }, r)));
    }
    refetchQueries(t, r = {}) {
      const o = {
        ...r,
        cancelRefetch: r.cancelRefetch ?? true
      }, i = St.batch(() => __privateGet(this, _e9).findAll(t).filter((l) => !l.isDisabled() && !l.isStatic()).map((l) => {
        let u = l.fetch(void 0, o);
        return o.throwOnError || (u = u.catch(fn)), l.state.fetchStatus === "paused" ? Promise.resolve() : u;
      }));
      return Promise.all(i).then(fn);
    }
    fetchQuery(t) {
      const r = this.defaultQueryOptions(t);
      r.retry === void 0 && (r.retry = false);
      const o = __privateGet(this, _e9).build(this, r);
      return o.isStaleByTime(Nd(r.staleTime, o)) ? o.fetch(r) : Promise.resolve(o.state.data);
    }
    prefetchQuery(t) {
      return this.fetchQuery(t).then(fn).catch(fn);
    }
    fetchInfiniteQuery(t) {
      return t.behavior = ey(t.pages), this.fetchQuery(t);
    }
    prefetchInfiniteQuery(t) {
      return this.fetchInfiniteQuery(t).then(fn).catch(fn);
    }
    ensureInfiniteQueryData(t) {
      return t.behavior = ey(t.pages), this.ensureQueryData(t);
    }
    resumePausedMutations() {
      return tc.isOnline() ? __privateGet(this, _t6).resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return __privateGet(this, _e9);
    }
    getMutationCache() {
      return __privateGet(this, _t6);
    }
    getDefaultOptions() {
      return __privateGet(this, _n7);
    }
    setDefaultOptions(t) {
      __privateSet(this, _n7, t);
    }
    setQueryDefaults(t, r) {
      __privateGet(this, _r2).set(ya(t), {
        queryKey: t,
        defaultOptions: r
      });
    }
    getQueryDefaults(t) {
      const r = [
        ...__privateGet(this, _r2).values()
      ], o = {};
      return r.forEach((i) => {
        Xi(t, i.queryKey) && Object.assign(o, i.defaultOptions);
      }), o;
    }
    setMutationDefaults(t, r) {
      __privateGet(this, _a4).set(ya(t), {
        mutationKey: t,
        defaultOptions: r
      });
    }
    getMutationDefaults(t) {
      const r = [
        ...__privateGet(this, _a4).values()
      ], o = {};
      return r.forEach((i) => {
        Xi(t, i.mutationKey) && Object.assign(o, i.defaultOptions);
      }), o;
    }
    defaultQueryOptions(t) {
      if (t._defaulted) return t;
      const r = {
        ...__privateGet(this, _n7).queries,
        ...this.getQueryDefaults(t.queryKey),
        ...t,
        _defaulted: true
      };
      return r.queryHash || (r.queryHash = lh(r.queryKey, r)), r.refetchOnReconnect === void 0 && (r.refetchOnReconnect = r.networkMode !== "always"), r.throwOnError === void 0 && (r.throwOnError = !!r.suspense), !r.networkMode && r.persister && (r.networkMode = "offlineFirst"), r.queryFn === ch && (r.enabled = false), r;
    }
    defaultMutationOptions(t) {
      return (t == null ? void 0 : t._defaulted) ? t : {
        ...__privateGet(this, _n7).mutations,
        ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
        ...t,
        _defaulted: true
      };
    }
    clear() {
      __privateGet(this, _e9).clear(), __privateGet(this, _t6).clear();
    }
  }, _e9 = new WeakMap(), _t6 = new WeakMap(), _n7 = new WeakMap(), _r2 = new WeakMap(), _a4 = new WeakMap(), _i2 = new WeakMap(), _s2 = new WeakMap(), _o2 = new WeakMap(), _h2);
  mE = (_i3 = class extends is {
    constructor(r, o) {
      super();
      __privateAdd(this, _mE_instances);
      __privateAdd(this, _e10);
      __privateAdd(this, _t7);
      __privateAdd(this, _n8);
      __privateAdd(this, _r3);
      __privateSet(this, _e10, r), this.setOptions(o), this.bindMethods(), __privateMethod(this, _mE_instances, a_fn).call(this);
    }
    bindMethods() {
      this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
    }
    setOptions(r) {
      var _a5;
      const o = this.options;
      this.options = __privateGet(this, _e10).defaultMutationOptions(r), $1(this.options, o) || __privateGet(this, _e10).getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: __privateGet(this, _n8),
        observer: this
      }), (o == null ? void 0 : o.mutationKey) && this.options.mutationKey && ya(o.mutationKey) !== ya(this.options.mutationKey) ? this.reset() : ((_a5 = __privateGet(this, _n8)) == null ? void 0 : _a5.state.status) === "pending" && __privateGet(this, _n8).setOptions(this.options);
    }
    onUnsubscribe() {
      var _a5;
      this.hasListeners() || ((_a5 = __privateGet(this, _n8)) == null ? void 0 : _a5.removeObserver(this));
    }
    onMutationUpdate(r) {
      __privateMethod(this, _mE_instances, a_fn).call(this), __privateMethod(this, _mE_instances, i_fn).call(this, r);
    }
    getCurrentResult() {
      return __privateGet(this, _t7);
    }
    reset() {
      var _a5;
      (_a5 = __privateGet(this, _n8)) == null ? void 0 : _a5.removeObserver(this), __privateSet(this, _n8, void 0), __privateMethod(this, _mE_instances, a_fn).call(this), __privateMethod(this, _mE_instances, i_fn).call(this);
    }
    mutate(r, o) {
      var _a5;
      return __privateSet(this, _r3, o), (_a5 = __privateGet(this, _n8)) == null ? void 0 : _a5.removeObserver(this), __privateSet(this, _n8, __privateGet(this, _e10).getMutationCache().build(__privateGet(this, _e10), this.options)), __privateGet(this, _n8).addObserver(this), __privateGet(this, _n8).execute(r);
    }
  }, _e10 = new WeakMap(), _t7 = new WeakMap(), _n8 = new WeakMap(), _r3 = new WeakMap(), _mE_instances = new WeakSet(), a_fn = function() {
    var _a5;
    const r = ((_a5 = __privateGet(this, _n8)) == null ? void 0 : _a5.state) ?? Eb();
    __privateSet(this, _t7, {
      ...r,
      isPending: r.status === "pending",
      isSuccess: r.status === "success",
      isError: r.status === "error",
      isIdle: r.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    });
  }, i_fn = function(r) {
    St.batch(() => {
      var _a5, _b3, _c3, _d3, _e11, _f2, _g2, _h3;
      if (__privateGet(this, _r3) && this.hasListeners()) {
        const o = __privateGet(this, _t7).variables, i = __privateGet(this, _t7).context;
        (r == null ? void 0 : r.type) === "success" ? ((_b3 = (_a5 = __privateGet(this, _r3)).onSuccess) == null ? void 0 : _b3.call(_a5, r.data, o, i), (_d3 = (_c3 = __privateGet(this, _r3)).onSettled) == null ? void 0 : _d3.call(_c3, r.data, null, o, i)) : (r == null ? void 0 : r.type) === "error" && ((_f2 = (_e11 = __privateGet(this, _r3)).onError) == null ? void 0 : _f2.call(_e11, r.error, o, i), (_h3 = (_g2 = __privateGet(this, _r3)).onSettled) == null ? void 0 : _h3.call(_g2, void 0, r.error, o, i));
      }
      this.listeners.forEach((o) => {
        o(__privateGet(this, _t7));
      });
    });
  }, _i3);
  Tb = b.createContext(void 0);
  gE = (t) => {
    const r = b.useContext(Tb);
    if (!r) throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return r;
  };
  vE = ({ client: t, children: r }) => (b.useEffect(() => (t.mount(), () => {
    t.unmount();
  }), [
    t
  ]), x.jsx(Tb.Provider, {
    value: t,
    children: r
  }));
  uh = function(t, r) {
    const o = gE(), [i] = b.useState(() => new mE(o, t));
    b.useEffect(() => {
      i.setOptions(t);
    }, [
      i,
      t
    ]);
    const l = b.useSyncExternalStore(b.useCallback((d) => i.subscribe(St.batchCalls(d)), [
      i
    ]), () => i.getCurrentResult(), () => i.getCurrentResult()), u = b.useCallback((d, h) => {
      i.mutate(d, h).catch(fn);
    }, [
      i
    ]);
    if (l.error && tE(i.options.throwOnError, [
      l.error
    ])) throw l.error;
    return {
      ...l,
      mutate: u,
      mutateAsync: l.mutate
    };
  };
  const Cb = new pE();
  function yE() {
    return {
      queryClient: Cb
    };
  }
  function bE({ children: t }) {
    return x.jsx(vE, {
      client: Cb,
      children: t
    });
  }
  function ty(t, r) {
    if (typeof t == "function") return t(r);
    t != null && (t.current = r);
  }
  function vc(...t) {
    return (r) => {
      let o = false;
      const i = t.map((l) => {
        const u = ty(l, r);
        return !o && typeof u == "function" && (o = true), u;
      });
      if (o) return () => {
        for (let l = 0; l < i.length; l++) {
          const u = i[l];
          typeof u == "function" ? u() : ty(t[l], null);
        }
      };
    };
  }
  dt = function(...t) {
    return b.useCallback(vc(...t), t);
  };
  function No(t) {
    const r = _E(t), o = b.forwardRef((i, l) => {
      const { children: u, ...d } = i, h = b.Children.toArray(u), g = h.find(xE);
      if (g) {
        const p = g.props.children, v = h.map((m) => m === g ? b.Children.count(p) > 1 ? b.Children.only(null) : b.isValidElement(p) ? p.props.children : null : m);
        return x.jsx(r, {
          ...d,
          ref: l,
          children: b.isValidElement(p) ? b.cloneElement(p, void 0, v) : null
        });
      }
      return x.jsx(r, {
        ...d,
        ref: l,
        children: u
      });
    });
    return o.displayName = `${t}.Slot`, o;
  }
  Mb = No("Slot");
  function _E(t) {
    const r = b.forwardRef((o, i) => {
      const { children: l, ...u } = o;
      if (b.isValidElement(l)) {
        const d = EE(l), h = SE(u, l.props);
        return l.type !== b.Fragment && (h.ref = i ? vc(i, d) : d), b.cloneElement(l, h);
      }
      return b.Children.count(l) > 1 ? b.Children.only(null) : null;
    });
    return r.displayName = `${t}.SlotClone`, r;
  }
  var Ab = Symbol("radix.slottable");
  function wE(t) {
    const r = ({ children: o }) => x.jsx(x.Fragment, {
      children: o
    });
    return r.displayName = `${t}.Slottable`, r.__radixId = Ab, r;
  }
  function xE(t) {
    return b.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === Ab;
  }
  function SE(t, r) {
    const o = {
      ...r
    };
    for (const i in r) {
      const l = t[i], u = r[i];
      /^on[A-Z]/.test(i) ? l && u ? o[i] = (...h) => {
        const g = u(...h);
        return l(...h), g;
      } : l && (o[i] = l) : i === "style" ? o[i] = {
        ...l,
        ...u
      } : i === "className" && (o[i] = [
        l,
        u
      ].filter(Boolean).join(" "));
    }
    return {
      ...t,
      ...o
    };
  }
  function EE(t) {
    var _a5, _b3;
    let r = (_a5 = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : _a5.get, o = r && "isReactWarning" in r && r.isReactWarning;
    return o ? t.ref : (r = (_b3 = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : _b3.get, o = r && "isReactWarning" in r && r.isReactWarning, o ? t.props.ref : t.props.ref || t.ref);
  }
  function Ob(t) {
    var r, o, i = "";
    if (typeof t == "string" || typeof t == "number") i += t;
    else if (typeof t == "object") if (Array.isArray(t)) {
      var l = t.length;
      for (r = 0; r < l; r++) t[r] && (o = Ob(t[r])) && (i && (i += " "), i += o);
    } else for (o in t) t[o] && (i && (i += " "), i += o);
    return i;
  }
  function Db() {
    for (var t, r, o = 0, i = "", l = arguments.length; o < l; o++) (t = arguments[o]) && (r = Ob(t)) && (i && (i += " "), i += r);
    return i;
  }
  let ny, ry;
  ny = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t;
  ry = Db;
  Nb = (t, r) => (o) => {
    var i;
    if ((r == null ? void 0 : r.variants) == null) return ry(t, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
    const { variants: l, defaultVariants: u } = r, d = Object.keys(l).map((p) => {
      const v = o == null ? void 0 : o[p], m = u == null ? void 0 : u[p];
      if (v === null) return null;
      const w = ny(v) || ny(m);
      return l[p][w];
    }), h = o && Object.entries(o).reduce((p, v) => {
      let [m, w] = v;
      return w === void 0 || (p[m] = w), p;
    }, {}), g = r == null || (i = r.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((p, v) => {
      let { class: m, className: w, ...S } = v;
      return Object.entries(S).every((E) => {
        let [R, C] = E;
        return Array.isArray(C) ? C.includes({
          ...u,
          ...h
        }[R]) : {
          ...u,
          ...h
        }[R] === C;
      }) ? [
        ...p,
        m,
        w
      ] : p;
    }, []);
    return ry(t, d, g, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  };
  const RE = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), jb = (...t) => t.filter((r, o, i) => !!r && r.trim() !== "" && i.indexOf(r) === o).join(" ").trim();
  var TE = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const CE = b.forwardRef(({ color: t = "currentColor", size: r = 24, strokeWidth: o = 2, absoluteStrokeWidth: i, className: l = "", children: u, iconNode: d, ...h }, g) => b.createElement("svg", {
    ref: g,
    ...TE,
    width: r,
    height: r,
    stroke: t,
    strokeWidth: i ? Number(o) * 24 / Number(r) : o,
    className: jb("lucide", l),
    ...h
  }, [
    ...d.map(([p, v]) => b.createElement(p, v)),
    ...Array.isArray(u) ? u : [
      u
    ]
  ]));
  Pn = (t, r) => {
    const o = b.forwardRef(({ className: i, ...l }, u) => b.createElement(CE, {
      ref: u,
      iconNode: r,
      className: jb(`lucide-${RE(t)}`, i),
      ...l
    }));
    return o.displayName = `${t}`, o;
  };
  let ME;
  ME = [
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
        d: "M8 12h8",
        key: "1wcyev"
      }
    ],
    [
      "path",
      {
        d: "M12 8v8",
        key: "napkw2"
      }
    ]
  ];
  AE = Pn("CirclePlus", ME);
  let OE;
  OE = [
    [
      "path",
      {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
        key: "ih7n3h"
      }
    ],
    [
      "polyline",
      {
        points: "7 10 12 15 17 10",
        key: "2ggqvy"
      }
    ],
    [
      "line",
      {
        x1: "12",
        x2: "12",
        y1: "15",
        y2: "3",
        key: "1vk2je"
      }
    ]
  ];
  DE = Pn("Download", OE);
  const NE = [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "1",
        key: "41hilf"
      }
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "5",
        r: "1",
        key: "gxeob9"
      }
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "19",
        r: "1",
        key: "lyex9k"
      }
    ]
  ], jE = Pn("EllipsisVertical", NE);
  const zE = [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7"
      }
    ],
    [
      "path",
      {
        d: "M14 2v4a2 2 0 0 0 2 2h4",
        key: "tnqrlb"
      }
    ],
    [
      "path",
      {
        d: "M10 9H8",
        key: "b1mrlr"
      }
    ],
    [
      "path",
      {
        d: "M16 13H8",
        key: "t4e002"
      }
    ],
    [
      "path",
      {
        d: "M16 17H8",
        key: "z1uh3a"
      }
    ]
  ], ay = Pn("FileText", zE);
  const kE = [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7"
      }
    ],
    [
      "path",
      {
        d: "M14 2v4a2 2 0 0 0 2 2h4",
        key: "tnqrlb"
      }
    ],
    [
      "path",
      {
        d: "M12 12v6",
        key: "3ahymv"
      }
    ],
    [
      "path",
      {
        d: "m15 15-3-3-3 3",
        key: "15xj92"
      }
    ]
  ], zb = Pn("FileUp", kE);
  let LE;
  LE = [
    [
      "path",
      {
        d: "M21 12a9 9 0 1 1-6.219-8.56",
        key: "13zald"
      }
    ]
  ];
  oy = Pn("LoaderCircle", LE);
  const UE = [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        key: "afitv7"
      }
    ],
    [
      "path",
      {
        d: "M9 3v18",
        key: "fh3hqa"
      }
    ]
  ], BE = Pn("PanelLeft", UE);
  const PE = [
    [
      "path",
      {
        d: "M3 6h18",
        key: "d0wm0j"
      }
    ],
    [
      "path",
      {
        d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
        key: "4alrt4"
      }
    ],
    [
      "path",
      {
        d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
        key: "v07s0e"
      }
    ]
  ], HE = Pn("Trash", PE);
  const qE = [
    [
      "path",
      {
        d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",
        key: "oadzkq"
      }
    ],
    [
      "path",
      {
        d: "M12 19v3",
        key: "npa21l"
      }
    ]
  ], GE = Pn("TreeDeciduous", qE);
  const FE = [
    [
      "path",
      {
        d: "M18 6 6 18",
        key: "1bl5f8"
      }
    ],
    [
      "path",
      {
        d: "m6 6 12 12",
        key: "d8bk6v"
      }
    ]
  ], kb = Pn("X", FE), ud = 768;
  function VE() {
    const [t, r] = b.useState(void 0);
    return b.useEffect(() => {
      const o = window.matchMedia(`(max-width: ${ud - 1}px)`), i = () => {
        r(window.innerWidth < ud);
      };
      return o.addEventListener("change", i), r(window.innerWidth < ud), () => o.removeEventListener("change", i);
    }, []), !!t;
  }
  const fh = "-", YE = (t) => {
    const r = IE(t), { conflictingClassGroups: o, conflictingClassGroupModifiers: i } = t;
    return {
      getClassGroupId: (d) => {
        const h = d.split(fh);
        return h[0] === "" && h.length !== 1 && h.shift(), Lb(h, r) || KE(d);
      },
      getConflictingClassGroupIds: (d, h) => {
        const g = o[d] || [];
        return h && i[d] ? [
          ...g,
          ...i[d]
        ] : g;
      }
    };
  }, Lb = (t, r) => {
    var _a5;
    if (t.length === 0) return r.classGroupId;
    const o = t[0], i = r.nextPart.get(o), l = i ? Lb(t.slice(1), i) : void 0;
    if (l) return l;
    if (r.validators.length === 0) return;
    const u = t.join(fh);
    return (_a5 = r.validators.find(({ validator: d }) => d(u))) == null ? void 0 : _a5.classGroupId;
  }, iy = /^\[(.+)\]$/, KE = (t) => {
    if (iy.test(t)) {
      const r = iy.exec(t)[1], o = r == null ? void 0 : r.substring(0, r.indexOf(":"));
      if (o) return "arbitrary.." + o;
    }
  }, IE = (t) => {
    const { theme: r, classGroups: o } = t, i = {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    };
    for (const l in o) kd(o[l], i, l, r);
    return i;
  }, kd = (t, r, o, i) => {
    t.forEach((l) => {
      if (typeof l == "string") {
        const u = l === "" ? r : sy(r, l);
        u.classGroupId = o;
        return;
      }
      if (typeof l == "function") {
        if (QE(l)) {
          kd(l(i), r, o, i);
          return;
        }
        r.validators.push({
          validator: l,
          classGroupId: o
        });
        return;
      }
      Object.entries(l).forEach(([u, d]) => {
        kd(d, sy(r, u), o, i);
      });
    });
  }, sy = (t, r) => {
    let o = t;
    return r.split(fh).forEach((i) => {
      o.nextPart.has(i) || o.nextPart.set(i, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      }), o = o.nextPart.get(i);
    }), o;
  }, QE = (t) => t.isThemeGetter, XE = (t) => {
    if (t < 1) return {
      get: () => {
      },
      set: () => {
      }
    };
    let r = 0, o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
    const l = (u, d) => {
      o.set(u, d), r++, r > t && (r = 0, i = o, o = /* @__PURE__ */ new Map());
    };
    return {
      get(u) {
        let d = o.get(u);
        if (d !== void 0) return d;
        if ((d = i.get(u)) !== void 0) return l(u, d), d;
      },
      set(u, d) {
        o.has(u) ? o.set(u, d) : l(u, d);
      }
    };
  }, Ld = "!", Ud = ":", $E = Ud.length, ZE = (t) => {
    const { prefix: r, experimentalParseClassName: o } = t;
    let i = (l) => {
      const u = [];
      let d = 0, h = 0, g = 0, p;
      for (let E = 0; E < l.length; E++) {
        let R = l[E];
        if (d === 0 && h === 0) {
          if (R === Ud) {
            u.push(l.slice(g, E)), g = E + $E;
            continue;
          }
          if (R === "/") {
            p = E;
            continue;
          }
        }
        R === "[" ? d++ : R === "]" ? d-- : R === "(" ? h++ : R === ")" && h--;
      }
      const v = u.length === 0 ? l : l.substring(g), m = JE(v), w = m !== v, S = p && p > g ? p - g : void 0;
      return {
        modifiers: u,
        hasImportantModifier: w,
        baseClassName: m,
        maybePostfixModifierPosition: S
      };
    };
    if (r) {
      const l = r + Ud, u = i;
      i = (d) => d.startsWith(l) ? u(d.substring(l.length)) : {
        isExternal: true,
        modifiers: [],
        hasImportantModifier: false,
        baseClassName: d,
        maybePostfixModifierPosition: void 0
      };
    }
    if (o) {
      const l = i;
      i = (u) => o({
        className: u,
        parseClassName: l
      });
    }
    return i;
  }, JE = (t) => t.endsWith(Ld) ? t.substring(0, t.length - 1) : t.startsWith(Ld) ? t.substring(1) : t, WE = (t) => {
    const r = Object.fromEntries(t.orderSensitiveModifiers.map((i) => [
      i,
      true
    ]));
    return (i) => {
      if (i.length <= 1) return i;
      const l = [];
      let u = [];
      return i.forEach((d) => {
        d[0] === "[" || r[d] ? (l.push(...u.sort(), d), u = []) : u.push(d);
      }), l.push(...u.sort()), l;
    };
  }, eR = (t) => ({
    cache: XE(t.cacheSize),
    parseClassName: ZE(t),
    sortModifiers: WE(t),
    ...YE(t)
  }), tR = /\s+/, nR = (t, r) => {
    const { parseClassName: o, getClassGroupId: i, getConflictingClassGroupIds: l, sortModifiers: u } = r, d = [], h = t.trim().split(tR);
    let g = "";
    for (let p = h.length - 1; p >= 0; p -= 1) {
      const v = h[p], { isExternal: m, modifiers: w, hasImportantModifier: S, baseClassName: E, maybePostfixModifierPosition: R } = o(v);
      if (m) {
        g = v + (g.length > 0 ? " " + g : g);
        continue;
      }
      let C = !!R, O = i(C ? E.substring(0, R) : E);
      if (!O) {
        if (!C) {
          g = v + (g.length > 0 ? " " + g : g);
          continue;
        }
        if (O = i(E), !O) {
          g = v + (g.length > 0 ? " " + g : g);
          continue;
        }
        C = false;
      }
      const k = u(w).join(":"), j = S ? k + Ld : k, H = j + O;
      if (d.includes(H)) continue;
      d.push(H);
      const q = l(O, C);
      for (let V = 0; V < q.length; ++V) {
        const K = q[V];
        d.push(j + K);
      }
      g = v + (g.length > 0 ? " " + g : g);
    }
    return g;
  };
  function rR() {
    let t = 0, r, o, i = "";
    for (; t < arguments.length; ) (r = arguments[t++]) && (o = Ub(r)) && (i && (i += " "), i += o);
    return i;
  }
  const Ub = (t) => {
    if (typeof t == "string") return t;
    let r, o = "";
    for (let i = 0; i < t.length; i++) t[i] && (r = Ub(t[i])) && (o && (o += " "), o += r);
    return o;
  };
  function aR(t, ...r) {
    let o, i, l, u = d;
    function d(g) {
      const p = r.reduce((v, m) => m(v), t());
      return o = eR(p), i = o.cache.get, l = o.cache.set, u = h, h(g);
    }
    function h(g) {
      const p = i(g);
      if (p) return p;
      const v = nR(g, o);
      return l(g, v), v;
    }
    return function() {
      return u(rR.apply(null, arguments));
    };
  }
  const ut = (t) => {
    const r = (o) => o[t] || [];
    return r.isThemeGetter = true, r;
  }, Bb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Pb = /^\((?:(\w[\w-]*):)?(.+)\)$/i, oR = /^\d+\/\d+$/, iR = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, sR = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, lR = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, cR = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, uR = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, vo = (t) => oR.test(t), Ce = (t) => !!t && !Number.isNaN(Number(t)), kr = (t) => !!t && Number.isInteger(Number(t)), fd = (t) => t.endsWith("%") && Ce(t.slice(0, -1)), ar = (t) => iR.test(t), fR = () => true, dR = (t) => sR.test(t) && !lR.test(t), Hb = () => false, hR = (t) => cR.test(t), pR = (t) => uR.test(t), mR = (t) => !pe(t) && !me(t), gR = (t) => Bo(t, Fb, Hb), pe = (t) => Bb.test(t), ca = (t) => Bo(t, Vb, dR), dd = (t) => Bo(t, wR, Ce), ly = (t) => Bo(t, qb, Hb), vR = (t) => Bo(t, Gb, pR), Nl = (t) => Bo(t, Yb, hR), me = (t) => Pb.test(t), Gi = (t) => Po(t, Vb), yR = (t) => Po(t, xR), cy = (t) => Po(t, qb), bR = (t) => Po(t, Fb), _R = (t) => Po(t, Gb), jl = (t) => Po(t, Yb, true), Bo = (t, r, o) => {
    const i = Bb.exec(t);
    return i ? i[1] ? r(i[1]) : o(i[2]) : false;
  }, Po = (t, r, o = false) => {
    const i = Pb.exec(t);
    return i ? i[1] ? r(i[1]) : o : false;
  }, qb = (t) => t === "position" || t === "percentage", Gb = (t) => t === "image" || t === "url", Fb = (t) => t === "length" || t === "size" || t === "bg-size", Vb = (t) => t === "length", wR = (t) => t === "number", xR = (t) => t === "family-name", Yb = (t) => t === "shadow", SR = () => {
    const t = ut("color"), r = ut("font"), o = ut("text"), i = ut("font-weight"), l = ut("tracking"), u = ut("leading"), d = ut("breakpoint"), h = ut("container"), g = ut("spacing"), p = ut("radius"), v = ut("shadow"), m = ut("inset-shadow"), w = ut("text-shadow"), S = ut("drop-shadow"), E = ut("blur"), R = ut("perspective"), C = ut("aspect"), O = ut("ease"), k = ut("animate"), j = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column"
    ], H = () => [
      "center",
      "top",
      "bottom",
      "left",
      "right",
      "top-left",
      "left-top",
      "top-right",
      "right-top",
      "bottom-right",
      "right-bottom",
      "bottom-left",
      "left-bottom"
    ], q = () => [
      ...H(),
      me,
      pe
    ], V = () => [
      "auto",
      "hidden",
      "clip",
      "visible",
      "scroll"
    ], K = () => [
      "auto",
      "contain",
      "none"
    ], D = () => [
      me,
      pe,
      g
    ], U = () => [
      vo,
      "full",
      "auto",
      ...D()
    ], ae = () => [
      kr,
      "none",
      "subgrid",
      me,
      pe
    ], ie = () => [
      "auto",
      {
        span: [
          "full",
          kr,
          me,
          pe
        ]
      },
      kr,
      me,
      pe
    ], ee = () => [
      kr,
      "auto",
      me,
      pe
    ], re = () => [
      "auto",
      "min",
      "max",
      "fr",
      me,
      pe
    ], fe = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
      "baseline",
      "center-safe",
      "end-safe"
    ], se = () => [
      "start",
      "end",
      "center",
      "stretch",
      "center-safe",
      "end-safe"
    ], A = () => [
      "auto",
      ...D()
    ], I = () => [
      vo,
      "auto",
      "full",
      "dvw",
      "dvh",
      "lvw",
      "lvh",
      "svw",
      "svh",
      "min",
      "max",
      "fit",
      ...D()
    ], B = () => [
      t,
      me,
      pe
    ], Z = () => [
      ...H(),
      cy,
      ly,
      {
        position: [
          me,
          pe
        ]
      }
    ], T = () => [
      "no-repeat",
      {
        repeat: [
          "",
          "x",
          "y",
          "space",
          "round"
        ]
      }
    ], L = () => [
      "auto",
      "cover",
      "contain",
      bR,
      gR,
      {
        size: [
          me,
          pe
        ]
      }
    ], $ = () => [
      fd,
      Gi,
      ca
    ], Q = () => [
      "",
      "none",
      "full",
      p,
      me,
      pe
    ], J = () => [
      "",
      Ce,
      Gi,
      ca
    ], ce = () => [
      "solid",
      "dashed",
      "dotted",
      "double"
    ], ne = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity"
    ], le = () => [
      Ce,
      fd,
      cy,
      ly
    ], ue = () => [
      "",
      "none",
      E,
      me,
      pe
    ], ye = () => [
      "none",
      Ce,
      me,
      pe
    ], Re = () => [
      "none",
      Ce,
      me,
      pe
    ], Le = () => [
      Ce,
      me,
      pe
    ], Ue = () => [
      vo,
      "full",
      ...D()
    ];
    return {
      cacheSize: 500,
      theme: {
        animate: [
          "spin",
          "ping",
          "pulse",
          "bounce"
        ],
        aspect: [
          "video"
        ],
        blur: [
          ar
        ],
        breakpoint: [
          ar
        ],
        color: [
          fR
        ],
        container: [
          ar
        ],
        "drop-shadow": [
          ar
        ],
        ease: [
          "in",
          "out",
          "in-out"
        ],
        font: [
          mR
        ],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black"
        ],
        "inset-shadow": [
          ar
        ],
        leading: [
          "none",
          "tight",
          "snug",
          "normal",
          "relaxed",
          "loose"
        ],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none"
        ],
        radius: [
          ar
        ],
        shadow: [
          ar
        ],
        spacing: [
          "px",
          Ce
        ],
        text: [
          ar
        ],
        "text-shadow": [
          ar
        ],
        tracking: [
          "tighter",
          "tight",
          "normal",
          "wide",
          "wider",
          "widest"
        ]
      },
      classGroups: {
        aspect: [
          {
            aspect: [
              "auto",
              "square",
              vo,
              pe,
              me,
              C
            ]
          }
        ],
        container: [
          "container"
        ],
        columns: [
          {
            columns: [
              Ce,
              pe,
              me,
              h
            ]
          }
        ],
        "break-after": [
          {
            "break-after": j()
          }
        ],
        "break-before": [
          {
            "break-before": j()
          }
        ],
        "break-inside": [
          {
            "break-inside": [
              "auto",
              "avoid",
              "avoid-page",
              "avoid-column"
            ]
          }
        ],
        "box-decoration": [
          {
            "box-decoration": [
              "slice",
              "clone"
            ]
          }
        ],
        box: [
          {
            box: [
              "border",
              "content"
            ]
          }
        ],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden"
        ],
        sr: [
          "sr-only",
          "not-sr-only"
        ],
        float: [
          {
            float: [
              "right",
              "left",
              "none",
              "start",
              "end"
            ]
          }
        ],
        clear: [
          {
            clear: [
              "left",
              "right",
              "both",
              "none",
              "start",
              "end"
            ]
          }
        ],
        isolation: [
          "isolate",
          "isolation-auto"
        ],
        "object-fit": [
          {
            object: [
              "contain",
              "cover",
              "fill",
              "none",
              "scale-down"
            ]
          }
        ],
        "object-position": [
          {
            object: q()
          }
        ],
        overflow: [
          {
            overflow: V()
          }
        ],
        "overflow-x": [
          {
            "overflow-x": V()
          }
        ],
        "overflow-y": [
          {
            "overflow-y": V()
          }
        ],
        overscroll: [
          {
            overscroll: K()
          }
        ],
        "overscroll-x": [
          {
            "overscroll-x": K()
          }
        ],
        "overscroll-y": [
          {
            "overscroll-y": K()
          }
        ],
        position: [
          "static",
          "fixed",
          "absolute",
          "relative",
          "sticky"
        ],
        inset: [
          {
            inset: U()
          }
        ],
        "inset-x": [
          {
            "inset-x": U()
          }
        ],
        "inset-y": [
          {
            "inset-y": U()
          }
        ],
        start: [
          {
            start: U()
          }
        ],
        end: [
          {
            end: U()
          }
        ],
        top: [
          {
            top: U()
          }
        ],
        right: [
          {
            right: U()
          }
        ],
        bottom: [
          {
            bottom: U()
          }
        ],
        left: [
          {
            left: U()
          }
        ],
        visibility: [
          "visible",
          "invisible",
          "collapse"
        ],
        z: [
          {
            z: [
              kr,
              "auto",
              me,
              pe
            ]
          }
        ],
        basis: [
          {
            basis: [
              vo,
              "full",
              "auto",
              h,
              ...D()
            ]
          }
        ],
        "flex-direction": [
          {
            flex: [
              "row",
              "row-reverse",
              "col",
              "col-reverse"
            ]
          }
        ],
        "flex-wrap": [
          {
            flex: [
              "nowrap",
              "wrap",
              "wrap-reverse"
            ]
          }
        ],
        flex: [
          {
            flex: [
              Ce,
              vo,
              "auto",
              "initial",
              "none",
              pe
            ]
          }
        ],
        grow: [
          {
            grow: [
              "",
              Ce,
              me,
              pe
            ]
          }
        ],
        shrink: [
          {
            shrink: [
              "",
              Ce,
              me,
              pe
            ]
          }
        ],
        order: [
          {
            order: [
              kr,
              "first",
              "last",
              "none",
              me,
              pe
            ]
          }
        ],
        "grid-cols": [
          {
            "grid-cols": ae()
          }
        ],
        "col-start-end": [
          {
            col: ie()
          }
        ],
        "col-start": [
          {
            "col-start": ee()
          }
        ],
        "col-end": [
          {
            "col-end": ee()
          }
        ],
        "grid-rows": [
          {
            "grid-rows": ae()
          }
        ],
        "row-start-end": [
          {
            row: ie()
          }
        ],
        "row-start": [
          {
            "row-start": ee()
          }
        ],
        "row-end": [
          {
            "row-end": ee()
          }
        ],
        "grid-flow": [
          {
            "grid-flow": [
              "row",
              "col",
              "dense",
              "row-dense",
              "col-dense"
            ]
          }
        ],
        "auto-cols": [
          {
            "auto-cols": re()
          }
        ],
        "auto-rows": [
          {
            "auto-rows": re()
          }
        ],
        gap: [
          {
            gap: D()
          }
        ],
        "gap-x": [
          {
            "gap-x": D()
          }
        ],
        "gap-y": [
          {
            "gap-y": D()
          }
        ],
        "justify-content": [
          {
            justify: [
              ...fe(),
              "normal"
            ]
          }
        ],
        "justify-items": [
          {
            "justify-items": [
              ...se(),
              "normal"
            ]
          }
        ],
        "justify-self": [
          {
            "justify-self": [
              "auto",
              ...se()
            ]
          }
        ],
        "align-content": [
          {
            content: [
              "normal",
              ...fe()
            ]
          }
        ],
        "align-items": [
          {
            items: [
              ...se(),
              {
                baseline: [
                  "",
                  "last"
                ]
              }
            ]
          }
        ],
        "align-self": [
          {
            self: [
              "auto",
              ...se(),
              {
                baseline: [
                  "",
                  "last"
                ]
              }
            ]
          }
        ],
        "place-content": [
          {
            "place-content": fe()
          }
        ],
        "place-items": [
          {
            "place-items": [
              ...se(),
              "baseline"
            ]
          }
        ],
        "place-self": [
          {
            "place-self": [
              "auto",
              ...se()
            ]
          }
        ],
        p: [
          {
            p: D()
          }
        ],
        px: [
          {
            px: D()
          }
        ],
        py: [
          {
            py: D()
          }
        ],
        ps: [
          {
            ps: D()
          }
        ],
        pe: [
          {
            pe: D()
          }
        ],
        pt: [
          {
            pt: D()
          }
        ],
        pr: [
          {
            pr: D()
          }
        ],
        pb: [
          {
            pb: D()
          }
        ],
        pl: [
          {
            pl: D()
          }
        ],
        m: [
          {
            m: A()
          }
        ],
        mx: [
          {
            mx: A()
          }
        ],
        my: [
          {
            my: A()
          }
        ],
        ms: [
          {
            ms: A()
          }
        ],
        me: [
          {
            me: A()
          }
        ],
        mt: [
          {
            mt: A()
          }
        ],
        mr: [
          {
            mr: A()
          }
        ],
        mb: [
          {
            mb: A()
          }
        ],
        ml: [
          {
            ml: A()
          }
        ],
        "space-x": [
          {
            "space-x": D()
          }
        ],
        "space-x-reverse": [
          "space-x-reverse"
        ],
        "space-y": [
          {
            "space-y": D()
          }
        ],
        "space-y-reverse": [
          "space-y-reverse"
        ],
        size: [
          {
            size: I()
          }
        ],
        w: [
          {
            w: [
              h,
              "screen",
              ...I()
            ]
          }
        ],
        "min-w": [
          {
            "min-w": [
              h,
              "screen",
              "none",
              ...I()
            ]
          }
        ],
        "max-w": [
          {
            "max-w": [
              h,
              "screen",
              "none",
              "prose",
              {
                screen: [
                  d
                ]
              },
              ...I()
            ]
          }
        ],
        h: [
          {
            h: [
              "screen",
              "lh",
              ...I()
            ]
          }
        ],
        "min-h": [
          {
            "min-h": [
              "screen",
              "lh",
              "none",
              ...I()
            ]
          }
        ],
        "max-h": [
          {
            "max-h": [
              "screen",
              "lh",
              ...I()
            ]
          }
        ],
        "font-size": [
          {
            text: [
              "base",
              o,
              Gi,
              ca
            ]
          }
        ],
        "font-smoothing": [
          "antialiased",
          "subpixel-antialiased"
        ],
        "font-style": [
          "italic",
          "not-italic"
        ],
        "font-weight": [
          {
            font: [
              i,
              me,
              dd
            ]
          }
        ],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              fd,
              pe
            ]
          }
        ],
        "font-family": [
          {
            font: [
              yR,
              pe,
              r
            ]
          }
        ],
        "fvn-normal": [
          "normal-nums"
        ],
        "fvn-ordinal": [
          "ordinal"
        ],
        "fvn-slashed-zero": [
          "slashed-zero"
        ],
        "fvn-figure": [
          "lining-nums",
          "oldstyle-nums"
        ],
        "fvn-spacing": [
          "proportional-nums",
          "tabular-nums"
        ],
        "fvn-fraction": [
          "diagonal-fractions",
          "stacked-fractions"
        ],
        tracking: [
          {
            tracking: [
              l,
              me,
              pe
            ]
          }
        ],
        "line-clamp": [
          {
            "line-clamp": [
              Ce,
              "none",
              me,
              dd
            ]
          }
        ],
        leading: [
          {
            leading: [
              u,
              ...D()
            ]
          }
        ],
        "list-image": [
          {
            "list-image": [
              "none",
              me,
              pe
            ]
          }
        ],
        "list-style-position": [
          {
            list: [
              "inside",
              "outside"
            ]
          }
        ],
        "list-style-type": [
          {
            list: [
              "disc",
              "decimal",
              "none",
              me,
              pe
            ]
          }
        ],
        "text-alignment": [
          {
            text: [
              "left",
              "center",
              "right",
              "justify",
              "start",
              "end"
            ]
          }
        ],
        "placeholder-color": [
          {
            placeholder: B()
          }
        ],
        "text-color": [
          {
            text: B()
          }
        ],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline"
        ],
        "text-decoration-style": [
          {
            decoration: [
              ...ce(),
              "wavy"
            ]
          }
        ],
        "text-decoration-thickness": [
          {
            decoration: [
              Ce,
              "from-font",
              "auto",
              me,
              ca
            ]
          }
        ],
        "text-decoration-color": [
          {
            decoration: B()
          }
        ],
        "underline-offset": [
          {
            "underline-offset": [
              Ce,
              "auto",
              me,
              pe
            ]
          }
        ],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case"
        ],
        "text-overflow": [
          "truncate",
          "text-ellipsis",
          "text-clip"
        ],
        "text-wrap": [
          {
            text: [
              "wrap",
              "nowrap",
              "balance",
              "pretty"
            ]
          }
        ],
        indent: [
          {
            indent: D()
          }
        ],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              me,
              pe
            ]
          }
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces"
            ]
          }
        ],
        break: [
          {
            break: [
              "normal",
              "words",
              "all",
              "keep"
            ]
          }
        ],
        wrap: [
          {
            wrap: [
              "break-word",
              "anywhere",
              "normal"
            ]
          }
        ],
        hyphens: [
          {
            hyphens: [
              "none",
              "manual",
              "auto"
            ]
          }
        ],
        content: [
          {
            content: [
              "none",
              me,
              pe
            ]
          }
        ],
        "bg-attachment": [
          {
            bg: [
              "fixed",
              "local",
              "scroll"
            ]
          }
        ],
        "bg-clip": [
          {
            "bg-clip": [
              "border",
              "padding",
              "content",
              "text"
            ]
          }
        ],
        "bg-origin": [
          {
            "bg-origin": [
              "border",
              "padding",
              "content"
            ]
          }
        ],
        "bg-position": [
          {
            bg: Z()
          }
        ],
        "bg-repeat": [
          {
            bg: T()
          }
        ],
        "bg-size": [
          {
            bg: L()
          }
        ],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  {
                    to: [
                      "t",
                      "tr",
                      "r",
                      "br",
                      "b",
                      "bl",
                      "l",
                      "tl"
                    ]
                  },
                  kr,
                  me,
                  pe
                ],
                radial: [
                  "",
                  me,
                  pe
                ],
                conic: [
                  kr,
                  me,
                  pe
                ]
              },
              _R,
              vR
            ]
          }
        ],
        "bg-color": [
          {
            bg: B()
          }
        ],
        "gradient-from-pos": [
          {
            from: $()
          }
        ],
        "gradient-via-pos": [
          {
            via: $()
          }
        ],
        "gradient-to-pos": [
          {
            to: $()
          }
        ],
        "gradient-from": [
          {
            from: B()
          }
        ],
        "gradient-via": [
          {
            via: B()
          }
        ],
        "gradient-to": [
          {
            to: B()
          }
        ],
        rounded: [
          {
            rounded: Q()
          }
        ],
        "rounded-s": [
          {
            "rounded-s": Q()
          }
        ],
        "rounded-e": [
          {
            "rounded-e": Q()
          }
        ],
        "rounded-t": [
          {
            "rounded-t": Q()
          }
        ],
        "rounded-r": [
          {
            "rounded-r": Q()
          }
        ],
        "rounded-b": [
          {
            "rounded-b": Q()
          }
        ],
        "rounded-l": [
          {
            "rounded-l": Q()
          }
        ],
        "rounded-ss": [
          {
            "rounded-ss": Q()
          }
        ],
        "rounded-se": [
          {
            "rounded-se": Q()
          }
        ],
        "rounded-ee": [
          {
            "rounded-ee": Q()
          }
        ],
        "rounded-es": [
          {
            "rounded-es": Q()
          }
        ],
        "rounded-tl": [
          {
            "rounded-tl": Q()
          }
        ],
        "rounded-tr": [
          {
            "rounded-tr": Q()
          }
        ],
        "rounded-br": [
          {
            "rounded-br": Q()
          }
        ],
        "rounded-bl": [
          {
            "rounded-bl": Q()
          }
        ],
        "border-w": [
          {
            border: J()
          }
        ],
        "border-w-x": [
          {
            "border-x": J()
          }
        ],
        "border-w-y": [
          {
            "border-y": J()
          }
        ],
        "border-w-s": [
          {
            "border-s": J()
          }
        ],
        "border-w-e": [
          {
            "border-e": J()
          }
        ],
        "border-w-t": [
          {
            "border-t": J()
          }
        ],
        "border-w-r": [
          {
            "border-r": J()
          }
        ],
        "border-w-b": [
          {
            "border-b": J()
          }
        ],
        "border-w-l": [
          {
            "border-l": J()
          }
        ],
        "divide-x": [
          {
            "divide-x": J()
          }
        ],
        "divide-x-reverse": [
          "divide-x-reverse"
        ],
        "divide-y": [
          {
            "divide-y": J()
          }
        ],
        "divide-y-reverse": [
          "divide-y-reverse"
        ],
        "border-style": [
          {
            border: [
              ...ce(),
              "hidden",
              "none"
            ]
          }
        ],
        "divide-style": [
          {
            divide: [
              ...ce(),
              "hidden",
              "none"
            ]
          }
        ],
        "border-color": [
          {
            border: B()
          }
        ],
        "border-color-x": [
          {
            "border-x": B()
          }
        ],
        "border-color-y": [
          {
            "border-y": B()
          }
        ],
        "border-color-s": [
          {
            "border-s": B()
          }
        ],
        "border-color-e": [
          {
            "border-e": B()
          }
        ],
        "border-color-t": [
          {
            "border-t": B()
          }
        ],
        "border-color-r": [
          {
            "border-r": B()
          }
        ],
        "border-color-b": [
          {
            "border-b": B()
          }
        ],
        "border-color-l": [
          {
            "border-l": B()
          }
        ],
        "divide-color": [
          {
            divide: B()
          }
        ],
        "outline-style": [
          {
            outline: [
              ...ce(),
              "none",
              "hidden"
            ]
          }
        ],
        "outline-offset": [
          {
            "outline-offset": [
              Ce,
              me,
              pe
            ]
          }
        ],
        "outline-w": [
          {
            outline: [
              "",
              Ce,
              Gi,
              ca
            ]
          }
        ],
        "outline-color": [
          {
            outline: B()
          }
        ],
        shadow: [
          {
            shadow: [
              "",
              "none",
              v,
              jl,
              Nl
            ]
          }
        ],
        "shadow-color": [
          {
            shadow: B()
          }
        ],
        "inset-shadow": [
          {
            "inset-shadow": [
              "none",
              m,
              jl,
              Nl
            ]
          }
        ],
        "inset-shadow-color": [
          {
            "inset-shadow": B()
          }
        ],
        "ring-w": [
          {
            ring: J()
          }
        ],
        "ring-w-inset": [
          "ring-inset"
        ],
        "ring-color": [
          {
            ring: B()
          }
        ],
        "ring-offset-w": [
          {
            "ring-offset": [
              Ce,
              ca
            ]
          }
        ],
        "ring-offset-color": [
          {
            "ring-offset": B()
          }
        ],
        "inset-ring-w": [
          {
            "inset-ring": J()
          }
        ],
        "inset-ring-color": [
          {
            "inset-ring": B()
          }
        ],
        "text-shadow": [
          {
            "text-shadow": [
              "none",
              w,
              jl,
              Nl
            ]
          }
        ],
        "text-shadow-color": [
          {
            "text-shadow": B()
          }
        ],
        opacity: [
          {
            opacity: [
              Ce,
              me,
              pe
            ]
          }
        ],
        "mix-blend": [
          {
            "mix-blend": [
              ...ne(),
              "plus-darker",
              "plus-lighter"
            ]
          }
        ],
        "bg-blend": [
          {
            "bg-blend": ne()
          }
        ],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view"
            ]
          },
          "mask-no-clip"
        ],
        "mask-composite": [
          {
            mask: [
              "add",
              "subtract",
              "intersect",
              "exclude"
            ]
          }
        ],
        "mask-image-linear-pos": [
          {
            "mask-linear": [
              Ce
            ]
          }
        ],
        "mask-image-linear-from-pos": [
          {
            "mask-linear-from": le()
          }
        ],
        "mask-image-linear-to-pos": [
          {
            "mask-linear-to": le()
          }
        ],
        "mask-image-linear-from-color": [
          {
            "mask-linear-from": B()
          }
        ],
        "mask-image-linear-to-color": [
          {
            "mask-linear-to": B()
          }
        ],
        "mask-image-t-from-pos": [
          {
            "mask-t-from": le()
          }
        ],
        "mask-image-t-to-pos": [
          {
            "mask-t-to": le()
          }
        ],
        "mask-image-t-from-color": [
          {
            "mask-t-from": B()
          }
        ],
        "mask-image-t-to-color": [
          {
            "mask-t-to": B()
          }
        ],
        "mask-image-r-from-pos": [
          {
            "mask-r-from": le()
          }
        ],
        "mask-image-r-to-pos": [
          {
            "mask-r-to": le()
          }
        ],
        "mask-image-r-from-color": [
          {
            "mask-r-from": B()
          }
        ],
        "mask-image-r-to-color": [
          {
            "mask-r-to": B()
          }
        ],
        "mask-image-b-from-pos": [
          {
            "mask-b-from": le()
          }
        ],
        "mask-image-b-to-pos": [
          {
            "mask-b-to": le()
          }
        ],
        "mask-image-b-from-color": [
          {
            "mask-b-from": B()
          }
        ],
        "mask-image-b-to-color": [
          {
            "mask-b-to": B()
          }
        ],
        "mask-image-l-from-pos": [
          {
            "mask-l-from": le()
          }
        ],
        "mask-image-l-to-pos": [
          {
            "mask-l-to": le()
          }
        ],
        "mask-image-l-from-color": [
          {
            "mask-l-from": B()
          }
        ],
        "mask-image-l-to-color": [
          {
            "mask-l-to": B()
          }
        ],
        "mask-image-x-from-pos": [
          {
            "mask-x-from": le()
          }
        ],
        "mask-image-x-to-pos": [
          {
            "mask-x-to": le()
          }
        ],
        "mask-image-x-from-color": [
          {
            "mask-x-from": B()
          }
        ],
        "mask-image-x-to-color": [
          {
            "mask-x-to": B()
          }
        ],
        "mask-image-y-from-pos": [
          {
            "mask-y-from": le()
          }
        ],
        "mask-image-y-to-pos": [
          {
            "mask-y-to": le()
          }
        ],
        "mask-image-y-from-color": [
          {
            "mask-y-from": B()
          }
        ],
        "mask-image-y-to-color": [
          {
            "mask-y-to": B()
          }
        ],
        "mask-image-radial": [
          {
            "mask-radial": [
              me,
              pe
            ]
          }
        ],
        "mask-image-radial-from-pos": [
          {
            "mask-radial-from": le()
          }
        ],
        "mask-image-radial-to-pos": [
          {
            "mask-radial-to": le()
          }
        ],
        "mask-image-radial-from-color": [
          {
            "mask-radial-from": B()
          }
        ],
        "mask-image-radial-to-color": [
          {
            "mask-radial-to": B()
          }
        ],
        "mask-image-radial-shape": [
          {
            "mask-radial": [
              "circle",
              "ellipse"
            ]
          }
        ],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              {
                closest: [
                  "side",
                  "corner"
                ],
                farthest: [
                  "side",
                  "corner"
                ]
              }
            ]
          }
        ],
        "mask-image-radial-pos": [
          {
            "mask-radial-at": H()
          }
        ],
        "mask-image-conic-pos": [
          {
            "mask-conic": [
              Ce
            ]
          }
        ],
        "mask-image-conic-from-pos": [
          {
            "mask-conic-from": le()
          }
        ],
        "mask-image-conic-to-pos": [
          {
            "mask-conic-to": le()
          }
        ],
        "mask-image-conic-from-color": [
          {
            "mask-conic-from": B()
          }
        ],
        "mask-image-conic-to-color": [
          {
            "mask-conic-to": B()
          }
        ],
        "mask-mode": [
          {
            mask: [
              "alpha",
              "luminance",
              "match"
            ]
          }
        ],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view"
            ]
          }
        ],
        "mask-position": [
          {
            mask: Z()
          }
        ],
        "mask-repeat": [
          {
            mask: T()
          }
        ],
        "mask-size": [
          {
            mask: L()
          }
        ],
        "mask-type": [
          {
            "mask-type": [
              "alpha",
              "luminance"
            ]
          }
        ],
        "mask-image": [
          {
            mask: [
              "none",
              me,
              pe
            ]
          }
        ],
        filter: [
          {
            filter: [
              "",
              "none",
              me,
              pe
            ]
          }
        ],
        blur: [
          {
            blur: ue()
          }
        ],
        brightness: [
          {
            brightness: [
              Ce,
              me,
              pe
            ]
          }
        ],
        contrast: [
          {
            contrast: [
              Ce,
              me,
              pe
            ]
          }
        ],
        "drop-shadow": [
          {
            "drop-shadow": [
              "",
              "none",
              S,
              jl,
              Nl
            ]
          }
        ],
        "drop-shadow-color": [
          {
            "drop-shadow": B()
          }
        ],
        grayscale: [
          {
            grayscale: [
              "",
              Ce,
              me,
              pe
            ]
          }
        ],
        "hue-rotate": [
          {
            "hue-rotate": [
              Ce,
              me,
              pe
            ]
          }
        ],
        invert: [
          {
            invert: [
              "",
              Ce,
              me,
              pe
            ]
          }
        ],
        saturate: [
          {
            saturate: [
              Ce,
              me,
              pe
            ]
          }
        ],
        sepia: [
          {
            sepia: [
              "",
              Ce,
              me,
              pe
            ]
          }
        ],
        "backdrop-filter": [
          {
            "backdrop-filter": [
              "",
              "none",
              me,
              pe
            ]
          }
        ],
        "backdrop-blur": [
          {
            "backdrop-blur": ue()
          }
        ],
        "backdrop-brightness": [
          {
            "backdrop-brightness": [
              Ce,
              me,
              pe
            ]
          }
        ],
        "backdrop-contrast": [
          {
            "backdrop-contrast": [
              Ce,
              me,
              pe
            ]
          }
        ],
        "backdrop-grayscale": [
          {
            "backdrop-grayscale": [
              "",
              Ce,
              me,
              pe
            ]
          }
        ],
        "backdrop-hue-rotate": [
          {
            "backdrop-hue-rotate": [
              Ce,
              me,
              pe
            ]
          }
        ],
        "backdrop-invert": [
          {
            "backdrop-invert": [
              "",
              Ce,
              me,
              pe
            ]
          }
        ],
        "backdrop-opacity": [
          {
            "backdrop-opacity": [
              Ce,
              me,
              pe
            ]
          }
        ],
        "backdrop-saturate": [
          {
            "backdrop-saturate": [
              Ce,
              me,
              pe
            ]
          }
        ],
        "backdrop-sepia": [
          {
            "backdrop-sepia": [
              "",
              Ce,
              me,
              pe
            ]
          }
        ],
        "border-collapse": [
          {
            border: [
              "collapse",
              "separate"
            ]
          }
        ],
        "border-spacing": [
          {
            "border-spacing": D()
          }
        ],
        "border-spacing-x": [
          {
            "border-spacing-x": D()
          }
        ],
        "border-spacing-y": [
          {
            "border-spacing-y": D()
          }
        ],
        "table-layout": [
          {
            table: [
              "auto",
              "fixed"
            ]
          }
        ],
        caption: [
          {
            caption: [
              "top",
              "bottom"
            ]
          }
        ],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              me,
              pe
            ]
          }
        ],
        "transition-behavior": [
          {
            transition: [
              "normal",
              "discrete"
            ]
          }
        ],
        duration: [
          {
            duration: [
              Ce,
              "initial",
              me,
              pe
            ]
          }
        ],
        ease: [
          {
            ease: [
              "linear",
              "initial",
              O,
              me,
              pe
            ]
          }
        ],
        delay: [
          {
            delay: [
              Ce,
              me,
              pe
            ]
          }
        ],
        animate: [
          {
            animate: [
              "none",
              k,
              me,
              pe
            ]
          }
        ],
        backface: [
          {
            backface: [
              "hidden",
              "visible"
            ]
          }
        ],
        perspective: [
          {
            perspective: [
              R,
              me,
              pe
            ]
          }
        ],
        "perspective-origin": [
          {
            "perspective-origin": q()
          }
        ],
        rotate: [
          {
            rotate: ye()
          }
        ],
        "rotate-x": [
          {
            "rotate-x": ye()
          }
        ],
        "rotate-y": [
          {
            "rotate-y": ye()
          }
        ],
        "rotate-z": [
          {
            "rotate-z": ye()
          }
        ],
        scale: [
          {
            scale: Re()
          }
        ],
        "scale-x": [
          {
            "scale-x": Re()
          }
        ],
        "scale-y": [
          {
            "scale-y": Re()
          }
        ],
        "scale-z": [
          {
            "scale-z": Re()
          }
        ],
        "scale-3d": [
          "scale-3d"
        ],
        skew: [
          {
            skew: Le()
          }
        ],
        "skew-x": [
          {
            "skew-x": Le()
          }
        ],
        "skew-y": [
          {
            "skew-y": Le()
          }
        ],
        transform: [
          {
            transform: [
              me,
              pe,
              "",
              "none",
              "gpu",
              "cpu"
            ]
          }
        ],
        "transform-origin": [
          {
            origin: q()
          }
        ],
        "transform-style": [
          {
            transform: [
              "3d",
              "flat"
            ]
          }
        ],
        translate: [
          {
            translate: Ue()
          }
        ],
        "translate-x": [
          {
            "translate-x": Ue()
          }
        ],
        "translate-y": [
          {
            "translate-y": Ue()
          }
        ],
        "translate-z": [
          {
            "translate-z": Ue()
          }
        ],
        "translate-none": [
          "translate-none"
        ],
        accent: [
          {
            accent: B()
          }
        ],
        appearance: [
          {
            appearance: [
              "none",
              "auto"
            ]
          }
        ],
        "caret-color": [
          {
            caret: B()
          }
        ],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light"
            ]
          }
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              me,
              pe
            ]
          }
        ],
        "field-sizing": [
          {
            "field-sizing": [
              "fixed",
              "content"
            ]
          }
        ],
        "pointer-events": [
          {
            "pointer-events": [
              "auto",
              "none"
            ]
          }
        ],
        resize: [
          {
            resize: [
              "none",
              "",
              "y",
              "x"
            ]
          }
        ],
        "scroll-behavior": [
          {
            scroll: [
              "auto",
              "smooth"
            ]
          }
        ],
        "scroll-m": [
          {
            "scroll-m": D()
          }
        ],
        "scroll-mx": [
          {
            "scroll-mx": D()
          }
        ],
        "scroll-my": [
          {
            "scroll-my": D()
          }
        ],
        "scroll-ms": [
          {
            "scroll-ms": D()
          }
        ],
        "scroll-me": [
          {
            "scroll-me": D()
          }
        ],
        "scroll-mt": [
          {
            "scroll-mt": D()
          }
        ],
        "scroll-mr": [
          {
            "scroll-mr": D()
          }
        ],
        "scroll-mb": [
          {
            "scroll-mb": D()
          }
        ],
        "scroll-ml": [
          {
            "scroll-ml": D()
          }
        ],
        "scroll-p": [
          {
            "scroll-p": D()
          }
        ],
        "scroll-px": [
          {
            "scroll-px": D()
          }
        ],
        "scroll-py": [
          {
            "scroll-py": D()
          }
        ],
        "scroll-ps": [
          {
            "scroll-ps": D()
          }
        ],
        "scroll-pe": [
          {
            "scroll-pe": D()
          }
        ],
        "scroll-pt": [
          {
            "scroll-pt": D()
          }
        ],
        "scroll-pr": [
          {
            "scroll-pr": D()
          }
        ],
        "scroll-pb": [
          {
            "scroll-pb": D()
          }
        ],
        "scroll-pl": [
          {
            "scroll-pl": D()
          }
        ],
        "snap-align": [
          {
            snap: [
              "start",
              "end",
              "center",
              "align-none"
            ]
          }
        ],
        "snap-stop": [
          {
            snap: [
              "normal",
              "always"
            ]
          }
        ],
        "snap-type": [
          {
            snap: [
              "none",
              "x",
              "y",
              "both"
            ]
          }
        ],
        "snap-strictness": [
          {
            snap: [
              "mandatory",
              "proximity"
            ]
          }
        ],
        touch: [
          {
            touch: [
              "auto",
              "none",
              "manipulation"
            ]
          }
        ],
        "touch-x": [
          {
            "touch-pan": [
              "x",
              "left",
              "right"
            ]
          }
        ],
        "touch-y": [
          {
            "touch-pan": [
              "y",
              "up",
              "down"
            ]
          }
        ],
        "touch-pz": [
          "touch-pinch-zoom"
        ],
        select: [
          {
            select: [
              "none",
              "text",
              "all",
              "auto"
            ]
          }
        ],
        "will-change": [
          {
            "will-change": [
              "auto",
              "scroll",
              "contents",
              "transform",
              me,
              pe
            ]
          }
        ],
        fill: [
          {
            fill: [
              "none",
              ...B()
            ]
          }
        ],
        "stroke-w": [
          {
            stroke: [
              Ce,
              Gi,
              ca,
              dd
            ]
          }
        ],
        stroke: [
          {
            stroke: [
              "none",
              ...B()
            ]
          }
        ],
        "forced-color-adjust": [
          {
            "forced-color-adjust": [
              "auto",
              "none"
            ]
          }
        ]
      },
      conflictingClassGroups: {
        overflow: [
          "overflow-x",
          "overflow-y"
        ],
        overscroll: [
          "overscroll-x",
          "overscroll-y"
        ],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left"
        ],
        "inset-x": [
          "right",
          "left"
        ],
        "inset-y": [
          "top",
          "bottom"
        ],
        flex: [
          "basis",
          "grow",
          "shrink"
        ],
        gap: [
          "gap-x",
          "gap-y"
        ],
        p: [
          "px",
          "py",
          "ps",
          "pe",
          "pt",
          "pr",
          "pb",
          "pl"
        ],
        px: [
          "pr",
          "pl"
        ],
        py: [
          "pt",
          "pb"
        ],
        m: [
          "mx",
          "my",
          "ms",
          "me",
          "mt",
          "mr",
          "mb",
          "ml"
        ],
        mx: [
          "mr",
          "ml"
        ],
        my: [
          "mt",
          "mb"
        ],
        size: [
          "w",
          "h"
        ],
        "font-size": [
          "leading"
        ],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction"
        ],
        "fvn-ordinal": [
          "fvn-normal"
        ],
        "fvn-slashed-zero": [
          "fvn-normal"
        ],
        "fvn-figure": [
          "fvn-normal"
        ],
        "fvn-spacing": [
          "fvn-normal"
        ],
        "fvn-fraction": [
          "fvn-normal"
        ],
        "line-clamp": [
          "display",
          "overflow"
        ],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-s": [
          "rounded-ss",
          "rounded-es"
        ],
        "rounded-e": [
          "rounded-se",
          "rounded-ee"
        ],
        "rounded-t": [
          "rounded-tl",
          "rounded-tr"
        ],
        "rounded-r": [
          "rounded-tr",
          "rounded-br"
        ],
        "rounded-b": [
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-l": [
          "rounded-tl",
          "rounded-bl"
        ],
        "border-spacing": [
          "border-spacing-x",
          "border-spacing-y"
        ],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l"
        ],
        "border-w-x": [
          "border-w-r",
          "border-w-l"
        ],
        "border-w-y": [
          "border-w-t",
          "border-w-b"
        ],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l"
        ],
        "border-color-x": [
          "border-color-r",
          "border-color-l"
        ],
        "border-color-y": [
          "border-color-t",
          "border-color-b"
        ],
        translate: [
          "translate-x",
          "translate-y",
          "translate-none"
        ],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z"
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml"
        ],
        "scroll-mx": [
          "scroll-mr",
          "scroll-ml"
        ],
        "scroll-my": [
          "scroll-mt",
          "scroll-mb"
        ],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl"
        ],
        "scroll-px": [
          "scroll-pr",
          "scroll-pl"
        ],
        "scroll-py": [
          "scroll-pt",
          "scroll-pb"
        ],
        touch: [
          "touch-x",
          "touch-y",
          "touch-pz"
        ],
        "touch-x": [
          "touch"
        ],
        "touch-y": [
          "touch"
        ],
        "touch-pz": [
          "touch"
        ]
      },
      conflictingClassGroupModifiers: {
        "font-size": [
          "leading"
        ]
      },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection"
      ]
    };
  }, ER = aR(SR);
  Be = function(...t) {
    return ER(Db(t));
  };
  const RR = Nb("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  });
  ma = function({ className: t, variant: r, size: o, asChild: i = false, ...l }) {
    const u = i ? Mb : "button";
    return x.jsx(u, {
      "data-slot": "button",
      className: Be(RR({
        variant: r,
        size: o,
        className: t
      })),
      ...l
    });
  };
  Kb = function({ className: t, type: r, ...o }) {
    return x.jsx("input", {
      type: r,
      "data-slot": "input",
      className: Be("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", t),
      ...o
    });
  };
  let TR;
  TR = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
  ];
  $e = TR.reduce((t, r) => {
    const o = No(`Primitive.${r}`), i = b.forwardRef((l, u) => {
      const { asChild: d, ...h } = l, g = d ? o : r;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), x.jsx(g, {
        ...h,
        ref: u
      });
    });
    return i.displayName = `Primitive.${r}`, {
      ...t,
      [r]: i
    };
  }, {});
  function Ib(t, r) {
    t && mc.flushSync(() => t.dispatchEvent(r));
  }
  xe = function(t, r, { checkForDefaultPrevented: o = true } = {}) {
    return function(l) {
      if (t == null ? void 0 : t(l), o === false || !l.defaultPrevented) return r == null ? void 0 : r(l);
    };
  };
  function CR(t, r) {
    const o = b.createContext(r), i = (u) => {
      const { children: d, ...h } = u, g = b.useMemo(() => h, Object.values(h));
      return x.jsx(o.Provider, {
        value: g,
        children: d
      });
    };
    i.displayName = t + "Provider";
    function l(u) {
      const d = b.useContext(o);
      if (d) return d;
      if (r !== void 0) return r;
      throw new Error(`\`${u}\` must be used within \`${t}\``);
    }
    return [
      i,
      l
    ];
  }
  Ea = function(t, r = []) {
    let o = [];
    function i(u, d) {
      const h = b.createContext(d), g = o.length;
      o = [
        ...o,
        d
      ];
      const p = (m) => {
        var _a5;
        const { scope: w, children: S, ...E } = m, R = ((_a5 = w == null ? void 0 : w[t]) == null ? void 0 : _a5[g]) || h, C = b.useMemo(() => E, Object.values(E));
        return x.jsx(R.Provider, {
          value: C,
          children: S
        });
      };
      p.displayName = u + "Provider";
      function v(m, w) {
        var _a5;
        const S = ((_a5 = w == null ? void 0 : w[t]) == null ? void 0 : _a5[g]) || h, E = b.useContext(S);
        if (E) return E;
        if (d !== void 0) return d;
        throw new Error(`\`${m}\` must be used within \`${u}\``);
      }
      return [
        p,
        v
      ];
    }
    const l = () => {
      const u = o.map((d) => b.createContext(d));
      return function(h) {
        const g = (h == null ? void 0 : h[t]) || u;
        return b.useMemo(() => ({
          [`__scope${t}`]: {
            ...h,
            [t]: g
          }
        }), [
          h,
          g
        ]);
      };
    };
    return l.scopeName = t, [
      i,
      MR(l, ...r)
    ];
  };
  function MR(...t) {
    const r = t[0];
    if (t.length === 1) return r;
    const o = () => {
      const i = t.map((l) => ({
        useScope: l(),
        scopeName: l.scopeName
      }));
      return function(u) {
        const d = i.reduce((h, { useScope: g, scopeName: p }) => {
          const m = g(u)[`__scope${p}`];
          return {
            ...h,
            ...m
          };
        }, {});
        return b.useMemo(() => ({
          [`__scope${r.scopeName}`]: d
        }), [
          d
        ]);
      };
    };
    return o.scopeName = r.scopeName, o;
  }
  let AR, OR;
  Pr = (globalThis == null ? void 0 : globalThis.document) ? b.useLayoutEffect : () => {
  };
  AR = tb[" useId ".trim().toString()] || (() => {
  });
  OR = 0;
  va = function(t) {
    const [r, o] = b.useState(AR());
    return Pr(() => {
      o((i) => i ?? String(OR++));
    }, [
      t
    ]), t || (r ? `radix-${r}` : "");
  };
  var DR = tb[" useInsertionEffect ".trim().toString()] || Pr;
  yc = function({ prop: t, defaultProp: r, onChange: o = () => {
  }, caller: i }) {
    const [l, u, d] = NR({
      defaultProp: r,
      onChange: o
    }), h = t !== void 0, g = h ? t : l;
    {
      const v = b.useRef(t !== void 0);
      b.useEffect(() => {
        const m = v.current;
        m !== h && console.warn(`${i} is changing from ${m ? "controlled" : "uncontrolled"} to ${h ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), v.current = h;
      }, [
        h,
        i
      ]);
    }
    const p = b.useCallback((v) => {
      var _a5;
      if (h) {
        const m = jR(v) ? v(t) : v;
        m !== t && ((_a5 = d.current) == null ? void 0 : _a5.call(d, m));
      } else u(v);
    }, [
      h,
      t,
      u,
      d
    ]);
    return [
      g,
      p
    ];
  };
  function NR({ defaultProp: t, onChange: r }) {
    const [o, i] = b.useState(t), l = b.useRef(o), u = b.useRef(r);
    return DR(() => {
      u.current = r;
    }, [
      r
    ]), b.useEffect(() => {
      var _a5;
      l.current !== o && ((_a5 = u.current) == null ? void 0 : _a5.call(u, o), l.current = o);
    }, [
      o,
      l
    ]), [
      o,
      i,
      u
    ];
  }
  function jR(t) {
    return typeof t == "function";
  }
  sr = function(t) {
    const r = b.useRef(t);
    return b.useEffect(() => {
      r.current = t;
    }), b.useMemo(() => (...o) => {
      var _a5;
      return (_a5 = r.current) == null ? void 0 : _a5.call(r, ...o);
    }, []);
  };
  function zR(t, r = globalThis == null ? void 0 : globalThis.document) {
    const o = sr(t);
    b.useEffect(() => {
      const i = (l) => {
        l.key === "Escape" && o(l);
      };
      return r.addEventListener("keydown", i, {
        capture: true
      }), () => r.removeEventListener("keydown", i, {
        capture: true
      });
    }, [
      o,
      r
    ]);
  }
  var kR = "DismissableLayer", Bd = "dismissableLayer.update", LR = "dismissableLayer.pointerDownOutside", UR = "dismissableLayer.focusOutside", uy, Qb = b.createContext({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
  }), bc = b.forwardRef((t, r) => {
    const { disableOutsidePointerEvents: o = false, onEscapeKeyDown: i, onPointerDownOutside: l, onFocusOutside: u, onInteractOutside: d, onDismiss: h, ...g } = t, p = b.useContext(Qb), [v, m] = b.useState(null), w = (v == null ? void 0 : v.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, S] = b.useState({}), E = dt(r, (K) => m(K)), R = Array.from(p.layers), [C] = [
      ...p.layersWithOutsidePointerEventsDisabled
    ].slice(-1), O = R.indexOf(C), k = v ? R.indexOf(v) : -1, j = p.layersWithOutsidePointerEventsDisabled.size > 0, H = k >= O, q = HR((K) => {
      const D = K.target, U = [
        ...p.branches
      ].some((ae) => ae.contains(D));
      !H || U || (l == null ? void 0 : l(K), d == null ? void 0 : d(K), K.defaultPrevented || (h == null ? void 0 : h()));
    }, w), V = qR((K) => {
      const D = K.target;
      [
        ...p.branches
      ].some((ae) => ae.contains(D)) || (u == null ? void 0 : u(K), d == null ? void 0 : d(K), K.defaultPrevented || (h == null ? void 0 : h()));
    }, w);
    return zR((K) => {
      k === p.layers.size - 1 && (i == null ? void 0 : i(K), !K.defaultPrevented && h && (K.preventDefault(), h()));
    }, w), b.useEffect(() => {
      if (v) return o && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (uy = w.body.style.pointerEvents, w.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(v)), p.layers.add(v), fy(), () => {
        o && p.layersWithOutsidePointerEventsDisabled.size === 1 && (w.body.style.pointerEvents = uy);
      };
    }, [
      v,
      w,
      o,
      p
    ]), b.useEffect(() => () => {
      v && (p.layers.delete(v), p.layersWithOutsidePointerEventsDisabled.delete(v), fy());
    }, [
      v,
      p
    ]), b.useEffect(() => {
      const K = () => S({});
      return document.addEventListener(Bd, K), () => document.removeEventListener(Bd, K);
    }, []), x.jsx($e.div, {
      ...g,
      ref: E,
      style: {
        pointerEvents: j ? H ? "auto" : "none" : void 0,
        ...t.style
      },
      onFocusCapture: xe(t.onFocusCapture, V.onFocusCapture),
      onBlurCapture: xe(t.onBlurCapture, V.onBlurCapture),
      onPointerDownCapture: xe(t.onPointerDownCapture, q.onPointerDownCapture)
    });
  });
  bc.displayName = kR;
  var BR = "DismissableLayerBranch", PR = b.forwardRef((t, r) => {
    const o = b.useContext(Qb), i = b.useRef(null), l = dt(r, i);
    return b.useEffect(() => {
      const u = i.current;
      if (u) return o.branches.add(u), () => {
        o.branches.delete(u);
      };
    }, [
      o.branches
    ]), x.jsx($e.div, {
      ...t,
      ref: l
    });
  });
  PR.displayName = BR;
  function HR(t, r = globalThis == null ? void 0 : globalThis.document) {
    const o = sr(t), i = b.useRef(false), l = b.useRef(() => {
    });
    return b.useEffect(() => {
      const u = (h) => {
        if (h.target && !i.current) {
          let g = function() {
            Xb(LR, o, p, {
              discrete: true
            });
          };
          const p = {
            originalEvent: h
          };
          h.pointerType === "touch" ? (r.removeEventListener("click", l.current), l.current = g, r.addEventListener("click", l.current, {
            once: true
          })) : g();
        } else r.removeEventListener("click", l.current);
        i.current = false;
      }, d = window.setTimeout(() => {
        r.addEventListener("pointerdown", u);
      }, 0);
      return () => {
        window.clearTimeout(d), r.removeEventListener("pointerdown", u), r.removeEventListener("click", l.current);
      };
    }, [
      r,
      o
    ]), {
      onPointerDownCapture: () => i.current = true
    };
  }
  function qR(t, r = globalThis == null ? void 0 : globalThis.document) {
    const o = sr(t), i = b.useRef(false);
    return b.useEffect(() => {
      const l = (u) => {
        u.target && !i.current && Xb(UR, o, {
          originalEvent: u
        }, {
          discrete: false
        });
      };
      return r.addEventListener("focusin", l), () => r.removeEventListener("focusin", l);
    }, [
      r,
      o
    ]), {
      onFocusCapture: () => i.current = true,
      onBlurCapture: () => i.current = false
    };
  }
  function fy() {
    const t = new CustomEvent(Bd);
    document.dispatchEvent(t);
  }
  function Xb(t, r, o, { discrete: i }) {
    const l = o.originalEvent.target, u = new CustomEvent(t, {
      bubbles: false,
      cancelable: true,
      detail: o
    });
    r && l.addEventListener(t, r, {
      once: true
    }), i ? Ib(l, u) : l.dispatchEvent(u);
  }
  var hd = "focusScope.autoFocusOnMount", pd = "focusScope.autoFocusOnUnmount", dy = {
    bubbles: false,
    cancelable: true
  }, GR = "FocusScope", dh = b.forwardRef((t, r) => {
    const { loop: o = false, trapped: i = false, onMountAutoFocus: l, onUnmountAutoFocus: u, ...d } = t, [h, g] = b.useState(null), p = sr(l), v = sr(u), m = b.useRef(null), w = dt(r, (R) => g(R)), S = b.useRef({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }).current;
    b.useEffect(() => {
      if (i) {
        let R = function(j) {
          if (S.paused || !h) return;
          const H = j.target;
          h.contains(H) ? m.current = H : Lr(m.current, {
            select: true
          });
        }, C = function(j) {
          if (S.paused || !h) return;
          const H = j.relatedTarget;
          H !== null && (h.contains(H) || Lr(m.current, {
            select: true
          }));
        }, O = function(j) {
          if (document.activeElement === document.body) for (const q of j) q.removedNodes.length > 0 && Lr(h);
        };
        document.addEventListener("focusin", R), document.addEventListener("focusout", C);
        const k = new MutationObserver(O);
        return h && k.observe(h, {
          childList: true,
          subtree: true
        }), () => {
          document.removeEventListener("focusin", R), document.removeEventListener("focusout", C), k.disconnect();
        };
      }
    }, [
      i,
      h,
      S.paused
    ]), b.useEffect(() => {
      if (h) {
        py.add(S);
        const R = document.activeElement;
        if (!h.contains(R)) {
          const O = new CustomEvent(hd, dy);
          h.addEventListener(hd, p), h.dispatchEvent(O), O.defaultPrevented || (FR(QR($b(h)), {
            select: true
          }), document.activeElement === R && Lr(h));
        }
        return () => {
          h.removeEventListener(hd, p), setTimeout(() => {
            const O = new CustomEvent(pd, dy);
            h.addEventListener(pd, v), h.dispatchEvent(O), O.defaultPrevented || Lr(R ?? document.body, {
              select: true
            }), h.removeEventListener(pd, v), py.remove(S);
          }, 0);
        };
      }
    }, [
      h,
      p,
      v,
      S
    ]);
    const E = b.useCallback((R) => {
      if (!o && !i || S.paused) return;
      const C = R.key === "Tab" && !R.altKey && !R.ctrlKey && !R.metaKey, O = document.activeElement;
      if (C && O) {
        const k = R.currentTarget, [j, H] = VR(k);
        j && H ? !R.shiftKey && O === H ? (R.preventDefault(), o && Lr(j, {
          select: true
        })) : R.shiftKey && O === j && (R.preventDefault(), o && Lr(H, {
          select: true
        })) : O === k && R.preventDefault();
      }
    }, [
      o,
      i,
      S.paused
    ]);
    return x.jsx($e.div, {
      tabIndex: -1,
      ...d,
      ref: w,
      onKeyDown: E
    });
  });
  dh.displayName = GR;
  function FR(t, { select: r = false } = {}) {
    const o = document.activeElement;
    for (const i of t) if (Lr(i, {
      select: r
    }), document.activeElement !== o) return;
  }
  function VR(t) {
    const r = $b(t), o = hy(r, t), i = hy(r.reverse(), t);
    return [
      o,
      i
    ];
  }
  function $b(t) {
    const r = [], o = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        const l = i.tagName === "INPUT" && i.type === "hidden";
        return i.disabled || i.hidden || l ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    for (; o.nextNode(); ) r.push(o.currentNode);
    return r;
  }
  function hy(t, r) {
    for (const o of t) if (!YR(o, {
      upTo: r
    })) return o;
  }
  function YR(t, { upTo: r }) {
    if (getComputedStyle(t).visibility === "hidden") return true;
    for (; t; ) {
      if (r !== void 0 && t === r) return false;
      if (getComputedStyle(t).display === "none") return true;
      t = t.parentElement;
    }
    return false;
  }
  function KR(t) {
    return t instanceof HTMLInputElement && "select" in t;
  }
  function Lr(t, { select: r = false } = {}) {
    if (t && t.focus) {
      const o = document.activeElement;
      t.focus({
        preventScroll: true
      }), t !== o && KR(t) && r && t.select();
    }
  }
  var py = IR();
  function IR() {
    let t = [];
    return {
      add(r) {
        const o = t[0];
        r !== o && (o == null ? void 0 : o.pause()), t = my(t, r), t.unshift(r);
      },
      remove(r) {
        var _a5;
        t = my(t, r), (_a5 = t[0]) == null ? void 0 : _a5.resume();
      }
    };
  }
  function my(t, r) {
    const o = [
      ...t
    ], i = o.indexOf(r);
    return i !== -1 && o.splice(i, 1), o;
  }
  function QR(t) {
    return t.filter((r) => r.tagName !== "A");
  }
  var XR = "Portal", _c = b.forwardRef((t, r) => {
    var _a5;
    const { container: o, ...i } = t, [l, u] = b.useState(false);
    Pr(() => u(true), []);
    const d = o || l && ((_a5 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a5.body);
    return d ? pb.createPortal(x.jsx($e.div, {
      ...i,
      ref: r
    }), d) : null;
  });
  _c.displayName = XR;
  function $R(t, r) {
    return b.useReducer((o, i) => r[o][i] ?? o, t);
  }
  Hn = (t) => {
    const { present: r, children: o } = t, i = ZR(r), l = typeof o == "function" ? o({
      present: i.isPresent
    }) : b.Children.only(o), u = dt(i.ref, JR(l));
    return typeof o == "function" || i.isPresent ? b.cloneElement(l, {
      ref: u
    }) : null;
  };
  Hn.displayName = "Presence";
  function ZR(t) {
    const [r, o] = b.useState(), i = b.useRef(null), l = b.useRef(t), u = b.useRef("none"), d = t ? "mounted" : "unmounted", [h, g] = $R(d, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
    return b.useEffect(() => {
      const p = zl(i.current);
      u.current = h === "mounted" ? p : "none";
    }, [
      h
    ]), Pr(() => {
      const p = i.current, v = l.current;
      if (v !== t) {
        const w = u.current, S = zl(p);
        t ? g("MOUNT") : S === "none" || (p == null ? void 0 : p.display) === "none" ? g("UNMOUNT") : g(v && w !== S ? "ANIMATION_OUT" : "UNMOUNT"), l.current = t;
      }
    }, [
      t,
      g
    ]), Pr(() => {
      if (r) {
        let p;
        const v = r.ownerDocument.defaultView ?? window, m = (S) => {
          const R = zl(i.current).includes(S.animationName);
          if (S.target === r && R && (g("ANIMATION_END"), !l.current)) {
            const C = r.style.animationFillMode;
            r.style.animationFillMode = "forwards", p = v.setTimeout(() => {
              r.style.animationFillMode === "forwards" && (r.style.animationFillMode = C);
            });
          }
        }, w = (S) => {
          S.target === r && (u.current = zl(i.current));
        };
        return r.addEventListener("animationstart", w), r.addEventListener("animationcancel", m), r.addEventListener("animationend", m), () => {
          v.clearTimeout(p), r.removeEventListener("animationstart", w), r.removeEventListener("animationcancel", m), r.removeEventListener("animationend", m);
        };
      } else g("ANIMATION_END");
    }, [
      r,
      g
    ]), {
      isPresent: [
        "mounted",
        "unmountSuspended"
      ].includes(h),
      ref: b.useCallback((p) => {
        i.current = p ? getComputedStyle(p) : null, o(p);
      }, [])
    };
  }
  function zl(t) {
    return (t == null ? void 0 : t.animationName) || "none";
  }
  function JR(t) {
    var _a5, _b3;
    let r = (_a5 = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : _a5.get, o = r && "isReactWarning" in r && r.isReactWarning;
    return o ? t.ref : (r = (_b3 = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : _b3.get, o = r && "isReactWarning" in r && r.isReactWarning, o ? t.props.ref : t.props.ref || t.ref);
  }
  var md = 0;
  function Zb() {
    b.useEffect(() => {
      const t = document.querySelectorAll("[data-radix-focus-guard]");
      return document.body.insertAdjacentElement("afterbegin", t[0] ?? gy()), document.body.insertAdjacentElement("beforeend", t[1] ?? gy()), md++, () => {
        md === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), md--;
      };
    }, []);
  }
  function gy() {
    const t = document.createElement("span");
    return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
  }
  var jn = function() {
    return jn = Object.assign || function(r) {
      for (var o, i = 1, l = arguments.length; i < l; i++) {
        o = arguments[i];
        for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (r[u] = o[u]);
      }
      return r;
    }, jn.apply(this, arguments);
  };
  function Jb(t, r) {
    var o = {};
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && r.indexOf(i) < 0 && (o[i] = t[i]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var l = 0, i = Object.getOwnPropertySymbols(t); l < i.length; l++) r.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[l]) && (o[i[l]] = t[i[l]]);
    return o;
  }
  function WR(t, r, o) {
    if (o || arguments.length === 2) for (var i = 0, l = r.length, u; i < l; i++) (u || !(i in r)) && (u || (u = Array.prototype.slice.call(r, 0, i)), u[i] = r[i]);
    return t.concat(u || Array.prototype.slice.call(r));
  }
  var Vl = "right-scroll-bar-position", Yl = "width-before-scroll-bar", e2 = "with-scroll-bars-hidden", t2 = "--removed-body-scroll-bar-size";
  function gd(t, r) {
    return typeof t == "function" ? t(r) : t && (t.current = r), t;
  }
  function n2(t, r) {
    var o = b.useState(function() {
      return {
        value: t,
        callback: r,
        facade: {
          get current() {
            return o.value;
          },
          set current(i) {
            var l = o.value;
            l !== i && (o.value = i, o.callback(i, l));
          }
        }
      };
    })[0];
    return o.callback = r, o.facade;
  }
  var r2 = typeof window < "u" ? b.useLayoutEffect : b.useEffect, vy = /* @__PURE__ */ new WeakMap();
  function a2(t, r) {
    var o = n2(null, function(i) {
      return t.forEach(function(l) {
        return gd(l, i);
      });
    });
    return r2(function() {
      var i = vy.get(o);
      if (i) {
        var l = new Set(i), u = new Set(t), d = o.current;
        l.forEach(function(h) {
          u.has(h) || gd(h, null);
        }), u.forEach(function(h) {
          l.has(h) || gd(h, d);
        });
      }
      vy.set(o, t);
    }, [
      t
    ]), o;
  }
  function o2(t) {
    return t;
  }
  function i2(t, r) {
    r === void 0 && (r = o2);
    var o = [], i = false, l = {
      read: function() {
        if (i) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        return o.length ? o[o.length - 1] : t;
      },
      useMedium: function(u) {
        var d = r(u, i);
        return o.push(d), function() {
          o = o.filter(function(h) {
            return h !== d;
          });
        };
      },
      assignSyncMedium: function(u) {
        for (i = true; o.length; ) {
          var d = o;
          o = [], d.forEach(u);
        }
        o = {
          push: function(h) {
            return u(h);
          },
          filter: function() {
            return o;
          }
        };
      },
      assignMedium: function(u) {
        i = true;
        var d = [];
        if (o.length) {
          var h = o;
          o = [], h.forEach(u), d = o;
        }
        var g = function() {
          var v = d;
          d = [], v.forEach(u);
        }, p = function() {
          return Promise.resolve().then(g);
        };
        p(), o = {
          push: function(v) {
            d.push(v), p();
          },
          filter: function(v) {
            return d = d.filter(v), o;
          }
        };
      }
    };
    return l;
  }
  function s2(t) {
    t === void 0 && (t = {});
    var r = i2(null);
    return r.options = jn({
      async: true,
      ssr: false
    }, t), r;
  }
  var Wb = function(t) {
    var r = t.sideCar, o = Jb(t, [
      "sideCar"
    ]);
    if (!r) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var i = r.read();
    if (!i) throw new Error("Sidecar medium not found");
    return b.createElement(i, jn({}, o));
  };
  Wb.isSideCarExport = true;
  function l2(t, r) {
    return t.useMedium(r), Wb;
  }
  var e0 = s2(), vd = function() {
  }, wc = b.forwardRef(function(t, r) {
    var o = b.useRef(null), i = b.useState({
      onScrollCapture: vd,
      onWheelCapture: vd,
      onTouchMoveCapture: vd
    }), l = i[0], u = i[1], d = t.forwardProps, h = t.children, g = t.className, p = t.removeScrollBar, v = t.enabled, m = t.shards, w = t.sideCar, S = t.noRelative, E = t.noIsolation, R = t.inert, C = t.allowPinchZoom, O = t.as, k = O === void 0 ? "div" : O, j = t.gapMode, H = Jb(t, [
      "forwardProps",
      "children",
      "className",
      "removeScrollBar",
      "enabled",
      "shards",
      "sideCar",
      "noRelative",
      "noIsolation",
      "inert",
      "allowPinchZoom",
      "as",
      "gapMode"
    ]), q = w, V = a2([
      o,
      r
    ]), K = jn(jn({}, H), l);
    return b.createElement(b.Fragment, null, v && b.createElement(q, {
      sideCar: e0,
      removeScrollBar: p,
      shards: m,
      noRelative: S,
      noIsolation: E,
      inert: R,
      setCallbacks: u,
      allowPinchZoom: !!C,
      lockRef: o,
      gapMode: j
    }), d ? b.cloneElement(b.Children.only(h), jn(jn({}, K), {
      ref: V
    })) : b.createElement(k, jn({}, K, {
      className: g,
      ref: V
    }), h));
  });
  wc.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
  };
  wc.classNames = {
    fullWidth: Yl,
    zeroRight: Vl
  };
  var c2 = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
  function u2() {
    if (!document) return null;
    var t = document.createElement("style");
    t.type = "text/css";
    var r = c2();
    return r && t.setAttribute("nonce", r), t;
  }
  function f2(t, r) {
    t.styleSheet ? t.styleSheet.cssText = r : t.appendChild(document.createTextNode(r));
  }
  function d2(t) {
    var r = document.head || document.getElementsByTagName("head")[0];
    r.appendChild(t);
  }
  var h2 = function() {
    var t = 0, r = null;
    return {
      add: function(o) {
        t == 0 && (r = u2()) && (f2(r, o), d2(r)), t++;
      },
      remove: function() {
        t--, !t && r && (r.parentNode && r.parentNode.removeChild(r), r = null);
      }
    };
  }, p2 = function() {
    var t = h2();
    return function(r, o) {
      b.useEffect(function() {
        return t.add(r), function() {
          t.remove();
        };
      }, [
        r && o
      ]);
    };
  }, t0 = function() {
    var t = p2(), r = function(o) {
      var i = o.styles, l = o.dynamic;
      return t(i, l), null;
    };
    return r;
  }, m2 = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
  }, yd = function(t) {
    return parseInt(t || "", 10) || 0;
  }, g2 = function(t) {
    var r = window.getComputedStyle(document.body), o = r[t === "padding" ? "paddingLeft" : "marginLeft"], i = r[t === "padding" ? "paddingTop" : "marginTop"], l = r[t === "padding" ? "paddingRight" : "marginRight"];
    return [
      yd(o),
      yd(i),
      yd(l)
    ];
  }, v2 = function(t) {
    if (t === void 0 && (t = "margin"), typeof window > "u") return m2;
    var r = g2(t), o = document.documentElement.clientWidth, i = window.innerWidth;
    return {
      left: r[0],
      top: r[1],
      right: r[2],
      gap: Math.max(0, i - o + r[2] - r[0])
    };
  }, y2 = t0(), Mo = "data-scroll-locked", b2 = function(t, r, o, i) {
    var l = t.left, u = t.top, d = t.right, h = t.gap;
    return o === void 0 && (o = "margin"), `
  .`.concat(e2, ` {
   overflow: hidden `).concat(i, `;
   padding-right: `).concat(h, "px ").concat(i, `;
  }
  body[`).concat(Mo, `] {
    overflow: hidden `).concat(i, `;
    overscroll-behavior: contain;
    `).concat([
      r && "position: relative ".concat(i, ";"),
      o === "margin" && `
    padding-left: `.concat(l, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(d, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h, "px ").concat(i, `;
    `),
      o === "padding" && "padding-right: ".concat(h, "px ").concat(i, ";")
    ].filter(Boolean).join(""), `
  }
  
  .`).concat(Vl, ` {
    right: `).concat(h, "px ").concat(i, `;
  }
  
  .`).concat(Yl, ` {
    margin-right: `).concat(h, "px ").concat(i, `;
  }
  
  .`).concat(Vl, " .").concat(Vl, ` {
    right: 0 `).concat(i, `;
  }
  
  .`).concat(Yl, " .").concat(Yl, ` {
    margin-right: 0 `).concat(i, `;
  }
  
  body[`).concat(Mo, `] {
    `).concat(t2, ": ").concat(h, `px;
  }
`);
  }, yy = function() {
    var t = parseInt(document.body.getAttribute(Mo) || "0", 10);
    return isFinite(t) ? t : 0;
  }, _2 = function() {
    b.useEffect(function() {
      return document.body.setAttribute(Mo, (yy() + 1).toString()), function() {
        var t = yy() - 1;
        t <= 0 ? document.body.removeAttribute(Mo) : document.body.setAttribute(Mo, t.toString());
      };
    }, []);
  }, w2 = function(t) {
    var r = t.noRelative, o = t.noImportant, i = t.gapMode, l = i === void 0 ? "margin" : i;
    _2();
    var u = b.useMemo(function() {
      return v2(l);
    }, [
      l
    ]);
    return b.createElement(y2, {
      styles: b2(u, !r, l, o ? "" : "!important")
    });
  }, Pd = false;
  if (typeof window < "u") try {
    var kl = Object.defineProperty({}, "passive", {
      get: function() {
        return Pd = true, true;
      }
    });
    window.addEventListener("test", kl, kl), window.removeEventListener("test", kl, kl);
  } catch {
    Pd = false;
  }
  var yo = Pd ? {
    passive: false
  } : false, x2 = function(t) {
    return t.tagName === "TEXTAREA";
  }, n0 = function(t, r) {
    if (!(t instanceof Element)) return false;
    var o = window.getComputedStyle(t);
    return o[r] !== "hidden" && !(o.overflowY === o.overflowX && !x2(t) && o[r] === "visible");
  }, S2 = function(t) {
    return n0(t, "overflowY");
  }, E2 = function(t) {
    return n0(t, "overflowX");
  }, by = function(t, r) {
    var o = r.ownerDocument, i = r;
    do {
      typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
      var l = r0(t, i);
      if (l) {
        var u = a0(t, i), d = u[1], h = u[2];
        if (d > h) return true;
      }
      i = i.parentNode;
    } while (i && i !== o.body);
    return false;
  }, R2 = function(t) {
    var r = t.scrollTop, o = t.scrollHeight, i = t.clientHeight;
    return [
      r,
      o,
      i
    ];
  }, T2 = function(t) {
    var r = t.scrollLeft, o = t.scrollWidth, i = t.clientWidth;
    return [
      r,
      o,
      i
    ];
  }, r0 = function(t, r) {
    return t === "v" ? S2(r) : E2(r);
  }, a0 = function(t, r) {
    return t === "v" ? R2(r) : T2(r);
  }, C2 = function(t, r) {
    return t === "h" && r === "rtl" ? -1 : 1;
  }, M2 = function(t, r, o, i, l) {
    var u = C2(t, window.getComputedStyle(r).direction), d = u * i, h = o.target, g = r.contains(h), p = false, v = d > 0, m = 0, w = 0;
    do {
      if (!h) break;
      var S = a0(t, h), E = S[0], R = S[1], C = S[2], O = R - C - u * E;
      (E || O) && r0(t, h) && (m += O, w += E);
      var k = h.parentNode;
      h = k && k.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? k.host : k;
    } while (!g && h !== document.body || g && (r.contains(h) || r === h));
    return (v && Math.abs(m) < 1 || !v && Math.abs(w) < 1) && (p = true), p;
  }, Ll = function(t) {
    return "changedTouches" in t ? [
      t.changedTouches[0].clientX,
      t.changedTouches[0].clientY
    ] : [
      0,
      0
    ];
  }, _y = function(t) {
    return [
      t.deltaX,
      t.deltaY
    ];
  }, wy = function(t) {
    return t && "current" in t ? t.current : t;
  }, A2 = function(t, r) {
    return t[0] === r[0] && t[1] === r[1];
  }, O2 = function(t) {
    return `
  .block-interactivity-`.concat(t, ` {pointer-events: none;}
  .allow-interactivity-`).concat(t, ` {pointer-events: all;}
`);
  }, D2 = 0, bo = [];
  function N2(t) {
    var r = b.useRef([]), o = b.useRef([
      0,
      0
    ]), i = b.useRef(), l = b.useState(D2++)[0], u = b.useState(t0)[0], d = b.useRef(t);
    b.useEffect(function() {
      d.current = t;
    }, [
      t
    ]), b.useEffect(function() {
      if (t.inert) {
        document.body.classList.add("block-interactivity-".concat(l));
        var R = WR([
          t.lockRef.current
        ], (t.shards || []).map(wy), true).filter(Boolean);
        return R.forEach(function(C) {
          return C.classList.add("allow-interactivity-".concat(l));
        }), function() {
          document.body.classList.remove("block-interactivity-".concat(l)), R.forEach(function(C) {
            return C.classList.remove("allow-interactivity-".concat(l));
          });
        };
      }
    }, [
      t.inert,
      t.lockRef.current,
      t.shards
    ]);
    var h = b.useCallback(function(R, C) {
      if ("touches" in R && R.touches.length === 2 || R.type === "wheel" && R.ctrlKey) return !d.current.allowPinchZoom;
      var O = Ll(R), k = o.current, j = "deltaX" in R ? R.deltaX : k[0] - O[0], H = "deltaY" in R ? R.deltaY : k[1] - O[1], q, V = R.target, K = Math.abs(j) > Math.abs(H) ? "h" : "v";
      if ("touches" in R && K === "h" && V.type === "range") return false;
      var D = by(K, V);
      if (!D) return true;
      if (D ? q = K : (q = K === "v" ? "h" : "v", D = by(K, V)), !D) return false;
      if (!i.current && "changedTouches" in R && (j || H) && (i.current = q), !q) return true;
      var U = i.current || q;
      return M2(U, C, R, U === "h" ? j : H);
    }, []), g = b.useCallback(function(R) {
      var C = R;
      if (!(!bo.length || bo[bo.length - 1] !== u)) {
        var O = "deltaY" in C ? _y(C) : Ll(C), k = r.current.filter(function(q) {
          return q.name === C.type && (q.target === C.target || C.target === q.shadowParent) && A2(q.delta, O);
        })[0];
        if (k && k.should) {
          C.cancelable && C.preventDefault();
          return;
        }
        if (!k) {
          var j = (d.current.shards || []).map(wy).filter(Boolean).filter(function(q) {
            return q.contains(C.target);
          }), H = j.length > 0 ? h(C, j[0]) : !d.current.noIsolation;
          H && C.cancelable && C.preventDefault();
        }
      }
    }, []), p = b.useCallback(function(R, C, O, k) {
      var j = {
        name: R,
        delta: C,
        target: O,
        should: k,
        shadowParent: j2(O)
      };
      r.current.push(j), setTimeout(function() {
        r.current = r.current.filter(function(H) {
          return H !== j;
        });
      }, 1);
    }, []), v = b.useCallback(function(R) {
      o.current = Ll(R), i.current = void 0;
    }, []), m = b.useCallback(function(R) {
      p(R.type, _y(R), R.target, h(R, t.lockRef.current));
    }, []), w = b.useCallback(function(R) {
      p(R.type, Ll(R), R.target, h(R, t.lockRef.current));
    }, []);
    b.useEffect(function() {
      return bo.push(u), t.setCallbacks({
        onScrollCapture: m,
        onWheelCapture: m,
        onTouchMoveCapture: w
      }), document.addEventListener("wheel", g, yo), document.addEventListener("touchmove", g, yo), document.addEventListener("touchstart", v, yo), function() {
        bo = bo.filter(function(R) {
          return R !== u;
        }), document.removeEventListener("wheel", g, yo), document.removeEventListener("touchmove", g, yo), document.removeEventListener("touchstart", v, yo);
      };
    }, []);
    var S = t.removeScrollBar, E = t.inert;
    return b.createElement(b.Fragment, null, E ? b.createElement(u, {
      styles: O2(l)
    }) : null, S ? b.createElement(w2, {
      noRelative: t.noRelative,
      gapMode: t.gapMode
    }) : null);
  }
  function j2(t) {
    for (var r = null; t !== null; ) t instanceof ShadowRoot && (r = t.host, t = t.host), t = t.parentNode;
    return r;
  }
  const z2 = l2(e0, N2);
  var hh = b.forwardRef(function(t, r) {
    return b.createElement(wc, jn({}, t, {
      ref: r,
      sideCar: z2
    }));
  });
  hh.classNames = wc.classNames;
  var k2 = function(t) {
    if (typeof document > "u") return null;
    var r = Array.isArray(t) ? t[0] : t;
    return r.ownerDocument.body;
  }, _o = /* @__PURE__ */ new WeakMap(), Ul = /* @__PURE__ */ new WeakMap(), Bl = {}, bd = 0, o0 = function(t) {
    return t && (t.host || o0(t.parentNode));
  }, L2 = function(t, r) {
    return r.map(function(o) {
      if (t.contains(o)) return o;
      var i = o0(o);
      return i && t.contains(i) ? i : (console.error("aria-hidden", o, "in not contained inside", t, ". Doing nothing"), null);
    }).filter(function(o) {
      return !!o;
    });
  }, U2 = function(t, r, o, i) {
    var l = L2(r, Array.isArray(t) ? t : [
      t
    ]);
    Bl[o] || (Bl[o] = /* @__PURE__ */ new WeakMap());
    var u = Bl[o], d = [], h = /* @__PURE__ */ new Set(), g = new Set(l), p = function(m) {
      !m || h.has(m) || (h.add(m), p(m.parentNode));
    };
    l.forEach(p);
    var v = function(m) {
      !m || g.has(m) || Array.prototype.forEach.call(m.children, function(w) {
        if (h.has(w)) v(w);
        else try {
          var S = w.getAttribute(i), E = S !== null && S !== "false", R = (_o.get(w) || 0) + 1, C = (u.get(w) || 0) + 1;
          _o.set(w, R), u.set(w, C), d.push(w), R === 1 && E && Ul.set(w, true), C === 1 && w.setAttribute(o, "true"), E || w.setAttribute(i, "true");
        } catch (O) {
          console.error("aria-hidden: cannot operate on ", w, O);
        }
      });
    };
    return v(r), h.clear(), bd++, function() {
      d.forEach(function(m) {
        var w = _o.get(m) - 1, S = u.get(m) - 1;
        _o.set(m, w), u.set(m, S), w || (Ul.has(m) || m.removeAttribute(i), Ul.delete(m)), S || m.removeAttribute(o);
      }), bd--, bd || (_o = /* @__PURE__ */ new WeakMap(), _o = /* @__PURE__ */ new WeakMap(), Ul = /* @__PURE__ */ new WeakMap(), Bl = {});
    };
  }, i0 = function(t, r, o) {
    o === void 0 && (o = "data-aria-hidden");
    var i = Array.from(Array.isArray(t) ? t : [
      t
    ]), l = k2(t);
    return l ? (i.push.apply(i, Array.from(l.querySelectorAll("[aria-live], script"))), U2(i, l, o, "aria-hidden")) : function() {
      return null;
    };
  }, xc = "Dialog", [s0, T4] = Ea(xc), [B2, En] = s0(xc), l0 = (t) => {
    const { __scopeDialog: r, children: o, open: i, defaultOpen: l, onOpenChange: u, modal: d = true } = t, h = b.useRef(null), g = b.useRef(null), [p, v] = yc({
      prop: i,
      defaultProp: l ?? false,
      onChange: u,
      caller: xc
    });
    return x.jsx(B2, {
      scope: r,
      triggerRef: h,
      contentRef: g,
      contentId: va(),
      titleId: va(),
      descriptionId: va(),
      open: p,
      onOpenChange: v,
      onOpenToggle: b.useCallback(() => v((m) => !m), [
        v
      ]),
      modal: d,
      children: o
    });
  };
  l0.displayName = xc;
  var c0 = "DialogTrigger", u0 = b.forwardRef((t, r) => {
    const { __scopeDialog: o, ...i } = t, l = En(c0, o), u = dt(r, l.triggerRef);
    return x.jsx($e.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": l.open,
      "aria-controls": l.contentId,
      "data-state": gh(l.open),
      ...i,
      ref: u,
      onClick: xe(t.onClick, l.onOpenToggle)
    });
  });
  u0.displayName = c0;
  var ph = "DialogPortal", [P2, f0] = s0(ph, {
    forceMount: void 0
  }), d0 = (t) => {
    const { __scopeDialog: r, forceMount: o, children: i, container: l } = t, u = En(ph, r);
    return x.jsx(P2, {
      scope: r,
      forceMount: o,
      children: b.Children.map(i, (d) => x.jsx(Hn, {
        present: o || u.open,
        children: x.jsx(_c, {
          asChild: true,
          container: l,
          children: d
        })
      }))
    });
  };
  d0.displayName = ph;
  var nc = "DialogOverlay", h0 = b.forwardRef((t, r) => {
    const o = f0(nc, t.__scopeDialog), { forceMount: i = o.forceMount, ...l } = t, u = En(nc, t.__scopeDialog);
    return u.modal ? x.jsx(Hn, {
      present: i || u.open,
      children: x.jsx(q2, {
        ...l,
        ref: r
      })
    }) : null;
  });
  h0.displayName = nc;
  var H2 = No("DialogOverlay.RemoveScroll"), q2 = b.forwardRef((t, r) => {
    const { __scopeDialog: o, ...i } = t, l = En(nc, o);
    return x.jsx(hh, {
      as: H2,
      allowPinchZoom: true,
      shards: [
        l.contentRef
      ],
      children: x.jsx($e.div, {
        "data-state": gh(l.open),
        ...i,
        ref: r,
        style: {
          pointerEvents: "auto",
          ...i.style
        }
      })
    });
  }), ba = "DialogContent", p0 = b.forwardRef((t, r) => {
    const o = f0(ba, t.__scopeDialog), { forceMount: i = o.forceMount, ...l } = t, u = En(ba, t.__scopeDialog);
    return x.jsx(Hn, {
      present: i || u.open,
      children: u.modal ? x.jsx(G2, {
        ...l,
        ref: r
      }) : x.jsx(F2, {
        ...l,
        ref: r
      })
    });
  });
  p0.displayName = ba;
  var G2 = b.forwardRef((t, r) => {
    const o = En(ba, t.__scopeDialog), i = b.useRef(null), l = dt(r, o.contentRef, i);
    return b.useEffect(() => {
      const u = i.current;
      if (u) return i0(u);
    }, []), x.jsx(m0, {
      ...t,
      ref: l,
      trapFocus: o.open,
      disableOutsidePointerEvents: true,
      onCloseAutoFocus: xe(t.onCloseAutoFocus, (u) => {
        var _a5;
        u.preventDefault(), (_a5 = o.triggerRef.current) == null ? void 0 : _a5.focus();
      }),
      onPointerDownOutside: xe(t.onPointerDownOutside, (u) => {
        const d = u.detail.originalEvent, h = d.button === 0 && d.ctrlKey === true;
        (d.button === 2 || h) && u.preventDefault();
      }),
      onFocusOutside: xe(t.onFocusOutside, (u) => u.preventDefault())
    });
  }), F2 = b.forwardRef((t, r) => {
    const o = En(ba, t.__scopeDialog), i = b.useRef(false), l = b.useRef(false);
    return x.jsx(m0, {
      ...t,
      ref: r,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      onCloseAutoFocus: (u) => {
        var _a5, _b3;
        (_a5 = t.onCloseAutoFocus) == null ? void 0 : _a5.call(t, u), u.defaultPrevented || (i.current || ((_b3 = o.triggerRef.current) == null ? void 0 : _b3.focus()), u.preventDefault()), i.current = false, l.current = false;
      },
      onInteractOutside: (u) => {
        var _a5, _b3;
        (_a5 = t.onInteractOutside) == null ? void 0 : _a5.call(t, u), u.defaultPrevented || (i.current = true, u.detail.originalEvent.type === "pointerdown" && (l.current = true));
        const d = u.target;
        ((_b3 = o.triggerRef.current) == null ? void 0 : _b3.contains(d)) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && l.current && u.preventDefault();
      }
    });
  }), m0 = b.forwardRef((t, r) => {
    const { __scopeDialog: o, trapFocus: i, onOpenAutoFocus: l, onCloseAutoFocus: u, ...d } = t, h = En(ba, o), g = b.useRef(null), p = dt(r, g);
    return Zb(), x.jsxs(x.Fragment, {
      children: [
        x.jsx(dh, {
          asChild: true,
          loop: true,
          trapped: i,
          onMountAutoFocus: l,
          onUnmountAutoFocus: u,
          children: x.jsx(bc, {
            role: "dialog",
            id: h.contentId,
            "aria-describedby": h.descriptionId,
            "aria-labelledby": h.titleId,
            "data-state": gh(h.open),
            ...d,
            ref: p,
            onDismiss: () => h.onOpenChange(false)
          })
        }),
        x.jsxs(x.Fragment, {
          children: [
            x.jsx(V2, {
              titleId: h.titleId
            }),
            x.jsx(K2, {
              contentRef: g,
              descriptionId: h.descriptionId
            })
          ]
        })
      ]
    });
  }), mh = "DialogTitle", g0 = b.forwardRef((t, r) => {
    const { __scopeDialog: o, ...i } = t, l = En(mh, o);
    return x.jsx($e.h2, {
      id: l.titleId,
      ...i,
      ref: r
    });
  });
  g0.displayName = mh;
  var v0 = "DialogDescription", y0 = b.forwardRef((t, r) => {
    const { __scopeDialog: o, ...i } = t, l = En(v0, o);
    return x.jsx($e.p, {
      id: l.descriptionId,
      ...i,
      ref: r
    });
  });
  y0.displayName = v0;
  var b0 = "DialogClose", _0 = b.forwardRef((t, r) => {
    const { __scopeDialog: o, ...i } = t, l = En(b0, o);
    return x.jsx($e.button, {
      type: "button",
      ...i,
      ref: r,
      onClick: xe(t.onClick, () => l.onOpenChange(false))
    });
  });
  _0.displayName = b0;
  function gh(t) {
    return t ? "open" : "closed";
  }
  var w0 = "DialogTitleWarning", [C4, x0] = CR(w0, {
    contentName: ba,
    titleName: mh,
    docsSlug: "dialog"
  }), V2 = ({ titleId: t }) => {
    const r = x0(w0), o = `\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;
    return b.useEffect(() => {
      t && (document.getElementById(t) || console.error(o));
    }, [
      o,
      t
    ]), null;
  }, Y2 = "DialogDescriptionWarning", K2 = ({ contentRef: t, descriptionId: r }) => {
    const i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${x0(Y2).contentName}}.`;
    return b.useEffect(() => {
      var _a5;
      const l = (_a5 = t.current) == null ? void 0 : _a5.getAttribute("aria-describedby");
      r && l && (document.getElementById(r) || console.warn(i));
    }, [
      i,
      t,
      r
    ]), null;
  }, S0 = l0, I2 = u0, E0 = d0, R0 = h0, T0 = p0, C0 = g0, M0 = y0, A0 = _0;
  function Q2({ ...t }) {
    return x.jsx(S0, {
      "data-slot": "sheet",
      ...t
    });
  }
  function X2({ ...t }) {
    return x.jsx(E0, {
      "data-slot": "sheet-portal",
      ...t
    });
  }
  function $2({ className: t, ...r }) {
    return x.jsx(R0, {
      "data-slot": "sheet-overlay",
      className: Be("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", t),
      ...r
    });
  }
  function Z2({ className: t, children: r, side: o = "right", ...i }) {
    return x.jsxs(X2, {
      children: [
        x.jsx($2, {}),
        x.jsxs(T0, {
          "data-slot": "sheet-content",
          className: Be("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", o === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", o === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", o === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", o === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", t),
          ...i,
          children: [
            r,
            x.jsxs(A0, {
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
              children: [
                x.jsx(kb, {
                  className: "size-4"
                }),
                x.jsx("span", {
                  className: "sr-only",
                  children: "Close"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function J2({ className: t, ...r }) {
    return x.jsx("div", {
      "data-slot": "sheet-header",
      className: Be("flex flex-col gap-1.5 p-4", t),
      ...r
    });
  }
  function W2({ className: t, ...r }) {
    return x.jsx(C0, {
      "data-slot": "sheet-title",
      className: Be("text-foreground font-semibold", t),
      ...r
    });
  }
  function eT({ className: t, ...r }) {
    return x.jsx(M0, {
      "data-slot": "sheet-description",
      className: Be("text-muted-foreground text-sm", t),
      ...r
    });
  }
  const tT = [
    "top",
    "right",
    "bottom",
    "left"
  ], Hr = Math.min, Qt = Math.max, rc = Math.round, Pl = Math.floor, Ln = (t) => ({
    x: t,
    y: t
  }), nT = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  }, rT = {
    start: "end",
    end: "start"
  };
  function Hd(t, r, o) {
    return Qt(t, Hr(r, o));
  }
  function lr(t, r) {
    return typeof t == "function" ? t(r) : t;
  }
  function cr(t) {
    return t.split("-")[0];
  }
  function Ho(t) {
    return t.split("-")[1];
  }
  function vh(t) {
    return t === "x" ? "y" : "x";
  }
  function yh(t) {
    return t === "y" ? "height" : "width";
  }
  function kn(t) {
    return [
      "top",
      "bottom"
    ].includes(cr(t)) ? "y" : "x";
  }
  function bh(t) {
    return vh(kn(t));
  }
  function aT(t, r, o) {
    o === void 0 && (o = false);
    const i = Ho(t), l = bh(t), u = yh(l);
    let d = l === "x" ? i === (o ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
    return r.reference[u] > r.floating[u] && (d = ac(d)), [
      d,
      ac(d)
    ];
  }
  function oT(t) {
    const r = ac(t);
    return [
      qd(t),
      r,
      qd(r)
    ];
  }
  function qd(t) {
    return t.replace(/start|end/g, (r) => rT[r]);
  }
  function iT(t, r, o) {
    const i = [
      "left",
      "right"
    ], l = [
      "right",
      "left"
    ], u = [
      "top",
      "bottom"
    ], d = [
      "bottom",
      "top"
    ];
    switch (t) {
      case "top":
      case "bottom":
        return o ? r ? l : i : r ? i : l;
      case "left":
      case "right":
        return r ? u : d;
      default:
        return [];
    }
  }
  function sT(t, r, o, i) {
    const l = Ho(t);
    let u = iT(cr(t), o === "start", i);
    return l && (u = u.map((d) => d + "-" + l), r && (u = u.concat(u.map(qd)))), u;
  }
  function ac(t) {
    return t.replace(/left|right|bottom|top/g, (r) => nT[r]);
  }
  function lT(t) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...t
    };
  }
  function O0(t) {
    return typeof t != "number" ? lT(t) : {
      top: t,
      right: t,
      bottom: t,
      left: t
    };
  }
  function oc(t) {
    const { x: r, y: o, width: i, height: l } = t;
    return {
      width: i,
      height: l,
      top: o,
      left: r,
      right: r + i,
      bottom: o + l,
      x: r,
      y: o
    };
  }
  function xy(t, r, o) {
    let { reference: i, floating: l } = t;
    const u = kn(r), d = bh(r), h = yh(d), g = cr(r), p = u === "y", v = i.x + i.width / 2 - l.width / 2, m = i.y + i.height / 2 - l.height / 2, w = i[h] / 2 - l[h] / 2;
    let S;
    switch (g) {
      case "top":
        S = {
          x: v,
          y: i.y - l.height
        };
        break;
      case "bottom":
        S = {
          x: v,
          y: i.y + i.height
        };
        break;
      case "right":
        S = {
          x: i.x + i.width,
          y: m
        };
        break;
      case "left":
        S = {
          x: i.x - l.width,
          y: m
        };
        break;
      default:
        S = {
          x: i.x,
          y: i.y
        };
    }
    switch (Ho(r)) {
      case "start":
        S[d] -= w * (o && p ? -1 : 1);
        break;
      case "end":
        S[d] += w * (o && p ? -1 : 1);
        break;
    }
    return S;
  }
  const cT = async (t, r, o) => {
    const { placement: i = "bottom", strategy: l = "absolute", middleware: u = [], platform: d } = o, h = u.filter(Boolean), g = await (d.isRTL == null ? void 0 : d.isRTL(r));
    let p = await d.getElementRects({
      reference: t,
      floating: r,
      strategy: l
    }), { x: v, y: m } = xy(p, i, g), w = i, S = {}, E = 0;
    for (let R = 0; R < h.length; R++) {
      const { name: C, fn: O } = h[R], { x: k, y: j, data: H, reset: q } = await O({
        x: v,
        y: m,
        initialPlacement: i,
        placement: w,
        strategy: l,
        middlewareData: S,
        rects: p,
        platform: d,
        elements: {
          reference: t,
          floating: r
        }
      });
      v = k ?? v, m = j ?? m, S = {
        ...S,
        [C]: {
          ...S[C],
          ...H
        }
      }, q && E <= 50 && (E++, typeof q == "object" && (q.placement && (w = q.placement), q.rects && (p = q.rects === true ? await d.getElementRects({
        reference: t,
        floating: r,
        strategy: l
      }) : q.rects), { x: v, y: m } = xy(p, w, g)), R = -1);
    }
    return {
      x: v,
      y: m,
      placement: w,
      strategy: l,
      middlewareData: S
    };
  };
  async function $i(t, r) {
    var o;
    r === void 0 && (r = {});
    const { x: i, y: l, platform: u, rects: d, elements: h, strategy: g } = t, { boundary: p = "clippingAncestors", rootBoundary: v = "viewport", elementContext: m = "floating", altBoundary: w = false, padding: S = 0 } = lr(r, t), E = O0(S), C = h[w ? m === "floating" ? "reference" : "floating" : m], O = oc(await u.getClippingRect({
      element: (o = await (u.isElement == null ? void 0 : u.isElement(C))) == null || o ? C : C.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(h.floating)),
      boundary: p,
      rootBoundary: v,
      strategy: g
    })), k = m === "floating" ? {
      x: i,
      y: l,
      width: d.floating.width,
      height: d.floating.height
    } : d.reference, j = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(h.floating)), H = await (u.isElement == null ? void 0 : u.isElement(j)) ? await (u.getScale == null ? void 0 : u.getScale(j)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, q = oc(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: h,
      rect: k,
      offsetParent: j,
      strategy: g
    }) : k);
    return {
      top: (O.top - q.top + E.top) / H.y,
      bottom: (q.bottom - O.bottom + E.bottom) / H.y,
      left: (O.left - q.left + E.left) / H.x,
      right: (q.right - O.right + E.right) / H.x
    };
  }
  const uT = (t) => ({
    name: "arrow",
    options: t,
    async fn(r) {
      const { x: o, y: i, placement: l, rects: u, platform: d, elements: h, middlewareData: g } = r, { element: p, padding: v = 0 } = lr(t, r) || {};
      if (p == null) return {};
      const m = O0(v), w = {
        x: o,
        y: i
      }, S = bh(l), E = yh(S), R = await d.getDimensions(p), C = S === "y", O = C ? "top" : "left", k = C ? "bottom" : "right", j = C ? "clientHeight" : "clientWidth", H = u.reference[E] + u.reference[S] - w[S] - u.floating[E], q = w[S] - u.reference[S], V = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(p));
      let K = V ? V[j] : 0;
      (!K || !await (d.isElement == null ? void 0 : d.isElement(V))) && (K = h.floating[j] || u.floating[E]);
      const D = H / 2 - q / 2, U = K / 2 - R[E] / 2 - 1, ae = Hr(m[O], U), ie = Hr(m[k], U), ee = ae, re = K - R[E] - ie, fe = K / 2 - R[E] / 2 + D, se = Hd(ee, fe, re), A = !g.arrow && Ho(l) != null && fe !== se && u.reference[E] / 2 - (fe < ee ? ae : ie) - R[E] / 2 < 0, I = A ? fe < ee ? fe - ee : fe - re : 0;
      return {
        [S]: w[S] + I,
        data: {
          [S]: se,
          centerOffset: fe - se - I,
          ...A && {
            alignmentOffset: I
          }
        },
        reset: A
      };
    }
  }), fT = function(t) {
    return t === void 0 && (t = {}), {
      name: "flip",
      options: t,
      async fn(r) {
        var o, i;
        const { placement: l, middlewareData: u, rects: d, initialPlacement: h, platform: g, elements: p } = r, { mainAxis: v = true, crossAxis: m = true, fallbackPlacements: w, fallbackStrategy: S = "bestFit", fallbackAxisSideDirection: E = "none", flipAlignment: R = true, ...C } = lr(t, r);
        if ((o = u.arrow) != null && o.alignmentOffset) return {};
        const O = cr(l), k = kn(h), j = cr(h) === h, H = await (g.isRTL == null ? void 0 : g.isRTL(p.floating)), q = w || (j || !R ? [
          ac(h)
        ] : oT(h)), V = E !== "none";
        !w && V && q.push(...sT(h, R, E, H));
        const K = [
          h,
          ...q
        ], D = await $i(r, C), U = [];
        let ae = ((i = u.flip) == null ? void 0 : i.overflows) || [];
        if (v && U.push(D[O]), m) {
          const fe = aT(l, d, H);
          U.push(D[fe[0]], D[fe[1]]);
        }
        if (ae = [
          ...ae,
          {
            placement: l,
            overflows: U
          }
        ], !U.every((fe) => fe <= 0)) {
          var ie, ee;
          const fe = (((ie = u.flip) == null ? void 0 : ie.index) || 0) + 1, se = K[fe];
          if (se && (!(m === "alignment" ? k !== kn(se) : false) || ae.every((B) => B.overflows[0] > 0 && kn(B.placement) === k))) return {
            data: {
              index: fe,
              overflows: ae
            },
            reset: {
              placement: se
            }
          };
          let A = (ee = ae.filter((I) => I.overflows[0] <= 0).sort((I, B) => I.overflows[1] - B.overflows[1])[0]) == null ? void 0 : ee.placement;
          if (!A) switch (S) {
            case "bestFit": {
              var re;
              const I = (re = ae.filter((B) => {
                if (V) {
                  const Z = kn(B.placement);
                  return Z === k || Z === "y";
                }
                return true;
              }).map((B) => [
                B.placement,
                B.overflows.filter((Z) => Z > 0).reduce((Z, T) => Z + T, 0)
              ]).sort((B, Z) => B[1] - Z[1])[0]) == null ? void 0 : re[0];
              I && (A = I);
              break;
            }
            case "initialPlacement":
              A = h;
              break;
          }
          if (l !== A) return {
            reset: {
              placement: A
            }
          };
        }
        return {};
      }
    };
  };
  function Sy(t, r) {
    return {
      top: t.top - r.height,
      right: t.right - r.width,
      bottom: t.bottom - r.height,
      left: t.left - r.width
    };
  }
  function Ey(t) {
    return tT.some((r) => t[r] >= 0);
  }
  const dT = function(t) {
    return t === void 0 && (t = {}), {
      name: "hide",
      options: t,
      async fn(r) {
        const { rects: o } = r, { strategy: i = "referenceHidden", ...l } = lr(t, r);
        switch (i) {
          case "referenceHidden": {
            const u = await $i(r, {
              ...l,
              elementContext: "reference"
            }), d = Sy(u, o.reference);
            return {
              data: {
                referenceHiddenOffsets: d,
                referenceHidden: Ey(d)
              }
            };
          }
          case "escaped": {
            const u = await $i(r, {
              ...l,
              altBoundary: true
            }), d = Sy(u, o.floating);
            return {
              data: {
                escapedOffsets: d,
                escaped: Ey(d)
              }
            };
          }
          default:
            return {};
        }
      }
    };
  };
  async function hT(t, r) {
    const { placement: o, platform: i, elements: l } = t, u = await (i.isRTL == null ? void 0 : i.isRTL(l.floating)), d = cr(o), h = Ho(o), g = kn(o) === "y", p = [
      "left",
      "top"
    ].includes(d) ? -1 : 1, v = u && g ? -1 : 1, m = lr(r, t);
    let { mainAxis: w, crossAxis: S, alignmentAxis: E } = typeof m == "number" ? {
      mainAxis: m,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: m.mainAxis || 0,
      crossAxis: m.crossAxis || 0,
      alignmentAxis: m.alignmentAxis
    };
    return h && typeof E == "number" && (S = h === "end" ? E * -1 : E), g ? {
      x: S * v,
      y: w * p
    } : {
      x: w * p,
      y: S * v
    };
  }
  const pT = function(t) {
    return t === void 0 && (t = 0), {
      name: "offset",
      options: t,
      async fn(r) {
        var o, i;
        const { x: l, y: u, placement: d, middlewareData: h } = r, g = await hT(r, t);
        return d === ((o = h.offset) == null ? void 0 : o.placement) && (i = h.arrow) != null && i.alignmentOffset ? {} : {
          x: l + g.x,
          y: u + g.y,
          data: {
            ...g,
            placement: d
          }
        };
      }
    };
  }, mT = function(t) {
    return t === void 0 && (t = {}), {
      name: "shift",
      options: t,
      async fn(r) {
        const { x: o, y: i, placement: l } = r, { mainAxis: u = true, crossAxis: d = false, limiter: h = {
          fn: (C) => {
            let { x: O, y: k } = C;
            return {
              x: O,
              y: k
            };
          }
        }, ...g } = lr(t, r), p = {
          x: o,
          y: i
        }, v = await $i(r, g), m = kn(cr(l)), w = vh(m);
        let S = p[w], E = p[m];
        if (u) {
          const C = w === "y" ? "top" : "left", O = w === "y" ? "bottom" : "right", k = S + v[C], j = S - v[O];
          S = Hd(k, S, j);
        }
        if (d) {
          const C = m === "y" ? "top" : "left", O = m === "y" ? "bottom" : "right", k = E + v[C], j = E - v[O];
          E = Hd(k, E, j);
        }
        const R = h.fn({
          ...r,
          [w]: S,
          [m]: E
        });
        return {
          ...R,
          data: {
            x: R.x - o,
            y: R.y - i,
            enabled: {
              [w]: u,
              [m]: d
            }
          }
        };
      }
    };
  }, gT = function(t) {
    return t === void 0 && (t = {}), {
      options: t,
      fn(r) {
        const { x: o, y: i, placement: l, rects: u, middlewareData: d } = r, { offset: h = 0, mainAxis: g = true, crossAxis: p = true } = lr(t, r), v = {
          x: o,
          y: i
        }, m = kn(l), w = vh(m);
        let S = v[w], E = v[m];
        const R = lr(h, r), C = typeof R == "number" ? {
          mainAxis: R,
          crossAxis: 0
        } : {
          mainAxis: 0,
          crossAxis: 0,
          ...R
        };
        if (g) {
          const j = w === "y" ? "height" : "width", H = u.reference[w] - u.floating[j] + C.mainAxis, q = u.reference[w] + u.reference[j] - C.mainAxis;
          S < H ? S = H : S > q && (S = q);
        }
        if (p) {
          var O, k;
          const j = w === "y" ? "width" : "height", H = [
            "top",
            "left"
          ].includes(cr(l)), q = u.reference[m] - u.floating[j] + (H && ((O = d.offset) == null ? void 0 : O[m]) || 0) + (H ? 0 : C.crossAxis), V = u.reference[m] + u.reference[j] + (H ? 0 : ((k = d.offset) == null ? void 0 : k[m]) || 0) - (H ? C.crossAxis : 0);
          E < q ? E = q : E > V && (E = V);
        }
        return {
          [w]: S,
          [m]: E
        };
      }
    };
  }, vT = function(t) {
    return t === void 0 && (t = {}), {
      name: "size",
      options: t,
      async fn(r) {
        var o, i;
        const { placement: l, rects: u, platform: d, elements: h } = r, { apply: g = () => {
        }, ...p } = lr(t, r), v = await $i(r, p), m = cr(l), w = Ho(l), S = kn(l) === "y", { width: E, height: R } = u.floating;
        let C, O;
        m === "top" || m === "bottom" ? (C = m, O = w === (await (d.isRTL == null ? void 0 : d.isRTL(h.floating)) ? "start" : "end") ? "left" : "right") : (O = m, C = w === "end" ? "top" : "bottom");
        const k = R - v.top - v.bottom, j = E - v.left - v.right, H = Hr(R - v[C], k), q = Hr(E - v[O], j), V = !r.middlewareData.shift;
        let K = H, D = q;
        if ((o = r.middlewareData.shift) != null && o.enabled.x && (D = j), (i = r.middlewareData.shift) != null && i.enabled.y && (K = k), V && !w) {
          const ae = Qt(v.left, 0), ie = Qt(v.right, 0), ee = Qt(v.top, 0), re = Qt(v.bottom, 0);
          S ? D = E - 2 * (ae !== 0 || ie !== 0 ? ae + ie : Qt(v.left, v.right)) : K = R - 2 * (ee !== 0 || re !== 0 ? ee + re : Qt(v.top, v.bottom));
        }
        await g({
          ...r,
          availableWidth: D,
          availableHeight: K
        });
        const U = await d.getDimensions(h.floating);
        return E !== U.width || R !== U.height ? {
          reset: {
            rects: true
          }
        } : {};
      }
    };
  };
  function Sc() {
    return typeof window < "u";
  }
  function qo(t) {
    return D0(t) ? (t.nodeName || "").toLowerCase() : "#document";
  }
  function Xt(t) {
    var r;
    return (t == null || (r = t.ownerDocument) == null ? void 0 : r.defaultView) || window;
  }
  function qn(t) {
    var r;
    return (r = (D0(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : r.documentElement;
  }
  function D0(t) {
    return Sc() ? t instanceof Node || t instanceof Xt(t).Node : false;
  }
  function wn(t) {
    return Sc() ? t instanceof Element || t instanceof Xt(t).Element : false;
  }
  function Un(t) {
    return Sc() ? t instanceof HTMLElement || t instanceof Xt(t).HTMLElement : false;
  }
  function Ry(t) {
    return !Sc() || typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof Xt(t).ShadowRoot;
  }
  function ss(t) {
    const { overflow: r, overflowX: o, overflowY: i, display: l } = xn(t);
    return /auto|scroll|overlay|hidden|clip/.test(r + i + o) && ![
      "inline",
      "contents"
    ].includes(l);
  }
  function yT(t) {
    return [
      "table",
      "td",
      "th"
    ].includes(qo(t));
  }
  function Ec(t) {
    return [
      ":popover-open",
      ":modal"
    ].some((r) => {
      try {
        return t.matches(r);
      } catch {
        return false;
      }
    });
  }
  function _h(t) {
    const r = wh(), o = wn(t) ? xn(t) : t;
    return [
      "transform",
      "translate",
      "scale",
      "rotate",
      "perspective"
    ].some((i) => o[i] ? o[i] !== "none" : false) || (o.containerType ? o.containerType !== "normal" : false) || !r && (o.backdropFilter ? o.backdropFilter !== "none" : false) || !r && (o.filter ? o.filter !== "none" : false) || [
      "transform",
      "translate",
      "scale",
      "rotate",
      "perspective",
      "filter"
    ].some((i) => (o.willChange || "").includes(i)) || [
      "paint",
      "layout",
      "strict",
      "content"
    ].some((i) => (o.contain || "").includes(i));
  }
  function bT(t) {
    let r = qr(t);
    for (; Un(r) && !jo(r); ) {
      if (_h(r)) return r;
      if (Ec(r)) return null;
      r = qr(r);
    }
    return null;
  }
  function wh() {
    return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
  }
  function jo(t) {
    return [
      "html",
      "body",
      "#document"
    ].includes(qo(t));
  }
  function xn(t) {
    return Xt(t).getComputedStyle(t);
  }
  function Rc(t) {
    return wn(t) ? {
      scrollLeft: t.scrollLeft,
      scrollTop: t.scrollTop
    } : {
      scrollLeft: t.scrollX,
      scrollTop: t.scrollY
    };
  }
  function qr(t) {
    if (qo(t) === "html") return t;
    const r = t.assignedSlot || t.parentNode || Ry(t) && t.host || qn(t);
    return Ry(r) ? r.host : r;
  }
  function N0(t) {
    const r = qr(t);
    return jo(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : Un(r) && ss(r) ? r : N0(r);
  }
  function Zi(t, r, o) {
    var i;
    r === void 0 && (r = []), o === void 0 && (o = true);
    const l = N0(t), u = l === ((i = t.ownerDocument) == null ? void 0 : i.body), d = Xt(l);
    if (u) {
      const h = Gd(d);
      return r.concat(d, d.visualViewport || [], ss(l) ? l : [], h && o ? Zi(h) : []);
    }
    return r.concat(l, Zi(l, [], o));
  }
  function Gd(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
  }
  function j0(t) {
    const r = xn(t);
    let o = parseFloat(r.width) || 0, i = parseFloat(r.height) || 0;
    const l = Un(t), u = l ? t.offsetWidth : o, d = l ? t.offsetHeight : i, h = rc(o) !== u || rc(i) !== d;
    return h && (o = u, i = d), {
      width: o,
      height: i,
      $: h
    };
  }
  function xh(t) {
    return wn(t) ? t : t.contextElement;
  }
  function Ao(t) {
    const r = xh(t);
    if (!Un(r)) return Ln(1);
    const o = r.getBoundingClientRect(), { width: i, height: l, $: u } = j0(r);
    let d = (u ? rc(o.width) : o.width) / i, h = (u ? rc(o.height) : o.height) / l;
    return (!d || !Number.isFinite(d)) && (d = 1), (!h || !Number.isFinite(h)) && (h = 1), {
      x: d,
      y: h
    };
  }
  const _T = Ln(0);
  function z0(t) {
    const r = Xt(t);
    return !wh() || !r.visualViewport ? _T : {
      x: r.visualViewport.offsetLeft,
      y: r.visualViewport.offsetTop
    };
  }
  function wT(t, r, o) {
    return r === void 0 && (r = false), !o || r && o !== Xt(t) ? false : r;
  }
  function _a(t, r, o, i) {
    r === void 0 && (r = false), o === void 0 && (o = false);
    const l = t.getBoundingClientRect(), u = xh(t);
    let d = Ln(1);
    r && (i ? wn(i) && (d = Ao(i)) : d = Ao(t));
    const h = wT(u, o, i) ? z0(u) : Ln(0);
    let g = (l.left + h.x) / d.x, p = (l.top + h.y) / d.y, v = l.width / d.x, m = l.height / d.y;
    if (u) {
      const w = Xt(u), S = i && wn(i) ? Xt(i) : i;
      let E = w, R = Gd(E);
      for (; R && i && S !== E; ) {
        const C = Ao(R), O = R.getBoundingClientRect(), k = xn(R), j = O.left + (R.clientLeft + parseFloat(k.paddingLeft)) * C.x, H = O.top + (R.clientTop + parseFloat(k.paddingTop)) * C.y;
        g *= C.x, p *= C.y, v *= C.x, m *= C.y, g += j, p += H, E = Xt(R), R = Gd(E);
      }
    }
    return oc({
      width: v,
      height: m,
      x: g,
      y: p
    });
  }
  function Sh(t, r) {
    const o = Rc(t).scrollLeft;
    return r ? r.left + o : _a(qn(t)).left + o;
  }
  function k0(t, r, o) {
    o === void 0 && (o = false);
    const i = t.getBoundingClientRect(), l = i.left + r.scrollLeft - (o ? 0 : Sh(t, i)), u = i.top + r.scrollTop;
    return {
      x: l,
      y: u
    };
  }
  function xT(t) {
    let { elements: r, rect: o, offsetParent: i, strategy: l } = t;
    const u = l === "fixed", d = qn(i), h = r ? Ec(r.floating) : false;
    if (i === d || h && u) return o;
    let g = {
      scrollLeft: 0,
      scrollTop: 0
    }, p = Ln(1);
    const v = Ln(0), m = Un(i);
    if ((m || !m && !u) && ((qo(i) !== "body" || ss(d)) && (g = Rc(i)), Un(i))) {
      const S = _a(i);
      p = Ao(i), v.x = S.x + i.clientLeft, v.y = S.y + i.clientTop;
    }
    const w = d && !m && !u ? k0(d, g, true) : Ln(0);
    return {
      width: o.width * p.x,
      height: o.height * p.y,
      x: o.x * p.x - g.scrollLeft * p.x + v.x + w.x,
      y: o.y * p.y - g.scrollTop * p.y + v.y + w.y
    };
  }
  function ST(t) {
    return Array.from(t.getClientRects());
  }
  function ET(t) {
    const r = qn(t), o = Rc(t), i = t.ownerDocument.body, l = Qt(r.scrollWidth, r.clientWidth, i.scrollWidth, i.clientWidth), u = Qt(r.scrollHeight, r.clientHeight, i.scrollHeight, i.clientHeight);
    let d = -o.scrollLeft + Sh(t);
    const h = -o.scrollTop;
    return xn(i).direction === "rtl" && (d += Qt(r.clientWidth, i.clientWidth) - l), {
      width: l,
      height: u,
      x: d,
      y: h
    };
  }
  function RT(t, r) {
    const o = Xt(t), i = qn(t), l = o.visualViewport;
    let u = i.clientWidth, d = i.clientHeight, h = 0, g = 0;
    if (l) {
      u = l.width, d = l.height;
      const p = wh();
      (!p || p && r === "fixed") && (h = l.offsetLeft, g = l.offsetTop);
    }
    return {
      width: u,
      height: d,
      x: h,
      y: g
    };
  }
  function TT(t, r) {
    const o = _a(t, true, r === "fixed"), i = o.top + t.clientTop, l = o.left + t.clientLeft, u = Un(t) ? Ao(t) : Ln(1), d = t.clientWidth * u.x, h = t.clientHeight * u.y, g = l * u.x, p = i * u.y;
    return {
      width: d,
      height: h,
      x: g,
      y: p
    };
  }
  function Ty(t, r, o) {
    let i;
    if (r === "viewport") i = RT(t, o);
    else if (r === "document") i = ET(qn(t));
    else if (wn(r)) i = TT(r, o);
    else {
      const l = z0(t);
      i = {
        x: r.x - l.x,
        y: r.y - l.y,
        width: r.width,
        height: r.height
      };
    }
    return oc(i);
  }
  function L0(t, r) {
    const o = qr(t);
    return o === r || !wn(o) || jo(o) ? false : xn(o).position === "fixed" || L0(o, r);
  }
  function CT(t, r) {
    const o = r.get(t);
    if (o) return o;
    let i = Zi(t, [], false).filter((h) => wn(h) && qo(h) !== "body"), l = null;
    const u = xn(t).position === "fixed";
    let d = u ? qr(t) : t;
    for (; wn(d) && !jo(d); ) {
      const h = xn(d), g = _h(d);
      !g && h.position === "fixed" && (l = null), (u ? !g && !l : !g && h.position === "static" && !!l && [
        "absolute",
        "fixed"
      ].includes(l.position) || ss(d) && !g && L0(t, d)) ? i = i.filter((v) => v !== d) : l = h, d = qr(d);
    }
    return r.set(t, i), i;
  }
  function MT(t) {
    let { element: r, boundary: o, rootBoundary: i, strategy: l } = t;
    const d = [
      ...o === "clippingAncestors" ? Ec(r) ? [] : CT(r, this._c) : [].concat(o),
      i
    ], h = d[0], g = d.reduce((p, v) => {
      const m = Ty(r, v, l);
      return p.top = Qt(m.top, p.top), p.right = Hr(m.right, p.right), p.bottom = Hr(m.bottom, p.bottom), p.left = Qt(m.left, p.left), p;
    }, Ty(r, h, l));
    return {
      width: g.right - g.left,
      height: g.bottom - g.top,
      x: g.left,
      y: g.top
    };
  }
  function AT(t) {
    const { width: r, height: o } = j0(t);
    return {
      width: r,
      height: o
    };
  }
  function OT(t, r, o) {
    const i = Un(r), l = qn(r), u = o === "fixed", d = _a(t, true, u, r);
    let h = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const g = Ln(0);
    function p() {
      g.x = Sh(l);
    }
    if (i || !i && !u) if ((qo(r) !== "body" || ss(l)) && (h = Rc(r)), i) {
      const S = _a(r, true, u, r);
      g.x = S.x + r.clientLeft, g.y = S.y + r.clientTop;
    } else l && p();
    u && !i && l && p();
    const v = l && !i && !u ? k0(l, h) : Ln(0), m = d.left + h.scrollLeft - g.x - v.x, w = d.top + h.scrollTop - g.y - v.y;
    return {
      x: m,
      y: w,
      width: d.width,
      height: d.height
    };
  }
  function _d(t) {
    return xn(t).position === "static";
  }
  function Cy(t, r) {
    if (!Un(t) || xn(t).position === "fixed") return null;
    if (r) return r(t);
    let o = t.offsetParent;
    return qn(t) === o && (o = o.ownerDocument.body), o;
  }
  function U0(t, r) {
    const o = Xt(t);
    if (Ec(t)) return o;
    if (!Un(t)) {
      let l = qr(t);
      for (; l && !jo(l); ) {
        if (wn(l) && !_d(l)) return l;
        l = qr(l);
      }
      return o;
    }
    let i = Cy(t, r);
    for (; i && yT(i) && _d(i); ) i = Cy(i, r);
    return i && jo(i) && _d(i) && !_h(i) ? o : i || bT(t) || o;
  }
  const DT = async function(t) {
    const r = this.getOffsetParent || U0, o = this.getDimensions, i = await o(t.floating);
    return {
      reference: OT(t.reference, await r(t.floating), t.strategy),
      floating: {
        x: 0,
        y: 0,
        width: i.width,
        height: i.height
      }
    };
  };
  function NT(t) {
    return xn(t).direction === "rtl";
  }
  const jT = {
    convertOffsetParentRelativeRectToViewportRelativeRect: xT,
    getDocumentElement: qn,
    getClippingRect: MT,
    getOffsetParent: U0,
    getElementRects: DT,
    getClientRects: ST,
    getDimensions: AT,
    getScale: Ao,
    isElement: wn,
    isRTL: NT
  };
  function B0(t, r) {
    return t.x === r.x && t.y === r.y && t.width === r.width && t.height === r.height;
  }
  function zT(t, r) {
    let o = null, i;
    const l = qn(t);
    function u() {
      var h;
      clearTimeout(i), (h = o) == null || h.disconnect(), o = null;
    }
    function d(h, g) {
      h === void 0 && (h = false), g === void 0 && (g = 1), u();
      const p = t.getBoundingClientRect(), { left: v, top: m, width: w, height: S } = p;
      if (h || r(), !w || !S) return;
      const E = Pl(m), R = Pl(l.clientWidth - (v + w)), C = Pl(l.clientHeight - (m + S)), O = Pl(v), j = {
        rootMargin: -E + "px " + -R + "px " + -C + "px " + -O + "px",
        threshold: Qt(0, Hr(1, g)) || 1
      };
      let H = true;
      function q(V) {
        const K = V[0].intersectionRatio;
        if (K !== g) {
          if (!H) return d();
          K ? d(false, K) : i = setTimeout(() => {
            d(false, 1e-7);
          }, 1e3);
        }
        K === 1 && !B0(p, t.getBoundingClientRect()) && d(), H = false;
      }
      try {
        o = new IntersectionObserver(q, {
          ...j,
          root: l.ownerDocument
        });
      } catch {
        o = new IntersectionObserver(q, j);
      }
      o.observe(t);
    }
    return d(true), u;
  }
  function kT(t, r, o, i) {
    i === void 0 && (i = {});
    const { ancestorScroll: l = true, ancestorResize: u = true, elementResize: d = typeof ResizeObserver == "function", layoutShift: h = typeof IntersectionObserver == "function", animationFrame: g = false } = i, p = xh(t), v = l || u ? [
      ...p ? Zi(p) : [],
      ...Zi(r)
    ] : [];
    v.forEach((O) => {
      l && O.addEventListener("scroll", o, {
        passive: true
      }), u && O.addEventListener("resize", o);
    });
    const m = p && h ? zT(p, o) : null;
    let w = -1, S = null;
    d && (S = new ResizeObserver((O) => {
      let [k] = O;
      k && k.target === p && S && (S.unobserve(r), cancelAnimationFrame(w), w = requestAnimationFrame(() => {
        var j;
        (j = S) == null || j.observe(r);
      })), o();
    }), p && !g && S.observe(p), S.observe(r));
    let E, R = g ? _a(t) : null;
    g && C();
    function C() {
      const O = _a(t);
      R && !B0(R, O) && o(), R = O, E = requestAnimationFrame(C);
    }
    return o(), () => {
      var O;
      v.forEach((k) => {
        l && k.removeEventListener("scroll", o), u && k.removeEventListener("resize", o);
      }), m == null ? void 0 : m(), (O = S) == null || O.disconnect(), S = null, g && cancelAnimationFrame(E);
    };
  }
  const LT = pT, UT = mT, BT = fT, PT = vT, HT = dT, My = uT, qT = gT, GT = (t, r, o) => {
    const i = /* @__PURE__ */ new Map(), l = {
      platform: jT,
      ...o
    }, u = {
      ...l.platform,
      _c: i
    };
    return cT(t, r, {
      ...l,
      platform: u
    });
  };
  var FT = typeof document < "u", VT = function() {
  }, Kl = FT ? b.useLayoutEffect : VT;
  function ic(t, r) {
    if (t === r) return true;
    if (typeof t != typeof r) return false;
    if (typeof t == "function" && t.toString() === r.toString()) return true;
    let o, i, l;
    if (t && r && typeof t == "object") {
      if (Array.isArray(t)) {
        if (o = t.length, o !== r.length) return false;
        for (i = o; i-- !== 0; ) if (!ic(t[i], r[i])) return false;
        return true;
      }
      if (l = Object.keys(t), o = l.length, o !== Object.keys(r).length) return false;
      for (i = o; i-- !== 0; ) if (!{}.hasOwnProperty.call(r, l[i])) return false;
      for (i = o; i-- !== 0; ) {
        const u = l[i];
        if (!(u === "_owner" && t.$$typeof) && !ic(t[u], r[u])) return false;
      }
      return true;
    }
    return t !== t && r !== r;
  }
  function P0(t) {
    return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function Ay(t, r) {
    const o = P0(t);
    return Math.round(r * o) / o;
  }
  function wd(t) {
    const r = b.useRef(t);
    return Kl(() => {
      r.current = t;
    }), r;
  }
  function YT(t) {
    t === void 0 && (t = {});
    const { placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: l, elements: { reference: u, floating: d } = {}, transform: h = true, whileElementsMounted: g, open: p } = t, [v, m] = b.useState({
      x: 0,
      y: 0,
      strategy: o,
      placement: r,
      middlewareData: {},
      isPositioned: false
    }), [w, S] = b.useState(i);
    ic(w, i) || S(i);
    const [E, R] = b.useState(null), [C, O] = b.useState(null), k = b.useCallback((B) => {
      B !== V.current && (V.current = B, R(B));
    }, []), j = b.useCallback((B) => {
      B !== K.current && (K.current = B, O(B));
    }, []), H = u || E, q = d || C, V = b.useRef(null), K = b.useRef(null), D = b.useRef(v), U = g != null, ae = wd(g), ie = wd(l), ee = wd(p), re = b.useCallback(() => {
      if (!V.current || !K.current) return;
      const B = {
        placement: r,
        strategy: o,
        middleware: w
      };
      ie.current && (B.platform = ie.current), GT(V.current, K.current, B).then((Z) => {
        const T = {
          ...Z,
          isPositioned: ee.current !== false
        };
        fe.current && !ic(D.current, T) && (D.current = T, mc.flushSync(() => {
          m(T);
        }));
      });
    }, [
      w,
      r,
      o,
      ie,
      ee
    ]);
    Kl(() => {
      p === false && D.current.isPositioned && (D.current.isPositioned = false, m((B) => ({
        ...B,
        isPositioned: false
      })));
    }, [
      p
    ]);
    const fe = b.useRef(false);
    Kl(() => (fe.current = true, () => {
      fe.current = false;
    }), []), Kl(() => {
      if (H && (V.current = H), q && (K.current = q), H && q) {
        if (ae.current) return ae.current(H, q, re);
        re();
      }
    }, [
      H,
      q,
      re,
      ae,
      U
    ]);
    const se = b.useMemo(() => ({
      reference: V,
      floating: K,
      setReference: k,
      setFloating: j
    }), [
      k,
      j
    ]), A = b.useMemo(() => ({
      reference: H,
      floating: q
    }), [
      H,
      q
    ]), I = b.useMemo(() => {
      const B = {
        position: o,
        left: 0,
        top: 0
      };
      if (!A.floating) return B;
      const Z = Ay(A.floating, v.x), T = Ay(A.floating, v.y);
      return h ? {
        ...B,
        transform: "translate(" + Z + "px, " + T + "px)",
        ...P0(A.floating) >= 1.5 && {
          willChange: "transform"
        }
      } : {
        position: o,
        left: Z,
        top: T
      };
    }, [
      o,
      h,
      A.floating,
      v.x,
      v.y
    ]);
    return b.useMemo(() => ({
      ...v,
      update: re,
      refs: se,
      elements: A,
      floatingStyles: I
    }), [
      v,
      re,
      se,
      A,
      I
    ]);
  }
  const KT = (t) => {
    function r(o) {
      return {}.hasOwnProperty.call(o, "current");
    }
    return {
      name: "arrow",
      options: t,
      fn(o) {
        const { element: i, padding: l } = typeof t == "function" ? t(o) : t;
        return i && r(i) ? i.current != null ? My({
          element: i.current,
          padding: l
        }).fn(o) : {} : i ? My({
          element: i,
          padding: l
        }).fn(o) : {};
      }
    };
  }, IT = (t, r) => ({
    ...LT(t),
    options: [
      t,
      r
    ]
  }), QT = (t, r) => ({
    ...UT(t),
    options: [
      t,
      r
    ]
  }), XT = (t, r) => ({
    ...qT(t),
    options: [
      t,
      r
    ]
  }), $T = (t, r) => ({
    ...BT(t),
    options: [
      t,
      r
    ]
  }), ZT = (t, r) => ({
    ...PT(t),
    options: [
      t,
      r
    ]
  }), JT = (t, r) => ({
    ...HT(t),
    options: [
      t,
      r
    ]
  }), WT = (t, r) => ({
    ...KT(t),
    options: [
      t,
      r
    ]
  });
  var eC = "Arrow", H0 = b.forwardRef((t, r) => {
    const { children: o, width: i = 10, height: l = 5, ...u } = t;
    return x.jsx($e.svg, {
      ...u,
      ref: r,
      width: i,
      height: l,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? o : x.jsx("polygon", {
        points: "0,0 30,0 15,10"
      })
    });
  });
  H0.displayName = eC;
  var tC = H0;
  nC = function(t) {
    const [r, o] = b.useState(void 0);
    return Pr(() => {
      if (t) {
        o({
          width: t.offsetWidth,
          height: t.offsetHeight
        });
        const i = new ResizeObserver((l) => {
          if (!Array.isArray(l) || !l.length) return;
          const u = l[0];
          let d, h;
          if ("borderBoxSize" in u) {
            const g = u.borderBoxSize, p = Array.isArray(g) ? g[0] : g;
            d = p.inlineSize, h = p.blockSize;
          } else d = t.offsetWidth, h = t.offsetHeight;
          o({
            width: d,
            height: h
          });
        });
        return i.observe(t, {
          box: "border-box"
        }), () => i.unobserve(t);
      } else o(void 0);
    }, [
      t
    ]), r;
  };
  var Eh = "Popper", [q0, Tc] = Ea(Eh), [rC, G0] = q0(Eh), F0 = (t) => {
    const { __scopePopper: r, children: o } = t, [i, l] = b.useState(null);
    return x.jsx(rC, {
      scope: r,
      anchor: i,
      onAnchorChange: l,
      children: o
    });
  };
  F0.displayName = Eh;
  var V0 = "PopperAnchor", Y0 = b.forwardRef((t, r) => {
    const { __scopePopper: o, virtualRef: i, ...l } = t, u = G0(V0, o), d = b.useRef(null), h = dt(r, d);
    return b.useEffect(() => {
      u.onAnchorChange((i == null ? void 0 : i.current) || d.current);
    }), i ? null : x.jsx($e.div, {
      ...l,
      ref: h
    });
  });
  Y0.displayName = V0;
  var Rh = "PopperContent", [aC, oC] = q0(Rh), K0 = b.forwardRef((t, r) => {
    var _a5, _b3, _c3, _d3, _e11, _f2;
    const { __scopePopper: o, side: i = "bottom", sideOffset: l = 0, align: u = "center", alignOffset: d = 0, arrowPadding: h = 0, avoidCollisions: g = true, collisionBoundary: p = [], collisionPadding: v = 0, sticky: m = "partial", hideWhenDetached: w = false, updatePositionStrategy: S = "optimized", onPlaced: E, ...R } = t, C = G0(Rh, o), [O, k] = b.useState(null), j = dt(r, (le) => k(le)), [H, q] = b.useState(null), V = nC(H), K = (V == null ? void 0 : V.width) ?? 0, D = (V == null ? void 0 : V.height) ?? 0, U = i + (u !== "center" ? "-" + u : ""), ae = typeof v == "number" ? v : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...v
    }, ie = Array.isArray(p) ? p : [
      p
    ], ee = ie.length > 0, re = {
      padding: ae,
      boundary: ie.filter(sC),
      altBoundary: ee
    }, { refs: fe, floatingStyles: se, placement: A, isPositioned: I, middlewareData: B } = YT({
      strategy: "fixed",
      placement: U,
      whileElementsMounted: (...le) => kT(...le, {
        animationFrame: S === "always"
      }),
      elements: {
        reference: C.anchor
      },
      middleware: [
        IT({
          mainAxis: l + D,
          alignmentAxis: d
        }),
        g && QT({
          mainAxis: true,
          crossAxis: false,
          limiter: m === "partial" ? XT() : void 0,
          ...re
        }),
        g && $T({
          ...re
        }),
        ZT({
          ...re,
          apply: ({ elements: le, rects: ue, availableWidth: ye, availableHeight: Re }) => {
            const { width: Le, height: Ue } = ue.reference, Rt = le.floating.style;
            Rt.setProperty("--radix-popper-available-width", `${ye}px`), Rt.setProperty("--radix-popper-available-height", `${Re}px`), Rt.setProperty("--radix-popper-anchor-width", `${Le}px`), Rt.setProperty("--radix-popper-anchor-height", `${Ue}px`);
          }
        }),
        H && WT({
          element: H,
          padding: h
        }),
        lC({
          arrowWidth: K,
          arrowHeight: D
        }),
        w && JT({
          strategy: "referenceHidden",
          ...re
        })
      ]
    }), [Z, T] = X0(A), L = sr(E);
    Pr(() => {
      I && (L == null ? void 0 : L());
    }, [
      I,
      L
    ]);
    const $ = (_a5 = B.arrow) == null ? void 0 : _a5.x, Q = (_b3 = B.arrow) == null ? void 0 : _b3.y, J = ((_c3 = B.arrow) == null ? void 0 : _c3.centerOffset) !== 0, [ce, ne] = b.useState();
    return Pr(() => {
      O && ne(window.getComputedStyle(O).zIndex);
    }, [
      O
    ]), x.jsx("div", {
      ref: fe.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: {
        ...se,
        transform: I ? se.transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: ce,
        "--radix-popper-transform-origin": [
          (_d3 = B.transformOrigin) == null ? void 0 : _d3.x,
          (_e11 = B.transformOrigin) == null ? void 0 : _e11.y
        ].join(" "),
        ...((_f2 = B.hide) == null ? void 0 : _f2.referenceHidden) && {
          visibility: "hidden",
          pointerEvents: "none"
        }
      },
      dir: t.dir,
      children: x.jsx(aC, {
        scope: o,
        placedSide: Z,
        onArrowChange: q,
        arrowX: $,
        arrowY: Q,
        shouldHideArrow: J,
        children: x.jsx($e.div, {
          "data-side": Z,
          "data-align": T,
          ...R,
          ref: j,
          style: {
            ...R.style,
            animation: I ? void 0 : "none"
          }
        })
      })
    });
  });
  K0.displayName = Rh;
  var I0 = "PopperArrow", iC = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }, Q0 = b.forwardRef(function(r, o) {
    const { __scopePopper: i, ...l } = r, u = oC(I0, i), d = iC[u.placedSide];
    return x.jsx("span", {
      ref: u.onArrowChange,
      style: {
        position: "absolute",
        left: u.arrowX,
        top: u.arrowY,
        [d]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[u.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[u.placedSide],
        visibility: u.shouldHideArrow ? "hidden" : void 0
      },
      children: x.jsx(tC, {
        ...l,
        ref: o,
        style: {
          ...l.style,
          display: "block"
        }
      })
    });
  });
  Q0.displayName = I0;
  function sC(t) {
    return t !== null;
  }
  var lC = (t) => ({
    name: "transformOrigin",
    options: t,
    fn(r) {
      var _a5, _b3, _c3;
      const { placement: o, rects: i, middlewareData: l } = r, d = ((_a5 = l.arrow) == null ? void 0 : _a5.centerOffset) !== 0, h = d ? 0 : t.arrowWidth, g = d ? 0 : t.arrowHeight, [p, v] = X0(o), m = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[v], w = (((_b3 = l.arrow) == null ? void 0 : _b3.x) ?? 0) + h / 2, S = (((_c3 = l.arrow) == null ? void 0 : _c3.y) ?? 0) + g / 2;
      let E = "", R = "";
      return p === "bottom" ? (E = d ? m : `${w}px`, R = `${-g}px`) : p === "top" ? (E = d ? m : `${w}px`, R = `${i.floating.height + g}px`) : p === "right" ? (E = `${-g}px`, R = d ? m : `${S}px`) : p === "left" && (E = `${i.floating.width + g}px`, R = d ? m : `${S}px`), {
        data: {
          x: E,
          y: R
        }
      };
    }
  });
  function X0(t) {
    const [r, o = "center"] = t.split("-");
    return [
      r,
      o
    ];
  }
  var $0 = F0, Z0 = Y0, J0 = K0, W0 = Q0, cC = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  }), uC = "VisuallyHidden", e_ = b.forwardRef((t, r) => x.jsx($e.span, {
    ...t,
    ref: r,
    style: {
      ...cC,
      ...t.style
    }
  }));
  e_.displayName = uC;
  var fC = e_, [Cc, M4] = Ea("Tooltip", [
    Tc
  ]), Mc = Tc(), t_ = "TooltipProvider", dC = 700, Fd = "tooltip.open", [hC, Th] = Cc(t_), n_ = (t) => {
    const { __scopeTooltip: r, delayDuration: o = dC, skipDelayDuration: i = 300, disableHoverableContent: l = false, children: u } = t, d = b.useRef(true), h = b.useRef(false), g = b.useRef(0);
    return b.useEffect(() => {
      const p = g.current;
      return () => window.clearTimeout(p);
    }, []), x.jsx(hC, {
      scope: r,
      isOpenDelayedRef: d,
      delayDuration: o,
      onOpen: b.useCallback(() => {
        window.clearTimeout(g.current), d.current = false;
      }, []),
      onClose: b.useCallback(() => {
        window.clearTimeout(g.current), g.current = window.setTimeout(() => d.current = true, i);
      }, [
        i
      ]),
      isPointerInTransitRef: h,
      onPointerInTransitChange: b.useCallback((p) => {
        h.current = p;
      }, []),
      disableHoverableContent: l,
      children: u
    });
  };
  n_.displayName = t_;
  var Ji = "Tooltip", [pC, ls] = Cc(Ji), r_ = (t) => {
    const { __scopeTooltip: r, children: o, open: i, defaultOpen: l, onOpenChange: u, disableHoverableContent: d, delayDuration: h } = t, g = Th(Ji, t.__scopeTooltip), p = Mc(r), [v, m] = b.useState(null), w = va(), S = b.useRef(0), E = d ?? g.disableHoverableContent, R = h ?? g.delayDuration, C = b.useRef(false), [O, k] = yc({
      prop: i,
      defaultProp: l ?? false,
      onChange: (K) => {
        K ? (g.onOpen(), document.dispatchEvent(new CustomEvent(Fd))) : g.onClose(), u == null ? void 0 : u(K);
      },
      caller: Ji
    }), j = b.useMemo(() => O ? C.current ? "delayed-open" : "instant-open" : "closed", [
      O
    ]), H = b.useCallback(() => {
      window.clearTimeout(S.current), S.current = 0, C.current = false, k(true);
    }, [
      k
    ]), q = b.useCallback(() => {
      window.clearTimeout(S.current), S.current = 0, k(false);
    }, [
      k
    ]), V = b.useCallback(() => {
      window.clearTimeout(S.current), S.current = window.setTimeout(() => {
        C.current = true, k(true), S.current = 0;
      }, R);
    }, [
      R,
      k
    ]);
    return b.useEffect(() => () => {
      S.current && (window.clearTimeout(S.current), S.current = 0);
    }, []), x.jsx($0, {
      ...p,
      children: x.jsx(pC, {
        scope: r,
        contentId: w,
        open: O,
        stateAttribute: j,
        trigger: v,
        onTriggerChange: m,
        onTriggerEnter: b.useCallback(() => {
          g.isOpenDelayedRef.current ? V() : H();
        }, [
          g.isOpenDelayedRef,
          V,
          H
        ]),
        onTriggerLeave: b.useCallback(() => {
          E ? q() : (window.clearTimeout(S.current), S.current = 0);
        }, [
          q,
          E
        ]),
        onOpen: H,
        onClose: q,
        disableHoverableContent: E,
        children: o
      })
    });
  };
  r_.displayName = Ji;
  var Vd = "TooltipTrigger", a_ = b.forwardRef((t, r) => {
    const { __scopeTooltip: o, ...i } = t, l = ls(Vd, o), u = Th(Vd, o), d = Mc(o), h = b.useRef(null), g = dt(r, h, l.onTriggerChange), p = b.useRef(false), v = b.useRef(false), m = b.useCallback(() => p.current = false, []);
    return b.useEffect(() => () => document.removeEventListener("pointerup", m), [
      m
    ]), x.jsx(Z0, {
      asChild: true,
      ...d,
      children: x.jsx($e.button, {
        "aria-describedby": l.open ? l.contentId : void 0,
        "data-state": l.stateAttribute,
        ...i,
        ref: g,
        onPointerMove: xe(t.onPointerMove, (w) => {
          w.pointerType !== "touch" && !v.current && !u.isPointerInTransitRef.current && (l.onTriggerEnter(), v.current = true);
        }),
        onPointerLeave: xe(t.onPointerLeave, () => {
          l.onTriggerLeave(), v.current = false;
        }),
        onPointerDown: xe(t.onPointerDown, () => {
          l.open && l.onClose(), p.current = true, document.addEventListener("pointerup", m, {
            once: true
          });
        }),
        onFocus: xe(t.onFocus, () => {
          p.current || l.onOpen();
        }),
        onBlur: xe(t.onBlur, l.onClose),
        onClick: xe(t.onClick, l.onClose)
      })
    });
  });
  a_.displayName = Vd;
  var Ch = "TooltipPortal", [mC, gC] = Cc(Ch, {
    forceMount: void 0
  }), o_ = (t) => {
    const { __scopeTooltip: r, forceMount: o, children: i, container: l } = t, u = ls(Ch, r);
    return x.jsx(mC, {
      scope: r,
      forceMount: o,
      children: x.jsx(Hn, {
        present: o || u.open,
        children: x.jsx(_c, {
          asChild: true,
          container: l,
          children: i
        })
      })
    });
  };
  o_.displayName = Ch;
  var zo = "TooltipContent", i_ = b.forwardRef((t, r) => {
    const o = gC(zo, t.__scopeTooltip), { forceMount: i = o.forceMount, side: l = "top", ...u } = t, d = ls(zo, t.__scopeTooltip);
    return x.jsx(Hn, {
      present: i || d.open,
      children: d.disableHoverableContent ? x.jsx(s_, {
        side: l,
        ...u,
        ref: r
      }) : x.jsx(vC, {
        side: l,
        ...u,
        ref: r
      })
    });
  }), vC = b.forwardRef((t, r) => {
    const o = ls(zo, t.__scopeTooltip), i = Th(zo, t.__scopeTooltip), l = b.useRef(null), u = dt(r, l), [d, h] = b.useState(null), { trigger: g, onClose: p } = o, v = l.current, { onPointerInTransitChange: m } = i, w = b.useCallback(() => {
      h(null), m(false);
    }, [
      m
    ]), S = b.useCallback((E, R) => {
      const C = E.currentTarget, O = {
        x: E.clientX,
        y: E.clientY
      }, k = wC(O, C.getBoundingClientRect()), j = xC(O, k), H = SC(R.getBoundingClientRect()), q = RC([
        ...j,
        ...H
      ]);
      h(q), m(true);
    }, [
      m
    ]);
    return b.useEffect(() => () => w(), [
      w
    ]), b.useEffect(() => {
      if (g && v) {
        const E = (C) => S(C, v), R = (C) => S(C, g);
        return g.addEventListener("pointerleave", E), v.addEventListener("pointerleave", R), () => {
          g.removeEventListener("pointerleave", E), v.removeEventListener("pointerleave", R);
        };
      }
    }, [
      g,
      v,
      S,
      w
    ]), b.useEffect(() => {
      if (d) {
        const E = (R) => {
          const C = R.target, O = {
            x: R.clientX,
            y: R.clientY
          }, k = (g == null ? void 0 : g.contains(C)) || (v == null ? void 0 : v.contains(C)), j = !EC(O, d);
          k ? w() : j && (w(), p());
        };
        return document.addEventListener("pointermove", E), () => document.removeEventListener("pointermove", E);
      }
    }, [
      g,
      v,
      d,
      p,
      w
    ]), x.jsx(s_, {
      ...t,
      ref: u
    });
  }), [yC, bC] = Cc(Ji, {
    isInside: false
  }), _C = wE("TooltipContent"), s_ = b.forwardRef((t, r) => {
    const { __scopeTooltip: o, children: i, "aria-label": l, onEscapeKeyDown: u, onPointerDownOutside: d, ...h } = t, g = ls(zo, o), p = Mc(o), { onClose: v } = g;
    return b.useEffect(() => (document.addEventListener(Fd, v), () => document.removeEventListener(Fd, v)), [
      v
    ]), b.useEffect(() => {
      if (g.trigger) {
        const m = (w) => {
          var _a5;
          ((_a5 = w.target) == null ? void 0 : _a5.contains(g.trigger)) && v();
        };
        return window.addEventListener("scroll", m, {
          capture: true
        }), () => window.removeEventListener("scroll", m, {
          capture: true
        });
      }
    }, [
      g.trigger,
      v
    ]), x.jsx(bc, {
      asChild: true,
      disableOutsidePointerEvents: false,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: (m) => m.preventDefault(),
      onDismiss: v,
      children: x.jsxs(J0, {
        "data-state": g.stateAttribute,
        ...p,
        ...h,
        ref: r,
        style: {
          ...h.style,
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        },
        children: [
          x.jsx(_C, {
            children: i
          }),
          x.jsx(yC, {
            scope: o,
            isInside: true,
            children: x.jsx(fC, {
              id: g.contentId,
              role: "tooltip",
              children: l || i
            })
          })
        ]
      })
    });
  });
  i_.displayName = zo;
  var l_ = "TooltipArrow", c_ = b.forwardRef((t, r) => {
    const { __scopeTooltip: o, ...i } = t, l = Mc(o);
    return bC(l_, o).isInside ? null : x.jsx(W0, {
      ...l,
      ...i,
      ref: r
    });
  });
  c_.displayName = l_;
  function wC(t, r) {
    const o = Math.abs(r.top - t.y), i = Math.abs(r.bottom - t.y), l = Math.abs(r.right - t.x), u = Math.abs(r.left - t.x);
    switch (Math.min(o, i, l, u)) {
      case u:
        return "left";
      case l:
        return "right";
      case o:
        return "top";
      case i:
        return "bottom";
      default:
        throw new Error("unreachable");
    }
  }
  function xC(t, r, o = 5) {
    const i = [];
    switch (r) {
      case "top":
        i.push({
          x: t.x - o,
          y: t.y + o
        }, {
          x: t.x + o,
          y: t.y + o
        });
        break;
      case "bottom":
        i.push({
          x: t.x - o,
          y: t.y - o
        }, {
          x: t.x + o,
          y: t.y - o
        });
        break;
      case "left":
        i.push({
          x: t.x + o,
          y: t.y - o
        }, {
          x: t.x + o,
          y: t.y + o
        });
        break;
      case "right":
        i.push({
          x: t.x - o,
          y: t.y - o
        }, {
          x: t.x - o,
          y: t.y + o
        });
        break;
    }
    return i;
  }
  function SC(t) {
    const { top: r, right: o, bottom: i, left: l } = t;
    return [
      {
        x: l,
        y: r
      },
      {
        x: o,
        y: r
      },
      {
        x: o,
        y: i
      },
      {
        x: l,
        y: i
      }
    ];
  }
  function EC(t, r) {
    const { x: o, y: i } = t;
    let l = false;
    for (let u = 0, d = r.length - 1; u < r.length; d = u++) {
      const h = r[u], g = r[d], p = h.x, v = h.y, m = g.x, w = g.y;
      v > i != w > i && o < (m - p) * (i - v) / (w - v) + p && (l = !l);
    }
    return l;
  }
  function RC(t) {
    const r = t.slice();
    return r.sort((o, i) => o.x < i.x ? -1 : o.x > i.x ? 1 : o.y < i.y ? -1 : o.y > i.y ? 1 : 0), TC(r);
  }
  function TC(t) {
    if (t.length <= 1) return t.slice();
    const r = [];
    for (let i = 0; i < t.length; i++) {
      const l = t[i];
      for (; r.length >= 2; ) {
        const u = r[r.length - 1], d = r[r.length - 2];
        if ((u.x - d.x) * (l.y - d.y) >= (u.y - d.y) * (l.x - d.x)) r.pop();
        else break;
      }
      r.push(l);
    }
    r.pop();
    const o = [];
    for (let i = t.length - 1; i >= 0; i--) {
      const l = t[i];
      for (; o.length >= 2; ) {
        const u = o[o.length - 1], d = o[o.length - 2];
        if ((u.x - d.x) * (l.y - d.y) >= (u.y - d.y) * (l.x - d.x)) o.pop();
        else break;
      }
      o.push(l);
    }
    return o.pop(), r.length === 1 && o.length === 1 && r[0].x === o[0].x && r[0].y === o[0].y ? r : r.concat(o);
  }
  var CC = n_, MC = r_, AC = a_, OC = o_, DC = i_, NC = c_;
  function u_({ delayDuration: t = 0, ...r }) {
    return x.jsx(CC, {
      "data-slot": "tooltip-provider",
      delayDuration: t,
      ...r
    });
  }
  jC = function({ ...t }) {
    return x.jsx(u_, {
      children: x.jsx(MC, {
        "data-slot": "tooltip",
        ...t
      })
    });
  };
  zC = function({ ...t }) {
    return x.jsx(AC, {
      "data-slot": "tooltip-trigger",
      ...t
    });
  };
  kC = function({ className: t, sideOffset: r = 0, children: o, ...i }) {
    return x.jsx(OC, {
      children: x.jsxs(DC, {
        "data-slot": "tooltip-content",
        sideOffset: r,
        className: Be("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", t),
        ...i,
        children: [
          o,
          x.jsx(NC, {
            className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
          })
        ]
      })
    });
  };
  const LC = "sidebar_state", UC = 60 * 60 * 24 * 7, BC = "16rem", PC = "18rem", HC = "3rem", qC = "b", f_ = b.createContext(null);
  function Mh() {
    const t = b.useContext(f_);
    if (!t) throw new Error("useSidebar must be used within a SidebarProvider.");
    return t;
  }
  function GC({ defaultOpen: t = true, open: r, onOpenChange: o, className: i, style: l, children: u, ...d }) {
    const h = VE(), [g, p] = b.useState(false), [v, m] = b.useState(t), w = r ?? v, S = b.useCallback((O) => {
      const k = typeof O == "function" ? O(w) : O;
      o ? o(k) : m(k), document.cookie = `${LC}=${k}; path=/; max-age=${UC}`;
    }, [
      o,
      w
    ]), E = b.useCallback(() => h ? p((O) => !O) : S((O) => !O), [
      h,
      S,
      p
    ]);
    b.useEffect(() => {
      const O = (k) => {
        k.key === qC && (k.metaKey || k.ctrlKey) && (k.preventDefault(), E());
      };
      return window.addEventListener("keydown", O), () => window.removeEventListener("keydown", O);
    }, [
      E
    ]);
    const R = w ? "expanded" : "collapsed", C = b.useMemo(() => ({
      state: R,
      open: w,
      setOpen: S,
      isMobile: h,
      openMobile: g,
      setOpenMobile: p,
      toggleSidebar: E
    }), [
      R,
      w,
      S,
      h,
      g,
      p,
      E
    ]);
    return x.jsx(f_.Provider, {
      value: C,
      children: x.jsx(u_, {
        delayDuration: 0,
        children: x.jsx("div", {
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": BC,
            "--sidebar-width-icon": HC,
            ...l
          },
          className: Be("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", i),
          ...d,
          children: u
        })
      })
    });
  }
  function FC({ side: t = "left", variant: r = "sidebar", collapsible: o = "offcanvas", className: i, children: l, ...u }) {
    const { isMobile: d, state: h, openMobile: g, setOpenMobile: p } = Mh();
    return o === "none" ? x.jsx("div", {
      "data-slot": "sidebar",
      className: Be("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", i),
      ...u,
      children: l
    }) : d ? x.jsx(Q2, {
      open: g,
      onOpenChange: p,
      ...u,
      children: x.jsxs(Z2, {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        style: {
          "--sidebar-width": PC
        },
        side: t,
        children: [
          x.jsxs(J2, {
            className: "sr-only",
            children: [
              x.jsx(W2, {
                children: "Sidebar"
              }),
              x.jsx(eT, {
                children: "Displays the mobile sidebar."
              })
            ]
          }),
          x.jsx("div", {
            className: "flex h-full w-full flex-col",
            children: l
          })
        ]
      })
    }) : x.jsxs("div", {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": h,
      "data-collapsible": h === "collapsed" ? o : "",
      "data-variant": r,
      "data-side": t,
      "data-slot": "sidebar",
      children: [
        x.jsx("div", {
          "data-slot": "sidebar-gap",
          className: Be("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", r === "floating" || r === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
        }),
        x.jsx("div", {
          "data-slot": "sidebar-container",
          className: Be("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", t === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", r === "floating" || r === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", i),
          ...u,
          children: x.jsx("div", {
            "data-sidebar": "sidebar",
            "data-slot": "sidebar-inner",
            className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
            children: l
          })
        })
      ]
    });
  }
  function VC({ className: t, onClick: r, ...o }) {
    const { toggleSidebar: i } = Mh();
    return x.jsxs(ma, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: Be("size-7", t),
      onClick: (l) => {
        r == null ? void 0 : r(l), i();
      },
      ...o,
      children: [
        x.jsx(BE, {}),
        x.jsx("span", {
          className: "sr-only",
          children: "Toggle Sidebar"
        })
      ]
    });
  }
  function YC({ className: t, ...r }) {
    return x.jsx("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: Be("flex flex-col gap-2 p-2", t),
      ...r
    });
  }
  function KC({ className: t, ...r }) {
    return x.jsx("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: Be("flex flex-col gap-2 p-2", t),
      ...r
    });
  }
  function IC({ className: t, ...r }) {
    return x.jsx("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: Be("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t),
      ...r
    });
  }
  function Oy({ className: t, ...r }) {
    return x.jsx("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: Be("relative flex w-full min-w-0 flex-col p-2", t),
      ...r
    });
  }
  function QC({ className: t, ...r }) {
    return x.jsx("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: Be("group/menu-item relative", t),
      ...r
    });
  }
  const XC = Nb("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  });
  function $C({ asChild: t = false, isActive: r = false, variant: o = "default", size: i = "default", tooltip: l, className: u, ...d }) {
    const h = t ? Mb : "button", { isMobile: g, state: p } = Mh(), v = x.jsx(h, {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": i,
      "data-active": r,
      className: Be(XC({
        variant: o,
        size: i
      }), u),
      ...d
    });
    return l ? (typeof l == "string" && (l = {
      children: l
    }), x.jsxs(jC, {
      children: [
        x.jsx(zC, {
          asChild: true,
          children: v
        }),
        x.jsx(kC, {
          side: "right",
          align: "center",
          hidden: p !== "collapsed" || g,
          ...l
        })
      ]
    })) : v;
  }
  const Dy = (t) => {
    let r;
    const o = /* @__PURE__ */ new Set(), i = (p, v) => {
      const m = typeof p == "function" ? p(r) : p;
      if (!Object.is(m, r)) {
        const w = r;
        r = v ?? (typeof m != "object" || m === null) ? m : Object.assign({}, r, m), o.forEach((S) => S(r, w));
      }
    }, l = () => r, h = {
      setState: i,
      getState: l,
      getInitialState: () => g,
      subscribe: (p) => (o.add(p), () => o.delete(p))
    }, g = r = t(i, l, h);
    return h;
  }, ZC = (t) => t ? Dy(t) : Dy, JC = (t) => t;
  function WC(t, r = JC) {
    const o = oe.useSyncExternalStore(t.subscribe, () => r(t.getState()), () => r(t.getInitialState()));
    return oe.useDebugValue(o), o;
  }
  const eM = (t) => {
    const r = ZC(t), o = (i) => WC(r, i);
    return Object.assign(o, r), o;
  }, tM = (t) => eM, nM = "/prolly-man/assets/prolly_rust_bg-C74n1Qza.wasm", rM = async (t = {}, r) => {
    let o;
    if (r.startsWith("data:")) {
      const i = r.replace(/^data:.*?base64,/, "");
      let l;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") l = Buffer.from(i, "base64");
      else if (typeof atob == "function") {
        const u = atob(i);
        l = new Uint8Array(u.length);
        for (let d = 0; d < u.length; d++) l[d] = u.charCodeAt(d);
      } else throw new Error("Cannot decode base64-encoded data URL");
      o = await WebAssembly.instantiate(l, t);
    } else {
      const i = await fetch(r), l = i.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && l.startsWith("application/wasm")) o = await WebAssembly.instantiateStreaming(i, t);
      else {
        const u = await i.arrayBuffer();
        o = await WebAssembly.instantiate(u, t);
      }
    }
    return o.instance.exports;
  };
  let de;
  function aM(t) {
    de = t;
  }
  let ko = 0, Hl = null;
  function Il() {
    return (Hl === null || Hl.byteLength === 0) && (Hl = new Uint8Array(de.memory.buffer)), Hl;
  }
  const oM = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
  let Ql = new oM("utf-8");
  const iM = typeof Ql.encodeInto == "function" ? function(t, r) {
    return Ql.encodeInto(t, r);
  } : function(t, r) {
    const o = Ql.encode(t);
    return r.set(o), {
      read: t.length,
      written: o.length
    };
  };
  function Ac(t, r, o) {
    if (o === void 0) {
      const h = Ql.encode(t), g = r(h.length, 1) >>> 0;
      return Il().subarray(g, g + h.length).set(h), ko = h.length, g;
    }
    let i = t.length, l = r(i, 1) >>> 0;
    const u = Il();
    let d = 0;
    for (; d < i; d++) {
      const h = t.charCodeAt(d);
      if (h > 127) break;
      u[l + d] = h;
    }
    if (d !== i) {
      d !== 0 && (t = t.slice(d)), l = o(l, i, i = d + t.length * 3, 1) >>> 0;
      const h = Il().subarray(l + d, l + i), g = iM(t, h);
      d += g.written, l = o(l, i, d, 1) >>> 0;
    }
    return ko = d, l;
  }
  let wo = null;
  function Sn() {
    return (wo === null || wo.buffer.detached === true || wo.buffer.detached === void 0 && wo.buffer !== de.memory.buffer) && (wo = new DataView(de.memory.buffer)), wo;
  }
  function zn(t) {
    const r = de.__externref_table_alloc();
    return de.__wbindgen_export_4.set(r, t), r;
  }
  function cs(t, r) {
    try {
      return t.apply(this, r);
    } catch (o) {
      const i = zn(o);
      de.__wbindgen_exn_store(i);
    }
  }
  function Ah(t, r) {
    t = t >>> 0;
    const o = Sn(), i = [];
    for (let l = t; l < t + 4 * r; l += 4) i.push(de.__wbindgen_export_4.get(o.getUint32(l, true)));
    return de.__externref_drop_slice(t, r), i;
  }
  const sM = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let d_ = new sM("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  d_.decode();
  function us(t, r) {
    return t = t >>> 0, d_.decode(Il().subarray(t, t + r));
  }
  function jt(t) {
    return t == null;
  }
  const Ny = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((t) => {
    de.__wbindgen_export_7.get(t.dtor)(t.a, t.b);
  });
  function lM(t, r, o, i) {
    const l = {
      a: t,
      b: r,
      cnt: 1,
      dtor: o
    }, u = (...d) => {
      l.cnt++;
      const h = l.a;
      l.a = 0;
      try {
        return i(h, l.b, ...d);
      } finally {
        --l.cnt === 0 ? (de.__wbindgen_export_7.get(l.dtor)(h, l.b), Ny.unregister(l)) : l.a = h;
      }
    };
    return u.original = l, Ny.register(u, l, l), u;
  }
  function Yd(t) {
    const r = typeof t;
    if (r == "number" || r == "boolean" || t == null) return `${t}`;
    if (r == "string") return `"${t}"`;
    if (r == "symbol") {
      const l = t.description;
      return l == null ? "Symbol" : `Symbol(${l})`;
    }
    if (r == "function") {
      const l = t.name;
      return typeof l == "string" && l.length > 0 ? `Function(${l})` : "Function";
    }
    if (Array.isArray(t)) {
      const l = t.length;
      let u = "[";
      l > 0 && (u += Yd(t[0]));
      for (let d = 1; d < l; d++) u += ", " + Yd(t[d]);
      return u += "]", u;
    }
    const o = /\[object ([^\]]+)\]/.exec(toString.call(t));
    let i;
    if (o && o.length > 1) i = o[1];
    else return toString.call(t);
    if (i == "Object") try {
      return "Object(" + JSON.stringify(t) + ")";
    } catch {
      return "Object";
    }
    return t instanceof Error ? `${t.name}: ${t.message}
${t.stack}` : i;
  }
  function cM(t) {
    const r = de.__wbindgen_export_4.get(t);
    return de.__externref_table_dealloc(t), r;
  }
  function uM(t, r, o) {
    de.closure149_externref_shim(t, r, o);
  }
  function fM(t, r, o, i) {
    de.closure194_externref_shim(t, r, o, i);
  }
  const jy = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((t) => de.__wbg_hierarchyscanpage_free(t >>> 0, 1));
  class Oh {
    static __wrap(r) {
      r = r >>> 0;
      const o = Object.create(Oh.prototype);
      return o.__wbg_ptr = r, jy.register(o, o.__wbg_ptr, o), o;
    }
    __destroy_into_raw() {
      const r = this.__wbg_ptr;
      return this.__wbg_ptr = 0, jy.unregister(this), r;
    }
    free() {
      const r = this.__destroy_into_raw();
      de.__wbg_hierarchyscanpage_free(r, 0);
    }
    get items() {
      return de.hierarchyscanpage_items(this.__wbg_ptr);
    }
    get hasNextPage() {
      return de.hierarchyscanpage_has_next_page(this.__wbg_ptr) !== 0;
    }
    get nextPageCursorToken() {
      const r = de.hierarchyscanpage_next_page_cursor_token(this.__wbg_ptr);
      let o;
      return r[0] !== 0 && (o = us(r[0], r[1]).slice(), de.__wbindgen_free(r[0], r[1] * 1, 1)), o;
    }
  }
  const xd = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((t) => de.__wbg_ptree_free(t >>> 0, 1));
  class wa {
    static __wrap(r) {
      r = r >>> 0;
      const o = Object.create(wa.prototype);
      return o.__wbg_ptr = r, xd.register(o, o.__wbg_ptr, o), o;
    }
    __destroy_into_raw() {
      const r = this.__wbg_ptr;
      return this.__wbg_ptr = 0, xd.unregister(this), r;
    }
    free() {
      const r = this.__destroy_into_raw();
      de.__wbg_ptree_free(r, 0);
    }
    constructor() {
      const r = de.ptree_new();
      return this.__wbg_ptr = r >>> 0, xd.register(this, this.__wbg_ptr, this), this;
    }
    static load(r, o, i) {
      return de.ptree_load(jt(r) ? 0 : zn(r), o, jt(i) ? 0 : zn(i));
    }
    get(r) {
      return de.ptree_get(this.__wbg_ptr, r);
    }
    insert(r, o) {
      return de.ptree_insert(this.__wbg_ptr, r, o);
    }
    insertBatch(r) {
      return de.ptree_insertBatch(this.__wbg_ptr, r);
    }
    delete(r) {
      return de.ptree_delete(this.__wbg_ptr, r);
    }
    commit() {
      return de.ptree_commit(this.__wbg_ptr);
    }
    getRootHash() {
      return de.ptree_getRootHash(this.__wbg_ptr);
    }
    exportChunks() {
      return de.ptree_exportChunks(this.__wbg_ptr);
    }
    static newWithConfig(r, o) {
      const i = de.ptree_newWithConfig(r, o);
      if (i[2]) throw cM(i[1]);
      return wa.__wrap(i[0]);
    }
    cursorStart() {
      return de.ptree_cursorStart(this.__wbg_ptr);
    }
    seek(r) {
      return de.ptree_seek(this.__wbg_ptr, r);
    }
    diffRoots(r, o) {
      return de.ptree_diffRoots(this.__wbg_ptr, jt(r) ? 0 : zn(r), jt(o) ? 0 : zn(o));
    }
    triggerGc(r) {
      return de.ptree_triggerGc(this.__wbg_ptr, r);
    }
    getTreeConfig() {
      return de.ptree_getTreeConfig(this.__wbg_ptr);
    }
    scanItems(r) {
      return de.ptree_scanItems(this.__wbg_ptr, r);
    }
    countAllItems() {
      return de.ptree_countAllItems(this.__wbg_ptr);
    }
    hierarchyScan(r) {
      return de.ptree_hierarchyScan(this.__wbg_ptr, jt(r) ? 0 : zn(r));
    }
    saveTreeToFileBytes(r) {
      var o = jt(r) ? 0 : Ac(r, de.__wbindgen_malloc, de.__wbindgen_realloc), i = ko;
      return de.ptree_saveTreeToFileBytes(this.__wbg_ptr, o, i);
    }
    static loadTreeFromFileBytes(r) {
      return de.ptree_loadTreeFromFileBytes(r);
    }
  }
  const zy = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((t) => de.__wbg_ptreecursor_free(t >>> 0, 1));
  class Dh {
    static __wrap(r) {
      r = r >>> 0;
      const o = Object.create(Dh.prototype);
      return o.__wbg_ptr = r, zy.register(o, o.__wbg_ptr, o), o;
    }
    __destroy_into_raw() {
      const r = this.__wbg_ptr;
      return this.__wbg_ptr = 0, zy.unregister(this), r;
    }
    free() {
      const r = this.__destroy_into_raw();
      de.__wbg_ptreecursor_free(r, 0);
    }
    next() {
      return de.ptreecursor_next(this.__wbg_ptr);
    }
  }
  const ky = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((t) => de.__wbg_scanpage_free(t >>> 0, 1));
  class Nh {
    static __wrap(r) {
      r = r >>> 0;
      const o = Object.create(Nh.prototype);
      return o.__wbg_ptr = r, ky.register(o, o.__wbg_ptr, o), o;
    }
    __destroy_into_raw() {
      const r = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ky.unregister(this), r;
    }
    free() {
      const r = this.__destroy_into_raw();
      de.__wbg_scanpage_free(r, 0);
    }
    get items() {
      return de.scanpage_items(this.__wbg_ptr);
    }
    get hasNextPage() {
      return de.scanpage_has_next_page(this.__wbg_ptr) !== 0;
    }
    get hasPreviousPage() {
      return de.scanpage_has_previous_page(this.__wbg_ptr) !== 0;
    }
    get nextPageCursor() {
      return de.scanpage_next_page_cursor(this.__wbg_ptr);
    }
    get previousPageCursor() {
      return de.scanpage_previous_page_cursor(this.__wbg_ptr);
    }
  }
  function dM(t, r) {
    const o = String(r), i = Ac(o, de.__wbindgen_malloc, de.__wbindgen_realloc), l = ko;
    Sn().setInt32(t + 4 * 1, l, true), Sn().setInt32(t + 4 * 0, i, true);
  }
  function hM(t) {
    return t.buffer;
  }
  function pM() {
    return cs(function(t, r) {
      return t.call(r);
    }, arguments);
  }
  function mM() {
    return cs(function(t, r, o) {
      return t.call(r, o);
    }, arguments);
  }
  function gM(t, r) {
    var o = Ah(t, r).slice();
    de.__wbindgen_free(t, r * 4, 4), console.debug(...o);
  }
  function vM(t) {
    return t.done;
  }
  function yM(t, r) {
    var o = Ah(t, r).slice();
    de.__wbindgen_free(t, r * 4, 4), console.error(...o);
  }
  function bM(t) {
    return t.getTime();
  }
  function _M() {
    return cs(function(t, r) {
      return Reflect.get(t, r);
    }, arguments);
  }
  function wM(t, r) {
    return t[r >>> 0];
  }
  function xM(t, r) {
    return t[r];
  }
  function SM(t) {
    return Oh.__wrap(t);
  }
  function EM(t) {
    let r;
    try {
      r = t instanceof ArrayBuffer;
    } catch {
      r = false;
    }
    return r;
  }
  function RM(t) {
    let r;
    try {
      r = t instanceof Uint8Array;
    } catch {
      r = false;
    }
    return r;
  }
  function TM(t) {
    return Array.isArray(t);
  }
  function CM(t) {
    return Number.isSafeInteger(t);
  }
  function MM() {
    return Symbol.iterator;
  }
  function AM(t) {
    return t.length;
  }
  function OM(t) {
    return t.length;
  }
  function DM() {
    return /* @__PURE__ */ new Date();
  }
  function NM(t, r) {
    try {
      var o = {
        a: t,
        b: r
      }, i = (u, d) => {
        const h = o.a;
        o.a = 0;
        try {
          return fM(h, o.b, u, d);
        } finally {
          o.a = h;
        }
      };
      return new Promise(i);
    } finally {
      o.a = o.b = 0;
    }
  }
  function jM() {
    return new Object();
  }
  function zM() {
    return /* @__PURE__ */ new Map();
  }
  function kM() {
    return new Array();
  }
  function LM(t) {
    return new Uint8Array(t);
  }
  function UM(t, r) {
    return new Function(us(t, r));
  }
  function BM(t, r, o) {
    return new Uint8Array(t, r >>> 0, o >>> 0);
  }
  function PM(t) {
    return new Array(t >>> 0);
  }
  function HM(t) {
    return t.next;
  }
  function qM() {
    return cs(function(t) {
      return t.next();
    }, arguments);
  }
  function GM(t) {
    return wa.__wrap(t);
  }
  function FM(t) {
    return Dh.__wrap(t);
  }
  function VM(t, r) {
    return t.push(r);
  }
  function YM(t) {
    queueMicrotask(t);
  }
  function KM(t) {
    return t.queueMicrotask;
  }
  function IM(t) {
    return Promise.reject(t);
  }
  function QM(t) {
    return Promise.resolve(t);
  }
  function XM(t) {
    return Nh.__wrap(t);
  }
  function $M(t, r, o) {
    t[r >>> 0] = o;
  }
  function ZM(t, r, o) {
    t[r] = o;
  }
  function JM(t, r, o) {
    t.set(r, o >>> 0);
  }
  function WM(t, r, o) {
    return t.set(r, o);
  }
  function eA() {
    return cs(function(t, r, o) {
      return Reflect.set(t, r, o);
    }, arguments);
  }
  function tA() {
    const t = typeof global > "u" ? null : global;
    return jt(t) ? 0 : zn(t);
  }
  function nA() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return jt(t) ? 0 : zn(t);
  }
  function rA() {
    const t = typeof self > "u" ? null : self;
    return jt(t) ? 0 : zn(t);
  }
  function aA() {
    const t = typeof window > "u" ? null : window;
    return jt(t) ? 0 : zn(t);
  }
  function oA(t, r) {
    return t.then(r);
  }
  function iA(t) {
    return t.value;
  }
  function sA(t, r) {
    var o = Ah(t, r).slice();
    de.__wbindgen_free(t, r * 4, 4), console.warn(...o);
  }
  function lA(t) {
    return +t;
  }
  function cA(t) {
    return BigInt.asUintN(64, t);
  }
  function uA(t, r) {
    const o = r, i = typeof o == "bigint" ? o : void 0;
    Sn().setBigInt64(t + 8 * 1, jt(i) ? BigInt(0) : i, true), Sn().setInt32(t + 4 * 0, !jt(i), true);
  }
  function fA(t) {
    const r = t;
    return typeof r == "boolean" ? r ? 1 : 0 : 2;
  }
  function dA(t) {
    const r = t.original;
    return r.cnt-- == 1 ? (r.a = 0, true) : false;
  }
  function hA(t, r, o) {
    return lM(t, r, 150, uM);
  }
  function pA(t, r) {
    const o = Yd(r), i = Ac(o, de.__wbindgen_malloc, de.__wbindgen_realloc), l = ko;
    Sn().setInt32(t + 4 * 1, l, true), Sn().setInt32(t + 4 * 0, i, true);
  }
  function mA(t, r) {
    return new Error(us(t, r));
  }
  function gA(t, r) {
    return t in r;
  }
  function vA() {
    const t = de.__wbindgen_export_4, r = t.grow(4);
    t.set(0, void 0), t.set(r + 0, void 0), t.set(r + 1, null), t.set(r + 2, true), t.set(r + 3, false);
  }
  function yA(t) {
    return typeof t == "bigint";
  }
  function bA(t) {
    return typeof t == "function";
  }
  function _A(t) {
    return t === null;
  }
  function wA(t) {
    const r = t;
    return typeof r == "object" && r !== null;
  }
  function xA(t) {
    return t === void 0;
  }
  function SA(t, r) {
    return t === r;
  }
  function EA(t, r) {
    return t == r;
  }
  function RA() {
    return de.memory;
  }
  function TA(t, r) {
    const o = r, i = typeof o == "number" ? o : void 0;
    Sn().setFloat64(t + 8 * 1, jt(i) ? 0 : i, true), Sn().setInt32(t + 4 * 0, !jt(i), true);
  }
  function CA(t) {
    return t;
  }
  function MA(t, r) {
    const o = r, i = typeof o == "string" ? o : void 0;
    var l = jt(i) ? 0 : Ac(i, de.__wbindgen_malloc, de.__wbindgen_realloc), u = ko;
    Sn().setInt32(t + 4 * 1, u, true), Sn().setInt32(t + 4 * 0, l, true);
  }
  function AA(t, r) {
    return us(t, r);
  }
  function OA(t, r) {
    throw new Error(us(t, r));
  }
  URL = globalThis.URL;
  const we = await rM({
    "./prolly_rust_bg.js": {
      __wbg_ptreecursor_new: FM,
      __wbindgen_number_new: CA,
      __wbg_hierarchyscanpage_new: SM,
      __wbindgen_string_new: AA,
      __wbg_ptree_new: GM,
      __wbg_scanpage_new: XM,
      __wbindgen_error_new: mA,
      __wbindgen_is_bigint: yA,
      __wbindgen_bigint_from_u64: cA,
      __wbindgen_jsval_eq: SA,
      __wbindgen_is_object: wA,
      __wbindgen_is_undefined: xA,
      __wbindgen_in: gA,
      __wbindgen_boolean_get: fA,
      __wbindgen_is_null: _A,
      __wbindgen_cb_drop: dA,
      __wbg_queueMicrotask_d3219def82552485: KM,
      __wbindgen_is_function: bA,
      __wbg_queueMicrotask_97d92b4fcc8a61c5: YM,
      __wbg_debug_07010e9cfe65fce9: gM,
      __wbg_error_3c7d958458bf649b: yM,
      __wbg_warn_1529a2c662795cd8: sA,
      __wbindgen_jsval_loose_eq: EA,
      __wbindgen_number_get: TA,
      __wbindgen_string_get: MA,
      __wbindgen_as_number: lA,
      __wbg_String_8f0eb39a4a4c2f66: dM,
      __wbg_getwithrefkey_1dc361bd10053bfe: xM,
      __wbg_set_3f1d0b984ed272ed: ZM,
      __wbg_get_b9b93047fe3cf45b: wM,
      __wbg_length_e2d2a49132c1b256: OM,
      __wbg_new_78feb108b6472713: kM,
      __wbg_newnoargs_105ed471475aaf50: UM,
      __wbg_new_5e0be73521bc8c17: zM,
      __wbg_next_25feadfc0913fea9: HM,
      __wbg_next_6574e1a8a62d1055: qM,
      __wbg_done_769e5ede4b31c67b: vM,
      __wbg_value_cd1ffa7b1ab794f1: iA,
      __wbg_iterator_9a24c88df860dc65: MM,
      __wbg_get_67b2ba62fc30de12: _M,
      __wbg_call_672a4d21634d4a24: pM,
      __wbg_new_405e22f390576ce2: jM,
      __wbg_newwithlength_c4c419ef0bc8a1f8: PM,
      __wbg_set_37837023f3d740e8: $M,
      __wbg_isArray_a1eab7e0d067391b: TM,
      __wbg_push_737cfc8c1432c2c6: VM,
      __wbg_instanceof_ArrayBuffer_e14585432e3737fc: EM,
      __wbg_call_7cccdd69e0791ae2: mM,
      __wbg_set_8fc6bf8a5b1071d1: WM,
      __wbg_isSafeInteger_343e2beeeece1bb0: CM,
      __wbg_getTime_46267b1c24877e30: bM,
      __wbg_new0_f788a2397c7ca929: DM,
      __wbg_new_23a2665fac83c611: NM,
      __wbg_reject_b3fcf99063186ff7: IM,
      __wbg_resolve_4851785c9c5f573d: QM,
      __wbg_then_44b73946d2fb3e7d: oA,
      __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: nA,
      __wbg_static_accessor_SELF_37c5d418e4bf5819: rA,
      __wbg_static_accessor_WINDOW_5de37043a91a9c40: aA,
      __wbg_static_accessor_GLOBAL_88a902d13a557d07: tA,
      __wbg_buffer_609cc3eee51ed158: hM,
      __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: BM,
      __wbg_new_a12002a7f91c75be: LM,
      __wbg_set_65595bdd868b3009: JM,
      __wbg_length_a446193dc22c12f8: AM,
      __wbg_instanceof_Uint8Array_17156bcf118086a9: RM,
      __wbg_set_bb8cecf6a62b9f46: eA,
      __wbindgen_bigint_get_as_i64: uA,
      __wbindgen_debug_string: pA,
      __wbindgen_throw: OA,
      __wbindgen_memory: RA,
      __wbindgen_closure_wrapper583: hA,
      __wbindgen_init_externref_table: vA
    }
  }, nM), DA = we.memory, NA = we.__wbg_scanpage_free, jA = we.scanpage_items, zA = we.scanpage_has_next_page, kA = we.scanpage_has_previous_page, LA = we.scanpage_next_page_cursor, UA = we.scanpage_previous_page_cursor, BA = we.__wbg_hierarchyscanpage_free, PA = we.hierarchyscanpage_items, HA = we.hierarchyscanpage_has_next_page, qA = we.hierarchyscanpage_next_page_cursor_token, GA = we.__wbg_ptree_free, FA = we.__wbg_ptreecursor_free, VA = we.ptreecursor_next, YA = we.ptree_new, KA = we.ptree_load, IA = we.ptree_get, QA = we.ptree_insert, XA = we.ptree_insertBatch, $A = we.ptree_delete, ZA = we.ptree_commit, JA = we.ptree_getRootHash, WA = we.ptree_exportChunks, eO = we.ptree_newWithConfig, tO = we.ptree_cursorStart, nO = we.ptree_seek, rO = we.ptree_diffRoots, aO = we.ptree_triggerGc, oO = we.ptree_getTreeConfig, iO = we.ptree_scanItems, sO = we.ptree_countAllItems, lO = we.ptree_hierarchyScan, cO = we.ptree_saveTreeToFileBytes, uO = we.ptree_loadTreeFromFileBytes, fO = we.__wbindgen_malloc, dO = we.__wbindgen_realloc, hO = we.__wbindgen_exn_store, pO = we.__externref_table_alloc, mO = we.__wbindgen_export_4, gO = we.__externref_drop_slice, vO = we.__wbindgen_free, yO = we.__wbindgen_export_7, bO = we.__externref_table_dealloc, _O = we.closure149_externref_shim, wO = we.closure194_externref_shim, h_ = we.__wbindgen_start, xO = Object.freeze(Object.defineProperty({
    __proto__: null,
    __externref_drop_slice: gO,
    __externref_table_alloc: pO,
    __externref_table_dealloc: bO,
    __wbg_hierarchyscanpage_free: BA,
    __wbg_ptree_free: GA,
    __wbg_ptreecursor_free: FA,
    __wbg_scanpage_free: NA,
    __wbindgen_exn_store: hO,
    __wbindgen_export_4: mO,
    __wbindgen_export_7: yO,
    __wbindgen_free: vO,
    __wbindgen_malloc: fO,
    __wbindgen_realloc: dO,
    __wbindgen_start: h_,
    closure149_externref_shim: _O,
    closure194_externref_shim: wO,
    hierarchyscanpage_has_next_page: HA,
    hierarchyscanpage_items: PA,
    hierarchyscanpage_next_page_cursor_token: qA,
    memory: DA,
    ptree_commit: ZA,
    ptree_countAllItems: sO,
    ptree_cursorStart: tO,
    ptree_delete: $A,
    ptree_diffRoots: rO,
    ptree_exportChunks: WA,
    ptree_get: IA,
    ptree_getRootHash: JA,
    ptree_getTreeConfig: oO,
    ptree_hierarchyScan: lO,
    ptree_insert: QA,
    ptree_insertBatch: XA,
    ptree_load: KA,
    ptree_loadTreeFromFileBytes: uO,
    ptree_new: YA,
    ptree_newWithConfig: eO,
    ptree_saveTreeToFileBytes: cO,
    ptree_scanItems: iO,
    ptree_seek: nO,
    ptree_triggerGc: aO,
    ptreecursor_next: VA,
    scanpage_has_next_page: zA,
    scanpage_has_previous_page: kA,
    scanpage_items: jA,
    scanpage_next_page_cursor: LA,
    scanpage_previous_page_cursor: UA
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  aM(xO);
  h_();
  const Ly = (t) => {
    t = 1831565813 + (t |= 0) | 0;
    let r = Math.imul(t ^ t >>> 15, 1 | t);
    return r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r, ((r ^ r >>> 14) >>> 0) / 4294967296;
  };
  class SO {
    constructor(r) {
      this.dictionaries = void 0, this.length = void 0, this.separator = void 0, this.style = void 0, this.seed = void 0;
      const { length: o, separator: i, dictionaries: l, style: u, seed: d } = r;
      this.dictionaries = l, this.separator = i, this.length = o, this.style = u, this.seed = d;
    }
    generate() {
      if (!this.dictionaries) throw new Error('Cannot find any dictionary. Please provide at least one, or leave the "dictionary" field empty in the config object');
      if (this.length <= 0) throw new Error("Invalid length provided");
      if (this.length > this.dictionaries.length) throw new Error(`The length cannot be bigger than the number of dictionaries.
Length provided: ${this.length}. Number of dictionaries provided: ${this.dictionaries.length}`);
      let r = this.seed;
      return this.dictionaries.slice(0, this.length).reduce((o, i) => {
        let l;
        r ? (l = ((d) => {
          if (typeof d == "string") {
            const h = d.split("").map((p) => p.charCodeAt(0)).reduce((p, v) => p + v, 1), g = Math.floor(Number(h));
            return Ly(g);
          }
          return Ly(d);
        })(r), r = 4294967296 * l) : l = Math.random();
        let u = i[Math.floor(l * i.length)] || "";
        if (this.style === "lowerCase") u = u.toLowerCase();
        else if (this.style === "capital") {
          const [d, ...h] = u.split("");
          u = d.toUpperCase() + h.join("");
        } else this.style === "upperCase" && (u = u.toUpperCase());
        return o ? `${o}${this.separator}${u}` : `${u}`;
      }, "");
    }
  }
  const Uy = {
    separator: "_",
    dictionaries: []
  }, EO = (t) => {
    const r = [
      ...t && t.dictionaries || Uy.dictionaries
    ], o = {
      ...Uy,
      ...t,
      length: t && t.length || r.length,
      dictionaries: r
    };
    if (!t || !t.dictionaries || !t.dictionaries.length) throw new Error('A "dictionaries" array must be provided. This is a breaking change introduced starting from Unique Name Generator v4. Read more about the breaking change here: https://github.com/andreasonny83/unique-names-generator#migration-guide');
    return new SO(o).generate();
  };
  var RO = [
    "able",
    "above",
    "absent",
    "absolute",
    "abstract",
    "abundant",
    "academic",
    "acceptable",
    "accepted",
    "accessible",
    "accurate",
    "accused",
    "active",
    "actual",
    "acute",
    "added",
    "additional",
    "adequate",
    "adjacent",
    "administrative",
    "adorable",
    "advanced",
    "adverse",
    "advisory",
    "aesthetic",
    "afraid",
    "aggregate",
    "aggressive",
    "agreeable",
    "agreed",
    "agricultural",
    "alert",
    "alive",
    "alleged",
    "allied",
    "alone",
    "alright",
    "alternative",
    "amateur",
    "amazing",
    "ambitious",
    "amused",
    "ancient",
    "angry",
    "annoyed",
    "annual",
    "anonymous",
    "anxious",
    "appalling",
    "apparent",
    "applicable",
    "appropriate",
    "arbitrary",
    "architectural",
    "armed",
    "arrogant",
    "artificial",
    "artistic",
    "ashamed",
    "asleep",
    "assistant",
    "associated",
    "atomic",
    "attractive",
    "automatic",
    "autonomous",
    "available",
    "average",
    "awake",
    "aware",
    "awful",
    "awkward",
    "back",
    "bad",
    "balanced",
    "bare",
    "basic",
    "beautiful",
    "beneficial",
    "better",
    "bewildered",
    "big",
    "binding",
    "biological",
    "bitter",
    "bizarre",
    "blank",
    "blind",
    "blonde",
    "bloody",
    "blushing",
    "boiling",
    "bold",
    "bored",
    "boring",
    "bottom",
    "brainy",
    "brave",
    "breakable",
    "breezy",
    "brief",
    "bright",
    "brilliant",
    "broad",
    "broken",
    "bumpy",
    "burning",
    "busy",
    "calm",
    "capable",
    "capitalist",
    "careful",
    "casual",
    "causal",
    "cautious",
    "central",
    "certain",
    "changing",
    "characteristic",
    "charming",
    "cheap",
    "cheerful",
    "chemical",
    "chief",
    "chilly",
    "chosen",
    "christian",
    "chronic",
    "chubby",
    "circular",
    "civic",
    "civil",
    "civilian",
    "classic",
    "classical",
    "clean",
    "clear",
    "clever",
    "clinical",
    "close",
    "closed",
    "cloudy",
    "clumsy",
    "coastal",
    "cognitive",
    "coherent",
    "cold",
    "collective",
    "colonial",
    "colorful",
    "colossal",
    "coloured",
    "colourful",
    "combative",
    "combined",
    "comfortable",
    "coming",
    "commercial",
    "common",
    "communist",
    "compact",
    "comparable",
    "comparative",
    "compatible",
    "competent",
    "competitive",
    "complete",
    "complex",
    "complicated",
    "comprehensive",
    "compulsory",
    "conceptual",
    "concerned",
    "concrete",
    "condemned",
    "confident",
    "confidential",
    "confused",
    "conscious",
    "conservation",
    "conservative",
    "considerable",
    "consistent",
    "constant",
    "constitutional",
    "contemporary",
    "content",
    "continental",
    "continued",
    "continuing",
    "continuous",
    "controlled",
    "controversial",
    "convenient",
    "conventional",
    "convinced",
    "convincing",
    "cooing",
    "cool",
    "cooperative",
    "corporate",
    "correct",
    "corresponding",
    "costly",
    "courageous",
    "crazy",
    "creative",
    "creepy",
    "criminal",
    "critical",
    "crooked",
    "crowded",
    "crucial",
    "crude",
    "cruel",
    "cuddly",
    "cultural",
    "curious",
    "curly",
    "current",
    "curved",
    "cute",
    "daily",
    "damaged",
    "damp",
    "dangerous",
    "dark",
    "dead",
    "deaf",
    "deafening",
    "dear",
    "decent",
    "decisive",
    "deep",
    "defeated",
    "defensive",
    "defiant",
    "definite",
    "deliberate",
    "delicate",
    "delicious",
    "delighted",
    "delightful",
    "democratic",
    "dependent",
    "depressed",
    "desirable",
    "desperate",
    "detailed",
    "determined",
    "developed",
    "developing",
    "devoted",
    "different",
    "difficult",
    "digital",
    "diplomatic",
    "direct",
    "dirty",
    "disabled",
    "disappointed",
    "disastrous",
    "disciplinary",
    "disgusted",
    "distant",
    "distinct",
    "distinctive",
    "distinguished",
    "disturbed",
    "disturbing",
    "diverse",
    "divine",
    "dizzy",
    "domestic",
    "dominant",
    "double",
    "doubtful",
    "drab",
    "dramatic",
    "dreadful",
    "driving",
    "drunk",
    "dry",
    "dual",
    "due",
    "dull",
    "dusty",
    "dutch",
    "dying",
    "dynamic",
    "eager",
    "early",
    "eastern",
    "easy",
    "economic",
    "educational",
    "eerie",
    "effective",
    "efficient",
    "elaborate",
    "elated",
    "elderly",
    "eldest",
    "electoral",
    "electric",
    "electrical",
    "electronic",
    "elegant",
    "eligible",
    "embarrassed",
    "embarrassing",
    "emotional",
    "empirical",
    "empty",
    "enchanting",
    "encouraging",
    "endless",
    "energetic",
    "enormous",
    "enthusiastic",
    "entire",
    "entitled",
    "envious",
    "environmental",
    "equal",
    "equivalent",
    "essential",
    "established",
    "estimated",
    "ethical",
    "ethnic",
    "eventual",
    "everyday",
    "evident",
    "evil",
    "evolutionary",
    "exact",
    "excellent",
    "exceptional",
    "excess",
    "excessive",
    "excited",
    "exciting",
    "exclusive",
    "existing",
    "exotic",
    "expected",
    "expensive",
    "experienced",
    "experimental",
    "explicit",
    "extended",
    "extensive",
    "external",
    "extra",
    "extraordinary",
    "extreme",
    "exuberant",
    "faint",
    "fair",
    "faithful",
    "familiar",
    "famous",
    "fancy",
    "fantastic",
    "far",
    "fascinating",
    "fashionable",
    "fast",
    "fat",
    "fatal",
    "favourable",
    "favourite",
    "federal",
    "fellow",
    "female",
    "feminist",
    "few",
    "fierce",
    "filthy",
    "final",
    "financial",
    "fine",
    "firm",
    "fiscal",
    "fit",
    "fixed",
    "flaky",
    "flat",
    "flexible",
    "fluffy",
    "fluttering",
    "flying",
    "following",
    "fond",
    "foolish",
    "foreign",
    "formal",
    "formidable",
    "forthcoming",
    "fortunate",
    "forward",
    "fragile",
    "frail",
    "frantic",
    "free",
    "frequent",
    "fresh",
    "friendly",
    "frightened",
    "front",
    "frozen",
    "full",
    "fun",
    "functional",
    "fundamental",
    "funny",
    "furious",
    "future",
    "fuzzy",
    "gastric",
    "gay",
    "general",
    "generous",
    "genetic",
    "gentle",
    "genuine",
    "geographical",
    "giant",
    "gigantic",
    "given",
    "glad",
    "glamorous",
    "gleaming",
    "global",
    "glorious",
    "golden",
    "good",
    "gorgeous",
    "gothic",
    "governing",
    "graceful",
    "gradual",
    "grand",
    "grateful",
    "greasy",
    "great",
    "grieving",
    "grim",
    "gross",
    "grotesque",
    "growing",
    "grubby",
    "grumpy",
    "guilty",
    "handicapped",
    "handsome",
    "happy",
    "hard",
    "harsh",
    "head",
    "healthy",
    "heavy",
    "helpful",
    "helpless",
    "hidden",
    "high",
    "hilarious",
    "hissing",
    "historic",
    "historical",
    "hollow",
    "holy",
    "homeless",
    "homely",
    "hon",
    "honest",
    "horizontal",
    "horrible",
    "hostile",
    "hot",
    "huge",
    "human",
    "hungry",
    "hurt",
    "hushed",
    "husky",
    "icy",
    "ideal",
    "identical",
    "ideological",
    "ill",
    "illegal",
    "imaginative",
    "immediate",
    "immense",
    "imperial",
    "implicit",
    "important",
    "impossible",
    "impressed",
    "impressive",
    "improved",
    "inadequate",
    "inappropriate",
    "inc",
    "inclined",
    "increased",
    "increasing",
    "incredible",
    "independent",
    "indirect",
    "individual",
    "industrial",
    "inevitable",
    "influential",
    "informal",
    "inherent",
    "initial",
    "injured",
    "inland",
    "inner",
    "innocent",
    "innovative",
    "inquisitive",
    "instant",
    "institutional",
    "insufficient",
    "intact",
    "integral",
    "integrated",
    "intellectual",
    "intelligent",
    "intense",
    "intensive",
    "interested",
    "interesting",
    "interim",
    "interior",
    "intermediate",
    "internal",
    "international",
    "intimate",
    "invisible",
    "involved",
    "irrelevant",
    "isolated",
    "itchy",
    "jealous",
    "jittery",
    "joint",
    "jolly",
    "joyous",
    "judicial",
    "juicy",
    "junior",
    "just",
    "keen",
    "key",
    "kind",
    "known",
    "labour",
    "large",
    "late",
    "latin",
    "lazy",
    "leading",
    "left",
    "legal",
    "legislative",
    "legitimate",
    "lengthy",
    "lesser",
    "level",
    "lexical",
    "liable",
    "liberal",
    "light",
    "like",
    "likely",
    "limited",
    "linear",
    "linguistic",
    "liquid",
    "literary",
    "little",
    "live",
    "lively",
    "living",
    "local",
    "logical",
    "lonely",
    "long",
    "loose",
    "lost",
    "loud",
    "lovely",
    "low",
    "loyal",
    "ltd",
    "lucky",
    "mad",
    "magic",
    "magnetic",
    "magnificent",
    "main",
    "major",
    "male",
    "mammoth",
    "managerial",
    "managing",
    "manual",
    "many",
    "marginal",
    "marine",
    "marked",
    "married",
    "marvellous",
    "marxist",
    "mass",
    "massive",
    "mathematical",
    "mature",
    "maximum",
    "mean",
    "meaningful",
    "mechanical",
    "medical",
    "medieval",
    "melodic",
    "melted",
    "mental",
    "mere",
    "metropolitan",
    "mid",
    "middle",
    "mighty",
    "mild",
    "military",
    "miniature",
    "minimal",
    "minimum",
    "ministerial",
    "minor",
    "miserable",
    "misleading",
    "missing",
    "misty",
    "mixed",
    "moaning",
    "mobile",
    "moderate",
    "modern",
    "modest",
    "molecular",
    "monetary",
    "monthly",
    "moral",
    "motionless",
    "muddy",
    "multiple",
    "mushy",
    "musical",
    "mute",
    "mutual",
    "mysterious",
    "naked",
    "narrow",
    "nasty",
    "national",
    "native",
    "natural",
    "naughty",
    "naval",
    "near",
    "nearby",
    "neat",
    "necessary",
    "negative",
    "neighbouring",
    "nervous",
    "net",
    "neutral",
    "new",
    "nice",
    "noble",
    "noisy",
    "normal",
    "northern",
    "nosy",
    "notable",
    "novel",
    "nuclear",
    "numerous",
    "nursing",
    "nutritious",
    "nutty",
    "obedient",
    "objective",
    "obliged",
    "obnoxious",
    "obvious",
    "occasional",
    "occupational",
    "odd",
    "official",
    "ok",
    "okay",
    "old",
    "olympic",
    "only",
    "open",
    "operational",
    "opposite",
    "optimistic",
    "oral",
    "ordinary",
    "organic",
    "organisational",
    "original",
    "orthodox",
    "other",
    "outdoor",
    "outer",
    "outrageous",
    "outside",
    "outstanding",
    "overall",
    "overseas",
    "overwhelming",
    "painful",
    "pale",
    "panicky",
    "parallel",
    "parental",
    "parliamentary",
    "partial",
    "particular",
    "passing",
    "passive",
    "past",
    "patient",
    "payable",
    "peaceful",
    "peculiar",
    "perfect",
    "permanent",
    "persistent",
    "personal",
    "petite",
    "philosophical",
    "physical",
    "plain",
    "planned",
    "plastic",
    "pleasant",
    "pleased",
    "poised",
    "polite",
    "political",
    "poor",
    "popular",
    "positive",
    "possible",
    "potential",
    "powerful",
    "practical",
    "precious",
    "precise",
    "preferred",
    "pregnant",
    "preliminary",
    "premier",
    "prepared",
    "present",
    "presidential",
    "pretty",
    "previous",
    "prickly",
    "primary",
    "prime",
    "primitive",
    "principal",
    "printed",
    "prior",
    "private",
    "probable",
    "productive",
    "professional",
    "profitable",
    "profound",
    "progressive",
    "prominent",
    "promising",
    "proper",
    "proposed",
    "prospective",
    "protective",
    "protestant",
    "proud",
    "provincial",
    "psychiatric",
    "psychological",
    "public",
    "puny",
    "pure",
    "purring",
    "puzzled",
    "quaint",
    "qualified",
    "quarrelsome",
    "querulous",
    "quick",
    "quickest",
    "quiet",
    "quintessential",
    "quixotic",
    "racial",
    "radical",
    "rainy",
    "random",
    "rapid",
    "rare",
    "raspy",
    "rational",
    "ratty",
    "raw",
    "ready",
    "real",
    "realistic",
    "rear",
    "reasonable",
    "recent",
    "reduced",
    "redundant",
    "regional",
    "registered",
    "regular",
    "regulatory",
    "related",
    "relative",
    "relaxed",
    "relevant",
    "reliable",
    "relieved",
    "religious",
    "reluctant",
    "remaining",
    "remarkable",
    "remote",
    "renewed",
    "representative",
    "repulsive",
    "required",
    "resident",
    "residential",
    "resonant",
    "respectable",
    "respective",
    "responsible",
    "resulting",
    "retail",
    "retired",
    "revolutionary",
    "rich",
    "ridiculous",
    "right",
    "rigid",
    "ripe",
    "rising",
    "rival",
    "roasted",
    "robust",
    "rolling",
    "romantic",
    "rotten",
    "rough",
    "round",
    "royal",
    "rubber",
    "rude",
    "ruling",
    "running",
    "rural",
    "sacred",
    "sad",
    "safe",
    "salty",
    "satisfactory",
    "satisfied",
    "scared",
    "scary",
    "scattered",
    "scientific",
    "scornful",
    "scrawny",
    "screeching",
    "secondary",
    "secret",
    "secure",
    "select",
    "selected",
    "selective",
    "selfish",
    "semantic",
    "senior",
    "sensible",
    "sensitive",
    "separate",
    "serious",
    "severe",
    "sexual",
    "shaggy",
    "shaky",
    "shallow",
    "shared",
    "sharp",
    "sheer",
    "shiny",
    "shivering",
    "shocked",
    "short",
    "shrill",
    "shy",
    "sick",
    "significant",
    "silent",
    "silky",
    "silly",
    "similar",
    "simple",
    "single",
    "skilled",
    "skinny",
    "sleepy",
    "slight",
    "slim",
    "slimy",
    "slippery",
    "slow",
    "small",
    "smart",
    "smiling",
    "smoggy",
    "smooth",
    "social",
    "socialist",
    "soft",
    "solar",
    "sole",
    "solid",
    "sophisticated",
    "sore",
    "sorry",
    "sound",
    "sour",
    "southern",
    "soviet",
    "spare",
    "sparkling",
    "spatial",
    "special",
    "specific",
    "specified",
    "spectacular",
    "spicy",
    "spiritual",
    "splendid",
    "spontaneous",
    "sporting",
    "spotless",
    "spotty",
    "square",
    "squealing",
    "stable",
    "stale",
    "standard",
    "static",
    "statistical",
    "statutory",
    "steady",
    "steep",
    "sticky",
    "stiff",
    "still",
    "stingy",
    "stormy",
    "straight",
    "straightforward",
    "strange",
    "strategic",
    "strict",
    "striking",
    "striped",
    "strong",
    "structural",
    "stuck",
    "stupid",
    "subjective",
    "subsequent",
    "substantial",
    "subtle",
    "successful",
    "successive",
    "sudden",
    "sufficient",
    "suitable",
    "sunny",
    "super",
    "superb",
    "superior",
    "supporting",
    "supposed",
    "supreme",
    "sure",
    "surprised",
    "surprising",
    "surrounding",
    "surviving",
    "suspicious",
    "sweet",
    "swift",
    "symbolic",
    "sympathetic",
    "systematic",
    "tall",
    "tame",
    "tart",
    "tasteless",
    "tasty",
    "technical",
    "technological",
    "teenage",
    "temporary",
    "tender",
    "tense",
    "terrible",
    "territorial",
    "testy",
    "then",
    "theoretical",
    "thick",
    "thin",
    "thirsty",
    "thorough",
    "thoughtful",
    "thoughtless",
    "thundering",
    "tight",
    "tiny",
    "tired",
    "top",
    "tory",
    "total",
    "tough",
    "toxic",
    "traditional",
    "tragic",
    "tremendous",
    "tricky",
    "tropical",
    "troubled",
    "typical",
    "ugliest",
    "ugly",
    "ultimate",
    "unable",
    "unacceptable",
    "unaware",
    "uncertain",
    "unchanged",
    "uncomfortable",
    "unconscious",
    "underground",
    "underlying",
    "unemployed",
    "uneven",
    "unexpected",
    "unfair",
    "unfortunate",
    "unhappy",
    "uniform",
    "uninterested",
    "unique",
    "united",
    "universal",
    "unknown",
    "unlikely",
    "unnecessary",
    "unpleasant",
    "unsightly",
    "unusual",
    "unwilling",
    "upper",
    "upset",
    "uptight",
    "urban",
    "urgent",
    "used",
    "useful",
    "useless",
    "usual",
    "vague",
    "valid",
    "valuable",
    "variable",
    "varied",
    "various",
    "varying",
    "vast",
    "verbal",
    "vertical",
    "very",
    "vicarious",
    "vicious",
    "victorious",
    "violent",
    "visible",
    "visiting",
    "visual",
    "vital",
    "vitreous",
    "vivacious",
    "vivid",
    "vocal",
    "vocational",
    "voiceless",
    "voluminous",
    "voluntary",
    "vulnerable",
    "wandering",
    "warm",
    "wasteful",
    "watery",
    "weak",
    "wealthy",
    "weary",
    "wee",
    "weekly",
    "weird",
    "welcome",
    "well",
    "western",
    "wet",
    "whispering",
    "whole",
    "wicked",
    "wide",
    "widespread",
    "wild",
    "wilful",
    "willing",
    "willowy",
    "wily",
    "wise",
    "wispy",
    "wittering",
    "witty",
    "wonderful",
    "wooden",
    "working",
    "worldwide",
    "worried",
    "worrying",
    "worthwhile",
    "worthy",
    "written",
    "wrong",
    "xenacious",
    "xenial",
    "xenogeneic",
    "xenophobic",
    "xeric",
    "xerothermic",
    "yabbering",
    "yammering",
    "yappiest",
    "yappy",
    "yawning",
    "yearling",
    "yearning",
    "yeasty",
    "yelling",
    "yelping",
    "yielding",
    "yodelling",
    "young",
    "youngest",
    "youthful",
    "ytterbic",
    "yucky",
    "yummy",
    "zany",
    "zealous",
    "zeroth",
    "zestful",
    "zesty",
    "zippy",
    "zonal",
    "zoophagous",
    "zygomorphic",
    "zygotic"
  ], TO = [
    "aardvark",
    "aardwolf",
    "albatross",
    "alligator",
    "alpaca",
    "amphibian",
    "anaconda",
    "angelfish",
    "anglerfish",
    "ant",
    "anteater",
    "antelope",
    "antlion",
    "ape",
    "aphid",
    "armadillo",
    "asp",
    "baboon",
    "badger",
    "bandicoot",
    "barnacle",
    "barracuda",
    "basilisk",
    "bass",
    "bat",
    "bear",
    "beaver",
    "bedbug",
    "bee",
    "beetle",
    "bird",
    "bison",
    "blackbird",
    "boa",
    "boar",
    "bobcat",
    "bobolink",
    "bonobo",
    "booby",
    "bovid",
    "bug",
    "butterfly",
    "buzzard",
    "camel",
    "canid",
    "canidae",
    "capybara",
    "cardinal",
    "caribou",
    "carp",
    "cat",
    "caterpillar",
    "catfish",
    "catshark",
    "cattle",
    "centipede",
    "cephalopod",
    "chameleon",
    "cheetah",
    "chickadee",
    "chicken",
    "chimpanzee",
    "chinchilla",
    "chipmunk",
    "cicada",
    "clam",
    "clownfish",
    "cobra",
    "cockroach",
    "cod",
    "condor",
    "constrictor",
    "coral",
    "cougar",
    "cow",
    "coyote",
    "crab",
    "crane",
    "crawdad",
    "crayfish",
    "cricket",
    "crocodile",
    "crow",
    "cuckoo",
    "damselfly",
    "deer",
    "dingo",
    "dinosaur",
    "dog",
    "dolphin",
    "donkey",
    "dormouse",
    "dove",
    "dragon",
    "dragonfly",
    "duck",
    "eagle",
    "earthworm",
    "earwig",
    "echidna",
    "eel",
    "egret",
    "elephant",
    "elk",
    "emu",
    "ermine",
    "falcon",
    "felidae",
    "ferret",
    "finch",
    "firefly",
    "fish",
    "flamingo",
    "flea",
    "fly",
    "flyingfish",
    "fowl",
    "fox",
    "frog",
    "galliform",
    "gamefowl",
    "gayal",
    "gazelle",
    "gecko",
    "gerbil",
    "gibbon",
    "giraffe",
    "goat",
    "goldfish",
    "goose",
    "gopher",
    "gorilla",
    "grasshopper",
    "grouse",
    "guan",
    "guanaco",
    "guineafowl",
    "gull",
    "guppy",
    "haddock",
    "halibut",
    "hamster",
    "hare",
    "harrier",
    "hawk",
    "hedgehog",
    "heron",
    "herring",
    "hippopotamus",
    "hookworm",
    "hornet",
    "horse",
    "hoverfly",
    "hummingbird",
    "hyena",
    "iguana",
    "impala",
    "jackal",
    "jaguar",
    "jay",
    "jellyfish",
    "junglefowl",
    "kangaroo",
    "kingfisher",
    "kite",
    "kiwi",
    "koala",
    "koi",
    "krill",
    "ladybug",
    "lamprey",
    "landfowl",
    "lark",
    "leech",
    "lemming",
    "lemur",
    "leopard",
    "leopon",
    "limpet",
    "lion",
    "lizard",
    "llama",
    "lobster",
    "locust",
    "loon",
    "louse",
    "lungfish",
    "lynx",
    "macaw",
    "mackerel",
    "magpie",
    "mammal",
    "manatee",
    "mandrill",
    "marlin",
    "marmoset",
    "marmot",
    "marsupial",
    "marten",
    "mastodon",
    "meadowlark",
    "meerkat",
    "mink",
    "minnow",
    "mite",
    "mockingbird",
    "mole",
    "mollusk",
    "mongoose",
    "monkey",
    "moose",
    "mosquito",
    "moth",
    "mouse",
    "mule",
    "muskox",
    "narwhal",
    "newt",
    "nightingale",
    "ocelot",
    "octopus",
    "opossum",
    "orangutan",
    "orca",
    "ostrich",
    "otter",
    "owl",
    "ox",
    "panda",
    "panther",
    "parakeet",
    "parrot",
    "parrotfish",
    "partridge",
    "peacock",
    "peafowl",
    "pelican",
    "penguin",
    "perch",
    "pheasant",
    "pig",
    "pigeon",
    "pike",
    "pinniped",
    "piranha",
    "planarian",
    "platypus",
    "pony",
    "porcupine",
    "porpoise",
    "possum",
    "prawn",
    "primate",
    "ptarmigan",
    "puffin",
    "puma",
    "python",
    "quail",
    "quelea",
    "quokka",
    "rabbit",
    "raccoon",
    "rat",
    "rattlesnake",
    "raven",
    "reindeer",
    "reptile",
    "rhinoceros",
    "roadrunner",
    "rodent",
    "rook",
    "rooster",
    "roundworm",
    "sailfish",
    "salamander",
    "salmon",
    "sawfish",
    "scallop",
    "scorpion",
    "seahorse",
    "shark",
    "sheep",
    "shrew",
    "shrimp",
    "silkworm",
    "silverfish",
    "skink",
    "skunk",
    "sloth",
    "slug",
    "smelt",
    "snail",
    "snake",
    "snipe",
    "sole",
    "sparrow",
    "spider",
    "spoonbill",
    "squid",
    "squirrel",
    "starfish",
    "stingray",
    "stoat",
    "stork",
    "sturgeon",
    "swallow",
    "swan",
    "swift",
    "swordfish",
    "swordtail",
    "tahr",
    "takin",
    "tapir",
    "tarantula",
    "tarsier",
    "termite",
    "tern",
    "thrush",
    "tick",
    "tiger",
    "tiglon",
    "toad",
    "tortoise",
    "toucan",
    "trout",
    "tuna",
    "turkey",
    "turtle",
    "tyrannosaurus",
    "unicorn",
    "urial",
    "vicuna",
    "viper",
    "vole",
    "vulture",
    "wallaby",
    "walrus",
    "warbler",
    "wasp",
    "weasel",
    "whale",
    "whippet",
    "whitefish",
    "wildcat",
    "wildebeest",
    "wildfowl",
    "wolf",
    "wolverine",
    "wombat",
    "woodpecker",
    "worm",
    "wren",
    "xerinae",
    "yak",
    "zebra"
  ];
  let CO, MO, p_;
  CO = new TextEncoder();
  MO = new TextDecoder();
  By = (t) => CO.encode(t);
  Py = (t) => t == null ? "" : MO.decode(t);
  da = (t) => t ? Array.from(t).map((r) => r.toString(16).padStart(2, "0")).join("") : "";
  A4 = (t) => {
    const r = t.startsWith("0x") ? t.substring(2) : t;
    if (r.length === 0) return null;
    if (r.length % 2 !== 0) return console.warn("Hex string must have an even number of characters for conversion."), null;
    const o = new Uint8Array(r.length / 2);
    for (let i = 0; i < o.length; i++) {
      const l = parseInt(r.substr(i * 2, 2), 16);
      if (isNaN(l)) return console.warn(`Invalid hex character encountered in string: "${r}" at position ${i * 2}`), null;
      o[i] = l;
    }
    return o;
  };
  p_ = (t, r, o = "application/octet-stream") => {
    const i = t instanceof Blob ? t : new Blob([
      t
    ], {
      type: o
    }), l = document.createElement("a");
    l.href = URL.createObjectURL(i), l.download = r, document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(l.href);
  };
  var m_ = Symbol.for("immer-nothing"), Hy = Symbol.for("immer-draftable"), $t = Symbol.for("immer-state");
  function _n(t, ...r) {
    throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`);
  }
  var Lo = Object.getPrototypeOf;
  function Uo(t) {
    return !!t && !!t[$t];
  }
  function xa(t) {
    var _a5;
    return t ? g_(t) || Array.isArray(t) || !!t[Hy] || !!((_a5 = t.constructor) == null ? void 0 : _a5[Hy]) || Dc(t) || Nc(t) : false;
  }
  var AO = Object.prototype.constructor.toString();
  function g_(t) {
    if (!t || typeof t != "object") return false;
    const r = Lo(t);
    if (r === null) return true;
    const o = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
    return o === Object ? true : typeof o == "function" && Function.toString.call(o) === AO;
  }
  function sc(t, r) {
    Oc(t) === 0 ? Reflect.ownKeys(t).forEach((o) => {
      r(o, t[o], t);
    }) : t.forEach((o, i) => r(i, o, t));
  }
  function Oc(t) {
    const r = t[$t];
    return r ? r.type_ : Array.isArray(t) ? 1 : Dc(t) ? 2 : Nc(t) ? 3 : 0;
  }
  function Kd(t, r) {
    return Oc(t) === 2 ? t.has(r) : Object.prototype.hasOwnProperty.call(t, r);
  }
  function v_(t, r, o) {
    const i = Oc(t);
    i === 2 ? t.set(r, o) : i === 3 ? t.add(o) : t[r] = o;
  }
  function OO(t, r) {
    return t === r ? t !== 0 || 1 / t === 1 / r : t !== t && r !== r;
  }
  function Dc(t) {
    return t instanceof Map;
  }
  function Nc(t) {
    return t instanceof Set;
  }
  function fa(t) {
    return t.copy_ || t.base_;
  }
  function Id(t, r) {
    if (Dc(t)) return new Map(t);
    if (Nc(t)) return new Set(t);
    if (Array.isArray(t)) return Array.prototype.slice.call(t);
    const o = g_(t);
    if (r === true || r === "class_only" && !o) {
      const i = Object.getOwnPropertyDescriptors(t);
      delete i[$t];
      let l = Reflect.ownKeys(i);
      for (let u = 0; u < l.length; u++) {
        const d = l[u], h = i[d];
        h.writable === false && (h.writable = true, h.configurable = true), (h.get || h.set) && (i[d] = {
          configurable: true,
          writable: true,
          enumerable: h.enumerable,
          value: t[d]
        });
      }
      return Object.create(Lo(t), i);
    } else {
      const i = Lo(t);
      if (i !== null && o) return {
        ...t
      };
      const l = Object.create(i);
      return Object.assign(l, t);
    }
  }
  function jh(t, r = false) {
    return jc(t) || Uo(t) || !xa(t) || (Oc(t) > 1 && (t.set = t.add = t.clear = t.delete = DO), Object.freeze(t), r && Object.entries(t).forEach(([o, i]) => jh(i, true))), t;
  }
  function DO() {
    _n(2);
  }
  function jc(t) {
    return Object.isFrozen(t);
  }
  var NO = {};
  function Sa(t) {
    const r = NO[t];
    return r || _n(0, t), r;
  }
  var Wi;
  function y_() {
    return Wi;
  }
  function jO(t, r) {
    return {
      drafts_: [],
      parent_: t,
      immer_: r,
      canAutoFreeze_: true,
      unfinalizedDrafts_: 0
    };
  }
  function qy(t, r) {
    r && (Sa("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = r);
  }
  function Qd(t) {
    Xd(t), t.drafts_.forEach(zO), t.drafts_ = null;
  }
  function Xd(t) {
    t === Wi && (Wi = t.parent_);
  }
  function Gy(t) {
    return Wi = jO(Wi, t);
  }
  function zO(t) {
    const r = t[$t];
    r.type_ === 0 || r.type_ === 1 ? r.revoke_() : r.revoked_ = true;
  }
  function Fy(t, r) {
    r.unfinalizedDrafts_ = r.drafts_.length;
    const o = r.drafts_[0];
    return t !== void 0 && t !== o ? (o[$t].modified_ && (Qd(r), _n(4)), xa(t) && (t = lc(r, t), r.parent_ || cc(r, t)), r.patches_ && Sa("Patches").generateReplacementPatches_(o[$t].base_, t, r.patches_, r.inversePatches_)) : t = lc(r, o, []), Qd(r), r.patches_ && r.patchListener_(r.patches_, r.inversePatches_), t !== m_ ? t : void 0;
  }
  function lc(t, r, o) {
    if (jc(r)) return r;
    const i = r[$t];
    if (!i) return sc(r, (l, u) => Vy(t, i, r, l, u, o)), r;
    if (i.scope_ !== t) return r;
    if (!i.modified_) return cc(t, i.base_, true), i.base_;
    if (!i.finalized_) {
      i.finalized_ = true, i.scope_.unfinalizedDrafts_--;
      const l = i.copy_;
      let u = l, d = false;
      i.type_ === 3 && (u = new Set(l), l.clear(), d = true), sc(u, (h, g) => Vy(t, i, l, h, g, o, d)), cc(t, l, false), o && t.patches_ && Sa("Patches").generatePatches_(i, o, t.patches_, t.inversePatches_);
    }
    return i.copy_;
  }
  function Vy(t, r, o, i, l, u, d) {
    if (Uo(l)) {
      const h = u && r && r.type_ !== 3 && !Kd(r.assigned_, i) ? u.concat(i) : void 0, g = lc(t, l, h);
      if (v_(o, i, g), Uo(g)) t.canAutoFreeze_ = false;
      else return;
    } else d && o.add(l);
    if (xa(l) && !jc(l)) {
      if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1) return;
      lc(t, l), (!r || !r.scope_.parent_) && typeof i != "symbol" && Object.prototype.propertyIsEnumerable.call(o, i) && cc(t, l);
    }
  }
  function cc(t, r, o = false) {
    !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && jh(r, o);
  }
  function kO(t, r) {
    const o = Array.isArray(t), i = {
      type_: o ? 1 : 0,
      scope_: r ? r.scope_ : y_(),
      modified_: false,
      finalized_: false,
      assigned_: {},
      parent_: r,
      base_: t,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: false
    };
    let l = i, u = zh;
    o && (l = [
      i
    ], u = es);
    const { revoke: d, proxy: h } = Proxy.revocable(l, u);
    return i.draft_ = h, i.revoke_ = d, h;
  }
  var zh = {
    get(t, r) {
      if (r === $t) return t;
      const o = fa(t);
      if (!Kd(o, r)) return LO(t, o, r);
      const i = o[r];
      return t.finalized_ || !xa(i) ? i : i === Sd(t.base_, r) ? (Ed(t), t.copy_[r] = Zd(i, t)) : i;
    },
    has(t, r) {
      return r in fa(t);
    },
    ownKeys(t) {
      return Reflect.ownKeys(fa(t));
    },
    set(t, r, o) {
      const i = b_(fa(t), r);
      if (i == null ? void 0 : i.set) return i.set.call(t.draft_, o), true;
      if (!t.modified_) {
        const l = Sd(fa(t), r), u = l == null ? void 0 : l[$t];
        if (u && u.base_ === o) return t.copy_[r] = o, t.assigned_[r] = false, true;
        if (OO(o, l) && (o !== void 0 || Kd(t.base_, r))) return true;
        Ed(t), $d(t);
      }
      return t.copy_[r] === o && (o !== void 0 || r in t.copy_) || Number.isNaN(o) && Number.isNaN(t.copy_[r]) || (t.copy_[r] = o, t.assigned_[r] = true), true;
    },
    deleteProperty(t, r) {
      return Sd(t.base_, r) !== void 0 || r in t.base_ ? (t.assigned_[r] = false, Ed(t), $d(t)) : delete t.assigned_[r], t.copy_ && delete t.copy_[r], true;
    },
    getOwnPropertyDescriptor(t, r) {
      const o = fa(t), i = Reflect.getOwnPropertyDescriptor(o, r);
      return i && {
        writable: true,
        configurable: t.type_ !== 1 || r !== "length",
        enumerable: i.enumerable,
        value: o[r]
      };
    },
    defineProperty() {
      _n(11);
    },
    getPrototypeOf(t) {
      return Lo(t.base_);
    },
    setPrototypeOf() {
      _n(12);
    }
  }, es = {};
  sc(zh, (t, r) => {
    es[t] = function() {
      return arguments[0] = arguments[0][0], r.apply(this, arguments);
    };
  });
  es.deleteProperty = function(t, r) {
    return es.set.call(this, t, r, void 0);
  };
  es.set = function(t, r, o) {
    return zh.set.call(this, t[0], r, o, t[0]);
  };
  function Sd(t, r) {
    const o = t[$t];
    return (o ? fa(o) : t)[r];
  }
  function LO(t, r, o) {
    var _a5;
    const i = b_(r, o);
    return i ? "value" in i ? i.value : (_a5 = i.get) == null ? void 0 : _a5.call(t.draft_) : void 0;
  }
  function b_(t, r) {
    if (!(r in t)) return;
    let o = Lo(t);
    for (; o; ) {
      const i = Object.getOwnPropertyDescriptor(o, r);
      if (i) return i;
      o = Lo(o);
    }
  }
  function $d(t) {
    t.modified_ || (t.modified_ = true, t.parent_ && $d(t.parent_));
  }
  function Ed(t) {
    t.copy_ || (t.copy_ = Id(t.base_, t.scope_.immer_.useStrictShallowCopy_));
  }
  var UO = class {
    constructor(t) {
      this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.produce = (r, o, i) => {
        if (typeof r == "function" && typeof o != "function") {
          const u = o;
          o = r;
          const d = this;
          return function(g = u, ...p) {
            return d.produce(g, (v) => o.call(this, v, ...p));
          };
        }
        typeof o != "function" && _n(6), i !== void 0 && typeof i != "function" && _n(7);
        let l;
        if (xa(r)) {
          const u = Gy(this), d = Zd(r, void 0);
          let h = true;
          try {
            l = o(d), h = false;
          } finally {
            h ? Qd(u) : Xd(u);
          }
          return qy(u, i), Fy(l, u);
        } else if (!r || typeof r != "object") {
          if (l = o(r), l === void 0 && (l = r), l === m_ && (l = void 0), this.autoFreeze_ && jh(l, true), i) {
            const u = [], d = [];
            Sa("Patches").generateReplacementPatches_(r, l, u, d), i(u, d);
          }
          return l;
        } else _n(1, r);
      }, this.produceWithPatches = (r, o) => {
        if (typeof r == "function") return (d, ...h) => this.produceWithPatches(d, (g) => r(g, ...h));
        let i, l;
        return [
          this.produce(r, o, (d, h) => {
            i = d, l = h;
          }),
          i,
          l
        ];
      }, typeof (t == null ? void 0 : t.autoFreeze) == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof (t == null ? void 0 : t.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy);
    }
    createDraft(t) {
      xa(t) || _n(8), Uo(t) && (t = BO(t));
      const r = Gy(this), o = Zd(t, void 0);
      return o[$t].isManual_ = true, Xd(r), o;
    }
    finishDraft(t, r) {
      const o = t && t[$t];
      (!o || !o.isManual_) && _n(9);
      const { scope_: i } = o;
      return qy(i, r), Fy(void 0, i);
    }
    setAutoFreeze(t) {
      this.autoFreeze_ = t;
    }
    setUseStrictShallowCopy(t) {
      this.useStrictShallowCopy_ = t;
    }
    applyPatches(t, r) {
      let o;
      for (o = r.length - 1; o >= 0; o--) {
        const l = r[o];
        if (l.path.length === 0 && l.op === "replace") {
          t = l.value;
          break;
        }
      }
      o > -1 && (r = r.slice(o + 1));
      const i = Sa("Patches").applyPatches_;
      return Uo(t) ? i(t, r) : this.produce(t, (l) => i(l, r));
    }
  };
  function Zd(t, r) {
    const o = Dc(t) ? Sa("MapSet").proxyMap_(t, r) : Nc(t) ? Sa("MapSet").proxySet_(t, r) : kO(t, r);
    return (r ? r.scope_ : y_()).drafts_.push(o), o;
  }
  function BO(t) {
    return Uo(t) || _n(10, t), __(t);
  }
  function __(t) {
    if (!xa(t) || jc(t)) return t;
    const r = t[$t];
    let o;
    if (r) {
      if (!r.modified_) return r.base_;
      r.finalized_ = true, o = Id(t, r.scope_.immer_.useStrictShallowCopy_);
    } else o = Id(t, true);
    return sc(o, (i, l) => {
      v_(o, i, __(l));
    }), r && (r.finalized_ = false), o;
  }
  var Zt = new UO(), xo = Zt.produce;
  Zt.produceWithPatches.bind(Zt);
  Zt.setAutoFreeze.bind(Zt);
  Zt.setUseStrictShallowCopy.bind(Zt);
  Zt.applyPatches.bind(Zt);
  Zt.createDraft.bind(Zt);
  Zt.finishDraft.bind(Zt);
  async function* PO(t) {
    for await (const [r, o] of t.entries()) o.kind === "file" && r.toLowerCase().endsWith(".prly") && (yield {
      name: r,
      handle: o
    });
  }
  async function HO(t, r) {
    const o = await r.getFile(), i = new Uint8Array(await o.arrayBuffer()), l = await wa.loadTreeFromFileBytes(i), u = await l.getRootHash(), d = u ? da(u) : null, h = await l.getTreeConfig();
    return {
      path: t,
      tree: l,
      lastSavedRootHash: d,
      rootHash: d,
      treeConfig: h,
      lastError: null,
      fileHandle: r
    };
  }
  Oo = tM()((t, r) => {
    async function o() {
      try {
        const i = await navigator.storage.getDirectory(), l = {};
        for await (const { name: u, handle: d } of PO(i)) {
          const h = await HO(u, d);
          l[h.path] = h;
        }
        t({
          trees: l
        });
      } catch (i) {
        console.error("\u26A0\uFE0F  OPFS scan failed:", i);
      } finally {
        t({
          initializing: false
        });
      }
    }
    return o(), {
      trees: {},
      initializing: true,
      refreshRootHash: async (i) => {
        const l = r().trees[i];
        if (l) try {
          const u = await l.tree.getRootHash(), d = u ? da(u) : null, h = d !== l.lastSavedRootHash;
          t((g) => ({
            trees: {
              ...g.trees,
              [i]: {
                ...l,
                rootHash: d,
                isDirty: h
              }
            }
          }));
        } catch (u) {
          console.error(`\u26A0\uFE0F  Failed to refresh root hash for ${i}:`, u);
        }
      },
      saveTree: async (i) => {
        const u = r().trees[i];
        if (u) try {
          let d = u.fileHandle;
          if (!d) {
            const m = await navigator.storage.getDirectory(), w = i.toLowerCase().endsWith(".prly") ? i : `${i}.prly`;
            d = await m.getFileHandle(w, {
              create: true
            }), t((S) => ({
              trees: xo(S.trees, (E) => {
                E[i].fileHandle = d;
              })
            }));
          }
          const h = await u.tree.saveTreeToFileBytes(), g = await d.createWritable();
          await g.write(h), await g.close();
          const p = await u.tree.getRootHash(), v = p ? da(p).toString() : null;
          t((m) => ({
            trees: xo(m.trees, (w) => {
              w[i].rootHash = v, w[i].lastSavedRootHash = v;
            })
          }));
        } catch (d) {
          console.error(`\u26A0\uFE0F  Failed to save tree ${i}:`, d);
        }
      },
      createNewTree: async (i) => {
        const l = (i == null ? void 0 : i.tree) ?? new wa(), u = (i == null ? void 0 : i.treeConfig) ?? await l.getTreeConfig(), d = await l.getRootHash(), h = (i == null ? void 0 : i.path) ?? EO({
          dictionaries: [
            RO,
            TO
          ],
          separator: "-",
          length: 2
        }) + ".prly";
        return t((g) => ({
          trees: xo(g.trees, (p) => {
            p[h] = {
              tree: l,
              treeConfig: u,
              rootHash: d ? da(d) : null,
              lastSavedRootHash: null,
              lastError: null,
              fileHandle: null,
              path: h
            };
          })
        })), await r().saveTree(h), h;
      },
      deleteTree: async (i) => {
        const l = r().trees[i];
        l && (l.fileHandle && await (await navigator.storage.getDirectory()).removeEntry(l.fileHandle.name), t((u) => ({
          trees: xo(u.trees, (d) => {
            delete d[i];
          })
        })));
      },
      renameTree: async (i, l) => {
        throw console.log({
          treePath: i,
          newName: l
        }), new Error("Not implemented");
      },
      treeUpdated: async (i) => {
        const l = r().trees[i];
        if (l) try {
          const u = await l.tree.getRootHash(), d = u ? da(u) : null;
          t((h) => ({
            trees: xo(h.trees, (g) => {
              g[i].rootHash = d, g[i].lastError = null;
            })
          })), await r().saveTree(i);
        } catch (u) {
          console.error(`\u26A0\uFE0F  Failed to reload hash for ${i}:`, u);
        }
      },
      treeError: async (i, l) => {
        const u = r().trees[i];
        if (u) try {
          const d = await u.tree.getRootHash(), h = d ? da(d) : null;
          t((g) => ({
            trees: xo(g.trees, (p) => {
              p[i].rootHash = h, p[i].lastError = l;
            })
          }));
        } catch (d) {
          console.error(`\u26A0\uFE0F  Failed to reload hash for ${i}:`, d);
        }
      }
    };
  });
  function qO(t) {
    if (typeof document > "u") return;
    let r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t));
  }
  const GO = (t) => {
    switch (t) {
      case "success":
        return YO;
      case "info":
        return IO;
      case "warning":
        return KO;
      case "error":
        return QO;
      default:
        return null;
    }
  }, FO = Array(12).fill(0), VO = ({ visible: t, className: r }) => oe.createElement("div", {
    className: [
      "sonner-loading-wrapper",
      r
    ].filter(Boolean).join(" "),
    "data-visible": t
  }, oe.createElement("div", {
    className: "sonner-spinner"
  }, FO.map((o, i) => oe.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${i}`
  })))), YO = oe.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, oe.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  })), KO = oe.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, oe.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
  })), IO = oe.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, oe.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  })), QO = oe.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, oe.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  })), XO = oe.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, oe.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), oe.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })), $O = () => {
    const [t, r] = oe.useState(document.hidden);
    return oe.useEffect(() => {
      const o = () => {
        r(document.hidden);
      };
      return document.addEventListener("visibilitychange", o), () => window.removeEventListener("visibilitychange", o);
    }, []), t;
  };
  let Jd = 1;
  class ZO {
    constructor() {
      this.subscribe = (r) => (this.subscribers.push(r), () => {
        const o = this.subscribers.indexOf(r);
        this.subscribers.splice(o, 1);
      }), this.publish = (r) => {
        this.subscribers.forEach((o) => o(r));
      }, this.addToast = (r) => {
        this.publish(r), this.toasts = [
          ...this.toasts,
          r
        ];
      }, this.create = (r) => {
        var o;
        const { message: i, ...l } = r, u = typeof (r == null ? void 0 : r.id) == "number" || ((o = r.id) == null ? void 0 : o.length) > 0 ? r.id : Jd++, d = this.toasts.find((g) => g.id === u), h = r.dismissible === void 0 ? true : r.dismissible;
        return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u), d ? this.toasts = this.toasts.map((g) => g.id === u ? (this.publish({
          ...g,
          ...r,
          id: u,
          title: i
        }), {
          ...g,
          ...r,
          id: u,
          dismissible: h,
          title: i
        }) : g) : this.addToast({
          title: i,
          ...l,
          dismissible: h,
          id: u
        }), u;
      }, this.dismiss = (r) => (r ? (this.dismissedToasts.add(r), requestAnimationFrame(() => this.subscribers.forEach((o) => o({
        id: r,
        dismiss: true
      })))) : this.toasts.forEach((o) => {
        this.subscribers.forEach((i) => i({
          id: o.id,
          dismiss: true
        }));
      }), r), this.message = (r, o) => this.create({
        ...o,
        message: r
      }), this.error = (r, o) => this.create({
        ...o,
        message: r,
        type: "error"
      }), this.success = (r, o) => this.create({
        ...o,
        type: "success",
        message: r
      }), this.info = (r, o) => this.create({
        ...o,
        type: "info",
        message: r
      }), this.warning = (r, o) => this.create({
        ...o,
        type: "warning",
        message: r
      }), this.loading = (r, o) => this.create({
        ...o,
        type: "loading",
        message: r
      }), this.promise = (r, o) => {
        if (!o) return;
        let i;
        o.loading !== void 0 && (i = this.create({
          ...o,
          promise: r,
          type: "loading",
          message: o.loading,
          description: typeof o.description != "function" ? o.description : void 0
        }));
        const l = Promise.resolve(r instanceof Function ? r() : r);
        let u = i !== void 0, d;
        const h = l.then(async (p) => {
          if (d = [
            "resolve",
            p
          ], oe.isValidElement(p)) u = false, this.create({
            id: i,
            type: "default",
            message: p
          });
          else if (WO(p) && !p.ok) {
            u = false;
            const m = typeof o.error == "function" ? await o.error(`HTTP error! status: ${p.status}`) : o.error, w = typeof o.description == "function" ? await o.description(`HTTP error! status: ${p.status}`) : o.description, E = typeof m == "object" && !oe.isValidElement(m) ? m : {
              message: m
            };
            this.create({
              id: i,
              type: "error",
              description: w,
              ...E
            });
          } else if (p instanceof Error) {
            u = false;
            const m = typeof o.error == "function" ? await o.error(p) : o.error, w = typeof o.description == "function" ? await o.description(p) : o.description, E = typeof m == "object" && !oe.isValidElement(m) ? m : {
              message: m
            };
            this.create({
              id: i,
              type: "error",
              description: w,
              ...E
            });
          } else if (o.success !== void 0) {
            u = false;
            const m = typeof o.success == "function" ? await o.success(p) : o.success, w = typeof o.description == "function" ? await o.description(p) : o.description, E = typeof m == "object" && !oe.isValidElement(m) ? m : {
              message: m
            };
            this.create({
              id: i,
              type: "success",
              description: w,
              ...E
            });
          }
        }).catch(async (p) => {
          if (d = [
            "reject",
            p
          ], o.error !== void 0) {
            u = false;
            const v = typeof o.error == "function" ? await o.error(p) : o.error, m = typeof o.description == "function" ? await o.description(p) : o.description, S = typeof v == "object" && !oe.isValidElement(v) ? v : {
              message: v
            };
            this.create({
              id: i,
              type: "error",
              description: m,
              ...S
            });
          }
        }).finally(() => {
          u && (this.dismiss(i), i = void 0), o.finally == null || o.finally.call(o);
        }), g = () => new Promise((p, v) => h.then(() => d[0] === "reject" ? v(d[1]) : p(d[1])).catch(v));
        return typeof i != "string" && typeof i != "number" ? {
          unwrap: g
        } : Object.assign(i, {
          unwrap: g
        });
      }, this.custom = (r, o) => {
        const i = (o == null ? void 0 : o.id) || Jd++;
        return this.create({
          jsx: r(i),
          id: i,
          ...o
        }), i;
      }, this.getActiveToasts = () => this.toasts.filter((r) => !this.dismissedToasts.has(r.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
    }
  }
  let Pt, JO, WO, eD, tD, nD;
  Pt = new ZO();
  JO = (t, r) => {
    const o = (r == null ? void 0 : r.id) || Jd++;
    return Pt.addToast({
      title: t,
      ...r,
      id: o
    }), o;
  };
  WO = (t) => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number";
  eD = JO;
  tD = () => Pt.toasts;
  nD = () => Pt.getActiveToasts();
  ft = Object.assign(eD, {
    success: Pt.success,
    info: Pt.info,
    warning: Pt.warning,
    error: Pt.error,
    custom: Pt.custom,
    message: Pt.message,
    promise: Pt.promise,
    dismiss: Pt.dismiss,
    loading: Pt.loading
  }, {
    getHistory: tD,
    getToasts: nD
  });
  qO("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
  function ql(t) {
    return t.label !== void 0;
  }
  const rD = 3, aD = "24px", oD = "16px", Yy = 4e3, iD = 356, sD = 14, lD = 45, cD = 200;
  function Nn(...t) {
    return t.filter(Boolean).join(" ");
  }
  function uD(t) {
    const [r, o] = t.split("-"), i = [];
    return r && i.push(r), o && i.push(o), i;
  }
  const fD = (t) => {
    var r, o, i, l, u, d, h, g, p;
    const { invert: v, toast: m, unstyled: w, interacting: S, setHeights: E, visibleToasts: R, heights: C, index: O, toasts: k, expanded: j, removeToast: H, defaultRichColors: q, closeButton: V, style: K, cancelButtonStyle: D, actionButtonStyle: U, className: ae = "", descriptionClassName: ie = "", duration: ee, position: re, gap: fe, expandByDefault: se, classNames: A, icons: I, closeButtonAriaLabel: B = "Close toast" } = t, [Z, T] = oe.useState(null), [L, $] = oe.useState(null), [Q, J] = oe.useState(false), [ce, ne] = oe.useState(false), [le, ue] = oe.useState(false), [ye, Re] = oe.useState(false), [Le, Ue] = oe.useState(false), [Rt, Mt] = oe.useState(0), [Rn, At] = oe.useState(0), Ie = oe.useRef(m.duration || ee || Yy), hn = oe.useRef(null), Ot = oe.useRef(null), Gr = O === 0, je = O + 1 <= R, Ae = m.type, Ht = m.dismissible !== false, Ca = m.className || "", Fo = m.descriptionClassName || "", Jt = oe.useMemo(() => C.findIndex((Se) => Se.toastId === m.id) || 0, [
      C,
      m.id
    ]), Dt = oe.useMemo(() => {
      var Se;
      return (Se = m.closeButton) != null ? Se : V;
    }, [
      m.closeButton,
      V
    ]), pn = oe.useMemo(() => m.duration || ee || Yy, [
      m.duration,
      ee
    ]), yt = oe.useRef(0), ur = oe.useRef(0), ms = oe.useRef(0), fr = oe.useRef(null), [Ma, Aa] = re.split("-"), Tn = oe.useMemo(() => C.reduce((Se, We, at) => at >= Jt ? Se : Se + We.height, 0), [
      C,
      Jt
    ]), Fr = $O(), Vr = m.invert || v, Vo = Ae === "loading";
    ur.current = oe.useMemo(() => Jt * fe + Tn, [
      Jt,
      Tn
    ]), oe.useEffect(() => {
      Ie.current = pn;
    }, [
      pn
    ]), oe.useEffect(() => {
      J(true);
    }, []), oe.useEffect(() => {
      const Se = Ot.current;
      if (Se) {
        const We = Se.getBoundingClientRect().height;
        return At(We), E((at) => [
          {
            toastId: m.id,
            height: We,
            position: m.position
          },
          ...at
        ]), () => E((at) => at.filter((bt) => bt.toastId !== m.id));
      }
    }, [
      E,
      m.id
    ]), oe.useLayoutEffect(() => {
      if (!Q) return;
      const Se = Ot.current, We = Se.style.height;
      Se.style.height = "auto";
      const at = Se.getBoundingClientRect().height;
      Se.style.height = We, At(at), E((bt) => bt.find((st) => st.toastId === m.id) ? bt.map((st) => st.toastId === m.id ? {
        ...st,
        height: at
      } : st) : [
        {
          toastId: m.id,
          height: at,
          position: m.position
        },
        ...bt
      ]);
    }, [
      Q,
      m.title,
      m.description,
      E,
      m.id,
      m.jsx,
      m.action,
      m.cancel
    ]);
    const mn = oe.useCallback(() => {
      ne(true), Mt(ur.current), E((Se) => Se.filter((We) => We.toastId !== m.id)), setTimeout(() => {
        H(m);
      }, cD);
    }, [
      m,
      H,
      E,
      ur
    ]);
    oe.useEffect(() => {
      if (m.promise && Ae === "loading" || m.duration === 1 / 0 || m.type === "loading") return;
      let Se;
      return j || S || Fr ? (() => {
        if (ms.current < yt.current) {
          const bt = (/* @__PURE__ */ new Date()).getTime() - yt.current;
          Ie.current = Ie.current - bt;
        }
        ms.current = (/* @__PURE__ */ new Date()).getTime();
      })() : (() => {
        Ie.current !== 1 / 0 && (yt.current = (/* @__PURE__ */ new Date()).getTime(), Se = setTimeout(() => {
          m.onAutoClose == null || m.onAutoClose.call(m, m), mn();
        }, Ie.current));
      })(), () => clearTimeout(Se);
    }, [
      j,
      S,
      m,
      Ae,
      Fr,
      mn
    ]), oe.useEffect(() => {
      m.delete && (mn(), m.onDismiss == null || m.onDismiss.call(m, m));
    }, [
      mn,
      m.delete
    ]);
    function gs() {
      var Se;
      if (I == null ? void 0 : I.loading) {
        var We;
        return oe.createElement("div", {
          className: Nn(A == null ? void 0 : A.loader, m == null || (We = m.classNames) == null ? void 0 : We.loader, "sonner-loader"),
          "data-visible": Ae === "loading"
        }, I.loading);
      }
      return oe.createElement(VO, {
        className: Nn(A == null ? void 0 : A.loader, m == null || (Se = m.classNames) == null ? void 0 : Se.loader),
        visible: Ae === "loading"
      });
    }
    const Yo = m.icon || (I == null ? void 0 : I[Ae]) || GO(Ae);
    var dr, vs;
    return oe.createElement("li", {
      tabIndex: 0,
      ref: Ot,
      className: Nn(ae, Ca, A == null ? void 0 : A.toast, m == null || (r = m.classNames) == null ? void 0 : r.toast, A == null ? void 0 : A.default, A == null ? void 0 : A[Ae], m == null || (o = m.classNames) == null ? void 0 : o[Ae]),
      "data-sonner-toast": "",
      "data-rich-colors": (dr = m.richColors) != null ? dr : q,
      "data-styled": !(m.jsx || m.unstyled || w),
      "data-mounted": Q,
      "data-promise": !!m.promise,
      "data-swiped": Le,
      "data-removed": ce,
      "data-visible": je,
      "data-y-position": Ma,
      "data-x-position": Aa,
      "data-index": O,
      "data-front": Gr,
      "data-swiping": le,
      "data-dismissible": Ht,
      "data-type": Ae,
      "data-invert": Vr,
      "data-swipe-out": ye,
      "data-swipe-direction": L,
      "data-expanded": !!(j || se && Q),
      style: {
        "--index": O,
        "--toasts-before": O,
        "--z-index": k.length - O,
        "--offset": `${ce ? Rt : ur.current}px`,
        "--initial-height": se ? "auto" : `${Rn}px`,
        ...K,
        ...m.style
      },
      onDragEnd: () => {
        ue(false), T(null), fr.current = null;
      },
      onPointerDown: (Se) => {
        Vo || !Ht || (hn.current = /* @__PURE__ */ new Date(), Mt(ur.current), Se.target.setPointerCapture(Se.pointerId), Se.target.tagName !== "BUTTON" && (ue(true), fr.current = {
          x: Se.clientX,
          y: Se.clientY
        }));
      },
      onPointerUp: () => {
        var Se, We, at;
        if (ye || !Ht) return;
        fr.current = null;
        const bt = Number(((Se = Ot.current) == null ? void 0 : Se.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), Yr = Number(((We = Ot.current) == null ? void 0 : We.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), st = (/* @__PURE__ */ new Date()).getTime() - ((at = hn.current) == null ? void 0 : at.getTime()), et = Z === "x" ? bt : Yr, tt = Math.abs(et) / st;
        if (Math.abs(et) >= lD || tt > 0.11) {
          Mt(ur.current), m.onDismiss == null || m.onDismiss.call(m, m), $(Z === "x" ? bt > 0 ? "right" : "left" : Yr > 0 ? "down" : "up"), mn(), Re(true);
          return;
        } else {
          var Ye, ht;
          (Ye = Ot.current) == null || Ye.style.setProperty("--swipe-amount-x", "0px"), (ht = Ot.current) == null || ht.style.setProperty("--swipe-amount-y", "0px");
        }
        Ue(false), ue(false), T(null);
      },
      onPointerMove: (Se) => {
        var We, at, bt;
        if (!fr.current || !Ht || ((We = window.getSelection()) == null ? void 0 : We.toString().length) > 0) return;
        const st = Se.clientY - fr.current.y, et = Se.clientX - fr.current.x;
        var tt;
        const Ye = (tt = t.swipeDirections) != null ? tt : uD(re);
        !Z && (Math.abs(et) > 1 || Math.abs(st) > 1) && T(Math.abs(et) > Math.abs(st) ? "x" : "y");
        let ht = {
          x: 0,
          y: 0
        };
        const Oa = (Gn) => 1 / (1.5 + Math.abs(Gn) / 20);
        if (Z === "y") {
          if (Ye.includes("top") || Ye.includes("bottom")) if (Ye.includes("top") && st < 0 || Ye.includes("bottom") && st > 0) ht.y = st;
          else {
            const Gn = st * Oa(st);
            ht.y = Math.abs(Gn) < Math.abs(st) ? Gn : st;
          }
        } else if (Z === "x" && (Ye.includes("left") || Ye.includes("right"))) if (Ye.includes("left") && et < 0 || Ye.includes("right") && et > 0) ht.x = et;
        else {
          const Gn = et * Oa(et);
          ht.x = Math.abs(Gn) < Math.abs(et) ? Gn : et;
        }
        (Math.abs(ht.x) > 0 || Math.abs(ht.y) > 0) && Ue(true), (at = Ot.current) == null || at.style.setProperty("--swipe-amount-x", `${ht.x}px`), (bt = Ot.current) == null || bt.style.setProperty("--swipe-amount-y", `${ht.y}px`);
      }
    }, Dt && !m.jsx && Ae !== "loading" ? oe.createElement("button", {
      "aria-label": B,
      "data-disabled": Vo,
      "data-close-button": true,
      onClick: Vo || !Ht ? () => {
      } : () => {
        mn(), m.onDismiss == null || m.onDismiss.call(m, m);
      },
      className: Nn(A == null ? void 0 : A.closeButton, m == null || (i = m.classNames) == null ? void 0 : i.closeButton)
    }, (vs = I == null ? void 0 : I.close) != null ? vs : XO) : null, (Ae || m.icon || m.promise) && m.icon !== null && ((I == null ? void 0 : I[Ae]) !== null || m.icon) ? oe.createElement("div", {
      "data-icon": "",
      className: Nn(A == null ? void 0 : A.icon, m == null || (l = m.classNames) == null ? void 0 : l.icon)
    }, m.promise || m.type === "loading" && !m.icon ? m.icon || gs() : null, m.type !== "loading" ? Yo : null) : null, oe.createElement("div", {
      "data-content": "",
      className: Nn(A == null ? void 0 : A.content, m == null || (u = m.classNames) == null ? void 0 : u.content)
    }, oe.createElement("div", {
      "data-title": "",
      className: Nn(A == null ? void 0 : A.title, m == null || (d = m.classNames) == null ? void 0 : d.title)
    }, m.jsx ? m.jsx : typeof m.title == "function" ? m.title() : m.title), m.description ? oe.createElement("div", {
      "data-description": "",
      className: Nn(ie, Fo, A == null ? void 0 : A.description, m == null || (h = m.classNames) == null ? void 0 : h.description)
    }, typeof m.description == "function" ? m.description() : m.description) : null), oe.isValidElement(m.cancel) ? m.cancel : m.cancel && ql(m.cancel) ? oe.createElement("button", {
      "data-button": true,
      "data-cancel": true,
      style: m.cancelButtonStyle || D,
      onClick: (Se) => {
        ql(m.cancel) && Ht && (m.cancel.onClick == null || m.cancel.onClick.call(m.cancel, Se), mn());
      },
      className: Nn(A == null ? void 0 : A.cancelButton, m == null || (g = m.classNames) == null ? void 0 : g.cancelButton)
    }, m.cancel.label) : null, oe.isValidElement(m.action) ? m.action : m.action && ql(m.action) ? oe.createElement("button", {
      "data-button": true,
      "data-action": true,
      style: m.actionButtonStyle || U,
      onClick: (Se) => {
        ql(m.action) && (m.action.onClick == null || m.action.onClick.call(m.action, Se), !Se.defaultPrevented && mn());
      },
      className: Nn(A == null ? void 0 : A.actionButton, m == null || (p = m.classNames) == null ? void 0 : p.actionButton)
    }, m.action.label) : null);
  };
  function Ky() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const t = document.documentElement.getAttribute("dir");
    return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t;
  }
  function dD(t, r) {
    const o = {};
    return [
      t,
      r
    ].forEach((i, l) => {
      const u = l === 1, d = u ? "--mobile-offset" : "--offset", h = u ? oD : aD;
      function g(p) {
        [
          "top",
          "right",
          "bottom",
          "left"
        ].forEach((v) => {
          o[`${d}-${v}`] = typeof p == "number" ? `${p}px` : p;
        });
      }
      typeof i == "number" || typeof i == "string" ? g(i) : typeof i == "object" ? [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((p) => {
        i[p] === void 0 ? o[`${d}-${p}`] = h : o[`${d}-${p}`] = typeof i[p] == "number" ? `${i[p]}px` : i[p];
      }) : g(h);
    }), o;
  }
  O4 = oe.forwardRef(function(r, o) {
    const { invert: i, position: l = "bottom-right", hotkey: u = [
      "altKey",
      "KeyT"
    ], expand: d, closeButton: h, className: g, offset: p, mobileOffset: v, theme: m = "light", richColors: w, duration: S, style: E, visibleToasts: R = rD, toastOptions: C, dir: O = Ky(), gap: k = sD, icons: j, containerAriaLabel: H = "Notifications" } = r, [q, V] = oe.useState([]), K = oe.useMemo(() => Array.from(new Set([
      l
    ].concat(q.filter((L) => L.position).map((L) => L.position)))), [
      q,
      l
    ]), [D, U] = oe.useState([]), [ae, ie] = oe.useState(false), [ee, re] = oe.useState(false), [fe, se] = oe.useState(m !== "system" ? m : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), A = oe.useRef(null), I = u.join("+").replace(/Key/g, "").replace(/Digit/g, ""), B = oe.useRef(null), Z = oe.useRef(false), T = oe.useCallback((L) => {
      V(($) => {
        var Q;
        return (Q = $.find((J) => J.id === L.id)) != null && Q.delete || Pt.dismiss(L.id), $.filter(({ id: J }) => J !== L.id);
      });
    }, []);
    return oe.useEffect(() => Pt.subscribe((L) => {
      if (L.dismiss) {
        requestAnimationFrame(() => {
          V(($) => $.map((Q) => Q.id === L.id ? {
            ...Q,
            delete: true
          } : Q));
        });
        return;
      }
      setTimeout(() => {
        pb.flushSync(() => {
          V(($) => {
            const Q = $.findIndex((J) => J.id === L.id);
            return Q !== -1 ? [
              ...$.slice(0, Q),
              {
                ...$[Q],
                ...L
              },
              ...$.slice(Q + 1)
            ] : [
              L,
              ...$
            ];
          });
        });
      });
    }), [
      q
    ]), oe.useEffect(() => {
      if (m !== "system") {
        se(m);
        return;
      }
      if (m === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? se("dark") : se("light")), typeof window > "u") return;
      const L = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        L.addEventListener("change", ({ matches: $ }) => {
          se($ ? "dark" : "light");
        });
      } catch {
        L.addListener(({ matches: Q }) => {
          try {
            se(Q ? "dark" : "light");
          } catch (J) {
            console.error(J);
          }
        });
      }
    }, [
      m
    ]), oe.useEffect(() => {
      q.length <= 1 && ie(false);
    }, [
      q
    ]), oe.useEffect(() => {
      const L = ($) => {
        var Q;
        if (u.every((ne) => $[ne] || $.code === ne)) {
          var ce;
          ie(true), (ce = A.current) == null || ce.focus();
        }
        $.code === "Escape" && (document.activeElement === A.current || (Q = A.current) != null && Q.contains(document.activeElement)) && ie(false);
      };
      return document.addEventListener("keydown", L), () => document.removeEventListener("keydown", L);
    }, [
      u
    ]), oe.useEffect(() => {
      if (A.current) return () => {
        B.current && (B.current.focus({
          preventScroll: true
        }), B.current = null, Z.current = false);
      };
    }, [
      A.current
    ]), oe.createElement("section", {
      ref: o,
      "aria-label": `${H} ${I}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false",
      suppressHydrationWarning: true
    }, K.map((L, $) => {
      var Q;
      const [J, ce] = L.split("-");
      return q.length ? oe.createElement("ol", {
        key: L,
        dir: O === "auto" ? Ky() : O,
        tabIndex: -1,
        ref: A,
        className: g,
        "data-sonner-toaster": true,
        "data-sonner-theme": fe,
        "data-y-position": J,
        "data-x-position": ce,
        style: {
          "--front-toast-height": `${((Q = D[0]) == null ? void 0 : Q.height) || 0}px`,
          "--width": `${iD}px`,
          "--gap": `${k}px`,
          ...E,
          ...dD(p, v)
        },
        onBlur: (ne) => {
          Z.current && !ne.currentTarget.contains(ne.relatedTarget) && (Z.current = false, B.current && (B.current.focus({
            preventScroll: true
          }), B.current = null));
        },
        onFocus: (ne) => {
          ne.target instanceof HTMLElement && ne.target.dataset.dismissible === "false" || Z.current || (Z.current = true, B.current = ne.relatedTarget);
        },
        onMouseEnter: () => ie(true),
        onMouseMove: () => ie(true),
        onMouseLeave: () => {
          ee || ie(false);
        },
        onDragEnd: () => ie(false),
        onPointerDown: (ne) => {
          ne.target instanceof HTMLElement && ne.target.dataset.dismissible === "false" || re(true);
        },
        onPointerUp: () => re(false)
      }, q.filter((ne) => !ne.position && $ === 0 || ne.position === L).map((ne, le) => {
        var ue, ye;
        return oe.createElement(fD, {
          key: ne.id,
          icons: j,
          index: le,
          toast: ne,
          defaultRichColors: w,
          duration: (ue = C == null ? void 0 : C.duration) != null ? ue : S,
          className: C == null ? void 0 : C.className,
          descriptionClassName: C == null ? void 0 : C.descriptionClassName,
          invert: i,
          visibleToasts: R,
          closeButton: (ye = C == null ? void 0 : C.closeButton) != null ? ye : h,
          interacting: ee,
          position: L,
          style: C == null ? void 0 : C.style,
          unstyled: C == null ? void 0 : C.unstyled,
          classNames: C == null ? void 0 : C.classNames,
          cancelButtonStyle: C == null ? void 0 : C.cancelButtonStyle,
          actionButtonStyle: C == null ? void 0 : C.actionButtonStyle,
          closeButtonAriaLabel: C == null ? void 0 : C.closeButtonAriaLabel,
          removeToast: T,
          toasts: q.filter((Re) => Re.position == ne.position),
          heights: D.filter((Re) => Re.position == ne.position),
          setHeights: U,
          expandByDefault: d,
          gap: k,
          expanded: ae,
          swipeDirections: r.swipeDirections
        });
      })) : null;
    }));
  });
  var hD = "Label", kh = b.forwardRef((t, r) => x.jsx($e.label, {
    ...t,
    ref: r,
    onMouseDown: (o) => {
      var _a5;
      o.target.closest("button, input, select, textarea") || ((_a5 = t.onMouseDown) == null ? void 0 : _a5.call(t, o), !o.defaultPrevented && o.detail > 1 && o.preventDefault());
    }
  }));
  kh.displayName = hD;
  D4 = kh;
  function w_(t) {
    const r = t + "CollectionProvider", [o, i] = Ea(r), [l, u] = o(r, {
      collectionRef: {
        current: null
      },
      itemMap: /* @__PURE__ */ new Map()
    }), d = (R) => {
      const { scope: C, children: O } = R, k = oe.useRef(null), j = oe.useRef(/* @__PURE__ */ new Map()).current;
      return x.jsx(l, {
        scope: C,
        itemMap: j,
        collectionRef: k,
        children: O
      });
    };
    d.displayName = r;
    const h = t + "CollectionSlot", g = No(h), p = oe.forwardRef((R, C) => {
      const { scope: O, children: k } = R, j = u(h, O), H = dt(C, j.collectionRef);
      return x.jsx(g, {
        ref: H,
        children: k
      });
    });
    p.displayName = h;
    const v = t + "CollectionItemSlot", m = "data-radix-collection-item", w = No(v), S = oe.forwardRef((R, C) => {
      const { scope: O, children: k, ...j } = R, H = oe.useRef(null), q = dt(C, H), V = u(v, O);
      return oe.useEffect(() => (V.itemMap.set(H, {
        ref: H,
        ...j
      }), () => void V.itemMap.delete(H))), x.jsx(w, {
        [m]: "",
        ref: q,
        children: k
      });
    });
    S.displayName = v;
    function E(R) {
      const C = u(t + "CollectionConsumer", R);
      return oe.useCallback(() => {
        const k = C.collectionRef.current;
        if (!k) return [];
        const j = Array.from(k.querySelectorAll(`[${m}]`));
        return Array.from(C.itemMap.values()).sort((V, K) => j.indexOf(V.ref.current) - j.indexOf(K.ref.current));
      }, [
        C.collectionRef,
        C.itemMap
      ]);
    }
    return [
      {
        Provider: d,
        Slot: p,
        ItemSlot: S
      },
      E,
      i
    ];
  }
  var pD = b.createContext(void 0);
  x_ = function(t) {
    const r = b.useContext(pD);
    return t || r || "ltr";
  };
  let Rd, mD, fs, Wd, S_, gD, vD, yD, bD, R_;
  Rd = "rovingFocusGroup.onEntryFocus";
  mD = {
    bubbles: false,
    cancelable: true
  };
  fs = "RovingFocusGroup";
  [Wd, S_, gD] = w_(fs);
  [vD, E_] = Ea(fs, [
    gD
  ]);
  [yD, bD] = vD(fs);
  R_ = b.forwardRef((t, r) => x.jsx(Wd.Provider, {
    scope: t.__scopeRovingFocusGroup,
    children: x.jsx(Wd.Slot, {
      scope: t.__scopeRovingFocusGroup,
      children: x.jsx(_D, {
        ...t,
        ref: r
      })
    })
  }));
  R_.displayName = fs;
  var _D = b.forwardRef((t, r) => {
    const { __scopeRovingFocusGroup: o, orientation: i, loop: l = false, dir: u, currentTabStopId: d, defaultCurrentTabStopId: h, onCurrentTabStopIdChange: g, onEntryFocus: p, preventScrollOnEntryFocus: v = false, ...m } = t, w = b.useRef(null), S = dt(r, w), E = x_(u), [R, C] = yc({
      prop: d,
      defaultProp: h ?? null,
      onChange: g,
      caller: fs
    }), [O, k] = b.useState(false), j = sr(p), H = S_(o), q = b.useRef(false), [V, K] = b.useState(0);
    return b.useEffect(() => {
      const D = w.current;
      if (D) return D.addEventListener(Rd, j), () => D.removeEventListener(Rd, j);
    }, [
      j
    ]), x.jsx(yD, {
      scope: o,
      orientation: i,
      dir: E,
      loop: l,
      currentTabStopId: R,
      onItemFocus: b.useCallback((D) => C(D), [
        C
      ]),
      onItemShiftTab: b.useCallback(() => k(true), []),
      onFocusableItemAdd: b.useCallback(() => K((D) => D + 1), []),
      onFocusableItemRemove: b.useCallback(() => K((D) => D - 1), []),
      children: x.jsx($e.div, {
        tabIndex: O || V === 0 ? -1 : 0,
        "data-orientation": i,
        ...m,
        ref: S,
        style: {
          outline: "none",
          ...t.style
        },
        onMouseDown: xe(t.onMouseDown, () => {
          q.current = true;
        }),
        onFocus: xe(t.onFocus, (D) => {
          const U = !q.current;
          if (D.target === D.currentTarget && U && !O) {
            const ae = new CustomEvent(Rd, mD);
            if (D.currentTarget.dispatchEvent(ae), !ae.defaultPrevented) {
              const ie = H().filter((A) => A.focusable), ee = ie.find((A) => A.active), re = ie.find((A) => A.id === R), se = [
                ee,
                re,
                ...ie
              ].filter(Boolean).map((A) => A.ref.current);
              M_(se, v);
            }
          }
          q.current = false;
        }),
        onBlur: xe(t.onBlur, () => k(false))
      })
    });
  }), T_ = "RovingFocusGroupItem", C_ = b.forwardRef((t, r) => {
    const { __scopeRovingFocusGroup: o, focusable: i = true, active: l = false, tabStopId: u, children: d, ...h } = t, g = va(), p = u || g, v = bD(T_, o), m = v.currentTabStopId === p, w = S_(o), { onFocusableItemAdd: S, onFocusableItemRemove: E, currentTabStopId: R } = v;
    return b.useEffect(() => {
      if (i) return S(), () => E();
    }, [
      i,
      S,
      E
    ]), x.jsx(Wd.ItemSlot, {
      scope: o,
      id: p,
      focusable: i,
      active: l,
      children: x.jsx($e.span, {
        tabIndex: m ? 0 : -1,
        "data-orientation": v.orientation,
        ...h,
        ref: r,
        onMouseDown: xe(t.onMouseDown, (C) => {
          i ? v.onItemFocus(p) : C.preventDefault();
        }),
        onFocus: xe(t.onFocus, () => v.onItemFocus(p)),
        onKeyDown: xe(t.onKeyDown, (C) => {
          if (C.key === "Tab" && C.shiftKey) {
            v.onItemShiftTab();
            return;
          }
          if (C.target !== C.currentTarget) return;
          const O = SD(C, v.orientation, v.dir);
          if (O !== void 0) {
            if (C.metaKey || C.ctrlKey || C.altKey || C.shiftKey) return;
            C.preventDefault();
            let j = w().filter((H) => H.focusable).map((H) => H.ref.current);
            if (O === "last") j.reverse();
            else if (O === "prev" || O === "next") {
              O === "prev" && j.reverse();
              const H = j.indexOf(C.currentTarget);
              j = v.loop ? ED(j, H + 1) : j.slice(H + 1);
            }
            setTimeout(() => M_(j));
          }
        }),
        children: typeof d == "function" ? d({
          isCurrentTabStop: m,
          hasTabStop: R != null
        }) : d
      })
    });
  });
  C_.displayName = T_;
  var wD = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
  };
  function xD(t, r) {
    return r !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
  }
  function SD(t, r, o) {
    const i = xD(t.key, o);
    if (!(r === "vertical" && [
      "ArrowLeft",
      "ArrowRight"
    ].includes(i)) && !(r === "horizontal" && [
      "ArrowUp",
      "ArrowDown"
    ].includes(i))) return wD[i];
  }
  function M_(t, r = false) {
    const o = document.activeElement;
    for (const i of t) if (i === o || (i.focus({
      preventScroll: r
    }), document.activeElement !== o)) return;
  }
  function ED(t, r) {
    return t.map((o, i) => t[(r + i) % t.length]);
  }
  let eh, CD, A_, MD, AD, OD, ds, ts, DD, ND, Ra, O_, zc, D_, jD, Ta, zD, hs, N_;
  RD = R_;
  TD = C_;
  eh = [
    "Enter",
    " "
  ];
  CD = [
    "ArrowDown",
    "PageUp",
    "Home"
  ];
  A_ = [
    "ArrowUp",
    "PageDown",
    "End"
  ];
  MD = [
    ...CD,
    ...A_
  ];
  AD = {
    ltr: [
      ...eh,
      "ArrowRight"
    ],
    rtl: [
      ...eh,
      "ArrowLeft"
    ]
  };
  OD = {
    ltr: [
      "ArrowLeft"
    ],
    rtl: [
      "ArrowRight"
    ]
  };
  ds = "Menu";
  [ts, DD, ND] = w_(ds);
  [Ra, O_] = Ea(ds, [
    ND,
    Tc,
    E_
  ]);
  zc = Tc();
  D_ = E_();
  [jD, Ta] = Ra(ds);
  [zD, hs] = Ra(ds);
  N_ = (t) => {
    const { __scopeMenu: r, open: o = false, children: i, dir: l, onOpenChange: u, modal: d = true } = t, h = zc(r), [g, p] = b.useState(null), v = b.useRef(false), m = sr(u), w = x_(l);
    return b.useEffect(() => {
      const S = () => {
        v.current = true, document.addEventListener("pointerdown", E, {
          capture: true,
          once: true
        }), document.addEventListener("pointermove", E, {
          capture: true,
          once: true
        });
      }, E = () => v.current = false;
      return document.addEventListener("keydown", S, {
        capture: true
      }), () => {
        document.removeEventListener("keydown", S, {
          capture: true
        }), document.removeEventListener("pointerdown", E, {
          capture: true
        }), document.removeEventListener("pointermove", E, {
          capture: true
        });
      };
    }, []), x.jsx($0, {
      ...h,
      children: x.jsx(jD, {
        scope: r,
        open: o,
        onOpenChange: m,
        content: g,
        onContentChange: p,
        children: x.jsx(zD, {
          scope: r,
          onClose: b.useCallback(() => m(false), [
            m
          ]),
          isUsingKeyboardRef: v,
          dir: w,
          modal: d,
          children: i
        })
      })
    });
  };
  N_.displayName = ds;
  var kD = "MenuAnchor", Lh = b.forwardRef((t, r) => {
    const { __scopeMenu: o, ...i } = t, l = zc(o);
    return x.jsx(Z0, {
      ...l,
      ...i,
      ref: r
    });
  });
  Lh.displayName = kD;
  var Uh = "MenuPortal", [LD, j_] = Ra(Uh, {
    forceMount: void 0
  }), z_ = (t) => {
    const { __scopeMenu: r, forceMount: o, children: i, container: l } = t, u = Ta(Uh, r);
    return x.jsx(LD, {
      scope: r,
      forceMount: o,
      children: x.jsx(Hn, {
        present: o || u.open,
        children: x.jsx(_c, {
          asChild: true,
          container: l,
          children: i
        })
      })
    });
  };
  z_.displayName = Uh;
  var dn = "MenuContent", [UD, Bh] = Ra(dn), k_ = b.forwardRef((t, r) => {
    const o = j_(dn, t.__scopeMenu), { forceMount: i = o.forceMount, ...l } = t, u = Ta(dn, t.__scopeMenu), d = hs(dn, t.__scopeMenu);
    return x.jsx(ts.Provider, {
      scope: t.__scopeMenu,
      children: x.jsx(Hn, {
        present: i || u.open,
        children: x.jsx(ts.Slot, {
          scope: t.__scopeMenu,
          children: d.modal ? x.jsx(BD, {
            ...l,
            ref: r
          }) : x.jsx(PD, {
            ...l,
            ref: r
          })
        })
      })
    });
  }), BD = b.forwardRef((t, r) => {
    const o = Ta(dn, t.__scopeMenu), i = b.useRef(null), l = dt(r, i);
    return b.useEffect(() => {
      const u = i.current;
      if (u) return i0(u);
    }, []), x.jsx(Ph, {
      ...t,
      ref: l,
      trapFocus: o.open,
      disableOutsidePointerEvents: o.open,
      disableOutsideScroll: true,
      onFocusOutside: xe(t.onFocusOutside, (u) => u.preventDefault(), {
        checkForDefaultPrevented: false
      }),
      onDismiss: () => o.onOpenChange(false)
    });
  }), PD = b.forwardRef((t, r) => {
    const o = Ta(dn, t.__scopeMenu);
    return x.jsx(Ph, {
      ...t,
      ref: r,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => o.onOpenChange(false)
    });
  }), HD = No("MenuContent.ScrollLock"), Ph = b.forwardRef((t, r) => {
    const { __scopeMenu: o, loop: i = false, trapFocus: l, onOpenAutoFocus: u, onCloseAutoFocus: d, disableOutsidePointerEvents: h, onEntryFocus: g, onEscapeKeyDown: p, onPointerDownOutside: v, onFocusOutside: m, onInteractOutside: w, onDismiss: S, disableOutsideScroll: E, ...R } = t, C = Ta(dn, o), O = hs(dn, o), k = zc(o), j = D_(o), H = DD(o), [q, V] = b.useState(null), K = b.useRef(null), D = dt(r, K, C.onContentChange), U = b.useRef(0), ae = b.useRef(""), ie = b.useRef(0), ee = b.useRef(null), re = b.useRef("right"), fe = b.useRef(0), se = E ? hh : b.Fragment, A = E ? {
      as: HD,
      allowPinchZoom: true
    } : void 0, I = (Z) => {
      var _a5, _b3;
      const T = ae.current + Z, L = H().filter((le) => !le.disabled), $ = document.activeElement, Q = (_a5 = L.find((le) => le.ref.current === $)) == null ? void 0 : _a5.textValue, J = L.map((le) => le.textValue), ce = JD(J, T, Q), ne = (_b3 = L.find((le) => le.textValue === ce)) == null ? void 0 : _b3.ref.current;
      (function le(ue) {
        ae.current = ue, window.clearTimeout(U.current), ue !== "" && (U.current = window.setTimeout(() => le(""), 1e3));
      })(T), ne && setTimeout(() => ne.focus());
    };
    b.useEffect(() => () => window.clearTimeout(U.current), []), Zb();
    const B = b.useCallback((Z) => {
      var _a5, _b3;
      return re.current === ((_a5 = ee.current) == null ? void 0 : _a5.side) && eN(Z, (_b3 = ee.current) == null ? void 0 : _b3.area);
    }, []);
    return x.jsx(UD, {
      scope: o,
      searchRef: ae,
      onItemEnter: b.useCallback((Z) => {
        B(Z) && Z.preventDefault();
      }, [
        B
      ]),
      onItemLeave: b.useCallback((Z) => {
        var _a5;
        B(Z) || ((_a5 = K.current) == null ? void 0 : _a5.focus(), V(null));
      }, [
        B
      ]),
      onTriggerLeave: b.useCallback((Z) => {
        B(Z) && Z.preventDefault();
      }, [
        B
      ]),
      pointerGraceTimerRef: ie,
      onPointerGraceIntentChange: b.useCallback((Z) => {
        ee.current = Z;
      }, []),
      children: x.jsx(se, {
        ...A,
        children: x.jsx(dh, {
          asChild: true,
          trapped: l,
          onMountAutoFocus: xe(u, (Z) => {
            var _a5;
            Z.preventDefault(), (_a5 = K.current) == null ? void 0 : _a5.focus({
              preventScroll: true
            });
          }),
          onUnmountAutoFocus: d,
          children: x.jsx(bc, {
            asChild: true,
            disableOutsidePointerEvents: h,
            onEscapeKeyDown: p,
            onPointerDownOutside: v,
            onFocusOutside: m,
            onInteractOutside: w,
            onDismiss: S,
            children: x.jsx(RD, {
              asChild: true,
              ...j,
              dir: O.dir,
              orientation: "vertical",
              loop: i,
              currentTabStopId: q,
              onCurrentTabStopIdChange: V,
              onEntryFocus: xe(g, (Z) => {
                O.isUsingKeyboardRef.current || Z.preventDefault();
              }),
              preventScrollOnEntryFocus: true,
              children: x.jsx(J0, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": Z_(C.open),
                "data-radix-menu-content": "",
                dir: O.dir,
                ...k,
                ...R,
                ref: D,
                style: {
                  outline: "none",
                  ...R.style
                },
                onKeyDown: xe(R.onKeyDown, (Z) => {
                  const L = Z.target.closest("[data-radix-menu-content]") === Z.currentTarget, $ = Z.ctrlKey || Z.altKey || Z.metaKey, Q = Z.key.length === 1;
                  L && (Z.key === "Tab" && Z.preventDefault(), !$ && Q && I(Z.key));
                  const J = K.current;
                  if (Z.target !== J || !MD.includes(Z.key)) return;
                  Z.preventDefault();
                  const ne = H().filter((le) => !le.disabled).map((le) => le.ref.current);
                  A_.includes(Z.key) && ne.reverse(), $D(ne);
                }),
                onBlur: xe(t.onBlur, (Z) => {
                  Z.currentTarget.contains(Z.target) || (window.clearTimeout(U.current), ae.current = "");
                }),
                onPointerMove: xe(t.onPointerMove, ns((Z) => {
                  const T = Z.target, L = fe.current !== Z.clientX;
                  if (Z.currentTarget.contains(T) && L) {
                    const $ = Z.clientX > fe.current ? "right" : "left";
                    re.current = $, fe.current = Z.clientX;
                  }
                }))
              })
            })
          })
        })
      })
    });
  });
  k_.displayName = dn;
  var qD = "MenuGroup", Hh = b.forwardRef((t, r) => {
    const { __scopeMenu: o, ...i } = t;
    return x.jsx($e.div, {
      role: "group",
      ...i,
      ref: r
    });
  });
  Hh.displayName = qD;
  var GD = "MenuLabel", L_ = b.forwardRef((t, r) => {
    const { __scopeMenu: o, ...i } = t;
    return x.jsx($e.div, {
      ...i,
      ref: r
    });
  });
  L_.displayName = GD;
  var uc = "MenuItem", Iy = "menu.itemSelect", kc = b.forwardRef((t, r) => {
    const { disabled: o = false, onSelect: i, ...l } = t, u = b.useRef(null), d = hs(uc, t.__scopeMenu), h = Bh(uc, t.__scopeMenu), g = dt(r, u), p = b.useRef(false), v = () => {
      const m = u.current;
      if (!o && m) {
        const w = new CustomEvent(Iy, {
          bubbles: true,
          cancelable: true
        });
        m.addEventListener(Iy, (S) => i == null ? void 0 : i(S), {
          once: true
        }), Ib(m, w), w.defaultPrevented ? p.current = false : d.onClose();
      }
    };
    return x.jsx(U_, {
      ...l,
      ref: g,
      disabled: o,
      onClick: xe(t.onClick, v),
      onPointerDown: (m) => {
        var _a5;
        (_a5 = t.onPointerDown) == null ? void 0 : _a5.call(t, m), p.current = true;
      },
      onPointerUp: xe(t.onPointerUp, (m) => {
        var _a5;
        p.current || ((_a5 = m.currentTarget) == null ? void 0 : _a5.click());
      }),
      onKeyDown: xe(t.onKeyDown, (m) => {
        const w = h.searchRef.current !== "";
        o || w && m.key === " " || eh.includes(m.key) && (m.currentTarget.click(), m.preventDefault());
      })
    });
  });
  kc.displayName = uc;
  var U_ = b.forwardRef((t, r) => {
    const { __scopeMenu: o, disabled: i = false, textValue: l, ...u } = t, d = Bh(uc, o), h = D_(o), g = b.useRef(null), p = dt(r, g), [v, m] = b.useState(false), [w, S] = b.useState("");
    return b.useEffect(() => {
      const E = g.current;
      E && S((E.textContent ?? "").trim());
    }, [
      u.children
    ]), x.jsx(ts.ItemSlot, {
      scope: o,
      disabled: i,
      textValue: l ?? w,
      children: x.jsx(TD, {
        asChild: true,
        ...h,
        focusable: !i,
        children: x.jsx($e.div, {
          role: "menuitem",
          "data-highlighted": v ? "" : void 0,
          "aria-disabled": i || void 0,
          "data-disabled": i ? "" : void 0,
          ...u,
          ref: p,
          onPointerMove: xe(t.onPointerMove, ns((E) => {
            i ? d.onItemLeave(E) : (d.onItemEnter(E), E.defaultPrevented || E.currentTarget.focus({
              preventScroll: true
            }));
          })),
          onPointerLeave: xe(t.onPointerLeave, ns((E) => d.onItemLeave(E))),
          onFocus: xe(t.onFocus, () => m(true)),
          onBlur: xe(t.onBlur, () => m(false))
        })
      })
    });
  }), FD = "MenuCheckboxItem", B_ = b.forwardRef((t, r) => {
    const { checked: o = false, onCheckedChange: i, ...l } = t;
    return x.jsx(F_, {
      scope: t.__scopeMenu,
      checked: o,
      children: x.jsx(kc, {
        role: "menuitemcheckbox",
        "aria-checked": fc(o) ? "mixed" : o,
        ...l,
        ref: r,
        "data-state": Gh(o),
        onSelect: xe(l.onSelect, () => i == null ? void 0 : i(fc(o) ? true : !o), {
          checkForDefaultPrevented: false
        })
      })
    });
  });
  B_.displayName = FD;
  var P_ = "MenuRadioGroup", [VD, YD] = Ra(P_, {
    value: void 0,
    onValueChange: () => {
    }
  }), H_ = b.forwardRef((t, r) => {
    const { value: o, onValueChange: i, ...l } = t, u = sr(i);
    return x.jsx(VD, {
      scope: t.__scopeMenu,
      value: o,
      onValueChange: u,
      children: x.jsx(Hh, {
        ...l,
        ref: r
      })
    });
  });
  H_.displayName = P_;
  var q_ = "MenuRadioItem", G_ = b.forwardRef((t, r) => {
    const { value: o, ...i } = t, l = YD(q_, t.__scopeMenu), u = o === l.value;
    return x.jsx(F_, {
      scope: t.__scopeMenu,
      checked: u,
      children: x.jsx(kc, {
        role: "menuitemradio",
        "aria-checked": u,
        ...i,
        ref: r,
        "data-state": Gh(u),
        onSelect: xe(i.onSelect, () => {
          var _a5;
          return (_a5 = l.onValueChange) == null ? void 0 : _a5.call(l, o);
        }, {
          checkForDefaultPrevented: false
        })
      })
    });
  });
  G_.displayName = q_;
  var qh = "MenuItemIndicator", [F_, KD] = Ra(qh, {
    checked: false
  }), V_ = b.forwardRef((t, r) => {
    const { __scopeMenu: o, forceMount: i, ...l } = t, u = KD(qh, o);
    return x.jsx(Hn, {
      present: i || fc(u.checked) || u.checked === true,
      children: x.jsx($e.span, {
        ...l,
        ref: r,
        "data-state": Gh(u.checked)
      })
    });
  });
  V_.displayName = qh;
  var ID = "MenuSeparator", Y_ = b.forwardRef((t, r) => {
    const { __scopeMenu: o, ...i } = t;
    return x.jsx($e.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...i,
      ref: r
    });
  });
  Y_.displayName = ID;
  var QD = "MenuArrow", K_ = b.forwardRef((t, r) => {
    const { __scopeMenu: o, ...i } = t, l = zc(o);
    return x.jsx(W0, {
      ...l,
      ...i,
      ref: r
    });
  });
  K_.displayName = QD;
  var XD = "MenuSub", [N4, I_] = Ra(XD), Ki = "MenuSubTrigger", Q_ = b.forwardRef((t, r) => {
    const o = Ta(Ki, t.__scopeMenu), i = hs(Ki, t.__scopeMenu), l = I_(Ki, t.__scopeMenu), u = Bh(Ki, t.__scopeMenu), d = b.useRef(null), { pointerGraceTimerRef: h, onPointerGraceIntentChange: g } = u, p = {
      __scopeMenu: t.__scopeMenu
    }, v = b.useCallback(() => {
      d.current && window.clearTimeout(d.current), d.current = null;
    }, []);
    return b.useEffect(() => v, [
      v
    ]), b.useEffect(() => {
      const m = h.current;
      return () => {
        window.clearTimeout(m), g(null);
      };
    }, [
      h,
      g
    ]), x.jsx(Lh, {
      asChild: true,
      ...p,
      children: x.jsx(U_, {
        id: l.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": o.open,
        "aria-controls": l.contentId,
        "data-state": Z_(o.open),
        ...t,
        ref: vc(r, l.onTriggerChange),
        onClick: (m) => {
          var _a5;
          (_a5 = t.onClick) == null ? void 0 : _a5.call(t, m), !(t.disabled || m.defaultPrevented) && (m.currentTarget.focus(), o.open || o.onOpenChange(true));
        },
        onPointerMove: xe(t.onPointerMove, ns((m) => {
          u.onItemEnter(m), !m.defaultPrevented && !t.disabled && !o.open && !d.current && (u.onPointerGraceIntentChange(null), d.current = window.setTimeout(() => {
            o.onOpenChange(true), v();
          }, 100));
        })),
        onPointerLeave: xe(t.onPointerLeave, ns((m) => {
          var _a5, _b3;
          v();
          const w = (_a5 = o.content) == null ? void 0 : _a5.getBoundingClientRect();
          if (w) {
            const S = (_b3 = o.content) == null ? void 0 : _b3.dataset.side, E = S === "right", R = E ? -5 : 5, C = w[E ? "left" : "right"], O = w[E ? "right" : "left"];
            u.onPointerGraceIntentChange({
              area: [
                {
                  x: m.clientX + R,
                  y: m.clientY
                },
                {
                  x: C,
                  y: w.top
                },
                {
                  x: O,
                  y: w.top
                },
                {
                  x: O,
                  y: w.bottom
                },
                {
                  x: C,
                  y: w.bottom
                }
              ],
              side: S
            }), window.clearTimeout(h.current), h.current = window.setTimeout(() => u.onPointerGraceIntentChange(null), 300);
          } else {
            if (u.onTriggerLeave(m), m.defaultPrevented) return;
            u.onPointerGraceIntentChange(null);
          }
        })),
        onKeyDown: xe(t.onKeyDown, (m) => {
          var _a5;
          const w = u.searchRef.current !== "";
          t.disabled || w && m.key === " " || AD[i.dir].includes(m.key) && (o.onOpenChange(true), (_a5 = o.content) == null ? void 0 : _a5.focus(), m.preventDefault());
        })
      })
    });
  });
  Q_.displayName = Ki;
  var X_ = "MenuSubContent", $_ = b.forwardRef((t, r) => {
    const o = j_(dn, t.__scopeMenu), { forceMount: i = o.forceMount, ...l } = t, u = Ta(dn, t.__scopeMenu), d = hs(dn, t.__scopeMenu), h = I_(X_, t.__scopeMenu), g = b.useRef(null), p = dt(r, g);
    return x.jsx(ts.Provider, {
      scope: t.__scopeMenu,
      children: x.jsx(Hn, {
        present: i || u.open,
        children: x.jsx(ts.Slot, {
          scope: t.__scopeMenu,
          children: x.jsx(Ph, {
            id: h.contentId,
            "aria-labelledby": h.triggerId,
            ...l,
            ref: p,
            align: "start",
            side: d.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: false,
            disableOutsideScroll: false,
            trapFocus: false,
            onOpenAutoFocus: (v) => {
              var _a5;
              d.isUsingKeyboardRef.current && ((_a5 = g.current) == null ? void 0 : _a5.focus()), v.preventDefault();
            },
            onCloseAutoFocus: (v) => v.preventDefault(),
            onFocusOutside: xe(t.onFocusOutside, (v) => {
              v.target !== h.trigger && u.onOpenChange(false);
            }),
            onEscapeKeyDown: xe(t.onEscapeKeyDown, (v) => {
              d.onClose(), v.preventDefault();
            }),
            onKeyDown: xe(t.onKeyDown, (v) => {
              var _a5;
              const m = v.currentTarget.contains(v.target), w = OD[d.dir].includes(v.key);
              m && w && (u.onOpenChange(false), (_a5 = h.trigger) == null ? void 0 : _a5.focus(), v.preventDefault());
            })
          })
        })
      })
    });
  });
  $_.displayName = X_;
  function Z_(t) {
    return t ? "open" : "closed";
  }
  function fc(t) {
    return t === "indeterminate";
  }
  function Gh(t) {
    return fc(t) ? "indeterminate" : t ? "checked" : "unchecked";
  }
  function $D(t) {
    const r = document.activeElement;
    for (const o of t) if (o === r || (o.focus(), document.activeElement !== r)) return;
  }
  function ZD(t, r) {
    return t.map((o, i) => t[(r + i) % t.length]);
  }
  function JD(t, r, o) {
    const l = r.length > 1 && Array.from(r).every((p) => p === r[0]) ? r[0] : r, u = o ? t.indexOf(o) : -1;
    let d = ZD(t, Math.max(u, 0));
    l.length === 1 && (d = d.filter((p) => p !== o));
    const g = d.find((p) => p.toLowerCase().startsWith(l.toLowerCase()));
    return g !== o ? g : void 0;
  }
  function WD(t, r) {
    const { x: o, y: i } = t;
    let l = false;
    for (let u = 0, d = r.length - 1; u < r.length; d = u++) {
      const h = r[u], g = r[d], p = h.x, v = h.y, m = g.x, w = g.y;
      v > i != w > i && o < (m - p) * (i - v) / (w - v) + p && (l = !l);
    }
    return l;
  }
  function eN(t, r) {
    if (!r) return false;
    const o = {
      x: t.clientX,
      y: t.clientY
    };
    return WD(o, r);
  }
  function ns(t) {
    return (r) => r.pointerType === "mouse" ? t(r) : void 0;
  }
  var tN = N_, nN = Lh, rN = z_, aN = k_, oN = Hh, iN = L_, sN = kc, lN = B_, cN = H_, uN = G_, fN = V_, dN = Y_, hN = K_, pN = Q_, mN = $_, Lc = "DropdownMenu", [gN, j4] = Ea(Lc, [
    O_
  ]), zt = O_(), [vN, J_] = gN(Lc), W_ = (t) => {
    const { __scopeDropdownMenu: r, children: o, dir: i, open: l, defaultOpen: u, onOpenChange: d, modal: h = true } = t, g = zt(r), p = b.useRef(null), [v, m] = yc({
      prop: l,
      defaultProp: u ?? false,
      onChange: d,
      caller: Lc
    });
    return x.jsx(vN, {
      scope: r,
      triggerId: va(),
      triggerRef: p,
      contentId: va(),
      open: v,
      onOpenChange: m,
      onOpenToggle: b.useCallback(() => m((w) => !w), [
        m
      ]),
      modal: h,
      children: x.jsx(tN, {
        ...g,
        open: v,
        onOpenChange: m,
        dir: i,
        modal: h,
        children: o
      })
    });
  };
  W_.displayName = Lc;
  var ew = "DropdownMenuTrigger", tw = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: o, disabled: i = false, ...l } = t, u = J_(ew, o), d = zt(o);
    return x.jsx(nN, {
      asChild: true,
      ...d,
      children: x.jsx($e.button, {
        type: "button",
        id: u.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": u.open,
        "aria-controls": u.open ? u.contentId : void 0,
        "data-state": u.open ? "open" : "closed",
        "data-disabled": i ? "" : void 0,
        disabled: i,
        ...l,
        ref: vc(r, u.triggerRef),
        onPointerDown: xe(t.onPointerDown, (h) => {
          !i && h.button === 0 && h.ctrlKey === false && (u.onOpenToggle(), u.open || h.preventDefault());
        }),
        onKeyDown: xe(t.onKeyDown, (h) => {
          i || ([
            "Enter",
            " "
          ].includes(h.key) && u.onOpenToggle(), h.key === "ArrowDown" && u.onOpenChange(true), [
            "Enter",
            " ",
            "ArrowDown"
          ].includes(h.key) && h.preventDefault());
        })
      })
    });
  });
  tw.displayName = ew;
  var yN = "DropdownMenuPortal", nw = (t) => {
    const { __scopeDropdownMenu: r, ...o } = t, i = zt(r);
    return x.jsx(rN, {
      ...i,
      ...o
    });
  };
  nw.displayName = yN;
  var rw = "DropdownMenuContent", aw = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: o, ...i } = t, l = J_(rw, o), u = zt(o), d = b.useRef(false);
    return x.jsx(aN, {
      id: l.contentId,
      "aria-labelledby": l.triggerId,
      ...u,
      ...i,
      ref: r,
      onCloseAutoFocus: xe(t.onCloseAutoFocus, (h) => {
        var _a5;
        d.current || ((_a5 = l.triggerRef.current) == null ? void 0 : _a5.focus()), d.current = false, h.preventDefault();
      }),
      onInteractOutside: xe(t.onInteractOutside, (h) => {
        const g = h.detail.originalEvent, p = g.button === 0 && g.ctrlKey === true, v = g.button === 2 || p;
        (!l.modal || v) && (d.current = true);
      }),
      style: {
        ...t.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    });
  });
  aw.displayName = rw;
  var bN = "DropdownMenuGroup", _N = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: o, ...i } = t, l = zt(o);
    return x.jsx(oN, {
      ...l,
      ...i,
      ref: r
    });
  });
  _N.displayName = bN;
  var wN = "DropdownMenuLabel", ow = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: o, ...i } = t, l = zt(o);
    return x.jsx(iN, {
      ...l,
      ...i,
      ref: r
    });
  });
  ow.displayName = wN;
  var xN = "DropdownMenuItem", iw = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: o, ...i } = t, l = zt(o);
    return x.jsx(sN, {
      ...l,
      ...i,
      ref: r
    });
  });
  iw.displayName = xN;
  var SN = "DropdownMenuCheckboxItem", EN = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: o, ...i } = t, l = zt(o);
    return x.jsx(lN, {
      ...l,
      ...i,
      ref: r
    });
  });
  EN.displayName = SN;
  var RN = "DropdownMenuRadioGroup", TN = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: o, ...i } = t, l = zt(o);
    return x.jsx(cN, {
      ...l,
      ...i,
      ref: r
    });
  });
  TN.displayName = RN;
  var CN = "DropdownMenuRadioItem", MN = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: o, ...i } = t, l = zt(o);
    return x.jsx(uN, {
      ...l,
      ...i,
      ref: r
    });
  });
  MN.displayName = CN;
  var AN = "DropdownMenuItemIndicator", ON = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: o, ...i } = t, l = zt(o);
    return x.jsx(fN, {
      ...l,
      ...i,
      ref: r
    });
  });
  ON.displayName = AN;
  var DN = "DropdownMenuSeparator", sw = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: o, ...i } = t, l = zt(o);
    return x.jsx(dN, {
      ...l,
      ...i,
      ref: r
    });
  });
  sw.displayName = DN;
  var NN = "DropdownMenuArrow", jN = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: o, ...i } = t, l = zt(o);
    return x.jsx(hN, {
      ...l,
      ...i,
      ref: r
    });
  });
  jN.displayName = NN;
  var zN = "DropdownMenuSubTrigger", kN = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: o, ...i } = t, l = zt(o);
    return x.jsx(pN, {
      ...l,
      ...i,
      ref: r
    });
  });
  kN.displayName = zN;
  var LN = "DropdownMenuSubContent", UN = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: o, ...i } = t, l = zt(o);
    return x.jsx(mN, {
      ...l,
      ...i,
      ref: r,
      style: {
        ...t.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    });
  });
  UN.displayName = LN;
  var BN = W_, PN = tw, HN = nw, qN = aw, GN = ow, FN = iw, VN = sw;
  function YN({ ...t }) {
    return x.jsx(BN, {
      "data-slot": "dropdown-menu",
      ...t
    });
  }
  function KN({ ...t }) {
    return x.jsx(PN, {
      "data-slot": "dropdown-menu-trigger",
      ...t
    });
  }
  function IN({ className: t, sideOffset: r = 4, ...o }) {
    return x.jsx(HN, {
      children: x.jsx(qN, {
        "data-slot": "dropdown-menu-content",
        sideOffset: r,
        className: Be("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", t),
        ...o
      })
    });
  }
  function Fi({ className: t, inset: r, variant: o = "default", ...i }) {
    return x.jsx(FN, {
      "data-slot": "dropdown-menu-item",
      "data-inset": r,
      "data-variant": o,
      className: Be("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t),
      ...i
    });
  }
  function QN({ className: t, inset: r, ...o }) {
    return x.jsx(GN, {
      "data-slot": "dropdown-menu-label",
      "data-inset": r,
      className: Be("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", t),
      ...o
    });
  }
  function XN({ className: t, ...r }) {
    return x.jsx(VN, {
      "data-slot": "dropdown-menu-separator",
      className: Be("bg-border -mx-1 my-1 h-px", t),
      ...r
    });
  }
  const $N = ({ tree: t, treePath: r }) => uh({
    mutationFn: async (i) => {
      if (i.items.length === 0) return {
        count: 0,
        noOp: true
      };
      const l = i.items.map((d) => [
        By(d.key),
        By(d.value)
      ]);
      await t.insertBatch(l);
      const u = await t.getRootHash();
      return {
        treePath: r,
        newRootHash: da(u),
        count: i.items.length,
        noOp: false
      };
    },
    onSuccess: (i) => {
      Oo.getState().treeUpdated(r), i.noOp ? ft.info("No items provided in JSONL batch.") : ft.success(`Successfully applied ${i.count} entries from JSONL batch.`);
    },
    onError: (i) => {
      Oo.getState().treeError(r, `JSONL batch apply failed: ${i.message}`), ft.error(`JSONL batch apply failed: ${i.message}`);
    }
  });
  Qy = function({ ...t }) {
    return x.jsx(S0, {
      "data-slot": "dialog",
      ...t
    });
  };
  z4 = function({ ...t }) {
    return x.jsx(I2, {
      "data-slot": "dialog-trigger",
      ...t
    });
  };
  function ZN({ ...t }) {
    return x.jsx(E0, {
      "data-slot": "dialog-portal",
      ...t
    });
  }
  function JN({ className: t, ...r }) {
    return x.jsx(R0, {
      "data-slot": "dialog-overlay",
      className: Be("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", t),
      ...r
    });
  }
  Xy = function({ className: t, children: r, showCloseButton: o = true, ...i }) {
    return x.jsxs(ZN, {
      "data-slot": "dialog-portal",
      children: [
        x.jsx(JN, {}),
        x.jsxs(T0, {
          "data-slot": "dialog-content",
          className: Be("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", t),
          ...i,
          children: [
            r,
            o && x.jsxs(A0, {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                x.jsx(kb, {}),
                x.jsx("span", {
                  className: "sr-only",
                  children: "Close"
                })
              ]
            })
          ]
        })
      ]
    });
  };
  $y = function({ className: t, ...r }) {
    return x.jsx("div", {
      "data-slot": "dialog-header",
      className: Be("flex flex-col gap-2 text-center sm:text-left", t),
      ...r
    });
  };
  Zy = function({ className: t, ...r }) {
    return x.jsx("div", {
      "data-slot": "dialog-footer",
      className: Be("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", t),
      ...r
    });
  };
  Jy = function({ className: t, ...r }) {
    return x.jsx(C0, {
      "data-slot": "dialog-title",
      className: Be("text-lg leading-none font-semibold", t),
      ...r
    });
  };
  function WN({ className: t, ...r }) {
    return x.jsx(M0, {
      "data-slot": "dialog-description",
      className: Be("text-muted-foreground text-sm", t),
      ...r
    });
  }
  e4 = function({ className: t, ...r }) {
    return x.jsx("textarea", {
      "data-slot": "textarea",
      className: Be("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t),
      ...r
    });
  };
  t4 = ({ tree: t, treePath: r }) => uh({
    mutationFn: async (o) => {
      var _a5;
      const i = [];
      let l = 0;
      const u = 200;
      for (; ; ) {
        const g = {
          ...o,
          offset: l,
          limit: u
        };
        if (!t) throw new Error("Tree not available for download.");
        const p = await t.scanItems(g);
        if (p.items && p.items.length > 0 && p.items.forEach((v) => {
          i.push({
            key: Py(v[0]),
            value: Py(v[1])
          });
        }), !p.hasNextPage || p.items && p.items.length < u) break;
        l += ((_a5 = p.items) == null ? void 0 : _a5.length) || 0;
      }
      if (i.length === 0) return ft.info("No items found matching current scan filters to download."), null;
      const d = i.map((g) => JSON.stringify({
        key: g.key,
        value: g.value
      })).join(`
`), h = `${r.replace(/\.prly$/, "")}_${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}.jsonl`;
      return {
        data: new TextEncoder().encode(d),
        filename: h
      };
    },
    onSuccess: (o) => {
      o && (p_(o.data, o.filename, "application/jsonl"), ft.success(`Downloaded scan results for tree "${r}" as JSONL.`));
    },
    onError: (o) => {
      ft.error(`Failed to download scan for tree "${r}": ${o.message}`);
    }
  });
  function Wy(t) {
    const r = t.split(`
`), o = [];
    let i = 0;
    for (const l of r) if (l.trim() !== "") try {
      const u = JSON.parse(l.trim());
      u && typeof u.key == "string" && typeof u.value == "string" ? o.push({
        key: u.key,
        value: u.value
      }) : (i++, console.warn("Skipping malformed JSONL line (not key/value strings):", l));
    } catch (u) {
      i++, console.warn(`Error parsing JSONL line: "${l}"`, u);
    }
    return {
      parsedItems: o,
      skippedLines: i
    };
  }
  function n4({ prly: t, treePath: r }) {
    const o = b.useRef(null), i = $N({
      tree: t.tree,
      treePath: r
    }), [l, u] = b.useState(false), [d, h] = b.useState(false), [g, p] = b.useState(false), [v, m] = b.useState(""), w = async (j) => {
      var _a5;
      const H = (_a5 = j.target.files) == null ? void 0 : _a5[0];
      if (H) {
        u(true);
        try {
          const q = await H.text(), { parsedItems: V, skippedLines: K } = Wy(q);
          K > 0 && ft.error(`${K} JSONL line(s) were malformed or skipped.`), V.length > 0 ? i.mutate({
            items: V
          }) : K === 0 && ft.info("JSONL file is empty or contains no valid entries.");
        } catch (q) {
          ft.error(`Failed to process JSONL file: ${q.message}`);
        } finally {
          u(false), o.current && (o.current.value = "");
        }
      }
    }, S = (j) => {
      j.preventDefault();
      const { parsedItems: H, skippedLines: q } = Wy(v);
      q > 0 && ft.error(`${q} JSONL line(s) were malformed or skipped.`), H.length > 0 ? i.mutate({
        items: H
      }) : q === 0 && ft.info("JSONL file is empty or contains no valid entries."), m(""), p(false), ft.success(`Successfully applied ${H.length} JSONL entries to tree.`);
    }, E = uh({
      mutationFn: async ({ description: j }) => {
        if (!t.tree) throw new Error("No tree provided for saving.");
        const H = await t.tree.saveTreeToFileBytes(j || void 0);
        if (!H || H.length === 0) throw new Error("Wasm module returned empty file data.");
        return {
          buffer: H.buffer,
          filename: r
        };
      },
      onSuccess: (j) => {
        p_(j.buffer, j.filename), ft.success("Tree saved to file successfully.");
      },
      onError: (j) => {
        console.error("Save tree to file failed:", j), ft.error(`Save tree failed: ${j.message || "Wasm error during save"}`);
      }
    }), R = () => {
      E.mutate({
        description: "BasicOps Download"
      });
    }, C = t4({
      tree: t.tree,
      treePath: r.replace(/\.prly$/, ".jsonl")
    }), O = () => {
      if (!t.tree) {
        ft.error("Tree instance not available for download.");
        return;
      }
      C.mutate({});
    }, k = () => {
      Oo.getState().deleteTree(r);
    };
    return x.jsxs(x.Fragment, {
      children: [
        x.jsxs(YN, {
          modal: false,
          children: [
            x.jsx(KN, {
              asChild: true,
              children: x.jsx("button", {
                className: "p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: x.jsx(jE, {
                  className: "h-5 w-5 text-muted-foreground"
                })
              })
            }),
            x.jsxs(IN, {
              align: "end",
              children: [
                x.jsx(QN, {
                  children: "Actions"
                }),
                x.jsxs(Fi, {
                  onClick: R,
                  children: [
                    x.jsx(DE, {
                      className: "mr-2 h-4 w-4"
                    }),
                    "Download PRLY"
                  ]
                }),
                x.jsxs(Fi, {
                  onClick: O,
                  children: [
                    x.jsx(ay, {
                      className: "mr-2 h-4 w-4"
                    }),
                    "Download JSONL"
                  ]
                }),
                x.jsxs(Fi, {
                  onClick: () => {
                    var _a5;
                    return (_a5 = o.current) == null ? void 0 : _a5.click();
                  },
                  children: [
                    x.jsx(zb, {
                      className: "mr-2 h-4 w-4"
                    }),
                    "Import JSONL"
                  ]
                }),
                x.jsxs(Fi, {
                  onClick: () => p(true),
                  children: [
                    x.jsx(ay, {
                      className: "mr-2 h-4 w-4"
                    }),
                    "Enter JSONL"
                  ]
                }),
                x.jsxs(Fi, {
                  onClick: () => h(true),
                  children: [
                    x.jsx(HE, {
                      className: "mr-2 h-4 w-4 text-red-500"
                    }),
                    "Delete"
                  ]
                }),
                x.jsx(XN, {})
              ]
            })
          ]
        }),
        x.jsx(Kb, {
          ref: o,
          id: `jsonl-file-upload-${r}`,
          type: "file",
          className: "hidden",
          onChange: w,
          accept: ".jsonl,.jsonlines",
          disabled: l || i.isPending
        }),
        x.jsx(Qy, {
          open: d,
          onOpenChange: h,
          children: x.jsxs(Xy, {
            children: [
              x.jsx($y, {
                children: x.jsx(Jy, {
                  children: "Delete Tree"
                })
              }),
              x.jsxs("form", {
                onSubmit: k,
                children: [
                  x.jsx(WN, {
                    children: "Are you sure you want to delete this tree?"
                  }),
                  x.jsxs(Zy, {
                    children: [
                      x.jsx(ma, {
                        variant: "outline",
                        onClick: () => h(false),
                        children: "Cancel"
                      }),
                      x.jsx(ma, {
                        variant: "destructive",
                        type: "submit",
                        children: "Delete"
                      })
                    ]
                  })
                ]
              })
            ]
          })
        }),
        x.jsx(Qy, {
          open: g,
          onOpenChange: p,
          children: x.jsxs(Xy, {
            children: [
              x.jsx($y, {
                children: x.jsx(Jy, {
                  children: "Import JSONL"
                })
              }),
              x.jsxs("form", {
                onSubmit: S,
                children: [
                  x.jsx(e4, {
                    placeholder: '{"key": "myKey1", "value": "myValue1"}\\n{"key": "myKey2", "value": "myValue2"}',
                    value: v,
                    onChange: (j) => m(j.target.value),
                    rows: 5,
                    disabled: i.isPending,
                    className: "font-mono text-xs"
                  }),
                  x.jsxs(Zy, {
                    children: [
                      x.jsx(ma, {
                        variant: "outline",
                        onClick: () => p(false),
                        children: "Cancel"
                      }),
                      x.jsx(ma, {
                        variant: "default",
                        type: "submit",
                        children: "Import"
                      })
                    ]
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  }
  function r4() {
    const t = Oo((p) => p.trees), r = Y1({
      select: (p) => p.pathname
    }), o = oh(), [i, l] = b.useState(null), u = b.useRef(null);
    async function d() {
      console.log("createNewTree"), l("create");
      try {
        console.log("createNewTree 2");
        const p = await Oo.getState().createNewTree();
        console.log("createNewTree 3"), ft.success(`Created "${p}" (unsaved)`), console.log("navigate", p), o({
          to: "/prolly-tree/$id",
          params: {
            id: p
          }
        });
      } catch (p) {
        ft.error(`New tree failed: ${p.message ?? "Unknown"}`);
      } finally {
        l(null);
      }
    }
    async function h(p) {
      l("load");
      try {
        const v = new Uint8Array(await p.arrayBuffer()), m = await wa.loadTreeFromFileBytes(v), w = p.name, S = await Oo.getState().createNewTree({
          tree: m,
          path: w
        });
        ft.success(`Loaded "${p.name}"`), o({
          to: `/${S}`
        });
      } catch (v) {
        ft.error(`Load failed: ${v.message ?? "Unknown"}`);
      } finally {
        l(null), u.current && (u.current.value = "");
      }
    }
    function g(p) {
      var _a5;
      const v = (_a5 = p.target.files) == null ? void 0 : _a5[0];
      v && h(v);
    }
    return x.jsxs(FC, {
      children: [
        x.jsx(YC, {
          children: x.jsxs("div", {
            className: "flex gap-2 flex-wrap items-center",
            children: [
              x.jsxs("div", {
                className: "flex items-center gap-2 mr-auto",
                children: [
                  x.jsx(GE, {
                    className: "h-8 w-8 text-muted-foreground"
                  }),
                  x.jsx("h1", {
                    className: "text-3xl font-light tracking-tight text-muted-foreground",
                    children: "PBT"
                  })
                ]
              }),
              x.jsx(ma, {
                size: "sm",
                onClick: d,
                disabled: i === "create",
                variant: "ghost",
                title: "New Tree",
                children: i === "create" ? x.jsx(oy, {
                  className: "mr-2 h-4 w-4 animate-spin"
                }) : x.jsx(AE, {
                  className: "mr-2 h-4 w-4 text-green-500"
                })
              }),
              x.jsx(kh, {
                htmlFor: "file-upload",
                className: "cursor-pointer",
                children: x.jsx(ma, {
                  asChild: true,
                  size: "sm",
                  disabled: i === "load",
                  variant: "ghost",
                  title: "Import",
                  children: x.jsx("span", {
                    children: i === "load" ? x.jsx(oy, {
                      className: "mr-2 h-4 w-4 animate-spin"
                    }) : x.jsx(zb, {
                      className: "mr-2 h-4 w-4"
                    })
                  })
                })
              }),
              x.jsx(Kb, {
                id: "file-upload",
                ref: u,
                type: "file",
                accept: ".prly,.prollytree,.prolly",
                className: "hidden",
                onChange: g,
                disabled: i === "load"
              })
            ]
          })
        }),
        x.jsxs(IC, {
          children: [
            x.jsx(Oy, {
              className: "list-none",
              children: Object.entries(t).sort((p, v) => p[1].path.localeCompare(v[1].path)).map(([p, v]) => x.jsx(QC, {
                children: x.jsxs("div", {
                  className: "flex flex-row",
                  children: [
                    x.jsx($C, {
                      asChild: true,
                      isActive: r === `/${p}`,
                      children: x.jsxs(sh, {
                        to: "/prolly-tree/$id",
                        params: {
                          id: p
                        },
                        className: "flex justify-between",
                        children: [
                          x.jsx("span", {
                            className: "text-xs text-overflow-ellipsis overflow-hidden font-mono",
                            children: v.path.replace(/\.prly$/, "")
                          }),
                          v.rootHash !== v.lastSavedRootHash && "*"
                        ]
                      })
                    }),
                    x.jsx("div", {
                      className: "flex justify-end",
                      children: x.jsx(n4, {
                        prly: v,
                        treePath: v.path
                      })
                    })
                  ]
                })
              }, p))
            }),
            x.jsx(Oy, {})
          ]
        }),
        x.jsx(KC, {})
      ]
    });
  }
  let Go, a4, o4, eb, ps, i4, lw, s4, cw, l4, uw, c4, fw, u4, f4, d4, h4, p4, m4, g4, v4, y4, b4;
  Go = L1()({
    component: () => x.jsx(x.Fragment, {
      children: x.jsxs(GC, {
        children: [
          x.jsx(r4, {}),
          x.jsxs("main", {
            className: "flex flex-col gap-4 overflow-y-hidden flex-1 relative",
            children: [
              x.jsx(VC, {
                className: "absolute top-2 left-2"
              }),
              x.jsx(ih, {})
            ]
          })
        ]
      })
    })
  });
  a4 = "modulepreload";
  o4 = function(t) {
    return "/prolly-man/" + t;
  };
  eb = {};
  ps = function(r, o, i) {
    let l = Promise.resolve();
    if (o && o.length > 0) {
      let d = function(p) {
        return Promise.all(p.map((v) => Promise.resolve(v).then((m) => ({
          status: "fulfilled",
          value: m
        }), (m) => ({
          status: "rejected",
          reason: m
        }))));
      };
      document.getElementsByTagName("link");
      const h = document.querySelector("meta[property=csp-nonce]"), g = (h == null ? void 0 : h.nonce) || (h == null ? void 0 : h.getAttribute("nonce"));
      l = d(o.map((p) => {
        if (p = o4(p), p in eb) return;
        eb[p] = true;
        const v = p.endsWith(".css"), m = v ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${p}"]${m}`)) return;
        const w = document.createElement("link");
        if (w.rel = v ? "stylesheet" : a4, v || (w.as = "script"), w.crossOrigin = "", w.href = p, g && w.setAttribute("nonce", g), document.head.appendChild(w), v) return new Promise((S, E) => {
          w.addEventListener("load", S), w.addEventListener("error", () => E(new Error(`Unable to preload CSS for ${p}`)));
        });
      }));
    }
    function u(d) {
      const h = new Event("vite:preloadError", {
        cancelable: true
      });
      if (h.payload = d, window.dispatchEvent(h), !h.defaultPrevented) throw d;
    }
    return l.then((d) => {
      for (const h of d || []) h.status === "rejected" && u(h.reason);
      return r().catch(u);
    });
  };
  i4 = () => ps(() => import("./index-KqpXRaLv.js").then(async (m) => {
    await m.__tla;
    return m;
  }), []);
  lw = as("/")({
    component: os(i4, "component", () => lw.ssr)
  });
  s4 = () => ps(() => import("./index-J5Hw_07Y.js").then(async (m) => {
    await m.__tla;
    return m;
  }), []);
  cw = as("/prolly-tree/")({
    component: os(s4, "component", () => cw.ssr)
  });
  l4 = () => ps(() => import("./demo.tanstack-query-BIJgqkWJ.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([0,1]));
  uw = as("/demo/tanstack-query")({
    component: os(l4, "component", () => uw.ssr)
  });
  c4 = () => ps(() => import("./demo.table-X23AjSV_.js").then(async (m) => {
    await m.__tla;
    return m;
  }), []);
  fw = as("/demo/table")({
    component: os(c4, "component", () => fw.ssr)
  });
  u4 = () => ps(() => import("./index-D-QEgqg1.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([2,1]));
  dw = as("/prolly-tree/$id/")({
    component: os(u4, "component", () => dw.ssr)
  });
  f4 = lw.update({
    id: "/",
    path: "/",
    getParentRoute: () => Go
  });
  d4 = cw.update({
    id: "/prolly-tree/",
    path: "/prolly-tree/",
    getParentRoute: () => Go
  });
  h4 = uw.update({
    id: "/demo/tanstack-query",
    path: "/demo/tanstack-query",
    getParentRoute: () => Go
  });
  p4 = fw.update({
    id: "/demo/table",
    path: "/demo/table",
    getParentRoute: () => Go
  });
  m4 = dw.update({
    id: "/prolly-tree/$id/",
    path: "/prolly-tree/$id/",
    getParentRoute: () => Go
  });
  g4 = {
    IndexRoute: f4,
    DemoTableRoute: p4,
    DemoTanstackQueryRoute: h4,
    ProllyTreeIndexRoute: d4,
    ProllyTreeIdIndexRoute: m4
  };
  v4 = Go._addFileChildren(g4)._addFileTypes();
  y4 = {
    theme: "system",
    setTheme: () => null
  };
  b4 = b.createContext(y4);
  function _4({ children: t, defaultTheme: r = "system", storageKey: o = "vite-ui-theme", ...i }) {
    const [l, u] = b.useState(() => localStorage.getItem(o) || r);
    b.useEffect(() => {
      const h = window.document.documentElement;
      if (h.classList.remove("light", "dark"), l === "system") {
        const g = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        h.classList.add(g);
        return;
      }
      h.classList.add(l);
    }, [
      l
    ]);
    const d = {
      theme: l,
      setTheme: (h) => {
        localStorage.setItem(o, h), u(h);
      }
    };
    return x.jsx(b4.Provider, {
      ...i,
      value: d,
      children: t
    });
  }
  const w4 = q1({
    routeTree: v4,
    context: {
      ...yE()
    },
    defaultPreload: "intent",
    scrollRestoration: true,
    defaultStructuralSharing: true,
    defaultPreloadStaleTime: 0
  }), Td = document.getElementById("app");
  Td && !Td.innerHTML && DS.createRoot(Td).render(x.jsx(b.StrictMode, {
    children: x.jsx(bE, {
      children: x.jsx(_4, {
        children: x.jsx(V1, {
          router: w4
        })
      })
    })
  }));
})();
export {
  X1 as $,
  Kb as A,
  Zy as B,
  ma as C,
  Qy as D,
  Py as E,
  t4 as F,
  DE as G,
  sr as H,
  TD as I,
  Pr as J,
  A4 as K,
  oy as L,
  da as M,
  Nb as N,
  jC as O,
  $e as P,
  zC as Q,
  oe as R,
  Mb as S,
  e4 as T,
  kC as U,
  z4 as V,
  AE as W,
  O4 as X,
  dw as Y,
  is as Z,
  aE as _,
  __tla,
  S4 as a,
  $1 as a0,
  Nd as a1,
  fn as a2,
  gc as a3,
  I1 as a4,
  Q1 as a5,
  bb as a6,
  cE as a7,
  J1 as a8,
  St as a9,
  tE as aa,
  gE as ab,
  Be as b,
  Pn as c,
  yc as d,
  Ea as e,
  va as f,
  E_ as g,
  E4 as h,
  ey as i,
  x as j,
  RD as k,
  xe as l,
  Hn as m,
  mc as n,
  D4 as o,
  dt as p,
  nC as q,
  b as r,
  uh as s,
  ft as t,
  x_ as u,
  Oo as v,
  By as w,
  Xy as x,
  $y as y,
  Jy as z
};
