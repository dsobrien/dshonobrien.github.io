/* 
 * Tipper v3.0.2 - 2014-02-12 
 * A jQuery plugin for simple tooltips. Part of the formstone library. 
 * http://formstone.it/tipper/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */

!(function(a) {
  "use strict";
  function b(b) {
    return (
      (h.formatter = d),
      a(this)
        .not(".tipper-attached")
        .addClass("tipper-attached")
        .on("mouseenter.tipper", a.extend({}, h, b || {}), c)
    );
  }
  function c(b) {
    g = a("body");
    var c = a(this),
      d = a.extend(!0, {}, b.data, c.data("tipper-options")),
      h = "";
    (h += '<div class="tipper ' + d.direction + '">'),
      (h += '<div class="tipper-content">'),
      (h += d.formatter.apply(g, [c])),
      (h += '<span class="tipper-caret"</span>'),
      (h += "</div>"),
      (h += "</div>"),
      (d.$target = c),
      (d.$tipper = a(h)),
      g.append(d.$tipper),
      (d.$content = d.$tipper.find(".tipper-content")),
      (d.$caret = d.$tipper.find(".tipper-caret")),
      (d.offset = c.offset()),
      (d.height = c.outerHeight()),
      (d.width = c.outerWidth()),
      (d.tipperPos = {}),
      (d.caretPos = {}),
      (d.contentPos = {});
    var i = d.$caret.outerHeight(!0),
      j = d.$caret.outerWidth(!0),
      k = d.$content.outerHeight(!0),
      l = d.$content.outerWidth(!0) + j;
    "right" === d.direction || "left" === d.direction
      ? ((d.caretPos.top = (k - i) / 2),
        (d.contentPos.top = -k / 2),
        "right" === d.direction
          ? (d.contentPos.left = j + d.margin)
          : "left" === d.direction && (d.contentPos.left = -(l + d.margin)))
      : ((d.caretPos.left = (l - j) / 2),
        (d.contentPos.left = -l / 2),
        "bottom" === d.direction
          ? (d.contentPos.top = d.margin)
          : "top" === d.direction && (d.contentPos.top = -(k + d.margin))),
      d.$content.css(d.contentPos),
      d.$caret.css(d.caretPos),
      d.follow
        ? d.$target.on("mousemove.tipper", d, e).trigger("mousemove")
        : ("right" === d.direction || "left" === d.direction
            ? ((d.tipperPos.top = d.offset.top + d.height / 2),
              "right" === d.direction
                ? (d.tipperPos.left = d.offset.left + d.width)
                : "left" === d.direction && (d.tipperPos.left = d.offset.left))
            : ((d.tipperPos.left = d.offset.left + d.width / 2),
              "bottom" === d.direction
                ? (d.tipperPos.top = d.offset.top + d.height)
                : "top" === d.direction && (d.tipperPos.top = d.offset.top)),
          d.$tipper.css(d.tipperPos)),
      d.$target.one("mouseleave.tipper", d, f);
  }
  function d(a) {
    return a.data("title");
  }
  function e(a) {
    var b = a.data;
    b.$tipper.css({ left: a.pageX, top: a.pageY });
  }
  function f(a) {
    var b = a.data;
    b.$tipper.remove(), b.$target.off("mousemove.tipper mouseleave.tipper");
  }
  var g,
    h = { direction: "top", follow: !1, formatter: a.noop, margin: 15 },
    i = {
      defaults: function(b) {
        return (h = a.extend(h, b || {})), a(this);
      },
      destroy: function() {
        return a(this)
          .trigger("mouseleave.tipper")
          .off(".tipper")
          .removeClass("tipper-attached");
      }
    };
  (a.fn.tipper = function(a) {
    return i[a]
      ? i[a].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof a && a
        ? this
        : b.apply(this, arguments);
  }),
    (a.tipper = function(a) {
      "defaults" === a &&
        i.defaults.apply(this, Array.prototype.slice.call(arguments, 1));
    });
})(jQuery);

/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2012 David DeSandro / Metafizzy
 */
(function(a, b, c) {
  "use strict";
  var d = a.document,
    e = a.Modernizr,
    f = function(a) {
      return a.charAt(0).toUpperCase() + a.slice(1);
    },
    g = "Moz Webkit O Ms".split(" "),
    h = function(a) {
      var b = d.documentElement.style,
        c;
      if (typeof b[a] == "string") return a;
      a = f(a);
      for (var e = 0, h = g.length; e < h; e++) {
        c = g[e] + a;
        if (typeof b[c] == "string") return c;
      }
    },
    i = h("transform"),
    j = h("transitionProperty"),
    k = {
      csstransforms: function() {
        return !!i;
      },
      csstransforms3d: function() {
        var a = !!h("perspective");
        if (a) {
          var c = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
            d = "@media (" + c.join("transform-3d),(") + "modernizr)",
            e = b(
              "<style>" + d + "{#modernizr{height:3px}}" + "</style>"
            ).appendTo("head"),
            f = b('<div id="modernizr" />').appendTo("html");
          (a = f.height() === 3), f.remove(), e.remove();
        }
        return a;
      },
      csstransitions: function() {
        return !!j;
      }
    },
    l;
  if (e) for (l in k) e.hasOwnProperty(l) || e.addTest(l, k[l]);
  else {
    e = a.Modernizr = { _version: "1.6ish: miniModernizr for Isotope" };
    var m = " ",
      n;
    for (l in k) (n = k[l]()), (e[l] = n), (m += " " + (n ? "" : "no-") + l);
    b("html").addClass(m);
  }
  if (e.csstransforms) {
    var o = e.csstransforms3d
        ? {
            translate: function(a) {
              return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) ";
            },
            scale: function(a) {
              return "scale3d(" + a + ", " + a + ", 1) ";
            }
          }
        : {
            translate: function(a) {
              return "translate(" + a[0] + "px, " + a[1] + "px) ";
            },
            scale: function(a) {
              return "scale(" + a + ") ";
            }
          },
      p = function(a, c, d) {
        var e = b.data(a, "isoTransform") || {},
          f = {},
          g,
          h = {},
          j;
        (f[c] = d), b.extend(e, f);
        for (g in e) (j = e[g]), (h[g] = o[g](j));
        var k = h.translate || "",
          l = h.scale || "",
          m = k + l;
        b.data(a, "isoTransform", e), (a.style[i] = m);
      };
    (b.cssNumber.scale = !0),
      (b.cssHooks.scale = {
        set: function(a, b) {
          p(a, "scale", b);
        },
        get: function(a, c) {
          var d = b.data(a, "isoTransform");
          return d && d.scale ? d.scale : 1;
        }
      }),
      (b.fx.step.scale = function(a) {
        b.cssHooks.scale.set(a.elem, a.now + a.unit);
      }),
      (b.cssNumber.translate = !0),
      (b.cssHooks.translate = {
        set: function(a, b) {
          p(a, "translate", b);
        },
        get: function(a, c) {
          var d = b.data(a, "isoTransform");
          return d && d.translate ? d.translate : [0, 0];
        }
      });
  }
  var q, r;
  e.csstransitions &&
    ((q = {
      WebkitTransitionProperty: "webkitTransitionEnd",
      MozTransitionProperty: "transitionend",
      OTransitionProperty: "oTransitionEnd otransitionend",
      transitionProperty: "transitionend"
    }[j]),
    (r = h("transitionDuration")));
  var s = b.event,
    t = b.event.handle ? "handle" : "dispatch",
    u;
  (s.special.smartresize = {
    setup: function() {
      b(this).bind("resize", s.special.smartresize.handler);
    },
    teardown: function() {
      b(this).unbind("resize", s.special.smartresize.handler);
    },
    handler: function(a, b) {
      var c = this,
        d = arguments;
      (a.type = "smartresize"),
        u && clearTimeout(u),
        (u = setTimeout(function() {
          s[t].apply(c, d);
        }, b === "execAsap" ? 0 : 100));
    }
  }),
    (b.fn.smartresize = function(a) {
      return a
        ? this.bind("smartresize", a)
        : this.trigger("smartresize", ["execAsap"]);
    }),
    (b.Isotope = function(a, c, d) {
      (this.element = b(c)), this._create(a), this._init(d);
    });
  var v = ["width", "height"],
    w = b(a);
  (b.Isotope.settings = {
    resizable: !0,
    layoutMode: "masonry",
    containerClass: "isotope",
    itemClass: "isotope-item",
    hiddenClass: "isotope-hidden",
    hiddenStyle: { opacity: 0, scale: 0.001 },
    visibleStyle: { opacity: 1, scale: 1 },
    containerStyle: { position: "relative", overflow: "hidden" },
    animationEngine: "best-available",
    animationOptions: { queue: !1, duration: 800 },
    sortBy: "original-order",
    sortAscending: !0,
    resizesContainer: !0,
    transformsEnabled: !0,
    itemPositionDataEnabled: !1
  }),
    (b.Isotope.prototype = {
      _create: function(a) {
        (this.options = b.extend({}, b.Isotope.settings, a)),
          (this.styleQueue = []),
          (this.elemCount = 0);
        var c = this.element[0].style;
        this.originalStyle = {};
        var d = v.slice(0);
        for (var e in this.options.containerStyle) d.push(e);
        for (var f = 0, g = d.length; f < g; f++)
          (e = d[f]), (this.originalStyle[e] = c[e] || "");
        this.element.css(this.options.containerStyle),
          this._updateAnimationEngine(),
          this._updateUsingTransforms();
        var h = {
          "original-order": function(a, b) {
            return b.elemCount++, b.elemCount;
          },
          random: function() {
            return Math.random();
          }
        };
        (this.options.getSortData = b.extend(this.options.getSortData, h)),
          this.reloadItems(),
          (this.offset = {
            left: parseInt(this.element.css("padding-left") || 0, 10),
            top: parseInt(this.element.css("padding-top") || 0, 10)
          });
        var i = this;
        setTimeout(function() {
          i.element.addClass(i.options.containerClass);
        }, 0),
          this.options.resizable &&
            w.bind("smartresize.isotope", function() {
              i.resize();
            }),
          this.element.delegate(
            "." + this.options.hiddenClass,
            "click",
            function() {
              return !1;
            }
          );
      },
      _getAtoms: function(a) {
        var b = this.options.itemSelector,
          c = b ? a.filter(b).add(a.find(b)) : a,
          d = { position: "absolute" };
        return (
          (c = c.filter(function(a, b) {
            return b.nodeType === 1;
          })),
          this.usingTransforms && ((d.left = 0), (d.top = 0)),
          c.css(d).addClass(this.options.itemClass),
          this.updateSortData(c, !0),
          c
        );
      },
      _init: function(a) {
        (this.$filteredAtoms = this._filter(this.$allAtoms)),
          this._sort(),
          this.reLayout(a);
      },
      option: function(a) {
        if (b.isPlainObject(a)) {
          this.options = b.extend(!0, this.options, a);
          var c;
          for (var d in a) (c = "_update" + f(d)), this[c] && this[c]();
        }
      },
      _updateAnimationEngine: function() {
        var a = this.options.animationEngine
            .toLowerCase()
            .replace(/[ _\-]/g, ""),
          b;
        switch (a) {
          case "css":
          case "none":
            b = !1;
            break;
          case "jquery":
            b = !0;
            break;
          default:
            b = !e.csstransitions;
        }
        (this.isUsingJQueryAnimation = b), this._updateUsingTransforms();
      },
      _updateTransformsEnabled: function() {
        this._updateUsingTransforms();
      },
      _updateUsingTransforms: function() {
        var a = (this.usingTransforms =
          this.options.transformsEnabled &&
          e.csstransforms &&
          e.csstransitions &&
          !this.isUsingJQueryAnimation);
        a ||
          (delete this.options.hiddenStyle.scale,
          delete this.options.visibleStyle.scale),
          (this.getPositionStyles = a ? this._translate : this._positionAbs);
      },
      _filter: function(a) {
        var b = this.options.filter === "" ? "*" : this.options.filter;
        if (!b) return a;
        var c = this.options.hiddenClass,
          d = "." + c,
          e = a.filter(d),
          f = e;
        if (b !== "*") {
          f = e.filter(b);
          var g = a
            .not(d)
            .not(b)
            .addClass(c);
          this.styleQueue.push({ $el: g, style: this.options.hiddenStyle });
        }
        return (
          this.styleQueue.push({ $el: f, style: this.options.visibleStyle }),
          f.removeClass(c),
          a.filter(b)
        );
      },
      updateSortData: function(a, c) {
        var d = this,
          e = this.options.getSortData,
          f,
          g;
        a.each(function() {
          (f = b(this)), (g = {});
          for (var a in e)
            !c && a === "original-order"
              ? (g[a] = b.data(this, "isotope-sort-data")[a])
              : (g[a] = e[a](f, d));
          b.data(this, "isotope-sort-data", g);
        });
      },
      _sort: function() {
        var a = this.options.sortBy,
          b = this._getSorter,
          c = this.options.sortAscending ? 1 : -1,
          d = function(d, e) {
            var f = b(d, a),
              g = b(e, a);
            return (
              f === g &&
                a !== "original-order" &&
                ((f = b(d, "original-order")), (g = b(e, "original-order"))),
              (f > g ? 1 : f < g ? -1 : 0) * c
            );
          };
        this.$filteredAtoms.sort(d);
      },
      _getSorter: function(a, c) {
        return b.data(a, "isotope-sort-data")[c];
      },
      _translate: function(a, b) {
        return { translate: [a, b] };
      },
      _positionAbs: function(a, b) {
        return { left: a, top: b };
      },
      _pushPosition: function(a, b, c) {
        (b = Math.round(b + this.offset.left)),
          (c = Math.round(c + this.offset.top));
        var d = this.getPositionStyles(b, c);
        this.styleQueue.push({ $el: a, style: d }),
          this.options.itemPositionDataEnabled &&
            a.data("isotope-item-position", { x: b, y: c });
      },
      layout: function(a, b) {
        var c = this.options.layoutMode;
        this["_" + c + "Layout"](a);
        if (this.options.resizesContainer) {
          var d = this["_" + c + "GetContainerSize"]();
          this.styleQueue.push({ $el: this.element, style: d });
        }
        this._processStyleQueue(a, b), (this.isLaidOut = !0);
      },
      _processStyleQueue: function(a, c) {
        var d = this.isLaidOut
            ? this.isUsingJQueryAnimation
              ? "animate"
              : "css"
            : "css",
          f = this.options.animationOptions,
          g = this.options.onLayout,
          h,
          i,
          j,
          k;
        i = function(a, b) {
          b.$el[d](b.style, f);
        };
        if (this._isInserting && this.isUsingJQueryAnimation)
          i = function(a, b) {
            (h = b.$el.hasClass("no-transition") ? "css" : d),
              b.$el[h](b.style, f);
          };
        else if (c || g || f.complete) {
          var l = !1,
            m = [c, g, f.complete],
            n = this;
          (j = !0),
            (k = function() {
              if (l) return;
              var b;
              for (var c = 0, d = m.length; c < d; c++)
                (b = m[c]), typeof b == "function" && b.call(n.element, a, n);
              l = !0;
            });
          if (this.isUsingJQueryAnimation && d === "animate")
            (f.complete = k), (j = !1);
          else if (e.csstransitions) {
            var o = 0,
              p = this.styleQueue[0],
              s = p && p.$el,
              t;
            while (!s || !s.length) {
              t = this.styleQueue[o++];
              if (!t) return;
              s = t.$el;
            }
            var u = parseFloat(getComputedStyle(s[0])[r]);
            u > 0 &&
              ((i = function(a, b) {
                b.$el[d](b.style, f).one(q, k);
              }),
              (j = !1));
          }
        }
        b.each(this.styleQueue, i), j && k(), (this.styleQueue = []);
      },
      resize: function() {
        this["_" + this.options.layoutMode + "ResizeChanged"]() &&
          this.reLayout();
      },
      reLayout: function(a) {
        this["_" + this.options.layoutMode + "Reset"](),
          this.layout(this.$filteredAtoms, a);
      },
      addItems: function(a, b) {
        var c = this._getAtoms(a);
        (this.$allAtoms = this.$allAtoms.add(c)), b && b(c);
      },
      insert: function(a, b) {
        this.element.append(a);
        var c = this;
        this.addItems(a, function(a) {
          var d = c._filter(a);
          c._addHideAppended(d),
            c._sort(),
            c.reLayout(),
            c._revealAppended(d, b);
        });
      },
      appended: function(a, b) {
        var c = this;
        this.addItems(a, function(a) {
          c._addHideAppended(a), c.layout(a), c._revealAppended(a, b);
        });
      },
      _addHideAppended: function(a) {
        (this.$filteredAtoms = this.$filteredAtoms.add(a)),
          a.addClass("no-transition"),
          (this._isInserting = !0),
          this.styleQueue.push({ $el: a, style: this.options.hiddenStyle });
      },
      _revealAppended: function(a, b) {
        var c = this;
        setTimeout(function() {
          a.removeClass("no-transition"),
            c.styleQueue.push({ $el: a, style: c.options.visibleStyle }),
            (c._isInserting = !1),
            c._processStyleQueue(a, b);
        }, 10);
      },
      reloadItems: function() {
        this.$allAtoms = this._getAtoms(this.element.children());
      },
      remove: function(a, b) {
        (this.$allAtoms = this.$allAtoms.not(a)),
          (this.$filteredAtoms = this.$filteredAtoms.not(a));
        var c = this,
          d = function() {
            a.remove(), b && b.call(c.element);
          };
        a.filter(":not(." + this.options.hiddenClass + ")").length
          ? (this.styleQueue.push({ $el: a, style: this.options.hiddenStyle }),
            this._sort(),
            this.reLayout(d))
          : d();
      },
      shuffle: function(a) {
        this.updateSortData(this.$allAtoms),
          (this.options.sortBy = "random"),
          this._sort(),
          this.reLayout(a);
      },
      destroy: function() {
        var a = this.usingTransforms,
          b = this.options;
        this.$allAtoms
          .removeClass(b.hiddenClass + " " + b.itemClass)
          .each(function() {
            var b = this.style;
            (b.position = ""),
              (b.top = ""),
              (b.left = ""),
              (b.opacity = ""),
              a && (b[i] = "");
          });
        var c = this.element[0].style;
        for (var d in this.originalStyle) c[d] = this.originalStyle[d];
        this.element
          .unbind(".isotope")
          .undelegate("." + b.hiddenClass, "click")
          .removeClass(b.containerClass)
          .removeData("isotope"),
          w.unbind(".isotope");
      },
      _getSegments: function(a) {
        var b = this.options.layoutMode,
          c = a ? "rowHeight" : "columnWidth",
          d = a ? "height" : "width",
          e = a ? "rows" : "cols",
          g = this.element[d](),
          h,
          i =
            (this.options[b] && this.options[b][c]) ||
            this.$filteredAtoms["outer" + f(d)](!0) ||
            g;
        (h = Math.floor(g / i)),
          (h = Math.max(h, 1)),
          (this[b][e] = h),
          (this[b][c] = i);
      },
      _checkIfSegmentsChanged: function(a) {
        var b = this.options.layoutMode,
          c = a ? "rows" : "cols",
          d = this[b][c];
        return this._getSegments(a), this[b][c] !== d;
      },
      _masonryReset: function() {
        (this.masonry = {}), this._getSegments();
        var a = this.masonry.cols;
        this.masonry.colYs = [];
        while (a--) this.masonry.colYs.push(0);
      },
      _masonryLayout: function(a) {
        var c = this,
          d = c.masonry;
        a.each(function() {
          var a = b(this),
            e = Math.ceil(a.outerWidth(!0) / d.columnWidth);
          e = Math.min(e, d.cols);
          if (e === 1) c._masonryPlaceBrick(a, d.colYs);
          else {
            var f = d.cols + 1 - e,
              g = [],
              h,
              i;
            for (i = 0; i < f; i++)
              (h = d.colYs.slice(i, i + e)), (g[i] = Math.max.apply(Math, h));
            c._masonryPlaceBrick(a, g);
          }
        });
      },
      _masonryPlaceBrick: function(a, b) {
        var c = Math.min.apply(Math, b),
          d = 0;
        for (var e = 0, f = b.length; e < f; e++)
          if (b[e] === c) {
            d = e;
            break;
          }
        var g = this.masonry.columnWidth * d,
          h = c;
        this._pushPosition(a, g, h);
        var i = c + a.outerHeight(!0),
          j = this.masonry.cols + 1 - f;
        for (e = 0; e < j; e++) this.masonry.colYs[d + e] = i;
      },
      _masonryGetContainerSize: function() {
        var a = Math.max.apply(Math, this.masonry.colYs);
        return { height: a };
      },
      _masonryResizeChanged: function() {
        return this._checkIfSegmentsChanged();
      },
      _fitRowsReset: function() {
        this.fitRows = { x: 0, y: 0, height: 0 };
      },
      _fitRowsLayout: function(a) {
        var c = this,
          d = this.element.width(),
          e = this.fitRows;
        a.each(function() {
          var a = b(this),
            f = a.outerWidth(!0),
            g = a.outerHeight(!0);
          e.x !== 0 && f + e.x > d && ((e.x = 0), (e.y = e.height)),
            c._pushPosition(a, e.x, e.y),
            (e.height = Math.max(e.y + g, e.height)),
            (e.x += f);
        });
      },
      _fitRowsGetContainerSize: function() {
        return { height: this.fitRows.height };
      },
      _fitRowsResizeChanged: function() {
        return !0;
      },
      _cellsByRowReset: function() {
        (this.cellsByRow = { index: 0 }),
          this._getSegments(),
          this._getSegments(!0);
      },
      _cellsByRowLayout: function(a) {
        var c = this,
          d = this.cellsByRow;
        a.each(function() {
          var a = b(this),
            e = d.index % d.cols,
            f = Math.floor(d.index / d.cols),
            g = (e + 0.5) * d.columnWidth - a.outerWidth(!0) / 2,
            h = (f + 0.5) * d.rowHeight - a.outerHeight(!0) / 2;
          c._pushPosition(a, g, h), d.index++;
        });
      },
      _cellsByRowGetContainerSize: function() {
        return {
          height:
            Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) *
              this.cellsByRow.rowHeight +
            this.offset.top
        };
      },
      _cellsByRowResizeChanged: function() {
        return this._checkIfSegmentsChanged();
      },
      _straightDownReset: function() {
        this.straightDown = { y: 0 };
      },
      _straightDownLayout: function(a) {
        var c = this;
        a.each(function(a) {
          var d = b(this);
          c._pushPosition(d, 0, c.straightDown.y),
            (c.straightDown.y += d.outerHeight(!0));
        });
      },
      _straightDownGetContainerSize: function() {
        return { height: this.straightDown.y };
      },
      _straightDownResizeChanged: function() {
        return !0;
      },
      _masonryHorizontalReset: function() {
        (this.masonryHorizontal = {}), this._getSegments(!0);
        var a = this.masonryHorizontal.rows;
        this.masonryHorizontal.rowXs = [];
        while (a--) this.masonryHorizontal.rowXs.push(0);
      },
      _masonryHorizontalLayout: function(a) {
        var c = this,
          d = c.masonryHorizontal;
        a.each(function() {
          var a = b(this),
            e = Math.ceil(a.outerHeight(!0) / d.rowHeight);
          e = Math.min(e, d.rows);
          if (e === 1) c._masonryHorizontalPlaceBrick(a, d.rowXs);
          else {
            var f = d.rows + 1 - e,
              g = [],
              h,
              i;
            for (i = 0; i < f; i++)
              (h = d.rowXs.slice(i, i + e)), (g[i] = Math.max.apply(Math, h));
            c._masonryHorizontalPlaceBrick(a, g);
          }
        });
      },
      _masonryHorizontalPlaceBrick: function(a, b) {
        var c = Math.min.apply(Math, b),
          d = 0;
        for (var e = 0, f = b.length; e < f; e++)
          if (b[e] === c) {
            d = e;
            break;
          }
        var g = c,
          h = this.masonryHorizontal.rowHeight * d;
        this._pushPosition(a, g, h);
        var i = c + a.outerWidth(!0),
          j = this.masonryHorizontal.rows + 1 - f;
        for (e = 0; e < j; e++) this.masonryHorizontal.rowXs[d + e] = i;
      },
      _masonryHorizontalGetContainerSize: function() {
        var a = Math.max.apply(Math, this.masonryHorizontal.rowXs);
        return { width: a };
      },
      _masonryHorizontalResizeChanged: function() {
        return this._checkIfSegmentsChanged(!0);
      },
      _fitColumnsReset: function() {
        this.fitColumns = { x: 0, y: 0, width: 0 };
      },
      _fitColumnsLayout: function(a) {
        var c = this,
          d = this.element.height(),
          e = this.fitColumns;
        a.each(function() {
          var a = b(this),
            f = a.outerWidth(!0),
            g = a.outerHeight(!0);
          e.y !== 0 && g + e.y > d && ((e.x = e.width), (e.y = 0)),
            c._pushPosition(a, e.x, e.y),
            (e.width = Math.max(e.x + f, e.width)),
            (e.y += g);
        });
      },
      _fitColumnsGetContainerSize: function() {
        return { width: this.fitColumns.width };
      },
      _fitColumnsResizeChanged: function() {
        return !0;
      },
      _cellsByColumnReset: function() {
        (this.cellsByColumn = { index: 0 }),
          this._getSegments(),
          this._getSegments(!0);
      },
      _cellsByColumnLayout: function(a) {
        var c = this,
          d = this.cellsByColumn;
        a.each(function() {
          var a = b(this),
            e = Math.floor(d.index / d.rows),
            f = d.index % d.rows,
            g = (e + 0.5) * d.columnWidth - a.outerWidth(!0) / 2,
            h = (f + 0.5) * d.rowHeight - a.outerHeight(!0) / 2;
          c._pushPosition(a, g, h), d.index++;
        });
      },
      _cellsByColumnGetContainerSize: function() {
        return {
          width:
            Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) *
            this.cellsByColumn.columnWidth
        };
      },
      _cellsByColumnResizeChanged: function() {
        return this._checkIfSegmentsChanged(!0);
      },
      _straightAcrossReset: function() {
        this.straightAcross = { x: 0 };
      },
      _straightAcrossLayout: function(a) {
        var c = this;
        a.each(function(a) {
          var d = b(this);
          c._pushPosition(d, c.straightAcross.x, 0),
            (c.straightAcross.x += d.outerWidth(!0));
        });
      },
      _straightAcrossGetContainerSize: function() {
        return { width: this.straightAcross.x };
      },
      _straightAcrossResizeChanged: function() {
        return !0;
      }
    }),
    (b.fn.imagesLoaded = function(a) {
      function h() {
        a.call(c, d);
      }
      function i(a) {
        var c = a.target;
        c.src !== f &&
          b.inArray(c, g) === -1 &&
          (g.push(c),
          --e <= 0 && (setTimeout(h), d.unbind(".imagesLoaded", i)));
      }
      var c = this,
        d = c.find("img").add(c.filter("img")),
        e = d.length,
        f =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
        g = [];
      return (
        e || h(),
        d.bind("load.imagesLoaded error.imagesLoaded", i).each(function() {
          var a = this.src;
          (this.src = f), (this.src = a);
        }),
        c
      );
    });
  var x = function(b) {
    a.console && a.console.error(b);
  };
  b.fn.isotope = function(a, c) {
    if (typeof a == "string") {
      var d = Array.prototype.slice.call(arguments, 1);
      this.each(function() {
        var c = b.data(this, "isotope");
        if (!c) {
          x(
            "cannot call methods on isotope prior to initialization; attempted to call method '" +
              a +
              "'"
          );
          return;
        }
        if (!b.isFunction(c[a]) || a.charAt(0) === "_") {
          x("no such method '" + a + "' for isotope instance");
          return;
        }
        c[a].apply(c, d);
      });
    } else
      this.each(function() {
        var d = b.data(this, "isotope");
        d
          ? (d.option(a), d._init(c))
          : b.data(this, "isotope", new b.Isotope(a, this, c));
      });
    return this;
  };
})(window, jQuery);

