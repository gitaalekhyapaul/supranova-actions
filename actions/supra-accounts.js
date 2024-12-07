"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all3) => {
    for (var name in all3)
      __defProp(target, name, { get: all3[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // (disabled):crypto
  var require_crypto = __commonJS({
    "(disabled):crypto"() {
      init_supra_shim();
    }
  });

  // node_modules/tweetnacl/nacl-fast.js
  var require_nacl_fast = __commonJS({
    "node_modules/tweetnacl/nacl-fast.js"(exports, module) {
      init_supra_shim();
      (function(nacl3) {
        "use strict";
        var gf = function(init) {
          var i, r3 = new Float64Array(16);
          if (init) for (i = 0; i < init.length; i++) r3[i] = init[i];
          return r3;
        };
        var randombytes = function() {
          throw new Error("no PRNG");
        };
        var _0 = new Uint8Array(16);
        var _9 = new Uint8Array(32);
        _9[0] = 9;
        var gf0 = gf(), gf1 = gf([1]), _121665 = gf([56129, 1]), D2 = gf([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), D22 = gf([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), X2 = gf([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), Y2 = gf([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), I2 = gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
        function ts64(x, i, h2, l) {
          x[i] = h2 >> 24 & 255;
          x[i + 1] = h2 >> 16 & 255;
          x[i + 2] = h2 >> 8 & 255;
          x[i + 3] = h2 & 255;
          x[i + 4] = l >> 24 & 255;
          x[i + 5] = l >> 16 & 255;
          x[i + 6] = l >> 8 & 255;
          x[i + 7] = l & 255;
        }
        function vn(x, xi2, y, yi, n) {
          var i, d = 0;
          for (i = 0; i < n; i++) d |= x[xi2 + i] ^ y[yi + i];
          return (1 & d - 1 >>> 8) - 1;
        }
        function crypto_verify_16(x, xi2, y, yi) {
          return vn(x, xi2, y, yi, 16);
        }
        function crypto_verify_32(x, xi2, y, yi) {
          return vn(x, xi2, y, yi, 32);
        }
        function core_salsa20(o, p, k2, c) {
          var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k2[0] & 255 | (k2[1] & 255) << 8 | (k2[2] & 255) << 16 | (k2[3] & 255) << 24, j2 = k2[4] & 255 | (k2[5] & 255) << 8 | (k2[6] & 255) << 16 | (k2[7] & 255) << 24, j3 = k2[8] & 255 | (k2[9] & 255) << 8 | (k2[10] & 255) << 16 | (k2[11] & 255) << 24, j4 = k2[12] & 255 | (k2[13] & 255) << 8 | (k2[14] & 255) << 16 | (k2[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k2[16] & 255 | (k2[17] & 255) << 8 | (k2[18] & 255) << 16 | (k2[19] & 255) << 24, j12 = k2[20] & 255 | (k2[21] & 255) << 8 | (k2[22] & 255) << 16 | (k2[23] & 255) << 24, j13 = k2[24] & 255 | (k2[25] & 255) << 8 | (k2[26] & 255) << 16 | (k2[27] & 255) << 24, j14 = k2[28] & 255 | (k2[29] & 255) << 8 | (k2[30] & 255) << 16 | (k2[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
          var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u2;
          for (var i = 0; i < 20; i += 2) {
            u2 = x0 + x12 | 0;
            x4 ^= u2 << 7 | u2 >>> 32 - 7;
            u2 = x4 + x0 | 0;
            x8 ^= u2 << 9 | u2 >>> 32 - 9;
            u2 = x8 + x4 | 0;
            x12 ^= u2 << 13 | u2 >>> 32 - 13;
            u2 = x12 + x8 | 0;
            x0 ^= u2 << 18 | u2 >>> 32 - 18;
            u2 = x5 + x1 | 0;
            x9 ^= u2 << 7 | u2 >>> 32 - 7;
            u2 = x9 + x5 | 0;
            x13 ^= u2 << 9 | u2 >>> 32 - 9;
            u2 = x13 + x9 | 0;
            x1 ^= u2 << 13 | u2 >>> 32 - 13;
            u2 = x1 + x13 | 0;
            x5 ^= u2 << 18 | u2 >>> 32 - 18;
            u2 = x10 + x6 | 0;
            x14 ^= u2 << 7 | u2 >>> 32 - 7;
            u2 = x14 + x10 | 0;
            x2 ^= u2 << 9 | u2 >>> 32 - 9;
            u2 = x2 + x14 | 0;
            x6 ^= u2 << 13 | u2 >>> 32 - 13;
            u2 = x6 + x2 | 0;
            x10 ^= u2 << 18 | u2 >>> 32 - 18;
            u2 = x15 + x11 | 0;
            x3 ^= u2 << 7 | u2 >>> 32 - 7;
            u2 = x3 + x15 | 0;
            x7 ^= u2 << 9 | u2 >>> 32 - 9;
            u2 = x7 + x3 | 0;
            x11 ^= u2 << 13 | u2 >>> 32 - 13;
            u2 = x11 + x7 | 0;
            x15 ^= u2 << 18 | u2 >>> 32 - 18;
            u2 = x0 + x3 | 0;
            x1 ^= u2 << 7 | u2 >>> 32 - 7;
            u2 = x1 + x0 | 0;
            x2 ^= u2 << 9 | u2 >>> 32 - 9;
            u2 = x2 + x1 | 0;
            x3 ^= u2 << 13 | u2 >>> 32 - 13;
            u2 = x3 + x2 | 0;
            x0 ^= u2 << 18 | u2 >>> 32 - 18;
            u2 = x5 + x4 | 0;
            x6 ^= u2 << 7 | u2 >>> 32 - 7;
            u2 = x6 + x5 | 0;
            x7 ^= u2 << 9 | u2 >>> 32 - 9;
            u2 = x7 + x6 | 0;
            x4 ^= u2 << 13 | u2 >>> 32 - 13;
            u2 = x4 + x7 | 0;
            x5 ^= u2 << 18 | u2 >>> 32 - 18;
            u2 = x10 + x9 | 0;
            x11 ^= u2 << 7 | u2 >>> 32 - 7;
            u2 = x11 + x10 | 0;
            x8 ^= u2 << 9 | u2 >>> 32 - 9;
            u2 = x8 + x11 | 0;
            x9 ^= u2 << 13 | u2 >>> 32 - 13;
            u2 = x9 + x8 | 0;
            x10 ^= u2 << 18 | u2 >>> 32 - 18;
            u2 = x15 + x14 | 0;
            x12 ^= u2 << 7 | u2 >>> 32 - 7;
            u2 = x12 + x15 | 0;
            x13 ^= u2 << 9 | u2 >>> 32 - 9;
            u2 = x13 + x12 | 0;
            x14 ^= u2 << 13 | u2 >>> 32 - 13;
            u2 = x14 + x13 | 0;
            x15 ^= u2 << 18 | u2 >>> 32 - 18;
          }
          x0 = x0 + j0 | 0;
          x1 = x1 + j1 | 0;
          x2 = x2 + j2 | 0;
          x3 = x3 + j3 | 0;
          x4 = x4 + j4 | 0;
          x5 = x5 + j5 | 0;
          x6 = x6 + j6 | 0;
          x7 = x7 + j7 | 0;
          x8 = x8 + j8 | 0;
          x9 = x9 + j9 | 0;
          x10 = x10 + j10 | 0;
          x11 = x11 + j11 | 0;
          x12 = x12 + j12 | 0;
          x13 = x13 + j13 | 0;
          x14 = x14 + j14 | 0;
          x15 = x15 + j15 | 0;
          o[0] = x0 >>> 0 & 255;
          o[1] = x0 >>> 8 & 255;
          o[2] = x0 >>> 16 & 255;
          o[3] = x0 >>> 24 & 255;
          o[4] = x1 >>> 0 & 255;
          o[5] = x1 >>> 8 & 255;
          o[6] = x1 >>> 16 & 255;
          o[7] = x1 >>> 24 & 255;
          o[8] = x2 >>> 0 & 255;
          o[9] = x2 >>> 8 & 255;
          o[10] = x2 >>> 16 & 255;
          o[11] = x2 >>> 24 & 255;
          o[12] = x3 >>> 0 & 255;
          o[13] = x3 >>> 8 & 255;
          o[14] = x3 >>> 16 & 255;
          o[15] = x3 >>> 24 & 255;
          o[16] = x4 >>> 0 & 255;
          o[17] = x4 >>> 8 & 255;
          o[18] = x4 >>> 16 & 255;
          o[19] = x4 >>> 24 & 255;
          o[20] = x5 >>> 0 & 255;
          o[21] = x5 >>> 8 & 255;
          o[22] = x5 >>> 16 & 255;
          o[23] = x5 >>> 24 & 255;
          o[24] = x6 >>> 0 & 255;
          o[25] = x6 >>> 8 & 255;
          o[26] = x6 >>> 16 & 255;
          o[27] = x6 >>> 24 & 255;
          o[28] = x7 >>> 0 & 255;
          o[29] = x7 >>> 8 & 255;
          o[30] = x7 >>> 16 & 255;
          o[31] = x7 >>> 24 & 255;
          o[32] = x8 >>> 0 & 255;
          o[33] = x8 >>> 8 & 255;
          o[34] = x8 >>> 16 & 255;
          o[35] = x8 >>> 24 & 255;
          o[36] = x9 >>> 0 & 255;
          o[37] = x9 >>> 8 & 255;
          o[38] = x9 >>> 16 & 255;
          o[39] = x9 >>> 24 & 255;
          o[40] = x10 >>> 0 & 255;
          o[41] = x10 >>> 8 & 255;
          o[42] = x10 >>> 16 & 255;
          o[43] = x10 >>> 24 & 255;
          o[44] = x11 >>> 0 & 255;
          o[45] = x11 >>> 8 & 255;
          o[46] = x11 >>> 16 & 255;
          o[47] = x11 >>> 24 & 255;
          o[48] = x12 >>> 0 & 255;
          o[49] = x12 >>> 8 & 255;
          o[50] = x12 >>> 16 & 255;
          o[51] = x12 >>> 24 & 255;
          o[52] = x13 >>> 0 & 255;
          o[53] = x13 >>> 8 & 255;
          o[54] = x13 >>> 16 & 255;
          o[55] = x13 >>> 24 & 255;
          o[56] = x14 >>> 0 & 255;
          o[57] = x14 >>> 8 & 255;
          o[58] = x14 >>> 16 & 255;
          o[59] = x14 >>> 24 & 255;
          o[60] = x15 >>> 0 & 255;
          o[61] = x15 >>> 8 & 255;
          o[62] = x15 >>> 16 & 255;
          o[63] = x15 >>> 24 & 255;
        }
        function core_hsalsa20(o, p, k2, c) {
          var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k2[0] & 255 | (k2[1] & 255) << 8 | (k2[2] & 255) << 16 | (k2[3] & 255) << 24, j2 = k2[4] & 255 | (k2[5] & 255) << 8 | (k2[6] & 255) << 16 | (k2[7] & 255) << 24, j3 = k2[8] & 255 | (k2[9] & 255) << 8 | (k2[10] & 255) << 16 | (k2[11] & 255) << 24, j4 = k2[12] & 255 | (k2[13] & 255) << 8 | (k2[14] & 255) << 16 | (k2[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k2[16] & 255 | (k2[17] & 255) << 8 | (k2[18] & 255) << 16 | (k2[19] & 255) << 24, j12 = k2[20] & 255 | (k2[21] & 255) << 8 | (k2[22] & 255) << 16 | (k2[23] & 255) << 24, j13 = k2[24] & 255 | (k2[25] & 255) << 8 | (k2[26] & 255) << 16 | (k2[27] & 255) << 24, j14 = k2[28] & 255 | (k2[29] & 255) << 8 | (k2[30] & 255) << 16 | (k2[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
          var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u2;
          for (var i = 0; i < 20; i += 2) {
            u2 = x0 + x12 | 0;
            x4 ^= u2 << 7 | u2 >>> 32 - 7;
            u2 = x4 + x0 | 0;
            x8 ^= u2 << 9 | u2 >>> 32 - 9;
            u2 = x8 + x4 | 0;
            x12 ^= u2 << 13 | u2 >>> 32 - 13;
            u2 = x12 + x8 | 0;
            x0 ^= u2 << 18 | u2 >>> 32 - 18;
            u2 = x5 + x1 | 0;
            x9 ^= u2 << 7 | u2 >>> 32 - 7;
            u2 = x9 + x5 | 0;
            x13 ^= u2 << 9 | u2 >>> 32 - 9;
            u2 = x13 + x9 | 0;
            x1 ^= u2 << 13 | u2 >>> 32 - 13;
            u2 = x1 + x13 | 0;
            x5 ^= u2 << 18 | u2 >>> 32 - 18;
            u2 = x10 + x6 | 0;
            x14 ^= u2 << 7 | u2 >>> 32 - 7;
            u2 = x14 + x10 | 0;
            x2 ^= u2 << 9 | u2 >>> 32 - 9;
            u2 = x2 + x14 | 0;
            x6 ^= u2 << 13 | u2 >>> 32 - 13;
            u2 = x6 + x2 | 0;
            x10 ^= u2 << 18 | u2 >>> 32 - 18;
            u2 = x15 + x11 | 0;
            x3 ^= u2 << 7 | u2 >>> 32 - 7;
            u2 = x3 + x15 | 0;
            x7 ^= u2 << 9 | u2 >>> 32 - 9;
            u2 = x7 + x3 | 0;
            x11 ^= u2 << 13 | u2 >>> 32 - 13;
            u2 = x11 + x7 | 0;
            x15 ^= u2 << 18 | u2 >>> 32 - 18;
            u2 = x0 + x3 | 0;
            x1 ^= u2 << 7 | u2 >>> 32 - 7;
            u2 = x1 + x0 | 0;
            x2 ^= u2 << 9 | u2 >>> 32 - 9;
            u2 = x2 + x1 | 0;
            x3 ^= u2 << 13 | u2 >>> 32 - 13;
            u2 = x3 + x2 | 0;
            x0 ^= u2 << 18 | u2 >>> 32 - 18;
            u2 = x5 + x4 | 0;
            x6 ^= u2 << 7 | u2 >>> 32 - 7;
            u2 = x6 + x5 | 0;
            x7 ^= u2 << 9 | u2 >>> 32 - 9;
            u2 = x7 + x6 | 0;
            x4 ^= u2 << 13 | u2 >>> 32 - 13;
            u2 = x4 + x7 | 0;
            x5 ^= u2 << 18 | u2 >>> 32 - 18;
            u2 = x10 + x9 | 0;
            x11 ^= u2 << 7 | u2 >>> 32 - 7;
            u2 = x11 + x10 | 0;
            x8 ^= u2 << 9 | u2 >>> 32 - 9;
            u2 = x8 + x11 | 0;
            x9 ^= u2 << 13 | u2 >>> 32 - 13;
            u2 = x9 + x8 | 0;
            x10 ^= u2 << 18 | u2 >>> 32 - 18;
            u2 = x15 + x14 | 0;
            x12 ^= u2 << 7 | u2 >>> 32 - 7;
            u2 = x12 + x15 | 0;
            x13 ^= u2 << 9 | u2 >>> 32 - 9;
            u2 = x13 + x12 | 0;
            x14 ^= u2 << 13 | u2 >>> 32 - 13;
            u2 = x14 + x13 | 0;
            x15 ^= u2 << 18 | u2 >>> 32 - 18;
          }
          o[0] = x0 >>> 0 & 255;
          o[1] = x0 >>> 8 & 255;
          o[2] = x0 >>> 16 & 255;
          o[3] = x0 >>> 24 & 255;
          o[4] = x5 >>> 0 & 255;
          o[5] = x5 >>> 8 & 255;
          o[6] = x5 >>> 16 & 255;
          o[7] = x5 >>> 24 & 255;
          o[8] = x10 >>> 0 & 255;
          o[9] = x10 >>> 8 & 255;
          o[10] = x10 >>> 16 & 255;
          o[11] = x10 >>> 24 & 255;
          o[12] = x15 >>> 0 & 255;
          o[13] = x15 >>> 8 & 255;
          o[14] = x15 >>> 16 & 255;
          o[15] = x15 >>> 24 & 255;
          o[16] = x6 >>> 0 & 255;
          o[17] = x6 >>> 8 & 255;
          o[18] = x6 >>> 16 & 255;
          o[19] = x6 >>> 24 & 255;
          o[20] = x7 >>> 0 & 255;
          o[21] = x7 >>> 8 & 255;
          o[22] = x7 >>> 16 & 255;
          o[23] = x7 >>> 24 & 255;
          o[24] = x8 >>> 0 & 255;
          o[25] = x8 >>> 8 & 255;
          o[26] = x8 >>> 16 & 255;
          o[27] = x8 >>> 24 & 255;
          o[28] = x9 >>> 0 & 255;
          o[29] = x9 >>> 8 & 255;
          o[30] = x9 >>> 16 & 255;
          o[31] = x9 >>> 24 & 255;
        }
        function crypto_core_salsa20(out, inp, k2, c) {
          core_salsa20(out, inp, k2, c);
        }
        function crypto_core_hsalsa20(out, inp, k2, c) {
          core_hsalsa20(out, inp, k2, c);
        }
        var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
        function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k2) {
          var z2 = new Uint8Array(16), x = new Uint8Array(64);
          var u2, i;
          for (i = 0; i < 16; i++) z2[i] = 0;
          for (i = 0; i < 8; i++) z2[i] = n[i];
          while (b >= 64) {
            crypto_core_salsa20(x, z2, k2, sigma);
            for (i = 0; i < 64; i++) c[cpos + i] = m[mpos + i] ^ x[i];
            u2 = 1;
            for (i = 8; i < 16; i++) {
              u2 = u2 + (z2[i] & 255) | 0;
              z2[i] = u2 & 255;
              u2 >>>= 8;
            }
            b -= 64;
            cpos += 64;
            mpos += 64;
          }
          if (b > 0) {
            crypto_core_salsa20(x, z2, k2, sigma);
            for (i = 0; i < b; i++) c[cpos + i] = m[mpos + i] ^ x[i];
          }
          return 0;
        }
        function crypto_stream_salsa20(c, cpos, b, n, k2) {
          var z2 = new Uint8Array(16), x = new Uint8Array(64);
          var u2, i;
          for (i = 0; i < 16; i++) z2[i] = 0;
          for (i = 0; i < 8; i++) z2[i] = n[i];
          while (b >= 64) {
            crypto_core_salsa20(x, z2, k2, sigma);
            for (i = 0; i < 64; i++) c[cpos + i] = x[i];
            u2 = 1;
            for (i = 8; i < 16; i++) {
              u2 = u2 + (z2[i] & 255) | 0;
              z2[i] = u2 & 255;
              u2 >>>= 8;
            }
            b -= 64;
            cpos += 64;
          }
          if (b > 0) {
            crypto_core_salsa20(x, z2, k2, sigma);
            for (i = 0; i < b; i++) c[cpos + i] = x[i];
          }
          return 0;
        }
        function crypto_stream(c, cpos, d, n, k2) {
          var s = new Uint8Array(32);
          crypto_core_hsalsa20(s, n, k2, sigma);
          var sn2 = new Uint8Array(8);
          for (var i = 0; i < 8; i++) sn2[i] = n[i + 16];
          return crypto_stream_salsa20(c, cpos, d, sn2, s);
        }
        function crypto_stream_xor(c, cpos, m, mpos, d, n, k2) {
          var s = new Uint8Array(32);
          crypto_core_hsalsa20(s, n, k2, sigma);
          var sn2 = new Uint8Array(8);
          for (var i = 0; i < 8; i++) sn2[i] = n[i + 16];
          return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, sn2, s);
        }
        var poly1305 = function(key) {
          this.buffer = new Uint8Array(16);
          this.r = new Uint16Array(10);
          this.h = new Uint16Array(10);
          this.pad = new Uint16Array(8);
          this.leftover = 0;
          this.fin = 0;
          var t0, t1, t2, t3, t4, t5, t6, t7;
          t0 = key[0] & 255 | (key[1] & 255) << 8;
          this.r[0] = t0 & 8191;
          t1 = key[2] & 255 | (key[3] & 255) << 8;
          this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
          t2 = key[4] & 255 | (key[5] & 255) << 8;
          this.r[2] = (t1 >>> 10 | t2 << 6) & 7939;
          t3 = key[6] & 255 | (key[7] & 255) << 8;
          this.r[3] = (t2 >>> 7 | t3 << 9) & 8191;
          t4 = key[8] & 255 | (key[9] & 255) << 8;
          this.r[4] = (t3 >>> 4 | t4 << 12) & 255;
          this.r[5] = t4 >>> 1 & 8190;
          t5 = key[10] & 255 | (key[11] & 255) << 8;
          this.r[6] = (t4 >>> 14 | t5 << 2) & 8191;
          t6 = key[12] & 255 | (key[13] & 255) << 8;
          this.r[7] = (t5 >>> 11 | t6 << 5) & 8065;
          t7 = key[14] & 255 | (key[15] & 255) << 8;
          this.r[8] = (t6 >>> 8 | t7 << 8) & 8191;
          this.r[9] = t7 >>> 5 & 127;
          this.pad[0] = key[16] & 255 | (key[17] & 255) << 8;
          this.pad[1] = key[18] & 255 | (key[19] & 255) << 8;
          this.pad[2] = key[20] & 255 | (key[21] & 255) << 8;
          this.pad[3] = key[22] & 255 | (key[23] & 255) << 8;
          this.pad[4] = key[24] & 255 | (key[25] & 255) << 8;
          this.pad[5] = key[26] & 255 | (key[27] & 255) << 8;
          this.pad[6] = key[28] & 255 | (key[29] & 255) << 8;
          this.pad[7] = key[30] & 255 | (key[31] & 255) << 8;
        };
        poly1305.prototype.blocks = function(m, mpos, bytes2) {
          var hibit = this.fin ? 0 : 1 << 11;
          var t0, t1, t2, t3, t4, t5, t6, t7, c;
          var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
          var h0 = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], h7 = this.h[7], h8 = this.h[8], h9 = this.h[9];
          var r0 = this.r[0], r1 = this.r[1], r22 = this.r[2], r3 = this.r[3], r4 = this.r[4], r5 = this.r[5], r6 = this.r[6], r7 = this.r[7], r8 = this.r[8], r9 = this.r[9];
          while (bytes2 >= 16) {
            t0 = m[mpos + 0] & 255 | (m[mpos + 1] & 255) << 8;
            h0 += t0 & 8191;
            t1 = m[mpos + 2] & 255 | (m[mpos + 3] & 255) << 8;
            h1 += (t0 >>> 13 | t1 << 3) & 8191;
            t2 = m[mpos + 4] & 255 | (m[mpos + 5] & 255) << 8;
            h2 += (t1 >>> 10 | t2 << 6) & 8191;
            t3 = m[mpos + 6] & 255 | (m[mpos + 7] & 255) << 8;
            h3 += (t2 >>> 7 | t3 << 9) & 8191;
            t4 = m[mpos + 8] & 255 | (m[mpos + 9] & 255) << 8;
            h4 += (t3 >>> 4 | t4 << 12) & 8191;
            h5 += t4 >>> 1 & 8191;
            t5 = m[mpos + 10] & 255 | (m[mpos + 11] & 255) << 8;
            h6 += (t4 >>> 14 | t5 << 2) & 8191;
            t6 = m[mpos + 12] & 255 | (m[mpos + 13] & 255) << 8;
            h7 += (t5 >>> 11 | t6 << 5) & 8191;
            t7 = m[mpos + 14] & 255 | (m[mpos + 15] & 255) << 8;
            h8 += (t6 >>> 8 | t7 << 8) & 8191;
            h9 += t7 >>> 5 | hibit;
            c = 0;
            d0 = c;
            d0 += h0 * r0;
            d0 += h1 * (5 * r9);
            d0 += h2 * (5 * r8);
            d0 += h3 * (5 * r7);
            d0 += h4 * (5 * r6);
            c = d0 >>> 13;
            d0 &= 8191;
            d0 += h5 * (5 * r5);
            d0 += h6 * (5 * r4);
            d0 += h7 * (5 * r3);
            d0 += h8 * (5 * r22);
            d0 += h9 * (5 * r1);
            c += d0 >>> 13;
            d0 &= 8191;
            d1 = c;
            d1 += h0 * r1;
            d1 += h1 * r0;
            d1 += h2 * (5 * r9);
            d1 += h3 * (5 * r8);
            d1 += h4 * (5 * r7);
            c = d1 >>> 13;
            d1 &= 8191;
            d1 += h5 * (5 * r6);
            d1 += h6 * (5 * r5);
            d1 += h7 * (5 * r4);
            d1 += h8 * (5 * r3);
            d1 += h9 * (5 * r22);
            c += d1 >>> 13;
            d1 &= 8191;
            d2 = c;
            d2 += h0 * r22;
            d2 += h1 * r1;
            d2 += h2 * r0;
            d2 += h3 * (5 * r9);
            d2 += h4 * (5 * r8);
            c = d2 >>> 13;
            d2 &= 8191;
            d2 += h5 * (5 * r7);
            d2 += h6 * (5 * r6);
            d2 += h7 * (5 * r5);
            d2 += h8 * (5 * r4);
            d2 += h9 * (5 * r3);
            c += d2 >>> 13;
            d2 &= 8191;
            d3 = c;
            d3 += h0 * r3;
            d3 += h1 * r22;
            d3 += h2 * r1;
            d3 += h3 * r0;
            d3 += h4 * (5 * r9);
            c = d3 >>> 13;
            d3 &= 8191;
            d3 += h5 * (5 * r8);
            d3 += h6 * (5 * r7);
            d3 += h7 * (5 * r6);
            d3 += h8 * (5 * r5);
            d3 += h9 * (5 * r4);
            c += d3 >>> 13;
            d3 &= 8191;
            d4 = c;
            d4 += h0 * r4;
            d4 += h1 * r3;
            d4 += h2 * r22;
            d4 += h3 * r1;
            d4 += h4 * r0;
            c = d4 >>> 13;
            d4 &= 8191;
            d4 += h5 * (5 * r9);
            d4 += h6 * (5 * r8);
            d4 += h7 * (5 * r7);
            d4 += h8 * (5 * r6);
            d4 += h9 * (5 * r5);
            c += d4 >>> 13;
            d4 &= 8191;
            d5 = c;
            d5 += h0 * r5;
            d5 += h1 * r4;
            d5 += h2 * r3;
            d5 += h3 * r22;
            d5 += h4 * r1;
            c = d5 >>> 13;
            d5 &= 8191;
            d5 += h5 * r0;
            d5 += h6 * (5 * r9);
            d5 += h7 * (5 * r8);
            d5 += h8 * (5 * r7);
            d5 += h9 * (5 * r6);
            c += d5 >>> 13;
            d5 &= 8191;
            d6 = c;
            d6 += h0 * r6;
            d6 += h1 * r5;
            d6 += h2 * r4;
            d6 += h3 * r3;
            d6 += h4 * r22;
            c = d6 >>> 13;
            d6 &= 8191;
            d6 += h5 * r1;
            d6 += h6 * r0;
            d6 += h7 * (5 * r9);
            d6 += h8 * (5 * r8);
            d6 += h9 * (5 * r7);
            c += d6 >>> 13;
            d6 &= 8191;
            d7 = c;
            d7 += h0 * r7;
            d7 += h1 * r6;
            d7 += h2 * r5;
            d7 += h3 * r4;
            d7 += h4 * r3;
            c = d7 >>> 13;
            d7 &= 8191;
            d7 += h5 * r22;
            d7 += h6 * r1;
            d7 += h7 * r0;
            d7 += h8 * (5 * r9);
            d7 += h9 * (5 * r8);
            c += d7 >>> 13;
            d7 &= 8191;
            d8 = c;
            d8 += h0 * r8;
            d8 += h1 * r7;
            d8 += h2 * r6;
            d8 += h3 * r5;
            d8 += h4 * r4;
            c = d8 >>> 13;
            d8 &= 8191;
            d8 += h5 * r3;
            d8 += h6 * r22;
            d8 += h7 * r1;
            d8 += h8 * r0;
            d8 += h9 * (5 * r9);
            c += d8 >>> 13;
            d8 &= 8191;
            d9 = c;
            d9 += h0 * r9;
            d9 += h1 * r8;
            d9 += h2 * r7;
            d9 += h3 * r6;
            d9 += h4 * r5;
            c = d9 >>> 13;
            d9 &= 8191;
            d9 += h5 * r4;
            d9 += h6 * r3;
            d9 += h7 * r22;
            d9 += h8 * r1;
            d9 += h9 * r0;
            c += d9 >>> 13;
            d9 &= 8191;
            c = (c << 2) + c | 0;
            c = c + d0 | 0;
            d0 = c & 8191;
            c = c >>> 13;
            d1 += c;
            h0 = d0;
            h1 = d1;
            h2 = d2;
            h3 = d3;
            h4 = d4;
            h5 = d5;
            h6 = d6;
            h7 = d7;
            h8 = d8;
            h9 = d9;
            mpos += 16;
            bytes2 -= 16;
          }
          this.h[0] = h0;
          this.h[1] = h1;
          this.h[2] = h2;
          this.h[3] = h3;
          this.h[4] = h4;
          this.h[5] = h5;
          this.h[6] = h6;
          this.h[7] = h7;
          this.h[8] = h8;
          this.h[9] = h9;
        };
        poly1305.prototype.finish = function(mac, macpos) {
          var g = new Uint16Array(10);
          var c, mask, f, i;
          if (this.leftover) {
            i = this.leftover;
            this.buffer[i++] = 1;
            for (; i < 16; i++) this.buffer[i] = 0;
            this.fin = 1;
            this.blocks(this.buffer, 0, 16);
          }
          c = this.h[1] >>> 13;
          this.h[1] &= 8191;
          for (i = 2; i < 10; i++) {
            this.h[i] += c;
            c = this.h[i] >>> 13;
            this.h[i] &= 8191;
          }
          this.h[0] += c * 5;
          c = this.h[0] >>> 13;
          this.h[0] &= 8191;
          this.h[1] += c;
          c = this.h[1] >>> 13;
          this.h[1] &= 8191;
          this.h[2] += c;
          g[0] = this.h[0] + 5;
          c = g[0] >>> 13;
          g[0] &= 8191;
          for (i = 1; i < 10; i++) {
            g[i] = this.h[i] + c;
            c = g[i] >>> 13;
            g[i] &= 8191;
          }
          g[9] -= 1 << 13;
          mask = (c ^ 1) - 1;
          for (i = 0; i < 10; i++) g[i] &= mask;
          mask = ~mask;
          for (i = 0; i < 10; i++) this.h[i] = this.h[i] & mask | g[i];
          this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
          this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
          this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
          this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
          this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
          this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
          this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
          this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
          f = this.h[0] + this.pad[0];
          this.h[0] = f & 65535;
          for (i = 1; i < 8; i++) {
            f = (this.h[i] + this.pad[i] | 0) + (f >>> 16) | 0;
            this.h[i] = f & 65535;
          }
          mac[macpos + 0] = this.h[0] >>> 0 & 255;
          mac[macpos + 1] = this.h[0] >>> 8 & 255;
          mac[macpos + 2] = this.h[1] >>> 0 & 255;
          mac[macpos + 3] = this.h[1] >>> 8 & 255;
          mac[macpos + 4] = this.h[2] >>> 0 & 255;
          mac[macpos + 5] = this.h[2] >>> 8 & 255;
          mac[macpos + 6] = this.h[3] >>> 0 & 255;
          mac[macpos + 7] = this.h[3] >>> 8 & 255;
          mac[macpos + 8] = this.h[4] >>> 0 & 255;
          mac[macpos + 9] = this.h[4] >>> 8 & 255;
          mac[macpos + 10] = this.h[5] >>> 0 & 255;
          mac[macpos + 11] = this.h[5] >>> 8 & 255;
          mac[macpos + 12] = this.h[6] >>> 0 & 255;
          mac[macpos + 13] = this.h[6] >>> 8 & 255;
          mac[macpos + 14] = this.h[7] >>> 0 & 255;
          mac[macpos + 15] = this.h[7] >>> 8 & 255;
        };
        poly1305.prototype.update = function(m, mpos, bytes2) {
          var i, want;
          if (this.leftover) {
            want = 16 - this.leftover;
            if (want > bytes2)
              want = bytes2;
            for (i = 0; i < want; i++)
              this.buffer[this.leftover + i] = m[mpos + i];
            bytes2 -= want;
            mpos += want;
            this.leftover += want;
            if (this.leftover < 16)
              return;
            this.blocks(this.buffer, 0, 16);
            this.leftover = 0;
          }
          if (bytes2 >= 16) {
            want = bytes2 - bytes2 % 16;
            this.blocks(m, mpos, want);
            mpos += want;
            bytes2 -= want;
          }
          if (bytes2) {
            for (i = 0; i < bytes2; i++)
              this.buffer[this.leftover + i] = m[mpos + i];
            this.leftover += bytes2;
          }
        };
        function crypto_onetimeauth(out, outpos, m, mpos, n, k2) {
          var s = new poly1305(k2);
          s.update(m, mpos, n);
          s.finish(out, outpos);
          return 0;
        }
        function crypto_onetimeauth_verify(h2, hpos, m, mpos, n, k2) {
          var x = new Uint8Array(16);
          crypto_onetimeauth(x, 0, m, mpos, n, k2);
          return crypto_verify_16(h2, hpos, x, 0);
        }
        function crypto_secretbox(c, m, d, n, k2) {
          var i;
          if (d < 32) return -1;
          crypto_stream_xor(c, 0, m, 0, d, n, k2);
          crypto_onetimeauth(c, 16, c, 32, d - 32, c);
          for (i = 0; i < 16; i++) c[i] = 0;
          return 0;
        }
        function crypto_secretbox_open(m, c, d, n, k2) {
          var i;
          var x = new Uint8Array(32);
          if (d < 32) return -1;
          crypto_stream(x, 0, 32, n, k2);
          if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0) return -1;
          crypto_stream_xor(m, 0, c, 0, d, n, k2);
          for (i = 0; i < 32; i++) m[i] = 0;
          return 0;
        }
        function set25519(r3, a) {
          var i;
          for (i = 0; i < 16; i++) r3[i] = a[i] | 0;
        }
        function car25519(o) {
          var i, v2, c = 1;
          for (i = 0; i < 16; i++) {
            v2 = o[i] + c + 65535;
            c = Math.floor(v2 / 65536);
            o[i] = v2 - c * 65536;
          }
          o[0] += c - 1 + 37 * (c - 1);
        }
        function sel25519(p, q2, b) {
          var t, c = ~(b - 1);
          for (var i = 0; i < 16; i++) {
            t = c & (p[i] ^ q2[i]);
            p[i] ^= t;
            q2[i] ^= t;
          }
        }
        function pack25519(o, n) {
          var i, j2, b;
          var m = gf(), t = gf();
          for (i = 0; i < 16; i++) t[i] = n[i];
          car25519(t);
          car25519(t);
          car25519(t);
          for (j2 = 0; j2 < 2; j2++) {
            m[0] = t[0] - 65517;
            for (i = 1; i < 15; i++) {
              m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
              m[i - 1] &= 65535;
            }
            m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
            b = m[15] >> 16 & 1;
            m[14] &= 65535;
            sel25519(t, m, 1 - b);
          }
          for (i = 0; i < 16; i++) {
            o[2 * i] = t[i] & 255;
            o[2 * i + 1] = t[i] >> 8;
          }
        }
        function neq25519(a, b) {
          var c = new Uint8Array(32), d = new Uint8Array(32);
          pack25519(c, a);
          pack25519(d, b);
          return crypto_verify_32(c, 0, d, 0);
        }
        function par25519(a) {
          var d = new Uint8Array(32);
          pack25519(d, a);
          return d[0] & 1;
        }
        function unpack25519(o, n) {
          var i;
          for (i = 0; i < 16; i++) o[i] = n[2 * i] + (n[2 * i + 1] << 8);
          o[15] &= 32767;
        }
        function A(o, a, b) {
          for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
        }
        function Z2(o, a, b) {
          for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
        }
        function M2(o, a, b) {
          var v2, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
          v2 = a[0];
          t0 += v2 * b0;
          t1 += v2 * b1;
          t2 += v2 * b2;
          t3 += v2 * b3;
          t4 += v2 * b4;
          t5 += v2 * b5;
          t6 += v2 * b6;
          t7 += v2 * b7;
          t8 += v2 * b8;
          t9 += v2 * b9;
          t10 += v2 * b10;
          t11 += v2 * b11;
          t12 += v2 * b12;
          t13 += v2 * b13;
          t14 += v2 * b14;
          t15 += v2 * b15;
          v2 = a[1];
          t1 += v2 * b0;
          t2 += v2 * b1;
          t3 += v2 * b2;
          t4 += v2 * b3;
          t5 += v2 * b4;
          t6 += v2 * b5;
          t7 += v2 * b6;
          t8 += v2 * b7;
          t9 += v2 * b8;
          t10 += v2 * b9;
          t11 += v2 * b10;
          t12 += v2 * b11;
          t13 += v2 * b12;
          t14 += v2 * b13;
          t15 += v2 * b14;
          t16 += v2 * b15;
          v2 = a[2];
          t2 += v2 * b0;
          t3 += v2 * b1;
          t4 += v2 * b2;
          t5 += v2 * b3;
          t6 += v2 * b4;
          t7 += v2 * b5;
          t8 += v2 * b6;
          t9 += v2 * b7;
          t10 += v2 * b8;
          t11 += v2 * b9;
          t12 += v2 * b10;
          t13 += v2 * b11;
          t14 += v2 * b12;
          t15 += v2 * b13;
          t16 += v2 * b14;
          t17 += v2 * b15;
          v2 = a[3];
          t3 += v2 * b0;
          t4 += v2 * b1;
          t5 += v2 * b2;
          t6 += v2 * b3;
          t7 += v2 * b4;
          t8 += v2 * b5;
          t9 += v2 * b6;
          t10 += v2 * b7;
          t11 += v2 * b8;
          t12 += v2 * b9;
          t13 += v2 * b10;
          t14 += v2 * b11;
          t15 += v2 * b12;
          t16 += v2 * b13;
          t17 += v2 * b14;
          t18 += v2 * b15;
          v2 = a[4];
          t4 += v2 * b0;
          t5 += v2 * b1;
          t6 += v2 * b2;
          t7 += v2 * b3;
          t8 += v2 * b4;
          t9 += v2 * b5;
          t10 += v2 * b6;
          t11 += v2 * b7;
          t12 += v2 * b8;
          t13 += v2 * b9;
          t14 += v2 * b10;
          t15 += v2 * b11;
          t16 += v2 * b12;
          t17 += v2 * b13;
          t18 += v2 * b14;
          t19 += v2 * b15;
          v2 = a[5];
          t5 += v2 * b0;
          t6 += v2 * b1;
          t7 += v2 * b2;
          t8 += v2 * b3;
          t9 += v2 * b4;
          t10 += v2 * b5;
          t11 += v2 * b6;
          t12 += v2 * b7;
          t13 += v2 * b8;
          t14 += v2 * b9;
          t15 += v2 * b10;
          t16 += v2 * b11;
          t17 += v2 * b12;
          t18 += v2 * b13;
          t19 += v2 * b14;
          t20 += v2 * b15;
          v2 = a[6];
          t6 += v2 * b0;
          t7 += v2 * b1;
          t8 += v2 * b2;
          t9 += v2 * b3;
          t10 += v2 * b4;
          t11 += v2 * b5;
          t12 += v2 * b6;
          t13 += v2 * b7;
          t14 += v2 * b8;
          t15 += v2 * b9;
          t16 += v2 * b10;
          t17 += v2 * b11;
          t18 += v2 * b12;
          t19 += v2 * b13;
          t20 += v2 * b14;
          t21 += v2 * b15;
          v2 = a[7];
          t7 += v2 * b0;
          t8 += v2 * b1;
          t9 += v2 * b2;
          t10 += v2 * b3;
          t11 += v2 * b4;
          t12 += v2 * b5;
          t13 += v2 * b6;
          t14 += v2 * b7;
          t15 += v2 * b8;
          t16 += v2 * b9;
          t17 += v2 * b10;
          t18 += v2 * b11;
          t19 += v2 * b12;
          t20 += v2 * b13;
          t21 += v2 * b14;
          t22 += v2 * b15;
          v2 = a[8];
          t8 += v2 * b0;
          t9 += v2 * b1;
          t10 += v2 * b2;
          t11 += v2 * b3;
          t12 += v2 * b4;
          t13 += v2 * b5;
          t14 += v2 * b6;
          t15 += v2 * b7;
          t16 += v2 * b8;
          t17 += v2 * b9;
          t18 += v2 * b10;
          t19 += v2 * b11;
          t20 += v2 * b12;
          t21 += v2 * b13;
          t22 += v2 * b14;
          t23 += v2 * b15;
          v2 = a[9];
          t9 += v2 * b0;
          t10 += v2 * b1;
          t11 += v2 * b2;
          t12 += v2 * b3;
          t13 += v2 * b4;
          t14 += v2 * b5;
          t15 += v2 * b6;
          t16 += v2 * b7;
          t17 += v2 * b8;
          t18 += v2 * b9;
          t19 += v2 * b10;
          t20 += v2 * b11;
          t21 += v2 * b12;
          t22 += v2 * b13;
          t23 += v2 * b14;
          t24 += v2 * b15;
          v2 = a[10];
          t10 += v2 * b0;
          t11 += v2 * b1;
          t12 += v2 * b2;
          t13 += v2 * b3;
          t14 += v2 * b4;
          t15 += v2 * b5;
          t16 += v2 * b6;
          t17 += v2 * b7;
          t18 += v2 * b8;
          t19 += v2 * b9;
          t20 += v2 * b10;
          t21 += v2 * b11;
          t22 += v2 * b12;
          t23 += v2 * b13;
          t24 += v2 * b14;
          t25 += v2 * b15;
          v2 = a[11];
          t11 += v2 * b0;
          t12 += v2 * b1;
          t13 += v2 * b2;
          t14 += v2 * b3;
          t15 += v2 * b4;
          t16 += v2 * b5;
          t17 += v2 * b6;
          t18 += v2 * b7;
          t19 += v2 * b8;
          t20 += v2 * b9;
          t21 += v2 * b10;
          t22 += v2 * b11;
          t23 += v2 * b12;
          t24 += v2 * b13;
          t25 += v2 * b14;
          t26 += v2 * b15;
          v2 = a[12];
          t12 += v2 * b0;
          t13 += v2 * b1;
          t14 += v2 * b2;
          t15 += v2 * b3;
          t16 += v2 * b4;
          t17 += v2 * b5;
          t18 += v2 * b6;
          t19 += v2 * b7;
          t20 += v2 * b8;
          t21 += v2 * b9;
          t22 += v2 * b10;
          t23 += v2 * b11;
          t24 += v2 * b12;
          t25 += v2 * b13;
          t26 += v2 * b14;
          t27 += v2 * b15;
          v2 = a[13];
          t13 += v2 * b0;
          t14 += v2 * b1;
          t15 += v2 * b2;
          t16 += v2 * b3;
          t17 += v2 * b4;
          t18 += v2 * b5;
          t19 += v2 * b6;
          t20 += v2 * b7;
          t21 += v2 * b8;
          t22 += v2 * b9;
          t23 += v2 * b10;
          t24 += v2 * b11;
          t25 += v2 * b12;
          t26 += v2 * b13;
          t27 += v2 * b14;
          t28 += v2 * b15;
          v2 = a[14];
          t14 += v2 * b0;
          t15 += v2 * b1;
          t16 += v2 * b2;
          t17 += v2 * b3;
          t18 += v2 * b4;
          t19 += v2 * b5;
          t20 += v2 * b6;
          t21 += v2 * b7;
          t22 += v2 * b8;
          t23 += v2 * b9;
          t24 += v2 * b10;
          t25 += v2 * b11;
          t26 += v2 * b12;
          t27 += v2 * b13;
          t28 += v2 * b14;
          t29 += v2 * b15;
          v2 = a[15];
          t15 += v2 * b0;
          t16 += v2 * b1;
          t17 += v2 * b2;
          t18 += v2 * b3;
          t19 += v2 * b4;
          t20 += v2 * b5;
          t21 += v2 * b6;
          t22 += v2 * b7;
          t23 += v2 * b8;
          t24 += v2 * b9;
          t25 += v2 * b10;
          t26 += v2 * b11;
          t27 += v2 * b12;
          t28 += v2 * b13;
          t29 += v2 * b14;
          t30 += v2 * b15;
          t0 += 38 * t16;
          t1 += 38 * t17;
          t2 += 38 * t18;
          t3 += 38 * t19;
          t4 += 38 * t20;
          t5 += 38 * t21;
          t6 += 38 * t22;
          t7 += 38 * t23;
          t8 += 38 * t24;
          t9 += 38 * t25;
          t10 += 38 * t26;
          t11 += 38 * t27;
          t12 += 38 * t28;
          t13 += 38 * t29;
          t14 += 38 * t30;
          c = 1;
          v2 = t0 + c + 65535;
          c = Math.floor(v2 / 65536);
          t0 = v2 - c * 65536;
          v2 = t1 + c + 65535;
          c = Math.floor(v2 / 65536);
          t1 = v2 - c * 65536;
          v2 = t2 + c + 65535;
          c = Math.floor(v2 / 65536);
          t2 = v2 - c * 65536;
          v2 = t3 + c + 65535;
          c = Math.floor(v2 / 65536);
          t3 = v2 - c * 65536;
          v2 = t4 + c + 65535;
          c = Math.floor(v2 / 65536);
          t4 = v2 - c * 65536;
          v2 = t5 + c + 65535;
          c = Math.floor(v2 / 65536);
          t5 = v2 - c * 65536;
          v2 = t6 + c + 65535;
          c = Math.floor(v2 / 65536);
          t6 = v2 - c * 65536;
          v2 = t7 + c + 65535;
          c = Math.floor(v2 / 65536);
          t7 = v2 - c * 65536;
          v2 = t8 + c + 65535;
          c = Math.floor(v2 / 65536);
          t8 = v2 - c * 65536;
          v2 = t9 + c + 65535;
          c = Math.floor(v2 / 65536);
          t9 = v2 - c * 65536;
          v2 = t10 + c + 65535;
          c = Math.floor(v2 / 65536);
          t10 = v2 - c * 65536;
          v2 = t11 + c + 65535;
          c = Math.floor(v2 / 65536);
          t11 = v2 - c * 65536;
          v2 = t12 + c + 65535;
          c = Math.floor(v2 / 65536);
          t12 = v2 - c * 65536;
          v2 = t13 + c + 65535;
          c = Math.floor(v2 / 65536);
          t13 = v2 - c * 65536;
          v2 = t14 + c + 65535;
          c = Math.floor(v2 / 65536);
          t14 = v2 - c * 65536;
          v2 = t15 + c + 65535;
          c = Math.floor(v2 / 65536);
          t15 = v2 - c * 65536;
          t0 += c - 1 + 37 * (c - 1);
          c = 1;
          v2 = t0 + c + 65535;
          c = Math.floor(v2 / 65536);
          t0 = v2 - c * 65536;
          v2 = t1 + c + 65535;
          c = Math.floor(v2 / 65536);
          t1 = v2 - c * 65536;
          v2 = t2 + c + 65535;
          c = Math.floor(v2 / 65536);
          t2 = v2 - c * 65536;
          v2 = t3 + c + 65535;
          c = Math.floor(v2 / 65536);
          t3 = v2 - c * 65536;
          v2 = t4 + c + 65535;
          c = Math.floor(v2 / 65536);
          t4 = v2 - c * 65536;
          v2 = t5 + c + 65535;
          c = Math.floor(v2 / 65536);
          t5 = v2 - c * 65536;
          v2 = t6 + c + 65535;
          c = Math.floor(v2 / 65536);
          t6 = v2 - c * 65536;
          v2 = t7 + c + 65535;
          c = Math.floor(v2 / 65536);
          t7 = v2 - c * 65536;
          v2 = t8 + c + 65535;
          c = Math.floor(v2 / 65536);
          t8 = v2 - c * 65536;
          v2 = t9 + c + 65535;
          c = Math.floor(v2 / 65536);
          t9 = v2 - c * 65536;
          v2 = t10 + c + 65535;
          c = Math.floor(v2 / 65536);
          t10 = v2 - c * 65536;
          v2 = t11 + c + 65535;
          c = Math.floor(v2 / 65536);
          t11 = v2 - c * 65536;
          v2 = t12 + c + 65535;
          c = Math.floor(v2 / 65536);
          t12 = v2 - c * 65536;
          v2 = t13 + c + 65535;
          c = Math.floor(v2 / 65536);
          t13 = v2 - c * 65536;
          v2 = t14 + c + 65535;
          c = Math.floor(v2 / 65536);
          t14 = v2 - c * 65536;
          v2 = t15 + c + 65535;
          c = Math.floor(v2 / 65536);
          t15 = v2 - c * 65536;
          t0 += c - 1 + 37 * (c - 1);
          o[0] = t0;
          o[1] = t1;
          o[2] = t2;
          o[3] = t3;
          o[4] = t4;
          o[5] = t5;
          o[6] = t6;
          o[7] = t7;
          o[8] = t8;
          o[9] = t9;
          o[10] = t10;
          o[11] = t11;
          o[12] = t12;
          o[13] = t13;
          o[14] = t14;
          o[15] = t15;
        }
        function S(o, a) {
          M2(o, a, a);
        }
        function inv25519(o, i) {
          var c = gf();
          var a;
          for (a = 0; a < 16; a++) c[a] = i[a];
          for (a = 253; a >= 0; a--) {
            S(c, c);
            if (a !== 2 && a !== 4) M2(c, c, i);
          }
          for (a = 0; a < 16; a++) o[a] = c[a];
        }
        function pow2523(o, i) {
          var c = gf();
          var a;
          for (a = 0; a < 16; a++) c[a] = i[a];
          for (a = 250; a >= 0; a--) {
            S(c, c);
            if (a !== 1) M2(c, c, i);
          }
          for (a = 0; a < 16; a++) o[a] = c[a];
        }
        function crypto_scalarmult(q2, n, p) {
          var z2 = new Uint8Array(32);
          var x = new Float64Array(80), r3, i;
          var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
          for (i = 0; i < 31; i++) z2[i] = n[i];
          z2[31] = n[31] & 127 | 64;
          z2[0] &= 248;
          unpack25519(x, p);
          for (i = 0; i < 16; i++) {
            b[i] = x[i];
            d[i] = a[i] = c[i] = 0;
          }
          a[0] = d[0] = 1;
          for (i = 254; i >= 0; --i) {
            r3 = z2[i >>> 3] >>> (i & 7) & 1;
            sel25519(a, b, r3);
            sel25519(c, d, r3);
            A(e, a, c);
            Z2(a, a, c);
            A(c, b, d);
            Z2(b, b, d);
            S(d, e);
            S(f, a);
            M2(a, c, a);
            M2(c, b, e);
            A(e, a, c);
            Z2(a, a, c);
            S(b, a);
            Z2(c, d, f);
            M2(a, c, _121665);
            A(a, a, d);
            M2(c, c, a);
            M2(a, d, f);
            M2(d, b, x);
            S(b, e);
            sel25519(a, b, r3);
            sel25519(c, d, r3);
          }
          for (i = 0; i < 16; i++) {
            x[i + 16] = a[i];
            x[i + 32] = c[i];
            x[i + 48] = b[i];
            x[i + 64] = d[i];
          }
          var x32 = x.subarray(32);
          var x16 = x.subarray(16);
          inv25519(x32, x32);
          M2(x16, x16, x32);
          pack25519(q2, x16);
          return 0;
        }
        function crypto_scalarmult_base(q2, n) {
          return crypto_scalarmult(q2, n, _9);
        }
        function crypto_box_keypair(y, x) {
          randombytes(x, 32);
          return crypto_scalarmult_base(y, x);
        }
        function crypto_box_beforenm(k2, y, x) {
          var s = new Uint8Array(32);
          crypto_scalarmult(s, x, y);
          return crypto_core_hsalsa20(k2, _0, s, sigma);
        }
        var crypto_box_afternm = crypto_secretbox;
        var crypto_box_open_afternm = crypto_secretbox_open;
        function crypto_box(c, m, d, n, y, x) {
          var k2 = new Uint8Array(32);
          crypto_box_beforenm(k2, y, x);
          return crypto_box_afternm(c, m, d, n, k2);
        }
        function crypto_box_open(m, c, d, n, y, x) {
          var k2 = new Uint8Array(32);
          crypto_box_beforenm(k2, y, x);
          return crypto_box_open_afternm(m, c, d, n, k2);
        }
        var K2 = [
          1116352408,
          3609767458,
          1899447441,
          602891725,
          3049323471,
          3964484399,
          3921009573,
          2173295548,
          961987163,
          4081628472,
          1508970993,
          3053834265,
          2453635748,
          2937671579,
          2870763221,
          3664609560,
          3624381080,
          2734883394,
          310598401,
          1164996542,
          607225278,
          1323610764,
          1426881987,
          3590304994,
          1925078388,
          4068182383,
          2162078206,
          991336113,
          2614888103,
          633803317,
          3248222580,
          3479774868,
          3835390401,
          2666613458,
          4022224774,
          944711139,
          264347078,
          2341262773,
          604807628,
          2007800933,
          770255983,
          1495990901,
          1249150122,
          1856431235,
          1555081692,
          3175218132,
          1996064986,
          2198950837,
          2554220882,
          3999719339,
          2821834349,
          766784016,
          2952996808,
          2566594879,
          3210313671,
          3203337956,
          3336571891,
          1034457026,
          3584528711,
          2466948901,
          113926993,
          3758326383,
          338241895,
          168717936,
          666307205,
          1188179964,
          773529912,
          1546045734,
          1294757372,
          1522805485,
          1396182291,
          2643833823,
          1695183700,
          2343527390,
          1986661051,
          1014477480,
          2177026350,
          1206759142,
          2456956037,
          344077627,
          2730485921,
          1290863460,
          2820302411,
          3158454273,
          3259730800,
          3505952657,
          3345764771,
          106217008,
          3516065817,
          3606008344,
          3600352804,
          1432725776,
          4094571909,
          1467031594,
          275423344,
          851169720,
          430227734,
          3100823752,
          506948616,
          1363258195,
          659060556,
          3750685593,
          883997877,
          3785050280,
          958139571,
          3318307427,
          1322822218,
          3812723403,
          1537002063,
          2003034995,
          1747873779,
          3602036899,
          1955562222,
          1575990012,
          2024104815,
          1125592928,
          2227730452,
          2716904306,
          2361852424,
          442776044,
          2428436474,
          593698344,
          2756734187,
          3733110249,
          3204031479,
          2999351573,
          3329325298,
          3815920427,
          3391569614,
          3928383900,
          3515267271,
          566280711,
          3940187606,
          3454069534,
          4118630271,
          4000239992,
          116418474,
          1914138554,
          174292421,
          2731055270,
          289380356,
          3203993006,
          460393269,
          320620315,
          685471733,
          587496836,
          852142971,
          1086792851,
          1017036298,
          365543100,
          1126000580,
          2618297676,
          1288033470,
          3409855158,
          1501505948,
          4234509866,
          1607167915,
          987167468,
          1816402316,
          1246189591
        ];
        function crypto_hashblocks_hl(hh, hl, m, n) {
          var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j2, h2, l, a, b, c, d;
          var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
          var pos = 0;
          while (n >= 128) {
            for (i = 0; i < 16; i++) {
              j2 = 8 * i + pos;
              wh[i] = m[j2 + 0] << 24 | m[j2 + 1] << 16 | m[j2 + 2] << 8 | m[j2 + 3];
              wl[i] = m[j2 + 4] << 24 | m[j2 + 5] << 16 | m[j2 + 6] << 8 | m[j2 + 7];
            }
            for (i = 0; i < 80; i++) {
              bh0 = ah0;
              bh1 = ah1;
              bh2 = ah2;
              bh3 = ah3;
              bh4 = ah4;
              bh5 = ah5;
              bh6 = ah6;
              bh7 = ah7;
              bl0 = al0;
              bl1 = al1;
              bl2 = al2;
              bl3 = al3;
              bl4 = al4;
              bl5 = al5;
              bl6 = al6;
              bl7 = al7;
              h2 = ah7;
              l = al7;
              a = l & 65535;
              b = l >>> 16;
              c = h2 & 65535;
              d = h2 >>> 16;
              h2 = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
              l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
              a += l & 65535;
              b += l >>> 16;
              c += h2 & 65535;
              d += h2 >>> 16;
              h2 = ah4 & ah5 ^ ~ah4 & ah6;
              l = al4 & al5 ^ ~al4 & al6;
              a += l & 65535;
              b += l >>> 16;
              c += h2 & 65535;
              d += h2 >>> 16;
              h2 = K2[i * 2];
              l = K2[i * 2 + 1];
              a += l & 65535;
              b += l >>> 16;
              c += h2 & 65535;
              d += h2 >>> 16;
              h2 = wh[i % 16];
              l = wl[i % 16];
              a += l & 65535;
              b += l >>> 16;
              c += h2 & 65535;
              d += h2 >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              th = c & 65535 | d << 16;
              tl = a & 65535 | b << 16;
              h2 = th;
              l = tl;
              a = l & 65535;
              b = l >>> 16;
              c = h2 & 65535;
              d = h2 >>> 16;
              h2 = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
              l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
              a += l & 65535;
              b += l >>> 16;
              c += h2 & 65535;
              d += h2 >>> 16;
              h2 = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
              l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
              a += l & 65535;
              b += l >>> 16;
              c += h2 & 65535;
              d += h2 >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              bh7 = c & 65535 | d << 16;
              bl7 = a & 65535 | b << 16;
              h2 = bh3;
              l = bl3;
              a = l & 65535;
              b = l >>> 16;
              c = h2 & 65535;
              d = h2 >>> 16;
              h2 = th;
              l = tl;
              a += l & 65535;
              b += l >>> 16;
              c += h2 & 65535;
              d += h2 >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              bh3 = c & 65535 | d << 16;
              bl3 = a & 65535 | b << 16;
              ah1 = bh0;
              ah2 = bh1;
              ah3 = bh2;
              ah4 = bh3;
              ah5 = bh4;
              ah6 = bh5;
              ah7 = bh6;
              ah0 = bh7;
              al1 = bl0;
              al2 = bl1;
              al3 = bl2;
              al4 = bl3;
              al5 = bl4;
              al6 = bl5;
              al7 = bl6;
              al0 = bl7;
              if (i % 16 === 15) {
                for (j2 = 0; j2 < 16; j2++) {
                  h2 = wh[j2];
                  l = wl[j2];
                  a = l & 65535;
                  b = l >>> 16;
                  c = h2 & 65535;
                  d = h2 >>> 16;
                  h2 = wh[(j2 + 9) % 16];
                  l = wl[(j2 + 9) % 16];
                  a += l & 65535;
                  b += l >>> 16;
                  c += h2 & 65535;
                  d += h2 >>> 16;
                  th = wh[(j2 + 1) % 16];
                  tl = wl[(j2 + 1) % 16];
                  h2 = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
                  l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
                  a += l & 65535;
                  b += l >>> 16;
                  c += h2 & 65535;
                  d += h2 >>> 16;
                  th = wh[(j2 + 14) % 16];
                  tl = wl[(j2 + 14) % 16];
                  h2 = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
                  l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
                  a += l & 65535;
                  b += l >>> 16;
                  c += h2 & 65535;
                  d += h2 >>> 16;
                  b += a >>> 16;
                  c += b >>> 16;
                  d += c >>> 16;
                  wh[j2] = c & 65535 | d << 16;
                  wl[j2] = a & 65535 | b << 16;
                }
              }
            }
            h2 = ah0;
            l = al0;
            a = l & 65535;
            b = l >>> 16;
            c = h2 & 65535;
            d = h2 >>> 16;
            h2 = hh[0];
            l = hl[0];
            a += l & 65535;
            b += l >>> 16;
            c += h2 & 65535;
            d += h2 >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[0] = ah0 = c & 65535 | d << 16;
            hl[0] = al0 = a & 65535 | b << 16;
            h2 = ah1;
            l = al1;
            a = l & 65535;
            b = l >>> 16;
            c = h2 & 65535;
            d = h2 >>> 16;
            h2 = hh[1];
            l = hl[1];
            a += l & 65535;
            b += l >>> 16;
            c += h2 & 65535;
            d += h2 >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[1] = ah1 = c & 65535 | d << 16;
            hl[1] = al1 = a & 65535 | b << 16;
            h2 = ah2;
            l = al2;
            a = l & 65535;
            b = l >>> 16;
            c = h2 & 65535;
            d = h2 >>> 16;
            h2 = hh[2];
            l = hl[2];
            a += l & 65535;
            b += l >>> 16;
            c += h2 & 65535;
            d += h2 >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[2] = ah2 = c & 65535 | d << 16;
            hl[2] = al2 = a & 65535 | b << 16;
            h2 = ah3;
            l = al3;
            a = l & 65535;
            b = l >>> 16;
            c = h2 & 65535;
            d = h2 >>> 16;
            h2 = hh[3];
            l = hl[3];
            a += l & 65535;
            b += l >>> 16;
            c += h2 & 65535;
            d += h2 >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[3] = ah3 = c & 65535 | d << 16;
            hl[3] = al3 = a & 65535 | b << 16;
            h2 = ah4;
            l = al4;
            a = l & 65535;
            b = l >>> 16;
            c = h2 & 65535;
            d = h2 >>> 16;
            h2 = hh[4];
            l = hl[4];
            a += l & 65535;
            b += l >>> 16;
            c += h2 & 65535;
            d += h2 >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[4] = ah4 = c & 65535 | d << 16;
            hl[4] = al4 = a & 65535 | b << 16;
            h2 = ah5;
            l = al5;
            a = l & 65535;
            b = l >>> 16;
            c = h2 & 65535;
            d = h2 >>> 16;
            h2 = hh[5];
            l = hl[5];
            a += l & 65535;
            b += l >>> 16;
            c += h2 & 65535;
            d += h2 >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[5] = ah5 = c & 65535 | d << 16;
            hl[5] = al5 = a & 65535 | b << 16;
            h2 = ah6;
            l = al6;
            a = l & 65535;
            b = l >>> 16;
            c = h2 & 65535;
            d = h2 >>> 16;
            h2 = hh[6];
            l = hl[6];
            a += l & 65535;
            b += l >>> 16;
            c += h2 & 65535;
            d += h2 >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[6] = ah6 = c & 65535 | d << 16;
            hl[6] = al6 = a & 65535 | b << 16;
            h2 = ah7;
            l = al7;
            a = l & 65535;
            b = l >>> 16;
            c = h2 & 65535;
            d = h2 >>> 16;
            h2 = hh[7];
            l = hl[7];
            a += l & 65535;
            b += l >>> 16;
            c += h2 & 65535;
            d += h2 >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[7] = ah7 = c & 65535 | d << 16;
            hl[7] = al7 = a & 65535 | b << 16;
            pos += 128;
            n -= 128;
          }
          return n;
        }
        function crypto_hash(out, m, n) {
          var hh = new Int32Array(8), hl = new Int32Array(8), x = new Uint8Array(256), i, b = n;
          hh[0] = 1779033703;
          hh[1] = 3144134277;
          hh[2] = 1013904242;
          hh[3] = 2773480762;
          hh[4] = 1359893119;
          hh[5] = 2600822924;
          hh[6] = 528734635;
          hh[7] = 1541459225;
          hl[0] = 4089235720;
          hl[1] = 2227873595;
          hl[2] = 4271175723;
          hl[3] = 1595750129;
          hl[4] = 2917565137;
          hl[5] = 725511199;
          hl[6] = 4215389547;
          hl[7] = 327033209;
          crypto_hashblocks_hl(hh, hl, m, n);
          n %= 128;
          for (i = 0; i < n; i++) x[i] = m[b - n + i];
          x[n] = 128;
          n = 256 - 128 * (n < 112 ? 1 : 0);
          x[n - 9] = 0;
          ts64(x, n - 8, b / 536870912 | 0, b << 3);
          crypto_hashblocks_hl(hh, hl, x, n);
          for (i = 0; i < 8; i++) ts64(out, 8 * i, hh[i], hl[i]);
          return 0;
        }
        function add2(p, q2) {
          var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h2 = gf(), t = gf();
          Z2(a, p[1], p[0]);
          Z2(t, q2[1], q2[0]);
          M2(a, a, t);
          A(b, p[0], p[1]);
          A(t, q2[0], q2[1]);
          M2(b, b, t);
          M2(c, p[3], q2[3]);
          M2(c, c, D22);
          M2(d, p[2], q2[2]);
          A(d, d, d);
          Z2(e, b, a);
          Z2(f, d, c);
          A(g, d, c);
          A(h2, b, a);
          M2(p[0], e, f);
          M2(p[1], h2, g);
          M2(p[2], g, f);
          M2(p[3], e, h2);
        }
        function cswap(p, q2, b) {
          var i;
          for (i = 0; i < 4; i++) {
            sel25519(p[i], q2[i], b);
          }
        }
        function pack(r3, p) {
          var tx = gf(), ty = gf(), zi = gf();
          inv25519(zi, p[2]);
          M2(tx, p[0], zi);
          M2(ty, p[1], zi);
          pack25519(r3, ty);
          r3[31] ^= par25519(tx) << 7;
        }
        function scalarmult(p, q2, s) {
          var b, i;
          set25519(p[0], gf0);
          set25519(p[1], gf1);
          set25519(p[2], gf1);
          set25519(p[3], gf0);
          for (i = 255; i >= 0; --i) {
            b = s[i / 8 | 0] >> (i & 7) & 1;
            cswap(p, q2, b);
            add2(q2, p);
            add2(p, p);
            cswap(p, q2, b);
          }
        }
        function scalarbase(p, s) {
          var q2 = [gf(), gf(), gf(), gf()];
          set25519(q2[0], X2);
          set25519(q2[1], Y2);
          set25519(q2[2], gf1);
          M2(q2[3], X2, Y2);
          scalarmult(p, q2, s);
        }
        function crypto_sign_keypair(pk, sk, seeded) {
          var d = new Uint8Array(64);
          var p = [gf(), gf(), gf(), gf()];
          var i;
          if (!seeded) randombytes(sk, 32);
          crypto_hash(d, sk, 32);
          d[0] &= 248;
          d[31] &= 127;
          d[31] |= 64;
          scalarbase(p, d);
          pack(pk, p);
          for (i = 0; i < 32; i++) sk[i + 32] = pk[i];
          return 0;
        }
        var L = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
        function modL(r3, x) {
          var carry, i, j2, k2;
          for (i = 63; i >= 32; --i) {
            carry = 0;
            for (j2 = i - 32, k2 = i - 12; j2 < k2; ++j2) {
              x[j2] += carry - 16 * x[i] * L[j2 - (i - 32)];
              carry = Math.floor((x[j2] + 128) / 256);
              x[j2] -= carry * 256;
            }
            x[j2] += carry;
            x[i] = 0;
          }
          carry = 0;
          for (j2 = 0; j2 < 32; j2++) {
            x[j2] += carry - (x[31] >> 4) * L[j2];
            carry = x[j2] >> 8;
            x[j2] &= 255;
          }
          for (j2 = 0; j2 < 32; j2++) x[j2] -= carry * L[j2];
          for (i = 0; i < 32; i++) {
            x[i + 1] += x[i] >> 8;
            r3[i] = x[i] & 255;
          }
        }
        function reduce(r3) {
          var x = new Float64Array(64), i;
          for (i = 0; i < 64; i++) x[i] = r3[i];
          for (i = 0; i < 64; i++) r3[i] = 0;
          modL(r3, x);
        }
        function crypto_sign(sm, m, n, sk) {
          var d = new Uint8Array(64), h2 = new Uint8Array(64), r3 = new Uint8Array(64);
          var i, j2, x = new Float64Array(64);
          var p = [gf(), gf(), gf(), gf()];
          crypto_hash(d, sk, 32);
          d[0] &= 248;
          d[31] &= 127;
          d[31] |= 64;
          var smlen = n + 64;
          for (i = 0; i < n; i++) sm[64 + i] = m[i];
          for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];
          crypto_hash(r3, sm.subarray(32), n + 32);
          reduce(r3);
          scalarbase(p, r3);
          pack(sm, p);
          for (i = 32; i < 64; i++) sm[i] = sk[i];
          crypto_hash(h2, sm, n + 64);
          reduce(h2);
          for (i = 0; i < 64; i++) x[i] = 0;
          for (i = 0; i < 32; i++) x[i] = r3[i];
          for (i = 0; i < 32; i++) {
            for (j2 = 0; j2 < 32; j2++) {
              x[i + j2] += h2[i] * d[j2];
            }
          }
          modL(sm.subarray(32), x);
          return smlen;
        }
        function unpackneg(r3, p) {
          var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
          set25519(r3[2], gf1);
          unpack25519(r3[1], p);
          S(num, r3[1]);
          M2(den, num, D2);
          Z2(num, num, r3[2]);
          A(den, r3[2], den);
          S(den2, den);
          S(den4, den2);
          M2(den6, den4, den2);
          M2(t, den6, num);
          M2(t, t, den);
          pow2523(t, t);
          M2(t, t, num);
          M2(t, t, den);
          M2(t, t, den);
          M2(r3[0], t, den);
          S(chk, r3[0]);
          M2(chk, chk, den);
          if (neq25519(chk, num)) M2(r3[0], r3[0], I2);
          S(chk, r3[0]);
          M2(chk, chk, den);
          if (neq25519(chk, num)) return -1;
          if (par25519(r3[0]) === p[31] >> 7) Z2(r3[0], gf0, r3[0]);
          M2(r3[3], r3[0], r3[1]);
          return 0;
        }
        function crypto_sign_open(m, sm, n, pk) {
          var i;
          var t = new Uint8Array(32), h2 = new Uint8Array(64);
          var p = [gf(), gf(), gf(), gf()], q2 = [gf(), gf(), gf(), gf()];
          if (n < 64) return -1;
          if (unpackneg(q2, pk)) return -1;
          for (i = 0; i < n; i++) m[i] = sm[i];
          for (i = 0; i < 32; i++) m[i + 32] = pk[i];
          crypto_hash(h2, m, n);
          reduce(h2);
          scalarmult(p, q2, h2);
          scalarbase(q2, sm.subarray(32));
          add2(p, q2);
          pack(t, p);
          n -= 64;
          if (crypto_verify_32(sm, 0, t, 0)) {
            for (i = 0; i < n; i++) m[i] = 0;
            return -1;
          }
          for (i = 0; i < n; i++) m[i] = sm[i + 64];
          return n;
        }
        var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
        nacl3.lowlevel = {
          crypto_core_hsalsa20,
          crypto_stream_xor,
          crypto_stream,
          crypto_stream_salsa20_xor,
          crypto_stream_salsa20,
          crypto_onetimeauth,
          crypto_onetimeauth_verify,
          crypto_verify_16,
          crypto_verify_32,
          crypto_secretbox,
          crypto_secretbox_open,
          crypto_scalarmult,
          crypto_scalarmult_base,
          crypto_box_beforenm,
          crypto_box_afternm,
          crypto_box,
          crypto_box_open,
          crypto_box_keypair,
          crypto_hash,
          crypto_sign,
          crypto_sign_keypair,
          crypto_sign_open,
          crypto_secretbox_KEYBYTES,
          crypto_secretbox_NONCEBYTES,
          crypto_secretbox_ZEROBYTES,
          crypto_secretbox_BOXZEROBYTES,
          crypto_scalarmult_BYTES,
          crypto_scalarmult_SCALARBYTES,
          crypto_box_PUBLICKEYBYTES,
          crypto_box_SECRETKEYBYTES,
          crypto_box_BEFORENMBYTES,
          crypto_box_NONCEBYTES,
          crypto_box_ZEROBYTES,
          crypto_box_BOXZEROBYTES,
          crypto_sign_BYTES,
          crypto_sign_PUBLICKEYBYTES,
          crypto_sign_SECRETKEYBYTES,
          crypto_sign_SEEDBYTES,
          crypto_hash_BYTES,
          gf,
          D: D2,
          L,
          pack25519,
          unpack25519,
          M: M2,
          A,
          S,
          Z: Z2,
          pow2523,
          add: add2,
          set25519,
          modL,
          scalarmult,
          scalarbase
        };
        function checkLengths(k2, n) {
          if (k2.length !== crypto_secretbox_KEYBYTES) throw new Error("bad key size");
          if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error("bad nonce size");
        }
        function checkBoxLengths(pk, sk) {
          if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error("bad public key size");
          if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error("bad secret key size");
        }
        function checkArrayTypes() {
          for (var i = 0; i < arguments.length; i++) {
            if (!(arguments[i] instanceof Uint8Array))
              throw new TypeError("unexpected type, use Uint8Array");
          }
        }
        function cleanup(arr) {
          for (var i = 0; i < arr.length; i++) arr[i] = 0;
        }
        nacl3.randomBytes = function(n) {
          var b = new Uint8Array(n);
          randombytes(b, n);
          return b;
        };
        nacl3.secretbox = function(msg, nonce, key) {
          checkArrayTypes(msg, nonce, key);
          checkLengths(key, nonce);
          var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
          var c = new Uint8Array(m.length);
          for (var i = 0; i < msg.length; i++) m[i + crypto_secretbox_ZEROBYTES] = msg[i];
          crypto_secretbox(c, m, m.length, nonce, key);
          return c.subarray(crypto_secretbox_BOXZEROBYTES);
        };
        nacl3.secretbox.open = function(box, nonce, key) {
          checkArrayTypes(box, nonce, key);
          checkLengths(key, nonce);
          var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
          var m = new Uint8Array(c.length);
          for (var i = 0; i < box.length; i++) c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
          if (c.length < 32) return null;
          if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
          return m.subarray(crypto_secretbox_ZEROBYTES);
        };
        nacl3.secretbox.keyLength = crypto_secretbox_KEYBYTES;
        nacl3.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
        nacl3.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
        nacl3.scalarMult = function(n, p) {
          checkArrayTypes(n, p);
          if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
          if (p.length !== crypto_scalarmult_BYTES) throw new Error("bad p size");
          var q2 = new Uint8Array(crypto_scalarmult_BYTES);
          crypto_scalarmult(q2, n, p);
          return q2;
        };
        nacl3.scalarMult.base = function(n) {
          checkArrayTypes(n);
          if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
          var q2 = new Uint8Array(crypto_scalarmult_BYTES);
          crypto_scalarmult_base(q2, n);
          return q2;
        };
        nacl3.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
        nacl3.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
        nacl3.box = function(msg, nonce, publicKey, secretKey) {
          var k2 = nacl3.box.before(publicKey, secretKey);
          return nacl3.secretbox(msg, nonce, k2);
        };
        nacl3.box.before = function(publicKey, secretKey) {
          checkArrayTypes(publicKey, secretKey);
          checkBoxLengths(publicKey, secretKey);
          var k2 = new Uint8Array(crypto_box_BEFORENMBYTES);
          crypto_box_beforenm(k2, publicKey, secretKey);
          return k2;
        };
        nacl3.box.after = nacl3.secretbox;
        nacl3.box.open = function(msg, nonce, publicKey, secretKey) {
          var k2 = nacl3.box.before(publicKey, secretKey);
          return nacl3.secretbox.open(msg, nonce, k2);
        };
        nacl3.box.open.after = nacl3.secretbox.open;
        nacl3.box.keyPair = function() {
          var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
          var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
          crypto_box_keypair(pk, sk);
          return { publicKey: pk, secretKey: sk };
        };
        nacl3.box.keyPair.fromSecretKey = function(secretKey) {
          checkArrayTypes(secretKey);
          if (secretKey.length !== crypto_box_SECRETKEYBYTES)
            throw new Error("bad secret key size");
          var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
          crypto_scalarmult_base(pk, secretKey);
          return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
        };
        nacl3.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
        nacl3.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
        nacl3.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
        nacl3.box.nonceLength = crypto_box_NONCEBYTES;
        nacl3.box.overheadLength = nacl3.secretbox.overheadLength;
        nacl3.sign = function(msg, secretKey) {
          checkArrayTypes(msg, secretKey);
          if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
            throw new Error("bad secret key size");
          var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
          crypto_sign(signedMsg, msg, msg.length, secretKey);
          return signedMsg;
        };
        nacl3.sign.open = function(signedMsg, publicKey) {
          checkArrayTypes(signedMsg, publicKey);
          if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
            throw new Error("bad public key size");
          var tmp = new Uint8Array(signedMsg.length);
          var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
          if (mlen < 0) return null;
          var m = new Uint8Array(mlen);
          for (var i = 0; i < m.length; i++) m[i] = tmp[i];
          return m;
        };
        nacl3.sign.detached = function(msg, secretKey) {
          var signedMsg = nacl3.sign(msg, secretKey);
          var sig = new Uint8Array(crypto_sign_BYTES);
          for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
          return sig;
        };
        nacl3.sign.detached.verify = function(msg, sig, publicKey) {
          checkArrayTypes(msg, sig, publicKey);
          if (sig.length !== crypto_sign_BYTES)
            throw new Error("bad signature size");
          if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
            throw new Error("bad public key size");
          var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
          var m = new Uint8Array(crypto_sign_BYTES + msg.length);
          var i;
          for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
          for (i = 0; i < msg.length; i++) sm[i + crypto_sign_BYTES] = msg[i];
          return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
        };
        nacl3.sign.keyPair = function() {
          var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
          var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
          crypto_sign_keypair(pk, sk);
          return { publicKey: pk, secretKey: sk };
        };
        nacl3.sign.keyPair.fromSecretKey = function(secretKey) {
          checkArrayTypes(secretKey);
          if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
            throw new Error("bad secret key size");
          var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
          for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32 + i];
          return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
        };
        nacl3.sign.keyPair.fromSeed = function(seed) {
          checkArrayTypes(seed);
          if (seed.length !== crypto_sign_SEEDBYTES)
            throw new Error("bad seed size");
          var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
          var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
          for (var i = 0; i < 32; i++) sk[i] = seed[i];
          crypto_sign_keypair(pk, sk, true);
          return { publicKey: pk, secretKey: sk };
        };
        nacl3.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
        nacl3.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
        nacl3.sign.seedLength = crypto_sign_SEEDBYTES;
        nacl3.sign.signatureLength = crypto_sign_BYTES;
        nacl3.hash = function(msg) {
          checkArrayTypes(msg);
          var h2 = new Uint8Array(crypto_hash_BYTES);
          crypto_hash(h2, msg, msg.length);
          return h2;
        };
        nacl3.hash.hashLength = crypto_hash_BYTES;
        nacl3.verify = function(x, y) {
          checkArrayTypes(x, y);
          if (x.length === 0 || y.length === 0) return false;
          if (x.length !== y.length) return false;
          return vn(x, 0, y, 0, x.length) === 0 ? true : false;
        };
        nacl3.setPRNG = function(fn) {
          randombytes = fn;
        };
        (function() {
          var crypto = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
          if (crypto && crypto.getRandomValues) {
            var QUOTA = 65536;
            nacl3.setPRNG(function(x, n) {
              var i, v2 = new Uint8Array(n);
              for (i = 0; i < n; i += QUOTA) {
                crypto.getRandomValues(v2.subarray(i, i + Math.min(n - i, QUOTA)));
              }
              for (i = 0; i < n; i++) x[i] = v2[i];
              cleanup(v2);
            });
          } else if (typeof __require !== "undefined") {
            crypto = require_crypto();
            if (crypto && crypto.randomBytes) {
              nacl3.setPRNG(function(x, n) {
                var i, v2 = crypto.randomBytes(n);
                for (i = 0; i < n; i++) x[i] = v2[i];
                cleanup(v2);
              });
            }
          }
        })();
      })(typeof module !== "undefined" && module.exports ? module.exports : self.nacl = self.nacl || {});
    }
  });

  // node_modules/@noble/hashes/esm/_assert.js
  function number(n) {
    if (!Number.isSafeInteger(n) || n < 0)
      throw new Error(`Wrong positive integer: ${n}`);
  }
  function isBytes(a) {
    return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
  }
  function bytes(b, ...lengths) {
    if (!isBytes(b))
      throw new Error("Expected Uint8Array");
    if (lengths.length > 0 && !lengths.includes(b.length))
      throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
  }
  function hash(hash2) {
    if (typeof hash2 !== "function" || typeof hash2.create !== "function")
      throw new Error("Hash should be wrapped by utils.wrapConstructor");
    number(hash2.outputLen);
    number(hash2.blockLen);
  }
  function exists(instance, checkFinished = true) {
    if (instance.destroyed)
      throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
      throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
  }
  var init_assert = __esm({
    "node_modules/@noble/hashes/esm/_assert.js"() {
      init_supra_shim();
    }
  });

  // node_modules/@noble/hashes/esm/utils.js
  function isBytes2(a) {
    return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
  }
  function bytesToHex(bytes2) {
    if (!isBytes2(bytes2))
      throw new Error("Uint8Array expected");
    let hex = "";
    for (let i = 0; i < bytes2.length; i++) {
      hex += hexes[bytes2[i]];
    }
    return hex;
  }
  function asciiToBase16(char) {
    if (char >= asciis._0 && char <= asciis._9)
      return char - asciis._0;
    if (char >= asciis._A && char <= asciis._F)
      return char - (asciis._A - 10);
    if (char >= asciis._a && char <= asciis._f)
      return char - (asciis._a - 10);
    return;
  }
  function hexToBytes(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
      const n1 = asciiToBase16(hex.charCodeAt(hi));
      const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
      if (n1 === void 0 || n2 === void 0) {
        const char = hex[hi] + hex[hi + 1];
        throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
      }
      array[ai] = n1 * 16 + n2;
    }
    return array;
  }
  function utf8ToBytes(str) {
    if (typeof str !== "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str));
  }
  function toBytes(data) {
    if (typeof data === "string")
      data = utf8ToBytes(data);
    if (!isBytes2(data))
      throw new Error(`expected Uint8Array, got ${typeof data}`);
    return data;
  }
  function checkOpts(defaults2, opts) {
    if (opts !== void 0 && toStr.call(opts) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    const merged = Object.assign(defaults2, opts);
    return merged;
  }
  function wrapConstructor(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
  }
  function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
  }
  var u32, createView, rotr, isLE, hexes, asciis, Hash, toStr;
  var init_utils = __esm({
    "node_modules/@noble/hashes/esm/utils.js"() {
      init_supra_shim();
      u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
      createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
      rotr = (word, shift) => word << 32 - shift | word >>> shift;
      isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
      if (!isLE)
        throw new Error("Non little-endian hardware is not supported");
      hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_2, i) => i.toString(16).padStart(2, "0"));
      asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
      Hash = class {
        // Safe version that clones internal state
        clone() {
          return this._cloneInto();
        }
      };
      toStr = {}.toString;
    }
  });

  // node_modules/@noble/hashes/esm/hmac.js
  var HMAC, hmac;
  var init_hmac = __esm({
    "node_modules/@noble/hashes/esm/hmac.js"() {
      init_supra_shim();
      init_assert();
      init_utils();
      HMAC = class extends Hash {
        constructor(hash2, _key) {
          super();
          this.finished = false;
          this.destroyed = false;
          hash(hash2);
          const key = toBytes(_key);
          this.iHash = hash2.create();
          if (typeof this.iHash.update !== "function")
            throw new Error("Expected instance of class which extends utils.Hash");
          this.blockLen = this.iHash.blockLen;
          this.outputLen = this.iHash.outputLen;
          const blockLen = this.blockLen;
          const pad = new Uint8Array(blockLen);
          pad.set(key.length > blockLen ? hash2.create().update(key).digest() : key);
          for (let i = 0; i < pad.length; i++)
            pad[i] ^= 54;
          this.iHash.update(pad);
          this.oHash = hash2.create();
          for (let i = 0; i < pad.length; i++)
            pad[i] ^= 54 ^ 92;
          this.oHash.update(pad);
          pad.fill(0);
        }
        update(buf) {
          exists(this);
          this.iHash.update(buf);
          return this;
        }
        digestInto(out) {
          exists(this);
          bytes(out, this.outputLen);
          this.finished = true;
          this.iHash.digestInto(out);
          this.oHash.update(out);
          this.oHash.digestInto(out);
          this.destroy();
        }
        digest() {
          const out = new Uint8Array(this.oHash.outputLen);
          this.digestInto(out);
          return out;
        }
        _cloneInto(to) {
          to || (to = Object.create(Object.getPrototypeOf(this), {}));
          const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
          to = to;
          to.finished = finished;
          to.destroyed = destroyed;
          to.blockLen = blockLen;
          to.outputLen = outputLen;
          to.oHash = oHash._cloneInto(to.oHash);
          to.iHash = iHash._cloneInto(to.iHash);
          return to;
        }
        destroy() {
          this.destroyed = true;
          this.oHash.destroy();
          this.iHash.destroy();
        }
      };
      hmac = (hash2, key, message) => new HMAC(hash2, key).update(message).digest();
      hmac.create = (hash2, key) => new HMAC(hash2, key);
    }
  });

  // node_modules/@noble/hashes/esm/pbkdf2.js
  function pbkdf2Init(hash2, _password, _salt, _opts) {
    hash(hash2);
    const opts = checkOpts({ dkLen: 32, asyncTick: 10 }, _opts);
    const { c, dkLen, asyncTick } = opts;
    number(c);
    number(dkLen);
    number(asyncTick);
    if (c < 1)
      throw new Error("PBKDF2: iterations (c) should be >= 1");
    const password = toBytes(_password);
    const salt2 = toBytes(_salt);
    const DK = new Uint8Array(dkLen);
    const PRF = hmac.create(hash2, password);
    const PRFSalt = PRF._cloneInto().update(salt2);
    return { c, dkLen, asyncTick, DK, PRF, PRFSalt };
  }
  function pbkdf2Output(PRF, PRFSalt, DK, prfW, u2) {
    PRF.destroy();
    PRFSalt.destroy();
    if (prfW)
      prfW.destroy();
    u2.fill(0);
    return DK;
  }
  function pbkdf2(hash2, password, salt2, opts) {
    const { c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(hash2, password, salt2, opts);
    let prfW;
    const arr = new Uint8Array(4);
    const view = createView(arr);
    const u2 = new Uint8Array(PRF.outputLen);
    for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
      const Ti = DK.subarray(pos, pos + PRF.outputLen);
      view.setInt32(0, ti, false);
      (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u2);
      Ti.set(u2.subarray(0, Ti.length));
      for (let ui = 1; ui < c; ui++) {
        PRF._cloneInto(prfW).update(u2).digestInto(u2);
        for (let i = 0; i < Ti.length; i++)
          Ti[i] ^= u2[i];
      }
    }
    return pbkdf2Output(PRF, PRFSalt, DK, prfW, u2);
  }
  var init_pbkdf2 = __esm({
    "node_modules/@noble/hashes/esm/pbkdf2.js"() {
      init_supra_shim();
      init_assert();
      init_hmac();
      init_utils();
    }
  });

  // node_modules/@noble/hashes/esm/_sha2.js
  function setBigUint64(view, byteOffset, value, isLE2) {
    if (typeof view.setBigUint64 === "function")
      return view.setBigUint64(byteOffset, value, isLE2);
    const _32n2 = BigInt(32);
    const _u32_max = BigInt(4294967295);
    const wh = Number(value >> _32n2 & _u32_max);
    const wl = Number(value & _u32_max);
    const h2 = isLE2 ? 4 : 0;
    const l = isLE2 ? 0 : 4;
    view.setUint32(byteOffset + h2, wh, isLE2);
    view.setUint32(byteOffset + l, wl, isLE2);
  }
  var SHA2;
  var init_sha2 = __esm({
    "node_modules/@noble/hashes/esm/_sha2.js"() {
      init_supra_shim();
      init_assert();
      init_utils();
      SHA2 = class extends Hash {
        constructor(blockLen, outputLen, padOffset, isLE2) {
          super();
          this.blockLen = blockLen;
          this.outputLen = outputLen;
          this.padOffset = padOffset;
          this.isLE = isLE2;
          this.finished = false;
          this.length = 0;
          this.pos = 0;
          this.destroyed = false;
          this.buffer = new Uint8Array(blockLen);
          this.view = createView(this.buffer);
        }
        update(data) {
          exists(this);
          const { view, buffer, blockLen } = this;
          data = toBytes(data);
          const len = data.length;
          for (let pos = 0; pos < len; ) {
            const take = Math.min(blockLen - this.pos, len - pos);
            if (take === blockLen) {
              const dataView = createView(data);
              for (; blockLen <= len - pos; pos += blockLen)
                this.process(dataView, pos);
              continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
              this.process(view, 0);
              this.pos = 0;
            }
          }
          this.length += data.length;
          this.roundClean();
          return this;
        }
        digestInto(out) {
          exists(this);
          output(out, this);
          this.finished = true;
          const { buffer, view, blockLen, isLE: isLE2 } = this;
          let { pos } = this;
          buffer[pos++] = 128;
          this.buffer.subarray(pos).fill(0);
          if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
          }
          for (let i = pos; i < blockLen; i++)
            buffer[i] = 0;
          setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
          this.process(view, 0);
          const oview = createView(out);
          const len = this.outputLen;
          if (len % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const outLen = len / 4;
          const state = this.get();
          if (outLen > state.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let i = 0; i < outLen; i++)
            oview.setUint32(4 * i, state[i], isLE2);
        }
        digest() {
          const { buffer, outputLen } = this;
          this.digestInto(buffer);
          const res = buffer.slice(0, outputLen);
          this.destroy();
          return res;
        }
        _cloneInto(to) {
          to || (to = new this.constructor());
          to.set(...this.get());
          const { blockLen, buffer, length, finished, destroyed, pos } = this;
          to.length = length;
          to.pos = pos;
          to.finished = finished;
          to.destroyed = destroyed;
          if (length % blockLen)
            to.buffer.set(buffer);
          return to;
        }
      };
    }
  });

  // node_modules/@noble/hashes/esm/sha256.js
  var Chi, Maj, SHA256_K, IV, SHA256_W, SHA256, sha256;
  var init_sha256 = __esm({
    "node_modules/@noble/hashes/esm/sha256.js"() {
      init_supra_shim();
      init_sha2();
      init_utils();
      Chi = (a, b, c) => a & b ^ ~a & c;
      Maj = (a, b, c) => a & b ^ a & c ^ b & c;
      SHA256_K = /* @__PURE__ */ new Uint32Array([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ]);
      IV = /* @__PURE__ */ new Uint32Array([
        1779033703,
        3144134277,
        1013904242,
        2773480762,
        1359893119,
        2600822924,
        528734635,
        1541459225
      ]);
      SHA256_W = /* @__PURE__ */ new Uint32Array(64);
      SHA256 = class extends SHA2 {
        constructor() {
          super(64, 32, 8, false);
          this.A = IV[0] | 0;
          this.B = IV[1] | 0;
          this.C = IV[2] | 0;
          this.D = IV[3] | 0;
          this.E = IV[4] | 0;
          this.F = IV[5] | 0;
          this.G = IV[6] | 0;
          this.H = IV[7] | 0;
        }
        get() {
          const { A, B: B2, C: C2, D: D2, E: E2, F, G: G2, H: H2 } = this;
          return [A, B2, C2, D2, E2, F, G2, H2];
        }
        // prettier-ignore
        set(A, B2, C2, D2, E2, F, G2, H2) {
          this.A = A | 0;
          this.B = B2 | 0;
          this.C = C2 | 0;
          this.D = D2 | 0;
          this.E = E2 | 0;
          this.F = F | 0;
          this.G = G2 | 0;
          this.H = H2 | 0;
        }
        process(view, offset) {
          for (let i = 0; i < 16; i++, offset += 4)
            SHA256_W[i] = view.getUint32(offset, false);
          for (let i = 16; i < 64; i++) {
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
            const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
          }
          let { A, B: B2, C: C2, D: D2, E: E2, F, G: G2, H: H2 } = this;
          for (let i = 0; i < 64; i++) {
            const sigma1 = rotr(E2, 6) ^ rotr(E2, 11) ^ rotr(E2, 25);
            const T1 = H2 + sigma1 + Chi(E2, F, G2) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
            const T2 = sigma0 + Maj(A, B2, C2) | 0;
            H2 = G2;
            G2 = F;
            F = E2;
            E2 = D2 + T1 | 0;
            D2 = C2;
            C2 = B2;
            B2 = A;
            A = T1 + T2 | 0;
          }
          A = A + this.A | 0;
          B2 = B2 + this.B | 0;
          C2 = C2 + this.C | 0;
          D2 = D2 + this.D | 0;
          E2 = E2 + this.E | 0;
          F = F + this.F | 0;
          G2 = G2 + this.G | 0;
          H2 = H2 + this.H | 0;
          this.set(A, B2, C2, D2, E2, F, G2, H2);
        }
        roundClean() {
          SHA256_W.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0);
          this.buffer.fill(0);
        }
      };
      sha256 = /* @__PURE__ */ wrapConstructor(() => new SHA256());
    }
  });

  // node_modules/@noble/hashes/esm/_u64.js
  function fromBig(n, le2 = false) {
    if (le2)
      return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
    return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
  }
  function split(lst, le2 = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i = 0; i < lst.length; i++) {
      const { h: h2, l } = fromBig(lst[i], le2);
      [Ah[i], Al[i]] = [h2, l];
    }
    return [Ah, Al];
  }
  function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
  }
  var U32_MASK64, _32n, toBig, shrSH, shrSL, rotrSH, rotrSL, rotrBH, rotrBL, rotr32H, rotr32L, rotlSH, rotlSL, rotlBH, rotlBL, add3L, add3H, add4L, add4H, add5L, add5H, u64, u64_default;
  var init_u64 = __esm({
    "node_modules/@noble/hashes/esm/_u64.js"() {
      init_supra_shim();
      U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
      _32n = /* @__PURE__ */ BigInt(32);
      toBig = (h2, l) => BigInt(h2 >>> 0) << _32n | BigInt(l >>> 0);
      shrSH = (h2, _l, s) => h2 >>> s;
      shrSL = (h2, l, s) => h2 << 32 - s | l >>> s;
      rotrSH = (h2, l, s) => h2 >>> s | l << 32 - s;
      rotrSL = (h2, l, s) => h2 << 32 - s | l >>> s;
      rotrBH = (h2, l, s) => h2 << 64 - s | l >>> s - 32;
      rotrBL = (h2, l, s) => h2 >>> s - 32 | l << 64 - s;
      rotr32H = (_h, l) => l;
      rotr32L = (h2, _l) => h2;
      rotlSH = (h2, l, s) => h2 << s | l >>> 32 - s;
      rotlSL = (h2, l, s) => l << s | h2 >>> 32 - s;
      rotlBH = (h2, l, s) => l << s - 32 | h2 >>> 64 - s;
      rotlBL = (h2, l, s) => h2 << s - 32 | l >>> 64 - s;
      add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
      add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
      add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
      add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
      add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
      add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
      u64 = {
        fromBig,
        split,
        toBig,
        shrSH,
        shrSL,
        rotrSH,
        rotrSL,
        rotrBH,
        rotrBL,
        rotr32H,
        rotr32L,
        rotlSH,
        rotlSL,
        rotlBH,
        rotlBL,
        add,
        add3L,
        add3H,
        add4L,
        add4H,
        add5H,
        add5L
      };
      u64_default = u64;
    }
  });

  // node_modules/@noble/hashes/esm/sha512.js
  var SHA512_Kh, SHA512_Kl, SHA512_W_H, SHA512_W_L, SHA512, sha512;
  var init_sha512 = __esm({
    "node_modules/@noble/hashes/esm/sha512.js"() {
      init_supra_shim();
      init_sha2();
      init_u64();
      init_utils();
      [SHA512_Kh, SHA512_Kl] = /* @__PURE__ */ (() => u64_default.split([
        "0x428a2f98d728ae22",
        "0x7137449123ef65cd",
        "0xb5c0fbcfec4d3b2f",
        "0xe9b5dba58189dbbc",
        "0x3956c25bf348b538",
        "0x59f111f1b605d019",
        "0x923f82a4af194f9b",
        "0xab1c5ed5da6d8118",
        "0xd807aa98a3030242",
        "0x12835b0145706fbe",
        "0x243185be4ee4b28c",
        "0x550c7dc3d5ffb4e2",
        "0x72be5d74f27b896f",
        "0x80deb1fe3b1696b1",
        "0x9bdc06a725c71235",
        "0xc19bf174cf692694",
        "0xe49b69c19ef14ad2",
        "0xefbe4786384f25e3",
        "0x0fc19dc68b8cd5b5",
        "0x240ca1cc77ac9c65",
        "0x2de92c6f592b0275",
        "0x4a7484aa6ea6e483",
        "0x5cb0a9dcbd41fbd4",
        "0x76f988da831153b5",
        "0x983e5152ee66dfab",
        "0xa831c66d2db43210",
        "0xb00327c898fb213f",
        "0xbf597fc7beef0ee4",
        "0xc6e00bf33da88fc2",
        "0xd5a79147930aa725",
        "0x06ca6351e003826f",
        "0x142929670a0e6e70",
        "0x27b70a8546d22ffc",
        "0x2e1b21385c26c926",
        "0x4d2c6dfc5ac42aed",
        "0x53380d139d95b3df",
        "0x650a73548baf63de",
        "0x766a0abb3c77b2a8",
        "0x81c2c92e47edaee6",
        "0x92722c851482353b",
        "0xa2bfe8a14cf10364",
        "0xa81a664bbc423001",
        "0xc24b8b70d0f89791",
        "0xc76c51a30654be30",
        "0xd192e819d6ef5218",
        "0xd69906245565a910",
        "0xf40e35855771202a",
        "0x106aa07032bbd1b8",
        "0x19a4c116b8d2d0c8",
        "0x1e376c085141ab53",
        "0x2748774cdf8eeb99",
        "0x34b0bcb5e19b48a8",
        "0x391c0cb3c5c95a63",
        "0x4ed8aa4ae3418acb",
        "0x5b9cca4f7763e373",
        "0x682e6ff3d6b2b8a3",
        "0x748f82ee5defb2fc",
        "0x78a5636f43172f60",
        "0x84c87814a1f0ab72",
        "0x8cc702081a6439ec",
        "0x90befffa23631e28",
        "0xa4506cebde82bde9",
        "0xbef9a3f7b2c67915",
        "0xc67178f2e372532b",
        "0xca273eceea26619c",
        "0xd186b8c721c0c207",
        "0xeada7dd6cde0eb1e",
        "0xf57d4f7fee6ed178",
        "0x06f067aa72176fba",
        "0x0a637dc5a2c898a6",
        "0x113f9804bef90dae",
        "0x1b710b35131c471b",
        "0x28db77f523047d84",
        "0x32caab7b40c72493",
        "0x3c9ebe0a15c9bebc",
        "0x431d67c49c100d4c",
        "0x4cc5d4becb3e42b6",
        "0x597f299cfc657e2a",
        "0x5fcb6fab3ad6faec",
        "0x6c44198c4a475817"
      ].map((n) => BigInt(n))))();
      SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
      SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
      SHA512 = class extends SHA2 {
        constructor() {
          super(128, 64, 16, false);
          this.Ah = 1779033703 | 0;
          this.Al = 4089235720 | 0;
          this.Bh = 3144134277 | 0;
          this.Bl = 2227873595 | 0;
          this.Ch = 1013904242 | 0;
          this.Cl = 4271175723 | 0;
          this.Dh = 2773480762 | 0;
          this.Dl = 1595750129 | 0;
          this.Eh = 1359893119 | 0;
          this.El = 2917565137 | 0;
          this.Fh = 2600822924 | 0;
          this.Fl = 725511199 | 0;
          this.Gh = 528734635 | 0;
          this.Gl = 4215389547 | 0;
          this.Hh = 1541459225 | 0;
          this.Hl = 327033209 | 0;
        }
        // prettier-ignore
        get() {
          const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
          return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
        }
        // prettier-ignore
        set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
          this.Ah = Ah | 0;
          this.Al = Al | 0;
          this.Bh = Bh | 0;
          this.Bl = Bl | 0;
          this.Ch = Ch | 0;
          this.Cl = Cl | 0;
          this.Dh = Dh | 0;
          this.Dl = Dl | 0;
          this.Eh = Eh | 0;
          this.El = El | 0;
          this.Fh = Fh | 0;
          this.Fl = Fl | 0;
          this.Gh = Gh | 0;
          this.Gl = Gl | 0;
          this.Hh = Hh | 0;
          this.Hl = Hl | 0;
        }
        process(view, offset) {
          for (let i = 0; i < 16; i++, offset += 4) {
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32(offset += 4);
          }
          for (let i = 16; i < 80; i++) {
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = u64_default.rotrSH(W15h, W15l, 1) ^ u64_default.rotrSH(W15h, W15l, 8) ^ u64_default.shrSH(W15h, W15l, 7);
            const s0l = u64_default.rotrSL(W15h, W15l, 1) ^ u64_default.rotrSL(W15h, W15l, 8) ^ u64_default.shrSL(W15h, W15l, 7);
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = u64_default.rotrSH(W2h, W2l, 19) ^ u64_default.rotrBH(W2h, W2l, 61) ^ u64_default.shrSH(W2h, W2l, 6);
            const s1l = u64_default.rotrSL(W2h, W2l, 19) ^ u64_default.rotrBL(W2h, W2l, 61) ^ u64_default.shrSL(W2h, W2l, 6);
            const SUMl = u64_default.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = u64_default.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
          }
          let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
          for (let i = 0; i < 80; i++) {
            const sigma1h = u64_default.rotrSH(Eh, El, 14) ^ u64_default.rotrSH(Eh, El, 18) ^ u64_default.rotrBH(Eh, El, 41);
            const sigma1l = u64_default.rotrSL(Eh, El, 14) ^ u64_default.rotrSL(Eh, El, 18) ^ u64_default.rotrBL(Eh, El, 41);
            const CHIh = Eh & Fh ^ ~Eh & Gh;
            const CHIl = El & Fl ^ ~El & Gl;
            const T1ll = u64_default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = u64_default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            const sigma0h = u64_default.rotrSH(Ah, Al, 28) ^ u64_default.rotrBH(Ah, Al, 34) ^ u64_default.rotrBH(Ah, Al, 39);
            const sigma0l = u64_default.rotrSL(Ah, Al, 28) ^ u64_default.rotrBL(Ah, Al, 34) ^ u64_default.rotrBL(Ah, Al, 39);
            const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
            const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh, l: El } = u64_default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = u64_default.add3L(T1l, sigma0l, MAJl);
            Ah = u64_default.add3H(All, T1h, sigma0h, MAJh);
            Al = All | 0;
          }
          ({ h: Ah, l: Al } = u64_default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
          ({ h: Bh, l: Bl } = u64_default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
          ({ h: Ch, l: Cl } = u64_default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
          ({ h: Dh, l: Dl } = u64_default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
          ({ h: Eh, l: El } = u64_default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
          ({ h: Fh, l: Fl } = u64_default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
          ({ h: Gh, l: Gl } = u64_default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
          ({ h: Hh, l: Hl } = u64_default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
          this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
        }
        roundClean() {
          SHA512_W_H.fill(0);
          SHA512_W_L.fill(0);
        }
        destroy() {
          this.buffer.fill(0);
          this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      };
      sha512 = /* @__PURE__ */ wrapConstructor(() => new SHA512());
    }
  });

  // node_modules/@scure/bip39/esm/index.js
  function nfkd(str) {
    if (typeof str !== "string")
      throw new TypeError(`Invalid mnemonic type: ${typeof str}`);
    return str.normalize("NFKD");
  }
  function normalize(str) {
    const norm = nfkd(str);
    const words = norm.split(" ");
    if (![12, 15, 18, 21, 24].includes(words.length))
      throw new Error("Invalid mnemonic");
    return { nfkd: norm, words };
  }
  function mnemonicToSeedSync(mnemonic, passphrase = "") {
    return pbkdf2(sha512, normalize(mnemonic).nfkd, salt(passphrase), { c: 2048, dkLen: 64 });
  }
  var salt;
  var init_esm = __esm({
    "node_modules/@scure/bip39/esm/index.js"() {
      init_supra_shim();
      init_pbkdf2();
      init_sha512();
      salt = (passphrase) => nfkd(`mnemonic${passphrase}`);
    }
  });

  // node_modules/@noble/hashes/esm/sha3.js
  function keccakP(s, rounds = 24) {
    const B2 = new Uint32Array(5 * 2);
    for (let round = 24 - rounds; round < 24; round++) {
      for (let x = 0; x < 10; x++)
        B2[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
      for (let x = 0; x < 10; x += 2) {
        const idx1 = (x + 8) % 10;
        const idx0 = (x + 2) % 10;
        const B0 = B2[idx0];
        const B1 = B2[idx0 + 1];
        const Th = rotlH(B0, B1, 1) ^ B2[idx1];
        const Tl = rotlL(B0, B1, 1) ^ B2[idx1 + 1];
        for (let y = 0; y < 50; y += 10) {
          s[x + y] ^= Th;
          s[x + y + 1] ^= Tl;
        }
      }
      let curH = s[2];
      let curL = s[3];
      for (let t = 0; t < 24; t++) {
        const shift = SHA3_ROTL[t];
        const Th = rotlH(curH, curL, shift);
        const Tl = rotlL(curH, curL, shift);
        const PI = SHA3_PI[t];
        curH = s[PI];
        curL = s[PI + 1];
        s[PI] = Th;
        s[PI + 1] = Tl;
      }
      for (let y = 0; y < 50; y += 10) {
        for (let x = 0; x < 10; x++)
          B2[x] = s[y + x];
        for (let x = 0; x < 10; x++)
          s[y + x] ^= ~B2[(x + 2) % 10] & B2[(x + 4) % 10];
      }
      s[0] ^= SHA3_IOTA_H[round];
      s[1] ^= SHA3_IOTA_L[round];
    }
    B2.fill(0);
  }
  var SHA3_PI, SHA3_ROTL, _SHA3_IOTA, _0n, _1n, _2n, _7n, _256n, _0x71n, SHA3_IOTA_H, SHA3_IOTA_L, rotlH, rotlL, Keccak, gen, sha3_224, sha3_256, sha3_384, sha3_512, keccak_224, keccak_256, keccak_384, keccak_512, genShake, shake128, shake256;
  var init_sha3 = __esm({
    "node_modules/@noble/hashes/esm/sha3.js"() {
      init_supra_shim();
      init_assert();
      init_u64();
      init_utils();
      [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
      _0n = /* @__PURE__ */ BigInt(0);
      _1n = /* @__PURE__ */ BigInt(1);
      _2n = /* @__PURE__ */ BigInt(2);
      _7n = /* @__PURE__ */ BigInt(7);
      _256n = /* @__PURE__ */ BigInt(256);
      _0x71n = /* @__PURE__ */ BigInt(113);
      for (let round = 0, R2 = _1n, x = 1, y = 0; round < 24; round++) {
        [x, y] = [y, (2 * x + 3 * y) % 5];
        SHA3_PI.push(2 * (5 * y + x));
        SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
        let t = _0n;
        for (let j2 = 0; j2 < 7; j2++) {
          R2 = (R2 << _1n ^ (R2 >> _7n) * _0x71n) % _256n;
          if (R2 & _2n)
            t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j2)) - _1n;
        }
        _SHA3_IOTA.push(t);
      }
      [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ split(_SHA3_IOTA, true);
      rotlH = (h2, l, s) => s > 32 ? rotlBH(h2, l, s) : rotlSH(h2, l, s);
      rotlL = (h2, l, s) => s > 32 ? rotlBL(h2, l, s) : rotlSL(h2, l, s);
      Keccak = class _Keccak extends Hash {
        // NOTE: we accept arguments in bytes instead of bits here.
        constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
          super();
          this.blockLen = blockLen;
          this.suffix = suffix;
          this.outputLen = outputLen;
          this.enableXOF = enableXOF;
          this.rounds = rounds;
          this.pos = 0;
          this.posOut = 0;
          this.finished = false;
          this.destroyed = false;
          number(outputLen);
          if (0 >= this.blockLen || this.blockLen >= 200)
            throw new Error("Sha3 supports only keccak-f1600 function");
          this.state = new Uint8Array(200);
          this.state32 = u32(this.state);
        }
        keccak() {
          keccakP(this.state32, this.rounds);
          this.posOut = 0;
          this.pos = 0;
        }
        update(data) {
          exists(this);
          const { blockLen, state } = this;
          data = toBytes(data);
          const len = data.length;
          for (let pos = 0; pos < len; ) {
            const take = Math.min(blockLen - this.pos, len - pos);
            for (let i = 0; i < take; i++)
              state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen)
              this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished)
            return;
          this.finished = true;
          const { state, suffix, pos, blockLen } = this;
          state[pos] ^= suffix;
          if ((suffix & 128) !== 0 && pos === blockLen - 1)
            this.keccak();
          state[blockLen - 1] ^= 128;
          this.keccak();
        }
        writeInto(out) {
          exists(this, false);
          bytes(out);
          this.finish();
          const bufferOut = this.state;
          const { blockLen } = this;
          for (let pos = 0, len = out.length; pos < len; ) {
            if (this.posOut >= blockLen)
              this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
          }
          return out;
        }
        xofInto(out) {
          if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
          return this.writeInto(out);
        }
        xof(bytes2) {
          number(bytes2);
          return this.xofInto(new Uint8Array(bytes2));
        }
        digestInto(out) {
          output(out, this);
          if (this.finished)
            throw new Error("digest() was already called");
          this.writeInto(out);
          this.destroy();
          return out;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          this.destroyed = true;
          this.state.fill(0);
        }
        _cloneInto(to) {
          const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
          to || (to = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
          to.state32.set(this.state32);
          to.pos = this.pos;
          to.posOut = this.posOut;
          to.finished = this.finished;
          to.rounds = rounds;
          to.suffix = suffix;
          to.outputLen = outputLen;
          to.enableXOF = enableXOF;
          to.destroyed = this.destroyed;
          return to;
        }
      };
      gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
      sha3_224 = /* @__PURE__ */ gen(6, 144, 224 / 8);
      sha3_256 = /* @__PURE__ */ gen(6, 136, 256 / 8);
      sha3_384 = /* @__PURE__ */ gen(6, 104, 384 / 8);
      sha3_512 = /* @__PURE__ */ gen(6, 72, 512 / 8);
      keccak_224 = /* @__PURE__ */ gen(1, 144, 224 / 8);
      keccak_256 = /* @__PURE__ */ gen(1, 136, 256 / 8);
      keccak_384 = /* @__PURE__ */ gen(1, 104, 384 / 8);
      keccak_512 = /* @__PURE__ */ gen(1, 72, 512 / 8);
      genShake = (suffix, blockLen, outputLen) => wrapXOFConstructorWithOpts((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
      shake128 = /* @__PURE__ */ genShake(31, 168, 128 / 8);
      shake256 = /* @__PURE__ */ genShake(31, 136, 256 / 8);
    }
  });

  // node_modules/axios/lib/helpers/bind.js
  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }
  var init_bind = __esm({
    "node_modules/axios/lib/helpers/bind.js"() {
      "use strict";
      init_supra_shim();
    }
  });

  // node_modules/axios/lib/utils.js
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  var toString, getPrototypeOf, kindOf, kindOfTest, typeOfTest, isArray, isUndefined, isArrayBuffer, isString, isFunction, isNumber, isObject, isBoolean, isPlainObject, isDate, isFile, isBlob, isFileList, isStream, isFormData, isURLSearchParams, isReadableStream, isRequest, isResponse, isHeaders, trim, _global, isContextDefined, extend, stripBOM, inherits, toFlatObject, endsWith, toArray, isTypedArray, forEachEntry, matchAll, isHTMLForm, toCamelCase, hasOwnProperty, isRegExp, reduceDescriptors, freezeMethods, toObjectSet, noop, toFiniteNumber, ALPHA, DIGIT, ALPHABET, generateString, toJSONObject, isAsyncFn, isThenable, _setImmediate, asap, utils_default;
  var init_utils2 = __esm({
    "node_modules/axios/lib/utils.js"() {
      "use strict";
      init_supra_shim();
      init_bind();
      ({ toString } = Object.prototype);
      ({ getPrototypeOf } = Object);
      kindOf = /* @__PURE__ */ ((cache) => (thing) => {
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
      })(/* @__PURE__ */ Object.create(null));
      kindOfTest = (type) => {
        type = type.toLowerCase();
        return (thing) => kindOf(thing) === type;
      };
      typeOfTest = (type) => (thing) => typeof thing === type;
      ({ isArray } = Array);
      isUndefined = typeOfTest("undefined");
      isArrayBuffer = kindOfTest("ArrayBuffer");
      isString = typeOfTest("string");
      isFunction = typeOfTest("function");
      isNumber = typeOfTest("number");
      isObject = (thing) => thing !== null && typeof thing === "object";
      isBoolean = (thing) => thing === true || thing === false;
      isPlainObject = (val) => {
        if (kindOf(val) !== "object") {
          return false;
        }
        const prototype3 = getPrototypeOf(val);
        return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
      };
      isDate = kindOfTest("Date");
      isFile = kindOfTest("File");
      isBlob = kindOfTest("Blob");
      isFileList = kindOfTest("FileList");
      isStream = (val) => isObject(val) && isFunction(val.pipe);
      isFormData = (thing) => {
        let kind;
        return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
        kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
      };
      isURLSearchParams = kindOfTest("URLSearchParams");
      [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
      trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      _global = (() => {
        if (typeof globalThis !== "undefined") return globalThis;
        return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
      })();
      isContextDefined = (context) => !isUndefined(context) && context !== _global;
      extend = (a, b, thisArg, { allOwnKeys } = {}) => {
        forEach(b, (val, key) => {
          if (thisArg && isFunction(val)) {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        }, { allOwnKeys });
        return a;
      };
      stripBOM = (content) => {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      };
      inherits = (constructor, superConstructor, props, descriptors2) => {
        constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
        constructor.prototype.constructor = constructor;
        Object.defineProperty(constructor, "super", {
          value: superConstructor.prototype
        });
        props && Object.assign(constructor.prototype, props);
      };
      toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
        let props;
        let i;
        let prop;
        const merged = {};
        destObj = destObj || {};
        if (sourceObj == null) return destObj;
        do {
          props = Object.getOwnPropertyNames(sourceObj);
          i = props.length;
          while (i-- > 0) {
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
              destObj[prop] = sourceObj[prop];
              merged[prop] = true;
            }
          }
          sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
        } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
        return destObj;
      };
      endsWith = (str, searchString, position) => {
        str = String(str);
        if (position === void 0 || position > str.length) {
          position = str.length;
        }
        position -= searchString.length;
        const lastIndex = str.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      };
      toArray = (thing) => {
        if (!thing) return null;
        if (isArray(thing)) return thing;
        let i = thing.length;
        if (!isNumber(i)) return null;
        const arr = new Array(i);
        while (i-- > 0) {
          arr[i] = thing[i];
        }
        return arr;
      };
      isTypedArray = /* @__PURE__ */ ((TypedArray) => {
        return (thing) => {
          return TypedArray && thing instanceof TypedArray;
        };
      })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
      forEachEntry = (obj, fn) => {
        const generator = obj && obj[Symbol.iterator];
        const iterator = generator.call(obj);
        let result;
        while ((result = iterator.next()) && !result.done) {
          const pair = result.value;
          fn.call(obj, pair[0], pair[1]);
        }
      };
      matchAll = (regExp, str) => {
        let matches;
        const arr = [];
        while ((matches = regExp.exec(str)) !== null) {
          arr.push(matches);
        }
        return arr;
      };
      isHTMLForm = kindOfTest("HTMLFormElement");
      toCamelCase = (str) => {
        return str.toLowerCase().replace(
          /[-_\s]([a-z\d])(\w*)/g,
          function replacer(m, p1, p2) {
            return p1.toUpperCase() + p2;
          }
        );
      };
      hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
      isRegExp = kindOfTest("RegExp");
      reduceDescriptors = (obj, reducer) => {
        const descriptors2 = Object.getOwnPropertyDescriptors(obj);
        const reducedDescriptors = {};
        forEach(descriptors2, (descriptor, name) => {
          let ret;
          if ((ret = reducer(descriptor, name, obj)) !== false) {
            reducedDescriptors[name] = ret || descriptor;
          }
        });
        Object.defineProperties(obj, reducedDescriptors);
      };
      freezeMethods = (obj) => {
        reduceDescriptors(obj, (descriptor, name) => {
          if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
            return false;
          }
          const value = obj[name];
          if (!isFunction(value)) return;
          descriptor.enumerable = false;
          if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
          }
          if (!descriptor.set) {
            descriptor.set = () => {
              throw Error("Can not rewrite read-only method '" + name + "'");
            };
          }
        });
      };
      toObjectSet = (arrayOrString, delimiter) => {
        const obj = {};
        const define2 = (arr) => {
          arr.forEach((value) => {
            obj[value] = true;
          });
        };
        isArray(arrayOrString) ? define2(arrayOrString) : define2(String(arrayOrString).split(delimiter));
        return obj;
      };
      noop = () => {
      };
      toFiniteNumber = (value, defaultValue) => {
        return value != null && Number.isFinite(value = +value) ? value : defaultValue;
      };
      ALPHA = "abcdefghijklmnopqrstuvwxyz";
      DIGIT = "0123456789";
      ALPHABET = {
        DIGIT,
        ALPHA,
        ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
      };
      generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
        let str = "";
        const { length } = alphabet;
        while (size--) {
          str += alphabet[Math.random() * length | 0];
        }
        return str;
      };
      toJSONObject = (obj) => {
        const stack = new Array(10);
        const visit = (source, i) => {
          if (isObject(source)) {
            if (stack.indexOf(source) >= 0) {
              return;
            }
            if (!("toJSON" in source)) {
              stack[i] = source;
              const target = isArray(source) ? [] : {};
              forEach(source, (value, key) => {
                const reducedValue = visit(value, i + 1);
                !isUndefined(reducedValue) && (target[key] = reducedValue);
              });
              stack[i] = void 0;
              return target;
            }
          }
          return source;
        };
        return visit(obj, 0);
      };
      isAsyncFn = kindOfTest("AsyncFunction");
      isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
      _setImmediate = ((setImmediateSupported, postMessageSupported) => {
        if (setImmediateSupported) {
          return setImmediate;
        }
        return postMessageSupported ? ((token, callbacks) => {
          _global.addEventListener("message", ({ source, data }) => {
            if (source === _global && data === token) {
              callbacks.length && callbacks.shift()();
            }
          }, false);
          return (cb) => {
            callbacks.push(cb);
            _global.postMessage(token, "*");
          };
        })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
      })(
        typeof setImmediate === "function",
        isFunction(_global.postMessage)
      );
      asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
      utils_default = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isBoolean,
        isObject,
        isPlainObject,
        isReadableStream,
        isRequest,
        isResponse,
        isHeaders,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isRegExp,
        isFunction,
        isStream,
        isURLSearchParams,
        isTypedArray,
        isFileList,
        forEach,
        merge,
        extend,
        trim,
        stripBOM,
        inherits,
        toFlatObject,
        kindOf,
        kindOfTest,
        endsWith,
        toArray,
        forEachEntry,
        matchAll,
        isHTMLForm,
        hasOwnProperty,
        hasOwnProp: hasOwnProperty,
        // an alias to avoid ESLint no-prototype-builtins detection
        reduceDescriptors,
        freezeMethods,
        toObjectSet,
        toCamelCase,
        noop,
        toFiniteNumber,
        findKey,
        global: _global,
        isContextDefined,
        ALPHABET,
        generateString,
        isSpecCompliantForm,
        toJSONObject,
        isAsyncFn,
        isThenable,
        setImmediate: _setImmediate,
        asap
      };
    }
  });

  // node_modules/axios/lib/core/AxiosError.js
  function AxiosError(message, code, config, request2, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request2 && (this.request = request2);
    response && (this.response = response);
  }
  var prototype, descriptors, AxiosError_default;
  var init_AxiosError = __esm({
    "node_modules/axios/lib/core/AxiosError.js"() {
      "use strict";
      init_supra_shim();
      init_utils2();
      utils_default.inherits(AxiosError, Error, {
        toJSON: function toJSON() {
          return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: utils_default.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
          };
        }
      });
      prototype = AxiosError.prototype;
      descriptors = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL"
        // eslint-disable-next-line func-names
      ].forEach((code) => {
        descriptors[code] = { value: code };
      });
      Object.defineProperties(AxiosError, descriptors);
      Object.defineProperty(prototype, "isAxiosError", { value: true });
      AxiosError.from = (error, code, config, request2, response, customProps) => {
        const axiosError = Object.create(prototype);
        utils_default.toFlatObject(error, axiosError, function filter2(obj) {
          return obj !== Error.prototype;
        }, (prop) => {
          return prop !== "isAxiosError";
        });
        AxiosError.call(axiosError, error.message, code, config, request2, response);
        axiosError.cause = error;
        axiosError.name = error.name;
        customProps && Object.assign(axiosError, customProps);
        return axiosError;
      };
      AxiosError_default = AxiosError;
    }
  });

  // node_modules/axios/lib/helpers/null.js
  var null_default;
  var init_null = __esm({
    "node_modules/axios/lib/helpers/null.js"() {
      init_supra_shim();
      null_default = null;
    }
  });

  // node_modules/axios/lib/helpers/toFormData.js
  function isVisitable(thing) {
    return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
  }
  function removeBrackets(key) {
    return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils_default.isArray(arr) && !arr.some(isVisitable);
  }
  function toFormData(obj, formData, options) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (null_default || FormData)();
    options = utils_default.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils_default.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
    if (!utils_default.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null) return "";
      if (utils_default.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils_default.isBlob(value)) {
        throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
      }
      if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils_default.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils_default.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils_default.isUndefined(value)) return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils_default.forEach(value, function each(el, key) {
        const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils_default.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  var predicates, toFormData_default;
  var init_toFormData = __esm({
    "node_modules/axios/lib/helpers/toFormData.js"() {
      "use strict";
      init_supra_shim();
      init_utils2();
      init_AxiosError();
      init_null();
      predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
        return /^is[A-Z]/.test(prop);
      });
      toFormData_default = toFormData;
    }
  });

  // node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  function encode(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData_default(params, this, options);
  }
  var prototype2, AxiosURLSearchParams_default;
  var init_AxiosURLSearchParams = __esm({
    "node_modules/axios/lib/helpers/AxiosURLSearchParams.js"() {
      "use strict";
      init_supra_shim();
      init_toFormData();
      prototype2 = AxiosURLSearchParams.prototype;
      prototype2.append = function append(name, value) {
        this._pairs.push([name, value]);
      };
      prototype2.toString = function toString2(encoder) {
        const _encode = encoder ? function(value) {
          return encoder.call(this, value, encode);
        } : encode;
        return this._pairs.map(function each(pair) {
          return _encode(pair[0]) + "=" + _encode(pair[1]);
        }, "").join("&");
      };
      AxiosURLSearchParams_default = AxiosURLSearchParams;
    }
  });

  // node_modules/axios/lib/helpers/buildURL.js
  function encode2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const _encode = options && options.encode || encode2;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }
  var init_buildURL = __esm({
    "node_modules/axios/lib/helpers/buildURL.js"() {
      "use strict";
      init_supra_shim();
      init_utils2();
      init_AxiosURLSearchParams();
    }
  });

  // node_modules/axios/lib/core/InterceptorManager.js
  var InterceptorManager, InterceptorManager_default;
  var init_InterceptorManager = __esm({
    "node_modules/axios/lib/core/InterceptorManager.js"() {
      "use strict";
      init_supra_shim();
      init_utils2();
      InterceptorManager = class {
        constructor() {
          this.handlers = [];
        }
        /**
         * Add a new interceptor to the stack
         *
         * @param {Function} fulfilled The function to handle `then` for a `Promise`
         * @param {Function} rejected The function to handle `reject` for a `Promise`
         *
         * @return {Number} An ID used to remove interceptor later
         */
        use(fulfilled, rejected, options) {
          this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
          });
          return this.handlers.length - 1;
        }
        /**
         * Remove an interceptor from the stack
         *
         * @param {Number} id The ID that was returned by `use`
         *
         * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
         */
        eject(id) {
          if (this.handlers[id]) {
            this.handlers[id] = null;
          }
        }
        /**
         * Clear all interceptors from the stack
         *
         * @returns {void}
         */
        clear() {
          if (this.handlers) {
            this.handlers = [];
          }
        }
        /**
         * Iterate over all the registered interceptors
         *
         * This method is particularly useful for skipping over any
         * interceptors that may have become `null` calling `eject`.
         *
         * @param {Function} fn The function to call for each interceptor
         *
         * @returns {void}
         */
        forEach(fn) {
          utils_default.forEach(this.handlers, function forEachHandler(h2) {
            if (h2 !== null) {
              fn(h2);
            }
          });
        }
      };
      InterceptorManager_default = InterceptorManager;
    }
  });

  // node_modules/axios/lib/defaults/transitional.js
  var transitional_default;
  var init_transitional = __esm({
    "node_modules/axios/lib/defaults/transitional.js"() {
      "use strict";
      init_supra_shim();
      transitional_default = {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      };
    }
  });

  // node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
  var URLSearchParams_default;
  var init_URLSearchParams = __esm({
    "node_modules/axios/lib/platform/browser/classes/URLSearchParams.js"() {
      "use strict";
      init_supra_shim();
      init_AxiosURLSearchParams();
      URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;
    }
  });

  // node_modules/axios/lib/platform/browser/classes/FormData.js
  var FormData_default;
  var init_FormData = __esm({
    "node_modules/axios/lib/platform/browser/classes/FormData.js"() {
      "use strict";
      init_supra_shim();
      FormData_default = typeof FormData !== "undefined" ? FormData : null;
    }
  });

  // node_modules/axios/lib/platform/browser/classes/Blob.js
  var Blob_default;
  var init_Blob = __esm({
    "node_modules/axios/lib/platform/browser/classes/Blob.js"() {
      "use strict";
      init_supra_shim();
      Blob_default = typeof Blob !== "undefined" ? Blob : null;
    }
  });

  // node_modules/axios/lib/platform/browser/index.js
  var browser_default;
  var init_browser = __esm({
    "node_modules/axios/lib/platform/browser/index.js"() {
      init_supra_shim();
      init_URLSearchParams();
      init_FormData();
      init_Blob();
      browser_default = {
        isBrowser: true,
        classes: {
          URLSearchParams: URLSearchParams_default,
          FormData: FormData_default,
          Blob: Blob_default
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
      };
    }
  });

  // node_modules/axios/lib/platform/common/utils.js
  var utils_exports = {};
  __export(utils_exports, {
    hasBrowserEnv: () => hasBrowserEnv,
    hasStandardBrowserEnv: () => hasStandardBrowserEnv,
    hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
    origin: () => origin
  });
  var hasBrowserEnv, hasStandardBrowserEnv, hasStandardBrowserWebWorkerEnv, origin;
  var init_utils3 = __esm({
    "node_modules/axios/lib/platform/common/utils.js"() {
      init_supra_shim();
      hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
      hasStandardBrowserEnv = ((product) => {
        return hasBrowserEnv && ["ReactNative", "NativeScript", "NS"].indexOf(product) < 0;
      })(typeof navigator !== "undefined" && navigator.product);
      hasStandardBrowserWebWorkerEnv = (() => {
        return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
        self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
      })();
      origin = hasBrowserEnv && window.location.href || "http://localhost";
    }
  });

  // node_modules/axios/lib/platform/index.js
  var platform_default;
  var init_platform = __esm({
    "node_modules/axios/lib/platform/index.js"() {
      init_supra_shim();
      init_browser();
      init_utils3();
      platform_default = {
        ...utils_exports,
        ...browser_default
      };
    }
  });

  // node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data, options) {
    return toFormData_default(data, new platform_default.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (platform_default.isNode && utils_default.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }
  var init_toURLEncodedForm = __esm({
    "node_modules/axios/lib/helpers/toURLEncodedForm.js"() {
      "use strict";
      init_supra_shim();
      init_utils2();
      init_toFormData();
      init_platform();
    }
  });

  // node_modules/axios/lib/helpers/formDataToJSON.js
  function parsePropPath(name) {
    return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      if (name === "__proto__") return true;
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils_default.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils_default.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils_default.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils_default.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
      const obj = {};
      utils_default.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  var formDataToJSON_default;
  var init_formDataToJSON = __esm({
    "node_modules/axios/lib/helpers/formDataToJSON.js"() {
      "use strict";
      init_supra_shim();
      init_utils2();
      formDataToJSON_default = formDataToJSON;
    }
  });

  // node_modules/axios/lib/defaults/index.js
  function stringifySafely(rawValue, parser, encoder) {
    if (utils_default.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils_default.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults, defaults_default;
  var init_defaults = __esm({
    "node_modules/axios/lib/defaults/index.js"() {
      "use strict";
      init_supra_shim();
      init_utils2();
      init_AxiosError();
      init_transitional();
      init_toFormData();
      init_toURLEncodedForm();
      init_platform();
      init_formDataToJSON();
      defaults = {
        transitional: transitional_default,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [function transformRequest(data, headers) {
          const contentType = headers.getContentType() || "";
          const hasJSONContentType = contentType.indexOf("application/json") > -1;
          const isObjectPayload = utils_default.isObject(data);
          if (isObjectPayload && utils_default.isHTMLForm(data)) {
            data = new FormData(data);
          }
          const isFormData2 = utils_default.isFormData(data);
          if (isFormData2) {
            return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
          }
          if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) {
            return data;
          }
          if (utils_default.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils_default.isURLSearchParams(data)) {
            headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
            return data.toString();
          }
          let isFileList2;
          if (isObjectPayload) {
            if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
              return toURLEncodedForm(data, this.formSerializer).toString();
            }
            if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
              const _FormData = this.env && this.env.FormData;
              return toFormData_default(
                isFileList2 ? { "files[]": data } : data,
                _FormData && new _FormData(),
                this.formSerializer
              );
            }
          }
          if (isObjectPayload || hasJSONContentType) {
            headers.setContentType("application/json", false);
            return stringifySafely(data);
          }
          return data;
        }],
        transformResponse: [function transformResponse(data) {
          const transitional2 = this.transitional || defaults.transitional;
          const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
          const JSONRequested = this.responseType === "json";
          if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) {
            return data;
          }
          if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
            const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
            const strictJSONParsing = !silentJSONParsing && JSONRequested;
            try {
              return JSON.parse(data);
            } catch (e) {
              if (strictJSONParsing) {
                if (e.name === "SyntaxError") {
                  throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
                }
                throw e;
              }
            }
          }
          return data;
        }],
        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: platform_default.classes.FormData,
          Blob: platform_default.classes.Blob
        },
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": void 0
          }
        }
      };
      utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method2) => {
        defaults.headers[method2] = {};
      });
      defaults_default = defaults;
    }
  });

  // node_modules/axios/lib/helpers/parseHeaders.js
  var ignoreDuplicateOf, parseHeaders_default;
  var init_parseHeaders = __esm({
    "node_modules/axios/lib/helpers/parseHeaders.js"() {
      "use strict";
      init_supra_shim();
      init_utils2();
      ignoreDuplicateOf = utils_default.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ]);
      parseHeaders_default = (rawHeaders) => {
        const parsed = {};
        let key;
        let val;
        let i;
        rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
          i = line.indexOf(":");
          key = line.substring(0, i).trim().toLowerCase();
          val = line.substring(i + 1).trim();
          if (!key || parsed[key] && ignoreDuplicateOf[key]) {
            return;
          }
          if (key === "set-cookie") {
            if (parsed[key]) {
              parsed[key].push(val);
            } else {
              parsed[key] = [val];
            }
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        });
        return parsed;
      };
    }
  });

  // node_modules/axios/lib/core/AxiosHeaders.js
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils_default.isString(value)) return;
    if (utils_default.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils_default.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w2, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils_default.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var $internals, isValidHeaderName, AxiosHeaders, AxiosHeaders_default;
  var init_AxiosHeaders = __esm({
    "node_modules/axios/lib/core/AxiosHeaders.js"() {
      "use strict";
      init_supra_shim();
      init_utils2();
      init_parseHeaders();
      $internals = Symbol("internals");
      isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
      AxiosHeaders = class {
        constructor(headers) {
          headers && this.set(headers);
        }
        set(header, valueOrRewrite, rewrite) {
          const self2 = this;
          function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) {
              throw new Error("header name must be a non-empty string");
            }
            const key = utils_default.findKey(self2, lHeader);
            if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
              self2[key || _header] = normalizeValue(_value);
            }
          }
          const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
          if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
            setHeaders(header, valueOrRewrite);
          } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
            setHeaders(parseHeaders_default(header), valueOrRewrite);
          } else if (utils_default.isHeaders(header)) {
            for (const [key, value] of header.entries()) {
              setHeader(value, key, rewrite);
            }
          } else {
            header != null && setHeader(valueOrRewrite, header, rewrite);
          }
          return this;
        }
        get(header, parser) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils_default.findKey(this, header);
            if (key) {
              const value = this[key];
              if (!parser) {
                return value;
              }
              if (parser === true) {
                return parseTokens(value);
              }
              if (utils_default.isFunction(parser)) {
                return parser.call(this, value, key);
              }
              if (utils_default.isRegExp(parser)) {
                return parser.exec(value);
              }
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(header, matcher) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils_default.findKey(this, header);
            return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
          }
          return false;
        }
        delete(header, matcher) {
          const self2 = this;
          let deleted = false;
          function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
              const key = utils_default.findKey(self2, _header);
              if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
                delete self2[key];
                deleted = true;
              }
            }
          }
          if (utils_default.isArray(header)) {
            header.forEach(deleteHeader);
          } else {
            deleteHeader(header);
          }
          return deleted;
        }
        clear(matcher) {
          const keys = Object.keys(this);
          let i = keys.length;
          let deleted = false;
          while (i--) {
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
              delete this[key];
              deleted = true;
            }
          }
          return deleted;
        }
        normalize(format) {
          const self2 = this;
          const headers = {};
          utils_default.forEach(this, (value, header) => {
            const key = utils_default.findKey(headers, header);
            if (key) {
              self2[key] = normalizeValue(value);
              delete self2[header];
              return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) {
              delete self2[header];
            }
            self2[normalized] = normalizeValue(value);
            headers[normalized] = true;
          });
          return this;
        }
        concat(...targets) {
          return this.constructor.concat(this, ...targets);
        }
        toJSON(asStrings) {
          const obj = /* @__PURE__ */ Object.create(null);
          utils_default.forEach(this, (value, header) => {
            value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
          });
          return obj;
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(thing) {
          return thing instanceof this ? thing : new this(thing);
        }
        static concat(first, ...targets) {
          const computed = new this(first);
          targets.forEach((target) => computed.set(target));
          return computed;
        }
        static accessor(header) {
          const internals = this[$internals] = this[$internals] = {
            accessors: {}
          };
          const accessors = internals.accessors;
          const prototype3 = this.prototype;
          function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
              buildAccessors(prototype3, _header);
              accessors[lHeader] = true;
            }
          }
          utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
          return this;
        }
      };
      AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
      utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
        let mapped = key[0].toUpperCase() + key.slice(1);
        return {
          get: () => value,
          set(headerValue) {
            this[mapped] = headerValue;
          }
        };
      });
      utils_default.freezeMethods(AxiosHeaders);
      AxiosHeaders_default = AxiosHeaders;
    }
  });

  // node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config = this || defaults_default;
    const context = response || config;
    const headers = AxiosHeaders_default.from(context.headers);
    let data = context.data;
    utils_default.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }
  var init_transformData = __esm({
    "node_modules/axios/lib/core/transformData.js"() {
      "use strict";
      init_supra_shim();
      init_utils2();
      init_defaults();
      init_AxiosHeaders();
    }
  });

  // node_modules/axios/lib/cancel/isCancel.js
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }
  var init_isCancel = __esm({
    "node_modules/axios/lib/cancel/isCancel.js"() {
      "use strict";
      init_supra_shim();
    }
  });

  // node_modules/axios/lib/cancel/CanceledError.js
  function CanceledError(message, config, request2) {
    AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request2);
    this.name = "CanceledError";
  }
  var CanceledError_default;
  var init_CanceledError = __esm({
    "node_modules/axios/lib/cancel/CanceledError.js"() {
      "use strict";
      init_supra_shim();
      init_AxiosError();
      init_utils2();
      utils_default.inherits(CanceledError, AxiosError_default, {
        __CANCEL__: true
      });
      CanceledError_default = CanceledError;
    }
  });

  // node_modules/axios/lib/core/settle.js
  function settle(resolve, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError_default(
        "Request failed with status code " + response.status,
        [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }
  var init_settle = __esm({
    "node_modules/axios/lib/core/settle.js"() {
      "use strict";
      init_supra_shim();
      init_AxiosError();
    }
  });

  // node_modules/axios/lib/helpers/parseProtocol.js
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }
  var init_parseProtocol = __esm({
    "node_modules/axios/lib/helpers/parseProtocol.js"() {
      "use strict";
      init_supra_shim();
    }
  });

  // node_modules/axios/lib/helpers/speedometer.js
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes2 = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes2[head] = chunkLength;
      timestamps[head] = now;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes2[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  var speedometer_default;
  var init_speedometer = __esm({
    "node_modules/axios/lib/helpers/speedometer.js"() {
      "use strict";
      init_supra_shim();
      speedometer_default = speedometer;
    }
  });

  // node_modules/axios/lib/helpers/throttle.js
  function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1e3 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now()) => {
      timestamp = now;
      lastArgs = null;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.apply(null, args);
    };
    const throttled = (...args) => {
      const now = Date.now();
      const passed = now - timestamp;
      if (passed >= threshold) {
        invoke(args, now);
      } else {
        lastArgs = args;
        if (!timer) {
          timer = setTimeout(() => {
            timer = null;
            invoke(lastArgs);
          }, threshold - passed);
        }
      }
    };
    const flush = () => lastArgs && invoke(lastArgs);
    return [throttled, flush];
  }
  var throttle_default;
  var init_throttle = __esm({
    "node_modules/axios/lib/helpers/throttle.js"() {
      init_supra_shim();
      throttle_default = throttle;
    }
  });

  // node_modules/axios/lib/helpers/progressEventReducer.js
  var progressEventReducer, progressEventDecorator, asyncDecorator;
  var init_progressEventReducer = __esm({
    "node_modules/axios/lib/helpers/progressEventReducer.js"() {
      init_supra_shim();
      init_speedometer();
      init_throttle();
      init_utils2();
      progressEventReducer = (listener, isDownloadStream, freq = 3) => {
        let bytesNotified = 0;
        const _speedometer = speedometer_default(50, 250);
        return throttle_default((e) => {
          const loaded = e.loaded;
          const total = e.lengthComputable ? e.total : void 0;
          const progressBytes = loaded - bytesNotified;
          const rate = _speedometer(progressBytes);
          const inRange = loaded <= total;
          bytesNotified = loaded;
          const data = {
            loaded,
            total,
            progress: total ? loaded / total : void 0,
            bytes: progressBytes,
            rate: rate ? rate : void 0,
            estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
            event: e,
            lengthComputable: total != null,
            [isDownloadStream ? "download" : "upload"]: true
          };
          listener(data);
        }, freq);
      };
      progressEventDecorator = (total, throttled) => {
        const lengthComputable = total != null;
        return [(loaded) => throttled[0]({
          lengthComputable,
          total,
          loaded
        }), throttled[1]];
      };
      asyncDecorator = (fn) => (...args) => utils_default.asap(() => fn(...args));
    }
  });

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  var isURLSameOrigin_default;
  var init_isURLSameOrigin = __esm({
    "node_modules/axios/lib/helpers/isURLSameOrigin.js"() {
      "use strict";
      init_supra_shim();
      init_utils2();
      init_platform();
      isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? (
        // Standard browser envs have full support of the APIs needed to test
        // whether the request URL is of the same origin as current location.
        function standardBrowserEnv() {
          const msie = /(msie|trident)/i.test(navigator.userAgent);
          const urlParsingNode = document.createElement("a");
          let originURL;
          function resolveURL(url) {
            let href = url;
            if (msie) {
              urlParsingNode.setAttribute("href", href);
              href = urlParsingNode.href;
            }
            urlParsingNode.setAttribute("href", href);
            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
            };
          }
          originURL = resolveURL(window.location.href);
          return function isURLSameOrigin(requestURL) {
            const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
            return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
          };
        }()
      ) : (
        // Non standard browser envs (web workers, react-native) lack needed support.
        /* @__PURE__ */ function nonStandardBrowserEnv() {
          return function isURLSameOrigin() {
            return true;
          };
        }()
      );
    }
  });

  // node_modules/axios/lib/helpers/cookies.js
  var cookies_default;
  var init_cookies = __esm({
    "node_modules/axios/lib/helpers/cookies.js"() {
      init_supra_shim();
      init_utils2();
      init_platform();
      cookies_default = platform_default.hasStandardBrowserEnv ? (
        // Standard browser envs support document.cookie
        {
          write(name, value, expires, path, domain, secure) {
            const cookie = [name + "=" + encodeURIComponent(value)];
            utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
            utils_default.isString(path) && cookie.push("path=" + path);
            utils_default.isString(domain) && cookie.push("domain=" + domain);
            secure === true && cookie.push("secure");
            document.cookie = cookie.join("; ");
          },
          read(name) {
            const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove(name) {
            this.write(name, "", Date.now() - 864e5);
          }
        }
      ) : (
        // Non-standard browser env (web workers, react-native) lack needed support.
        {
          write() {
          },
          read() {
            return null;
          },
          remove() {
          }
        }
      );
    }
  });

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }
  var init_isAbsoluteURL = __esm({
    "node_modules/axios/lib/helpers/isAbsoluteURL.js"() {
      "use strict";
      init_supra_shim();
    }
  });

  // node_modules/axios/lib/helpers/combineURLs.js
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }
  var init_combineURLs = __esm({
    "node_modules/axios/lib/helpers/combineURLs.js"() {
      "use strict";
      init_supra_shim();
    }
  });

  // node_modules/axios/lib/core/buildFullPath.js
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  var init_buildFullPath = __esm({
    "node_modules/axios/lib/core/buildFullPath.js"() {
      "use strict";
      init_supra_shim();
      init_isAbsoluteURL();
      init_combineURLs();
    }
  });

  // node_modules/axios/lib/core/mergeConfig.js
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge.call({ caseless }, target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, caseless) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(a, b, caseless);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }
  var headersToObject;
  var init_mergeConfig = __esm({
    "node_modules/axios/lib/core/mergeConfig.js"() {
      "use strict";
      init_supra_shim();
      init_utils2();
      init_AxiosHeaders();
      headersToObject = (thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing;
    }
  });

  // node_modules/axios/lib/helpers/resolveConfig.js
  var resolveConfig_default;
  var init_resolveConfig = __esm({
    "node_modules/axios/lib/helpers/resolveConfig.js"() {
      init_supra_shim();
      init_platform();
      init_utils2();
      init_isURLSameOrigin();
      init_cookies();
      init_buildFullPath();
      init_mergeConfig();
      init_AxiosHeaders();
      init_buildURL();
      resolveConfig_default = (config) => {
        const newConfig = mergeConfig({}, config);
        let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
        newConfig.headers = headers = AxiosHeaders_default.from(headers);
        newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);
        if (auth) {
          headers.set(
            "Authorization",
            "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
          );
        }
        let contentType;
        if (utils_default.isFormData(data)) {
          if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
            headers.setContentType(void 0);
          } else if ((contentType = headers.getContentType()) !== false) {
            const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
            headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
          }
        }
        if (platform_default.hasStandardBrowserEnv) {
          withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
          if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(newConfig.url)) {
            const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
            if (xsrfValue) {
              headers.set(xsrfHeaderName, xsrfValue);
            }
          }
        }
        return newConfig;
      };
    }
  });

  // node_modules/axios/lib/adapters/xhr.js
  var isXHRAdapterSupported, xhr_default;
  var init_xhr = __esm({
    "node_modules/axios/lib/adapters/xhr.js"() {
      init_supra_shim();
      init_utils2();
      init_settle();
      init_transitional();
      init_AxiosError();
      init_CanceledError();
      init_parseProtocol();
      init_platform();
      init_AxiosHeaders();
      init_progressEventReducer();
      init_resolveConfig();
      isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
      xhr_default = isXHRAdapterSupported && function(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          const _config = resolveConfig_default(config);
          let requestData = _config.data;
          const requestHeaders = AxiosHeaders_default.from(_config.headers).normalize();
          let { responseType, onUploadProgress, onDownloadProgress } = _config;
          let onCanceled;
          let uploadThrottled, downloadThrottled;
          let flushUpload, flushDownload;
          function done() {
            flushUpload && flushUpload();
            flushDownload && flushDownload();
            _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
            _config.signal && _config.signal.removeEventListener("abort", onCanceled);
          }
          let request2 = new XMLHttpRequest();
          request2.open(_config.method.toUpperCase(), _config.url, true);
          request2.timeout = _config.timeout;
          function onloadend() {
            if (!request2) {
              return;
            }
            const responseHeaders = AxiosHeaders_default.from(
              "getAllResponseHeaders" in request2 && request2.getAllResponseHeaders()
            );
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
            const response = {
              data: responseData,
              status: request2.status,
              statusText: request2.statusText,
              headers: responseHeaders,
              config,
              request: request2
            };
            settle(function _resolve(value) {
              resolve(value);
              done();
            }, function _reject(err) {
              reject(err);
              done();
            }, response);
            request2 = null;
          }
          if ("onloadend" in request2) {
            request2.onloadend = onloadend;
          } else {
            request2.onreadystatechange = function handleLoad() {
              if (!request2 || request2.readyState !== 4) {
                return;
              }
              if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request2.onabort = function handleAbort() {
            if (!request2) {
              return;
            }
            reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request2));
            request2 = null;
          };
          request2.onerror = function handleError() {
            reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request2));
            request2 = null;
          };
          request2.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional2 = _config.transitional || transitional_default;
            if (_config.timeoutErrorMessage) {
              timeoutErrorMessage = _config.timeoutErrorMessage;
            }
            reject(new AxiosError_default(
              timeoutErrorMessage,
              transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
              config,
              request2
            ));
            request2 = null;
          };
          requestData === void 0 && requestHeaders.setContentType(null);
          if ("setRequestHeader" in request2) {
            utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
              request2.setRequestHeader(key, val);
            });
          }
          if (!utils_default.isUndefined(_config.withCredentials)) {
            request2.withCredentials = !!_config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request2.responseType = _config.responseType;
          }
          if (onDownloadProgress) {
            [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
            request2.addEventListener("progress", downloadThrottled);
          }
          if (onUploadProgress && request2.upload) {
            [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
            request2.upload.addEventListener("progress", uploadThrottled);
            request2.upload.addEventListener("loadend", flushUpload);
          }
          if (_config.cancelToken || _config.signal) {
            onCanceled = (cancel) => {
              if (!request2) {
                return;
              }
              reject(!cancel || cancel.type ? new CanceledError_default(null, config, request2) : cancel);
              request2.abort();
              request2 = null;
            };
            _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
            if (_config.signal) {
              _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
            }
          }
          const protocol = parseProtocol(_config.url);
          if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
            reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
            return;
          }
          request2.send(requestData || null);
        });
      };
    }
  });

  // node_modules/axios/lib/helpers/composeSignals.js
  var composeSignals, composeSignals_default;
  var init_composeSignals = __esm({
    "node_modules/axios/lib/helpers/composeSignals.js"() {
      init_supra_shim();
      init_CanceledError();
      init_AxiosError();
      composeSignals = (signals, timeout) => {
        let controller = new AbortController();
        let aborted;
        const onabort = function(cancel) {
          if (!aborted) {
            aborted = true;
            unsubscribe();
            const err = cancel instanceof Error ? cancel : this.reason;
            controller.abort(err instanceof AxiosError_default ? err : new CanceledError_default(err instanceof Error ? err.message : err));
          }
        };
        let timer = timeout && setTimeout(() => {
          onabort(new AxiosError_default(`timeout ${timeout} of ms exceeded`, AxiosError_default.ETIMEDOUT));
        }, timeout);
        const unsubscribe = () => {
          if (signals) {
            timer && clearTimeout(timer);
            timer = null;
            signals.forEach((signal2) => {
              signal2 && (signal2.removeEventListener ? signal2.removeEventListener("abort", onabort) : signal2.unsubscribe(onabort));
            });
            signals = null;
          }
        };
        signals.forEach((signal2) => signal2 && signal2.addEventListener && signal2.addEventListener("abort", onabort));
        const { signal } = controller;
        signal.unsubscribe = unsubscribe;
        return [signal, () => {
          timer && clearTimeout(timer);
          timer = null;
        }];
      };
      composeSignals_default = composeSignals;
    }
  });

  // node_modules/axios/lib/helpers/trackStream.js
  var streamChunk, readBytes, trackStream;
  var init_trackStream = __esm({
    "node_modules/axios/lib/helpers/trackStream.js"() {
      init_supra_shim();
      streamChunk = function* (chunk, chunkSize) {
        let len = chunk.byteLength;
        if (!chunkSize || len < chunkSize) {
          yield chunk;
          return;
        }
        let pos = 0;
        let end;
        while (pos < len) {
          end = pos + chunkSize;
          yield chunk.slice(pos, end);
          pos = end;
        }
      };
      readBytes = async function* (iterable, chunkSize, encode3) {
        for await (const chunk of iterable) {
          yield* streamChunk(ArrayBuffer.isView(chunk) ? chunk : await encode3(String(chunk)), chunkSize);
        }
      };
      trackStream = (stream, chunkSize, onProgress, onFinish, encode3) => {
        const iterator = readBytes(stream, chunkSize, encode3);
        let bytes2 = 0;
        let done;
        let _onFinish = (e) => {
          if (!done) {
            done = true;
            onFinish && onFinish(e);
          }
        };
        return new ReadableStream({
          async pull(controller) {
            try {
              const { done: done2, value } = await iterator.next();
              if (done2) {
                _onFinish();
                controller.close();
                return;
              }
              let len = value.byteLength;
              if (onProgress) {
                let loadedBytes = bytes2 += len;
                onProgress(loadedBytes);
              }
              controller.enqueue(new Uint8Array(value));
            } catch (err) {
              _onFinish(err);
              throw err;
            }
          },
          cancel(reason) {
            _onFinish(reason);
            return iterator.return();
          }
        }, {
          highWaterMark: 2
        });
      };
    }
  });

  // node_modules/axios/lib/adapters/fetch.js
  var isFetchSupported, isReadableStreamSupported, encodeText, test, supportsRequestStream, DEFAULT_CHUNK_SIZE, supportsResponseStream, resolvers, getBodyLength, resolveBodyLength, fetch_default;
  var init_fetch = __esm({
    "node_modules/axios/lib/adapters/fetch.js"() {
      init_supra_shim();
      init_platform();
      init_utils2();
      init_AxiosError();
      init_composeSignals();
      init_trackStream();
      init_AxiosHeaders();
      init_progressEventReducer();
      init_resolveConfig();
      init_settle();
      isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
      isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
      encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
      test = (fn, ...args) => {
        try {
          return !!fn(...args);
        } catch (e) {
          return false;
        }
      };
      supportsRequestStream = isReadableStreamSupported && test(() => {
        let duplexAccessed = false;
        const hasContentType = new Request(platform_default.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            duplexAccessed = true;
            return "half";
          }
        }).headers.has("Content-Type");
        return duplexAccessed && !hasContentType;
      });
      DEFAULT_CHUNK_SIZE = 64 * 1024;
      supportsResponseStream = isReadableStreamSupported && test(() => utils_default.isReadableStream(new Response("").body));
      resolvers = {
        stream: supportsResponseStream && ((res) => res.body)
      };
      isFetchSupported && ((res) => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
          !resolvers[type] && (resolvers[type] = utils_default.isFunction(res[type]) ? (res2) => res2[type]() : (_2, config) => {
            throw new AxiosError_default(`Response type '${type}' is not supported`, AxiosError_default.ERR_NOT_SUPPORT, config);
          });
        });
      })(new Response());
      getBodyLength = async (body) => {
        if (body == null) {
          return 0;
        }
        if (utils_default.isBlob(body)) {
          return body.size;
        }
        if (utils_default.isSpecCompliantForm(body)) {
          return (await new Request(body).arrayBuffer()).byteLength;
        }
        if (utils_default.isArrayBufferView(body) || utils_default.isArrayBuffer(body)) {
          return body.byteLength;
        }
        if (utils_default.isURLSearchParams(body)) {
          body = body + "";
        }
        if (utils_default.isString(body)) {
          return (await encodeText(body)).byteLength;
        }
      };
      resolveBodyLength = async (headers, body) => {
        const length = utils_default.toFiniteNumber(headers.getContentLength());
        return length == null ? getBodyLength(body) : length;
      };
      fetch_default = isFetchSupported && (async (config) => {
        let {
          url,
          method: method2,
          data,
          signal,
          cancelToken,
          timeout,
          onDownloadProgress,
          onUploadProgress,
          responseType,
          headers,
          withCredentials = "same-origin",
          fetchOptions
        } = resolveConfig_default(config);
        responseType = responseType ? (responseType + "").toLowerCase() : "text";
        let [composedSignal, stopTimeout] = signal || cancelToken || timeout ? composeSignals_default([signal, cancelToken], timeout) : [];
        let finished, request2;
        const onFinish = () => {
          !finished && setTimeout(() => {
            composedSignal && composedSignal.unsubscribe();
          });
          finished = true;
        };
        let requestContentLength;
        try {
          if (onUploadProgress && supportsRequestStream && method2 !== "get" && method2 !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
            let _request = new Request(url, {
              method: "POST",
              body: data,
              duplex: "half"
            });
            let contentTypeHeader;
            if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
              headers.setContentType(contentTypeHeader);
            }
            if (_request.body) {
              const [onProgress, flush] = progressEventDecorator(
                requestContentLength,
                progressEventReducer(asyncDecorator(onUploadProgress))
              );
              data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush, encodeText);
            }
          }
          if (!utils_default.isString(withCredentials)) {
            withCredentials = withCredentials ? "include" : "omit";
          }
          request2 = new Request(url, {
            ...fetchOptions,
            signal: composedSignal,
            method: method2.toUpperCase(),
            headers: headers.normalize().toJSON(),
            body: data,
            duplex: "half",
            credentials: withCredentials
          });
          let response = await fetch(request2);
          const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
          if (supportsResponseStream && (onDownloadProgress || isStreamResponse)) {
            const options = {};
            ["status", "statusText", "headers"].forEach((prop) => {
              options[prop] = response[prop];
            });
            const responseContentLength = utils_default.toFiniteNumber(response.headers.get("content-length"));
            const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
              responseContentLength,
              progressEventReducer(asyncDecorator(onDownloadProgress), true)
            ) || [];
            response = new Response(
              trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
                flush && flush();
                isStreamResponse && onFinish();
              }, encodeText),
              options
            );
          }
          responseType = responseType || "text";
          let responseData = await resolvers[utils_default.findKey(resolvers, responseType) || "text"](response, config);
          !isStreamResponse && onFinish();
          stopTimeout && stopTimeout();
          return await new Promise((resolve, reject) => {
            settle(resolve, reject, {
              data: responseData,
              headers: AxiosHeaders_default.from(response.headers),
              status: response.status,
              statusText: response.statusText,
              config,
              request: request2
            });
          });
        } catch (err) {
          onFinish();
          if (err && err.name === "TypeError" && /fetch/i.test(err.message)) {
            throw Object.assign(
              new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request2),
              {
                cause: err.cause || err
              }
            );
          }
          throw AxiosError_default.from(err, err && err.code, config, request2);
        }
      });
    }
  });

  // node_modules/axios/lib/adapters/adapters.js
  var knownAdapters, renderReason, isResolvedHandle, adapters_default;
  var init_adapters = __esm({
    "node_modules/axios/lib/adapters/adapters.js"() {
      init_supra_shim();
      init_utils2();
      init_null();
      init_xhr();
      init_fetch();
      init_AxiosError();
      knownAdapters = {
        http: null_default,
        xhr: xhr_default,
        fetch: fetch_default
      };
      utils_default.forEach(knownAdapters, (fn, value) => {
        if (fn) {
          try {
            Object.defineProperty(fn, "name", { value });
          } catch (e) {
          }
          Object.defineProperty(fn, "adapterName", { value });
        }
      });
      renderReason = (reason) => `- ${reason}`;
      isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
      adapters_default = {
        getAdapter: (adapters) => {
          adapters = utils_default.isArray(adapters) ? adapters : [adapters];
          const { length } = adapters;
          let nameOrAdapter;
          let adapter;
          const rejectedReasons = {};
          for (let i = 0; i < length; i++) {
            nameOrAdapter = adapters[i];
            let id;
            adapter = nameOrAdapter;
            if (!isResolvedHandle(nameOrAdapter)) {
              adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
              if (adapter === void 0) {
                throw new AxiosError_default(`Unknown adapter '${id}'`);
              }
            }
            if (adapter) {
              break;
            }
            rejectedReasons[id || "#" + i] = adapter;
          }
          if (!adapter) {
            const reasons = Object.entries(rejectedReasons).map(
              ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
            );
            let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
            throw new AxiosError_default(
              `There is no suitable adapter to dispatch the request ` + s,
              "ERR_NOT_SUPPORT"
            );
          }
          return adapter;
        },
        adapters: knownAdapters
      };
    }
  });

  // node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError_default(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders_default.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }
  var init_dispatchRequest = __esm({
    "node_modules/axios/lib/core/dispatchRequest.js"() {
      "use strict";
      init_supra_shim();
      init_transformData();
      init_isCancel();
      init_defaults();
      init_CanceledError();
      init_AxiosHeaders();
      init_adapters();
    }
  });

  // node_modules/axios/lib/env/data.js
  var VERSION;
  var init_data = __esm({
    "node_modules/axios/lib/env/data.js"() {
      init_supra_shim();
      VERSION = "1.7.4";
    }
  });

  // node_modules/axios/lib/helpers/validator.js
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator = schema[opt];
      if (validator) {
        const value = options[opt];
        const result = value === void 0 || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
      }
    }
  }
  var validators, deprecatedWarnings, validator_default;
  var init_validator = __esm({
    "node_modules/axios/lib/helpers/validator.js"() {
      "use strict";
      init_supra_shim();
      init_data();
      init_AxiosError();
      validators = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
        validators[type] = function validator(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      });
      deprecatedWarnings = {};
      validators.transitional = function transitional(validator, version3, message) {
        function formatMessage(opt, desc) {
          return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return (value, opt, opts) => {
          if (validator === false) {
            throw new AxiosError_default(
              formatMessage(opt, " has been removed" + (version3 ? " in " + version3 : "")),
              AxiosError_default.ERR_DEPRECATED
            );
          }
          if (version3 && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(
              formatMessage(
                opt,
                " has been deprecated since v" + version3 + " and will be removed in the near future"
              )
            );
          }
          return validator ? validator(value, opt, opts) : true;
        };
      };
      validator_default = {
        assertOptions,
        validators
      };
    }
  });

  // node_modules/axios/lib/core/Axios.js
  var validators2, Axios, Axios_default;
  var init_Axios = __esm({
    "node_modules/axios/lib/core/Axios.js"() {
      "use strict";
      init_supra_shim();
      init_utils2();
      init_buildURL();
      init_InterceptorManager();
      init_dispatchRequest();
      init_mergeConfig();
      init_buildFullPath();
      init_validator();
      init_AxiosHeaders();
      validators2 = validator_default.validators;
      Axios = class {
        constructor(instanceConfig) {
          this.defaults = instanceConfig;
          this.interceptors = {
            request: new InterceptorManager_default(),
            response: new InterceptorManager_default()
          };
        }
        /**
         * Dispatch a request
         *
         * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
         * @param {?Object} config
         *
         * @returns {Promise} The Promise to be fulfilled
         */
        async request(configOrUrl, config) {
          try {
            return await this._request(configOrUrl, config);
          } catch (err) {
            if (err instanceof Error) {
              let dummy;
              Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();
              const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
              try {
                if (!err.stack) {
                  err.stack = stack;
                } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
                  err.stack += "\n" + stack;
                }
              } catch (e) {
              }
            }
            throw err;
          }
        }
        _request(configOrUrl, config) {
          if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
          } else {
            config = configOrUrl || {};
          }
          config = mergeConfig(this.defaults, config);
          const { transitional: transitional2, paramsSerializer, headers } = config;
          if (transitional2 !== void 0) {
            validator_default.assertOptions(transitional2, {
              silentJSONParsing: validators2.transitional(validators2.boolean),
              forcedJSONParsing: validators2.transitional(validators2.boolean),
              clarifyTimeoutError: validators2.transitional(validators2.boolean)
            }, false);
          }
          if (paramsSerializer != null) {
            if (utils_default.isFunction(paramsSerializer)) {
              config.paramsSerializer = {
                serialize: paramsSerializer
              };
            } else {
              validator_default.assertOptions(paramsSerializer, {
                encode: validators2.function,
                serialize: validators2.function
              }, true);
            }
          }
          config.method = (config.method || this.defaults.method || "get").toLowerCase();
          let contextHeaders = headers && utils_default.merge(
            headers.common,
            headers[config.method]
          );
          headers && utils_default.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            (method2) => {
              delete headers[method2];
            }
          );
          config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
          const requestInterceptorChain = [];
          let synchronousRequestInterceptors = true;
          this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
              return;
            }
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
          });
          const responseInterceptorChain = [];
          this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
          });
          let promise;
          let i = 0;
          let len;
          if (!synchronousRequestInterceptors) {
            const chain = [dispatchRequest.bind(this), void 0];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while (i < len) {
              promise = promise.then(chain[i++], chain[i++]);
            }
            return promise;
          }
          len = requestInterceptorChain.length;
          let newConfig = config;
          i = 0;
          while (i < len) {
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
              newConfig = onFulfilled(newConfig);
            } catch (error) {
              onRejected.call(this, error);
              break;
            }
          }
          try {
            promise = dispatchRequest.call(this, newConfig);
          } catch (error) {
            return Promise.reject(error);
          }
          i = 0;
          len = responseInterceptorChain.length;
          while (i < len) {
            promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
          }
          return promise;
        }
        getUri(config) {
          config = mergeConfig(this.defaults, config);
          const fullPath = buildFullPath(config.baseURL, config.url);
          return buildURL(fullPath, config.params, config.paramsSerializer);
        }
      };
      utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method2) {
        Axios.prototype[method2] = function(url, config) {
          return this.request(mergeConfig(config || {}, {
            method: method2,
            url,
            data: (config || {}).data
          }));
        };
      });
      utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method2) {
        function generateHTTPMethod(isForm) {
          return function httpMethod(url, data, config) {
            return this.request(mergeConfig(config || {}, {
              method: method2,
              headers: isForm ? {
                "Content-Type": "multipart/form-data"
              } : {},
              url,
              data
            }));
          };
        }
        Axios.prototype[method2] = generateHTTPMethod();
        Axios.prototype[method2 + "Form"] = generateHTTPMethod(true);
      });
      Axios_default = Axios;
    }
  });

  // node_modules/axios/lib/cancel/CancelToken.js
  var CancelToken, CancelToken_default;
  var init_CancelToken = __esm({
    "node_modules/axios/lib/cancel/CancelToken.js"() {
      "use strict";
      init_supra_shim();
      init_CanceledError();
      CancelToken = class _CancelToken {
        constructor(executor) {
          if (typeof executor !== "function") {
            throw new TypeError("executor must be a function.");
          }
          let resolvePromise;
          this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
          });
          const token = this;
          this.promise.then((cancel) => {
            if (!token._listeners) return;
            let i = token._listeners.length;
            while (i-- > 0) {
              token._listeners[i](cancel);
            }
            token._listeners = null;
          });
          this.promise.then = (onfulfilled) => {
            let _resolve;
            const promise = new Promise((resolve) => {
              token.subscribe(resolve);
              _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
              token.unsubscribe(_resolve);
            };
            return promise;
          };
          executor(function cancel(message, config, request2) {
            if (token.reason) {
              return;
            }
            token.reason = new CanceledError_default(message, config, request2);
            resolvePromise(token.reason);
          });
        }
        /**
         * Throws a `CanceledError` if cancellation has been requested.
         */
        throwIfRequested() {
          if (this.reason) {
            throw this.reason;
          }
        }
        /**
         * Subscribe to the cancel signal
         */
        subscribe(listener) {
          if (this.reason) {
            listener(this.reason);
            return;
          }
          if (this._listeners) {
            this._listeners.push(listener);
          } else {
            this._listeners = [listener];
          }
        }
        /**
         * Unsubscribe from the cancel signal
         */
        unsubscribe(listener) {
          if (!this._listeners) {
            return;
          }
          const index = this._listeners.indexOf(listener);
          if (index !== -1) {
            this._listeners.splice(index, 1);
          }
        }
        /**
         * Returns an object that contains a new `CancelToken` and a function that, when called,
         * cancels the `CancelToken`.
         */
        static source() {
          let cancel;
          const token = new _CancelToken(function executor(c) {
            cancel = c;
          });
          return {
            token,
            cancel
          };
        }
      };
      CancelToken_default = CancelToken;
    }
  });

  // node_modules/axios/lib/helpers/spread.js
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }
  var init_spread = __esm({
    "node_modules/axios/lib/helpers/spread.js"() {
      "use strict";
      init_supra_shim();
    }
  });

  // node_modules/axios/lib/helpers/isAxiosError.js
  function isAxiosError(payload) {
    return utils_default.isObject(payload) && payload.isAxiosError === true;
  }
  var init_isAxiosError = __esm({
    "node_modules/axios/lib/helpers/isAxiosError.js"() {
      "use strict";
      init_supra_shim();
      init_utils2();
    }
  });

  // node_modules/axios/lib/helpers/HttpStatusCode.js
  var HttpStatusCode, HttpStatusCode_default;
  var init_HttpStatusCode = __esm({
    "node_modules/axios/lib/helpers/HttpStatusCode.js"() {
      init_supra_shim();
      HttpStatusCode = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
      };
      Object.entries(HttpStatusCode).forEach(([key, value]) => {
        HttpStatusCode[value] = key;
      });
      HttpStatusCode_default = HttpStatusCode;
    }
  });

  // node_modules/axios/lib/axios.js
  function createInstance(defaultConfig) {
    const context = new Axios_default(defaultConfig);
    const instance = bind(Axios_default.prototype.request, context);
    utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
    utils_default.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios, axios_default;
  var init_axios = __esm({
    "node_modules/axios/lib/axios.js"() {
      "use strict";
      init_supra_shim();
      init_utils2();
      init_bind();
      init_Axios();
      init_mergeConfig();
      init_defaults();
      init_formDataToJSON();
      init_CanceledError();
      init_CancelToken();
      init_isCancel();
      init_data();
      init_toFormData();
      init_AxiosError();
      init_spread();
      init_isAxiosError();
      init_AxiosHeaders();
      init_adapters();
      init_HttpStatusCode();
      axios = createInstance(defaults_default);
      axios.Axios = Axios_default;
      axios.CanceledError = CanceledError_default;
      axios.CancelToken = CancelToken_default;
      axios.isCancel = isCancel;
      axios.VERSION = VERSION;
      axios.toFormData = toFormData_default;
      axios.AxiosError = AxiosError_default;
      axios.Cancel = axios.CanceledError;
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = spread;
      axios.isAxiosError = isAxiosError;
      axios.mergeConfig = mergeConfig;
      axios.AxiosHeaders = AxiosHeaders_default;
      axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
      axios.getAdapter = adapters_default.getAdapter;
      axios.HttpStatusCode = HttpStatusCode_default;
      axios.default = axios;
      axios_default = axios;
    }
  });

  // node_modules/axios/index.js
  var Axios2, AxiosError2, CanceledError2, isCancel2, CancelToken2, VERSION2, all2, Cancel, isAxiosError2, spread2, toFormData2, AxiosHeaders2, HttpStatusCode2, formToJSON, getAdapter, mergeConfig2;
  var init_axios2 = __esm({
    "node_modules/axios/index.js"() {
      init_supra_shim();
      init_axios();
      ({
        Axios: Axios2,
        AxiosError: AxiosError2,
        CanceledError: CanceledError2,
        isCancel: isCancel2,
        CancelToken: CancelToken2,
        VERSION: VERSION2,
        all: all2,
        Cancel,
        isAxiosError: isAxiosError2,
        spread: spread2,
        toFormData: toFormData2,
        AxiosHeaders: AxiosHeaders2,
        HttpStatusCode: HttpStatusCode2,
        formToJSON,
        getAdapter,
        mergeConfig: mergeConfig2
      } = axios_default);
    }
  });

  // node_modules/@aptos-labs/aptos-client/dist/browser/index.browser.mjs
  async function aptosClient(options) {
    var _a;
    const { params, method: method2, url, headers, body, overrides } = options;
    const requestConfig = {
      headers,
      method: method2,
      url,
      params,
      data: body,
      withCredentials: (_a = overrides == null ? void 0 : overrides.WITH_CREDENTIALS) != null ? _a : true
    };
    try {
      const response = await axios_default(requestConfig);
      return {
        status: response.status,
        statusText: response.statusText,
        data: response.data,
        headers: response.headers,
        config: response.config
      };
    } catch (error) {
      const axiosError = error;
      if (axiosError.response) {
        return axiosError.response;
      }
      throw error;
    }
  }
  var init_index_browser = __esm({
    "node_modules/@aptos-labs/aptos-client/dist/browser/index.browser.mjs"() {
      init_supra_shim();
      init_axios2();
    }
  });

  // node_modules/eventemitter3/index.js
  var require_eventemitter3 = __commonJS({
    "node_modules/eventemitter3/index.js"(exports, module) {
      "use strict";
      init_supra_shim();
      var has = Object.prototype.hasOwnProperty;
      var prefix = "~";
      function Events() {
      }
      if (Object.create) {
        Events.prototype = /* @__PURE__ */ Object.create(null);
        if (!new Events().__proto__) prefix = false;
      }
      function EE(fn, context, once) {
        this.fn = fn;
        this.context = context;
        this.once = once || false;
      }
      function addListener(emitter, event, fn, context, once) {
        if (typeof fn !== "function") {
          throw new TypeError("The listener must be a function");
        }
        var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
        if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
        else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
        else emitter._events[evt] = [emitter._events[evt], listener];
        return emitter;
      }
      function clearEvent(emitter, evt) {
        if (--emitter._eventsCount === 0) emitter._events = new Events();
        else delete emitter._events[evt];
      }
      function EventEmitter2() {
        this._events = new Events();
        this._eventsCount = 0;
      }
      EventEmitter2.prototype.eventNames = function eventNames() {
        var names = [], events, name;
        if (this._eventsCount === 0) return names;
        for (name in events = this._events) {
          if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
        }
        if (Object.getOwnPropertySymbols) {
          return names.concat(Object.getOwnPropertySymbols(events));
        }
        return names;
      };
      EventEmitter2.prototype.listeners = function listeners(event) {
        var evt = prefix ? prefix + event : event, handlers = this._events[evt];
        if (!handlers) return [];
        if (handlers.fn) return [handlers.fn];
        for (var i = 0, l = handlers.length, ee2 = new Array(l); i < l; i++) {
          ee2[i] = handlers[i].fn;
        }
        return ee2;
      };
      EventEmitter2.prototype.listenerCount = function listenerCount(event) {
        var evt = prefix ? prefix + event : event, listeners = this._events[evt];
        if (!listeners) return 0;
        if (listeners.fn) return 1;
        return listeners.length;
      };
      EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return false;
        var listeners = this._events[evt], len = arguments.length, args, i;
        if (listeners.fn) {
          if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
          switch (len) {
            case 1:
              return listeners.fn.call(listeners.context), true;
            case 2:
              return listeners.fn.call(listeners.context, a1), true;
            case 3:
              return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
              return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
          }
          for (i = 1, args = new Array(len - 1); i < len; i++) {
            args[i - 1] = arguments[i];
          }
          listeners.fn.apply(listeners.context, args);
        } else {
          var length = listeners.length, j2;
          for (i = 0; i < length; i++) {
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
            switch (len) {
              case 1:
                listeners[i].fn.call(listeners[i].context);
                break;
              case 2:
                listeners[i].fn.call(listeners[i].context, a1);
                break;
              case 3:
                listeners[i].fn.call(listeners[i].context, a1, a2);
                break;
              case 4:
                listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                break;
              default:
                if (!args) for (j2 = 1, args = new Array(len - 1); j2 < len; j2++) {
                  args[j2 - 1] = arguments[j2];
                }
                listeners[i].fn.apply(listeners[i].context, args);
            }
          }
        }
        return true;
      };
      EventEmitter2.prototype.on = function on2(event, fn, context) {
        return addListener(this, event, fn, context, false);
      };
      EventEmitter2.prototype.once = function once(event, fn, context) {
        return addListener(this, event, fn, context, true);
      };
      EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return this;
        if (!fn) {
          clearEvent(this, evt);
          return this;
        }
        var listeners = this._events[evt];
        if (listeners.fn) {
          if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
          }
        } else {
          for (var i = 0, events = [], length = listeners.length; i < length; i++) {
            if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
              events.push(listeners[i]);
            }
          }
          if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
          else clearEvent(this, evt);
        }
        return this;
      };
      EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
        var evt;
        if (event) {
          evt = prefix ? prefix + event : event;
          if (this._events[evt]) clearEvent(this, evt);
        } else {
          this._events = new Events();
          this._eventsCount = 0;
        }
        return this;
      };
      EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
      EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
      EventEmitter2.prefixed = prefix;
      EventEmitter2.EventEmitter = EventEmitter2;
      if ("undefined" !== typeof module) {
        module.exports = EventEmitter2;
      }
    }
  });

  // node_modules/eventemitter3/index.mjs
  var import_index;
  var init_eventemitter3 = __esm({
    "node_modules/eventemitter3/index.mjs"() {
      init_supra_shim();
      import_index = __toESM(require_eventemitter3(), 1);
    }
  });

  // node_modules/aptos/dist/index.mjs
  async function sleep(timeMs) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeMs);
    });
  }
  function fixNodeUrl(nodeUrl) {
    let out = `${nodeUrl}`;
    if (out.endsWith("/")) {
      out = out.substring(0, out.length - 1);
    }
    if (!out.endsWith(DEFAULT_VERSION_PATH_BASE)) {
      out = `${out}${DEFAULT_VERSION_PATH_BASE}`;
    }
    return out;
  }
  function Memoize(args) {
    let hashFunction;
    let ttlMs;
    let tags;
    if (typeof args === "object") {
      hashFunction = args.hashFunction;
      ttlMs = args.ttlMs;
      tags = args.tags;
    } else {
      hashFunction = args;
    }
    return (target, propertyKey, descriptor) => {
      if (descriptor.value != null) {
        descriptor.value = getNewFunction(descriptor.value, hashFunction, ttlMs, tags);
      } else if (descriptor.get != null) {
        descriptor.get = getNewFunction(descriptor.get, hashFunction, ttlMs, tags);
      } else {
        throw new Error("Only put a Memoize() decorator on a method or get accessor.");
      }
    };
  }
  function MemoizeExpiring(ttlMs, hashFunction) {
    return Memoize({
      ttlMs,
      hashFunction
    });
  }
  function clear(tags) {
    const cleared = /* @__PURE__ */ new Set();
    for (const tag of tags) {
      const maps = clearCacheTagsMap.get(tag);
      if (maps) {
        for (const mp of maps) {
          if (!cleared.has(mp)) {
            mp.clear();
            cleared.add(mp);
          }
        }
      }
    }
    return cleared.size;
  }
  function getNewFunction(originalMethod, hashFunction, ttlMs = 0, tags) {
    const propMapName = Symbol("__memoized_map__");
    return function(...args) {
      let returnedValue;
      const that = this;
      if (!that.hasOwnProperty(propMapName)) {
        Object.defineProperty(that, propMapName, {
          configurable: false,
          enumerable: false,
          writable: false,
          value: /* @__PURE__ */ new Map()
        });
      }
      const myMap = that[propMapName];
      if (Array.isArray(tags)) {
        for (const tag of tags) {
          if (clearCacheTagsMap.has(tag)) {
            clearCacheTagsMap.get(tag).push(myMap);
          } else {
            clearCacheTagsMap.set(tag, [myMap]);
          }
        }
      }
      if (hashFunction || args.length > 0 || ttlMs > 0) {
        let hashKey;
        if (hashFunction === true) {
          hashKey = args.map((a) => a.toString()).join("!");
        } else if (hashFunction) {
          hashKey = hashFunction.apply(that, args);
        } else {
          hashKey = args[0];
        }
        const timestampKey = `${hashKey}__timestamp`;
        let isExpired = false;
        if (ttlMs > 0) {
          if (!myMap.has(timestampKey)) {
            isExpired = true;
          } else {
            const timestamp = myMap.get(timestampKey);
            isExpired = Date.now() - timestamp > ttlMs;
          }
        }
        if (myMap.has(hashKey) && !isExpired) {
          returnedValue = myMap.get(hashKey);
        } else {
          returnedValue = originalMethod.apply(that, args);
          myMap.set(hashKey, returnedValue);
          if (ttlMs > 0) {
            myMap.set(timestampKey, Date.now());
          }
        }
      } else {
        const hashKey = that;
        if (myMap.has(hashKey)) {
          returnedValue = myMap.get(hashKey);
        } else {
          returnedValue = originalMethod.apply(that, args);
          myMap.set(hashKey, returnedValue);
        }
      }
      return returnedValue;
    };
  }
  async function request(url, method2, body, contentType, params, overrides) {
    const headers = {
      ...overrides == null ? void 0 : overrides.HEADERS,
      "x-aptos-client": `aptos-ts-sdk/${VERSION3}`,
      "content-type": contentType != null ? contentType : "application/json"
    };
    if (overrides == null ? void 0 : overrides.TOKEN) {
      headers.Authorization = `Bearer ${overrides == null ? void 0 : overrides.TOKEN}`;
    }
    const response = await aptosClient({ url, method: method2, body, params, headers, overrides });
    return response;
  }
  async function aptosRequest(options) {
    const { url, endpoint, method: method2, body, contentType, params, overrides } = options;
    const fullEndpoint = `${url}/${endpoint != null ? endpoint : ""}`;
    const response = await request(fullEndpoint, method2, body, contentType, params, overrides);
    const result = {
      status: response.status,
      statusText: response.statusText,
      data: response.data,
      headers: response.headers,
      config: response.config,
      url: fullEndpoint
    };
    if (result.status >= 200 && result.status < 300) {
      return result;
    }
    const errorMessage = errors[result.status];
    throw new AptosApiError(options, result, errorMessage != null ? errorMessage : "Generic Error");
  }
  async function get(options) {
    const response = await aptosRequest({ ...options, method: "GET" });
    return response;
  }
  async function post(options) {
    const response = await aptosRequest({ ...options, method: "POST" });
    return response;
  }
  async function paginateWithCursor(options) {
    const out = [];
    let cursor;
    const requestParams = options.params;
    while (true) {
      requestParams.start = cursor;
      const response = await get({
        url: options.url,
        endpoint: options.endpoint,
        params: requestParams,
        originMethod: options.originMethod,
        overrides: options.overrides
      });
      cursor = response.headers["x-aptos-cursor"];
      delete response.headers;
      out.push(...response.data);
      if (cursor === null || cursor === void 0) {
        break;
      }
    }
    return out;
  }
  function checkNumberRange(minValue, maxValue, message) {
    return (target, propertyKey, descriptor) => {
      const childFunction = descriptor.value;
      descriptor.value = function deco(value) {
        const valueBigInt = BigInt(value.toString());
        if (valueBigInt > BigInt(maxValue.toString()) || valueBigInt < BigInt(minValue.toString())) {
          throw new Error(message || "Value is out of range");
        }
        childFunction.apply(this, [value]);
      };
      return descriptor;
    };
  }
  function serializeVector(value, serializer) {
    serializer.serializeU32AsUleb128(value.length);
    value.forEach((item) => {
      item.serialize(serializer);
    });
  }
  function serializeVectorWithFunc(value, func) {
    const serializer = new Serializer();
    serializer.serializeU32AsUleb128(value.length);
    const f = serializer[func];
    value.forEach((item) => {
      f.call(serializer, item);
    });
    return serializer.getBytes();
  }
  function deserializeVector(deserializer, cls) {
    const length = deserializer.deserializeUleb128AsU32();
    const list = [];
    for (let i = 0; i < length; i += 1) {
      list.push(cls.deserialize(deserializer));
    }
    return list;
  }
  function bcsToBytes(value) {
    const serializer = new Serializer();
    value.serialize(serializer);
    return serializer.getBytes();
  }
  function bcsSerializeUint64(value) {
    const serializer = new Serializer();
    serializer.serializeU64(value);
    return serializer.getBytes();
  }
  function bcsSerializeU8(value) {
    const serializer = new Serializer();
    serializer.serializeU8(value);
    return serializer.getBytes();
  }
  function bcsSerializeU16(value) {
    const serializer = new Serializer();
    serializer.serializeU16(value);
    return serializer.getBytes();
  }
  function bcsSerializeU32(value) {
    const serializer = new Serializer();
    serializer.serializeU32(value);
    return serializer.getBytes();
  }
  function bcsSerializeU128(value) {
    const serializer = new Serializer();
    serializer.serializeU128(value);
    return serializer.getBytes();
  }
  function bcsSerializeU256(value) {
    const serializer = new Serializer();
    serializer.serializeU256(value);
    return serializer.getBytes();
  }
  function bcsSerializeBool(value) {
    const serializer = new Serializer();
    serializer.serializeBool(value);
    return serializer.getBytes();
  }
  function bcsSerializeStr(value) {
    const serializer = new Serializer();
    serializer.serializeStr(value);
    return serializer.getBytes();
  }
  function bcsSerializeBytes(value) {
    const serializer = new Serializer();
    serializer.serializeBytes(value);
    return serializer.getBytes();
  }
  function bcsSerializeFixedBytes(value) {
    const serializer = new Serializer();
    serializer.serializeFixedBytes(value);
    return serializer.getBytes();
  }
  function optionStructTag(typeArg) {
    return new StructTag(AccountAddress.fromHex("0x1"), new Identifier("option"), new Identifier("Option"), [typeArg]);
  }
  function objectStructTag(typeArg) {
    return new StructTag(AccountAddress.fromHex("0x1"), new Identifier("object"), new Identifier("Object"), [typeArg]);
  }
  function bail(message) {
    throw new TypeTagParserError(message);
  }
  function isWhiteSpace(c) {
    if (c.match(/\s/)) {
      return true;
    }
    return false;
  }
  function isValidAlphabetic(c) {
    if (c.match(/[_A-Za-z0-9]/g)) {
      return true;
    }
    return false;
  }
  function isGeneric(c) {
    if (c.match(/T\d+/g)) {
      return true;
    }
    return false;
  }
  function nextToken(tagStr, pos) {
    const c = tagStr[pos];
    if (c === ":") {
      if (tagStr.slice(pos, pos + 2) === "::") {
        return [["COLON", "::"], 2];
      }
      bail("Unrecognized token.");
    } else if (c === "<") {
      return [["LT", "<"], 1];
    } else if (c === ">") {
      return [["GT", ">"], 1];
    } else if (c === ",") {
      return [["COMMA", ","], 1];
    } else if (isWhiteSpace(c)) {
      let res = "";
      for (let i = pos; i < tagStr.length; i += 1) {
        const char = tagStr[i];
        if (isWhiteSpace(char)) {
          res = `${res}${char}`;
        } else {
          break;
        }
      }
      return [["SPACE", res], res.length];
    } else if (isValidAlphabetic(c)) {
      let res = "";
      for (let i = pos; i < tagStr.length; i += 1) {
        const char = tagStr[i];
        if (isValidAlphabetic(char)) {
          res = `${res}${char}`;
        } else {
          break;
        }
      }
      if (isGeneric(res)) {
        return [["GENERIC", res], res.length];
      }
      return [["IDENT", res], res.length];
    }
    throw new Error("Unrecognized token.");
  }
  function tokenize(tagStr) {
    let pos = 0;
    const tokens = [];
    while (pos < tagStr.length) {
      const [token, size] = nextToken(tagStr, pos);
      if (token[0] !== "SPACE") {
        tokens.push(token);
      }
      pos += size;
    }
    return tokens;
  }
  function assertType(val, types, message) {
    if (!(types == null ? void 0 : types.includes(typeof val))) {
      throw new Error(
        message || `Invalid arg: ${val} type should be ${types instanceof Array ? types.join(" or ") : types}`
      );
    }
  }
  function ensureBoolean(val) {
    assertType(val, ["boolean", "string"]);
    if (typeof val === "boolean") {
      return val;
    }
    if (val === "true") {
      return true;
    }
    if (val === "false") {
      return false;
    }
    throw new Error("Invalid boolean string.");
  }
  function ensureNumber(val) {
    assertType(val, ["number", "string"]);
    if (typeof val === "number") {
      return val;
    }
    const res = Number.parseInt(val, 10);
    if (Number.isNaN(res)) {
      throw new Error("Invalid number string.");
    }
    return res;
  }
  function ensureBigInt(val) {
    assertType(val, ["number", "bigint", "string"]);
    return BigInt(val);
  }
  function serializeArg(argVal, argType, serializer) {
    serializeArgInner(argVal, argType, serializer, 0);
  }
  function serializeArgInner(argVal, argType, serializer, depth) {
    if (argType instanceof TypeTagBool) {
      serializer.serializeBool(ensureBoolean(argVal));
    } else if (argType instanceof TypeTagU8) {
      serializer.serializeU8(ensureNumber(argVal));
    } else if (argType instanceof TypeTagU16) {
      serializer.serializeU16(ensureNumber(argVal));
    } else if (argType instanceof TypeTagU32) {
      serializer.serializeU32(ensureNumber(argVal));
    } else if (argType instanceof TypeTagU64) {
      serializer.serializeU64(ensureBigInt(argVal));
    } else if (argType instanceof TypeTagU128) {
      serializer.serializeU128(ensureBigInt(argVal));
    } else if (argType instanceof TypeTagU256) {
      serializer.serializeU256(ensureBigInt(argVal));
    } else if (argType instanceof TypeTagAddress) {
      serializeAddress(argVal, serializer);
    } else if (argType instanceof TypeTagVector) {
      serializeVector2(argVal, argType, serializer, depth);
    } else if (argType instanceof TypeTagStruct) {
      serializeStruct(argVal, argType, serializer, depth);
    } else {
      throw new Error("Unsupported arg type.");
    }
  }
  function serializeAddress(argVal, serializer) {
    let addr;
    if (typeof argVal === "string" || argVal instanceof HexString) {
      addr = AccountAddress.fromHex(argVal);
    } else if (argVal instanceof AccountAddress) {
      addr = argVal;
    } else {
      throw new Error("Invalid account address.");
    }
    addr.serialize(serializer);
  }
  function serializeVector2(argVal, argType, serializer, depth) {
    if (argType.value instanceof TypeTagU8) {
      if (argVal instanceof Uint8Array) {
        serializer.serializeBytes(argVal);
        return;
      }
      if (argVal instanceof HexString) {
        serializer.serializeBytes(argVal.toUint8Array());
        return;
      }
      if (typeof argVal === "string") {
        serializer.serializeStr(argVal);
        return;
      }
    }
    if (!Array.isArray(argVal)) {
      throw new Error("Invalid vector args.");
    }
    serializer.serializeU32AsUleb128(argVal.length);
    argVal.forEach((arg) => serializeArgInner(arg, argType.value, serializer, depth + 1));
  }
  function serializeStruct(argVal, argType, serializer, depth) {
    const { address, module_name: moduleName, name, type_args: typeArgs } = argType.value;
    const structType = `${HexString.fromUint8Array(address.address).toShortString()}::${moduleName.value}::${name.value}`;
    if (structType === "0x1::string::String") {
      assertType(argVal, ["string"]);
      serializer.serializeStr(argVal);
    } else if (structType === "0x1::object::Object") {
      serializeAddress(argVal, serializer);
    } else if (structType === "0x1::option::Option") {
      if (typeArgs.length !== 1) {
        throw new Error(`Option has the wrong number of type arguments ${typeArgs.length}`);
      }
      serializeOption(argVal, typeArgs[0], serializer, depth);
    } else {
      throw new Error("Unsupported struct type in function argument");
    }
  }
  function serializeOption(argVal, argType, serializer, depth) {
    if (argVal === void 0 || argVal === null) {
      serializer.serializeU32AsUleb128(0);
    } else {
      serializer.serializeU32AsUleb128(1);
      serializeArgInner(argVal, argType, serializer, depth + 1);
    }
  }
  function argToTransactionArgument(argVal, argType) {
    if (argType instanceof TypeTagBool) {
      return new TransactionArgumentBool(ensureBoolean(argVal));
    }
    if (argType instanceof TypeTagU8) {
      return new TransactionArgumentU8(ensureNumber(argVal));
    }
    if (argType instanceof TypeTagU16) {
      return new TransactionArgumentU16(ensureNumber(argVal));
    }
    if (argType instanceof TypeTagU32) {
      return new TransactionArgumentU32(ensureNumber(argVal));
    }
    if (argType instanceof TypeTagU64) {
      return new TransactionArgumentU64(ensureBigInt(argVal));
    }
    if (argType instanceof TypeTagU128) {
      return new TransactionArgumentU128(ensureBigInt(argVal));
    }
    if (argType instanceof TypeTagU256) {
      return new TransactionArgumentU256(ensureBigInt(argVal));
    }
    if (argType instanceof TypeTagAddress) {
      let addr;
      if (typeof argVal === "string" || argVal instanceof HexString) {
        addr = AccountAddress.fromHex(argVal);
      } else if (argVal instanceof AccountAddress) {
        addr = argVal;
      } else {
        throw new Error("Invalid account address.");
      }
      return new TransactionArgumentAddress(addr);
    }
    if (argType instanceof TypeTagVector && argType.value instanceof TypeTagU8) {
      if (!(argVal instanceof Uint8Array)) {
        throw new Error(`${argVal} should be an instance of Uint8Array`);
      }
      return new TransactionArgumentU8Vector(argVal);
    }
    throw new Error("Unknown type for TransactionArgument.");
  }
  function parseApiError(target, propertyKey, descriptor) {
    const childFunction = descriptor.value;
    descriptor.value = async function wrapper(...args) {
      var _a, _b;
      try {
        const res = await childFunction.apply(this, [...args]);
        return res;
      } catch (e) {
        if (e instanceof AptosApiError) {
          throw new ApiError(
            e.status,
            JSON.stringify({ message: e.message, ...e.data }),
            (_a = e.data) == null ? void 0 : _a.error_code,
            (_b = e.data) == null ? void 0 : _b.vm_error_code
          );
        }
        throw e;
      }
    };
    return descriptor;
  }
  function applyMixin(targetClass, baseClass, baseClassProp) {
    Object.getOwnPropertyNames(baseClass.prototype).forEach((propertyName) => {
      const propertyDescriptor = Object.getOwnPropertyDescriptor(baseClass.prototype, propertyName);
      if (!propertyDescriptor)
        return;
      propertyDescriptor.value = function(...args) {
        return this[baseClassProp][propertyName](...args);
      };
      Object.defineProperty(targetClass.prototype, propertyName, propertyDescriptor);
    });
    Object.getOwnPropertyNames(baseClass).forEach((propertyName) => {
      const propertyDescriptor = Object.getOwnPropertyDescriptor(baseClass, propertyName);
      if (!propertyDescriptor)
        return;
      propertyDescriptor.value = function(...args) {
        return this[baseClassProp][propertyName](...args);
      };
      if (targetClass.hasOwnProperty.call(targetClass, propertyName)) {
        return;
      }
      Object.defineProperty(targetClass, propertyName, propertyDescriptor);
    });
  }
  function isCustomEndpoints(network) {
    return network.fullnodeUrl !== void 0 && typeof network.fullnodeUrl === "string";
  }
  function getPropertyType(typ) {
    let typeTag;
    if (typ === "string" || typ === "String") {
      typeTag = new TypeTagStruct(stringStructTag);
    } else {
      typeTag = new TypeTagParser(typ).parseTypeTag();
    }
    return typeTag;
  }
  function deserializePropertyMap(rawPropertyMap) {
    const entries = rawPropertyMap.map.data;
    const pm = new PropertyMap();
    entries.forEach((prop) => {
      const { key } = prop;
      const val = prop.value.value;
      const typ = prop.value.type;
      const typeTag = getPropertyType(typ);
      const newValue = deserializeValueBasedOnTypeTag(typeTag, val);
      const pv = new PropertyValue(typ, newValue);
      pm.setProperty(key, pv);
    });
    return pm;
  }
  function deserializeValueBasedOnTypeTag(tag, val) {
    const de2 = new Deserializer(new HexString(val).toUint8Array());
    let res = "";
    if (tag instanceof TypeTagU8) {
      res = de2.deserializeU8().toString();
    } else if (tag instanceof TypeTagU64) {
      res = de2.deserializeU64().toString();
    } else if (tag instanceof TypeTagU128) {
      res = de2.deserializeU128().toString();
    } else if (tag instanceof TypeTagBool) {
      res = de2.deserializeBool() ? "true" : "false";
    } else if (tag instanceof TypeTagAddress) {
      res = HexString.fromUint8Array(de2.deserializeFixedBytes(32)).hex();
    } else if (tag instanceof TypeTagStruct && tag.isStringTypeTag()) {
      res = de2.deserializeStr();
    } else {
      res = val;
    }
    return res;
  }
  var import_tweetnacl, import_tweetnacl2, __defProp2, __getOwnPropDesc2, __export2, __decorateClass, pathRegex, replaceDerive, HMAC_KEY, HARDENED_OFFSET, getMasterKeyFromSeed, CKDPriv, isValidPath, derivePath, VERSION3, DEFAULT_VERSION_PATH_BASE, DEFAULT_MAX_GAS_AMOUNT, DEFAULT_TXN_EXP_SEC_FROM_NOW, DEFAULT_TXN_TIMEOUT_SEC, APTOS_COIN, CUSTOM_REQUEST_HEADER, clearCacheTagsMap, AptosApiError, errors, NetworkToIndexerAPI, NetworkToNodeAPI, HexString, aptos_types_exports, bcs_exports, MAX_U8_NUMBER, MAX_U16_NUMBER, MAX_U32_NUMBER, MAX_U64_BIG_INT, MAX_U128_BIG_INT, MAX_U256_BIG_INT, Serializer, Deserializer, _AccountAddress, AccountAddress, _Ed25519PublicKey, Ed25519PublicKey, _Ed25519Signature, Ed25519Signature, MAX_SIGNATURES_SUPPORTED, MultiEd25519PublicKey, _MultiEd25519Signature, MultiEd25519Signature, TransactionAuthenticator, TransactionAuthenticatorEd25519, TransactionAuthenticatorMultiEd25519, TransactionAuthenticatorMultiAgent, TransactionAuthenticatorFeePayer, AccountAuthenticator, AccountAuthenticatorEd25519, AccountAuthenticatorMultiEd25519, Identifier, TypeTag, TypeTagBool, TypeTagU8, TypeTagU16, TypeTagU32, TypeTagU64, TypeTagU128, TypeTagU256, TypeTagAddress, TypeTagSigner, TypeTagVector, TypeTagStruct, StructTag, stringStructTag, TypeTagParser, TypeTagParserError, RawTransaction, Script, EntryFunction, MultiSigTransactionPayload, MultiSig, Module, ModuleId, ChangeSet, WriteSet, SignedTransaction, RawTransactionWithData, MultiAgentRawTransaction, FeePayerRawTransaction, TransactionPayload, TransactionPayloadScript, TransactionPayloadEntryFunction, TransactionPayloadMultisig, ChainId, TransactionArgument, TransactionArgumentU8, TransactionArgumentU16, TransactionArgumentU32, TransactionArgumentU64, TransactionArgumentU128, TransactionArgumentU256, TransactionArgumentAddress, TransactionArgumentU8Vector, TransactionArgumentBool, Transaction, UserTransaction, TypeArgumentABI, ArgumentABI, ScriptABI, TransactionScriptABI, EntryFunctionABI, _AuthenticationKey, AuthenticationKey, RotationProofChallenge, _AptosAccount, AptosAccount, CurrentTokenOwnershipFieldsFragmentDoc, TokenDataFieldsFragmentDoc, CollectionDataFieldsFragmentDoc, TokenActivitiesFieldsFragmentDoc, GetAccountCoinsDataCount, GetAccountCoinsData, GetAccountCurrentTokens, GetAccountTokensCount, GetAccountTransactionsCount, GetAccountTransactionsData, GetCollectionData, GetCollectionsWithOwnedTokens, GetCurrentObjects, GetDelegatedStakingActivities, GetIndexerLedgerInfo, GetNumberOfDelegators, GetOwnedTokens, GetOwnedTokensByTokenData, GetTokenActivities, GetTokenActivitiesCount, GetTokenCurrentOwnerData, GetTokenData, GetTokenOwnedFromCollection, GetTokenOwnersData, GetTopUserTransactions, GetUserTransactions, RAW_TRANSACTION_SALT, RAW_TRANSACTION_WITH_DATA_SALT, TransactionBuilder, TransactionBuilderEd25519, TransactionBuilderMultiEd25519, TransactionBuilderABI, TransactionBuilderRemoteABI, _AptosClient, AptosClient, WaitForTransactionError, FailedTransactionError, ApiError, IndexerClient, Provider, PropertyValue, PropertyMap, token_types_exports, TokenData, Token, namePattern, generated_exports, AptosErrorCode, MoveFunctionVisibility, RoleType;
  var init_dist = __esm({
    "node_modules/aptos/dist/index.mjs"() {
      init_supra_shim();
      import_tweetnacl = __toESM(require_nacl_fast(), 1);
      init_esm();
      init_utils();
      init_sha256();
      init_sha3();
      import_tweetnacl2 = __toESM(require_nacl_fast(), 1);
      init_hmac();
      init_sha512();
      init_utils();
      init_index_browser();
      init_utils();
      init_sha3();
      init_sha3();
      init_sha3();
      init_eventemitter3();
      __defProp2 = Object.defineProperty;
      __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      __export2 = (target, all3) => {
        for (var name in all3)
          __defProp2(target, name, { get: all3[name], enumerable: true });
      };
      __decorateClass = (decorators, target, key, kind) => {
        var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc2(target, key) : target;
        for (var i = decorators.length - 1, decorator; i >= 0; i--)
          if (decorator = decorators[i])
            result = (kind ? decorator(target, key, result) : decorator(result)) || result;
        if (kind && result)
          __defProp2(target, key, result);
        return result;
      };
      pathRegex = /^m(\/[0-9]+')+$/;
      replaceDerive = (val) => val.replace("'", "");
      HMAC_KEY = "ed25519 seed";
      HARDENED_OFFSET = 2147483648;
      getMasterKeyFromSeed = (seed) => {
        const h2 = hmac.create(sha512, HMAC_KEY);
        const I2 = h2.update(hexToBytes(seed)).digest();
        const IL = I2.slice(0, 32);
        const IR = I2.slice(32);
        return {
          key: IL,
          chainCode: IR
        };
      };
      CKDPriv = ({ key, chainCode }, index) => {
        const buffer = new ArrayBuffer(4);
        new DataView(buffer).setUint32(0, index);
        const indexBytes = new Uint8Array(buffer);
        const zero = new Uint8Array([0]);
        const data = new Uint8Array([...zero, ...key, ...indexBytes]);
        const I2 = hmac.create(sha512, chainCode).update(data).digest();
        const IL = I2.slice(0, 32);
        const IR = I2.slice(32);
        return {
          key: IL,
          chainCode: IR
        };
      };
      isValidPath = (path) => {
        if (!pathRegex.test(path)) {
          return false;
        }
        return !path.split("/").slice(1).map(replaceDerive).some(Number.isNaN);
      };
      derivePath = (path, seed, offset = HARDENED_OFFSET) => {
        if (!isValidPath(path)) {
          throw new Error("Invalid derivation path");
        }
        const { key, chainCode } = getMasterKeyFromSeed(seed);
        const segments = path.split("/").slice(1).map(replaceDerive).map((el) => parseInt(el, 10));
        return segments.reduce((parentKeys, segment) => CKDPriv(parentKeys, segment + offset), { key, chainCode });
      };
      VERSION3 = "1.21.0";
      DEFAULT_VERSION_PATH_BASE = "/v1";
      DEFAULT_MAX_GAS_AMOUNT = 2e5;
      DEFAULT_TXN_EXP_SEC_FROM_NOW = 20;
      DEFAULT_TXN_TIMEOUT_SEC = 20;
      APTOS_COIN = "0x1::aptos_coin::AptosCoin";
      CUSTOM_REQUEST_HEADER = { "x-aptos-client": `aptos-ts-sdk/${VERSION3}` };
      clearCacheTagsMap = /* @__PURE__ */ new Map();
      AptosApiError = class extends Error {
        constructor(request2, response, message) {
          super(message);
          this.name = "AptosApiError";
          this.url = response.url;
          this.status = response.status;
          this.statusText = response.statusText;
          this.data = response.data;
          this.request = request2;
        }
      };
      errors = {
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        429: "Too Many Requests",
        500: "Internal Server Error",
        502: "Bad Gateway",
        503: "Service Unavailable"
      };
      NetworkToIndexerAPI = {
        mainnet: "https://indexer.mainnet.aptoslabs.com/v1/graphql",
        testnet: "https://indexer-testnet.staging.gcp.aptosdev.com/v1/graphql",
        devnet: "https://indexer-devnet.staging.gcp.aptosdev.com/v1/graphql",
        local: "http://127.0.0.1:8090/v1/graphql"
      };
      NetworkToNodeAPI = {
        mainnet: "https://fullnode.mainnet.aptoslabs.com/v1",
        testnet: "https://fullnode.testnet.aptoslabs.com/v1",
        devnet: "https://fullnode.devnet.aptoslabs.com/v1",
        local: "http://127.0.0.1:8080/v1"
      };
      HexString = class _HexString {
        /**
         * Creates new hex string from Buffer
         * @param buffer A buffer to convert
         * @returns New HexString
         */
        static fromBuffer(buffer) {
          return _HexString.fromUint8Array(buffer);
        }
        /**
         * Creates new hex string from Uint8Array
         * @param arr Uint8Array to convert
         * @returns New HexString
         */
        static fromUint8Array(arr) {
          return new _HexString(bytesToHex(arr));
        }
        /**
         * Ensures `hexString` is instance of `HexString` class
         * @param hexString String to check
         * @returns New HexString if `hexString` is regular string or `hexString` if it is HexString instance
         * @example
         * ```
         *  const regularString = "string";
         *  const hexString = new HexString("string"); // "0xstring"
         *  HexString.ensure(regularString); // "0xstring"
         *  HexString.ensure(hexString); // "0xstring"
         * ```
         */
        static ensure(hexString) {
          if (typeof hexString === "string") {
            return new _HexString(hexString);
          }
          return hexString;
        }
        /**
         * Creates new HexString instance from regular string. If specified string already starts with "0x" prefix,
         * it will not add another one
         * @param hexString String to convert
         * @example
         * ```
         *  const string = "string";
         *  new HexString(string); // "0xstring"
         * ```
         */
        constructor(hexString) {
          if (hexString.startsWith("0x")) {
            this.hexString = hexString;
          } else {
            this.hexString = `0x${hexString}`;
          }
        }
        /**
         * Getter for inner hexString
         * @returns Inner hex string
         */
        hex() {
          return this.hexString;
        }
        /**
         * Getter for inner hexString without prefix
         * @returns Inner hex string without prefix
         * @example
         * ```
         *  const hexString = new HexString("string"); // "0xstring"
         *  hexString.noPrefix(); // "string"
         * ```
         */
        noPrefix() {
          return this.hexString.slice(2);
        }
        /**
         * Overrides default `toString` method
         * @returns Inner hex string
         */
        toString() {
          return this.hex();
        }
        /**
         * Trimmes extra zeroes in the begining of a string
         * @returns Inner hexString without leading zeroes
         * @example
         * ```
         *  new HexString("0x000000string").toShortString(); // result = "0xstring"
         * ```
         */
        toShortString() {
          const trimmed = this.hexString.replace(/^0x0*/, "");
          return `0x${trimmed}`;
        }
        /**
         * Converts hex string to a Uint8Array
         * @returns Uint8Array from inner hexString without prefix
         */
        toUint8Array() {
          return Uint8Array.from(hexToBytes(this.noPrefix()));
        }
      };
      aptos_types_exports = {};
      __export2(aptos_types_exports, {
        AccountAddress: () => AccountAddress,
        AccountAuthenticator: () => AccountAuthenticator,
        AccountAuthenticatorEd25519: () => AccountAuthenticatorEd25519,
        AccountAuthenticatorMultiEd25519: () => AccountAuthenticatorMultiEd25519,
        ArgumentABI: () => ArgumentABI,
        AuthenticationKey: () => AuthenticationKey,
        ChainId: () => ChainId,
        ChangeSet: () => ChangeSet,
        Ed25519PublicKey: () => Ed25519PublicKey,
        Ed25519Signature: () => Ed25519Signature,
        EntryFunction: () => EntryFunction,
        EntryFunctionABI: () => EntryFunctionABI,
        FeePayerRawTransaction: () => FeePayerRawTransaction,
        Identifier: () => Identifier,
        Module: () => Module,
        ModuleId: () => ModuleId,
        MultiAgentRawTransaction: () => MultiAgentRawTransaction,
        MultiEd25519PublicKey: () => MultiEd25519PublicKey,
        MultiEd25519Signature: () => MultiEd25519Signature,
        MultiSig: () => MultiSig,
        MultiSigTransactionPayload: () => MultiSigTransactionPayload,
        RawTransaction: () => RawTransaction,
        RawTransactionWithData: () => RawTransactionWithData,
        RotationProofChallenge: () => RotationProofChallenge,
        Script: () => Script,
        ScriptABI: () => ScriptABI,
        SignedTransaction: () => SignedTransaction,
        StructTag: () => StructTag,
        Transaction: () => Transaction,
        TransactionArgument: () => TransactionArgument,
        TransactionArgumentAddress: () => TransactionArgumentAddress,
        TransactionArgumentBool: () => TransactionArgumentBool,
        TransactionArgumentU128: () => TransactionArgumentU128,
        TransactionArgumentU16: () => TransactionArgumentU16,
        TransactionArgumentU256: () => TransactionArgumentU256,
        TransactionArgumentU32: () => TransactionArgumentU32,
        TransactionArgumentU64: () => TransactionArgumentU64,
        TransactionArgumentU8: () => TransactionArgumentU8,
        TransactionArgumentU8Vector: () => TransactionArgumentU8Vector,
        TransactionAuthenticator: () => TransactionAuthenticator,
        TransactionAuthenticatorEd25519: () => TransactionAuthenticatorEd25519,
        TransactionAuthenticatorFeePayer: () => TransactionAuthenticatorFeePayer,
        TransactionAuthenticatorMultiAgent: () => TransactionAuthenticatorMultiAgent,
        TransactionAuthenticatorMultiEd25519: () => TransactionAuthenticatorMultiEd25519,
        TransactionPayload: () => TransactionPayload,
        TransactionPayloadEntryFunction: () => TransactionPayloadEntryFunction,
        TransactionPayloadMultisig: () => TransactionPayloadMultisig,
        TransactionPayloadScript: () => TransactionPayloadScript,
        TransactionScriptABI: () => TransactionScriptABI,
        TypeArgumentABI: () => TypeArgumentABI,
        TypeTag: () => TypeTag,
        TypeTagAddress: () => TypeTagAddress,
        TypeTagBool: () => TypeTagBool,
        TypeTagParser: () => TypeTagParser,
        TypeTagParserError: () => TypeTagParserError,
        TypeTagSigner: () => TypeTagSigner,
        TypeTagStruct: () => TypeTagStruct,
        TypeTagU128: () => TypeTagU128,
        TypeTagU16: () => TypeTagU16,
        TypeTagU256: () => TypeTagU256,
        TypeTagU32: () => TypeTagU32,
        TypeTagU64: () => TypeTagU64,
        TypeTagU8: () => TypeTagU8,
        TypeTagVector: () => TypeTagVector,
        UserTransaction: () => UserTransaction,
        WriteSet: () => WriteSet,
        objectStructTag: () => objectStructTag,
        optionStructTag: () => optionStructTag,
        stringStructTag: () => stringStructTag
      });
      bcs_exports = {};
      __export2(bcs_exports, {
        Deserializer: () => Deserializer,
        Serializer: () => Serializer,
        bcsSerializeBool: () => bcsSerializeBool,
        bcsSerializeBytes: () => bcsSerializeBytes,
        bcsSerializeFixedBytes: () => bcsSerializeFixedBytes,
        bcsSerializeStr: () => bcsSerializeStr,
        bcsSerializeU128: () => bcsSerializeU128,
        bcsSerializeU16: () => bcsSerializeU16,
        bcsSerializeU256: () => bcsSerializeU256,
        bcsSerializeU32: () => bcsSerializeU32,
        bcsSerializeU8: () => bcsSerializeU8,
        bcsSerializeUint64: () => bcsSerializeUint64,
        bcsToBytes: () => bcsToBytes,
        deserializeVector: () => deserializeVector,
        serializeVector: () => serializeVector,
        serializeVectorWithFunc: () => serializeVectorWithFunc
      });
      MAX_U8_NUMBER = 2 ** 8 - 1;
      MAX_U16_NUMBER = 2 ** 16 - 1;
      MAX_U32_NUMBER = 2 ** 32 - 1;
      MAX_U64_BIG_INT = BigInt(2 ** 64) - BigInt(1);
      MAX_U128_BIG_INT = BigInt(2 ** 128) - BigInt(1);
      MAX_U256_BIG_INT = BigInt(2 ** 256) - BigInt(1);
      Serializer = class {
        constructor() {
          this.buffer = new ArrayBuffer(64);
          this.offset = 0;
        }
        ensureBufferWillHandleSize(bytes2) {
          while (this.buffer.byteLength < this.offset + bytes2) {
            const newBuffer = new ArrayBuffer(this.buffer.byteLength * 2);
            new Uint8Array(newBuffer).set(new Uint8Array(this.buffer));
            this.buffer = newBuffer;
          }
        }
        serialize(values) {
          this.ensureBufferWillHandleSize(values.length);
          new Uint8Array(this.buffer, this.offset).set(values);
          this.offset += values.length;
        }
        serializeWithFunction(fn, bytesLength, value) {
          this.ensureBufferWillHandleSize(bytesLength);
          const dv = new DataView(this.buffer, this.offset);
          fn.apply(dv, [0, value, true]);
          this.offset += bytesLength;
        }
        /**
         * Serializes a string. UTF8 string is supported. Serializes the string's bytes length "l" first,
         * and then serializes "l" bytes of the string content.
         *
         * BCS layout for "string": string_length | string_content. string_length is the bytes length of
         * the string that is uleb128 encoded. string_length is a u32 integer.
         *
         * @example
         * ```ts
         * const serializer = new Serializer();
         * serializer.serializeStr("çå∞≠¢õß∂ƒ∫");
         * assert(serializer.getBytes() === new Uint8Array([24, 0xc3, 0xa7, 0xc3, 0xa5, 0xe2, 0x88, 0x9e,
         * 0xe2, 0x89, 0xa0, 0xc2, 0xa2, 0xc3, 0xb5, 0xc3, 0x9f, 0xe2, 0x88, 0x82, 0xc6, 0x92, 0xe2, 0x88, 0xab]));
         * ```
         */
        serializeStr(value) {
          const textEncoder = new TextEncoder();
          this.serializeBytes(textEncoder.encode(value));
        }
        /**
         * Serializes an array of bytes.
         *
         * BCS layout for "bytes": bytes_length | bytes. bytes_length is the length of the bytes array that is
         * uleb128 encoded. bytes_length is a u32 integer.
         */
        serializeBytes(value) {
          this.serializeU32AsUleb128(value.length);
          this.serialize(value);
        }
        /**
         * Serializes an array of bytes with known length. Therefore length doesn't need to be
         * serialized to help deserialization.  When deserializing, the number of
         * bytes to deserialize needs to be passed in.
         */
        serializeFixedBytes(value) {
          this.serialize(value);
        }
        /**
         * Serializes a boolean value.
         *
         * BCS layout for "boolean": One byte. "0x01" for True and "0x00" for False.
         */
        serializeBool(value) {
          if (typeof value !== "boolean") {
            throw new Error("Value needs to be a boolean");
          }
          const byteValue = value ? 1 : 0;
          this.serialize(new Uint8Array([byteValue]));
        }
        serializeU8(value) {
          this.serialize(new Uint8Array([value]));
        }
        serializeU16(value) {
          this.serializeWithFunction(DataView.prototype.setUint16, 2, value);
        }
        serializeU32(value) {
          this.serializeWithFunction(DataView.prototype.setUint32, 4, value);
        }
        serializeU64(value) {
          const low = BigInt(value.toString()) & BigInt(MAX_U32_NUMBER);
          const high = BigInt(value.toString()) >> BigInt(32);
          this.serializeU32(Number(low));
          this.serializeU32(Number(high));
        }
        serializeU128(value) {
          const low = BigInt(value.toString()) & MAX_U64_BIG_INT;
          const high = BigInt(value.toString()) >> BigInt(64);
          this.serializeU64(low);
          this.serializeU64(high);
        }
        serializeU256(value) {
          const low = BigInt(value.toString()) & MAX_U128_BIG_INT;
          const high = BigInt(value.toString()) >> BigInt(128);
          this.serializeU128(low);
          this.serializeU128(high);
        }
        serializeU32AsUleb128(val) {
          let value = val;
          const valueArray = [];
          while (value >>> 7 !== 0) {
            valueArray.push(value & 127 | 128);
            value >>>= 7;
          }
          valueArray.push(value);
          this.serialize(new Uint8Array(valueArray));
        }
        /**
         * Returns the buffered bytes
         */
        getBytes() {
          return new Uint8Array(this.buffer).slice(0, this.offset);
        }
      };
      __decorateClass([
        checkNumberRange(0, MAX_U8_NUMBER)
      ], Serializer.prototype, "serializeU8", 1);
      __decorateClass([
        checkNumberRange(0, MAX_U16_NUMBER)
      ], Serializer.prototype, "serializeU16", 1);
      __decorateClass([
        checkNumberRange(0, MAX_U32_NUMBER)
      ], Serializer.prototype, "serializeU32", 1);
      __decorateClass([
        checkNumberRange(BigInt(0), MAX_U64_BIG_INT)
      ], Serializer.prototype, "serializeU64", 1);
      __decorateClass([
        checkNumberRange(BigInt(0), MAX_U128_BIG_INT)
      ], Serializer.prototype, "serializeU128", 1);
      __decorateClass([
        checkNumberRange(BigInt(0), MAX_U256_BIG_INT)
      ], Serializer.prototype, "serializeU256", 1);
      __decorateClass([
        checkNumberRange(0, MAX_U32_NUMBER)
      ], Serializer.prototype, "serializeU32AsUleb128", 1);
      Deserializer = class {
        constructor(data) {
          this.buffer = new ArrayBuffer(data.length);
          new Uint8Array(this.buffer).set(data, 0);
          this.offset = 0;
        }
        read(length) {
          if (this.offset + length > this.buffer.byteLength) {
            throw new Error("Reached to the end of buffer");
          }
          const bytes2 = this.buffer.slice(this.offset, this.offset + length);
          this.offset += length;
          return bytes2;
        }
        /**
         * Deserializes a string. UTF8 string is supported. Reads the string's bytes length "l" first,
         * and then reads "l" bytes of content. Decodes the byte array into a string.
         *
         * BCS layout for "string": string_length | string_content. string_length is the bytes length of
         * the string that is uleb128 encoded. string_length is a u32 integer.
         *
         * @example
         * ```ts
         * const deserializer = new Deserializer(new Uint8Array([24, 0xc3, 0xa7, 0xc3, 0xa5, 0xe2, 0x88, 0x9e,
         * 0xe2, 0x89, 0xa0, 0xc2, 0xa2, 0xc3, 0xb5, 0xc3, 0x9f, 0xe2, 0x88, 0x82, 0xc6, 0x92, 0xe2, 0x88, 0xab]));
         * assert(deserializer.deserializeStr() === "çå∞≠¢õß∂ƒ∫");
         * ```
         */
        deserializeStr() {
          const value = this.deserializeBytes();
          const textDecoder = new TextDecoder();
          return textDecoder.decode(value);
        }
        /**
         * Deserializes an array of bytes.
         *
         * BCS layout for "bytes": bytes_length | bytes. bytes_length is the length of the bytes array that is
         * uleb128 encoded. bytes_length is a u32 integer.
         */
        deserializeBytes() {
          const len = this.deserializeUleb128AsU32();
          return new Uint8Array(this.read(len));
        }
        /**
         * Deserializes an array of bytes. The number of bytes to read is already known.
         *
         */
        deserializeFixedBytes(len) {
          return new Uint8Array(this.read(len));
        }
        /**
         * Deserializes a boolean value.
         *
         * BCS layout for "boolean": One byte. "0x01" for True and "0x00" for False.
         */
        deserializeBool() {
          const bool = new Uint8Array(this.read(1))[0];
          if (bool !== 1 && bool !== 0) {
            throw new Error("Invalid boolean value");
          }
          return bool === 1;
        }
        /**
         * Deserializes a uint8 number.
         *
         * BCS layout for "uint8": One byte. Binary format in little-endian representation.
         */
        deserializeU8() {
          return new DataView(this.read(1)).getUint8(0);
        }
        /**
         * Deserializes a uint16 number.
         *
         * BCS layout for "uint16": Two bytes. Binary format in little-endian representation.
         * @example
         * ```ts
         * const deserializer = new Deserializer(new Uint8Array([0x34, 0x12]));
         * assert(deserializer.deserializeU16() === 4660);
         * ```
         */
        deserializeU16() {
          return new DataView(this.read(2)).getUint16(0, true);
        }
        /**
         * Deserializes a uint32 number.
         *
         * BCS layout for "uint32": Four bytes. Binary format in little-endian representation.
         * @example
         * ```ts
         * const deserializer = new Deserializer(new Uint8Array([0x78, 0x56, 0x34, 0x12]));
         * assert(deserializer.deserializeU32() === 305419896);
         * ```
         */
        deserializeU32() {
          return new DataView(this.read(4)).getUint32(0, true);
        }
        /**
         * Deserializes a uint64 number.
         *
         * BCS layout for "uint64": Eight bytes. Binary format in little-endian representation.
         * @example
         * ```ts
         * const deserializer = new Deserializer(new Uint8Array([0x00, 0xEF, 0xCD, 0xAB, 0x78, 0x56, 0x34, 0x12]));
         * assert(deserializer.deserializeU64() === 1311768467750121216);
         * ```
         */
        deserializeU64() {
          const low = this.deserializeU32();
          const high = this.deserializeU32();
          return BigInt(BigInt(high) << BigInt(32) | BigInt(low));
        }
        /**
         * Deserializes a uint128 number.
         *
         * BCS layout for "uint128": Sixteen bytes. Binary format in little-endian representation.
         */
        deserializeU128() {
          const low = this.deserializeU64();
          const high = this.deserializeU64();
          return BigInt(high << BigInt(64) | low);
        }
        /**
         * Deserializes a uint256 number.
         *
         * BCS layout for "uint256": Thirty-two bytes. Binary format in little-endian representation.
         */
        deserializeU256() {
          const low = this.deserializeU128();
          const high = this.deserializeU128();
          return BigInt(high << BigInt(128) | low);
        }
        /**
         * Deserializes a uleb128 encoded uint32 number.
         *
         * BCS use uleb128 encoding in two cases: (1) lengths of variable-length sequences and (2) tags of enum values
         */
        deserializeUleb128AsU32() {
          let value = BigInt(0);
          let shift = 0;
          while (value < MAX_U32_NUMBER) {
            const byte = this.deserializeU8();
            value |= BigInt(byte & 127) << BigInt(shift);
            if ((byte & 128) === 0) {
              break;
            }
            shift += 7;
          }
          if (value > MAX_U32_NUMBER) {
            throw new Error("Overflow while parsing uleb128-encoded uint32 value");
          }
          return Number(value);
        }
      };
      _AccountAddress = class _AccountAddress2 {
        constructor(address) {
          if (address.length !== _AccountAddress2.LENGTH) {
            throw new Error("Expected address of length 32");
          }
          this.address = address;
        }
        /**
         * Creates AccountAddress from a hex string.
         * @param addr Hex string can be with a prefix or without a prefix,
         *   e.g. '0x1aa' or '1aa'. Hex string will be left padded with 0s if too short.
         */
        static fromHex(addr) {
          let address = HexString.ensure(addr);
          if (address.noPrefix().length % 2 !== 0) {
            address = new HexString(`0${address.noPrefix()}`);
          }
          const addressBytes = address.toUint8Array();
          if (addressBytes.length > _AccountAddress2.LENGTH) {
            throw new Error("Hex string is too long. Address's length is 32 bytes.");
          } else if (addressBytes.length === _AccountAddress2.LENGTH) {
            return new _AccountAddress2(addressBytes);
          }
          const res = new Uint8Array(_AccountAddress2.LENGTH);
          res.set(addressBytes, _AccountAddress2.LENGTH - addressBytes.length);
          return new _AccountAddress2(res);
        }
        /**
         * Checks if the string is a valid AccountAddress
         * @param addr Hex string can be with a prefix or without a prefix,
         *   e.g. '0x1aa' or '1aa'. Hex string will be left padded with 0s if too short.
         */
        static isValid(addr) {
          if (addr === "") {
            return false;
          }
          let address = HexString.ensure(addr);
          if (address.noPrefix().length % 2 !== 0) {
            address = new HexString(`0${address.noPrefix()}`);
          }
          const addressBytes = address.toUint8Array();
          return addressBytes.length <= _AccountAddress2.LENGTH;
        }
        /**
         * Return a hex string from account Address.
         */
        toHexString() {
          return HexString.fromUint8Array(this.address).hex();
        }
        serialize(serializer) {
          serializer.serializeFixedBytes(this.address);
        }
        static deserialize(deserializer) {
          return new _AccountAddress2(deserializer.deserializeFixedBytes(_AccountAddress2.LENGTH));
        }
        /**
         * Standardizes an address to the format "0x" followed by 64 lowercase hexadecimal digits.
         */
        static standardizeAddress(address) {
          const lowercaseAddress = address.toLowerCase();
          const addressWithoutPrefix = lowercaseAddress.startsWith("0x") ? lowercaseAddress.slice(2) : lowercaseAddress;
          const addressWithPadding = addressWithoutPrefix.padStart(64, "0");
          return `0x${addressWithPadding}`;
        }
      };
      _AccountAddress.LENGTH = 32;
      _AccountAddress.CORE_CODE_ADDRESS = _AccountAddress.fromHex("0x1");
      AccountAddress = _AccountAddress;
      _Ed25519PublicKey = class _Ed25519PublicKey2 {
        constructor(value) {
          if (value.length !== _Ed25519PublicKey2.LENGTH) {
            throw new Error(`Ed25519PublicKey length should be ${_Ed25519PublicKey2.LENGTH}`);
          }
          this.value = value;
        }
        toBytes() {
          return this.value;
        }
        serialize(serializer) {
          serializer.serializeBytes(this.value);
        }
        static deserialize(deserializer) {
          const value = deserializer.deserializeBytes();
          return new _Ed25519PublicKey2(value);
        }
      };
      _Ed25519PublicKey.LENGTH = 32;
      Ed25519PublicKey = _Ed25519PublicKey;
      _Ed25519Signature = class _Ed25519Signature2 {
        constructor(value) {
          this.value = value;
          if (value.length !== _Ed25519Signature2.LENGTH) {
            throw new Error(`Ed25519Signature length should be ${_Ed25519Signature2.LENGTH}`);
          }
        }
        serialize(serializer) {
          serializer.serializeBytes(this.value);
        }
        static deserialize(deserializer) {
          const value = deserializer.deserializeBytes();
          return new _Ed25519Signature2(value);
        }
      };
      _Ed25519Signature.LENGTH = 64;
      Ed25519Signature = _Ed25519Signature;
      MAX_SIGNATURES_SUPPORTED = 32;
      MultiEd25519PublicKey = class _MultiEd25519PublicKey {
        /**
         * Public key for a K-of-N multisig transaction. A K-of-N multisig transaction means that for such a
         * transaction to be executed, at least K out of the N authorized signers have signed the transaction
         * and passed the check conducted by the chain.
         *
         * @see {@link
         * https://aptos.dev/guides/creating-a-signed-transaction#multisignature-transactions | Creating a Signed Transaction}
         *
         * @param public_keys A list of public keys
         * @param threshold At least "threshold" signatures must be valid
         */
        constructor(public_keys, threshold) {
          this.public_keys = public_keys;
          this.threshold = threshold;
          if (threshold > MAX_SIGNATURES_SUPPORTED) {
            throw new Error(`"threshold" cannot be larger than ${MAX_SIGNATURES_SUPPORTED}`);
          }
        }
        /**
         * Converts a MultiEd25519PublicKey into bytes with: bytes = p1_bytes | ... | pn_bytes | threshold
         */
        toBytes() {
          const bytes2 = new Uint8Array(this.public_keys.length * Ed25519PublicKey.LENGTH + 1);
          this.public_keys.forEach((k2, i) => {
            bytes2.set(k2.value, i * Ed25519PublicKey.LENGTH);
          });
          bytes2[this.public_keys.length * Ed25519PublicKey.LENGTH] = this.threshold;
          return bytes2;
        }
        serialize(serializer) {
          serializer.serializeBytes(this.toBytes());
        }
        static deserialize(deserializer) {
          const bytes2 = deserializer.deserializeBytes();
          const threshold = bytes2[bytes2.length - 1];
          const keys = [];
          for (let i = 0; i < bytes2.length - 1; i += Ed25519PublicKey.LENGTH) {
            const begin = i;
            keys.push(new Ed25519PublicKey(bytes2.subarray(begin, begin + Ed25519PublicKey.LENGTH)));
          }
          return new _MultiEd25519PublicKey(keys, threshold);
        }
      };
      _MultiEd25519Signature = class _MultiEd25519Signature2 {
        /**
         * Signature for a K-of-N multisig transaction.
         *
         * @see {@link
         * https://aptos.dev/guides/creating-a-signed-transaction#multisignature-transactions | Creating a Signed Transaction}
         *
         * @param signatures A list of ed25519 signatures
         * @param bitmap 4 bytes, at most 32 signatures are supported. If Nth bit value is `1`, the Nth
         * signature should be provided in `signatures`. Bits are read from left to right
         */
        constructor(signatures, bitmap) {
          this.signatures = signatures;
          this.bitmap = bitmap;
          if (bitmap.length !== _MultiEd25519Signature2.BITMAP_LEN) {
            throw new Error(`"bitmap" length should be ${_MultiEd25519Signature2.BITMAP_LEN}`);
          }
        }
        /**
         * Converts a MultiEd25519Signature into bytes with `bytes = s1_bytes | ... | sn_bytes | bitmap`
         */
        toBytes() {
          const bytes2 = new Uint8Array(this.signatures.length * Ed25519Signature.LENGTH + _MultiEd25519Signature2.BITMAP_LEN);
          this.signatures.forEach((k2, i) => {
            bytes2.set(k2.value, i * Ed25519Signature.LENGTH);
          });
          bytes2.set(this.bitmap, this.signatures.length * Ed25519Signature.LENGTH);
          return bytes2;
        }
        /**
         * Helper method to create a bitmap out of the specified bit positions
         * @param bits The bitmap positions that should be set. A position starts at index 0.
         * Valid position should range between 0 and 31.
         * @example
         * Here's an example of valid `bits`
         * ```
         * [0, 2, 31]
         * ```
         * `[0, 2, 31]` means the 1st, 3rd and 32nd bits should be set in the bitmap.
         * The result bitmap should be 0b1010000000000000000000000000001
         *
         * @returns bitmap that is 32bit long
         */
        static createBitmap(bits) {
          const firstBitInByte = 128;
          const bitmap = new Uint8Array([0, 0, 0, 0]);
          const dupCheckSet = /* @__PURE__ */ new Set();
          bits.forEach((bit) => {
            if (bit >= MAX_SIGNATURES_SUPPORTED) {
              throw new Error(`Invalid bit value ${bit}.`);
            }
            if (dupCheckSet.has(bit)) {
              throw new Error("Duplicated bits detected.");
            }
            dupCheckSet.add(bit);
            const byteOffset = Math.floor(bit / 8);
            let byte = bitmap[byteOffset];
            byte |= firstBitInByte >> bit % 8;
            bitmap[byteOffset] = byte;
          });
          return bitmap;
        }
        serialize(serializer) {
          serializer.serializeBytes(this.toBytes());
        }
        static deserialize(deserializer) {
          const bytes2 = deserializer.deserializeBytes();
          const bitmap = bytes2.subarray(bytes2.length - 4);
          const sigs = [];
          for (let i = 0; i < bytes2.length - bitmap.length; i += Ed25519Signature.LENGTH) {
            const begin = i;
            sigs.push(new Ed25519Signature(bytes2.subarray(begin, begin + Ed25519Signature.LENGTH)));
          }
          return new _MultiEd25519Signature2(sigs, bitmap);
        }
      };
      _MultiEd25519Signature.BITMAP_LEN = 4;
      MultiEd25519Signature = _MultiEd25519Signature;
      TransactionAuthenticator = class {
        static deserialize(deserializer) {
          const index = deserializer.deserializeUleb128AsU32();
          switch (index) {
            case 0:
              return TransactionAuthenticatorEd25519.load(deserializer);
            case 1:
              return TransactionAuthenticatorMultiEd25519.load(deserializer);
            case 2:
              return TransactionAuthenticatorMultiAgent.load(deserializer);
            case 3:
              return TransactionAuthenticatorFeePayer.load(deserializer);
            default:
              throw new Error(`Unknown variant index for TransactionAuthenticator: ${index}`);
          }
        }
      };
      TransactionAuthenticatorEd25519 = class _TransactionAuthenticatorEd25519 extends TransactionAuthenticator {
        /**
         * An authenticator for single signature.
         *
         * @param public_key Client's public key.
         * @param signature Signature of a raw transaction.
         * @see {@link https://aptos.dev/guides/creating-a-signed-transaction/ | Creating a Signed Transaction}
         * for details about generating a signature.
         */
        constructor(public_key, signature) {
          super();
          this.public_key = public_key;
          this.signature = signature;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(0);
          this.public_key.serialize(serializer);
          this.signature.serialize(serializer);
        }
        static load(deserializer) {
          const public_key = Ed25519PublicKey.deserialize(deserializer);
          const signature = Ed25519Signature.deserialize(deserializer);
          return new _TransactionAuthenticatorEd25519(public_key, signature);
        }
      };
      TransactionAuthenticatorMultiEd25519 = class _TransactionAuthenticatorMultiEd25519 extends TransactionAuthenticator {
        /**
         * An authenticator for multiple signatures.
         *
         * @param public_key
         * @param signature
         *
         */
        constructor(public_key, signature) {
          super();
          this.public_key = public_key;
          this.signature = signature;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(1);
          this.public_key.serialize(serializer);
          this.signature.serialize(serializer);
        }
        static load(deserializer) {
          const public_key = MultiEd25519PublicKey.deserialize(deserializer);
          const signature = MultiEd25519Signature.deserialize(deserializer);
          return new _TransactionAuthenticatorMultiEd25519(public_key, signature);
        }
      };
      TransactionAuthenticatorMultiAgent = class _TransactionAuthenticatorMultiAgent extends TransactionAuthenticator {
        constructor(sender, secondary_signer_addresses, secondary_signers) {
          super();
          this.sender = sender;
          this.secondary_signer_addresses = secondary_signer_addresses;
          this.secondary_signers = secondary_signers;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(2);
          this.sender.serialize(serializer);
          serializeVector(this.secondary_signer_addresses, serializer);
          serializeVector(this.secondary_signers, serializer);
        }
        static load(deserializer) {
          const sender = AccountAuthenticator.deserialize(deserializer);
          const secondary_signer_addresses = deserializeVector(deserializer, AccountAddress);
          const secondary_signers = deserializeVector(deserializer, AccountAuthenticator);
          return new _TransactionAuthenticatorMultiAgent(sender, secondary_signer_addresses, secondary_signers);
        }
      };
      TransactionAuthenticatorFeePayer = class _TransactionAuthenticatorFeePayer extends TransactionAuthenticator {
        constructor(sender, secondary_signer_addresses, secondary_signers, fee_payer) {
          super();
          this.sender = sender;
          this.secondary_signer_addresses = secondary_signer_addresses;
          this.secondary_signers = secondary_signers;
          this.fee_payer = fee_payer;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(3);
          this.sender.serialize(serializer);
          serializeVector(this.secondary_signer_addresses, serializer);
          serializeVector(this.secondary_signers, serializer);
          this.fee_payer.address.serialize(serializer);
          this.fee_payer.authenticator.serialize(serializer);
        }
        static load(deserializer) {
          const sender = AccountAuthenticator.deserialize(deserializer);
          const secondary_signer_addresses = deserializeVector(deserializer, AccountAddress);
          const secondary_signers = deserializeVector(deserializer, AccountAuthenticator);
          const address = AccountAddress.deserialize(deserializer);
          const authenticator = AccountAuthenticator.deserialize(deserializer);
          const fee_payer = { address, authenticator };
          return new _TransactionAuthenticatorFeePayer(sender, secondary_signer_addresses, secondary_signers, fee_payer);
        }
      };
      AccountAuthenticator = class {
        static deserialize(deserializer) {
          const index = deserializer.deserializeUleb128AsU32();
          switch (index) {
            case 0:
              return AccountAuthenticatorEd25519.load(deserializer);
            case 1:
              return AccountAuthenticatorMultiEd25519.load(deserializer);
            default:
              throw new Error(`Unknown variant index for AccountAuthenticator: ${index}`);
          }
        }
      };
      AccountAuthenticatorEd25519 = class _AccountAuthenticatorEd25519 extends AccountAuthenticator {
        constructor(public_key, signature) {
          super();
          this.public_key = public_key;
          this.signature = signature;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(0);
          this.public_key.serialize(serializer);
          this.signature.serialize(serializer);
        }
        static load(deserializer) {
          const public_key = Ed25519PublicKey.deserialize(deserializer);
          const signature = Ed25519Signature.deserialize(deserializer);
          return new _AccountAuthenticatorEd25519(public_key, signature);
        }
      };
      AccountAuthenticatorMultiEd25519 = class _AccountAuthenticatorMultiEd25519 extends AccountAuthenticator {
        constructor(public_key, signature) {
          super();
          this.public_key = public_key;
          this.signature = signature;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(1);
          this.public_key.serialize(serializer);
          this.signature.serialize(serializer);
        }
        static load(deserializer) {
          const public_key = MultiEd25519PublicKey.deserialize(deserializer);
          const signature = MultiEd25519Signature.deserialize(deserializer);
          return new _AccountAuthenticatorMultiEd25519(public_key, signature);
        }
      };
      Identifier = class _Identifier {
        constructor(value) {
          this.value = value;
        }
        serialize(serializer) {
          serializer.serializeStr(this.value);
        }
        static deserialize(deserializer) {
          const value = deserializer.deserializeStr();
          return new _Identifier(value);
        }
      };
      TypeTag = class {
        static deserialize(deserializer) {
          const index = deserializer.deserializeUleb128AsU32();
          switch (index) {
            case 0:
              return TypeTagBool.load(deserializer);
            case 1:
              return TypeTagU8.load(deserializer);
            case 2:
              return TypeTagU64.load(deserializer);
            case 3:
              return TypeTagU128.load(deserializer);
            case 4:
              return TypeTagAddress.load(deserializer);
            case 5:
              return TypeTagSigner.load(deserializer);
            case 6:
              return TypeTagVector.load(deserializer);
            case 7:
              return TypeTagStruct.load(deserializer);
            case 8:
              return TypeTagU16.load(deserializer);
            case 9:
              return TypeTagU32.load(deserializer);
            case 10:
              return TypeTagU256.load(deserializer);
            default:
              throw new Error(`Unknown variant index for TypeTag: ${index}`);
          }
        }
      };
      TypeTagBool = class _TypeTagBool extends TypeTag {
        serialize(serializer) {
          serializer.serializeU32AsUleb128(0);
        }
        static load(_deserializer) {
          return new _TypeTagBool();
        }
      };
      TypeTagU8 = class _TypeTagU8 extends TypeTag {
        serialize(serializer) {
          serializer.serializeU32AsUleb128(1);
        }
        static load(_deserializer) {
          return new _TypeTagU8();
        }
      };
      TypeTagU16 = class _TypeTagU16 extends TypeTag {
        serialize(serializer) {
          serializer.serializeU32AsUleb128(8);
        }
        static load(_deserializer) {
          return new _TypeTagU16();
        }
      };
      TypeTagU32 = class _TypeTagU32 extends TypeTag {
        serialize(serializer) {
          serializer.serializeU32AsUleb128(9);
        }
        static load(_deserializer) {
          return new _TypeTagU32();
        }
      };
      TypeTagU64 = class _TypeTagU64 extends TypeTag {
        serialize(serializer) {
          serializer.serializeU32AsUleb128(2);
        }
        static load(_deserializer) {
          return new _TypeTagU64();
        }
      };
      TypeTagU128 = class _TypeTagU128 extends TypeTag {
        serialize(serializer) {
          serializer.serializeU32AsUleb128(3);
        }
        static load(_deserializer) {
          return new _TypeTagU128();
        }
      };
      TypeTagU256 = class _TypeTagU256 extends TypeTag {
        serialize(serializer) {
          serializer.serializeU32AsUleb128(10);
        }
        static load(_deserializer) {
          return new _TypeTagU256();
        }
      };
      TypeTagAddress = class _TypeTagAddress extends TypeTag {
        serialize(serializer) {
          serializer.serializeU32AsUleb128(4);
        }
        static load(_deserializer) {
          return new _TypeTagAddress();
        }
      };
      TypeTagSigner = class _TypeTagSigner extends TypeTag {
        serialize(serializer) {
          serializer.serializeU32AsUleb128(5);
        }
        static load(_deserializer) {
          return new _TypeTagSigner();
        }
      };
      TypeTagVector = class _TypeTagVector extends TypeTag {
        constructor(value) {
          super();
          this.value = value;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(6);
          this.value.serialize(serializer);
        }
        static load(deserializer) {
          const value = TypeTag.deserialize(deserializer);
          return new _TypeTagVector(value);
        }
      };
      TypeTagStruct = class _TypeTagStruct extends TypeTag {
        constructor(value) {
          super();
          this.value = value;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(7);
          this.value.serialize(serializer);
        }
        static load(deserializer) {
          const value = StructTag.deserialize(deserializer);
          return new _TypeTagStruct(value);
        }
        isStringTypeTag() {
          if (this.value.module_name.value === "string" && this.value.name.value === "String" && this.value.address.toHexString() === AccountAddress.CORE_CODE_ADDRESS.toHexString()) {
            return true;
          }
          return false;
        }
      };
      StructTag = class _StructTag {
        constructor(address, module_name, name, type_args) {
          this.address = address;
          this.module_name = module_name;
          this.name = name;
          this.type_args = type_args;
        }
        /**
         * Converts a string literal to a StructTag
         * @param structTag String literal in format "AcountAddress::module_name::ResourceName",
         *   e.g. "0x1::aptos_coin::AptosCoin"
         * @returns
         */
        static fromString(structTag) {
          const typeTagStruct = new TypeTagParser(structTag).parseTypeTag();
          return new _StructTag(
            typeTagStruct.value.address,
            typeTagStruct.value.module_name,
            typeTagStruct.value.name,
            typeTagStruct.value.type_args
          );
        }
        serialize(serializer) {
          this.address.serialize(serializer);
          this.module_name.serialize(serializer);
          this.name.serialize(serializer);
          serializeVector(this.type_args, serializer);
        }
        static deserialize(deserializer) {
          const address = AccountAddress.deserialize(deserializer);
          const moduleName = Identifier.deserialize(deserializer);
          const name = Identifier.deserialize(deserializer);
          const typeArgs = deserializeVector(deserializer, TypeTag);
          return new _StructTag(address, moduleName, name, typeArgs);
        }
      };
      stringStructTag = new StructTag(
        AccountAddress.fromHex("0x1"),
        new Identifier("string"),
        new Identifier("String"),
        []
      );
      TypeTagParser = class _TypeTagParser {
        constructor(tagStr, typeTags) {
          this.typeTags = [];
          this.tokens = tokenize(tagStr);
          this.typeTags = typeTags || [];
        }
        consume(targetToken) {
          const token = this.tokens.shift();
          if (!token || token[1] !== targetToken) {
            bail("Invalid type tag.");
          }
        }
        /**
         * Consumes all of an unused generic field, mostly applicable to object
         *
         * Note: This is recursive.  it can be problematic if there's bad input
         * @private
         */
        consumeWholeGeneric() {
          this.consume("<");
          while (this.tokens[0][1] !== ">") {
            if (this.tokens[0][1] === "<") {
              this.consumeWholeGeneric();
            } else {
              this.tokens.shift();
            }
          }
          this.consume(">");
        }
        parseCommaList(endToken, allowTraillingComma) {
          const res = [];
          if (this.tokens.length <= 0) {
            bail("Invalid type tag.");
          }
          while (this.tokens[0][1] !== endToken) {
            res.push(this.parseTypeTag());
            if (this.tokens.length > 0 && this.tokens[0][1] === endToken) {
              break;
            }
            this.consume(",");
            if (this.tokens.length > 0 && this.tokens[0][1] === endToken && allowTraillingComma) {
              break;
            }
            if (this.tokens.length <= 0) {
              bail("Invalid type tag.");
            }
          }
          return res;
        }
        parseTypeTag() {
          if (this.tokens.length === 0) {
            bail("Invalid type tag.");
          }
          const [tokenTy, tokenVal] = this.tokens.shift();
          if (tokenVal === "u8") {
            return new TypeTagU8();
          }
          if (tokenVal === "u16") {
            return new TypeTagU16();
          }
          if (tokenVal === "u32") {
            return new TypeTagU32();
          }
          if (tokenVal === "u64") {
            return new TypeTagU64();
          }
          if (tokenVal === "u128") {
            return new TypeTagU128();
          }
          if (tokenVal === "u256") {
            return new TypeTagU256();
          }
          if (tokenVal === "bool") {
            return new TypeTagBool();
          }
          if (tokenVal === "address") {
            return new TypeTagAddress();
          }
          if (tokenVal === "vector") {
            this.consume("<");
            const res = this.parseTypeTag();
            this.consume(">");
            return new TypeTagVector(res);
          }
          if (tokenVal === "string") {
            return new TypeTagStruct(stringStructTag);
          }
          if (tokenTy === "IDENT" && (tokenVal.startsWith("0x") || tokenVal.startsWith("0X"))) {
            const address = AccountAddress.fromHex(tokenVal);
            this.consume("::");
            const [moduleTokenTy, module] = this.tokens.shift();
            if (moduleTokenTy !== "IDENT") {
              bail("Invalid type tag.");
            }
            this.consume("::");
            const [nameTokenTy, name] = this.tokens.shift();
            if (nameTokenTy !== "IDENT") {
              bail("Invalid type tag.");
            }
            if (AccountAddress.CORE_CODE_ADDRESS.toHexString() === address.toHexString() && module === "object" && name === "Object") {
              this.consumeWholeGeneric();
              return new TypeTagAddress();
            }
            let tyTags = [];
            if (this.tokens.length > 0 && this.tokens[0][1] === "<") {
              this.consume("<");
              tyTags = this.parseCommaList(">", true);
              this.consume(">");
            }
            const structTag = new StructTag(address, new Identifier(module), new Identifier(name), tyTags);
            return new TypeTagStruct(structTag);
          }
          if (tokenTy === "GENERIC") {
            if (this.typeTags.length === 0) {
              bail("Can't convert generic type since no typeTags were specified.");
            }
            const idx = parseInt(tokenVal.substring(1), 10);
            return new _TypeTagParser(this.typeTags[idx]).parseTypeTag();
          }
          throw new Error("Invalid type tag.");
        }
      };
      TypeTagParserError = class extends Error {
        constructor(message) {
          super(message);
          this.name = "TypeTagParserError";
        }
      };
      RawTransaction = class _RawTransaction {
        /**
         * RawTransactions contain the metadata and payloads that can be submitted to Aptos chain for execution.
         * RawTransactions must be signed before Aptos chain can execute them.
         *
         * @param sender Account address of the sender.
         * @param sequence_number Sequence number of this transaction. This must match the sequence number stored in
         *   the sender's account at the time the transaction executes.
         * @param payload Instructions for the Aptos Blockchain, including publishing a module,
         *   execute a entry function or execute a script payload.
         * @param max_gas_amount Maximum total gas to spend for this transaction. The account must have more
         *   than this gas or the transaction will be discarded during validation.
         * @param gas_unit_price Price to be paid per gas unit.
         * @param expiration_timestamp_secs The blockchain timestamp at which the blockchain would discard this transaction.
         * @param chain_id The chain ID of the blockchain that this transaction is intended to be run on.
         */
        constructor(sender, sequence_number, payload, max_gas_amount, gas_unit_price, expiration_timestamp_secs, chain_id) {
          this.sender = sender;
          this.sequence_number = sequence_number;
          this.payload = payload;
          this.max_gas_amount = max_gas_amount;
          this.gas_unit_price = gas_unit_price;
          this.expiration_timestamp_secs = expiration_timestamp_secs;
          this.chain_id = chain_id;
        }
        serialize(serializer) {
          this.sender.serialize(serializer);
          serializer.serializeU64(this.sequence_number);
          this.payload.serialize(serializer);
          serializer.serializeU64(this.max_gas_amount);
          serializer.serializeU64(this.gas_unit_price);
          serializer.serializeU64(this.expiration_timestamp_secs);
          this.chain_id.serialize(serializer);
        }
        static deserialize(deserializer) {
          const sender = AccountAddress.deserialize(deserializer);
          const sequence_number = deserializer.deserializeU64();
          const payload = TransactionPayload.deserialize(deserializer);
          const max_gas_amount = deserializer.deserializeU64();
          const gas_unit_price = deserializer.deserializeU64();
          const expiration_timestamp_secs = deserializer.deserializeU64();
          const chain_id = ChainId.deserialize(deserializer);
          return new _RawTransaction(
            sender,
            sequence_number,
            payload,
            max_gas_amount,
            gas_unit_price,
            expiration_timestamp_secs,
            chain_id
          );
        }
      };
      Script = class _Script {
        /**
         * Scripts contain the Move bytecodes payload that can be submitted to Aptos chain for execution.
         * @param code Move bytecode
         * @param ty_args Type arguments that bytecode requires.
         *
         * @example
         * A coin transfer function has one type argument "CoinType".
         * ```
         * public(script) fun transfer<CoinType>(from: &signer, to: address, amount: u64,)
         * ```
         * @param args Arugments to bytecode function.
         *
         * @example
         * A coin transfer function has three arugments "from", "to" and "amount".
         * ```
         * public(script) fun transfer<CoinType>(from: &signer, to: address, amount: u64,)
         * ```
         */
        constructor(code, ty_args, args) {
          this.code = code;
          this.ty_args = ty_args;
          this.args = args;
        }
        serialize(serializer) {
          serializer.serializeBytes(this.code);
          serializeVector(this.ty_args, serializer);
          serializeVector(this.args, serializer);
        }
        static deserialize(deserializer) {
          const code = deserializer.deserializeBytes();
          const ty_args = deserializeVector(deserializer, TypeTag);
          const args = deserializeVector(deserializer, TransactionArgument);
          return new _Script(code, ty_args, args);
        }
      };
      EntryFunction = class _EntryFunction {
        /**
         * Contains the payload to run a function within a module.
         * @param module_name Fully qualified module name. ModuleId consists of account address and module name.
         * @param function_name The function to run.
         * @param ty_args Type arguments that move function requires.
         *
         * @example
         * A coin transfer function has one type argument "CoinType".
         * ```
         * public(script) fun transfer<CoinType>(from: &signer, to: address, amount: u64,)
         * ```
         * @param args Arugments to the move function.
         *
         * @example
         * A coin transfer function has three arugments "from", "to" and "amount".
         * ```
         * public(script) fun transfer<CoinType>(from: &signer, to: address, amount: u64,)
         * ```
         */
        constructor(module_name, function_name, ty_args, args) {
          this.module_name = module_name;
          this.function_name = function_name;
          this.ty_args = ty_args;
          this.args = args;
        }
        /**
         *
         * @param module Fully qualified module name in format "AccountAddress::module_name" e.g. "0x1::coin"
         * @param func Function name
         * @param ty_args Type arguments that move function requires.
         *
         * @example
         * A coin transfer function has one type argument "CoinType".
         * ```
         * public(script) fun transfer<CoinType>(from: &signer, to: address, amount: u64,)
         * ```
         * @param args Arugments to the move function.
         *
         * @example
         * A coin transfer function has three arugments "from", "to" and "amount".
         * ```
         * public(script) fun transfer<CoinType>(from: &signer, to: address, amount: u64,)
         * ```
         * @returns
         */
        static natural(module, func, ty_args, args) {
          return new _EntryFunction(ModuleId.fromStr(module), new Identifier(func), ty_args, args);
        }
        /**
         * `natual` is deprecated, please use `natural`
         *
         * @deprecated.
         */
        static natual(module, func, ty_args, args) {
          return _EntryFunction.natural(module, func, ty_args, args);
        }
        serialize(serializer) {
          this.module_name.serialize(serializer);
          this.function_name.serialize(serializer);
          serializeVector(this.ty_args, serializer);
          serializer.serializeU32AsUleb128(this.args.length);
          this.args.forEach((item) => {
            serializer.serializeBytes(item);
          });
        }
        static deserialize(deserializer) {
          const module_name = ModuleId.deserialize(deserializer);
          const function_name = Identifier.deserialize(deserializer);
          const ty_args = deserializeVector(deserializer, TypeTag);
          const length = deserializer.deserializeUleb128AsU32();
          const list = [];
          for (let i = 0; i < length; i += 1) {
            list.push(deserializer.deserializeBytes());
          }
          const args = list;
          return new _EntryFunction(module_name, function_name, ty_args, args);
        }
      };
      MultiSigTransactionPayload = class _MultiSigTransactionPayload {
        /**
         * Contains the payload to run a multisig account transaction.
         * @param transaction_payload The payload of the multisig transaction. This can only be EntryFunction for now but
         * Script might be supported in the future.
         */
        constructor(transaction_payload) {
          this.transaction_payload = transaction_payload;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(0);
          this.transaction_payload.serialize(serializer);
        }
        static deserialize(deserializer) {
          deserializer.deserializeUleb128AsU32();
          return new _MultiSigTransactionPayload(EntryFunction.deserialize(deserializer));
        }
      };
      MultiSig = class _MultiSig {
        /**
         * Contains the payload to run a multisig account transaction.
         * @param multisig_address The multisig account address the transaction will be executed as.
         * @param transaction_payload The payload of the multisig transaction. This is optional when executing a multisig
         *  transaction whose payload is already stored on chain.
         */
        constructor(multisig_address, transaction_payload) {
          this.multisig_address = multisig_address;
          this.transaction_payload = transaction_payload;
        }
        serialize(serializer) {
          this.multisig_address.serialize(serializer);
          if (this.transaction_payload === void 0) {
            serializer.serializeBool(false);
          } else {
            serializer.serializeBool(true);
            this.transaction_payload.serialize(serializer);
          }
        }
        static deserialize(deserializer) {
          const multisig_address = AccountAddress.deserialize(deserializer);
          const payloadPresent = deserializer.deserializeBool();
          let transaction_payload;
          if (payloadPresent) {
            transaction_payload = MultiSigTransactionPayload.deserialize(deserializer);
          }
          return new _MultiSig(multisig_address, transaction_payload);
        }
      };
      Module = class _Module {
        /**
         * Contains the bytecode of a Move module that can be published to the Aptos chain.
         * @param code Move bytecode of a module.
         */
        constructor(code) {
          this.code = code;
        }
        serialize(serializer) {
          serializer.serializeBytes(this.code);
        }
        static deserialize(deserializer) {
          const code = deserializer.deserializeBytes();
          return new _Module(code);
        }
      };
      ModuleId = class _ModuleId {
        /**
         * Full name of a module.
         * @param address The account address.
         * @param name The name of the module under the account at "address".
         */
        constructor(address, name) {
          this.address = address;
          this.name = name;
        }
        /**
         * Converts a string literal to a ModuleId
         * @param moduleId String literal in format "AccountAddress::module_name", e.g. "0x1::coin"
         * @returns
         */
        static fromStr(moduleId) {
          const parts = moduleId.split("::");
          if (parts.length !== 2) {
            throw new Error("Invalid module id.");
          }
          return new _ModuleId(AccountAddress.fromHex(new HexString(parts[0])), new Identifier(parts[1]));
        }
        serialize(serializer) {
          this.address.serialize(serializer);
          this.name.serialize(serializer);
        }
        static deserialize(deserializer) {
          const address = AccountAddress.deserialize(deserializer);
          const name = Identifier.deserialize(deserializer);
          return new _ModuleId(address, name);
        }
      };
      ChangeSet = class {
        serialize(serializer) {
          throw new Error("Not implemented.");
        }
        static deserialize(deserializer) {
          throw new Error("Not implemented.");
        }
      };
      WriteSet = class {
        serialize(serializer) {
          throw new Error("Not implmented.");
        }
        static deserialize(deserializer) {
          throw new Error("Not implmented.");
        }
      };
      SignedTransaction = class _SignedTransaction {
        /**
         * A SignedTransaction consists of a raw transaction and an authenticator. The authenticator
         * contains a client's public key and the signature of the raw transaction.
         *
         * @see {@link https://aptos.dev/guides/creating-a-signed-transaction/ | Creating a Signed Transaction}
         *
         * @param raw_txn
         * @param authenticator Contains a client's public key and the signature of the raw transaction.
         *   Authenticator has 3 flavors: single signature, multi-signature and multi-agent.
         *   @see authenticator.ts for details.
         */
        constructor(raw_txn, authenticator) {
          this.raw_txn = raw_txn;
          this.authenticator = authenticator;
        }
        serialize(serializer) {
          this.raw_txn.serialize(serializer);
          this.authenticator.serialize(serializer);
        }
        static deserialize(deserializer) {
          const raw_txn = RawTransaction.deserialize(deserializer);
          const authenticator = TransactionAuthenticator.deserialize(deserializer);
          return new _SignedTransaction(raw_txn, authenticator);
        }
      };
      RawTransactionWithData = class {
        static deserialize(deserializer) {
          const index = deserializer.deserializeUleb128AsU32();
          switch (index) {
            case 0:
              return MultiAgentRawTransaction.load(deserializer);
            case 1:
              return FeePayerRawTransaction.load(deserializer);
            default:
              throw new Error(`Unknown variant index for RawTransactionWithData: ${index}`);
          }
        }
      };
      MultiAgentRawTransaction = class _MultiAgentRawTransaction extends RawTransactionWithData {
        constructor(raw_txn, secondary_signer_addresses) {
          super();
          this.raw_txn = raw_txn;
          this.secondary_signer_addresses = secondary_signer_addresses;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(0);
          this.raw_txn.serialize(serializer);
          serializeVector(this.secondary_signer_addresses, serializer);
        }
        static load(deserializer) {
          const rawTxn = RawTransaction.deserialize(deserializer);
          const secondarySignerAddresses = deserializeVector(deserializer, AccountAddress);
          return new _MultiAgentRawTransaction(rawTxn, secondarySignerAddresses);
        }
      };
      FeePayerRawTransaction = class _FeePayerRawTransaction extends RawTransactionWithData {
        constructor(raw_txn, secondary_signer_addresses, fee_payer_address) {
          super();
          this.raw_txn = raw_txn;
          this.secondary_signer_addresses = secondary_signer_addresses;
          this.fee_payer_address = fee_payer_address;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(1);
          this.raw_txn.serialize(serializer);
          serializeVector(this.secondary_signer_addresses, serializer);
          this.fee_payer_address.serialize(serializer);
        }
        static load(deserializer) {
          const rawTxn = RawTransaction.deserialize(deserializer);
          const secondarySignerAddresses = deserializeVector(deserializer, AccountAddress);
          const feePayerAddress = AccountAddress.deserialize(deserializer);
          return new _FeePayerRawTransaction(rawTxn, secondarySignerAddresses, feePayerAddress);
        }
      };
      TransactionPayload = class {
        static deserialize(deserializer) {
          const index = deserializer.deserializeUleb128AsU32();
          switch (index) {
            case 0:
              return TransactionPayloadScript.load(deserializer);
            case 2:
              return TransactionPayloadEntryFunction.load(deserializer);
            case 3:
              return TransactionPayloadMultisig.load(deserializer);
            default:
              throw new Error(`Unknown variant index for TransactionPayload: ${index}`);
          }
        }
      };
      TransactionPayloadScript = class _TransactionPayloadScript extends TransactionPayload {
        constructor(value) {
          super();
          this.value = value;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(0);
          this.value.serialize(serializer);
        }
        static load(deserializer) {
          const value = Script.deserialize(deserializer);
          return new _TransactionPayloadScript(value);
        }
      };
      TransactionPayloadEntryFunction = class _TransactionPayloadEntryFunction extends TransactionPayload {
        constructor(value) {
          super();
          this.value = value;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(2);
          this.value.serialize(serializer);
        }
        static load(deserializer) {
          const value = EntryFunction.deserialize(deserializer);
          return new _TransactionPayloadEntryFunction(value);
        }
      };
      TransactionPayloadMultisig = class _TransactionPayloadMultisig extends TransactionPayload {
        constructor(value) {
          super();
          this.value = value;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(3);
          this.value.serialize(serializer);
        }
        static load(deserializer) {
          const value = MultiSig.deserialize(deserializer);
          return new _TransactionPayloadMultisig(value);
        }
      };
      ChainId = class _ChainId {
        constructor(value) {
          this.value = value;
        }
        serialize(serializer) {
          serializer.serializeU8(this.value);
        }
        static deserialize(deserializer) {
          const value = deserializer.deserializeU8();
          return new _ChainId(value);
        }
      };
      TransactionArgument = class {
        static deserialize(deserializer) {
          const index = deserializer.deserializeUleb128AsU32();
          switch (index) {
            case 0:
              return TransactionArgumentU8.load(deserializer);
            case 1:
              return TransactionArgumentU64.load(deserializer);
            case 2:
              return TransactionArgumentU128.load(deserializer);
            case 3:
              return TransactionArgumentAddress.load(deserializer);
            case 4:
              return TransactionArgumentU8Vector.load(deserializer);
            case 5:
              return TransactionArgumentBool.load(deserializer);
            case 6:
              return TransactionArgumentU16.load(deserializer);
            case 7:
              return TransactionArgumentU32.load(deserializer);
            case 8:
              return TransactionArgumentU256.load(deserializer);
            default:
              throw new Error(`Unknown variant index for TransactionArgument: ${index}`);
          }
        }
      };
      TransactionArgumentU8 = class _TransactionArgumentU8 extends TransactionArgument {
        constructor(value) {
          super();
          this.value = value;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(0);
          serializer.serializeU8(this.value);
        }
        static load(deserializer) {
          const value = deserializer.deserializeU8();
          return new _TransactionArgumentU8(value);
        }
      };
      TransactionArgumentU16 = class _TransactionArgumentU16 extends TransactionArgument {
        constructor(value) {
          super();
          this.value = value;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(6);
          serializer.serializeU16(this.value);
        }
        static load(deserializer) {
          const value = deserializer.deserializeU16();
          return new _TransactionArgumentU16(value);
        }
      };
      TransactionArgumentU32 = class _TransactionArgumentU32 extends TransactionArgument {
        constructor(value) {
          super();
          this.value = value;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(7);
          serializer.serializeU32(this.value);
        }
        static load(deserializer) {
          const value = deserializer.deserializeU32();
          return new _TransactionArgumentU32(value);
        }
      };
      TransactionArgumentU64 = class _TransactionArgumentU64 extends TransactionArgument {
        constructor(value) {
          super();
          this.value = value;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(1);
          serializer.serializeU64(this.value);
        }
        static load(deserializer) {
          const value = deserializer.deserializeU64();
          return new _TransactionArgumentU64(value);
        }
      };
      TransactionArgumentU128 = class _TransactionArgumentU128 extends TransactionArgument {
        constructor(value) {
          super();
          this.value = value;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(2);
          serializer.serializeU128(this.value);
        }
        static load(deserializer) {
          const value = deserializer.deserializeU128();
          return new _TransactionArgumentU128(value);
        }
      };
      TransactionArgumentU256 = class _TransactionArgumentU256 extends TransactionArgument {
        constructor(value) {
          super();
          this.value = value;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(8);
          serializer.serializeU256(this.value);
        }
        static load(deserializer) {
          const value = deserializer.deserializeU256();
          return new _TransactionArgumentU256(value);
        }
      };
      TransactionArgumentAddress = class _TransactionArgumentAddress extends TransactionArgument {
        constructor(value) {
          super();
          this.value = value;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(3);
          this.value.serialize(serializer);
        }
        static load(deserializer) {
          const value = AccountAddress.deserialize(deserializer);
          return new _TransactionArgumentAddress(value);
        }
      };
      TransactionArgumentU8Vector = class _TransactionArgumentU8Vector extends TransactionArgument {
        constructor(value) {
          super();
          this.value = value;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(4);
          serializer.serializeBytes(this.value);
        }
        static load(deserializer) {
          const value = deserializer.deserializeBytes();
          return new _TransactionArgumentU8Vector(value);
        }
      };
      TransactionArgumentBool = class _TransactionArgumentBool extends TransactionArgument {
        constructor(value) {
          super();
          this.value = value;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(5);
          serializer.serializeBool(this.value);
        }
        static load(deserializer) {
          const value = deserializer.deserializeBool();
          return new _TransactionArgumentBool(value);
        }
      };
      Transaction = class {
        getHashSalt() {
          const hash2 = sha3_256.create();
          hash2.update("APTOS::Transaction");
          return hash2.digest();
        }
        static deserialize(deserializer) {
          const index = deserializer.deserializeUleb128AsU32();
          switch (index) {
            case 0:
              return UserTransaction.load(deserializer);
            default:
              throw new Error(`Unknown variant index for Transaction: ${index}`);
          }
        }
      };
      UserTransaction = class _UserTransaction extends Transaction {
        constructor(value) {
          super();
          this.value = value;
        }
        hash() {
          const hash2 = sha3_256.create();
          hash2.update(this.getHashSalt());
          hash2.update(bcsToBytes(this));
          return hash2.digest();
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(0);
          this.value.serialize(serializer);
        }
        static load(deserializer) {
          return new _UserTransaction(SignedTransaction.deserialize(deserializer));
        }
      };
      TypeArgumentABI = class _TypeArgumentABI {
        /**
         * Constructs a TypeArgumentABI instance.
         * @param name
         */
        constructor(name) {
          this.name = name;
        }
        serialize(serializer) {
          serializer.serializeStr(this.name);
        }
        static deserialize(deserializer) {
          const name = deserializer.deserializeStr();
          return new _TypeArgumentABI(name);
        }
      };
      ArgumentABI = class _ArgumentABI {
        /**
         * Constructs an ArgumentABI instance.
         * @param name
         * @param type_tag
         */
        constructor(name, type_tag) {
          this.name = name;
          this.type_tag = type_tag;
        }
        serialize(serializer) {
          serializer.serializeStr(this.name);
          this.type_tag.serialize(serializer);
        }
        static deserialize(deserializer) {
          const name = deserializer.deserializeStr();
          const typeTag = TypeTag.deserialize(deserializer);
          return new _ArgumentABI(name, typeTag);
        }
      };
      ScriptABI = class {
        static deserialize(deserializer) {
          const index = deserializer.deserializeUleb128AsU32();
          switch (index) {
            case 0:
              return TransactionScriptABI.load(deserializer);
            case 1:
              return EntryFunctionABI.load(deserializer);
            default:
              throw new Error(`Unknown variant index for TransactionPayload: ${index}`);
          }
        }
      };
      TransactionScriptABI = class _TransactionScriptABI extends ScriptABI {
        /**
         * Constructs a TransactionScriptABI instance.
         * @param name Entry function name
         * @param doc
         * @param code
         * @param ty_args
         * @param args
         */
        constructor(name, doc, code, ty_args, args) {
          super();
          this.name = name;
          this.doc = doc;
          this.code = code;
          this.ty_args = ty_args;
          this.args = args;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(0);
          serializer.serializeStr(this.name);
          serializer.serializeStr(this.doc);
          serializer.serializeBytes(this.code);
          serializeVector(this.ty_args, serializer);
          serializeVector(this.args, serializer);
        }
        static load(deserializer) {
          const name = deserializer.deserializeStr();
          const doc = deserializer.deserializeStr();
          const code = deserializer.deserializeBytes();
          const tyArgs = deserializeVector(deserializer, TypeArgumentABI);
          const args = deserializeVector(deserializer, ArgumentABI);
          return new _TransactionScriptABI(name, doc, code, tyArgs, args);
        }
      };
      EntryFunctionABI = class _EntryFunctionABI extends ScriptABI {
        /**
         * Constructs a EntryFunctionABI instance
         * @param name
         * @param module_name Fully qualified module id
         * @param doc
         * @param ty_args
         * @param args
         */
        constructor(name, module_name, doc, ty_args, args) {
          super();
          this.name = name;
          this.module_name = module_name;
          this.doc = doc;
          this.ty_args = ty_args;
          this.args = args;
        }
        serialize(serializer) {
          serializer.serializeU32AsUleb128(1);
          serializer.serializeStr(this.name);
          this.module_name.serialize(serializer);
          serializer.serializeStr(this.doc);
          serializeVector(this.ty_args, serializer);
          serializeVector(this.args, serializer);
        }
        static load(deserializer) {
          const name = deserializer.deserializeStr();
          const moduleName = ModuleId.deserialize(deserializer);
          const doc = deserializer.deserializeStr();
          const tyArgs = deserializeVector(deserializer, TypeArgumentABI);
          const args = deserializeVector(deserializer, ArgumentABI);
          return new _EntryFunctionABI(name, moduleName, doc, tyArgs, args);
        }
      };
      _AuthenticationKey = class _AuthenticationKey2 {
        constructor(bytes2) {
          if (bytes2.length !== _AuthenticationKey2.LENGTH) {
            throw new Error("Expected a byte array of length 32");
          }
          this.bytes = bytes2;
        }
        /**
         * Converts a K-of-N MultiEd25519PublicKey to AuthenticationKey with:
         * `auth_key = sha3-256(p_1 | … | p_n | K | 0x01)`. `K` represents the K-of-N required for
         * authenticating the transaction. `0x01` is the 1-byte scheme for multisig.
         */
        static fromMultiEd25519PublicKey(publicKey) {
          const pubKeyBytes = publicKey.toBytes();
          const bytes2 = new Uint8Array(pubKeyBytes.length + 1);
          bytes2.set(pubKeyBytes);
          bytes2.set([_AuthenticationKey2.MULTI_ED25519_SCHEME], pubKeyBytes.length);
          const hash2 = sha3_256.create();
          hash2.update(bytes2);
          return new _AuthenticationKey2(hash2.digest());
        }
        static fromEd25519PublicKey(publicKey) {
          const pubKeyBytes = publicKey.value;
          const bytes2 = new Uint8Array(pubKeyBytes.length + 1);
          bytes2.set(pubKeyBytes);
          bytes2.set([_AuthenticationKey2.ED25519_SCHEME], pubKeyBytes.length);
          const hash2 = sha3_256.create();
          hash2.update(bytes2);
          return new _AuthenticationKey2(hash2.digest());
        }
        /**
         * Derives an account address from AuthenticationKey. Since current AccountAddress is 32 bytes,
         * AuthenticationKey bytes are directly translated to AccountAddress.
         */
        derivedAddress() {
          return HexString.fromUint8Array(this.bytes);
        }
      };
      _AuthenticationKey.LENGTH = 32;
      _AuthenticationKey.MULTI_ED25519_SCHEME = 1;
      _AuthenticationKey.ED25519_SCHEME = 0;
      _AuthenticationKey.DERIVE_RESOURCE_ACCOUNT_SCHEME = 255;
      AuthenticationKey = _AuthenticationKey;
      RotationProofChallenge = class {
        constructor(accountAddress, moduleName, structName, sequenceNumber, originator, currentAuthKey, newPublicKey) {
          this.accountAddress = accountAddress;
          this.moduleName = moduleName;
          this.structName = structName;
          this.sequenceNumber = sequenceNumber;
          this.originator = originator;
          this.currentAuthKey = currentAuthKey;
          this.newPublicKey = newPublicKey;
        }
        serialize(serializer) {
          this.accountAddress.serialize(serializer);
          serializer.serializeStr(this.moduleName);
          serializer.serializeStr(this.structName);
          serializer.serializeU64(this.sequenceNumber);
          this.originator.serialize(serializer);
          this.currentAuthKey.serialize(serializer);
          serializer.serializeBytes(this.newPublicKey);
        }
      };
      _AptosAccount = class _AptosAccount2 {
        static fromAptosAccountObject(obj) {
          return new _AptosAccount2(HexString.ensure(obj.privateKeyHex).toUint8Array(), obj.address);
        }
        /**
         * Check's if the derive path is valid
         */
        static isValidPath(path) {
          return /^m\/44'\/637'\/[0-9]+'\/[0-9]+'\/[0-9]+'+$/.test(path);
        }
        /**
         * Creates new account with bip44 path and mnemonics,
         * @param path. (e.g. m/44'/637'/0'/0'/0')
         * Detailed description: {@link https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki}
         * @param mnemonics.
         * @returns AptosAccount
         */
        static fromDerivePath(path, mnemonics) {
          if (!_AptosAccount2.isValidPath(path)) {
            throw new Error("Invalid derivation path");
          }
          const normalizeMnemonics = mnemonics.trim().split(/\s+/).map((part) => part.toLowerCase()).join(" ");
          const { key } = derivePath(path, bytesToHex(mnemonicToSeedSync(normalizeMnemonics)));
          return new _AptosAccount2(key);
        }
        /**
         * Creates new account instance. Constructor allows passing in an address,
         * to handle account key rotation, where auth_key != public_key
         * @param privateKeyBytes  Private key from which account key pair will be generated.
         * If not specified, new key pair is going to be created.
         * @param address Account address (e.g. 0xe8012714cd17606cee7188a2a365eef3fe760be598750678c8c5954eb548a591).
         * If not specified, a new one will be generated from public key
         */
        constructor(privateKeyBytes, address) {
          if (privateKeyBytes) {
            this.signingKey = import_tweetnacl.default.sign.keyPair.fromSeed(privateKeyBytes.slice(0, 32));
          } else {
            this.signingKey = import_tweetnacl.default.sign.keyPair();
          }
          this.accountAddress = HexString.ensure(address || this.authKey().hex());
        }
        /**
         * This is the key by which Aptos account is referenced.
         * It is the 32-byte of the SHA-3 256 cryptographic hash
         * of the public key(s) concatenated with a signature scheme identifier byte
         * @returns Address associated with the given account
         */
        address() {
          return this.accountAddress;
        }
        authKey() {
          const pubKey = new Ed25519PublicKey(this.signingKey.publicKey);
          const authKey = AuthenticationKey.fromEd25519PublicKey(pubKey);
          return authKey.derivedAddress();
        }
        /**
         * Takes source address and seeds and returns the resource account address
         * @param sourceAddress Address used to derive the resource account
         * @param seed The seed bytes
         * @returns The resource account address
         */
        static getResourceAccountAddress(sourceAddress, seed) {
          const source = bcsToBytes(AccountAddress.fromHex(sourceAddress));
          const bytes2 = new Uint8Array([...source, ...seed, AuthenticationKey.DERIVE_RESOURCE_ACCOUNT_SCHEME]);
          const hash2 = sha3_256.create();
          hash2.update(bytes2);
          return HexString.fromUint8Array(hash2.digest());
        }
        /**
         * Takes creator address and collection name and returns the collection id hash.
         * Collection id hash are generated as sha256 hash of (`creator_address::collection_name`)
         *
         * @param creatorAddress Collection creator address
         * @param collectionName The collection name
         * @returns The collection id hash
         */
        static getCollectionID(creatorAddress, collectionName) {
          const seed = new TextEncoder().encode(`${creatorAddress}::${collectionName}`);
          const hash2 = sha256.create();
          hash2.update(seed);
          return HexString.fromUint8Array(hash2.digest());
        }
        /**
         * This key is generated with Ed25519 scheme.
         * Public key is used to check a signature of transaction, signed by given account
         * @returns The public key for the associated account
         */
        pubKey() {
          return HexString.fromUint8Array(this.signingKey.publicKey);
        }
        /**
         * Signs specified `buffer` with account's private key
         * @param buffer A buffer to sign
         * @returns A signature HexString
         */
        signBuffer(buffer) {
          const signature = import_tweetnacl.default.sign.detached(buffer, this.signingKey.secretKey);
          return HexString.fromUint8Array(signature);
        }
        /**
         * Signs specified `hexString` with account's private key
         * @param hexString A regular string or HexString to sign
         * @returns A signature HexString
         */
        signHexString(hexString) {
          const toSign = HexString.ensure(hexString).toUint8Array();
          return this.signBuffer(toSign);
        }
        /**
         * Verifies the signature of the message with the public key of the account
         * @param message a signed message
         * @param signature the signature of the message
         */
        verifySignature(message, signature) {
          const rawMessage = HexString.ensure(message).toUint8Array();
          const rawSignature = HexString.ensure(signature).toUint8Array();
          return import_tweetnacl.default.sign.detached.verify(rawMessage, rawSignature, this.signingKey.publicKey);
        }
        /**
         * Derives account address, public key and private key
         * @returns AptosAccountObject instance.
         * @example An example of the returned AptosAccountObject object
         * ```
         * {
         *    address: "0xe8012714cd17606cee7188a2a365eef3fe760be598750678c8c5954eb548a591",
         *    publicKeyHex: "0xf56d8524faf79fbc0f48c13aeed3b0ce5dd376b4db93b8130a107c0a5e04ba04",
         *    privateKeyHex: `0x009c9f7c992a06cfafe916f125d8adb7a395fca243e264a8e56a4b3e6accf940
         *      d2b11e9ece3049ce60e3c7b4a1c58aebfa9298e29a30a58a67f1998646135204`
         * }
         * ```
         */
        toPrivateKeyObject() {
          return {
            address: this.address().hex(),
            publicKeyHex: this.pubKey().hex(),
            privateKeyHex: HexString.fromUint8Array(this.signingKey.secretKey.slice(0, 32)).hex()
          };
        }
      };
      __decorateClass([
        Memoize()
      ], _AptosAccount.prototype, "authKey", 1);
      AptosAccount = _AptosAccount;
      CurrentTokenOwnershipFieldsFragmentDoc = `
    fragment CurrentTokenOwnershipFields on current_token_ownerships_v2 {
  token_standard
  token_properties_mutated_v1
  token_data_id
  table_type_v1
  storage_id
  property_version_v1
  owner_address
  last_transaction_version
  last_transaction_timestamp
  is_soulbound_v2
  is_fungible_v2
  amount
  current_token_data {
    collection_id
    description
    is_fungible_v2
    largest_property_version_v1
    last_transaction_timestamp
    last_transaction_version
    maximum
    supply
    token_data_id
    token_name
    token_properties
    token_standard
    token_uri
    current_collection {
      collection_id
      collection_name
      creator_address
      current_supply
      description
      last_transaction_timestamp
      last_transaction_version
      max_supply
      mutable_description
      mutable_uri
      table_handle_v1
      token_standard
      total_minted_v2
      uri
    }
  }
}
    `;
      TokenDataFieldsFragmentDoc = `
    fragment TokenDataFields on current_token_datas {
  creator_address
  collection_name
  description
  metadata_uri
  name
  token_data_id_hash
  collection_data_id_hash
}
    `;
      CollectionDataFieldsFragmentDoc = `
    fragment CollectionDataFields on current_collection_datas {
  metadata_uri
  supply
  description
  collection_name
  collection_data_id_hash
  table_handle
  creator_address
}
    `;
      TokenActivitiesFieldsFragmentDoc = `
    fragment TokenActivitiesFields on token_activities_v2 {
  after_value
  before_value
  entry_function_id_str
  event_account_address
  event_index
  from_address
  is_fungible_v2
  property_version_v1
  to_address
  token_amount
  token_data_id
  token_standard
  transaction_timestamp
  transaction_version
  type
}
    `;
      GetAccountCoinsDataCount = `
    query getAccountCoinsDataCount($address: String) {
  current_fungible_asset_balances_aggregate(
    where: {owner_address: {_eq: $address}}
  ) {
    aggregate {
      count
    }
  }
}
    `;
      GetAccountCoinsData = `
    query getAccountCoinsData($where_condition: current_fungible_asset_balances_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_fungible_asset_balances_order_by!]) {
  current_fungible_asset_balances(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    amount
    asset_type
    is_frozen
    is_primary
    last_transaction_timestamp
    last_transaction_version
    owner_address
    storage_id
    token_standard
    metadata {
      token_standard
      symbol
      supply_aggregator_table_key_v1
      supply_aggregator_table_handle_v1
      project_uri
      name
      last_transaction_version
      last_transaction_timestamp
      icon_uri
      decimals
      creator_address
      asset_type
    }
  }
}
    `;
      GetAccountCurrentTokens = `
    query getAccountCurrentTokens($address: String!, $offset: Int, $limit: Int) {
  current_token_ownerships(
    where: {owner_address: {_eq: $address}, amount: {_gt: 0}}
    order_by: [{last_transaction_version: desc}, {creator_address: asc}, {collection_name: asc}, {name: asc}]
    offset: $offset
    limit: $limit
  ) {
    amount
    current_token_data {
      ...TokenDataFields
    }
    current_collection_data {
      ...CollectionDataFields
    }
    last_transaction_version
    property_version
  }
}
    ${TokenDataFieldsFragmentDoc}
${CollectionDataFieldsFragmentDoc}`;
      GetAccountTokensCount = `
    query getAccountTokensCount($where_condition: current_token_ownerships_v2_bool_exp, $offset: Int, $limit: Int) {
  current_token_ownerships_v2_aggregate(
    where: $where_condition
    offset: $offset
    limit: $limit
  ) {
    aggregate {
      count
    }
  }
}
    `;
      GetAccountTransactionsCount = `
    query getAccountTransactionsCount($address: String) {
  account_transactions_aggregate(where: {account_address: {_eq: $address}}) {
    aggregate {
      count
    }
  }
}
    `;
      GetAccountTransactionsData = `
    query getAccountTransactionsData($where_condition: account_transactions_bool_exp!, $offset: Int, $limit: Int, $order_by: [account_transactions_order_by!]) {
  account_transactions(
    where: $where_condition
    order_by: $order_by
    limit: $limit
    offset: $offset
  ) {
    token_activities_v2 {
      ...TokenActivitiesFields
    }
    transaction_version
    account_address
  }
}
    ${TokenActivitiesFieldsFragmentDoc}`;
      GetCollectionData = `
    query getCollectionData($where_condition: current_collections_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_collections_v2_order_by!]) {
  current_collections_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    collection_id
    collection_name
    creator_address
    current_supply
    description
    last_transaction_timestamp
    last_transaction_version
    max_supply
    mutable_description
    mutable_uri
    table_handle_v1
    token_standard
    total_minted_v2
    uri
  }
}
    `;
      GetCollectionsWithOwnedTokens = `
    query getCollectionsWithOwnedTokens($where_condition: current_collection_ownership_v2_view_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_collection_ownership_v2_view_order_by!]) {
  current_collection_ownership_v2_view(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    current_collection {
      collection_id
      collection_name
      creator_address
      current_supply
      description
      last_transaction_timestamp
      last_transaction_version
      mutable_description
      max_supply
      mutable_uri
      table_handle_v1
      token_standard
      total_minted_v2
      uri
    }
    collection_id
    collection_name
    collection_uri
    creator_address
    distinct_tokens
    last_transaction_version
    owner_address
    single_token_uri
  }
}
    `;
      GetCurrentObjects = `
    query getCurrentObjects($where_condition: current_objects_bool_exp, $offset: Int, $limit: Int, $order_by: [current_objects_order_by!]) {
  current_objects(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    allow_ungated_transfer
    state_key_hash
    owner_address
    object_address
    last_transaction_version
    last_guid_creation_num
    is_deleted
  }
}
    `;
      GetDelegatedStakingActivities = `
    query getDelegatedStakingActivities($delegatorAddress: String, $poolAddress: String) {
  delegated_staking_activities(
    where: {delegator_address: {_eq: $delegatorAddress}, pool_address: {_eq: $poolAddress}}
  ) {
    amount
    delegator_address
    event_index
    event_type
    pool_address
    transaction_version
  }
}
    `;
      GetIndexerLedgerInfo = `
    query getIndexerLedgerInfo {
  ledger_infos {
    chain_id
  }
}
    `;
      GetNumberOfDelegators = `
    query getNumberOfDelegators($poolAddress: String) {
  num_active_delegator_per_pool(
    where: {pool_address: {_eq: $poolAddress}, num_active_delegator: {_gt: "0"}}
    distinct_on: pool_address
  ) {
    num_active_delegator
    pool_address
  }
}
    `;
      GetOwnedTokens = `
    query getOwnedTokens($where_condition: current_token_ownerships_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_token_ownerships_v2_order_by!]) {
  current_token_ownerships_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    ...CurrentTokenOwnershipFields
  }
}
    ${CurrentTokenOwnershipFieldsFragmentDoc}`;
      GetOwnedTokensByTokenData = `
    query getOwnedTokensByTokenData($where_condition: current_token_ownerships_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_token_ownerships_v2_order_by!]) {
  current_token_ownerships_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    ...CurrentTokenOwnershipFields
  }
}
    ${CurrentTokenOwnershipFieldsFragmentDoc}`;
      GetTokenActivities = `
    query getTokenActivities($where_condition: token_activities_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [token_activities_v2_order_by!]) {
  token_activities_v2(
    where: $where_condition
    order_by: $order_by
    offset: $offset
    limit: $limit
  ) {
    ...TokenActivitiesFields
  }
}
    ${TokenActivitiesFieldsFragmentDoc}`;
      GetTokenActivitiesCount = `
    query getTokenActivitiesCount($token_id: String) {
  token_activities_v2_aggregate(where: {token_data_id: {_eq: $token_id}}) {
    aggregate {
      count
    }
  }
}
    `;
      GetTokenCurrentOwnerData = `
    query getTokenCurrentOwnerData($where_condition: current_token_ownerships_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_token_ownerships_v2_order_by!]) {
  current_token_ownerships_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    ...CurrentTokenOwnershipFields
  }
}
    ${CurrentTokenOwnershipFieldsFragmentDoc}`;
      GetTokenData = `
    query getTokenData($where_condition: current_token_datas_v2_bool_exp, $offset: Int, $limit: Int, $order_by: [current_token_datas_v2_order_by!]) {
  current_token_datas_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    collection_id
    description
    is_fungible_v2
    largest_property_version_v1
    last_transaction_timestamp
    last_transaction_version
    maximum
    supply
    token_data_id
    token_name
    token_properties
    token_standard
    token_uri
    current_collection {
      collection_id
      collection_name
      creator_address
      current_supply
      description
      last_transaction_timestamp
      last_transaction_version
      max_supply
      mutable_description
      mutable_uri
      table_handle_v1
      token_standard
      total_minted_v2
      uri
    }
  }
}
    `;
      GetTokenOwnedFromCollection = `
    query getTokenOwnedFromCollection($where_condition: current_token_ownerships_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_token_ownerships_v2_order_by!]) {
  current_token_ownerships_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    ...CurrentTokenOwnershipFields
  }
}
    ${CurrentTokenOwnershipFieldsFragmentDoc}`;
      GetTokenOwnersData = `
    query getTokenOwnersData($where_condition: current_token_ownerships_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_token_ownerships_v2_order_by!]) {
  current_token_ownerships_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    ...CurrentTokenOwnershipFields
  }
}
    ${CurrentTokenOwnershipFieldsFragmentDoc}`;
      GetTopUserTransactions = `
    query getTopUserTransactions($limit: Int) {
  user_transactions(limit: $limit, order_by: {version: desc}) {
    version
  }
}
    `;
      GetUserTransactions = `
    query getUserTransactions($where_condition: user_transactions_bool_exp!, $offset: Int, $limit: Int, $order_by: [user_transactions_order_by!]) {
  user_transactions(
    order_by: $order_by
    where: $where_condition
    limit: $limit
    offset: $offset
  ) {
    version
  }
}
    `;
      RAW_TRANSACTION_SALT = "APTOS::RawTransaction";
      RAW_TRANSACTION_WITH_DATA_SALT = "APTOS::RawTransactionWithData";
      TransactionBuilder = class {
        constructor(signingFunction, rawTxnBuilder) {
          this.rawTxnBuilder = rawTxnBuilder;
          this.signingFunction = signingFunction;
        }
        /**
         * Builds a RawTransaction. Relays the call to TransactionBuilderABI.build
         * @param func
         * @param ty_tags
         * @param args
         */
        build(func, ty_tags, args) {
          if (!this.rawTxnBuilder) {
            throw new Error("this.rawTxnBuilder doesn't exist.");
          }
          return this.rawTxnBuilder.build(func, ty_tags, args);
        }
        /** Generates a Signing Message out of a raw transaction. */
        static getSigningMessage(rawTxn) {
          const hash2 = sha3_256.create();
          if (rawTxn instanceof RawTransaction) {
            hash2.update(RAW_TRANSACTION_SALT);
          } else if (rawTxn instanceof MultiAgentRawTransaction) {
            hash2.update(RAW_TRANSACTION_WITH_DATA_SALT);
          } else if (rawTxn instanceof FeePayerRawTransaction) {
            hash2.update(RAW_TRANSACTION_WITH_DATA_SALT);
          } else {
            throw new Error("Unknown transaction type.");
          }
          const prefix = hash2.digest();
          const body = bcsToBytes(rawTxn);
          const mergedArray = new Uint8Array(prefix.length + body.length);
          mergedArray.set(prefix);
          mergedArray.set(body, prefix.length);
          return mergedArray;
        }
      };
      TransactionBuilderEd25519 = class extends TransactionBuilder {
        constructor(signingFunction, publicKey, rawTxnBuilder) {
          super(signingFunction, rawTxnBuilder);
          this.publicKey = publicKey;
        }
        rawToSigned(rawTxn) {
          const signingMessage = TransactionBuilder.getSigningMessage(rawTxn);
          const signature = this.signingFunction(signingMessage);
          const authenticator = new TransactionAuthenticatorEd25519(
            new Ed25519PublicKey(this.publicKey),
            signature
          );
          return new SignedTransaction(rawTxn, authenticator);
        }
        /** Signs a raw transaction and returns a bcs serialized transaction. */
        sign(rawTxn) {
          return bcsToBytes(this.rawToSigned(rawTxn));
        }
      };
      TransactionBuilderMultiEd25519 = class extends TransactionBuilder {
        constructor(signingFunction, publicKey) {
          super(signingFunction);
          this.publicKey = publicKey;
        }
        rawToSigned(rawTxn) {
          const signingMessage = TransactionBuilder.getSigningMessage(rawTxn);
          const signature = this.signingFunction(signingMessage);
          const authenticator = new TransactionAuthenticatorMultiEd25519(this.publicKey, signature);
          return new SignedTransaction(rawTxn, authenticator);
        }
        /** Signs a raw transaction and returns a bcs serialized transaction. */
        sign(rawTxn) {
          return bcsToBytes(this.rawToSigned(rawTxn));
        }
      };
      TransactionBuilderABI = class _TransactionBuilderABI {
        /**
         * Constructs a TransactionBuilderABI instance
         * @param abis List of binary ABIs.
         * @param builderConfig Configs for creating a raw transaction.
         */
        constructor(abis, builderConfig) {
          this.abiMap = /* @__PURE__ */ new Map();
          abis.forEach((abi) => {
            const deserializer = new Deserializer(abi);
            const scriptABI = ScriptABI.deserialize(deserializer);
            let k2;
            if (scriptABI instanceof EntryFunctionABI) {
              const funcABI = scriptABI;
              const { address: addr, name: moduleName } = funcABI.module_name;
              k2 = `${HexString.fromUint8Array(addr.address).toShortString()}::${moduleName.value}::${funcABI.name}`;
            } else {
              const funcABI = scriptABI;
              k2 = funcABI.name;
            }
            if (this.abiMap.has(k2)) {
              throw new Error("Found conflicting ABI interfaces");
            }
            this.abiMap.set(k2, scriptABI);
          });
          this.builderConfig = {
            maxGasAmount: BigInt(DEFAULT_MAX_GAS_AMOUNT),
            expSecFromNow: DEFAULT_TXN_EXP_SEC_FROM_NOW,
            ...builderConfig
          };
        }
        static toBCSArgs(abiArgs, args) {
          if (abiArgs.length !== args.length) {
            throw new Error("Wrong number of args provided.");
          }
          return args.map((arg, i) => {
            const serializer = new Serializer();
            serializeArg(arg, abiArgs[i].type_tag, serializer);
            return serializer.getBytes();
          });
        }
        static toTransactionArguments(abiArgs, args) {
          if (abiArgs.length !== args.length) {
            throw new Error("Wrong number of args provided.");
          }
          return args.map((arg, i) => argToTransactionArgument(arg, abiArgs[i].type_tag));
        }
        setSequenceNumber(seqNumber) {
          this.builderConfig.sequenceNumber = BigInt(seqNumber);
        }
        /**
         * Builds a TransactionPayload. For dApps, chain ID and account sequence numbers are only known to the wallet.
         * Instead of building a RawTransaction (requires chainID and sequenceNumber), dApps can build a TransactionPayload
         * and pass the payload to the wallet for signing and sending.
         * @param func Fully qualified func names, e.g. 0x1::aptos_account::transfer
         * @param ty_tags TypeTag strings
         * @param args Function arguments
         * @returns TransactionPayload
         */
        buildTransactionPayload(func, ty_tags, args) {
          const typeTags = ty_tags.map((ty_arg) => new TypeTagParser(ty_arg).parseTypeTag());
          let payload;
          if (!this.abiMap.has(func)) {
            throw new Error(`Cannot find function: ${func}`);
          }
          const scriptABI = this.abiMap.get(func);
          if (scriptABI instanceof EntryFunctionABI) {
            const funcABI = scriptABI;
            const bcsArgs = _TransactionBuilderABI.toBCSArgs(funcABI.args, args);
            payload = new TransactionPayloadEntryFunction(
              new EntryFunction(funcABI.module_name, new Identifier(funcABI.name), typeTags, bcsArgs)
            );
          } else if (scriptABI instanceof TransactionScriptABI) {
            const funcABI = scriptABI;
            const scriptArgs = _TransactionBuilderABI.toTransactionArguments(funcABI.args, args);
            payload = new TransactionPayloadScript(new Script(funcABI.code, typeTags, scriptArgs));
          } else {
            throw new Error("Unknown ABI format.");
          }
          return payload;
        }
        /**
         * Builds a RawTransaction
         * @param func Fully qualified func names, e.g. 0x1::aptos_account::transfer
         * @param ty_tags TypeTag strings.
         * @example Below are valid value examples
         * ```
         * // Structs are in format `AccountAddress::ModuleName::StructName`
         * 0x1::aptos_coin::AptosCoin
         * // Vectors are in format `vector<other_tag_string>`
         * vector<0x1::aptos_coin::AptosCoin>
         * bool
         * u8
         * u16
         * u32
         * u64
         * u128
         * u256
         * address
         * ```
         * @param args Function arguments
         * @returns RawTransaction
         */
        build(func, ty_tags, args) {
          const { sender, sequenceNumber, gasUnitPrice, maxGasAmount, expSecFromNow, chainId } = this.builderConfig;
          if (!gasUnitPrice) {
            throw new Error("No gasUnitPrice provided.");
          }
          const senderAccount = sender instanceof AccountAddress ? sender : AccountAddress.fromHex(sender);
          const expTimestampSec = BigInt(Math.floor(Date.now() / 1e3) + Number(expSecFromNow));
          const payload = this.buildTransactionPayload(func, ty_tags, args);
          if (payload) {
            return new RawTransaction(
              senderAccount,
              BigInt(sequenceNumber),
              payload,
              BigInt(maxGasAmount),
              BigInt(gasUnitPrice),
              expTimestampSec,
              new ChainId(Number(chainId))
            );
          }
          throw new Error("Invalid ABI.");
        }
      };
      TransactionBuilderRemoteABI = class {
        // We don't want the builder to depend on the actual AptosClient. There might be circular dependencies.
        constructor(aptosClient2, builderConfig) {
          this.aptosClient = aptosClient2;
          this.builderConfig = builderConfig;
        }
        async fetchABI(addr) {
          const modules = await this.aptosClient.getAccountModules(addr);
          const abis = modules.map((module) => module.abi).flatMap(
            (abi) => abi.exposed_functions.filter((ef) => ef.is_entry).map(
              (ef) => ({
                fullName: `${abi.address}::${abi.name}::${ef.name}`,
                ...ef
              })
            )
          );
          const abiMap = /* @__PURE__ */ new Map();
          abis.forEach((abi) => {
            abiMap.set(abi.fullName, abi);
          });
          return abiMap;
        }
        /**
         * Builds a raw transaction. Only support script function a.k.a entry function payloads
         *
         * @param func fully qualified function name in format <address>::<module>::<function>, e.g. 0x1::coin::transfer
         * @param ty_tags
         * @param args
         * @returns RawTransaction
         */
        async build(func, ty_tags, args) {
          const normlize = (s) => s.replace(/^0[xX]0*/g, "0x");
          func = normlize(func);
          const funcNameParts = func.split("::");
          if (funcNameParts.length !== 3) {
            throw new Error(
              // eslint-disable-next-line max-len
              "'func' needs to be a fully qualified function name in format <address>::<module>::<function>, e.g. 0x1::coin::transfer"
            );
          }
          const [addr, module] = func.split("::");
          const abiMap = await this.fetchABI(addr);
          if (!abiMap.has(func)) {
            throw new Error(`${func} doesn't exist.`);
          }
          const funcAbi = abiMap.get(func);
          const abiArgs = funcAbi.params.filter((param) => param !== "signer" && param !== "&signer");
          const typeArgABIs = abiArgs.map(
            (abiArg, i) => new ArgumentABI(`var${i}`, new TypeTagParser(abiArg, ty_tags).parseTypeTag())
          );
          const entryFunctionABI = new EntryFunctionABI(
            funcAbi.name,
            ModuleId.fromStr(`${addr}::${module}`),
            "",
            // Doc string
            funcAbi.generic_type_params.map((_2, i) => new TypeArgumentABI(`${i}`)),
            typeArgABIs
          );
          const { sender, ...rest } = this.builderConfig;
          const senderAddress = sender instanceof AccountAddress ? HexString.fromUint8Array(sender.address) : sender;
          const [{ sequence_number: sequenceNumber }, chainId, { gas_estimate: gasUnitPrice }] = await Promise.all([
            (rest == null ? void 0 : rest.sequenceNumber) ? Promise.resolve({ sequence_number: rest == null ? void 0 : rest.sequenceNumber }) : this.aptosClient.getAccount(senderAddress),
            (rest == null ? void 0 : rest.chainId) ? Promise.resolve(rest == null ? void 0 : rest.chainId) : this.aptosClient.getChainId(),
            (rest == null ? void 0 : rest.gasUnitPrice) ? Promise.resolve({ gas_estimate: rest == null ? void 0 : rest.gasUnitPrice }) : this.aptosClient.estimateGasPrice()
          ]);
          const builderABI = new TransactionBuilderABI([bcsToBytes(entryFunctionABI)], {
            sender,
            sequenceNumber,
            chainId,
            gasUnitPrice: BigInt(gasUnitPrice),
            ...rest
          });
          return builderABI.build(func, ty_tags, args);
        }
      };
      __decorateClass([
        MemoizeExpiring(10 * 60 * 1e3)
      ], TransactionBuilderRemoteABI.prototype, "fetchABI", 1);
      _AptosClient = class _AptosClient2 {
        /**
         * Build a client configured to connect to an Aptos node at the given URL.
         *
         * Note: If you forget to append `/v1` to the URL, the client constructor
         * will automatically append it. If you don't want this URL processing to
         * take place, set doNotFixNodeUrl to true.
         *
         * @param nodeUrl URL of the Aptos Node API endpoint.
         * @param config Additional configuration options for the generated Axios client.
         */
        constructor(nodeUrl, config, doNotFixNodeUrl = false) {
          if (!nodeUrl) {
            throw new Error("Node URL cannot be empty.");
          }
          if (doNotFixNodeUrl) {
            this.nodeUrl = nodeUrl;
          } else {
            this.nodeUrl = fixNodeUrl(nodeUrl);
          }
          this.config = config === void 0 || config === null ? {} : { ...config };
        }
        async getAccount(accountAddress) {
          const { data } = await get({
            url: this.nodeUrl,
            endpoint: `accounts/${HexString.ensure(accountAddress).hex()}`,
            originMethod: "getAccount",
            overrides: { ...this.config }
          });
          return data;
        }
        async getAccountTransactions(accountAddress, query) {
          const { data } = await get({
            url: this.nodeUrl,
            endpoint: `accounts/${HexString.ensure(accountAddress).hex()}/transactions`,
            originMethod: "getAccountTransactions",
            params: { start: query == null ? void 0 : query.start, limit: query == null ? void 0 : query.limit },
            overrides: { ...this.config }
          });
          return data;
        }
        async getAccountModules(accountAddress, query) {
          const out = await paginateWithCursor({
            url: this.nodeUrl,
            endpoint: `accounts/${accountAddress}/modules`,
            params: { ledger_version: query == null ? void 0 : query.ledgerVersion, limit: 1e3 },
            originMethod: "getAccountModules",
            overrides: { ...this.config }
          });
          return out;
        }
        async getAccountModule(accountAddress, moduleName, query) {
          const { data } = await get({
            url: this.nodeUrl,
            endpoint: `accounts/${HexString.ensure(accountAddress).hex()}/module/${moduleName}`,
            originMethod: "getAccountModule",
            params: { ledger_version: query == null ? void 0 : query.ledgerVersion },
            overrides: { ...this.config }
          });
          return data;
        }
        async getAccountResources(accountAddress, query) {
          const out = await paginateWithCursor({
            url: this.nodeUrl,
            endpoint: `accounts/${accountAddress}/resources`,
            params: { ledger_version: query == null ? void 0 : query.ledgerVersion, limit: 9999 },
            originMethod: "getAccountResources",
            overrides: { ...this.config }
          });
          return out;
        }
        async getAccountResource(accountAddress, resourceType, query) {
          const { data } = await get({
            url: this.nodeUrl,
            endpoint: `accounts/${HexString.ensure(accountAddress).hex()}/resource/${resourceType}`,
            originMethod: "getAccountResource",
            params: { ledger_version: query == null ? void 0 : query.ledgerVersion },
            overrides: { ...this.config }
          });
          return data;
        }
        /** Generates a signed transaction that can be submitted to the chain for execution. */
        static generateBCSTransaction(accountFrom, rawTxn) {
          const txnBuilder = new TransactionBuilderEd25519((signingMessage) => {
            const sigHexStr = accountFrom.signBuffer(signingMessage);
            return new aptos_types_exports.Ed25519Signature(sigHexStr.toUint8Array());
          }, accountFrom.pubKey().toUint8Array());
          return txnBuilder.sign(rawTxn);
        }
        /**
         * Note: Unless you have a specific reason for using this, it'll probably be simpler
         * to use `simulateTransaction`.
         *
         * Generates a BCS transaction that can be submitted to the chain for simulation.
         *
         * @param accountFrom The account that will be used to send the transaction
         * for simulation.
         * @param rawTxn The raw transaction to be simulated, likely created by calling
         * the `generateTransaction` function.
         * @returns The BCS encoded signed transaction, which you should then pass into
         * the `submitBCSSimulation` function.
         */
        static generateBCSSimulation(accountFrom, rawTxn) {
          const txnBuilder = new TransactionBuilderEd25519((_signingMessage) => {
            const invalidSigBytes = new Uint8Array(64);
            return new aptos_types_exports.Ed25519Signature(invalidSigBytes);
          }, accountFrom.pubKey().toUint8Array());
          return txnBuilder.sign(rawTxn);
        }
        /** Generates an entry function transaction request that can be submitted to produce a raw transaction that
         * can be signed, which upon being signed can be submitted to the blockchain
         * This function fetches the remote ABI and uses it to serialized the data, therefore
         * users don't need to handle serialization by themselves.
         * @param sender Hex-encoded 32 byte Aptos account address of transaction sender
         * @param payload Entry function transaction payload type
         * @param options Options allow to overwrite default transaction options.
         * @returns A raw transaction object
         */
        async generateTransaction(sender, payload, options) {
          const config = { sender };
          if (options == null ? void 0 : options.sequence_number) {
            config.sequenceNumber = options.sequence_number;
          }
          if (options == null ? void 0 : options.gas_unit_price) {
            config.gasUnitPrice = options.gas_unit_price;
          }
          if (options == null ? void 0 : options.max_gas_amount) {
            config.maxGasAmount = options.max_gas_amount;
          }
          if (options == null ? void 0 : options.expiration_timestamp_secs) {
            const timestamp = Number.parseInt(options.expiration_timestamp_secs, 10);
            config.expSecFromNow = timestamp - Math.floor(Date.now() / 1e3);
          }
          const builder = new TransactionBuilderRemoteABI(this, config);
          return builder.build(payload.function, payload.type_arguments, payload.arguments);
        }
        /**
         * Generates a fee payer transaction that can be signed and submitted to chain
         *
         * @param sender the sender's account address
         * @param payload the transaction payload
         * @param fee_payer the fee payer account
         * @param secondarySignerAccounts an optional array of the secondary signers accounts
         * @returns a fee payer raw transaction that can be signed and submitted to chain
         */
        async generateFeePayerTransaction(sender, payload, feePayer, secondarySignerAccounts = [], options) {
          const rawTxn = await this.generateTransaction(sender, payload, options);
          const signers = secondarySignerAccounts.map((signer) => AccountAddress.fromHex(signer));
          const feePayerTxn = new aptos_types_exports.FeePayerRawTransaction(rawTxn, signers, AccountAddress.fromHex(feePayer));
          return feePayerTxn;
        }
        /**
         * Submits fee payer transaction to chain
         *
         * @param feePayerTransaction the raw transaction to be submitted, of type FeePayerRawTransaction
         * @param senderAuthenticator the sender account authenticator (can get from signMultiTransaction() method)
         * @param feePayerAuthenticator the feepayer account authenticator (can get from signMultiTransaction() method)
         * @param signersAuthenticators an optional array of the signer account authenticators
         * @returns The pending transaction
         */
        async submitFeePayerTransaction(feePayerTransaction, senderAuthenticator, feePayerAuthenticator, additionalSignersAuthenticators = []) {
          const txAuthenticatorFeePayer = new aptos_types_exports.TransactionAuthenticatorFeePayer(
            senderAuthenticator,
            feePayerTransaction.secondary_signer_addresses,
            additionalSignersAuthenticators,
            { address: feePayerTransaction.fee_payer_address, authenticator: feePayerAuthenticator }
          );
          const bcsTxn = bcsToBytes(
            new aptos_types_exports.SignedTransaction(feePayerTransaction.raw_txn, txAuthenticatorFeePayer)
          );
          const transactionRes = await this.submitSignedBCSTransaction(bcsTxn);
          return transactionRes;
        }
        /**
         * Signs a multi transaction type (multi agent / fee payer) and returns the
         * signer authenticator to be used to submit the transaction.
         *
         * @param signer the account to sign on the transaction
         * @param rawTxn a MultiAgentRawTransaction or FeePayerRawTransaction
         * @returns signer authenticator
         */
        // eslint-disable-next-line class-methods-use-this
        async signMultiTransaction(signer, rawTxn) {
          const signerSignature = new aptos_types_exports.Ed25519Signature(
            signer.signBuffer(TransactionBuilder.getSigningMessage(rawTxn)).toUint8Array()
          );
          const signerAuthenticator = new aptos_types_exports.AccountAuthenticatorEd25519(
            new aptos_types_exports.Ed25519PublicKey(signer.signingKey.publicKey),
            signerSignature
          );
          return Promise.resolve(signerAuthenticator);
        }
        /** Converts a transaction request produced by `generateTransaction` into a properly
         * signed transaction, which can then be submitted to the blockchain
         * @param accountFrom AptosAccount of transaction sender
         * @param rawTransaction A raw transaction generated by `generateTransaction` method
         * @returns A transaction, signed with sender account
         */
        // eslint-disable-next-line class-methods-use-this
        async signTransaction(accountFrom, rawTransaction) {
          return Promise.resolve(_AptosClient2.generateBCSTransaction(accountFrom, rawTransaction));
        }
        async getEventsByCreationNumber(address, creationNumber, query) {
          const { data } = await get({
            url: this.nodeUrl,
            endpoint: `accounts/${HexString.ensure(address).hex()}/events/${creationNumber}`,
            originMethod: "getEventsByCreationNumber",
            params: { start: query == null ? void 0 : query.start, limit: query == null ? void 0 : query.limit },
            overrides: { ...this.config }
          });
          return data;
        }
        async getEventsByEventHandle(address, eventHandleStruct, fieldName, query) {
          const { data } = await get({
            url: this.nodeUrl,
            endpoint: `accounts/${HexString.ensure(address).hex()}/events/${eventHandleStruct}/${fieldName}`,
            originMethod: "getEventsByEventHandle",
            params: { start: query == null ? void 0 : query.start, limit: query == null ? void 0 : query.limit },
            overrides: { ...this.config }
          });
          return data;
        }
        /**
         * Submits a signed transaction to the transaction endpoint.
         * @param signedTxn A transaction, signed by `signTransaction` method
         * @returns Transaction that is accepted and submitted to mempool
         */
        async submitTransaction(signedTxn) {
          return this.submitSignedBCSTransaction(signedTxn);
        }
        /**
         * Generates and submits a transaction to the transaction simulation
         * endpoint. For this we generate a transaction with a fake signature.
         *
         * @param accountOrPubkey The sender or sender's public key. When private key is available, `AptosAccount` instance
         * can be used to send the transaction for simulation. If private key is not available, sender's public key can be
         * used to send the transaction for simulation.
         * @param rawTransaction The raw transaction to be simulated, likely created
         * by calling the `generateTransaction` function.
         * @param query.estimateGasUnitPrice If set to true, the gas unit price in the
         * transaction will be ignored and the estimated value will be used.
         * @param query.estimateMaxGasAmount If set to true, the max gas value in the
         * transaction will be ignored and the maximum possible gas will be used.
         * @param query.estimatePrioritizedGasUnitPrice If set to true, the transaction will use a higher price than the
         * original estimate.
         * @returns The BCS encoded signed transaction, which you should then provide
         *
         */
        async simulateTransaction(accountOrPubkey, rawTransaction, query) {
          let signedTxn;
          if (accountOrPubkey instanceof AptosAccount) {
            signedTxn = _AptosClient2.generateBCSSimulation(accountOrPubkey, rawTransaction);
          } else if (accountOrPubkey instanceof MultiEd25519PublicKey) {
            const txnBuilder = new TransactionBuilderMultiEd25519(() => {
              const { threshold } = accountOrPubkey;
              const bits = [];
              const signatures = [];
              for (let i = 0; i < threshold; i += 1) {
                bits.push(i);
                signatures.push(new aptos_types_exports.Ed25519Signature(new Uint8Array(64)));
              }
              const bitmap = aptos_types_exports.MultiEd25519Signature.createBitmap(bits);
              return new aptos_types_exports.MultiEd25519Signature(signatures, bitmap);
            }, accountOrPubkey);
            signedTxn = txnBuilder.sign(rawTransaction);
          } else {
            const txnBuilder = new TransactionBuilderEd25519(() => {
              const invalidSigBytes = new Uint8Array(64);
              return new aptos_types_exports.Ed25519Signature(invalidSigBytes);
            }, accountOrPubkey.toBytes());
            signedTxn = txnBuilder.sign(rawTransaction);
          }
          return this.submitBCSSimulation(signedTxn, query);
        }
        async submitSignedBCSTransaction(signedTxn) {
          const { data } = await post({
            url: this.nodeUrl,
            body: signedTxn,
            endpoint: "transactions",
            originMethod: "submitSignedBCSTransaction",
            contentType: "application/x.aptos.signed_transaction+bcs",
            overrides: { ...this.config }
          });
          return data;
        }
        async submitBCSSimulation(bcsBody, query) {
          var _a, _b, _c;
          const queryParams = {
            estimate_gas_unit_price: (_a = query == null ? void 0 : query.estimateGasUnitPrice) != null ? _a : false,
            estimate_max_gas_amount: (_b = query == null ? void 0 : query.estimateMaxGasAmount) != null ? _b : false,
            estimate_prioritized_gas_unit_price: (_c = query == null ? void 0 : query.estimatePrioritizedGasUnitPrice) != null ? _c : false
          };
          const { data } = await post({
            url: this.nodeUrl,
            body: bcsBody,
            endpoint: "transactions/simulate",
            params: queryParams,
            originMethod: "submitBCSSimulation",
            contentType: "application/x.aptos.signed_transaction+bcs",
            overrides: { ...this.config }
          });
          return data;
        }
        async getTransactions(query) {
          var _a;
          const { data } = await get({
            url: this.nodeUrl,
            endpoint: "transactions",
            originMethod: "getTransactions",
            params: { start: (_a = query == null ? void 0 : query.start) == null ? void 0 : _a.toString(), limit: query == null ? void 0 : query.limit },
            overrides: { ...this.config }
          });
          return data;
        }
        async getTransactionByHash(txnHash) {
          const { data } = await get({
            url: this.nodeUrl,
            endpoint: `transactions/by_hash/${txnHash}`,
            originMethod: "getTransactionByHash",
            overrides: { ...this.config }
          });
          return data;
        }
        async getTransactionByVersion(txnVersion) {
          const { data } = await get({
            url: this.nodeUrl,
            endpoint: `transactions/by_version/${txnVersion}`,
            originMethod: "getTransactionByVersion",
            overrides: { ...this.config }
          });
          return data;
        }
        /**
         * Defines if specified transaction is currently in pending state
         * @param txnHash A hash of transaction
         *
         * To create a transaction hash:
         *
         * 1. Create hash message bytes: "Aptos::Transaction" bytes + BCS bytes of Transaction.
         * 2. Apply hash algorithm SHA3-256 to the hash message bytes.
         * 3. Hex-encode the hash bytes with 0x prefix.
         *
         * @returns `true` if transaction is in pending state and `false` otherwise
         */
        async transactionPending(txnHash) {
          try {
            const response = await this.getTransactionByHash(txnHash);
            return response.type === "pending_transaction";
          } catch (e) {
            if ((e == null ? void 0 : e.status) === 404) {
              return true;
            }
            throw e;
          }
        }
        /**
         * Wait for a transaction to move past pending state.
         *
         * There are 4 possible outcomes:
         * 1. Transaction is processed and successfully committed to the blockchain.
         * 2. Transaction is rejected for some reason, and is therefore not committed
         *    to the blockchain.
         * 3. Transaction is committed but execution failed, meaning no changes were
         *    written to the blockchain state.
         * 4. Transaction is not processed within the specified timeout.
         *
         * In case 1, this function resolves with the transaction response returned
         * by the API.
         *
         * In case 2, the function will throw an ApiError, likely with an HTTP status
         * code indicating some problem with the request (e.g. 400).
         *
         * In case 3, if `checkSuccess` is false (the default), this function returns
         * the transaction response just like in case 1, in which the `success` field
         * will be false. If `checkSuccess` is true, it will instead throw a
         * FailedTransactionError.
         *
         * In case 4, this function throws a WaitForTransactionError.
         *
         * @param txnHash The hash of a transaction previously submitted to the blockchain.
         * @param extraArgs.timeoutSecs Timeout in seconds. Defaults to 20 seconds.
         * @param extraArgs.checkSuccess See above. Defaults to false.
         * @returns See above.
         *
         * @example
         * ```
         * const rawTransaction = await this.generateRawTransaction(sender.address(), payload, extraArgs);
         * const bcsTxn = AptosClient.generateBCSTransaction(sender, rawTransaction);
         * const pendingTransaction = await this.submitSignedBCSTransaction(bcsTxn);
         * const transasction = await this.aptosClient.waitForTransactionWithResult(pendingTransaction.hash);
         * ```
         */
        async waitForTransactionWithResult(txnHash, extraArgs) {
          var _a, _b;
          const timeoutSecs = (_a = extraArgs == null ? void 0 : extraArgs.timeoutSecs) != null ? _a : DEFAULT_TXN_TIMEOUT_SEC;
          const checkSuccess = (_b = extraArgs == null ? void 0 : extraArgs.checkSuccess) != null ? _b : false;
          let isPending = true;
          let count = 0;
          let lastTxn;
          while (isPending) {
            if (count >= timeoutSecs) {
              break;
            }
            try {
              lastTxn = await this.getTransactionByHash(txnHash);
              isPending = lastTxn.type === "pending_transaction";
              if (!isPending) {
                break;
              }
            } catch (e) {
              const isApiError = e instanceof ApiError;
              const isRequestError = isApiError && e.status !== 404 && e.status >= 400 && e.status < 500;
              if (!isApiError || isRequestError) {
                throw e;
              }
            }
            await sleep(1e3);
            count += 1;
          }
          if (lastTxn === void 0) {
            throw new Error(`Waiting for transaction ${txnHash} failed`);
          }
          if (isPending) {
            throw new WaitForTransactionError(
              `Waiting for transaction ${txnHash} timed out after ${timeoutSecs} seconds`,
              lastTxn
            );
          }
          if (!checkSuccess) {
            return lastTxn;
          }
          if (!(lastTxn == null ? void 0 : lastTxn.success)) {
            throw new FailedTransactionError(
              `Transaction ${txnHash} failed with an error: ${lastTxn.vm_status}`,
              lastTxn
            );
          }
          return lastTxn;
        }
        /**
         * This function works the same as `waitForTransactionWithResult` except it
         * doesn't return the transaction in those cases, it returns nothing. For
         * more information, see the documentation for `waitForTransactionWithResult`.
         */
        async waitForTransaction(txnHash, extraArgs) {
          await this.waitForTransactionWithResult(txnHash, extraArgs);
        }
        async getLedgerInfo() {
          const { data } = await get({
            url: this.nodeUrl,
            originMethod: "getLedgerInfo",
            overrides: { ...this.config }
          });
          return data;
        }
        async getChainId() {
          const result = await this.getLedgerInfo();
          return result.chain_id;
        }
        async getTableItem(handle, data, query) {
          var _a;
          const response = await post({
            url: this.nodeUrl,
            body: data,
            endpoint: `tables/${handle}/item`,
            originMethod: "getTableItem",
            params: { ledger_version: (_a = query == null ? void 0 : query.ledgerVersion) == null ? void 0 : _a.toString() },
            overrides: { ...this.config }
          });
          return response.data;
        }
        /**
         * Generates a raw transaction out of a transaction payload
         * @param accountFrom
         * @param payload
         * @param extraArgs
         * @returns A raw transaction object
         */
        async generateRawTransaction(accountFrom, payload, extraArgs) {
          const [{ sequence_number: sequenceNumber }, chainId, { gas_estimate: gasEstimate }] = await Promise.all([
            (extraArgs == null ? void 0 : extraArgs.providedSequenceNumber) ? Promise.resolve({ sequence_number: extraArgs.providedSequenceNumber }) : this.getAccount(accountFrom),
            this.getChainId(),
            (extraArgs == null ? void 0 : extraArgs.gasUnitPrice) ? Promise.resolve({ gas_estimate: extraArgs.gasUnitPrice }) : this.estimateGasPrice()
          ]);
          const { maxGasAmount, gasUnitPrice, expireTimestamp } = {
            maxGasAmount: BigInt(DEFAULT_MAX_GAS_AMOUNT),
            gasUnitPrice: BigInt(gasEstimate),
            expireTimestamp: BigInt(Math.floor(Date.now() / 1e3) + DEFAULT_TXN_EXP_SEC_FROM_NOW),
            ...extraArgs
          };
          return new aptos_types_exports.RawTransaction(
            aptos_types_exports.AccountAddress.fromHex(accountFrom),
            BigInt(sequenceNumber),
            payload,
            maxGasAmount,
            gasUnitPrice,
            expireTimestamp,
            new aptos_types_exports.ChainId(chainId)
          );
        }
        /**
         * Helper for generating, signing, and submitting a transaction.
         *
         * @param sender AptosAccount of transaction sender.
         * @param payload Transaction payload.
         * @param extraArgs Extra args for building the transaction payload.
         * @returns The transaction response from the API.
         */
        async generateSignSubmitTransaction(sender, payload, extraArgs) {
          const rawTransaction = await this.generateRawTransaction(sender.address(), payload, extraArgs);
          const bcsTxn = _AptosClient2.generateBCSTransaction(sender, rawTransaction);
          const pendingTransaction = await this.submitSignedBCSTransaction(bcsTxn);
          return pendingTransaction.hash;
        }
        /**
         * Helper for signing and submitting a transaction.
         *
         * @param sender AptosAccount of transaction sender.
         * @param transaction A generated Raw transaction payload.
         * @returns The transaction response from the API.
         */
        async signAndSubmitTransaction(sender, transaction) {
          const bcsTxn = _AptosClient2.generateBCSTransaction(sender, transaction);
          const pendingTransaction = await this.submitSignedBCSTransaction(bcsTxn);
          return pendingTransaction.hash;
        }
        /**
         * Publishes a move package. `packageMetadata` and `modules` can be generated with command
         * `aptos move compile --save-metadata [ --included-artifacts=<...> ]`.
         * @param sender
         * @param packageMetadata package metadata bytes
         * @param modules bytecodes of modules
         * @param extraArgs
         * @returns Transaction hash
         */
        async publishPackage(sender, packageMetadata, modules, extraArgs) {
          const codeSerializer = new Serializer();
          serializeVector(modules, codeSerializer);
          const payload = new aptos_types_exports.TransactionPayloadEntryFunction(
            aptos_types_exports.EntryFunction.natural(
              "0x1::code",
              "publish_package_txn",
              [],
              [bcsSerializeBytes(packageMetadata), codeSerializer.getBytes()]
            )
          );
          return this.generateSignSubmitTransaction(sender, payload, extraArgs);
        }
        /**
         * Publishes a move packages by creating a resource account.
         * The package cannot be upgraded since it is deployed by resource account
         * `packageMetadata` and `modules` can be generated with command
         * `aptos move compile --save-metadata [ --included-artifacts=<...> ]`.
         * @param sender
         * @param seed seeds for creation of resource address
         * @param packageMetadata package metadata bytes
         * @param modules bytecodes of modules
         * @param extraArgs
         * @returns Transaction hash
         */
        async createResourceAccountAndPublishPackage(sender, seed, packageMetadata, modules, extraArgs) {
          const codeSerializer = new Serializer();
          serializeVector(modules, codeSerializer);
          const payload = new aptos_types_exports.TransactionPayloadEntryFunction(
            aptos_types_exports.EntryFunction.natural(
              "0x1::resource_account",
              "create_resource_account_and_publish_package",
              [],
              [bcsSerializeBytes(seed), bcsSerializeBytes(packageMetadata), codeSerializer.getBytes()]
            )
          );
          return this.generateSignSubmitTransaction(sender, payload, extraArgs);
        }
        /**
         * Helper for generating, submitting, and waiting for a transaction, and then
         * checking whether it was committed successfully. Under the hood this is just
         * `generateSignSubmitTransaction` and then `waitForTransactionWithResult`, see
         * those for information about the return / error semantics of this function.
         */
        async generateSignSubmitWaitForTransaction(sender, payload, extraArgs) {
          const txnHash = await this.generateSignSubmitTransaction(sender, payload, extraArgs);
          return this.waitForTransactionWithResult(txnHash, extraArgs);
        }
        async estimateGasPrice() {
          const { data } = await get({
            url: this.nodeUrl,
            endpoint: "estimate_gas_price",
            originMethod: "estimateGasPrice",
            overrides: { ...this.config }
          });
          return data;
        }
        async estimateMaxGasAmount(forAccount) {
          const typeTag = `0x1::coin::CoinStore<${APTOS_COIN}>`;
          const [{ gas_estimate: gasUnitPrice }, resources] = await Promise.all([
            this.estimateGasPrice(),
            this.getAccountResources(forAccount)
          ]);
          const accountResource = resources.find((r3) => r3.type === typeTag);
          const balance = BigInt(accountResource.data.coin.value);
          return balance / BigInt(gasUnitPrice);
        }
        /**
         * Rotate an account's auth key. After rotation, only the new private key can be used to sign txns for
         * the account.
         * WARNING: You must create a new instance of AptosAccount after using this function.
         * @param forAccount Account of which the auth key will be rotated
         * @param toPrivateKeyBytes New private key
         * @param extraArgs Extra args for building the transaction payload.
         * @returns PendingTransaction
         */
        async rotateAuthKeyEd25519(forAccount, toPrivateKeyBytes, extraArgs) {
          const { sequence_number: sequenceNumber, authentication_key: authKey } = await this.getAccount(
            forAccount.address()
          );
          const helperAccount = new AptosAccount(toPrivateKeyBytes);
          const challenge = new aptos_types_exports.RotationProofChallenge(
            aptos_types_exports.AccountAddress.CORE_CODE_ADDRESS,
            "account",
            "RotationProofChallenge",
            BigInt(sequenceNumber),
            aptos_types_exports.AccountAddress.fromHex(forAccount.address()),
            new aptos_types_exports.AccountAddress(new HexString(authKey).toUint8Array()),
            helperAccount.pubKey().toUint8Array()
          );
          const challengeHex = HexString.fromUint8Array(bcsToBytes(challenge));
          const proofSignedByCurrentPrivateKey = forAccount.signHexString(challengeHex);
          const proofSignedByNewPrivateKey = helperAccount.signHexString(challengeHex);
          const payload = new aptos_types_exports.TransactionPayloadEntryFunction(
            aptos_types_exports.EntryFunction.natural(
              "0x1::account",
              "rotate_authentication_key",
              [],
              [
                bcsSerializeU8(0),
                // ed25519 scheme
                bcsSerializeBytes(forAccount.pubKey().toUint8Array()),
                bcsSerializeU8(0),
                // ed25519 scheme
                bcsSerializeBytes(helperAccount.pubKey().toUint8Array()),
                bcsSerializeBytes(proofSignedByCurrentPrivateKey.toUint8Array()),
                bcsSerializeBytes(proofSignedByNewPrivateKey.toUint8Array())
              ]
            )
          );
          const rawTransaction = await this.generateRawTransaction(forAccount.address(), payload, extraArgs);
          const bcsTxn = _AptosClient2.generateBCSTransaction(forAccount, rawTransaction);
          return this.submitSignedBCSTransaction(bcsTxn);
        }
        /**
         * Lookup the original address by the current derived address
         * @param addressOrAuthKey
         * @returns original address
         */
        async lookupOriginalAddress(addressOrAuthKey) {
          const resource = await this.getAccountResource("0x1", "0x1::account::OriginatingAddress");
          const {
            address_map: { handle }
          } = resource.data;
          const origAddress = await this.getTableItem(handle, {
            key_type: "address",
            value_type: "address",
            key: HexString.ensure(addressOrAuthKey).hex()
          });
          return new HexString(origAddress);
        }
        async getBlockByHeight(blockHeight, withTransactions) {
          const { data } = await get({
            url: this.nodeUrl,
            endpoint: `blocks/by_height/${blockHeight}`,
            originMethod: "getBlockByHeight",
            params: { with_transactions: withTransactions },
            overrides: { ...this.config }
          });
          return data;
        }
        async getBlockByVersion(version3, withTransactions) {
          const { data } = await get({
            url: this.nodeUrl,
            endpoint: `blocks/by_version/${version3}`,
            originMethod: "getBlockByVersion",
            params: { with_transactions: withTransactions },
            overrides: { ...this.config }
          });
          return data;
        }
        async view(payload, ledger_version) {
          const { data } = await post({
            url: this.nodeUrl,
            body: payload,
            endpoint: "view",
            originMethod: "getTableItem",
            params: { ledger_version },
            overrides: { ...this.config }
          });
          return data;
        }
        // eslint-disable-next-line class-methods-use-this
        clearCache(tags) {
          clear(tags);
        }
      };
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "getAccount", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "getAccountTransactions", 1);
      __decorateClass([
        parseApiError,
        MemoizeExpiring(10 * 60 * 1e3)
      ], _AptosClient.prototype, "getAccountModules", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "getAccountModule", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "getAccountResources", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "getAccountResource", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "getEventsByCreationNumber", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "getEventsByEventHandle", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "submitSignedBCSTransaction", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "submitBCSSimulation", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "getTransactions", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "getTransactionByHash", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "getTransactionByVersion", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "getLedgerInfo", 1);
      __decorateClass([
        Memoize()
      ], _AptosClient.prototype, "getChainId", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "getTableItem", 1);
      __decorateClass([
        parseApiError,
        Memoize({
          ttlMs: 5 * 60 * 1e3,
          // cache result for 5min
          tags: ["gas_estimates"]
        })
      ], _AptosClient.prototype, "estimateGasPrice", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "estimateMaxGasAmount", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "getBlockByHeight", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "getBlockByVersion", 1);
      __decorateClass([
        parseApiError
      ], _AptosClient.prototype, "view", 1);
      AptosClient = _AptosClient;
      WaitForTransactionError = class extends Error {
        constructor(message, lastSubmittedTransaction) {
          super(message);
          this.lastSubmittedTransaction = lastSubmittedTransaction;
        }
      };
      FailedTransactionError = class extends Error {
        constructor(message, transaction) {
          super(message);
          this.transaction = transaction;
        }
      };
      ApiError = class extends Error {
        constructor(status, message, errorCode, vmErrorCode) {
          super(message);
          this.status = status;
          this.message = message;
          this.errorCode = errorCode;
          this.vmErrorCode = vmErrorCode;
        }
      };
      IndexerClient = class _IndexerClient {
        /**
         * @param endpoint URL of the Aptos Indexer API endpoint.
         */
        constructor(endpoint, config) {
          this.endpoint = endpoint;
          this.config = config;
        }
        /**
         * Indexer only accepts address in the long format, i.e a 66 chars long -> 0x<64 chars>
         * This method makes sure address is 66 chars long.
         * @param address
         */
        static validateAddress(address) {
          if (address.length < 66) {
            throw new Error(`${address} is less than 66 chars long.`);
          }
        }
        /**
         * Makes axios client call to fetch data from Aptos Indexer.
         *
         * @param graphqlQuery A GraphQL query to pass in the `data` axios call.
         */
        async queryIndexer(graphqlQuery) {
          const response = await post({
            url: this.endpoint,
            body: graphqlQuery,
            overrides: { WITH_CREDENTIALS: false, ...this.config }
          });
          if (response.data.errors) {
            throw new ApiError(
              response.data.errors[0].extensions.code,
              JSON.stringify({
                message: response.data.errors[0].message,
                error_code: response.data.errors[0].extensions.code
              })
            );
          }
          return response.data.data;
        }
        /**
         * Queries Indexer Ledger Info
         *
         * @returns GetLedgerInfoQuery response type
         */
        async getIndexerLedgerInfo() {
          const graphqlQuery = {
            query: GetIndexerLedgerInfo
          };
          return this.queryIndexer(graphqlQuery);
        }
        // TOKENS //
        /**
         * @deprecated please use `getOwnedTokens` query
         *
         * Queries an Aptos account's NFTs by owner address
         *
         * @param ownerAddress Hex-encoded 32 byte Aptos account address
         * @returns GetAccountCurrentTokensQuery response type
         */
        async getAccountNFTs(ownerAddress, options) {
          const address = HexString.ensure(ownerAddress).hex();
          _IndexerClient.validateAddress(address);
          const graphqlQuery = {
            query: GetAccountCurrentTokens,
            variables: { address, offset: options == null ? void 0 : options.offset, limit: options == null ? void 0 : options.limit }
          };
          return this.queryIndexer(graphqlQuery);
        }
        /**
         * Queries a token activities by token address (v2) or token data id (v1)
         *
         * @param idHash token address (v2) or token data id (v1)
         * @returns GetTokenActivitiesQuery response type
         */
        async getTokenActivities(token, extraArgs) {
          var _a, _b;
          const tokenAddress = HexString.ensure(token).hex();
          _IndexerClient.validateAddress(tokenAddress);
          const whereCondition = {
            token_data_id: { _eq: tokenAddress }
          };
          if (extraArgs == null ? void 0 : extraArgs.tokenStandard) {
            whereCondition.token_standard = { _eq: extraArgs == null ? void 0 : extraArgs.tokenStandard };
          }
          const graphqlQuery = {
            query: GetTokenActivities,
            variables: {
              where_condition: whereCondition,
              offset: (_a = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _a.offset,
              limit: (_b = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _b.limit,
              order_by: extraArgs == null ? void 0 : extraArgs.orderBy
            }
          };
          return this.queryIndexer(graphqlQuery);
        }
        /**
         * Gets the count of token's activities by token address (v2) or token data id (v1)
         *
         * @param token token address (v2) or token data id (v1)
         * @returns GetTokenActivitiesCountQuery response type
         */
        async getTokenActivitiesCount(token) {
          const graphqlQuery = {
            query: GetTokenActivitiesCount,
            variables: { token_id: token }
          };
          return this.queryIndexer(graphqlQuery);
        }
        /**
         * Gets the count of tokens owned by an account
         *
         * @param ownerAddress Owner address
         * @returns AccountTokensCountQuery response type
         */
        async getAccountTokensCount(ownerAddress, extraArgs) {
          var _a, _b;
          const whereCondition = {
            owner_address: { _eq: ownerAddress },
            amount: { _gt: "0" }
          };
          if (extraArgs == null ? void 0 : extraArgs.tokenStandard) {
            whereCondition.token_standard = { _eq: extraArgs == null ? void 0 : extraArgs.tokenStandard };
          }
          const address = HexString.ensure(ownerAddress).hex();
          _IndexerClient.validateAddress(address);
          const graphqlQuery = {
            query: GetAccountTokensCount,
            variables: {
              where_condition: whereCondition,
              offset: (_a = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _a.offset,
              limit: (_b = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _b.limit
            }
          };
          return this.queryIndexer(graphqlQuery);
        }
        /**
         * Queries token data by token address (v2) or token data id (v1)
         *
         * @param token token address (v2) or token data id (v1)
         * @returns GetTokenDataQuery response type
         */
        // :!:>getTokenData
        async getTokenData(token, extraArgs) {
          var _a, _b;
          const tokenAddress = HexString.ensure(token).hex();
          _IndexerClient.validateAddress(tokenAddress);
          const whereCondition = {
            token_data_id: { _eq: tokenAddress }
          };
          if (extraArgs == null ? void 0 : extraArgs.tokenStandard) {
            whereCondition.token_standard = { _eq: extraArgs == null ? void 0 : extraArgs.tokenStandard };
          }
          const graphqlQuery = {
            query: GetTokenData,
            variables: {
              where_condition: whereCondition,
              offset: (_a = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _a.offset,
              limit: (_b = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _b.limit,
              order_by: extraArgs == null ? void 0 : extraArgs.orderBy
            }
          };
          return this.queryIndexer(graphqlQuery);
        }
        // <:!:getTokenData
        /**
         * Queries token owners data by token address (v2) or token data id (v1).
         * This query returns historical owners data.
         *
         * To fetch token v2 standard, pass in the optional `tokenStandard` parameter and
         * dont pass `propertyVersion` parameter (as propertyVersion only compatible with v1 standard)
         *
         * @param token token address (v2) or token data id (v1)
         * @param propertyVersion Property version (optional) - only compatible with token v1 standard
         * @returns GetTokenOwnersDataQuery response type
         */
        async getTokenOwnersData(token, propertyVersion, extraArgs) {
          var _a, _b;
          const tokenAddress = HexString.ensure(token).hex();
          _IndexerClient.validateAddress(tokenAddress);
          const whereCondition = {
            token_data_id: { _eq: tokenAddress },
            amount: { _gt: "0" }
          };
          if (propertyVersion) {
            whereCondition.property_version_v1 = { _eq: propertyVersion };
          }
          if (extraArgs == null ? void 0 : extraArgs.tokenStandard) {
            whereCondition.token_standard = { _eq: extraArgs == null ? void 0 : extraArgs.tokenStandard };
          }
          const graphqlQuery = {
            query: GetTokenOwnersData,
            variables: {
              where_condition: whereCondition,
              offset: (_a = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _a.offset,
              limit: (_b = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _b.limit,
              order_by: extraArgs == null ? void 0 : extraArgs.orderBy
            }
          };
          return this.queryIndexer(graphqlQuery);
        }
        /**
         * Queries current token owner data by token address (v2) or token data id (v1).
         * This query returns the current token owner data.
         *
         * To fetch token v2 standard, pass in the optional `tokenStandard` parameter and
         * dont pass `propertyVersion` parameter (as propertyVersion only compatible with v1 standard)
         *
         * @param token token address (v2) or token data id (v1)
         * @param propertyVersion Property version (optional) - only compatible with token v1 standard
         * @returns GetTokenCurrentOwnerDataQuery response type
         */
        async getTokenCurrentOwnerData(token, propertyVersion, extraArgs) {
          var _a, _b;
          const tokenAddress = HexString.ensure(token).hex();
          _IndexerClient.validateAddress(tokenAddress);
          const whereCondition = {
            token_data_id: { _eq: tokenAddress },
            amount: { _gt: "0" }
          };
          if (propertyVersion) {
            whereCondition.property_version_v1 = { _eq: propertyVersion };
          }
          if (extraArgs == null ? void 0 : extraArgs.tokenStandard) {
            whereCondition.token_standard = { _eq: extraArgs == null ? void 0 : extraArgs.tokenStandard };
          }
          const graphqlQuery = {
            query: GetTokenCurrentOwnerData,
            variables: {
              where_condition: whereCondition,
              offset: (_a = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _a.offset,
              limit: (_b = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _b.limit,
              order_by: extraArgs == null ? void 0 : extraArgs.orderBy
            }
          };
          return this.queryIndexer(graphqlQuery);
        }
        /**
         * Queries account's current owned tokens.
         * This query returns all tokens (v1 and v2 standards) an account owns, including NFTs, fungible, soulbound, etc.
         * If you want to get only the token from a specific standrd, you can pass an optional tokenStandard param
         *
         * @param ownerAddress The token owner address we want to get the tokens for
         * @returns GetOwnedTokensQuery response type
         */
        async getOwnedTokens(ownerAddress, extraArgs) {
          var _a, _b;
          const address = HexString.ensure(ownerAddress).hex();
          _IndexerClient.validateAddress(address);
          const whereCondition = {
            owner_address: { _eq: address },
            amount: { _gt: 0 }
          };
          if (extraArgs == null ? void 0 : extraArgs.tokenStandard) {
            whereCondition.token_standard = { _eq: extraArgs == null ? void 0 : extraArgs.tokenStandard };
          }
          const graphqlQuery = {
            query: GetOwnedTokens,
            variables: {
              where_condition: whereCondition,
              offset: (_a = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _a.offset,
              limit: (_b = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _b.limit,
              order_by: extraArgs == null ? void 0 : extraArgs.orderBy
            }
          };
          return this.queryIndexer(graphqlQuery);
        }
        /**
         * Queries account's current owned tokens by token address (v2) or token data id (v1).
         *
         * @param token token address (v2) or token data id (v1)
         * @returns GetOwnedTokensByTokenDataQuery response type
         */
        async getOwnedTokensByTokenData(token, extraArgs) {
          var _a, _b;
          const address = HexString.ensure(token).hex();
          _IndexerClient.validateAddress(address);
          const whereCondition = {
            token_data_id: { _eq: address },
            amount: { _gt: 0 }
          };
          if (extraArgs == null ? void 0 : extraArgs.tokenStandard) {
            whereCondition.token_standard = { _eq: extraArgs == null ? void 0 : extraArgs.tokenStandard };
          }
          const graphqlQuery = {
            query: GetOwnedTokensByTokenData,
            variables: {
              where_condition: whereCondition,
              offset: (_a = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _a.offset,
              limit: (_b = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _b.limit,
              order_by: extraArgs == null ? void 0 : extraArgs.orderBy
            }
          };
          return this.queryIndexer(graphqlQuery);
        }
        /**
         * Queries all tokens of a specific collection that an account owns by the collection address
         *
         * @param ownerAddress owner address that owns the tokens
         * @param collectionAddress the collection address
         * @returns GetTokenOwnedFromCollectionQuery response type
         */
        async getTokenOwnedFromCollectionAddress(ownerAddress, collectionAddress, extraArgs) {
          var _a, _b;
          const ownerHexAddress = HexString.ensure(ownerAddress).hex();
          _IndexerClient.validateAddress(ownerHexAddress);
          const collectionHexAddress = HexString.ensure(collectionAddress).hex();
          _IndexerClient.validateAddress(collectionHexAddress);
          const whereCondition = {
            owner_address: { _eq: ownerHexAddress },
            current_token_data: { collection_id: { _eq: collectionHexAddress } },
            amount: { _gt: 0 }
          };
          if (extraArgs == null ? void 0 : extraArgs.tokenStandard) {
            whereCondition.token_standard = { _eq: extraArgs == null ? void 0 : extraArgs.tokenStandard };
          }
          const graphqlQuery = {
            query: GetTokenOwnedFromCollection,
            variables: {
              where_condition: whereCondition,
              offset: (_a = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _a.offset,
              limit: (_b = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _b.limit,
              order_by: extraArgs == null ? void 0 : extraArgs.orderBy
            }
          };
          return this.queryIndexer(graphqlQuery);
        }
        /**
         * Queries all tokens of a specific collection that an account owns by the collection name and collection
         * creator address
         *
         * @param ownerAddress owner address that owns the tokens
         * @param collectionName the collection name
         * @param creatorAddress the collection creator address
         * @returns GetTokenOwnedFromCollectionQuery response type
         */
        async getTokenOwnedFromCollectionNameAndCreatorAddress(ownerAddress, collectionName, creatorAddress, extraArgs) {
          const collectionAddress = await this.getCollectionAddress(creatorAddress, collectionName, extraArgs);
          const tokens = await this.getTokenOwnedFromCollectionAddress(ownerAddress, collectionAddress, extraArgs);
          return tokens;
        }
        /**
         * Queries data of a specific collection by the collection creator address and the collection name.
         *
         * if, for some reason, a creator account has 2 collections with the same name in v1 and v2,
         * can pass an optional `tokenStandard` parameter to query a specific standard
         *
         * @param creatorAddress the collection creator address
         * @param collectionName the collection name
         * @returns GetCollectionDataQuery response type
         */
        async getCollectionData(creatorAddress, collectionName, extraArgs) {
          var _a, _b;
          const address = HexString.ensure(creatorAddress).hex();
          _IndexerClient.validateAddress(address);
          const whereCondition = {
            collection_name: { _eq: collectionName },
            creator_address: { _eq: address }
          };
          if (extraArgs == null ? void 0 : extraArgs.tokenStandard) {
            whereCondition.token_standard = { _eq: extraArgs == null ? void 0 : extraArgs.tokenStandard };
          }
          const graphqlQuery = {
            query: GetCollectionData,
            variables: {
              where_condition: whereCondition,
              offset: (_a = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _a.offset,
              limit: (_b = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _b.limit,
              order_by: extraArgs == null ? void 0 : extraArgs.orderBy
            }
          };
          return this.queryIndexer(graphqlQuery);
        }
        /**
         * Queries a collection address.
         *
         * @param creatorAddress the collection creator address
         * @param collectionName the collection name
         * @returns the collection address
         */
        async getCollectionAddress(creatorAddress, collectionName, extraArgs) {
          return (await this.getCollectionData(creatorAddress, collectionName, extraArgs)).current_collections_v2[0].collection_id;
        }
        /**
         * Queries for all collections that an account has tokens for.
         *
         * @param ownerAddress the account address that owns the tokens
         * @returns GetCollectionsWithOwnedTokensQuery response type
         */
        async getCollectionsWithOwnedTokens(ownerAddress, extraArgs) {
          var _a, _b;
          const ownerHexAddress = HexString.ensure(ownerAddress).hex();
          _IndexerClient.validateAddress(ownerHexAddress);
          const whereCondition = {
            owner_address: { _eq: ownerHexAddress }
          };
          if (extraArgs == null ? void 0 : extraArgs.tokenStandard) {
            whereCondition.current_collection = { token_standard: { _eq: extraArgs == null ? void 0 : extraArgs.tokenStandard } };
          }
          const graphqlQuery = {
            query: GetCollectionsWithOwnedTokens,
            variables: {
              where_condition: whereCondition,
              offset: (_a = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _a.offset,
              limit: (_b = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _b.limit,
              order_by: extraArgs == null ? void 0 : extraArgs.orderBy
            }
          };
          return this.queryIndexer(graphqlQuery);
        }
        // TRANSACTIONS //
        /**
         * Gets the count of transactions submitted by an account
         *
         * @param address Account address
         * @returns GetAccountTransactionsCountQuery response type
         */
        async getAccountTransactionsCount(accountAddress) {
          const address = HexString.ensure(accountAddress).hex();
          _IndexerClient.validateAddress(address);
          const graphqlQuery = {
            query: GetAccountTransactionsCount,
            variables: { address }
          };
          return this.queryIndexer(graphqlQuery);
        }
        /**
         * Queries an account transactions data
         *
         * @param address Account address
         * @returns GetAccountTransactionsDataQuery response type
         */
        async getAccountTransactionsData(accountAddress, extraArgs) {
          var _a, _b;
          const address = HexString.ensure(accountAddress).hex();
          _IndexerClient.validateAddress(address);
          const whereCondition = {
            account_address: { _eq: address }
          };
          const graphqlQuery = {
            query: GetAccountTransactionsData,
            variables: {
              where_condition: whereCondition,
              offset: (_a = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _a.offset,
              limit: (_b = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _b.limit,
              order_by: extraArgs == null ? void 0 : extraArgs.orderBy
            }
          };
          return this.queryIndexer(graphqlQuery);
        }
        /**
         * Queries top user transactions
         *
         * @param limit
         * @returns GetTopUserTransactionsQuery response type
         */
        async getTopUserTransactions(limit) {
          const graphqlQuery = {
            query: GetTopUserTransactions,
            variables: { limit }
          };
          return this.queryIndexer(graphqlQuery);
        }
        /**
         * Queries top user transactions
         *
         * @param startVersion optional - can be set to tell indexer what version to start from
         * @returns GetUserTransactionsQuery response type
         */
        async getUserTransactions(extraArgs) {
          var _a, _b;
          const whereCondition = {
            version: { _lte: extraArgs == null ? void 0 : extraArgs.startVersion }
          };
          const graphqlQuery = {
            query: GetUserTransactions,
            variables: {
              where_condition: whereCondition,
              offset: (_a = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _a.offset,
              limit: (_b = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _b.limit,
              order_by: extraArgs == null ? void 0 : extraArgs.orderBy
            }
          };
          return this.queryIndexer(graphqlQuery);
        }
        // STAKING //
        /**
         * Queries delegated staking activities
         *
         * @param delegatorAddress Delegator address
         * @param poolAddress Pool address
         * @returns GetDelegatedStakingActivitiesQuery response type
         */
        async getDelegatedStakingActivities(delegatorAddress, poolAddress) {
          const delegator = HexString.ensure(delegatorAddress).hex();
          const pool = HexString.ensure(poolAddress).hex();
          _IndexerClient.validateAddress(delegator);
          _IndexerClient.validateAddress(pool);
          const graphqlQuery = {
            query: GetDelegatedStakingActivities,
            variables: {
              delegatorAddress: delegator,
              poolAddress: pool
            }
          };
          return this.queryIndexer(graphqlQuery);
        }
        /**
         * Queries current number of delegators in a pool
         *
         * @returns GetNumberOfDelegatorsQuery response type
         */
        async getNumberOfDelegators(poolAddress) {
          const address = HexString.ensure(poolAddress).hex();
          _IndexerClient.validateAddress(address);
          const graphqlQuery = {
            query: GetNumberOfDelegators,
            variables: { poolAddress: address }
          };
          return this.queryIndexer(graphqlQuery);
        }
        // ACCOUNT //
        /**
         * Queries an account coin data
         *
         * @param ownerAddress Owner address
         * @returns GetAccountCoinsDataQuery response type
         */
        async getAccountCoinsData(ownerAddress, extraArgs) {
          var _a, _b;
          const address = HexString.ensure(ownerAddress).hex();
          _IndexerClient.validateAddress(address);
          const whereCondition = {
            owner_address: { _eq: address }
          };
          const graphqlQuery = {
            query: GetAccountCoinsData,
            variables: {
              where_condition: whereCondition,
              offset: (_a = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _a.offset,
              limit: (_b = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _b.limit,
              order_by: extraArgs == null ? void 0 : extraArgs.orderBy
            }
          };
          return this.queryIndexer(graphqlQuery);
        }
        /**
         * Queries an account coin data count
         *
         * @param ownerAddress Owner address
         * @returns GetAccountCoinsDataCountQuery response type
         */
        async getAccountCoinsDataCount(ownerAddress) {
          const address = HexString.ensure(ownerAddress).hex();
          _IndexerClient.validateAddress(address);
          const graphqlQuery = {
            query: GetAccountCoinsDataCount,
            variables: {
              address
            }
          };
          return this.queryIndexer(graphqlQuery);
        }
        /**
         * Queries an account owned objects
         *
         * @param ownerAddress Owner address
         * @returns GetCurrentObjectsQuery response type
         */
        async getAccountOwnedObjects(ownerAddress, extraArgs) {
          var _a, _b;
          const address = HexString.ensure(ownerAddress).hex();
          _IndexerClient.validateAddress(address);
          const whereCondition = {
            owner_address: { _eq: address }
          };
          const graphqlQuery = {
            query: GetCurrentObjects,
            variables: {
              where_condition: whereCondition,
              offset: (_a = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _a.offset,
              limit: (_b = extraArgs == null ? void 0 : extraArgs.options) == null ? void 0 : _b.limit,
              order_by: extraArgs == null ? void 0 : extraArgs.orderBy
            }
          };
          return this.queryIndexer(graphqlQuery);
        }
      };
      Provider = class {
        constructor(network, config, doNotFixNodeUrl = false) {
          let fullNodeUrl = null;
          let indexerUrl = null;
          if (typeof network === "object" && isCustomEndpoints(network)) {
            fullNodeUrl = network.fullnodeUrl;
            indexerUrl = network.indexerUrl;
            this.network = "CUSTOM";
          } else {
            fullNodeUrl = NetworkToNodeAPI[network];
            indexerUrl = NetworkToIndexerAPI[network];
            this.network = network;
          }
          if (this.network === "CUSTOM" && !fullNodeUrl) {
            throw new Error("fullnode url is not provided");
          }
          if (indexerUrl) {
            this.indexerClient = new IndexerClient(indexerUrl, config);
          }
          this.aptosClient = new AptosClient(fullNodeUrl, config, doNotFixNodeUrl);
        }
      };
      applyMixin(Provider, AptosClient, "aptosClient");
      applyMixin(Provider, IndexerClient, "indexerClient");
      PropertyValue = class {
        constructor(type, value) {
          this.type = type;
          this.value = value;
        }
      };
      PropertyMap = class {
        constructor() {
          this.data = {};
        }
        setProperty(key, value) {
          this.data[key] = value;
        }
      };
      token_types_exports = {};
      __export2(token_types_exports, {
        PropertyMap: () => PropertyMap,
        PropertyValue: () => PropertyValue,
        Token: () => Token,
        TokenData: () => TokenData
      });
      TokenData = class {
        constructor(collection, description, name, maximum, supply, uri, default_properties, mutability_config) {
          this.collection = collection;
          this.description = description;
          this.name = name;
          this.maximum = maximum;
          this.supply = supply;
          this.uri = uri;
          this.default_properties = deserializePropertyMap(default_properties);
          this.mutability_config = mutability_config;
        }
      };
      Token = class {
        constructor(id, amount, token_properties) {
          this.id = id;
          this.amount = amount;
          this.token_properties = deserializePropertyMap(token_properties);
        }
      };
      namePattern = new RegExp(
        "^(?:(?<subdomain>[^.]+)\\.(?!apt$))?(?<domain>[^.]+)(?:\\.apt)?$"
      );
      generated_exports = {};
      __export2(generated_exports, {
        AptosErrorCode: () => AptosErrorCode,
        MoveFunctionVisibility: () => MoveFunctionVisibility,
        RoleType: () => RoleType
      });
      AptosErrorCode = /* @__PURE__ */ ((AptosErrorCode2) => {
        AptosErrorCode2["ACCOUNT_NOT_FOUND"] = "account_not_found";
        AptosErrorCode2["RESOURCE_NOT_FOUND"] = "resource_not_found";
        AptosErrorCode2["MODULE_NOT_FOUND"] = "module_not_found";
        AptosErrorCode2["STRUCT_FIELD_NOT_FOUND"] = "struct_field_not_found";
        AptosErrorCode2["VERSION_NOT_FOUND"] = "version_not_found";
        AptosErrorCode2["TRANSACTION_NOT_FOUND"] = "transaction_not_found";
        AptosErrorCode2["TABLE_ITEM_NOT_FOUND"] = "table_item_not_found";
        AptosErrorCode2["BLOCK_NOT_FOUND"] = "block_not_found";
        AptosErrorCode2["STATE_VALUE_NOT_FOUND"] = "state_value_not_found";
        AptosErrorCode2["VERSION_PRUNED"] = "version_pruned";
        AptosErrorCode2["BLOCK_PRUNED"] = "block_pruned";
        AptosErrorCode2["INVALID_INPUT"] = "invalid_input";
        AptosErrorCode2["INVALID_TRANSACTION_UPDATE"] = "invalid_transaction_update";
        AptosErrorCode2["SEQUENCE_NUMBER_TOO_OLD"] = "sequence_number_too_old";
        AptosErrorCode2["VM_ERROR"] = "vm_error";
        AptosErrorCode2["HEALTH_CHECK_FAILED"] = "health_check_failed";
        AptosErrorCode2["MEMPOOL_IS_FULL"] = "mempool_is_full";
        AptosErrorCode2["INTERNAL_ERROR"] = "internal_error";
        AptosErrorCode2["WEB_FRAMEWORK_ERROR"] = "web_framework_error";
        AptosErrorCode2["BCS_NOT_SUPPORTED"] = "bcs_not_supported";
        AptosErrorCode2["API_DISABLED"] = "api_disabled";
        return AptosErrorCode2;
      })(AptosErrorCode || {});
      MoveFunctionVisibility = /* @__PURE__ */ ((MoveFunctionVisibility2) => {
        MoveFunctionVisibility2["PRIVATE"] = "private";
        MoveFunctionVisibility2["PUBLIC"] = "public";
        MoveFunctionVisibility2["FRIEND"] = "friend";
        return MoveFunctionVisibility2;
      })(MoveFunctionVisibility || {});
      RoleType = /* @__PURE__ */ ((RoleType2) => {
        RoleType2["VALIDATOR"] = "validator";
        RoleType2["FULL_NODE"] = "full_node";
        return RoleType2;
      })(RoleType || {});
    }
  });

  // node_modules/supra-l1-sdk/node_modules/js-sha3/src/sha3.js
  var require_sha3 = __commonJS({
    "node_modules/supra-l1-sdk/node_modules/js-sha3/src/sha3.js"(exports, module) {
      init_supra_shim();
      (function() {
        "use strict";
        var INPUT_ERROR = "input is invalid type";
        var FINALIZE_ERROR = "finalize already called";
        var WINDOW = typeof window === "object";
        var root = WINDOW ? window : {};
        if (root.JS_SHA3_NO_WINDOW) {
          WINDOW = false;
        }
        var WEB_WORKER = !WINDOW && typeof self === "object";
        var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
        if (NODE_JS) {
          root = global;
        } else if (WEB_WORKER) {
          root = self;
        }
        var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && typeof module === "object" && module.exports;
        var AMD = typeof define === "function" && define.amd;
        var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
        var HEX_CHARS = "0123456789abcdef".split("");
        var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
        var CSHAKE_PADDING = [4, 1024, 262144, 67108864];
        var KECCAK_PADDING = [1, 256, 65536, 16777216];
        var PADDING = [6, 1536, 393216, 100663296];
        var SHIFT = [0, 8, 16, 24];
        var RC = [
          1,
          0,
          32898,
          0,
          32906,
          2147483648,
          2147516416,
          2147483648,
          32907,
          0,
          2147483649,
          0,
          2147516545,
          2147483648,
          32777,
          2147483648,
          138,
          0,
          136,
          0,
          2147516425,
          0,
          2147483658,
          0,
          2147516555,
          0,
          139,
          2147483648,
          32905,
          2147483648,
          32771,
          2147483648,
          32770,
          2147483648,
          128,
          2147483648,
          32778,
          0,
          2147483658,
          2147483648,
          2147516545,
          2147483648,
          32896,
          2147483648,
          2147483649,
          0,
          2147516424,
          2147483648
        ];
        var BITS = [224, 256, 384, 512];
        var SHAKE_BITS = [128, 256];
        var OUTPUT_TYPES = ["hex", "buffer", "arrayBuffer", "array", "digest"];
        var CSHAKE_BYTEPAD = {
          "128": 168,
          "256": 136
        };
        var isArray2 = root.JS_SHA3_NO_NODE_JS || !Array.isArray ? function(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        } : Array.isArray;
        var isView = ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) ? function(obj) {
          return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        } : ArrayBuffer.isView;
        var formatMessage = function(message) {
          var type = typeof message;
          if (type === "string") {
            return [message, true];
          }
          if (type !== "object" || message === null) {
            throw new Error(INPUT_ERROR);
          }
          if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
            return [new Uint8Array(message), false];
          }
          if (!isArray2(message) && !isView(message)) {
            throw new Error(INPUT_ERROR);
          }
          return [message, false];
        };
        var empty = function(message) {
          return formatMessage(message)[0].length === 0;
        };
        var cloneArray = function(array) {
          var newArray = [];
          for (var i2 = 0; i2 < array.length; ++i2) {
            newArray[i2] = array[i2];
          }
          return newArray;
        };
        var createOutputMethod = function(bits2, padding, outputType) {
          return function(message) {
            return new Keccak2(bits2, padding, bits2).update(message)[outputType]();
          };
        };
        var createShakeOutputMethod = function(bits2, padding, outputType) {
          return function(message, outputBits) {
            return new Keccak2(bits2, padding, outputBits).update(message)[outputType]();
          };
        };
        var createCshakeOutputMethod = function(bits2, padding, outputType) {
          return function(message, outputBits, n, s) {
            return methods["cshake" + bits2].update(message, outputBits, n, s)[outputType]();
          };
        };
        var createKmacOutputMethod = function(bits2, padding, outputType) {
          return function(key, message, outputBits, s) {
            return methods["kmac" + bits2].update(key, message, outputBits, s)[outputType]();
          };
        };
        var createOutputMethods = function(method2, createMethod2, bits2, padding) {
          for (var i2 = 0; i2 < OUTPUT_TYPES.length; ++i2) {
            var type = OUTPUT_TYPES[i2];
            method2[type] = createMethod2(bits2, padding, type);
          }
          return method2;
        };
        var createMethod = function(bits2, padding) {
          var method2 = createOutputMethod(bits2, padding, "hex");
          method2.create = function() {
            return new Keccak2(bits2, padding, bits2);
          };
          method2.update = function(message) {
            return method2.create().update(message);
          };
          return createOutputMethods(method2, createOutputMethod, bits2, padding);
        };
        var createShakeMethod = function(bits2, padding) {
          var method2 = createShakeOutputMethod(bits2, padding, "hex");
          method2.create = function(outputBits) {
            return new Keccak2(bits2, padding, outputBits);
          };
          method2.update = function(message, outputBits) {
            return method2.create(outputBits).update(message);
          };
          return createOutputMethods(method2, createShakeOutputMethod, bits2, padding);
        };
        var createCshakeMethod = function(bits2, padding) {
          var w2 = CSHAKE_BYTEPAD[bits2];
          var method2 = createCshakeOutputMethod(bits2, padding, "hex");
          method2.create = function(outputBits, n, s) {
            if (empty(n) && empty(s)) {
              return methods["shake" + bits2].create(outputBits);
            } else {
              return new Keccak2(bits2, padding, outputBits).bytepad([n, s], w2);
            }
          };
          method2.update = function(message, outputBits, n, s) {
            return method2.create(outputBits, n, s).update(message);
          };
          return createOutputMethods(method2, createCshakeOutputMethod, bits2, padding);
        };
        var createKmacMethod = function(bits2, padding) {
          var w2 = CSHAKE_BYTEPAD[bits2];
          var method2 = createKmacOutputMethod(bits2, padding, "hex");
          method2.create = function(key, outputBits, s) {
            return new Kmac(bits2, padding, outputBits).bytepad(["KMAC", s], w2).bytepad([key], w2);
          };
          method2.update = function(key, message, outputBits, s) {
            return method2.create(key, outputBits, s).update(message);
          };
          return createOutputMethods(method2, createKmacOutputMethod, bits2, padding);
        };
        var algorithms = [
          { name: "keccak", padding: KECCAK_PADDING, bits: BITS, createMethod },
          { name: "sha3", padding: PADDING, bits: BITS, createMethod },
          { name: "shake", padding: SHAKE_PADDING, bits: SHAKE_BITS, createMethod: createShakeMethod },
          { name: "cshake", padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createCshakeMethod },
          { name: "kmac", padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createKmacMethod }
        ];
        var methods = {}, methodNames = [];
        for (var i = 0; i < algorithms.length; ++i) {
          var algorithm = algorithms[i];
          var bits = algorithm.bits;
          for (var j2 = 0; j2 < bits.length; ++j2) {
            var methodName = algorithm.name + "_" + bits[j2];
            methodNames.push(methodName);
            methods[methodName] = algorithm.createMethod(bits[j2], algorithm.padding);
            if (algorithm.name !== "sha3") {
              var newMethodName = algorithm.name + bits[j2];
              methodNames.push(newMethodName);
              methods[newMethodName] = methods[methodName];
            }
          }
        }
        function Keccak2(bits2, padding, outputBits) {
          this.blocks = [];
          this.s = [];
          this.padding = padding;
          this.outputBits = outputBits;
          this.reset = true;
          this.finalized = false;
          this.block = 0;
          this.start = 0;
          this.blockCount = 1600 - (bits2 << 1) >> 5;
          this.byteCount = this.blockCount << 2;
          this.outputBlocks = outputBits >> 5;
          this.extraBytes = (outputBits & 31) >> 3;
          for (var i2 = 0; i2 < 50; ++i2) {
            this.s[i2] = 0;
          }
        }
        Keccak2.prototype.update = function(message) {
          if (this.finalized) {
            throw new Error(FINALIZE_ERROR);
          }
          var result = formatMessage(message);
          message = result[0];
          var isString2 = result[1];
          var blocks = this.blocks, byteCount = this.byteCount, length = message.length, blockCount = this.blockCount, index = 0, s = this.s, i2, code;
          while (index < length) {
            if (this.reset) {
              this.reset = false;
              blocks[0] = this.block;
              for (i2 = 1; i2 < blockCount + 1; ++i2) {
                blocks[i2] = 0;
              }
            }
            if (isString2) {
              for (i2 = this.start; index < length && i2 < byteCount; ++index) {
                code = message.charCodeAt(index);
                if (code < 128) {
                  blocks[i2 >> 2] |= code << SHIFT[i2++ & 3];
                } else if (code < 2048) {
                  blocks[i2 >> 2] |= (192 | code >> 6) << SHIFT[i2++ & 3];
                  blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
                } else if (code < 55296 || code >= 57344) {
                  blocks[i2 >> 2] |= (224 | code >> 12) << SHIFT[i2++ & 3];
                  blocks[i2 >> 2] |= (128 | code >> 6 & 63) << SHIFT[i2++ & 3];
                  blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
                } else {
                  code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                  blocks[i2 >> 2] |= (240 | code >> 18) << SHIFT[i2++ & 3];
                  blocks[i2 >> 2] |= (128 | code >> 12 & 63) << SHIFT[i2++ & 3];
                  blocks[i2 >> 2] |= (128 | code >> 6 & 63) << SHIFT[i2++ & 3];
                  blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
                }
              }
            } else {
              for (i2 = this.start; index < length && i2 < byteCount; ++index) {
                blocks[i2 >> 2] |= message[index] << SHIFT[i2++ & 3];
              }
            }
            this.lastByteIndex = i2;
            if (i2 >= byteCount) {
              this.start = i2 - byteCount;
              this.block = blocks[blockCount];
              for (i2 = 0; i2 < blockCount; ++i2) {
                s[i2] ^= blocks[i2];
              }
              f(s);
              this.reset = true;
            } else {
              this.start = i2;
            }
          }
          return this;
        };
        Keccak2.prototype.encode = function(x, right) {
          var o = x & 255, n = 1;
          var bytes2 = [o];
          x = x >> 8;
          o = x & 255;
          while (o > 0) {
            bytes2.unshift(o);
            x = x >> 8;
            o = x & 255;
            ++n;
          }
          if (right) {
            bytes2.push(n);
          } else {
            bytes2.unshift(n);
          }
          this.update(bytes2);
          return bytes2.length;
        };
        Keccak2.prototype.encodeString = function(str) {
          var result = formatMessage(str);
          str = result[0];
          var isString2 = result[1];
          var bytes2 = 0, length = str.length;
          if (isString2) {
            for (var i2 = 0; i2 < str.length; ++i2) {
              var code = str.charCodeAt(i2);
              if (code < 128) {
                bytes2 += 1;
              } else if (code < 2048) {
                bytes2 += 2;
              } else if (code < 55296 || code >= 57344) {
                bytes2 += 3;
              } else {
                code = 65536 + ((code & 1023) << 10 | str.charCodeAt(++i2) & 1023);
                bytes2 += 4;
              }
            }
          } else {
            bytes2 = length;
          }
          bytes2 += this.encode(bytes2 * 8);
          this.update(str);
          return bytes2;
        };
        Keccak2.prototype.bytepad = function(strs, w2) {
          var bytes2 = this.encode(w2);
          for (var i2 = 0; i2 < strs.length; ++i2) {
            bytes2 += this.encodeString(strs[i2]);
          }
          var paddingBytes = (w2 - bytes2 % w2) % w2;
          var zeros = [];
          zeros.length = paddingBytes;
          this.update(zeros);
          return this;
        };
        Keccak2.prototype.finalize = function() {
          if (this.finalized) {
            return;
          }
          this.finalized = true;
          var blocks = this.blocks, i2 = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
          blocks[i2 >> 2] |= this.padding[i2 & 3];
          if (this.lastByteIndex === this.byteCount) {
            blocks[0] = blocks[blockCount];
            for (i2 = 1; i2 < blockCount + 1; ++i2) {
              blocks[i2] = 0;
            }
          }
          blocks[blockCount - 1] |= 2147483648;
          for (i2 = 0; i2 < blockCount; ++i2) {
            s[i2] ^= blocks[i2];
          }
          f(s);
        };
        Keccak2.prototype.toString = Keccak2.prototype.hex = function() {
          this.finalize();
          var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j3 = 0;
          var hex = "", block;
          while (j3 < outputBlocks) {
            for (i2 = 0; i2 < blockCount && j3 < outputBlocks; ++i2, ++j3) {
              block = s[i2];
              hex += HEX_CHARS[block >> 4 & 15] + HEX_CHARS[block & 15] + HEX_CHARS[block >> 12 & 15] + HEX_CHARS[block >> 8 & 15] + HEX_CHARS[block >> 20 & 15] + HEX_CHARS[block >> 16 & 15] + HEX_CHARS[block >> 28 & 15] + HEX_CHARS[block >> 24 & 15];
            }
            if (j3 % blockCount === 0) {
              s = cloneArray(s);
              f(s);
              i2 = 0;
            }
          }
          if (extraBytes) {
            block = s[i2];
            hex += HEX_CHARS[block >> 4 & 15] + HEX_CHARS[block & 15];
            if (extraBytes > 1) {
              hex += HEX_CHARS[block >> 12 & 15] + HEX_CHARS[block >> 8 & 15];
            }
            if (extraBytes > 2) {
              hex += HEX_CHARS[block >> 20 & 15] + HEX_CHARS[block >> 16 & 15];
            }
          }
          return hex;
        };
        Keccak2.prototype.arrayBuffer = function() {
          this.finalize();
          var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j3 = 0;
          var bytes2 = this.outputBits >> 3;
          var buffer;
          if (extraBytes) {
            buffer = new ArrayBuffer(outputBlocks + 1 << 2);
          } else {
            buffer = new ArrayBuffer(bytes2);
          }
          var array = new Uint32Array(buffer);
          while (j3 < outputBlocks) {
            for (i2 = 0; i2 < blockCount && j3 < outputBlocks; ++i2, ++j3) {
              array[j3] = s[i2];
            }
            if (j3 % blockCount === 0) {
              s = cloneArray(s);
              f(s);
            }
          }
          if (extraBytes) {
            array[j3] = s[i2];
            buffer = buffer.slice(0, bytes2);
          }
          return buffer;
        };
        Keccak2.prototype.buffer = Keccak2.prototype.arrayBuffer;
        Keccak2.prototype.digest = Keccak2.prototype.array = function() {
          this.finalize();
          var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j3 = 0;
          var array = [], offset, block;
          while (j3 < outputBlocks) {
            for (i2 = 0; i2 < blockCount && j3 < outputBlocks; ++i2, ++j3) {
              offset = j3 << 2;
              block = s[i2];
              array[offset] = block & 255;
              array[offset + 1] = block >> 8 & 255;
              array[offset + 2] = block >> 16 & 255;
              array[offset + 3] = block >> 24 & 255;
            }
            if (j3 % blockCount === 0) {
              s = cloneArray(s);
              f(s);
            }
          }
          if (extraBytes) {
            offset = j3 << 2;
            block = s[i2];
            array[offset] = block & 255;
            if (extraBytes > 1) {
              array[offset + 1] = block >> 8 & 255;
            }
            if (extraBytes > 2) {
              array[offset + 2] = block >> 16 & 255;
            }
          }
          return array;
        };
        function Kmac(bits2, padding, outputBits) {
          Keccak2.call(this, bits2, padding, outputBits);
        }
        Kmac.prototype = new Keccak2();
        Kmac.prototype.finalize = function() {
          this.encode(this.outputBits, true);
          return Keccak2.prototype.finalize.call(this);
        };
        var f = function(s) {
          var h2, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
          for (n = 0; n < 48; n += 2) {
            c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
            c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
            c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
            c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
            c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
            c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
            c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
            c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
            c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
            c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
            h2 = c8 ^ (c2 << 1 | c3 >>> 31);
            l = c9 ^ (c3 << 1 | c2 >>> 31);
            s[0] ^= h2;
            s[1] ^= l;
            s[10] ^= h2;
            s[11] ^= l;
            s[20] ^= h2;
            s[21] ^= l;
            s[30] ^= h2;
            s[31] ^= l;
            s[40] ^= h2;
            s[41] ^= l;
            h2 = c0 ^ (c4 << 1 | c5 >>> 31);
            l = c1 ^ (c5 << 1 | c4 >>> 31);
            s[2] ^= h2;
            s[3] ^= l;
            s[12] ^= h2;
            s[13] ^= l;
            s[22] ^= h2;
            s[23] ^= l;
            s[32] ^= h2;
            s[33] ^= l;
            s[42] ^= h2;
            s[43] ^= l;
            h2 = c2 ^ (c6 << 1 | c7 >>> 31);
            l = c3 ^ (c7 << 1 | c6 >>> 31);
            s[4] ^= h2;
            s[5] ^= l;
            s[14] ^= h2;
            s[15] ^= l;
            s[24] ^= h2;
            s[25] ^= l;
            s[34] ^= h2;
            s[35] ^= l;
            s[44] ^= h2;
            s[45] ^= l;
            h2 = c4 ^ (c8 << 1 | c9 >>> 31);
            l = c5 ^ (c9 << 1 | c8 >>> 31);
            s[6] ^= h2;
            s[7] ^= l;
            s[16] ^= h2;
            s[17] ^= l;
            s[26] ^= h2;
            s[27] ^= l;
            s[36] ^= h2;
            s[37] ^= l;
            s[46] ^= h2;
            s[47] ^= l;
            h2 = c6 ^ (c0 << 1 | c1 >>> 31);
            l = c7 ^ (c1 << 1 | c0 >>> 31);
            s[8] ^= h2;
            s[9] ^= l;
            s[18] ^= h2;
            s[19] ^= l;
            s[28] ^= h2;
            s[29] ^= l;
            s[38] ^= h2;
            s[39] ^= l;
            s[48] ^= h2;
            s[49] ^= l;
            b0 = s[0];
            b1 = s[1];
            b32 = s[11] << 4 | s[10] >>> 28;
            b33 = s[10] << 4 | s[11] >>> 28;
            b14 = s[20] << 3 | s[21] >>> 29;
            b15 = s[21] << 3 | s[20] >>> 29;
            b46 = s[31] << 9 | s[30] >>> 23;
            b47 = s[30] << 9 | s[31] >>> 23;
            b28 = s[40] << 18 | s[41] >>> 14;
            b29 = s[41] << 18 | s[40] >>> 14;
            b20 = s[2] << 1 | s[3] >>> 31;
            b21 = s[3] << 1 | s[2] >>> 31;
            b2 = s[13] << 12 | s[12] >>> 20;
            b3 = s[12] << 12 | s[13] >>> 20;
            b34 = s[22] << 10 | s[23] >>> 22;
            b35 = s[23] << 10 | s[22] >>> 22;
            b16 = s[33] << 13 | s[32] >>> 19;
            b17 = s[32] << 13 | s[33] >>> 19;
            b48 = s[42] << 2 | s[43] >>> 30;
            b49 = s[43] << 2 | s[42] >>> 30;
            b40 = s[5] << 30 | s[4] >>> 2;
            b41 = s[4] << 30 | s[5] >>> 2;
            b22 = s[14] << 6 | s[15] >>> 26;
            b23 = s[15] << 6 | s[14] >>> 26;
            b4 = s[25] << 11 | s[24] >>> 21;
            b5 = s[24] << 11 | s[25] >>> 21;
            b36 = s[34] << 15 | s[35] >>> 17;
            b37 = s[35] << 15 | s[34] >>> 17;
            b18 = s[45] << 29 | s[44] >>> 3;
            b19 = s[44] << 29 | s[45] >>> 3;
            b10 = s[6] << 28 | s[7] >>> 4;
            b11 = s[7] << 28 | s[6] >>> 4;
            b42 = s[17] << 23 | s[16] >>> 9;
            b43 = s[16] << 23 | s[17] >>> 9;
            b24 = s[26] << 25 | s[27] >>> 7;
            b25 = s[27] << 25 | s[26] >>> 7;
            b6 = s[36] << 21 | s[37] >>> 11;
            b7 = s[37] << 21 | s[36] >>> 11;
            b38 = s[47] << 24 | s[46] >>> 8;
            b39 = s[46] << 24 | s[47] >>> 8;
            b30 = s[8] << 27 | s[9] >>> 5;
            b31 = s[9] << 27 | s[8] >>> 5;
            b12 = s[18] << 20 | s[19] >>> 12;
            b13 = s[19] << 20 | s[18] >>> 12;
            b44 = s[29] << 7 | s[28] >>> 25;
            b45 = s[28] << 7 | s[29] >>> 25;
            b26 = s[38] << 8 | s[39] >>> 24;
            b27 = s[39] << 8 | s[38] >>> 24;
            b8 = s[48] << 14 | s[49] >>> 18;
            b9 = s[49] << 14 | s[48] >>> 18;
            s[0] = b0 ^ ~b2 & b4;
            s[1] = b1 ^ ~b3 & b5;
            s[10] = b10 ^ ~b12 & b14;
            s[11] = b11 ^ ~b13 & b15;
            s[20] = b20 ^ ~b22 & b24;
            s[21] = b21 ^ ~b23 & b25;
            s[30] = b30 ^ ~b32 & b34;
            s[31] = b31 ^ ~b33 & b35;
            s[40] = b40 ^ ~b42 & b44;
            s[41] = b41 ^ ~b43 & b45;
            s[2] = b2 ^ ~b4 & b6;
            s[3] = b3 ^ ~b5 & b7;
            s[12] = b12 ^ ~b14 & b16;
            s[13] = b13 ^ ~b15 & b17;
            s[22] = b22 ^ ~b24 & b26;
            s[23] = b23 ^ ~b25 & b27;
            s[32] = b32 ^ ~b34 & b36;
            s[33] = b33 ^ ~b35 & b37;
            s[42] = b42 ^ ~b44 & b46;
            s[43] = b43 ^ ~b45 & b47;
            s[4] = b4 ^ ~b6 & b8;
            s[5] = b5 ^ ~b7 & b9;
            s[14] = b14 ^ ~b16 & b18;
            s[15] = b15 ^ ~b17 & b19;
            s[24] = b24 ^ ~b26 & b28;
            s[25] = b25 ^ ~b27 & b29;
            s[34] = b34 ^ ~b36 & b38;
            s[35] = b35 ^ ~b37 & b39;
            s[44] = b44 ^ ~b46 & b48;
            s[45] = b45 ^ ~b47 & b49;
            s[6] = b6 ^ ~b8 & b0;
            s[7] = b7 ^ ~b9 & b1;
            s[16] = b16 ^ ~b18 & b10;
            s[17] = b17 ^ ~b19 & b11;
            s[26] = b26 ^ ~b28 & b20;
            s[27] = b27 ^ ~b29 & b21;
            s[36] = b36 ^ ~b38 & b30;
            s[37] = b37 ^ ~b39 & b31;
            s[46] = b46 ^ ~b48 & b40;
            s[47] = b47 ^ ~b49 & b41;
            s[8] = b8 ^ ~b0 & b2;
            s[9] = b9 ^ ~b1 & b3;
            s[18] = b18 ^ ~b10 & b12;
            s[19] = b19 ^ ~b11 & b13;
            s[28] = b28 ^ ~b20 & b22;
            s[29] = b29 ^ ~b21 & b23;
            s[38] = b38 ^ ~b30 & b32;
            s[39] = b39 ^ ~b31 & b33;
            s[48] = b48 ^ ~b40 & b42;
            s[49] = b49 ^ ~b41 & b43;
            s[0] ^= RC[n];
            s[1] ^= RC[n + 1];
          }
        };
        if (COMMON_JS) {
          module.exports = methods;
        } else {
          for (i = 0; i < methodNames.length; ++i) {
            root[methodNames[i]] = methods[methodNames[i]];
          }
          if (AMD) {
            define(function() {
              return methods;
            });
          }
        }
      })();
    }
  });

  // node_modules/js-sha3/src/sha3.js
  var require_sha32 = __commonJS({
    "node_modules/js-sha3/src/sha3.js"(exports, module) {
      init_supra_shim();
      (function() {
        "use strict";
        var INPUT_ERROR = "input is invalid type";
        var FINALIZE_ERROR = "finalize already called";
        var WINDOW = typeof window === "object";
        var root = WINDOW ? window : {};
        if (root.JS_SHA3_NO_WINDOW) {
          WINDOW = false;
        }
        var WEB_WORKER = !WINDOW && typeof self === "object";
        var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
        if (NODE_JS) {
          root = global;
        } else if (WEB_WORKER) {
          root = self;
        }
        var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && typeof module === "object" && module.exports;
        var AMD = typeof define === "function" && define.amd;
        var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
        var HEX_CHARS = "0123456789abcdef".split("");
        var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
        var CSHAKE_PADDING = [4, 1024, 262144, 67108864];
        var KECCAK_PADDING = [1, 256, 65536, 16777216];
        var PADDING = [6, 1536, 393216, 100663296];
        var SHIFT = [0, 8, 16, 24];
        var RC = [
          1,
          0,
          32898,
          0,
          32906,
          2147483648,
          2147516416,
          2147483648,
          32907,
          0,
          2147483649,
          0,
          2147516545,
          2147483648,
          32777,
          2147483648,
          138,
          0,
          136,
          0,
          2147516425,
          0,
          2147483658,
          0,
          2147516555,
          0,
          139,
          2147483648,
          32905,
          2147483648,
          32771,
          2147483648,
          32770,
          2147483648,
          128,
          2147483648,
          32778,
          0,
          2147483658,
          2147483648,
          2147516545,
          2147483648,
          32896,
          2147483648,
          2147483649,
          0,
          2147516424,
          2147483648
        ];
        var BITS = [224, 256, 384, 512];
        var SHAKE_BITS = [128, 256];
        var OUTPUT_TYPES = ["hex", "buffer", "arrayBuffer", "array", "digest"];
        var CSHAKE_BYTEPAD = {
          "128": 168,
          "256": 136
        };
        if (root.JS_SHA3_NO_NODE_JS || !Array.isArray) {
          Array.isArray = function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]";
          };
        }
        if (ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
          ArrayBuffer.isView = function(obj) {
            return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
          };
        }
        var createOutputMethod = function(bits2, padding, outputType) {
          return function(message) {
            return new Keccak2(bits2, padding, bits2).update(message)[outputType]();
          };
        };
        var createShakeOutputMethod = function(bits2, padding, outputType) {
          return function(message, outputBits) {
            return new Keccak2(bits2, padding, outputBits).update(message)[outputType]();
          };
        };
        var createCshakeOutputMethod = function(bits2, padding, outputType) {
          return function(message, outputBits, n, s) {
            return methods["cshake" + bits2].update(message, outputBits, n, s)[outputType]();
          };
        };
        var createKmacOutputMethod = function(bits2, padding, outputType) {
          return function(key, message, outputBits, s) {
            return methods["kmac" + bits2].update(key, message, outputBits, s)[outputType]();
          };
        };
        var createOutputMethods = function(method2, createMethod2, bits2, padding) {
          for (var i2 = 0; i2 < OUTPUT_TYPES.length; ++i2) {
            var type = OUTPUT_TYPES[i2];
            method2[type] = createMethod2(bits2, padding, type);
          }
          return method2;
        };
        var createMethod = function(bits2, padding) {
          var method2 = createOutputMethod(bits2, padding, "hex");
          method2.create = function() {
            return new Keccak2(bits2, padding, bits2);
          };
          method2.update = function(message) {
            return method2.create().update(message);
          };
          return createOutputMethods(method2, createOutputMethod, bits2, padding);
        };
        var createShakeMethod = function(bits2, padding) {
          var method2 = createShakeOutputMethod(bits2, padding, "hex");
          method2.create = function(outputBits) {
            return new Keccak2(bits2, padding, outputBits);
          };
          method2.update = function(message, outputBits) {
            return method2.create(outputBits).update(message);
          };
          return createOutputMethods(method2, createShakeOutputMethod, bits2, padding);
        };
        var createCshakeMethod = function(bits2, padding) {
          var w2 = CSHAKE_BYTEPAD[bits2];
          var method2 = createCshakeOutputMethod(bits2, padding, "hex");
          method2.create = function(outputBits, n, s) {
            if (!n && !s) {
              return methods["shake" + bits2].create(outputBits);
            } else {
              return new Keccak2(bits2, padding, outputBits).bytepad([n, s], w2);
            }
          };
          method2.update = function(message, outputBits, n, s) {
            return method2.create(outputBits, n, s).update(message);
          };
          return createOutputMethods(method2, createCshakeOutputMethod, bits2, padding);
        };
        var createKmacMethod = function(bits2, padding) {
          var w2 = CSHAKE_BYTEPAD[bits2];
          var method2 = createKmacOutputMethod(bits2, padding, "hex");
          method2.create = function(key, outputBits, s) {
            return new Kmac(bits2, padding, outputBits).bytepad(["KMAC", s], w2).bytepad([key], w2);
          };
          method2.update = function(key, message, outputBits, s) {
            return method2.create(key, outputBits, s).update(message);
          };
          return createOutputMethods(method2, createKmacOutputMethod, bits2, padding);
        };
        var algorithms = [
          { name: "keccak", padding: KECCAK_PADDING, bits: BITS, createMethod },
          { name: "sha3", padding: PADDING, bits: BITS, createMethod },
          { name: "shake", padding: SHAKE_PADDING, bits: SHAKE_BITS, createMethod: createShakeMethod },
          { name: "cshake", padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createCshakeMethod },
          { name: "kmac", padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createKmacMethod }
        ];
        var methods = {}, methodNames = [];
        for (var i = 0; i < algorithms.length; ++i) {
          var algorithm = algorithms[i];
          var bits = algorithm.bits;
          for (var j2 = 0; j2 < bits.length; ++j2) {
            var methodName = algorithm.name + "_" + bits[j2];
            methodNames.push(methodName);
            methods[methodName] = algorithm.createMethod(bits[j2], algorithm.padding);
            if (algorithm.name !== "sha3") {
              var newMethodName = algorithm.name + bits[j2];
              methodNames.push(newMethodName);
              methods[newMethodName] = methods[methodName];
            }
          }
        }
        function Keccak2(bits2, padding, outputBits) {
          this.blocks = [];
          this.s = [];
          this.padding = padding;
          this.outputBits = outputBits;
          this.reset = true;
          this.finalized = false;
          this.block = 0;
          this.start = 0;
          this.blockCount = 1600 - (bits2 << 1) >> 5;
          this.byteCount = this.blockCount << 2;
          this.outputBlocks = outputBits >> 5;
          this.extraBytes = (outputBits & 31) >> 3;
          for (var i2 = 0; i2 < 50; ++i2) {
            this.s[i2] = 0;
          }
        }
        Keccak2.prototype.update = function(message) {
          if (this.finalized) {
            throw new Error(FINALIZE_ERROR);
          }
          var notString, type = typeof message;
          if (type !== "string") {
            if (type === "object") {
              if (message === null) {
                throw new Error(INPUT_ERROR);
              } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
                message = new Uint8Array(message);
              } else if (!Array.isArray(message)) {
                if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                  throw new Error(INPUT_ERROR);
                }
              }
            } else {
              throw new Error(INPUT_ERROR);
            }
            notString = true;
          }
          var blocks = this.blocks, byteCount = this.byteCount, length = message.length, blockCount = this.blockCount, index = 0, s = this.s, i2, code;
          while (index < length) {
            if (this.reset) {
              this.reset = false;
              blocks[0] = this.block;
              for (i2 = 1; i2 < blockCount + 1; ++i2) {
                blocks[i2] = 0;
              }
            }
            if (notString) {
              for (i2 = this.start; index < length && i2 < byteCount; ++index) {
                blocks[i2 >> 2] |= message[index] << SHIFT[i2++ & 3];
              }
            } else {
              for (i2 = this.start; index < length && i2 < byteCount; ++index) {
                code = message.charCodeAt(index);
                if (code < 128) {
                  blocks[i2 >> 2] |= code << SHIFT[i2++ & 3];
                } else if (code < 2048) {
                  blocks[i2 >> 2] |= (192 | code >> 6) << SHIFT[i2++ & 3];
                  blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
                } else if (code < 55296 || code >= 57344) {
                  blocks[i2 >> 2] |= (224 | code >> 12) << SHIFT[i2++ & 3];
                  blocks[i2 >> 2] |= (128 | code >> 6 & 63) << SHIFT[i2++ & 3];
                  blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
                } else {
                  code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                  blocks[i2 >> 2] |= (240 | code >> 18) << SHIFT[i2++ & 3];
                  blocks[i2 >> 2] |= (128 | code >> 12 & 63) << SHIFT[i2++ & 3];
                  blocks[i2 >> 2] |= (128 | code >> 6 & 63) << SHIFT[i2++ & 3];
                  blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
                }
              }
            }
            this.lastByteIndex = i2;
            if (i2 >= byteCount) {
              this.start = i2 - byteCount;
              this.block = blocks[blockCount];
              for (i2 = 0; i2 < blockCount; ++i2) {
                s[i2] ^= blocks[i2];
              }
              f(s);
              this.reset = true;
            } else {
              this.start = i2;
            }
          }
          return this;
        };
        Keccak2.prototype.encode = function(x, right) {
          var o = x & 255, n = 1;
          var bytes2 = [o];
          x = x >> 8;
          o = x & 255;
          while (o > 0) {
            bytes2.unshift(o);
            x = x >> 8;
            o = x & 255;
            ++n;
          }
          if (right) {
            bytes2.push(n);
          } else {
            bytes2.unshift(n);
          }
          this.update(bytes2);
          return bytes2.length;
        };
        Keccak2.prototype.encodeString = function(str) {
          var notString, type = typeof str;
          if (type !== "string") {
            if (type === "object") {
              if (str === null) {
                throw new Error(INPUT_ERROR);
              } else if (ARRAY_BUFFER && str.constructor === ArrayBuffer) {
                str = new Uint8Array(str);
              } else if (!Array.isArray(str)) {
                if (!ARRAY_BUFFER || !ArrayBuffer.isView(str)) {
                  throw new Error(INPUT_ERROR);
                }
              }
            } else {
              throw new Error(INPUT_ERROR);
            }
            notString = true;
          }
          var bytes2 = 0, length = str.length;
          if (notString) {
            bytes2 = length;
          } else {
            for (var i2 = 0; i2 < str.length; ++i2) {
              var code = str.charCodeAt(i2);
              if (code < 128) {
                bytes2 += 1;
              } else if (code < 2048) {
                bytes2 += 2;
              } else if (code < 55296 || code >= 57344) {
                bytes2 += 3;
              } else {
                code = 65536 + ((code & 1023) << 10 | str.charCodeAt(++i2) & 1023);
                bytes2 += 4;
              }
            }
          }
          bytes2 += this.encode(bytes2 * 8);
          this.update(str);
          return bytes2;
        };
        Keccak2.prototype.bytepad = function(strs, w2) {
          var bytes2 = this.encode(w2);
          for (var i2 = 0; i2 < strs.length; ++i2) {
            bytes2 += this.encodeString(strs[i2]);
          }
          var paddingBytes = w2 - bytes2 % w2;
          var zeros = [];
          zeros.length = paddingBytes;
          this.update(zeros);
          return this;
        };
        Keccak2.prototype.finalize = function() {
          if (this.finalized) {
            return;
          }
          this.finalized = true;
          var blocks = this.blocks, i2 = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
          blocks[i2 >> 2] |= this.padding[i2 & 3];
          if (this.lastByteIndex === this.byteCount) {
            blocks[0] = blocks[blockCount];
            for (i2 = 1; i2 < blockCount + 1; ++i2) {
              blocks[i2] = 0;
            }
          }
          blocks[blockCount - 1] |= 2147483648;
          for (i2 = 0; i2 < blockCount; ++i2) {
            s[i2] ^= blocks[i2];
          }
          f(s);
        };
        Keccak2.prototype.toString = Keccak2.prototype.hex = function() {
          this.finalize();
          var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j3 = 0;
          var hex = "", block;
          while (j3 < outputBlocks) {
            for (i2 = 0; i2 < blockCount && j3 < outputBlocks; ++i2, ++j3) {
              block = s[i2];
              hex += HEX_CHARS[block >> 4 & 15] + HEX_CHARS[block & 15] + HEX_CHARS[block >> 12 & 15] + HEX_CHARS[block >> 8 & 15] + HEX_CHARS[block >> 20 & 15] + HEX_CHARS[block >> 16 & 15] + HEX_CHARS[block >> 28 & 15] + HEX_CHARS[block >> 24 & 15];
            }
            if (j3 % blockCount === 0) {
              f(s);
              i2 = 0;
            }
          }
          if (extraBytes) {
            block = s[i2];
            hex += HEX_CHARS[block >> 4 & 15] + HEX_CHARS[block & 15];
            if (extraBytes > 1) {
              hex += HEX_CHARS[block >> 12 & 15] + HEX_CHARS[block >> 8 & 15];
            }
            if (extraBytes > 2) {
              hex += HEX_CHARS[block >> 20 & 15] + HEX_CHARS[block >> 16 & 15];
            }
          }
          return hex;
        };
        Keccak2.prototype.arrayBuffer = function() {
          this.finalize();
          var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j3 = 0;
          var bytes2 = this.outputBits >> 3;
          var buffer;
          if (extraBytes) {
            buffer = new ArrayBuffer(outputBlocks + 1 << 2);
          } else {
            buffer = new ArrayBuffer(bytes2);
          }
          var array = new Uint32Array(buffer);
          while (j3 < outputBlocks) {
            for (i2 = 0; i2 < blockCount && j3 < outputBlocks; ++i2, ++j3) {
              array[j3] = s[i2];
            }
            if (j3 % blockCount === 0) {
              f(s);
            }
          }
          if (extraBytes) {
            array[i2] = s[i2];
            buffer = buffer.slice(0, bytes2);
          }
          return buffer;
        };
        Keccak2.prototype.buffer = Keccak2.prototype.arrayBuffer;
        Keccak2.prototype.digest = Keccak2.prototype.array = function() {
          this.finalize();
          var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j3 = 0;
          var array = [], offset, block;
          while (j3 < outputBlocks) {
            for (i2 = 0; i2 < blockCount && j3 < outputBlocks; ++i2, ++j3) {
              offset = j3 << 2;
              block = s[i2];
              array[offset] = block & 255;
              array[offset + 1] = block >> 8 & 255;
              array[offset + 2] = block >> 16 & 255;
              array[offset + 3] = block >> 24 & 255;
            }
            if (j3 % blockCount === 0) {
              f(s);
            }
          }
          if (extraBytes) {
            offset = j3 << 2;
            block = s[i2];
            array[offset] = block & 255;
            if (extraBytes > 1) {
              array[offset + 1] = block >> 8 & 255;
            }
            if (extraBytes > 2) {
              array[offset + 2] = block >> 16 & 255;
            }
          }
          return array;
        };
        function Kmac(bits2, padding, outputBits) {
          Keccak2.call(this, bits2, padding, outputBits);
        }
        Kmac.prototype = new Keccak2();
        Kmac.prototype.finalize = function() {
          this.encode(this.outputBits, true);
          return Keccak2.prototype.finalize.call(this);
        };
        var f = function(s) {
          var h2, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
          for (n = 0; n < 48; n += 2) {
            c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
            c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
            c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
            c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
            c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
            c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
            c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
            c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
            c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
            c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
            h2 = c8 ^ (c2 << 1 | c3 >>> 31);
            l = c9 ^ (c3 << 1 | c2 >>> 31);
            s[0] ^= h2;
            s[1] ^= l;
            s[10] ^= h2;
            s[11] ^= l;
            s[20] ^= h2;
            s[21] ^= l;
            s[30] ^= h2;
            s[31] ^= l;
            s[40] ^= h2;
            s[41] ^= l;
            h2 = c0 ^ (c4 << 1 | c5 >>> 31);
            l = c1 ^ (c5 << 1 | c4 >>> 31);
            s[2] ^= h2;
            s[3] ^= l;
            s[12] ^= h2;
            s[13] ^= l;
            s[22] ^= h2;
            s[23] ^= l;
            s[32] ^= h2;
            s[33] ^= l;
            s[42] ^= h2;
            s[43] ^= l;
            h2 = c2 ^ (c6 << 1 | c7 >>> 31);
            l = c3 ^ (c7 << 1 | c6 >>> 31);
            s[4] ^= h2;
            s[5] ^= l;
            s[14] ^= h2;
            s[15] ^= l;
            s[24] ^= h2;
            s[25] ^= l;
            s[34] ^= h2;
            s[35] ^= l;
            s[44] ^= h2;
            s[45] ^= l;
            h2 = c4 ^ (c8 << 1 | c9 >>> 31);
            l = c5 ^ (c9 << 1 | c8 >>> 31);
            s[6] ^= h2;
            s[7] ^= l;
            s[16] ^= h2;
            s[17] ^= l;
            s[26] ^= h2;
            s[27] ^= l;
            s[36] ^= h2;
            s[37] ^= l;
            s[46] ^= h2;
            s[47] ^= l;
            h2 = c6 ^ (c0 << 1 | c1 >>> 31);
            l = c7 ^ (c1 << 1 | c0 >>> 31);
            s[8] ^= h2;
            s[9] ^= l;
            s[18] ^= h2;
            s[19] ^= l;
            s[28] ^= h2;
            s[29] ^= l;
            s[38] ^= h2;
            s[39] ^= l;
            s[48] ^= h2;
            s[49] ^= l;
            b0 = s[0];
            b1 = s[1];
            b32 = s[11] << 4 | s[10] >>> 28;
            b33 = s[10] << 4 | s[11] >>> 28;
            b14 = s[20] << 3 | s[21] >>> 29;
            b15 = s[21] << 3 | s[20] >>> 29;
            b46 = s[31] << 9 | s[30] >>> 23;
            b47 = s[30] << 9 | s[31] >>> 23;
            b28 = s[40] << 18 | s[41] >>> 14;
            b29 = s[41] << 18 | s[40] >>> 14;
            b20 = s[2] << 1 | s[3] >>> 31;
            b21 = s[3] << 1 | s[2] >>> 31;
            b2 = s[13] << 12 | s[12] >>> 20;
            b3 = s[12] << 12 | s[13] >>> 20;
            b34 = s[22] << 10 | s[23] >>> 22;
            b35 = s[23] << 10 | s[22] >>> 22;
            b16 = s[33] << 13 | s[32] >>> 19;
            b17 = s[32] << 13 | s[33] >>> 19;
            b48 = s[42] << 2 | s[43] >>> 30;
            b49 = s[43] << 2 | s[42] >>> 30;
            b40 = s[5] << 30 | s[4] >>> 2;
            b41 = s[4] << 30 | s[5] >>> 2;
            b22 = s[14] << 6 | s[15] >>> 26;
            b23 = s[15] << 6 | s[14] >>> 26;
            b4 = s[25] << 11 | s[24] >>> 21;
            b5 = s[24] << 11 | s[25] >>> 21;
            b36 = s[34] << 15 | s[35] >>> 17;
            b37 = s[35] << 15 | s[34] >>> 17;
            b18 = s[45] << 29 | s[44] >>> 3;
            b19 = s[44] << 29 | s[45] >>> 3;
            b10 = s[6] << 28 | s[7] >>> 4;
            b11 = s[7] << 28 | s[6] >>> 4;
            b42 = s[17] << 23 | s[16] >>> 9;
            b43 = s[16] << 23 | s[17] >>> 9;
            b24 = s[26] << 25 | s[27] >>> 7;
            b25 = s[27] << 25 | s[26] >>> 7;
            b6 = s[36] << 21 | s[37] >>> 11;
            b7 = s[37] << 21 | s[36] >>> 11;
            b38 = s[47] << 24 | s[46] >>> 8;
            b39 = s[46] << 24 | s[47] >>> 8;
            b30 = s[8] << 27 | s[9] >>> 5;
            b31 = s[9] << 27 | s[8] >>> 5;
            b12 = s[18] << 20 | s[19] >>> 12;
            b13 = s[19] << 20 | s[18] >>> 12;
            b44 = s[29] << 7 | s[28] >>> 25;
            b45 = s[28] << 7 | s[29] >>> 25;
            b26 = s[38] << 8 | s[39] >>> 24;
            b27 = s[39] << 8 | s[38] >>> 24;
            b8 = s[48] << 14 | s[49] >>> 18;
            b9 = s[49] << 14 | s[48] >>> 18;
            s[0] = b0 ^ ~b2 & b4;
            s[1] = b1 ^ ~b3 & b5;
            s[10] = b10 ^ ~b12 & b14;
            s[11] = b11 ^ ~b13 & b15;
            s[20] = b20 ^ ~b22 & b24;
            s[21] = b21 ^ ~b23 & b25;
            s[30] = b30 ^ ~b32 & b34;
            s[31] = b31 ^ ~b33 & b35;
            s[40] = b40 ^ ~b42 & b44;
            s[41] = b41 ^ ~b43 & b45;
            s[2] = b2 ^ ~b4 & b6;
            s[3] = b3 ^ ~b5 & b7;
            s[12] = b12 ^ ~b14 & b16;
            s[13] = b13 ^ ~b15 & b17;
            s[22] = b22 ^ ~b24 & b26;
            s[23] = b23 ^ ~b25 & b27;
            s[32] = b32 ^ ~b34 & b36;
            s[33] = b33 ^ ~b35 & b37;
            s[42] = b42 ^ ~b44 & b46;
            s[43] = b43 ^ ~b45 & b47;
            s[4] = b4 ^ ~b6 & b8;
            s[5] = b5 ^ ~b7 & b9;
            s[14] = b14 ^ ~b16 & b18;
            s[15] = b15 ^ ~b17 & b19;
            s[24] = b24 ^ ~b26 & b28;
            s[25] = b25 ^ ~b27 & b29;
            s[34] = b34 ^ ~b36 & b38;
            s[35] = b35 ^ ~b37 & b39;
            s[44] = b44 ^ ~b46 & b48;
            s[45] = b45 ^ ~b47 & b49;
            s[6] = b6 ^ ~b8 & b0;
            s[7] = b7 ^ ~b9 & b1;
            s[16] = b16 ^ ~b18 & b10;
            s[17] = b17 ^ ~b19 & b11;
            s[26] = b26 ^ ~b28 & b20;
            s[27] = b27 ^ ~b29 & b21;
            s[36] = b36 ^ ~b38 & b30;
            s[37] = b37 ^ ~b39 & b31;
            s[46] = b46 ^ ~b48 & b40;
            s[47] = b47 ^ ~b49 & b41;
            s[8] = b8 ^ ~b0 & b2;
            s[9] = b9 ^ ~b1 & b3;
            s[18] = b18 ^ ~b10 & b12;
            s[19] = b19 ^ ~b11 & b13;
            s[28] = b28 ^ ~b20 & b22;
            s[29] = b29 ^ ~b21 & b23;
            s[38] = b38 ^ ~b30 & b32;
            s[39] = b39 ^ ~b31 & b33;
            s[48] = b48 ^ ~b40 & b42;
            s[49] = b49 ^ ~b41 & b43;
            s[0] ^= RC[n];
            s[1] ^= RC[n + 1];
          }
        };
        if (COMMON_JS) {
          module.exports = methods;
        } else {
          for (i = 0; i < methodNames.length; ++i) {
            root[methodNames[i]] = methods[methodNames[i]];
          }
          if (AMD) {
            define(function() {
              return methods;
            });
          }
        }
      })();
    }
  });

  // node_modules/@ethersproject/logger/lib.esm/_version.js
  var version;
  var init_version = __esm({
    "node_modules/@ethersproject/logger/lib.esm/_version.js"() {
      init_supra_shim();
      version = "logger/5.7.0";
    }
  });

  // node_modules/@ethersproject/logger/lib.esm/index.js
  function _checkNormalize() {
    try {
      const missing = [];
      ["NFD", "NFC", "NFKD", "NFKC"].forEach((form) => {
        try {
          if ("test".normalize(form) !== "test") {
            throw new Error("bad normalize");
          }
          ;
        } catch (error) {
          missing.push(form);
        }
      });
      if (missing.length) {
        throw new Error("missing " + missing.join(", "));
      }
      if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) {
        throw new Error("broken implementation");
      }
    } catch (error) {
      return error.message;
    }
    return null;
  }
  var _permanentCensorErrors, _censorErrors, LogLevels, _logLevel, _globalLogger, _normalizeError, LogLevel, ErrorCode, HEX, Logger;
  var init_lib = __esm({
    "node_modules/@ethersproject/logger/lib.esm/index.js"() {
      "use strict";
      init_supra_shim();
      init_version();
      _permanentCensorErrors = false;
      _censorErrors = false;
      LogLevels = { debug: 1, "default": 2, info: 2, warning: 3, error: 4, off: 5 };
      _logLevel = LogLevels["default"];
      _globalLogger = null;
      _normalizeError = _checkNormalize();
      (function(LogLevel2) {
        LogLevel2["DEBUG"] = "DEBUG";
        LogLevel2["INFO"] = "INFO";
        LogLevel2["WARNING"] = "WARNING";
        LogLevel2["ERROR"] = "ERROR";
        LogLevel2["OFF"] = "OFF";
      })(LogLevel || (LogLevel = {}));
      (function(ErrorCode2) {
        ErrorCode2["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
        ErrorCode2["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED";
        ErrorCode2["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION";
        ErrorCode2["NETWORK_ERROR"] = "NETWORK_ERROR";
        ErrorCode2["SERVER_ERROR"] = "SERVER_ERROR";
        ErrorCode2["TIMEOUT"] = "TIMEOUT";
        ErrorCode2["BUFFER_OVERRUN"] = "BUFFER_OVERRUN";
        ErrorCode2["NUMERIC_FAULT"] = "NUMERIC_FAULT";
        ErrorCode2["MISSING_NEW"] = "MISSING_NEW";
        ErrorCode2["INVALID_ARGUMENT"] = "INVALID_ARGUMENT";
        ErrorCode2["MISSING_ARGUMENT"] = "MISSING_ARGUMENT";
        ErrorCode2["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT";
        ErrorCode2["CALL_EXCEPTION"] = "CALL_EXCEPTION";
        ErrorCode2["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS";
        ErrorCode2["NONCE_EXPIRED"] = "NONCE_EXPIRED";
        ErrorCode2["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED";
        ErrorCode2["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT";
        ErrorCode2["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED";
        ErrorCode2["ACTION_REJECTED"] = "ACTION_REJECTED";
      })(ErrorCode || (ErrorCode = {}));
      HEX = "0123456789abcdef";
      Logger = class _Logger {
        constructor(version3) {
          Object.defineProperty(this, "version", {
            enumerable: true,
            value: version3,
            writable: false
          });
        }
        _log(logLevel, args) {
          const level = logLevel.toLowerCase();
          if (LogLevels[level] == null) {
            this.throwArgumentError("invalid log level name", "logLevel", logLevel);
          }
          if (_logLevel > LogLevels[level]) {
            return;
          }
          console.log.apply(console, args);
        }
        debug(...args) {
          this._log(_Logger.levels.DEBUG, args);
        }
        info(...args) {
          this._log(_Logger.levels.INFO, args);
        }
        warn(...args) {
          this._log(_Logger.levels.WARNING, args);
        }
        makeError(message, code, params) {
          if (_censorErrors) {
            return this.makeError("censored error", code, {});
          }
          if (!code) {
            code = _Logger.errors.UNKNOWN_ERROR;
          }
          if (!params) {
            params = {};
          }
          const messageDetails = [];
          Object.keys(params).forEach((key) => {
            const value = params[key];
            try {
              if (value instanceof Uint8Array) {
                let hex = "";
                for (let i = 0; i < value.length; i++) {
                  hex += HEX[value[i] >> 4];
                  hex += HEX[value[i] & 15];
                }
                messageDetails.push(key + "=Uint8Array(0x" + hex + ")");
              } else {
                messageDetails.push(key + "=" + JSON.stringify(value));
              }
            } catch (error2) {
              messageDetails.push(key + "=" + JSON.stringify(params[key].toString()));
            }
          });
          messageDetails.push(`code=${code}`);
          messageDetails.push(`version=${this.version}`);
          const reason = message;
          let url = "";
          switch (code) {
            case ErrorCode.NUMERIC_FAULT: {
              url = "NUMERIC_FAULT";
              const fault = message;
              switch (fault) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  url += "-" + fault;
                  break;
                case "negative-power":
                case "negative-width":
                  url += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  url += "-unbound-result";
                  break;
              }
              break;
            }
            case ErrorCode.CALL_EXCEPTION:
            case ErrorCode.INSUFFICIENT_FUNDS:
            case ErrorCode.MISSING_NEW:
            case ErrorCode.NONCE_EXPIRED:
            case ErrorCode.REPLACEMENT_UNDERPRICED:
            case ErrorCode.TRANSACTION_REPLACED:
            case ErrorCode.UNPREDICTABLE_GAS_LIMIT:
              url = code;
              break;
          }
          if (url) {
            message += " [ See: https://links.ethers.org/v5-errors-" + url + " ]";
          }
          if (messageDetails.length) {
            message += " (" + messageDetails.join(", ") + ")";
          }
          const error = new Error(message);
          error.reason = reason;
          error.code = code;
          Object.keys(params).forEach(function(key) {
            error[key] = params[key];
          });
          return error;
        }
        throwError(message, code, params) {
          throw this.makeError(message, code, params);
        }
        throwArgumentError(message, name, value) {
          return this.throwError(message, _Logger.errors.INVALID_ARGUMENT, {
            argument: name,
            value
          });
        }
        assert(condition, message, code, params) {
          if (!!condition) {
            return;
          }
          this.throwError(message, code, params);
        }
        assertArgument(condition, message, name, value) {
          if (!!condition) {
            return;
          }
          this.throwArgumentError(message, name, value);
        }
        checkNormalize(message) {
          if (message == null) {
            message = "platform missing String.prototype.normalize";
          }
          if (_normalizeError) {
            this.throwError("platform missing String.prototype.normalize", _Logger.errors.UNSUPPORTED_OPERATION, {
              operation: "String.prototype.normalize",
              form: _normalizeError
            });
          }
        }
        checkSafeUint53(value, message) {
          if (typeof value !== "number") {
            return;
          }
          if (message == null) {
            message = "value not safe";
          }
          if (value < 0 || value >= 9007199254740991) {
            this.throwError(message, _Logger.errors.NUMERIC_FAULT, {
              operation: "checkSafeInteger",
              fault: "out-of-safe-range",
              value
            });
          }
          if (value % 1) {
            this.throwError(message, _Logger.errors.NUMERIC_FAULT, {
              operation: "checkSafeInteger",
              fault: "non-integer",
              value
            });
          }
        }
        checkArgumentCount(count, expectedCount, message) {
          if (message) {
            message = ": " + message;
          } else {
            message = "";
          }
          if (count < expectedCount) {
            this.throwError("missing argument" + message, _Logger.errors.MISSING_ARGUMENT, {
              count,
              expectedCount
            });
          }
          if (count > expectedCount) {
            this.throwError("too many arguments" + message, _Logger.errors.UNEXPECTED_ARGUMENT, {
              count,
              expectedCount
            });
          }
        }
        checkNew(target, kind) {
          if (target === Object || target == null) {
            this.throwError("missing new", _Logger.errors.MISSING_NEW, { name: kind.name });
          }
        }
        checkAbstract(target, kind) {
          if (target === kind) {
            this.throwError("cannot instantiate abstract class " + JSON.stringify(kind.name) + " directly; use a sub-class", _Logger.errors.UNSUPPORTED_OPERATION, { name: target.name, operation: "new" });
          } else if (target === Object || target == null) {
            this.throwError("missing new", _Logger.errors.MISSING_NEW, { name: kind.name });
          }
        }
        static globalLogger() {
          if (!_globalLogger) {
            _globalLogger = new _Logger(version);
          }
          return _globalLogger;
        }
        static setCensorship(censorship, permanent) {
          if (!censorship && permanent) {
            this.globalLogger().throwError("cannot permanently disable censorship", _Logger.errors.UNSUPPORTED_OPERATION, {
              operation: "setCensorship"
            });
          }
          if (_permanentCensorErrors) {
            if (!censorship) {
              return;
            }
            this.globalLogger().throwError("error censorship permanent", _Logger.errors.UNSUPPORTED_OPERATION, {
              operation: "setCensorship"
            });
          }
          _censorErrors = !!censorship;
          _permanentCensorErrors = !!permanent;
        }
        static setLogLevel(logLevel) {
          const level = LogLevels[logLevel.toLowerCase()];
          if (level == null) {
            _Logger.globalLogger().warn("invalid log level - " + logLevel);
            return;
          }
          _logLevel = level;
        }
        static from(version3) {
          return new _Logger(version3);
        }
      };
      Logger.errors = ErrorCode;
      Logger.levels = LogLevel;
    }
  });

  // node_modules/@ethersproject/bytes/lib.esm/_version.js
  var version2;
  var init_version2 = __esm({
    "node_modules/@ethersproject/bytes/lib.esm/_version.js"() {
      init_supra_shim();
      version2 = "bytes/5.7.0";
    }
  });

  // node_modules/@ethersproject/bytes/lib.esm/index.js
  function isHexable(value) {
    return !!value.toHexString;
  }
  function addSlice(array) {
    if (array.slice) {
      return array;
    }
    array.slice = function() {
      const args = Array.prototype.slice.call(arguments);
      return addSlice(new Uint8Array(Array.prototype.slice.apply(array, args)));
    };
    return array;
  }
  function isInteger(value) {
    return typeof value === "number" && value == value && value % 1 === 0;
  }
  function isBytes3(value) {
    if (value == null) {
      return false;
    }
    if (value.constructor === Uint8Array) {
      return true;
    }
    if (typeof value === "string") {
      return false;
    }
    if (!isInteger(value.length) || value.length < 0) {
      return false;
    }
    for (let i = 0; i < value.length; i++) {
      const v2 = value[i];
      if (!isInteger(v2) || v2 < 0 || v2 >= 256) {
        return false;
      }
    }
    return true;
  }
  function arrayify(value, options) {
    if (!options) {
      options = {};
    }
    if (typeof value === "number") {
      logger.checkSafeUint53(value, "invalid arrayify value");
      const result = [];
      while (value) {
        result.unshift(value & 255);
        value = parseInt(String(value / 256));
      }
      if (result.length === 0) {
        result.push(0);
      }
      return addSlice(new Uint8Array(result));
    }
    if (options.allowMissingPrefix && typeof value === "string" && value.substring(0, 2) !== "0x") {
      value = "0x" + value;
    }
    if (isHexable(value)) {
      value = value.toHexString();
    }
    if (isHexString(value)) {
      let hex = value.substring(2);
      if (hex.length % 2) {
        if (options.hexPad === "left") {
          hex = "0" + hex;
        } else if (options.hexPad === "right") {
          hex += "0";
        } else {
          logger.throwArgumentError("hex data is odd-length", "value", value);
        }
      }
      const result = [];
      for (let i = 0; i < hex.length; i += 2) {
        result.push(parseInt(hex.substring(i, i + 2), 16));
      }
      return addSlice(new Uint8Array(result));
    }
    if (isBytes3(value)) {
      return addSlice(new Uint8Array(value));
    }
    return logger.throwArgumentError("invalid arrayify value", "value", value);
  }
  function isHexString(value, length) {
    if (typeof value !== "string" || !value.match(/^0x[0-9A-Fa-f]*$/)) {
      return false;
    }
    if (length && value.length !== 2 + 2 * length) {
      return false;
    }
    return true;
  }
  var logger;
  var init_lib2 = __esm({
    "node_modules/@ethersproject/bytes/lib.esm/index.js"() {
      "use strict";
      init_supra_shim();
      init_lib();
      init_version2();
      logger = new Logger(version2);
    }
  });

  // node_modules/@ethersproject/keccak256/lib.esm/index.js
  function keccak256(data) {
    return "0x" + import_js_sha3.default.keccak_256(arrayify(data));
  }
  var import_js_sha3;
  var init_lib3 = __esm({
    "node_modules/@ethersproject/keccak256/lib.esm/index.js"() {
      "use strict";
      init_supra_shim();
      import_js_sha3 = __toESM(require_sha32());
      init_lib2();
    }
  });

  // node_modules/supra-l1-sdk/dist/browser/index.mjs
  function W(r3, e) {
    return function() {
      return r3.apply(e, arguments);
    };
  }
  function er(r3) {
    return r3 !== null && !z(r3) && r3.constructor !== null && !z(r3.constructor) && R(r3.constructor.isBuffer) && r3.constructor.isBuffer(r3);
  }
  function tr(r3) {
    let e;
    return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r3) : e = r3 && r3.buffer && Qe(r3.buffer), e;
  }
  function $(r3, e, { allOwnKeys: t = false } = {}) {
    if (r3 === null || typeof r3 == "undefined") return;
    let n, s;
    if (typeof r3 != "object" && (r3 = [r3]), v(r3)) for (n = 0, s = r3.length; n < s; n++) e.call(null, r3[n], n, r3);
    else {
      let o = t ? Object.getOwnPropertyNames(r3) : Object.keys(r3), i = o.length, a;
      for (n = 0; n < i; n++) a = o[n], e.call(null, r3[a], a, r3);
    }
  }
  function Ze(r3, e) {
    e = e.toLowerCase();
    let t = Object.keys(r3), n = t.length, s;
    for (; n-- > 0; ) if (s = t[n], e === s.toLowerCase()) return s;
    return null;
  }
  function we() {
    let { caseless: r3 } = et(this) && this || {}, e = {}, t = (n, s) => {
      let o = r3 && Ze(e, s) || s;
      ne(e[o]) && ne(n) ? e[o] = we(e[o], n) : ne(n) ? e[o] = we({}, n) : v(n) ? e[o] = n.slice() : e[o] = n;
    };
    for (let n = 0, s = arguments.length; n < s; n++) arguments[n] && $(arguments[n], t);
    return e;
  }
  function Ur(r3) {
    return !!(r3 && R(r3.append) && r3[Symbol.toStringTag] === "FormData" && r3[Symbol.iterator]);
  }
  function k(r3, e, t, n, s) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = r3, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), n && (this.request = n), s && (this.response = s);
  }
  function Ae(r3) {
    return u.isPlainObject(r3) || u.isArray(r3);
  }
  function at(r3) {
    return u.endsWith(r3, "[]") ? r3.slice(0, -2) : r3;
  }
  function it(r3, e, t) {
    return r3 ? r3.concat(e).map(function(s, o) {
      return s = at(s), !t && o ? "[" + s + "]" : s;
    }).join(t ? "." : "") : e;
  }
  function vr(r3) {
    return u.isArray(r3) && !r3.some(Ae);
  }
  function qr(r3, e, t) {
    if (!u.isObject(r3)) throw new TypeError("target must be an object");
    e = e || new (ae || FormData)(), t = u.toFlatObject(t, { metaTokens: true, dots: false, indexes: false }, false, function(y, p) {
      return !u.isUndefined(p[y]);
    });
    let n = t.metaTokens, s = t.visitor || d, o = t.dots, i = t.indexes, c = (t.Blob || typeof Blob != "undefined" && Blob) && u.isSpecCompliantForm(e);
    if (!u.isFunction(s)) throw new TypeError("visitor must be a function");
    function l(m) {
      if (m === null) return "";
      if (u.isDate(m)) return m.toISOString();
      if (!c && u.isBlob(m)) throw new h("Blob is not supported. Use a Buffer instead.");
      return u.isArrayBuffer(m) || u.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
    }
    function d(m, y, p) {
      let b = m;
      if (m && !p && typeof m == "object") {
        if (u.endsWith(y, "{}")) y = n ? y : y.slice(0, -2), m = JSON.stringify(m);
        else if (u.isArray(m) && vr(m) || (u.isFileList(m) || u.endsWith(y, "[]")) && (b = u.toArray(m))) return y = at(y), b.forEach(function(g, O) {
          !(u.isUndefined(g) || g === null) && e.append(i === true ? it([y], O, o) : i === null ? y : y + "[]", l(g));
        }), false;
      }
      return Ae(m) ? true : (e.append(it(p, y, o), l(m)), false);
    }
    let f = [], S = Object.assign(kr, { defaultVisitor: d, convertValue: l, isVisitable: Ae });
    function x(m, y) {
      if (!u.isUndefined(m)) {
        if (f.indexOf(m) !== -1) throw Error("Circular reference detected in " + y.join("."));
        f.push(m), u.forEach(m, function(b, A) {
          (!(u.isUndefined(b) || b === null) && s.call(e, b, u.isString(A) ? A.trim() : A, y, S)) === true && x(b, y ? y.concat(A) : [A]);
        }), f.pop();
      }
    }
    if (!u.isObject(r3)) throw new TypeError("data must be an object");
    return x(r3), e;
  }
  function ut(r3) {
    let e = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
    return encodeURIComponent(r3).replace(/[!'()~]|%20|%00/g, function(n) {
      return e[n];
    });
  }
  function ct(r3, e) {
    this._pairs = [], r3 && D(r3, this, e);
  }
  function Hr(r3) {
    return encodeURIComponent(r3).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function V(r3, e, t) {
    if (!e) return r3;
    let n = t && t.encode || Hr, s = t && t.serialize, o;
    if (s ? o = s(e, t) : o = u.isURLSearchParams(e) ? e.toString() : new ue(e, t).toString(n), o) {
      let i = r3.indexOf("#");
      i !== -1 && (r3 = r3.slice(0, i)), r3 += (r3.indexOf("?") === -1 ? "?" : "&") + o;
    }
    return r3;
  }
  function Pe(r3, e) {
    return D(r3, new w.classes.URLSearchParams(), Object.assign({ visitor: function(t, n, s, o) {
      return w.isNode && u.isBuffer(t) ? (this.append(n, t.toString("base64")), false) : o.defaultVisitor.apply(this, arguments);
    } }, e));
  }
  function zr(r3) {
    return u.matchAll(/\w+|\[(\w*)]/g, r3).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
  }
  function $r(r3) {
    let e = {}, t = Object.keys(r3), n, s = t.length, o;
    for (n = 0; n < s; n++) o = t[n], e[o] = r3[o];
    return e;
  }
  function Vr(r3) {
    function e(t, n, s, o) {
      let i = t[o++];
      if (i === "__proto__") return true;
      let a = Number.isFinite(+i), c = o >= t.length;
      return i = !i && u.isArray(s) ? s.length : i, c ? (u.hasOwnProp(s, i) ? s[i] = [s[i], n] : s[i] = n, !a) : ((!s[i] || !u.isObject(s[i])) && (s[i] = []), e(t, n, s[i], o) && u.isArray(s[i]) && (s[i] = $r(s[i])), !a);
    }
    if (u.isFormData(r3) && u.isFunction(r3.entries)) {
      let t = {};
      return u.forEachEntry(r3, (n, s) => {
        e(zr(n), s, t, 0);
      }), t;
    }
    return null;
  }
  function Gr(r3, e, t) {
    if (u.isString(r3)) try {
      return (e || JSON.parse)(r3), u.trim(r3);
    } catch (n) {
      if (n.name !== "SyntaxError") throw n;
    }
    return (t || JSON.stringify)(r3);
  }
  function G(r3) {
    return r3 && String(r3).trim().toLowerCase();
  }
  function de(r3) {
    return r3 === false || r3 == null ? r3 : u.isArray(r3) ? r3.map(de) : String(r3);
  }
  function Xr(r3) {
    let e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, n;
    for (; n = t.exec(r3); ) e[n[1]] = n[2];
    return e;
  }
  function Ie(r3, e, t, n, s) {
    if (u.isFunction(n)) return n.call(this, e, t);
    if (s && (e = t), !!u.isString(e)) {
      if (u.isString(n)) return e.indexOf(n) !== -1;
      if (u.isRegExp(n)) return n.test(e);
    }
  }
  function Yr(r3) {
    return r3.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
  }
  function Zr(r3, e) {
    let t = u.toCamelCase(" " + e);
    ["get", "set", "has"].forEach((n) => {
      Object.defineProperty(r3, n + t, { value: function(s, o, i) {
        return this[n].call(this, e, s, o, i);
      }, configurable: true });
    });
  }
  function K(r3, e) {
    let t = this || q, n = e || t, s = _.from(n.headers), o = n.data;
    return u.forEach(r3, function(a) {
      o = a.call(t, o, s.normalize(), e ? e.status : void 0);
    }), s.normalize(), o;
  }
  function X(r3) {
    return !!(r3 && r3.__CANCEL__);
  }
  function gt(r3, e, t) {
    h.call(this, r3 == null ? "canceled" : r3, h.ERR_CANCELED, e, t), this.name = "CanceledError";
  }
  function Q(r3, e, t) {
    let n = t.config.validateStatus;
    !t.status || !n || n(t.status) ? r3(t) : e(new h("Request failed with status code " + t.status, [h.ERR_BAD_REQUEST, h.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4], t.config, t.request, t));
  }
  function Ue(r3) {
    let e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r3);
    return e && e[1] || "";
  }
  function en(r3, e) {
    r3 = r3 || 10;
    let t = new Array(r3), n = new Array(r3), s = 0, o = 0, i;
    return e = e !== void 0 ? e : 1e3, function(c) {
      let l = Date.now(), d = n[o];
      i || (i = l), t[s] = c, n[s] = l;
      let f = o, S = 0;
      for (; f !== s; ) S += t[f++], f = f % r3;
      if (s = (s + 1) % r3, s === o && (o = (o + 1) % r3), l - i < e) return;
      let x = d && l - d;
      return x ? Math.round(S * 1e3 / x) : void 0;
    };
  }
  function tn(r3, e) {
    let t = 0, n = 1e3 / e, s, o, i = (l, d = Date.now()) => {
      t = d, s = null, o && (clearTimeout(o), o = null), r3.apply(null, l);
    };
    return [(...l) => {
      let d = Date.now(), f = d - t;
      f >= n ? i(l, d) : (s = l, o || (o = setTimeout(() => {
        o = null, i(s);
      }, n - f)));
    }, () => s && i(s)];
  }
  function Le(r3) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r3);
  }
  function Me(r3, e) {
    return e ? r3.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : r3;
  }
  function Y(r3, e) {
    return r3 && !Le(e) ? Me(r3, e) : e;
  }
  function N(r3, e) {
    e = e || {};
    let t = {};
    function n(l, d, f) {
      return u.isPlainObject(l) && u.isPlainObject(d) ? u.merge.call({ caseless: f }, l, d) : u.isPlainObject(d) ? u.merge({}, d) : u.isArray(d) ? d.slice() : d;
    }
    function s(l, d, f) {
      if (u.isUndefined(d)) {
        if (!u.isUndefined(l)) return n(void 0, l, f);
      } else return n(l, d, f);
    }
    function o(l, d) {
      if (!u.isUndefined(d)) return n(void 0, d);
    }
    function i(l, d) {
      if (u.isUndefined(d)) {
        if (!u.isUndefined(l)) return n(void 0, l);
      } else return n(void 0, d);
    }
    function a(l, d, f) {
      if (f in e) return n(l, d);
      if (f in r3) return n(void 0, l);
    }
    let c = { url: o, method: o, data: o, baseURL: i, transformRequest: i, transformResponse: i, paramsSerializer: i, timeout: i, timeoutMessage: i, withCredentials: i, withXSRFToken: i, adapter: i, responseType: i, xsrfCookieName: i, xsrfHeaderName: i, onUploadProgress: i, onDownloadProgress: i, decompress: i, maxContentLength: i, maxBodyLength: i, beforeRedirect: i, transport: i, httpAgent: i, httpsAgent: i, cancelToken: i, socketPath: i, responseEncoding: i, validateStatus: a, headers: (l, d) => s(_t(l), _t(d), true) };
    return u.forEach(Object.keys(Object.assign({}, r3, e)), function(d) {
      let f = c[d] || s, S = f(r3[d], e[d], d);
      u.isUndefined(S) && f !== a || (t[d] = S);
    }), t;
  }
  function Je(r3) {
    if (r3.cancelToken && r3.cancelToken.throwIfRequested(), r3.signal && r3.signal.aborted) throw new I(null, r3);
  }
  function ye(r3) {
    return Je(r3), r3.headers = _.from(r3.headers), r3.data = K.call(r3, r3.transformRequest), ["post", "put", "patch"].indexOf(r3.method) !== -1 && r3.headers.setContentType("application/x-www-form-urlencoded", false), he.getAdapter(r3.adapter || q.adapter)(r3).then(function(n) {
      return Je(r3), n.data = K.call(r3, r3.transformResponse, n), n.headers = _.from(n.headers), n;
    }, function(n) {
      return X(n) || (Je(r3), n && n.response && (n.response.data = K.call(r3, r3.transformResponse, n.response), n.response.headers = _.from(n.response.headers))), Promise.reject(n);
    });
  }
  function dn(r3, e, t) {
    if (typeof r3 != "object") throw new h("options must be an object", h.ERR_BAD_OPTION_VALUE);
    let n = Object.keys(r3), s = n.length;
    for (; s-- > 0; ) {
      let o = n[s], i = e[o];
      if (i) {
        let a = r3[o], c = a === void 0 || i(a, o, r3);
        if (c !== true) throw new h("option " + o + " must be " + c, h.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (t !== true) throw new h("Unknown option " + o, h.ERR_BAD_OPTION);
    }
  }
  function ze(r3) {
    return function(t) {
      return r3.apply(null, t);
    };
  }
  function $e(r3) {
    return u.isObject(r3) && r3.isAxiosError === true;
  }
  function Ut(r3) {
    let e = new Z(r3), t = W(Z.prototype.request, e);
    return u.extend(t, Z.prototype, e, { allOwnKeys: true }), u.extend(t, e, null, { allOwnKeys: true }), t.create = function(s) {
      return Ut(N(r3, s));
    }, t;
  }
  var import_js_sha32, Qt, Yt, Zt, be, se, C, oe, v, z, Qe, rr, R, Ye, ie, nr, ne, sr, or, ir, ar, ur, cr, lr, dr, fr, pr, mr, hr, M, et, yr, gr, Tr, Sr, xr, Er, _r, wr, br, Ar, Rr, Ke, Or, tt, Cr, Nr, Pr, Fr, _e, Xe, rt, Ir, Dr, Br, Lr, nt, Mr, u, st, ot, h, ae, kr, D, lt, ue, Re, Oe, ce, dt, ft, pt, mt, Ne, Ce, Jr, jr, Wr, w, le, Fe, q, Kr, ht, yt, Qr, H, _, I, Tt, St, J, De, Be, xt, Et, _t, fe, rn, wt, nn, bt, sn, on, ve, me, Rt, ke, Ot, an, At, qe, pe, un, cn, Ct, He, Nt, ln, he, ge, je, Pt, Te, B, j, Z, We, Ft, Ve, It, E, ee, xi, Ei, _i, wi, bi, Ai, Ri, Oi, Ci, Ni, Pi, Fi, Ii, Ui, Di, Bi, Dt, Bt, Lt, Mt, vt, kt, qt, Ht, Jt, jt, te, Wt, zt, $t, Vt, Gt, Kt, Xt;
  var init_browser2 = __esm({
    "node_modules/supra-l1-sdk/dist/browser/index.mjs"() {
      init_supra_shim();
      init_dist();
      import_js_sha32 = __toESM(require_sha3(), 1);
      init_lib3();
      Qt = Object.defineProperty;
      Yt = (r3, e) => {
        for (var t in e) Qt(r3, t, { get: e[t], enumerable: true });
      };
      ({ toString: Zt } = Object.prototype);
      ({ getPrototypeOf: be } = Object);
      se = /* @__PURE__ */ ((r3) => (e) => {
        let t = Zt.call(e);
        return r3[t] || (r3[t] = t.slice(8, -1).toLowerCase());
      })(/* @__PURE__ */ Object.create(null));
      C = (r3) => (r3 = r3.toLowerCase(), (e) => se(e) === r3);
      oe = (r3) => (e) => typeof e === r3;
      ({ isArray: v } = Array);
      z = oe("undefined");
      Qe = C("ArrayBuffer");
      rr = oe("string");
      R = oe("function");
      Ye = oe("number");
      ie = (r3) => r3 !== null && typeof r3 == "object";
      nr = (r3) => r3 === true || r3 === false;
      ne = (r3) => {
        if (se(r3) !== "object") return false;
        let e = be(r3);
        return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in r3) && !(Symbol.iterator in r3);
      };
      sr = C("Date");
      or = C("File");
      ir = C("Blob");
      ar = C("FileList");
      ur = (r3) => ie(r3) && R(r3.pipe);
      cr = (r3) => {
        let e;
        return r3 && (typeof FormData == "function" && r3 instanceof FormData || R(r3.append) && ((e = se(r3)) === "formdata" || e === "object" && R(r3.toString) && r3.toString() === "[object FormData]"));
      };
      lr = C("URLSearchParams");
      [dr, fr, pr, mr] = ["ReadableStream", "Request", "Response", "Headers"].map(C);
      hr = (r3) => r3.trim ? r3.trim() : r3.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      M = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global;
      et = (r3) => !z(r3) && r3 !== M;
      yr = (r3, e, t, { allOwnKeys: n } = {}) => ($(e, (s, o) => {
        t && R(s) ? r3[o] = W(s, t) : r3[o] = s;
      }, { allOwnKeys: n }), r3);
      gr = (r3) => (r3.charCodeAt(0) === 65279 && (r3 = r3.slice(1)), r3);
      Tr = (r3, e, t, n) => {
        r3.prototype = Object.create(e.prototype, n), r3.prototype.constructor = r3, Object.defineProperty(r3, "super", { value: e.prototype }), t && Object.assign(r3.prototype, t);
      };
      Sr = (r3, e, t, n) => {
        let s, o, i, a = {};
        if (e = e || {}, r3 == null) return e;
        do {
          for (s = Object.getOwnPropertyNames(r3), o = s.length; o-- > 0; ) i = s[o], (!n || n(i, r3, e)) && !a[i] && (e[i] = r3[i], a[i] = true);
          r3 = t !== false && be(r3);
        } while (r3 && (!t || t(r3, e)) && r3 !== Object.prototype);
        return e;
      };
      xr = (r3, e, t) => {
        r3 = String(r3), (t === void 0 || t > r3.length) && (t = r3.length), t -= e.length;
        let n = r3.indexOf(e, t);
        return n !== -1 && n === t;
      };
      Er = (r3) => {
        if (!r3) return null;
        if (v(r3)) return r3;
        let e = r3.length;
        if (!Ye(e)) return null;
        let t = new Array(e);
        for (; e-- > 0; ) t[e] = r3[e];
        return t;
      };
      _r = /* @__PURE__ */ ((r3) => (e) => r3 && e instanceof r3)(typeof Uint8Array != "undefined" && be(Uint8Array));
      wr = (r3, e) => {
        let n = (r3 && r3[Symbol.iterator]).call(r3), s;
        for (; (s = n.next()) && !s.done; ) {
          let o = s.value;
          e.call(r3, o[0], o[1]);
        }
      };
      br = (r3, e) => {
        let t, n = [];
        for (; (t = r3.exec(e)) !== null; ) n.push(t);
        return n;
      };
      Ar = C("HTMLFormElement");
      Rr = (r3) => r3.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, n, s) {
        return n.toUpperCase() + s;
      });
      Ke = (({ hasOwnProperty: r3 }) => (e, t) => r3.call(e, t))(Object.prototype);
      Or = C("RegExp");
      tt = (r3, e) => {
        let t = Object.getOwnPropertyDescriptors(r3), n = {};
        $(t, (s, o) => {
          let i;
          (i = e(s, o, r3)) !== false && (n[o] = i || s);
        }), Object.defineProperties(r3, n);
      };
      Cr = (r3) => {
        tt(r3, (e, t) => {
          if (R(r3) && ["arguments", "caller", "callee"].indexOf(t) !== -1) return false;
          let n = r3[t];
          if (R(n)) {
            if (e.enumerable = false, "writable" in e) {
              e.writable = false;
              return;
            }
            e.set || (e.set = () => {
              throw Error("Can not rewrite read-only method '" + t + "'");
            });
          }
        });
      };
      Nr = (r3, e) => {
        let t = {}, n = (s) => {
          s.forEach((o) => {
            t[o] = true;
          });
        };
        return v(r3) ? n(r3) : n(String(r3).split(e)), t;
      };
      Pr = () => {
      };
      Fr = (r3, e) => r3 != null && Number.isFinite(r3 = +r3) ? r3 : e;
      _e = "abcdefghijklmnopqrstuvwxyz";
      Xe = "0123456789";
      rt = { DIGIT: Xe, ALPHA: _e, ALPHA_DIGIT: _e + _e.toUpperCase() + Xe };
      Ir = (r3 = 16, e = rt.ALPHA_DIGIT) => {
        let t = "", { length: n } = e;
        for (; r3--; ) t += e[Math.random() * n | 0];
        return t;
      };
      Dr = (r3) => {
        let e = new Array(10), t = (n, s) => {
          if (ie(n)) {
            if (e.indexOf(n) >= 0) return;
            if (!("toJSON" in n)) {
              e[s] = n;
              let o = v(n) ? [] : {};
              return $(n, (i, a) => {
                let c = t(i, s + 1);
                !z(c) && (o[a] = c);
              }), e[s] = void 0, o;
            }
          }
          return n;
        };
        return t(r3, 0);
      };
      Br = C("AsyncFunction");
      Lr = (r3) => r3 && (ie(r3) || R(r3)) && R(r3.then) && R(r3.catch);
      nt = ((r3, e) => r3 ? setImmediate : e ? ((t, n) => (M.addEventListener("message", ({ source: s, data: o }) => {
        s === M && o === t && n.length && n.shift()();
      }, false), (s) => {
        n.push(s), M.postMessage(t, "*");
      }))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(typeof setImmediate == "function", R(M.postMessage));
      Mr = typeof queueMicrotask != "undefined" ? queueMicrotask.bind(M) : typeof process != "undefined" && process.nextTick || nt;
      u = { isArray: v, isArrayBuffer: Qe, isBuffer: er, isFormData: cr, isArrayBufferView: tr, isString: rr, isNumber: Ye, isBoolean: nr, isObject: ie, isPlainObject: ne, isReadableStream: dr, isRequest: fr, isResponse: pr, isHeaders: mr, isUndefined: z, isDate: sr, isFile: or, isBlob: ir, isRegExp: Or, isFunction: R, isStream: ur, isURLSearchParams: lr, isTypedArray: _r, isFileList: ar, forEach: $, merge: we, extend: yr, trim: hr, stripBOM: gr, inherits: Tr, toFlatObject: Sr, kindOf: se, kindOfTest: C, endsWith: xr, toArray: Er, forEachEntry: wr, matchAll: br, isHTMLForm: Ar, hasOwnProperty: Ke, hasOwnProp: Ke, reduceDescriptors: tt, freezeMethods: Cr, toObjectSet: Nr, toCamelCase: Rr, noop: Pr, toFiniteNumber: Fr, findKey: Ze, global: M, isContextDefined: et, ALPHABET: rt, generateString: Ir, isSpecCompliantForm: Ur, toJSONObject: Dr, isAsyncFn: Br, isThenable: Lr, setImmediate: nt, asap: Mr };
      u.inherits(k, Error, { toJSON: function() {
        return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: u.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null };
      } });
      st = k.prototype;
      ot = {};
      ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((r3) => {
        ot[r3] = { value: r3 };
      });
      Object.defineProperties(k, ot);
      Object.defineProperty(st, "isAxiosError", { value: true });
      k.from = (r3, e, t, n, s, o) => {
        let i = Object.create(st);
        return u.toFlatObject(r3, i, function(c) {
          return c !== Error.prototype;
        }, (a) => a !== "isAxiosError"), k.call(i, r3.message, e, t, n, s), i.cause = r3, i.name = r3.name, o && Object.assign(i, o), i;
      };
      h = k;
      ae = null;
      kr = u.toFlatObject(u, {}, null, function(e) {
        return /^is[A-Z]/.test(e);
      });
      D = qr;
      lt = ct.prototype;
      lt.append = function(e, t) {
        this._pairs.push([e, t]);
      };
      lt.toString = function(e) {
        let t = e ? function(n) {
          return e.call(this, n, ut);
        } : ut;
        return this._pairs.map(function(s) {
          return t(s[0]) + "=" + t(s[1]);
        }, "").join("&");
      };
      ue = ct;
      Re = class {
        constructor() {
          this.handlers = [];
        }
        use(e, t, n) {
          return this.handlers.push({ fulfilled: e, rejected: t, synchronous: n ? n.synchronous : false, runWhen: n ? n.runWhen : null }), this.handlers.length - 1;
        }
        eject(e) {
          this.handlers[e] && (this.handlers[e] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(e) {
          u.forEach(this.handlers, function(n) {
            n !== null && e(n);
          });
        }
      };
      Oe = Re;
      ce = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false };
      dt = typeof URLSearchParams != "undefined" ? URLSearchParams : ue;
      ft = typeof FormData != "undefined" ? FormData : null;
      pt = typeof Blob != "undefined" ? Blob : null;
      mt = { isBrowser: true, classes: { URLSearchParams: dt, FormData: ft, Blob: pt }, protocols: ["http", "https", "file", "blob", "url", "data"] };
      Ne = {};
      Yt(Ne, { hasBrowserEnv: () => Ce, hasStandardBrowserEnv: () => Jr, hasStandardBrowserWebWorkerEnv: () => jr, origin: () => Wr });
      Ce = typeof window != "undefined" && typeof document != "undefined";
      Jr = ((r3) => Ce && ["ReactNative", "NativeScript", "NS"].indexOf(r3) < 0)(typeof navigator != "undefined" && navigator.product);
      jr = typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function";
      Wr = Ce && window.location.href || "http://localhost";
      w = { ...Ne, ...mt };
      le = Vr;
      Fe = { transitional: ce, adapter: ["xhr", "http", "fetch"], transformRequest: [function(e, t) {
        let n = t.getContentType() || "", s = n.indexOf("application/json") > -1, o = u.isObject(e);
        if (o && u.isHTMLForm(e) && (e = new FormData(e)), u.isFormData(e)) return s ? JSON.stringify(le(e)) : e;
        if (u.isArrayBuffer(e) || u.isBuffer(e) || u.isStream(e) || u.isFile(e) || u.isBlob(e) || u.isReadableStream(e)) return e;
        if (u.isArrayBufferView(e)) return e.buffer;
        if (u.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), e.toString();
        let a;
        if (o) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1) return Pe(e, this.formSerializer).toString();
          if ((a = u.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
            let c = this.env && this.env.FormData;
            return D(a ? { "files[]": e } : e, c && new c(), this.formSerializer);
          }
        }
        return o || s ? (t.setContentType("application/json", false), Gr(e)) : e;
      }], transformResponse: [function(e) {
        let t = this.transitional || Fe.transitional, n = t && t.forcedJSONParsing, s = this.responseType === "json";
        if (u.isResponse(e) || u.isReadableStream(e)) return e;
        if (e && u.isString(e) && (n && !this.responseType || s)) {
          let i = !(t && t.silentJSONParsing) && s;
          try {
            return JSON.parse(e);
          } catch (a) {
            if (i) throw a.name === "SyntaxError" ? h.from(a, h.ERR_BAD_RESPONSE, this, null, this.response) : a;
          }
        }
        return e;
      }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: w.classes.FormData, Blob: w.classes.Blob }, validateStatus: function(e) {
        return e >= 200 && e < 300;
      }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
      u.forEach(["delete", "get", "head", "post", "put", "patch"], (r3) => {
        Fe.headers[r3] = {};
      });
      q = Fe;
      Kr = u.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
      ht = (r3) => {
        let e = {}, t, n, s;
        return r3 && r3.split(`
`).forEach(function(i) {
          s = i.indexOf(":"), t = i.substring(0, s).trim().toLowerCase(), n = i.substring(s + 1).trim(), !(!t || e[t] && Kr[t]) && (t === "set-cookie" ? e[t] ? e[t].push(n) : e[t] = [n] : e[t] = e[t] ? e[t] + ", " + n : n);
        }), e;
      };
      yt = Symbol("internals");
      Qr = (r3) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r3.trim());
      H = class {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, n) {
          let s = this;
          function o(a, c, l) {
            let d = G(c);
            if (!d) throw new Error("header name must be a non-empty string");
            let f = u.findKey(s, d);
            (!f || s[f] === void 0 || l === true || l === void 0 && s[f] !== false) && (s[f || c] = de(a));
          }
          let i = (a, c) => u.forEach(a, (l, d) => o(l, d, c));
          if (u.isPlainObject(e) || e instanceof this.constructor) i(e, t);
          else if (u.isString(e) && (e = e.trim()) && !Qr(e)) i(ht(e), t);
          else if (u.isHeaders(e)) for (let [a, c] of e.entries()) o(c, a, n);
          else e != null && o(t, e, n);
          return this;
        }
        get(e, t) {
          if (e = G(e), e) {
            let n = u.findKey(this, e);
            if (n) {
              let s = this[n];
              if (!t) return s;
              if (t === true) return Xr(s);
              if (u.isFunction(t)) return t.call(this, s, n);
              if (u.isRegExp(t)) return t.exec(s);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if (e = G(e), e) {
            let n = u.findKey(this, e);
            return !!(n && this[n] !== void 0 && (!t || Ie(this, this[n], n, t)));
          }
          return false;
        }
        delete(e, t) {
          let n = this, s = false;
          function o(i) {
            if (i = G(i), i) {
              let a = u.findKey(n, i);
              a && (!t || Ie(n, n[a], a, t)) && (delete n[a], s = true);
            }
          }
          return u.isArray(e) ? e.forEach(o) : o(e), s;
        }
        clear(e) {
          let t = Object.keys(this), n = t.length, s = false;
          for (; n--; ) {
            let o = t[n];
            (!e || Ie(this, this[o], o, e, true)) && (delete this[o], s = true);
          }
          return s;
        }
        normalize(e) {
          let t = this, n = {};
          return u.forEach(this, (s, o) => {
            let i = u.findKey(n, o);
            if (i) {
              t[i] = de(s), delete t[o];
              return;
            }
            let a = e ? Yr(o) : String(o).trim();
            a !== o && delete t[o], t[a] = de(s), n[a] = true;
          }), this;
        }
        concat(...e) {
          return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
          let t = /* @__PURE__ */ Object.create(null);
          return u.forEach(this, (n, s) => {
            n != null && n !== false && (t[s] = e && u.isArray(n) ? n.join(", ") : n);
          }), t;
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`);
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e, ...t) {
          let n = new this(e);
          return t.forEach((s) => n.set(s)), n;
        }
        static accessor(e) {
          let n = (this[yt] = this[yt] = { accessors: {} }).accessors, s = this.prototype;
          function o(i) {
            let a = G(i);
            n[a] || (Zr(s, i), n[a] = true);
          }
          return u.isArray(e) ? e.forEach(o) : o(e), this;
        }
      };
      H.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
      u.reduceDescriptors(H.prototype, ({ value: r3 }, e) => {
        let t = e[0].toUpperCase() + e.slice(1);
        return { get: () => r3, set(n) {
          this[t] = n;
        } };
      });
      u.freezeMethods(H);
      _ = H;
      u.inherits(gt, h, { __CANCEL__: true });
      I = gt;
      Tt = en;
      St = tn;
      J = (r3, e, t = 3) => {
        let n = 0, s = Tt(50, 250);
        return St((o) => {
          let i = o.loaded, a = o.lengthComputable ? o.total : void 0, c = i - n, l = s(c), d = i <= a;
          n = i;
          let f = { loaded: i, total: a, progress: a ? i / a : void 0, bytes: c, rate: l || void 0, estimated: l && a && d ? (a - i) / l : void 0, event: o, lengthComputable: a != null, [e ? "download" : "upload"]: true };
          r3(f);
        }, t);
      };
      De = (r3, e) => {
        let t = r3 != null;
        return [(n) => e[0]({ lengthComputable: t, total: r3, loaded: n }), e[1]];
      };
      Be = (r3) => (...e) => u.asap(() => r3(...e));
      xt = w.hasStandardBrowserEnv ? function() {
        let e = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a"), n;
        function s(o) {
          let i = o;
          return e && (t.setAttribute("href", i), i = t.href), t.setAttribute("href", i), { href: t.href, protocol: t.protocol ? t.protocol.replace(/:$/, "") : "", host: t.host, search: t.search ? t.search.replace(/^\?/, "") : "", hash: t.hash ? t.hash.replace(/^#/, "") : "", hostname: t.hostname, port: t.port, pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname };
        }
        return n = s(window.location.href), function(i) {
          let a = u.isString(i) ? s(i) : i;
          return a.protocol === n.protocol && a.host === n.host;
        };
      }() : /* @__PURE__ */ function() {
        return function() {
          return true;
        };
      }();
      Et = w.hasStandardBrowserEnv ? { write(r3, e, t, n, s, o) {
        let i = [r3 + "=" + encodeURIComponent(e)];
        u.isNumber(t) && i.push("expires=" + new Date(t).toGMTString()), u.isString(n) && i.push("path=" + n), u.isString(s) && i.push("domain=" + s), o === true && i.push("secure"), document.cookie = i.join("; ");
      }, read(r3) {
        let e = document.cookie.match(new RegExp("(^|;\\s*)(" + r3 + ")=([^;]*)"));
        return e ? decodeURIComponent(e[3]) : null;
      }, remove(r3) {
        this.write(r3, "", Date.now() - 864e5);
      } } : { write() {
      }, read() {
        return null;
      }, remove() {
      } };
      _t = (r3) => r3 instanceof _ ? { ...r3 } : r3;
      fe = (r3) => {
        let e = N({}, r3), { data: t, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = e;
        e.headers = i = _.from(i), e.url = V(Y(e.baseURL, e.url), r3.params, r3.paramsSerializer), a && i.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")));
        let c;
        if (u.isFormData(t)) {
          if (w.hasStandardBrowserEnv || w.hasStandardBrowserWebWorkerEnv) i.setContentType(void 0);
          else if ((c = i.getContentType()) !== false) {
            let [l, ...d] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
            i.setContentType([l || "multipart/form-data", ...d].join("; "));
          }
        }
        if (w.hasStandardBrowserEnv && (n && u.isFunction(n) && (n = n(e)), n || n !== false && xt(e.url))) {
          let l = s && o && Et.read(o);
          l && i.set(s, l);
        }
        return e;
      };
      rn = typeof XMLHttpRequest != "undefined";
      wt = rn && function(r3) {
        return new Promise(function(t, n) {
          let s = fe(r3), o = s.data, i = _.from(s.headers).normalize(), { responseType: a, onUploadProgress: c, onDownloadProgress: l } = s, d, f, S, x, m;
          function y() {
            x && x(), m && m(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
          }
          let p = new XMLHttpRequest();
          p.open(s.method.toUpperCase(), s.url, true), p.timeout = s.timeout;
          function b() {
            if (!p) return;
            let g = _.from("getAllResponseHeaders" in p && p.getAllResponseHeaders()), L = { data: !a || a === "text" || a === "json" ? p.responseText : p.response, status: p.status, statusText: p.statusText, headers: g, config: r3, request: p };
            Q(function(F) {
              t(F), y();
            }, function(F) {
              n(F), y();
            }, L), p = null;
          }
          "onloadend" in p ? p.onloadend = b : p.onreadystatechange = function() {
            !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(b);
          }, p.onabort = function() {
            p && (n(new h("Request aborted", h.ECONNABORTED, r3, p)), p = null);
          }, p.onerror = function() {
            n(new h("Network Error", h.ERR_NETWORK, r3, p)), p = null;
          }, p.ontimeout = function() {
            let O = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded", L = s.transitional || ce;
            s.timeoutErrorMessage && (O = s.timeoutErrorMessage), n(new h(O, L.clarifyTimeoutError ? h.ETIMEDOUT : h.ECONNABORTED, r3, p)), p = null;
          }, o === void 0 && i.setContentType(null), "setRequestHeader" in p && u.forEach(i.toJSON(), function(O, L) {
            p.setRequestHeader(L, O);
          }), u.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), a && a !== "json" && (p.responseType = s.responseType), l && ([S, m] = J(l, true), p.addEventListener("progress", S)), c && p.upload && ([f, x] = J(c), p.upload.addEventListener("progress", f), p.upload.addEventListener("loadend", x)), (s.cancelToken || s.signal) && (d = (g) => {
            p && (n(!g || g.type ? new I(null, r3, p) : g), p.abort(), p = null);
          }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
          let A = Ue(s.url);
          if (A && w.protocols.indexOf(A) === -1) {
            n(new h("Unsupported protocol " + A + ":", h.ERR_BAD_REQUEST, r3));
            return;
          }
          p.send(o || null);
        });
      };
      nn = (r3, e) => {
        let t = new AbortController(), n, s = function(c) {
          if (!n) {
            n = true, i();
            let l = c instanceof Error ? c : this.reason;
            t.abort(l instanceof h ? l : new I(l instanceof Error ? l.message : l));
          }
        }, o = e && setTimeout(() => {
          s(new h(`timeout ${e} of ms exceeded`, h.ETIMEDOUT));
        }, e), i = () => {
          r3 && (o && clearTimeout(o), o = null, r3.forEach((c) => {
            c && (c.removeEventListener ? c.removeEventListener("abort", s) : c.unsubscribe(s));
          }), r3 = null);
        };
        r3.forEach((c) => c && c.addEventListener && c.addEventListener("abort", s));
        let { signal: a } = t;
        return a.unsubscribe = i, [a, () => {
          o && clearTimeout(o), o = null;
        }];
      };
      bt = nn;
      sn = function* (r3, e) {
        let t = r3.byteLength;
        if (!e || t < e) {
          yield r3;
          return;
        }
        let n = 0, s;
        for (; n < t; ) s = n + e, yield r3.slice(n, s), n = s;
      };
      on = async function* (r3, e, t) {
        for await (let n of r3) yield* sn(ArrayBuffer.isView(n) ? n : await t(String(n)), e);
      };
      ve = (r3, e, t, n, s) => {
        let o = on(r3, e, s), i = 0, a, c = (l) => {
          a || (a = true, n && n(l));
        };
        return new ReadableStream({ async pull(l) {
          try {
            let { done: d, value: f } = await o.next();
            if (d) {
              c(), l.close();
              return;
            }
            let S = f.byteLength;
            if (t) {
              let x = i += S;
              t(x);
            }
            l.enqueue(new Uint8Array(f));
          } catch (d) {
            throw c(d), d;
          }
        }, cancel(l) {
          return c(l), o.return();
        } }, { highWaterMark: 2 });
      };
      me = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function";
      Rt = me && typeof ReadableStream == "function";
      ke = me && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((r3) => (e) => r3.encode(e))(new TextEncoder()) : async (r3) => new Uint8Array(await new Response(r3).arrayBuffer()));
      Ot = (r3, ...e) => {
        try {
          return !!r3(...e);
        } catch (t) {
          return false;
        }
      };
      an = Rt && Ot(() => {
        let r3 = false, e = new Request(w.origin, { body: new ReadableStream(), method: "POST", get duplex() {
          return r3 = true, "half";
        } }).headers.has("Content-Type");
        return r3 && !e;
      });
      At = 64 * 1024;
      qe = Rt && Ot(() => u.isReadableStream(new Response("").body));
      pe = { stream: qe && ((r3) => r3.body) };
      me && ((r3) => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
          !pe[e] && (pe[e] = u.isFunction(r3[e]) ? (t) => t[e]() : (t, n) => {
            throw new h(`Response type '${e}' is not supported`, h.ERR_NOT_SUPPORT, n);
          });
        });
      })(new Response());
      un = async (r3) => {
        if (r3 == null) return 0;
        if (u.isBlob(r3)) return r3.size;
        if (u.isSpecCompliantForm(r3)) return (await new Request(r3).arrayBuffer()).byteLength;
        if (u.isArrayBufferView(r3) || u.isArrayBuffer(r3)) return r3.byteLength;
        if (u.isURLSearchParams(r3) && (r3 = r3 + ""), u.isString(r3)) return (await ke(r3)).byteLength;
      };
      cn = async (r3, e) => {
        let t = u.toFiniteNumber(r3.getContentLength());
        return t == null ? un(e) : t;
      };
      Ct = me && (async (r3) => {
        let { url: e, method: t, data: n, signal: s, cancelToken: o, timeout: i, onDownloadProgress: a, onUploadProgress: c, responseType: l, headers: d, withCredentials: f = "same-origin", fetchOptions: S } = fe(r3);
        l = l ? (l + "").toLowerCase() : "text";
        let [x, m] = s || o || i ? bt([s, o], i) : [], y, p, b = () => {
          !y && setTimeout(() => {
            x && x.unsubscribe();
          }), y = true;
        }, A;
        try {
          if (c && an && t !== "get" && t !== "head" && (A = await cn(d, n)) !== 0) {
            let P = new Request(e, { method: "POST", body: n, duplex: "half" }), F;
            if (u.isFormData(n) && (F = P.headers.get("content-type")) && d.setContentType(F), P.body) {
              let [Ee, re] = De(A, J(Be(c)));
              n = ve(P.body, At, Ee, re, ke);
            }
          }
          u.isString(f) || (f = f ? "include" : "omit"), p = new Request(e, { ...S, signal: x, method: t.toUpperCase(), headers: d.normalize().toJSON(), body: n, duplex: "half", credentials: f });
          let g = await fetch(p), O = qe && (l === "stream" || l === "response");
          if (qe && (a || O)) {
            let P = {};
            ["status", "statusText", "headers"].forEach((Ge) => {
              P[Ge] = g[Ge];
            });
            let F = u.toFiniteNumber(g.headers.get("content-length")), [Ee, re] = a && De(F, J(Be(a), true)) || [];
            g = new Response(ve(g.body, At, Ee, () => {
              re && re(), O && b();
            }, ke), P);
          }
          l = l || "text";
          let L = await pe[u.findKey(pe, l) || "text"](g, r3);
          return !O && b(), m && m(), await new Promise((P, F) => {
            Q(P, F, { data: L, headers: _.from(g.headers), status: g.status, statusText: g.statusText, config: r3, request: p });
          });
        } catch (g) {
          throw b(), g && g.name === "TypeError" && /fetch/i.test(g.message) ? Object.assign(new h("Network Error", h.ERR_NETWORK, r3, p), { cause: g.cause || g }) : h.from(g, g && g.code, r3, p);
        }
      });
      He = { http: ae, xhr: wt, fetch: Ct };
      u.forEach(He, (r3, e) => {
        if (r3) {
          try {
            Object.defineProperty(r3, "name", { value: e });
          } catch (t) {
          }
          Object.defineProperty(r3, "adapterName", { value: e });
        }
      });
      Nt = (r3) => `- ${r3}`;
      ln = (r3) => u.isFunction(r3) || r3 === null || r3 === false;
      he = { getAdapter: (r3) => {
        r3 = u.isArray(r3) ? r3 : [r3];
        let { length: e } = r3, t, n, s = {};
        for (let o = 0; o < e; o++) {
          t = r3[o];
          let i;
          if (n = t, !ln(t) && (n = He[(i = String(t)).toLowerCase()], n === void 0)) throw new h(`Unknown adapter '${i}'`);
          if (n) break;
          s[i || "#" + o] = n;
        }
        if (!n) {
          let o = Object.entries(s).map(([a, c]) => `adapter ${a} ` + (c === false ? "is not supported by the environment" : "is not available in the build")), i = e ? o.length > 1 ? `since :
` + o.map(Nt).join(`
`) : " " + Nt(o[0]) : "as no adapter specified";
          throw new h("There is no suitable adapter to dispatch the request " + i, "ERR_NOT_SUPPORT");
        }
        return n;
      }, adapters: He };
      ge = "1.7.4";
      je = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach((r3, e) => {
        je[r3] = function(n) {
          return typeof n === r3 || "a" + (e < 1 ? "n " : " ") + r3;
        };
      });
      Pt = {};
      je.transitional = function(e, t, n) {
        function s(o, i) {
          return "[Axios v" + ge + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
        }
        return (o, i, a) => {
          if (e === false) throw new h(s(i, " has been removed" + (t ? " in " + t : "")), h.ERR_DEPRECATED);
          return t && !Pt[i] && (Pt[i] = true, console.warn(s(i, " has been deprecated since v" + t + " and will be removed in the near future"))), e ? e(o, i, a) : true;
        };
      };
      Te = { assertOptions: dn, validators: je };
      B = Te.validators;
      j = class {
        constructor(e) {
          this.defaults = e, this.interceptors = { request: new Oe(), response: new Oe() };
        }
        async request(e, t) {
          try {
            return await this._request(e, t);
          } catch (n) {
            if (n instanceof Error) {
              let s;
              Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
              let o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
              try {
                n.stack ? o && !String(n.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + o) : n.stack = o;
              } catch (i) {
              }
            }
            throw n;
          }
        }
        _request(e, t) {
          typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = N(this.defaults, t);
          let { transitional: n, paramsSerializer: s, headers: o } = t;
          n !== void 0 && Te.assertOptions(n, { silentJSONParsing: B.transitional(B.boolean), forcedJSONParsing: B.transitional(B.boolean), clarifyTimeoutError: B.transitional(B.boolean) }, false), s != null && (u.isFunction(s) ? t.paramsSerializer = { serialize: s } : Te.assertOptions(s, { encode: B.function, serialize: B.function }, true)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
          let i = o && u.merge(o.common, o[t.method]);
          o && u.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (m) => {
            delete o[m];
          }), t.headers = _.concat(i, o);
          let a = [], c = true;
          this.interceptors.request.forEach(function(y) {
            typeof y.runWhen == "function" && y.runWhen(t) === false || (c = c && y.synchronous, a.unshift(y.fulfilled, y.rejected));
          });
          let l = [];
          this.interceptors.response.forEach(function(y) {
            l.push(y.fulfilled, y.rejected);
          });
          let d, f = 0, S;
          if (!c) {
            let m = [ye.bind(this), void 0];
            for (m.unshift.apply(m, a), m.push.apply(m, l), S = m.length, d = Promise.resolve(t); f < S; ) d = d.then(m[f++], m[f++]);
            return d;
          }
          S = a.length;
          let x = t;
          for (f = 0; f < S; ) {
            let m = a[f++], y = a[f++];
            try {
              x = m(x);
            } catch (p) {
              y.call(this, p);
              break;
            }
          }
          try {
            d = ye.call(this, x);
          } catch (m) {
            return Promise.reject(m);
          }
          for (f = 0, S = l.length; f < S; ) d = d.then(l[f++], l[f++]);
          return d;
        }
        getUri(e) {
          e = N(this.defaults, e);
          let t = Y(e.baseURL, e.url);
          return V(t, e.params, e.paramsSerializer);
        }
      };
      u.forEach(["delete", "get", "head", "options"], function(e) {
        j.prototype[e] = function(t, n) {
          return this.request(N(n || {}, { method: e, url: t, data: (n || {}).data }));
        };
      });
      u.forEach(["post", "put", "patch"], function(e) {
        function t(n) {
          return function(o, i, a) {
            return this.request(N(a || {}, { method: e, headers: n ? { "Content-Type": "multipart/form-data" } : {}, url: o, data: i }));
          };
        }
        j.prototype[e] = t(), j.prototype[e + "Form"] = t(true);
      });
      Z = j;
      We = class r {
        constructor(e) {
          if (typeof e != "function") throw new TypeError("executor must be a function.");
          let t;
          this.promise = new Promise(function(o) {
            t = o;
          });
          let n = this;
          this.promise.then((s) => {
            if (!n._listeners) return;
            let o = n._listeners.length;
            for (; o-- > 0; ) n._listeners[o](s);
            n._listeners = null;
          }), this.promise.then = (s) => {
            let o, i = new Promise((a) => {
              n.subscribe(a), o = a;
            }).then(s);
            return i.cancel = function() {
              n.unsubscribe(o);
            }, i;
          }, e(function(o, i, a) {
            n.reason || (n.reason = new I(o, i, a), t(n.reason));
          });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          if (this.reason) {
            e(this.reason);
            return;
          }
          this._listeners ? this._listeners.push(e) : this._listeners = [e];
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          let t = this._listeners.indexOf(e);
          t !== -1 && this._listeners.splice(t, 1);
        }
        static source() {
          let e;
          return { token: new r(function(s) {
            e = s;
          }), cancel: e };
        }
      };
      Ft = We;
      Ve = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
      Object.entries(Ve).forEach(([r3, e]) => {
        Ve[e] = r3;
      });
      It = Ve;
      E = Ut(q);
      E.Axios = Z;
      E.CanceledError = I;
      E.CancelToken = Ft;
      E.isCancel = X;
      E.VERSION = ge;
      E.toFormData = D;
      E.AxiosError = h;
      E.Cancel = E.CanceledError;
      E.all = function(e) {
        return Promise.all(e);
      };
      E.spread = ze;
      E.isAxiosError = $e;
      E.mergeConfig = N;
      E.AxiosHeaders = _;
      E.formToJSON = (r3) => le(u.isHTMLForm(r3) ? new FormData(r3) : r3);
      E.getAdapter = he.getAdapter;
      E.HttpStatusCode = It;
      E.default = E;
      ee = E;
      ({ Axios: xi, AxiosError: Ei, CanceledError: _i, isCancel: wi, CancelToken: bi, VERSION: Ai, all: Ri, Cancel: Oi, isAxiosError: Ci, spread: Ni, toFormData: Pi, AxiosHeaders: Fi, HttpStatusCode: Ii, formToJSON: Ui, getAdapter: Di, mergeConfig: Bi } = ee);
      Dt = (r3) => {
        let e = new Array();
        return r3.forEach((t) => {
          let n = t.value;
          e.push({ struct: { address: n.address.toHexString().toString(), module: n.module_name.value, name: n.name.value, type_args: [] } });
        }), e;
      };
      Bt = (r3) => {
        let e = new Array();
        for (let t = 0; t < r3.length; t++) e.push(Array.from(r3[t]));
        return e;
      };
      Lt = (r3) => {
        if (r3.length > 64 && r3.slice(0, 2) === "0x" && (r3 = r3.slice(2)), r3.length != 64) throw new Error("address length must be 64 or it's size must be 256 bits");
        return r3;
      };
      Mt = (r3) => new Promise((e) => {
        setTimeout(e, r3);
      });
      vt = ((n) => (n.Success = "Success", n.Failed = "Failed", n.Pending = "Pending", n))(vt || {});
      kt = ((n) => (n.CoinTransfer = "CoinTransfer", n.EntryFunctionCall = "EntryFunctionCall", n.ScriptCall = "ScriptCall", n))(kt || {});
      qt = BigInt(5e5);
      Ht = BigInt(100);
      Jt = 300;
      jt = 1e3;
      te = "0x0000000000000000000000000000000000000000000000000000000000000001";
      Wt = false;
      zt = false;
      $t = 10;
      Vt = 1020;
      Gt = "SUPRA::RawTransaction";
      Kt = "SUPRA::RawTransactionWithData";
      Xt = class r2 {
        constructor(e, t = 6) {
          this.supraNodeURL = e, this.chainId = new aptos_types_exports.ChainId(t);
        }
        static async init(e) {
          let t = new r2(e);
          return t.chainId = await t.getChainId(), t;
        }
        async sendRequest(e, t, n) {
          let s;
          if (e == true) s = await ee({ method: "get", baseURL: this.supraNodeURL, url: t });
          else {
            if (n == null) throw new Error("For Post Request 'data' Should Not Be 'undefined'");
            s = await ee({ method: "post", baseURL: this.supraNodeURL, url: t, data: n, headers: { "Content-Type": "application/json" } });
          }
          if (s.status == 404) throw new Error("Invalid URL, Path Not Found");
          return s;
        }
        async getChainId() {
          return new aptos_types_exports.ChainId(Number((await this.sendRequest(true, "/rpc/v1/transactions/chain_id")).data));
        }
        async getGasPrice() {
          return BigInt((await this.sendRequest(true, "/rpc/v1/transactions/estimate_gas_price")).data.mean_gas_price);
        }
        async fundAccountWithFaucet(e) {
          let t = await this.sendRequest(true, `/rpc/v1/wallet/faucet/${e.toString()}`);
          if (typeof t.data == "object") {
            if (t.data.hasOwnProperty("Accepted")) return { status: await this.waitForTransactionCompletion(t.data.Accepted), transactionHash: t.data.Accepted };
            throw new Error("something went wrong, getting unexpected response from rpc_node");
          } else throw new Error("try faucet later");
        }
        async isAccountExists(e) {
          let t = await this.sendRequest(true, `/rpc/v1/accounts/${e.toString()}`);
          return !(t.data === null || t.status === 202);
        }
        async getAccountInfo(e) {
          let t = await this.sendRequest(true, `/rpc/v1/accounts/${e.toString()}`);
          if (t.data == null) throw new Error("Account Not Exists, Or Invalid Account Is Passed");
          return { sequence_number: BigInt(t.data.sequence_number), authentication_key: t.data.authentication_key };
        }
        async getAccountResources(e, t) {
          var s;
          let n = `/rpc/v1/accounts/${e.toString()}/resources?count=${(s = t == null ? void 0 : t.count) != null ? s : 15}`;
          return t != null && t.start && (n += `&start=${t.start}`), (await this.sendRequest(true, n)).data.Resources;
        }
        async getResourceData(e, t) {
          let n = await this.sendRequest(true, `/rpc/v1/accounts/${e.toString()}/resources/${t}`);
          if (n.data.result[0] == null) throw new Error("Resource not found");
          return n.data.result[0];
        }
        async getTransactionStatus(e) {
          let t = await this.sendRequest(true, `/rpc/v1/transactions/${e}`);
          return t.data == null ? null : t.data.status == "Unexecuted" ? "Pending" : t.data.status == "Fail" ? "Failed" : t.data.status;
        }
        getCoinChangeAmount(e, t) {
          let n = /* @__PURE__ */ new Map();
          t.forEach((o) => {
            if ((o.type === "0x1::coin::CoinDeposit" || o.type === "0x1::coin::CoinWithdraw") && "0x" + o.data.account.substring(2, o.data.account).padStart(64, "0") === e) {
              if (o.type === "0x1::coin::CoinDeposit") {
                let i = n.get(o.data.coin_type);
                i != null ? n.set(o.data.coin_type, { totalDeposit: i.totalDeposit + BigInt(o.data.amount), totalWithdraw: i.totalWithdraw }) : n.set(o.data.coin_type, { totalDeposit: BigInt(o.data.amount), totalWithdraw: BigInt(0) });
              } else if (o.type === "0x1::coin::CoinWithdraw") {
                let i = n.get(o.data.coin_type);
                i != null ? n.set(o.data.coin_type, { totalDeposit: i.totalDeposit, totalWithdraw: i.totalWithdraw + BigInt(o.data.amount) }) : n.set(o.data.coin_type, { totalDeposit: BigInt(0), totalWithdraw: BigInt(o.data.amount) });
              }
            }
          });
          let s = [];
          return n.forEach((o, i) => {
            s.push({ coinType: i, amount: o.totalDeposit - o.totalWithdraw });
          }), s;
        }
        getTransactionInsights(e, t) {
          let n = { coinReceiver: "", coinChange: [{ amount: BigInt(0), coinType: "" }], type: "ScriptCall" };
          if (t.payload.Move.type === "entry_function_payload") if (t.payload.Move.function === "0x1::supra_account::transfer") {
            let s = BigInt(t.payload.Move.arguments[1]);
            e === t.header.sender.Move && (s *= BigInt(-1)), n.coinReceiver = t.payload.Move.arguments[0], n.coinChange[0] = { amount: s, coinType: "0x1::supra_coin::SupraCoin" }, n.type = "CoinTransfer";
          } else if (t.payload.Move.function === "0x1::supra_account::transfer_coins" || t.payload.Move.function === "0x1::coin::transfer") {
            let s = BigInt(t.payload.Move.arguments[1]);
            e === t.header.sender.Move && (s *= BigInt(-1)), n.coinReceiver = t.payload.Move.arguments[0], n.coinChange[0] = { amount: s, coinType: t.payload.Move.type_arguments[0] }, n.type = "CoinTransfer";
          } else t.status === "Success" && (n.coinChange = this.getCoinChangeAmount(e, t.output.Move.events)), n.type = "EntryFunctionCall";
          else if (t.status === "Success" && t.payload.Move.type === "script_payload") n.coinChange = this.getCoinChangeAmount(e, t.output.Move.events);
          else throw new Error("something went wrong, found unsupported type of transaction");
          return n;
        }
        async getTransactionDetail(e, t) {
          var s, o, i;
          let n = await this.sendRequest(true, `/rpc/v1/transactions/${t}`);
          return n.data == null ? null : n.data.status === "Pending" || n.data.output === null || n.data.header === null ? { txHash: t, sender: n.data.header.sender.Move, sequenceNumber: n.data.header.sequence_number, maxGasAmount: n.data.header.max_gas_amount, gasUnitPrice: n.data.header.gas_unit_price, gasUsed: void 0, transactionCost: void 0, txExpirationTimestamp: Number(n.data.header.expiration_timestamp.microseconds_since_unix_epoch), txConfirmationTime: void 0, status: n.data.status, events: void 0, blockNumber: void 0, blockHash: void 0, transactionInsights: this.getTransactionInsights(e.toString(), n.data), vm_status: void 0 } : { txHash: t, sender: n.data.header.sender.Move, sequenceNumber: n.data.header.sequence_number, maxGasAmount: n.data.header.max_gas_amount, gasUnitPrice: n.data.header.gas_unit_price, gasUsed: (s = n.data.output) == null ? void 0 : s.Move.gas_used, transactionCost: n.data.header.gas_unit_price * ((o = n.data.output) == null ? void 0 : o.Move.gas_used), txExpirationTimestamp: Number(n.data.header.expiration_timestamp.microseconds_since_unix_epoch), txConfirmationTime: Number(n.data.block_header.timestamp.microseconds_since_unix_epoch), status: n.data.status == "Fail" || n.data.status == "Invalid" ? "Failed" : n.data.status, events: (i = n.data.output) == null ? void 0 : i.Move.events, blockNumber: n.data.block_header.height, blockHash: n.data.block_header.hash, transactionInsights: this.getTransactionInsights(e.toString(), n.data), vm_status: n.data.output.Move.vm_status };
        }
        async getAccountTransactionsDetail(e, t) {
          var i;
          let n = `/rpc/v1/accounts/${e.toString()}/transactions?count=${(i = t == null ? void 0 : t.count) != null ? i : 15}`;
          t != null && t.start && (n += `&start=${t.start}`);
          let s = await this.sendRequest(true, n);
          if (s.data.record == null) throw new Error("Account Not Exists, Or Invalid Account Is Passed");
          let o = [];
          return s.data.record.forEach((a) => {
            o.push({ txHash: a.hash, sender: a.header.sender.Move, sequenceNumber: a.header.sequence_number, maxGasAmount: a.header.max_gas_amount, gasUnitPrice: a.header.gas_unit_price, gasUsed: a.output.Move.gas_used, transactionCost: a.header.gas_unit_price * a.output.Move.gas_used, txExpirationTimestamp: Number(a.header.expiration_timestamp.microseconds_since_unix_epoch), txConfirmationTime: Number(a.block_header.timestamp.microseconds_since_unix_epoch), status: a.status === "Fail" || a.status === "Invalid" ? "Failed" : a.status, events: a.output.Move.events, blockNumber: a.block_header.height, blockHash: a.block_header.hash, transactionInsights: this.getTransactionInsights(e.toString(), a), vm_status: a.output.Move.vm_status });
          }), o;
        }
        async getCoinTransactionsDetail(e, t) {
          var i;
          let n = `/rpc/v1/accounts/${e.toString()}/coin_transactions?count=${(i = t == null ? void 0 : t.count) != null ? i : 15}`;
          t != null && t.start && (n += `&start=${t == null ? void 0 : t.start}`);
          let s = await this.sendRequest(true, n);
          if (s.data.record == null) throw new Error("Account Not Exists, Or Invalid Account Is Passed");
          let o = [];
          return s.data.record.forEach((a) => {
            o.push({ txHash: a.hash, sender: a.header.sender.Move, sequenceNumber: a.header.sequence_number, maxGasAmount: a.header.max_gas_amount, gasUnitPrice: a.header.gas_unit_price, gasUsed: a.output.Move.gas_used, transactionCost: a.header.gas_unit_price * a.output.Move.gas_used, txExpirationTimestamp: Number(a.header.expiration_timestamp.microseconds_since_unix_epoch), txConfirmationTime: Number(a.block_header.timestamp.microseconds_since_unix_epoch), status: a.status === "Fail" || a.status === "Invalid" ? "Failed" : a.status, events: a.output.Move.events, blockNumber: a.block_header.height, blockHash: a.block_header.hash, transactionInsights: this.getTransactionInsights(e.toString(), a), vm_status: a.output.Move.vm_status });
          }), { transactions: o, cursor: s.data.cursor };
        }
        async getAccountCompleteTransactionsDetail(e, t = 15) {
          let n = await this.sendRequest(true, `/rpc/v1/accounts/${e.toString()}/coin_transactions?count=${t}`), s = await this.sendRequest(true, `/rpc/v1/accounts/${e.toString()}/transactions?count=${t}`), o = [];
          n.data.record != null && o.push(...n.data.record), s.data.record != null && o.push(...s.data.record);
          let i = o.filter((c, l, d) => l === d.findIndex((f) => f.hash === c.hash));
          i.sort((c, l) => c.block_header.timestamp.microseconds_since_unix_epoch < l.block_header.timestamp.microseconds_since_unix_epoch ? 1 : -1);
          let a = [];
          return i.forEach((c) => {
            a.push({ txHash: c.hash, sender: c.header.sender.Move, sequenceNumber: c.header.sequence_number, maxGasAmount: c.header.max_gas_amount, gasUnitPrice: c.header.gas_unit_price, gasUsed: c.output.Move.gas_used, transactionCost: c.header.gas_unit_price * c.output.Move.gas_used, txExpirationTimestamp: Number(c.header.expiration_timestamp.microseconds_since_unix_epoch), txConfirmationTime: Number(c.block_header.timestamp.microseconds_since_unix_epoch), status: c.status === "Fail" || c.status === "Invalid" ? "Failed" : c.status, events: c.output.Move.events, blockNumber: c.block_header.height, blockHash: c.block_header.hash, transactionInsights: this.getTransactionInsights(e.toString(), c), vm_status: c.output.Move.vm_status });
          }), a;
        }
        async getCoinInfo(e) {
          let t = await this.getResourceData(new HexString(e.substring(2, 66)), `${te}::coin::CoinInfo<${e}>`);
          return { name: t.name, symbol: t.symbol, decimals: t.decimals };
        }
        async getAccountSupraCoinBalance(e) {
          return BigInt((await this.getResourceData(e, "0x1::coin::CoinStore<0x1::supra_coin::SupraCoin>")).coin.value);
        }
        async getAccountCoinBalance(e, t) {
          return BigInt((await this.getResourceData(e, `0x1::coin::CoinStore<${t}>`)).coin.value);
        }
        async invokeViewMethod(e, t, n) {
          return (await this.sendRequest(false, "/rpc/v1/view", { function: e, type_arguments: t, arguments: n })).data.result;
        }
        async getTableItemByKey(e, t, n, s) {
          return (await this.sendRequest(false, `/rpc/v1/tables/${e}/item`, { key_type: t, value_type: n, key: s })).data;
        }
        async waitForTransactionCompletion(e) {
          for (let t = 0; t < 300; t++) {
            let n = await this.getTransactionStatus(e);
            if (n === null || n == "Pending") await Mt(1e3);
            else return n;
          }
          return "Pending";
        }
        async sendTx(e, t) {
          var s, o;
          ((s = t == null ? void 0 : t.enableTransactionSimulation) != null ? s : Wt) === true && await this.simulateTx(e);
          let n = await this.sendRequest(false, "/rpc/v1/transactions/submit", e);
          return console.log("Transaction Request Sent, Waiting For Completion"), { txHash: n.data, result: ((o = t == null ? void 0 : t.enableWaitForTransaction) != null ? o : zt) === true ? await this.waitForTransactionCompletion(n.data) : "Pending" };
        }
        static signSupraTransaction(e, t) {
          let n = Uint8Array.from(Buffer.from((0, import_js_sha32.sha3_256)(t instanceof aptos_types_exports.RawTransaction ? Gt : Kt), "hex")), s = new Uint8Array(bcs_exports.bcsToBytes(t)), o = new Uint8Array(n.length + s.length);
          return o.set(n), o.set(s, n.length), e.signBuffer(o);
        }
        static signSupraMultiTransaction(e, t) {
          let n = new aptos_types_exports.Ed25519Signature(r2.signSupraTransaction(e, t).toUint8Array());
          return new aptos_types_exports.AccountAuthenticatorEd25519(new aptos_types_exports.Ed25519PublicKey(e.signingKey.publicKey), n);
        }
        getRawTxnJSON(e, t) {
          let n = t.payload.value;
          return { sender: e.toString(), sequence_number: Number(t.sequence_number), payload: { EntryFunction: { module: { address: n.module_name.address.toHexString().toString(), name: n.module_name.name.value }, function: n.function_name.value, ty_args: Dt(n.ty_args), args: Bt(n.args) } }, max_gas_amount: Number(t.max_gas_amount), gas_unit_price: Number(t.gas_unit_price), expiration_timestamp_secs: Number(t.expiration_timestamp_secs), chain_id: t.chain_id.value };
        }
        getSendTxPayload(e, t) {
          return { Move: { raw_txn: this.getRawTxnJSON(e.address(), t), authenticator: { Ed25519: { public_key: e.pubKey().toString(), signature: r2.signSupraTransaction(e, t).toString() } } } };
        }
        async sendTxUsingSerializedRawTransaction(e, t, n) {
          let s = this.getSendTxPayload(e, aptos_types_exports.RawTransaction.deserialize(new bcs_exports.Deserializer(t)));
          return await this.sendTx(s, n);
        }
        async sendSponsorTransaction(e, t, n, s, o, i, a = [], c) {
          let l = [];
          a.forEach((f) => {
            l.push(this.getED25519AuthenticatorJSON(f));
          });
          let d = { Move: { raw_txn: this.getRawTxnJSON(new HexString(e), s), authenticator: { FeePayer: { sender: this.getED25519AuthenticatorJSON(o), secondary_signer_addresses: n, secondary_signers: l, fee_payer_address: t, fee_payer_signer: this.getED25519AuthenticatorJSON(i) } } } };
          return await this.sendTx(d, c);
        }
        async sendMultiAgentTransaction(e, t, n, s, o, i) {
          let a = [];
          o.forEach((l) => {
            a.push(this.getED25519AuthenticatorJSON(l));
          });
          let c = { Move: { raw_txn: this.getRawTxnJSON(new HexString(e), n), authenticator: { MultiAgent: { sender: this.getED25519AuthenticatorJSON(s), secondary_signer_addresses: t, secondary_signers: a } } } };
          return await this.sendTx(c, i);
        }
        getED25519AuthenticatorJSON(e) {
          return { Ed25519: { public_key: Buffer.from(e.public_key.value).toString("hex"), signature: Buffer.from(e.signature.value).toString("hex") } };
        }
        async createRawTxObject(e, t, n, s, o, i, a, c) {
          var l, d, f;
          return new aptos_types_exports.RawTransaction(new aptos_types_exports.AccountAddress(e.toUint8Array()), t, new aptos_types_exports.TransactionPayloadEntryFunction(new aptos_types_exports.EntryFunction(new aptos_types_exports.ModuleId(new aptos_types_exports.AccountAddress(new HexString(Lt(n)).toUint8Array()), new aptos_types_exports.Identifier(s)), new aptos_types_exports.Identifier(o), i, a)), (l = c == null ? void 0 : c.maxGas) != null ? l : qt, (d = c == null ? void 0 : c.gasUnitPrice) != null ? d : Ht, (f = c == null ? void 0 : c.txExpiryTime) != null ? f : BigInt(Math.ceil(Date.now() / jt) + Jt), this.chainId);
        }
        async createSerializedRawTxObject(e, t, n, s, o, i, a, c) {
          return bcs_exports.bcsToBytes(await this.createRawTxObject(e, t, n, s, o, i, a, c));
        }
        static createSignedTransaction(e, t) {
          return new aptos_types_exports.SignedTransaction(t, new aptos_types_exports.AccountAuthenticatorEd25519(new aptos_types_exports.Ed25519PublicKey(e.pubKey().toUint8Array()), new aptos_types_exports.Ed25519Signature(r2.signSupraTransaction(e, t).toUint8Array())));
        }
        static deriveTransactionHash(e) {
          return keccak256(bcs_exports.bcsToBytes(e));
        }
        async transferSupraCoin(e, t, n, s) {
          var i;
          if (s != null && s.optionalTransactionPayloadArgs && !((i = s == null ? void 0 : s.optionalTransactionPayloadArgs) != null && i.maxGas)) {
            let a = BigInt($t);
            await this.isAccountExists(t) == false && (a = BigInt(Vt)), s.optionalTransactionPayloadArgs.maxGas = a;
          }
          let o = this.getSendTxPayload(e, await this.createRawTxObject(e.address(), (await this.getAccountInfo(e.address())).sequence_number, te, "supra_account", "transfer", [], [t.toUint8Array(), bcs_exports.bcsSerializeUint64(n)], s == null ? void 0 : s.optionalTransactionPayloadArgs));
          return await this.sendTx(o, s == null ? void 0 : s.enableTransactionWaitAndSimulationArgs);
        }
        async transferCoin(e, t, n, s, o) {
          let i = this.getSendTxPayload(e, await this.createRawTxObject(e.address(), (await this.getAccountInfo(e.address())).sequence_number, te, "supra_account", "transfer_coins", [new aptos_types_exports.TypeTagParser(s).parseTypeTag()], [t.toUint8Array(), bcs_exports.bcsSerializeUint64(n)], o == null ? void 0 : o.optionalTransactionPayloadArgs));
          return await this.sendTx(i, o == null ? void 0 : o.enableTransactionWaitAndSimulationArgs);
        }
        async publishPackage(e, t, n, s) {
          let o = new bcs_exports.Serializer(), i = [];
          for (let c = 0; c < n.length; c++) i.push(new aptos_types_exports.Module(Uint8Array.from(n[c])));
          bcs_exports.serializeVector(i, o);
          let a = this.getSendTxPayload(e, await this.createRawTxObject(e.address(), (await this.getAccountInfo(e.address())).sequence_number, te, "code", "publish_package_txn", [], [bcs_exports.bcsSerializeBytes(t), o.getBytes()], s == null ? void 0 : s.optionalTransactionPayloadArgs));
          return await this.sendTx(a, s == null ? void 0 : s.enableTransactionWaitAndSimulationArgs);
        }
        async simulateTx(e) {
          let t = e.Move.authenticator, n = JSON.parse(JSON.stringify(t));
          e.Move.authenticator = n, this.unsetAuthenticatorSignatures(e.Move.authenticator);
          let s = await this.sendRequest(false, "/rpc/v1/transactions/simulate", e);
          if (e.Move.authenticator = t, s.data.output.Move.vm_status !== "Executed successfully") throw new Error("Transaction Can Be Failed, Reason: " + s.data.output.Move.vm_status);
          return console.log("Transaction Simulation Done"), s.data;
        }
        unsetAuthenticatorSignatures(e) {
          let t = "0x" + "0".repeat(128);
          "Ed25519" in e ? e.Ed25519.signature = t : "FeePayer" in e ? (e.FeePayer.sender.Ed25519.signature = t, e.FeePayer.fee_payer_signer.Ed25519.signature = t, e.FeePayer.secondary_signers.forEach((n) => {
            n.Ed25519.signature = t;
          })) : (e.MultiAgent.sender.Ed25519.signature = t, e.MultiAgent.secondary_signers.forEach((n) => {
            n.Ed25519.signature = t;
          }));
        }
        async simulateTxUsingSerializedRawTransaction(e, t, n) {
          let s = { Move: { raw_txn: this.getRawTxnJSON(e, aptos_types_exports.RawTransaction.deserialize(new bcs_exports.Deserializer(n))), authenticator: t } };
          return await this.simulateTx(s);
        }
      };
    }
  });

  // supra.shim.js
  var init_supra_shim = __esm({
    "supra.shim.js"() {
      "use strict";
      init_browser2();
      globalThis.SupraAccount = AptosAccount;
      globalThis.SupraClient = Xt;
      globalThis.BCS = bcs_exports;
      globalThis.HexString = HexString;
    }
  });

  // src/actions/supra-accounts.ts
  init_supra_shim();
  var encryptData = async (_data, _ipfsCid) => {
    const accessControlConditions = [
      {
        contractAddress: "",
        standardContractType: "",
        chain: "ethereum",
        method: "",
        parameters: [":currentActionIpfsId"],
        returnValueTest: {
          comparator: "=",
          value: _ipfsCid
        }
      }
    ];
    console.log("accessControlConditions:", accessControlConditions);
    console.log("data:", _data);
    const { ciphertext: ciphertext2, dataToEncryptHash: dataToEncryptHash2 } = await Lit.Actions.encrypt({
      accessControlConditions,
      to_encrypt: _data
    });
    console.log("ciphertext: ", ciphertext2);
    console.log("dataToEncryptHash: ", dataToEncryptHash2);
    return { ciphertext: ciphertext2, dataToEncryptHash: dataToEncryptHash2 };
  };
  var decryptData = async (_ciphertext, _dataToEncryptHash, _ipfsCid) => {
    const accessControlConditions = [
      {
        contractAddress: "",
        standardContractType: "",
        chain: "ethereum",
        method: "",
        parameters: [":currentActionIpfsId"],
        returnValueTest: {
          comparator: "=",
          value: _ipfsCid
        }
      }
    ];
    const decryptedData = await Lit.Actions.decryptToSingleNode({
      accessControlConditions,
      ciphertext: _ciphertext,
      dataToEncryptHash: _dataToEncryptHash,
      authSig: null,
      chain: "ethereum"
    });
    console.log("decryptedData: ", decryptedData);
    return decryptedData;
  };
  var go = async () => {
    const result = await Lit.Actions.runOnce(
      { waitForResponse: true, name: "encryptedPrivateKey" },
      async () => {
        if (method === "createAccount") {
          const account = new SupraAccount();
          const accountAddress = account.address().toString();
          console.log("newSupraAccount: ", accountAddress);
          const privateKeyObject = account.toPrivateKeyObject();
          console.log("privateKeyObject: ", privateKeyObject);
          const encryptedData = await encryptData(
            new TextEncoder().encode(privateKeyObject.privateKeyHex),
            ipfsCID
          );
          return JSON.stringify({ ...encryptedData, accountAddress });
        } else {
          const decryptedData = await decryptData(
            ciphertext,
            dataToEncryptHash,
            ipfsCID
          );
          if (!decryptedData) {
            return;
          }
          const account = new SupraAccount(Buffer.from(decryptedData, "hex"));
          const accountAddress = account.address().toString();
          console.log("account: ", accountAddress);
          return JSON.stringify({ accountAddress });
        }
      }
    );
    Lit.Actions.setResponse({
      response: result
    });
  };
  go();
})();
/*! Bundled license information:

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

js-sha3/src/sha3.js:
  (**
   * [js-sha3]{@link https://github.com/emn178/js-sha3}
   *
   * @version 0.9.3
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2015-2023
   * @license MIT
   *)

js-sha3/src/sha3.js:
  (**
   * [js-sha3]{@link https://github.com/emn178/js-sha3}
   *
   * @version 0.8.0
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2015-2018
   * @license MIT
   *)
*/
