/*!
 * Compressor.js v1.0.7
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-11-28T07:13:17.754Z
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Compressor = t()
}(this, function() {
    "use strict";

    function n(e, t) {
        for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function l() {
        return (l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r, a = arguments[t];
                for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
            }
            return e
        }).apply(this, arguments)
    }

    function t(t, e) {
        var r, a = Object.keys(t);
        return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), a.push.apply(a, r)), a
    }

    function i(a) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? t(Object(n), !0).forEach(function(e) {
                var t, r;
                t = a, e = n[r = e], r in t ? Object.defineProperty(t, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[r] = e
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach(function(e) {
                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return a
    }
    var e, r, U = (function(e) {
            var t, n, l, s, c, u, i;
            "undefined" != typeof window && (n = (t = window).HTMLCanvasElement && t.HTMLCanvasElement.prototype, l = t.Blob && function() {
                try {
                    return Boolean(new Blob)
                } catch (e) {
                    return !1
                }
            }(), s = l && t.Uint8Array && function() {
                try {
                    return 100 === new Blob([new Uint8Array(100)]).size
                } catch (e) {
                    return !1
                }
            }(), c = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || t.MSBlobBuilder, u = /^data:((.*?)(;charset=.*?)?)(;base64)?,/, i = (l || c) && t.atob && t.ArrayBuffer && t.Uint8Array && function(e) {
                var t, r, a, n, i, o = e.match(u);
                if (!o) throw new Error("invalid data URI");
                for (t = o[2] ? o[1] : "text/plain" + (o[3] || ";charset=US-ASCII"), a = !!o[4], o = e.slice(o[0].length), r = (a ? atob : decodeURIComponent)(o), a = new ArrayBuffer(r.length), n = new Uint8Array(a), i = 0; i < r.length; i += 1) n[i] = r.charCodeAt(i);
                return l ? new Blob([s ? n : a], {
                    type: t
                }) : ((o = new c).append(a), o.getBlob(t))
            }, t.HTMLCanvasElement && !n.toBlob && (n.mozGetAsFile ? n.toBlob = function(e, t, r) {
                var a = this;
                setTimeout(function() {
                    r && n.toDataURL && i ? e(i(a.toDataURL(t, r))) : e(a.mozGetAsFile("blob", t))
                })
            } : n.toDataURL && i && (n.msToBlob ? n.toBlob = function(e, t, r) {
                var a = this;
                setTimeout(function() {
                    (t && "image/png" !== t || r) && n.toDataURL && i ? e(i(a.toDataURL(t, r))) : e(a.msToBlob(t))
                })
            } : n.toBlob = function(e, t, r) {
                var a = this;
                setTimeout(function() {
                    e(i(a.toDataURL(t, r)))
                })
            })), e.exports ? e.exports = i : t.dataURLtoBlob = i)
        }(r = {
            path: e,
            exports: {},
            require: function(e, t) {
                return function() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }(null == t && r.path)
            }
        }, r.exports), r.exports),
        o = {
            strict: !0,
            checkOrientation: !0,
            maxWidth: 1 / 0,
            maxHeight: 1 / 0,
            minWidth: 0,
            minHeight: 0,
            width: void 0,
            height: void 0,
            quality: .8,
            mimeType: "auto",
            convertSize: 5e6,
            beforeDraw: null,
            drew: null,
            success: null,
            error: null
        },
        s = "undefined" != typeof window && void 0 !== window.document ? window : {},
        c = Array.prototype.slice;
    var a = /^image\/.+$/;

    function B(e) {
        return a.test(e)
    }
    var d = String.fromCharCode;
    var u = s.btoa;

    function h(e, t) {
        for (var r, a = [], n = new Uint8Array(e); 0 < n.length;) a.push(d.apply(null, (r = n.subarray(0, 8192), Array.from ? Array.from(r) : c.call(r)))), n = n.subarray(8192);
        return "data:".concat(t, ";base64,").concat(u(a.join("")))
    }

    function f(e) {
        var t, r, a, n, i, o, l = new DataView(e);
        try {
            if (255 === l.getUint8(0) && 216 === l.getUint8(1))
                for (var s = l.byteLength, c = 2; c + 1 < s;) {
                    if (255 === l.getUint8(c) && 225 === l.getUint8(c + 1)) {
                        r = c;
                        break
                    }
                    c += 1
                }
            if (r && (n = r + 10, "Exif" === function(e, t, r) {
                    var a, n = "";
                    for (r += t, a = t; a < r; a += 1) n += d(e.getUint8(a));
                    return n
                }(l, r + 4, 4) && (!(o = 18761 === (i = l.getUint16(n))) && 19789 !== i || 42 !== l.getUint16(n + 2, o) || 8 <= (i = l.getUint32(n + 4, o)) && (a = n + i))), a)
                for (var u, h = l.getUint16(a, o), f = 0; f < h; f += 1)
                    if (u = a + 12 * f + 2, 274 === l.getUint16(u, o)) {
                        u += 8, t = l.getUint16(u, o), l.setUint16(u, 1, o);
                        break
                    }
        } catch (e) {
            t = 1
        }
        return t
    }
    var m = /\.\d*(?:0|9){12}\d*$/;

    function O(e, t) {
        t = 1 < arguments.length && void 0 !== t ? t : 1e11;
        return m.test(e) ? Math.round(e * t) / t : e
    }
    var b = s.ArrayBuffer,
        p = s.FileReader,
        g = s.URL || s.webkitURL,
        y = /\.\w+$/,
        w = s.Compressor;
    return function() {
        function r(e, t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, r), this.file = e, this.image = new Image, this.options = i(i({}, o), t), this.aborted = !1, this.result = null, this.init()
        }
        var e, t, a;
        return e = r, a = [{
            key: "noConflict",
            value: function() {
                return window.Compressor = w, r
            }
        }, {
            key: "setDefaults",
            value: function(e) {
                l(o, e)
            }
        }], (t = [{
            key: "init",
            value: function() {
                var a, e, n, i = this,
                    o = this.file,
                    t = this.options;
                e = o, "undefined" != typeof Blob && (e instanceof Blob || "[object Blob]" === Object.prototype.toString.call(e)) ? B(a = o.type) ? g && p ? (b || (t.checkOrientation = !1), g && !t.checkOrientation ? this.load({
                    url: g.createObjectURL(o)
                }) : (e = new p, n = t.checkOrientation && "image/jpeg" === a, (this.reader = e).onload = function(e) {
                    var t = e.target.result,
                        r = {};
                    n ? 1 < (e = f(t)) || !g ? (r.url = h(t, a), 1 < e && l(r, function(e) {
                        var t = 0,
                            r = 1,
                            a = 1;
                        switch (e) {
                            case 2:
                                r = -1;
                                break;
                            case 3:
                                t = -180;
                                break;
                            case 4:
                                a = -1;
                                break;
                            case 5:
                                t = 90, a = -1;
                                break;
                            case 6:
                                t = 90;
                                break;
                            case 7:
                                t = 90, r = -1;
                                break;
                            case 8:
                                t = -90
                        }
                        return {
                            rotate: t,
                            scaleX: r,
                            scaleY: a
                        }
                    }(e))) : r.url = g.createObjectURL(o) : r.url = t, i.load(r)
                }, e.onabort = function() {
                    i.fail(new Error("Aborted to read the image with FileReader."))
                }, e.onerror = function() {
                    i.fail(new Error("Failed to read the image with FileReader."))
                }, e.onloadend = function() {
                    i.reader = null
                }, n ? e.readAsArrayBuffer(o) : e.readAsDataURL(o))) : this.fail(new Error("The current browser does not support image compression.")) : this.fail(new Error("The first argument must be an image File or Blob object.")) : this.fail(new Error("The first argument must be a File or Blob object."))
            }
        }, {
            key: "load",
            value: function(e) {
                var t = this,
                    r = this.file,
                    a = this.image;
                a.onload = function() {
                    t.draw(i(i({}, e), {}, {
                        naturalWidth: a.naturalWidth,
                        naturalHeight: a.naturalHeight
                    }))
                }, a.onabort = function() {
                    t.fail(new Error("Aborted to load the image."))
                }, a.onerror = function() {
                    t.fail(new Error("Failed to load the image."))
                }, s.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(s.navigator.userAgent) && (a.crossOrigin = "anonymous"), a.alt = r.name, a.src = e.url
            }
        }, {
            key: "draw",
            value: function(e) {
                var t = this,
                    r = e.naturalWidth,
                    a = e.naturalHeight,
                    n = e.rotate,
                    i = void 0 === n ? 0 : n,
                    o = e.scaleX,
                    l = void 0 === o ? 1 : o,
                    s = e.scaleY,
                    c = void 0 === s ? 1 : s,
                    u = this.file,
                    h = this.image,
                    f = this.options,
                    d = document.createElement("canvas"),
                    m = d.getContext("2d"),
                    b = r / a,
                    p = Math.abs(i) % 180 == 90,
                    g = Math.max(f.maxWidth, 0) || 1 / 0,
                    y = Math.max(f.maxHeight, 0) || 1 / 0,
                    w = Math.max(f.minWidth, 0) || 0,
                    n = Math.max(f.minHeight, 0) || 0,
                    o = Math.max(f.width, 0) || r,
                    e = Math.max(f.height, 0) || a;
                p && (g = (s = [y, g])[0], y = s[1], w = (s = [n, w])[0], n = s[1], o = (s = [e, o])[0], e = s[1]), g < 1 / 0 && y < 1 / 0 ? g < y * b ? y = g / b : g = y * b : g < 1 / 0 ? y = g / b : y < 1 / 0 && (g = y * b), 0 < w && 0 < n ? w < n * b ? n = w / b : w = n * b : 0 < w ? n = w / b : 0 < n && (w = n * b), o < e * b ? e = o / b : o = e * b;
                w = -(o = Math.floor(O(Math.min(Math.max(o, w), g)))) / 2, g = -(e = Math.floor(O(Math.min(Math.max(e, n), y)))) / 2, n = o, y = e;
                p && (o = (v = [e, o])[0], e = v[1]), d.width = o, d.height = e, B(f.mimeType) || (f.mimeType = u.type);
                var v = "transparent";
                u.size > f.convertSize && "image/png" === f.mimeType && (v = "#fff", f.mimeType = "image/jpeg"), m.fillStyle = v, m.fillRect(0, 0, o, e), f.beforeDraw && f.beforeDraw.call(this, m, d), this.aborted || (m.save(), m.translate(o / 2, e / 2), m.rotate(i * Math.PI / 180), m.scale(l, c), m.drawImage(h, w, g, n, y), m.restore(), f.drew && f.drew.call(this, m, d), this.aborted || (m = function(e) {
                    t.aborted || t.done({
                        naturalWidth: r,
                        naturalHeight: a,
                        result: e
                    })
                }, d.toBlob ? d.toBlob(m, f.mimeType, f.quality) : m(U(d.toDataURL(f.mimeType, f.quality)))))
            }
        }, {
            key: "done",
            value: function(e) {
                var t = e.naturalWidth,
                    r = e.naturalHeight,
                    a = e.result,
                    n = this.file,
                    i = this.image,
                    e = this.options;
                g && !e.checkOrientation && g.revokeObjectURL(i.src), !a || e.strict && a.size > n.size && e.mimeType === n.type && !(e.width > t || e.height > r || e.minWidth > t || e.minHeight > r) ? a = n : (r = new Date, a.lastModified = r.getTime(), a.lastModifiedDate = r, a.name = n.name, a.name && a.type !== n.type && (a.name = a.name.replace(y, ("jpeg" === (n = B(n = a.type) ? n.substr(6) : "") && (n = "jpg"), ".".concat(n))))), this.result = a, e.success && e.success.call(this, a)
            }
        }, {
            key: "fail",
            value: function(e) {
                var t = this.options;
                if (!t.error) throw e;
                t.error.call(this, e)
            }
        }, {
            key: "abort",
            value: function() {
                this.aborted || (this.aborted = !0, this.reader ? this.reader.abort() : this.image.complete ? this.fail(new Error("The compression process has been aborted.")) : (this.image.onload = null, this.image.onabort()))
            }
        }]) && n(e.prototype, t), a && n(e, a), r
    }()
});

/*
 * FileSaver.js
 * A saveAs() FileSaver implementation.
 *
 * By Eli Grey, http://eligrey.com
 *
 * License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
 * source  : http://purl.eligrey.com/github/FileSaver.js
 */
(function(a, b) {
    if ("function" == typeof define && define.amd) define([], b);
    else if ("undefined" != typeof exports) b();
    else {
        b(), a.FileSaver = {
            exports: {}
        }.exports
    }
})(this, function() {
    "use strict";

    function b(a, b) {
        return "undefined" == typeof b ? b = {
            autoBom: !1
        } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
            autoBom: !b
        }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
            type: a.type
        }) : a
    }

    function c(a, b, c) {
        var d = new XMLHttpRequest;
        d.open("GET", a), d.responseType = "blob", d.onload = function() {
            g(d.response, b, c)
        }, d.onerror = function() {
            console.error("could not download file")
        }, d.send()
    }

    function d(a) {
        var b = new XMLHttpRequest;
        b.open("HEAD", a, !1);
        try {
            b.send()
        } catch (a) {}
        return 200 <= b.status && 299 >= b.status
    }

    function e(a) {
        try {
            a.dispatchEvent(new MouseEvent("click"))
        } catch (c) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b)
        }
    }
    var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
        a = /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
        g = f.saveAs || ("object" != typeof window || window !== f ? function() {} : "download" in HTMLAnchorElement.prototype && !a ? function(b, g, h) {
            var i = f.URL || f.webkitURL,
                j = document.createElement("a");
            g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function() {
                i.revokeObjectURL(j.href)
            }, 4E4), setTimeout(function() {
                e(j)
            }, 0))
        } : "msSaveOrOpenBlob" in navigator ? function(f, g, h) {
            if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);
            else if (d(f)) c(f, g, h);
            else {
                var i = document.createElement("a");
                i.href = f, i.target = "_blank", setTimeout(function() {
                    e(i)
                })
            }
        } : function(b, d, e, g) {
            if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
            var h = "application/octet-stream" === b.type,
                i = /constructor/i.test(f.HTMLElement) || f.safari,
                j = /CriOS\/[\d]+/.test(navigator.userAgent);
            if ((j || h && i || a) && "undefined" != typeof FileReader) {
                var k = new FileReader;
                k.onloadend = function() {
                    var a = k.result;
                    a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null
                }, k.readAsDataURL(b)
            } else {
                var l = f.URL || f.webkitURL,
                    m = l.createObjectURL(b);
                g ? g.location = m : location.href = m, g = null, setTimeout(function() {
                    l.revokeObjectURL(m)
                }, 4E4)
            }
        });
    f.saveAs = g.saveAs = g, "undefined" != typeof module && (module.exports = g)
});


/**
 * Browser Image Compression
 * v1.0.14
 * by Donald <donaldcwl@gmail.com>
 * https://github.com/Donaldcwl/browser-image-compression
 */