/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/ (function(
  e
) {
  "use strict";
  e.fn.counterUp = function(t) {
    var n = e.extend({ time: 400, delay: 10 }, t);
    return this.each(function() {
      var t = e(this),
        r = n,
        i = function() {
          var e = [],
            n = r.time / r.delay,
            i = t.text(),
            s = /[0-9]+,[0-9]+/.test(i);
          i = i.replace(/,/g, "");
          var o = /^[0-9]+$/.test(i),
            u = /^[0-9]+\.[0-9]+$/.test(i),
            a = u ? (i.split(".")[1] || []).length : 0;
          for (var f = n; f >= 1; f--) {
            var l = parseInt((i / n) * f);
            u && (l = parseFloat((i / n) * f).toFixed(a));
            if (s)
              while (/(\d+)(\d{3})/.test(l.toString()))
                l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            e.unshift(l);
          }
          t.data("counterup-nums", e);
          t.text("0");
          var c = function() {
            t.text(t.data("counterup-nums").shift());
            if (t.data("counterup-nums").length)
              setTimeout(t.data("counterup-func"), r.delay);
            else {
              delete t.data("counterup-nums");
              t.data("counterup-nums", null);
              t.data("counterup-func", null);
            }
          };
          t.data("counterup-func", c);
          setTimeout(t.data("counterup-func"), r.delay);
        };
      t.waypoint(i, { offset: "100%", triggerOnce: !0 });
    });
  };
})(jQuery);

// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function() {
  var t =
      [].indexOf ||
      function(t) {
        for (var e = 0, n = this.length; e < n; e++) {
          if (e in this && this[e] === t) return e;
        }
        return -1;
      },
    e = [].slice;
  (function(t, e) {
    if (typeof define === "function" && define.amd) {
      return define("waypoints", ["jquery"], function(n) {
        return e(n, t);
      });
    } else {
      return e(t.jQuery, t);
    }
  })(this, function(n, r) {
    var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
    i = n(r);
    c = t.call(r, "ontouchstart") >= 0;
    s = { horizontal: {}, vertical: {} };
    f = 1;
    a = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";
    o = (function() {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() };
        this.waypoints = { horizontal: {}, vertical: {} };
        t.data(u, this.id);
        a[this.id] = this;
        t.bind(y, function() {
          var t;
          if (!(e.didScroll || c)) {
            e.didScroll = true;
            t = function() {
              e.doScroll();
              return (e.didScroll = false);
            };
            return r.setTimeout(t, n[m].settings.scrollThrottle);
          }
        });
        t.bind(p, function() {
          var t;
          if (!e.didResize) {
            e.didResize = true;
            t = function() {
              n[m]("refresh");
              return (e.didResize = false);
            };
            return r.setTimeout(t, n[m].settings.resizeThrottle);
          }
        });
      }
      t.prototype.doScroll = function() {
        var t,
          e = this;
        t = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left"
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up"
          }
        };
        if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh");
        }
        n.each(t, function(t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function(t, e) {
            var n, i;
            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e);
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e);
            }
          });
          l.sort(function(t, e) {
            return t.offset - e.offset;
          });
          if (!o) {
            l.reverse();
          }
          return n.each(l, function(t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i]);
            }
          });
        });
        return (this.oldScroll = {
          x: t.horizontal.newScroll,
          y: t.vertical.newScroll
        });
      };
      t.prototype.refresh = function() {
        var t,
          e,
          r,
          i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r
              ? n[m]("viewportHeight")
              : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
          }
        };
        return n.each(t, function(t, e) {
          return n.each(i.waypoints[t], function(t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
            if (n.isFunction(i)) {
              i = i.apply(r.element);
            } else if (typeof i === "string") {
              i = parseFloat(i);
              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil((e.contextDimension * i) / 100);
              }
            }
            r.offset = o - e.contextOffset + e.contextScroll - i;
            if ((r.options.onlyOnScroll && l != null) || !r.enabled) {
              return;
            }
            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward]);
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward]);
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward]);
            }
          });
        });
      };
      t.prototype.checkEmpty = function() {
        if (
          n.isEmptyObject(this.waypoints.horizontal) &&
          n.isEmptyObject(this.waypoints.vertical)
        ) {
          this.$element.unbind([p, y].join(" "));
          return delete a[this.id];
        }
      };
      return t;
    })();
    l = (function() {
      function t(t, e, r) {
        var i, o;
        r = n.extend({}, n.fn[g].defaults, r);
        if (r.offset === "bottom-in-view") {
          r.offset = function() {
            var t;
            t = n[m]("viewportHeight");
            if (!n.isWindow(e.element)) {
              t = e.$element.height();
            }
            return t - n(this).outerHeight();
          };
        }
        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = t.data(w)) != null ? o : [];
        i.push(this.id);
        t.data(w, i);
      }
      t.prototype.trigger = function(t) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, t);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };
      t.prototype.disable = function() {
        return (this.enabled = false);
      };
      t.prototype.enable = function() {
        this.context.refresh();
        return (this.enabled = true);
      };
      t.prototype.destroy = function() {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };
      t.getWaypointsByElement = function(t) {
        var e, r;
        r = n(t).data(w);
        if (!r) {
          return [];
        }
        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function(t) {
          return e[t];
        });
      };
      return t;
    })();
    d = {
      init: function(t, e) {
        var r;
        if (e == null) {
          e = {};
        }
        if ((r = e.handler) == null) {
          e.handler = t;
        }
        this.each(function() {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;
          if (!n.isWindow(i)) {
            i = t.closest(i);
          }
          i = n(i);
          r = a[i.data(u)];
          if (!r) {
            r = new o(i);
          }
          return new l(t, r, e);
        });
        n[m]("refresh");
        return this;
      },
      disable: function() {
        return d._invoke(this, "disable");
      },
      enable: function() {
        return d._invoke(this, "enable");
      },
      destroy: function() {
        return d._invoke(this, "destroy");
      },
      prev: function(t, e) {
        return d._traverse.call(this, t, e, function(t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1]);
          }
        });
      },
      next: function(t, e) {
        return d._traverse.call(this, t, e, function(t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1]);
          }
        });
      },
      _traverse: function(t, e, i) {
        var o, l;
        if (t == null) {
          t = "vertical";
        }
        if (e == null) {
          e = r;
        }
        l = h.aggregate(e);
        o = [];
        this.each(function() {
          var e;
          e = n.inArray(this, l[t]);
          return i(o, e, l[t]);
        });
        return this.pushStack(o);
      },
      _invoke: function(t, e) {
        t.each(function() {
          var t;
          t = l.getWaypointsByElement(this);
          return n.each(t, function(t, n) {
            n[e]();
            return true;
          });
        });
        return this;
      }
    };
    n.fn[g] = function() {
      var t, r;
      (r = arguments[0]),
        (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (d[r]) {
        return d[r].apply(this, t);
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments);
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r]);
      } else if (!r) {
        return n.error(
          "jQuery Waypoints needs a callback function or handler option."
        );
      } else {
        return n.error(
          "The " + r + " method does not exist in jQuery Waypoints."
        );
      }
    };
    n.fn[g].defaults = {
      context: r,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    h = {
      refresh: function() {
        return n.each(a, function(t, e) {
          return e.refresh();
        });
      },
      viewportHeight: function() {
        var t;
        return (t = r.innerHeight) != null ? t : i.height();
      },
      aggregate: function(t) {
        var e, r, i;
        e = s;
        if (t) {
          e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0;
        }
        if (!e) {
          return [];
        }
        r = { horizontal: [], vertical: [] };
        n.each(r, function(t, i) {
          n.each(e[t], function(t, e) {
            return i.push(e);
          });
          i.sort(function(t, e) {
            return t.offset - e.offset;
          });
          r[t] = n.map(i, function(t) {
            return t.element;
          });
          return (r[t] = n.unique(r[t]));
        });
        return r;
      },
      above: function(t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "vertical", function(t, e) {
          return e.offset <= t.oldScroll.y;
        });
      },
      below: function(t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "vertical", function(t, e) {
          return e.offset > t.oldScroll.y;
        });
      },
      left: function(t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "horizontal", function(t, e) {
          return e.offset <= t.oldScroll.x;
        });
      },
      right: function(t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "horizontal", function(t, e) {
          return e.offset > t.oldScroll.x;
        });
      },
      enable: function() {
        return h._invoke("enable");
      },
      disable: function() {
        return h._invoke("disable");
      },
      destroy: function() {
        return h._invoke("destroy");
      },
      extendFn: function(t, e) {
        return (d[t] = e);
      },
      _invoke: function(t) {
        var e;
        e = n.extend({}, s.vertical, s.horizontal);
        return n.each(e, function(e, n) {
          n[t]();
          return true;
        });
      },
      _filter: function(t, e, r) {
        var i, o;
        i = a[n(t).data(u)];
        if (!i) {
          return [];
        }
        o = [];
        n.each(i.waypoints[e], function(t, e) {
          if (r(i, e)) {
            return o.push(e);
          }
        });
        o.sort(function(t, e) {
          return t.offset - e.offset;
        });
        return n.map(o, function(t) {
          return t.element;
        });
      }
    };
    n[m] = function() {
      var t, n;
      (n = arguments[0]),
        (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (h[n]) {
        return h[n].apply(null, t);
      } else {
        return h.aggregate.call(null, n);
      }
    };
    n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 };
    return i.load(function() {
      return n[m]("refresh");
    });
  });
}.call(this));

/*
                       _ _ _____                      _   _
                      | | |  __ \                    | | (_)
    ___  ___ _ __ ___ | | | |__) |_____   _____  __ _| |  _ ___
   / __|/ __| '__/ _ \| | |  _  // _ \ \ / / _ \/ _` | | | / __|
   \__ \ (__| | | (_) | | | | \ \  __/\ V /  __/ (_| | |_| \__ \
   |___/\___|_|  \___/|_|_|_|  \_\___| \_/ \___|\__,_|_(_) |___/
                                                        _/ |
                                                       |__/

    "Declarative on-scroll reveal animations."

/*=============================================================================

    scrollReveal.js is inspired by cbpScroller.js, © 2014, Codrops.

    Licensed under the MIT license.
    http://www.opensource.org/licenses/mit-license.php

    scrollReveal.js, © 2014 https://twitter.com/julianlloyd

=============================================================================*/

(function(window) {
  "use strict";
  var docElem = window.document.documentElement;
  function getViewportH() {
    var client = docElem["clientHeight"],
      inner = window["innerHeight"];
    return client < inner ? inner : client;
  }
  function getOffset(el) {
    var offsetTop = 0,
      offsetLeft = 0;
    do {
      if (!isNaN(el.offsetTop)) {
        offsetTop += el.offsetTop;
      }
      if (!isNaN(el.offsetLeft)) {
        offsetLeft += el.offsetLeft;
      }
    } while ((el = el.offsetParent));
    return { top: offsetTop, left: offsetLeft };
  }
  function isElementInViewport(el, h) {
    var scrolled = window.pageYOffset,
      viewed = scrolled + getViewportH(),
      elH = el.offsetHeight,
      elTop = getOffset(el).top,
      elBottom = elTop + elH,
      h = h || 0;
    return elTop + elH * h <= viewed && elBottom >= scrolled;
  }
  function extend(a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }
  function scrollReveal(options) {
    this.options = extend(this.defaults, options);
    this._init();
  }
  scrollReveal.prototype = {
    defaults: {
      axis: "y",
      distance: "25px",
      duration: "0.66s",
      delay: "0s",
      viewportFactor: 0.33
    },
    _init: function() {
      var self = this;
      this.elems = Array.prototype.slice.call(
        docElem.querySelectorAll("[data-scrollReveal]")
      );
      this.scrolled = false;
      this.elems.forEach(function(el, i) {
        self.animate(el);
      });
      var scrollHandler = function() {
        if (!self.scrolled) {
          self.scrolled = true;
          setTimeout(function() {
            self._scrollPage();
          }, 60);
        }
      };
      var resizeHandler = function() {
        function delayed() {
          self._scrollPage();
          self.resizeTimeout = null;
        }
        if (self.resizeTimeout) {
          clearTimeout(self.resizeTimeout);
        }
        self.resizeTimeout = setTimeout(delayed, 200);
      };
      window.addEventListener("scroll", scrollHandler, false);
      window.addEventListener("resize", resizeHandler, false);
    },
    _scrollPage: function() {
      var self = this;
      this.elems.forEach(function(el, i) {
        if (isElementInViewport(el, self.options.viewportFactor)) {
          self.animate(el);
        }
      });
      this.scrolled = false;
    },
    parseLanguage: function(el) {
      var words = el.getAttribute("data-scrollreveal").split(/[, ]+/),
        enterFrom,
        parsed = {};
      function filter(words) {
        var ret = [],
          blacklist = ["from", "the", "and", "then", "but"];
        words.forEach(function(word, i) {
          if (blacklist.indexOf(word) > -1) {
            return;
          }
          ret.push(word);
        });
        return ret;
      }
      words = filter(words);
      words.forEach(function(word, i) {
        switch (word) {
          case "enter":
            enterFrom = words[i + 1];
            if (enterFrom == "top" || enterFrom == "bottom") {
              parsed.axis = "y";
            }
            if (enterFrom == "left" || enterFrom == "right") {
              parsed.axis = "x";
            }
            return;
          case "after":
            parsed.delay = words[i + 1];
            return;
          case "wait":
            parsed.delay = words[i + 1];
            return;
          case "move":
            parsed.distance = words[i + 1];
            return;
          case "over":
            parsed.duration = words[i + 1];
            return;
          case "trigger":
            parsed.eventName = words[i + 1];
            return;
          default:
            return;
        }
      });
      if (enterFrom == "top" || enterFrom == "left") {
        if (!typeof parsed.distance == "undefined") {
          parsed.distance = "-" + parsed.distance;
        } else {
          parsed.distance = "-" + this.options.distance;
        }
      }
      return parsed;
    },
    genCSS: function(el, axis) {
      var parsed = this.parseLanguage(el);
      var dist = parsed.distance || this.options.distance,
        dur = parsed.duration || this.options.duration,
        delay = parsed.delay || this.options.delay,
        axis = parsed.axis || this.options.axis;
      var transition =
        "-webkit-transition: all " +
        dur +
        " ease " +
        delay +
        ";" +
        "-moz-transition: all " +
        dur +
        " ease " +
        delay +
        ";" +
        "-o-transition: all " +
        dur +
        " ease " +
        delay +
        ";" +
        "transition: all " +
        dur +
        " ease " +
        delay +
        ";";
      var initial =
        "-webkit-transform: translate" +
        axis +
        "(" +
        dist +
        ");" +
        "-moz-transform: translate" +
        axis +
        "(" +
        dist +
        ");" +
        "transform: translate" +
        axis +
        "(" +
        dist +
        ");" +
        "opacity: 0;";
      var target =
        "-webkit-transform: translate" +
        axis +
        "(0);" +
        "-moz-transform: translate" +
        axis +
        "(0);" +
        "transform: translate" +
        axis +
        "(0);" +
        "opacity: 1;";
      return {
        transition: transition,
        initial: initial,
        target: target,
        totalDuration: (parseFloat(dur) + parseFloat(delay)) * 1000
      };
    },
    animate: function(el) {
      var css = this.genCSS(el);
      if (!el.getAttribute("data-sr-init")) {
        el.setAttribute("style", css.initial);
        el.setAttribute("data-sr-init", true);
      }
      if (el.getAttribute("data-sr-complete")) {
        return;
      }
      if (isElementInViewport(el, this.options.viewportFactor)) {
        el.setAttribute("style", css.target + css.transition);
        setTimeout(function() {
          el.removeAttribute("style");
          el.setAttribute("data-sr-complete", true);
        }, css.totalDuration);
      }
    }
  };
  document.addEventListener("DOMContentLoaded", function(evt) {
    window.scrollReveal = new scrollReveal();
  });
})(window);

