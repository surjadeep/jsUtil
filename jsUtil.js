/**
 * @name: JS Utilities
 * @author: Surjadeep Banerjee (study.surja@gmail.com)
 * @last update: 10-July-17
 */
var jsUtil = {
    isEmail: function(t) {
        var n = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return n.test(t)
    },
    isComma: function(t) {
        var n = /^[,]+$/;
        return n.test(t)
    },
    isDot: function(t) {
        var n = /^[.]+$/;
        return n.test(t)
    },
    isNonEmpty: function(t) {
        var n = /\S+/;
        return n.test(t)
    },
    isNumeric: function(t) {
        var n = /^\d+$/;
        return n.test(t)
    },
    isOnlyNumeric: function(t) {
        if ("" === t) return !0;
        var n = /^\d+$/;
        return n.test(t)
    },
    isEqual: function(t, n) {
        return t === n
    },
    isChecked: function(t) {
        return t.is(":checked")
    },
    getURLParamFromQString: function(t) {
        var n, r, e = decodeURIComponent(window.location.search.substring(1)),
            i = e.split("&");
        for (r = 0; r < i.length; r++)
            if (n = i[r].split("="), n[0] === t) return void 0 === n[1] ? !0 : n[1]
    },
    updateURLParamFromQString: function(t, n, r) {
        var e = "",
            o = t.split("?"),
            u = o[0],
            a = o[1],
            s = "";
        if (a)
            for (o = a.split("&"), i = 0; i < o.length; i++) o[i].split("=")[0] != n && (e += s + o[i], s = "&");
        var c = s + "" + n + "=" + r;
        return u + "?" + e + c
    },
    removeURLParamFromQString: function(t, n) {
        var r = t.split("?");
        if (r.length >= 2) {
            for (var e = encodeURIComponent(n) + "=", i = r[1].split(/[&;]/g), o = i.length; o-- > 0;) - 1 !== i[o].lastIndexOf(e, 0) && i.splice(o, 1);
            return t = r[0] + "?" + i.join("&")
        }
        return t
    },
    setCookie: function(t, n, r) {
        var e = new Date;
        e.setDate(e.getDate() + r);
        var i = escape(n) + (null == r ? "" : "; expires=" + e.toUTCString());
        document.cookie = t + "=" + i
    },
    getCookie: function(t) {
        var n, r, e, i = document.cookie.split(";");
        for (n = 0; n < i.length; n++)
            if (r = i[n].substr(0, i[n].indexOf("=")), e = i[n].substr(i[n].indexOf("=") + 1), r = r.replace(/^\s+|\s+$/g, ""), r == t) return unescape(e)
    },
    deleteAllCookies: function() {
        for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
            var r = t[n].indexOf("="),
                e = r > -1 ? t[n].substr(0, r) : t[n];
            document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
        }
    },
    randomStringHavingLength: function(t) {
        for (var n = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = 0; t > e; e++) n += r.charAt(Math.floor(Math.random() * r.length));
        return n
    },
    randomIntFromInterval: function(t, n) {
        return Math.floor(Math.random() * (n - t + 1) + t)
    },
    numberWithCommas: function(t) {
        return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    hasProp: function(t, n) {
        return t ? hasOwnProperty.call(t, n) : !1
    },
    sortJSONData: function(t, n, r) {
        var e = r ? function(n) {
            return r(n[t])
        } : function(n) {
            return n[t]
        };
        return n = n ? -1 : 1,
            function(t, r) {
                return t = e(t), r = e(r), n * ((t > r) - (r > t))
            }
    }
};