! function(e, r) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : (e = "undefined" != typeof globalThis ? globalThis : e || self).imageCompression = r()
}(this, (function() {
    "use strict";

    function _defineProperty(e, r, t) {
        return r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e
    }

    function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            r && (a = a.filter((function(r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
            }))), t.push.apply(t, a)
        }
        return t
    }

    function _objectSpread2(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys(Object(t), !0).forEach((function(r) {
                _defineProperty(e, r, t[r])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach((function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
            }))
        }
        return e
    }

    function _slicedToArray(e, r) {
        return _arrayWithHoles(e) || _iterableToArrayLimit(e, r) || _unsupportedIterableToArray(e, r) || _nonIterableRest()
    }

    function _arrayWithHoles(e) {
        if (Array.isArray(e)) return e
    }

    function _iterableToArrayLimit(e, r) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
            var t = [],
                a = !0,
                i = !1,
                f = void 0;
            try {
                for (var c, s = e[Symbol.iterator](); !(a = (c = s.next()).done) && (t.push(c.value), !r || t.length !== r); a = !0);
            } catch (e) {
                i = !0, f = e
            } finally {
                try {
                    a || null == s.return || s.return()
                } finally {
                    if (i) throw f
                }
            }
            return t
        }
    }

    function _unsupportedIterableToArray(e, r) {
        if (e) {
            if ("string" == typeof e) return _arrayLikeToArray(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(e, r) : void 0
        }
    }

    function _arrayLikeToArray(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
        return a
    }

    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function createCommonjsModule(e) {
        var r = {
            exports: {}
        };
        return e(r, r.exports), r.exports
    }
    var UZIP_1 = createCommonjsModule((function(e) {
            var r, t, UZIP = {};
            e.exports = UZIP, UZIP.parse = function(e, r) {
                    for (var t = UZIP.bin.readUshort, a = UZIP.bin.readUint, i = 0, f = {}, c = new Uint8Array(e), s = c.length - 4; 101010256 != a(c, s);) s--;
                    i = s;
                    i += 4;
                    var l = t(c, i += 4),
                        u = (t(c, i += 2), a(c, i += 2)),
                        d = a(c, i += 4);
                    i += 4, i = d;
                    for (var h = 0; h < l; h++) {
                        a(c, i);
                        i += 4, i += 4, i += 4;
                        a(c, i += 4), u = a(c, i += 4);
                        var A = a(c, i += 4),
                            v = t(c, i += 4),
                            p = t(c, i + 2),
                            U = t(c, i + 4);
                        i += 6;
                        var g = a(c, i += 8);
                        i += 4, i += v + p + U, UZIP._readLocal(c, g, f, u, A, r)
                    }
                    return f
                }, UZIP._readLocal = function(e, r, t, a, i, f) {
                    var c = UZIP.bin.readUshort,
                        s = UZIP.bin.readUint,
                        l = (s(e, r), c(e, r += 4), c(e, r += 2), c(e, r += 2));
                    s(e, r += 2), s(e, r += 4);
                    r += 4;
                    var u = c(e, r += 8),
                        d = c(e, r += 2);
                    r += 2;
                    var h = UZIP.bin.readUTF8(e, r, u);
                    if (r += u, r += d, f) t[h] = {
                        size: i,
                        csize: a
                    };
                    else {
                        var A = new Uint8Array(e.buffer, r);
                        if (0 == l) t[h] = new Uint8Array(A.buffer.slice(r, r + a));
                        else {
                            if (8 != l) throw "unknown compression method: " + l;
                            var v = new Uint8Array(i);
                            UZIP.inflateRaw(A, v), t[h] = v
                        }
                    }
                }, UZIP.inflateRaw = function(e, r) {
                    return UZIP.F.inflate(e, r)
                }, UZIP.inflate = function(e, r) {
                    e[0], e[1];
                    return UZIP.inflateRaw(new Uint8Array(e.buffer, e.byteOffset + 2, e.length - 6), r)
                }, UZIP.deflate = function(e, r) {
                    null == r && (r = {
                        level: 6
                    });
                    var t = 0,
                        a = new Uint8Array(50 + Math.floor(1.1 * e.length));
                    a[t] = 120, a[t + 1] = 156, t += 2, t = UZIP.F.deflateRaw(e, a, t, r.level);
                    var i = UZIP.adler(e, 0, e.length);
                    return a[t + 0] = i >>> 24 & 255, a[t + 1] = i >>> 16 & 255, a[t + 2] = i >>> 8 & 255, a[t + 3] = i >>> 0 & 255, new Uint8Array(a.buffer, 0, t + 4)
                }, UZIP.deflateRaw = function(e, r) {
                    null == r && (r = {
                        level: 6
                    });
                    var t = new Uint8Array(50 + Math.floor(1.1 * e.length)),
                        a = UZIP.F.deflateRaw(e, t, a, r.level);
                    return new Uint8Array(t.buffer, 0, a)
                }, UZIP.encode = function(e, r) {
                    null == r && (r = !1);
                    var t = 0,
                        a = UZIP.bin.writeUint,
                        i = UZIP.bin.writeUshort,
                        f = {};
                    for (var c in e) {
                        var s = !UZIP._noNeed(c) && !r,
                            l = e[c],
                            u = UZIP.crc.crc(l, 0, l.length);
                        f[c] = {
                            cpr: s,
                            usize: l.length,
                            crc: u,
                            file: s ? UZIP.deflateRaw(l) : l
                        }
                    }
                    for (var c in f) t += f[c].file.length + 30 + 46 + 2 * UZIP.bin.sizeUTF8(c);
                    t += 22;
                    var d = new Uint8Array(t),
                        h = 0,
                        A = [];
                    for (var c in f) {
                        var v = f[c];
                        A.push(h), h = UZIP._writeHeader(d, h, c, v, 0)
                    }
                    var p = 0,
                        U = h;
                    for (var c in f) {
                        v = f[c];
                        A.push(h), h = UZIP._writeHeader(d, h, c, v, 1, A[p++])
                    }
                    var g = h - U;
                    return a(d, h, 101010256), h += 4, i(d, h += 4, p), i(d, h += 2, p), a(d, h += 2, g), a(d, h += 4, U), h += 4, h += 2, d.buffer
                }, UZIP._noNeed = function(e) {
                    var r = e.split(".").pop().toLowerCase();
                    return -1 != "png,jpg,jpeg,zip".indexOf(r)
                }, UZIP._writeHeader = function(e, r, t, a, i, f) {
                    var c = UZIP.bin.writeUint,
                        s = UZIP.bin.writeUshort,
                        l = a.file;
                    return c(e, r, 0 == i ? 67324752 : 33639248), r += 4, 1 == i && (r += 2), s(e, r, 20), s(e, r += 2, 0), s(e, r += 2, a.cpr ? 8 : 0), c(e, r += 2, 0), c(e, r += 4, a.crc), c(e, r += 4, l.length), c(e, r += 4, a.usize), s(e, r += 4, UZIP.bin.sizeUTF8(t)), s(e, r += 2, 0), r += 2, 1 == i && (r += 2, r += 2, c(e, r += 6, f), r += 4), r += UZIP.bin.writeUTF8(e, r, t), 0 == i && (e.set(l, r), r += l.length), r
                }, UZIP.crc = {
                    table: function() {
                        for (var e = new Uint32Array(256), r = 0; r < 256; r++) {
                            for (var t = r, a = 0; a < 8; a++) 1 & t ? t = 3988292384 ^ t >>> 1 : t >>>= 1;
                            e[r] = t
                        }
                        return e
                    }(),
                    update: function(e, r, t, a) {
                        for (var i = 0; i < a; i++) e = UZIP.crc.table[255 & (e ^ r[t + i])] ^ e >>> 8;
                        return e
                    },
                    crc: function(e, r, t) {
                        return 4294967295 ^ UZIP.crc.update(4294967295, e, r, t)
                    }
                }, UZIP.adler = function(e, r, t) {
                    for (var a = 1, i = 0, f = r, c = r + t; f < c;) {
                        for (var s = Math.min(f + 5552, c); f < s;) i += a += e[f++];
                        a %= 65521, i %= 65521
                    }
                    return i << 16 | a
                }, UZIP.bin = {
                    readUshort: function(e, r) {
                        return e[r] | e[r + 1] << 8
                    },
                    writeUshort: function(e, r, t) {
                        e[r] = 255 & t, e[r + 1] = t >> 8 & 255
                    },
                    readUint: function(e, r) {
                        return 16777216 * e[r + 3] + (e[r + 2] << 16 | e[r + 1] << 8 | e[r])
                    },
                    writeUint: function(e, r, t) {
                        e[r] = 255 & t, e[r + 1] = t >> 8 & 255, e[r + 2] = t >> 16 & 255, e[r + 3] = t >> 24 & 255
                    },
                    readASCII: function(e, r, t) {
                        for (var a = "", i = 0; i < t; i++) a += String.fromCharCode(e[r + i]);
                        return a
                    },
                    writeASCII: function(e, r, t) {
                        for (var a = 0; a < t.length; a++) e[r + a] = t.charCodeAt(a)
                    },
                    pad: function(e) {
                        return e.length < 2 ? "0" + e : e
                    },
                    readUTF8: function(e, r, t) {
                        for (var a, i = "", f = 0; f < t; f++) i += "%" + UZIP.bin.pad(e[r + f].toString(16));
                        try {
                            a = decodeURIComponent(i)
                        } catch (a) {
                            return UZIP.bin.readASCII(e, r, t)
                        }
                        return a
                    },
                    writeUTF8: function(e, r, t) {
                        for (var a = t.length, i = 0, f = 0; f < a; f++) {
                            var c = t.charCodeAt(f);
                            if (0 == (4294967168 & c)) e[r + i] = c, i++;
                            else if (0 == (4294965248 & c)) e[r + i] = 192 | c >> 6, e[r + i + 1] = 128 | c >> 0 & 63, i += 2;
                            else if (0 == (4294901760 & c)) e[r + i] = 224 | c >> 12, e[r + i + 1] = 128 | c >> 6 & 63, e[r + i + 2] = 128 | c >> 0 & 63, i += 3;
                            else {
                                if (0 != (4292870144 & c)) throw "e";
                                e[r + i] = 240 | c >> 18, e[r + i + 1] = 128 | c >> 12 & 63, e[r + i + 2] = 128 | c >> 6 & 63, e[r + i + 3] = 128 | c >> 0 & 63, i += 4
                            }
                        }
                        return i
                    },
                    sizeUTF8: function(e) {
                        for (var r = e.length, t = 0, a = 0; a < r; a++) {
                            var i = e.charCodeAt(a);
                            if (0 == (4294967168 & i)) t++;
                            else if (0 == (4294965248 & i)) t += 2;
                            else if (0 == (4294901760 & i)) t += 3;
                            else {
                                if (0 != (4292870144 & i)) throw "e";
                                t += 4
                            }
                        }
                        return t
                    }
                }, UZIP.F = {}, UZIP.F.deflateRaw = function(e, r, t, a) {
                    var i = [
                            [0, 0, 0, 0, 0],
                            [4, 4, 8, 4, 0],
                            [4, 5, 16, 8, 0],
                            [4, 6, 16, 16, 0],
                            [4, 10, 16, 32, 0],
                            [8, 16, 32, 32, 0],
                            [8, 16, 128, 128, 0],
                            [8, 32, 128, 256, 0],
                            [32, 128, 258, 1024, 1],
                            [32, 258, 258, 4096, 1]
                        ][a],
                        f = UZIP.F.U,
                        c = UZIP.F._goodIndex,
                        s = (UZIP.F._hash, UZIP.F._putsE),
                        l = 0,
                        u = t << 3,
                        d = 0,
                        h = e.length;
                    if (0 == a) {
                        for (; l < h;) {
                            s(r, u, l + (I = Math.min(65535, h - l)) == h ? 1 : 0), u = UZIP.F._copyExact(e, l, I, r, u + 8), l += I
                        }
                        return u >>> 3
                    }
                    var A = f.lits,
                        v = f.strt,
                        p = f.prev,
                        U = 0,
                        g = 0,
                        m = 0,
                        w = 0,
                        P = 0,
                        b = 0;
                    for (h > 2 && (v[b = UZIP.F._hash(e, 0)] = 0), l = 0; l < h; l++) {
                        if (P = b, l + 1 < h - 2) {
                            b = UZIP.F._hash(e, l + 1);
                            var _ = l + 1 & 32767;
                            p[_] = v[b], v[b] = _
                        }
                        if (d <= l) {
                            (U > 14e3 || g > 26697) && h - l > 100 && (d < l && (A[U] = l - d, U += 2, d = l), u = UZIP.F._writeBlock(l == h - 1 || d == h ? 1 : 0, A, U, w, e, m, l - m, r, u), U = g = w = 0, m = l);
                            var y = 0;
                            l < h - 2 && (y = UZIP.F._bestMatch(e, l, p, P, Math.min(i[2], h - l), i[3]));
                            var I = y >>> 16,
                                F = 65535 & y;
                            if (0 != y) {
                                F = 65535 & y;
                                var G = c(I = y >>> 16, f.of0);
                                f.lhst[257 + G]++;
                                var C = c(F, f.df0);
                                f.dhst[C]++, w += f.exb[G] + f.dxb[C], A[U] = I << 23 | l - d, A[U + 1] = F << 16 | G << 8 | C, U += 2, d = l + I
                            } else f.lhst[e[l]]++;
                            g++
                        }
                    }
                    for (m == l && 0 != e.length || (d < l && (A[U] = l - d, U += 2, d = l), u = UZIP.F._writeBlock(1, A, U, w, e, m, l - m, r, u), U = 0, g = 0, U = g = w = 0, m = l); 0 != (7 & u);) u++;
                    return u >>> 3
                }, UZIP.F._bestMatch = function(e, r, t, a, i, f) {
                    var c = 32767 & r,
                        s = t[c],
                        l = c - s + 32768 & 32767;
                    if (s == c || a != UZIP.F._hash(e, r - l)) return 0;
                    for (var u = 0, d = 0, h = Math.min(32767, r); l <= h && 0 != --f && s != c;) {
                        if (0 == u || e[r + u] == e[r + u - l]) {
                            var A = UZIP.F._howLong(e, r, l);
                            if (A > u) {
                                if (d = l, (u = A) >= i) break;
                                l + 2 < A && (A = l + 2);
                                for (var v = 0, p = 0; p < A - 2; p++) {
                                    var U = r - l + p + 32768 & 32767,
                                        g = U - t[U] + 32768 & 32767;
                                    g > v && (v = g, s = U)
                                }
                            }
                        }
                        l += (c = s) - (s = t[c]) + 32768 & 32767
                    }
                    return u << 16 | d
                }, UZIP.F._howLong = function(e, r, t) {
                    if (e[r] != e[r - t] || e[r + 1] != e[r + 1 - t] || e[r + 2] != e[r + 2 - t]) return 0;
                    var a = r,
                        i = Math.min(e.length, r + 258);
                    for (r += 3; r < i && e[r] == e[r - t];) r++;
                    return r - a
                }, UZIP.F._hash = function(e, r) {
                    return (e[r] << 8 | e[r + 1]) + (e[r + 2] << 4) & 65535
                }, UZIP.saved = 0, UZIP.F._writeBlock = function(e, r, t, a, i, f, c, s, l) {
                    var u, d, h, A, v, p, U, g, m, w = UZIP.F.U,
                        P = UZIP.F._putsF,
                        b = UZIP.F._putsE;
                    w.lhst[256]++, d = (u = UZIP.F.getTrees())[0], h = u[1], A = u[2], v = u[3], p = u[4], U = u[5], g = u[6], m = u[7];
                    var _ = 32 + (0 == (l + 3 & 7) ? 0 : 8 - (l + 3 & 7)) + (c << 3),
                        y = a + UZIP.F.contSize(w.fltree, w.lhst) + UZIP.F.contSize(w.fdtree, w.dhst),
                        I = a + UZIP.F.contSize(w.ltree, w.lhst) + UZIP.F.contSize(w.dtree, w.dhst);
                    I += 14 + 3 * U + UZIP.F.contSize(w.itree, w.ihst) + (2 * w.ihst[16] + 3 * w.ihst[17] + 7 * w.ihst[18]);
                    for (var F = 0; F < 286; F++) w.lhst[F] = 0;
                    for (F = 0; F < 30; F++) w.dhst[F] = 0;
                    for (F = 0; F < 19; F++) w.ihst[F] = 0;
                    var G = _ < y && _ < I ? 0 : y < I ? 1 : 2;
                    if (P(s, l, e), P(s, l + 1, G), l += 3, 0 == G) {
                        for (; 0 != (7 & l);) l++;
                        l = UZIP.F._copyExact(i, f, c, s, l)
                    } else {
                        var C, E;
                        if (1 == G && (C = w.fltree, E = w.fdtree), 2 == G) {
                            UZIP.F.makeCodes(w.ltree, d), UZIP.F.revCodes(w.ltree, d), UZIP.F.makeCodes(w.dtree, h), UZIP.F.revCodes(w.dtree, h), UZIP.F.makeCodes(w.itree, A), UZIP.F.revCodes(w.itree, A), C = w.ltree, E = w.dtree, b(s, l, v - 257), b(s, l += 5, p - 1), b(s, l += 5, U - 4), l += 4;
                            for (var B = 0; B < U; B++) b(s, l + 3 * B, w.itree[1 + (w.ordr[B] << 1)]);
                            l += 3 * U, l = UZIP.F._codeTiny(g, w.itree, s, l), l = UZIP.F._codeTiny(m, w.itree, s, l)
                        }
                        for (var Z = f, x = 0; x < t; x += 2) {
                            for (var M = r[x], R = M >>> 23, Q = Z + (8388607 & M); Z < Q;) l = UZIP.F._writeLit(i[Z++], C, s, l);
                            if (0 != R) {
                                var T = r[x + 1],
                                    D = T >> 16,
                                    O = T >> 8 & 255,
                                    V = 255 & T;
                                b(s, l = UZIP.F._writeLit(257 + O, C, s, l), R - w.of0[O]), l += w.exb[O], P(s, l = UZIP.F._writeLit(V, E, s, l), D - w.df0[V]), l += w.dxb[V], Z += R
                            }
                        }
                        l = UZIP.F._writeLit(256, C, s, l)
                    }
                    return l
                }, UZIP.F._copyExact = function(e, r, t, a, i) {
                    var f = i >>> 3;
                    return a[f] = t, a[f + 1] = t >>> 8, a[f + 2] = 255 - a[f], a[f + 3] = 255 - a[f + 1], f += 4, a.set(new Uint8Array(e.buffer, r, t), f), i + (t + 4 << 3)
                }, UZIP.F.getTrees = function() {
                    for (var e = UZIP.F.U, r = UZIP.F._hufTree(e.lhst, e.ltree, 15), t = UZIP.F._hufTree(e.dhst, e.dtree, 15), a = [], i = UZIP.F._lenCodes(e.ltree, a), f = [], c = UZIP.F._lenCodes(e.dtree, f), s = 0; s < a.length; s += 2) e.ihst[a[s]]++;
                    for (s = 0; s < f.length; s += 2) e.ihst[f[s]]++;
                    for (var l = UZIP.F._hufTree(e.ihst, e.itree, 7), u = 19; u > 4 && 0 == e.itree[1 + (e.ordr[u - 1] << 1)];) u--;
                    return [r, t, l, i, c, u, a, f]
                }, UZIP.F.getSecond = function(e) {
                    for (var r = [], t = 0; t < e.length; t += 2) r.push(e[t + 1]);
                    return r
                }, UZIP.F.nonZero = function(e) {
                    for (var r = "", t = 0; t < e.length; t += 2) 0 != e[t + 1] && (r += (t >> 1) + ",");
                    return r
                }, UZIP.F.contSize = function(e, r) {
                    for (var t = 0, a = 0; a < r.length; a++) t += r[a] * e[1 + (a << 1)];
                    return t
                }, UZIP.F._codeTiny = function(e, r, t, a) {
                    for (var i = 0; i < e.length; i += 2) {
                        var f = e[i],
                            c = e[i + 1];
                        a = UZIP.F._writeLit(f, r, t, a);
                        var s = 16 == f ? 2 : 17 == f ? 3 : 7;
                        f > 15 && (UZIP.F._putsE(t, a, c, s), a += s)
                    }
                    return a
                }, UZIP.F._lenCodes = function(e, r) {
                    for (var t = e.length; 2 != t && 0 == e[t - 1];) t -= 2;
                    for (var a = 0; a < t; a += 2) {
                        var i = e[a + 1],
                            f = a + 3 < t ? e[a + 3] : -1,
                            c = a + 5 < t ? e[a + 5] : -1,
                            s = 0 == a ? -1 : e[a - 1];
                        if (0 == i && f == i && c == i) {
                            for (var l = a + 5; l + 2 < t && e[l + 2] == i;) l += 2;
                            (u = Math.min(l + 1 - a >>> 1, 138)) < 11 ? r.push(17, u - 3) : r.push(18, u - 11), a += 2 * u - 2
                        } else if (i == s && f == i && c == i) {
                            for (l = a + 5; l + 2 < t && e[l + 2] == i;) l += 2;
                            var u = Math.min(l + 1 - a >>> 1, 6);
                            r.push(16, u - 3), a += 2 * u - 2
                        } else r.push(i, 0)
                    }
                    return t >>> 1
                }, UZIP.F._hufTree = function(e, r, t) {
                    var a = [],
                        i = e.length,
                        f = r.length,
                        c = 0;
                    for (c = 0; c < f; c += 2) r[c] = 0, r[c + 1] = 0;
                    for (c = 0; c < i; c++) 0 != e[c] && a.push({
                        lit: c,
                        f: e[c]
                    });
                    var s = a.length,
                        l = a.slice(0);
                    if (0 == s) return 0;
                    if (1 == s) {
                        var u = a[0].lit;
                        l = 0 == u ? 1 : 0;
                        return r[1 + (u << 1)] = 1, r[1 + (l << 1)] = 1, 1
                    }
                    a.sort((function(e, r) {
                        return e.f - r.f
                    }));
                    var d = a[0],
                        h = a[1],
                        A = 0,
                        v = 1,
                        p = 2;
                    for (a[0] = {
                            lit: -1,
                            f: d.f + h.f,
                            l: d,
                            r: h,
                            d: 0
                        }; v != s - 1;) d = A != v && (p == s || a[A].f < a[p].f) ? a[A++] : a[p++], h = A != v && (p == s || a[A].f < a[p].f) ? a[A++] : a[p++], a[v++] = {
                        lit: -1,
                        f: d.f + h.f,
                        l: d,
                        r: h
                    };
                    var U = UZIP.F.setDepth(a[v - 1], 0);
                    for (U > t && (UZIP.F.restrictDepth(l, t, U), U = t), c = 0; c < s; c++) r[1 + (l[c].lit << 1)] = l[c].d;
                    return U
                }, UZIP.F.setDepth = function(e, r) {
                    return -1 != e.lit ? (e.d = r, r) : Math.max(UZIP.F.setDepth(e.l, r + 1), UZIP.F.setDepth(e.r, r + 1))
                }, UZIP.F.restrictDepth = function(e, r, t) {
                    var a = 0,
                        i = 1 << t - r,
                        f = 0;
                    for (e.sort((function(e, r) {
                            return r.d == e.d ? e.f - r.f : r.d - e.d
                        })), a = 0; a < e.length && e[a].d > r; a++) {
                        var c = e[a].d;
                        e[a].d = r, f += i - (1 << t - c)
                    }
                    for (f >>>= t - r; f > 0;) {
                        (c = e[a].d) < r ? (e[a].d++, f -= 1 << r - c - 1) : a++
                    }
                    for (; a >= 0; a--) e[a].d == r && f < 0 && (e[a].d--, f++);
                    0 != f && console.log("debt left")
                }, UZIP.F._goodIndex = function(e, r) {
                    var t = 0;
                    return r[16 | t] <= e && (t |= 16), r[8 | t] <= e && (t |= 8), r[4 | t] <= e && (t |= 4), r[2 | t] <= e && (t |= 2), r[1 | t] <= e && (t |= 1), t
                }, UZIP.F._writeLit = function(e, r, t, a) {
                    return UZIP.F._putsF(t, a, r[e << 1]), a + r[1 + (e << 1)]
                }, UZIP.F.inflate = function(e, r) {
                    var t = Uint8Array;
                    if (3 == e[0] && 0 == e[1]) return r || new t(0);
                    var a = UZIP.F,
                        i = a._bitsF,
                        f = a._bitsE,
                        c = a._decodeTiny,
                        s = a.makeCodes,
                        l = a.codes2map,
                        u = a._get17,
                        d = a.U,
                        h = null == r;
                    h && (r = new t(e.length >>> 2 << 3));
                    for (var A, v, p = 0, U = 0, g = 0, m = 0, w = 0, P = 0, b = 0, _ = 0, y = 0; 0 == p;)
                        if (p = i(e, y, 1), U = i(e, y + 1, 2), y += 3, 0 != U) {
                            if (h && (r = UZIP.F._check(r, _ + (1 << 17))), 1 == U && (A = d.flmap, v = d.fdmap, P = 511, b = 31), 2 == U) {
                                g = f(e, y, 5) + 257, m = f(e, y + 5, 5) + 1, w = f(e, y + 10, 4) + 4, y += 14;
                                for (var I = 0; I < 38; I += 2) d.itree[I] = 0, d.itree[I + 1] = 0;
                                var F = 1;
                                for (I = 0; I < w; I++) {
                                    var G = f(e, y + 3 * I, 3);
                                    d.itree[1 + (d.ordr[I] << 1)] = G, G > F && (F = G)
                                }
                                y += 3 * w, s(d.itree, F), l(d.itree, F, d.imap), A = d.lmap, v = d.dmap, y = c(d.imap, (1 << F) - 1, g + m, e, y, d.ttree);
                                var C = a._copyOut(d.ttree, 0, g, d.ltree);
                                P = (1 << C) - 1;
                                var E = a._copyOut(d.ttree, g, m, d.dtree);
                                b = (1 << E) - 1, s(d.ltree, C), l(d.ltree, C, A), s(d.dtree, E), l(d.dtree, E, v)
                            }
                            for (;;) {
                                var B = A[u(e, y) & P];
                                y += 15 & B;
                                var Z = B >>> 4;
                                if (Z >>> 8 == 0) r[_++] = Z;
                                else {
                                    if (256 == Z) break;
                                    var x = _ + Z - 254;
                                    if (Z > 264) {
                                        var M = d.ldef[Z - 257];
                                        x = _ + (M >>> 3) + f(e, y, 7 & M), y += 7 & M
                                    }
                                    var R = v[u(e, y) & b];
                                    y += 15 & R;
                                    var Q = R >>> 4,
                                        T = d.ddef[Q],
                                        D = (T >>> 4) + i(e, y, 15 & T);
                                    for (y += 15 & T, h && (r = UZIP.F._check(r, _ + (1 << 17))); _ < x;) r[_] = r[_++ - D], r[_] = r[_++ - D], r[_] = r[_++ - D], r[_] = r[_++ - D];
                                    _ = x
                                }
                            }
                        } else {
                            0 != (7 & y) && (y += 8 - (7 & y));
                            var O = 4 + (y >>> 3),
                                V = e[O - 4] | e[O - 3] << 8;
                            h && (r = UZIP.F._check(r, _ + V)), r.set(new t(e.buffer, e.byteOffset + O, V), _), y = O + V << 3, _ += V
                        }
                    return r.length == _ ? r : r.slice(0, _)
                }, UZIP.F._check = function(e, r) {
                    var t = e.length;
                    if (r <= t) return e;
                    var a = new Uint8Array(Math.max(t << 1, r));
                    return a.set(e, 0), a
                }, UZIP.F._decodeTiny = function(e, r, t, a, i, f) {
                    for (var c = UZIP.F._bitsE, s = UZIP.F._get17, l = 0; l < t;) {
                        var u = e[s(a, i) & r];
                        i += 15 & u;
                        var d = u >>> 4;
                        if (d <= 15) f[l] = d, l++;
                        else {
                            var h = 0,
                                A = 0;
                            16 == d ? (A = 3 + c(a, i, 2), i += 2, h = f[l - 1]) : 17 == d ? (A = 3 + c(a, i, 3), i += 3) : 18 == d && (A = 11 + c(a, i, 7), i += 7);
                            for (var v = l + A; l < v;) f[l] = h, l++
                        }
                    }
                    return i
                }, UZIP.F._copyOut = function(e, r, t, a) {
                    for (var i = 0, f = 0, c = a.length >>> 1; f < t;) {
                        var s = e[f + r];
                        a[f << 1] = 0, a[1 + (f << 1)] = s, s > i && (i = s), f++
                    }
                    for (; f < c;) a[f << 1] = 0, a[1 + (f << 1)] = 0, f++;
                    return i
                }, UZIP.F.makeCodes = function(e, r) {
                    for (var t, a, i, f, c = UZIP.F.U, s = e.length, l = c.bl_count, u = 0; u <= r; u++) l[u] = 0;
                    for (u = 1; u < s; u += 2) l[e[u]]++;
                    var d = c.next_code;
                    for (t = 0, l[0] = 0, a = 1; a <= r; a++) t = t + l[a - 1] << 1, d[a] = t;
                    for (i = 0; i < s; i += 2) 0 != (f = e[i + 1]) && (e[i] = d[f], d[f]++)
                }, UZIP.F.codes2map = function(e, r, t) {
                    for (var a = e.length, i = UZIP.F.U.rev15, f = 0; f < a; f += 2)
                        if (0 != e[f + 1])
                            for (var c = f >> 1, s = e[f + 1], l = c << 4 | s, u = r - s, d = e[f] << u, h = d + (1 << u); d != h;) {
                                t[i[d] >>> 15 - r] = l, d++
                            }
                }, UZIP.F.revCodes = function(e, r) {
                    for (var t = UZIP.F.U.rev15, a = 15 - r, i = 0; i < e.length; i += 2) {
                        var f = e[i] << r - e[i + 1];
                        e[i] = t[f] >>> a
                    }
                }, UZIP.F._putsE = function(e, r, t) {
                    t <<= 7 & r;
                    var a = r >>> 3;
                    e[a] |= t, e[a + 1] |= t >>> 8
                }, UZIP.F._putsF = function(e, r, t) {
                    t <<= 7 & r;
                    var a = r >>> 3;
                    e[a] |= t, e[a + 1] |= t >>> 8, e[a + 2] |= t >>> 16
                }, UZIP.F._bitsE = function(e, r, t) {
                    return (e[r >>> 3] | e[1 + (r >>> 3)] << 8) >>> (7 & r) & (1 << t) - 1
                }, UZIP.F._bitsF = function(e, r, t) {
                    return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16) >>> (7 & r) & (1 << t) - 1
                }, UZIP.F._get17 = function(e, r) {
                    return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16) >>> (7 & r)
                }, UZIP.F._get25 = function(e, r) {
                    return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16 | e[3 + (r >>> 3)] << 24) >>> (7 & r)
                }, UZIP.F.U = (r = Uint16Array, t = Uint32Array, {
                    next_code: new r(16),
                    bl_count: new r(16),
                    ordr: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                    of0: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999],
                    exb: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0],
                    ldef: new r(32),
                    df0: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535],
                    dxb: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0],
                    ddef: new t(32),
                    flmap: new r(512),
                    fltree: [],
                    fdmap: new r(32),
                    fdtree: [],
                    lmap: new r(32768),
                    ltree: [],
                    ttree: [],
                    dmap: new r(32768),
                    dtree: [],
                    imap: new r(512),
                    itree: [],
                    rev15: new r(32768),
                    lhst: new t(286),
                    dhst: new t(30),
                    ihst: new t(19),
                    lits: new t(15e3),
                    strt: new r(65536),
                    prev: new r(32768)
                }),
                function() {
                    for (var e = UZIP.F.U, r = 0; r < 32768; r++) {
                        var t = r;
                        t = (4278255360 & (t = (4042322160 & (t = (3435973836 & (t = (2863311530 & t) >>> 1 | (1431655765 & t) << 1)) >>> 2 | (858993459 & t) << 2)) >>> 4 | (252645135 & t) << 4)) >>> 8 | (16711935 & t) << 8, e.rev15[r] = (t >>> 16 | t << 16) >>> 17
                    }

                    function pushV(e, r, t) {
                        for (; 0 != r--;) e.push(0, t)
                    }
                    for (r = 0; r < 32; r++) e.ldef[r] = e.of0[r] << 3 | e.exb[r], e.ddef[r] = e.df0[r] << 4 | e.dxb[r];
                    pushV(e.fltree, 144, 8), pushV(e.fltree, 112, 9), pushV(e.fltree, 24, 7), pushV(e.fltree, 8, 8), UZIP.F.makeCodes(e.fltree, 9), UZIP.F.codes2map(e.fltree, 9, e.flmap), UZIP.F.revCodes(e.fltree, 9), pushV(e.fdtree, 32, 5), UZIP.F.makeCodes(e.fdtree, 5), UZIP.F.codes2map(e.fdtree, 5, e.fdmap), UZIP.F.revCodes(e.fdtree, 5), pushV(e.itree, 19, 0), pushV(e.ltree, 286, 0), pushV(e.dtree, 30, 0), pushV(e.ttree, 320, 0)
                }()
        })),
        UZIP = Object.freeze(Object.assign(Object.create(null), UZIP_1, {
            default: UZIP_1
        })),
        UPNG = {},
        N, W, H;
    UPNG.toRGBA8 = function(e) {
        var r = e.width,
            t = e.height;
        if (null == e.tabs.acTL) return [UPNG.toRGBA8.decodeImage(e.data, r, t, e).buffer];
        var a = [];
        null == e.frames[0].data && (e.frames[0].data = e.data);
        for (var i = r * t * 4, f = new Uint8Array(i), c = new Uint8Array(i), s = new Uint8Array(i), l = 0; l < e.frames.length; l++) {
            var u = e.frames[l],
                d = u.rect.x,
                h = u.rect.y,
                A = u.rect.width,
                v = u.rect.height,
                p = UPNG.toRGBA8.decodeImage(u.data, A, v, e);
            if (0 != l)
                for (var U = 0; U < i; U++) s[U] = f[U];
            if (0 == u.blend ? UPNG._copyTile(p, A, v, f, r, t, d, h, 0) : 1 == u.blend && UPNG._copyTile(p, A, v, f, r, t, d, h, 1), a.push(f.buffer.slice(0)), 0 == u.dispose);
            else if (1 == u.dispose) UPNG._copyTile(c, A, v, f, r, t, d, h, 0);
            else if (2 == u.dispose)
                for (U = 0; U < i; U++) f[U] = s[U]
        }
        return a
    }, UPNG.toRGBA8.decodeImage = function(e, r, t, a) {
        var i = r * t,
            f = UPNG.decode._getBPP(a),
            c = Math.ceil(r * f / 8),
            s = new Uint8Array(4 * i),
            l = new Uint32Array(s.buffer),
            u = a.ctype,
            d = a.depth,
            h = UPNG._bin.readUshort;
        if (6 == u) {
            var A = i << 2;
            if (8 == d)
                for (var v = 0; v < A; v += 4) s[v] = e[v], s[v + 1] = e[v + 1], s[v + 2] = e[v + 2], s[v + 3] = e[v + 3];
            if (16 == d)
                for (v = 0; v < A; v++) s[v] = e[v << 1]
        } else if (2 == u) {
            var p = a.tabs.tRNS;
            if (null == p) {
                if (8 == d)
                    for (v = 0; v < i; v++) {
                        var U = 3 * v;
                        l[v] = 255 << 24 | e[U + 2] << 16 | e[U + 1] << 8 | e[U]
                    }
                if (16 == d)
                    for (v = 0; v < i; v++) {
                        U = 6 * v;
                        l[v] = 255 << 24 | e[U + 4] << 16 | e[U + 2] << 8 | e[U]
                    }
            } else {
                var g = p[0],
                    m = p[1],
                    w = p[2];
                if (8 == d)
                    for (v = 0; v < i; v++) {
                        var P = v << 2;
                        U = 3 * v;
                        l[v] = 255 << 24 | e[U + 2] << 16 | e[U + 1] << 8 | e[U], e[U] == g && e[U + 1] == m && e[U + 2] == w && (s[P + 3] = 0)
                    }
                if (16 == d)
                    for (v = 0; v < i; v++) {
                        P = v << 2, U = 6 * v;
                        l[v] = 255 << 24 | e[U + 4] << 16 | e[U + 2] << 8 | e[U], h(e, U) == g && h(e, U + 2) == m && h(e, U + 4) == w && (s[P + 3] = 0)
                    }
            }
        } else if (3 == u) {
            var b = a.tabs.PLTE,
                _ = a.tabs.tRNS,
                y = _ ? _.length : 0;
            if (1 == d)
                for (var I = 0; I < t; I++) {
                    var F = I * c,
                        G = I * r;
                    for (v = 0; v < r; v++) {
                        P = G + v << 2;
                        var C = 3 * (E = e[F + (v >> 3)] >> 7 - ((7 & v) << 0) & 1);
                        s[P] = b[C], s[P + 1] = b[C + 1], s[P + 2] = b[C + 2], s[P + 3] = E < y ? _[E] : 255
                    }
                }
            if (2 == d)
                for (I = 0; I < t; I++)
                    for (F = I * c, G = I * r, v = 0; v < r; v++) {
                        P = G + v << 2, C = 3 * (E = e[F + (v >> 2)] >> 6 - ((3 & v) << 1) & 3);
                        s[P] = b[C], s[P + 1] = b[C + 1], s[P + 2] = b[C + 2], s[P + 3] = E < y ? _[E] : 255
                    }
            if (4 == d)
                for (I = 0; I < t; I++)
                    for (F = I * c, G = I * r, v = 0; v < r; v++) {
                        P = G + v << 2, C = 3 * (E = e[F + (v >> 1)] >> 4 - ((1 & v) << 2) & 15);
                        s[P] = b[C], s[P + 1] = b[C + 1], s[P + 2] = b[C + 2], s[P + 3] = E < y ? _[E] : 255
                    }
            if (8 == d)
                for (v = 0; v < i; v++) {
                    var E;
                    P = v << 2, C = 3 * (E = e[v]);
                    s[P] = b[C], s[P + 1] = b[C + 1], s[P + 2] = b[C + 2], s[P + 3] = E < y ? _[E] : 255
                }
        } else if (4 == u) {
            if (8 == d)
                for (v = 0; v < i; v++) {
                    P = v << 2;
                    var B = e[Z = v << 1];
                    s[P] = B, s[P + 1] = B, s[P + 2] = B, s[P + 3] = e[Z + 1]
                }
            if (16 == d)
                for (v = 0; v < i; v++) {
                    var Z;
                    P = v << 2, B = e[Z = v << 2];
                    s[P] = B, s[P + 1] = B, s[P + 2] = B, s[P + 3] = e[Z + 2]
                }
        } else if (0 == u)
            for (g = a.tabs.tRNS ? a.tabs.tRNS : -1, I = 0; I < t; I++) {
                var x = I * c,
                    M = I * r;
                if (1 == d)
                    for (var R = 0; R < r; R++) {
                        var Q = (B = 255 * (e[x + (R >>> 3)] >>> 7 - (7 & R) & 1)) == 255 * g ? 0 : 255;
                        l[M + R] = Q << 24 | B << 16 | B << 8 | B
                    } else if (2 == d)
                        for (R = 0; R < r; R++) {
                            Q = (B = 85 * (e[x + (R >>> 2)] >>> 6 - ((3 & R) << 1) & 3)) == 85 * g ? 0 : 255;
                            l[M + R] = Q << 24 | B << 16 | B << 8 | B
                        } else if (4 == d)
                            for (R = 0; R < r; R++) {
                                Q = (B = 17 * (e[x + (R >>> 1)] >>> 4 - ((1 & R) << 2) & 15)) == 17 * g ? 0 : 255;
                                l[M + R] = Q << 24 | B << 16 | B << 8 | B
                            } else if (8 == d)
                                for (R = 0; R < r; R++) {
                                    Q = (B = e[x + R]) == g ? 0 : 255;
                                    l[M + R] = Q << 24 | B << 16 | B << 8 | B
                                } else if (16 == d)
                                    for (R = 0; R < r; R++) {
                                        B = e[x + (R << 1)], Q = h(e, x + (R << v)) == g ? 0 : 255;
                                        l[M + R] = Q << 24 | B << 16 | B << 8 | B
                                    }
            }
        return s
    }, UPNG.decode = function(e) {
        for (var r, t = new Uint8Array(e), a = 8, i = UPNG._bin, f = i.readUshort, c = i.readUint, s = {
                tabs: {},
                frames: []
            }, l = new Uint8Array(t.length), u = 0, d = 0, h = [137, 80, 78, 71, 13, 10, 26, 10], A = 0; A < 8; A++)
            if (t[A] != h[A]) throw "The input is not a PNG file!";
        for (; a < t.length;) {
            var v = i.readUint(t, a);
            a += 4;
            var p = i.readASCII(t, a, 4);
            if (a += 4, "IHDR" == p) UPNG.decode._IHDR(t, a, s);
            else if ("CgBI" == p) s.tabs[p] = t.slice(a, a + 4);
            else if ("IDAT" == p) {
                for (A = 0; A < v; A++) l[u + A] = t[a + A];
                u += v
            } else if ("acTL" == p) s.tabs[p] = {
                num_frames: c(t, a),
                num_plays: c(t, a + 4)
            }, r = new Uint8Array(t.length);
            else if ("fcTL" == p) {
                var U;
                if (0 != d)(U = s.frames[s.frames.length - 1]).data = UPNG.decode._decompress(s, r.slice(0, d), U.rect.width, U.rect.height), d = 0;
                var g = {
                        x: c(t, a + 12),
                        y: c(t, a + 16),
                        width: c(t, a + 4),
                        height: c(t, a + 8)
                    },
                    m = f(t, a + 22);
                m = f(t, a + 20) / (0 == m ? 100 : m);
                var w = {
                    rect: g,
                    delay: Math.round(1e3 * m),
                    dispose: t[a + 24],
                    blend: t[a + 25]
                };
                s.frames.push(w)
            } else if ("fdAT" == p) {
                for (A = 0; A < v - 4; A++) r[d + A] = t[a + A + 4];
                d += v - 4
            } else if ("pHYs" == p) s.tabs[p] = [i.readUint(t, a), i.readUint(t, a + 4), t[a + 8]];
            else if ("cHRM" == p) {
                s.tabs[p] = [];
                for (A = 0; A < 8; A++) s.tabs[p].push(i.readUint(t, a + 4 * A))
            } else if ("tEXt" == p || "zTXt" == p) {
                null == s.tabs[p] && (s.tabs[p] = {});
                var P = i.nextZero(t, a),
                    b = i.readASCII(t, a, P - a),
                    _ = a + v - P - 1;
                if ("tEXt" == p) G = i.readASCII(t, P + 1, _);
                else {
                    var y = UPNG.decode._inflate(t.slice(P + 2, P + 2 + _));
                    G = i.readUTF8(y, 0, y.length)
                }
                s.tabs[p][b] = G
            } else if ("iTXt" == p) {
                null == s.tabs[p] && (s.tabs[p] = {});
                P = 0;
                var I = a;
                P = i.nextZero(t, I);
                b = i.readASCII(t, I, P - I);
                var F = t[I = P + 1];
                I += 2, P = i.nextZero(t, I);
                i.readASCII(t, I, P - I);
                I = P + 1, P = i.nextZero(t, I);
                var G;
                i.readUTF8(t, I, P - I), _ = v - ((I = P + 1) - a);
                if (0 == F) G = i.readUTF8(t, I, _);
                else {
                    y = UPNG.decode._inflate(t.slice(I, I + _));
                    G = i.readUTF8(y, 0, y.length)
                }
                s.tabs[p][b] = G
            } else if ("PLTE" == p) s.tabs[p] = i.readBytes(t, a, v);
            else if ("hIST" == p) {
                var C = s.tabs.PLTE.length / 3;
                s.tabs[p] = [];
                for (A = 0; A < C; A++) s.tabs[p].push(f(t, a + 2 * A))
            } else if ("tRNS" == p) 3 == s.ctype ? s.tabs[p] = i.readBytes(t, a, v) : 0 == s.ctype ? s.tabs[p] = f(t, a) : 2 == s.ctype && (s.tabs[p] = [f(t, a), f(t, a + 2), f(t, a + 4)]);
            else if ("gAMA" == p) s.tabs[p] = i.readUint(t, a) / 1e5;
            else if ("sRGB" == p) s.tabs[p] = t[a];
            else if ("bKGD" == p) 0 == s.ctype || 4 == s.ctype ? s.tabs[p] = [f(t, a)] : 2 == s.ctype || 6 == s.ctype ? s.tabs[p] = [f(t, a), f(t, a + 2), f(t, a + 4)] : 3 == s.ctype && (s.tabs[p] = t[a]);
            else if ("IEND" == p) break;
            a += v;
            i.readUint(t, a);
            a += 4
        }
        0 != d && ((U = s.frames[s.frames.length - 1]).data = UPNG.decode._decompress(s, r.slice(0, d), U.rect.width, U.rect.height), d = 0);
        return s.data = UPNG.decode._decompress(s, l, s.width, s.height), delete s.compress, delete s.interlace, delete s.filter, s
    }, UPNG.decode._decompress = function(e, r, t, a) {
        var i = UPNG.decode._getBPP(e),
            f = Math.ceil(t * i / 8),
            c = new Uint8Array((f + 1 + e.interlace) * a);
        return r = e.tabs.CgBI ? UPNG.inflateRaw(r, c) : UPNG.decode._inflate(r, c), 0 == e.interlace ? r = UPNG.decode._filterZero(r, e, 0, t, a) : 1 == e.interlace && (r = UPNG.decode._readInterlace(r, e)), r
    }, UPNG.decode._inflate = function(e, r) {
        return UPNG.inflateRaw(new Uint8Array(e.buffer, 2, e.length - 6), r)
    }, UPNG.inflateRaw = (H = {}, H.H = {}, H.H.N = function(e, r) {
        var t, a, i = Uint8Array,
            f = 0,
            c = 0,
            s = 0,
            l = 0,
            u = 0,
            d = 0,
            h = 0,
            A = 0,
            v = 0;
        if (3 == e[0] && 0 == e[1]) return r || new i(0);
        var p = H.H,
            U = p.b,
            g = p.e,
            m = p.R,
            w = p.n,
            P = p.A,
            b = p.Z,
            _ = p.m,
            y = null == r;
        for (y && (r = new i(e.length >>> 2 << 5)); 0 == f;)
            if (f = U(e, v, 1), c = U(e, v + 1, 2), v += 3, 0 != c) {
                if (y && (r = H.H.W(r, A + (1 << 17))), 1 == c && (t = _.J, a = _.h, d = 511, h = 31), 2 == c) {
                    s = g(e, v, 5) + 257, l = g(e, v + 5, 5) + 1, u = g(e, v + 10, 4) + 4, v += 14;
                    for (var I = 1, F = 0; F < 38; F += 2) _.Q[F] = 0, _.Q[F + 1] = 0;
                    for (F = 0; F < u; F++) {
                        var G = g(e, v + 3 * F, 3);
                        _.Q[1 + (_.X[F] << 1)] = G, G > I && (I = G)
                    }
                    v += 3 * u, w(_.Q, I), P(_.Q, I, _.u), t = _.w, a = _.d, v = m(_.u, (1 << I) - 1, s + l, e, v, _.v);
                    var C = p.V(_.v, 0, s, _.C);
                    d = (1 << C) - 1;
                    var E = p.V(_.v, s, l, _.D);
                    h = (1 << E) - 1, w(_.C, C), P(_.C, C, t), w(_.D, E), P(_.D, E, a)
                }
                for (;;) {
                    var B = t[b(e, v) & d];
                    v += 15 & B;
                    var Z = B >>> 4;
                    if (Z >>> 8 == 0) r[A++] = Z;
                    else {
                        if (256 == Z) break;
                        var x = A + Z - 254;
                        if (Z > 264) {
                            var M = _.q[Z - 257];
                            x = A + (M >>> 3) + g(e, v, 7 & M), v += 7 & M
                        }
                        var R = a[b(e, v) & h];
                        v += 15 & R;
                        var Q = R >>> 4,
                            T = _.c[Q],
                            D = (T >>> 4) + U(e, v, 15 & T);
                        for (v += 15 & T; A < x;) r[A] = r[A++ - D], r[A] = r[A++ - D], r[A] = r[A++ - D], r[A] = r[A++ - D];
                        A = x
                    }
                }
            } else {
                0 != (7 & v) && (v += 8 - (7 & v));
                var O = 4 + (v >>> 3),
                    V = e[O - 4] | e[O - 3] << 8;
                y && (r = H.H.W(r, A + V)), r.set(new i(e.buffer, e.byteOffset + O, V), A), v = O + V << 3, A += V
            }
        return r.length == A ? r : r.slice(0, A)
    }, H.H.W = function(e, r) {
        var t = e.length;
        if (r <= t) return e;
        var a = new Uint8Array(t << 1);
        return a.set(e, 0), a
    }, H.H.R = function(e, r, t, a, i, f) {
        for (var c = H.H.e, s = H.H.Z, l = 0; l < t;) {
            var u = e[s(a, i) & r];
            i += 15 & u;
            var d = u >>> 4;
            if (d <= 15) f[l] = d, l++;
            else {
                var h = 0,
                    A = 0;
                16 == d ? (A = 3 + c(a, i, 2), i += 2, h = f[l - 1]) : 17 == d ? (A = 3 + c(a, i, 3), i += 3) : 18 == d && (A = 11 + c(a, i, 7), i += 7);
                for (var v = l + A; l < v;) f[l] = h, l++
            }
        }
        return i
    }, H.H.V = function(e, r, t, a) {
        for (var i = 0, f = 0, c = a.length >>> 1; f < t;) {
            var s = e[f + r];
            a[f << 1] = 0, a[1 + (f << 1)] = s, s > i && (i = s), f++
        }
        for (; f < c;) a[f << 1] = 0, a[1 + (f << 1)] = 0, f++;
        return i
    }, H.H.n = function(e, r) {
        for (var t, a, i, f, c = H.H.m, s = e.length, l = c.j, u = 0; u <= r; u++) l[u] = 0;
        for (u = 1; u < s; u += 2) l[e[u]]++;
        var d = c.K;
        for (t = 0, l[0] = 0, a = 1; a <= r; a++) t = t + l[a - 1] << 1, d[a] = t;
        for (i = 0; i < s; i += 2) 0 != (f = e[i + 1]) && (e[i] = d[f], d[f]++)
    }, H.H.A = function(e, r, t) {
        for (var a = e.length, i = H.H.m.r, f = 0; f < a; f += 2)
            if (0 != e[f + 1])
                for (var c = f >> 1, s = e[f + 1], l = c << 4 | s, u = r - s, d = e[f] << u, h = d + (1 << u); d != h;) t[i[d] >>> 15 - r] = l, d++
    }, H.H.l = function(e, r) {
        for (var t = H.H.m.r, a = 15 - r, i = 0; i < e.length; i += 2) {
            var f = e[i] << r - e[i + 1];
            e[i] = t[f] >>> a
        }
    }, H.H.M = function(e, r, t) {
        t <<= 7 & r;
        var a = r >>> 3;
        e[a] |= t, e[a + 1] |= t >>> 8
    }, H.H.I = function(e, r, t) {
        t <<= 7 & r;
        var a = r >>> 3;
        e[a] |= t, e[a + 1] |= t >>> 8, e[a + 2] |= t >>> 16
    }, H.H.e = function(e, r, t) {
        return (e[r >>> 3] | e[1 + (r >>> 3)] << 8) >>> (7 & r) & (1 << t) - 1
    }, H.H.b = function(e, r, t) {
        return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16) >>> (7 & r) & (1 << t) - 1
    }, H.H.Z = function(e, r) {
        return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16) >>> (7 & r)
    }, H.H.i = function(e, r) {
        return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16 | e[3 + (r >>> 3)] << 24) >>> (7 & r)
    }, H.H.m = (N = Uint16Array, W = Uint32Array, {
        K: new N(16),
        j: new N(16),
        X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        S: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999],
        T: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0],
        q: new N(32),
        p: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535],
        z: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0],
        c: new W(32),
        J: new N(512),
        _: [],
        h: new N(32),
        $: [],
        w: new N(32768),
        C: [],
        v: [],
        d: new N(32768),
        D: [],
        u: new N(512),
        Q: [],
        r: new N(32768),
        s: new W(286),
        Y: new W(30),
        a: new W(19),
        t: new W(15e3),
        k: new N(65536),
        g: new N(32768)
    }), function() {
        for (var e = H.H.m, r = 0; r < 32768; r++) {
            var t = r;
            t = (4278255360 & (t = (4042322160 & (t = (3435973836 & (t = (2863311530 & t) >>> 1 | (1431655765 & t) << 1)) >>> 2 | (858993459 & t) << 2)) >>> 4 | (252645135 & t) << 4)) >>> 8 | (16711935 & t) << 8, e.r[r] = (t >>> 16 | t << 16) >>> 17
        }

        function n(e, r, t) {
            for (; 0 != r--;) e.push(0, t)
        }
        for (r = 0; r < 32; r++) e.q[r] = e.S[r] << 3 | e.T[r], e.c[r] = e.p[r] << 4 | e.z[r];
        n(e._, 144, 8), n(e._, 112, 9), n(e._, 24, 7), n(e._, 8, 8), H.H.n(e._, 9), H.H.A(e._, 9, e.J), H.H.l(e._, 9), n(e.$, 32, 5), H.H.n(e.$, 5), H.H.A(e.$, 5, e.h), H.H.l(e.$, 5), n(e.Q, 19, 0), n(e.C, 286, 0), n(e.D, 30, 0), n(e.v, 320, 0)
    }(), H.H.N), UPNG.decode._readInterlace = function(e, r) {
        for (var t = r.width, a = r.height, i = UPNG.decode._getBPP(r), f = i >> 3, c = Math.ceil(t * i / 8), s = new Uint8Array(a * c), l = 0, u = [0, 0, 4, 0, 2, 0, 1], d = [0, 4, 0, 2, 0, 1, 0], h = [8, 8, 8, 4, 4, 2, 2], A = [8, 8, 4, 4, 2, 2, 1], v = 0; v < 7;) {
            for (var p = h[v], U = A[v], g = 0, m = 0, w = u[v]; w < a;) w += p, m++;
            for (var P = d[v]; P < t;) P += U, g++;
            var b = Math.ceil(g * i / 8);
            UPNG.decode._filterZero(e, r, l, g, m);
            for (var _ = 0, y = u[v]; y < a;) {
                for (var I = d[v], F = l + _ * b << 3; I < t;) {
                    var G;
                    if (1 == i) G = (G = e[F >> 3]) >> 7 - (7 & F) & 1, s[y * c + (I >> 3)] |= G << 7 - ((7 & I) << 0);
                    if (2 == i) G = (G = e[F >> 3]) >> 6 - (7 & F) & 3, s[y * c + (I >> 2)] |= G << 6 - ((3 & I) << 1);
                    if (4 == i) G = (G = e[F >> 3]) >> 4 - (7 & F) & 15, s[y * c + (I >> 1)] |= G << 4 - ((1 & I) << 2);
                    if (i >= 8)
                        for (var C = y * c + I * f, E = 0; E < f; E++) s[C + E] = e[(F >> 3) + E];
                    F += i, I += U
                }
                _++, y += p
            }
            g * m != 0 && (l += m * (1 + b)), v += 1
        }
        return s
    }, UPNG.decode._getBPP = function(e) {
        return [1, null, 3, 1, 2, null, 4][e.ctype] * e.depth
    }, UPNG.decode._filterZero = function(e, r, t, a, i) {
        var f = UPNG.decode._getBPP(r),
            c = Math.ceil(a * f / 8),
            s = UPNG.decode._paeth;
        f = Math.ceil(f / 8);
        var l = 0,
            u = 1,
            d = e[t],
            h = 0;
        if (d > 1 && (e[t] = [0, 0, 1][d - 2]), 3 == d)
            for (h = f; h < c; h++) e[h + 1] = e[h + 1] + (e[h + 1 - f] >>> 1) & 255;
        for (var A = 0; A < i; A++)
            if (h = 0, 0 == (d = e[(u = (l = t + A * c) + A + 1) - 1]))
                for (; h < c; h++) e[l + h] = e[u + h];
            else if (1 == d) {
            for (; h < f; h++) e[l + h] = e[u + h];
            for (; h < c; h++) e[l + h] = e[u + h] + e[l + h - f]
        } else if (2 == d)
            for (; h < c; h++) e[l + h] = e[u + h] + e[l + h - c];
        else if (3 == d) {
            for (; h < f; h++) e[l + h] = e[u + h] + (e[l + h - c] >>> 1);
            for (; h < c; h++) e[l + h] = e[u + h] + (e[l + h - c] + e[l + h - f] >>> 1)
        } else {
            for (; h < f; h++) e[l + h] = e[u + h] + s(0, e[l + h - c], 0);
            for (; h < c; h++) e[l + h] = e[u + h] + s(e[l + h - f], e[l + h - c], e[l + h - f - c])
        }
        return e
    }, UPNG.decode._paeth = function(e, r, t) {
        var a = e + r - t,
            i = a - e,
            f = a - r,
            c = a - t;
        return i * i <= f * f && i * i <= c * c ? e : f * f <= c * c ? r : t
    }, UPNG.decode._IHDR = function(e, r, t) {
        var a = UPNG._bin;
        t.width = a.readUint(e, r), r += 4, t.height = a.readUint(e, r), r += 4, t.depth = e[r], r++, t.ctype = e[r], r++, t.compress = e[r], r++, t.filter = e[r], r++, t.interlace = e[r], r++
    }, UPNG._bin = {
        nextZero: function nextZero(e, r) {
            for (; 0 != e[r];) r++;
            return r
        },
        readUshort: function readUshort(e, r) {
            return e[r] << 8 | e[r + 1]
        },
        writeUshort: function writeUshort(e, r, t) {
            e[r] = t >> 8 & 255, e[r + 1] = 255 & t
        },
        readUint: function readUint(e, r) {
            return 16777216 * e[r] + (e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3])
        },
        writeUint: function writeUint(e, r, t) {
            e[r] = t >> 24 & 255, e[r + 1] = t >> 16 & 255, e[r + 2] = t >> 8 & 255, e[r + 3] = 255 & t
        },
        readASCII: function readASCII(e, r, t) {
            for (var a = "", i = 0; i < t; i++) a += String.fromCharCode(e[r + i]);
            return a
        },
        writeASCII: function writeASCII(e, r, t) {
            for (var a = 0; a < t.length; a++) e[r + a] = t.charCodeAt(a)
        },
        readBytes: function readBytes(e, r, t) {
            for (var a = [], i = 0; i < t; i++) a.push(e[r + i]);
            return a
        },
        pad: function pad(e) {
            return e.length < 2 ? "0" + e : e
        },
        readUTF8: function readUTF8(e, r, t) {
            for (var a, i = "", f = 0; f < t; f++) i += "%" + UPNG._bin.pad(e[r + f].toString(16));
            try {
                a = decodeURIComponent(i)
            } catch (a) {
                return UPNG._bin.readASCII(e, r, t)
            }
            return a
        }
    }, UPNG._copyTile = function(e, r, t, a, i, f, c, s, l) {
        for (var u = Math.min(r, i), d = Math.min(t, f), h = 0, A = 0, v = 0; v < d; v++)
            for (var p = 0; p < u; p++)
                if (c >= 0 && s >= 0 ? (h = v * r + p << 2, A = (s + v) * i + c + p << 2) : (h = (-s + v) * r - c + p << 2, A = v * i + p << 2), 0 == l) a[A] = e[h], a[A + 1] = e[h + 1], a[A + 2] = e[h + 2], a[A + 3] = e[h + 3];
                else if (1 == l) {
            var U = e[h + 3] * (1 / 255),
                g = e[h] * U,
                m = e[h + 1] * U,
                w = e[h + 2] * U,
                P = a[A + 3] * (1 / 255),
                b = a[A] * P,
                _ = a[A + 1] * P,
                y = a[A + 2] * P,
                I = 1 - U,
                F = U + P * I,
                G = 0 == F ? 0 : 1 / F;
            a[A + 3] = 255 * F, a[A + 0] = (g + b * I) * G, a[A + 1] = (m + _ * I) * G, a[A + 2] = (w + y * I) * G
        } else if (2 == l) {
            U = e[h + 3], g = e[h], m = e[h + 1], w = e[h + 2], P = a[A + 3], b = a[A], _ = a[A + 1], y = a[A + 2];
            U == P && g == b && m == _ && w == y ? (a[A] = 0, a[A + 1] = 0, a[A + 2] = 0, a[A + 3] = 0) : (a[A] = g, a[A + 1] = m, a[A + 2] = w, a[A + 3] = U)
        } else if (3 == l) {
            U = e[h + 3], g = e[h], m = e[h + 1], w = e[h + 2], P = a[A + 3], b = a[A], _ = a[A + 1], y = a[A + 2];
            if (U == P && g == b && m == _ && w == y) continue;
            if (U < 220 && P > 20) return !1
        }
        return !0
    }, UPNG.encode = function(e, r, t, a, i, f, c) {
        null == a && (a = 0), null == c && (c = !1);
        var s = UPNG.encode.compress(e, r, t, a, [!1, !1, !1, 0, c]);
        return UPNG.encode.compressPNG(s, -1), UPNG.encode._main(s, r, t, i, f)
    }, UPNG.encodeLL = function(e, r, t, a, i, f, c, s) {
        for (var l = {
                ctype: 0 + (1 == a ? 0 : 2) + (0 == i ? 0 : 4),
                depth: f,
                frames: []
            }, u = (a + i) * f, d = u * r, h = 0; h < e.length; h++) l.frames.push({
            rect: {
                x: 0,
                y: 0,
                width: r,
                height: t
            },
            img: new Uint8Array(e[h]),
            blend: 0,
            dispose: 1,
            bpp: Math.ceil(u / 8),
            bpl: Math.ceil(d / 8)
        });
        return UPNG.encode.compressPNG(l, 0, !0), UPNG.encode._main(l, r, t, c, s)
    }, UPNG.encode._main = function(e, r, t, a, i) {
        null == i && (i = {});
        var f = UPNG.crc.crc,
            c = UPNG._bin.writeUint,
            s = UPNG._bin.writeUshort,
            l = UPNG._bin.writeASCII,
            u = 8,
            d = e.frames.length > 1,
            h = !1,
            A = 33 + (d ? 20 : 0);
        if (null != i.sRGB && (A += 13), null != i.pHYs && (A += 21), 3 == e.ctype) {
            for (var v = e.plte.length, p = 0; p < v; p++) e.plte[p] >>> 24 != 255 && (h = !0);
            A += 8 + 3 * v + 4 + (h ? 8 + 1 * v + 4 : 0)
        }
        for (var U = 0; U < e.frames.length; U++) {
            d && (A += 38), A += (F = e.frames[U]).cimg.length + 12, 0 != U && (A += 4)
        }
        A += 12;
        var g = new Uint8Array(A),
            m = [137, 80, 78, 71, 13, 10, 26, 10];
        for (p = 0; p < 8; p++) g[p] = m[p];
        if (c(g, u, 13), l(g, u += 4, "IHDR"), c(g, u += 4, r), c(g, u += 4, t), g[u += 4] = e.depth, g[++u] = e.ctype, g[++u] = 0, g[++u] = 0, g[++u] = 0, c(g, ++u, f(g, u - 17, 17)), u += 4, null != i.sRGB && (c(g, u, 1), l(g, u += 4, "sRGB"), g[u += 4] = i.sRGB, c(g, ++u, f(g, u - 5, 5)), u += 4), null != i.pHYs && (c(g, u, 9), l(g, u += 4, "pHYs"), c(g, u += 4, i.pHYs[0]), c(g, u += 4, i.pHYs[1]), g[u += 4] = i.pHYs[2], c(g, ++u, f(g, u - 13, 13)), u += 4), d && (c(g, u, 8), l(g, u += 4, "acTL"), c(g, u += 4, e.frames.length), c(g, u += 4, null != i.loop ? i.loop : 0), c(g, u += 4, f(g, u - 12, 12)), u += 4), 3 == e.ctype) {
            c(g, u, 3 * (v = e.plte.length)), l(g, u += 4, "PLTE"), u += 4;
            for (p = 0; p < v; p++) {
                var w = 3 * p,
                    P = e.plte[p],
                    b = 255 & P,
                    _ = P >>> 8 & 255,
                    y = P >>> 16 & 255;
                g[u + w + 0] = b, g[u + w + 1] = _, g[u + w + 2] = y
            }
            if (c(g, u += 3 * v, f(g, u - 3 * v - 4, 3 * v + 4)), u += 4, h) {
                c(g, u, v), l(g, u += 4, "tRNS"), u += 4;
                for (p = 0; p < v; p++) g[u + p] = e.plte[p] >>> 24 & 255;
                c(g, u += v, f(g, u - v - 4, v + 4)), u += 4
            }
        }
        var I = 0;
        for (U = 0; U < e.frames.length; U++) {
            var F = e.frames[U];
            d && (c(g, u, 26), l(g, u += 4, "fcTL"), c(g, u += 4, I++), c(g, u += 4, F.rect.width), c(g, u += 4, F.rect.height), c(g, u += 4, F.rect.x), c(g, u += 4, F.rect.y), s(g, u += 4, a[U]), s(g, u += 2, 1e3), g[u += 2] = F.dispose, g[++u] = F.blend, c(g, ++u, f(g, u - 30, 30)), u += 4);
            var G = F.cimg;
            c(g, u, (v = G.length) + (0 == U ? 0 : 4));
            var C = u += 4;
            l(g, u, 0 == U ? "IDAT" : "fdAT"), u += 4, 0 != U && (c(g, u, I++), u += 4), g.set(G, u), c(g, u += v, f(g, C, u - C)), u += 4
        }
        return c(g, u, 0), l(g, u += 4, "IEND"), c(g, u += 4, f(g, u - 4, 4)), u += 4, g.buffer
    }, UPNG.encode.compressPNG = function(e, r, t) {
        for (var a = 0; a < e.frames.length; a++) {
            var i = e.frames[a],
                f = (i.rect.width, i.rect.height),
                c = new Uint8Array(f * i.bpl + f);
            i.cimg = UPNG.encode._filterZero(i.img, f, i.bpp, i.bpl, c, r, t)
        }
    }, UPNG.encode.compress = function(e, r, t, a, i) {
        for (var f = i[0], c = i[1], s = i[2], l = i[3], u = i[4], d = 6, h = 8, A = 255, v = 0; v < e.length; v++)
            for (var p = new Uint8Array(e[v]), U = p.length, g = 0; g < U; g += 4) A &= p[g + 3];
        var m = 255 != A,
            w = UPNG.encode.framize(e, r, t, f, c, s),
            P = {},
            b = [],
            _ = [];
        if (0 != a) {
            var y = [];
            for (g = 0; g < w.length; g++) y.push(w[g].img.buffer);
            var I = UPNG.encode.concatRGBA(y),
                F = UPNG.quantize(I, a),
                G = 0,
                C = new Uint8Array(F.abuf);
            for (g = 0; g < w.length; g++) {
                var E = (K = w[g].img).length;
                _.push(new Uint8Array(F.inds.buffer, G >> 2, E >> 2));
                for (v = 0; v < E; v += 4) K[v] = C[G + v], K[v + 1] = C[G + v + 1], K[v + 2] = C[G + v + 2], K[v + 3] = C[G + v + 3];
                G += E
            }
            for (g = 0; g < F.plte.length; g++) b.push(F.plte[g].est.rgba)
        } else
            for (v = 0; v < w.length; v++) {
                var B = w[v],
                    Z = new Uint32Array(B.img.buffer),
                    x = B.rect.width,
                    M = (U = Z.length, new Uint8Array(U));
                _.push(M);
                for (g = 0; g < U; g++) {
                    var R = Z[g];
                    if (0 != g && R == Z[g - 1]) M[g] = M[g - 1];
                    else if (g > x && R == Z[g - x]) M[g] = M[g - x];
                    else {
                        var Q = P[R];
                        if (null == Q && (P[R] = Q = b.length, b.push(R), b.length >= 300)) break;
                        M[g] = Q
                    }
                }
            }
        var T = b.length;
        T <= 256 && 0 == u && (h = T <= 2 ? 1 : T <= 4 ? 2 : T <= 16 ? 4 : 8, h = Math.max(h, l));
        for (v = 0; v < w.length; v++) {
            (B = w[v]).rect.x, B.rect.y, x = B.rect.width;
            var D = B.rect.height,
                O = B.img,
                V = (new Uint32Array(O.buffer), 4 * x),
                z = 4;
            if (T <= 256 && 0 == u) {
                V = Math.ceil(h * x / 8);
                for (var k = new Uint8Array(V * D), L = _[v], S = 0; S < D; S++) {
                    g = S * V;
                    var q = S * x;
                    if (8 == h)
                        for (var j = 0; j < x; j++) k[g + j] = L[q + j];
                    else if (4 == h)
                        for (j = 0; j < x; j++) k[g + (j >> 1)] |= L[q + j] << 4 - 4 * (1 & j);
                    else if (2 == h)
                        for (j = 0; j < x; j++) k[g + (j >> 2)] |= L[q + j] << 6 - 2 * (3 & j);
                    else if (1 == h)
                        for (j = 0; j < x; j++) k[g + (j >> 3)] |= L[q + j] << 7 - 1 * (7 & j)
                }
                O = k, d = 3, z = 1
            } else if (0 == m && 1 == w.length) {
                k = new Uint8Array(x * D * 3);
                var $ = x * D;
                for (g = 0; g < $; g++) {
                    var K, J = 4 * g;
                    k[K = 3 * g] = O[J], k[K + 1] = O[J + 1], k[K + 2] = O[J + 2]
                }
                O = k, d = 2, z = 3, V = 3 * x
            }
            B.img = O, B.bpl = V, B.bpp = z
        }
        return {
            ctype: d,
            depth: h,
            plte: b,
            frames: w
        }
    }, UPNG.encode.framize = function(e, r, t, a, i, f) {
        for (var c = [], s = 0; s < e.length; s++) {
            var l, u = new Uint8Array(e[s]),
                d = new Uint32Array(u.buffer),
                h = 0,
                A = 0,
                v = r,
                p = t,
                U = a ? 1 : 0;
            if (0 != s) {
                for (var g = f || a || 1 == s || 0 != c[s - 2].dispose ? 1 : 2, m = 0, w = 1e9, P = 0; P < g; P++) {
                    for (var b = new Uint8Array(e[s - 1 - P]), _ = new Uint32Array(e[s - 1 - P]), y = r, I = t, F = -1, G = -1, C = 0; C < t; C++)
                        for (var E = 0; E < r; E++) {
                            d[T = C * r + E] != _[T] && (E < y && (y = E), E > F && (F = E), C < I && (I = C), C > G && (G = C))
                        } - 1 == F && (y = I = F = G = 0), i && (1 == (1 & y) && y--, 1 == (1 & I) && I--);
                    var B = (F - y + 1) * (G - I + 1);
                    B < w && (w = B, m = P, h = y, A = I, v = F - y + 1, p = G - I + 1)
                }
                b = new Uint8Array(e[s - 1 - m]);
                1 == m && (c[s - 1].dispose = 2), l = new Uint8Array(v * p * 4), UPNG._copyTile(b, r, t, l, v, p, -h, -A, 0), 1 == (U = UPNG._copyTile(u, r, t, l, v, p, -h, -A, 3) ? 1 : 0) ? UPNG.encode._prepareDiff(u, r, t, l, {
                    x: h,
                    y: A,
                    width: v,
                    height: p
                }) : UPNG._copyTile(u, r, t, l, v, p, -h, -A, 0)
            } else l = u.slice(0);
            c.push({
                rect: {
                    x: h,
                    y: A,
                    width: v,
                    height: p
                },
                img: l,
                blend: U,
                dispose: 0
            })
        }
        if (a)
            for (s = 0; s < c.length; s++) {
                if (1 != (D = c[s]).blend) {
                    var Z = D.rect,
                        x = c[s - 1].rect,
                        M = Math.min(Z.x, x.x),
                        R = Math.min(Z.y, x.y),
                        Q = {
                            x: M,
                            y: R,
                            width: Math.max(Z.x + Z.width, x.x + x.width) - M,
                            height: Math.max(Z.y + Z.height, x.y + x.height) - R
                        };
                    c[s - 1].dispose = 1, s - 1 != 0 && UPNG.encode._updateFrame(e, r, t, c, s - 1, Q, i), UPNG.encode._updateFrame(e, r, t, c, s, Q, i)
                }
            }
        if (1 != e.length)
            for (var T = 0; T < c.length; T++) {
                var D;
                (D = c[T]).rect.width * D.rect.height
            }
        return c
    }, UPNG.encode._updateFrame = function(e, r, t, a, i, f, c) {
        for (var s = Uint8Array, l = Uint32Array, u = new s(e[i - 1]), d = new l(e[i - 1]), h = i + 1 < e.length ? new s(e[i + 1]) : null, A = new s(e[i]), v = new l(A.buffer), p = r, U = t, g = -1, m = -1, w = 0; w < f.height; w++)
            for (var P = 0; P < f.width; P++) {
                var b = f.x + P,
                    _ = f.y + w,
                    y = _ * r + b,
                    I = v[y];
                0 == I || 0 == a[i - 1].dispose && d[y] == I && (null == h || 0 != h[4 * y + 3]) || (b < p && (p = b), b > g && (g = b), _ < U && (U = _), _ > m && (m = _))
            } - 1 == g && (p = U = g = m = 0), c && (1 == (1 & p) && p--, 1 == (1 & U) && U--), f = {
                x: p,
                y: U,
                width: g - p + 1,
                height: m - U + 1
            };
        var F = a[i];
        F.rect = f, F.blend = 1, F.img = new Uint8Array(f.width * f.height * 4), 0 == a[i - 1].dispose ? (UPNG._copyTile(u, r, t, F.img, f.width, f.height, -f.x, -f.y, 0), UPNG.encode._prepareDiff(A, r, t, F.img, f)) : UPNG._copyTile(A, r, t, F.img, f.width, f.height, -f.x, -f.y, 0)
    }, UPNG.encode._prepareDiff = function(e, r, t, a, i) {
        UPNG._copyTile(e, r, t, a, i.width, i.height, -i.x, -i.y, 2)
    }, UPNG.encode._filterZero = function(e, r, t, a, i, f, c) {
        var s, l = [],
            u = [0, 1, 2, 3, 4]; - 1 != f ? u = [f] : (r * a > 5e5 || 1 == t) && (u = [0]), c && (s = {
            level: 0
        });
        for (var d = UZIP, h = 0; h < u.length; h++) {
            for (var A = 0; A < r; A++) UPNG.encode._filterLine(i, e, A, a, t, u[h]);
            l.push(d.deflate(i, s))
        }
        var v, p = 1e9;
        for (h = 0; h < l.length; h++) l[h].length < p && (v = h, p = l[h].length);
        return l[v]
    }, UPNG.encode._filterLine = function(e, r, t, a, i, f) {
        var c = t * a,
            s = c + t,
            l = UPNG.decode._paeth;
        if (e[s] = f, s++, 0 == f)
            if (a < 500)
                for (var u = 0; u < a; u++) e[s + u] = r[c + u];
            else e.set(new Uint8Array(r.buffer, c, a), s);
        else if (1 == f) {
            for (u = 0; u < i; u++) e[s + u] = r[c + u];
            for (u = i; u < a; u++) e[s + u] = r[c + u] - r[c + u - i] + 256 & 255
        } else if (0 == t) {
            for (u = 0; u < i; u++) e[s + u] = r[c + u];
            if (2 == f)
                for (u = i; u < a; u++) e[s + u] = r[c + u];
            if (3 == f)
                for (u = i; u < a; u++) e[s + u] = r[c + u] - (r[c + u - i] >> 1) + 256 & 255;
            if (4 == f)
                for (u = i; u < a; u++) e[s + u] = r[c + u] - l(r[c + u - i], 0, 0) + 256 & 255
        } else {
            if (2 == f)
                for (u = 0; u < a; u++) e[s + u] = r[c + u] + 256 - r[c + u - a] & 255;
            if (3 == f) {
                for (u = 0; u < i; u++) e[s + u] = r[c + u] + 256 - (r[c + u - a] >> 1) & 255;
                for (u = i; u < a; u++) e[s + u] = r[c + u] + 256 - (r[c + u - a] + r[c + u - i] >> 1) & 255
            }
            if (4 == f) {
                for (u = 0; u < i; u++) e[s + u] = r[c + u] + 256 - l(0, r[c + u - a], 0) & 255;
                for (u = i; u < a; u++) e[s + u] = r[c + u] + 256 - l(r[c + u - i], r[c + u - a], r[c + u - i - a]) & 255
            }
        }
    }, UPNG.crc = {
        table: function() {
            for (var e = new Uint32Array(256), r = 0; r < 256; r++) {
                for (var t = r, a = 0; a < 8; a++) 1 & t ? t = 3988292384 ^ t >>> 1 : t >>>= 1;
                e[r] = t
            }
            return e
        }(),
        update: function update(e, r, t, a) {
            for (var i = 0; i < a; i++) e = UPNG.crc.table[255 & (e ^ r[t + i])] ^ e >>> 8;
            return e
        },
        crc: function crc(e, r, t) {
            return 4294967295 ^ UPNG.crc.update(4294967295, e, r, t)
        }
    }, UPNG.quantize = function(e, r) {
        var t, a = new Uint8Array(e),
            i = a.slice(0),
            f = new Uint32Array(i.buffer),
            c = UPNG.quantize.getKDtree(i, r),
            s = c[0],
            l = c[1],
            u = UPNG.quantize.planeDst,
            d = a,
            h = f,
            A = d.length,
            v = new Uint8Array(a.length >> 2);
        if (a.length < 2e7)
            for (var p = 0; p < A; p += 4) {
                var U = d[p] * (1 / 255),
                    g = d[p + 1] * (1 / 255),
                    m = d[p + 2] * (1 / 255),
                    w = d[p + 3] * (1 / 255);
                t = UPNG.quantize.getNearest(s, U, g, m, w), v[p >> 2] = t.ind, h[p >> 2] = t.est.rgba
            } else
                for (p = 0; p < A; p += 4) {
                    U = d[p] * (1 / 255), g = d[p + 1] * (1 / 255), m = d[p + 2] * (1 / 255), w = d[p + 3] * (1 / 255);
                    for (t = s; t.left;) t = u(t.est, U, g, m, w) <= 0 ? t.left : t.right;
                    v[p >> 2] = t.ind, h[p >> 2] = t.est.rgba
                }
        return {
            abuf: i.buffer,
            inds: v,
            plte: l
        }
    }, UPNG.quantize.getKDtree = function(e, r, t) {
        null == t && (t = 1e-4);
        var a = new Uint32Array(e.buffer),
            i = {
                i0: 0,
                i1: e.length,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null
            };
        i.bst = UPNG.quantize.stats(e, i.i0, i.i1), i.est = UPNG.quantize.estats(i.bst);
        for (var f = [i]; f.length < r;) {
            for (var c = 0, s = 0, l = 0; l < f.length; l++) f[l].est.L > c && (c = f[l].est.L, s = l);
            if (c < t) break;
            var u = f[s],
                d = UPNG.quantize.splitPixels(e, a, u.i0, u.i1, u.est.e, u.est.eMq255);
            if (u.i0 >= d || u.i1 <= d) u.est.L = 0;
            else {
                var h = {
                    i0: u.i0,
                    i1: d,
                    bst: null,
                    est: null,
                    tdst: 0,
                    left: null,
                    right: null
                };
                h.bst = UPNG.quantize.stats(e, h.i0, h.i1), h.est = UPNG.quantize.estats(h.bst);
                var A = {
                    i0: d,
                    i1: u.i1,
                    bst: null,
                    est: null,
                    tdst: 0,
                    left: null,
                    right: null
                };
                A.bst = {
                    R: [],
                    m: [],
                    N: u.bst.N - h.bst.N
                };
                for (l = 0; l < 16; l++) A.bst.R[l] = u.bst.R[l] - h.bst.R[l];
                for (l = 0; l < 4; l++) A.bst.m[l] = u.bst.m[l] - h.bst.m[l];
                A.est = UPNG.quantize.estats(A.bst), u.left = h, u.right = A, f[s] = h, f.push(A)
            }
        }
        f.sort((function(e, r) {
            return r.bst.N - e.bst.N
        }));
        for (l = 0; l < f.length; l++) f[l].ind = l;
        return [i, f]
    }, UPNG.quantize.getNearest = function(e, r, t, a, i) {
        if (null == e.left) return e.tdst = UPNG.quantize.dist(e.est.q, r, t, a, i), e;
        var f = UPNG.quantize.planeDst(e.est, r, t, a, i),
            c = e.left,
            s = e.right;
        f > 0 && (c = e.right, s = e.left);
        var l = UPNG.quantize.getNearest(c, r, t, a, i);
        if (l.tdst <= f * f) return l;
        var u = UPNG.quantize.getNearest(s, r, t, a, i);
        return u.tdst < l.tdst ? u : l
    }, UPNG.quantize.planeDst = function(e, r, t, a, i) {
        var f = e.e;
        return f[0] * r + f[1] * t + f[2] * a + f[3] * i - e.eMq
    }, UPNG.quantize.dist = function(e, r, t, a, i) {
        var f = r - e[0],
            c = t - e[1],
            s = a - e[2],
            l = i - e[3];
        return f * f + c * c + s * s + l * l
    }, UPNG.quantize.splitPixels = function(e, r, t, a, i, f) {
        var c = UPNG.quantize.vecDot;
        for (a -= 4; t < a;) {
            for (; c(e, t, i) <= f;) t += 4;
            for (; c(e, a, i) > f;) a -= 4;
            if (t >= a) break;
            var s = r[t >> 2];
            r[t >> 2] = r[a >> 2], r[a >> 2] = s, t += 4, a -= 4
        }
        for (; c(e, t, i) > f;) t -= 4;
        return t + 4
    }, UPNG.quantize.vecDot = function(e, r, t) {
        return e[r] * t[0] + e[r + 1] * t[1] + e[r + 2] * t[2] + e[r + 3] * t[3]
    }, UPNG.quantize.stats = function(e, r, t) {
        for (var a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = [0, 0, 0, 0], f = t - r >> 2, c = r; c < t; c += 4) {
            var s = e[c] * (1 / 255),
                l = e[c + 1] * (1 / 255),
                u = e[c + 2] * (1 / 255),
                d = e[c + 3] * (1 / 255);
            i[0] += s, i[1] += l, i[2] += u, i[3] += d, a[0] += s * s, a[1] += s * l, a[2] += s * u, a[3] += s * d, a[5] += l * l, a[6] += l * u, a[7] += l * d, a[10] += u * u, a[11] += u * d, a[15] += d * d
        }
        return a[4] = a[1], a[8] = a[2], a[9] = a[6], a[12] = a[3], a[13] = a[7], a[14] = a[11], {
            R: a,
            m: i,
            N: f
        }
    }, UPNG.quantize.estats = function(e) {
        var r = e.R,
            t = e.m,
            a = e.N,
            i = t[0],
            f = t[1],
            c = t[2],
            s = t[3],
            l = 0 == a ? 0 : 1 / a,
            u = [r[0] - i * i * l, r[1] - i * f * l, r[2] - i * c * l, r[3] - i * s * l, r[4] - f * i * l, r[5] - f * f * l, r[6] - f * c * l, r[7] - f * s * l, r[8] - c * i * l, r[9] - c * f * l, r[10] - c * c * l, r[11] - c * s * l, r[12] - s * i * l, r[13] - s * f * l, r[14] - s * c * l, r[15] - s * s * l],
            d = u,
            h = UPNG.M4,
            A = [Math.random(), Math.random(), Math.random(), Math.random()],
            v = 0,
            p = 0;
        if (0 != a)
            for (var U = 0; U < 16 && (A = h.multVec(d, A), p = Math.sqrt(h.dot(A, A)), A = h.sml(1 / p, A), !(0 != U && Math.abs(p - v) < 1e-9)); U++) v = p;
        var g = [i * l, f * l, c * l, s * l];
        return {
            Cov: u,
            q: g,
            e: A,
            L: v,
            eMq255: h.dot(h.sml(255, g), A),
            eMq: h.dot(A, g),
            rgba: (Math.round(255 * g[3]) << 24 | Math.round(255 * g[2]) << 16 | Math.round(255 * g[1]) << 8 | Math.round(255 * g[0]) << 0) >>> 0
        }
    }, UPNG.M4 = {
        multVec: function multVec(e, r) {
            return [e[0] * r[0] + e[1] * r[1] + e[2] * r[2] + e[3] * r[3], e[4] * r[0] + e[5] * r[1] + e[6] * r[2] + e[7] * r[3], e[8] * r[0] + e[9] * r[1] + e[10] * r[2] + e[11] * r[3], e[12] * r[0] + e[13] * r[1] + e[14] * r[2] + e[15] * r[3]]
        },
        dot: function dot(e, r) {
            return e[0] * r[0] + e[1] * r[1] + e[2] * r[2] + e[3] * r[3]
        },
        sml: function sml(e, r) {
            return [e * r[0], e * r[1], e * r[2], e * r[3]]
        }
    }, UPNG.encode.concatRGBA = function(e) {
        for (var r = 0, t = 0; t < e.length; t++) r += e[t].byteLength;
        var a = new Uint8Array(r),
            i = 0;
        for (t = 0; t < e.length; t++) {
            for (var f = new Uint8Array(e[t]), c = f.length, s = 0; s < c; s += 4) {
                var l = f[s],
                    u = f[s + 1],
                    d = f[s + 2],
                    h = f[s + 3];
                0 == h && (l = u = d = 0), a[i + s] = l, a[i + s + 1] = u, a[i + s + 2] = d, a[i + s + 3] = h
            }
            i += c
        }
        return a.buffer
    };
    var isBrowser = "undefined" != typeof window,
        moduleMapper = isBrowser && window.cordova && window.cordova.require && window.cordova.require("cordova/modulemapper"),
        CustomFile = isBrowser && (moduleMapper && moduleMapper.getOriginalSymbol(window, "File") || File),
        CustomFileReader = isBrowser && (moduleMapper && moduleMapper.getOriginalSymbol(window, "FileReader") || FileReader);

    function isAutoOrientationInBrowser() {
        return new Promise((function(e, r) {
            var t, a, i, f;
            return void 0 !== isAutoOrientationInBrowser.result ? e(isAutoOrientationInBrowser.result) : ("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==", getFilefromDataUrl("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==", "test.jpg", Date.now()).then((function(c) {
                try {
                    return drawFileInCanvas(t = c).then((function(c) {
                        try {
                            return canvasToFile(a = c[1], t.type, t.name, t.lastModified).then((function(t) {
                                try {
                                    return i = t, cleanupCanvasMemory(a), drawFileInCanvas(i).then((function(t) {
                                        try {
                                            return f = t[0], isAutoOrientationInBrowser.result = 1 === f.width && 2 === f.height, e(isAutoOrientationInBrowser.result)
                                        } catch (e) {
                                            return r(e)
                                        }
                                    }), r)
                                } catch (e) {
                                    return r(e)
                                }
                            }), r)
                        } catch (e) {
                            return r(e)
                        }
                    }), r)
                } catch (e) {
                    return r(e)
                }
            }), r))
        }))
    }

    function getDataUrlFromFile(e) {
        return new Promise((function(r, t) {
            var a = new CustomFileReader;
            a.onload = function() {
                return r(a.result)
            }, a.onerror = function(e) {
                return t(e)
            }, a.readAsDataURL(e)
        }))
    }

    function getFilefromDataUrl(e, r) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        return new Promise((function(a) {
            for (var i = e.split(","), f = i[0].match(/:(.*?);/)[1], c = globalThis.atob(i[1]), s = c.length, l = new Uint8Array(s); s--;) l[s] = c.charCodeAt(s);
            var u = new Blob([l], {
                type: f
            });
            u.name = r, u.lastModified = t, a(u)
        }))
    }

    function loadImage(e) {
        return new Promise((function(r, t) {
            var a = new Image;
            a.onload = function() {
                return r(a)
            }, a.onerror = function(e) {
                return t(e)
            }, a.src = e
        }))
    }

    function drawImageInCanvas(e) {
        var r = _slicedToArray(getNewCanvasAndCtx(e.width, e.height), 2),
            t = r[0];
        return r[1].drawImage(e, 0, 0, t.width, t.height), t
    }

    function drawFileInCanvas(e) {
        return new Promise((function(r, t) {
            var a, i, f = function $Try_1_Post() {
                    try {
                        return i = drawImageInCanvas(a), r([a, i])
                    } catch (e) {
                        return t(e)
                    }
                },
                c = function $Try_1_Catch(r) {
                    try {
                        return getDataUrlFromFile(e).then((function(e) {
                            try {
                                return loadImage(e).then((function(e) {
                                    try {
                                        return a = e, f()
                                    } catch (e) {
                                        return t(e)
                                    }
                                }), t)
                            } catch (e) {
                                return t(e)
                            }
                        }), t)
                    } catch (e) {
                        return t(e)
                    }
                };
            try {
                return createImageBitmap(e).then((function(e) {
                    try {
                        return a = e, f()
                    } catch (e) {
                        return c()
                    }
                }), c)
            } catch (e) {
                c()
            }
        }))
    }

    function canvasToFile(e, r, t, a) {
        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
        return new Promise((function(f, c) {
            var s, l, u;
            if ("image/png" === r) return l = e.getContext("2d").getImageData(0, 0, e.width, e.height).data, u = UPNG.encode([l], e.width, e.height, 256 * i), (s = new Blob([u], {
                type: r
            })).name = t, s.lastModified = a, $If_4.call(this); {
                return "function" == typeof OffscreenCanvas && e instanceof OffscreenCanvas ? e.convertToBlob({
                    type: r,
                    quality: i
                }).then(function(e) {
                    try {
                        return (s = e).name = t, s.lastModified = a, $If_5.call(this)
                    } catch (e) {
                        return c(e)
                    }
                }.bind(this), c) : getFilefromDataUrl(e.toDataURL(r, i), t, a).then(function(e) {
                    try {
                        return s = e, $If_5.call(this)
                    } catch (e) {
                        return c(e)
                    }
                }.bind(this), c);

                function $If_5() {
                    return $If_4.call(this)
                }
            }

            function $If_4() {
                return f(s)
            }
        }))
    }

    function getExifOrientation(e) {
        return new Promise((function(r, t) {
            var a = new CustomFileReader;
            a.onload = function(e) {
                var t = new DataView(e.target.result);
                if (65496 != t.getUint16(0, !1)) return r(-2);
                for (var a = t.byteLength, i = 2; i < a;) {
                    if (t.getUint16(i + 2, !1) <= 8) return r(-1);
                    var f = t.getUint16(i, !1);
                    if (i += 2, 65505 == f) {
                        if (1165519206 != t.getUint32(i += 2, !1)) return r(-1);
                        var c = 18761 == t.getUint16(i += 6, !1);
                        i += t.getUint32(i + 4, c);
                        var s = t.getUint16(i, c);
                        i += 2;
                        for (var l = 0; l < s; l++)
                            if (274 == t.getUint16(i + 12 * l, c)) return r(t.getUint16(i + 12 * l + 8, c))
                    } else {
                        if (65280 != (65280 & f)) break;
                        i += t.getUint16(i, !1)
                    }
                }
                return r(-1)
            }, a.onerror = function(e) {
                return t(e)
            }, a.readAsArrayBuffer(e)
        }))
    }

    function handleMaxWidthOrHeight(e, r) {
        var t, a = e.width,
            i = e.height,
            f = r.maxWidthOrHeight,
            c = e;
        if (isFinite(f) && (a > f || i > f)) {
            var s = _slicedToArray(getNewCanvasAndCtx(a, i), 2);
            c = s[0], t = s[1], a > i ? (c.width = f, c.height = i / a * f) : (c.width = a / i * f, c.height = f), t.drawImage(e, 0, 0, c.width, c.height), cleanupCanvasMemory(e)
        }
        return c
    }

    function followExifOrientation(e, r) {
        var t = e.width,
            a = e.height,
            i = _slicedToArray(getNewCanvasAndCtx(t, a), 2),
            f = i[0],
            c = i[1];
        switch (4 < r && r < 9 ? (f.width = a, f.height = t) : (f.width = t, f.height = a), r) {
            case 2:
                c.transform(-1, 0, 0, 1, t, 0);
                break;
            case 3:
                c.transform(-1, 0, 0, -1, t, a);
                break;
            case 4:
                c.transform(1, 0, 0, -1, 0, a);
                break;
            case 5:
                c.transform(0, 1, 1, 0, 0, 0);
                break;
            case 6:
                c.transform(0, 1, -1, 0, a, 0);
                break;
            case 7:
                c.transform(0, -1, -1, 0, a, t);
                break;
            case 8:
                c.transform(0, -1, 1, 0, 0, t)
        }
        return c.drawImage(e, 0, 0, t, a), cleanupCanvasMemory(e), f
    }

    function getNewCanvasAndCtx(e, r) {
        var t, a;
        try {
            if (null === (a = (t = new OffscreenCanvas(e, r)).getContext("2d"))) throw new Error("getContext of OffscreenCanvas returns null")
        } catch (e) {
            a = (t = document.createElement("canvas")).getContext("2d")
        }
        return t.width = e, t.height = r, [t, a]
    }

    function cleanupCanvasMemory(e) {
        e.width = 0, e.height = 0
    }

    function compress(e, r) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return new Promise((function(a, i) {
            var f, c, s, l, u, d, h, A, v, p, U, g, m, w, P, b, _, y;

            function incProgress() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5;
                f += e, r.onProgress(Math.min(f, 100))
            }

            function setProgress(e) {
                f = Math.min(Math.max(e, f), 100), r.onProgress(f)
            }
            return f = t, c = r.maxIteration || 10, s = 1024 * r.maxSizeMB * 1024, incProgress(), drawFileInCanvas(e).then(function(t) {
                try {
                    var f = _slicedToArray(t, 2);
                    return f[0], l = f[1], incProgress(), u = handleMaxWidthOrHeight(l, r), incProgress(), new Promise((function(t, a) {
                        var i;
                        if (!(i = r.exifOrientation)) return getExifOrientation(e).then(function(e) {
                            try {
                                return i = e, $If_2.call(this)
                            } catch (e) {
                                return a(e)
                            }
                        }.bind(this), a);

                        function $If_2() {
                            return t(i)
                        }
                        return $If_2.call(this)
                    })).then(function(t) {
                        try {
                            return d = t, incProgress(), isAutoOrientationInBrowser().then(function(t) {
                                try {
                                    return h = t ? u : followExifOrientation(u, d), incProgress(), A = r.initialQuality || 1, v = r.fileType || e.type, canvasToFile(h, v, e.name, e.lastModified, A).then(function(r) {
                                        try {
                                            {
                                                if (p = r, incProgress(), U = p.size > s, g = p.size > e.size, !U && !g) return setProgress(100), a(p);
                                                var t;

                                                function $Loop_3() {
                                                    if (c-- && (P > s || P > m)) {
                                                        var r, t, a = _slicedToArray(getNewCanvasAndCtx(r = U ? .95 * y.width : y.width, t = U ? .95 * y.height : y.height), 2);
                                                        return _ = a[0], a[1].drawImage(y, 0, 0, r, t), A *= .95, canvasToFile(_, v, e.name, e.lastModified, A).then((function(e) {
                                                            try {
                                                                return b = e, cleanupCanvasMemory(y), y = _, P = b.size, setProgress(Math.min(99, Math.floor((w - P) / (w - s) * 100))), $Loop_3
                                                            } catch (e) {
                                                                return i(e)
                                                            }
                                                        }), i)
                                                    }
                                                    return [1]
                                                }
                                                return m = e.size, w = p.size, P = w, y = h, (t = function(e) {
                                                    for (; e;) {
                                                        if (e.then) return void e.then(t, i);
                                                        try {
                                                            if (e.pop) {
                                                                if (e.length) return e.pop() ? $Loop_3_exit.call(this) : e;
                                                                e = $Loop_3
                                                            } else e = e.call(this)
                                                        } catch (e) {
                                                            return i(e)
                                                        }
                                                    }
                                                }.bind(this))($Loop_3);

                                                function $Loop_3_exit() {
                                                    return cleanupCanvasMemory(y), cleanupCanvasMemory(_), cleanupCanvasMemory(u), cleanupCanvasMemory(h), cleanupCanvasMemory(l), setProgress(100), a(b)
                                                }
                                            }
                                        } catch (e) {
                                            return i(e)
                                        }
                                    }.bind(this), i)
                                } catch (e) {
                                    return i(e)
                                }
                            }.bind(this), i)
                        } catch (e) {
                            return i(e)
                        }
                    }.bind(this), i)
                } catch (e) {
                    return i(e)
                }
            }.bind(this), i)
        }))
    }
    isBrowser && (Number.isInteger = Number.isInteger || function(e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e
    });
    var cnt = 0,
        imageCompressionLibUrl, worker;

    function createWorker(e) {
        return "function" == typeof e && (e = "(".concat(f, ")()")), new Worker(URL.createObjectURL(new Blob([e])))
    }

    function createSourceObject(e) {
        return URL.createObjectURL(new Blob([e], {
            type: "application/javascript"
        }))
    }

    function stringify(e) {
        return JSON.stringify(e, (function(e, r) {
            return "function" == typeof r ? "BIC_FN:::(() => ".concat(r.toString(), ")()") : r
        }))
    }

    function parse(o) {
        if ("string" == typeof o) return o;
        var result = {};
        return Object.entries(o).forEach((function(_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];
            if ("string" == typeof value && value.startsWith("BIC_FN:::")) try {
                result[key] = eval(value.replace(/^BIC_FN:::/, ""))
            } catch (e) {
                throw console.log(key, e), e
            } else result[key] = parse(value)
        })), result
    }

    function generateLib() {
        return createSourceObject("\n    // reconstruct library\n    function imageCompression (){return (".concat(imageCompression, ").apply(null, arguments)}\n\n    imageCompression.getDataUrlFromFile = ").concat(imageCompression.getDataUrlFromFile, "\n    imageCompression.getFilefromDataUrl = ").concat(imageCompression.getFilefromDataUrl, "\n    imageCompression.loadImage = ").concat(imageCompression.loadImage, "\n    imageCompression.drawImageInCanvas = ").concat(imageCompression.drawImageInCanvas, "\n    imageCompression.drawFileInCanvas = ").concat(imageCompression.drawFileInCanvas, "\n    imageCompression.canvasToFile = ").concat(imageCompression.canvasToFile, "\n    imageCompression.getExifOrientation = ").concat(imageCompression.getExifOrientation, "\n    imageCompression.handleMaxWidthOrHeight = ").concat(imageCompression.handleMaxWidthOrHeight, "\n    imageCompression.followExifOrientation = ").concat(imageCompression.followExifOrientation, "\n    imageCompression.cleanupCanvasMemory = ").concat(imageCompression.cleanupCanvasMemory, "\n    imageCompression.isAutoOrientationInBrowser = ").concat(imageCompression.isAutoOrientationInBrowser, "\n\n    // functions / objects\n    getDataUrlFromFile = imageCompression.getDataUrlFromFile\n    getFilefromDataUrl = imageCompression.getFilefromDataUrl\n    loadImage = imageCompression.loadImage\n    drawImageInCanvas = imageCompression.drawImageInCanvas\n    drawFileInCanvas = imageCompression.drawFileInCanvas\n    canvasToFile = imageCompression.canvasToFile\n    getExifOrientation = imageCompression.getExifOrientation\n    handleMaxWidthOrHeight = imageCompression.handleMaxWidthOrHeight\n    followExifOrientation = imageCompression.followExifOrientation\n    cleanupCanvasMemory = imageCompression.cleanupCanvasMemory\n    isAutoOrientationInBrowser = imageCompression.isAutoOrientationInBrowser\n    \n    getNewCanvasAndCtx = ").concat(getNewCanvasAndCtx, "\n    CustomFileReader = FileReader\n    CustomFile = File\n    function _slicedToArray(arr, n) { return arr }\n    function _typeof(a) { return typeof a }\n    function compress (){return (").concat(compress, ").apply(null, arguments)}\n\n    // Libraries\n    const parse = ").concat(parse, "\n    const UPNG = {}\n    UPNG.toRGBA8 = ").concat(UPNG.toRGBA8, "\n    UPNG.toRGBA8.decodeImage = ").concat(UPNG.toRGBA8.decodeImage, "\n    UPNG.decode = ").concat(UPNG.decode, "\n    UPNG.decode._decompress = ").concat(UPNG.decode._decompress, "\n    UPNG.decode._inflate = ").concat(UPNG.decode._inflate, "\n    UPNG.decode._readInterlace = ").concat(UPNG.decode._readInterlace, "\n    UPNG.decode._getBPP = ").concat(UPNG.decode._getBPP, " \n    UPNG.decode._filterZero = ").concat(UPNG.decode._filterZero, "\n    UPNG.decode._paeth = ").concat(UPNG.decode._paeth, "\n    UPNG.decode._IHDR = ").concat(UPNG.decode._IHDR, "\n    UPNG._bin = parse(").concat(stringify(UPNG._bin), ")\n    UPNG._copyTile = ").concat(UPNG._copyTile, "\n    UPNG.encode = ").concat(UPNG.encode, "\n    UPNG.encodeLL = ").concat(UPNG.encodeLL, " \n    UPNG.encode._main = ").concat(UPNG.encode._main, "\n    UPNG.encode.compressPNG = ").concat(UPNG.encode.compressPNG, " \n    UPNG.encode.compress = ").concat(UPNG.encode.compress, "\n    UPNG.encode.framize = ").concat(UPNG.encode.framize, " \n    UPNG.encode._updateFrame = ").concat(UPNG.encode._updateFrame, " \n    UPNG.encode._prepareDiff = ").concat(UPNG.encode._prepareDiff, " \n    UPNG.encode._filterZero = ").concat(UPNG.encode._filterZero, " \n    UPNG.encode._filterLine = ").concat(UPNG.encode._filterLine, "\n    UPNG.encode.concatRGBA = ").concat(UPNG.encode.concatRGBA, "\n    UPNG.crc = parse(").concat(stringify(UPNG.crc), ")\n    UPNG.crc.table = ( function() {\n    var tab = new Uint32Array(256);\n    for (var n=0; n<256; n++) {\n      var c = n;\n      for (var k=0; k<8; k++) {\n        if (c & 1)  c = 0xedb88320 ^ (c >>> 1);\n        else        c = c >>> 1;\n      }\n      tab[n] = c;  }\n    return tab;  })()\n    UPNG.quantize = ").concat(UPNG.quantize, " \n    UPNG.quantize.getKDtree = ").concat(UPNG.quantize.getKDtree, " \n    UPNG.quantize.getNearest = ").concat(UPNG.quantize.getNearest, " \n    UPNG.quantize.planeDst = ").concat(UPNG.quantize.planeDst, " \n    UPNG.quantize.dist = ").concat(UPNG.quantize.dist, "     \n    UPNG.quantize.splitPixels = ").concat(UPNG.quantize.splitPixels, " \n    UPNG.quantize.vecDot = ").concat(UPNG.quantize.vecDot, " \n    UPNG.quantize.stats = ").concat(UPNG.quantize.stats, " \n    UPNG.quantize.estats = ").concat(UPNG.quantize.estats, "\n    UPNG.M4 = parse(").concat(stringify(UPNG.M4), ")\n    UPNG.encode.concatRGBA = ").concat(UPNG.encode.concatRGBA, '\n    UPNG.inflateRaw=function(){\n    var H={};H.H={};H.H.N=function(N,W){var R=Uint8Array,i=0,m=0,J=0,h=0,Q=0,X=0,u=0,w=0,d=0,v,C;\n      if(N[0]==3&&N[1]==0)return W?W:new R(0);var V=H.H,n=V.b,A=V.e,l=V.R,M=V.n,I=V.A,e=V.Z,b=V.m,Z=W==null;\n      if(Z)W=new R(N.length>>>2<<5);while(i==0){i=n(N,d,1);m=n(N,d+1,2);d+=3;if(m==0){if((d&7)!=0)d+=8-(d&7);\n        var D=(d>>>3)+4,q=N[D-4]|N[D-3]<<8;if(Z)W=H.H.W(W,w+q);W.set(new R(N.buffer,N.byteOffset+D,q),w);d=D+q<<3;\n        w+=q;continue}if(Z)W=H.H.W(W,w+(1<<17));if(m==1){v=b.J;C=b.h;X=(1<<9)-1;u=(1<<5)-1}if(m==2){J=A(N,d,5)+257;\n        h=A(N,d+5,5)+1;Q=A(N,d+10,4)+4;d+=14;var E=d,j=1;for(var c=0;c<38;c+=2){b.Q[c]=0;b.Q[c+1]=0}for(var c=0;\n                                                                                                        c<Q;c++){var K=A(N,d+c*3,3);b.Q[(b.X[c]<<1)+1]=K;if(K>j)j=K}d+=3*Q;M(b.Q,j);I(b.Q,j,b.u);v=b.w;C=b.d;\n        d=l(b.u,(1<<j)-1,J+h,N,d,b.v);var r=V.V(b.v,0,J,b.C);X=(1<<r)-1;var S=V.V(b.v,J,h,b.D);u=(1<<S)-1;M(b.C,r);\n        I(b.C,r,v);M(b.D,S);I(b.D,S,C)}while(!0){var T=v[e(N,d)&X];d+=T&15;var p=T>>>4;if(p>>>8==0){W[w++]=p}else if(p==256){break}else{var z=w+p-254;\n        if(p>264){var _=b.q[p-257];z=w+(_>>>3)+A(N,d,_&7);d+=_&7}var $=C[e(N,d)&u];d+=$&15;var s=$>>>4,Y=b.c[s],a=(Y>>>4)+n(N,d,Y&15);\n        d+=Y&15;while(w<z){W[w]=W[w++-a];W[w]=W[w++-a];W[w]=W[w++-a];W[w]=W[w++-a]}w=z}}}return W.length==w?W:W.slice(0,w)};\n      H.H.W=function(N,W){var R=N.length;if(W<=R)return N;var V=new Uint8Array(R<<1);V.set(N,0);return V};\n      H.H.R=function(N,W,R,V,n,A){var l=H.H.e,M=H.H.Z,I=0;while(I<R){var e=N[M(V,n)&W];n+=e&15;var b=e>>>4;\n        if(b<=15){A[I]=b;I++}else{var Z=0,m=0;if(b==16){m=3+l(V,n,2);n+=2;Z=A[I-1]}else if(b==17){m=3+l(V,n,3);\n          n+=3}else if(b==18){m=11+l(V,n,7);n+=7}var J=I+m;while(I<J){A[I]=Z;I++}}}return n};H.H.V=function(N,W,R,V){var n=0,A=0,l=V.length>>>1;\n        while(A<R){var M=N[A+W];V[A<<1]=0;V[(A<<1)+1]=M;if(M>n)n=M;A++}while(A<l){V[A<<1]=0;V[(A<<1)+1]=0;A++}return n};\n      H.H.n=function(N,W){var R=H.H.m,V=N.length,n,A,l,M,I,e=R.j;for(var M=0;M<=W;M++)e[M]=0;for(M=1;M<V;M+=2)e[N[M]]++;\n        var b=R.K;n=0;e[0]=0;for(A=1;A<=W;A++){n=n+e[A-1]<<1;b[A]=n}for(l=0;l<V;l+=2){I=N[l+1];if(I!=0){N[l]=b[I];\n          b[I]++}}};H.H.A=function(N,W,R){var V=N.length,n=H.H.m,A=n.r;for(var l=0;l<V;l+=2)if(N[l+1]!=0){var M=l>>1,I=N[l+1],e=M<<4|I,b=W-I,Z=N[l]<<b,m=Z+(1<<b);\n        while(Z!=m){var J=A[Z]>>>15-W;R[J]=e;Z++}}};H.H.l=function(N,W){var R=H.H.m.r,V=15-W;for(var n=0;n<N.length;\n                                                                                                 n+=2){var A=N[n]<<W-N[n+1];N[n]=R[A]>>>V}};H.H.M=function(N,W,R){R=R<<(W&7);var V=W>>>3;N[V]|=R;N[V+1]|=R>>>8};\n      H.H.I=function(N,W,R){R=R<<(W&7);var V=W>>>3;N[V]|=R;N[V+1]|=R>>>8;N[V+2]|=R>>>16};H.H.e=function(N,W,R){return(N[W>>>3]|N[(W>>>3)+1]<<8)>>>(W&7)&(1<<R)-1};\n      H.H.b=function(N,W,R){return(N[W>>>3]|N[(W>>>3)+1]<<8|N[(W>>>3)+2]<<16)>>>(W&7)&(1<<R)-1};H.H.Z=function(N,W){return(N[W>>>3]|N[(W>>>3)+1]<<8|N[(W>>>3)+2]<<16)>>>(W&7)};\n      H.H.i=function(N,W){return(N[W>>>3]|N[(W>>>3)+1]<<8|N[(W>>>3)+2]<<16|N[(W>>>3)+3]<<24)>>>(W&7)};H.H.m=function(){var N=Uint16Array,W=Uint32Array;\n        return{K:new N(16),j:new N(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new N(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new W(32),J:new N(512),_:[],h:new N(32),$:[],w:new N(32768),C:[],v:[],d:new N(32768),D:[],u:new N(512),Q:[],r:new N(1<<15),s:new W(286),Y:new W(30),a:new W(19),t:new W(15e3),k:new N(1<<16),g:new N(1<<15)}}();\n      (function(){var N=H.H.m,W=1<<15;for(var R=0;R<W;R++){var V=R;V=(V&2863311530)>>>1|(V&1431655765)<<1;\n        V=(V&3435973836)>>>2|(V&858993459)<<2;V=(V&4042322160)>>>4|(V&252645135)<<4;V=(V&4278255360)>>>8|(V&16711935)<<8;\n        N.r[R]=(V>>>16|V<<16)>>>17}function n(A,l,M){while(l--!=0)A.push(0,M)}for(var R=0;R<32;R++){N.q[R]=N.S[R]<<3|N.T[R];\n        N.c[R]=N.p[R]<<4|N.z[R]}n(N._,144,8);n(N._,255-143,9);n(N._,279-255,7);n(N._,287-279,8);H.H.n(N._,9);\n        H.H.A(N._,9,N.J);H.H.l(N._,9);n(N.$,32,5);H.H.n(N.$,5);H.H.A(N.$,5,N.h);H.H.l(N.$,5);n(N.Q,19,0);n(N.C,286,0);\n        n(N.D,30,0);n(N.v,320,0)}());return H.H.N}()\n    \n    const UZIP = {}\n    UZIP["parse"] = ').concat(UZIP_1.parse, "\n    UZIP._readLocal = ").concat(UZIP_1._readLocal, "\n    UZIP.inflateRaw = ").concat(UZIP_1.inflateRaw, "\n    UZIP.inflate = ").concat(UZIP_1.inflate, "\n    UZIP.deflate = ").concat(UZIP_1.deflate, "\n    UZIP.deflateRaw = ").concat(UZIP_1.deflateRaw, "\n    UZIP.encode = ").concat(UZIP_1.encode, "\n    UZIP._noNeed = ").concat(UZIP_1._noNeed, "\n    UZIP._writeHeader = ").concat(UZIP_1._writeHeader, "\n    UZIP.crc = parse(").concat(stringify(UZIP_1.crc), ")\n    UZIP.crc.table = ( function() {\n      var tab = new Uint32Array(256);\n      for (var n=0; n<256; n++) {\n        var c = n;\n        for (var k=0; k<8; k++) {\n          if (c & 1)  c = 0xedb88320 ^ (c >>> 1);\n          else        c = c >>> 1;\n        }\n        tab[n] = c;  }\n      return tab;  })()\n    \n    UZIP.adler = ").concat(UZIP_1.adler, "\n    UZIP.bin = parse(").concat(stringify(UZIP_1.bin), ")\n    UZIP.F = {}\n    UZIP.F.deflateRaw = ").concat(UZIP_1.F.deflateRaw, "\n    UZIP.F._bestMatch = ").concat(UZIP_1.F._bestMatch, "\n    UZIP.F._howLong = ").concat(UZIP_1.F._howLong, "\n    UZIP.F._hash = ").concat(UZIP_1.F._hash, "\n    UZIP.saved = ").concat(UZIP_1.saved, "\n    UZIP.F._writeBlock = ").concat(UZIP_1.F._writeBlock, "\n    UZIP.F._copyExact = ").concat(UZIP_1.F._copyExact, "\n    UZIP.F.getTrees = ").concat(UZIP_1.F.getTrees, "\n    UZIP.F.getSecond = ").concat(UZIP_1.F.getSecond, "\n    UZIP.F.nonZero = ").concat(UZIP_1.F.nonZero, "\n    UZIP.F.contSize = ").concat(UZIP_1.F.contSize, "\n    UZIP.F._codeTiny = ").concat(UZIP_1.F._codeTiny, " \n    UZIP.F._lenCodes = ").concat(UZIP_1.F._lenCodes, " \n    UZIP.F._hufTree = ").concat(UZIP_1.F._hufTree, " \n    UZIP.F.setDepth = ").concat(UZIP_1.F.setDepth, " \n    UZIP.F.restrictDepth = ").concat(UZIP_1.F.restrictDepth, "\n    UZIP.F._goodIndex = ").concat(UZIP_1.F._goodIndex, " \n    UZIP.F._writeLit = ").concat(UZIP_1.F._writeLit, " \n    UZIP.F.inflate = ").concat(UZIP_1.F.inflate, " \n    UZIP.F._check = ").concat(UZIP_1.F._check, " \n    UZIP.F._decodeTiny = ").concat(UZIP_1.F._decodeTiny, " \n    UZIP.F._copyOut = ").concat(UZIP_1.F._copyOut, " \n    UZIP.F.makeCodes = ").concat(UZIP_1.F.makeCodes, " \n    UZIP.F.codes2map = ").concat(UZIP_1.F.codes2map, " \n    UZIP.F.revCodes = ").concat(UZIP_1.F.revCodes, " \n\n    // used only in deflate\n    UZIP.F._putsE = ").concat(UZIP_1.F._putsE, "\n    UZIP.F._putsF = ").concat(UZIP_1.F._putsF, "\n  \n    UZIP.F._bitsE = ").concat(UZIP_1.F._bitsE, "\n    UZIP.F._bitsF = ").concat(UZIP_1.F._bitsF, "\n\n    UZIP.F._get17 = ").concat(UZIP_1.F._get17, "\n    UZIP.F._get25 = ").concat(UZIP_1.F._get25, "\n    UZIP.F.U = function(){\n      var u16=Uint16Array, u32=Uint32Array;\n      return {\n        next_code : new u16(16),\n        bl_count  : new u16(16),\n        ordr : [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ],\n        of0  : [3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],\n        exb  : [0,0,0,0,0,0,0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,  4,  5,  5,  5,  5,  0,  0,  0,  0],\n        ldef : new u16(32),\n        df0  : [1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577, 65535, 65535],\n        dxb  : [0,0,0,0,1,1,2, 2, 3, 3, 4, 4, 5, 5,  6,  6,  7,  7,  8,  8,   9,   9,  10,  10,  11,  11,  12,   12,   13,   13,     0,     0],\n        ddef : new u32(32),\n        flmap: new u16(  512),  fltree: [],\n        fdmap: new u16(   32),  fdtree: [],\n        lmap : new u16(32768),  ltree : [],  ttree:[],\n        dmap : new u16(32768),  dtree : [],\n        imap : new u16(  512),  itree : [],\n        //rev9 : new u16(  512)\n        rev15: new u16(1<<15),\n        lhst : new u32(286), dhst : new u32( 30), ihst : new u32(19),\n        lits : new u32(15000),\n        strt : new u16(1<<16),\n        prev : new u16(1<<15)\n      };\n    } ();\n\n    (function(){\n      var U = UZIP.F.U;\n      var len = 1<<15;\n      for(var i=0; i<len; i++) {\n        var x = i;\n        x = (((x & 0xaaaaaaaa) >>> 1) | ((x & 0x55555555) << 1));\n        x = (((x & 0xcccccccc) >>> 2) | ((x & 0x33333333) << 2));\n        x = (((x & 0xf0f0f0f0) >>> 4) | ((x & 0x0f0f0f0f) << 4));\n        x = (((x & 0xff00ff00) >>> 8) | ((x & 0x00ff00ff) << 8));\n        U.rev15[i] = (((x >>> 16) | (x << 16)))>>>17;\n      }\n  \n      function pushV(tgt, n, sv) {  while(n--!=0) tgt.push(0,sv);  }\n  \n      for(var i=0; i<32; i++) {  U.ldef[i]=(U.of0[i]<<3)|U.exb[i];  U.ddef[i]=(U.df0[i]<<4)|U.dxb[i];  }\n  \n      pushV(U.fltree, 144, 8);  pushV(U.fltree, 255-143, 9);  pushV(U.fltree, 279-255, 7);  pushV(U.fltree,287-279,8);\n      /*\n        var i = 0;\n        for(; i<=143; i++) U.fltree.push(0,8);\n        for(; i<=255; i++) U.fltree.push(0,9);\n        for(; i<=279; i++) U.fltree.push(0,7);\n        for(; i<=287; i++) U.fltree.push(0,8);\n        */\n      UZIP.F.makeCodes(U.fltree, 9);\n      UZIP.F.codes2map(U.fltree, 9, U.flmap);\n      UZIP.F.revCodes (U.fltree, 9)\n  \n      pushV(U.fdtree,32,5);\n      //for(i=0;i<32; i++) U.fdtree.push(0,5);\n      UZIP.F.makeCodes(U.fdtree, 5);\n      UZIP.F.codes2map(U.fdtree, 5, U.fdmap);\n      UZIP.F.revCodes (U.fdtree, 5)\n  \n      pushV(U.itree,19,0);  pushV(U.ltree,286,0);  pushV(U.dtree,30,0);  pushV(U.ttree,320,0);\n      /*\n        for(var i=0; i< 19; i++) U.itree.push(0,0);\n        for(var i=0; i<286; i++) U.ltree.push(0,0);\n        for(var i=0; i< 30; i++) U.dtree.push(0,0);\n        for(var i=0; i<320; i++) U.ttree.push(0,0);\n        */\n    })()\n    "))
    }

    function generateWorkerScript() {
        return createWorker("\n    let scriptImported = false\n    self.addEventListener('message', async (e) => {\n      const { file, id, imageCompressionLibUrl, options } = e.data\n      options.onProgress = (progress) => self.postMessage({ progress, id })\n      try {\n        if (!scriptImported) {\n          // console.log('[worker] importScripts', imageCompressionLibUrl)\n          self.importScripts(imageCompressionLibUrl)\n          scriptImported = true\n        }\n        // console.log('[worker] self', self)\n        const compressedFile = await imageCompression(file, options)\n        self.postMessage({ file: compressedFile, id })\n      } catch (e) {\n        // console.error('[worker] error', e)\n        self.postMessage({ error: e.message + '\\n' + e.stack, id })\n      }\n    })\n  ")
    }

    function compressOnWebWorker(e, r) {
        return new Promise((function(t, a) {
            return new Promise((function(i, f) {
                var c = cnt++;
                return imageCompressionLibUrl || (imageCompressionLibUrl = generateLib()), worker || (worker = generateWorkerScript()), worker.addEventListener("message", (function handler(e) {
                    if (e.data.id === c) {
                        if (void 0 !== e.data.progress) return void r.onProgress(e.data.progress);
                        worker.removeEventListener("message", handler), e.data.error && a(new Error(e.data.error)), t(e.data.file)
                    }
                })), worker.addEventListener("error", a), worker.postMessage({
                    file: e,
                    id: c,
                    imageCompressionLibUrl: imageCompressionLibUrl,
                    options: _objectSpread2(_objectSpread2({}, r), {}, {
                        onProgress: void 0
                    })
                }), i()
            }))
        }))
    }

    function imageCompression(e, r) {
        return new Promise((function(t, a) {
            var i, f, c, s, l;
            if (f = 0, r.maxSizeMB = r.maxSizeMB || Number.POSITIVE_INFINITY, s = "boolean" != typeof r.useWebWorker || r.useWebWorker, delete r.useWebWorker, c = r.onProgress, r.onProgress = function(e) {
                    f = e, "function" == typeof c && c(f)
                }, !(e instanceof Blob || e instanceof CustomFile)) return a(new Error("The file given is not an instance of Blob or File"));
            if (!/^image/.test(e.type)) return a(new Error("The file given is not an image"));
            if (l = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope, !s || "function" != typeof Worker || l) return compress(e, r).then(function(e) {
                try {
                    return i = e, $If_3.call(this)
                } catch (e) {
                    return a(e)
                }
            }.bind(this), a);
            var u = function() {
                    try {
                        return $If_3.call(this)
                    } catch (e) {
                        return a(e)
                    }
                }.bind(this),
                d = function $Try_1_Catch(t) {
                    try {
                        return compress(e, r).then((function(e) {
                            try {
                                return i = e, u()
                            } catch (e) {
                                return a(e)
                            }
                        }), a)
                    } catch (e) {
                        return a(e)
                    }
                };
            try {
                return compressOnWebWorker(e, r).then((function(e) {
                    try {
                        return i = e, u()
                    } catch (e) {
                        return d()
                    }
                }), d)
            } catch (e) {
                d()
            }

            function $If_3() {
                try {
                    i.name = e.name, i.lastModified = e.lastModified
                } catch (e) {}
                return t(i)
            }
        }))
    }
    return imageCompression.getDataUrlFromFile = getDataUrlFromFile, imageCompression.getFilefromDataUrl = getFilefromDataUrl, imageCompression.loadImage = loadImage, imageCompression.drawImageInCanvas = drawImageInCanvas, imageCompression.drawFileInCanvas = drawFileInCanvas, imageCompression.canvasToFile = canvasToFile, imageCompression.getExifOrientation = getExifOrientation, imageCompression.handleMaxWidthOrHeight = handleMaxWidthOrHeight, imageCompression.followExifOrientation = followExifOrientation, imageCompression.cleanupCanvasMemory = cleanupCanvasMemory, imageCompression.isAutoOrientationInBrowser = isAutoOrientationInBrowser, imageCompression.version = "1.0.14", imageCompression
}));
//# sourceMappingURL=browser-image-compression.js.map


