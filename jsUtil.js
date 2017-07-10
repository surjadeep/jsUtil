/**
 * @name: JS Utilities
 * @author: Surjadeep Banerjee (study.surja@gmail.com)
 * @update: 10-July-17
 */
var jsUtil = function() {
    this.isEmail = function(t) {
        var n = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return n.test(t)
    };
    this.isComma = function(t) {
        var n = /^[,]+$/;
        return n.test(t)
    };
    this.isDot = function(t) {
        var n = /^[.]+$/;
        return n.test(t)
    };
    this.isNonEmpty = function(t) {
        var n = /\S+/;
        return n.test(t)
    };
    this.isNumeric = function(t) {
        var n = /^\d+$/;
        return n.test(t)
    };
    this.isOnlyNumeric = function(t) {
        if ("" === t) return !0;
        var n = /^\d+$/;
        return n.test(t)
    };
    this.isEqual = function(t, n) {
        return t === n
    };
    this.isChecked = function(t) {
        return t.is(":checked")
    };
    this.getURLParamFromQString = function(t) {
        var n, r, e = decodeURIComponent(window.location.search.substring(1)),
            i = e.split("&");
        for (r = 0; r < i.length; r++)
            if (n = i[r].split("="), n[0] === t) return void 0 === n[1] ? !0 : n[1]
    };
    this.updateURLParamFromQString = function(t, n, r) {
        var e = "",
            o = t.split("?"),
            u = o[0],
            a = o[1],
            s = "";
        if (a)
            for (o = a.split("&"), i = 0; i < o.length; i++) o[i].split("=")[0] != n && (e += s + o[i], s = "&");
        var c = s + "" + n + "=" + r;
        return u + "?" + e + c
    };
    this.removeURLParamFromQString = function(t, n) {
        var r = t.split("?");
        if (r.length >= 2) {
            for (var e = encodeURIComponent(n) + "=", i = r[1].split(/[&;]/g), o = i.length; o-- > 0;) - 1 !== i[o].lastIndexOf(e, 0) && i.splice(o, 1);
            return t = r[0] + "?" + i.join("&")
        }
        return t
    };
    this.setCookie = function(t, n, r) {
        var e = new Date;
        e.setDate(e.getDate() + r);
        var i = escape(n) + (null == r ? "" : "; expires=" + e.toUTCString());
        document.cookie = t + "=" + i
    };
    this.getCookie = function(t) {
        var n, r, e, i = document.cookie.split(";");
        for (n = 0; n < i.length; n++)
            if (r = i[n].substr(0, i[n].indexOf("=")), e = i[n].substr(i[n].indexOf("=") + 1), r = r.replace(/^\s+|\s+$/g, ""), r == t) return unescape(e)
    };
    this.deleteAllCookies = function() {
        for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
            var r = t[n].indexOf("="),
                e = r > -1 ? t[n].substr(0, r) : t[n];
            document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
        }
    };
    this.randomStringHavingLength = function(t) {
        for (var n = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = 0; t > e; e++) n += r.charAt(Math.floor(Math.random() * r.length));
        return n
    };
    this.randomIntFromInterval = function(t, n) {
        return Math.floor(Math.random() * (n - t + 1) + t)
    };
    this.numberWithCommas = function(t) {
        return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    };
    this.hasProp = function(t, n) {
        return t ? hasOwnProperty.call(t, n) : !1
    };
    this.sortJSONData = function(t, n, r) {
        var e = r ? function(n) {
            return r(n[t])
        } : function(n) {
            return n[t]
        };
        return n = n ? -1 : 1,
            function(t, r) {
                return t = e(t), r = e(r), n * ((t > r) - (r > t))
            }
    };
    this.detectMyBrowser = function() {
        var e, t, a, n = {},
            i = (navigator.appVersion, navigator.userAgent),
            r = navigator.appName,
            o = "" + parseFloat(navigator.appVersion),
            l = parseInt(navigator.appVersion, 10);
        return -1 != (t = i.indexOf("OPR/")) ? (r = "Opera", o = i.substring(t + 4)) : -1 != (t = i.indexOf("Opera")) ? (r = "Opera", o = i.substring(t + 6), -1 != (t = i.indexOf("Version")) && (o = i.substring(t + 8))) : -1 != (t = i.indexOf("MSIE")) ? (r = "Microsoft Internet Explorer", o = i.substring(t + 5)) : -1 != (t = i.indexOf("Chrome")) ? (r = "Chrome", o = i.substring(t + 7)) : -1 != (t = i.indexOf("Safari")) ? (r = "Safari", o = i.substring(t + 7), -1 != (t = i.indexOf("Version")) && (o = i.substring(t + 8))) : -1 != (t = i.indexOf("Firefox")) ? (r = "Firefox", o = i.substring(t + 8)) : (e = i.lastIndexOf(" ") + 1) < (t = i.lastIndexOf("/")) && (r = i.substring(e, t), o = i.substring(t + 1), r.toLowerCase() == r.toUpperCase() && (r = navigator.appName)), -1 != (a = o.indexOf(";")) && (o = o.substring(0, a)), -1 != (a = o.indexOf(" ")) && (o = o.substring(0, a)), l = parseInt("" + o, 10), isNaN(l) && (o = "" + parseFloat(navigator.appVersion), l = parseInt(navigator.appVersion, 10)), n.name = r, n.fVersion = o, n.mVersion = l, n.navAppName = navigator.appName, n.navUserAgent = navigator.userAgent, n
    };
    this.sendCursorInAnimation = function(pos, time) {
        if (time <= 0) return;
        var elm = document.body;
        var difference = pos - elm.scrollTop;
        var perTick = difference / time * 10;
        setTimeout(function() {
            elm.scrollTop = elm.scrollTop + perTick;
            if (elm.scrollTop == pos) return;
            scrollTo(elm, pos, time - 10);
        }, 10);
    };
    this.showPageBlocker = function() {
        "function" === typeof this.hidePageBlocker && this.hidePageBlocker()
        var windowBlockerWrapper = document.createElement("div");
        var windowBlocker = document.createElement("div");
        var windowBlockerLoader = document.createElement("div");
        Element.prototype.setAttributes = function(attrs) {
            for (var idx in attrs) {
                if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
                    for (var prop in attrs[idx]) {
                        this.style[prop] = attrs[idx][prop];
                    }
                } else if (idx === 'html') {
                    this.innerHTML = attrs[idx];
                } else {
                    this.setAttribute(idx, attrs[idx]);
                }
            }
        };
        windowBlockerWrapper.setAttributes({
            'id': 'windowBlockerWrapper'
        });
        windowBlocker.setAttributes({
            'id': 'windowBlocker',
            'styles': {
                'position': 'fixed',
                'top': '0',
                'right': '0',
                'bottom': '0',
                'left': '0',
                'zIndex': '10000'
            }
        });
        windowBlockerLoader.setAttributes({
            'id': 'windowBlockerLoader',
            'styles': {
                'backgroundColor': 'rgb(255, 255, 255)',
                'color': 'rgb(0, 0, 0)',
                'border': 'rgb(255, 0, 0) 1px solid',
                'transition': '.4s ease-in-out',
                'position': 'fixed',
                'zIndex': '10001',
                'left': 'calc(50% - 35px)',
                'top': 'calc(50% - 35px)',
                'textAlign': 'center',
                'padding': '20px',
                'borderRadius': '3px'
            },
            'html': 'loading'
        });
        windowBlocker.setAttribute("display", "block");
        document.body.appendChild(windowBlockerWrapper);
        document.body.appendChild(windowBlocker);
        document.body.appendChild(windowBlockerLoader);
    };
    this.hidePageBlocker = function() {
        var windowBlockerWrapper = document.getElementById('windowBlockerWrapper');
        if (typeof(windowBlockerWrapper) != 'undefined' && windowBlockerWrapper != null) {
            windowBlockerWrapper.remove()
        }
        var windowBlocker = document.getElementById('windowBlocker');
        if (typeof(windowBlocker) != 'undefined' && windowBlocker != null) {
            windowBlocker.remove()
        }
        var windowBlockerLoader = document.getElementById('windowBlockerLoader');
        if (typeof(windowBlockerLoader) != 'undefined' && windowBlockerLoader != null) {
            windowBlockerLoader.remove()
        }
    };
};
