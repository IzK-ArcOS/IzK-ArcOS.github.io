var St = Object.defineProperty;
var zt = (i, e, t) =>
  e in i
    ? St(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (i[e] = t);
var De = (i, e, t) => (zt(i, typeof e != "symbol" ? e + "" : e, t), t);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
  new MutationObserver((n) => {
    for (const l of n)
      if (l.type === "childList")
        for (const r of l.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && s(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
    const l = {};
    return (
      n.integrity && (l.integrity = n.integrity),
      n.referrerPolicy && (l.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function s(n) {
    if (n.ep) return;
    n.ep = !0;
    const l = t(n);
    fetch(n.href, l);
  }
})();
function y() {}
function J(i, e) {
  for (const t in e) i[t] = e[t];
  return i;
}
function pt(i) {
  return i();
}
function Me() {
  return Object.create(null);
}
function _e(i) {
  i.forEach(pt);
}
function dt(i) {
  return typeof i == "function";
}
function O(i, e) {
  return i != i
    ? e == e
    : i !== e || (i && typeof i == "object") || typeof i == "function";
}
let be;
function Y(i, e) {
  return be || (be = document.createElement("a")), (be.href = e), i === be.href;
}
function Tt(i) {
  return Object.keys(i).length === 0;
}
function F(i, e, t, s) {
  if (i) {
    const n = gt(i, e, t, s);
    return i[0](n);
  }
}
function gt(i, e, t, s) {
  return i[1] && s ? J(t.ctx.slice(), i[1](s(e))) : t.ctx;
}
function Z(i, e, t, s) {
  if (i[2] && s) {
    const n = i[2](s(t));
    if (e.dirty === void 0) return n;
    if (typeof n == "object") {
      const l = [],
        r = Math.max(e.dirty.length, n.length);
      for (let a = 0; a < r; a += 1) l[a] = e.dirty[a] | n[a];
      return l;
    }
    return e.dirty | n;
  }
  return e.dirty;
}
function Q(i, e, t, s, n, l) {
  if (n) {
    const r = gt(e, t, s, l);
    i.p(r, n);
  }
}
function K(i) {
  if (i.ctx.length > 32) {
    const e = [],
      t = i.ctx.length / 32;
    for (let s = 0; s < t; s++) e[s] = -1;
    return e;
  }
  return -1;
}
function Rt(i) {
  const e = {};
  for (const t in i) t[0] !== "$" && (e[t] = i[t]);
  return e;
}
function Be(i, e) {
  const t = {};
  e = new Set(e);
  for (const s in i) !e.has(s) && s[0] !== "$" && (t[s] = i[s]);
  return t;
}
function Pe(i) {
  return i ?? "";
}
function b(i, e) {
  i.appendChild(e);
}
function m(i, e, t) {
  i.insertBefore(e, t || null);
}
function g(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function ne(i, e) {
  for (let t = 0; t < i.length; t += 1) i[t] && i[t].d(e);
}
function k(i) {
  return document.createElement(i);
}
function It(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function W(i) {
  return document.createTextNode(i);
}
function D() {
  return W(" ");
}
function H() {
  return W("");
}
function $e(i, e, t, s) {
  return i.addEventListener(e, t, s), () => i.removeEventListener(e, t, s);
}
function h(i, e, t) {
  t == null
    ? i.removeAttribute(e)
    : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function Ct(i) {
  return Array.from(i.childNodes);
}
function ee(i, e) {
  (e = "" + e), i.data !== e && (i.data = e);
}
function je(i, e, t, s) {
  t === null
    ? i.style.removeProperty(e)
    : i.style.setProperty(e, t, s ? "important" : "");
}
function fe(i, e, t) {
  i.classList[t ? "add" : "remove"](e);
}
function Ot(i, e, { bubbles: t = !1, cancelable: s = !1 } = {}) {
  const n = document.createEvent("CustomEvent");
  return n.initCustomEvent(i, t, s, e), n;
}
class Lt {
  constructor(e = !1) {
    (this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, t, s = null) {
    this.e ||
      (this.is_svg
        ? (this.e = It(t.nodeName))
        : (this.e = k(t.nodeType === 11 ? "TEMPLATE" : t.nodeName)),
      (this.t = t.tagName !== "TEMPLATE" ? t : t.content),
      this.c(e)),
      this.i(s);
  }
  h(e) {
    (this.e.innerHTML = e),
      (this.n = Array.from(
        this.e.nodeName === "TEMPLATE"
          ? this.e.content.childNodes
          : this.e.childNodes
      ));
  }
  i(e) {
    for (let t = 0; t < this.n.length; t += 1) m(this.t, this.n[t], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(g);
  }
}
function U(i, e) {
  return new i(e);
}
let me;
function ge(i) {
  me = i;
}
function ze() {
  if (!me) throw new Error("Function called outside component initialization");
  return me;
}
function ke(i) {
  ze().$$.on_mount.push(i);
}
function Et() {
  const i = ze();
  return (e, t, { cancelable: s = !1 } = {}) => {
    const n = i.$$.callbacks[e];
    if (n) {
      const l = Ot(e, t, { cancelable: s });
      return (
        n.slice().forEach((r) => {
          r.call(i, l);
        }),
        !l.defaultPrevented
      );
    }
    return !0;
  };
}
function Nt(i, e) {
  return ze().$$.context.set(i, e), e;
}
function qt(i) {
  return ze().$$.context.get(i);
}
const ce = [],
  Re = [];
let ue = [];
const Ie = [],
  Dt = Promise.resolve();
let Ce = !1;
function Mt() {
  Ce || ((Ce = !0), Dt.then(mt));
}
function Oe(i) {
  ue.push(i);
}
function Bt(i) {
  Ie.push(i);
}
const Te = new Set();
let ae = 0;
function mt() {
  if (ae !== 0) return;
  const i = me;
  do {
    try {
      for (; ae < ce.length; ) {
        const e = ce[ae];
        ae++, ge(e), Pt(e.$$);
      }
    } catch (e) {
      throw ((ce.length = 0), (ae = 0), e);
    }
    for (ge(null), ce.length = 0, ae = 0; Re.length; ) Re.pop()();
    for (let e = 0; e < ue.length; e += 1) {
      const t = ue[e];
      Te.has(t) || (Te.add(t), t());
    }
    ue.length = 0;
  } while (ce.length);
  for (; Ie.length; ) Ie.pop()();
  (Ce = !1), Te.clear(), ge(i);
}
function Pt(i) {
  if (i.fragment !== null) {
    i.update(), _e(i.before_update);
    const e = i.dirty;
    (i.dirty = [-1]),
      i.fragment && i.fragment.p(i.ctx, e),
      i.after_update.forEach(Oe);
  }
}
function jt(i) {
  const e = [],
    t = [];
  ue.forEach((s) => (i.indexOf(s) === -1 ? e.push(s) : t.push(s))),
    t.forEach((s) => s()),
    (ue = e);
}
const ve = new Set();
let le;
function B() {
  le = { r: 0, c: [], p: le };
}
function P() {
  le.r || _e(le.c), (le = le.p);
}
function f(i, e) {
  i && i.i && (ve.delete(i), i.i(e));
}
function d(i, e, t, s) {
  if (i && i.o) {
    if (ve.has(i)) return;
    ve.add(i),
      le.c.push(() => {
        ve.delete(i), s && (t && i.d(1), s());
      }),
      i.o(e);
  } else s && s();
}
function he(i, e) {
  const t = {},
    s = {},
    n = { $$scope: 1 };
  let l = i.length;
  for (; l--; ) {
    const r = i[l],
      a = e[l];
    if (a) {
      for (const o in r) o in a || (s[o] = 1);
      for (const o in a) n[o] || ((t[o] = a[o]), (n[o] = 1));
      i[l] = a;
    } else for (const o in r) n[o] = 1;
  }
  for (const r in s) r in t || (t[r] = void 0);
  return t;
}
function pe(i) {
  return typeof i == "object" && i !== null ? i : {};
}
function Ht(i, e, t) {
  const s = i.$$.props[e];
  s !== void 0 && ((i.$$.bound[s] = t), t(i.$$.ctx[s]));
}
function S(i) {
  i && i.c();
}
function x(i, e, t, s) {
  const { fragment: n, after_update: l } = i.$$;
  n && n.m(e, t),
    s ||
      Oe(() => {
        const r = i.$$.on_mount.map(pt).filter(dt);
        i.$$.on_destroy ? i.$$.on_destroy.push(...r) : _e(r),
          (i.$$.on_mount = []);
      }),
    l.forEach(Oe);
}
function A(i, e) {
  const t = i.$$;
  t.fragment !== null &&
    (jt(t.after_update),
    _e(t.on_destroy),
    t.fragment && t.fragment.d(e),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function Ut(i, e) {
  i.$$.dirty[0] === -1 && (ce.push(i), Mt(), i.$$.dirty.fill(0)),
    (i.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function L(i, e, t, s, n, l, r, a = [-1]) {
  const o = me;
  ge(i);
  const c = (i.$$ = {
    fragment: null,
    ctx: [],
    props: l,
    update: y,
    not_equal: n,
    bound: Me(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    callbacks: Me(),
    dirty: a,
    skip_bound: !1,
    root: e.target || o.$$.root,
  });
  r && r(c.root);
  let u = !1;
  if (
    ((c.ctx = t
      ? t(i, e.props || {}, (p, _, ...$) => {
          const R = $.length ? $[0] : _;
          return (
            c.ctx &&
              n(c.ctx[p], (c.ctx[p] = R)) &&
              (!c.skip_bound && c.bound[p] && c.bound[p](R), u && Ut(i, p)),
            _
          );
        })
      : []),
    c.update(),
    (u = !0),
    _e(c.before_update),
    (c.fragment = s ? s(c.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const p = Ct(e.target);
      c.fragment && c.fragment.l(p), p.forEach(g);
    } else c.fragment && c.fragment.c();
    e.intro && f(i.$$.fragment),
      x(i, e.target, e.anchor, e.customElement),
      mt();
  }
  ge(o);
}
class E {
  $destroy() {
    A(this, 1), (this.$destroy = y);
  }
  $on(e, t) {
    if (!dt(t)) return y;
    const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      s.push(t),
      () => {
        const n = s.indexOf(t);
        n !== -1 && s.splice(n, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !Tt(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
function Ft(i) {
  let e, t, s;
  const n = i[5].default,
    l = F(n, i, i[4], null);
  return {
    c() {
      (e = k("section")),
        l && l.c(),
        je(e, "height", i[1] + "px"),
        h(e, "class", (t = Pe(i[2]) + " svelte-w3kfc4")),
        h(e, "id", i[3]),
        fe(e, "gradient", i[0]);
    },
    m(r, a) {
      m(r, e, a), l && l.m(e, null), (s = !0);
    },
    p(r, [a]) {
      l &&
        l.p &&
        (!s || a & 16) &&
        Q(l, n, r, r[4], s ? Z(n, r[4], a, null) : K(r[4]), null),
        (!s || a & 2) && je(e, "height", r[1] + "px"),
        (!s || (a & 4 && t !== (t = Pe(r[2]) + " svelte-w3kfc4"))) &&
          h(e, "class", t),
        (!s || a & 8) && h(e, "id", r[3]),
        (!s || a & 5) && fe(e, "gradient", r[0]);
    },
    i(r) {
      s || (f(l, r), (s = !0));
    },
    o(r) {
      d(l, r), (s = !1);
    },
    d(r) {
      r && g(e), l && l.d(r);
    },
  };
}
function Zt(i, e, t) {
  let { $$slots: s = {}, $$scope: n } = e,
    { gradient: l = !1 } = e,
    { height: r = 390 } = e,
    { className: a = "" } = e,
    { id: o = "" } = e;
  return (
    (i.$$set = (c) => {
      "gradient" in c && t(0, (l = c.gradient)),
        "height" in c && t(1, (r = c.height)),
        "className" in c && t(2, (a = c.className)),
        "id" in c && t(3, (o = c.id)),
        "$$scope" in c && t(4, (n = c.$$scope));
    }),
    [l, r, a, o, n, s]
  );
}
class re extends E {
  constructor(e) {
    super(),
      L(this, e, Zt, Ft, O, { gradient: 0, height: 1, className: 2, id: 3 });
  }
}
const _t = "./assets/logo-02134205.png";
function Qt(i) {
  let e, t, s, n, l, r, a, o;
  return {
    c() {
      (e = k("div")),
        (t = k("div")),
        (s = k("img")),
        (l = D()),
        (r = k("h1")),
        (r.textContent = "An OS... In Svelte?"),
        (a = D()),
        (o = k("h3")),
        (o.innerHTML = `<span class="svelte-x58zew">Welcome to ArcOS.</span> 
      <a href="#download" class="svelte-x58zew">Download</a>`),
        Y(s.src, (n = _t)) || h(s, "src", n),
        h(s, "alt", ""),
        h(s, "class", "svelte-x58zew"),
        h(r, "class", "header svelte-x58zew"),
        h(o, "class", "subheader svelte-x58zew"),
        h(t, "class", "svelte-x58zew"),
        h(e, "class", "center svelte-x58zew");
    },
    m(c, u) {
      m(c, e, u), b(e, t), b(t, s), b(t, l), b(t, r), b(t, a), b(t, o);
    },
    p: y,
    i: y,
    o: y,
    d(c) {
      c && g(e);
    },
  };
}
class Kt extends E {
  constructor(e) {
    super(), L(this, e, null, Qt, O, {});
  }
}
const xe = {
  about: "About",
  features: "Features",
  download: "Download",
  changelog: "Changelog",
  contact: "Contact",
};
function He(i, e, t) {
  const s = i.slice();
  return (s[2] = e[t]), s;
}
function Ue(i) {
  let e,
    t = i[2][1] + "",
    s,
    n,
    l;
  return {
    c() {
      (e = k("a")),
        (s = W(t)),
        h(e, "href", "#" + i[2][0]),
        h(e, "class", "svelte-1qfxww7");
    },
    m(r, a) {
      m(r, e, a), b(e, s), n || ((l = $e(e, "click", i[1])), (n = !0));
    },
    p: y,
    d(r) {
      r && g(e), (n = !1), l();
    },
  };
}
function Wt(i) {
  let e,
    t = Object.entries(xe),
    s = [];
  for (let n = 0; n < t.length; n += 1) s[n] = Ue(He(i, t, n));
  return {
    c() {
      e = k("div");
      for (let n = 0; n < s.length; n += 1) s[n].c();
      h(e, "class", "menu svelte-1qfxww7"), fe(e, "opened", i[0]);
    },
    m(n, l) {
      m(n, e, l);
      for (let r = 0; r < s.length; r += 1) s[r] && s[r].m(e, null);
    },
    p(n, [l]) {
      if (l & 2) {
        t = Object.entries(xe);
        let r;
        for (r = 0; r < t.length; r += 1) {
          const a = He(n, t, r);
          s[r] ? s[r].p(a, l) : ((s[r] = Ue(a)), s[r].c(), s[r].m(e, null));
        }
        for (; r < s.length; r += 1) s[r].d(1);
        s.length = t.length;
      }
      l & 1 && fe(e, "opened", n[0]);
    },
    i: y,
    o: y,
    d(n) {
      n && g(e), ne(s, n);
    },
  };
}
function Gt(i, e, t) {
  let { opened: s = !1 } = e;
  function n() {
    t(0, (s = !1));
  }
  return (
    (i.$$set = (l) => {
      "opened" in l && t(0, (s = l.opened));
    }),
    [s, n]
  );
}
class Vt extends E {
  constructor(e) {
    super(), L(this, e, Gt, Wt, O, { opened: 0 });
  }
}
function Xt(i) {
  let e, t, s, n, l, r, a;
  function o(u) {
    i[2](u);
  }
  let c = {};
  return (
    i[0] !== void 0 && (c.opened = i[0]),
    (s = new Vt({ props: c })),
    Re.push(() => Ht(s, "opened", o)),
    {
      c() {
        (e = k("button")),
          (e.textContent = "menu"),
          (t = D()),
          S(s.$$.fragment),
          h(e, "class", "burger material-icons-round svelte-1soygvl");
      },
      m(u, p) {
        m(u, e, p),
          m(u, t, p),
          x(s, u, p),
          (l = !0),
          r || ((a = $e(e, "click", i[1])), (r = !0));
      },
      p(u, [p]) {
        const _ = {};
        !n && p & 1 && ((n = !0), (_.opened = u[0]), Bt(() => (n = !1))),
          s.$set(_);
      },
      i(u) {
        l || (f(s.$$.fragment, u), (l = !0));
      },
      o(u) {
        d(s.$$.fragment, u), (l = !1);
      },
      d(u) {
        u && g(e), u && g(t), A(s, u), (r = !1), a();
      },
    }
  );
}
function Yt(i, e, t) {
  let s = !1;
  function n() {
    t(0, (s = !s));
  }
  ke(() => {
    document.addEventListener("scroll", () => {
      t(0, (s = !1));
    });
  });
  function l(r) {
    (s = r), t(0, s);
  }
  return [s, n, l];
}
class Jt extends E {
  constructor(e) {
    super(), L(this, e, Yt, Xt, O, {});
  }
}
function Fe(i, e, t) {
  const s = i.slice();
  return (s[0] = e[t]), s;
}
function Ze(i) {
  let e,
    t = i[0][1] + "",
    s;
  return {
    c() {
      (e = k("a")),
        (s = W(t)),
        h(e, "href", "#" + i[0][0]),
        h(e, "class", "svelte-1xoe9y9");
    },
    m(n, l) {
      m(n, e, l), b(e, s);
    },
    p: y,
    d(n) {
      n && g(e);
    },
  };
}
function en(i) {
  let e,
    t,
    s,
    n,
    l,
    r,
    a,
    o,
    c,
    u,
    p,
    _,
    $,
    R = Object.entries(xe),
    z = [];
  for (let T = 0; T < R.length; T += 1) z[T] = Ze(Fe(i, R, T));
  return (
    (_ = new Jt({})),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (s = k("img")),
          (l = D()),
          (r = k("p")),
          (r.textContent = "ArcOS"),
          (a = D()),
          (o = k("div")),
          (c = D()),
          (u = k("div"));
        for (let T = 0; T < z.length; T += 1) z[T].c();
        (p = D()),
          S(_.$$.fragment),
          Y(s.src, (n = _t)) || h(s, "src", n),
          h(s, "alt", ""),
          h(s, "class", "svelte-1xoe9y9"),
          h(r, "class", "svelte-1xoe9y9"),
          h(t, "class", "logo svelte-1xoe9y9"),
          h(o, "class", "sep svelte-1xoe9y9"),
          h(u, "class", "pages svelte-1xoe9y9"),
          h(e, "class", "nav svelte-1xoe9y9");
      },
      m(T, N) {
        m(T, e, N),
          b(e, t),
          b(t, s),
          b(t, l),
          b(t, r),
          b(e, a),
          b(e, o),
          b(e, c),
          b(e, u);
        for (let q = 0; q < z.length; q += 1) z[q] && z[q].m(u, null);
        b(e, p), x(_, e, null), ($ = !0);
      },
      p(T, [N]) {
        if (N & 0) {
          R = Object.entries(xe);
          let q;
          for (q = 0; q < R.length; q += 1) {
            const w = Fe(T, R, q);
            z[q] ? z[q].p(w, N) : ((z[q] = Ze(w)), z[q].c(), z[q].m(u, null));
          }
          for (; q < z.length; q += 1) z[q].d(1);
          z.length = R.length;
        }
      },
      i(T) {
        $ || (f(_.$$.fragment, T), ($ = !0));
      },
      o(T) {
        d(_.$$.fragment, T), ($ = !1);
      },
      d(T) {
        T && g(e), ne(z, T), A(_);
      },
    }
  );
}
class tn extends E {
  constructor(e) {
    super(), L(this, e, null, en, O, {});
  }
}
function nn(i) {
  let e, t, s, n;
  return (
    (e = new tn({})),
    (s = new Kt({})),
    {
      c() {
        S(e.$$.fragment), (t = D()), S(s.$$.fragment);
      },
      m(l, r) {
        x(e, l, r), m(l, t, r), x(s, l, r), (n = !0);
      },
      i(l) {
        n || (f(e.$$.fragment, l), f(s.$$.fragment, l), (n = !0));
      },
      o(l) {
        d(e.$$.fragment, l), d(s.$$.fragment, l), (n = !1);
      },
      d(l) {
        A(e, l), l && g(t), A(s, l);
      },
    }
  );
}
function sn(i) {
  let e, t;
  return (
    (e = new re({
      props: {
        gradient: !0,
        height: 650,
        id: "home",
        $$slots: { default: [nn] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        S(e.$$.fragment);
      },
      m(s, n) {
        x(e, s, n), (t = !0);
      },
      p(s, [n]) {
        const l = {};
        n & 1 && (l.$$scope = { dirty: n, ctx: s }), e.$set(l);
      },
      i(s) {
        t || (f(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        d(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        A(e, s);
      },
    }
  );
}
class ln extends E {
  constructor(e) {
    super(), L(this, e, null, sn, O, {});
  }
}
const rn = "./assets/screenshot-f9d55553.png";
function on(i) {
  let e, t, s;
  return {
    c() {
      (e = k("div")),
        (t = k("img")),
        Y(t.src, (s = rn)) || h(t, "src", s),
        h(t, "alt", ""),
        h(t, "class", "svelte-1hfipow"),
        h(e, "id", "screenshot");
    },
    m(n, l) {
      m(n, e, l), b(e, t);
    },
    p: y,
    i: y,
    o: y,
    d(n) {
      n && g(e);
    },
  };
}
class an extends E {
  constructor(e) {
    super(), L(this, e, null, on, O, {});
  }
}
async function $t() {
  try {
    return await (
      await fetch(
        "https://api.github.com/repos/IzK-ArcOS/ArcOS-Frontend/releases"
      )
    ).json();
  } catch {
    return [];
  }
}
function cn(i) {
  let e;
  return {
    c() {
      e = W("Unable to get releases.");
    },
    m(t, s) {
      m(t, e, s);
    },
    p: y,
    d(t) {
      t && g(e);
    },
  };
}
function un(i) {
  let e,
    t,
    s,
    n = i[1] ? "Uns" : "S",
    l,
    r,
    a,
    o,
    c,
    u;
  return {
    c() {
      (e = k("p")),
        (t = W(i[0])),
        (s = W(" - ")),
        (l = W(n)),
        (r = W("table")),
        (a = D()),
        (o = k("div")),
        (c = D()),
        (u = k("a")),
        (u.textContent = "Other versions"),
        h(e, "class", "version svelte-1gbo6d1"),
        h(o, "class", "dot svelte-1gbo6d1"),
        h(u, "href", "https://github.com/IzK-ArcOS/ArcOS-Frontend/releases"),
        h(u, "class", "svelte-1gbo6d1");
    },
    m(p, _) {
      m(p, e, _),
        b(e, t),
        b(e, s),
        b(e, l),
        b(e, r),
        m(p, a, _),
        m(p, o, _),
        m(p, c, _),
        m(p, u, _);
    },
    p(p, _) {
      _ & 1 && ee(t, p[0]), _ & 2 && n !== (n = p[1] ? "Uns" : "S") && ee(l, n);
    },
    d(p) {
      p && g(e), p && g(a), p && g(o), p && g(c), p && g(u);
    },
  };
}
function fn(i) {
  let e,
    t,
    s,
    n = i[2]
      ? navigator.userAgent.toLowerCase().includes("windows")
        ? "Download Latest"
        : "Windows Only"
      : "Go to GitHub",
    l,
    r,
    a,
    o,
    c,
    u;
  function p(R, z) {
    return R[2] ? un : cn;
  }
  let _ = p(i),
    $ = _(i);
  return {
    c() {
      (e = k("div")),
        (t = k("button")),
        (s = k("p")),
        (l = W(n)),
        (a = D()),
        (o = k("div")),
        $.c(),
        h(s, "class", "svelte-1gbo6d1"),
        h(t, "class", "download svelte-1gbo6d1"),
        (t.disabled = r =
          !navigator.userAgent.toLowerCase().includes("windows") && i[2]),
        h(o, "class", "info svelte-1gbo6d1"),
        h(e, "class", "download svelte-1gbo6d1");
    },
    m(R, z) {
      m(R, e, z),
        b(e, t),
        b(t, s),
        b(s, l),
        b(e, a),
        b(e, o),
        $.m(o, null),
        c || ((u = $e(t, "click", i[3])), (c = !0));
    },
    p(R, [z]) {
      z & 4 &&
        n !==
          (n = R[2]
            ? navigator.userAgent.toLowerCase().includes("windows")
              ? "Download Latest"
              : "Windows Only"
            : "Go to GitHub") &&
        ee(l, n),
        z & 4 &&
          r !==
            (r =
              !navigator.userAgent.toLowerCase().includes("windows") && R[2]) &&
          (t.disabled = r),
        _ === (_ = p(R)) && $
          ? $.p(R, z)
          : ($.d(1), ($ = _(R)), $ && ($.c(), $.m(o, null)));
    },
    i: y,
    o: y,
    d(R) {
      R && g(e), $.d(), (c = !1), u();
    },
  };
}
function hn(i, e, t) {
  let s = "0.0.0",
    n = !1,
    l = [],
    r = !0;
  ke(async () => {
    if (((l = await $t()), !l.length)) return t(2, (r = !1));
    t(0, (s = l[0].tag_name)), t(1, (n = l[0].prerelease)), t(2, (r = !0));
  });
  function a() {
    window.open(
      r
        ? l[0].assets[0].browser_download_url
        : "https://github.com/IzK-ArcOS/ArcOS-Frontend/releases"
    );
  }
  return [s, n, r, a];
}
let pn = class extends E {
  constructor(e) {
    super(), L(this, e, hn, fn, O, {});
  }
};
function dn(i) {
  let e;
  return {
    c() {
      (e = k("div")),
        (e.innerHTML = `<h1 class="header svelte-1fykqp9">Download ArcOS</h1> 
  <p class="description svelte-1fykqp9">ArcOS is free and open-source, making it available for everyone. It&#39;s a
    project built by the community, for the community.</p> 

  <p class="disclaimer svelte-1fykqp9"><b>Disclaimer:</b> currently only available for Windows.<br/>
    Other operating systems will be supported in the future.</p>`),
        h(e, "class", "info svelte-1fykqp9");
    },
    m(t, s) {
      m(t, e, s);
    },
    p: y,
    i: y,
    o: y,
    d(t) {
      t && g(e);
    },
  };
}
class gn extends E {
  constructor(e) {
    super(), L(this, e, null, dn, O, {});
  }
}
function mn(i) {
  let e, t, s, n, l;
  return (
    (t = new gn({})),
    (n = new pn({})),
    {
      c() {
        (e = k("div")),
          S(t.$$.fragment),
          (s = D()),
          S(n.$$.fragment),
          h(e, "class", "content svelte-1k56jnh");
      },
      m(r, a) {
        m(r, e, a), x(t, e, null), b(e, s), x(n, e, null), (l = !0);
      },
      p: y,
      i(r) {
        l || (f(t.$$.fragment, r), f(n.$$.fragment, r), (l = !0));
      },
      o(r) {
        d(t.$$.fragment, r), d(n.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && g(e), A(t), A(n);
      },
    }
  );
}
class _n extends E {
  constructor(e) {
    super(), L(this, e, null, mn, O, {});
  }
}
function $n(i) {
  let e;
  return {
    c() {
      (e = k("div")),
        (e.textContent = "download"),
        h(e, "class", "icon material-icons-round svelte-yqt1l8");
    },
    m(t, s) {
      m(t, e, s);
    },
    p: y,
    i: y,
    o: y,
    d(t) {
      t && g(e);
    },
  };
}
class kn extends E {
  constructor(e) {
    super(), L(this, e, null, $n, O, {});
  }
}
function bn(i) {
  let e, t, s, n, l;
  return (
    (t = new kn({})),
    (n = new _n({})),
    {
      c() {
        (e = k("div")),
          S(t.$$.fragment),
          (s = D()),
          S(n.$$.fragment),
          h(e, "class", "wrapper svelte-nprvc9");
      },
      m(r, a) {
        m(r, e, a), x(t, e, null), b(e, s), x(n, e, null), (l = !0);
      },
      p: y,
      i(r) {
        l || (f(t.$$.fragment, r), f(n.$$.fragment, r), (l = !0));
      },
      o(r) {
        d(t.$$.fragment, r), d(n.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && g(e), A(t), A(n);
      },
    }
  );
}
function wn(i) {
  let e, t;
  return (
    (e = new re({
      props: {
        height: 390,
        gradient: !0,
        className: "download-section",
        id: "download",
        $$slots: { default: [bn] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        S(e.$$.fragment);
      },
      m(s, n) {
        x(e, s, n), (t = !0);
      },
      p(s, [n]) {
        const l = {};
        n & 1 && (l.$$scope = { dirty: n, ctx: s }), e.$set(l);
      },
      i(s) {
        t || (f(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        d(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        A(e, s);
      },
    }
  );
}
class vn extends E {
  constructor(e) {
    super(), L(this, e, null, wn, O, {});
  }
}
function yn() {
  const i = console.warn;
  (console.warn = (e) => {
    e.includes("unknown prop") || e.includes("unexpected slot") || i(e);
  }),
    ke(() => {
      console.warn = i;
    });
}
function Qe(i, e, t) {
  const s = i.slice();
  return (s[18] = e[t]), s;
}
function Ke(i, e, t) {
  const s = i.slice();
  return (s[18] = e[t]), s;
}
function We(i, e, t) {
  const s = i.slice();
  return (s[10] = e[t]), s;
}
function Ge(i, e, t) {
  const s = i.slice();
  return (s[13] = e[t]), (s[15] = t), s;
}
function Ve(i, e, t) {
  const s = i.slice();
  return (s[16] = e[t]), (s[15] = t), s;
}
function Xe(i, e, t) {
  const s = i.slice();
  return (s[7] = e[t]), s;
}
function xn(i) {
  let e, t, s, n;
  const l = [Tn, zn, Sn],
    r = [];
  function a(o, c) {
    return o[0] === "table" ? 0 : o[0] === "list" ? 1 : 2;
  }
  return (
    (e = a(i)),
    (t = r[e] = l[e](i)),
    {
      c() {
        t.c(), (s = H());
      },
      m(o, c) {
        r[e].m(o, c), m(o, s, c), (n = !0);
      },
      p(o, c) {
        let u = e;
        (e = a(o)),
          e === u
            ? r[e].p(o, c)
            : (B(),
              d(r[u], 1, 1, () => {
                r[u] = null;
              }),
              P(),
              (t = r[e]),
              t ? t.p(o, c) : ((t = r[e] = l[e](o)), t.c()),
              f(t, 1),
              t.m(s.parentNode, s));
      },
      i(o) {
        n || (f(t), (n = !0));
      },
      o(o) {
        d(t), (n = !1);
      },
      d(o) {
        r[e].d(o), o && g(s);
      },
    }
  );
}
function An(i) {
  let e,
    t,
    s = i[1],
    n = [];
  for (let r = 0; r < s.length; r += 1) n[r] = st(Xe(i, s, r));
  const l = (r) =>
    d(n[r], 1, 1, () => {
      n[r] = null;
    });
  return {
    c() {
      for (let r = 0; r < n.length; r += 1) n[r].c();
      e = H();
    },
    m(r, a) {
      for (let o = 0; o < n.length; o += 1) n[o] && n[o].m(r, a);
      m(r, e, a), (t = !0);
    },
    p(r, a) {
      if (a & 34) {
        s = r[1];
        let o;
        for (o = 0; o < s.length; o += 1) {
          const c = Xe(r, s, o);
          n[o]
            ? (n[o].p(c, a), f(n[o], 1))
            : ((n[o] = st(c)), n[o].c(), f(n[o], 1), n[o].m(e.parentNode, e));
        }
        for (B(), o = s.length; o < n.length; o += 1) l(o);
        P();
      }
    },
    i(r) {
      if (!t) {
        for (let a = 0; a < s.length; a += 1) f(n[a]);
        t = !0;
      }
    },
    o(r) {
      n = n.filter(Boolean);
      for (let a = 0; a < n.length; a += 1) d(n[a]);
      t = !1;
    },
    d(r) {
      ne(n, r), r && g(e);
    },
  };
}
function Sn(i) {
  let e, t, s;
  const n = [i[6]];
  var l = i[5][i[0]];
  function r(a) {
    let o = { $$slots: { default: [Cn] }, $$scope: { ctx: a } };
    for (let c = 0; c < n.length; c += 1) o = J(o, n[c]);
    return { props: o };
  }
  return (
    l && (e = U(l, r(i))),
    {
      c() {
        e && S(e.$$.fragment), (t = H());
      },
      m(a, o) {
        e && x(e, a, o), m(a, t, o), (s = !0);
      },
      p(a, o) {
        const c = o & 64 ? he(n, [pe(a[6])]) : {};
        if (
          (o & 8388706 && (c.$$scope = { dirty: o, ctx: a }),
          o & 33 && l !== (l = a[5][a[0]]))
        ) {
          if (e) {
            B();
            const u = e;
            d(u.$$.fragment, 1, 0, () => {
              A(u, 1);
            }),
              P();
          }
          l
            ? ((e = U(l, r(a))),
              S(e.$$.fragment),
              f(e.$$.fragment, 1),
              x(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(c);
      },
      i(a) {
        s || (e && f(e.$$.fragment, a), (s = !0));
      },
      o(a) {
        e && d(e.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && g(t), e && A(e, a);
      },
    }
  );
}
function zn(i) {
  let e, t, s, n;
  const l = [Ln, On],
    r = [];
  function a(o, c) {
    return o[4] ? 0 : 1;
  }
  return (
    (e = a(i)),
    (t = r[e] = l[e](i)),
    {
      c() {
        t.c(), (s = H());
      },
      m(o, c) {
        r[e].m(o, c), m(o, s, c), (n = !0);
      },
      p(o, c) {
        let u = e;
        (e = a(o)),
          e === u
            ? r[e].p(o, c)
            : (B(),
              d(r[u], 1, 1, () => {
                r[u] = null;
              }),
              P(),
              (t = r[e]),
              t ? t.p(o, c) : ((t = r[e] = l[e](o)), t.c()),
              f(t, 1),
              t.m(s.parentNode, s));
      },
      i(o) {
        n || (f(t), (n = !0));
      },
      o(o) {
        d(t), (n = !1);
      },
      d(o) {
        r[e].d(o), o && g(s);
      },
    }
  );
}
function Tn(i) {
  let e, t, s;
  var n = i[5].table;
  function l(r) {
    return { props: { $$slots: { default: [Fn] }, $$scope: { ctx: r } } };
  }
  return (
    n && (e = U(n, l(i))),
    {
      c() {
        e && S(e.$$.fragment), (t = H());
      },
      m(r, a) {
        e && x(e, r, a), m(r, t, a), (s = !0);
      },
      p(r, a) {
        const o = {};
        if (
          (a & 8388716 && (o.$$scope = { dirty: a, ctx: r }),
          a & 32 && n !== (n = r[5].table))
        ) {
          if (e) {
            B();
            const c = e;
            d(c.$$.fragment, 1, 0, () => {
              A(c, 1);
            }),
              P();
          }
          n
            ? ((e = U(n, l(r))),
              S(e.$$.fragment),
              f(e.$$.fragment, 1),
              x(e, t.parentNode, t))
            : (e = null);
        } else n && e.$set(o);
      },
      i(r) {
        s || (e && f(e.$$.fragment, r), (s = !0));
      },
      o(r) {
        e && d(e.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && g(t), e && A(e, r);
      },
    }
  );
}
function Rn(i) {
  let e = i[6].raw + "",
    t;
  return {
    c() {
      t = W(e);
    },
    m(s, n) {
      m(s, t, n);
    },
    p(s, n) {
      n & 64 && e !== (e = s[6].raw + "") && ee(t, e);
    },
    i: y,
    o: y,
    d(s) {
      s && g(t);
    },
  };
}
function In(i) {
  let e, t;
  return (
    (e = new ie({ props: { tokens: i[1], renderers: i[5] } })),
    {
      c() {
        S(e.$$.fragment);
      },
      m(s, n) {
        x(e, s, n), (t = !0);
      },
      p(s, n) {
        const l = {};
        n & 2 && (l.tokens = s[1]), n & 32 && (l.renderers = s[5]), e.$set(l);
      },
      i(s) {
        t || (f(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        d(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        A(e, s);
      },
    }
  );
}
function Cn(i) {
  let e, t, s, n;
  const l = [In, Rn],
    r = [];
  function a(o, c) {
    return o[1] ? 0 : 1;
  }
  return (
    (e = a(i)),
    (t = r[e] = l[e](i)),
    {
      c() {
        t.c(), (s = H());
      },
      m(o, c) {
        r[e].m(o, c), m(o, s, c), (n = !0);
      },
      p(o, c) {
        let u = e;
        (e = a(o)),
          e === u
            ? r[e].p(o, c)
            : (B(),
              d(r[u], 1, 1, () => {
                r[u] = null;
              }),
              P(),
              (t = r[e]),
              t ? t.p(o, c) : ((t = r[e] = l[e](o)), t.c()),
              f(t, 1),
              t.m(s.parentNode, s));
      },
      i(o) {
        n || (f(t), (n = !0));
      },
      o(o) {
        d(t), (n = !1);
      },
      d(o) {
        r[e].d(o), o && g(s);
      },
    }
  );
}
function On(i) {
  let e, t, s;
  const n = [{ ordered: i[4] }, i[6]];
  var l = i[5].list;
  function r(a) {
    let o = { $$slots: { default: [Nn] }, $$scope: { ctx: a } };
    for (let c = 0; c < n.length; c += 1) o = J(o, n[c]);
    return { props: o };
  }
  return (
    l && (e = U(l, r(i))),
    {
      c() {
        e && S(e.$$.fragment), (t = H());
      },
      m(a, o) {
        e && x(e, a, o), m(a, t, o), (s = !0);
      },
      p(a, o) {
        const c =
          o & 80
            ? he(n, [o & 16 && { ordered: a[4] }, o & 64 && pe(a[6])])
            : {};
        if (
          (o & 8388704 && (c.$$scope = { dirty: o, ctx: a }),
          o & 32 && l !== (l = a[5].list))
        ) {
          if (e) {
            B();
            const u = e;
            d(u.$$.fragment, 1, 0, () => {
              A(u, 1);
            }),
              P();
          }
          l
            ? ((e = U(l, r(a))),
              S(e.$$.fragment),
              f(e.$$.fragment, 1),
              x(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(c);
      },
      i(a) {
        s || (e && f(e.$$.fragment, a), (s = !0));
      },
      o(a) {
        e && d(e.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && g(t), e && A(e, a);
      },
    }
  );
}
function Ln(i) {
  let e, t, s;
  const n = [{ ordered: i[4] }, i[6]];
  var l = i[5].list;
  function r(a) {
    let o = { $$slots: { default: [Dn] }, $$scope: { ctx: a } };
    for (let c = 0; c < n.length; c += 1) o = J(o, n[c]);
    return { props: o };
  }
  return (
    l && (e = U(l, r(i))),
    {
      c() {
        e && S(e.$$.fragment), (t = H());
      },
      m(a, o) {
        e && x(e, a, o), m(a, t, o), (s = !0);
      },
      p(a, o) {
        const c =
          o & 80
            ? he(n, [o & 16 && { ordered: a[4] }, o & 64 && pe(a[6])])
            : {};
        if (
          (o & 8388704 && (c.$$scope = { dirty: o, ctx: a }),
          o & 32 && l !== (l = a[5].list))
        ) {
          if (e) {
            B();
            const u = e;
            d(u.$$.fragment, 1, 0, () => {
              A(u, 1);
            }),
              P();
          }
          l
            ? ((e = U(l, r(a))),
              S(e.$$.fragment),
              f(e.$$.fragment, 1),
              x(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(c);
      },
      i(a) {
        s || (e && f(e.$$.fragment, a), (s = !0));
      },
      o(a) {
        e && d(e.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && g(t), e && A(e, a);
      },
    }
  );
}
function En(i) {
  let e, t, s;
  return (
    (e = new ie({ props: { tokens: i[18].tokens, renderers: i[5] } })),
    {
      c() {
        S(e.$$.fragment), (t = D());
      },
      m(n, l) {
        x(e, n, l), m(n, t, l), (s = !0);
      },
      p(n, l) {
        const r = {};
        l & 64 && (r.tokens = n[18].tokens),
          l & 32 && (r.renderers = n[5]),
          e.$set(r);
      },
      i(n) {
        s || (f(e.$$.fragment, n), (s = !0));
      },
      o(n) {
        d(e.$$.fragment, n), (s = !1);
      },
      d(n) {
        A(e, n), n && g(t);
      },
    }
  );
}
function Ye(i) {
  let e, t, s;
  const n = [i[18]];
  var l = i[5].unorderedlistitem || i[5].listitem;
  function r(a) {
    let o = { $$slots: { default: [En] }, $$scope: { ctx: a } };
    for (let c = 0; c < n.length; c += 1) o = J(o, n[c]);
    return { props: o };
  }
  return (
    l && (e = U(l, r(i))),
    {
      c() {
        e && S(e.$$.fragment), (t = H());
      },
      m(a, o) {
        e && x(e, a, o), m(a, t, o), (s = !0);
      },
      p(a, o) {
        const c = o & 64 ? he(n, [pe(a[18])]) : {};
        if (
          (o & 8388704 && (c.$$scope = { dirty: o, ctx: a }),
          o & 32 && l !== (l = a[5].unorderedlistitem || a[5].listitem))
        ) {
          if (e) {
            B();
            const u = e;
            d(u.$$.fragment, 1, 0, () => {
              A(u, 1);
            }),
              P();
          }
          l
            ? ((e = U(l, r(a))),
              S(e.$$.fragment),
              f(e.$$.fragment, 1),
              x(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(c);
      },
      i(a) {
        s || (e && f(e.$$.fragment, a), (s = !0));
      },
      o(a) {
        e && d(e.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && g(t), e && A(e, a);
      },
    }
  );
}
function Nn(i) {
  let e,
    t,
    s = i[6].items,
    n = [];
  for (let r = 0; r < s.length; r += 1) n[r] = Ye(Qe(i, s, r));
  const l = (r) =>
    d(n[r], 1, 1, () => {
      n[r] = null;
    });
  return {
    c() {
      for (let r = 0; r < n.length; r += 1) n[r].c();
      e = H();
    },
    m(r, a) {
      for (let o = 0; o < n.length; o += 1) n[o] && n[o].m(r, a);
      m(r, e, a), (t = !0);
    },
    p(r, a) {
      if (a & 96) {
        s = r[6].items;
        let o;
        for (o = 0; o < s.length; o += 1) {
          const c = Qe(r, s, o);
          n[o]
            ? (n[o].p(c, a), f(n[o], 1))
            : ((n[o] = Ye(c)), n[o].c(), f(n[o], 1), n[o].m(e.parentNode, e));
        }
        for (B(), o = s.length; o < n.length; o += 1) l(o);
        P();
      }
    },
    i(r) {
      if (!t) {
        for (let a = 0; a < s.length; a += 1) f(n[a]);
        t = !0;
      }
    },
    o(r) {
      n = n.filter(Boolean);
      for (let a = 0; a < n.length; a += 1) d(n[a]);
      t = !1;
    },
    d(r) {
      ne(n, r), r && g(e);
    },
  };
}
function qn(i) {
  let e, t, s;
  return (
    (e = new ie({ props: { tokens: i[18].tokens, renderers: i[5] } })),
    {
      c() {
        S(e.$$.fragment), (t = D());
      },
      m(n, l) {
        x(e, n, l), m(n, t, l), (s = !0);
      },
      p(n, l) {
        const r = {};
        l & 64 && (r.tokens = n[18].tokens),
          l & 32 && (r.renderers = n[5]),
          e.$set(r);
      },
      i(n) {
        s || (f(e.$$.fragment, n), (s = !0));
      },
      o(n) {
        d(e.$$.fragment, n), (s = !1);
      },
      d(n) {
        A(e, n), n && g(t);
      },
    }
  );
}
function Je(i) {
  let e, t, s;
  const n = [i[18]];
  var l = i[5].orderedlistitem || i[5].listitem;
  function r(a) {
    let o = { $$slots: { default: [qn] }, $$scope: { ctx: a } };
    for (let c = 0; c < n.length; c += 1) o = J(o, n[c]);
    return { props: o };
  }
  return (
    l && (e = U(l, r(i))),
    {
      c() {
        e && S(e.$$.fragment), (t = H());
      },
      m(a, o) {
        e && x(e, a, o), m(a, t, o), (s = !0);
      },
      p(a, o) {
        const c = o & 64 ? he(n, [pe(a[18])]) : {};
        if (
          (o & 8388704 && (c.$$scope = { dirty: o, ctx: a }),
          o & 32 && l !== (l = a[5].orderedlistitem || a[5].listitem))
        ) {
          if (e) {
            B();
            const u = e;
            d(u.$$.fragment, 1, 0, () => {
              A(u, 1);
            }),
              P();
          }
          l
            ? ((e = U(l, r(a))),
              S(e.$$.fragment),
              f(e.$$.fragment, 1),
              x(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(c);
      },
      i(a) {
        s || (e && f(e.$$.fragment, a), (s = !0));
      },
      o(a) {
        e && d(e.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && g(t), e && A(e, a);
      },
    }
  );
}
function Dn(i) {
  let e,
    t,
    s = i[6].items,
    n = [];
  for (let r = 0; r < s.length; r += 1) n[r] = Je(Ke(i, s, r));
  const l = (r) =>
    d(n[r], 1, 1, () => {
      n[r] = null;
    });
  return {
    c() {
      for (let r = 0; r < n.length; r += 1) n[r].c();
      e = H();
    },
    m(r, a) {
      for (let o = 0; o < n.length; o += 1) n[o] && n[o].m(r, a);
      m(r, e, a), (t = !0);
    },
    p(r, a) {
      if (a & 96) {
        s = r[6].items;
        let o;
        for (o = 0; o < s.length; o += 1) {
          const c = Ke(r, s, o);
          n[o]
            ? (n[o].p(c, a), f(n[o], 1))
            : ((n[o] = Je(c)), n[o].c(), f(n[o], 1), n[o].m(e.parentNode, e));
        }
        for (B(), o = s.length; o < n.length; o += 1) l(o);
        P();
      }
    },
    i(r) {
      if (!t) {
        for (let a = 0; a < s.length; a += 1) f(n[a]);
        t = !0;
      }
    },
    o(r) {
      n = n.filter(Boolean);
      for (let a = 0; a < n.length; a += 1) d(n[a]);
      t = !1;
    },
    d(r) {
      ne(n, r), r && g(e);
    },
  };
}
function Mn(i) {
  let e, t, s;
  return (
    (e = new ie({ props: { tokens: i[16].tokens, renderers: i[5] } })),
    {
      c() {
        S(e.$$.fragment), (t = D());
      },
      m(n, l) {
        x(e, n, l), m(n, t, l), (s = !0);
      },
      p(n, l) {
        const r = {};
        l & 4 && (r.tokens = n[16].tokens),
          l & 32 && (r.renderers = n[5]),
          e.$set(r);
      },
      i(n) {
        s || (f(e.$$.fragment, n), (s = !0));
      },
      o(n) {
        d(e.$$.fragment, n), (s = !1);
      },
      d(n) {
        A(e, n), n && g(t);
      },
    }
  );
}
function et(i) {
  let e, t, s;
  var n = i[5].tablecell;
  function l(r) {
    return {
      props: {
        header: !0,
        align: r[6].align[r[15]] || "center",
        $$slots: { default: [Mn] },
        $$scope: { ctx: r },
      },
    };
  }
  return (
    n && (e = U(n, l(i))),
    {
      c() {
        e && S(e.$$.fragment), (t = H());
      },
      m(r, a) {
        e && x(e, r, a), m(r, t, a), (s = !0);
      },
      p(r, a) {
        const o = {};
        if (
          (a & 64 && (o.align = r[6].align[r[15]] || "center"),
          a & 8388644 && (o.$$scope = { dirty: a, ctx: r }),
          a & 32 && n !== (n = r[5].tablecell))
        ) {
          if (e) {
            B();
            const c = e;
            d(c.$$.fragment, 1, 0, () => {
              A(c, 1);
            }),
              P();
          }
          n
            ? ((e = U(n, l(r))),
              S(e.$$.fragment),
              f(e.$$.fragment, 1),
              x(e, t.parentNode, t))
            : (e = null);
        } else n && e.$set(o);
      },
      i(r) {
        s || (e && f(e.$$.fragment, r), (s = !0));
      },
      o(r) {
        e && d(e.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && g(t), e && A(e, r);
      },
    }
  );
}
function Bn(i) {
  let e,
    t,
    s = i[2],
    n = [];
  for (let r = 0; r < s.length; r += 1) n[r] = et(Ve(i, s, r));
  const l = (r) =>
    d(n[r], 1, 1, () => {
      n[r] = null;
    });
  return {
    c() {
      for (let r = 0; r < n.length; r += 1) n[r].c();
      e = H();
    },
    m(r, a) {
      for (let o = 0; o < n.length; o += 1) n[o] && n[o].m(r, a);
      m(r, e, a), (t = !0);
    },
    p(r, a) {
      if (a & 100) {
        s = r[2];
        let o;
        for (o = 0; o < s.length; o += 1) {
          const c = Ve(r, s, o);
          n[o]
            ? (n[o].p(c, a), f(n[o], 1))
            : ((n[o] = et(c)), n[o].c(), f(n[o], 1), n[o].m(e.parentNode, e));
        }
        for (B(), o = s.length; o < n.length; o += 1) l(o);
        P();
      }
    },
    i(r) {
      if (!t) {
        for (let a = 0; a < s.length; a += 1) f(n[a]);
        t = !0;
      }
    },
    o(r) {
      n = n.filter(Boolean);
      for (let a = 0; a < n.length; a += 1) d(n[a]);
      t = !1;
    },
    d(r) {
      ne(n, r), r && g(e);
    },
  };
}
function Pn(i) {
  let e, t, s;
  var n = i[5].tablerow;
  function l(r) {
    return { props: { $$slots: { default: [Bn] }, $$scope: { ctx: r } } };
  }
  return (
    n && (e = U(n, l(i))),
    {
      c() {
        e && S(e.$$.fragment), (t = H());
      },
      m(r, a) {
        e && x(e, r, a), m(r, t, a), (s = !0);
      },
      p(r, a) {
        const o = {};
        if (
          (a & 8388708 && (o.$$scope = { dirty: a, ctx: r }),
          a & 32 && n !== (n = r[5].tablerow))
        ) {
          if (e) {
            B();
            const c = e;
            d(c.$$.fragment, 1, 0, () => {
              A(c, 1);
            }),
              P();
          }
          n
            ? ((e = U(n, l(r))),
              S(e.$$.fragment),
              f(e.$$.fragment, 1),
              x(e, t.parentNode, t))
            : (e = null);
        } else n && e.$set(o);
      },
      i(r) {
        s || (e && f(e.$$.fragment, r), (s = !0));
      },
      o(r) {
        e && d(e.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && g(t), e && A(e, r);
      },
    }
  );
}
function jn(i) {
  let e, t;
  return (
    (e = new ie({ props: { tokens: i[13].tokens, renderers: i[5] } })),
    {
      c() {
        S(e.$$.fragment);
      },
      m(s, n) {
        x(e, s, n), (t = !0);
      },
      p(s, n) {
        const l = {};
        n & 8 && (l.tokens = s[13].tokens),
          n & 32 && (l.renderers = s[5]),
          e.$set(l);
      },
      i(s) {
        t || (f(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        d(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        A(e, s);
      },
    }
  );
}
function tt(i) {
  let e, t, s;
  var n = i[5].tablecell;
  function l(r) {
    return {
      props: {
        header: !1,
        align: r[6].align[r[15]] || "center",
        $$slots: { default: [jn] },
        $$scope: { ctx: r },
      },
    };
  }
  return (
    n && (e = U(n, l(i))),
    {
      c() {
        e && S(e.$$.fragment), (t = H());
      },
      m(r, a) {
        e && x(e, r, a), m(r, t, a), (s = !0);
      },
      p(r, a) {
        const o = {};
        if (
          (a & 64 && (o.align = r[6].align[r[15]] || "center"),
          a & 8388648 && (o.$$scope = { dirty: a, ctx: r }),
          a & 32 && n !== (n = r[5].tablecell))
        ) {
          if (e) {
            B();
            const c = e;
            d(c.$$.fragment, 1, 0, () => {
              A(c, 1);
            }),
              P();
          }
          n
            ? ((e = U(n, l(r))),
              S(e.$$.fragment),
              f(e.$$.fragment, 1),
              x(e, t.parentNode, t))
            : (e = null);
        } else n && e.$set(o);
      },
      i(r) {
        s || (e && f(e.$$.fragment, r), (s = !0));
      },
      o(r) {
        e && d(e.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && g(t), e && A(e, r);
      },
    }
  );
}
function Hn(i) {
  let e,
    t,
    s = i[10],
    n = [];
  for (let r = 0; r < s.length; r += 1) n[r] = tt(Ge(i, s, r));
  const l = (r) =>
    d(n[r], 1, 1, () => {
      n[r] = null;
    });
  return {
    c() {
      for (let r = 0; r < n.length; r += 1) n[r].c();
      e = D();
    },
    m(r, a) {
      for (let o = 0; o < n.length; o += 1) n[o] && n[o].m(r, a);
      m(r, e, a), (t = !0);
    },
    p(r, a) {
      if (a & 104) {
        s = r[10];
        let o;
        for (o = 0; o < s.length; o += 1) {
          const c = Ge(r, s, o);
          n[o]
            ? (n[o].p(c, a), f(n[o], 1))
            : ((n[o] = tt(c)), n[o].c(), f(n[o], 1), n[o].m(e.parentNode, e));
        }
        for (B(), o = s.length; o < n.length; o += 1) l(o);
        P();
      }
    },
    i(r) {
      if (!t) {
        for (let a = 0; a < s.length; a += 1) f(n[a]);
        t = !0;
      }
    },
    o(r) {
      n = n.filter(Boolean);
      for (let a = 0; a < n.length; a += 1) d(n[a]);
      t = !1;
    },
    d(r) {
      ne(n, r), r && g(e);
    },
  };
}
function nt(i) {
  let e, t, s;
  var n = i[5].tablerow;
  function l(r) {
    return { props: { $$slots: { default: [Hn] }, $$scope: { ctx: r } } };
  }
  return (
    n && (e = U(n, l(i))),
    {
      c() {
        e && S(e.$$.fragment), (t = H());
      },
      m(r, a) {
        e && x(e, r, a), m(r, t, a), (s = !0);
      },
      p(r, a) {
        const o = {};
        if (
          (a & 8388712 && (o.$$scope = { dirty: a, ctx: r }),
          a & 32 && n !== (n = r[5].tablerow))
        ) {
          if (e) {
            B();
            const c = e;
            d(c.$$.fragment, 1, 0, () => {
              A(c, 1);
            }),
              P();
          }
          n
            ? ((e = U(n, l(r))),
              S(e.$$.fragment),
              f(e.$$.fragment, 1),
              x(e, t.parentNode, t))
            : (e = null);
        } else n && e.$set(o);
      },
      i(r) {
        s || (e && f(e.$$.fragment, r), (s = !0));
      },
      o(r) {
        e && d(e.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && g(t), e && A(e, r);
      },
    }
  );
}
function Un(i) {
  let e,
    t,
    s = i[3],
    n = [];
  for (let r = 0; r < s.length; r += 1) n[r] = nt(We(i, s, r));
  const l = (r) =>
    d(n[r], 1, 1, () => {
      n[r] = null;
    });
  return {
    c() {
      for (let r = 0; r < n.length; r += 1) n[r].c();
      e = H();
    },
    m(r, a) {
      for (let o = 0; o < n.length; o += 1) n[o] && n[o].m(r, a);
      m(r, e, a), (t = !0);
    },
    p(r, a) {
      if (a & 104) {
        s = r[3];
        let o;
        for (o = 0; o < s.length; o += 1) {
          const c = We(r, s, o);
          n[o]
            ? (n[o].p(c, a), f(n[o], 1))
            : ((n[o] = nt(c)), n[o].c(), f(n[o], 1), n[o].m(e.parentNode, e));
        }
        for (B(), o = s.length; o < n.length; o += 1) l(o);
        P();
      }
    },
    i(r) {
      if (!t) {
        for (let a = 0; a < s.length; a += 1) f(n[a]);
        t = !0;
      }
    },
    o(r) {
      n = n.filter(Boolean);
      for (let a = 0; a < n.length; a += 1) d(n[a]);
      t = !1;
    },
    d(r) {
      ne(n, r), r && g(e);
    },
  };
}
function Fn(i) {
  let e, t, s, n, l;
  var r = i[5].tablehead;
  function a(u) {
    return { props: { $$slots: { default: [Pn] }, $$scope: { ctx: u } } };
  }
  r && (e = U(r, a(i)));
  var o = i[5].tablebody;
  function c(u) {
    return { props: { $$slots: { default: [Un] }, $$scope: { ctx: u } } };
  }
  return (
    o && (s = U(o, c(i))),
    {
      c() {
        e && S(e.$$.fragment), (t = D()), s && S(s.$$.fragment), (n = H());
      },
      m(u, p) {
        e && x(e, u, p), m(u, t, p), s && x(s, u, p), m(u, n, p), (l = !0);
      },
      p(u, p) {
        const _ = {};
        if (
          (p & 8388708 && (_.$$scope = { dirty: p, ctx: u }),
          p & 32 && r !== (r = u[5].tablehead))
        ) {
          if (e) {
            B();
            const R = e;
            d(R.$$.fragment, 1, 0, () => {
              A(R, 1);
            }),
              P();
          }
          r
            ? ((e = U(r, a(u))),
              S(e.$$.fragment),
              f(e.$$.fragment, 1),
              x(e, t.parentNode, t))
            : (e = null);
        } else r && e.$set(_);
        const $ = {};
        if (
          (p & 8388712 && ($.$$scope = { dirty: p, ctx: u }),
          p & 32 && o !== (o = u[5].tablebody))
        ) {
          if (s) {
            B();
            const R = s;
            d(R.$$.fragment, 1, 0, () => {
              A(R, 1);
            }),
              P();
          }
          o
            ? ((s = U(o, c(u))),
              S(s.$$.fragment),
              f(s.$$.fragment, 1),
              x(s, n.parentNode, n))
            : (s = null);
        } else o && s.$set($);
      },
      i(u) {
        l || (e && f(e.$$.fragment, u), s && f(s.$$.fragment, u), (l = !0));
      },
      o(u) {
        e && d(e.$$.fragment, u), s && d(s.$$.fragment, u), (l = !1);
      },
      d(u) {
        e && A(e, u), u && g(t), u && g(n), s && A(s, u);
      },
    }
  );
}
function st(i) {
  let e, t;
  const s = [i[7], { renderers: i[5] }];
  let n = {};
  for (let l = 0; l < s.length; l += 1) n = J(n, s[l]);
  return (
    (e = new ie({ props: n })),
    {
      c() {
        S(e.$$.fragment);
      },
      m(l, r) {
        x(e, l, r), (t = !0);
      },
      p(l, r) {
        const a =
          r & 34
            ? he(s, [r & 2 && pe(l[7]), r & 32 && { renderers: l[5] }])
            : {};
        e.$set(a);
      },
      i(l) {
        t || (f(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        d(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        A(e, l);
      },
    }
  );
}
function Zn(i) {
  let e, t, s, n;
  const l = [An, xn],
    r = [];
  function a(o, c) {
    return o[0] ? (o[5][o[0]] ? 1 : -1) : 0;
  }
  return (
    ~(e = a(i)) && (t = r[e] = l[e](i)),
    {
      c() {
        t && t.c(), (s = H());
      },
      m(o, c) {
        ~e && r[e].m(o, c), m(o, s, c), (n = !0);
      },
      p(o, [c]) {
        let u = e;
        (e = a(o)),
          e === u
            ? ~e && r[e].p(o, c)
            : (t &&
                (B(),
                d(r[u], 1, 1, () => {
                  r[u] = null;
                }),
                P()),
              ~e
                ? ((t = r[e]),
                  t ? t.p(o, c) : ((t = r[e] = l[e](o)), t.c()),
                  f(t, 1),
                  t.m(s.parentNode, s))
                : (t = null));
      },
      i(o) {
        n || (f(t), (n = !0));
      },
      o(o) {
        d(t), (n = !1);
      },
      d(o) {
        ~e && r[e].d(o), o && g(s);
      },
    }
  );
}
function Qn(i, e, t) {
  const s = ["type", "tokens", "header", "rows", "ordered", "renderers"];
  let n = Be(e, s),
    { type: l = void 0 } = e,
    { tokens: r = void 0 } = e,
    { header: a = void 0 } = e,
    { rows: o = void 0 } = e,
    { ordered: c = !1 } = e,
    { renderers: u } = e;
  return (
    yn(),
    (i.$$set = (p) => {
      (e = J(J({}, e), Rt(p))),
        t(6, (n = Be(e, s))),
        "type" in p && t(0, (l = p.type)),
        "tokens" in p && t(1, (r = p.tokens)),
        "header" in p && t(2, (a = p.header)),
        "rows" in p && t(3, (o = p.rows)),
        "ordered" in p && t(4, (c = p.ordered)),
        "renderers" in p && t(5, (u = p.renderers));
    }),
    [l, r, a, o, c, u, n]
  );
}
let ie = class extends E {
  constructor(e) {
    super(),
      L(this, e, Qn, Zn, O, {
        type: 0,
        tokens: 1,
        header: 2,
        rows: 3,
        ordered: 4,
        renderers: 5,
      });
  }
};
function kt() {
  return {
    async: !1,
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    hooks: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1,
  };
}
let oe = kt();
function Kn(i) {
  oe = i;
}
const bt = /[&<>"']/,
  Wn = new RegExp(bt.source, "g"),
  wt = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  Gn = new RegExp(wt.source, "g"),
  Vn = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
  lt = (i) => Vn[i];
function G(i, e) {
  if (e) {
    if (bt.test(i)) return i.replace(Wn, lt);
  } else if (wt.test(i)) return i.replace(Gn, lt);
  return i;
}
const Xn = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function vt(i) {
  return i.replace(
    Xn,
    (e, t) => (
      (t = t.toLowerCase()),
      t === "colon"
        ? ":"
        : t.charAt(0) === "#"
        ? t.charAt(1) === "x"
          ? String.fromCharCode(parseInt(t.substring(2), 16))
          : String.fromCharCode(+t.substring(1))
        : ""
    )
  );
}
const Yn = /(^|[^\[])\^/g;
function j(i, e) {
  (i = typeof i == "string" ? i : i.source), (e = e || "");
  const t = {
    replace: (s, n) => (
      (n = n.source || n), (n = n.replace(Yn, "$1")), (i = i.replace(s, n)), t
    ),
    getRegex: () => new RegExp(i, e),
  };
  return t;
}
const Jn = /[^\w:]/g,
  es = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function rt(i, e, t) {
  if (i) {
    let s;
    try {
      s = decodeURIComponent(vt(t)).replace(Jn, "").toLowerCase();
    } catch {
      return null;
    }
    if (
      s.indexOf("javascript:") === 0 ||
      s.indexOf("vbscript:") === 0 ||
      s.indexOf("data:") === 0
    )
      return null;
  }
  e && !es.test(t) && (t = ls(e, t));
  try {
    t = encodeURI(t).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return t;
}
const we = {},
  ts = /^[^:]+:\/*[^/]*$/,
  ns = /^([^:]+:)[\s\S]*$/,
  ss = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function ls(i, e) {
  we[" " + i] ||
    (ts.test(i) ? (we[" " + i] = i + "/") : (we[" " + i] = ye(i, "/", !0))),
    (i = we[" " + i]);
  const t = i.indexOf(":") === -1;
  return e.substring(0, 2) === "//"
    ? t
      ? e
      : i.replace(ns, "$1") + e
    : e.charAt(0) === "/"
    ? t
      ? e
      : i.replace(ss, "$1") + e
    : i + e;
}
const Ae = { exec: function () {} };
function it(i, e) {
  const t = i.replace(/\|/g, (l, r, a) => {
      let o = !1,
        c = r;
      for (; --c >= 0 && a[c] === "\\"; ) o = !o;
      return o ? "|" : " |";
    }),
    s = t.split(/ \|/);
  let n = 0;
  if (
    (s[0].trim() || s.shift(),
    s.length > 0 && !s[s.length - 1].trim() && s.pop(),
    s.length > e)
  )
    s.splice(e);
  else for (; s.length < e; ) s.push("");
  for (; n < s.length; n++) s[n] = s[n].trim().replace(/\\\|/g, "|");
  return s;
}
function ye(i, e, t) {
  const s = i.length;
  if (s === 0) return "";
  let n = 0;
  for (; n < s; ) {
    const l = i.charAt(s - n - 1);
    if (l === e && !t) n++;
    else if (l !== e && t) n++;
    else break;
  }
  return i.slice(0, s - n);
}
function rs(i, e) {
  if (i.indexOf(e[1]) === -1) return -1;
  const t = i.length;
  let s = 0,
    n = 0;
  for (; n < t; n++)
    if (i[n] === "\\") n++;
    else if (i[n] === e[0]) s++;
    else if (i[n] === e[1] && (s--, s < 0)) return n;
  return -1;
}
function is(i) {
  i &&
    i.sanitize &&
    !i.silent &&
    console.warn(
      "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
    );
}
function ot(i, e) {
  if (e < 1) return "";
  let t = "";
  for (; e > 1; ) e & 1 && (t += i), (e >>= 1), (i += i);
  return t + i;
}
function at(i, e, t, s) {
  const n = e.href,
    l = e.title ? G(e.title) : null,
    r = i[1].replace(/\\([\[\]])/g, "$1");
  if (i[0].charAt(0) !== "!") {
    s.state.inLink = !0;
    const a = {
      type: "link",
      raw: t,
      href: n,
      title: l,
      text: r,
      tokens: s.inlineTokens(r),
    };
    return (s.state.inLink = !1), a;
  }
  return { type: "image", raw: t, href: n, title: l, text: G(r) };
}
function os(i, e) {
  const t = i.match(/^(\s+)(?:```)/);
  if (t === null) return e;
  const s = t[1];
  return e
    .split(
      `
`
    )
    .map((n) => {
      const l = n.match(/^\s+/);
      if (l === null) return n;
      const [r] = l;
      return r.length >= s.length ? n.slice(s.length) : n;
    }).join(`
`);
}
class Le {
  constructor(e) {
    this.options = e || oe;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const s = t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic
          ? s
          : ye(
              s,
              `
`
            ),
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const s = t[0],
        n = os(s, t[3] || "");
      return {
        type: "code",
        raw: s,
        lang: t[2]
          ? t[2].trim().replace(this.rules.inline._escapes, "$1")
          : t[2],
        text: n,
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let s = t[2].trim();
      if (/#$/.test(s)) {
        const n = ye(s, "#");
        (this.options.pedantic || !n || / $/.test(n)) && (s = n.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: s,
        tokens: this.lexer.inline(s),
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: t[0] };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      const s = t[0].replace(/^ *>[ \t]?/gm, ""),
        n = this.lexer.state.top;
      this.lexer.state.top = !0;
      const l = this.lexer.blockTokens(s);
      return (
        (this.lexer.state.top = n),
        { type: "blockquote", raw: t[0], tokens: l, text: s }
      );
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let s,
        n,
        l,
        r,
        a,
        o,
        c,
        u,
        p,
        _,
        $,
        R,
        z = t[1].trim();
      const T = z.length > 1,
        N = {
          type: "list",
          raw: "",
          ordered: T,
          start: T ? +z.slice(0, -1) : "",
          loose: !1,
          items: [],
        };
      (z = T ? `\\d{1,9}\\${z.slice(-1)}` : `\\${z}`),
        this.options.pedantic && (z = T ? z : "[*+-]");
      const q = new RegExp(`^( {0,3}${z})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (
        ;
        e && ((R = !1), !(!(t = q.exec(e)) || this.rules.block.hr.test(e)));

      ) {
        if (
          ((s = t[0]),
          (e = e.substring(s.length)),
          (u = t[2]
            .split(
              `
`,
              1
            )[0]
            .replace(/^\t+/, (M) => " ".repeat(3 * M.length))),
          (p = e.split(
            `
`,
            1
          )[0]),
          this.options.pedantic
            ? ((r = 2), ($ = u.trimLeft()))
            : ((r = t[2].search(/[^ ]/)),
              (r = r > 4 ? 1 : r),
              ($ = u.slice(r)),
              (r += t[1].length)),
          (o = !1),
          !u &&
            /^ *$/.test(p) &&
            ((s +=
              p +
              `
`),
            (e = e.substring(p.length + 1)),
            (R = !0)),
          !R)
        ) {
          const M = new RegExp(
              `^ {0,${Math.min(
                3,
                r - 1
              )}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`
            ),
            V = new RegExp(
              `^ {0,${Math.min(
                3,
                r - 1
              )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
            ),
            X = new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:\`\`\`|~~~)`),
            de = new RegExp(`^ {0,${Math.min(3, r - 1)}}#`);
          for (
            ;
            e &&
            ((_ = e.split(
              `
`,
              1
            )[0]),
            (p = _),
            this.options.pedantic &&
              (p = p.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
            !(X.test(p) || de.test(p) || M.test(p) || V.test(e)));

          ) {
            if (p.search(/[^ ]/) >= r || !p.trim())
              $ +=
                `
` + p.slice(r);
            else {
              if (
                o ||
                u.search(/[^ ]/) >= 4 ||
                X.test(u) ||
                de.test(u) ||
                V.test(u)
              )
                break;
              $ +=
                `
` + p;
            }
            !o && !p.trim() && (o = !0),
              (s +=
                _ +
                `
`),
              (e = e.substring(_.length + 1)),
              (u = p.slice(r));
          }
        }
        N.loose || (c ? (N.loose = !0) : /\n *\n *$/.test(s) && (c = !0)),
          this.options.gfm &&
            ((n = /^\[[ xX]\] /.exec($)),
            n && ((l = n[0] !== "[ ] "), ($ = $.replace(/^\[[ xX]\] +/, "")))),
          N.items.push({
            type: "list_item",
            raw: s,
            task: !!n,
            checked: l,
            loose: !1,
            text: $,
          }),
          (N.raw += s);
      }
      (N.items[N.items.length - 1].raw = s.trimRight()),
        (N.items[N.items.length - 1].text = $.trimRight()),
        (N.raw = N.raw.trimRight());
      const w = N.items.length;
      for (a = 0; a < w; a++)
        if (
          ((this.lexer.state.top = !1),
          (N.items[a].tokens = this.lexer.blockTokens(N.items[a].text, [])),
          !N.loose)
        ) {
          const M = N.items[a].tokens.filter((X) => X.type === "space"),
            V = M.length > 0 && M.some((X) => /\n.*\n/.test(X.raw));
          N.loose = V;
        }
      if (N.loose) for (a = 0; a < w; a++) N.items[a].loose = !0;
      return N;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t) {
      const s = {
        type: "html",
        raw: t[0],
        pre:
          !this.options.sanitizer &&
          (t[1] === "pre" || t[1] === "script" || t[1] === "style"),
        text: t[0],
      };
      if (this.options.sanitize) {
        const n = this.options.sanitizer
          ? this.options.sanitizer(t[0])
          : G(t[0]);
        (s.type = "paragraph"), (s.text = n), (s.tokens = this.lexer.inline(n));
      }
      return s;
    }
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const s = t[1].toLowerCase().replace(/\s+/g, " "),
        n = t[2]
          ? t[2]
              .replace(/^<(.*)>$/, "$1")
              .replace(this.rules.inline._escapes, "$1")
          : "",
        l = t[3]
          ? t[3]
              .substring(1, t[3].length - 1)
              .replace(this.rules.inline._escapes, "$1")
          : t[3];
      return { type: "def", tag: s, raw: t[0], href: n, title: l };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (t) {
      const s = {
        type: "table",
        header: it(t[1]).map((n) => ({ text: n })),
        align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows:
          t[3] && t[3].trim()
            ? t[3].replace(/\n[ \t]*$/, "").split(`
`)
            : [],
      };
      if (s.header.length === s.align.length) {
        s.raw = t[0];
        let n = s.align.length,
          l,
          r,
          a,
          o;
        for (l = 0; l < n; l++)
          /^ *-+: *$/.test(s.align[l])
            ? (s.align[l] = "right")
            : /^ *:-+: *$/.test(s.align[l])
            ? (s.align[l] = "center")
            : /^ *:-+ *$/.test(s.align[l])
            ? (s.align[l] = "left")
            : (s.align[l] = null);
        for (n = s.rows.length, l = 0; l < n; l++)
          s.rows[l] = it(s.rows[l], s.header.length).map((c) => ({ text: c }));
        for (n = s.header.length, r = 0; r < n; r++)
          s.header[r].tokens = this.lexer.inline(s.header[r].text);
        for (n = s.rows.length, r = 0; r < n; r++)
          for (o = s.rows[r], a = 0; a < o.length; a++)
            o[a].tokens = this.lexer.inline(o[a].text);
        return s;
      }
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1]),
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const s =
        t[1].charAt(t[1].length - 1) ===
        `
`
          ? t[1].slice(0, -1)
          : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: s,
        tokens: this.lexer.inline(s),
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0]),
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: G(t[1]) };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return (
        !this.lexer.state.inLink && /^<a /i.test(t[0])
          ? (this.lexer.state.inLink = !0)
          : this.lexer.state.inLink &&
            /^<\/a>/i.test(t[0]) &&
            (this.lexer.state.inLink = !1),
        !this.lexer.state.inRawBlock &&
        /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
          ? (this.lexer.state.inRawBlock = !0)
          : this.lexer.state.inRawBlock &&
            /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
            (this.lexer.state.inRawBlock = !1),
        {
          type: this.options.sanitize ? "text" : "html",
          raw: t[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          text: this.options.sanitize
            ? this.options.sanitizer
              ? this.options.sanitizer(t[0])
              : G(t[0])
            : t[0],
        }
      );
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const s = t[2].trim();
      if (!this.options.pedantic && /^</.test(s)) {
        if (!/>$/.test(s)) return;
        const r = ye(s.slice(0, -1), "\\");
        if ((s.length - r.length) % 2 === 0) return;
      } else {
        const r = rs(t[2], "()");
        if (r > -1) {
          const o = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + r;
          (t[2] = t[2].substring(0, r)),
            (t[0] = t[0].substring(0, o).trim()),
            (t[3] = "");
        }
      }
      let n = t[2],
        l = "";
      if (this.options.pedantic) {
        const r = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
        r && ((n = r[1]), (l = r[3]));
      } else l = t[3] ? t[3].slice(1, -1) : "";
      return (
        (n = n.trim()),
        /^</.test(n) &&
          (this.options.pedantic && !/>$/.test(s)
            ? (n = n.slice(1))
            : (n = n.slice(1, -1))),
        at(
          t,
          {
            href: n && n.replace(this.rules.inline._escapes, "$1"),
            title: l && l.replace(this.rules.inline._escapes, "$1"),
          },
          t[0],
          this.lexer
        )
      );
    }
  }
  reflink(e, t) {
    let s;
    if (
      (s = this.rules.inline.reflink.exec(e)) ||
      (s = this.rules.inline.nolink.exec(e))
    ) {
      let n = (s[2] || s[1]).replace(/\s+/g, " ");
      if (((n = t[n.toLowerCase()]), !n)) {
        const l = s[0].charAt(0);
        return { type: "text", raw: l, text: l };
      }
      return at(s, n, s[0], this.lexer);
    }
  }
  emStrong(e, t, s = "") {
    let n = this.rules.inline.emStrong.lDelim.exec(e);
    if (!n || (n[3] && s.match(/[\p{L}\p{N}]/u))) return;
    const l = n[1] || n[2] || "";
    if (!l || (l && (s === "" || this.rules.inline.punctuation.exec(s)))) {
      const r = n[0].length - 1;
      let a,
        o,
        c = r,
        u = 0;
      const p =
        n[0][0] === "*"
          ? this.rules.inline.emStrong.rDelimAst
          : this.rules.inline.emStrong.rDelimUnd;
      for (
        p.lastIndex = 0, t = t.slice(-1 * e.length + r);
        (n = p.exec(t)) != null;

      ) {
        if (((a = n[1] || n[2] || n[3] || n[4] || n[5] || n[6]), !a)) continue;
        if (((o = a.length), n[3] || n[4])) {
          c += o;
          continue;
        } else if ((n[5] || n[6]) && r % 3 && !((r + o) % 3)) {
          u += o;
          continue;
        }
        if (((c -= o), c > 0)) continue;
        o = Math.min(o, o + c + u);
        const _ = e.slice(0, r + n.index + (n[0].length - a.length) + o);
        if (Math.min(r, o) % 2) {
          const R = _.slice(1, -1);
          return {
            type: "em",
            raw: _,
            text: R,
            tokens: this.lexer.inlineTokens(R),
          };
        }
        const $ = _.slice(2, -2);
        return {
          type: "strong",
          raw: _,
          text: $,
          tokens: this.lexer.inlineTokens($),
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let s = t[2].replace(/\n/g, " ");
      const n = /[^ ]/.test(s),
        l = /^ /.test(s) && / $/.test(s);
      return (
        n && l && (s = s.substring(1, s.length - 1)),
        (s = G(s, !0)),
        { type: "codespan", raw: t[0], text: s }
      );
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2]),
      };
  }
  autolink(e, t) {
    const s = this.rules.inline.autolink.exec(e);
    if (s) {
      let n, l;
      return (
        s[2] === "@"
          ? ((n = G(this.options.mangle ? t(s[1]) : s[1])), (l = "mailto:" + n))
          : ((n = G(s[1])), (l = n)),
        {
          type: "link",
          raw: s[0],
          text: n,
          href: l,
          tokens: [{ type: "text", raw: n, text: n }],
        }
      );
    }
  }
  url(e, t) {
    let s;
    if ((s = this.rules.inline.url.exec(e))) {
      let n, l;
      if (s[2] === "@")
        (n = G(this.options.mangle ? t(s[0]) : s[0])), (l = "mailto:" + n);
      else {
        let r;
        do (r = s[0]), (s[0] = this.rules.inline._backpedal.exec(s[0])[0]);
        while (r !== s[0]);
        (n = G(s[0])), s[1] === "www." ? (l = "http://" + s[0]) : (l = s[0]);
      }
      return {
        type: "link",
        raw: s[0],
        text: n,
        href: l,
        tokens: [{ type: "text", raw: n, text: n }],
      };
    }
  }
  inlineText(e, t) {
    const s = this.rules.inline.text.exec(e);
    if (s) {
      let n;
      return (
        this.lexer.state.inRawBlock
          ? (n = this.options.sanitize
              ? this.options.sanitizer
                ? this.options.sanitizer(s[0])
                : G(s[0])
              : s[0])
          : (n = G(this.options.smartypants ? t(s[0]) : s[0])),
        { type: "text", raw: s[0], text: n }
      );
    }
  }
}
const I = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences:
    /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: Ae,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph:
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/,
};
I._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
I._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
I.def = j(I.def)
  .replace("label", I._label)
  .replace("title", I._title)
  .getRegex();
I.bullet = /(?:[*+-]|\d{1,9}[.)])/;
I.listItemStart = j(/^( *)(bull) */)
  .replace("bull", I.bullet)
  .getRegex();
I.list = j(I.list)
  .replace(/bull/g, I.bullet)
  .replace(
    "hr",
    "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
  )
  .replace("def", "\\n+(?=" + I.def.source + ")")
  .getRegex();
I._tag =
  "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
I._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
I.html = j(I.html, "i")
  .replace("comment", I._comment)
  .replace("tag", I._tag)
  .replace(
    "attribute",
    / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
  )
  .getRegex();
I.paragraph = j(I._paragraph)
  .replace("hr", I.hr)
  .replace("heading", " {0,3}#{1,6} ")
  .replace("|lheading", "")
  .replace("|table", "")
  .replace("blockquote", " {0,3}>")
  .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
  .replace(
    "html",
    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
  )
  .replace("tag", I._tag)
  .getRegex();
I.blockquote = j(I.blockquote).replace("paragraph", I.paragraph).getRegex();
I.normal = { ...I };
I.gfm = {
  ...I.normal,
  table:
    "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
};
I.gfm.table = j(I.gfm.table)
  .replace("hr", I.hr)
  .replace("heading", " {0,3}#{1,6} ")
  .replace("blockquote", " {0,3}>")
  .replace("code", " {4}[^\\n]")
  .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
  .replace(
    "html",
    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
  )
  .replace("tag", I._tag)
  .getRegex();
I.gfm.paragraph = j(I._paragraph)
  .replace("hr", I.hr)
  .replace("heading", " {0,3}#{1,6} ")
  .replace("|lheading", "")
  .replace("table", I.gfm.table)
  .replace("blockquote", " {0,3}>")
  .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
  .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
  .replace(
    "html",
    "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
  )
  .replace("tag", I._tag)
  .getRegex();
I.pedantic = {
  ...I.normal,
  html: j(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  )
    .replace("comment", I._comment)
    .replace(
      /tag/g,
      "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
    )
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Ae,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: j(I.normal._paragraph)
    .replace("hr", I.hr)
    .replace(
      "heading",
      ` *#{1,6} *[^
]`
    )
    .replace("lheading", I.lheading)
    .replace("blockquote", " {0,3}>")
    .replace("|fences", "")
    .replace("|list", "")
    .replace("|html", "")
    .getRegex(),
};
const v = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: Ae,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst:
      /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
    rDelimUnd:
      /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: Ae,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/,
};
v._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
v.punctuation = j(v.punctuation)
  .replace(/punctuation/g, v._punctuation)
  .getRegex();
v.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
v.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
v._comment = j(I._comment).replace("(?:-->|$)", "-->").getRegex();
v.emStrong.lDelim = j(v.emStrong.lDelim)
  .replace(/punct/g, v._punctuation)
  .getRegex();
v.emStrong.rDelimAst = j(v.emStrong.rDelimAst, "g")
  .replace(/punct/g, v._punctuation)
  .getRegex();
v.emStrong.rDelimUnd = j(v.emStrong.rDelimUnd, "g")
  .replace(/punct/g, v._punctuation)
  .getRegex();
v._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
v._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
v._email =
  /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
v.autolink = j(v.autolink)
  .replace("scheme", v._scheme)
  .replace("email", v._email)
  .getRegex();
v._attribute =
  /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
v.tag = j(v.tag)
  .replace("comment", v._comment)
  .replace("attribute", v._attribute)
  .getRegex();
v._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
v._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
v._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
v.link = j(v.link)
  .replace("label", v._label)
  .replace("href", v._href)
  .replace("title", v._title)
  .getRegex();
v.reflink = j(v.reflink)
  .replace("label", v._label)
  .replace("ref", I._label)
  .getRegex();
v.nolink = j(v.nolink).replace("ref", I._label).getRegex();
v.reflinkSearch = j(v.reflinkSearch, "g")
  .replace("reflink", v.reflink)
  .replace("nolink", v.nolink)
  .getRegex();
v.normal = { ...v };
v.pedantic = {
  ...v.normal,
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g,
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g,
  },
  link: j(/^!?\[(label)\]\((.*?)\)/)
    .replace("label", v._label)
    .getRegex(),
  reflink: j(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace("label", v._label)
    .getRegex(),
};
v.gfm = {
  ...v.normal,
  escape: j(v.escape).replace("])", "~|])").getRegex(),
  _extended_email:
    /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal:
    /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
};
v.gfm.url = j(v.gfm.url, "i")
  .replace("email", v.gfm._extended_email)
  .getRegex();
v.breaks = {
  ...v.gfm,
  br: j(v.br).replace("{2,}", "*").getRegex(),
  text: j(v.gfm.text)
    .replace("\\b_", "\\b_| {2,}\\n")
    .replace(/\{2,\}/g, "*")
    .getRegex(),
};
function as(i) {
  return i
    .replace(/---/g, "—")
    .replace(/--/g, "–")
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
    .replace(/'/g, "’")
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
    .replace(/"/g, "”")
    .replace(/\.{3}/g, "…");
}
function ct(i) {
  let e = "",
    t,
    s;
  const n = i.length;
  for (t = 0; t < n; t++)
    (s = i.charCodeAt(t)),
      Math.random() > 0.5 && (s = "x" + s.toString(16)),
      (e += "&#" + s + ";");
  return e;
}
class te {
  constructor(e) {
    (this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = e || oe),
      (this.options.tokenizer = this.options.tokenizer || new Le()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
    const t = { block: I.normal, inline: v.normal };
    this.options.pedantic
      ? ((t.block = I.pedantic), (t.inline = v.pedantic))
      : this.options.gfm &&
        ((t.block = I.gfm),
        this.options.breaks ? (t.inline = v.breaks) : (t.inline = v.gfm)),
      (this.tokenizer.rules = t);
  }
  static get rules() {
    return { block: I, inline: v };
  }
  static lex(e, t) {
    return new te(t).lex(e);
  }
  static lexInline(e, t) {
    return new te(t).inlineTokens(e);
  }
  lex(e) {
    (e = e.replace(
      /\r\n|\r/g,
      `
`
    )),
      this.blockTokens(e, this.tokens);
    let t;
    for (; (t = this.inlineQueue.shift()); ) this.inlineTokens(t.src, t.tokens);
    return this.tokens;
  }
  blockTokens(e, t = []) {
    this.options.pedantic
      ? (e = e.replace(/\t/g, "    ").replace(/^ +$/gm, ""))
      : (e = e.replace(
          /^( *)(\t+)/gm,
          (a, o, c) => o + "    ".repeat(c.length)
        ));
    let s, n, l, r;
    for (; e; )
      if (
        !(
          this.options.extensions &&
          this.options.extensions.block &&
          this.options.extensions.block.some((a) =>
            (s = a.call({ lexer: this }, e, t))
              ? ((e = e.substring(s.raw.length)), t.push(s), !0)
              : !1
          )
        )
      ) {
        if ((s = this.tokenizer.space(e))) {
          (e = e.substring(s.raw.length)),
            s.raw.length === 1 && t.length > 0
              ? (t[t.length - 1].raw += `
`)
              : t.push(s);
          continue;
        }
        if ((s = this.tokenizer.code(e))) {
          (e = e.substring(s.raw.length)),
            (n = t[t.length - 1]),
            n && (n.type === "paragraph" || n.type === "text")
              ? ((n.raw +=
                  `
` + s.raw),
                (n.text +=
                  `
` + s.text),
                (this.inlineQueue[this.inlineQueue.length - 1].src = n.text))
              : t.push(s);
          continue;
        }
        if ((s = this.tokenizer.fences(e))) {
          (e = e.substring(s.raw.length)), t.push(s);
          continue;
        }
        if ((s = this.tokenizer.heading(e))) {
          (e = e.substring(s.raw.length)), t.push(s);
          continue;
        }
        if ((s = this.tokenizer.hr(e))) {
          (e = e.substring(s.raw.length)), t.push(s);
          continue;
        }
        if ((s = this.tokenizer.blockquote(e))) {
          (e = e.substring(s.raw.length)), t.push(s);
          continue;
        }
        if ((s = this.tokenizer.list(e))) {
          (e = e.substring(s.raw.length)), t.push(s);
          continue;
        }
        if ((s = this.tokenizer.html(e))) {
          (e = e.substring(s.raw.length)), t.push(s);
          continue;
        }
        if ((s = this.tokenizer.def(e))) {
          (e = e.substring(s.raw.length)),
            (n = t[t.length - 1]),
            n && (n.type === "paragraph" || n.type === "text")
              ? ((n.raw +=
                  `
` + s.raw),
                (n.text +=
                  `
` + s.raw),
                (this.inlineQueue[this.inlineQueue.length - 1].src = n.text))
              : this.tokens.links[s.tag] ||
                (this.tokens.links[s.tag] = { href: s.href, title: s.title });
          continue;
        }
        if ((s = this.tokenizer.table(e))) {
          (e = e.substring(s.raw.length)), t.push(s);
          continue;
        }
        if ((s = this.tokenizer.lheading(e))) {
          (e = e.substring(s.raw.length)), t.push(s);
          continue;
        }
        if (
          ((l = e),
          this.options.extensions && this.options.extensions.startBlock)
        ) {
          let a = 1 / 0;
          const o = e.slice(1);
          let c;
          this.options.extensions.startBlock.forEach(function (u) {
            (c = u.call({ lexer: this }, o)),
              typeof c == "number" && c >= 0 && (a = Math.min(a, c));
          }),
            a < 1 / 0 && a >= 0 && (l = e.substring(0, a + 1));
        }
        if (this.state.top && (s = this.tokenizer.paragraph(l))) {
          (n = t[t.length - 1]),
            r && n.type === "paragraph"
              ? ((n.raw +=
                  `
` + s.raw),
                (n.text +=
                  `
` + s.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = n.text))
              : t.push(s),
            (r = l.length !== e.length),
            (e = e.substring(s.raw.length));
          continue;
        }
        if ((s = this.tokenizer.text(e))) {
          (e = e.substring(s.raw.length)),
            (n = t[t.length - 1]),
            n && n.type === "text"
              ? ((n.raw +=
                  `
` + s.raw),
                (n.text +=
                  `
` + s.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = n.text))
              : t.push(s);
          continue;
        }
        if (e) {
          const a = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(a);
            break;
          } else throw new Error(a);
        }
      }
    return (this.state.top = !0), t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let s,
      n,
      l,
      r = e,
      a,
      o,
      c;
    if (this.tokens.links) {
      const u = Object.keys(this.tokens.links);
      if (u.length > 0)
        for (
          ;
          (a = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null;

        )
          u.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) &&
            (r =
              r.slice(0, a.index) +
              "[" +
              ot("a", a[0].length - 2) +
              "]" +
              r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
      r =
        r.slice(0, a.index) +
        "[" +
        ot("a", a[0].length - 2) +
        "]" +
        r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (a = this.tokenizer.rules.inline.escapedEmSt.exec(r)) != null; )
      (r =
        r.slice(0, a.index + a[0].length - 2) +
        "++" +
        r.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex)),
        this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
    for (; e; )
      if (
        (o || (c = ""),
        (o = !1),
        !(
          this.options.extensions &&
          this.options.extensions.inline &&
          this.options.extensions.inline.some((u) =>
            (s = u.call({ lexer: this }, e, t))
              ? ((e = e.substring(s.raw.length)), t.push(s), !0)
              : !1
          )
        ))
      ) {
        if ((s = this.tokenizer.escape(e))) {
          (e = e.substring(s.raw.length)), t.push(s);
          continue;
        }
        if ((s = this.tokenizer.tag(e))) {
          (e = e.substring(s.raw.length)),
            (n = t[t.length - 1]),
            n && s.type === "text" && n.type === "text"
              ? ((n.raw += s.raw), (n.text += s.text))
              : t.push(s);
          continue;
        }
        if ((s = this.tokenizer.link(e))) {
          (e = e.substring(s.raw.length)), t.push(s);
          continue;
        }
        if ((s = this.tokenizer.reflink(e, this.tokens.links))) {
          (e = e.substring(s.raw.length)),
            (n = t[t.length - 1]),
            n && s.type === "text" && n.type === "text"
              ? ((n.raw += s.raw), (n.text += s.text))
              : t.push(s);
          continue;
        }
        if ((s = this.tokenizer.emStrong(e, r, c))) {
          (e = e.substring(s.raw.length)), t.push(s);
          continue;
        }
        if ((s = this.tokenizer.codespan(e))) {
          (e = e.substring(s.raw.length)), t.push(s);
          continue;
        }
        if ((s = this.tokenizer.br(e))) {
          (e = e.substring(s.raw.length)), t.push(s);
          continue;
        }
        if ((s = this.tokenizer.del(e))) {
          (e = e.substring(s.raw.length)), t.push(s);
          continue;
        }
        if ((s = this.tokenizer.autolink(e, ct))) {
          (e = e.substring(s.raw.length)), t.push(s);
          continue;
        }
        if (!this.state.inLink && (s = this.tokenizer.url(e, ct))) {
          (e = e.substring(s.raw.length)), t.push(s);
          continue;
        }
        if (
          ((l = e),
          this.options.extensions && this.options.extensions.startInline)
        ) {
          let u = 1 / 0;
          const p = e.slice(1);
          let _;
          this.options.extensions.startInline.forEach(function ($) {
            (_ = $.call({ lexer: this }, p)),
              typeof _ == "number" && _ >= 0 && (u = Math.min(u, _));
          }),
            u < 1 / 0 && u >= 0 && (l = e.substring(0, u + 1));
        }
        if ((s = this.tokenizer.inlineText(l, as))) {
          (e = e.substring(s.raw.length)),
            s.raw.slice(-1) !== "_" && (c = s.raw.slice(-1)),
            (o = !0),
            (n = t[t.length - 1]),
            n && n.type === "text"
              ? ((n.raw += s.raw), (n.text += s.text))
              : t.push(s);
          continue;
        }
        if (e) {
          const u = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(u);
            break;
          } else throw new Error(u);
        }
      }
    return t;
  }
}
class Ee {
  constructor(e) {
    this.options = e || oe;
  }
  code(e, t, s) {
    const n = (t || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const l = this.options.highlight(e, n);
      l != null && l !== e && ((s = !0), (e = l));
    }
    return (
      (e =
        e.replace(/\n$/, "") +
        `
`),
      n
        ? '<pre><code class="' +
          this.options.langPrefix +
          G(n) +
          '">' +
          (s ? e : G(e, !0)) +
          `</code></pre>
`
        : "<pre><code>" +
          (s ? e : G(e, !0)) +
          `</code></pre>
`
    );
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e) {
    return e;
  }
  heading(e, t, s, n) {
    if (this.options.headerIds) {
      const l = this.options.headerPrefix + n.slug(s);
      return `<h${t} id="${l}">${e}</h${t}>
`;
    }
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return this.options.xhtml
      ? `<hr/>
`
      : `<hr>
`;
  }
  list(e, t, s) {
    const n = t ? "ol" : "ul",
      l = t && s !== 1 ? ' start="' + s + '"' : "";
    return (
      "<" +
      n +
      l +
      `>
` +
      e +
      "</" +
      n +
      `>
`
    );
  }
  listitem(e) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return (
      "<input " +
      (e ? 'checked="" ' : "") +
      'disabled="" type="checkbox"' +
      (this.options.xhtml ? " /" : "") +
      "> "
    );
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, t) {
    return (
      t && (t = `<tbody>${t}</tbody>`),
      `<table>
<thead>
` +
        e +
        `</thead>
` +
        t +
        `</table>
`
    );
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    const s = t.header ? "th" : "td";
    return (
      (t.align ? `<${s} align="${t.align}">` : `<${s}>`) +
      e +
      `</${s}>
`
    );
  }
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, t, s) {
    if (((e = rt(this.options.sanitize, this.options.baseUrl, e)), e === null))
      return s;
    let n = '<a href="' + e + '"';
    return t && (n += ' title="' + t + '"'), (n += ">" + s + "</a>"), n;
  }
  image(e, t, s) {
    if (((e = rt(this.options.sanitize, this.options.baseUrl, e)), e === null))
      return s;
    let n = `<img src="${e}" alt="${s}"`;
    return (
      t && (n += ` title="${t}"`), (n += this.options.xhtml ? "/>" : ">"), n
    );
  }
  text(e) {
    return e;
  }
}
class yt {
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, s) {
    return "" + s;
  }
  image(e, t, s) {
    return "" + s;
  }
  br() {
    return "";
  }
}
class Ne {
  constructor() {
    this.seen = {};
  }
  serialize(e) {
    return e
      .toLowerCase()
      .trim()
      .replace(/<[!\/a-z].*?>/gi, "")
      .replace(
        /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
        ""
      )
      .replace(/\s/g, "-");
  }
  getNextSafeSlug(e, t) {
    let s = e,
      n = 0;
    if (this.seen.hasOwnProperty(s)) {
      n = this.seen[e];
      do n++, (s = e + "-" + n);
      while (this.seen.hasOwnProperty(s));
    }
    return t || ((this.seen[e] = n), (this.seen[s] = 0)), s;
  }
  slug(e, t = {}) {
    const s = this.serialize(e);
    return this.getNextSafeSlug(s, t.dryrun);
  }
}
class se {
  constructor(e) {
    (this.options = e || oe),
      (this.options.renderer = this.options.renderer || new Ee()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.textRenderer = new yt()),
      (this.slugger = new Ne());
  }
  static parse(e, t) {
    return new se(t).parse(e);
  }
  static parseInline(e, t) {
    return new se(t).parseInline(e);
  }
  parse(e, t = !0) {
    let s = "",
      n,
      l,
      r,
      a,
      o,
      c,
      u,
      p,
      _,
      $,
      R,
      z,
      T,
      N,
      q,
      w,
      M,
      V,
      X;
    const de = e.length;
    for (n = 0; n < de; n++) {
      if (
        (($ = e[n]),
        this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[$.type] &&
          ((X = this.options.extensions.renderers[$.type].call(
            { parser: this },
            $
          )),
          X !== !1 ||
            ![
              "space",
              "hr",
              "heading",
              "code",
              "table",
              "blockquote",
              "list",
              "html",
              "paragraph",
              "text",
            ].includes($.type)))
      ) {
        s += X || "";
        continue;
      }
      switch ($.type) {
        case "space":
          continue;
        case "hr": {
          s += this.renderer.hr();
          continue;
        }
        case "heading": {
          s += this.renderer.heading(
            this.parseInline($.tokens),
            $.depth,
            vt(this.parseInline($.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case "code": {
          s += this.renderer.code($.text, $.lang, $.escaped);
          continue;
        }
        case "table": {
          for (p = "", u = "", a = $.header.length, l = 0; l < a; l++)
            u += this.renderer.tablecell(this.parseInline($.header[l].tokens), {
              header: !0,
              align: $.align[l],
            });
          for (
            p += this.renderer.tablerow(u), _ = "", a = $.rows.length, l = 0;
            l < a;
            l++
          ) {
            for (c = $.rows[l], u = "", o = c.length, r = 0; r < o; r++)
              u += this.renderer.tablecell(this.parseInline(c[r].tokens), {
                header: !1,
                align: $.align[r],
              });
            _ += this.renderer.tablerow(u);
          }
          s += this.renderer.table(p, _);
          continue;
        }
        case "blockquote": {
          (_ = this.parse($.tokens)), (s += this.renderer.blockquote(_));
          continue;
        }
        case "list": {
          for (
            R = $.ordered,
              z = $.start,
              T = $.loose,
              a = $.items.length,
              _ = "",
              l = 0;
            l < a;
            l++
          )
            (q = $.items[l]),
              (w = q.checked),
              (M = q.task),
              (N = ""),
              q.task &&
                ((V = this.renderer.checkbox(w)),
                T
                  ? q.tokens.length > 0 && q.tokens[0].type === "paragraph"
                    ? ((q.tokens[0].text = V + " " + q.tokens[0].text),
                      q.tokens[0].tokens &&
                        q.tokens[0].tokens.length > 0 &&
                        q.tokens[0].tokens[0].type === "text" &&
                        (q.tokens[0].tokens[0].text =
                          V + " " + q.tokens[0].tokens[0].text))
                    : q.tokens.unshift({ type: "text", text: V })
                  : (N += V)),
              (N += this.parse(q.tokens, T)),
              (_ += this.renderer.listitem(N, M, w));
          s += this.renderer.list(_, R, z);
          continue;
        }
        case "html": {
          s += this.renderer.html($.text);
          continue;
        }
        case "paragraph": {
          s += this.renderer.paragraph(this.parseInline($.tokens));
          continue;
        }
        case "text": {
          for (
            _ = $.tokens ? this.parseInline($.tokens) : $.text;
            n + 1 < de && e[n + 1].type === "text";

          )
            ($ = e[++n]),
              (_ +=
                `
` + ($.tokens ? this.parseInline($.tokens) : $.text));
          s += t ? this.renderer.paragraph(_) : _;
          continue;
        }
        default: {
          const qe = 'Token with "' + $.type + '" type was not found.';
          if (this.options.silent) {
            console.error(qe);
            return;
          } else throw new Error(qe);
        }
      }
    }
    return s;
  }
  parseInline(e, t) {
    t = t || this.renderer;
    let s = "",
      n,
      l,
      r;
    const a = e.length;
    for (n = 0; n < a; n++) {
      if (
        ((l = e[n]),
        this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[l.type] &&
          ((r = this.options.extensions.renderers[l.type].call(
            { parser: this },
            l
          )),
          r !== !1 ||
            ![
              "escape",
              "html",
              "link",
              "image",
              "strong",
              "em",
              "codespan",
              "br",
              "del",
              "text",
            ].includes(l.type)))
      ) {
        s += r || "";
        continue;
      }
      switch (l.type) {
        case "escape": {
          s += t.text(l.text);
          break;
        }
        case "html": {
          s += t.html(l.text);
          break;
        }
        case "link": {
          s += t.link(l.href, l.title, this.parseInline(l.tokens, t));
          break;
        }
        case "image": {
          s += t.image(l.href, l.title, l.text);
          break;
        }
        case "strong": {
          s += t.strong(this.parseInline(l.tokens, t));
          break;
        }
        case "em": {
          s += t.em(this.parseInline(l.tokens, t));
          break;
        }
        case "codespan": {
          s += t.codespan(l.text);
          break;
        }
        case "br": {
          s += t.br();
          break;
        }
        case "del": {
          s += t.del(this.parseInline(l.tokens, t));
          break;
        }
        case "text": {
          s += t.text(l.text);
          break;
        }
        default: {
          const o = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent) {
            console.error(o);
            return;
          } else throw new Error(o);
        }
      }
    }
    return s;
  }
}
class Se {
  constructor(e) {
    this.options = e || oe;
  }
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
}
De(Se, "passThroughHooks", new Set(["preprocess", "postprocess"]));
function cs(i, e, t) {
  return (s) => {
    if (
      ((s.message += `
Please report this to https://github.com/markedjs/marked.`),
      i)
    ) {
      const n =
        "<p>An error occurred:</p><pre>" + G(s.message + "", !0) + "</pre>";
      if (e) return Promise.resolve(n);
      if (t) {
        t(null, n);
        return;
      }
      return n;
    }
    if (e) return Promise.reject(s);
    if (t) {
      t(s);
      return;
    }
    throw s;
  };
}
function xt(i, e) {
  return (t, s, n) => {
    typeof s == "function" && ((n = s), (s = null));
    const l = { ...s };
    s = { ...C.defaults, ...l };
    const r = cs(s.silent, s.async, n);
    if (typeof t > "u" || t === null)
      return r(new Error("marked(): input parameter is undefined or null"));
    if (typeof t != "string")
      return r(
        new Error(
          "marked(): input parameter is of type " +
            Object.prototype.toString.call(t) +
            ", string expected"
        )
      );
    if ((is(s), s.hooks && (s.hooks.options = s), n)) {
      const a = s.highlight;
      let o;
      try {
        s.hooks && (t = s.hooks.preprocess(t)), (o = i(t, s));
      } catch (p) {
        return r(p);
      }
      const c = function (p) {
        let _;
        if (!p)
          try {
            s.walkTokens && C.walkTokens(o, s.walkTokens),
              (_ = e(o, s)),
              s.hooks && (_ = s.hooks.postprocess(_));
          } catch ($) {
            p = $;
          }
        return (s.highlight = a), p ? r(p) : n(null, _);
      };
      if (!a || a.length < 3 || (delete s.highlight, !o.length)) return c();
      let u = 0;
      C.walkTokens(o, function (p) {
        p.type === "code" &&
          (u++,
          setTimeout(() => {
            a(p.text, p.lang, function (_, $) {
              if (_) return c(_);
              $ != null && $ !== p.text && ((p.text = $), (p.escaped = !0)),
                u--,
                u === 0 && c();
            });
          }, 0));
      }),
        u === 0 && c();
      return;
    }
    if (s.async)
      return Promise.resolve(s.hooks ? s.hooks.preprocess(t) : t)
        .then((a) => i(a, s))
        .then((a) =>
          s.walkTokens
            ? Promise.all(C.walkTokens(a, s.walkTokens)).then(() => a)
            : a
        )
        .then((a) => e(a, s))
        .then((a) => (s.hooks ? s.hooks.postprocess(a) : a))
        .catch(r);
    try {
      s.hooks && (t = s.hooks.preprocess(t));
      const a = i(t, s);
      s.walkTokens && C.walkTokens(a, s.walkTokens);
      let o = e(a, s);
      return s.hooks && (o = s.hooks.postprocess(o)), o;
    } catch (a) {
      return r(a);
    }
  };
}
function C(i, e, t) {
  return xt(te.lex, se.parse)(i, e, t);
}
C.options = C.setOptions = function (i) {
  return (C.defaults = { ...C.defaults, ...i }), Kn(C.defaults), C;
};
C.getDefaults = kt;
C.defaults = oe;
C.use = function (...i) {
  const e = C.defaults.extensions || { renderers: {}, childTokens: {} };
  i.forEach((t) => {
    const s = { ...t };
    if (
      ((s.async = C.defaults.async || s.async || !1),
      t.extensions &&
        (t.extensions.forEach((n) => {
          if (!n.name) throw new Error("extension name required");
          if (n.renderer) {
            const l = e.renderers[n.name];
            l
              ? (e.renderers[n.name] = function (...r) {
                  let a = n.renderer.apply(this, r);
                  return a === !1 && (a = l.apply(this, r)), a;
                })
              : (e.renderers[n.name] = n.renderer);
          }
          if (n.tokenizer) {
            if (!n.level || (n.level !== "block" && n.level !== "inline"))
              throw new Error("extension level must be 'block' or 'inline'");
            e[n.level]
              ? e[n.level].unshift(n.tokenizer)
              : (e[n.level] = [n.tokenizer]),
              n.start &&
                (n.level === "block"
                  ? e.startBlock
                    ? e.startBlock.push(n.start)
                    : (e.startBlock = [n.start])
                  : n.level === "inline" &&
                    (e.startInline
                      ? e.startInline.push(n.start)
                      : (e.startInline = [n.start])));
          }
          n.childTokens && (e.childTokens[n.name] = n.childTokens);
        }),
        (s.extensions = e)),
      t.renderer)
    ) {
      const n = C.defaults.renderer || new Ee();
      for (const l in t.renderer) {
        const r = n[l];
        n[l] = (...a) => {
          let o = t.renderer[l].apply(n, a);
          return o === !1 && (o = r.apply(n, a)), o;
        };
      }
      s.renderer = n;
    }
    if (t.tokenizer) {
      const n = C.defaults.tokenizer || new Le();
      for (const l in t.tokenizer) {
        const r = n[l];
        n[l] = (...a) => {
          let o = t.tokenizer[l].apply(n, a);
          return o === !1 && (o = r.apply(n, a)), o;
        };
      }
      s.tokenizer = n;
    }
    if (t.hooks) {
      const n = C.defaults.hooks || new Se();
      for (const l in t.hooks) {
        const r = n[l];
        Se.passThroughHooks.has(l)
          ? (n[l] = (a) => {
              if (C.defaults.async)
                return Promise.resolve(t.hooks[l].call(n, a)).then((c) =>
                  r.call(n, c)
                );
              const o = t.hooks[l].call(n, a);
              return r.call(n, o);
            })
          : (n[l] = (...a) => {
              let o = t.hooks[l].apply(n, a);
              return o === !1 && (o = r.apply(n, a)), o;
            });
      }
      s.hooks = n;
    }
    if (t.walkTokens) {
      const n = C.defaults.walkTokens;
      s.walkTokens = function (l) {
        let r = [];
        return (
          r.push(t.walkTokens.call(this, l)),
          n && (r = r.concat(n.call(this, l))),
          r
        );
      };
    }
    C.setOptions(s);
  });
};
C.walkTokens = function (i, e) {
  let t = [];
  for (const s of i)
    switch (((t = t.concat(e.call(C, s))), s.type)) {
      case "table": {
        for (const n of s.header) t = t.concat(C.walkTokens(n.tokens, e));
        for (const n of s.rows)
          for (const l of n) t = t.concat(C.walkTokens(l.tokens, e));
        break;
      }
      case "list": {
        t = t.concat(C.walkTokens(s.items, e));
        break;
      }
      default:
        C.defaults.extensions &&
        C.defaults.extensions.childTokens &&
        C.defaults.extensions.childTokens[s.type]
          ? C.defaults.extensions.childTokens[s.type].forEach(function (n) {
              t = t.concat(C.walkTokens(s[n], e));
            })
          : s.tokens && (t = t.concat(C.walkTokens(s.tokens, e)));
    }
  return t;
};
C.parseInline = xt(te.lexInline, se.parseInline);
C.Parser = se;
C.parser = se.parse;
C.Renderer = Ee;
C.TextRenderer = yt;
C.Lexer = te;
C.lexer = te.lex;
C.Tokenizer = Le;
C.Slugger = Ne;
C.Hooks = Se;
C.parse = C;
C.options;
C.setOptions;
C.use;
C.walkTokens;
C.parseInline;
se.parse;
te.lex;
const At = {};
function us(i) {
  let e;
  return {
    c() {
      e = W(i[1]);
    },
    m(t, s) {
      m(t, e, s);
    },
    p(t, s) {
      s & 2 && ee(e, t[1]);
    },
    i: y,
    o: y,
    d(t) {
      t && g(e);
    },
  };
}
function fs(i) {
  let e, t;
  const s = i[5].default,
    n = F(s, i, i[4], null);
  return {
    c() {
      (e = k("h6")), n && n.c(), h(e, "id", i[2]);
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, r) {
      n &&
        n.p &&
        (!t || r & 16) &&
        Q(n, s, l, l[4], t ? Z(s, l[4], r, null) : K(l[4]), null),
        (!t || r & 4) && h(e, "id", l[2]);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function hs(i) {
  let e, t;
  const s = i[5].default,
    n = F(s, i, i[4], null);
  return {
    c() {
      (e = k("h5")), n && n.c(), h(e, "id", i[2]);
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, r) {
      n &&
        n.p &&
        (!t || r & 16) &&
        Q(n, s, l, l[4], t ? Z(s, l[4], r, null) : K(l[4]), null),
        (!t || r & 4) && h(e, "id", l[2]);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function ps(i) {
  let e, t;
  const s = i[5].default,
    n = F(s, i, i[4], null);
  return {
    c() {
      (e = k("h4")), n && n.c(), h(e, "id", i[2]);
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, r) {
      n &&
        n.p &&
        (!t || r & 16) &&
        Q(n, s, l, l[4], t ? Z(s, l[4], r, null) : K(l[4]), null),
        (!t || r & 4) && h(e, "id", l[2]);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function ds(i) {
  let e, t;
  const s = i[5].default,
    n = F(s, i, i[4], null);
  return {
    c() {
      (e = k("h3")), n && n.c(), h(e, "id", i[2]);
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, r) {
      n &&
        n.p &&
        (!t || r & 16) &&
        Q(n, s, l, l[4], t ? Z(s, l[4], r, null) : K(l[4]), null),
        (!t || r & 4) && h(e, "id", l[2]);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function gs(i) {
  let e, t;
  const s = i[5].default,
    n = F(s, i, i[4], null);
  return {
    c() {
      (e = k("h2")), n && n.c(), h(e, "id", i[2]);
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, r) {
      n &&
        n.p &&
        (!t || r & 16) &&
        Q(n, s, l, l[4], t ? Z(s, l[4], r, null) : K(l[4]), null),
        (!t || r & 4) && h(e, "id", l[2]);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function ms(i) {
  let e, t;
  const s = i[5].default,
    n = F(s, i, i[4], null);
  return {
    c() {
      (e = k("h1")), n && n.c(), h(e, "id", i[2]);
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, r) {
      n &&
        n.p &&
        (!t || r & 16) &&
        Q(n, s, l, l[4], t ? Z(s, l[4], r, null) : K(l[4]), null),
        (!t || r & 4) && h(e, "id", l[2]);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function _s(i) {
  let e, t, s, n;
  const l = [ms, gs, ds, ps, hs, fs, us],
    r = [];
  function a(o, c) {
    return o[0] === 1
      ? 0
      : o[0] === 2
      ? 1
      : o[0] === 3
      ? 2
      : o[0] === 4
      ? 3
      : o[0] === 5
      ? 4
      : o[0] === 6
      ? 5
      : 6;
  }
  return (
    (e = a(i)),
    (t = r[e] = l[e](i)),
    {
      c() {
        t.c(), (s = H());
      },
      m(o, c) {
        r[e].m(o, c), m(o, s, c), (n = !0);
      },
      p(o, [c]) {
        let u = e;
        (e = a(o)),
          e === u
            ? r[e].p(o, c)
            : (B(),
              d(r[u], 1, 1, () => {
                r[u] = null;
              }),
              P(),
              (t = r[e]),
              t ? t.p(o, c) : ((t = r[e] = l[e](o)), t.c()),
              f(t, 1),
              t.m(s.parentNode, s));
      },
      i(o) {
        n || (f(t), (n = !0));
      },
      o(o) {
        d(t), (n = !1);
      },
      d(o) {
        r[e].d(o), o && g(s);
      },
    }
  );
}
function $s(i, e, t) {
  let s,
    { $$slots: n = {}, $$scope: l } = e,
    { depth: r } = e,
    { raw: a } = e,
    { text: o } = e;
  const { slug: c, getOptions: u } = qt(At),
    p = u();
  return (
    (i.$$set = (_) => {
      "depth" in _ && t(0, (r = _.depth)),
        "raw" in _ && t(1, (a = _.raw)),
        "text" in _ && t(3, (o = _.text)),
        "$$scope" in _ && t(4, (l = _.$$scope));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 8 &&
        t(2, (s = p.headerIds ? p.headerPrefix + c(o) : void 0));
    }),
    [r, a, s, o, l, n]
  );
}
class ks extends E {
  constructor(e) {
    super(), L(this, e, $s, _s, O, { depth: 0, raw: 1, text: 3 });
  }
}
function bs(i) {
  let e, t;
  const s = i[1].default,
    n = F(s, i, i[0], null);
  return {
    c() {
      (e = k("p")), n && n.c();
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, [r]) {
      n &&
        n.p &&
        (!t || r & 1) &&
        Q(n, s, l, l[0], t ? Z(s, l[0], r, null) : K(l[0]), null);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function ws(i, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return (
    (i.$$set = (l) => {
      "$$scope" in l && t(0, (n = l.$$scope));
    }),
    [n, s]
  );
}
class vs extends E {
  constructor(e) {
    super(), L(this, e, ws, bs, O, {});
  }
}
function ys(i) {
  let e;
  const t = i[3].default,
    s = F(t, i, i[2], null);
  return {
    c() {
      s && s.c();
    },
    m(n, l) {
      s && s.m(n, l), (e = !0);
    },
    p(n, [l]) {
      s &&
        s.p &&
        (!e || l & 4) &&
        Q(s, t, n, n[2], e ? Z(t, n[2], l, null) : K(n[2]), null);
    },
    i(n) {
      e || (f(s, n), (e = !0));
    },
    o(n) {
      d(s, n), (e = !1);
    },
    d(n) {
      s && s.d(n);
    },
  };
}
function xs(i, e, t) {
  let { $$slots: s = {}, $$scope: n } = e,
    { text: l } = e,
    { raw: r } = e;
  return (
    (i.$$set = (a) => {
      "text" in a && t(0, (l = a.text)),
        "raw" in a && t(1, (r = a.raw)),
        "$$scope" in a && t(2, (n = a.$$scope));
    }),
    [l, r, n, s]
  );
}
class As extends E {
  constructor(e) {
    super(), L(this, e, xs, ys, O, { text: 0, raw: 1 });
  }
}
function Ss(i) {
  let e, t;
  return {
    c() {
      (e = k("img")),
        Y(e.src, (t = i[0])) || h(e, "src", t),
        h(e, "title", i[1]),
        h(e, "alt", i[2]);
    },
    m(s, n) {
      m(s, e, n);
    },
    p(s, [n]) {
      n & 1 && !Y(e.src, (t = s[0])) && h(e, "src", t),
        n & 2 && h(e, "title", s[1]),
        n & 4 && h(e, "alt", s[2]);
    },
    i: y,
    o: y,
    d(s) {
      s && g(e);
    },
  };
}
function zs(i, e, t) {
  let { href: s = "" } = e,
    { title: n = void 0 } = e,
    { text: l = "" } = e;
  return (
    (i.$$set = (r) => {
      "href" in r && t(0, (s = r.href)),
        "title" in r && t(1, (n = r.title)),
        "text" in r && t(2, (l = r.text));
    }),
    [s, n, l]
  );
}
class Ts extends E {
  constructor(e) {
    super(), L(this, e, zs, Ss, O, { href: 0, title: 1, text: 2 });
  }
}
function Rs(i) {
  let e, t;
  const s = i[3].default,
    n = F(s, i, i[2], null);
  return {
    c() {
      (e = k("a")), n && n.c(), h(e, "href", i[0]), h(e, "title", i[1]);
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, [r]) {
      n &&
        n.p &&
        (!t || r & 4) &&
        Q(n, s, l, l[2], t ? Z(s, l[2], r, null) : K(l[2]), null),
        (!t || r & 1) && h(e, "href", l[0]),
        (!t || r & 2) && h(e, "title", l[1]);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function Is(i, e, t) {
  let { $$slots: s = {}, $$scope: n } = e,
    { href: l = "" } = e,
    { title: r = void 0 } = e;
  return (
    (i.$$set = (a) => {
      "href" in a && t(0, (l = a.href)),
        "title" in a && t(1, (r = a.title)),
        "$$scope" in a && t(2, (n = a.$$scope));
    }),
    [l, r, n, s]
  );
}
class Cs extends E {
  constructor(e) {
    super(), L(this, e, Is, Rs, O, { href: 0, title: 1 });
  }
}
function Os(i) {
  let e, t;
  const s = i[1].default,
    n = F(s, i, i[0], null);
  return {
    c() {
      (e = k("em")), n && n.c();
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, [r]) {
      n &&
        n.p &&
        (!t || r & 1) &&
        Q(n, s, l, l[0], t ? Z(s, l[0], r, null) : K(l[0]), null);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function Ls(i, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return (
    (i.$$set = (l) => {
      "$$scope" in l && t(0, (n = l.$$scope));
    }),
    [n, s]
  );
}
class Es extends E {
  constructor(e) {
    super(), L(this, e, Ls, Os, O, {});
  }
}
function Ns(i) {
  let e, t;
  const s = i[1].default,
    n = F(s, i, i[0], null);
  return {
    c() {
      (e = k("del")), n && n.c();
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, [r]) {
      n &&
        n.p &&
        (!t || r & 1) &&
        Q(n, s, l, l[0], t ? Z(s, l[0], r, null) : K(l[0]), null);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function qs(i, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return (
    (i.$$set = (l) => {
      "$$scope" in l && t(0, (n = l.$$scope));
    }),
    [n, s]
  );
}
class Ds extends E {
  constructor(e) {
    super(), L(this, e, qs, Ns, O, {});
  }
}
function Ms(i) {
  let e,
    t = i[0].replace(/`/g, "") + "",
    s;
  return {
    c() {
      (e = k("code")), (s = W(t));
    },
    m(n, l) {
      m(n, e, l), b(e, s);
    },
    p(n, [l]) {
      l & 1 && t !== (t = n[0].replace(/`/g, "") + "") && ee(s, t);
    },
    i: y,
    o: y,
    d(n) {
      n && g(e);
    },
  };
}
function Bs(i, e, t) {
  let { raw: s } = e;
  return (
    (i.$$set = (n) => {
      "raw" in n && t(0, (s = n.raw));
    }),
    [s]
  );
}
class Ps extends E {
  constructor(e) {
    super(), L(this, e, Bs, Ms, O, { raw: 0 });
  }
}
function js(i) {
  let e, t;
  const s = i[1].default,
    n = F(s, i, i[0], null);
  return {
    c() {
      (e = k("strong")), n && n.c();
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, [r]) {
      n &&
        n.p &&
        (!t || r & 1) &&
        Q(n, s, l, l[0], t ? Z(s, l[0], r, null) : K(l[0]), null);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function Hs(i, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return (
    (i.$$set = (l) => {
      "$$scope" in l && t(0, (n = l.$$scope));
    }),
    [n, s]
  );
}
class Us extends E {
  constructor(e) {
    super(), L(this, e, Hs, js, O, {});
  }
}
function Fs(i) {
  let e, t;
  const s = i[1].default,
    n = F(s, i, i[0], null);
  return {
    c() {
      (e = k("table")), n && n.c();
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, [r]) {
      n &&
        n.p &&
        (!t || r & 1) &&
        Q(n, s, l, l[0], t ? Z(s, l[0], r, null) : K(l[0]), null);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function Zs(i, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return (
    (i.$$set = (l) => {
      "$$scope" in l && t(0, (n = l.$$scope));
    }),
    [n, s]
  );
}
class Qs extends E {
  constructor(e) {
    super(), L(this, e, Zs, Fs, O, {});
  }
}
function Ks(i) {
  let e, t;
  const s = i[1].default,
    n = F(s, i, i[0], null);
  return {
    c() {
      (e = k("thead")), n && n.c();
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, [r]) {
      n &&
        n.p &&
        (!t || r & 1) &&
        Q(n, s, l, l[0], t ? Z(s, l[0], r, null) : K(l[0]), null);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function Ws(i, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return (
    (i.$$set = (l) => {
      "$$scope" in l && t(0, (n = l.$$scope));
    }),
    [n, s]
  );
}
class Gs extends E {
  constructor(e) {
    super(), L(this, e, Ws, Ks, O, {});
  }
}
function Vs(i) {
  let e, t;
  const s = i[1].default,
    n = F(s, i, i[0], null);
  return {
    c() {
      (e = k("tbody")), n && n.c();
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, [r]) {
      n &&
        n.p &&
        (!t || r & 1) &&
        Q(n, s, l, l[0], t ? Z(s, l[0], r, null) : K(l[0]), null);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function Xs(i, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return (
    (i.$$set = (l) => {
      "$$scope" in l && t(0, (n = l.$$scope));
    }),
    [n, s]
  );
}
class Ys extends E {
  constructor(e) {
    super(), L(this, e, Xs, Vs, O, {});
  }
}
function Js(i) {
  let e, t;
  const s = i[1].default,
    n = F(s, i, i[0], null);
  return {
    c() {
      (e = k("tr")), n && n.c();
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, [r]) {
      n &&
        n.p &&
        (!t || r & 1) &&
        Q(n, s, l, l[0], t ? Z(s, l[0], r, null) : K(l[0]), null);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function el(i, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return (
    (i.$$set = (l) => {
      "$$scope" in l && t(0, (n = l.$$scope));
    }),
    [n, s]
  );
}
class tl extends E {
  constructor(e) {
    super(), L(this, e, el, Js, O, {});
  }
}
function nl(i) {
  let e, t;
  const s = i[3].default,
    n = F(s, i, i[2], null);
  return {
    c() {
      (e = k("td")), n && n.c(), h(e, "align", i[1]);
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, r) {
      n &&
        n.p &&
        (!t || r & 4) &&
        Q(n, s, l, l[2], t ? Z(s, l[2], r, null) : K(l[2]), null),
        (!t || r & 2) && h(e, "align", l[1]);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function sl(i) {
  let e, t;
  const s = i[3].default,
    n = F(s, i, i[2], null);
  return {
    c() {
      (e = k("th")), n && n.c(), h(e, "align", i[1]);
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, r) {
      n &&
        n.p &&
        (!t || r & 4) &&
        Q(n, s, l, l[2], t ? Z(s, l[2], r, null) : K(l[2]), null),
        (!t || r & 2) && h(e, "align", l[1]);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function ll(i) {
  let e, t, s, n;
  const l = [sl, nl],
    r = [];
  function a(o, c) {
    return o[0] ? 0 : 1;
  }
  return (
    (e = a(i)),
    (t = r[e] = l[e](i)),
    {
      c() {
        t.c(), (s = H());
      },
      m(o, c) {
        r[e].m(o, c), m(o, s, c), (n = !0);
      },
      p(o, [c]) {
        let u = e;
        (e = a(o)),
          e === u
            ? r[e].p(o, c)
            : (B(),
              d(r[u], 1, 1, () => {
                r[u] = null;
              }),
              P(),
              (t = r[e]),
              t ? t.p(o, c) : ((t = r[e] = l[e](o)), t.c()),
              f(t, 1),
              t.m(s.parentNode, s));
      },
      i(o) {
        n || (f(t), (n = !0));
      },
      o(o) {
        d(t), (n = !1);
      },
      d(o) {
        r[e].d(o), o && g(s);
      },
    }
  );
}
function rl(i, e, t) {
  let { $$slots: s = {}, $$scope: n } = e,
    { header: l } = e,
    { align: r } = e;
  return (
    (i.$$set = (a) => {
      "header" in a && t(0, (l = a.header)),
        "align" in a && t(1, (r = a.align)),
        "$$scope" in a && t(2, (n = a.$$scope));
    }),
    [l, r, n, s]
  );
}
class il extends E {
  constructor(e) {
    super(), L(this, e, rl, ll, O, { header: 0, align: 1 });
  }
}
function ol(i) {
  let e, t;
  const s = i[3].default,
    n = F(s, i, i[2], null);
  return {
    c() {
      (e = k("ul")), n && n.c();
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, r) {
      n &&
        n.p &&
        (!t || r & 4) &&
        Q(n, s, l, l[2], t ? Z(s, l[2], r, null) : K(l[2]), null);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function al(i) {
  let e, t;
  const s = i[3].default,
    n = F(s, i, i[2], null);
  return {
    c() {
      (e = k("ol")), n && n.c(), h(e, "start", i[1]);
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, r) {
      n &&
        n.p &&
        (!t || r & 4) &&
        Q(n, s, l, l[2], t ? Z(s, l[2], r, null) : K(l[2]), null),
        (!t || r & 2) && h(e, "start", l[1]);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function cl(i) {
  let e, t, s, n;
  const l = [al, ol],
    r = [];
  function a(o, c) {
    return o[0] ? 0 : 1;
  }
  return (
    (e = a(i)),
    (t = r[e] = l[e](i)),
    {
      c() {
        t.c(), (s = H());
      },
      m(o, c) {
        r[e].m(o, c), m(o, s, c), (n = !0);
      },
      p(o, [c]) {
        let u = e;
        (e = a(o)),
          e === u
            ? r[e].p(o, c)
            : (B(),
              d(r[u], 1, 1, () => {
                r[u] = null;
              }),
              P(),
              (t = r[e]),
              t ? t.p(o, c) : ((t = r[e] = l[e](o)), t.c()),
              f(t, 1),
              t.m(s.parentNode, s));
      },
      i(o) {
        n || (f(t), (n = !0));
      },
      o(o) {
        d(t), (n = !1);
      },
      d(o) {
        r[e].d(o), o && g(s);
      },
    }
  );
}
function ul(i, e, t) {
  let { $$slots: s = {}, $$scope: n } = e,
    { ordered: l } = e,
    { start: r } = e;
  return (
    (i.$$set = (a) => {
      "ordered" in a && t(0, (l = a.ordered)),
        "start" in a && t(1, (r = a.start)),
        "$$scope" in a && t(2, (n = a.$$scope));
    }),
    [l, r, n, s]
  );
}
let fl = class extends E {
  constructor(e) {
    super(), L(this, e, ul, cl, O, { ordered: 0, start: 1 });
  }
};
function hl(i) {
  let e, t;
  const s = i[1].default,
    n = F(s, i, i[0], null);
  return {
    c() {
      (e = k("li")), n && n.c();
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, [r]) {
      n &&
        n.p &&
        (!t || r & 1) &&
        Q(n, s, l, l[0], t ? Z(s, l[0], r, null) : K(l[0]), null);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function pl(i, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return (
    (i.$$set = (l) => {
      "$$scope" in l && t(0, (n = l.$$scope));
    }),
    [n, s]
  );
}
class dl extends E {
  constructor(e) {
    super(), L(this, e, pl, hl, O, {});
  }
}
function gl(i) {
  let e;
  return {
    c() {
      e = k("hr");
    },
    m(t, s) {
      m(t, e, s);
    },
    p: y,
    i: y,
    o: y,
    d(t) {
      t && g(e);
    },
  };
}
class ml extends E {
  constructor(e) {
    super(), L(this, e, null, gl, O, {});
  }
}
function _l(i) {
  let e, t;
  return {
    c() {
      (e = new Lt(!1)), (t = H()), (e.a = t);
    },
    m(s, n) {
      e.m(i[0], s, n), m(s, t, n);
    },
    p(s, [n]) {
      n & 1 && e.p(s[0]);
    },
    i: y,
    o: y,
    d(s) {
      s && g(t), s && e.d();
    },
  };
}
function $l(i, e, t) {
  let { text: s } = e;
  return (
    (i.$$set = (n) => {
      "text" in n && t(0, (s = n.text));
    }),
    [s]
  );
}
class kl extends E {
  constructor(e) {
    super(), L(this, e, $l, _l, O, { text: 0 });
  }
}
function bl(i) {
  let e, t;
  const s = i[1].default,
    n = F(s, i, i[0], null);
  return {
    c() {
      (e = k("blockquote")), n && n.c();
    },
    m(l, r) {
      m(l, e, r), n && n.m(e, null), (t = !0);
    },
    p(l, [r]) {
      n &&
        n.p &&
        (!t || r & 1) &&
        Q(n, s, l, l[0], t ? Z(s, l[0], r, null) : K(l[0]), null);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function wl(i, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return (
    (i.$$set = (l) => {
      "$$scope" in l && t(0, (n = l.$$scope));
    }),
    [n, s]
  );
}
class vl extends E {
  constructor(e) {
    super(), L(this, e, wl, bl, O, {});
  }
}
function yl(i) {
  let e, t, s;
  return {
    c() {
      (e = k("pre")), (t = k("code")), (s = W(i[1])), h(e, "class", i[0]);
    },
    m(n, l) {
      m(n, e, l), b(e, t), b(t, s);
    },
    p(n, [l]) {
      l & 2 && ee(s, n[1]), l & 1 && h(e, "class", n[0]);
    },
    i: y,
    o: y,
    d(n) {
      n && g(e);
    },
  };
}
function xl(i, e, t) {
  let { lang: s } = e,
    { text: n } = e;
  return (
    (i.$$set = (l) => {
      "lang" in l && t(0, (s = l.lang)), "text" in l && t(1, (n = l.text));
    }),
    [s, n]
  );
}
class Al extends E {
  constructor(e) {
    super(), L(this, e, xl, yl, O, { lang: 0, text: 1 });
  }
}
function Sl(i) {
  let e, t;
  const s = i[1].default,
    n = F(s, i, i[0], null);
  return {
    c() {
      (e = k("br")), n && n.c();
    },
    m(l, r) {
      m(l, e, r), n && n.m(l, r), (t = !0);
    },
    p(l, [r]) {
      n &&
        n.p &&
        (!t || r & 1) &&
        Q(n, s, l, l[0], t ? Z(s, l[0], r, null) : K(l[0]), null);
    },
    i(l) {
      t || (f(n, l), (t = !0));
    },
    o(l) {
      d(n, l), (t = !1);
    },
    d(l) {
      l && g(e), n && n.d(l);
    },
  };
}
function zl(i, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return (
    (i.$$set = (l) => {
      "$$scope" in l && t(0, (n = l.$$scope));
    }),
    [n, s]
  );
}
class Tl extends E {
  constructor(e) {
    super(), L(this, e, zl, Sl, O, {});
  }
}
const Rl = {
    heading: ks,
    paragraph: vs,
    text: As,
    image: Ts,
    link: Cs,
    em: Es,
    strong: Us,
    codespan: Ps,
    del: Ds,
    table: Qs,
    tablehead: Gs,
    tablebody: Ys,
    tablerow: tl,
    tablecell: il,
    list: fl,
    orderedlistitem: null,
    unorderedlistitem: null,
    listitem: dl,
    hr: ml,
    html: kl,
    blockquote: vl,
    code: Al,
    br: Tl,
  },
  Il = {
    baseUrl: null,
    breaks: !1,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartLists: !1,
    smartypants: !1,
    tokenizer: null,
    xhtml: !1,
  };
function Cl(i) {
  let e, t;
  return (
    (e = new ie({ props: { tokens: i[0], renderers: i[1] } })),
    {
      c() {
        S(e.$$.fragment);
      },
      m(s, n) {
        x(e, s, n), (t = !0);
      },
      p(s, [n]) {
        const l = {};
        n & 1 && (l.tokens = s[0]), n & 2 && (l.renderers = s[1]), e.$set(l);
      },
      i(s) {
        t || (f(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        d(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        A(e, s);
      },
    }
  );
}
function Ol(i, e, t) {
  let s,
    n,
    l,
    r,
    { source: a = [] } = e,
    { renderers: o = {} } = e,
    { options: c = {} } = e,
    { isInline: u = !1 } = e;
  const p = Et();
  let _, $, R;
  return (
    Nt(At, { slug: (z) => (n ? n.slug(z) : ""), getOptions: () => l }),
    ke(() => {
      t(7, (R = !0));
    }),
    (i.$$set = (z) => {
      "source" in z && t(2, (a = z.source)),
        "renderers" in z && t(3, (o = z.renderers)),
        "options" in z && t(4, (c = z.options)),
        "isInline" in z && t(5, (u = z.isInline));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 4 && t(8, (s = Array.isArray(a))),
        i.$$.dirty & 4 && (n = a ? new Ne() : void 0),
        i.$$.dirty & 16 && t(9, (l = { ...Il, ...c })),
        i.$$.dirty & 869 &&
          (s
            ? t(0, (_ = a))
            : (t(6, ($ = new te(l))),
              t(0, (_ = u ? $.inlineTokens(a) : $.lex(a))),
              p("parsed", { tokens: _ }))),
        i.$$.dirty & 8 && t(1, (r = { ...Rl, ...o })),
        i.$$.dirty & 385 && R && !s && p("parsed", { tokens: _ });
    }),
    [_, r, a, o, c, u, $, R, s, l]
  );
}
class Ll extends E {
  constructor(e) {
    super(),
      L(this, e, Ol, Cl, O, {
        source: 2,
        renderers: 3,
        options: 4,
        isInline: 5,
      });
  }
}
function El(i) {
  let e, t, s, n, l;
  return {
    c() {
      (e = k("button")),
        (t = W("download")),
        h(e, "class", "material-icons-round svelte-1c49017"),
        h(e, "title", (s = "Download " + i[0].tag_name));
    },
    m(r, a) {
      m(r, e, a), b(e, t), n || ((l = $e(e, "click", i[1])), (n = !0));
    },
    p(r, [a]) {
      a & 1 && s !== (s = "Download " + r[0].tag_name) && h(e, "title", s);
    },
    i: y,
    o: y,
    d(r) {
      r && g(e), (n = !1), l();
    },
  };
}
function Nl(i, e, t) {
  let { release: s } = e;
  function n() {
    window.open(s.assets[0].browser_download_url);
  }
  return (
    (i.$$set = (l) => {
      "release" in l && t(0, (s = l.release));
    }),
    [s, n]
  );
}
class ql extends E {
  constructor(e) {
    super(), L(this, e, Nl, El, O, { release: 0 });
  }
}
function Dl(i) {
  let e, t, s, n, l;
  return {
    c() {
      (e = k("button")),
        (t = W("launch")),
        h(e, "class", "material-icons-round svelte-1c49017"),
        h(e, "title", (s = "Go to releases page of " + i[0].tag_name));
    },
    m(r, a) {
      m(r, e, a), b(e, t), n || ((l = $e(e, "click", i[1])), (n = !0));
    },
    p(r, [a]) {
      a & 1 &&
        s !== (s = "Go to releases page of " + r[0].tag_name) &&
        h(e, "title", s);
    },
    i: y,
    o: y,
    d(r) {
      r && g(e), (n = !1), l();
    },
  };
}
function Ml(i, e, t) {
  let { release: s } = e;
  function n() {
    window.open(s.html_url, "_blank");
  }
  return (
    (i.$$set = (l) => {
      "release" in l && t(0, (s = l.release));
    }),
    [s, n]
  );
}
class Bl extends E {
  constructor(e) {
    super(), L(this, e, Ml, Dl, O, { release: 0 });
  }
}
function Pl(i) {
  let e,
    t = i[0].prerelease ? "Pre-release" : "Stable",
    s;
  return {
    c() {
      (e = k("div")),
        (s = W(t)),
        h(e, "class", "release-status svelte-1119f8s"),
        fe(e, "pre", i[0].prerelease);
    },
    m(n, l) {
      m(n, e, l), b(e, s);
    },
    p(n, [l]) {
      l & 1 &&
        t !== (t = n[0].prerelease ? "Pre-release" : "Stable") &&
        ee(s, t),
        l & 1 && fe(e, "pre", n[0].prerelease);
    },
    i: y,
    o: y,
    d(n) {
      n && g(e);
    },
  };
}
function jl(i, e, t) {
  let { release: s } = e;
  return (
    (i.$$set = (n) => {
      "release" in n && t(0, (s = n.release));
    }),
    [s]
  );
}
class Hl extends E {
  constructor(e) {
    super(), L(this, e, jl, Pl, O, { release: 0 });
  }
}
function ut(i) {
  let e,
    t,
    s,
    n = i[0].tag_name + "",
    l,
    r,
    a,
    o,
    c,
    u,
    p,
    _,
    $,
    R,
    z;
  return (
    (o = new Bl({ props: { release: i[0] } })),
    (u = new ql({ props: { release: i[0] } })),
    (_ = new Hl({ props: { release: i[0] } })),
    (R = new Ll({ props: { source: i[0].body } })),
    {
      c() {
        (e = k("div")),
          (t = k("h1")),
          (s = k("span")),
          (l = W(n)),
          (r = D()),
          (a = k("div")),
          S(o.$$.fragment),
          (c = D()),
          S(u.$$.fragment),
          (p = D()),
          S(_.$$.fragment),
          ($ = D()),
          S(R.$$.fragment),
          h(s, "class", "svelte-1b51can"),
          h(a, "class", "items svelte-1b51can"),
          h(t, "class", "title svelte-1b51can"),
          h(e, "class", "release svelte-1b51can");
      },
      m(T, N) {
        m(T, e, N),
          b(e, t),
          b(t, s),
          b(s, l),
          b(t, r),
          b(t, a),
          x(o, a, null),
          b(a, c),
          x(u, a, null),
          b(a, p),
          x(_, a, null),
          b(e, $),
          x(R, e, null),
          (z = !0);
      },
      p(T, N) {
        (!z || N & 1) && n !== (n = T[0].tag_name + "") && ee(l, n);
        const q = {};
        N & 1 && (q.release = T[0]), o.$set(q);
        const w = {};
        N & 1 && (w.release = T[0]), u.$set(w);
        const M = {};
        N & 1 && (M.release = T[0]), _.$set(M);
        const V = {};
        N & 1 && (V.source = T[0].body), R.$set(V);
      },
      i(T) {
        z ||
          (f(o.$$.fragment, T),
          f(u.$$.fragment, T),
          f(_.$$.fragment, T),
          f(R.$$.fragment, T),
          (z = !0));
      },
      o(T) {
        d(o.$$.fragment, T),
          d(u.$$.fragment, T),
          d(_.$$.fragment, T),
          d(R.$$.fragment, T),
          (z = !1);
      },
      d(T) {
        T && g(e), A(o), A(u), A(_), A(R);
      },
    }
  );
}
function Ul(i) {
  let e,
    t,
    s = i[0] && ut(i);
  return {
    c() {
      s && s.c(), (e = H());
    },
    m(n, l) {
      s && s.m(n, l), m(n, e, l), (t = !0);
    },
    p(n, [l]) {
      n[0]
        ? s
          ? (s.p(n, l), l & 1 && f(s, 1))
          : ((s = ut(n)), s.c(), f(s, 1), s.m(e.parentNode, e))
        : s &&
          (B(),
          d(s, 1, 1, () => {
            s = null;
          }),
          P());
    },
    i(n) {
      t || (f(s), (t = !0));
    },
    o(n) {
      d(s), (t = !1);
    },
    d(n) {
      s && s.d(n), n && g(e);
    },
  };
}
function Fl(i, e, t) {
  let { release: s } = e;
  return (
    (i.$$set = (n) => {
      "release" in n && t(0, (s = n.release));
    }),
    [s]
  );
}
class Zl extends E {
  constructor(e) {
    super(), L(this, e, Fl, Ul, O, { release: 0 });
  }
}
function ft(i, e, t) {
  const s = i.slice();
  return (s[1] = e[t]), s;
}
function Ql(i) {
  let e;
  return {
    c() {
      (e = k("div")),
        (e.innerHTML = `<span class="material-icons-round svelte-91nk36">error</span> 
      <p class="svelte-91nk36">Couldn&#39;t get the releases! You may be rate limited by GitHub. To see the
        logs, please visit the releases page.</p> 
      <a href="https://github.com/IzK-ArcOS/ArcOS-Frontend/releases" class="svelte-91nk36">Go to releases</a>`),
        h(e, "class", "fail svelte-91nk36");
    },
    m(t, s) {
      m(t, e, s);
    },
    p: y,
    i: y,
    o: y,
    d(t) {
      t && g(e);
    },
  };
}
function Kl(i) {
  let e,
    t,
    s = i[0],
    n = [];
  for (let r = 0; r < s.length; r += 1) n[r] = ht(ft(i, s, r));
  const l = (r) =>
    d(n[r], 1, 1, () => {
      n[r] = null;
    });
  return {
    c() {
      for (let r = 0; r < n.length; r += 1) n[r].c();
      e = H();
    },
    m(r, a) {
      for (let o = 0; o < n.length; o += 1) n[o] && n[o].m(r, a);
      m(r, e, a), (t = !0);
    },
    p(r, a) {
      if (a & 1) {
        s = r[0];
        let o;
        for (o = 0; o < s.length; o += 1) {
          const c = ft(r, s, o);
          n[o]
            ? (n[o].p(c, a), f(n[o], 1))
            : ((n[o] = ht(c)), n[o].c(), f(n[o], 1), n[o].m(e.parentNode, e));
        }
        for (B(), o = s.length; o < n.length; o += 1) l(o);
        P();
      }
    },
    i(r) {
      if (!t) {
        for (let a = 0; a < s.length; a += 1) f(n[a]);
        t = !0;
      }
    },
    o(r) {
      n = n.filter(Boolean);
      for (let a = 0; a < n.length; a += 1) d(n[a]);
      t = !1;
    },
    d(r) {
      ne(n, r), r && g(e);
    },
  };
}
function ht(i) {
  let e, t;
  return (
    (e = new Zl({ props: { release: i[1] } })),
    {
      c() {
        S(e.$$.fragment);
      },
      m(s, n) {
        x(e, s, n), (t = !0);
      },
      p(s, n) {
        const l = {};
        n & 1 && (l.release = s[1]), e.$set(l);
      },
      i(s) {
        t || (f(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        d(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        A(e, s);
      },
    }
  );
}
function Wl(i) {
  let e, t, s, n;
  const l = [Kl, Ql],
    r = [];
  function a(o, c) {
    return o[0] && o[0].length ? 0 : 1;
  }
  return (
    (t = a(i)),
    (s = r[t] = l[t](i)),
    {
      c() {
        (e = k("div")), s.c(), h(e, "class", "list svelte-91nk36");
      },
      m(o, c) {
        m(o, e, c), r[t].m(e, null), (n = !0);
      },
      p(o, [c]) {
        let u = t;
        (t = a(o)),
          t === u
            ? r[t].p(o, c)
            : (B(),
              d(r[u], 1, 1, () => {
                r[u] = null;
              }),
              P(),
              (s = r[t]),
              s ? s.p(o, c) : ((s = r[t] = l[t](o)), s.c()),
              f(s, 1),
              s.m(e, null));
      },
      i(o) {
        n || (f(s), (n = !0));
      },
      o(o) {
        d(s), (n = !1);
      },
      d(o) {
        o && g(e), r[t].d();
      },
    }
  );
}
function Gl(i, e, t) {
  let s = [];
  return (
    ke(async () => {
      t(0, (s = await $t()));
    }),
    [s]
  );
}
class Vl extends E {
  constructor(e) {
    super(), L(this, e, Gl, Wl, O, {});
  }
}
function Xl(i) {
  let e, t, s, n, l, r, a, o;
  return (
    (a = new Vl({})),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (s = k("h1")),
          (s.textContent = "Changelog"),
          (n = D()),
          (l = k("h3")),
          (l.textContent = "What's happening?"),
          (r = D()),
          S(a.$$.fragment),
          h(s, "class", "header svelte-kffjkx"),
          h(l, "class", "subheader svelte-kffjkx"),
          h(e, "class", "center svelte-kffjkx");
      },
      m(c, u) {
        m(c, e, u),
          b(e, t),
          b(t, s),
          b(t, n),
          b(t, l),
          b(t, r),
          x(a, t, null),
          (o = !0);
      },
      p: y,
      i(c) {
        o || (f(a.$$.fragment, c), (o = !0));
      },
      o(c) {
        d(a.$$.fragment, c), (o = !1);
      },
      d(c) {
        c && g(e), A(a);
      },
    }
  );
}
function Yl(i) {
  let e, t;
  return (
    (e = new re({
      props: {
        height: 480,
        id: "changelog",
        $$slots: { default: [Xl] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        S(e.$$.fragment);
      },
      m(s, n) {
        x(e, s, n), (t = !0);
      },
      p(s, [n]) {
        const l = {};
        n & 1 && (l.$$scope = { dirty: n, ctx: s }), e.$set(l);
      },
      i(s) {
        t || (f(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        d(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        A(e, s);
      },
    }
  );
}
class Jl extends E {
  constructor(e) {
    super(), L(this, e, null, Yl, O, {});
  }
}
const er =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAArCAYAAAAtxEsrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASaSURBVGhD3ZpfiBVVHMf3bruZ/61M2byYbm4bFUIGllFP0fYgKQb+Q5KM0B6CSOkhfNEUwahMDYweQqOHoh4iIhTfTAo0IhL/JWFSWuq6tsLdVa+6fb5nfrt6787MPWd0Y2c/8OGcmTl/7vEc5/yZrbsZenp6RuEMfBu/xVO4zB4HQ943rYyvcBU+ibfb4/8HKhyJy/Bz1I+p5jCOsuTeKA+eUQFVnMDPcCHebcm9KViYCgUPI3gaX8Pn8A5M41XcifpBk7AJx6HyXcOLeA7/xvN4Gl/A9zCNMn6BHxcKhe/dnZuFxi3CAxhCN5ajqBdXUXlC2Idt9jMTSe1BCphI8CtOcDcGHx3YQm8qjKXewiQ+xcHaOHEXro+i8ST2IL23gEDjPQ+00Yu7LV5BbANpXAPBUWx2NwY/P9PAxyxeQdIQfR3z0jihufhli1fQrwdJOJbgEN7rbuSHk9hKT5aiy4i4HnwR89Y4ofl2dhS9TkUP0nvDCY6hEueRg/TgIxZ3VPfg85jXxomH6SSttPqobqCWYnlnlYWOviFKy1sJ9HKpNfkPdi7ggwxVrXMrGjMX8944MQaXRNHKBr1i4VBgnoXREGV4PkRwUPEM9OBx1DykFdAM1PYqCxpeKktbKE1VD2AWtCVrYpiecVc0cAVm4RA+5QoxuJ6AW/QwkG042opxcP0sntbDDLxkxbiCdEQQyp94nxXRD5595FL5sday9YNnU/AflyqMTb0F1OMxdyuMRa6ABHg+DNtdynT+QA3tRHi+0qUM43Bv5ha85m75o96r+f+MNO+41Omss+SJkGYcxp3XpFHCJr1F78fYbVMKv/Ef+JLF0zhgYSJdXV37LZoIdf1L8Fd05c0InKQGxu6jatBlYS26LUyko6NDb04fKnYJnsxUA7OsPdXrPkyxMJFisVgzjaHzoVCa1UDfCm5kKuN7msXTeMbCNHRcmAp1PUrQEl0FMVGZj2AWvrRCYuH5rChZTXRkqAYkwvPdLmUg5XJ5jzJnnUjFauz3iufedAx562nBEHtEwv31LkU2jhRoZWdDQ4MWqFnZi++illjaMGt+XI56i4XQiVvxO9Rbczq+gY9jVtoLtFJvRP2woUi3XjKhc2CeKKiBWnkPVa6qgT4rkrzihqjvqiSPtKuBiV9mUngfN6LedgNNO6quLe4qAGaIk/WlUukT4u6AxhN9uPwF16D2g0tRHz6y/EMloTp2oT6Haym5AfUZ7wr6craxsfFDF2OqaMWfNDMGoD2kPmW7iZ5QW5rZqC3Sj3gRfbmAyrMZ29B9qiYcg6pD27MQdqFbu954bKiP/drmr8bJuufJKZzPluaH6DKC8lS2zlSKeCfqOKL3Dwouoz5jayehs6AT5NfZTh/kf4JAk77y+qKR+BZl7YguY6DgIm7FK+jD73jL51LKvAd9l3uXcBPq7wD8IPFk3I61htpCy3LLoeylURWJdOJG1CjJBpmn4QcY9ycj31iyAYHyda6z09VUyXHcgNkbVg2FNeJi/Bp13nEeB/xDDXU0o3pKLyLVPQdvs8cDAxVow5tlA5oJ6tLecrxdBlBX9x/hGqAfX/S/rwAAAABJRU5ErkJggg==",
  tr = "./assets/github-60d03f0f.png";
function nr(i) {
  let e, t, s, n, l, r, a, o, c, u, p, _, $, R, z, T;
  return {
    c() {
      (e = k("div")),
        (t = k("div")),
        (s = k("h1")),
        (s.textContent = "Contact"),
        (n = D()),
        (l = k("h3")),
        (l.textContent = "Want to get in touch?"),
        (r = D()),
        (a = k("div")),
        (o = k("a")),
        (c = k("img")),
        (p = D()),
        (_ = k("a")),
        ($ = k("img")),
        (z = D()),
        (T = k("a")),
        (T.innerHTML =
          '<span class="material-icons-round svelte-e4vll9">email</span>'),
        h(s, "class", "header svelte-e4vll9"),
        h(l, "class", "subheader svelte-e4vll9"),
        Y(c.src, (u = er)) || h(c, "src", u),
        h(c, "alt", ""),
        h(c, "class", "svelte-e4vll9"),
        h(o, "class", "place discord svelte-e4vll9"),
        h(o, "title", "Join our Discord server"),
        h(o, "href", "https://discord.gg/ARjRM6uNqf"),
        Y($.src, (R = tr)) || h($, "src", R),
        h($, "alt", ""),
        h($, "class", "svelte-e4vll9"),
        h(_, "class", "place svelte-e4vll9"),
        h(_, "title", "Go to our GitHub"),
        h(_, "href", "https://github.com/IzK-ArcOS"),
        h(T, "class", "place svelte-e4vll9"),
        h(T, "title", "Send us an E-mail"),
        h(T, "href", "mailto:izaak.kuipers@gmail.com"),
        h(a, "class", "places svelte-e4vll9"),
        h(e, "class", "center svelte-e4vll9");
    },
    m(N, q) {
      m(N, e, q),
        b(e, t),
        b(t, s),
        b(t, n),
        b(t, l),
        b(t, r),
        b(t, a),
        b(a, o),
        b(o, c),
        b(a, p),
        b(a, _),
        b(_, $),
        b(a, z),
        b(a, T);
    },
    p: y,
    d(N) {
      N && g(e);
    },
  };
}
function sr(i) {
  let e, t;
  return (
    (e = new re({
      props: {
        height: 230,
        id: "contact",
        $$slots: { default: [nr] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        S(e.$$.fragment);
      },
      m(s, n) {
        x(e, s, n), (t = !0);
      },
      p(s, [n]) {
        const l = {};
        n & 1 && (l.$$scope = { dirty: n, ctx: s }), e.$set(l);
      },
      i(s) {
        t || (f(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        d(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        A(e, s);
      },
    }
  );
}
class lr extends E {
  constructor(e) {
    super(), L(this, e, null, sr, O, {});
  }
}
function rr(i) {
  let e;
  return {
    c() {
      (e = k("footer")),
        (e.innerHTML = `<p class="copyright svelte-13a688j">ArcOS is licensed under <a href="https://www.gnu.org/licenses/gpl-3.0.txt" class="svelte-13a688j">GPLv3</a>.<br/>
    © The ArcOS Team. All rights belong to their respective authors.</p>`),
        h(e, "class", "svelte-13a688j");
    },
    m(t, s) {
      m(t, e, s);
    },
    p: y,
    i: y,
    o: y,
    d(t) {
      t && g(e);
    },
  };
}
class ir extends E {
  constructor(e) {
    super(), L(this, e, null, rr, O, {});
  }
}
function or(i) {
  let e;
  return {
    c() {
      (e = k("div")),
        (e.innerHTML = `<div><h1 class="header svelte-1qrd1hr">About</h1> 
      <h3 class="subheader svelte-1qrd1hr">What even is ArcOS?</h3> 
      <p class="context svelte-1qrd1hr">ArcOS is an Operating System Environment built using web technologies.
        With ArcOS we aim to create the best OS experience you can get using web
        development. With over 10 repositories and more lines of code than I can
        count, ArcOS is the biggest project I have ever taken on, and there are
        few things quite like it.
        <br/> 
        <br/>
        I often tell people; &quot;Just like Windows used to run on top of MS-DOS, ArcOS
        runs on top of Windows&quot;</p> 
      <a href="https://github.com/IzK-ArcOS" class="github svelte-1qrd1hr">Visit our GitHub</a></div>`),
        h(e, "class", "center svelte-1qrd1hr");
    },
    m(t, s) {
      m(t, e, s);
    },
    p: y,
    d(t) {
      t && g(e);
    },
  };
}
function ar(i) {
  let e, t;
  return (
    (e = new re({
      props: { id: "about", $$slots: { default: [or] }, $$scope: { ctx: i } },
    })),
    {
      c() {
        S(e.$$.fragment);
      },
      m(s, n) {
        x(e, s, n), (t = !0);
      },
      p(s, [n]) {
        const l = {};
        n & 1 && (l.$$scope = { dirty: n, ctx: s }), e.$set(l);
      },
      i(s) {
        t || (f(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        d(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        A(e, s);
      },
    }
  );
}
class cr extends E {
  constructor(e) {
    super(), L(this, e, null, ar, O, {});
  }
}
const ur = "./assets/customization-a1da20a9.png";
function fr(i) {
  let e, t, s, n, l, r;
  return {
    c() {
      (e = k("div")),
        (t = k("div")),
        (s = k("img")),
        (l = D()),
        (r = k("div")),
        (r.innerHTML = `<h1 class="header">Customization</h1> 
    <p>ArcOS is designed to have lots of customization. From the accent colors to
      how your titlebars look, pretty much everything can be changed one way or
      another.</p>`),
        Y(s.src, (n = ur)) || h(s, "src", n),
        h(s, "alt", "Customization"),
        h(t, "class", "image"),
        h(r, "class", "info"),
        h(e, "class", "feature");
    },
    m(a, o) {
      m(a, e, o), b(e, t), b(t, s), b(e, l), b(e, r);
    },
    p: y,
    i: y,
    o: y,
    d(a) {
      a && g(e);
    },
  };
}
class hr extends E {
  constructor(e) {
    super(), L(this, e, null, fr, O, {});
  }
}
const pr = "./assets/filesystem-6d9cb65c.png";
function dr(i) {
  let e, t, s, n, l, r;
  return {
    c() {
      (e = k("div")),
        (t = k("div")),
        (s = k("img")),
        (l = D()),
        (r = k("div")),
        (r.innerHTML = `<h1 class="header">Filesystem</h1> 
    <p>Easily upload, create, store and manage files and folders in ArcOS with
      its easy-to-use File Manager application. Need to quickly store a file?
      ArcOS can do just that.</p>`),
        Y(s.src, (n = pr)) || h(s, "src", n),
        h(s, "alt", "Filesystem Integration"),
        h(t, "class", "image"),
        h(r, "class", "info"),
        h(e, "class", "feature");
    },
    m(a, o) {
      m(a, e, o), b(e, t), b(t, s), b(e, l), b(e, r);
    },
    p: y,
    i: y,
    o: y,
    d(a) {
      a && g(e);
    },
  };
}
class gr extends E {
  constructor(e) {
    super(), L(this, e, null, dr, O, {});
  }
}
const mr = "./assets/messaging-4d3be487.png";
function _r(i) {
  let e, t, s, n, l, r;
  return {
    c() {
      (e = k("div")),
        (t = k("div")),
        (s = k("img")),
        (l = D()),
        (r = k("div")),
        (r.innerHTML = `<h1 class="header">Messaging</h1> 
    <p>With each ArcAPI having its own userbase you can message others on your
      server to chat and ask questions. Just open the Messaging app and punch in
      a message!</p>`),
        Y(s.src, (n = mr)) || h(s, "src", n),
        h(s, "alt", "Messaging"),
        h(t, "class", "image"),
        h(r, "class", "info"),
        h(e, "class", "feature");
    },
    m(a, o) {
      m(a, e, o), b(e, t), b(t, s), b(e, l), b(e, r);
    },
    p: y,
    i: y,
    o: y,
    d(a) {
      a && g(e);
    },
  };
}
class $r extends E {
  constructor(e) {
    super(), L(this, e, null, _r, O, {});
  }
}
function kr(i) {
  let e, t, s, n, l, r, a, o;
  return (
    (s = new hr({})),
    (l = new $r({})),
    (a = new gr({})),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          S(s.$$.fragment),
          (n = D()),
          S(l.$$.fragment),
          (r = D()),
          S(a.$$.fragment),
          h(e, "class", "center");
      },
      m(c, u) {
        m(c, e, u),
          b(e, t),
          x(s, t, null),
          b(t, n),
          x(l, t, null),
          b(t, r),
          x(a, t, null),
          (o = !0);
      },
      p: y,
      i(c) {
        o ||
          (f(s.$$.fragment, c),
          f(l.$$.fragment, c),
          f(a.$$.fragment, c),
          (o = !0));
      },
      o(c) {
        d(s.$$.fragment, c), d(l.$$.fragment, c), d(a.$$.fragment, c), (o = !1);
      },
      d(c) {
        c && g(e), A(s), A(l), A(a);
      },
    }
  );
}
function br(i) {
  let e, t;
  return (
    (e = new re({
      props: {
        height: 800,
        id: "features",
        $$slots: { default: [kr] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        S(e.$$.fragment);
      },
      m(s, n) {
        x(e, s, n), (t = !0);
      },
      p(s, [n]) {
        const l = {};
        n & 1 && (l.$$scope = { dirty: n, ctx: s }), e.$set(l);
      },
      i(s) {
        t || (f(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        d(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        A(e, s);
      },
    }
  );
}
class wr extends E {
  constructor(e) {
    super(), L(this, e, null, br, O, {});
  }
}
function vr(i) {
  let e;
  return {
    c() {
      (e = k("div")),
        (e.innerHTML = `<ul class="svelte-118sir9"><li class="svelte-118sir9">ArcOS cannot be used as a primary operating system. An attempt to do so
        is discouraged.</li> 
      <li class="svelte-118sir9">This is not an actual operating system. It is an environment that runs
        on top of your already existing OS, built using web technologies. It
        isn&#39;t possible to install already existing applications from third
        parties. This functionality may be implemented in the distant future.</li> 
      <li class="svelte-118sir9">All assets in ArcOS, including those created by the team, belong to
        their respective owners. Reuse without credit is not permitted.</li> 
      <li class="svelte-118sir9">The ArcOS team is not responsible for loss of data when using ArcAPI. Do
        not store sensitive info on the File System. ArcAPI passwords are
        encrypted using Argon2.</li></ul>`);
    },
    m(t, s) {
      m(t, e, s);
    },
    p: y,
    d(t) {
      t && g(e);
    },
  };
}
function yr(i) {
  let e, t;
  return (
    (e = new re({
      props: {
        id: "disclaimers",
        height: 100,
        $$slots: { default: [vr] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        S(e.$$.fragment);
      },
      m(s, n) {
        x(e, s, n), (t = !0);
      },
      p(s, [n]) {
        const l = {};
        n & 1 && (l.$$scope = { dirty: n, ctx: s }), e.$set(l);
      },
      i(s) {
        t || (f(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        d(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        A(e, s);
      },
    }
  );
}
class xr extends E {
  constructor(e) {
    super(), L(this, e, null, yr, O, {});
  }
}
function Ar(i) {
  let e, t, s, n, l, r, a, o, c, u, p, _, $, R, z, T, N, q;
  return (
    (e = new ln({})),
    (s = new an({})),
    (l = new cr({})),
    (a = new wr({})),
    (c = new vn({})),
    (p = new Jl({})),
    ($ = new lr({})),
    (z = new xr({})),
    (N = new ir({})),
    {
      c() {
        S(e.$$.fragment),
          (t = D()),
          S(s.$$.fragment),
          (n = D()),
          S(l.$$.fragment),
          (r = D()),
          S(a.$$.fragment),
          (o = D()),
          S(c.$$.fragment),
          (u = D()),
          S(p.$$.fragment),
          (_ = D()),
          S($.$$.fragment),
          (R = D()),
          S(z.$$.fragment),
          (T = D()),
          S(N.$$.fragment);
      },
      m(w, M) {
        x(e, w, M),
          m(w, t, M),
          x(s, w, M),
          m(w, n, M),
          x(l, w, M),
          m(w, r, M),
          x(a, w, M),
          m(w, o, M),
          x(c, w, M),
          m(w, u, M),
          x(p, w, M),
          m(w, _, M),
          x($, w, M),
          m(w, R, M),
          x(z, w, M),
          m(w, T, M),
          x(N, w, M),
          (q = !0);
      },
      p: y,
      i(w) {
        q ||
          (f(e.$$.fragment, w),
          f(s.$$.fragment, w),
          f(l.$$.fragment, w),
          f(a.$$.fragment, w),
          f(c.$$.fragment, w),
          f(p.$$.fragment, w),
          f($.$$.fragment, w),
          f(z.$$.fragment, w),
          f(N.$$.fragment, w),
          (q = !0));
      },
      o(w) {
        d(e.$$.fragment, w),
          d(s.$$.fragment, w),
          d(l.$$.fragment, w),
          d(a.$$.fragment, w),
          d(c.$$.fragment, w),
          d(p.$$.fragment, w),
          d($.$$.fragment, w),
          d(z.$$.fragment, w),
          d(N.$$.fragment, w),
          (q = !1);
      },
      d(w) {
        A(e, w),
          w && g(t),
          A(s, w),
          w && g(n),
          A(l, w),
          w && g(r),
          A(a, w),
          w && g(o),
          A(c, w),
          w && g(u),
          A(p, w),
          w && g(_),
          A($, w),
          w && g(R),
          A(z, w),
          w && g(T),
          A(N, w);
      },
    }
  );
}
class Sr extends E {
  constructor(e) {
    super(), L(this, e, null, Ar, O, {});
  }
}
function zr() {
  const i = document.getElementById("app");
  i && ((i.innerHTML = ""), new Sr({ target: i }));
}
zr();