/* jquery.nicescroll 3.1.2 InuYaksa*2012 MIT http://areaaperta.com/nicescroll */ (function(
  e
) {
  var r = false,
    w = false,
    B = 5e3,
    C = 2e3,
    D = (function() {
      var e = document.getElementsByTagName("script"),
        e = e[e.length - 1].src.split("?")[0];
      return e.split("/").length > 0
        ? e
            .split("/")
            .slice(0, -1)
            .join("/") + "/"
        : "";
    })(),
    p =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      false,
    q =
      window.cancelRequestAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      false,
    x = false,
    E = function() {
      if (x) return x;
      var e = document.createElement("DIV"),
        c = {
          haspointerlock:
            "pointerLockElement" in document ||
            "mozPointerLockElement" in document ||
            "webkitPointerLockElement" in document
        };
      c.isopera = "opera" in window;
      c.isopera12 = c.isopera && "getUserMedia" in navigator;
      c.isie = "all" in document && "attachEvent" in e && !c.isopera;
      c.isieold = c.isie && !("msInterpolationMode" in e.style);
      c.isie7 =
        c.isie &&
        !c.isieold &&
        (!("documentMode" in document) || document.documentMode == 7);
      c.isie8 =
        c.isie && "documentMode" in document && document.documentMode == 8;
      c.isie9 = c.isie && "performance" in window && document.documentMode >= 9;
      c.isie10 =
        c.isie && "performance" in window && document.documentMode >= 10;
      c.isie9mobile = /iemobile.9/i.test(navigator.userAgent);
      if (c.isie9mobile) c.isie9 = false;
      c.isie7mobile =
        !c.isie9mobile && c.isie7 && /iemobile/i.test(navigator.userAgent);
      c.ismozilla = "MozAppearance" in e.style;
      c.iswebkit = "WebkitAppearance" in e.style;
      c.ischrome = "chrome" in window;
      c.ischrome22 = c.ischrome && c.haspointerlock;
      c.cantouch =
        "ontouchstart" in document.documentElement || "ontouchstart" in window;
      c.hasmstouch = window.navigator.msPointerEnabled || false;
      c.ismac = /^mac$/i.test(navigator.platform);
      c.isios = c.cantouch && /iphone|ipad|ipod/i.test(navigator.platform);
      c.isios4 = c.isios && !("seal" in Object);
      c.isandroid = /android/i.test(navigator.userAgent);
      c.trstyle = false;
      c.hastransform = false;
      c.hastranslate3d = false;
      c.transitionstyle = false;
      c.hastransition = false;
      c.transitionend = false;
      for (
        var h = [
            "transform",
            "msTransform",
            "webkitTransform",
            "MozTransform",
            "OTransform"
          ],
          i = 0;
        i < h.length;
        i++
      )
        if (typeof e.style[h[i]] != "undefined") {
          c.trstyle = h[i];
          break;
        }
      c.hastransform = c.trstyle != false;
      if (c.hastransform)
        (e.style[c.trstyle] = "translate3d(1px,2px,3px)"),
          (c.hastranslate3d = /translate3d/.test(e.style[c.trstyle]));
      c.transitionstyle = false;
      c.prefixstyle = "";
      c.transitionend = false;
      for (
        var h = "transition,webkitTransition,MozTransition,OTransition,OTransition,msTransition,KhtmlTransition".split(
            ","
          ),
          b = ",-webkit-,-moz-,-o-,-o,-ms-,-khtml-".split(","),
          n = "transitionend,webkitTransitionEnd,transitionend,otransitionend,oTransitionEnd,msTransitionEnd,KhtmlTransitionEnd".split(
            ","
          ),
          i = 0;
        i < h.length;
        i++
      )
        if (h[i] in e.style) {
          c.transitionstyle = h[i];
          c.prefixstyle = b[i];
          c.transitionend = n[i];
          break;
        }
      c.hastransition = c.transitionstyle;
      a: {
        h = ["-moz-grab", "-webkit-grab", "grab"];
        if ((c.ischrome && !c.ischrome22) || c.isie) h = [];
        for (i = 0; i < h.length; i++)
          if (((b = h[i]), (e.style.cursor = b), e.style.cursor == b)) {
            h = b;
            break a;
          }
        h =
          "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize";
      }
      c.cursorgrabvalue = h;
      c.hasmousecapture = "setCapture" in e;
      return (x = c);
    },
    F = function(j, c) {
      function h(d, c, g) {
        c = d.css(c);
        d = parseFloat(c);
        return isNaN(d)
          ? ((d = o[c] || 0),
            (g =
              d == 3
                ? g
                  ? b.win.outerHeight() - b.win.innerHeight()
                  : b.win.outerWidth() - b.win.innerWidth()
                : 1),
            b.isie8 && d && (d += 1),
            g ? d : 0)
          : d;
      }
      function i(d, c) {
        var g = 0,
          f = 0,
          e = 1;
        "wheelDeltaY" in d
          ? ((e = b.opt.mousescrollstep / 48),
            (g = Math.floor(d.wheelDeltaX * e)),
            (f = Math.floor(d.wheelDeltaY * e)),
            c && g == 0 && f && ((g = f), (f = 0)))
          : (e = d.detail ? d.detail * -1 : d.wheelDelta / 40) &&
            (c
              ? (g = Math.floor(e * b.opt.mousescrollstep))
              : (f = Math.floor(e * b.opt.mousescrollstep)));
        g &&
          (b.scrollmom && b.scrollmom.stop(),
          (b.lastdeltax += g),
          b.synched("mousewheelx", function() {
            var d = b.lastdeltax;
            b.lastdeltax = 0;
            b.rail.drag || b.doScrollLeftBy(d);
          }));
        f &&
          (b.scrollmom && b.scrollmom.stop(),
          (b.lastdeltay += f),
          b.synched("mousewheely", function() {
            var d = b.lastdeltay;
            b.lastdeltay = 0;
            b.rail.drag || b.doScrollBy(d);
          }));
      }
      var b = this;
      this.version = "3.1.4";
      this.name = "nicescroll";
      this.me = c;
      this.opt = {
        doc: e("body"),
        win: false,
        zindex: 100000,
        cursoropacitymin: 0.2,
        cursoropacitymax: 1,
        cursorcolor: "#bdbdbd",
        cursorwidth: "7px",
        cursorborder: "",
        cursorborderradius: "1px",
        scrollspeed: 60,
        mousescrollstep: 40,
        touchbehavior: false,
        hwacceleration: true,
        usetransition: true,
        boxzoom: false,
        dblclickzoom: true,
        gesturezoom: true,
        grabcursorenabled: true,
        autohidemode: false,
        background: "#827b7d",
        iframeautoresize: true,
        cursorminheight: 32,
        preservenativescrolling: true,
        railoffset: false,
        bouncescroll: true,
        spacebarenabled: true,
        railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
        disableoutline: true,
        horizrailenabled: true,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: true,
        enablemousewheel: true,
        enablekeyboard: true,
        smoothscroll: true,
        sensitiverail: true,
        enablemouselockapi: true,
        cursorfixedheight: false
      };
      this.opt.snapbackspeed = 80;
      if (j)
        for (var n in b.opt) typeof j[n] != "undefined" && (b.opt[n] = j[n]);
      this.iddoc =
        (this.doc = b.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";
      this.ispage = /BODY|HTML/.test(
        b.opt.win ? b.opt.win[0].nodeName : this.doc[0].nodeName
      );
      this.haswrapper = b.opt.win !== false;
      this.win = b.opt.win || (this.ispage ? e(window) : this.doc);
      this.docscroll = this.ispage && !this.haswrapper ? e(window) : this.win;
      this.body = e("body");
      this.iframe = this.isfixed = this.viewport = false;
      this.isiframe =
        this.doc[0].nodeName == "IFRAME" && this.win[0].nodeName == "IFRAME";
      this.istextarea = this.win[0].nodeName == "TEXTAREA";
      this.forcescreen = false;
      this.canshowonmouseevent = b.opt.autohidemode != "scroll";
      this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = false;
      this.scroll = { x: 0, y: 0 };
      this.scrollratio = { x: 0, y: 0 };
      this.cursorheight = 20;
      this.scrollvaluemax = 0;
      this.observer = this.scrollmom = this.scrollrunning = false;
      do this.id = "ascrail" + C++;
      while (document.getElementById(this.id));
      this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.cursorfreezed = this.cursor = this.rail = false;
      this.visibility = true;
      this.hidden = this.locked = false;
      this.cursoractive = true;
      this.nativescrollingarea = false;
      this.events = [];
      this.saved = {};
      this.delaylist = {};
      this.synclist = {};
      this.lastdeltay = this.lastdeltax = 0;
      this.detected = E();
      var f = e.extend({}, this.detected);
      this.ishwscroll =
        (this.canhwscroll = f.hastransform && b.opt.hwacceleration) &&
        b.haswrapper;
      this.istouchcapable = false;
      if (f.cantouch && f.ischrome && !f.isios && !f.isandroid)
        (this.istouchcapable = true), (f.cantouch = false);
      if (f.cantouch && f.ismozilla && !f.isios)
        (this.istouchcapable = true), (f.cantouch = false);
      if (!b.opt.enablemouselockapi)
        (f.hasmousecapture = false), (f.haspointerlock = false);
      this.delayed = function(d, c, g, f) {
        var e = b.delaylist[d],
          h = new Date().getTime();
        if (!f && e && e.tt) return false;
        e && e.tt && clearTimeout(e.tt);
        if (e && e.last + g > h && !e.tt)
          b.delaylist[d] = {
            last: h + g,
            tt: setTimeout(function() {
              b.delaylist[d].tt = 0;
              c.call();
            }, g)
          };
        else if (!e || !e.tt)
          (b.delaylist[d] = { last: h, tt: 0 }),
            setTimeout(function() {
              c.call();
            }, 0);
      };
      this.synched = function(d, c) {
        b.synclist[d] = c;
        (function() {
          if (!b.onsync)
            p(function() {
              b.onsync = false;
              for (d in b.synclist) {
                var c = b.synclist[d];
                c && c.call(b);
                b.synclist[d] = false;
              }
            }),
              (b.onsync = true);
        })();
        return d;
      };
      this.unsynched = function(d) {
        b.synclist[d] && (b.synclist[d] = false);
      };
      this.css = function(d, c) {
        for (var g in c) b.saved.css.push([d, g, d.css(g)]), d.css(g, c[g]);
      };
      this.scrollTop = function(d) {
        return typeof d == "undefined" ? b.getScrollTop() : b.setScrollTop(d);
      };
      this.scrollLeft = function(d) {
        return typeof d == "undefined" ? b.getScrollLeft() : b.setScrollLeft(d);
      };
      BezierClass = function(b, c, g, f, e, h, i) {
        this.st = b;
        this.ed = c;
        this.spd = g;
        this.p1 = f || 0;
        this.p2 = e || 1;
        this.p3 = h || 0;
        this.p4 = i || 1;
        this.ts = new Date().getTime();
        this.df = this.ed - this.st;
      };
      BezierClass.prototype = {
        B2: function(b) {
          return 3 * b * b * (1 - b);
        },
        B3: function(b) {
          return 3 * b * (1 - b) * (1 - b);
        },
        B4: function(b) {
          return (1 - b) * (1 - b) * (1 - b);
        },
        getNow: function() {
          var b = 1 - (new Date().getTime() - this.ts) / this.spd,
            c = this.B2(b) + this.B3(b) + this.B4(b);
          return b < 0 ? this.ed : this.st + Math.round(this.df * c);
        },
        update: function(b, c) {
          this.st = this.getNow();
          this.ed = b;
          this.spd = c;
          this.ts = new Date().getTime();
          this.df = this.ed - this.st;
          return this;
        }
      };
      if (this.ishwscroll) {
        this.doc.translate = { x: 0, y: 0, tx: "0px", ty: "0px" };
        f.hastranslate3d &&
          f.isios &&
          this.doc.css("-webkit-backface-visibility", "hidden");
        var m = function() {
          var d = b.doc.css(f.trstyle);
          return d && d.substr(0, 6) == "matrix"
            ? d
                .replace(/^.*\((.*)\)$/g, "$1")
                .replace(/px/g, "")
                .split(/, +/)
            : false;
        };
        this.getScrollTop = function(d) {
          if (!d) {
            if ((d = m())) return d.length == 16 ? -d[13] : -d[5];
            if (b.timerscroll && b.timerscroll.bz)
              return b.timerscroll.bz.getNow();
          }
          return b.doc.translate.y;
        };
        this.getScrollLeft = function(d) {
          if (!d) {
            if ((d = m())) return d.length == 16 ? -d[12] : -d[4];
            if (b.timerscroll && b.timerscroll.bh)
              return b.timerscroll.bh.getNow();
          }
          return b.doc.translate.x;
        };
        this.notifyScrollEvent = document.createEvent
          ? function(b) {
              var c = document.createEvent("UIEvents");
              c.initUIEvent("scroll", false, true, window, 1);
              b.dispatchEvent(c);
            }
          : document.fireEvent
            ? function(b) {
                var c = document.createEventObject();
                b.fireEvent("onscroll");
                c.cancelBubble = true;
              }
            : function() {};
        f.hastranslate3d && b.opt.enabletranslate3d
          ? ((this.setScrollTop = function(d, c) {
              b.doc.translate.y = d;
              b.doc.translate.ty = d * -1 + "px";
              b.doc.css(
                f.trstyle,
                "translate3d(" +
                  b.doc.translate.tx +
                  "," +
                  b.doc.translate.ty +
                  ",0px)"
              );
              c || b.notifyScrollEvent(b.win[0]);
            }),
            (this.setScrollLeft = function(d, c) {
              b.doc.translate.x = d;
              b.doc.translate.tx = d * -1 + "px";
              b.doc.css(
                f.trstyle,
                "translate3d(" +
                  b.doc.translate.tx +
                  "," +
                  b.doc.translate.ty +
                  ",0px)"
              );
              c || b.notifyScrollEvent(b.win[0]);
            }))
          : ((this.setScrollTop = function(d, c) {
              b.doc.translate.y = d;
              b.doc.translate.ty = d * -1 + "px";
              b.doc.css(
                f.trstyle,
                "translate(" +
                  b.doc.translate.tx +
                  "," +
                  b.doc.translate.ty +
                  ")"
              );
              c || b.notifyScrollEvent(b.win[0]);
            }),
            (this.setScrollLeft = function(d, c) {
              b.doc.translate.x = d;
              b.doc.translate.tx = d * -1 + "px";
              b.doc.css(
                f.trstyle,
                "translate(" +
                  b.doc.translate.tx +
                  "," +
                  b.doc.translate.ty +
                  ")"
              );
              c || b.notifyScrollEvent(b.win[0]);
            }));
      } else
        (this.getScrollTop = function() {
          return b.docscroll.scrollTop();
        }),
          (this.setScrollTop = function(d) {
            return b.docscroll.scrollTop(d);
          }),
          (this.getScrollLeft = function() {
            return b.docscroll.scrollLeft();
          }),
          (this.setScrollLeft = function(d) {
            return b.docscroll.scrollLeft(d);
          });
      this.getTarget = function(b) {
        return !b
          ? false
          : b.target
            ? b.target
            : b.srcElement
              ? b.srcElement
              : false;
      };
      this.hasParent = function(b, c) {
        if (!b) return false;
        for (var g = b.target || b.srcElement || b || false; g && g.id != c; )
          g = g.parentNode || false;
        return g !== false;
      };
      var o = { thin: 1, medium: 3, thick: 5 };
      this.getOffset = function() {
        if (b.isfixed)
          return {
            top: parseFloat(b.win.css("top")),
            left: parseFloat(b.win.css("left"))
          };
        if (!b.viewport) return b.win.offset();
        var d = b.win.offset(),
          c = b.viewport.offset();
        return {
          top: d.top - c.top + b.viewport.scrollTop(),
          left: d.left - c.left + b.viewport.scrollLeft()
        };
      };
      this.updateScrollBar = function(d) {
        if (b.ishwscroll)
          b.rail.css({ height: b.win.innerHeight() }),
            b.railh && b.railh.css({ width: b.win.innerWidth() });
        else {
          var c = b.getOffset(),
            g = c.top,
            f = c.left;
          g += h(b.win, "border-top-width", true);
          b.win.outerWidth();
          b.win.innerWidth();
          f += b.rail.align
            ? b.win.outerWidth() - h(b.win, "border-right-width") - b.rail.width
            : h(b.win, "border-left-width");
          var e = b.opt.railoffset;
          e && (e.top && (g += e.top), b.rail.align && e.left && (f += e.left));
          b.locked ||
            b.rail.css({
              top: g,
              left: f,
              height: d ? d.h : b.win.innerHeight()
            });
          b.zoom &&
            b.zoom.css({
              top: g + 1,
              left: b.rail.align == 1 ? f - 20 : f + b.rail.width + 4
            });
          if (b.railh && !b.locked)
            (g = c.top),
              (f = c.left),
              (d = b.railh.align
                ? g +
                  h(b.win, "border-top-width", true) +
                  b.win.innerHeight() -
                  b.railh.height
                : g + h(b.win, "border-top-width", true)),
              (f += h(b.win, "border-left-width")),
              b.railh.css({ top: d, left: f, width: b.railh.width });
        }
      };
      this.doRailClick = function(d, c, g) {
        var f;
        !(b.rail.drag && b.rail.drag.pt != 1) &&
          !b.locked &&
          !b.rail.drag &&
          (b.cancelScroll(),
          b.cancelEvent(d),
          c
            ? ((c = g ? b.doScrollLeft : b.doScrollTop),
              (f = g
                ? (d.pageX - b.railh.offset().left - b.cursorwidth / 2) *
                  b.scrollratio.x
                : (d.pageY - b.rail.offset().top - b.cursorheight / 2) *
                  b.scrollratio.y),
              c(f))
            : ((c = g ? b.doScrollLeftBy : b.doScrollBy),
              (f = g ? b.scroll.x : b.scroll.y),
              (d = g
                ? d.pageX - b.railh.offset().left
                : d.pageY - b.rail.offset().top),
              (g = g ? b.view.w : b.view.h),
              f >= d ? c(g) : c(-g)));
      };
      b.hasanimationframe = p;
      b.hascancelanimationframe = q;
      b.hasanimationframe
        ? b.hascancelanimationframe ||
          (q = function() {
            b.cancelAnimationFrame = true;
          })
        : ((p = function(b) {
            return setTimeout(b, 16);
          }),
          (q = clearInterval));
      this.init = function() {
        b.saved.css = [];
        if (f.isie7mobile) return true;
        f.hasmstouch &&
          b.css(b.ispage ? e("html") : b.win, { "-ms-touch-action": "none" });
        if (!b.ispage || (!f.cantouch && !f.isieold && !f.isie9mobile)) {
          var d = b.docscroll;
          b.ispage && (d = b.haswrapper ? b.win : b.doc);
          f.isie9mobile || b.css(d, { "overflow-y": "hidden" });
          b.ispage &&
            f.isie7 &&
            (b.doc[0].nodeName == "BODY"
              ? b.css(e("html"), { "overflow-y": "hidden" })
              : b.doc[0].nodeName == "HTML" &&
                b.css(e("body"), { "overflow-y": "hidden" }));
          f.isios &&
            !b.ispage &&
            !b.haswrapper &&
            b.css(e("body"), { "-webkit-overflow-scrolling": "touch" });
          var c = e(document.createElement("div"));
          c.css({
            position: "relative",
            top: 0,
            float: "right",
            width: b.opt.cursorwidth,
            height: "0px",
            "background-color": b.opt.cursorcolor,
            border: b.opt.cursorborder,
            "background-clip": "padding-box",
            "-webkit-border-radius": b.opt.cursorborderradius,
            "-moz-border-radius": b.opt.cursorborderradius,
            "border-radius": b.opt.cursorborderradius
          });
          c.hborder = parseFloat(c.outerHeight() - c.innerHeight());
          b.cursor = c;
          var g = e(document.createElement("div"));
          g.attr("id", b.id);
          var h,
            i,
            j = ["left", "right"],
            y;
          for (y in j)
            (i = j[y]),
              (h = b.opt.railpadding[i])
                ? g.css("padding-" + i, h + "px")
                : (b.opt.railpadding[i] = 0);
          g.append(c);
          g.width =
            Math.max(parseFloat(b.opt.cursorwidth), c.outerWidth()) +
            b.opt.railpadding.left +
            b.opt.railpadding.right;
          g.css({
            width: g.width + "px",
            zIndex: b.ispage ? b.opt.zindex : b.opt.zindex + 2,
            background: b.opt.background
          });
          g.visibility = true;
          g.scrollable = true;
          g.align = b.opt.railalign == "left" ? 0 : 1;
          b.rail = g;
          c = b.rail.drag = false;
          if (
            b.opt.boxzoom &&
            !b.ispage &&
            !f.isieold &&
            ((c = document.createElement("div")),
            b.bind(c, "click", b.doZoom),
            (b.zoom = e(c)),
            b.zoom.css({
              cursor: "pointer",
              "z-index": b.opt.zindex,
              backgroundImage: "url(" + D + "zoomico.png)",
              height: 18,
              width: 18,
              backgroundPosition: "0px 0px"
            }),
            b.opt.dblclickzoom && b.bind(b.win, "dblclick", b.doZoom),
            f.cantouch && b.opt.gesturezoom)
          )
            (b.ongesturezoom = function(d) {
              d.scale > 1.5 && b.doZoomIn(d);
              d.scale < 0.8 && b.doZoomOut(d);
              return b.cancelEvent(d);
            }),
              b.bind(b.win, "gestureend", b.ongesturezoom);
          b.railh = false;
          if (b.opt.horizrailenabled) {
            b.css(d, { "overflow-x": "hidden" });
            c = e(document.createElement("div"));
            c.css({
              position: "relative",
              top: 0,
              height: b.opt.cursorwidth,
              width: "0px",
              "background-color": b.opt.cursorcolor,
              border: b.opt.cursorborder,
              "background-clip": "padding-box",
              "-webkit-border-radius": b.opt.cursorborderradius,
              "-moz-border-radius": b.opt.cursorborderradius,
              "border-radius": b.opt.cursorborderradius
            });
            c.wborder = parseFloat(c.outerWidth() - c.innerWidth());
            b.cursorh = c;
            var k = e(document.createElement("div"));
            k.attr("id", b.id + "-hr");
            k.height =
              1 + Math.max(parseFloat(b.opt.cursorwidth), c.outerHeight());
            k.css({
              height: k.height + "px",
              zIndex: b.ispage ? b.opt.zindex : b.opt.zindex + 2,
              background: b.opt.background
            });
            k.append(c);
            k.visibility = true;
            k.scrollable = true;
            k.align = b.opt.railvalign == "top" ? 0 : 1;
            b.railh = k;
            b.railh.drag = false;
          }
          if (b.ispage)
            g.css({ position: "fixed", top: "0px", height: "100%" }),
              g.align ? g.css({ right: "0px" }) : g.css({ left: "0px" }),
              b.body.append(g),
              b.railh &&
                (k.css({ position: "fixed", left: "0px", width: "100%" }),
                k.align ? k.css({ bottom: "0px" }) : k.css({ top: "0px" }),
                b.body.append(k));
          else {
            if (b.ishwscroll)
              b.win.css("position") == "static" &&
                b.css(b.win, { position: "relative" }),
                (d = b.win[0].nodeName == "HTML" ? b.body : b.win),
                b.zoom &&
                  (b.zoom.css({
                    position: "absolute",
                    top: 1,
                    right: 0,
                    "margin-right": g.width + 4
                  }),
                  d.append(b.zoom)),
                g.css({ position: "absolute", top: 0 }),
                g.align ? g.css({ right: 0 }) : g.css({ left: 0 }),
                d.append(g),
                k &&
                  (k.css({ position: "absolute", left: 0, bottom: 0 }),
                  k.align ? k.css({ bottom: 0 }) : k.css({ top: 0 }),
                  d.append(k));
            else {
              b.isfixed = b.win.css("position") == "fixed";
              d = b.isfixed ? "fixed" : "absolute";
              if (!b.isfixed) b.viewport = b.getViewport(b.win[0]);
              if (b.viewport) b.body = b.viewport;
              g.css({ position: d });
              b.zoom && b.zoom.css({ position: d });
              b.updateScrollBar();
              b.body.append(g);
              b.zoom && b.body.append(b.zoom);
              b.railh && (k.css({ position: d }), b.body.append(k));
            }
            f.isios &&
              b.css(b.win, {
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                "-webkit-touch-callout": "none"
              });
            f.isie && b.opt.disableoutline && b.win.attr("hideFocus", "true");
            f.iswebkit &&
              b.opt.disableoutline &&
              b.win.css({ outline: "none" });
          }
          if (b.opt.autohidemode === false)
            (b.autohidedom = false),
              b.rail.css({ opacity: b.opt.cursoropacitymax }),
              b.railh && b.railh.css({ opacity: b.opt.cursoropacitymax });
          else if (b.opt.autohidemode === true) {
            if (((b.autohidedom = e().add(b.rail)), b.railh))
              b.autohidedom = b.autohidedom.add(b.railh);
          } else if (b.opt.autohidemode == "scroll") {
            if (((b.autohidedom = e().add(b.rail)), b.railh))
              b.autohidedom = b.autohidedom.add(b.railh);
          } else if (b.opt.autohidemode == "cursor") {
            if (((b.autohidedom = e().add(b.cursor)), b.railh))
              b.autohidedom = b.autohidedom.add(b.railh.cursor);
          } else if (b.opt.autohidemode == "hidden")
            (b.autohidedom = false), b.hide(), (b.locked = false);
          if (f.isie9mobile)
            (b.scrollmom = new z(b)),
              (b.onmangotouch = function() {
                var d = b.getScrollTop(),
                  c = b.getScrollLeft();
                if (
                  d == b.scrollmom.lastscrolly &&
                  c == b.scrollmom.lastscrollx
                )
                  return true;
                var g = d - b.mangotouch.sy,
                  l = c - b.mangotouch.sx;
                if (
                  Math.round(Math.sqrt(Math.pow(l, 2) + Math.pow(g, 2))) != 0
                ) {
                  var f = g < 0 ? -1 : 1,
                    e = l < 0 ? -1 : 1,
                    h = +new Date();
                  b.mangotouch.lazy && clearTimeout(b.mangotouch.lazy);
                  if (
                    h - b.mangotouch.tm > 80 ||
                    b.mangotouch.dry != f ||
                    b.mangotouch.drx != e
                  )
                    b.scrollmom.stop(),
                      b.scrollmom.reset(c, d),
                      (b.mangotouch.sy = d),
                      (b.mangotouch.ly = d),
                      (b.mangotouch.sx = c),
                      (b.mangotouch.lx = c),
                      (b.mangotouch.dry = f),
                      (b.mangotouch.drx = e),
                      (b.mangotouch.tm = h);
                  else if (
                    (b.scrollmom.stop(),
                    b.scrollmom.update(
                      b.mangotouch.sx - l,
                      b.mangotouch.sy - g
                    ),
                    (b.mangotouch.tm = h),
                    (g = Math.max(
                      Math.abs(b.mangotouch.ly - d),
                      Math.abs(b.mangotouch.lx - c)
                    )),
                    (b.mangotouch.ly = d),
                    (b.mangotouch.lx = c),
                    g > 2)
                  )
                    b.mangotouch.lazy = setTimeout(function() {
                      b.mangotouch.lazy = false;
                      b.mangotouch.dry = 0;
                      b.mangotouch.drx = 0;
                      b.mangotouch.tm = 0;
                      b.scrollmom.doMomentum(30);
                    }, 100);
                }
              }),
              (g = b.getScrollTop()),
              (k = b.getScrollLeft()),
              (b.mangotouch = {
                sy: g,
                ly: g,
                dry: 0,
                sx: k,
                lx: k,
                drx: 0,
                lazy: false,
                tm: 0
              }),
              b.bind(b.docscroll, "scroll", b.onmangotouch);
          else {
            if (
              f.cantouch ||
              b.istouchcapable ||
              b.opt.touchbehavior ||
              f.hasmstouch
            ) {
              b.scrollmom = new z(b);
              b.ontouchstart = function(d) {
                if (d.pointerType && d.pointerType != 2) return false;
                if (!b.locked) {
                  if (f.hasmstouch)
                    for (var c = d.target ? d.target : false; c; ) {
                      var g = e(c).getNiceScroll();
                      if (g.length > 0 && g[0].me == b.me) break;
                      if (g.length > 0) return false;
                      if (c.nodeName == "DIV" && c.id == b.id) break;
                      c = c.parentNode ? c.parentNode : false;
                    }
                  b.cancelScroll();
                  if (
                    (c = b.getTarget(d)) &&
                    /INPUT/i.test(c.nodeName) &&
                    /range/i.test(c.type)
                  )
                    return b.stopPropagation(d);
                  if (!("clientX" in d) && "changedTouches" in d)
                    (d.clientX = d.changedTouches[0].clientX),
                      (d.clientY = d.changedTouches[0].clientY);
                  if (b.forcescreen)
                    (g = d),
                      (d = { original: d.original ? d.original : d }),
                      (d.clientX = g.screenX),
                      (d.clientY = g.screenY);
                  b.rail.drag = {
                    x: d.clientX,
                    y: d.clientY,
                    sx: b.scroll.x,
                    sy: b.scroll.y,
                    st: b.getScrollTop(),
                    sl: b.getScrollLeft(),
                    pt: 2
                  };
                  b.opt.touchbehavior &&
                    b.isiframe &&
                    f.isie &&
                    ((g = b.win.position()),
                    (b.rail.drag.x += g.left),
                    (b.rail.drag.y += g.top));
                  b.hasmoving = false;
                  b.lastmouseup = false;
                  b.scrollmom.reset(d.clientX, d.clientY);
                  if (!f.cantouch && !this.istouchcapable && !f.hasmstouch) {
                    if (!c || !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName))
                      return (
                        !b.ispage && f.hasmousecapture && c.setCapture(),
                        b.cancelEvent(d)
                      );
                    if (/SUBMIT|CANCEL|BUTTON/i.test(e(c).attr("type")))
                      (pc = { tg: c, click: false }), (b.preventclick = pc);
                  }
                }
              };
              b.ontouchend = function(d) {
                if (d.pointerType && d.pointerType != 2) return false;
                if (
                  b.rail.drag &&
                  b.rail.drag.pt == 2 &&
                  (b.scrollmom.doMomentum(),
                  (b.rail.drag = false),
                  b.hasmoving &&
                    ((b.hasmoving = false),
                    (b.lastmouseup = true),
                    b.hideCursor(),
                    f.hasmousecapture && document.releaseCapture(),
                    !f.cantouch))
                )
                  return b.cancelEvent(d);
              };
              var n = b.opt.touchbehavior && b.isiframe && !f.hasmousecapture;
              b.ontouchmove = function(d, c) {
                if (d.pointerType && d.pointerType != 2) return false;
                if (b.rail.drag && b.rail.drag.pt == 2) {
                  if (f.cantouch && typeof d.original == "undefined")
                    return true;
                  b.hasmoving = true;
                  if (b.preventclick && !b.preventclick.click)
                    (b.preventclick.click = b.preventclick.tg.onclick || false),
                      (b.preventclick.tg.onclick = b.onpreventclick);
                  d = e.extend({ original: d }, d);
                  if ("changedTouches" in d)
                    (d.clientX = d.changedTouches[0].clientX),
                      (d.clientY = d.changedTouches[0].clientY);
                  if (b.forcescreen) {
                    var g = d,
                      d = { original: d.original ? d.original : d };
                    d.clientX = g.screenX;
                    d.clientY = g.screenY;
                  }
                  g = ofy = 0;
                  if (n && !c) {
                    var l = b.win.position(),
                      g = -l.left;
                    ofy = -l.top;
                  }
                  var h = d.clientY + ofy,
                    i = b.rail.drag.st - (h - b.rail.drag.y);
                  if (b.ishwscroll && b.opt.bouncescroll)
                    i < 0
                      ? (i = Math.round(i / 2))
                      : i > b.page.maxh &&
                        (i = b.page.maxh + Math.round((i - b.page.maxh) / 2));
                  else if ((i < 0 && (h = i = 0), i > b.page.maxh))
                    (i = b.page.maxh), (h = 0);
                  var s = d.clientX + g;
                  if (b.railh && b.railh.scrollable) {
                    var j = b.rail.drag.sl - (s - b.rail.drag.x);
                    if (b.ishwscroll && b.opt.bouncescroll)
                      j < 0
                        ? (j = Math.round(j / 2))
                        : j > b.page.maxw &&
                          (j = b.page.maxw + Math.round((j - b.page.maxw) / 2));
                    else if ((j < 0 && (s = j = 0), j > b.page.maxw))
                      (j = b.page.maxw), (s = 0);
                  }
                  b.synched("touchmove", function() {
                    b.rail.drag &&
                      b.rail.drag.pt == 2 &&
                      (b.prepareTransition && b.prepareTransition(0),
                      b.rail.scrollable && b.setScrollTop(i),
                      b.scrollmom.update(s, h),
                      b.railh && b.railh.scrollable
                        ? (b.setScrollLeft(j), b.showCursor(i, j))
                        : b.showCursor(i),
                      f.isie10 && document.selection.clear());
                  });
                  if (!f.ischrome && !b.istouchcapable) return b.cancelEvent(d);
                }
              };
            }
            f.cantouch || b.opt.touchbehavior
              ? ((b.onpreventclick = function(d) {
                  if (b.preventclick)
                    return (
                      (b.preventclick.tg.onclick = b.preventclick.click),
                      (b.preventclick = false),
                      b.cancelEvent(d)
                    );
                }),
                (b.onmousedown = b.ontouchstart),
                (b.onmouseup = b.ontouchend),
                (b.onclick = f.isios
                  ? false
                  : function(d) {
                      return b.lastmouseup
                        ? ((b.lastmouseup = false), b.cancelEvent(d))
                        : true;
                    }),
                (b.onmousemove = b.ontouchmove),
                f.cursorgrabvalue &&
                  (b.css(b.ispage ? b.doc : b.win, {
                    cursor: f.cursorgrabvalue
                  }),
                  b.css(b.rail, { cursor: f.cursorgrabvalue })))
              : ((b.onmousedown = function(d, c) {
                  if (!(b.rail.drag && b.rail.drag.pt != 1)) {
                    if (b.locked) return b.cancelEvent(d);
                    b.cancelScroll();
                    b.rail.drag = {
                      x: d.clientX,
                      y: d.clientY,
                      sx: b.scroll.x,
                      sy: b.scroll.y,
                      pt: 1,
                      hr: !!c
                    };
                    var g = b.getTarget(d);
                    !b.ispage && f.hasmousecapture && g.setCapture();
                    if (b.isiframe && !f.hasmousecapture)
                      (b.saved.csspointerevents = b.doc.css("pointer-events")),
                        b.css(b.doc, { "pointer-events": "none" });
                    return b.cancelEvent(d);
                  }
                }),
                (b.onmouseup = function(d) {
                  if (
                    b.rail.drag &&
                    (f.hasmousecapture && document.releaseCapture(),
                    b.isiframe &&
                      !f.hasmousecapture &&
                      b.doc.css("pointer-events", b.saved.csspointerevents),
                    b.rail.drag.pt == 1)
                  )
                    return (b.rail.drag = false), b.cancelEvent(d);
                }),
                (b.onmousemove = function(d) {
                  if (b.rail.drag) {
                    if (b.rail.drag.pt == 1) {
                      if (f.ischrome && d.which == 0) return b.onmouseup(d);
                      b.cursorfreezed = true;
                      if (b.rail.drag.hr) {
                        b.scroll.x =
                          b.rail.drag.sx + (d.clientX - b.rail.drag.x);
                        if (b.scroll.x < 0) b.scroll.x = 0;
                        var c = b.scrollvaluemaxw;
                        if (b.scroll.x > c) b.scroll.x = c;
                      } else {
                        b.scroll.y =
                          b.rail.drag.sy + (d.clientY - b.rail.drag.y);
                        if (b.scroll.y < 0) b.scroll.y = 0;
                        c = b.scrollvaluemax;
                        if (b.scroll.y > c) b.scroll.y = c;
                      }
                      b.synched("mousemove", function() {
                        b.rail.drag &&
                          b.rail.drag.pt == 1 &&
                          (b.showCursor(),
                          b.rail.drag.hr
                            ? b.doScrollLeft(
                                Math.round(b.scroll.x * b.scrollratio.x)
                              )
                            : b.doScrollTop(
                                Math.round(b.scroll.y * b.scrollratio.y)
                              ));
                      });
                      return b.cancelEvent(d);
                    }
                  } else b.checkarea = true;
                }));
            (f.cantouch || b.opt.touchbehavior) &&
              b.bind(b.win, "mousedown", b.onmousedown);
            f.hasmstouch &&
              (b.css(b.rail, { "-ms-touch-action": "none" }),
              b.css(b.cursor, { "-ms-touch-action": "none" }),
              b.bind(b.win, "MSPointerDown", b.ontouchstart),
              b.bind(document, "MSPointerUp", b.ontouchend),
              b.bind(document, "MSPointerMove", b.ontouchmove),
              b.bind(b.cursor, "MSGestureHold", function(b) {
                b.preventDefault();
              }),
              b.bind(b.cursor, "contextmenu", function(b) {
                b.preventDefault();
              }));
            this.istouchcapable &&
              (b.bind(b.win, "touchstart", b.ontouchstart),
              b.bind(document, "touchend", b.ontouchend),
              b.bind(document, "touchcancel", b.ontouchend),
              b.bind(document, "touchmove", b.ontouchmove));
            b.bind(b.cursor, "mousedown", b.onmousedown);
            b.bind(b.cursor, "mouseup", b.onmouseup);
            b.railh &&
              (b.bind(b.cursorh, "mousedown", function(d) {
                b.onmousedown(d, true);
              }),
              b.bind(b.cursorh, "mouseup", function(d) {
                if (!(b.rail.drag && b.rail.drag.pt == 2))
                  return (
                    (b.rail.drag = false),
                    (b.hasmoving = false),
                    b.hideCursor(),
                    f.hasmousecapture && document.releaseCapture(),
                    b.cancelEvent(d)
                  );
              }));
            b.bind(document, "mouseup", b.onmouseup);
            f.hasmousecapture && b.bind(b.win, "mouseup", b.onmouseup);
            b.bind(document, "mousemove", b.onmousemove);
            b.onclick && b.bind(document, "click", b.onclick);
            !f.cantouch &&
              !b.opt.touchbehavior &&
              (b.jqbind(b.rail, "mouseenter", function() {
                b.canshowonmouseevent && b.showCursor();
                b.rail.active = true;
              }),
              b.jqbind(b.rail, "mouseleave", function() {
                b.rail.active = false;
                b.rail.drag || b.hideCursor();
              }),
              b.opt.sensitiverail &&
                (b.bind(b.rail, "click", function(d) {
                  b.doRailClick(d, false, false);
                }),
                b.bind(b.rail, "dblclick", function(d) {
                  b.doRailClick(d, true, false);
                }),
                b.bind(b.cursor, "click", function(d) {
                  b.cancelEvent(d);
                }),
                b.bind(b.cursor, "dblclick", function(d) {
                  b.cancelEvent(d);
                })),
              b.railh &&
                (b.jqbind(b.railh, "mouseenter", function() {
                  b.canshowonmouseevent && b.showCursor();
                  b.rail.active = true;
                }),
                b.jqbind(b.railh, "mouseleave", function() {
                  b.rail.active = false;
                  b.rail.drag || b.hideCursor();
                }),
                b.opt.sensitiverail &&
                  (b.bind(b.railh, "click", function(d) {
                    b.doRailClick(d, false, true);
                  }),
                  b.bind(b.railh, "dblclick", function(d) {
                    b.doRailClick(d, true, true);
                  }),
                  b.bind(b.cursorh, "click", function(d) {
                    b.cancelEvent(d);
                  }),
                  b.bind(b.cursorh, "dblclick", function(d) {
                    b.cancelEvent(d);
                  }))),
              b.zoom &&
                (b.jqbind(b.zoom, "mouseenter", function() {
                  b.canshowonmouseevent && b.showCursor();
                  b.rail.active = true;
                }),
                b.jqbind(b.zoom, "mouseleave", function() {
                  b.rail.active = false;
                  b.rail.drag || b.hideCursor();
                })));
            b.opt.enablemousewheel &&
              (b.isiframe ||
                b.bind(
                  f.isie && b.ispage ? document : b.docscroll,
                  "mousewheel",
                  b.onmousewheel
                ),
              b.bind(b.rail, "mousewheel", b.onmousewheel),
              b.railh && b.bind(b.railh, "mousewheel", b.onmousewheelhr));
            !b.ispage &&
              !f.cantouch &&
              !/HTML|BODY/.test(b.win[0].nodeName) &&
              (b.win.attr("tabindex") || b.win.attr({ tabindex: B++ }),
              b.jqbind(b.win, "focus", function(d) {
                r = b.getTarget(d).id || true;
                b.hasfocus = true;
                b.canshowonmouseevent && b.noticeCursor();
              }),
              b.jqbind(b.win, "blur", function() {
                r = false;
                b.hasfocus = false;
              }),
              b.jqbind(b.win, "mouseenter", function(d) {
                w = b.getTarget(d).id || true;
                b.hasmousefocus = true;
                b.canshowonmouseevent && b.noticeCursor();
              }),
              b.jqbind(b.win, "mouseleave", function() {
                w = false;
                b.hasmousefocus = false;
              }));
          }
          b.onkeypress = function(d) {
            if (b.locked && b.page.maxh == 0) return true;
            var d = d ? d : window.e,
              c = b.getTarget(d);
            if (
              c &&
              /INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName) &&
              ((!c.getAttribute("type") && !c.type) ||
                !/submit|button|cancel/i.tp)
            )
              return true;
            if (
              b.hasfocus ||
              (b.hasmousefocus && !r) ||
              (b.ispage && !r && !w)
            ) {
              c = d.keyCode;
              if (b.locked && c != 27) return b.cancelEvent(d);
              var g = d.ctrlKey || false,
                l = d.shiftKey || false,
                f = false;
              switch (c) {
                case 38:
                case 63233:
                  b.doScrollBy(72);
                  f = true;
                  break;
                case 40:
                case 63235:
                  b.doScrollBy(-72);
                  f = true;
                  break;
                case 37:
                case 63232:
                  b.railh &&
                    (g ? b.doScrollLeft(0) : b.doScrollLeftBy(72), (f = true));
                  break;
                case 39:
                case 63234:
                  b.railh &&
                    (g ? b.doScrollLeft(b.page.maxw) : b.doScrollLeftBy(-72),
                    (f = true));
                  break;
                case 33:
                case 63276:
                  b.doScrollBy(b.view.h);
                  f = true;
                  break;
                case 34:
                case 63277:
                  b.doScrollBy(-b.view.h);
                  f = true;
                  break;
                case 36:
                case 63273:
                  b.railh && g ? b.doScrollPos(0, 0) : b.doScrollTo(0);
                  f = true;
                  break;
                case 35:
                case 63275:
                  b.railh && g
                    ? b.doScrollPos(b.page.maxw, b.page.maxh)
                    : b.doScrollTo(b.page.maxh);
                  f = true;
                  break;
                case 32:
                  b.opt.spacebarenabled &&
                    (l ? b.doScrollBy(b.view.h) : b.doScrollBy(-b.view.h),
                    (f = true));
                  break;
                case 27:
                  b.zoomactive && (b.doZoom(), (f = true));
              }
              if (f) return b.cancelEvent(d);
            }
          };
          b.opt.enablekeyboard &&
            b.bind(
              document,
              f.isopera && !f.isopera12 ? "keypress" : "keydown",
              b.onkeypress
            );
          b.bind(window, "resize", b.resize);
          b.bind(window, "orientationchange", b.resize);
          b.bind(window, "load", b.resize);
          if (f.ischrome && !b.ispage && !b.haswrapper) {
            var m = b.win.attr("style"),
              g = parseFloat(b.win.css("width")) + 1;
            b.win.css("width", g);
            b.synched("chromefix", function() {
              b.win.attr("style", m);
            });
          }
          b.onAttributeChange = function() {
            b.lazyResize();
          };
          if (!b.ispage && !b.haswrapper)
            "WebKitMutationObserver" in window
              ? ((b.observer = new WebKitMutationObserver(function(d) {
                  d.forEach(b.onAttributeChange);
                })),
                b.observer.observe(b.win[0], {
                  attributes: true,
                  subtree: false
                }))
              : (b.bind(
                  b.win,
                  f.isie && !f.isie9 ? "propertychange" : "DOMAttrModified",
                  b.onAttributeChange
                ),
                f.isie9 &&
                  b.win[0].attachEvent(
                    "onpropertychange",
                    b.onAttributeChange
                  ));
          !b.ispage && b.opt.boxzoom && b.bind(window, "resize", b.resizeZoom);
          b.istextarea && b.bind(b.win, "mouseup", b.resize);
          b.resize();
        }
        if (this.doc[0].nodeName == "IFRAME") {
          var A = function() {
            b.iframexd = false;
            try {
              var d =
                "contentDocument" in this
                  ? this.contentDocument
                  : this.contentWindow.document;
            } catch (c) {
              (b.iframexd = true), (d = false);
            }
            if (b.iframexd)
              return (
                "console" in window &&
                  console.log("NiceScroll error: policy restriced iframe"),
                true
              );
            b.forcescreen = true;
            if (b.isiframe)
              (b.iframe = {
                doc: e(d),
                html: b.doc.contents().find("html")[0],
                body: b.doc.contents().find("body")[0]
              }),
                (b.getContentSize = function() {
                  return {
                    w: Math.max(
                      b.iframe.html.scrollWidth,
                      b.iframe.body.scrollWidth
                    ),
                    h: Math.max(
                      b.iframe.html.scrollHeight,
                      b.iframe.body.scrollHeight
                    )
                  };
                }),
                (b.docscroll = e(b.iframe.body));
            if (!f.isios && b.opt.iframeautoresize && !b.isiframe) {
              b.win.scrollTop(0);
              b.doc.height("");
              var g = Math.max(
                d.getElementsByTagName("html")[0].scrollHeight,
                d.body.scrollHeight
              );
              b.doc.height(g);
            }
            b.resize();
            f.isie7 && b.css(e(b.iframe.html), { "overflow-y": "hidden" });
            b.css(e(b.iframe.body), { "overflow-y": "hidden" });
            "contentWindow" in this
              ? b.bind(this.contentWindow, "scroll", b.onscroll)
              : b.bind(d, "scroll", b.onscroll);
            b.opt.enablemousewheel && b.bind(d, "mousewheel", b.onmousewheel);
            b.opt.enablekeyboard &&
              b.bind(d, f.isopera ? "keypress" : "keydown", b.onkeypress);
            if (f.cantouch || b.opt.touchbehavior)
              b.bind(d, "mousedown", b.onmousedown),
                b.bind(d, "mousemove", function(d) {
                  b.onmousemove(d, true);
                }),
                f.cursorgrabvalue &&
                  b.css(e(d.body), { cursor: f.cursorgrabvalue });
            b.bind(d, "mouseup", b.onmouseup);
            b.zoom &&
              (b.opt.dblclickzoom && b.bind(d, "dblclick", b.doZoom),
              b.ongesturezoom && b.bind(d, "gestureend", b.ongesturezoom));
          };
          this.doc[0].readyState &&
            this.doc[0].readyState == "complete" &&
            setTimeout(function() {
              A.call(b.doc[0], false);
            }, 500);
          b.bind(this.doc, "load", A);
        }
      };
      this.showCursor = function(d, c) {
        if (b.cursortimeout)
          clearTimeout(b.cursortimeout), (b.cursortimeout = 0);
        if (b.rail) {
          if (b.autohidedom)
            b.autohidedom.stop().css({ opacity: b.opt.cursoropacitymax }),
              (b.cursoractive = true);
          if (typeof d != "undefined" && d !== false)
            b.scroll.y = Math.round((d * 1) / b.scrollratio.y);
          if (typeof c != "undefined")
            b.scroll.x = Math.round((c * 1) / b.scrollratio.x);
          b.cursor.css({ height: b.cursorheight, top: b.scroll.y });
          if (b.cursorh)
            !b.rail.align && b.rail.visibility
              ? b.cursorh.css({
                  width: b.cursorwidth,
                  left: b.scroll.x + b.rail.width
                })
              : b.cursorh.css({ width: b.cursorwidth, left: b.scroll.x }),
              (b.cursoractive = true);
          b.zoom && b.zoom.stop().css({ opacity: b.opt.cursoropacitymax });
        }
      };
      this.hideCursor = function(d) {
        if (!b.cursortimeout && b.rail && b.autohidedom)
          b.cursortimeout = setTimeout(function() {
            if (!b.rail.active || !b.showonmouseevent)
              b.autohidedom.stop().animate({ opacity: b.opt.cursoropacitymin }),
                b.zoom &&
                  b.zoom.stop().animate({ opacity: b.opt.cursoropacitymin }),
                (b.cursoractive = false);
            b.cursortimeout = 0;
          }, d || 400);
      };
      this.noticeCursor = function(d, c, g) {
        b.showCursor(c, g);
        b.rail.active || b.hideCursor(d);
      };
      this.getContentSize = b.ispage
        ? function() {
            return {
              w: Math.max(
                document.body.scrollWidth,
                document.documentElement.scrollWidth
              ),
              h: Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            };
          }
        : b.haswrapper
          ? function() {
              return {
                w:
                  b.doc.outerWidth() +
                  parseInt(b.win.css("paddingLeft")) +
                  parseInt(b.win.css("paddingRight")),
                h:
                  b.doc.outerHeight() +
                  parseInt(b.win.css("paddingTop")) +
                  parseInt(b.win.css("paddingBottom"))
              };
            }
          : function() {
              return {
                w: b.docscroll[0].scrollWidth,
                h: b.docscroll[0].scrollHeight
              };
            };
      this.onResize = function(d, c) {
        if (!b.win) return false;
        if (!b.haswrapper && !b.ispage)
          if (b.win.css("display") == "none")
            return b.visibility && b.hideRail().hideRailHr(), false;
          else !b.hidden && !b.visibility && b.showRail().showRailHr();
        var g = b.page.maxh,
          f = b.page.maxw,
          e = b.view.w;
        b.view = {
          w: b.ispage ? b.win.width() : parseInt(b.win[0].clientWidth),
          h: b.ispage ? b.win.height() : parseInt(b.win[0].clientHeight)
        };
        b.page = c ? c : b.getContentSize();
        b.page.maxh = Math.max(0, b.page.h - b.view.h);
        b.page.maxw = Math.max(0, b.page.w - b.view.w);
        if (b.page.maxh == g && b.page.maxw == f && b.view.w == e)
          if (b.ispage) return b;
          else {
            g = b.win.offset();
            if (
              b.lastposition &&
              ((f = b.lastposition), f.top == g.top && f.left == g.left)
            )
              return b;
            b.lastposition = g;
          }
        b.page.maxh == 0
          ? (b.hideRail(),
            (b.scrollvaluemax = 0),
            (b.scroll.y = 0),
            (b.scrollratio.y = 0),
            (b.cursorheight = 0),
            b.setScrollTop(0),
            (b.rail.scrollable = false))
          : (b.rail.scrollable = true);
        b.page.maxw == 0
          ? (b.hideRailHr(),
            (b.scrollvaluemaxw = 0),
            (b.scroll.x = 0),
            (b.scrollratio.x = 0),
            (b.cursorwidth = 0),
            b.setScrollLeft(0),
            (b.railh.scrollable = false))
          : (b.railh.scrollable = true);
        b.locked = b.page.maxh == 0 && b.page.maxw == 0;
        if (b.locked) return b.ispage || b.updateScrollBar(b.view), false;
        !b.hidden && !b.visibility
          ? b.showRail().showRailHr()
          : !b.hidden && !b.railh.visibility && b.showRailHr();
        b.istextarea &&
          b.win.css("resize") &&
          b.win.css("resize") != "none" &&
          (b.view.h -= 20);
        b.ispage || b.updateScrollBar(b.view);
        b.cursorheight = Math.min(
          b.view.h,
          Math.round(b.view.h * (b.view.h / b.page.h))
        );
        b.cursorheight = b.opt.cursorfixedheight
          ? b.opt.cursorfixedheight
          : Math.max(b.opt.cursorminheight, b.cursorheight);
        b.cursorwidth = Math.min(
          b.view.w,
          Math.round(b.view.w * (b.view.w / b.page.w))
        );
        b.cursorwidth = b.opt.cursorfixedheight
          ? b.opt.cursorfixedheight
          : Math.max(b.opt.cursorminheight, b.cursorwidth);
        b.scrollvaluemax = b.view.h - b.cursorheight - b.cursor.hborder;
        if (b.railh)
          (b.railh.width =
            b.page.maxh > 0 ? b.view.w - b.rail.width : b.view.w),
            (b.scrollvaluemaxw =
              b.railh.width - b.cursorwidth - b.cursorh.wborder);
        b.scrollratio = {
          x: b.page.maxw / b.scrollvaluemaxw,
          y: b.page.maxh / b.scrollvaluemax
        };
        b.getScrollTop() > b.page.maxh
          ? b.doScrollTop(b.page.maxh)
          : ((b.scroll.y = Math.round(
              b.getScrollTop() * (1 / b.scrollratio.y)
            )),
            (b.scroll.x = Math.round(
              b.getScrollLeft() * (1 / b.scrollratio.x)
            )),
            b.cursoractive && b.noticeCursor());
        b.scroll.y &&
          b.getScrollTop() == 0 &&
          b.doScrollTo(Math.floor(b.scroll.y * b.scrollratio.y));
        return b;
      };
      this.resize = function() {
        b.delayed("resize", b.onResize, 30);
        return b;
      };
      this.lazyResize = function() {
        b.delayed("resize", b.resize, 250);
      };
      this._bind = function(d, c, g, f) {
        b.events.push({ e: d, n: c, f: g, b: f, q: false });
        d.addEventListener
          ? d.addEventListener(c, g, f || false)
          : d.attachEvent
            ? d.attachEvent("on" + c, g)
            : (d["on" + c] = g);
      };
      this.jqbind = function(d, c, g) {
        b.events.push({ e: d, n: c, f: g, q: true });
        e(d).bind(c, g);
      };
      this.bind = function(d, c, g, e) {
        var h = "jquery" in d ? d[0] : d;
        h.addEventListener
          ? (f.cantouch &&
              /mouseup|mousedown|mousemove/.test(c) &&
              b._bind(
                h,
                c == "mousedown"
                  ? "touchstart"
                  : c == "mouseup"
                    ? "touchend"
                    : "touchmove",
                function(b) {
                  if (b.touches) {
                    if (b.touches.length < 2) {
                      var d = b.touches.length ? b.touches[0] : b;
                      d.original = b;
                      g.call(this, d);
                    }
                  } else if (b.changedTouches)
                    (d = b.changedTouches[0]),
                      (d.original = b),
                      g.call(this, d);
                },
                e || false
              ),
            b._bind(h, c, g, e || false),
            c == "mousewheel" && b._bind(h, "DOMMouseScroll", g, e || false),
            f.cantouch &&
              c == "mouseup" &&
              b._bind(h, "touchcancel", g, e || false))
          : b._bind(h, c, function(d) {
              if ((d = d || window.event || false) && d.srcElement)
                d.target = d.srcElement;
              return g.call(h, d) === false || e === false
                ? b.cancelEvent(d)
                : true;
            });
      };
      this._unbind = function(b, c, g, f) {
        b.removeEventListener
          ? b.removeEventListener(c, g, f)
          : b.detachEvent
            ? b.detachEvent("on" + c, g)
            : (b["on" + c] = false);
      };
      this.unbindAll = function() {
        for (var d = 0; d < b.events.length; d++) {
          var c = b.events[d];
          c.q ? c.e.unbind(c.n, c.f) : b._unbind(c.e, c.n, c.f, c.b);
        }
      };
      this.cancelEvent = function(b) {
        b = b.original ? b.original : b ? b : window.event || false;
        if (!b) return false;
        b.preventDefault && b.preventDefault();
        b.stopPropagation && b.stopPropagation();
        b.preventManipulation && b.preventManipulation();
        b.cancelBubble = true;
        b.cancel = true;
        return (b.returnValue = false);
      };
      this.stopPropagation = function(b) {
        b = b.original ? b.original : b ? b : window.event || false;
        if (!b) return false;
        if (b.stopPropagation) return b.stopPropagation();
        if (b.cancelBubble) b.cancelBubble = true;
        return false;
      };
      this.showRail = function() {
        if (b.page.maxh != 0 && (b.ispage || b.win.css("display") != "none"))
          (b.visibility = true),
            (b.rail.visibility = true),
            b.rail.css("display", "block");
        return b;
      };
      this.showRailHr = function() {
        if (!b.railh) return b;
        if (b.page.maxw != 0 && (b.ispage || b.win.css("display") != "none"))
          (b.railh.visibility = true), b.railh.css("display", "block");
        return b;
      };
      this.hideRail = function() {
        b.visibility = false;
        b.rail.visibility = false;
        b.rail.css("display", "none");
        return b;
      };
      this.hideRailHr = function() {
        if (!b.railh) return b;
        b.railh.visibility = false;
        b.railh.css("display", "none");
        return b;
      };
      this.show = function() {
        b.hidden = false;
        b.locked = false;
        return b.showRail().showRailHr();
      };
      this.hide = function() {
        b.hidden = true;
        b.locked = true;
        return b.hideRail().hideRailHr();
      };
      this.toggle = function() {
        return b.hidden ? b.show() : b.hide();
      };
      this.remove = function() {
        b.stop();
        b.cursortimeout && clearTimeout(b.cursortimeout);
        b.doZoomOut();
        b.unbindAll();
        b.observer !== false && b.observer.disconnect();
        b.events = [];
        if (b.cursor) b.cursor.remove(), (b.cursor = null);
        if (b.cursorh) b.cursorh.remove(), (b.cursorh = null);
        if (b.rail) b.rail.remove(), (b.rail = null);
        if (b.railh) b.railh.remove(), (b.railh = null);
        if (b.zoom) b.zoom.remove(), (b.zoom = null);
        for (var d = 0; d < b.saved.css.length; d++) {
          var c = b.saved.css[d];
          c[0].css(c[1], typeof c[2] == "undefined" ? "" : c[2]);
        }
        b.saved = false;
        b.me.data("__nicescroll", "");
        b.me = null;
        b.doc = null;
        b.docscroll = null;
        b.win = null;
        return b;
      };
      this.scrollstart = function(d) {
        this.onscrollstart = d;
        return b;
      };
      this.scrollend = function(d) {
        this.onscrollend = d;
        return b;
      };
      this.scrollcancel = function(d) {
        this.onscrollcancel = d;
        return b;
      };
      this.zoomin = function(d) {
        this.onzoomin = d;
        return b;
      };
      this.zoomout = function(d) {
        this.onzoomout = d;
        return b;
      };
      this.isScrollable = function(b) {
        for (
          b = b.target ? b.target : b;
          b && b.nodeType == 1 && !/BODY|HTML/.test(b.nodeName);

        ) {
          var c = e(b);
          if (
            /scroll|auto/.test(
              c.css("overflowY") ||
                c.css("overflowX") ||
                c.css("overflow") ||
                ""
            )
          )
            return b.clientHeight != b.scrollHeight;
          b = b.parentNode ? b.parentNode : false;
        }
        return false;
      };
      this.getViewport = function(b) {
        for (
          b = b && b.parentNode ? b.parentNode : false;
          b && b.nodeType == 1 && !/BODY|HTML/.test(b.nodeName);

        ) {
          var c = e(b);
          if (
            /scroll|auto/.test(
              c.css("overflowY") ||
                c.css("overflowX") ||
                c.css("overflow") ||
                ""
            ) &&
            b.clientHeight != b.scrollHeight
          )
            return c;
          if (c.getNiceScroll().length > 0) return c;
          b = b.parentNode ? b.parentNode : false;
        }
        return false;
      };
      this.onmousewheel = function(d) {
        if (b.locked) return true;
        if (!b.rail.scrollable)
          return b.railh && b.railh.scrollable ? b.onmousewheelhr(d) : true;
        if (b.opt.preservenativescrolling && b.checkarea)
          (b.checkarea = false), (b.nativescrollingarea = b.isScrollable(d));
        if (b.nativescrollingarea) return true;
        if (b.locked) return b.cancelEvent(d);
        if (b.rail.drag) return b.cancelEvent(d);
        i(d, false);
        return b.cancelEvent(d);
      };
      this.onmousewheelhr = function(d) {
        if (b.locked || !b.railh.scrollable) return true;
        if (b.opt.preservenativescrolling && b.checkarea)
          (b.checkarea = false), (b.nativescrollingarea = b.isScrollable(d));
        if (b.nativescrollingarea) return true;
        if (b.locked) return b.cancelEvent(d);
        if (b.rail.drag) return b.cancelEvent(d);
        i(d, true);
        return b.cancelEvent(d);
      };
      this.stop = function() {
        b.cancelScroll();
        b.scrollmon && b.scrollmon.stop();
        b.cursorfreezed = false;
        b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y));
        b.noticeCursor();
        return b;
      };
      this.getTransitionSpeed = function(d) {
        var c = Math.round(b.opt.scrollspeed * 10),
          d = Math.min(c, Math.round((d / 20) * b.opt.scrollspeed));
        return d > 20 ? d : 0;
      };
      b.opt.smoothscroll
        ? b.ishwscroll && f.hastransition && b.opt.usetransition
          ? ((this.prepareTransition = function(d, c) {
              var g = c ? (d > 20 ? d : 0) : b.getTransitionSpeed(d),
                e = g ? f.prefixstyle + "transform " + g + "ms ease-out" : "";
              if (!b.lasttransitionstyle || b.lasttransitionstyle != e)
                (b.lasttransitionstyle = e), b.doc.css(f.transitionstyle, e);
              return g;
            }),
            (this.doScrollLeft = function(d, c) {
              var g = b.scrollrunning ? b.newscrolly : b.getScrollTop();
              b.doScrollPos(d, g, c);
            }),
            (this.doScrollTop = function(c, f) {
              var g = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
              b.doScrollPos(g, c, f);
            }),
            (this.doScrollPos = function(c, e, g) {
              var h = b.getScrollTop(),
                i = b.getScrollLeft();
              ((b.newscrolly - h) * (e - h) < 0 ||
                (b.newscrollx - i) * (c - i) < 0) &&
                b.cancelScroll();
              if (b.opt.bouncescroll == false) {
                if (e < 0) e = 0;
                else if (e > b.page.maxh) e = b.page.maxh;
                if (c < 0) c = 0;
                else if (c > b.page.maxw) c = b.page.maxw;
              }
              if (c == b.newscrollx && e == b.newscrolly) return false;
              b.newscrolly = e;
              b.newscrollx = c;
              b.newscrollspeed = g || false;
              if (b.timer) return false;
              b.timer = setTimeout(function() {
                var g = b.getScrollTop(),
                  h = b.getScrollLeft(),
                  i,
                  j;
                i = c - h;
                j = e - g;
                i = Math.round(Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2)));
                i = b.prepareTransition(
                  b.newscrollspeed ? b.newscrollspeed : i
                );
                b.timerscroll &&
                  b.timerscroll.tm &&
                  clearInterval(b.timerscroll.tm);
                if (i > 0) {
                  !b.scrollrunning &&
                    b.onscrollstart &&
                    b.onscrollstart.call(b, {
                      type: "scrollstart",
                      current: { x: h, y: g },
                      request: { x: c, y: e },
                      end: { x: b.newscrollx, y: b.newscrolly },
                      speed: i
                    });
                  if (f.transitionend) {
                    if (!b.scrollendtrapped)
                      (b.scrollendtrapped = true),
                        b.bind(b.doc, f.transitionend, b.onScrollEnd, false);
                  } else
                    b.scrollendtrapped && clearTimeout(b.scrollendtrapped),
                      (b.scrollendtrapped = setTimeout(b.onScrollEnd, i));
                  b.timerscroll = {
                    bz: new BezierClass(g, b.newscrolly, i, 0, 0, 0.58, 1),
                    bh: new BezierClass(h, b.newscrollx, i, 0, 0, 0.58, 1)
                  };
                  if (!b.cursorfreezed)
                    b.timerscroll.tm = setInterval(function() {
                      b.showCursor(b.getScrollTop(), b.getScrollLeft());
                    }, 60);
                }
                b.synched("doScroll-set", function() {
                  b.timer = 0;
                  if (b.scrollendtrapped) b.scrollrunning = true;
                  b.setScrollTop(b.newscrolly);
                  b.setScrollLeft(b.newscrollx);
                  if (!b.scrollendtrapped) b.onScrollEnd();
                });
              }, 50);
            }),
            (this.cancelScroll = function() {
              if (!b.scrollendtrapped) return true;
              var c = b.getScrollTop(),
                e = b.getScrollLeft();
              b.scrollrunning = false;
              f.transitionend || clearTimeout(f.transitionend);
              b.scrollendtrapped = false;
              b._unbind(b.doc, f.transitionend, b.onScrollEnd);
              b.prepareTransition(0);
              b.setScrollTop(c);
              b.railh && b.setScrollLeft(e);
              b.timerscroll &&
                b.timerscroll.tm &&
                clearInterval(b.timerscroll.tm);
              b.timerscroll = false;
              b.cursorfreezed = false;
              b.showCursor(c, e);
              return b;
            }),
            (this.onScrollEnd = function() {
              b.scrollendtrapped &&
                b._unbind(b.doc, f.transitionend, b.onScrollEnd);
              b.scrollendtrapped = false;
              b.prepareTransition(0);
              b.timerscroll &&
                b.timerscroll.tm &&
                clearInterval(b.timerscroll.tm);
              b.timerscroll = false;
              var c = b.getScrollTop(),
                e = b.getScrollLeft();
              b.setScrollTop(c);
              b.railh && b.setScrollLeft(e);
              b.noticeCursor(false, c, e);
              b.cursorfreezed = false;
              if (c < 0) c = 0;
              else if (c > b.page.maxh) c = b.page.maxh;
              if (e < 0) e = 0;
              else if (e > b.page.maxw) e = b.page.maxw;
              if (c != b.newscrolly || e != b.newscrollx)
                return b.doScrollPos(e, c, b.opt.snapbackspeed);
              b.onscrollend &&
                b.scrollrunning &&
                b.onscrollend.call(b, {
                  type: "scrollend",
                  current: { x: e, y: c },
                  end: { x: b.newscrollx, y: b.newscrolly }
                });
              b.scrollrunning = false;
            }))
          : ((this.doScrollLeft = function(c) {
              var f = b.scrollrunning ? b.newscrolly : b.getScrollTop();
              b.doScrollPos(c, f);
            }),
            (this.doScrollTop = function(c) {
              var f = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
              b.doScrollPos(f, c);
            }),
            (this.doScrollPos = function(c, f) {
              function g() {
                if (b.cancelAnimationFrame) return true;
                b.scrollrunning = true;
                if ((n = 1 - n)) return (b.timer = p(g) || 1);
                var c = 0,
                  d = (sy = b.getScrollTop());
                if (b.dst.ay) {
                  var d = b.bzscroll
                      ? b.dst.py + b.bzscroll.getNow() * b.dst.ay
                      : b.newscrolly,
                    f = d - sy;
                  if (
                    (f < 0 && d < b.newscrolly) ||
                    (f > 0 && d > b.newscrolly)
                  )
                    d = b.newscrolly;
                  b.setScrollTop(d);
                  d == b.newscrolly && (c = 1);
                } else c = 1;
                var e = (sx = b.getScrollLeft());
                if (b.dst.ax) {
                  e = b.bzscroll
                    ? b.dst.px + b.bzscroll.getNow() * b.dst.ax
                    : b.newscrollx;
                  f = e - sx;
                  if (
                    (f < 0 && e < b.newscrollx) ||
                    (f > 0 && e > b.newscrollx)
                  )
                    e = b.newscrollx;
                  b.setScrollLeft(e);
                  e == b.newscrollx && (c += 1);
                } else c += 1;
                if (c == 2) {
                  b.timer = 0;
                  b.cursorfreezed = false;
                  b.bzscroll = false;
                  b.scrollrunning = false;
                  if (d < 0) d = 0;
                  else if (d > b.page.maxh) d = b.page.maxh;
                  if (e < 0) e = 0;
                  else if (e > b.page.maxw) e = b.page.maxw;
                  e != b.newscrollx || d != b.newscrolly
                    ? b.doScrollPos(e, d)
                    : b.onscrollend &&
                      b.onscrollend.call(b, {
                        type: "scrollend",
                        current: { x: sx, y: sy },
                        end: { x: b.newscrollx, y: b.newscrolly }
                      });
                } else b.timer = p(g) || 1;
              }
              f =
                typeof f == "undefined" || f === false
                  ? b.getScrollTop(true)
                  : f;
              if (b.timer && b.newscrolly == f && b.newscrollx == c)
                return true;
              b.timer && q(b.timer);
              b.timer = 0;
              var e = b.getScrollTop(),
                h = b.getScrollLeft();
              ((b.newscrolly - e) * (f - e) < 0 ||
                (b.newscrollx - h) * (c - h) < 0) &&
                b.cancelScroll();
              b.newscrolly = f;
              b.newscrollx = c;
              if (!b.bouncescroll || !b.rail.visibility)
                if (b.newscrolly < 0) b.newscrolly = 0;
                else if (b.newscrolly > b.page.maxh) b.newscrolly = b.page.maxh;
              if (!b.bouncescroll || !b.railh.visibility)
                if (b.newscrollx < 0) b.newscrollx = 0;
                else if (b.newscrollx > b.page.maxw) b.newscrollx = b.page.maxw;
              b.dst = {};
              b.dst.x = c - h;
              b.dst.y = f - e;
              b.dst.px = h;
              b.dst.py = e;
              var i = Math.round(
                Math.sqrt(Math.pow(b.dst.x, 2) + Math.pow(b.dst.y, 2))
              );
              b.dst.ax = b.dst.x / i;
              b.dst.ay = b.dst.y / i;
              var j = 0,
                k = i;
              if (b.dst.x == 0)
                (j = e), (k = f), (b.dst.ay = 1), (b.dst.py = 0);
              else if (b.dst.y == 0)
                (j = h), (k = c), (b.dst.ax = 1), (b.dst.px = 0);
              i = b.getTransitionSpeed(i);
              b.bzscroll =
                i > 0
                  ? b.bzscroll
                    ? b.bzscroll.update(k, i)
                    : new BezierClass(j, k, i, 0, 1, 0, 1)
                  : false;
              if (!b.timer) {
                ((e == b.page.maxh && f >= b.page.maxh) ||
                  (h == b.page.maxw && c >= b.page.maxw)) &&
                  b.checkContentSize();
                var n = 1;
                b.cancelAnimationFrame = false;
                b.timer = 1;
                b.onscrollstart &&
                  !b.scrollrunning &&
                  b.onscrollstart.call(b, {
                    type: "scrollstart",
                    current: { x: h, y: e },
                    request: { x: c, y: f },
                    end: { x: b.newscrollx, y: b.newscrolly },
                    speed: i
                  });
                g();
                ((e == b.page.maxh && f >= e) ||
                  (h == b.page.maxw && c >= h)) &&
                  b.checkContentSize();
                b.noticeCursor();
              }
            }),
            (this.cancelScroll = function() {
              b.timer && q(b.timer);
              b.timer = 0;
              b.bzscroll = false;
              b.scrollrunning = false;
              return b;
            }))
        : ((this.doScrollLeft = function(c, f) {
            var g = b.getScrollTop();
            b.doScrollPos(c, g, f);
          }),
          (this.doScrollTop = function(c, f) {
            var g = b.getScrollLeft();
            b.doScrollPos(g, c, f);
          }),
          (this.doScrollPos = function(c, f) {
            var g = c > b.page.maxw ? b.page.maxw : c;
            g < 0 && (g = 0);
            var e = f > b.page.maxh ? b.page.maxh : f;
            e < 0 && (e = 0);
            b.synched("scroll", function() {
              b.setScrollTop(e);
              b.setScrollLeft(g);
            });
          }),
          (this.cancelScroll = function() {}));
      this.doScrollBy = function(c, f) {
        var g = 0,
          g = f
            ? Math.floor((b.scroll.y - c) * b.scrollratio.y)
            : (b.timer ? b.newscrolly : b.getScrollTop(true)) - c;
        if (b.bouncescroll) {
          var e = Math.round(b.view.h / 2);
          g < -e ? (g = -e) : g > b.page.maxh + e && (g = b.page.maxh + e);
        }
        b.cursorfreezed = false;
        py = b.getScrollTop(true);
        if (g < 0 && py <= 0) return b.noticeCursor();
        else if (g > b.page.maxh && py >= b.page.maxh)
          return b.checkContentSize(), b.noticeCursor();
        b.doScrollTop(g);
      };
      this.doScrollLeftBy = function(c, f) {
        var e = 0,
          e = f
            ? Math.floor((b.scroll.x - c) * b.scrollratio.x)
            : (b.timer ? b.newscrollx : b.getScrollLeft(true)) - c;
        if (b.bouncescroll) {
          var h = Math.round(b.view.w / 2);
          e < -h ? (e = -h) : e > b.page.maxw + h && (e = b.page.maxw + h);
        }
        b.cursorfreezed = false;
        px = b.getScrollLeft(true);
        if (e < 0 && px <= 0) return b.noticeCursor();
        else if (e > b.page.maxw && px >= b.page.maxw) return b.noticeCursor();
        b.doScrollLeft(e);
      };
      this.doScrollTo = function(c, e) {
        e && Math.round(c * b.scrollratio.y);
        b.cursorfreezed = false;
        b.doScrollTop(c);
      };
      this.checkContentSize = function() {
        var c = b.getContentSize();
        (c.h != b.page.h || c.w != b.page.w) && b.resize(false, c);
      };
      b.onscroll = function() {
        b.rail.drag ||
          b.cursorfreezed ||
          b.synched("scroll", function() {
            b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y));
            if (b.railh)
              b.scroll.x = Math.round(
                b.getScrollLeft() * (1 / b.scrollratio.x)
              );
            b.noticeCursor();
          });
      };
      b.bind(b.docscroll, "scroll", b.onscroll);
      this.doZoomIn = function(c) {
        if (!b.zoomactive) {
          b.zoomactive = true;
          b.zoomrestore = { style: {} };
          var h = "position,top,left,zIndex,backgroundColor,marginTop,marginBottom,marginLeft,marginRight".split(
              ","
            ),
            g = b.win[0].style,
            i;
          for (i in h) {
            var j = h[i];
            b.zoomrestore.style[j] = typeof g[j] != "undefined" ? g[j] : "";
          }
          b.zoomrestore.style.width = b.win.css("width");
          b.zoomrestore.style.height = b.win.css("height");
          b.zoomrestore.padding = {
            w: b.win.outerWidth() - b.win.width(),
            h: b.win.outerHeight() - b.win.height()
          };
          if (f.isios4)
            (b.zoomrestore.scrollTop = e(window).scrollTop()),
              e(window).scrollTop(0);
          b.win.css({
            position: f.isios4 ? "absolute" : "fixed",
            top: 0,
            left: 0,
            "z-index": b.opt.zindex + 100,
            margin: "0px"
          });
          h = b.win.css("backgroundColor");
          (h == "" ||
            /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h)) &&
            b.win.css("backgroundColor", "#fff");
          b.rail.css({ "z-index": b.opt.zindex + 110 });
          b.zoom.css({ "z-index": b.opt.zindex + 112 });
          b.zoom.css("backgroundPosition", "0px -18px");
          b.resizeZoom();
          b.onzoomin && b.onzoomin.call(b);
          return b.cancelEvent(c);
        }
      };
      this.doZoomOut = function(c) {
        if (b.zoomactive)
          return (
            (b.zoomactive = false),
            b.win.css("margin", ""),
            b.win.css(b.zoomrestore.style),
            f.isios4 && e(window).scrollTop(b.zoomrestore.scrollTop),
            b.rail.css({
              "z-index": b.ispage ? b.opt.zindex : b.opt.zindex + 2
            }),
            b.zoom.css({ "z-index": b.opt.zindex }),
            (b.zoomrestore = false),
            b.zoom.css("backgroundPosition", "0px 0px"),
            b.onResize(),
            b.onzoomout && b.onzoomout.call(b),
            b.cancelEvent(c)
          );
      };
      this.doZoom = function(c) {
        return b.zoomactive ? b.doZoomOut(c) : b.doZoomIn(c);
      };
      this.resizeZoom = function() {
        if (b.zoomactive) {
          var c = b.getScrollTop();
          b.win.css({
            width: e(window).width() - b.zoomrestore.padding.w + "px",
            height: e(window).height() - b.zoomrestore.padding.h + "px"
          });
          b.onResize();
          console.log(c);
          b.setScrollTop(Math.min(b.page.maxh, c));
        }
      };
      this.init();
      e.nicescroll.push(this);
    },
    z = function(e) {
      var c = this;
      this.nc = e;
      this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0;
      this.snapy = this.snapx = false;
      this.demuly = this.demulx = 0;
      this.lastscrolly = this.lastscrollx = -1;
      this.timer = this.chky = this.chkx = 0;
      this.time = function() {
        return +new Date();
      };
      this.reset = function(e, i) {
        c.stop();
        var b = c.time();
        c.steptime = 0;
        c.lasttime = b;
        c.speedx = 0;
        c.speedy = 0;
        c.lastx = e;
        c.lasty = i;
        c.lastscrollx = -1;
        c.lastscrolly = -1;
      };
      this.update = function(e, i) {
        var b = c.time();
        c.steptime = b - c.lasttime;
        c.lasttime = b;
        var b = i - c.lasty,
          j = e - c.lastx,
          f = c.nc.getScrollTop(),
          m = c.nc.getScrollLeft();
        f += b;
        m += j;
        c.snapx = m < 0 || m > c.nc.page.maxw;
        c.snapy = f < 0 || f > c.nc.page.maxh;
        c.speedx = j;
        c.speedy = b;
        c.lastx = e;
        c.lasty = i;
      };
      this.stop = function() {
        c.nc.unsynched("domomentum2d");
        c.timer && clearTimeout(c.timer);
        c.timer = 0;
        c.lastscrollx = -1;
        c.lastscrolly = -1;
      };
      this.doSnapy = function(e, i) {
        var b = false;
        if (i < 0) (i = 0), (b = true);
        else if (i > c.nc.page.maxh) (i = c.nc.page.maxh), (b = true);
        if (e < 0) (e = 0), (b = true);
        else if (e > c.nc.page.maxw) (e = c.nc.page.maxw), (b = true);
        b && c.nc.doScrollPos(e, i, c.nc.opt.snapbackspeed);
      };
      this.doMomentum = function(e) {
        var i = c.time(),
          b = e ? i + e : c.lasttime,
          e = c.nc.getScrollLeft(),
          j = c.nc.getScrollTop(),
          f = c.nc.page.maxh,
          m = c.nc.page.maxw;
        c.speedx = m > 0 ? Math.min(60, c.speedx) : 0;
        c.speedy = f > 0 ? Math.min(60, c.speedy) : 0;
        b = b && i - b <= 50;
        if (j < 0 || j > f || e < 0 || e > m) b = false;
        e = c.speedx && b ? c.speedx : false;
        if ((c.speedy && b && c.speedy) || e) {
          var o = Math.max(16, c.steptime);
          o > 50 && ((e = o / 50), (c.speedx *= e), (c.speedy *= e), (o = 50));
          c.demulxy = 0;
          c.lastscrollx = c.nc.getScrollLeft();
          c.chkx = c.lastscrollx;
          c.lastscrolly = c.nc.getScrollTop();
          c.chky = c.lastscrolly;
          var d = c.lastscrollx,
            l = c.lastscrolly,
            g = function() {
              var b = c.time() - i > 600 ? 0.04 : 0.02;
              if (
                c.speedx &&
                ((d = Math.floor(c.lastscrollx - c.speedx * (1 - c.demulxy))),
                (c.lastscrollx = d),
                d < 0 || d > m)
              )
                b = 0.1;
              if (
                c.speedy &&
                ((l = Math.floor(c.lastscrolly - c.speedy * (1 - c.demulxy))),
                (c.lastscrolly = l),
                l < 0 || l > f)
              )
                b = 0.1;
              c.demulxy = Math.min(1, c.demulxy + b);
              c.nc.synched("domomentum2d", function() {
                if (c.speedx)
                  c.nc.getScrollLeft() != c.chkx && c.stop(),
                    (c.chkx = d),
                    c.nc.setScrollLeft(d);
                if (c.speedy)
                  c.nc.getScrollTop() != c.chky && c.stop(),
                    (c.chky = l),
                    c.nc.setScrollTop(l);
                c.timer || (c.nc.hideCursor(), c.doSnapy(d, l));
              });
              c.demulxy < 1
                ? (c.timer = setTimeout(g, o))
                : (c.stop(), c.nc.hideCursor(), c.doSnapy(d, l));
            };
          g();
        } else c.doSnapy(c.nc.getScrollLeft(), c.nc.getScrollTop());
      };
    },
    t = e.fn.scrollTop;
  e.cssHooks.pageYOffset = {
    get: function(j) {
      var c = e.data(j, "__nicescroll") || false;
      return c && c.ishwscroll ? c.getScrollTop() : t.call(j);
    },
    set: function(j, c) {
      var h = e.data(j, "__nicescroll") || false;
      h && h.ishwscroll ? h.setScrollTop(parseInt(c)) : t.call(j, c);
      return this;
    }
  };
  e.fn.scrollTop = function(j) {
    if (typeof j == "undefined") {
      var c = this[0] ? e.data(this[0], "__nicescroll") || false : false;
      return c && c.ishwscroll ? c.getScrollTop() : t.call(this);
    } else
      return this.each(function() {
        var c = e.data(this, "__nicescroll") || false;
        c && c.ishwscroll ? c.setScrollTop(parseInt(j)) : t.call(e(this), j);
      });
  };
  var u = e.fn.scrollLeft;
  e.cssHooks.pageXOffset = {
    get: function(j) {
      var c = e.data(j, "__nicescroll") || false;
      return c && c.ishwscroll ? c.getScrollLeft() : u.call(j);
    },
    set: function(j, c) {
      var h = e.data(j, "__nicescroll") || false;
      h && h.ishwscroll ? h.setScrollLeft(parseInt(c)) : u.call(j, c);
      return this;
    }
  };
  e.fn.scrollLeft = function(j) {
    if (typeof j == "undefined") {
      var c = this[0] ? e.data(this[0], "__nicescroll") || false : false;
      return c && c.ishwscroll ? c.getScrollLeft() : u.call(this);
    } else
      return this.each(function() {
        var c = e.data(this, "__nicescroll") || false;
        c && c.ishwscroll ? c.setScrollLeft(parseInt(j)) : u.call(e(this), j);
      });
  };
  var v = function(j) {
    var c = this;
    this.length = 0;
    this.name = "nicescrollarray";
    this.each = function(e) {
      for (var b = 0; b < c.length; b++) e.call(c[b]);
      return c;
    };
    this.push = function(e) {
      c[c.length] = e;
      c.length++;
    };
    this.eq = function(e) {
      return c[e];
    };
    if (j)
      for (a = 0; a < j.length; a++) {
        var h = e.data(j[a], "__nicescroll") || false;
        h && ((this[this.length] = h), this.length++);
      }
    return this;
  };
  (function(e, c, h) {
    for (var i = 0; i < c.length; i++) h(e, c[i]);
  })(
    v.prototype,
    "show,hide,toggle,onResize,resize,remove,stop,doScrollPos".split(","),
    function(e, c) {
      e[c] = function() {
        var e = arguments;
        return this.each(function() {
          this[c].apply(this, e);
        });
      };
    }
  );
  e.fn.getNiceScroll = function(j) {
    return typeof j == "undefined"
      ? new v(this)
      : e.data(this[j], "__nicescroll") || false;
  };
  e.extend(e.expr[":"], {
    nicescroll: function(j) {
      return e.data(j, "__nicescroll") ? true : false;
    }
  });
  e.fn.niceScroll = function(j, c) {
    typeof c == "undefined" &&
      typeof j == "object" &&
      !("jquery" in j) &&
      ((c = j), (j = false));
    var h = new v();
    typeof c == "undefined" && (c = {});
    if (j) (c.doc = e(j)), (c.win = e(this));
    var i = !("doc" in c);
    if (!i && !("win" in c)) c.win = e(this);
    this.each(function() {
      var b = e(this).data("__nicescroll") || false;
      if (!b)
        (c.doc = i ? e(this) : c.doc),
          (b = new F(c, e(this))),
          e(this).data("__nicescroll", b);
      h.push(b);
    });
    return h.length == 1 ? h[0] : h;
  };
  window.NiceScroll = {
    getjQuery: function() {
      return e;
    }
  };
  if (!e.nicescroll) e.nicescroll = new v();
})(jQuery);

