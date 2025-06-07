var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
import { Z as V, _ as M, $ as f, a0 as E, a1 as g, a2 as T, a3 as I, a4 as k, a5 as W, a6 as N, a7 as K, a8 as L, a9 as j, r as p, aa as Z, ab as $, __tla as __tla_0 } from "./index-DBX1Vs2e.js";
let G, ht, lt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _s, _t, _p, _e, _n, _c, _i, _r, _b, _l, _d, _o, _h, _a, _f, _G_instances, u_fn, R_fn, v_fn, y_fn, g_fn, m_fn, O_fn, C_fn, S_fn, _a2;
  G = (_a2 = class extends V {
    constructor(t, e) {
      super();
      __privateAdd(this, _G_instances);
      __privateAdd(this, _s);
      __privateAdd(this, _t);
      __privateAdd(this, _p);
      __privateAdd(this, _e);
      __privateAdd(this, _n);
      __privateAdd(this, _c);
      __privateAdd(this, _i);
      __privateAdd(this, _r);
      __privateAdd(this, _b);
      __privateAdd(this, _l);
      __privateAdd(this, _d);
      __privateAdd(this, _o);
      __privateAdd(this, _h);
      __privateAdd(this, _a);
      __privateAdd(this, _f, /* @__PURE__ */ new Set());
      this.options = e, __privateSet(this, _s, t), __privateSet(this, _r, null), __privateSet(this, _i, M()), this.options.experimental_prefetchInRender || __privateGet(this, _i).reject(new Error("experimental_prefetchInRender feature flag is not enabled")), this.bindMethods(), this.setOptions(e);
    }
    bindMethods() {
      this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
      this.listeners.size === 1 && (__privateGet(this, _t).addObserver(this), B(__privateGet(this, _t), this.options) ? __privateMethod(this, _G_instances, u_fn).call(this) : this.updateResult(), __privateMethod(this, _G_instances, g_fn).call(this));
    }
    onUnsubscribe() {
      this.hasListeners() || this.destroy();
    }
    shouldFetchOnReconnect() {
      return w(__privateGet(this, _t), this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
      return w(__privateGet(this, _t), this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
      this.listeners = /* @__PURE__ */ new Set(), __privateMethod(this, _G_instances, m_fn).call(this), __privateMethod(this, _G_instances, O_fn).call(this), __privateGet(this, _t).removeObserver(this);
    }
    setOptions(t) {
      const e = this.options, s = __privateGet(this, _t);
      if (this.options = __privateGet(this, _s).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof f(this.options.enabled, __privateGet(this, _t)) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
      __privateMethod(this, _G_instances, C_fn).call(this), __privateGet(this, _t).setOptions(this.options), e._defaulted && !E(this.options, e) && __privateGet(this, _s).getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: __privateGet(this, _t),
        observer: this
      });
      const i = this.hasListeners();
      i && A(__privateGet(this, _t), s, this.options, e) && __privateMethod(this, _G_instances, u_fn).call(this), this.updateResult(), i && (__privateGet(this, _t) !== s || f(this.options.enabled, __privateGet(this, _t)) !== f(e.enabled, __privateGet(this, _t)) || g(this.options.staleTime, __privateGet(this, _t)) !== g(e.staleTime, __privateGet(this, _t))) && __privateMethod(this, _G_instances, R_fn).call(this);
      const a = __privateMethod(this, _G_instances, v_fn).call(this);
      i && (__privateGet(this, _t) !== s || f(this.options.enabled, __privateGet(this, _t)) !== f(e.enabled, __privateGet(this, _t)) || a !== __privateGet(this, _a)) && __privateMethod(this, _G_instances, y_fn).call(this, a);
    }
    getOptimisticResult(t) {
      const e = __privateGet(this, _s).getQueryCache().build(__privateGet(this, _s), t), s = this.createResult(e, t);
      return X(this, s) && (__privateSet(this, _e, s), __privateSet(this, _c, this.options), __privateSet(this, _n, __privateGet(this, _t).state)), s;
    }
    getCurrentResult() {
      return __privateGet(this, _e);
    }
    trackResult(t, e) {
      return new Proxy(t, {
        get: (s, i) => (this.trackProp(i), e == null ? void 0 : e(i), Reflect.get(s, i))
      });
    }
    trackProp(t) {
      __privateGet(this, _f).add(t);
    }
    getCurrentQuery() {
      return __privateGet(this, _t);
    }
    refetch({ ...t } = {}) {
      return this.fetch({
        ...t
      });
    }
    fetchOptimistic(t) {
      const e = __privateGet(this, _s).defaultQueryOptions(t), s = __privateGet(this, _s).getQueryCache().build(__privateGet(this, _s), e);
      return s.fetch().then(() => this.createResult(s, e));
    }
    fetch(t) {
      return __privateMethod(this, _G_instances, u_fn).call(this, {
        ...t,
        cancelRefetch: t.cancelRefetch ?? true
      }).then(() => (this.updateResult(), __privateGet(this, _e)));
    }
    createResult(t, e) {
      var _a3;
      const s = __privateGet(this, _t), i = this.options, a = __privateGet(this, _e), u = __privateGet(this, _n), r = __privateGet(this, _c), o = t !== s ? t.state : __privateGet(this, _p), { state: l } = t;
      let n = {
        ...l
      }, y = false, h;
      if (e._optimisticResults) {
        const c = this.hasListeners(), m = !c && B(t, e), v = c && A(t, s, e, i);
        (m || v) && (n = {
          ...n,
          ...K(l.data, t.options)
        }), e._optimisticResults === "isRestoring" && (n.fetchStatus = "idle");
      }
      let { error: F, errorUpdatedAt: P, status: b } = n;
      h = n.data;
      let U = false;
      if (e.placeholderData !== void 0 && h === void 0 && b === "pending") {
        let c;
        (a == null ? void 0 : a.isPlaceholderData) && e.placeholderData === (r == null ? void 0 : r.placeholderData) ? (c = a.data, U = true) : c = typeof e.placeholderData == "function" ? e.placeholderData((_a3 = __privateGet(this, _d)) == null ? void 0 : _a3.state.data, __privateGet(this, _d)) : e.placeholderData, c !== void 0 && (b = "success", h = L(a == null ? void 0 : a.data, c, e), y = true);
      }
      if (e.select && h !== void 0 && !U) if (a && h === (u == null ? void 0 : u.data) && e.select === __privateGet(this, _b)) h = __privateGet(this, _l);
      else try {
        __privateSet(this, _b, e.select), h = e.select(h), h = L(a == null ? void 0 : a.data, h, e), __privateSet(this, _l, h), __privateSet(this, _r, null);
      } catch (c) {
        __privateSet(this, _r, c);
      }
      __privateGet(this, _r) && (F = __privateGet(this, _r), h = __privateGet(this, _l), P = Date.now(), b = "error");
      const C = n.fetchStatus === "fetching", S = b === "pending", Q = b === "error", D = S && C, _ = h !== void 0, d = {
        status: b,
        fetchStatus: n.fetchStatus,
        isPending: S,
        isSuccess: b === "success",
        isError: Q,
        isInitialLoading: D,
        isLoading: D,
        data: h,
        dataUpdatedAt: n.dataUpdatedAt,
        error: F,
        errorUpdatedAt: P,
        failureCount: n.fetchFailureCount,
        failureReason: n.fetchFailureReason,
        errorUpdateCount: n.errorUpdateCount,
        isFetched: n.dataUpdateCount > 0 || n.errorUpdateCount > 0,
        isFetchedAfterMount: n.dataUpdateCount > o.dataUpdateCount || n.errorUpdateCount > o.errorUpdateCount,
        isFetching: C,
        isRefetching: C && !S,
        isLoadingError: Q && !_,
        isPaused: n.fetchStatus === "paused",
        isPlaceholderData: y,
        isRefetchError: Q && _,
        isStale: x(t, e),
        refetch: this.refetch,
        promise: __privateGet(this, _i)
      };
      if (this.options.experimental_prefetchInRender) {
        const c = (O) => {
          d.status === "error" ? O.reject(d.error) : d.data !== void 0 && O.resolve(d.data);
        }, m = () => {
          const O = __privateSet(this, _i, d.promise = M());
          c(O);
        }, v = __privateGet(this, _i);
        switch (v.status) {
          case "pending":
            t.queryHash === s.queryHash && c(v);
            break;
          case "fulfilled":
            (d.status === "error" || d.data !== v.value) && m();
            break;
          case "rejected":
            (d.status !== "error" || d.error !== v.reason) && m();
            break;
        }
      }
      return d;
    }
    updateResult() {
      const t = __privateGet(this, _e), e = this.createResult(__privateGet(this, _t), this.options);
      if (__privateSet(this, _n, __privateGet(this, _t).state), __privateSet(this, _c, this.options), __privateGet(this, _n).data !== void 0 && __privateSet(this, _d, __privateGet(this, _t)), E(e, t)) return;
      __privateSet(this, _e, e);
      const s = () => {
        if (!t) return true;
        const { notifyOnChangeProps: i } = this.options, a = typeof i == "function" ? i() : i;
        if (a === "all" || !a && !__privateGet(this, _f).size) return true;
        const u = new Set(a ?? __privateGet(this, _f));
        return this.options.throwOnError && u.add("error"), Object.keys(__privateGet(this, _e)).some((r) => {
          const R = r;
          return __privateGet(this, _e)[R] !== t[R] && u.has(R);
        });
      };
      __privateMethod(this, _G_instances, S_fn).call(this, {
        listeners: s()
      });
    }
    onQueryUpdate() {
      this.updateResult(), this.hasListeners() && __privateMethod(this, _G_instances, g_fn).call(this);
    }
  }, _s = new WeakMap(), _t = new WeakMap(), _p = new WeakMap(), _e = new WeakMap(), _n = new WeakMap(), _c = new WeakMap(), _i = new WeakMap(), _r = new WeakMap(), _b = new WeakMap(), _l = new WeakMap(), _d = new WeakMap(), _o = new WeakMap(), _h = new WeakMap(), _a = new WeakMap(), _f = new WeakMap(), _G_instances = new WeakSet(), u_fn = function(t) {
    __privateMethod(this, _G_instances, C_fn).call(this);
    let e = __privateGet(this, _t).fetch(this.options, t);
    return (t == null ? void 0 : t.throwOnError) || (e = e.catch(T)), e;
  }, R_fn = function() {
    __privateMethod(this, _G_instances, m_fn).call(this);
    const t = g(this.options.staleTime, __privateGet(this, _t));
    if (I || __privateGet(this, _e).isStale || !k(t)) return;
    const s = W(__privateGet(this, _e).dataUpdatedAt, t) + 1;
    __privateSet(this, _o, setTimeout(() => {
      __privateGet(this, _e).isStale || this.updateResult();
    }, s));
  }, v_fn = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(__privateGet(this, _t)) : this.options.refetchInterval) ?? false;
  }, y_fn = function(t) {
    __privateMethod(this, _G_instances, O_fn).call(this), __privateSet(this, _a, t), !(I || f(this.options.enabled, __privateGet(this, _t)) === false || !k(__privateGet(this, _a)) || __privateGet(this, _a) === 0) && __privateSet(this, _h, setInterval(() => {
      (this.options.refetchIntervalInBackground || N.isFocused()) && __privateMethod(this, _G_instances, u_fn).call(this);
    }, __privateGet(this, _a)));
  }, g_fn = function() {
    __privateMethod(this, _G_instances, R_fn).call(this), __privateMethod(this, _G_instances, y_fn).call(this, __privateMethod(this, _G_instances, v_fn).call(this));
  }, m_fn = function() {
    __privateGet(this, _o) && (clearTimeout(__privateGet(this, _o)), __privateSet(this, _o, void 0));
  }, O_fn = function() {
    __privateGet(this, _h) && (clearInterval(__privateGet(this, _h)), __privateSet(this, _h, void 0));
  }, C_fn = function() {
    const t = __privateGet(this, _s).getQueryCache().build(__privateGet(this, _s), this.options);
    if (t === __privateGet(this, _t)) return;
    const e = __privateGet(this, _t);
    __privateSet(this, _t, t), __privateSet(this, _p, t.state), this.hasListeners() && (e == null ? void 0 : e.removeObserver(this), t.addObserver(this));
  }, S_fn = function(t) {
    j.batch(() => {
      t.listeners && this.listeners.forEach((e) => {
        e(__privateGet(this, _e));
      }), __privateGet(this, _s).getQueryCache().notify({
        query: __privateGet(this, _t),
        type: "observerResultsUpdated"
      });
    });
  }, _a2);
  function J(t, e) {
    return f(e.enabled, t) !== false && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === false);
  }
  function B(t, e) {
    return J(t, e) || t.state.data !== void 0 && w(t, e, e.refetchOnMount);
  }
  function w(t, e, s) {
    if (f(e.enabled, t) !== false && g(e.staleTime, t) !== "static") {
      const i = typeof s == "function" ? s(t) : s;
      return i === "always" || i !== false && x(t, e);
    }
    return false;
  }
  function A(t, e, s, i) {
    return (t !== e || f(i.enabled, t) === false) && (!s.suspense || t.state.status !== "error") && x(t, s);
  }
  function x(t, e) {
    return f(e.enabled, t) !== false && t.isStaleByTime(g(e.staleTime, t));
  }
  function X(t, e) {
    return !E(t.getCurrentResult(), e);
  }
  var z = p.createContext(false), Y = () => p.useContext(z);
  z.Provider;
  function q() {
    let t = false;
    return {
      clearReset: () => {
        t = false;
      },
      reset: () => {
        t = true;
      },
      isReset: () => t
    };
  }
  var tt = p.createContext(q()), et = () => p.useContext(tt), st = (t, e) => {
    (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && (e.isReset() || (t.retryOnMount = false));
  }, it = (t) => {
    p.useEffect(() => {
      t.clearReset();
    }, [
      t
    ]);
  }, rt = ({ result: t, errorResetBoundary: e, throwOnError: s, query: i, suspense: a }) => t.isError && !e.isReset() && !t.isFetching && i && (a && t.data === void 0 || Z(s, [
    t.error,
    i
  ])), at = (t) => {
    if (t.suspense) {
      const e = (i) => i === "static" ? i : Math.max(i ?? 1e3, 1e3), s = t.staleTime;
      t.staleTime = typeof s == "function" ? (...i) => e(s(...i)) : e(s), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3));
    }
  }, nt = (t, e) => t.isLoading && t.isFetching && !e, ot = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, H = (t, e, s) => e.fetchOptimistic(t).catch(() => {
    s.clearReset();
  });
  ht = function(t, e, s) {
    var _a3, _b2, _c2, _d2, _e2, _f2;
    const i = Y(), a = et(), u = $(), r = u.defaultQueryOptions(t);
    (_b2 = (_a3 = u.getDefaultOptions().queries) == null ? void 0 : _a3._experimental_beforeQuery) == null ? void 0 : _b2.call(_a3, r), r._optimisticResults = i ? "isRestoring" : "optimistic", at(r), st(r, a), it(a);
    const R = !u.getQueryCache().get(r.queryHash), [o] = p.useState(() => new e(u, r)), l = o.getOptimisticResult(r), n = !i && t.subscribed !== false;
    if (p.useSyncExternalStore(p.useCallback((y) => {
      const h = n ? o.subscribe(j.batchCalls(y)) : T;
      return o.updateResult(), h;
    }, [
      o,
      n
    ]), () => o.getCurrentResult(), () => o.getCurrentResult()), p.useEffect(() => {
      o.setOptions(r);
    }, [
      r,
      o
    ]), ot(r, l)) throw H(r, o, a);
    if (rt({
      result: l,
      errorResetBoundary: a,
      throwOnError: r.throwOnError,
      query: u.getQueryCache().get(r.queryHash),
      suspense: r.suspense
    })) throw l.error;
    return (_d2 = (_c2 = u.getDefaultOptions().queries) == null ? void 0 : _c2._experimental_afterQuery) == null ? void 0 : _d2.call(_c2, r, l), r.experimental_prefetchInRender && !I && nt(l, i) && ((_f2 = R ? H(r, o, a) : (_e2 = u.getQueryCache().get(r.queryHash)) == null ? void 0 : _e2.promise) == null ? void 0 : _f2.catch(T).finally(() => {
      o.updateResult();
    })), r.notifyOnChangeProps ? l : o.trackResult(l);
  };
  lt = function(t, e) {
    return ht(t, G);
  };
});
export {
  G as Q,
  __tla,
  ht as a,
  lt as u
};