/*!

JSZip v3.6.0 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/

! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JSZip = e()
    }
}(function() {
    return function s(a, o, u) {
        function h(r, e) {
            if (!o[r]) {
                if (!a[r]) {
                    var t = "function" == typeof require && require;
                    if (!e && t) return t(r, !0);
                    if (f) return f(r, !0);
                    var n = new Error("Cannot find module '" + r + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                var i = o[r] = {
                    exports: {}
                };
                a[r][0].call(i.exports, function(e) {
                    var t = a[r][1][e];
                    return h(t || e)
                }, i, i.exports, s, a, o, u)
            }
            return o[r].exports
        }
        for (var f = "function" == typeof require && require, e = 0; e < u.length; e++) h(u[e]);
        return h
    }({
        1: [function(l, t, n) {
            (function(r) {
                ! function(e) {
                    "object" == typeof n && void 0 !== t ? t.exports = e() : ("undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : this).JSZip = e()
                }(function() {
                    return function s(a, o, u) {
                        function h(t, e) {
                            if (!o[t]) {
                                if (!a[t]) {
                                    var r = "function" == typeof l && l;
                                    if (!e && r) return r(t, !0);
                                    if (f) return f(t, !0);
                                    var n = new Error("Cannot find module '" + t + "'");
                                    throw n.code = "MODULE_NOT_FOUND", n
                                }
                                var i = o[t] = {
                                    exports: {}
                                };
                                a[t][0].call(i.exports, function(e) {
                                    return h(a[t][1][e] || e)
                                }, i, i.exports, s, a, o, u)
                            }
                            return o[t].exports
                        }
                        for (var f = "function" == typeof l && l, e = 0; e < u.length; e++) h(u[e]);
                        return h
                    }({
                        1: [function(l, t, n) {
                            (function(r) {
                                ! function(e) {
                                    "object" == typeof n && void 0 !== t ? t.exports = e() : ("undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : this).JSZip = e()
                                }(function() {
                                    return function s(a, o, u) {
                                        function h(t, e) {
                                            if (!o[t]) {
                                                if (!a[t]) {
                                                    var r = "function" == typeof l && l;
                                                    if (!e && r) return r(t, !0);
                                                    if (f) return f(t, !0);
                                                    var n = new Error("Cannot find module '" + t + "'");
                                                    throw n.code = "MODULE_NOT_FOUND", n
                                                }
                                                var i = o[t] = {
                                                    exports: {}
                                                };
                                                a[t][0].call(i.exports, function(e) {
                                                    return h(a[t][1][e] || e)
                                                }, i, i.exports, s, a, o, u)
                                            }
                                            return o[t].exports
                                        }
                                        for (var f = "function" == typeof l && l, e = 0; e < u.length; e++) h(u[e]);
                                        return h
                                    }({
                                        1: [function(l, t, n) {
                                            (function(r) {
                                                ! function(e) {
                                                    "object" == typeof n && void 0 !== t ? t.exports = e() : ("undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : this).JSZip = e()
                                                }(function() {
                                                    return function s(a, o, u) {
                                                        function h(t, e) {
                                                            if (!o[t]) {
                                                                if (!a[t]) {
                                                                    var r = "function" == typeof l && l;
                                                                    if (!e && r) return r(t, !0);
                                                                    if (f) return f(t, !0);
                                                                    var n = new Error("Cannot find module '" + t + "'");
                                                                    throw n.code = "MODULE_NOT_FOUND", n
                                                                }
                                                                var i = o[t] = {
                                                                    exports: {}
                                                                };
                                                                a[t][0].call(i.exports, function(e) {
                                                                    return h(a[t][1][e] || e)
                                                                }, i, i.exports, s, a, o, u)
                                                            }
                                                            return o[t].exports
                                                        }
                                                        for (var f = "function" == typeof l && l, e = 0; e < u.length; e++) h(u[e]);
                                                        return h
                                                    }({
                                                        1: [function(l, t, n) {
                                                            (function(r) {
                                                                ! function(e) {
                                                                    "object" == typeof n && void 0 !== t ? t.exports = e() : ("undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : this).JSZip = e()
                                                                }(function() {
                                                                    return function s(a, o, u) {
                                                                        function h(t, e) {
                                                                            if (!o[t]) {
                                                                                if (!a[t]) {
                                                                                    var r = "function" == typeof l && l;
                                                                                    if (!e && r) return r(t, !0);
                                                                                    if (f) return f(t, !0);
                                                                                    var n = new Error("Cannot find module '" + t + "'");
                                                                                    throw n.code = "MODULE_NOT_FOUND", n
                                                                                }
                                                                                var i = o[t] = {
                                                                                    exports: {}
                                                                                };
                                                                                a[t][0].call(i.exports, function(e) {
                                                                                    return h(a[t][1][e] || e)
                                                                                }, i, i.exports, s, a, o, u)
                                                                            }
                                                                            return o[t].exports
                                                                        }
                                                                        for (var f = "function" == typeof l && l, e = 0; e < u.length; e++) h(u[e]);
                                                                        return h
                                                                    }({
                                                                        1: [function(l, t, n) {
                                                                            (function(r) {
                                                                                ! function(e) {
                                                                                    "object" == typeof n && void 0 !== t ? t.exports = e() : ("undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : this).JSZip = e()
                                                                                }(function() {
                                                                                    return function s(a, o, u) {
                                                                                        function h(t, e) {
                                                                                            if (!o[t]) {
                                                                                                if (!a[t]) {
                                                                                                    var r = "function" == typeof l && l;
                                                                                                    if (!e && r) return r(t, !0);
                                                                                                    if (f) return f(t, !0);
                                                                                                    var n = new Error("Cannot find module '" + t + "'");
                                                                                                    throw n.code = "MODULE_NOT_FOUND", n
                                                                                                }
                                                                                                var i = o[t] = {
                                                                                                    exports: {}
                                                                                                };
                                                                                                a[t][0].call(i.exports, function(e) {
                                                                                                    return h(a[t][1][e] || e)
                                                                                                }, i, i.exports, s, a, o, u)
                                                                                            }
                                                                                            return o[t].exports
                                                                                        }
                                                                                        for (var f = "function" == typeof l && l, e = 0; e < u.length; e++) h(u[e]);
                                                                                        return h
                                                                                    }({
                                                                                        1: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var c = e("./utils"),
                                                                                                l = e("./support"),
                                                                                                p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                                                                                            r.encode = function(e) {
                                                                                                for (var t, r, n, i, s, a, o, u = [], h = 0, f = e.length, l = f, d = "string" !== c.getTypeOf(e); h < e.length;) l = f - h, n = d ? (t = e[h++], r = h < f ? e[h++] : 0, h < f ? e[h++] : 0) : (t = e.charCodeAt(h++), r = h < f ? e.charCodeAt(h++) : 0, h < f ? e.charCodeAt(h++) : 0), i = t >> 2, s = (3 & t) << 4 | r >> 4, a = 1 < l ? (15 & r) << 2 | n >> 6 : 64, o = 2 < l ? 63 & n : 64, u.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o));
                                                                                                return u.join("")
                                                                                            }, r.decode = function(e) {
                                                                                                var t, r, n, i, s, a, o = 0,
                                                                                                    u = 0;
                                                                                                if ("data:" === e.substr(0, "data:".length)) throw new Error("Invalid base64 input, it looks like a data url.");
                                                                                                var h, f = 3 * (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "")).length / 4;
                                                                                                if (e.charAt(e.length - 1) === p.charAt(64) && f--, e.charAt(e.length - 2) === p.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
                                                                                                for (h = l.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < e.length;) t = p.indexOf(e.charAt(o++)) << 2 | (i = p.indexOf(e.charAt(o++))) >> 4, r = (15 & i) << 4 | (s = p.indexOf(e.charAt(o++))) >> 2, n = (3 & s) << 6 | (a = p.indexOf(e.charAt(o++))), h[u++] = t, 64 !== s && (h[u++] = r), 64 !== a && (h[u++] = n);
                                                                                                return h
                                                                                            }
                                                                                        }, {
                                                                                            "./support": 30,
                                                                                            "./utils": 32
                                                                                        }],
                                                                                        2: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("./external"),
                                                                                                i = e("./stream/DataWorker"),
                                                                                                s = e("./stream/Crc32Probe"),
                                                                                                a = e("./stream/DataLengthProbe");

                                                                                            function o(e, t, r, n, i) {
                                                                                                this.compressedSize = e, this.uncompressedSize = t, this.crc32 = r, this.compression = n, this.compressedContent = i
                                                                                            }
                                                                                            o.prototype = {
                                                                                                getContentWorker: function() {
                                                                                                    var e = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),
                                                                                                        t = this;
                                                                                                    return e.on("end", function() {
                                                                                                        if (this.streamInfo.data_length !== t.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch")
                                                                                                    }), e
                                                                                                },
                                                                                                getCompressedWorker: function() {
                                                                                                    return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression)
                                                                                                }
                                                                                            }, o.createWorkerFrom = function(e, t, r) {
                                                                                                return e.pipe(new s).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression", t)
                                                                                            }, t.exports = o
                                                                                        }, {
                                                                                            "./external": 6,
                                                                                            "./stream/Crc32Probe": 25,
                                                                                            "./stream/DataLengthProbe": 26,
                                                                                            "./stream/DataWorker": 27
                                                                                        }],
                                                                                        3: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("./stream/GenericWorker");
                                                                                            r.STORE = {
                                                                                                magic: "\0\0",
                                                                                                compressWorker: function(e) {
                                                                                                    return new n("STORE compression")
                                                                                                },
                                                                                                uncompressWorker: function() {
                                                                                                    return new n("STORE decompression")
                                                                                                }
                                                                                            }, r.DEFLATE = e("./flate")
                                                                                        }, {
                                                                                            "./flate": 7,
                                                                                            "./stream/GenericWorker": 28
                                                                                        }],
                                                                                        4: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("./utils"),
                                                                                                a = function() {
                                                                                                    for (var e, t = [], r = 0; r < 256; r++) {
                                                                                                        e = r;
                                                                                                        for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                                                                                                        t[r] = e
                                                                                                    }
                                                                                                    return t
                                                                                                }();
                                                                                            t.exports = function(e, t) {
                                                                                                return void 0 !== e && e.length ? "string" !== n.getTypeOf(e) ? function(e, t, r) {
                                                                                                    var n = a,
                                                                                                        i = 0 + r;
                                                                                                    e ^= -1;
                                                                                                    for (var s = 0; s < i; s++) e = e >>> 8 ^ n[255 & (e ^ t[s])];
                                                                                                    return -1 ^ e
                                                                                                }(0 | t, e, e.length) : function(e, t, r) {
                                                                                                    var n = a,
                                                                                                        i = 0 + r;
                                                                                                    e ^= -1;
                                                                                                    for (var s = 0; s < i; s++) e = e >>> 8 ^ n[255 & (e ^ t.charCodeAt(s))];
                                                                                                    return -1 ^ e
                                                                                                }(0 | t, e, e.length) : 0
                                                                                            }
                                                                                        }, {
                                                                                            "./utils": 32
                                                                                        }],
                                                                                        5: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            r.base64 = !1, r.binary = !1, r.dir = !1, r.createFolders = !0, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null
                                                                                        }, {}],
                                                                                        6: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n;
                                                                                            n = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = {
                                                                                                Promise: n
                                                                                            }
                                                                                        }, {
                                                                                            lie: 37
                                                                                        }],
                                                                                        7: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array,
                                                                                                i = e("pako"),
                                                                                                s = e("./utils"),
                                                                                                a = e("./stream/GenericWorker"),
                                                                                                o = n ? "uint8array" : "array";

                                                                                            function u(e, t) {
                                                                                                a.call(this, "FlateWorker/" + e), this._pako = null, this._pakoAction = e, this._pakoOptions = t, this.meta = {}
                                                                                            }
                                                                                            r.magic = "\b\0", s.inherits(u, a), u.prototype.processChunk = function(e) {
                                                                                                this.meta = e.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e.data), !1)
                                                                                            }, u.prototype.flush = function() {
                                                                                                a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], !0)
                                                                                            }, u.prototype.cleanUp = function() {
                                                                                                a.prototype.cleanUp.call(this), this._pako = null
                                                                                            }, u.prototype._createPako = function() {
                                                                                                this._pako = new i[this._pakoAction]({
                                                                                                    raw: !0,
                                                                                                    level: this._pakoOptions.level || -1
                                                                                                });
                                                                                                var t = this;
                                                                                                this._pako.onData = function(e) {
                                                                                                    t.push({
                                                                                                        data: e,
                                                                                                        meta: t.meta
                                                                                                    })
                                                                                                }
                                                                                            }, r.compressWorker = function(e) {
                                                                                                return new u("Deflate", e)
                                                                                            }, r.uncompressWorker = function() {
                                                                                                return new u("Inflate", {})
                                                                                            }
                                                                                        }, {
                                                                                            "./stream/GenericWorker": 28,
                                                                                            "./utils": 32,
                                                                                            pako: 38
                                                                                        }],
                                                                                        8: [function(e, t, r) {
                                                                                            "use strict";

                                                                                            function I(e, t) {
                                                                                                var r, n = "";
                                                                                                for (r = 0; r < t; r++) n += String.fromCharCode(255 & e), e >>>= 8;
                                                                                                return n
                                                                                            }

                                                                                            function i(e, t, r, n, i, s) {
                                                                                                var a, o, u = e.file,
                                                                                                    h = e.compression,
                                                                                                    f = s !== B.utf8encode,
                                                                                                    l = O.transformTo("string", s(u.name)),
                                                                                                    d = O.transformTo("string", B.utf8encode(u.name)),
                                                                                                    c = u.comment,
                                                                                                    p = O.transformTo("string", s(c)),
                                                                                                    m = O.transformTo("string", B.utf8encode(c)),
                                                                                                    _ = d.length !== u.name.length,
                                                                                                    g = m.length !== c.length,
                                                                                                    v = "",
                                                                                                    b = "",
                                                                                                    w = "",
                                                                                                    y = u.dir,
                                                                                                    k = u.date,
                                                                                                    x = {
                                                                                                        crc32: 0,
                                                                                                        compressedSize: 0,
                                                                                                        uncompressedSize: 0
                                                                                                    };
                                                                                                t && !r || (x.crc32 = e.crc32, x.compressedSize = e.compressedSize, x.uncompressedSize = e.uncompressedSize);
                                                                                                var S = 0;
                                                                                                t && (S |= 8), f || !_ && !g || (S |= 2048);
                                                                                                var z, E = 0,
                                                                                                    C = 0;
                                                                                                y && (E |= 16), "UNIX" === i ? (C = 798, E |= ((z = u.unixPermissions) || (z = y ? 16893 : 33204), (65535 & z) << 16)) : (C = 20, E |= 63 & (u.dosPermissions || 0)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v += "up" + I((b = I(1, 1) + I(T(l), 4) + d).length, 2) + b), g && (v += "uc" + I((w = I(1, 1) + I(T(p), 4) + m).length, 2) + w);
                                                                                                var A = "";
                                                                                                return A += "\n\0", A += I(S, 2), A += h.magic, A += I(a, 2), A += I(o, 2), A += I(x.crc32, 4), A += I(x.compressedSize, 4), A += I(x.uncompressedSize, 4), A += I(l.length, 2), A += I(v.length, 2), {
                                                                                                    fileRecord: R.LOCAL_FILE_HEADER + A + l + v,
                                                                                                    dirRecord: R.CENTRAL_FILE_HEADER + I(C, 2) + A + I(p.length, 2) + "\0\0\0\0" + I(E, 4) + I(n, 4) + l + v + p
                                                                                                }
                                                                                            }
                                                                                            var O = e("../utils"),
                                                                                                s = e("../stream/GenericWorker"),
                                                                                                B = e("../utf8"),
                                                                                                T = e("../crc32"),
                                                                                                R = e("../signature");

                                                                                            function n(e, t, r, n) {
                                                                                                s.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t, this.zipPlatform = r, this.encodeFileName = n, this.streamFiles = e, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = []
                                                                                            }
                                                                                            O.inherits(n, s), n.prototype.push = function(e) {
                                                                                                var t = e.meta.percent || 0,
                                                                                                    r = this.entriesCount,
                                                                                                    n = this._sources.length;
                                                                                                this.accumulate ? this.contentBuffer.push(e) : (this.bytesWritten += e.data.length, s.prototype.push.call(this, {
                                                                                                    data: e.data,
                                                                                                    meta: {
                                                                                                        currentFile: this.currentFile,
                                                                                                        percent: r ? (t + 100 * (r - n - 1)) / r : 100
                                                                                                    }
                                                                                                }))
                                                                                            }, n.prototype.openedSource = function(e) {
                                                                                                this.currentSourceOffset = this.bytesWritten, this.currentFile = e.file.name;
                                                                                                var t = this.streamFiles && !e.file.dir;
                                                                                                if (t) {
                                                                                                    var r = i(e, t, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                                                                                                    this.push({
                                                                                                        data: r.fileRecord,
                                                                                                        meta: {
                                                                                                            percent: 0
                                                                                                        }
                                                                                                    })
                                                                                                } else this.accumulate = !0
                                                                                            }, n.prototype.closedSource = function(e) {
                                                                                                this.accumulate = !1;
                                                                                                var t, r = this.streamFiles && !e.file.dir,
                                                                                                    n = i(e, r, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                                                                                                if (this.dirRecords.push(n.dirRecord), r) this.push({
                                                                                                    data: (t = e, R.DATA_DESCRIPTOR + I(t.crc32, 4) + I(t.compressedSize, 4) + I(t.uncompressedSize, 4)),
                                                                                                    meta: {
                                                                                                        percent: 100
                                                                                                    }
                                                                                                });
                                                                                                else
                                                                                                    for (this.push({
                                                                                                            data: n.fileRecord,
                                                                                                            meta: {
                                                                                                                percent: 0
                                                                                                            }
                                                                                                        }); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
                                                                                                this.currentFile = null
                                                                                            }, n.prototype.flush = function() {
                                                                                                for (var e = this.bytesWritten, t = 0; t < this.dirRecords.length; t++) this.push({
                                                                                                    data: this.dirRecords[t],
                                                                                                    meta: {
                                                                                                        percent: 100
                                                                                                    }
                                                                                                });
                                                                                                var r, n, i, s, a, o, u = this.bytesWritten - e,
                                                                                                    h = (r = this.dirRecords.length, n = u, i = e, s = this.zipComment, a = this.encodeFileName, o = O.transformTo("string", a(s)), R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + I(r, 2) + I(r, 2) + I(n, 4) + I(i, 4) + I(o.length, 2) + o);
                                                                                                this.push({
                                                                                                    data: h,
                                                                                                    meta: {
                                                                                                        percent: 100
                                                                                                    }
                                                                                                })
                                                                                            }, n.prototype.prepareNextSource = function() {
                                                                                                this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume()
                                                                                            }, n.prototype.registerPrevious = function(e) {
                                                                                                this._sources.push(e);
                                                                                                var t = this;
                                                                                                return e.on("data", function(e) {
                                                                                                    t.processChunk(e)
                                                                                                }), e.on("end", function() {
                                                                                                    t.closedSource(t.previous.streamInfo), t._sources.length ? t.prepareNextSource() : t.end()
                                                                                                }), e.on("error", function(e) {
                                                                                                    t.error(e)
                                                                                                }), this
                                                                                            }, n.prototype.resume = function() {
                                                                                                return !!s.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0))
                                                                                            }, n.prototype.error = function(e) {
                                                                                                var t = this._sources;
                                                                                                if (!s.prototype.error.call(this, e)) return !1;
                                                                                                for (var r = 0; r < t.length; r++) try {
                                                                                                    t[r].error(e)
                                                                                                } catch (e) {}
                                                                                                return !0
                                                                                            }, n.prototype.lock = function() {
                                                                                                s.prototype.lock.call(this);
                                                                                                for (var e = this._sources, t = 0; t < e.length; t++) e[t].lock()
                                                                                            }, t.exports = n
                                                                                        }, {
                                                                                            "../crc32": 4,
                                                                                            "../signature": 23,
                                                                                            "../stream/GenericWorker": 28,
                                                                                            "../utf8": 31,
                                                                                            "../utils": 32
                                                                                        }],
                                                                                        9: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var h = e("../compressions"),
                                                                                                n = e("./ZipFileWorker");
                                                                                            r.generateWorker = function(e, a, t) {
                                                                                                var o = new n(a.streamFiles, t, a.platform, a.encodeFileName),
                                                                                                    u = 0;
                                                                                                try {
                                                                                                    e.forEach(function(e, t) {
                                                                                                        u++;
                                                                                                        var r = function(e, t) {
                                                                                                                var r = e || t,
                                                                                                                    n = h[r];
                                                                                                                if (!n) throw new Error(r + " is not a valid compression method !");
                                                                                                                return n
                                                                                                            }(t.options.compression, a.compression),
                                                                                                            n = t.options.compressionOptions || a.compressionOptions || {},
                                                                                                            i = t.dir,
                                                                                                            s = t.date;
                                                                                                        t._compressWorker(r, n).withStreamInfo("file", {
                                                                                                            name: e,
                                                                                                            dir: i,
                                                                                                            date: s,
                                                                                                            comment: t.comment || "",
                                                                                                            unixPermissions: t.unixPermissions,
                                                                                                            dosPermissions: t.dosPermissions
                                                                                                        }).pipe(o)
                                                                                                    }), o.entriesCount = u
                                                                                                } catch (e) {
                                                                                                    o.error(e)
                                                                                                }
                                                                                                return o
                                                                                            }
                                                                                        }, {
                                                                                            "../compressions": 3,
                                                                                            "./ZipFileWorker": 8
                                                                                        }],
                                                                                        10: [function(e, t, r) {
                                                                                            "use strict";

                                                                                            function n() {
                                                                                                if (!(this instanceof n)) return new n;
                                                                                                if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
                                                                                                this.files = {}, this.comment = null, this.root = "", this.clone = function() {
                                                                                                    var e = new n;
                                                                                                    for (var t in this) "function" != typeof this[t] && (e[t] = this[t]);
                                                                                                    return e
                                                                                                }
                                                                                            }(n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.5.0", n.loadAsync = function(e, t) {
                                                                                                return (new n).loadAsync(e, t)
                                                                                            }, n.external = e("./external"), t.exports = n
                                                                                        }, {
                                                                                            "./defaults": 5,
                                                                                            "./external": 6,
                                                                                            "./load": 11,
                                                                                            "./object": 15,
                                                                                            "./support": 30
                                                                                        }],
                                                                                        11: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("./utils"),
                                                                                                i = e("./external"),
                                                                                                o = e("./utf8"),
                                                                                                u = e("./zipEntries"),
                                                                                                s = e("./stream/Crc32Probe"),
                                                                                                h = e("./nodejsUtils");

                                                                                            function f(n) {
                                                                                                return new i.Promise(function(e, t) {
                                                                                                    var r = n.decompressed.getContentWorker().pipe(new s);
                                                                                                    r.on("error", function(e) {
                                                                                                        t(e)
                                                                                                    }).on("end", function() {
                                                                                                        r.streamInfo.crc32 !== n.decompressed.crc32 ? t(new Error("Corrupted zip : CRC32 mismatch")) : e()
                                                                                                    }).resume()
                                                                                                })
                                                                                            }
                                                                                            t.exports = function(e, s) {
                                                                                                var a = this;
                                                                                                return s = n.extend(s || {}, {
                                                                                                    base64: !1,
                                                                                                    checkCRC32: !1,
                                                                                                    optimizedBinaryString: !1,
                                                                                                    createFolders: !1,
                                                                                                    decodeFileName: o.utf8decode
                                                                                                }), h.isNode && h.isStream(e) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : n.prepareContent("the loaded zip file", e, !0, s.optimizedBinaryString, s.base64).then(function(e) {
                                                                                                    var t = new u(s);
                                                                                                    return t.load(e), t
                                                                                                }).then(function(e) {
                                                                                                    var t = [i.Promise.resolve(e)],
                                                                                                        r = e.files;
                                                                                                    if (s.checkCRC32)
                                                                                                        for (var n = 0; n < r.length; n++) t.push(f(r[n]));
                                                                                                    return i.Promise.all(t)
                                                                                                }).then(function(e) {
                                                                                                    for (var t = e.shift(), r = t.files, n = 0; n < r.length; n++) {
                                                                                                        var i = r[n];
                                                                                                        a.file(i.fileNameStr, i.decompressed, {
                                                                                                            binary: !0,
                                                                                                            optimizedBinaryString: !0,
                                                                                                            date: i.date,
                                                                                                            dir: i.dir,
                                                                                                            comment: i.fileCommentStr.length ? i.fileCommentStr : null,
                                                                                                            unixPermissions: i.unixPermissions,
                                                                                                            dosPermissions: i.dosPermissions,
                                                                                                            createFolders: s.createFolders
                                                                                                        })
                                                                                                    }
                                                                                                    return t.zipComment.length && (a.comment = t.zipComment), a
                                                                                                })
                                                                                            }
                                                                                        }, {
                                                                                            "./external": 6,
                                                                                            "./nodejsUtils": 14,
                                                                                            "./stream/Crc32Probe": 25,
                                                                                            "./utf8": 31,
                                                                                            "./utils": 32,
                                                                                            "./zipEntries": 33
                                                                                        }],
                                                                                        12: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("../utils"),
                                                                                                i = e("../stream/GenericWorker");

                                                                                            function s(e, t) {
                                                                                                i.call(this, "Nodejs stream input adapter for " + e), this._upstreamEnded = !1, this._bindStream(t)
                                                                                            }
                                                                                            n.inherits(s, i), s.prototype._bindStream = function(e) {
                                                                                                var t = this;
                                                                                                (this._stream = e).pause(), e.on("data", function(e) {
                                                                                                    t.push({
                                                                                                        data: e,
                                                                                                        meta: {
                                                                                                            percent: 0
                                                                                                        }
                                                                                                    })
                                                                                                }).on("error", function(e) {
                                                                                                    t.isPaused ? this.generatedError = e : t.error(e)
                                                                                                }).on("end", function() {
                                                                                                    t.isPaused ? t._upstreamEnded = !0 : t.end()
                                                                                                })
                                                                                            }, s.prototype.pause = function() {
                                                                                                return !!i.prototype.pause.call(this) && (this._stream.pause(), !0)
                                                                                            }, s.prototype.resume = function() {
                                                                                                return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
                                                                                            }, t.exports = s
                                                                                        }, {
                                                                                            "../stream/GenericWorker": 28,
                                                                                            "../utils": 32
                                                                                        }],
                                                                                        13: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var i = e("readable-stream").Readable;

                                                                                            function n(e, t, r) {
                                                                                                i.call(this, t), this._helper = e;
                                                                                                var n = this;
                                                                                                e.on("data", function(e, t) {
                                                                                                    n.push(e) || n._helper.pause(), r && r(t)
                                                                                                }).on("error", function(e) {
                                                                                                    n.emit("error", e)
                                                                                                }).on("end", function() {
                                                                                                    n.push(null)
                                                                                                })
                                                                                            }
                                                                                            e("../utils").inherits(n, i), n.prototype._read = function() {
                                                                                                this._helper.resume()
                                                                                            }, t.exports = n
                                                                                        }, {
                                                                                            "../utils": 32,
                                                                                            "readable-stream": 16
                                                                                        }],
                                                                                        14: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            t.exports = {
                                                                                                isNode: "undefined" != typeof Buffer,
                                                                                                newBufferFrom: function(e, t) {
                                                                                                    if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, t);
                                                                                                    if ("number" == typeof e) throw new Error('The "data" argument must not be a number');
                                                                                                    return new Buffer(e, t)
                                                                                                },
                                                                                                allocBuffer: function(e) {
                                                                                                    if (Buffer.alloc) return Buffer.alloc(e);
                                                                                                    var t = new Buffer(e);
                                                                                                    return t.fill(0), t
                                                                                                },
                                                                                                isBuffer: function(e) {
                                                                                                    return Buffer.isBuffer(e)
                                                                                                },
                                                                                                isStream: function(e) {
                                                                                                    return e && "function" == typeof e.on && "function" == typeof e.pause && "function" == typeof e.resume
                                                                                                }
                                                                                            }
                                                                                        }, {}],
                                                                                        15: [function(e, t, r) {
                                                                                            "use strict";

                                                                                            function s(e, t, r) {
                                                                                                var n, i = f.getTypeOf(t),
                                                                                                    s = f.extend(r || {}, d);
                                                                                                s.date = s.date || new Date, null !== s.compression && (s.compression = s.compression.toUpperCase()), "string" == typeof s.unixPermissions && (s.unixPermissions = parseInt(s.unixPermissions, 8)), s.unixPermissions && 16384 & s.unixPermissions && (s.dir = !0), s.dosPermissions && 16 & s.dosPermissions && (s.dir = !0), s.dir && (e = h(e)), s.createFolders && (n = function(e) {
                                                                                                    "/" === e.slice(-1) && (e = e.substring(0, e.length - 1));
                                                                                                    var t = e.lastIndexOf("/");
                                                                                                    return 0 < t ? e.substring(0, t) : ""
                                                                                                }(e)) && g.call(this, n, !0);
                                                                                                var a, o = "string" === i && !1 === s.binary && !1 === s.base64;
                                                                                                r && void 0 !== r.binary || (s.binary = !o), (t instanceof c && 0 === t.uncompressedSize || s.dir || !t || 0 === t.length) && (s.base64 = !1, s.binary = !0, t = "", s.compression = "STORE", i = "string"), a = t instanceof c || t instanceof l ? t : m.isNode && m.isStream(t) ? new _(e, t) : f.prepareContent(e, t, s.binary, s.optimizedBinaryString, s.base64);
                                                                                                var u = new p(e, a, s);
                                                                                                this.files[e] = u
                                                                                            }

                                                                                            function h(e) {
                                                                                                return "/" !== e.slice(-1) && (e += "/"), e
                                                                                            }
                                                                                            var i = e("./utf8"),
                                                                                                f = e("./utils"),
                                                                                                l = e("./stream/GenericWorker"),
                                                                                                a = e("./stream/StreamHelper"),
                                                                                                d = e("./defaults"),
                                                                                                c = e("./compressedObject"),
                                                                                                p = e("./zipObject"),
                                                                                                o = e("./generate"),
                                                                                                m = e("./nodejsUtils"),
                                                                                                _ = e("./nodejs/NodejsStreamInputAdapter"),
                                                                                                g = function(e, t) {
                                                                                                    return t = void 0 !== t ? t : d.createFolders, e = h(e), this.files[e] || s.call(this, e, null, {
                                                                                                        dir: !0,
                                                                                                        createFolders: t
                                                                                                    }), this.files[e]
                                                                                                };

                                                                                            function u(e) {
                                                                                                return "[object RegExp]" === Object.prototype.toString.call(e)
                                                                                            }
                                                                                            var n = {
                                                                                                load: function() {
                                                                                                    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                                                                                                },
                                                                                                forEach: function(e) {
                                                                                                    var t, r, n;
                                                                                                    for (t in this.files) this.files.hasOwnProperty(t) && (n = this.files[t], (r = t.slice(this.root.length, t.length)) && t.slice(0, this.root.length) === this.root && e(r, n))
                                                                                                },
                                                                                                filter: function(r) {
                                                                                                    var n = [];
                                                                                                    return this.forEach(function(e, t) {
                                                                                                        r(e, t) && n.push(t)
                                                                                                    }), n
                                                                                                },
                                                                                                file: function(e, t, r) {
                                                                                                    if (1 !== arguments.length) return e = this.root + e, s.call(this, e, t, r), this;
                                                                                                    if (u(e)) {
                                                                                                        var n = e;
                                                                                                        return this.filter(function(e, t) {
                                                                                                            return !t.dir && n.test(e)
                                                                                                        })
                                                                                                    }
                                                                                                    var i = this.files[this.root + e];
                                                                                                    return i && !i.dir ? i : null
                                                                                                },
                                                                                                folder: function(r) {
                                                                                                    if (!r) return this;
                                                                                                    if (u(r)) return this.filter(function(e, t) {
                                                                                                        return t.dir && r.test(e)
                                                                                                    });
                                                                                                    var e = this.root + r,
                                                                                                        t = g.call(this, e),
                                                                                                        n = this.clone();
                                                                                                    return n.root = t.name, n
                                                                                                },
                                                                                                remove: function(r) {
                                                                                                    r = this.root + r;
                                                                                                    var e = this.files[r];
                                                                                                    if (e || ("/" !== r.slice(-1) && (r += "/"), e = this.files[r]), e && !e.dir) delete this.files[r];
                                                                                                    else
                                                                                                        for (var t = this.filter(function(e, t) {
                                                                                                                return t.name.slice(0, r.length) === r
                                                                                                            }), n = 0; n < t.length; n++) delete this.files[t[n].name];
                                                                                                    return this
                                                                                                },
                                                                                                generate: function(e) {
                                                                                                    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                                                                                                },
                                                                                                generateInternalStream: function(e) {
                                                                                                    var t, r = {};
                                                                                                    try {
                                                                                                        if ((r = f.extend(e || {}, {
                                                                                                                streamFiles: !1,
                                                                                                                compression: "STORE",
                                                                                                                compressionOptions: null,
                                                                                                                type: "",
                                                                                                                platform: "DOS",
                                                                                                                comment: null,
                                                                                                                mimeType: "application/zip",
                                                                                                                encodeFileName: i.utf8encode
                                                                                                            })).type = r.type.toLowerCase(), r.compression = r.compression.toUpperCase(), "binarystring" === r.type && (r.type = "string"), !r.type) throw new Error("No output type specified.");
                                                                                                        f.checkSupport(r.type), "darwin" !== r.platform && "freebsd" !== r.platform && "linux" !== r.platform && "sunos" !== r.platform || (r.platform = "UNIX"), "win32" === r.platform && (r.platform = "DOS");
                                                                                                        var n = r.comment || this.comment || "";
                                                                                                        t = o.generateWorker(this, r, n)
                                                                                                    } catch (e) {
                                                                                                        (t = new l("error")).error(e)
                                                                                                    }
                                                                                                    return new a(t, r.type || "string", r.mimeType)
                                                                                                },
                                                                                                generateAsync: function(e, t) {
                                                                                                    return this.generateInternalStream(e).accumulate(t)
                                                                                                },
                                                                                                generateNodeStream: function(e, t) {
                                                                                                    return (e = e || {}).type || (e.type = "nodebuffer"), this.generateInternalStream(e).toNodejsStream(t)
                                                                                                }
                                                                                            };
                                                                                            t.exports = n
                                                                                        }, {
                                                                                            "./compressedObject": 2,
                                                                                            "./defaults": 5,
                                                                                            "./generate": 9,
                                                                                            "./nodejs/NodejsStreamInputAdapter": 12,
                                                                                            "./nodejsUtils": 14,
                                                                                            "./stream/GenericWorker": 28,
                                                                                            "./stream/StreamHelper": 29,
                                                                                            "./utf8": 31,
                                                                                            "./utils": 32,
                                                                                            "./zipObject": 35
                                                                                        }],
                                                                                        16: [function(e, t, r) {
                                                                                            t.exports = e("stream")
                                                                                        }, {
                                                                                            stream: void 0
                                                                                        }],
                                                                                        17: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("./DataReader");

                                                                                            function i(e) {
                                                                                                n.call(this, e);
                                                                                                for (var t = 0; t < this.data.length; t++) e[t] = 255 & e[t]
                                                                                            }
                                                                                            e("../utils").inherits(i, n), i.prototype.byteAt = function(e) {
                                                                                                return this.data[this.zero + e]
                                                                                            }, i.prototype.lastIndexOfSignature = function(e) {
                                                                                                for (var t = e.charCodeAt(0), r = e.charCodeAt(1), n = e.charCodeAt(2), i = e.charCodeAt(3), s = this.length - 4; 0 <= s; --s)
                                                                                                    if (this.data[s] === t && this.data[s + 1] === r && this.data[s + 2] === n && this.data[s + 3] === i) return s - this.zero;
                                                                                                return -1
                                                                                            }, i.prototype.readAndCheckSignature = function(e) {
                                                                                                var t = e.charCodeAt(0),
                                                                                                    r = e.charCodeAt(1),
                                                                                                    n = e.charCodeAt(2),
                                                                                                    i = e.charCodeAt(3),
                                                                                                    s = this.readData(4);
                                                                                                return t === s[0] && r === s[1] && n === s[2] && i === s[3]
                                                                                            }, i.prototype.readData = function(e) {
                                                                                                if (this.checkOffset(e), 0 === e) return [];
                                                                                                var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                                                                                                return this.index += e, t
                                                                                            }, t.exports = i
                                                                                        }, {
                                                                                            "../utils": 32,
                                                                                            "./DataReader": 18
                                                                                        }],
                                                                                        18: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("../utils");

                                                                                            function i(e) {
                                                                                                this.data = e, this.length = e.length, this.index = 0, this.zero = 0
                                                                                            }
                                                                                            i.prototype = {
                                                                                                checkOffset: function(e) {
                                                                                                    this.checkIndex(this.index + e)
                                                                                                },
                                                                                                checkIndex: function(e) {
                                                                                                    if (this.length < this.zero + e || e < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?")
                                                                                                },
                                                                                                setIndex: function(e) {
                                                                                                    this.checkIndex(e), this.index = e
                                                                                                },
                                                                                                skip: function(e) {
                                                                                                    this.setIndex(this.index + e)
                                                                                                },
                                                                                                byteAt: function(e) {},
                                                                                                readInt: function(e) {
                                                                                                    var t, r = 0;
                                                                                                    for (this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--) r = (r << 8) + this.byteAt(t);
                                                                                                    return this.index += e, r
                                                                                                },
                                                                                                readString: function(e) {
                                                                                                    return n.transformTo("string", this.readData(e))
                                                                                                },
                                                                                                readData: function(e) {},
                                                                                                lastIndexOfSignature: function(e) {},
                                                                                                readAndCheckSignature: function(e) {},
                                                                                                readDate: function() {
                                                                                                    var e = this.readInt(4);
                                                                                                    return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1))
                                                                                                }
                                                                                            }, t.exports = i
                                                                                        }, {
                                                                                            "../utils": 32
                                                                                        }],
                                                                                        19: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("./Uint8ArrayReader");

                                                                                            function i(e) {
                                                                                                n.call(this, e)
                                                                                            }
                                                                                            e("../utils").inherits(i, n), i.prototype.readData = function(e) {
                                                                                                this.checkOffset(e);
                                                                                                var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                                                                                                return this.index += e, t
                                                                                            }, t.exports = i
                                                                                        }, {
                                                                                            "../utils": 32,
                                                                                            "./Uint8ArrayReader": 21
                                                                                        }],
                                                                                        20: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("./DataReader");

                                                                                            function i(e) {
                                                                                                n.call(this, e)
                                                                                            }
                                                                                            e("../utils").inherits(i, n), i.prototype.byteAt = function(e) {
                                                                                                return this.data.charCodeAt(this.zero + e)
                                                                                            }, i.prototype.lastIndexOfSignature = function(e) {
                                                                                                return this.data.lastIndexOf(e) - this.zero
                                                                                            }, i.prototype.readAndCheckSignature = function(e) {
                                                                                                return e === this.readData(4)
                                                                                            }, i.prototype.readData = function(e) {
                                                                                                this.checkOffset(e);
                                                                                                var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                                                                                                return this.index += e, t
                                                                                            }, t.exports = i
                                                                                        }, {
                                                                                            "../utils": 32,
                                                                                            "./DataReader": 18
                                                                                        }],
                                                                                        21: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("./ArrayReader");

                                                                                            function i(e) {
                                                                                                n.call(this, e)
                                                                                            }
                                                                                            e("../utils").inherits(i, n), i.prototype.readData = function(e) {
                                                                                                if (this.checkOffset(e), 0 === e) return new Uint8Array(0);
                                                                                                var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
                                                                                                return this.index += e, t
                                                                                            }, t.exports = i
                                                                                        }, {
                                                                                            "../utils": 32,
                                                                                            "./ArrayReader": 17
                                                                                        }],
                                                                                        22: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("../utils"),
                                                                                                i = e("../support"),
                                                                                                s = e("./ArrayReader"),
                                                                                                a = e("./StringReader"),
                                                                                                o = e("./NodeBufferReader"),
                                                                                                u = e("./Uint8ArrayReader");
                                                                                            t.exports = function(e) {
                                                                                                var t = n.getTypeOf(e);
                                                                                                return n.checkSupport(t), "string" !== t || i.uint8array ? "nodebuffer" === t ? new o(e) : i.uint8array ? new u(n.transformTo("uint8array", e)) : new s(n.transformTo("array", e)) : new a(e)
                                                                                            }
                                                                                        }, {
                                                                                            "../support": 30,
                                                                                            "../utils": 32,
                                                                                            "./ArrayReader": 17,
                                                                                            "./NodeBufferReader": 19,
                                                                                            "./StringReader": 20,
                                                                                            "./Uint8ArrayReader": 21
                                                                                        }],
                                                                                        23: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\b"
                                                                                        }, {}],
                                                                                        24: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("./GenericWorker"),
                                                                                                i = e("../utils");

                                                                                            function s(e) {
                                                                                                n.call(this, "ConvertWorker to " + e), this.destType = e
                                                                                            }
                                                                                            i.inherits(s, n), s.prototype.processChunk = function(e) {
                                                                                                this.push({
                                                                                                    data: i.transformTo(this.destType, e.data),
                                                                                                    meta: e.meta
                                                                                                })
                                                                                            }, t.exports = s
                                                                                        }, {
                                                                                            "../utils": 32,
                                                                                            "./GenericWorker": 28
                                                                                        }],
                                                                                        25: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("./GenericWorker"),
                                                                                                i = e("../crc32");

                                                                                            function s() {
                                                                                                n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0)
                                                                                            }
                                                                                            e("../utils").inherits(s, n), s.prototype.processChunk = function(e) {
                                                                                                this.streamInfo.crc32 = i(e.data, this.streamInfo.crc32 || 0), this.push(e)
                                                                                            }, t.exports = s
                                                                                        }, {
                                                                                            "../crc32": 4,
                                                                                            "../utils": 32,
                                                                                            "./GenericWorker": 28
                                                                                        }],
                                                                                        26: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("../utils"),
                                                                                                i = e("./GenericWorker");

                                                                                            function s(e) {
                                                                                                i.call(this, "DataLengthProbe for " + e), this.propName = e, this.withStreamInfo(e, 0)
                                                                                            }
                                                                                            n.inherits(s, i), s.prototype.processChunk = function(e) {
                                                                                                if (e) {
                                                                                                    var t = this.streamInfo[this.propName] || 0;
                                                                                                    this.streamInfo[this.propName] = t + e.data.length
                                                                                                }
                                                                                                i.prototype.processChunk.call(this, e)
                                                                                            }, t.exports = s
                                                                                        }, {
                                                                                            "../utils": 32,
                                                                                            "./GenericWorker": 28
                                                                                        }],
                                                                                        27: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("../utils"),
                                                                                                i = e("./GenericWorker");

                                                                                            function s(e) {
                                                                                                i.call(this, "DataWorker");
                                                                                                var t = this;
                                                                                                this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, e.then(function(e) {
                                                                                                    t.dataIsReady = !0, t.data = e, t.max = e && e.length || 0, t.type = n.getTypeOf(e), t.isPaused || t._tickAndRepeat()
                                                                                                }, function(e) {
                                                                                                    t.error(e)
                                                                                                })
                                                                                            }
                                                                                            n.inherits(s, i), s.prototype.cleanUp = function() {
                                                                                                i.prototype.cleanUp.call(this), this.data = null
                                                                                            }, s.prototype.resume = function() {
                                                                                                return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, n.delay(this._tickAndRepeat, [], this)), !0)
                                                                                            }, s.prototype._tickAndRepeat = function() {
                                                                                                this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0))
                                                                                            }, s.prototype._tick = function() {
                                                                                                if (this.isPaused || this.isFinished) return !1;
                                                                                                var e = null,
                                                                                                    t = Math.min(this.max, this.index + 16384);
                                                                                                if (this.index >= this.max) return this.end();
                                                                                                switch (this.type) {
                                                                                                    case "string":
                                                                                                        e = this.data.substring(this.index, t);
                                                                                                        break;
                                                                                                    case "uint8array":
                                                                                                        e = this.data.subarray(this.index, t);
                                                                                                        break;
                                                                                                    case "array":
                                                                                                    case "nodebuffer":
                                                                                                        e = this.data.slice(this.index, t)
                                                                                                }
                                                                                                return this.index = t, this.push({
                                                                                                    data: e,
                                                                                                    meta: {
                                                                                                        percent: this.max ? this.index / this.max * 100 : 0
                                                                                                    }
                                                                                                })
                                                                                            }, t.exports = s
                                                                                        }, {
                                                                                            "../utils": 32,
                                                                                            "./GenericWorker": 28
                                                                                        }],
                                                                                        28: [function(e, t, r) {
                                                                                            "use strict";

                                                                                            function n(e) {
                                                                                                this.name = e || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
                                                                                                    data: [],
                                                                                                    end: [],
                                                                                                    error: []
                                                                                                }, this.previous = null
                                                                                            }
                                                                                            n.prototype = {
                                                                                                push: function(e) {
                                                                                                    this.emit("data", e)
                                                                                                },
                                                                                                end: function() {
                                                                                                    if (this.isFinished) return !1;
                                                                                                    this.flush();
                                                                                                    try {
                                                                                                        this.emit("end"), this.cleanUp(), this.isFinished = !0
                                                                                                    } catch (e) {
                                                                                                        this.emit("error", e)
                                                                                                    }
                                                                                                    return !0
                                                                                                },
                                                                                                error: function(e) {
                                                                                                    return !this.isFinished && (this.isPaused ? this.generatedError = e : (this.isFinished = !0, this.emit("error", e), this.previous && this.previous.error(e), this.cleanUp()), !0)
                                                                                                },
                                                                                                on: function(e, t) {
                                                                                                    return this._listeners[e].push(t), this
                                                                                                },
                                                                                                cleanUp: function() {
                                                                                                    this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = []
                                                                                                },
                                                                                                emit: function(e, t) {
                                                                                                    if (this._listeners[e])
                                                                                                        for (var r = 0; r < this._listeners[e].length; r++) this._listeners[e][r].call(this, t)
                                                                                                },
                                                                                                pipe: function(e) {
                                                                                                    return e.registerPrevious(this)
                                                                                                },
                                                                                                registerPrevious: function(e) {
                                                                                                    if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                                                                                                    this.streamInfo = e.streamInfo, this.mergeStreamInfo(), this.previous = e;
                                                                                                    var t = this;
                                                                                                    return e.on("data", function(e) {
                                                                                                        t.processChunk(e)
                                                                                                    }), e.on("end", function() {
                                                                                                        t.end()
                                                                                                    }), e.on("error", function(e) {
                                                                                                        t.error(e)
                                                                                                    }), this
                                                                                                },
                                                                                                pause: function() {
                                                                                                    return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0)
                                                                                                },
                                                                                                resume: function() {
                                                                                                    if (!this.isPaused || this.isFinished) return !1;
                                                                                                    var e = this.isPaused = !1;
                                                                                                    return this.generatedError && (this.error(this.generatedError), e = !0), this.previous && this.previous.resume(), !e
                                                                                                },
                                                                                                flush: function() {},
                                                                                                processChunk: function(e) {
                                                                                                    this.push(e)
                                                                                                },
                                                                                                withStreamInfo: function(e, t) {
                                                                                                    return this.extraStreamInfo[e] = t, this.mergeStreamInfo(), this
                                                                                                },
                                                                                                mergeStreamInfo: function() {
                                                                                                    for (var e in this.extraStreamInfo) this.extraStreamInfo.hasOwnProperty(e) && (this.streamInfo[e] = this.extraStreamInfo[e])
                                                                                                },
                                                                                                lock: function() {
                                                                                                    if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                                                                                                    this.isLocked = !0, this.previous && this.previous.lock()
                                                                                                },
                                                                                                toString: function() {
                                                                                                    var e = "Worker " + this.name;
                                                                                                    return this.previous ? this.previous + " -> " + e : e
                                                                                                }
                                                                                            }, t.exports = n
                                                                                        }, {}],
                                                                                        29: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var h = e("../utils"),
                                                                                                i = e("./ConvertWorker"),
                                                                                                s = e("./GenericWorker"),
                                                                                                f = e("../base64"),
                                                                                                n = e("../support"),
                                                                                                a = e("../external"),
                                                                                                o = null;
                                                                                            if (n.nodestream) try {
                                                                                                o = e("../nodejs/NodejsStreamOutputAdapter")
                                                                                            } catch (e) {}

                                                                                            function u(e, t, r) {
                                                                                                var n = t;
                                                                                                switch (t) {
                                                                                                    case "blob":
                                                                                                    case "arraybuffer":
                                                                                                        n = "uint8array";
                                                                                                        break;
                                                                                                    case "base64":
                                                                                                        n = "string"
                                                                                                }
                                                                                                try {
                                                                                                    this._internalType = n, this._outputType = t, this._mimeType = r, h.checkSupport(n), this._worker = e.pipe(new i(n)), e.lock()
                                                                                                } catch (e) {
                                                                                                    this._worker = new s("error"), this._worker.error(e)
                                                                                                }
                                                                                            }
                                                                                            u.prototype = {
                                                                                                accumulate: function(e) {
                                                                                                    return o = this, u = e, new a.Promise(function(t, r) {
                                                                                                        var n = [],
                                                                                                            i = o._internalType,
                                                                                                            s = o._outputType,
                                                                                                            a = o._mimeType;
                                                                                                        o.on("data", function(e, t) {
                                                                                                            n.push(e), u && u(t)
                                                                                                        }).on("error", function(e) {
                                                                                                            n = [], r(e)
                                                                                                        }).on("end", function() {
                                                                                                            try {
                                                                                                                var e = function(e, t, r) {
                                                                                                                    switch (e) {
                                                                                                                        case "blob":
                                                                                                                            return h.newBlob(h.transformTo("arraybuffer", t), r);
                                                                                                                        case "base64":
                                                                                                                            return f.encode(t);
                                                                                                                        default:
                                                                                                                            return h.transformTo(e, t)
                                                                                                                    }
                                                                                                                }(s, function(e, t) {
                                                                                                                    var r, n = 0,
                                                                                                                        i = null,
                                                                                                                        s = 0;
                                                                                                                    for (r = 0; r < t.length; r++) s += t[r].length;
                                                                                                                    switch (e) {
                                                                                                                        case "string":
                                                                                                                            return t.join("");
                                                                                                                        case "array":
                                                                                                                            return Array.prototype.concat.apply([], t);
                                                                                                                        case "uint8array":
                                                                                                                            for (i = new Uint8Array(s), r = 0; r < t.length; r++) i.set(t[r], n), n += t[r].length;
                                                                                                                            return i;
                                                                                                                        case "nodebuffer":
                                                                                                                            return Buffer.concat(t);
                                                                                                                        default:
                                                                                                                            throw new Error("concat : unsupported type '" + e + "'")
                                                                                                                    }
                                                                                                                }(i, n), a);
                                                                                                                t(e)
                                                                                                            } catch (e) {
                                                                                                                r(e)
                                                                                                            }
                                                                                                            n = []
                                                                                                        }).resume()
                                                                                                    });
                                                                                                    var o, u
                                                                                                },
                                                                                                on: function(e, t) {
                                                                                                    var r = this;
                                                                                                    return "data" === e ? this._worker.on(e, function(e) {
                                                                                                        t.call(r, e.data, e.meta)
                                                                                                    }) : this._worker.on(e, function() {
                                                                                                        h.delay(t, arguments, r)
                                                                                                    }), this
                                                                                                },
                                                                                                resume: function() {
                                                                                                    return h.delay(this._worker.resume, [], this._worker), this
                                                                                                },
                                                                                                pause: function() {
                                                                                                    return this._worker.pause(), this
                                                                                                },
                                                                                                toNodejsStream: function(e) {
                                                                                                    if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
                                                                                                    return new o(this, {
                                                                                                        objectMode: "nodebuffer" !== this._outputType
                                                                                                    }, e)
                                                                                                }
                                                                                            }, t.exports = u
                                                                                        }, {
                                                                                            "../base64": 1,
                                                                                            "../external": 6,
                                                                                            "../nodejs/NodejsStreamOutputAdapter": 13,
                                                                                            "../support": 30,
                                                                                            "../utils": 32,
                                                                                            "./ConvertWorker": 24,
                                                                                            "./GenericWorker": 28
                                                                                        }],
                                                                                        30: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            if (r.base64 = !0, r.array = !0, r.string = !0, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = !1;
                                                                                            else {
                                                                                                var n = new ArrayBuffer(0);
                                                                                                try {
                                                                                                    r.blob = 0 === new Blob([n], {
                                                                                                        type: "application/zip"
                                                                                                    }).size
                                                                                                } catch (e) {
                                                                                                    try {
                                                                                                        var i = new(self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                                                                                                        i.append(n), r.blob = 0 === i.getBlob("application/zip").size
                                                                                                    } catch (e) {
                                                                                                        r.blob = !1
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            try {
                                                                                                r.nodestream = !!e("readable-stream").Readable
                                                                                            } catch (e) {
                                                                                                r.nodestream = !1
                                                                                            }
                                                                                        }, {
                                                                                            "readable-stream": 16
                                                                                        }],
                                                                                        31: [function(e, t, s) {
                                                                                            "use strict";
                                                                                            for (var o = e("./utils"), u = e("./support"), r = e("./nodejsUtils"), n = e("./stream/GenericWorker"), h = new Array(256), i = 0; i < 256; i++) h[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;

                                                                                            function a() {
                                                                                                n.call(this, "utf-8 decode"), this.leftOver = null
                                                                                            }

                                                                                            function f() {
                                                                                                n.call(this, "utf-8 encode")
                                                                                            }
                                                                                            h[254] = h[254] = 1, s.utf8encode = function(e) {
                                                                                                return u.nodebuffer ? r.newBufferFrom(e, "utf-8") : function(e) {
                                                                                                    var t, r, n, i, s, a = e.length,
                                                                                                        o = 0;
                                                                                                    for (i = 0; i < a; i++) 55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
                                                                                                    for (t = u.uint8array ? new Uint8Array(o) : new Array(o), i = s = 0; s < o; i++) 55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), r < 128 ? t[s++] = r : (r < 2048 ? t[s++] = 192 | r >>> 6 : (r < 65536 ? t[s++] = 224 | r >>> 12 : (t[s++] = 240 | r >>> 18, t[s++] = 128 | r >>> 12 & 63), t[s++] = 128 | r >>> 6 & 63), t[s++] = 128 | 63 & r);
                                                                                                    return t
                                                                                                }(e)
                                                                                            }, s.utf8decode = function(e) {
                                                                                                return u.nodebuffer ? o.transformTo("nodebuffer", e).toString("utf-8") : function(e) {
                                                                                                    var t, r, n, i, s = e.length,
                                                                                                        a = new Array(2 * s);
                                                                                                    for (t = r = 0; t < s;)
                                                                                                        if ((n = e[t++]) < 128) a[r++] = n;
                                                                                                        else if (4 < (i = h[n])) a[r++] = 65533, t += i - 1;
                                                                                                    else {
                                                                                                        for (n &= 2 === i ? 31 : 3 === i ? 15 : 7; 1 < i && t < s;) n = n << 6 | 63 & e[t++], i--;
                                                                                                        1 < i ? a[r++] = 65533 : n < 65536 ? a[r++] = n : (n -= 65536, a[r++] = 55296 | n >> 10 & 1023, a[r++] = 56320 | 1023 & n)
                                                                                                    }
                                                                                                    return a.length !== r && (a.subarray ? a = a.subarray(0, r) : a.length = r), o.applyFromCharCode(a)
                                                                                                }(e = o.transformTo(u.uint8array ? "uint8array" : "array", e))
                                                                                            }, o.inherits(a, n), a.prototype.processChunk = function(e) {
                                                                                                var t = o.transformTo(u.uint8array ? "uint8array" : "array", e.data);
                                                                                                if (this.leftOver && this.leftOver.length) {
                                                                                                    if (u.uint8array) {
                                                                                                        var r = t;
                                                                                                        (t = new Uint8Array(r.length + this.leftOver.length)).set(this.leftOver, 0), t.set(r, this.leftOver.length)
                                                                                                    } else t = this.leftOver.concat(t);
                                                                                                    this.leftOver = null
                                                                                                }
                                                                                                var n = function(e, t) {
                                                                                                        var r;
                                                                                                        for ((t = t || e.length) > e.length && (t = e.length), r = t - 1; 0 <= r && 128 == (192 & e[r]);) r--;
                                                                                                        return r < 0 ? t : 0 === r ? t : r + h[e[r]] > t ? r : t
                                                                                                    }(t),
                                                                                                    i = t;
                                                                                                n !== t.length && (u.uint8array ? (i = t.subarray(0, n), this.leftOver = t.subarray(n, t.length)) : (i = t.slice(0, n), this.leftOver = t.slice(n, t.length))), this.push({
                                                                                                    data: s.utf8decode(i),
                                                                                                    meta: e.meta
                                                                                                })
                                                                                            }, a.prototype.flush = function() {
                                                                                                this.leftOver && this.leftOver.length && (this.push({
                                                                                                    data: s.utf8decode(this.leftOver),
                                                                                                    meta: {}
                                                                                                }), this.leftOver = null)
                                                                                            }, s.Utf8DecodeWorker = a, o.inherits(f, n), f.prototype.processChunk = function(e) {
                                                                                                this.push({
                                                                                                    data: s.utf8encode(e.data),
                                                                                                    meta: e.meta
                                                                                                })
                                                                                            }, s.Utf8EncodeWorker = f
                                                                                        }, {
                                                                                            "./nodejsUtils": 14,
                                                                                            "./stream/GenericWorker": 28,
                                                                                            "./support": 30,
                                                                                            "./utils": 32
                                                                                        }],
                                                                                        32: [function(e, t, o) {
                                                                                            "use strict";
                                                                                            var u = e("./support"),
                                                                                                h = e("./base64"),
                                                                                                r = e("./nodejsUtils"),
                                                                                                n = e("set-immediate-shim"),
                                                                                                f = e("./external");

                                                                                            function i(e) {
                                                                                                return e
                                                                                            }

                                                                                            function l(e, t) {
                                                                                                for (var r = 0; r < e.length; ++r) t[r] = 255 & e.charCodeAt(r);
                                                                                                return t
                                                                                            }
                                                                                            o.newBlob = function(t, r) {
                                                                                                o.checkSupport("blob");
                                                                                                try {
                                                                                                    return new Blob([t], {
                                                                                                        type: r
                                                                                                    })
                                                                                                } catch (e) {
                                                                                                    try {
                                                                                                        var n = new(self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                                                                                                        return n.append(t), n.getBlob(r)
                                                                                                    } catch (e) {
                                                                                                        throw new Error("Bug : can't construct the Blob.")
                                                                                                    }
                                                                                                }
                                                                                            };
                                                                                            var s = {
                                                                                                stringifyByChunk: function(e, t, r) {
                                                                                                    var n = [],
                                                                                                        i = 0,
                                                                                                        s = e.length;
                                                                                                    if (s <= r) return String.fromCharCode.apply(null, e);
                                                                                                    for (; i < s;) "array" === t || "nodebuffer" === t ? n.push(String.fromCharCode.apply(null, e.slice(i, Math.min(i + r, s)))) : n.push(String.fromCharCode.apply(null, e.subarray(i, Math.min(i + r, s)))), i += r;
                                                                                                    return n.join("")
                                                                                                },
                                                                                                stringifyByChar: function(e) {
                                                                                                    for (var t = "", r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                                                                                                    return t
                                                                                                },
                                                                                                applyCanBeUsed: {
                                                                                                    uint8array: function() {
                                                                                                        try {
                                                                                                            return u.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length
                                                                                                        } catch (e) {
                                                                                                            return !1
                                                                                                        }
                                                                                                    }(),
                                                                                                    nodebuffer: function() {
                                                                                                        try {
                                                                                                            return u.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length
                                                                                                        } catch (e) {
                                                                                                            return !1
                                                                                                        }
                                                                                                    }()
                                                                                                }
                                                                                            };

                                                                                            function a(e) {
                                                                                                var t = 65536,
                                                                                                    r = o.getTypeOf(e),
                                                                                                    n = !0;
                                                                                                if ("uint8array" === r ? n = s.applyCanBeUsed.uint8array : "nodebuffer" === r && (n = s.applyCanBeUsed.nodebuffer), n)
                                                                                                    for (; 1 < t;) try {
                                                                                                        return s.stringifyByChunk(e, r, t)
                                                                                                    } catch (e) {
                                                                                                        t = Math.floor(t / 2)
                                                                                                    }
                                                                                                return s.stringifyByChar(e)
                                                                                            }

                                                                                            function d(e, t) {
                                                                                                for (var r = 0; r < e.length; r++) t[r] = e[r];
                                                                                                return t
                                                                                            }
                                                                                            o.applyFromCharCode = a;
                                                                                            var c = {};
                                                                                            c.string = {
                                                                                                string: i,
                                                                                                array: function(e) {
                                                                                                    return l(e, new Array(e.length))
                                                                                                },
                                                                                                arraybuffer: function(e) {
                                                                                                    return c.string.uint8array(e).buffer
                                                                                                },
                                                                                                uint8array: function(e) {
                                                                                                    return l(e, new Uint8Array(e.length))
                                                                                                },
                                                                                                nodebuffer: function(e) {
                                                                                                    return l(e, r.allocBuffer(e.length))
                                                                                                }
                                                                                            }, c.array = {
                                                                                                string: a,
                                                                                                array: i,
                                                                                                arraybuffer: function(e) {
                                                                                                    return new Uint8Array(e).buffer
                                                                                                },
                                                                                                uint8array: function(e) {
                                                                                                    return new Uint8Array(e)
                                                                                                },
                                                                                                nodebuffer: function(e) {
                                                                                                    return r.newBufferFrom(e)
                                                                                                }
                                                                                            }, c.arraybuffer = {
                                                                                                string: function(e) {
                                                                                                    return a(new Uint8Array(e))
                                                                                                },
                                                                                                array: function(e) {
                                                                                                    return d(new Uint8Array(e), new Array(e.byteLength))
                                                                                                },
                                                                                                arraybuffer: i,
                                                                                                uint8array: function(e) {
                                                                                                    return new Uint8Array(e)
                                                                                                },
                                                                                                nodebuffer: function(e) {
                                                                                                    return r.newBufferFrom(new Uint8Array(e))
                                                                                                }
                                                                                            }, c.uint8array = {
                                                                                                string: a,
                                                                                                array: function(e) {
                                                                                                    return d(e, new Array(e.length))
                                                                                                },
                                                                                                arraybuffer: function(e) {
                                                                                                    return e.buffer
                                                                                                },
                                                                                                uint8array: i,
                                                                                                nodebuffer: function(e) {
                                                                                                    return r.newBufferFrom(e)
                                                                                                }
                                                                                            }, c.nodebuffer = {
                                                                                                string: a,
                                                                                                array: function(e) {
                                                                                                    return d(e, new Array(e.length))
                                                                                                },
                                                                                                arraybuffer: function(e) {
                                                                                                    return c.nodebuffer.uint8array(e).buffer
                                                                                                },
                                                                                                uint8array: function(e) {
                                                                                                    return d(e, new Uint8Array(e.length))
                                                                                                },
                                                                                                nodebuffer: i
                                                                                            }, o.transformTo = function(e, t) {
                                                                                                if (t = t || "", !e) return t;
                                                                                                o.checkSupport(e);
                                                                                                var r = o.getTypeOf(t);
                                                                                                return c[r][e](t)
                                                                                            }, o.getTypeOf = function(e) {
                                                                                                return "string" == typeof e ? "string" : "[object Array]" === Object.prototype.toString.call(e) ? "array" : u.nodebuffer && r.isBuffer(e) ? "nodebuffer" : u.uint8array && e instanceof Uint8Array ? "uint8array" : u.arraybuffer && e instanceof ArrayBuffer ? "arraybuffer" : void 0
                                                                                            }, o.checkSupport = function(e) {
                                                                                                if (!u[e.toLowerCase()]) throw new Error(e + " is not supported by this platform")
                                                                                            }, o.MAX_VALUE_16BITS = 65535, o.MAX_VALUE_32BITS = -1, o.pretty = function(e) {
                                                                                                var t, r, n = "";
                                                                                                for (r = 0; r < (e || "").length; r++) n += "\\x" + ((t = e.charCodeAt(r)) < 16 ? "0" : "") + t.toString(16).toUpperCase();
                                                                                                return n
                                                                                            }, o.delay = function(e, t, r) {
                                                                                                n(function() {
                                                                                                    e.apply(r || null, t || [])
                                                                                                })
                                                                                            }, o.inherits = function(e, t) {
                                                                                                function r() {}
                                                                                                r.prototype = t.prototype, e.prototype = new r
                                                                                            }, o.extend = function() {
                                                                                                var e, t, r = {};
                                                                                                for (e = 0; e < arguments.length; e++)
                                                                                                    for (t in arguments[e]) arguments[e].hasOwnProperty(t) && void 0 === r[t] && (r[t] = arguments[e][t]);
                                                                                                return r
                                                                                            }, o.prepareContent = function(n, e, i, s, a) {
                                                                                                return f.Promise.resolve(e).then(function(n) {
                                                                                                    return u.blob && (n instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n))) && "undefined" != typeof FileReader ? new f.Promise(function(t, r) {
                                                                                                        var e = new FileReader;
                                                                                                        e.onload = function(e) {
                                                                                                            t(e.target.result)
                                                                                                        }, e.onerror = function(e) {
                                                                                                            r(e.target.error)
                                                                                                        }, e.readAsArrayBuffer(n)
                                                                                                    }) : n
                                                                                                }).then(function(e) {
                                                                                                    var t, r = o.getTypeOf(e);
                                                                                                    return r ? ("arraybuffer" === r ? e = o.transformTo("uint8array", e) : "string" === r && (a ? e = h.decode(e) : i && !0 !== s && (e = l(t = e, u.uint8array ? new Uint8Array(t.length) : new Array(t.length)))), e) : f.Promise.reject(new Error("Can't read the data of '" + n + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))
                                                                                                })
                                                                                            }
                                                                                        }, {
                                                                                            "./base64": 1,
                                                                                            "./external": 6,
                                                                                            "./nodejsUtils": 14,
                                                                                            "./support": 30,
                                                                                            "set-immediate-shim": 54
                                                                                        }],
                                                                                        33: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("./reader/readerFor"),
                                                                                                i = e("./utils"),
                                                                                                s = e("./signature"),
                                                                                                a = e("./zipEntry"),
                                                                                                o = (e("./utf8"), e("./support"));

                                                                                            function u(e) {
                                                                                                this.files = [], this.loadOptions = e
                                                                                            }
                                                                                            u.prototype = {
                                                                                                checkSignature: function(e) {
                                                                                                    if (!this.reader.readAndCheckSignature(e)) {
                                                                                                        this.reader.index -= 4;
                                                                                                        var t = this.reader.readString(4);
                                                                                                        throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t) + ", expected " + i.pretty(e) + ")")
                                                                                                    }
                                                                                                },
                                                                                                isSignature: function(e, t) {
                                                                                                    var r = this.reader.index;
                                                                                                    this.reader.setIndex(e);
                                                                                                    var n = this.reader.readString(4) === t;
                                                                                                    return this.reader.setIndex(r), n
                                                                                                },
                                                                                                readBlockEndOfCentral: function() {
                                                                                                    this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
                                                                                                    var e = this.reader.readData(this.zipCommentLength),
                                                                                                        t = o.uint8array ? "uint8array" : "array",
                                                                                                        r = i.transformTo(t, e);
                                                                                                    this.zipComment = this.loadOptions.decodeFileName(r)
                                                                                                },
                                                                                                readBlockZip64EndOfCentral: function() {
                                                                                                    this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
                                                                                                    for (var e, t, r, n = this.zip64EndOfCentralSize - 44; 0 < n;) e = this.reader.readInt(2), t = this.reader.readInt(4), r = this.reader.readData(t), this.zip64ExtensibleData[e] = {
                                                                                                        id: e,
                                                                                                        length: t,
                                                                                                        value: r
                                                                                                    }
                                                                                                },
                                                                                                readBlockZip64EndOfCentralLocator: function() {
                                                                                                    if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported")
                                                                                                },
                                                                                                readLocalFiles: function() {
                                                                                                    var e, t;
                                                                                                    for (e = 0; e < this.files.length; e++) t = this.files[e], this.reader.setIndex(t.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t.readLocalPart(this.reader), t.handleUTF8(), t.processAttributes()
                                                                                                },
                                                                                                readCentralDir: function() {
                                                                                                    var e;
                                                                                                    for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e = new a({
                                                                                                        zip64: this.zip64
                                                                                                    }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e);
                                                                                                    if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length)
                                                                                                },
                                                                                                readEndOfCentral: function() {
                                                                                                    var e = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
                                                                                                    if (e < 0) throw this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
                                                                                                    this.reader.setIndex(e);
                                                                                                    var t = e;
                                                                                                    if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
                                                                                                        if (this.zip64 = !0, (e = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
                                                                                                        if (this.reader.setIndex(e), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                                                                                                        this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral()
                                                                                                    }
                                                                                                    var r = this.centralDirOffset + this.centralDirSize;
                                                                                                    this.zip64 && (r += 20, r += 12 + this.zip64EndOfCentralSize);
                                                                                                    var n = t - r;
                                                                                                    if (0 < n) this.isSignature(t, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n);
                                                                                                    else if (n < 0) throw new Error("Corrupted zip: missing " + Math.abs(n) + " bytes.")
                                                                                                },
                                                                                                prepareReader: function(e) {
                                                                                                    this.reader = n(e)
                                                                                                },
                                                                                                load: function(e) {
                                                                                                    this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles()
                                                                                                }
                                                                                            }, t.exports = u
                                                                                        }, {
                                                                                            "./reader/readerFor": 22,
                                                                                            "./signature": 23,
                                                                                            "./support": 30,
                                                                                            "./utf8": 31,
                                                                                            "./utils": 32,
                                                                                            "./zipEntry": 34
                                                                                        }],
                                                                                        34: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = e("./reader/readerFor"),
                                                                                                s = e("./utils"),
                                                                                                i = e("./compressedObject"),
                                                                                                a = e("./crc32"),
                                                                                                o = e("./utf8"),
                                                                                                u = e("./compressions"),
                                                                                                h = e("./support");

                                                                                            function f(e, t) {
                                                                                                this.options = e, this.loadOptions = t
                                                                                            }
                                                                                            f.prototype = {
                                                                                                isEncrypted: function() {
                                                                                                    return 1 == (1 & this.bitFlag)
                                                                                                },
                                                                                                useUTF8: function() {
                                                                                                    return 2048 == (2048 & this.bitFlag)
                                                                                                },
                                                                                                readLocalPart: function(e) {
                                                                                                    var t, r;
                                                                                                    if (e.skip(22), this.fileNameLength = e.readInt(2), r = e.readInt(2), this.fileName = e.readData(this.fileNameLength), e.skip(r), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
                                                                                                    if (null === (t = function(e) {
                                                                                                            for (var t in u)
                                                                                                                if (u.hasOwnProperty(t) && u[t].magic === e) return u[t];
                                                                                                            return null
                                                                                                        }(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
                                                                                                    this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t, e.readData(this.compressedSize))
                                                                                                },
                                                                                                readCentralPart: function(e) {
                                                                                                    this.versionMadeBy = e.readInt(2), e.skip(2), this.bitFlag = e.readInt(2), this.compressionMethod = e.readString(2), this.date = e.readDate(), this.crc32 = e.readInt(4), this.compressedSize = e.readInt(4), this.uncompressedSize = e.readInt(4);
                                                                                                    var t = e.readInt(2);
                                                                                                    if (this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), this.localHeaderOffset = e.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
                                                                                                    e.skip(t), this.readExtraFields(e), this.parseZIP64ExtraField(e), this.fileComment = e.readData(this.fileCommentLength)
                                                                                                },
                                                                                                processAttributes: function() {
                                                                                                    this.unixPermissions = null, this.dosPermissions = null;
                                                                                                    var e = this.versionMadeBy >> 8;
                                                                                                    this.dir = !!(16 & this.externalFileAttributes), 0 == e && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0)
                                                                                                },
                                                                                                parseZIP64ExtraField: function(e) {
                                                                                                    if (this.extraFields[1]) {
                                                                                                        var t = n(this.extraFields[1].value);
                                                                                                        this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = t.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = t.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = t.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = t.readInt(4))
                                                                                                    }
                                                                                                },
                                                                                                readExtraFields: function(e) {
                                                                                                    var t, r, n, i = e.index + this.extraFieldsLength;
                                                                                                    for (this.extraFields || (this.extraFields = {}); e.index + 4 < i;) t = e.readInt(2), r = e.readInt(2), n = e.readData(r), this.extraFields[t] = {
                                                                                                        id: t,
                                                                                                        length: r,
                                                                                                        value: n
                                                                                                    };
                                                                                                    e.setIndex(i)
                                                                                                },
                                                                                                handleUTF8: function() {
                                                                                                    var e = h.uint8array ? "uint8array" : "array";
                                                                                                    if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
                                                                                                    else {
                                                                                                        var t = this.findExtraFieldUnicodePath();
                                                                                                        if (null !== t) this.fileNameStr = t;
                                                                                                        else {
                                                                                                            var r = s.transformTo(e, this.fileName);
                                                                                                            this.fileNameStr = this.loadOptions.decodeFileName(r)
                                                                                                        }
                                                                                                        var n = this.findExtraFieldUnicodeComment();
                                                                                                        if (null !== n) this.fileCommentStr = n;
                                                                                                        else {
                                                                                                            var i = s.transformTo(e, this.fileComment);
                                                                                                            this.fileCommentStr = this.loadOptions.decodeFileName(i)
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                findExtraFieldUnicodePath: function() {
                                                                                                    var e = this.extraFields[28789];
                                                                                                    if (e) {
                                                                                                        var t = n(e.value);
                                                                                                        return 1 !== t.readInt(1) ? null : a(this.fileName) !== t.readInt(4) ? null : o.utf8decode(t.readData(e.length - 5))
                                                                                                    }
                                                                                                    return null
                                                                                                },
                                                                                                findExtraFieldUnicodeComment: function() {
                                                                                                    var e = this.extraFields[25461];
                                                                                                    if (e) {
                                                                                                        var t = n(e.value);
                                                                                                        return 1 !== t.readInt(1) ? null : a(this.fileComment) !== t.readInt(4) ? null : o.utf8decode(t.readData(e.length - 5))
                                                                                                    }
                                                                                                    return null
                                                                                                }
                                                                                            }, t.exports = f
                                                                                        }, {
                                                                                            "./compressedObject": 2,
                                                                                            "./compressions": 3,
                                                                                            "./crc32": 4,
                                                                                            "./reader/readerFor": 22,
                                                                                            "./support": 30,
                                                                                            "./utf8": 31,
                                                                                            "./utils": 32
                                                                                        }],
                                                                                        35: [function(e, t, r) {
                                                                                            "use strict";

                                                                                            function n(e, t, r) {
                                                                                                this.name = e, this.dir = r.dir, this.date = r.date, this.comment = r.comment, this.unixPermissions = r.unixPermissions, this.dosPermissions = r.dosPermissions, this._data = t, this._dataBinary = r.binary, this.options = {
                                                                                                    compression: r.compression,
                                                                                                    compressionOptions: r.compressionOptions
                                                                                                }
                                                                                            }
                                                                                            var s = e("./stream/StreamHelper"),
                                                                                                i = e("./stream/DataWorker"),
                                                                                                a = e("./utf8"),
                                                                                                o = e("./compressedObject"),
                                                                                                u = e("./stream/GenericWorker");
                                                                                            n.prototype = {
                                                                                                internalStream: function(e) {
                                                                                                    var t = null,
                                                                                                        r = "string";
                                                                                                    try {
                                                                                                        if (!e) throw new Error("No output type specified.");
                                                                                                        var n = "string" === (r = e.toLowerCase()) || "text" === r;
                                                                                                        "binarystring" !== r && "text" !== r || (r = "string"), t = this._decompressWorker();
                                                                                                        var i = !this._dataBinary;
                                                                                                        i && !n && (t = t.pipe(new a.Utf8EncodeWorker)), !i && n && (t = t.pipe(new a.Utf8DecodeWorker))
                                                                                                    } catch (e) {
                                                                                                        (t = new u("error")).error(e)
                                                                                                    }
                                                                                                    return new s(t, r, "")
                                                                                                },
                                                                                                async: function(e, t) {
                                                                                                    return this.internalStream(e).accumulate(t)
                                                                                                },
                                                                                                nodeStream: function(e, t) {
                                                                                                    return this.internalStream(e || "nodebuffer").toNodejsStream(t)
                                                                                                },
                                                                                                _compressWorker: function(e, t) {
                                                                                                    if (this._data instanceof o && this._data.compression.magic === e.magic) return this._data.getCompressedWorker();
                                                                                                    var r = this._decompressWorker();
                                                                                                    return this._dataBinary || (r = r.pipe(new a.Utf8EncodeWorker)), o.createWorkerFrom(r, e, t)
                                                                                                },
                                                                                                _decompressWorker: function() {
                                                                                                    return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof u ? this._data : new i(this._data)
                                                                                                }
                                                                                            };
                                                                                            for (var h = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], f = function() {
                                                                                                    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                                                                                                }, l = 0; l < h.length; l++) n.prototype[h[l]] = f;
                                                                                            t.exports = n
                                                                                        }, {
                                                                                            "./compressedObject": 2,
                                                                                            "./stream/DataWorker": 27,
                                                                                            "./stream/GenericWorker": 28,
                                                                                            "./stream/StreamHelper": 29,
                                                                                            "./utf8": 31
                                                                                        }],
                                                                                        36: [function(e, f, t) {
                                                                                            (function(t) {
                                                                                                "use strict";
                                                                                                var r, n, e = t.MutationObserver || t.WebKitMutationObserver;
                                                                                                if (e) {
                                                                                                    var i = 0,
                                                                                                        s = new e(h),
                                                                                                        a = t.document.createTextNode("");
                                                                                                    s.observe(a, {
                                                                                                        characterData: !0
                                                                                                    }), r = function() {
                                                                                                        a.data = i = ++i % 2
                                                                                                    }
                                                                                                } else if (t.setImmediate || void 0 === t.MessageChannel) r = "document" in t && "onreadystatechange" in t.document.createElement("script") ? function() {
                                                                                                    var e = t.document.createElement("script");
                                                                                                    e.onreadystatechange = function() {
                                                                                                        h(), e.onreadystatechange = null, e.parentNode.removeChild(e), e = null
                                                                                                    }, t.document.documentElement.appendChild(e)
                                                                                                } : function() {
                                                                                                    setTimeout(h, 0)
                                                                                                };
                                                                                                else {
                                                                                                    var o = new t.MessageChannel;
                                                                                                    o.port1.onmessage = h, r = function() {
                                                                                                        o.port2.postMessage(0)
                                                                                                    }
                                                                                                }
                                                                                                var u = [];

                                                                                                function h() {
                                                                                                    var e, t;
                                                                                                    n = !0;
                                                                                                    for (var r = u.length; r;) {
                                                                                                        for (t = u, u = [], e = -1; ++e < r;) t[e]();
                                                                                                        r = u.length
                                                                                                    }
                                                                                                    n = !1
                                                                                                }
                                                                                                f.exports = function(e) {
                                                                                                    1 !== u.push(e) || n || r()
                                                                                                }
                                                                                            }).call(this, void 0 !== r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                                                                                        }, {}],
                                                                                        37: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var i = e("immediate");

                                                                                            function h() {}
                                                                                            var f = {},
                                                                                                s = ["REJECTED"],
                                                                                                a = ["FULFILLED"],
                                                                                                n = ["PENDING"];

                                                                                            function o(e) {
                                                                                                if ("function" != typeof e) throw new TypeError("resolver must be a function");
                                                                                                this.state = n, this.queue = [], this.outcome = void 0, e !== h && c(this, e)
                                                                                            }

                                                                                            function u(e, t, r) {
                                                                                                this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r && (this.onRejected = r, this.callRejected = this.otherCallRejected)
                                                                                            }

                                                                                            function l(t, r, n) {
                                                                                                i(function() {
                                                                                                    var e;
                                                                                                    try {
                                                                                                        e = r(n)
                                                                                                    } catch (e) {
                                                                                                        return f.reject(t, e)
                                                                                                    }
                                                                                                    e === t ? f.reject(t, new TypeError("Cannot resolve promise with itself")) : f.resolve(t, e)
                                                                                                })
                                                                                            }

                                                                                            function d(e) {
                                                                                                var t = e && e.then;
                                                                                                if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t) return function() {
                                                                                                    t.apply(e, arguments)
                                                                                                }
                                                                                            }

                                                                                            function c(t, e) {
                                                                                                var r = !1;

                                                                                                function n(e) {
                                                                                                    r || (r = !0, f.reject(t, e))
                                                                                                }

                                                                                                function i(e) {
                                                                                                    r || (r = !0, f.resolve(t, e))
                                                                                                }
                                                                                                var s = p(function() {
                                                                                                    e(i, n)
                                                                                                });
                                                                                                "error" === s.status && n(s.value)
                                                                                            }

                                                                                            function p(e, t) {
                                                                                                var r = {};
                                                                                                try {
                                                                                                    r.value = e(t), r.status = "success"
                                                                                                } catch (e) {
                                                                                                    r.status = "error", r.value = e
                                                                                                }
                                                                                                return r
                                                                                            }(t.exports = o).prototype.finally = function(t) {
                                                                                                if ("function" != typeof t) return this;
                                                                                                var r = this.constructor;
                                                                                                return this.then(function(e) {
                                                                                                    return r.resolve(t()).then(function() {
                                                                                                        return e
                                                                                                    })
                                                                                                }, function(e) {
                                                                                                    return r.resolve(t()).then(function() {
                                                                                                        throw e
                                                                                                    })
                                                                                                })
                                                                                            }, o.prototype.catch = function(e) {
                                                                                                return this.then(null, e)
                                                                                            }, o.prototype.then = function(e, t) {
                                                                                                if ("function" != typeof e && this.state === a || "function" != typeof t && this.state === s) return this;
                                                                                                var r = new this.constructor(h);
                                                                                                return this.state !== n ? l(r, this.state === a ? e : t, this.outcome) : this.queue.push(new u(r, e, t)), r
                                                                                            }, u.prototype.callFulfilled = function(e) {
                                                                                                f.resolve(this.promise, e)
                                                                                            }, u.prototype.otherCallFulfilled = function(e) {
                                                                                                l(this.promise, this.onFulfilled, e)
                                                                                            }, u.prototype.callRejected = function(e) {
                                                                                                f.reject(this.promise, e)
                                                                                            }, u.prototype.otherCallRejected = function(e) {
                                                                                                l(this.promise, this.onRejected, e)
                                                                                            }, f.resolve = function(e, t) {
                                                                                                var r = p(d, t);
                                                                                                if ("error" === r.status) return f.reject(e, r.value);
                                                                                                var n = r.value;
                                                                                                if (n) c(e, n);
                                                                                                else {
                                                                                                    e.state = a, e.outcome = t;
                                                                                                    for (var i = -1, s = e.queue.length; ++i < s;) e.queue[i].callFulfilled(t)
                                                                                                }
                                                                                                return e
                                                                                            }, f.reject = function(e, t) {
                                                                                                e.state = s, e.outcome = t;
                                                                                                for (var r = -1, n = e.queue.length; ++r < n;) e.queue[r].callRejected(t);
                                                                                                return e
                                                                                            }, o.resolve = function(e) {
                                                                                                return e instanceof this ? e : f.resolve(new this(h), e)
                                                                                            }, o.reject = function(e) {
                                                                                                var t = new this(h);
                                                                                                return f.reject(t, e)
                                                                                            }, o.all = function(e) {
                                                                                                var r = this;
                                                                                                if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                                                                                                var n = e.length,
                                                                                                    i = !1;
                                                                                                if (!n) return this.resolve([]);
                                                                                                for (var s = new Array(n), a = 0, t = -1, o = new this(h); ++t < n;) u(e[t], t);
                                                                                                return o;

                                                                                                function u(e, t) {
                                                                                                    r.resolve(e).then(function(e) {
                                                                                                        s[t] = e, ++a !== n || i || (i = !0, f.resolve(o, s))
                                                                                                    }, function(e) {
                                                                                                        i || (i = !0, f.reject(o, e))
                                                                                                    })
                                                                                                }
                                                                                            }, o.race = function(e) {
                                                                                                if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                                                                                                var t = e.length,
                                                                                                    r = !1;
                                                                                                if (!t) return this.resolve([]);
                                                                                                for (var n, i = -1, s = new this(h); ++i < t;) n = e[i], this.resolve(n).then(function(e) {
                                                                                                    r || (r = !0, f.resolve(s, e))
                                                                                                }, function(e) {
                                                                                                    r || (r = !0, f.reject(s, e))
                                                                                                });
                                                                                                return s
                                                                                            }
                                                                                        }, {
                                                                                            immediate: 36
                                                                                        }],
                                                                                        38: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = {};
                                                                                            (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = n
                                                                                        }, {
                                                                                            "./lib/deflate": 39,
                                                                                            "./lib/inflate": 40,
                                                                                            "./lib/utils/common": 41,
                                                                                            "./lib/zlib/constants": 44
                                                                                        }],
                                                                                        39: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var a = e("./zlib/deflate"),
                                                                                                o = e("./utils/common"),
                                                                                                u = e("./utils/strings"),
                                                                                                i = e("./zlib/messages"),
                                                                                                s = e("./zlib/zstream"),
                                                                                                h = Object.prototype.toString,
                                                                                                f = 0,
                                                                                                l = -1,
                                                                                                d = 0,
                                                                                                c = 8;

                                                                                            function p(e) {
                                                                                                if (!(this instanceof p)) return new p(e);
                                                                                                this.options = o.assign({
                                                                                                    level: l,
                                                                                                    method: c,
                                                                                                    chunkSize: 16384,
                                                                                                    windowBits: 15,
                                                                                                    memLevel: 8,
                                                                                                    strategy: d,
                                                                                                    to: ""
                                                                                                }, e || {});
                                                                                                var t = this.options;
                                                                                                t.raw && 0 < t.windowBits ? t.windowBits = -t.windowBits : t.gzip && 0 < t.windowBits && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s, this.strm.avail_out = 0;
                                                                                                var r = a.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
                                                                                                if (r !== f) throw new Error(i[r]);
                                                                                                if (t.header && a.deflateSetHeader(this.strm, t.header), t.dictionary) {
                                                                                                    var n;
                                                                                                    if (n = "string" == typeof t.dictionary ? u.string2buf(t.dictionary) : "[object ArrayBuffer]" === h.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, (r = a.deflateSetDictionary(this.strm, n)) !== f) throw new Error(i[r]);
                                                                                                    this._dict_set = !0
                                                                                                }
                                                                                            }

                                                                                            function n(e, t) {
                                                                                                var r = new p(t);
                                                                                                if (r.push(e, !0), r.err) throw r.msg || i[r.err];
                                                                                                return r.result
                                                                                            }
                                                                                            p.prototype.push = function(e, t) {
                                                                                                var r, n, i = this.strm,
                                                                                                    s = this.options.chunkSize;
                                                                                                if (this.ended) return !1;
                                                                                                n = t === ~~t ? t : !0 === t ? 4 : 0, "string" == typeof e ? i.input = u.string2buf(e) : "[object ArrayBuffer]" === h.call(e) ? i.input = new Uint8Array(e) : i.input = e, i.next_in = 0, i.avail_in = i.input.length;
                                                                                                do {
                                                                                                    if (0 === i.avail_out && (i.output = new o.Buf8(s), i.next_out = 0, i.avail_out = s), 1 !== (r = a.deflate(i, n)) && r !== f) return this.onEnd(r), !(this.ended = !0);
                                                                                                    0 !== i.avail_out && (0 !== i.avail_in || 4 !== n && 2 !== n) || ("string" === this.options.to ? this.onData(u.buf2binstring(o.shrinkBuf(i.output, i.next_out))) : this.onData(o.shrinkBuf(i.output, i.next_out)))
                                                                                                } while ((0 < i.avail_in || 0 === i.avail_out) && 1 !== r);
                                                                                                return 4 === n ? (r = a.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === f) : 2 !== n || (this.onEnd(f), !(i.avail_out = 0))
                                                                                            }, p.prototype.onData = function(e) {
                                                                                                this.chunks.push(e)
                                                                                            }, p.prototype.onEnd = function(e) {
                                                                                                e === f && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
                                                                                            }, r.Deflate = p, r.deflate = n, r.deflateRaw = function(e, t) {
                                                                                                return (t = t || {}).raw = !0, n(e, t)
                                                                                            }, r.gzip = function(e, t) {
                                                                                                return (t = t || {}).gzip = !0, n(e, t)
                                                                                            }
                                                                                        }, {
                                                                                            "./utils/common": 41,
                                                                                            "./utils/strings": 42,
                                                                                            "./zlib/deflate": 46,
                                                                                            "./zlib/messages": 51,
                                                                                            "./zlib/zstream": 53
                                                                                        }],
                                                                                        40: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var d = e("./zlib/inflate"),
                                                                                                c = e("./utils/common"),
                                                                                                p = e("./utils/strings"),
                                                                                                m = e("./zlib/constants"),
                                                                                                n = e("./zlib/messages"),
                                                                                                i = e("./zlib/zstream"),
                                                                                                s = e("./zlib/gzheader"),
                                                                                                _ = Object.prototype.toString;

                                                                                            function a(e) {
                                                                                                if (!(this instanceof a)) return new a(e);
                                                                                                this.options = c.assign({
                                                                                                    chunkSize: 16384,
                                                                                                    windowBits: 0,
                                                                                                    to: ""
                                                                                                }, e || {});
                                                                                                var t = this.options;
                                                                                                t.raw && 0 <= t.windowBits && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(0 <= t.windowBits && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), 15 < t.windowBits && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new i, this.strm.avail_out = 0;
                                                                                                var r = d.inflateInit2(this.strm, t.windowBits);
                                                                                                if (r !== m.Z_OK) throw new Error(n[r]);
                                                                                                this.header = new s, d.inflateGetHeader(this.strm, this.header)
                                                                                            }

                                                                                            function o(e, t) {
                                                                                                var r = new a(t);
                                                                                                if (r.push(e, !0), r.err) throw r.msg || n[r.err];
                                                                                                return r.result
                                                                                            }
                                                                                            a.prototype.push = function(e, t) {
                                                                                                var r, n, i, s, a, o, u = this.strm,
                                                                                                    h = this.options.chunkSize,
                                                                                                    f = this.options.dictionary,
                                                                                                    l = !1;
                                                                                                if (this.ended) return !1;
                                                                                                n = t === ~~t ? t : !0 === t ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof e ? u.input = p.binstring2buf(e) : "[object ArrayBuffer]" === _.call(e) ? u.input = new Uint8Array(e) : u.input = e, u.next_in = 0, u.avail_in = u.input.length;
                                                                                                do {
                                                                                                    if (0 === u.avail_out && (u.output = new c.Buf8(h), u.next_out = 0, u.avail_out = h), (r = d.inflate(u, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && f && (o = "string" == typeof f ? p.string2buf(f) : "[object ArrayBuffer]" === _.call(f) ? new Uint8Array(f) : f, r = d.inflateSetDictionary(this.strm, o)), r === m.Z_BUF_ERROR && !0 === l && (r = m.Z_OK, l = !1), r !== m.Z_STREAM_END && r !== m.Z_OK) return this.onEnd(r), !(this.ended = !0);
                                                                                                    u.next_out && (0 !== u.avail_out && r !== m.Z_STREAM_END && (0 !== u.avail_in || n !== m.Z_FINISH && n !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i = p.utf8border(u.output, u.next_out), s = u.next_out - i, a = p.buf2string(u.output, i), u.next_out = s, u.avail_out = h - s, s && c.arraySet(u.output, u.output, i, s, 0), this.onData(a)) : this.onData(c.shrinkBuf(u.output, u.next_out)))), 0 === u.avail_in && 0 === u.avail_out && (l = !0)
                                                                                                } while ((0 < u.avail_in || 0 === u.avail_out) && r !== m.Z_STREAM_END);
                                                                                                return r === m.Z_STREAM_END && (n = m.Z_FINISH), n === m.Z_FINISH ? (r = d.inflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === m.Z_OK) : n !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(u.avail_out = 0))
                                                                                            }, a.prototype.onData = function(e) {
                                                                                                this.chunks.push(e)
                                                                                            }, a.prototype.onEnd = function(e) {
                                                                                                e === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = c.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
                                                                                            }, r.Inflate = a, r.inflate = o, r.inflateRaw = function(e, t) {
                                                                                                return (t = t || {}).raw = !0, o(e, t)
                                                                                            }, r.ungzip = o
                                                                                        }, {
                                                                                            "./utils/common": 41,
                                                                                            "./utils/strings": 42,
                                                                                            "./zlib/constants": 44,
                                                                                            "./zlib/gzheader": 47,
                                                                                            "./zlib/inflate": 49,
                                                                                            "./zlib/messages": 51,
                                                                                            "./zlib/zstream": 53
                                                                                        }],
                                                                                        41: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
                                                                                            r.assign = function(e) {
                                                                                                for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
                                                                                                    var r = t.shift();
                                                                                                    if (r) {
                                                                                                        if ("object" != typeof r) throw new TypeError(r + "must be non-object");
                                                                                                        for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n])
                                                                                                    }
                                                                                                }
                                                                                                return e
                                                                                            }, r.shrinkBuf = function(e, t) {
                                                                                                return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e)
                                                                                            };
                                                                                            var i = {
                                                                                                    arraySet: function(e, t, r, n, i) {
                                                                                                        if (t.subarray && e.subarray) e.set(t.subarray(r, r + n), i);
                                                                                                        else
                                                                                                            for (var s = 0; s < n; s++) e[i + s] = t[r + s]
                                                                                                    },
                                                                                                    flattenChunks: function(e) {
                                                                                                        var t, r, n, i, s, a;
                                                                                                        for (t = n = 0, r = e.length; t < r; t++) n += e[t].length;
                                                                                                        for (a = new Uint8Array(n), t = i = 0, r = e.length; t < r; t++) s = e[t], a.set(s, i), i += s.length;
                                                                                                        return a
                                                                                                    }
                                                                                                },
                                                                                                s = {
                                                                                                    arraySet: function(e, t, r, n, i) {
                                                                                                        for (var s = 0; s < n; s++) e[i + s] = t[r + s]
                                                                                                    },
                                                                                                    flattenChunks: function(e) {
                                                                                                        return [].concat.apply([], e)
                                                                                                    }
                                                                                                };
                                                                                            r.setTyped = function(e) {
                                                                                                e ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, i)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s))
                                                                                            }, r.setTyped(n)
                                                                                        }, {}],
                                                                                        42: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var u = e("./common"),
                                                                                                i = !0,
                                                                                                s = !0;
                                                                                            try {
                                                                                                String.fromCharCode.apply(null, [0])
                                                                                            } catch (e) {
                                                                                                i = !1
                                                                                            }
                                                                                            try {
                                                                                                String.fromCharCode.apply(null, new Uint8Array(1))
                                                                                            } catch (e) {
                                                                                                s = !1
                                                                                            }
                                                                                            for (var h = new u.Buf8(256), n = 0; n < 256; n++) h[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;

                                                                                            function f(e, t) {
                                                                                                if (t < 65537 && (e.subarray && s || !e.subarray && i)) return String.fromCharCode.apply(null, u.shrinkBuf(e, t));
                                                                                                for (var r = "", n = 0; n < t; n++) r += String.fromCharCode(e[n]);
                                                                                                return r
                                                                                            }
                                                                                            h[254] = h[254] = 1, r.string2buf = function(e) {
                                                                                                var t, r, n, i, s, a = e.length,
                                                                                                    o = 0;
                                                                                                for (i = 0; i < a; i++) 55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
                                                                                                for (t = new u.Buf8(o), i = s = 0; s < o; i++) 55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), r < 128 ? t[s++] = r : (r < 2048 ? t[s++] = 192 | r >>> 6 : (r < 65536 ? t[s++] = 224 | r >>> 12 : (t[s++] = 240 | r >>> 18, t[s++] = 128 | r >>> 12 & 63), t[s++] = 128 | r >>> 6 & 63), t[s++] = 128 | 63 & r);
                                                                                                return t
                                                                                            }, r.buf2binstring = function(e) {
                                                                                                return f(e, e.length)
                                                                                            }, r.binstring2buf = function(e) {
                                                                                                for (var t = new u.Buf8(e.length), r = 0, n = t.length; r < n; r++) t[r] = e.charCodeAt(r);
                                                                                                return t
                                                                                            }, r.buf2string = function(e, t) {
                                                                                                var r, n, i, s, a = t || e.length,
                                                                                                    o = new Array(2 * a);
                                                                                                for (r = n = 0; r < a;)
                                                                                                    if ((i = e[r++]) < 128) o[n++] = i;
                                                                                                    else if (4 < (s = h[i])) o[n++] = 65533, r += s - 1;
                                                                                                else {
                                                                                                    for (i &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && r < a;) i = i << 6 | 63 & e[r++], s--;
                                                                                                    1 < s ? o[n++] = 65533 : i < 65536 ? o[n++] = i : (i -= 65536, o[n++] = 55296 | i >> 10 & 1023, o[n++] = 56320 | 1023 & i)
                                                                                                }
                                                                                                return f(o, n)
                                                                                            }, r.utf8border = function(e, t) {
                                                                                                var r;
                                                                                                for ((t = t || e.length) > e.length && (t = e.length), r = t - 1; 0 <= r && 128 == (192 & e[r]);) r--;
                                                                                                return r < 0 ? t : 0 === r ? t : r + h[e[r]] > t ? r : t
                                                                                            }
                                                                                        }, {
                                                                                            "./common": 41
                                                                                        }],
                                                                                        43: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            t.exports = function(e, t, r, n) {
                                                                                                for (var i = 65535 & e | 0, s = e >>> 16 & 65535 | 0, a = 0; 0 !== r;) {
                                                                                                    for (r -= a = 2e3 < r ? 2e3 : r; s = s + (i = i + t[n++] | 0) | 0, --a;);
                                                                                                    i %= 65521, s %= 65521
                                                                                                }
                                                                                                return i | s << 16 | 0
                                                                                            }
                                                                                        }, {}],
                                                                                        44: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            t.exports = {
                                                                                                Z_NO_FLUSH: 0,
                                                                                                Z_PARTIAL_FLUSH: 1,
                                                                                                Z_SYNC_FLUSH: 2,
                                                                                                Z_FULL_FLUSH: 3,
                                                                                                Z_FINISH: 4,
                                                                                                Z_BLOCK: 5,
                                                                                                Z_TREES: 6,
                                                                                                Z_OK: 0,
                                                                                                Z_STREAM_END: 1,
                                                                                                Z_NEED_DICT: 2,
                                                                                                Z_ERRNO: -1,
                                                                                                Z_STREAM_ERROR: -2,
                                                                                                Z_DATA_ERROR: -3,
                                                                                                Z_BUF_ERROR: -5,
                                                                                                Z_NO_COMPRESSION: 0,
                                                                                                Z_BEST_SPEED: 1,
                                                                                                Z_BEST_COMPRESSION: 9,
                                                                                                Z_DEFAULT_COMPRESSION: -1,
                                                                                                Z_FILTERED: 1,
                                                                                                Z_HUFFMAN_ONLY: 2,
                                                                                                Z_RLE: 3,
                                                                                                Z_FIXED: 4,
                                                                                                Z_DEFAULT_STRATEGY: 0,
                                                                                                Z_BINARY: 0,
                                                                                                Z_TEXT: 1,
                                                                                                Z_UNKNOWN: 2,
                                                                                                Z_DEFLATED: 8
                                                                                            }
                                                                                        }, {}],
                                                                                        45: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var o = function() {
                                                                                                for (var e, t = [], r = 0; r < 256; r++) {
                                                                                                    e = r;
                                                                                                    for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                                                                                                    t[r] = e
                                                                                                }
                                                                                                return t
                                                                                            }();
                                                                                            t.exports = function(e, t, r, n) {
                                                                                                var i = o,
                                                                                                    s = n + r;
                                                                                                e ^= -1;
                                                                                                for (var a = n; a < s; a++) e = e >>> 8 ^ i[255 & (e ^ t[a])];
                                                                                                return -1 ^ e
                                                                                            }
                                                                                        }, {}],
                                                                                        46: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var u, d = e("../utils/common"),
                                                                                                h = e("./trees"),
                                                                                                c = e("./adler32"),
                                                                                                p = e("./crc32"),
                                                                                                n = e("./messages"),
                                                                                                f = 0,
                                                                                                l = 0,
                                                                                                m = -2,
                                                                                                i = 2,
                                                                                                _ = 8,
                                                                                                s = 286,
                                                                                                a = 30,
                                                                                                o = 19,
                                                                                                g = 2 * s + 1,
                                                                                                v = 15,
                                                                                                b = 3,
                                                                                                w = 258,
                                                                                                y = w + b + 1,
                                                                                                k = 42,
                                                                                                x = 113;

                                                                                            function S(e, t) {
                                                                                                return e.msg = n[t], t
                                                                                            }

                                                                                            function z(e) {
                                                                                                return (e << 1) - (4 < e ? 9 : 0)
                                                                                            }

                                                                                            function E(e) {
                                                                                                for (var t = e.length; 0 <= --t;) e[t] = 0
                                                                                            }

                                                                                            function C(e) {
                                                                                                var t = e.state,
                                                                                                    r = t.pending;
                                                                                                r > e.avail_out && (r = e.avail_out), 0 !== r && (d.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out), e.next_out += r, t.pending_out += r, e.total_out += r, e.avail_out -= r, t.pending -= r, 0 === t.pending && (t.pending_out = 0))
                                                                                            }

                                                                                            function A(e, t) {
                                                                                                h._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, C(e.strm)
                                                                                            }

                                                                                            function I(e, t) {
                                                                                                e.pending_buf[e.pending++] = t
                                                                                            }

                                                                                            function O(e, t) {
                                                                                                e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t
                                                                                            }

                                                                                            function B(e, t) {
                                                                                                var r, n, i = e.max_chain_length,
                                                                                                    s = e.strstart,
                                                                                                    a = e.prev_length,
                                                                                                    o = e.nice_match,
                                                                                                    u = e.strstart > e.w_size - y ? e.strstart - (e.w_size - y) : 0,
                                                                                                    h = e.window,
                                                                                                    f = e.w_mask,
                                                                                                    l = e.prev,
                                                                                                    d = e.strstart + w,
                                                                                                    c = h[s + a - 1],
                                                                                                    p = h[s + a];
                                                                                                e.prev_length >= e.good_match && (i >>= 2), o > e.lookahead && (o = e.lookahead);
                                                                                                do {
                                                                                                    if (h[(r = t) + a] === p && h[r + a - 1] === c && h[r] === h[s] && h[++r] === h[s + 1]) {
                                                                                                        s += 2, r++;
                                                                                                        do {} while (h[++s] === h[++r] && h[++s] === h[++r] && h[++s] === h[++r] && h[++s] === h[++r] && h[++s] === h[++r] && h[++s] === h[++r] && h[++s] === h[++r] && h[++s] === h[++r] && s < d);
                                                                                                        if (n = w - (d - s), s = d - w, a < n) {
                                                                                                            if (e.match_start = t, o <= (a = n)) break;
                                                                                                            c = h[s + a - 1], p = h[s + a]
                                                                                                        }
                                                                                                    }
                                                                                                } while ((t = l[t & f]) > u && 0 != --i);
                                                                                                return a <= e.lookahead ? a : e.lookahead
                                                                                            }

                                                                                            function T(e) {
                                                                                                var t, r, n, i, s, a, o, u, h, f, l = e.w_size;
                                                                                                do {
                                                                                                    if (i = e.window_size - e.lookahead - e.strstart, e.strstart >= l + (l - y)) {
                                                                                                        for (d.arraySet(e.window, e.window, l, l, 0), e.match_start -= l, e.strstart -= l, e.block_start -= l, t = r = e.hash_size; n = e.head[--t], e.head[t] = l <= n ? n - l : 0, --r;);
                                                                                                        for (t = r = l; n = e.prev[--t], e.prev[t] = l <= n ? n - l : 0, --r;);
                                                                                                        i += l
                                                                                                    }
                                                                                                    if (0 === e.strm.avail_in) break;
                                                                                                    if (a = e.strm, o = e.window, u = e.strstart + e.lookahead, f = void 0, (h = i) < (f = a.avail_in) && (f = h), r = 0 === f ? 0 : (a.avail_in -= f, d.arraySet(o, a.input, a.next_in, f, u), 1 === a.state.wrap ? a.adler = c(a.adler, o, f, u) : 2 === a.state.wrap && (a.adler = p(a.adler, o, f, u)), a.next_in += f, a.total_in += f, f), e.lookahead += r, e.lookahead + e.insert >= b)
                                                                                                        for (s = e.strstart - e.insert, e.ins_h = e.window[s], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + b - 1]) & e.hash_mask, e.prev[s & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = s, s++, e.insert--, !(e.lookahead + e.insert < b)););
                                                                                                } while (e.lookahead < y && 0 !== e.strm.avail_in)
                                                                                            }

                                                                                            function R(e, t) {
                                                                                                for (var r, n;;) {
                                                                                                    if (e.lookahead < y) {
                                                                                                        if (T(e), e.lookahead < y && t === f) return 1;
                                                                                                        if (0 === e.lookahead) break
                                                                                                    }
                                                                                                    if (r = 0, e.lookahead >= b && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + b - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== r && e.strstart - r <= e.w_size - y && (e.match_length = B(e, r)), e.match_length >= b)
                                                                                                        if (n = h._tr_tally(e, e.strstart - e.match_start, e.match_length - b), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= b) {
                                                                                                            for (e.match_length--; e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + b - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, 0 != --e.match_length;);
                                                                                                            e.strstart++
                                                                                                        } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
                                                                                                    else n = h._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
                                                                                                    if (n && (A(e, !1), 0 === e.strm.avail_out)) return 1
                                                                                                }
                                                                                                return e.insert = e.strstart < b - 1 ? e.strstart : b - 1, 4 === t ? (A(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (A(e, !1), 0 === e.strm.avail_out) ? 1 : 2
                                                                                            }

                                                                                            function D(e, t) {
                                                                                                for (var r, n, i;;) {
                                                                                                    if (e.lookahead < y) {
                                                                                                        if (T(e), e.lookahead < y && t === f) return 1;
                                                                                                        if (0 === e.lookahead) break
                                                                                                    }
                                                                                                    if (r = 0, e.lookahead >= b && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + b - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = b - 1, 0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - y && (e.match_length = B(e, r), e.match_length <= 5 && (1 === e.strategy || e.match_length === b && 4096 < e.strstart - e.match_start) && (e.match_length = b - 1)), e.prev_length >= b && e.match_length <= e.prev_length) {
                                                                                                        for (i = e.strstart + e.lookahead - b, n = h._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - b), e.lookahead -= e.prev_length - 1, e.prev_length -= 2; ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + b - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 != --e.prev_length;);
                                                                                                        if (e.match_available = 0, e.match_length = b - 1, e.strstart++, n && (A(e, !1), 0 === e.strm.avail_out)) return 1
                                                                                                    } else if (e.match_available) {
                                                                                                        if ((n = h._tr_tally(e, 0, e.window[e.strstart - 1])) && A(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return 1
                                                                                                    } else e.match_available = 1, e.strstart++, e.lookahead--
                                                                                                }
                                                                                                return e.match_available && (n = h._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < b - 1 ? e.strstart : b - 1, 4 === t ? (A(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (A(e, !1), 0 === e.strm.avail_out) ? 1 : 2
                                                                                            }

                                                                                            function F(e, t, r, n, i) {
                                                                                                this.good_length = e, this.max_lazy = t, this.nice_length = r, this.max_chain = n, this.func = i
                                                                                            }

                                                                                            function N() {
                                                                                                this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = _, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new d.Buf16(2 * g), this.dyn_dtree = new d.Buf16(2 * (2 * a + 1)), this.bl_tree = new d.Buf16(2 * (2 * o + 1)), E(this.dyn_ltree), E(this.dyn_dtree), E(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new d.Buf16(v + 1), this.heap = new d.Buf16(2 * s + 1), E(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new d.Buf16(2 * s + 1), E(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
                                                                                            }

                                                                                            function U(e) {
                                                                                                var t;
                                                                                                return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = i, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? k : x, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = f, h._tr_init(t), l) : S(e, m)
                                                                                            }

                                                                                            function P(e) {
                                                                                                var t, r = U(e);
                                                                                                return r === l && ((t = e.state).window_size = 2 * t.w_size, E(t.head), t.max_lazy_match = u[t.level].max_lazy, t.good_match = u[t.level].good_length, t.nice_match = u[t.level].nice_length, t.max_chain_length = u[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = b - 1, t.match_available = 0, t.ins_h = 0), r
                                                                                            }

                                                                                            function L(e, t, r, n, i, s) {
                                                                                                if (!e) return m;
                                                                                                var a = 1;
                                                                                                if (-1 === t && (t = 6), n < 0 ? (a = 0, n = -n) : 15 < n && (a = 2, n -= 16), i < 1 || 9 < i || r !== _ || n < 8 || 15 < n || t < 0 || 9 < t || s < 0 || 4 < s) return S(e, m);
                                                                                                8 === n && (n = 9);
                                                                                                var o = new N;
                                                                                                return (e.state = o).strm = e, o.wrap = a, o.gzhead = null, o.w_bits = n, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = i + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + b - 1) / b), o.window = new d.Buf8(2 * o.w_size), o.head = new d.Buf16(o.hash_size), o.prev = new d.Buf16(o.w_size), o.lit_bufsize = 1 << i + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new d.Buf8(o.pending_buf_size), o.d_buf = 1 * o.lit_bufsize, o.l_buf = 3 * o.lit_bufsize, o.level = t, o.strategy = s, o.method = r, P(e)
                                                                                            }
                                                                                            u = [new F(0, 0, 0, 0, function(e, t) {
                                                                                                var r = 65535;
                                                                                                for (r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5);;) {
                                                                                                    if (e.lookahead <= 1) {
                                                                                                        if (T(e), 0 === e.lookahead && t === f) return 1;
                                                                                                        if (0 === e.lookahead) break
                                                                                                    }
                                                                                                    e.strstart += e.lookahead, e.lookahead = 0;
                                                                                                    var n = e.block_start + r;
                                                                                                    if ((0 === e.strstart || e.strstart >= n) && (e.lookahead = e.strstart - n, e.strstart = n, A(e, !1), 0 === e.strm.avail_out)) return 1;
                                                                                                    if (e.strstart - e.block_start >= e.w_size - y && (A(e, !1), 0 === e.strm.avail_out)) return 1
                                                                                                }
                                                                                                return e.insert = 0, 4 === t ? (A(e, !0), 0 === e.strm.avail_out ? 3 : 4) : (e.strstart > e.block_start && (A(e, !1), e.strm.avail_out), 1)
                                                                                            }), new F(4, 4, 8, 4, R), new F(4, 5, 16, 8, R), new F(4, 6, 32, 32, R), new F(4, 4, 16, 16, D), new F(8, 16, 32, 32, D), new F(8, 16, 128, 128, D), new F(8, 32, 128, 256, D), new F(32, 128, 258, 1024, D), new F(32, 258, 258, 4096, D)], r.deflateInit = function(e, t) {
                                                                                                return L(e, t, _, 15, 8, 0)
                                                                                            }, r.deflateInit2 = L, r.deflateReset = P, r.deflateResetKeep = U, r.deflateSetHeader = function(e, t) {
                                                                                                return e && e.state ? 2 !== e.state.wrap ? m : (e.state.gzhead = t, l) : m
                                                                                            }, r.deflate = function(e, t) {
                                                                                                var r, n, i, s;
                                                                                                if (!e || !e.state || 5 < t || t < 0) return e ? S(e, m) : m;
                                                                                                if (n = e.state, !e.output || !e.input && 0 !== e.avail_in || 666 === n.status && 4 !== t) return S(e, 0 === e.avail_out ? -5 : m);
                                                                                                if (n.strm = e, r = n.last_flush, n.last_flush = t, n.status === k)
                                                                                                    if (2 === n.wrap) e.adler = 0, I(n, 31), I(n, 139), I(n, 8), n.gzhead ? (I(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)), I(n, 255 & n.gzhead.time), I(n, n.gzhead.time >> 8 & 255), I(n, n.gzhead.time >> 16 & 255), I(n, n.gzhead.time >> 24 & 255), I(n, 9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0), I(n, 255 & n.gzhead.os), n.gzhead.extra && n.gzhead.extra.length && (I(n, 255 & n.gzhead.extra.length), I(n, n.gzhead.extra.length >> 8 & 255)), n.gzhead.hcrc && (e.adler = p(e.adler, n.pending_buf, n.pending, 0)), n.gzindex = 0, n.status = 69) : (I(n, 0), I(n, 0), I(n, 0), I(n, 0), I(n, 0), I(n, 9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0), I(n, 3), n.status = x);
                                                                                                    else {
                                                                                                        var a = _ + (n.w_bits - 8 << 4) << 8;
                                                                                                        a |= (2 <= n.strategy || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6, 0 !== n.strstart && (a |= 32), a += 31 - a % 31, n.status = x, O(n, a), 0 !== n.strstart && (O(n, e.adler >>> 16), O(n, 65535 & e.adler)), e.adler = 1
                                                                                                    }
                                                                                                if (69 === n.status)
                                                                                                    if (n.gzhead.extra) {
                                                                                                        for (i = n.pending; n.gzindex < (65535 & n.gzhead.extra.length) && (n.pending !== n.pending_buf_size || (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), C(e), i = n.pending, n.pending !== n.pending_buf_size));) I(n, 255 & n.gzhead.extra[n.gzindex]), n.gzindex++;
                                                                                                        n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), n.gzindex === n.gzhead.extra.length && (n.gzindex = 0, n.status = 73)
                                                                                                    } else n.status = 73;
                                                                                                if (73 === n.status)
                                                                                                    if (n.gzhead.name) {
                                                                                                        i = n.pending;
                                                                                                        do {
                                                                                                            if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), C(e), i = n.pending, n.pending === n.pending_buf_size)) {
                                                                                                                s = 1;
                                                                                                                break
                                                                                                            }
                                                                                                            s = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0, I(n, s)
                                                                                                        } while (0 !== s);
                                                                                                        n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), 0 === s && (n.gzindex = 0, n.status = 91)
                                                                                                    } else n.status = 91;
                                                                                                if (91 === n.status)
                                                                                                    if (n.gzhead.comment) {
                                                                                                        i = n.pending;
                                                                                                        do {
                                                                                                            if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), C(e), i = n.pending, n.pending === n.pending_buf_size)) {
                                                                                                                s = 1;
                                                                                                                break
                                                                                                            }
                                                                                                            s = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0, I(n, s)
                                                                                                        } while (0 !== s);
                                                                                                        n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), 0 === s && (n.status = 103)
                                                                                                    } else n.status = 103;
                                                                                                if (103 === n.status && (n.gzhead.hcrc ? (n.pending + 2 > n.pending_buf_size && C(e), n.pending + 2 <= n.pending_buf_size && (I(n, 255 & e.adler), I(n, e.adler >> 8 & 255), e.adler = 0, n.status = x)) : n.status = x), 0 !== n.pending) {
                                                                                                    if (C(e), 0 === e.avail_out) return n.last_flush = -1, l
                                                                                                } else if (0 === e.avail_in && z(t) <= z(r) && 4 !== t) return S(e, -5);
                                                                                                if (666 === n.status && 0 !== e.avail_in) return S(e, -5);
                                                                                                if (0 !== e.avail_in || 0 !== n.lookahead || t !== f && 666 !== n.status) {
                                                                                                    var o = 2 === n.strategy ? function(e, t) {
                                                                                                        for (var r;;) {
                                                                                                            if (0 === e.lookahead && (T(e), 0 === e.lookahead)) {
                                                                                                                if (t === f) return 1;
                                                                                                                break
                                                                                                            }
                                                                                                            if (e.match_length = 0, r = h._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, r && (A(e, !1), 0 === e.strm.avail_out)) return 1
                                                                                                        }
                                                                                                        return e.insert = 0, 4 === t ? (A(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (A(e, !1), 0 === e.strm.avail_out) ? 1 : 2
                                                                                                    }(n, t) : 3 === n.strategy ? function(e, t) {
                                                                                                        for (var r, n, i, s, a = e.window;;) {
                                                                                                            if (e.lookahead <= w) {
                                                                                                                if (T(e), e.lookahead <= w && t === f) return 1;
                                                                                                                if (0 === e.lookahead) break
                                                                                                            }
                                                                                                            if (e.match_length = 0, e.lookahead >= b && 0 < e.strstart && (n = a[i = e.strstart - 1]) === a[++i] && n === a[++i] && n === a[++i]) {
                                                                                                                s = e.strstart + w;
                                                                                                                do {} while (n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && i < s);
                                                                                                                e.match_length = w - (s - i), e.match_length > e.lookahead && (e.match_length = e.lookahead)
                                                                                                            }
                                                                                                            if (e.match_length >= b ? (r = h._tr_tally(e, 1, e.match_length - b), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (r = h._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), r && (A(e, !1), 0 === e.strm.avail_out)) return 1
                                                                                                        }
                                                                                                        return e.insert = 0, 4 === t ? (A(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (A(e, !1), 0 === e.strm.avail_out) ? 1 : 2
                                                                                                    }(n, t) : u[n.level].func(n, t);
                                                                                                    if (3 !== o && 4 !== o || (n.status = 666), 1 === o || 3 === o) return 0 === e.avail_out && (n.last_flush = -1), l;
                                                                                                    if (2 === o && (1 === t ? h._tr_align(n) : 5 !== t && (h._tr_stored_block(n, 0, 0, !1), 3 === t && (E(n.head), 0 === n.lookahead && (n.strstart = 0, n.block_start = 0, n.insert = 0))), C(e), 0 === e.avail_out)) return n.last_flush = -1, l
                                                                                                }
                                                                                                return 4 !== t ? l : n.wrap <= 0 ? 1 : (2 === n.wrap ? (I(n, 255 & e.adler), I(n, e.adler >> 8 & 255), I(n, e.adler >> 16 & 255), I(n, e.adler >> 24 & 255), I(n, 255 & e.total_in), I(n, e.total_in >> 8 & 255), I(n, e.total_in >> 16 & 255), I(n, e.total_in >> 24 & 255)) : (O(n, e.adler >>> 16), O(n, 65535 & e.adler)), C(e), 0 < n.wrap && (n.wrap = -n.wrap), 0 !== n.pending ? l : 1)
                                                                                            }, r.deflateEnd = function(e) {
                                                                                                var t;
                                                                                                return e && e.state ? (t = e.state.status) !== k && 69 !== t && 73 !== t && 91 !== t && 103 !== t && t !== x && 666 !== t ? S(e, m) : (e.state = null, t === x ? S(e, -3) : l) : m
                                                                                            }, r.deflateSetDictionary = function(e, t) {
                                                                                                var r, n, i, s, a, o, u, h, f = t.length;
                                                                                                if (!e || !e.state) return m;
                                                                                                if (2 === (s = (r = e.state).wrap) || 1 === s && r.status !== k || r.lookahead) return m;
                                                                                                for (1 === s && (e.adler = c(e.adler, t, f, 0)), r.wrap = 0, f >= r.w_size && (0 === s && (E(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0), h = new d.Buf8(r.w_size), d.arraySet(h, t, f - r.w_size, r.w_size, 0), t = h, f = r.w_size), a = e.avail_in, o = e.next_in, u = e.input, e.avail_in = f, e.next_in = 0, e.input = t, T(r); r.lookahead >= b;) {
                                                                                                    for (n = r.strstart, i = r.lookahead - (b - 1); r.ins_h = (r.ins_h << r.hash_shift ^ r.window[n + b - 1]) & r.hash_mask, r.prev[n & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = n, n++, --i;);
                                                                                                    r.strstart = n, r.lookahead = b - 1, T(r)
                                                                                                }
                                                                                                return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = b - 1, r.match_available = 0, e.next_in = o, e.input = u, e.avail_in = a, r.wrap = s, l
                                                                                            }, r.deflateInfo = "pako deflate (from Nodeca project)"
                                                                                        }, {
                                                                                            "../utils/common": 41,
                                                                                            "./adler32": 43,
                                                                                            "./crc32": 45,
                                                                                            "./messages": 51,
                                                                                            "./trees": 52
                                                                                        }],
                                                                                        47: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            t.exports = function() {
                                                                                                this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
                                                                                            }
                                                                                        }, {}],
                                                                                        48: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            t.exports = function(e, t) {
                                                                                                var r, n, i, s, a, o, u, h, f, l, d, c, p, m, _, g, v, b, w, y, k, x, S, z, E;
                                                                                                r = e.state, n = e.next_in, z = e.input, i = n + (e.avail_in - 5), s = e.next_out, E = e.output, a = s - (t - e.avail_out), o = s + (e.avail_out - 257), u = r.dmax, h = r.wsize, f = r.whave, l = r.wnext, d = r.window, c = r.hold, p = r.bits, m = r.lencode, _ = r.distcode, g = (1 << r.lenbits) - 1, v = (1 << r.distbits) - 1;
                                                                                                e: do {
                                                                                                    p < 15 && (c += z[n++] << p, p += 8, c += z[n++] << p, p += 8), b = m[c & g];
                                                                                                    t: for (;;) {
                                                                                                        if (c >>>= w = b >>> 24, p -= w, 0 == (w = b >>> 16 & 255)) E[s++] = 65535 & b;
                                                                                                        else {
                                                                                                            if (!(16 & w)) {
                                                                                                                if (0 == (64 & w)) {
                                                                                                                    b = m[(65535 & b) + (c & (1 << w) - 1)];
                                                                                                                    continue t
                                                                                                                }
                                                                                                                if (32 & w) {
                                                                                                                    r.mode = 12;
                                                                                                                    break e
                                                                                                                }
                                                                                                                e.msg = "invalid literal/length code", r.mode = 30;
                                                                                                                break e
                                                                                                            }
                                                                                                            y = 65535 & b, (w &= 15) && (p < w && (c += z[n++] << p, p += 8), y += c & (1 << w) - 1, c >>>= w, p -= w), p < 15 && (c += z[n++] << p, p += 8, c += z[n++] << p, p += 8), b = _[c & v];
                                                                                                            r: for (;;) {
                                                                                                                if (c >>>= w = b >>> 24, p -= w, !(16 & (w = b >>> 16 & 255))) {
                                                                                                                    if (0 == (64 & w)) {
                                                                                                                        b = _[(65535 & b) + (c & (1 << w) - 1)];
                                                                                                                        continue r
                                                                                                                    }
                                                                                                                    e.msg = "invalid distance code", r.mode = 30;
                                                                                                                    break e
                                                                                                                }
                                                                                                                if (k = 65535 & b, p < (w &= 15) && (c += z[n++] << p, (p += 8) < w && (c += z[n++] << p, p += 8)), u < (k += c & (1 << w) - 1)) {
                                                                                                                    e.msg = "invalid distance too far back", r.mode = 30;
                                                                                                                    break e
                                                                                                                }
                                                                                                                if (c >>>= w, p -= w, (w = s - a) < k) {
                                                                                                                    if (f < (w = k - w) && r.sane) {
                                                                                                                        e.msg = "invalid distance too far back", r.mode = 30;
                                                                                                                        break e
                                                                                                                    }
                                                                                                                    if (S = d, (x = 0) === l) {
                                                                                                                        if (x += h - w, w < y) {
                                                                                                                            for (y -= w; E[s++] = d[x++], --w;);
                                                                                                                            x = s - k, S = E
                                                                                                                        }
                                                                                                                    } else if (l < w) {
                                                                                                                        if (x += h + l - w, (w -= l) < y) {
                                                                                                                            for (y -= w; E[s++] = d[x++], --w;);
                                                                                                                            if (x = 0, l < y) {
                                                                                                                                for (y -= w = l; E[s++] = d[x++], --w;);
                                                                                                                                x = s - k, S = E
                                                                                                                            }
                                                                                                                        }
                                                                                                                    } else if (x += l - w, w < y) {
                                                                                                                        for (y -= w; E[s++] = d[x++], --w;);
                                                                                                                        x = s - k, S = E
                                                                                                                    }
                                                                                                                    for (; 2 < y;) E[s++] = S[x++], E[s++] = S[x++], E[s++] = S[x++], y -= 3;
                                                                                                                    y && (E[s++] = S[x++], 1 < y && (E[s++] = S[x++]))
                                                                                                                } else {
                                                                                                                    for (x = s - k; E[s++] = E[x++], E[s++] = E[x++], E[s++] = E[x++], 2 < (y -= 3););
                                                                                                                    y && (E[s++] = E[x++], 1 < y && (E[s++] = E[x++]))
                                                                                                                }
                                                                                                                break
                                                                                                            }
                                                                                                        }
                                                                                                        break
                                                                                                    }
                                                                                                } while (n < i && s < o);
                                                                                                n -= y = p >> 3, c &= (1 << (p -= y << 3)) - 1, e.next_in = n, e.next_out = s, e.avail_in = n < i ? i - n + 5 : 5 - (n - i), e.avail_out = s < o ? o - s + 257 : 257 - (s - o), r.hold = c, r.bits = p
                                                                                            }
                                                                                        }, {}],
                                                                                        49: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var I = e("../utils/common"),
                                                                                                O = e("./adler32"),
                                                                                                B = e("./crc32"),
                                                                                                T = e("./inffast"),
                                                                                                R = e("./inftrees"),
                                                                                                D = 1,
                                                                                                F = 2,
                                                                                                N = 0,
                                                                                                U = -2,
                                                                                                P = 1,
                                                                                                n = 852,
                                                                                                i = 592;

                                                                                            function L(e) {
                                                                                                return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
                                                                                            }

                                                                                            function s() {
                                                                                                this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
                                                                                            }

                                                                                            function a(e) {
                                                                                                var t;
                                                                                                return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = P, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new I.Buf32(n), t.distcode = t.distdyn = new I.Buf32(i), t.sane = 1, t.back = -1, N) : U
                                                                                            }

                                                                                            function o(e) {
                                                                                                var t;
                                                                                                return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, a(e)) : U
                                                                                            }

                                                                                            function u(e, t) {
                                                                                                var r, n;
                                                                                                return e && e.state ? (n = e.state, t < 0 ? (r = 0, t = -t) : (r = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || 15 < t) ? U : (null !== n.window && n.wbits !== t && (n.window = null), n.wrap = r, n.wbits = t, o(e))) : U
                                                                                            }

                                                                                            function h(e, t) {
                                                                                                var r, n;
                                                                                                return e ? (n = new s, (e.state = n).window = null, (r = u(e, t)) !== N && (e.state = null), r) : U
                                                                                            }
                                                                                            var f, l, d = !0;

                                                                                            function j(e) {
                                                                                                if (d) {
                                                                                                    var t;
                                                                                                    for (f = new I.Buf32(512), l = new I.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
                                                                                                    for (; t < 256;) e.lens[t++] = 9;
                                                                                                    for (; t < 280;) e.lens[t++] = 7;
                                                                                                    for (; t < 288;) e.lens[t++] = 8;
                                                                                                    for (R(D, e.lens, 0, 288, f, 0, e.work, {
                                                                                                            bits: 9
                                                                                                        }), t = 0; t < 32;) e.lens[t++] = 5;
                                                                                                    R(F, e.lens, 0, 32, l, 0, e.work, {
                                                                                                        bits: 5
                                                                                                    }), d = !1
                                                                                                }
                                                                                                e.lencode = f, e.lenbits = 9, e.distcode = l, e.distbits = 5
                                                                                            }

                                                                                            function Z(e, t, r, n) {
                                                                                                var i, s = e.state;
                                                                                                return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new I.Buf8(s.wsize)), n >= s.wsize ? (I.arraySet(s.window, t, r - s.wsize, s.wsize, 0), s.wnext = 0, s.whave = s.wsize) : (n < (i = s.wsize - s.wnext) && (i = n), I.arraySet(s.window, t, r - n, i, s.wnext), (n -= i) ? (I.arraySet(s.window, t, r - n, n, 0), s.wnext = n, s.whave = s.wsize) : (s.wnext += i, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += i))), 0
                                                                                            }
                                                                                            r.inflateReset = o, r.inflateReset2 = u, r.inflateResetKeep = a, r.inflateInit = function(e) {
                                                                                                return h(e, 15)
                                                                                            }, r.inflateInit2 = h, r.inflate = function(e, t) {
                                                                                                var r, n, i, s, a, o, u, h, f, l, d, c, p, m, _, g, v, b, w, y, k, x, S, z, E = 0,
                                                                                                    C = new I.Buf8(4),
                                                                                                    A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                                                                                                if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return U;
                                                                                                12 === (r = e.state).mode && (r.mode = 13), a = e.next_out, i = e.output, u = e.avail_out, s = e.next_in, n = e.input, o = e.avail_in, h = r.hold, f = r.bits, l = o, d = u, x = N;
                                                                                                e: for (;;) switch (r.mode) {
                                                                                                    case P:
                                                                                                        if (0 === r.wrap) {
                                                                                                            r.mode = 13;
                                                                                                            break
                                                                                                        }
                                                                                                        for (; f < 16;) {
                                                                                                            if (0 === o) break e;
                                                                                                            o--, h += n[s++] << f, f += 8
                                                                                                        }
                                                                                                        if (2 & r.wrap && 35615 === h) {
                                                                                                            C[r.check = 0] = 255 & h, C[1] = h >>> 8 & 255, r.check = B(r.check, C, 2, 0), f = h = 0, r.mode = 2;
                                                                                                            break
                                                                                                        }
                                                                                                        if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & h) << 8) + (h >> 8)) % 31) {
                                                                                                            e.msg = "incorrect header check", r.mode = 30;
                                                                                                            break
                                                                                                        }
                                                                                                        if (8 != (15 & h)) {
                                                                                                            e.msg = "unknown compression method", r.mode = 30;
                                                                                                            break
                                                                                                        }
                                                                                                        if (f -= 4, k = 8 + (15 & (h >>>= 4)), 0 === r.wbits) r.wbits = k;
                                                                                                        else if (k > r.wbits) {
                                                                                                            e.msg = "invalid window size", r.mode = 30;
                                                                                                            break
                                                                                                        }
                                                                                                        r.dmax = 1 << k, e.adler = r.check = 1, r.mode = 512 & h ? 10 : 12, f = h = 0;
                                                                                                        break;
                                                                                                    case 2:
                                                                                                        for (; f < 16;) {
                                                                                                            if (0 === o) break e;
                                                                                                            o--, h += n[s++] << f, f += 8
                                                                                                        }
                                                                                                        if (r.flags = h, 8 != (255 & r.flags)) {
                                                                                                            e.msg = "unknown compression method", r.mode = 30;
                                                                                                            break
                                                                                                        }
                                                                                                        if (57344 & r.flags) {
                                                                                                            e.msg = "unknown header flags set", r.mode = 30;
                                                                                                            break
                                                                                                        }
                                                                                                        r.head && (r.head.text = h >> 8 & 1), 512 & r.flags && (C[0] = 255 & h, C[1] = h >>> 8 & 255, r.check = B(r.check, C, 2, 0)), f = h = 0, r.mode = 3;
                                                                                                    case 3:
                                                                                                        for (; f < 32;) {
                                                                                                            if (0 === o) break e;
                                                                                                            o--, h += n[s++] << f, f += 8
                                                                                                        }
                                                                                                        r.head && (r.head.time = h), 512 & r.flags && (C[0] = 255 & h, C[1] = h >>> 8 & 255, C[2] = h >>> 16 & 255, C[3] = h >>> 24 & 255, r.check = B(r.check, C, 4, 0)), f = h = 0, r.mode = 4;
                                                                                                    case 4:
                                                                                                        for (; f < 16;) {
                                                                                                            if (0 === o) break e;
                                                                                                            o--, h += n[s++] << f, f += 8
                                                                                                        }
                                                                                                        r.head && (r.head.xflags = 255 & h, r.head.os = h >> 8), 512 & r.flags && (C[0] = 255 & h, C[1] = h >>> 8 & 255, r.check = B(r.check, C, 2, 0)), f = h = 0, r.mode = 5;
                                                                                                    case 5:
                                                                                                        if (1024 & r.flags) {
                                                                                                            for (; f < 16;) {
                                                                                                                if (0 === o) break e;
                                                                                                                o--, h += n[s++] << f, f += 8
                                                                                                            }
                                                                                                            r.length = h, r.head && (r.head.extra_len = h), 512 & r.flags && (C[0] = 255 & h, C[1] = h >>> 8 & 255, r.check = B(r.check, C, 2, 0)), f = h = 0
                                                                                                        } else r.head && (r.head.extra = null);
                                                                                                        r.mode = 6;
                                                                                                    case 6:
                                                                                                        if (1024 & r.flags && (o < (c = r.length) && (c = o), c && (r.head && (k = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), I.arraySet(r.head.extra, n, s, c, k)), 512 & r.flags && (r.check = B(r.check, n, c, s)), o -= c, s += c, r.length -= c), r.length)) break e;
                                                                                                        r.length = 0, r.mode = 7;
                                                                                                    case 7:
                                                                                                        if (2048 & r.flags) {
                                                                                                            if (0 === o) break e;
                                                                                                            for (c = 0; k = n[s + c++], r.head && k && r.length < 65536 && (r.head.name += String.fromCharCode(k)), k && c < o;);
                                                                                                            if (512 & r.flags && (r.check = B(r.check, n, c, s)), o -= c, s += c, k) break e
                                                                                                        } else r.head && (r.head.name = null);
                                                                                                        r.length = 0, r.mode = 8;
                                                                                                    case 8:
                                                                                                        if (4096 & r.flags) {
                                                                                                            if (0 === o) break e;
                                                                                                            for (c = 0; k = n[s + c++], r.head && k && r.length < 65536 && (r.head.comment += String.fromCharCode(k)), k && c < o;);
                                                                                                            if (512 & r.flags && (r.check = B(r.check, n, c, s)), o -= c, s += c, k) break e
                                                                                                        } else r.head && (r.head.comment = null);
                                                                                                        r.mode = 9;
                                                                                                    case 9:
                                                                                                        if (512 & r.flags) {
                                                                                                            for (; f < 16;) {
                                                                                                                if (0 === o) break e;
                                                                                                                o--, h += n[s++] << f, f += 8
                                                                                                            }
                                                                                                            if (h !== (65535 & r.check)) {
                                                                                                                e.msg = "header crc mismatch", r.mode = 30;
                                                                                                                break
                                                                                                            }
                                                                                                            f = h = 0
                                                                                                        }
                                                                                                        r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), e.adler = r.check = 0, r.mode = 12;
                                                                                                        break;
                                                                                                    case 10:
                                                                                                        for (; f < 32;) {
                                                                                                            if (0 === o) break e;
                                                                                                            o--, h += n[s++] << f, f += 8
                                                                                                        }
                                                                                                        e.adler = r.check = L(h), f = h = 0, r.mode = 11;
                                                                                                    case 11:
                                                                                                        if (0 === r.havedict) return e.next_out = a, e.avail_out = u, e.next_in = s, e.avail_in = o, r.hold = h, r.bits = f, 2;
                                                                                                        e.adler = r.check = 1, r.mode = 12;
                                                                                                    case 12:
                                                                                                        if (5 === t || 6 === t) break e;
                                                                                                    case 13:
                                                                                                        if (r.last) {
                                                                                                            h >>>= 7 & f, f -= 7 & f, r.mode = 27;
                                                                                                            break
                                                                                                        }
                                                                                                        for (; f < 3;) {
                                                                                                            if (0 === o) break e;
                                                                                                            o--, h += n[s++] << f, f += 8
                                                                                                        }
                                                                                                        switch (r.last = 1 & h, f -= 1, 3 & (h >>>= 1)) {
                                                                                                            case 0:
                                                                                                                r.mode = 14;
                                                                                                                break;
                                                                                                            case 1:
                                                                                                                if (j(r), r.mode = 20, 6 !== t) break;
                                                                                                                h >>>= 2, f -= 2;
                                                                                                                break e;
                                                                                                            case 2:
                                                                                                                r.mode = 17;
                                                                                                                break;
                                                                                                            case 3:
                                                                                                                e.msg = "invalid block type", r.mode = 30
                                                                                                        }
                                                                                                        h >>>= 2, f -= 2;
                                                                                                        break;
                                                                                                    case 14:
                                                                                                        for (h >>>= 7 & f, f -= 7 & f; f < 32;) {
                                                                                                            if (0 === o) break e;
                                                                                                            o--, h += n[s++] << f, f += 8
                                                                                                        }
                                                                                                        if ((65535 & h) != (h >>> 16 ^ 65535)) {
                                                                                                            e.msg = "invalid stored block lengths", r.mode = 30;
                                                                                                            break
                                                                                                        }
                                                                                                        if (r.length = 65535 & h, f = h = 0, r.mode = 15, 6 === t) break e;
                                                                                                    case 15:
                                                                                                        r.mode = 16;
                                                                                                    case 16:
                                                                                                        if (c = r.length) {
                                                                                                            if (o < c && (c = o), u < c && (c = u), 0 === c) break e;
                                                                                                            I.arraySet(i, n, s, c, a), o -= c, s += c, u -= c, a += c, r.length -= c;
                                                                                                            break
                                                                                                        }
                                                                                                        r.mode = 12;
                                                                                                        break;
                                                                                                    case 17:
                                                                                                        for (; f < 14;) {
                                                                                                            if (0 === o) break e;
                                                                                                            o--, h += n[s++] << f, f += 8
                                                                                                        }
                                                                                                        if (r.nlen = 257 + (31 & h), h >>>= 5, f -= 5, r.ndist = 1 + (31 & h), h >>>= 5, f -= 5, r.ncode = 4 + (15 & h), h >>>= 4, f -= 4, 286 < r.nlen || 30 < r.ndist) {
                                                                                                            e.msg = "too many length or distance symbols", r.mode = 30;
                                                                                                            break
                                                                                                        }
                                                                                                        r.have = 0, r.mode = 18;
                                                                                                    case 18:
                                                                                                        for (; r.have < r.ncode;) {
                                                                                                            for (; f < 3;) {
                                                                                                                if (0 === o) break e;
                                                                                                                o--, h += n[s++] << f, f += 8
                                                                                                            }
                                                                                                            r.lens[A[r.have++]] = 7 & h, h >>>= 3, f -= 3
                                                                                                        }
                                                                                                        for (; r.have < 19;) r.lens[A[r.have++]] = 0;
                                                                                                        if (r.lencode = r.lendyn, r.lenbits = 7, S = {
                                                                                                                bits: r.lenbits
                                                                                                            }, x = R(0, r.lens, 0, 19, r.lencode, 0, r.work, S), r.lenbits = S.bits, x) {
                                                                                                            e.msg = "invalid code lengths set", r.mode = 30;
                                                                                                            break
                                                                                                        }
                                                                                                        r.have = 0, r.mode = 19;
                                                                                                    case 19:
                                                                                                        for (; r.have < r.nlen + r.ndist;) {
                                                                                                            for (; g = (E = r.lencode[h & (1 << r.lenbits) - 1]) >>> 16 & 255, v = 65535 & E, !((_ = E >>> 24) <= f);) {
                                                                                                                if (0 === o) break e;
                                                                                                                o--, h += n[s++] << f, f += 8
                                                                                                            }
                                                                                                            if (v < 16) h >>>= _, f -= _, r.lens[r.have++] = v;
                                                                                                            else {
                                                                                                                if (16 === v) {
                                                                                                                    for (z = _ + 2; f < z;) {
                                                                                                                        if (0 === o) break e;
                                                                                                                        o--, h += n[s++] << f, f += 8
                                                                                                                    }
                                                                                                                    if (h >>>= _, f -= _, 0 === r.have) {
                                                                                                                        e.msg = "invalid bit length repeat", r.mode = 30;
                                                                                                                        break
                                                                                                                    }
                                                                                                                    k = r.lens[r.have - 1], c = 3 + (3 & h), h >>>= 2, f -= 2
                                                                                                                } else if (17 === v) {
                                                                                                                    for (z = _ + 3; f < z;) {
                                                                                                                        if (0 === o) break e;
                                                                                                                        o--, h += n[s++] << f, f += 8
                                                                                                                    }
                                                                                                                    f -= _, k = 0, c = 3 + (7 & (h >>>= _)), h >>>= 3, f -= 3
                                                                                                                } else {
                                                                                                                    for (z = _ + 7; f < z;) {
                                                                                                                        if (0 === o) break e;
                                                                                                                        o--, h += n[s++] << f, f += 8
                                                                                                                    }
                                                                                                                    f -= _, k = 0, c = 11 + (127 & (h >>>= _)), h >>>= 7, f -= 7
                                                                                                                }
                                                                                                                if (r.have + c > r.nlen + r.ndist) {
                                                                                                                    e.msg = "invalid bit length repeat", r.mode = 30;
                                                                                                                    break
                                                                                                                }
                                                                                                                for (; c--;) r.lens[r.have++] = k
                                                                                                            }
                                                                                                        }
                                                                                                        if (30 === r.mode) break;
                                                                                                        if (0 === r.lens[256]) {
                                                                                                            e.msg = "invalid code -- missing end-of-block", r.mode = 30;
                                                                                                            break
                                                                                                        }
                                                                                                        if (r.lenbits = 9, S = {
                                                                                                                bits: r.lenbits
                                                                                                            }, x = R(D, r.lens, 0, r.nlen, r.lencode, 0, r.work, S), r.lenbits = S.bits, x) {
                                                                                                            e.msg = "invalid literal/lengths set", r.mode = 30;
                                                                                                            break
                                                                                                        }
                                                                                                        if (r.distbits = 6, r.distcode = r.distdyn, S = {
                                                                                                                bits: r.distbits
                                                                                                            }, x = R(F, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, S), r.distbits = S.bits, x) {
                                                                                                            e.msg = "invalid distances set", r.mode = 30;
                                                                                                            break
                                                                                                        }
                                                                                                        if (r.mode = 20, 6 === t) break e;
                                                                                                    case 20:
                                                                                                        r.mode = 21;
                                                                                                    case 21:
                                                                                                        if (6 <= o && 258 <= u) {
                                                                                                            e.next_out = a, e.avail_out = u, e.next_in = s, e.avail_in = o, r.hold = h, r.bits = f, T(e, d), a = e.next_out, i = e.output, u = e.avail_out, s = e.next_in, n = e.input, o = e.avail_in, h = r.hold, f = r.bits, 12 === r.mode && (r.back = -1);
                                                                                                            break
                                                                                                        }
                                                                                                        for (r.back = 0; g = (E = r.lencode[h & (1 << r.lenbits) - 1]) >>> 16 & 255, v = 65535 & E, !((_ = E >>> 24) <= f);) {
                                                                                                            if (0 === o) break e;
                                                                                                            o--, h += n[s++] << f, f += 8
                                                                                                        }
                                                                                                        if (g && 0 == (240 & g)) {
                                                                                                            for (b = _, w = g, y = v; g = (E = r.lencode[y + ((h & (1 << b + w) - 1) >> b)]) >>> 16 & 255, v = 65535 & E, !(b + (_ = E >>> 24) <= f);) {
                                                                                                                if (0 === o) break e;
                                                                                                                o--, h += n[s++] << f, f += 8
                                                                                                            }
                                                                                                            h >>>= b, f -= b, r.back += b
                                                                                                        }
                                                                                                        if (h >>>= _, f -= _, r.back += _, r.length = v, 0 === g) {
                                                                                                            r.mode = 26;
                                                                                                            break
                                                                                                        }
                                                                                                        if (32 & g) {
                                                                                                            r.back = -1, r.mode = 12;
                                                                                                            break
                                                                                                        }
                                                                                                        if (64 & g) {
                                                                                                            e.msg = "invalid literal/length code", r.mode = 30;
                                                                                                            break
                                                                                                        }
                                                                                                        r.extra = 15 & g, r.mode = 22;
                                                                                                    case 22:
                                                                                                        if (r.extra) {
                                                                                                            for (z = r.extra; f < z;) {
                                                                                                                if (0 === o) break e;
                                                                                                                o--, h += n[s++] << f, f += 8
                                                                                                            }
                                                                                                            r.length += h & (1 << r.extra) - 1, h >>>= r.extra, f -= r.extra, r.back += r.extra
                                                                                                        }
                                                                                                        r.was = r.length, r.mode = 23;
                                                                                                    case 23:
                                                                                                        for (; g = (E = r.distcode[h & (1 << r.distbits) - 1]) >>> 16 & 255, v = 65535 & E, !((_ = E >>> 24) <= f);) {
                                                                                                            if (0 === o) break e;
                                                                                                            o--, h += n[s++] << f, f += 8
                                                                                                        }
                                                                                                        if (0 == (240 & g)) {
                                                                                                            for (b = _, w = g, y = v; g = (E = r.distcode[y + ((h & (1 << b + w) - 1) >> b)]) >>> 16 & 255, v = 65535 & E, !(b + (_ = E >>> 24) <= f);) {
                                                                                                                if (0 === o) break e;
                                                                                                                o--, h += n[s++] << f, f += 8
                                                                                                            }
                                                                                                            h >>>= b, f -= b, r.back += b
                                                                                                        }
                                                                                                        if (h >>>= _, f -= _, r.back += _, 64 & g) {
                                                                                                            e.msg = "invalid distance code", r.mode = 30;
                                                                                                            break
                                                                                                        }
                                                                                                        r.offset = v, r.extra = 15 & g, r.mode = 24;
                                                                                                    case 24:
                                                                                                        if (r.extra) {
                                                                                                            for (z = r.extra; f < z;) {
                                                                                                                if (0 === o) break e;
                                                                                                                o--, h += n[s++] << f, f += 8
                                                                                                            }
                                                                                                            r.offset += h & (1 << r.extra) - 1, h >>>= r.extra, f -= r.extra, r.back += r.extra
                                                                                                        }
                                                                                                        if (r.offset > r.dmax) {
                                                                                                            e.msg = "invalid distance too far back", r.mode = 30;
                                                                                                            break
                                                                                                        }
                                                                                                        r.mode = 25;
                                                                                                    case 25:
                                                                                                        if (0 === u) break e;
                                                                                                        if (c = d - u, r.offset > c) {
                                                                                                            if ((c = r.offset - c) > r.whave && r.sane) {
                                                                                                                e.msg = "invalid distance too far back", r.mode = 30;
                                                                                                                break
                                                                                                            }
                                                                                                            p = c > r.wnext ? (c -= r.wnext, r.wsize - c) : r.wnext - c, c > r.length && (c = r.length), m = r.window
                                                                                                        } else m = i, p = a - r.offset, c = r.length;
                                                                                                        for (u < c && (c = u), u -= c, r.length -= c; i[a++] = m[p++], --c;);
                                                                                                        0 === r.length && (r.mode = 21);
                                                                                                        break;
                                                                                                    case 26:
                                                                                                        if (0 === u) break e;
                                                                                                        i[a++] = r.length, u--, r.mode = 21;
                                                                                                        break;
                                                                                                    case 27:
                                                                                                        if (r.wrap) {
                                                                                                            for (; f < 32;) {
                                                                                                                if (0 === o) break e;
                                                                                                                o--, h |= n[s++] << f, f += 8
                                                                                                            }
                                                                                                            if (d -= u, e.total_out += d, r.total += d, d && (e.adler = r.check = r.flags ? B(r.check, i, d, a - d) : O(r.check, i, d, a - d)), d = u, (r.flags ? h : L(h)) !== r.check) {
                                                                                                                e.msg = "incorrect data check", r.mode = 30;
                                                                                                                break
                                                                                                            }
                                                                                                            f = h = 0
                                                                                                        }
                                                                                                        r.mode = 28;
                                                                                                    case 28:
                                                                                                        if (r.wrap && r.flags) {
                                                                                                            for (; f < 32;) {
                                                                                                                if (0 === o) break e;
                                                                                                                o--, h += n[s++] << f, f += 8
                                                                                                            }
                                                                                                            if (h !== (4294967295 & r.total)) {
                                                                                                                e.msg = "incorrect length check", r.mode = 30;
                                                                                                                break
                                                                                                            }
                                                                                                            f = h = 0
                                                                                                        }
                                                                                                        r.mode = 29;
                                                                                                    case 29:
                                                                                                        x = 1;
                                                                                                        break e;
                                                                                                    case 30:
                                                                                                        x = -3;
                                                                                                        break e;
                                                                                                    case 31:
                                                                                                        return -4;
                                                                                                    case 32:
                                                                                                    default:
                                                                                                        return U
                                                                                                }
                                                                                                return e.next_out = a, e.avail_out = u, e.next_in = s, e.avail_in = o, r.hold = h, r.bits = f, (r.wsize || d !== e.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== t)) && Z(e, e.output, e.next_out, d - e.avail_out) ? (r.mode = 31, -4) : (l -= e.avail_in, d -= e.avail_out, e.total_in += l, e.total_out += d, r.total += d, r.wrap && d && (e.adler = r.check = r.flags ? B(r.check, i, d, e.next_out - d) : O(r.check, i, d, e.next_out - d)), e.data_type = r.bits + (r.last ? 64 : 0) + (12 === r.mode ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0), (0 == l && 0 === d || 4 === t) && x === N && (x = -5), x)
                                                                                            }, r.inflateEnd = function(e) {
                                                                                                if (!e || !e.state) return U;
                                                                                                var t = e.state;
                                                                                                return t.window && (t.window = null), e.state = null, N
                                                                                            }, r.inflateGetHeader = function(e, t) {
                                                                                                var r;
                                                                                                return e && e.state ? 0 == (2 & (r = e.state).wrap) ? U : ((r.head = t).done = !1, N) : U
                                                                                            }, r.inflateSetDictionary = function(e, t) {
                                                                                                var r, n = t.length;
                                                                                                return e && e.state ? 0 !== (r = e.state).wrap && 11 !== r.mode ? U : 11 === r.mode && O(1, t, n, 0) !== r.check ? -3 : Z(e, t, n, n) ? (r.mode = 31, -4) : (r.havedict = 1, N) : U
                                                                                            }, r.inflateInfo = "pako inflate (from Nodeca project)"
                                                                                        }, {
                                                                                            "../utils/common": 41,
                                                                                            "./adler32": 43,
                                                                                            "./crc32": 45,
                                                                                            "./inffast": 48,
                                                                                            "./inftrees": 50
                                                                                        }],
                                                                                        50: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var D = e("../utils/common"),
                                                                                                F = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                                                                                                N = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                                                                                                U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                                                                                                P = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
                                                                                            t.exports = function(e, t, r, n, i, s, a, o) {
                                                                                                var u, h, f, l, d, c, p, m, _, g = o.bits,
                                                                                                    v = 0,
                                                                                                    b = 0,
                                                                                                    w = 0,
                                                                                                    y = 0,
                                                                                                    k = 0,
                                                                                                    x = 0,
                                                                                                    S = 0,
                                                                                                    z = 0,
                                                                                                    E = 0,
                                                                                                    C = 0,
                                                                                                    A = null,
                                                                                                    I = 0,
                                                                                                    O = new D.Buf16(16),
                                                                                                    B = new D.Buf16(16),
                                                                                                    T = null,
                                                                                                    R = 0;
                                                                                                for (v = 0; v <= 15; v++) O[v] = 0;
                                                                                                for (b = 0; b < n; b++) O[t[r + b]]++;
                                                                                                for (k = g, y = 15; 1 <= y && 0 === O[y]; y--);
                                                                                                if (y < k && (k = y), 0 === y) return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
                                                                                                for (w = 1; w < y && 0 === O[w]; w++);
                                                                                                for (k < w && (k = w), v = z = 1; v <= 15; v++)
                                                                                                    if (z <<= 1, (z -= O[v]) < 0) return -1;
                                                                                                if (0 < z && (0 === e || 1 !== y)) return -1;
                                                                                                for (B[1] = 0, v = 1; v < 15; v++) B[v + 1] = B[v] + O[v];
                                                                                                for (b = 0; b < n; b++) 0 !== t[r + b] && (a[B[t[r + b]]++] = b);
                                                                                                if (c = 0 === e ? (A = T = a, 19) : 1 === e ? (A = F, I -= 257, T = N, R -= 257, 256) : (A = U, T = P, -1), v = w, d = s, S = b = C = 0, f = -1, l = (E = 1 << (x = k)) - 1, 1 === e && 852 < E || 2 === e && 592 < E) return 1;
                                                                                                for (;;) {
                                                                                                    for (p = v - S, _ = a[b] < c ? (m = 0, a[b]) : a[b] > c ? (m = T[R + a[b]], A[I + a[b]]) : (m = 96, 0), u = 1 << v - S, w = h = 1 << x; i[d + (C >> S) + (h -= u)] = p << 24 | m << 16 | _ | 0, 0 !== h;);
                                                                                                    for (u = 1 << v - 1; C & u;) u >>= 1;
                                                                                                    if (0 !== u ? (C &= u - 1, C += u) : C = 0, b++, 0 == --O[v]) {
                                                                                                        if (v === y) break;
                                                                                                        v = t[r + a[b]]
                                                                                                    }
                                                                                                    if (k < v && (C & l) !== f) {
                                                                                                        for (0 === S && (S = k), d += w, z = 1 << (x = v - S); x + S < y && !((z -= O[x + S]) <= 0);) x++, z <<= 1;
                                                                                                        if (E += 1 << x, 1 === e && 852 < E || 2 === e && 592 < E) return 1;
                                                                                                        i[f = C & l] = k << 24 | x << 16 | d - s | 0
                                                                                                    }
                                                                                                }
                                                                                                return 0 !== C && (i[d + C] = v - S << 24 | 64 << 16 | 0), o.bits = k, 0
                                                                                            }
                                                                                        }, {
                                                                                            "../utils/common": 41
                                                                                        }],
                                                                                        51: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            t.exports = {
                                                                                                2: "need dictionary",
                                                                                                1: "stream end",
                                                                                                0: "",
                                                                                                "-1": "file error",
                                                                                                "-2": "stream error",
                                                                                                "-3": "data error",
                                                                                                "-4": "insufficient memory",
                                                                                                "-5": "buffer error",
                                                                                                "-6": "incompatible version"
                                                                                            }
                                                                                        }, {}],
                                                                                        52: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            var o = e("../utils/common");

                                                                                            function n(e) {
                                                                                                for (var t = e.length; 0 <= --t;) e[t] = 0
                                                                                            }
                                                                                            var _ = 15,
                                                                                                i = 16,
                                                                                                u = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                                                                                                h = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                                                                                                a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                                                                                                f = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                                                                                                l = new Array(576);
                                                                                            n(l);
                                                                                            var d = new Array(60);
                                                                                            n(d);
                                                                                            var c = new Array(512);
                                                                                            n(c);
                                                                                            var p = new Array(256);
                                                                                            n(p);
                                                                                            var m = new Array(29);
                                                                                            n(m);
                                                                                            var g, v, b, w = new Array(30);

                                                                                            function y(e, t, r, n, i) {
                                                                                                this.static_tree = e, this.extra_bits = t, this.extra_base = r, this.elems = n, this.max_length = i, this.has_stree = e && e.length
                                                                                            }

                                                                                            function s(e, t) {
                                                                                                this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
                                                                                            }

                                                                                            function k(e) {
                                                                                                return e < 256 ? c[e] : c[256 + (e >>> 7)]
                                                                                            }

                                                                                            function x(e, t) {
                                                                                                e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255
                                                                                            }

                                                                                            function S(e, t, r) {
                                                                                                e.bi_valid > i - r ? (e.bi_buf |= t << e.bi_valid & 65535, x(e, e.bi_buf), e.bi_buf = t >> i - e.bi_valid, e.bi_valid += r - i) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += r)
                                                                                            }

                                                                                            function z(e, t, r) {
                                                                                                S(e, r[2 * t], r[2 * t + 1])
                                                                                            }

                                                                                            function E(e, t) {
                                                                                                for (var r = 0; r |= 1 & e, e >>>= 1, r <<= 1, 0 < --t;);
                                                                                                return r >>> 1
                                                                                            }

                                                                                            function C(e, t, r) {
                                                                                                var n, i, s = new Array(_ + 1),
                                                                                                    a = 0;
                                                                                                for (n = 1; n <= _; n++) s[n] = a = a + r[n - 1] << 1;
                                                                                                for (i = 0; i <= t; i++) {
                                                                                                    var o = e[2 * i + 1];
                                                                                                    0 !== o && (e[2 * i] = E(s[o]++, o))
                                                                                                }
                                                                                            }

                                                                                            function A(e) {
                                                                                                var t;
                                                                                                for (t = 0; t < 286; t++) e.dyn_ltree[2 * t] = 0;
                                                                                                for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
                                                                                                for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
                                                                                                e.dyn_ltree[512] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0
                                                                                            }

                                                                                            function I(e) {
                                                                                                8 < e.bi_valid ? x(e, e.bi_buf) : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
                                                                                            }

                                                                                            function O(e, t, r, n) {
                                                                                                var i = 2 * t,
                                                                                                    s = 2 * r;
                                                                                                return e[i] < e[s] || e[i] === e[s] && n[t] <= n[r]
                                                                                            }

                                                                                            function B(e, t, r) {
                                                                                                for (var n = e.heap[r], i = r << 1; i <= e.heap_len && (i < e.heap_len && O(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !O(t, n, e.heap[i], e.depth));) e.heap[r] = e.heap[i], r = i, i <<= 1;
                                                                                                e.heap[r] = n
                                                                                            }

                                                                                            function T(e, t, r) {
                                                                                                var n, i, s, a, o = 0;
                                                                                                if (0 !== e.last_lit)
                                                                                                    for (; n = e.pending_buf[e.d_buf + 2 * o] << 8 | e.pending_buf[e.d_buf + 2 * o + 1], i = e.pending_buf[e.l_buf + o], o++, 0 === n ? z(e, i, t) : (z(e, (s = p[i]) + 256 + 1, t), 0 !== (a = u[s]) && S(e, i -= m[s], a), z(e, s = k(--n), r), 0 !== (a = h[s]) && S(e, n -= w[s], a)), o < e.last_lit;);
                                                                                                z(e, 256, t)
                                                                                            }

                                                                                            function R(e, t) {
                                                                                                var r, n, i, s = t.dyn_tree,
                                                                                                    a = t.stat_desc.static_tree,
                                                                                                    o = t.stat_desc.has_stree,
                                                                                                    u = t.stat_desc.elems,
                                                                                                    h = -1;
                                                                                                for (e.heap_len = 0, e.heap_max = 573, r = 0; r < u; r++) 0 !== s[2 * r] ? (e.heap[++e.heap_len] = h = r, e.depth[r] = 0) : s[2 * r + 1] = 0;
                                                                                                for (; e.heap_len < 2;) s[2 * (i = e.heap[++e.heap_len] = h < 2 ? ++h : 0)] = 1, e.depth[i] = 0, e.opt_len--, o && (e.static_len -= a[2 * i + 1]);
                                                                                                for (t.max_code = h, r = e.heap_len >> 1; 1 <= r; r--) B(e, s, r);
                                                                                                for (i = u; r = e.heap[1], e.heap[1] = e.heap[e.heap_len--], B(e, s, 1), n = e.heap[1], e.heap[--e.heap_max] = r, e.heap[--e.heap_max] = n, s[2 * i] = s[2 * r] + s[2 * n], e.depth[i] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1, s[2 * r + 1] = s[2 * n + 1] = i, e.heap[1] = i++, B(e, s, 1), 2 <= e.heap_len;);
                                                                                                e.heap[--e.heap_max] = e.heap[1],
                                                                                                    function(e, t) {
                                                                                                        var r, n, i, s, a, o, u = t.dyn_tree,
                                                                                                            h = t.max_code,
                                                                                                            f = t.stat_desc.static_tree,
                                                                                                            l = t.stat_desc.has_stree,
                                                                                                            d = t.stat_desc.extra_bits,
                                                                                                            c = t.stat_desc.extra_base,
                                                                                                            p = t.stat_desc.max_length,
                                                                                                            m = 0;
                                                                                                        for (s = 0; s <= _; s++) e.bl_count[s] = 0;
                                                                                                        for (u[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < 573; r++) p < (s = u[2 * u[2 * (n = e.heap[r]) + 1] + 1] + 1) && (s = p, m++), u[2 * n + 1] = s, h < n || (e.bl_count[s]++, a = 0, c <= n && (a = d[n - c]), o = u[2 * n], e.opt_len += o * (s + a), l && (e.static_len += o * (f[2 * n + 1] + a)));
                                                                                                        if (0 !== m) {
                                                                                                            do {
                                                                                                                for (s = p - 1; 0 === e.bl_count[s];) s--;
                                                                                                                e.bl_count[s]--, e.bl_count[s + 1] += 2, e.bl_count[p]--, m -= 2
                                                                                                            } while (0 < m);
                                                                                                            for (s = p; 0 !== s; s--)
                                                                                                                for (n = e.bl_count[s]; 0 !== n;) h < (i = e.heap[--r]) || (u[2 * i + 1] !== s && (e.opt_len += (s - u[2 * i + 1]) * u[2 * i], u[2 * i + 1] = s), n--)
                                                                                                        }
                                                                                                    }(e, t), C(s, h, e.bl_count)
                                                                                            }

                                                                                            function D(e, t, r) {
                                                                                                var n, i, s = -1,
                                                                                                    a = t[1],
                                                                                                    o = 0,
                                                                                                    u = 7,
                                                                                                    h = 4;
                                                                                                for (0 === a && (u = 138, h = 3), t[2 * (r + 1) + 1] = 65535, n = 0; n <= r; n++) i = a, a = t[2 * (n + 1) + 1], ++o < u && i === a || (o < h ? e.bl_tree[2 * i] += o : 0 !== i ? (i !== s && e.bl_tree[2 * i]++, e.bl_tree[32]++) : o <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++, s = i, h = (o = 0) === a ? (u = 138, 3) : i === a ? (u = 6, 3) : (u = 7, 4))
                                                                                            }

                                                                                            function F(e, t, r) {
                                                                                                var n, i, s = -1,
                                                                                                    a = t[1],
                                                                                                    o = 0,
                                                                                                    u = 7,
                                                                                                    h = 4;
                                                                                                for (0 === a && (u = 138, h = 3), n = 0; n <= r; n++)
                                                                                                    if (i = a, a = t[2 * (n + 1) + 1], !(++o < u && i === a)) {
                                                                                                        if (o < h)
                                                                                                            for (; z(e, i, e.bl_tree), 0 != --o;);
                                                                                                        else 0 !== i ? (i !== s && (z(e, i, e.bl_tree), o--), z(e, 16, e.bl_tree), S(e, o - 3, 2)) : o <= 10 ? (z(e, 17, e.bl_tree), S(e, o - 3, 3)) : (z(e, 18, e.bl_tree), S(e, o - 11, 7));
                                                                                                        s = i, h = (o = 0) === a ? (u = 138, 3) : i === a ? (u = 6, 3) : (u = 7, 4)
                                                                                                    }
                                                                                            }
                                                                                            n(w);
                                                                                            var N = !1;

                                                                                            function U(e, t, r, n) {
                                                                                                var i, s, a;
                                                                                                S(e, 0 + (n ? 1 : 0), 3), s = t, a = r, I(i = e), x(i, a), x(i, ~a), o.arraySet(i.pending_buf, i.window, s, a, i.pending), i.pending += a
                                                                                            }
                                                                                            r._tr_init = function(e) {
                                                                                                N || (function() {
                                                                                                    var e, t, r, n, i, s = new Array(_ + 1);
                                                                                                    for (n = r = 0; n < 28; n++)
                                                                                                        for (m[n] = r, e = 0; e < 1 << u[n]; e++) p[r++] = n;
                                                                                                    for (p[r - 1] = n, n = i = 0; n < 16; n++)
                                                                                                        for (w[n] = i, e = 0; e < 1 << h[n]; e++) c[i++] = n;
                                                                                                    for (i >>= 7; n < 30; n++)
                                                                                                        for (w[n] = i << 7, e = 0; e < 1 << h[n] - 7; e++) c[256 + i++] = n;
                                                                                                    for (t = 0; t <= _; t++) s[t] = 0;
                                                                                                    for (e = 0; e <= 143;) l[2 * e + 1] = 8, e++, s[8]++;
                                                                                                    for (; e <= 255;) l[2 * e + 1] = 9, e++, s[9]++;
                                                                                                    for (; e <= 279;) l[2 * e + 1] = 7, e++, s[7]++;
                                                                                                    for (; e <= 287;) l[2 * e + 1] = 8, e++, s[8]++;
                                                                                                    for (C(l, 287, s), e = 0; e < 30; e++) d[2 * e + 1] = 5, d[2 * e] = E(e, 5);
                                                                                                    g = new y(l, u, 257, 286, _), v = new y(d, h, 0, 30, _), b = new y(new Array(0), a, 0, 19, 7)
                                                                                                }(), N = !0), e.l_desc = new s(e.dyn_ltree, g), e.d_desc = new s(e.dyn_dtree, v), e.bl_desc = new s(e.bl_tree, b), e.bi_buf = 0, e.bi_valid = 0, A(e)
                                                                                            }, r._tr_stored_block = U, r._tr_flush_block = function(e, t, r, n) {
                                                                                                var i, s, a = 0;
                                                                                                0 < e.level ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
                                                                                                    var t, r = 4093624447;
                                                                                                    for (t = 0; t <= 31; t++, r >>>= 1)
                                                                                                        if (1 & r && 0 !== e.dyn_ltree[2 * t]) return 0;
                                                                                                    if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
                                                                                                    for (t = 32; t < 256; t++)
                                                                                                        if (0 !== e.dyn_ltree[2 * t]) return 1;
                                                                                                    return 0
                                                                                                }(e)), R(e, e.l_desc), R(e, e.d_desc), a = function(e) {
                                                                                                    var t;
                                                                                                    for (D(e, e.dyn_ltree, e.l_desc.max_code), D(e, e.dyn_dtree, e.d_desc.max_code), R(e, e.bl_desc), t = 18; 3 <= t && 0 === e.bl_tree[2 * f[t] + 1]; t--);
                                                                                                    return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
                                                                                                }(e), i = e.opt_len + 3 + 7 >>> 3, (s = e.static_len + 3 + 7 >>> 3) <= i && (i = s)) : i = s = r + 5, r + 4 <= i && -1 !== t ? U(e, t, r, n) : 4 === e.strategy || s === i ? (S(e, 2 + (n ? 1 : 0), 3), T(e, l, d)) : (S(e, 4 + (n ? 1 : 0), 3), function(e, t, r, n) {
                                                                                                    var i;
                                                                                                    for (S(e, t - 257, 5), S(e, r - 1, 5), S(e, n - 4, 4), i = 0; i < n; i++) S(e, e.bl_tree[2 * f[i] + 1], 3);
                                                                                                    F(e, e.dyn_ltree, t - 1), F(e, e.dyn_dtree, r - 1)
                                                                                                }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1), T(e, e.dyn_ltree, e.dyn_dtree)), A(e), n && I(e)
                                                                                            }, r._tr_tally = function(e, t, r) {
                                                                                                return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & r, e.last_lit++, 0 === t ? e.dyn_ltree[2 * r]++ : (e.matches++, t--, e.dyn_ltree[2 * (p[r] + 256 + 1)]++, e.dyn_dtree[2 * k(t)]++), e.last_lit === e.lit_bufsize - 1
                                                                                            }, r._tr_align = function(e) {
                                                                                                var t;
                                                                                                S(e, 2, 3), z(e, 256, l), 16 === (t = e).bi_valid ? (x(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : 8 <= t.bi_valid && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8)
                                                                                            }
                                                                                        }, {
                                                                                            "../utils/common": 41
                                                                                        }],
                                                                                        53: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            t.exports = function() {
                                                                                                this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
                                                                                            }
                                                                                        }, {}],
                                                                                        54: [function(e, t, r) {
                                                                                            "use strict";
                                                                                            t.exports = "function" == typeof setImmediate ? setImmediate : function() {
                                                                                                var e = [].slice.apply(arguments);
                                                                                                e.splice(1, 0, 0), setTimeout.apply(null, e)
                                                                                            }
                                                                                        }, {}]
                                                                                    }, {}, [10])(10)
                                                                                })
                                                                            }).call(this, void 0 !== r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                                                                        }, {}]
                                                                    }, {}, [1])(1)
                                                                })
                                                            }).call(this, void 0 !== r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                                                        }, {}]
                                                    }, {}, [1])(1)
                                                })
                                            }).call(this, void 0 !== r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                                        }, {}]
                                    }, {}, [1])(1)
                                })
                            }).call(this, void 0 !== r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                        }, {}]
                    }, {}, [1])(1)
                })
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}]
    }, {}, [1])(1)
});