/**
 * jquery.slimmenu.js
 * http://adnantopal.github.io/slimmenu/
 * Author: @adnantopal
 * Copyright 2013, Adnan Topal (atopal.com)
 * Licensed under the MIT license.
 */
(function($, window, document, undefined) {
  var pluginName = "slimmenu",
    defaults = {
      resizeWidth: "768",
      collapserTitle: "Main Menu",
      animSpeed: "medium",
      easingEffect: null,
      indentChildren: false,
      childrenIndenter: "&nbsp;&nbsp;"
    };
  function Plugin(element, options) {
    this.element = element;
    this.$elem = $(this.element);
    this.options = $.extend({}, defaults, options);
    this.init();
  }
  Plugin.prototype = {
    init: function() {
      var $options = this.options,
        $menu = this.$elem,
        $collapser =
          '<div class="menu-collapser">' +
          $options.collapserTitle +
          '<div class="collapse-button"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></div></div>',
        $menu_collapser;
      $menu.before($collapser);
      $menu_collapser = $menu.prev(".menu-collapser");
      $menu.on("click", ".sub-collapser", function(e) {
        e.preventDefault();
        e.stopPropagation();
        var $parent_li = $(this).closest("li");
        if ($(this).hasClass("expanded")) {
          $(this).removeClass("expanded");
          $(this)
            .find("i")
            .html("&#9660;");
          $parent_li
            .find(">ul")
            .slideUp($options.animSpeed, $options.easingEffect);
        } else {
          $(this).addClass("expanded");
          $(this)
            .find("i")
            .html("&#9650;");
          $parent_li
            .find(">ul")
            .slideDown($options.animSpeed, $options.easingEffect);
        }
      });
      $menu_collapser.on("click", ".collapse-button", function(e) {
        e.preventDefault();
        $menu.slideToggle($options.animSpeed, $options.easingEffect);
      });
      this.resizeMenu({ data: { el: this.element, options: this.options } });
      $(window).on(
        "resize",
        { el: this.element, options: this.options },
        this.resizeMenu
      );
    },
    resizeMenu: function(event) {
      var $window = $(window),
        $options = event.data.options,
        $menu = $(event.data.el),
        $menu_collapser = $("body").find(".menu-collapser");
      $menu.find("li").each(function() {
        if ($(this).has("ul").length) {
          if ($(this).has(".sub-collapser").length) {
            $(this)
              .children(".sub-collapser i")
              .html("&#9660;");
          } else {
            $(this).append('<span class="sub-collapser"><i>&#9660;</i></span>');
          }
        }
        $(this)
          .children("ul")
          .hide();
        $(this)
          .find(".sub-collapser")
          .removeClass("expanded")
          .children("i")
          .html("&#9660;");
      });
      if ($options.resizeWidth >= $window.width()) {
        if ($options.indentChildren) {
          $menu.find("ul").each(function() {
            var $depth = $(this).parents("ul").length;
            if (
              !$(this)
                .children("li")
                .children("a")
                .has("i").length
            ) {
              $(this)
                .children("li")
                .children("a")
                .prepend(Plugin.prototype.indent($depth, $options));
            }
          });
        }
        $menu
          .find("li")
          .has("ul")
          .off("mouseenter mouseleave");
        $menu.addClass("collapsed").hide();
        $menu_collapser.show();
      } else {
        $menu
          .find("li")
          .has("ul")
          .on("mouseenter", function() {
            $(this)
              .find(">ul")
              .stop()
              .slideDown($options.animSpeed, $options.easingEffect);
          })
          .on("mouseleave", function() {
            $(this)
              .find(">ul")
              .stop()
              .slideUp($options.animSpeed, $options.easingEffect);
          });
        $menu.find("li > a > i").remove();
        $menu.removeClass("collapsed").show();
        $menu_collapser.hide();
      }
    },
    indent: function(num, options) {
      var $indent = "";
      for (var i = 0; i < num; i++) {
        $indent += options.childrenIndenter;
      }
      return "<i>" + $indent + "</i>";
    }
  };
  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);
