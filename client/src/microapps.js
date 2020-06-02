/* eslint-disable */
(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  "use strict";
  var n;
  function p(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  function q(a) {
    var b =
      "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : { next: p(a) };
  }
  var aa =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    r =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          };
  function ba(a) {
    a = [
      "object" == typeof global && global,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var t = ba(this);
  function u(a, b) {
    if (b) {
      var c = t;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {});
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d &&
        null != b &&
        r(c, a, { configurable: !0, writable: !0, value: b });
    }
  }
  var v;
  if ("function" == typeof Object.setPrototypeOf) v = Object.setPrototypeOf;
  else {
    var w;
    a: {
      var ca = { G: !0 },
        x = {};
      try {
        x.__proto__ = ca;
        w = x.G;
        break a;
      } catch (a) {}
      w = !1;
    }
    v = w
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var A = v;
  u("Object.is", function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  u("Array.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var e = d.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var l = d[c];
            if (l === b || Object.is(l, b)) return !0;
          }
          return !1;
        };
  });
  u("String.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          if (null == this)
            throw new TypeError(
              "The 'this' value for String.prototype.includes must not be null or undefined"
            );
          if (b instanceof RegExp)
            throw new TypeError(
              "First argument to String.prototype.includes must not be a regular expression"
            );
          return -1 !== this.indexOf(b, c || 0);
        };
  });
  u("Symbol", function (a) {
    function b(e) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c("jscomp_symbol_" + (e || "") + "_" + d++, e);
    }
    function c(e, l) {
      this.a = e;
      r(this, "description", { configurable: !0, writable: !0, value: l });
    }
    if (a) return a;
    c.prototype.toString = function () {
      return this.a;
    };
    var d = 0;
    return b;
  });
  u("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (
      var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
          " "
        ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = t[b[c]];
      "function" === typeof d &&
        "function" != typeof d.prototype[a] &&
        r(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return B(p(this));
          },
        });
    }
    return a;
  });
  function B(a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  function C(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  u("WeakMap", function (a) {
    function b(g) {
      this.a = (f += Math.random() + 1).toString();
      if (g) {
        g = q(g);
        for (var k; !(k = g.next()).done; ) (k = k.value), this.set(k[0], k[1]);
      }
    }
    function c() {}
    function d(g) {
      var k = typeof g;
      return ("object" === k && null !== g) || "function" === k;
    }
    function e(g) {
      if (!C(g, h)) {
        var k = new c();
        r(g, h, { value: k });
      }
    }
    function l(g) {
      var k = Object[g];
      k &&
        (Object[g] = function (m) {
          if (m instanceof c) return m;
          e(m);
          return k(m);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var g = Object.seal({}),
            k = Object.seal({}),
            m = new a([
              [g, 2],
              [k, 3],
            ]);
          if (2 != m.get(g) || 3 != m.get(k)) return !1;
          m.delete(g);
          m.set(k, 4);
          return !m.has(g) && 4 == m.get(k);
        } catch (y) {
          return !1;
        }
      })()
    )
      return a;
    var h = "$jscomp_hidden_" + Math.random();
    l("freeze");
    l("preventExtensions");
    l("seal");
    var f = 0;
    b.prototype.set = function (g, k) {
      if (!d(g)) throw Error("Invalid WeakMap key");
      e(g);
      if (!C(g, h)) throw Error("WeakMap key fail: " + g);
      g[h][this.a] = k;
      return this;
    };
    b.prototype.get = function (g) {
      return d(g) && C(g, h) ? g[h][this.a] : void 0;
    };
    b.prototype.has = function (g) {
      return d(g) && C(g, h) && C(g[h], this.a);
    };
    b.prototype.delete = function (g) {
      return d(g) && C(g, h) && C(g[h], this.a) ? delete g[h][this.a] : !1;
    };
    return b;
  });
  u("Map", function (a) {
    function b() {
      var f = {};
      return (f.h = f.next = f.head = f);
    }
    function c(f, g) {
      var k = f.a;
      return B(function () {
        if (k) {
          for (; k.head != f.a; ) k = k.h;
          for (; k.next != k.head; )
            return (k = k.next), { done: !1, value: g(k) };
          k = null;
        }
        return { done: !0, value: void 0 };
      });
    }
    function d(f, g) {
      var k = g && typeof g;
      "object" == k || "function" == k
        ? l.has(g)
          ? (k = l.get(g))
          : ((k = "" + ++h), l.set(g, k))
        : (k = "p_" + g);
      var m = f.b[k];
      if (m && C(f.b, k))
        for (f = 0; f < m.length; f++) {
          var y = m[f];
          if ((g !== g && y.key !== y.key) || g === y.key)
            return { id: k, list: m, index: f, c: y };
        }
      return { id: k, list: m, index: -1, c: void 0 };
    }
    function e(f) {
      this.b = {};
      this.a = b();
      this.size = 0;
      if (f) {
        f = q(f);
        for (var g; !(g = f.next()).done; ) (g = g.value), this.set(g[0], g[1]);
      }
    }
    if (
      (function () {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var f = Object.seal({ x: 4 }),
            g = new a(q([[f, "s"]]));
          if (
            "s" != g.get(f) ||
            1 != g.size ||
            g.get({ x: 4 }) ||
            g.set({ x: 4 }, "t") != g ||
            2 != g.size
          )
            return !1;
          var k = g.entries(),
            m = k.next();
          if (m.done || m.value[0] != f || "s" != m.value[1]) return !1;
          m = k.next();
          return m.done ||
            4 != m.value[0].x ||
            "t" != m.value[1] ||
            !k.next().done
            ? !1
            : !0;
        } catch (y) {
          return !1;
        }
      })()
    )
      return a;
    var l = new WeakMap();
    e.prototype.set = function (f, g) {
      f = 0 === f ? 0 : f;
      var k = d(this, f);
      k.list || (k.list = this.b[k.id] = []);
      k.c
        ? (k.c.value = g)
        : ((k.c = {
            next: this.a,
            h: this.a.h,
            head: this.a,
            key: f,
            value: g,
          }),
          k.list.push(k.c),
          (this.a.h.next = k.c),
          (this.a.h = k.c),
          this.size++);
      return this;
    };
    e.prototype.delete = function (f) {
      f = d(this, f);
      return f.c && f.list
        ? (f.list.splice(f.index, 1),
          f.list.length || delete this.b[f.id],
          (f.c.h.next = f.c.next),
          (f.c.next.h = f.c.h),
          (f.c.head = null),
          this.size--,
          !0)
        : !1;
    };
    e.prototype.clear = function () {
      this.b = {};
      this.a = this.a.h = b();
      this.size = 0;
    };
    e.prototype.has = function (f) {
      return !!d(this, f).c;
    };
    e.prototype.get = function (f) {
      return (f = d(this, f).c) && f.value;
    };
    e.prototype.entries = function () {
      return c(this, function (f) {
        return [f.key, f.value];
      });
    };
    e.prototype.keys = function () {
      return c(this, function (f) {
        return f.key;
      });
    };
    e.prototype.values = function () {
      return c(this, function (f) {
        return f.value;
      });
    };
    e.prototype.forEach = function (f, g) {
      for (var k = this.entries(), m; !(m = k.next()).done; )
        (m = m.value), f.call(g, m[1], m[0], this);
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var h = 0;
    return e;
  });
  u("Set", function (a) {
    function b(c) {
      this.a = new Map();
      if (c) {
        c = q(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.a.size;
    }
    if (
      (function () {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var c = Object.seal({ x: 4 }),
            d = new a(q([c]));
          if (
            !d.has(c) ||
            1 != d.size ||
            d.add(c) != d ||
            1 != d.size ||
            d.add({ x: 4 }) != d ||
            2 != d.size
          )
            return !1;
          var e = d.entries(),
            l = e.next();
          if (l.done || l.value[0] != c || l.value[1] != c) return !1;
          l = e.next();
          return l.done ||
            l.value[0] == c ||
            4 != l.value[0].x ||
            l.value[1] != l.value[0]
            ? !1
            : e.next().done;
        } catch (h) {
          return !1;
        }
      })()
    )
      return a;
    b.prototype.add = function (c) {
      c = 0 === c ? 0 : c;
      this.a.set(c, c);
      this.size = this.a.size;
      return this;
    };
    b.prototype.delete = function (c) {
      c = this.a.delete(c);
      this.size = this.a.size;
      return c;
    };
    b.prototype.clear = function () {
      this.a.clear();
      this.size = 0;
    };
    b.prototype.has = function (c) {
      return this.a.has(c);
    };
    b.prototype.entries = function () {
      return this.a.entries();
    };
    b.prototype.values = function () {
      return this.a.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (c, d) {
      var e = this;
      this.a.forEach(function (l) {
        return c.call(d, l, l, e);
      });
    };
    return b;
  });
  u("Number.isFinite", function (a) {
    return a
      ? a
      : function (b) {
          return "number" !== typeof b
            ? !1
            : !isNaN(b) && Infinity !== b && -Infinity !== b;
        };
  });
  u("Number.isInteger", function (a) {
    return a
      ? a
      : function (b) {
          return Number.isFinite(b) ? b === Math.floor(b) : !1;
        };
  });
  u("Promise", function (a) {
    function b(h) {
      this.b = 0;
      this.i = void 0;
      this.a = [];
      var f = this.f();
      try {
        h(f.resolve, f.reject);
      } catch (g) {
        f.reject(g);
      }
    }
    function c() {
      this.a = null;
    }
    function d(h) {
      return h instanceof b
        ? h
        : new b(function (f) {
            f(h);
          });
    }
    if (a) return a;
    c.prototype.b = function (h) {
      if (null == this.a) {
        this.a = [];
        var f = this;
        this.f(function () {
          f.i();
        });
      }
      this.a.push(h);
    };
    var e = t.setTimeout;
    c.prototype.f = function (h) {
      e(h, 0);
    };
    c.prototype.i = function () {
      for (; this.a && this.a.length; ) {
        var h = this.a;
        this.a = [];
        for (var f = 0; f < h.length; ++f) {
          var g = h[f];
          h[f] = null;
          try {
            g();
          } catch (k) {
            this.g(k);
          }
        }
      }
      this.a = null;
    };
    c.prototype.g = function (h) {
      this.f(function () {
        throw h;
      });
    };
    b.prototype.f = function () {
      function h(k) {
        return function (m) {
          g || ((g = !0), k.call(f, m));
        };
      }
      var f = this,
        g = !1;
      return { resolve: h(this.J), reject: h(this.g) };
    };
    b.prototype.J = function (h) {
      if (h === this)
        this.g(new TypeError("A Promise cannot resolve to itself"));
      else if (h instanceof b) this.K(h);
      else {
        a: switch (typeof h) {
          case "object":
            var f = null != h;
            break a;
          case "function":
            f = !0;
            break a;
          default:
            f = !1;
        }
        f ? this.I(h) : this.m(h);
      }
    };
    b.prototype.I = function (h) {
      var f = void 0;
      try {
        f = h.then;
      } catch (g) {
        this.g(g);
        return;
      }
      "function" == typeof f ? this.L(f, h) : this.m(h);
    };
    b.prototype.g = function (h) {
      this.F(2, h);
    };
    b.prototype.m = function (h) {
      this.F(1, h);
    };
    b.prototype.F = function (h, f) {
      if (0 != this.b)
        throw Error(
          "Cannot settle(" +
            h +
            ", " +
            f +
            "): Promise already settled in state" +
            this.b
        );
      this.b = h;
      this.i = f;
      this.H();
    };
    b.prototype.H = function () {
      if (null != this.a) {
        for (var h = 0; h < this.a.length; ++h) l.b(this.a[h]);
        this.a = null;
      }
    };
    var l = new c();
    b.prototype.K = function (h) {
      var f = this.f();
      h.j(f.resolve, f.reject);
    };
    b.prototype.L = function (h, f) {
      var g = this.f();
      try {
        h.call(f, g.resolve, g.reject);
      } catch (k) {
        g.reject(k);
      }
    };
    b.prototype.then = function (h, f) {
      function g(z, D) {
        return "function" == typeof z
          ? function (Q) {
              try {
                k(z(Q));
              } catch (R) {
                m(R);
              }
            }
          : D;
      }
      var k,
        m,
        y = new b(function (z, D) {
          k = z;
          m = D;
        });
      this.j(g(h, k), g(f, m));
      return y;
    };
    b.prototype.catch = function (h) {
      return this.then(void 0, h);
    };
    b.prototype.j = function (h, f) {
      function g() {
        switch (k.b) {
          case 1:
            h(k.i);
            break;
          case 2:
            f(k.i);
            break;
          default:
            throw Error("Unexpected state: " + k.b);
        }
      }
      var k = this;
      null == this.a ? l.b(g) : this.a.push(g);
    };
    b.resolve = d;
    b.reject = function (h) {
      return new b(function (f, g) {
        g(h);
      });
    };
    b.race = function (h) {
      return new b(function (f, g) {
        for (var k = q(h), m = k.next(); !m.done; m = k.next())
          d(m.value).j(f, g);
      });
    };
    b.all = function (h) {
      var f = q(h),
        g = f.next();
      return g.done
        ? d([])
        : new b(function (k, m) {
            function y(Q) {
              return function (R) {
                z[Q] = R;
                D--;
                0 == D && k(z);
              };
            }
            var z = [],
              D = 0;
            do
              z.push(void 0),
                D++,
                d(g.value).j(y(z.length - 1), m),
                (g = f.next());
            while (!g.done);
          });
    };
    return b;
  });
  var E = this || self;
  function F(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }
  function G(a, b) {
    a = a.split(".");
    var c = E;
    a[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b);
  }
  var H = null;
  function da() {}
  n = da.prototype;
  n.v = function () {
    H().v();
  };
  n.l = function (a) {
    return H().l(a);
  };
  n.B = function (a) {
    return H().B(a);
  };
  n.D = function (a) {
    return H().D(a);
  };
  n.C = function (a) {
    return H().C(a);
  };
  n.o = function (a) {
    return H().o(a);
  };
  n.s = function () {
    return H().s();
  };
  n.u = function (a) {
    return H().u(a);
  };
  n.w = function (a) {
    return H().w(a);
  };
  n.A = function (a) {
    return H().A(a);
  };
  var ea = /^(http:\/\/localhost\.corp|https:\/\/microapps(-(autopush|preprod|prod-tt|daily-[0-6])\.sandbox)?)\.google\.com(:[0-9]+)?$/;
  var fa = Array.prototype.every
    ? function (a, b) {
        return Array.prototype.every.call(a, b, void 0);
      }
    : function (a, b) {
        for (
          var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
          e < c;
          e++
        )
          if (e in d && !b.call(void 0, d[e], e, a)) return !1;
        return !0;
      };
  function I(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  var J;
  a: {
    var ha = E.navigator;
    if (ha) {
      var ia = ha.userAgent;
      if (ia) {
        J = ia;
        break a;
      }
    }
    J = "";
  }
  function ja(a) {
    var b = 0,
      c;
    for (c in a) b++;
    return b;
  }
  function ka(a, b) {
    for (var c in a) if (!(c in b) || a[c] !== b[c]) return !1;
    for (var d in b) if (!(d in a)) return !1;
    return !0;
  }
  function K(a, b) {
    this.a = (a === L && b) || "";
    this.b = la;
  }
  K.prototype.g = !0;
  K.prototype.f = function () {
    return this.a.toString();
  };
  var ma = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    la = {},
    M = new K(L, "about:blank"),
    L = {};
  var na = -1 != J.indexOf("Android");
  var oa = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  function pa(a, b) {
    if (a.self !== a.top) {
      if (a.location.origin && a.location.ancestorOrigins) {
        var c = a.location.origin;
        return fa(a.location.ancestorOrigins, function (d) {
          var e = d.match(oa)[3] || null;
          e = (e ? decodeURI(e) : e) || "";
          e = String(e.substr(e.length - 11, 11)).toLowerCase();
          return (
            0 == (".google.com" < e ? -1 : ".google.com" == e ? 0 : 1) ||
            d === c
          );
        });
      }
      return !1;
    }
    return b;
  }
  var qa = new Set(["image/jpeg", "video/*", "application/pdf"]),
    ra = new Set(["camera", "files"]);
  function N(a, b) {
    a = Error.call(this, a);
    this.message = a.message;
    "stack" in a && (this.stack = a.stack);
    b = void 0 === b ? 2 : b;
    this.code = 1e4 < b ? Math.floor(b / 1e4) : b;
  }
  var O = Error;
  N.prototype = aa(O.prototype);
  N.prototype.constructor = N;
  if (A) A(N, O);
  else
    for (var P in O)
      if ("prototype" != P)
        if (Object.defineProperties) {
          var sa = Object.getOwnPropertyDescriptor(O, P);
          sa && Object.defineProperty(N, P, sa);
        } else N[P] = O[P];
  var S = new Set(["type", "enum", "const"]);
  function T(a, b, c) {
    a = U(a, b, [void 0 === c ? "root" : c]);
    return 0 < a.length ? a : null;
  }
  function V(a, b, c) {
    return "Object:" + a.join(".") + " Validation:" + b + " Constraint:" + c;
  }
  function ta(a, b) {
    var c = a.length;
    if (0 < c) {
      for (var d = Array(c), e = 0; e < c; e++) d[e] = a[e];
      a = d;
    } else a = [];
    a[a.length - 1] += "[" + b + "]";
    return a;
  }
  function ua(a, b, c) {
    var d = [];
    Object.keys(a).forEach(function (e) {
      if (!S.has(e)) {
        var l = !1;
        switch (e) {
          case "multipleOf":
            l = "number" !== typeof b || 0 === b % a[e];
            break;
          case "minimum":
            l = b >= a[e] || (a.exclusiveMinimum && b > a[e]);
            break;
          case "maximum":
            l = b <= a[e] || (a.exclusiveMaximum && b < a[e]);
            break;
          case "exclusiveMinimum":
          case "exclusiveMaximum":
            break;
          default:
            throw Error("Unsupported numeric keywords:" + e);
        }
        l || d.push(V(c, e, a[e].toString()));
      }
    });
    return d;
  }
  function va(a, b, c) {
    var d = [];
    Object.keys(a).forEach(function (e) {
      if (!S.has(e)) {
        switch (e) {
          case "pattern":
            var l = new RegExp(a[e]).test(b);
            break;
          case "minLength":
            l = b.length >= a[e];
            break;
          case "maxLength":
            l = b.length <= a[e];
            break;
          default:
            throw Error("Unsupported string keywords:" + e);
        }
        l || d.push(V(c, e, a[e].toString()));
      }
    });
    return d;
  }
  function wa(a, b, c) {
    var d = [];
    Object.keys(a).forEach(function (e) {
      if (!S.has(e)) {
        var l = a[e];
        switch (e) {
          case "items":
            if (Array.isArray(l))
              for (e = 0; e < l.length; e++) {
                var h = ta(c, e);
                h = U(l[e], b[e], h);
                null !== h && (d = I(d, h));
              }
            else
              for (e = 0; e < b.length; e++)
                (h = ta(c, e)),
                  (h = U(l, b[e], h)),
                  null !== h && (d = I(d, h));
            break;
          case "maxItems":
            b.length > l && d.push(V(c, e, l.toString()));
            break;
          case "minItems":
            b.length < l && d.push(V(c, e, l.toString()));
            break;
          case "uniqueItems":
            if ("boolean" !== typeof l) d.push(V(c, e, l.toString()));
            else if (l) {
              h = new Set();
              for (var f = 0; f < b.length; f++) {
                var g = JSON.stringify(b[f]);
                if (h.has(g)) {
                  d.push(V(c, e, l.toString()));
                  break;
                } else h.add(g);
              }
            }
            break;
          default:
            throw Error("Unsupported array keywords:" + e);
        }
      }
    });
    return d;
  }
  function xa(a, b, c) {
    var d = [];
    Object.keys(a).forEach(function (e) {
      if (!S.has(e)) {
        var l = a[e];
        switch (e) {
          case "required":
            for (var h = q(l), f = h.next(); !f.done; f = h.next())
              (f = f.value), void 0 === b[f] && d.push(V(c, e, f));
            break;
          case "properties":
            Object.keys(b).forEach(function (g) {
              void 0 !== l[g] &&
                ((g = U(l[g], b[g], I(c, g))), null !== g && (d = I(d, g)));
            });
            break;
          case "minProperties":
            ja(b) < l && d.push(V(c, e, l.toString()));
            break;
          case "maxProperties":
            ja(b) > l && d.push(V(c, e, l.toString()));
            break;
          case "patternProperties":
          case "additionalProperties":
          case "dependencies":
          case "propertyNames":
            throw Error("Unsupported object keywords:" + e);
          default:
            throw Error("Unknown object keywords:" + e);
        }
      }
    });
    return d;
  }
  function U(a, b, c) {
    var d = [];
    if (null != a.type) {
      d = a.type;
      switch (d) {
        case "string":
          var e = "string" === typeof b;
          break;
        case "number":
          e = "number" === typeof b;
          break;
        case "boolean":
          e = "boolean" === typeof b;
          break;
        case "null":
          e = null === b;
          break;
        case "object":
          e = F(b) && !Array.isArray(b);
          break;
        case "integer":
          e = "number" === typeof b && Number.isInteger(b);
          break;
        case "array":
          e = Array.isArray(b);
          break;
        case "date":
          e = F(b) && "function" == typeof b.getFullYear;
          break;
        default:
          throw Error("Unsupported field type: " + d);
      }
      d = e ? [] : [V(c, "type", d)];
    }
    if (0 == d.length && null != a["enum"]) {
      d = a["enum"];
      e = !1;
      if (F(b))
        for (var l = q(d), h = l.next(); !h.done; h = l.next()) {
          if (ka(b, h.value)) {
            e = !0;
            break;
          }
        }
      else
        for (l = q(d), h = l.next(); !h.done; h = l.next())
          if (b === h.value) {
            e = !0;
            break;
          }
      d = e ? [] : [V(c, "enum", JSON.stringify(d))];
    }
    0 == d.length &&
      null != a["const"] &&
      ((d = a["const"]),
      (d = (F(b) ? ka(d, b) : b === d)
        ? []
        : [V(c, "const", JSON.stringify(d))]));
    if (d.length) return d;
    "number" === typeof b
      ? (d = ua(a, b, c))
      : "string" === typeof b
      ? (d = va(a, b, c))
      : Array.isArray(b)
      ? (d = wa(a, b, c))
      : F(b) && !Array.isArray(b) && (d = xa(a, b, c));
    return d;
  }
  var ya = {
      type: "object",
      properties: {
        apiVersion: { type: "number" },
        apiVersionMinor: { type: "number" },
        allowedPaymentMethods: {
          type: "array",
          items: { type: "object", required: ["type"] },
          minItems: 1,
        },
        transactionInfo: {
          type: "object",
          properties: {
            totalPrice: { type: "string", pattern: "^[0-9]+(\\.[0-9][0-9])?$" },
            totalPriceStatus: { type: "string" },
            currencyCode: { type: "string" },
            transactionNote: { type: "string" },
          },
          required: ["totalPriceStatus", "currencyCode"],
        },
      },
      required: [
        "apiVersion",
        "apiVersionMinor",
        "allowedPaymentMethods",
        "transactionInfo",
      ],
    },
    za = {
      type: "object",
      properties: {
        type: { type: "string" },
        parameters: {
          type: "object",
          required: ["payeeVpa", "payeeName", "mcc", "transactionReferenceId"],
        },
        tokenizationSpecification: {
          type: "object",
          properties: { type: { type: "string", enum: ["DIRECT"] } },
          required: ["type"],
        },
      },
      required: ["parameters", "tokenizationSpecification", "type"],
    },
    Aa = {
      type: "object",
      properties: {
        text: { type: "string", maxLength: 150 },
        url: {
          type: "string",
          maxLength: 2e3,
          pattern: "^https://microapps.google.com/",
        },
        title: { type: "string", maxLength: 50 },
        imageUrl: { type: "string", maxLength: 2e3 },
      },
    },
    Ba = {
      type: "object",
      properties: {
        allowedMimeTypes: {
          type: "array",
          items: { type: "string" },
          minItems: 1,
        },
        allowedSources: { type: "array", items: { type: "string" } },
        cameraDirection: { type: "string", enum: ["front", "back"] },
        maxVideoSeconds: { type: "number", minimum: 1, maximum: 5 },
      },
      required: ["allowedMimeTypes"],
    };
  var Ca = /\[gpay-microapps\/(\d+(\.\d+)*)[^\]]*\]/;
  function Da(a) {
    var b = T(ya, a, "paymentRequest");
    if (b) return W(JSON.stringify(b));
    b = q(a.allowedPaymentMethods);
    for (var c = b.next(); !c.done; c = b.next()) {
      c = c.value;
      var d;
      a: {
        if ("UPI" === c.type && (d = T(za, c))) {
          d = JSON.stringify(d);
          break a;
        }
        d = null;
      }
      if (d) return W(d);
      if ((c = Ea(c, a.transactionInfo))) return W(c);
    }
    return null;
  }
  function Fa(a) {
    if (null == a || !F(a))
      return W("Valid mediaRequest object is required for this API.");
    var b = T(Ba, a, "mediaRequest");
    if (b) return W(JSON.stringify(b));
    b = q(a.allowedMimeTypes);
    for (var c = b.next(); !c.done; c = b.next())
      if (
        (c = qa.has(c.value)
          ? null
          : "Request must contain supported media types.")
      )
        return W(c);
    if (
      1 == a.allowedMimeTypes.length &&
      "video/*" === a.allowedMimeTypes[0] &&
      !Ga(54) &&
      !Ha()
    )
      return W(
        "Client does not support video requests. Please update the Google Pay app."
      );
    b = Ga(57) || Ha();
    if (
      1 === a.allowedMimeTypes.length &&
      "application/pdf" === a.allowedMimeTypes[0] &&
      !b
    )
      return W(
        "Client does not support file requests. Please update the Google Pay app."
      );
    if (!a.allowedSources) return null;
    c = q(a.allowedSources);
    for (var d = c.next(); !d.done; d = c.next())
      if (
        (d = ra.has(d.value)
          ? null
          : "Request must contain supported media sources.")
      )
        return W(d);
    return 1 !== a.allowedSources.length || "files" !== a.allowedSources[0] || b
      ? 1 === a.allowedSources.length &&
        "camera" === a.allowedSources[0] &&
        a.allowedMimeTypes.includes("application/pdf")
        ? W(
            'Not possible to request "application/pdf" MIME type with only "camera" in "allowedSources"'
          )
        : null
      : W("CLIENT_UNSUPPORTED_FOR_FILES");
  }
  function Ea(a, b) {
    if (
      "NOT_CURRENTLY_KNOWN" !== b.totalPriceStatus &&
      !(0 < Number(b.totalPrice))
    )
      return "Amount must be greater than 0";
    if ("UPI" === a.type) {
      if ("FINAL" !== b.totalPriceStatus)
        return 'Only "FINAL" is supported now in totalPriceStatus for UPI payment type.';
      if ("INR" !== b.currencyCode)
        return 'Only "INR" is currently supported in currencyCode for UPI payment type.';
    }
    return null;
  }
  function Ha() {
    var a = Ca.exec(J.toLocaleLowerCase());
    return na && a && 0 < a.length ? a[0].includes("dev") : !1;
  }
  function Ga(a) {
    var b = Ca.exec(J.toLocaleLowerCase());
    return na && b && 1 < b.length && ((b = b[1].split(".")), 1 <= b.length)
      ? a < Number(b[0])
      : !1;
  }
  function W(a) {
    return new N(a, 3);
  }
  function Ia(a) {
    var b = this;
    this.a = a;
    this.g = 0;
    this.b = new Map();
    this.i = new Promise(function (c) {
      return (b.m = c);
    });
    this.a.addEventListener("message", this.f.bind(this));
    this.a.start();
  }
  Ia.prototype.f = function (a) {
    if ((a = a.data) && null != a.id)
      if (0 === a.type) "acceptConnection" === a.name && this.m();
      else if (1 === a.type) {
        var b = a.id,
          c = this.b.get(b);
        c &&
          (this.b.delete(b),
          null != a.error
            ? c.reject(
                new N("Request " + a.name + " failed: " + a.error, a.errorCode)
              )
            : c.resolve(a.data));
      }
  };
  function X(a, b, c) {
    var d = void 0 === d ? !0 : d;
    var e = ++a.g,
      l = Promise.resolve();
    d &&
      (l = new Promise(function (f, g) {
        a.b.set(e, { resolve: f, reject: g });
      }));
    var h = { id: e, type: 0, name: b, data: c, isResponseRequired: d };
    a.i.then(function () {
      a.a.postMessage(h);
    });
    return l;
  }
  var Y = null,
    Ja = null;
  function Ka() {
    var a = window,
      b = window,
      c = Ja;
    try {
      var d = b.self !== b.top;
    } catch (l) {
      d = !0;
    }
    if (!d) throw Error("Unsupported environment: expected running in iframe");
    d = new Ia(c.port1);
    if (!b.location.ancestorOrigins || !b.location.ancestorOrigins.length)
      throw Error("unsupported environment");
    var e = b.location.ancestorOrigins[0];
    if (!ea.test(e)) throw Error("unknown viewer origin");
    b.parent.postMessage({ type: 0, name: "requestConnection" }, e, [c.port2]);
    this.a = d;
    this.b = a;
  }
  function La() {
    Y || ((Ja = new MessageChannel()), (Y = new Ka()));
    return Y;
  }
  n = Ka.prototype;
  n.v = function () {
    if (pa(this.b, !0)) X(this.a, "appLoadingComplete", {});
    else {
      var a = this.b.location;
      if (M instanceof K) var b = M;
      else
        (b = M),
          b instanceof K ||
            ((b = "object" == typeof b && b.g ? b.f() : String(b)),
            ma.test(b) || (b = "about:invalid#zClosurez"),
            (b = new K(L, b)));
      a.href =
        b instanceof K && b.constructor === K && b.b === la
          ? b.a
          : "type_error:SafeUrl";
    }
  };
  n.l = function (a) {
    return X(this.a, "getIdentity", a || {});
  };
  n.B = function (a) {
    var b = Da(a);
    return b ? Promise.reject(b) : X(this.a, "requestPayment", a);
  };
  n.C = function (a) {
    return X(this.a, "requestScan", a || {});
  };
  n.D = function (a) {
    var b;
    if ((b = (b = T(Aa, a, "sharingRequest")) ? W(JSON.stringify(b)) : null))
      return Promise.reject(b);
    a.imageUrl && (a.imageUrl = "");
    return X(this.a, "requestSharing", a);
  };
  n.o = function (a) {
    var b =
      null != a && F(a)
        ? null
        : W("Valid order object is required for this API.");
    return b ? Promise.reject(b) : X(this.a, "createOrder", a);
  };
  n.s = function () {
    return X(this.a, "getCurrentLocation", {});
  };
  n.u = function (a) {
    return X(this.a, "getPhoneNumber", a || {});
  };
  n.w = function (a) {
    X(this.a, "openUrl", a).catch(function () {});
  };
  n.A = function (a) {
    var b = Fa(a);
    return b ? Promise.reject(b) : X(this.a, "requestMedia", a);
  };
  (function (a) {
    var b = window;
    b.PerformanceObserver &&
      (b.PerformanceObserver.supportedEntryTypes || []).includes("paint") &&
      pa(b, !1) &&
      new b.PerformanceObserver(function (c) {
        c = q(c.getEntries());
        for (var d = c.next(); !d.done; d = c.next())
          "first-contentful-paint" === d.value.name &&
            b.location.ancestorOrigins &&
            b.location.ancestorOrigins.length &&
            ea.test(b.location.ancestorOrigins[0]) &&
            a();
      }).observe({ entryTypes: ["paint"] });
  })(function () {
    var a = La();
    X(a.a, "appFirstContentfulPaintEvent", {});
  });
  var Z;
  H = function () {
    return La();
  };
  Z = new da();
  G("microapps.requestIdentity", Z.l);
  G("microapps.getIdentity", Z.l);
  G("microapps.requestPayment", Z.B);
  G("microapps.requestScan", Z.C);
  G("microapps.createOrder", Z.o);
  G("microapps.initialize", Z.v);
  G("microapps.getCurrentLocation", Z.s);
  G("microapps.getPhoneNumber", Z.u);
  G("microapps.openUrl", Z.w);
  G("microapps.requestSharing", Z.D);
  G("microapps.requestMedia", Z.A);
}.call(this));