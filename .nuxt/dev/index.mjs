import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, removeResponseHeader, createError, getQuery as getQuery$1, readBody, getResponseStatus, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener, getRouterParam, getHeader, getCookie, getMethod, getHeaders, getResponseStatusText } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/h3/dist/index.mjs';
import { escapeHtml } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/@vue/shared/dist/shared.cjs.js';
import bcrypt from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/bcryptjs/index.js';
import { z } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/zod/index.js';
import { addReminder, debugState, getReminders, deleteReminder, updateReminder, getReminderById, calculateNextReminder } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms//lib/temp-reminders.js';
import jwt from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/jsonwebtoken/index.js';
import { PrismaClient } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/@prisma/client/default.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, decodePath, withLeadingSlash, withoutTrailingSlash, joinRelativeURL } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/ufo/dist/index.mjs';
import { renderToString } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/vue/server-renderer/index.mjs';
import { klona } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/defu/dist/defu.mjs';
import destr, { destr as destr$1 } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/destr/dist/index.mjs';
import { snakeCase } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/scule/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/unhead/dist/server.mjs';
import { stringify, uneval } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/devalue/index.js';
import { isVNode, toValue, isRef } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/vue/index.mjs';
import { DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/unhead/dist/plugins.mjs';
import { createHooks } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/ohash/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/youch-core/build/index.js';
import { Youch } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/nitropack/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/source-map/source-map.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/errx/dist/index.js';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/pathe/dist/index.mjs';
import { walkResolver } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/unhead/dist/utils.mjs';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/ipx/dist/index.mjs';
import { isAbsolute } from 'file://D:/Study/Clone%20Github%20Folder/longchau_pms/node_modules/@nuxt/image/node_modules/pathe/dist/index.mjs';

const serverAssets = [{"baseName":"server","dir":"D:/Study/Clone Github Folder/longchau_pms/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:/Study/Clone Github Folder/longchau_pms","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:/Study/Clone Github Folder/longchau_pms/server","watchOptions":{"ignored":[null]}}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:/Study/Clone Github Folder/longchau_pms/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:/Study/Clone Github Folder/longchau_pms/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"D:/Study/Clone Github Folder/longchau_pms/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "apiBase": "/api"
  },
  "databaseUrl": "file:./prisma/dev.db",
  "jwtSecret": "your-jwt-secret-key",
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "D:/Study/Clone Github Folder/longchau_pms/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (event.handled || isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
    defaultRes.body.stack = defaultRes.body.stack.join("\n");
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  errorObject.statusMessage ||= error.statusMessage;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    if (header === "set-cookie") {
      appendResponseHeader(event, header, value);
      continue;
    }
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json || !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const rootDir = "D:/Study/Clone Github Folder/longchau_pms";

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"},{"name":"description","content":"Your trusted online pharmacy for medications and medical equipment"}],"link":[{"rel":"icon","type":"image/png","href":"/favicon.webp"}],"style":[],"script":[],"noscript":[],"title":"Long Châu - Online Pharmacy & Medical Equipment"};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _0E9FhKKBfSb4fsLeDmUbjNzNauoQuJf9Fwl77BCDh0 = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola$1.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola$1.wrapConsole();
}

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"nuxt-color-mode\")||\"light\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"light\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _CAuq7y7dqmki_EXmEdhHbudw_q9gTgsZ4ntnGxZvs8 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _0E9FhKKBfSb4fsLeDmUbjNzNauoQuJf9Fwl77BCDh0,
_CAuq7y7dqmki_EXmEdhHbudw_q9gTgsZ4ntnGxZvs8
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _E58KJC = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
  disableCapoSorting: false,
  plugins: [DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin],
};

function createSSRContext(event) {
  const ssrContext = {
    url: event.path,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || (false),
    head: createHead(unheadOptions),
    error: false,
    nuxt: void 0,
    /* NuxtApp */
    payload: {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set()
  };
  return ssrContext;
}
function setSSRError(ssrContext, error) {
  ssrContext.error = true;
  ssrContext.payload = { error };
  ssrContext.url = error.url;
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => import('file://D:/Study/Clone%20Github%20Folder/longchau_pms/.nuxt//dist/server/server.mjs').then((r) => r.default || r);
const getClientManifest = () => import('file://D:/Study/Clone%20Github%20Folder/longchau_pms/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
    {
      return APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG;
    }
  });
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules ||= /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function getRenderer(ssrContext) {
  return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap && styleMap[mod]) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
function getServerComponentHTML(body) {
  const match = body.match(ROOT_NODE_REGEX);
  return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
    response[name] = {
      ...slot,
      fallback: ssrContext.teleports?.[`island-fallback=${name}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
    const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...component,
      html,
      slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, id, slot] = match;
      if (!slot || clientUid !== id) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
const _SxA8c9 = defineEventHandler(async (event) => {
  const nitroApp = useNitroApp();
  setResponseHeaders(event, {
    "content-type": "application/json;charset=utf-8",
    "x-powered-by": "Nuxt"
  });
  const islandContext = await getIslandContext(event);
  const ssrContext = {
    ...createSSRContext(event),
    islandContext,
    noSSR: false,
    url: islandContext.url
  };
  const renderer = await getSSRRenderer();
  const renderResult = await renderer.renderToString(ssrContext).catch(async (error) => {
    await ssrContext.nuxt?.hooks.callHook("app:error", error);
    throw error;
  });
  const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult });
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  {
    const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
    const link = [];
    for (const resource of Object.values(styles)) {
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
      }
    }
    if (link.length) {
      ssrContext.head.push({ link }, { mode: "server" });
    }
  }
  const islandHead = {};
  for (const entry of ssrContext.head.entries.values()) {
    for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
      const currentValue = islandHead[key];
      if (Array.isArray(currentValue)) {
        currentValue.push(...value);
      }
      islandHead[key] = value;
    }
  }
  islandHead.link ||= [];
  islandHead.style ||= [];
  const islandResponse = {
    id: islandContext.id,
    head: islandHead,
    html: getServerComponentHTML(renderResult.html),
    components: getClientIslandResponse(ssrContext),
    slots: getSlotIslandResponse(ssrContext)
  };
  await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
  return islandResponse;
});
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr$1(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

const _KGb7KD = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_CkJwa6 = () => Promise.resolve().then(function () { return orders_get$1; });
const _lazy_pYMZ7e = () => Promise.resolve().then(function () { return _id__patch$1; });
const _lazy_kh9qYx = () => Promise.resolve().then(function () { return index_post$5; });
const _lazy_3Efy22 = () => Promise.resolve().then(function () { return login_post$1; });
const _lazy_QRwC3V = () => Promise.resolve().then(function () { return logout_post$1; });
const _lazy_DGqhbr = () => Promise.resolve().then(function () { return me_get$1; });
const _lazy_1BjTKv = () => Promise.resolve().then(function () { return profile$1; });
const _lazy_zfRzxv = () => Promise.resolve().then(function () { return refresh_post$1; });
const _lazy_AJMe50 = () => Promise.resolve().then(function () { return register_post$1; });
const _lazy_krCuVC = () => Promise.resolve().then(function () { return products_get$1; });
const _lazy_gK_KEk = () => Promise.resolve().then(function () { return index_get$9; });
const _lazy_IDsVkF = () => Promise.resolve().then(function () { return addSampleReminders_post$1; });
const _lazy_1DgGQT = () => Promise.resolve().then(function () { return reminders_get$1; });
const _lazy_MGS18o = () => Promise.resolve().then(function () { return _id__delete$1; });
const _lazy_XkW0uN = () => Promise.resolve().then(function () { return _id_$1; });
const _lazy_nvbV5n = () => Promise.resolve().then(function () { return index_get$7; });
const _lazy_QU7uPm = () => Promise.resolve().then(function () { return index_post$3; });
const _lazy_zjebng = () => Promise.resolve().then(function () { return _id__get$3; });
const _lazy_U_h3VC = () => Promise.resolve().then(function () { return index_get$5; });
const _lazy_zjazA2 = () => Promise.resolve().then(function () { return index_post$1; });
const _lazy_uBss1O = () => Promise.resolve().then(function () { return index_get$3; });
const _lazy_3Popkz = () => Promise.resolve().then(function () { return _id__get$1; });
const _lazy_YcC4ke = () => Promise.resolve().then(function () { return inventory$1; });
const _lazy_AyvOIS = () => Promise.resolve().then(function () { return index_get$1; });
const _lazy_bpT1QS = () => Promise.resolve().then(function () { return search_get$1; });
const _lazy_kzzhiT = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _E58KJC, lazy: false, middleware: true, method: undefined },
  { route: '/api/admin/orders', handler: _lazy_CkJwa6, lazy: true, middleware: false, method: "get" },
  { route: '/api/admin/orders/:id', handler: _lazy_pYMZ7e, lazy: true, middleware: false, method: "patch" },
  { route: '/api/admin/users', handler: _lazy_kh9qYx, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/login', handler: _lazy_3Efy22, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/logout', handler: _lazy_QRwC3V, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/me', handler: _lazy_DGqhbr, lazy: true, middleware: false, method: "get" },
  { route: '/api/auth/profile', handler: _lazy_1BjTKv, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/refresh', handler: _lazy_zfRzxv, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/register', handler: _lazy_AJMe50, lazy: true, middleware: false, method: "post" },
  { route: '/api/categories/:id/products', handler: _lazy_krCuVC, lazy: true, middleware: false, method: "get" },
  { route: '/api/categories', handler: _lazy_gK_KEk, lazy: true, middleware: false, method: "get" },
  { route: '/api/debug/add-sample-reminders', handler: _lazy_IDsVkF, lazy: true, middleware: false, method: "post" },
  { route: '/api/debug/reminders', handler: _lazy_1DgGQT, lazy: true, middleware: false, method: "get" },
  { route: '/api/medication-reminders/:id', handler: _lazy_MGS18o, lazy: true, middleware: false, method: "delete" },
  { route: '/api/medication-reminders/:id', handler: _lazy_XkW0uN, lazy: true, middleware: false, method: undefined },
  { route: '/api/medication-reminders', handler: _lazy_nvbV5n, lazy: true, middleware: false, method: "get" },
  { route: '/api/medication-reminders', handler: _lazy_QU7uPm, lazy: true, middleware: false, method: "post" },
  { route: '/api/orders/:id', handler: _lazy_zjebng, lazy: true, middleware: false, method: "get" },
  { route: '/api/orders', handler: _lazy_U_h3VC, lazy: true, middleware: false, method: "get" },
  { route: '/api/orders', handler: _lazy_zjazA2, lazy: true, middleware: false, method: "post" },
  { route: '/api/prescriptions', handler: _lazy_uBss1O, lazy: true, middleware: false, method: "get" },
  { route: '/api/products/:id', handler: _lazy_3Popkz, lazy: true, middleware: false, method: "get" },
  { route: '/api/products/:id/inventory', handler: _lazy_YcC4ke, lazy: true, middleware: false, method: undefined },
  { route: '/api/products', handler: _lazy_AyvOIS, lazy: true, middleware: false, method: "get" },
  { route: '/api/products/search', handler: _lazy_bpT1QS, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_kzzhiT, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _KGb7KD, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_kzzhiT, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + escapeHtml(messages.statusCode) + " - " + escapeHtml(messages.statusMessage || "Internal Server Error") + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.pointer-events-none{pointer-events:none}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script></head><body class="antialiased bg-white dark:bg-black dark:text-white flex flex-col font-sans min-h-screen pt-14 px-10 text-black"><div class="fixed left-0 pointer-events-none right-0 spotlight"></div><h1 class="font-medium mb-6 sm:text-8xl text-6xl">` + escapeHtml(messages.statusCode) + '</h1><p class="font-light leading-tight mb-8 sm:text-2xl text-xl">' + escapeHtml(messages.description) + '</p><div class="bg-black/5 bg-white dark:bg-white/10 flex-1 h-auto overflow-y-auto rounded-t-md"><div class="font-light leading-tight p-8 text-xl z-10">' + escapeHtml(messages.stack) + "</div></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "file:./prisma/dev.db";
}
let prisma;
{
  if (!global.__prisma) {
    global.__prisma = new PrismaClient();
  }
  prisma = global.__prisma;
}

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret";
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "fallback-refresh-secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "15m";
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || "7d";
async function hashPassword(password) {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
}
async function verifyPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}
function generateAccessToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}
function generateRefreshToken(payload) {
  return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: JWT_REFRESH_EXPIRES_IN });
}
function verifyAccessToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}
function verifyRefreshToken(token) {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET);
  } catch (error) {
    return null;
  }
}
function extractTokenFromHeader(authHeader) {
  if (!authHeader) return null;
  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") return null;
  return parts[1];
}

const orders_get = defineEventHandler(async (event) => {
  try {
    const authHeader = getHeader(event, "authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw createError({
        statusCode: 401,
        statusMessage: "Authorization token required"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyAccessToken(token);
    if (!decoded || !decoded.userId) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid or expired token"
      });
    }
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { role: true }
    });
    if (!user || user.role !== "ADMIN") {
      throw createError({
        statusCode: 403,
        statusMessage: "Admin access required"
      });
    }
    const query = getQuery$1(event);
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 20;
    const status = query.status;
    const sortBy = query.sortBy || "createdAt";
    const sortOrder = query.sortOrder || "desc";
    const where = {};
    if (status) {
      where.status = status;
    }
    const orderBy = {};
    orderBy[sortBy] = sortOrder;
    const [orders, totalCount] = await Promise.all([
      prisma.order.findMany({
        where,
        orderBy,
        skip: (page - 1) * limit,
        take: limit,
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
              phone: true
            }
          },
          orderItems: {
            include: {
              product: {
                select: {
                  id: true,
                  name: true,
                  images: true,
                  manufacturer: true
                }
              }
            }
          }
        }
      }),
      prisma.order.count({ where })
    ]);
    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPreviousPage = page > 1;
    return {
      success: true,
      orders,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNextPage,
        hasPreviousPage,
        limit
      }
    };
  } catch (error) {
    console.error("Error fetching admin orders:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch orders"
    });
  }
});

const orders_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: orders_get
}, Symbol.toStringTag, { value: 'Module' }));

const _id__patch = defineEventHandler(async (event) => {
  try {
    const authHeader = getHeader(event, "authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw createError({
        statusCode: 401,
        statusMessage: "Authorization token required"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyAccessToken(token);
    if (!decoded || !decoded.userId) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid or expired token"
      });
    }
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { role: true }
    });
    if (!user || user.role !== "ADMIN") {
      throw createError({
        statusCode: 403,
        statusMessage: "Admin access required"
      });
    }
    const orderId = getRouterParam(event, "id");
    if (!orderId) {
      throw createError({
        statusCode: 400,
        statusMessage: "Order ID is required"
      });
    }
    const updateData = await readBody(event);
    if (!updateData) {
      throw createError({
        statusCode: 400,
        statusMessage: "Update data is required"
      });
    }
    const existingOrder = await prisma.order.findUnique({
      where: { id: orderId }
    });
    if (!existingOrder) {
      throw createError({
        statusCode: 404,
        statusMessage: "Order not found"
      });
    }
    const allowedUpdates = ["status", "paymentStatus", "trackingNumber", "notes"];
    const updates = {};
    for (const key of allowedUpdates) {
      if (updateData[key] !== void 0) {
        updates[key] = updateData[key];
      }
    }
    if (Object.keys(updates).length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: "No valid update fields provided"
      });
    }
    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: {
        ...updates,
        updatedAt: /* @__PURE__ */ new Date()
      },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true
          }
        },
        orderItems: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                images: true,
                manufacturer: true
              }
            }
          }
        }
      }
    });
    return {
      success: true,
      order: updatedOrder,
      message: "Order updated successfully"
    };
  } catch (error) {
    console.error("Error updating order:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to update order"
    });
  }
});

const _id__patch$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id__patch
}, Symbol.toStringTag, { value: 'Module' }));

const index_post$4 = defineEventHandler(async (event) => {
  try {
    const authorization = getCookie(event, "auth-token") || getHeader(event, "authorization");
    if (!authorization) {
      throw createError({
        statusCode: 401,
        statusMessage: "Authentication required"
      });
    }
    const token = authorization.replace("Bearer ", "");
    const decoded = verifyAccessToken(token);
    if (!decoded || !decoded.userId) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid token"
      });
    }
    const currentUser = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { role: true }
    });
    if (!currentUser || currentUser.role !== "ADMIN") {
      throw createError({
        statusCode: 403,
        statusMessage: "Admin access required"
      });
    }
    const userData = await readBody(event);
    if (!userData) {
      throw createError({
        statusCode: 400,
        statusMessage: "User data is required"
      });
    }
    const { email, password, firstName, lastName, role = "USER" } = userData;
    if (!email || !password || !firstName || !lastName) {
      throw createError({
        statusCode: 400,
        statusMessage: "Email, password, first name, and last name are required"
      });
    }
    const validRoles = ["USER", "ADMIN", "PHARMACIST"];
    if (!validRoles.includes(role)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid role. Must be USER, ADMIN, or PHARMACIST"
      });
    }
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    if (existingUser) {
      throw createError({
        statusCode: 400,
        statusMessage: "User with this email already exists"
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role,
        isActive: true
        // Admin-created users are auto-activated
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        createdAt: true
      }
    });
    return {
      success: true,
      user: newUser,
      message: `${role} user created successfully`
    };
  } catch (error) {
    console.error("Error creating user:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to create user"
    });
  }
});

const index_post$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_post$4
}, Symbol.toStringTag, { value: 'Module' }));

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional().default(false)
});
const login_post = defineEventHandler(async (event) => {
  if (getMethod(event) !== "POST") {
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  }
  try {
    const body = await readBody(event);
    const { email, password, rememberMe } = loginSchema.parse(body);
    const user = await prisma.user.findUnique({
      where: { email }
    });
    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid email or password"
      });
    }
    if (!user.isActive) {
      throw createError({
        statusCode: 401,
        statusMessage: "Account is deactivated. Please contact support."
      });
    }
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid email or password"
      });
    }
    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role
    };
    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);
    const userResponse = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      role: user.role,
      isActive: user.isActive,
      createdAt: user.createdAt
    };
    return {
      success: true,
      message: "Login successful",
      user: userResponse,
      token: accessToken,
      refreshToken,
      expiresIn: 15 * 60
      // 15 minutes in seconds
    };
  } catch (error) {
    if (error.issues) {
      throw createError({
        statusCode: 400,
        statusMessage: "Validation error",
        data: error.issues
      });
    }
    console.error("Login error:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error"
    });
  }
});

const login_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: login_post
}, Symbol.toStringTag, { value: 'Module' }));

const logout_post = defineEventHandler(async (event) => {
  if (getMethod(event) !== "POST") {
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  }
  return {
    success: true,
    message: "Logged out successfully"
  };
});

const logout_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: logout_post
}, Symbol.toStringTag, { value: 'Module' }));

const me_get = defineEventHandler(async (event) => {
  if (getMethod(event) !== "GET") {
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  }
  try {
    const authHeader = getHeader(event, "authorization");
    const token = extractTokenFromHeader(authHeader);
    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: "No token provided"
      });
    }
    const payload = verifyAccessToken(token);
    if (!payload) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid or expired token"
      });
    }
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        isActive: true,
        addresses: true,
        dateOfBirth: true,
        createdAt: true,
        updatedAt: true
      }
    });
    if (!user || !user.isActive) {
      throw createError({
        statusCode: 401,
        statusMessage: "User not found or inactive"
      });
    }
    return {
      success: true,
      user
    };
  } catch (error) {
    if (error.statusCode) {
      throw error;
    }
    console.error("Get user error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error"
    });
  }
});

const me_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: me_get
}, Symbol.toStringTag, { value: 'Module' }));

const profile = defineEventHandler(async (event) => {
  var _a;
  try {
    const authorization = getCookie(event, "auth-token") || getHeader(event, "authorization");
    if (!authorization) {
      throw createError({
        statusCode: 401,
        statusMessage: "Authentication required"
      });
    }
    const token = authorization.replace("Bearer ", "");
    const decoded = verifyAccessToken(token);
    if (!decoded || !decoded.userId) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid token"
      });
    }
    const method = getMethod(event);
    if (method === "GET") {
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          phone: true,
          dateOfBirth: true,
          role: true,
          isActive: true,
          addresses: true,
          createdAt: true,
          updatedAt: true
        }
      });
      if (!user) {
        throw createError({
          statusCode: 404,
          statusMessage: "User not found"
        });
      }
      return {
        success: true,
        user: {
          ...user,
          addresses: user.addresses ? JSON.parse(user.addresses) : []
        }
      };
    }
    if (method === "PUT") {
      const body = await readBody(event);
      if (!body) {
        throw createError({
          statusCode: 400,
          statusMessage: "Profile data is required"
        });
      }
      const currentUser = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: { email: true }
      });
      if (body.email && body.email !== (currentUser == null ? void 0 : currentUser.email)) {
        const existingUser = await prisma.user.findUnique({
          where: { email: body.email }
        });
        if (existingUser) {
          throw createError({
            statusCode: 400,
            statusMessage: "Email address is already in use"
          });
        }
      }
      const updateData = {};
      if (body.firstName) updateData.firstName = body.firstName.trim();
      if (body.lastName) updateData.lastName = body.lastName.trim();
      if (body.email) updateData.email = body.email.trim().toLowerCase();
      if (body.phone !== void 0) updateData.phone = ((_a = body.phone) == null ? void 0 : _a.trim()) || null;
      if (body.dateOfBirth) updateData.dateOfBirth = new Date(body.dateOfBirth);
      if (body.addresses) updateData.addresses = JSON.stringify(body.addresses);
      updateData.updatedAt = /* @__PURE__ */ new Date();
      const updatedUser = await prisma.user.update({
        where: { id: decoded.userId },
        data: updateData,
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          phone: true,
          dateOfBirth: true,
          role: true,
          isActive: true,
          addresses: true,
          createdAt: true,
          updatedAt: true
        }
      });
      return {
        success: true,
        user: {
          ...updatedUser,
          addresses: updatedUser.addresses ? JSON.parse(updatedUser.addresses) : []
        },
        message: "Profile updated successfully"
      };
    }
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  } catch (error) {
    console.error("Profile API error:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to handle profile request"
    });
  }
});

const profile$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: profile
}, Symbol.toStringTag, { value: 'Module' }));

const refreshSchema = z.object({
  refreshToken: z.string().min(1, "Refresh token is required")
});
const refresh_post = defineEventHandler(async (event) => {
  if (getMethod(event) !== "POST") {
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  }
  try {
    const body = await readBody(event);
    const { refreshToken } = refreshSchema.parse(body);
    const payload = verifyRefreshToken(refreshToken);
    if (!payload) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid or expired refresh token"
      });
    }
    const user = await prisma.user.findUnique({
      where: { id: payload.userId }
    });
    if (!user || !user.isActive) {
      throw createError({
        statusCode: 401,
        statusMessage: "User not found or inactive"
      });
    }
    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role
    };
    const newAccessToken = generateAccessToken(tokenPayload);
    const newRefreshToken = generateRefreshToken(tokenPayload);
    return {
      success: true,
      token: newAccessToken,
      refreshToken: newRefreshToken,
      expiresIn: 15 * 60
      // 15 minutes in seconds
    };
  } catch (error) {
    if (error.issues) {
      throw createError({
        statusCode: 400,
        statusMessage: "Validation error",
        data: error.issues
      });
    }
    if (error.statusCode) {
      throw error;
    }
    console.error("Token refresh error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error"
    });
  }
});

const refresh_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: refresh_post
}, Symbol.toStringTag, { value: 'Module' }));

const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().optional(),
  dateOfBirth: z.string().optional()
});
const register_post = defineEventHandler(async (event) => {
  if (getMethod(event) !== "POST") {
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  }
  try {
    const body = await readBody(event);
    const validatedData = registerSchema.parse(body);
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email }
    });
    if (existingUser) {
      throw createError({
        statusCode: 409,
        statusMessage: "User with this email already exists"
      });
    }
    const hashedPassword = await hashPassword(validatedData.password);
    const user = await prisma.user.create({
      data: {
        email: validatedData.email,
        password: hashedPassword,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        phone: validatedData.phone,
        dateOfBirth: validatedData.dateOfBirth ? new Date(validatedData.dateOfBirth) : null
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        isActive: true,
        createdAt: true
      }
    });
    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role
    };
    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);
    return {
      success: true,
      message: "User registered successfully",
      user,
      token: accessToken,
      refreshToken,
      expiresIn: 15 * 60
      // 15 minutes in seconds
    };
  } catch (error) {
    if (error.issues) {
      throw createError({
        statusCode: 400,
        statusMessage: "Validation error",
        data: error.issues
      });
    }
    console.error("Registration error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error"
    });
  }
});

const register_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: register_post
}, Symbol.toStringTag, { value: 'Module' }));

const products_get = defineEventHandler(async (event) => {
  try {
    const categoryId = getRouterParam(event, "id");
    const query = getQuery$1(event);
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 12;
    const sortBy = query.sortBy || "name";
    const sortOrder = query.sortOrder || "asc";
    if (!categoryId) {
      throw createError({
        statusCode: 400,
        statusMessage: "Category ID is required"
      });
    }
    const category = await prisma.category.findFirst({
      where: {
        OR: [
          { id: categoryId },
          { slug: categoryId }
        ],
        isActive: true
      }
    });
    if (!category) {
      throw createError({
        statusCode: 404,
        statusMessage: "Category not found"
      });
    }
    const orderBy = {};
    if (sortBy === "price") {
      orderBy.price = sortOrder;
    } else if (sortBy === "name") {
      orderBy.name = sortOrder;
    } else if (sortBy === "createdAt") {
      orderBy.createdAt = sortOrder;
    } else {
      orderBy.name = "asc";
    }
    const products = await prisma.product.findMany({
      where: {
        categoryId: category.id,
        isActive: true
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            slug: true
          }
        },
        reviews: {
          select: {
            rating: true
          }
        }
      },
      orderBy,
      skip: (page - 1) * limit,
      take: limit
    });
    const totalItems = await prisma.product.count({
      where: {
        categoryId: category.id,
        isActive: true
      }
    });
    const productsWithRating = products.map((product) => ({
      ...product,
      rating: product.reviews.length > 0 ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length : 0,
      reviewCount: product.reviews.length,
      inStock: product.stock > 0,
      // Add inStock boolean for frontend compatibility
      reviews: void 0
      // Remove reviews array from response
    }));
    return {
      products: productsWithRating,
      category,
      pagination: {
        page,
        limit,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        hasNext: page * limit < totalItems,
        hasPrev: page > 1
      }
    };
  } catch (error) {
    console.error("Category products fetch error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch category products"
    });
  }
});

const products_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: products_get
}, Symbol.toStringTag, { value: 'Module' }));

const index_get$8 = defineEventHandler(async (event) => {
  try {
    const categories = await prisma.category.findMany({
      where: {
        isActive: true
      },
      include: {
        _count: {
          select: {
            products: {
              where: {
                isActive: true
              }
            }
          }
        }
      },
      orderBy: {
        name: "asc"
      }
    });
    const categoriesWithCount = categories.map((category) => ({
      ...category,
      productCount: category._count.products,
      _count: void 0
    }));
    return {
      categories: categoriesWithCount
    };
  } catch (error) {
    console.error("Categories fetch error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch categories"
    });
  }
});

const index_get$9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get$8
}, Symbol.toStringTag, { value: 'Module' }));

const addSampleReminders_post = defineEventHandler(async (event) => {
  try {
    const sampleReminders = [
      {
        userId: "user123",
        // You'll need to use your actual user ID
        medicationName: "Aspirin",
        dosage: "100mg",
        frequency: "daily",
        timeSlots: ["08:00", "20:00"],
        isActive: true,
        instructions: "Take with food"
      },
      {
        userId: "user123",
        medicationName: "Vitamin D",
        dosage: "1000 IU",
        frequency: "daily",
        timeSlots: ["09:00"],
        isActive: true,
        instructions: "Take in the morning"
      }
    ];
    const addedReminders = sampleReminders.map((reminder) => addReminder(reminder));
    return {
      message: "Sample reminders added successfully",
      reminders: addedReminders,
      note: "You can now test the delete functionality"
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to add sample reminders"
    });
  }
});

const addSampleReminders_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: addSampleReminders_post
}, Symbol.toStringTag, { value: 'Module' }));

const reminders_get = defineEventHandler(async (event) => {
  const debug = debugState();
  const userIds = ["cmdg5wbeq0014z86ojnhimrw5", "cmdg7mhfy0000z820qxchthfl"];
  const userReminders = {};
  for (const userId of userIds) {
    userReminders[userId] = getReminders(userId);
  }
  return {
    message: "Debug state of medication reminders",
    debug,
    userReminders,
    serverTime: (/* @__PURE__ */ new Date()).toISOString(),
    note: "This shows the current state of the temporary storage"
  };
});

const reminders_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reminders_get
}, Symbol.toStringTag, { value: 'Module' }));

const _id__delete = defineEventHandler(async (event) => {
  try {
    if (getMethod(event) !== "DELETE") {
      throw createError({
        statusCode: 405,
        statusMessage: "Method not allowed"
      });
    }
    const authorization = getCookie(event, "auth-token") || getHeader(event, "authorization");
    if (!authorization) {
      throw createError({
        statusCode: 401,
        statusMessage: "Authentication required"
      });
    }
    const token = authorization.replace("Bearer ", "");
    const decoded = verifyAccessToken(token);
    if (!decoded || !decoded.userId) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid token"
      });
    }
    const reminderId = getRouterParam(event, "id");
    console.log("=== DELETE API ENDPOINT DEBUG ===");
    console.log("DELETE request - Reminder ID:", reminderId, "User ID:", decoded.userId);
    console.log("ID type:", typeof reminderId);
    console.log("Parsed ID:", reminderId ? parseInt(reminderId) : "undefined");
    console.log("About to call deleteReminder function...");
    const deletedReminder = deleteReminder(reminderId, decoded.userId);
    console.log("DELETE API - Result from deleteReminder function:", deletedReminder);
    console.log("=== END DELETE API DEBUG ===");
    if (!deletedReminder) {
      throw createError({
        statusCode: 404,
        statusMessage: "Reminder not found"
      });
    }
    return {
      success: true,
      message: "Reminder deleted successfully"
    };
  } catch (error) {
    console.error("Error deleting medication reminder:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Failed to delete medication reminder"
    });
  }
});

const _id__delete$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id__delete
}, Symbol.toStringTag, { value: 'Module' }));

const _id_ = defineEventHandler(async (event) => {
  console.log("=== MEDICATION REMINDER API [ID] DEBUG ===");
  console.log("Method:", getMethod(event));
  console.log("URL:", getRequestURL(event));
  console.log("Headers:", getHeaders(event));
  try {
    const authorization = getCookie(event, "auth-token") || getHeader(event, "authorization");
    if (!authorization) {
      console.log("No authorization found");
      throw createError({
        statusCode: 401,
        statusMessage: "Authentication required"
      });
    }
    const token = authorization.replace("Bearer ", "");
    const decoded = verifyAccessToken(token);
    if (!decoded || !decoded.userId) {
      console.log("Invalid token");
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid token"
      });
    }
    const reminderId = getRouterParam(event, "id");
    const method = getMethod(event);
    console.log("Processing:", { method, reminderId, userId: decoded.userId });
    if (method === "PATCH") {
      const body = await readBody(event);
      console.log("PATCH - Update data:", body);
      const updatedReminder = updateReminder(reminderId, decoded.userId, {
        ...body,
        timeSlots: body.timeSlots ? JSON.stringify(body.timeSlots) : void 0
      });
      console.log("PATCH - Update result:", updatedReminder);
      if (!updatedReminder) {
        throw createError({
          statusCode: 404,
          statusMessage: "Reminder not found"
        });
      }
      return {
        success: true,
        reminder: {
          ...updatedReminder,
          timeSlots: updatedReminder.timeSlots ? JSON.parse(updatedReminder.timeSlots) : []
        }
      };
    }
    if (method === "DELETE") {
      console.log("DELETE request - Reminder ID:", reminderId, "User ID:", decoded.userId);
      const deletedReminder = deleteReminder(reminderId, decoded.userId);
      console.log("Delete result:", deletedReminder);
      if (!deletedReminder) {
        throw createError({
          statusCode: 404,
          statusMessage: "Reminder not found"
        });
      }
      return {
        success: true,
        message: "Reminder deleted successfully"
      };
    }
    if (method === "GET") {
      const reminder = getReminderById(reminderId, decoded.userId);
      if (!reminder) {
        throw createError({
          statusCode: 404,
          statusMessage: "Reminder not found"
        });
      }
      return {
        reminder: {
          ...reminder,
          timeSlots: reminder.timeSlots ? JSON.parse(reminder.timeSlots) : []
        }
      };
    }
    throw createError({
      statusCode: 405,
      statusMessage: `Method ${method} not allowed`
    });
  } catch (error) {
    console.error("Error handling medication reminder:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Failed to handle medication reminder"
    });
  }
});

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id_
}, Symbol.toStringTag, { value: 'Module' }));

const index_get$6 = defineEventHandler(async (event) => {
  console.log("=== MEDICATION REMINDER GET DEBUG ===");
  console.log("Method:", getMethod(event));
  console.log("URL:", getRequestURL(event));
  try {
    const authorization = getCookie(event, "auth-token") || getHeader(event, "authorization");
    if (!authorization) {
      console.log("\u274C No authorization header found");
      throw createError({
        statusCode: 401,
        statusMessage: "Authentication required"
      });
    }
    const token = authorization.replace("Bearer ", "");
    const decoded = verifyAccessToken(token);
    if (!decoded || !decoded.userId) {
      console.log("\u274C Invalid token or missing userId");
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid token"
      });
    }
    console.log("\u2705 Authentication successful - User ID:", decoded.userId);
    const query = getQuery$1(event);
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const allReminders = getReminders(decoded.userId);
    console.log("\u{1F4CA} GET reminders - User ID:", decoded.userId, "Found reminders:", allReminders.length);
    console.log("\u{1F4CB} All reminders for this user:", allReminders.map((r) => ({
      id: r.id,
      name: r.medicationName,
      userId: r.userId,
      createdAt: r.createdAt
    })));
    const totalItems = allReminders.length;
    const startIndex = (page - 1) * limit;
    const reminders = allReminders.slice(startIndex, startIndex + limit);
    const transformedReminders = reminders.map((reminder) => ({
      ...reminder,
      timeSlots: JSON.parse(reminder.timeSlots || "[]")
    }));
    return {
      reminders: transformedReminders,
      pagination: {
        page,
        limit,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        hasNext: page * limit < totalItems,
        hasPrev: page > 1
      }
    };
  } catch (error) {
    console.error("Error fetching medication reminders:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Failed to fetch medication reminders"
    });
  }
});

const index_get$7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get$6
}, Symbol.toStringTag, { value: 'Module' }));

const index_post$2 = defineEventHandler(async (event) => {
  console.log("=== MEDICATION REMINDER CREATE DEBUG ===");
  console.log("Method:", getMethod(event));
  console.log("URL:", getRequestURL(event));
  try {
    const authorization = getCookie(event, "auth-token") || getHeader(event, "authorization");
    if (!authorization) {
      console.log("\u274C No authorization header found");
      throw createError({
        statusCode: 401,
        statusMessage: "Authentication required"
      });
    }
    const token = authorization.replace("Bearer ", "");
    const decoded = verifyAccessToken(token);
    if (!decoded || !decoded.userId) {
      console.log("\u274C Invalid token or missing userId");
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid token"
      });
    }
    console.log("\u2705 Authentication successful - User ID:", decoded.userId);
    const body = await readBody(event);
    console.log("\u{1F4DD} Request body:", body);
    const { medicationName, dosage, frequency, timeSlots, notes } = body;
    if (!medicationName || !frequency) {
      throw createError({
        statusCode: 400,
        statusMessage: "Medication name and frequency are required"
      });
    }
    const validFrequencies = ["daily", "twice-daily", "weekly", "monthly", "as-needed"];
    if (!validFrequencies.includes(frequency)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid frequency"
      });
    }
    if (timeSlots && !Array.isArray(timeSlots)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Time slots must be an array"
      });
    }
    const nextReminder = calculateNextReminder(frequency, timeSlots || []);
    console.log("\u{1F504} Creating reminder for user ID:", decoded.userId);
    console.log("\u{1F504} Reminder data to save:", {
      medicationName,
      dosage,
      frequency,
      timeSlots: JSON.stringify(timeSlots || []),
      notes,
      isActive: true,
      nextReminder,
      userId: decoded.userId
    });
    const reminder = addReminder({
      medicationName,
      dosage: dosage || null,
      frequency,
      timeSlots: JSON.stringify(timeSlots || []),
      notes: notes || null,
      isActive: true,
      nextReminder,
      userId: decoded.userId
    });
    console.log("\u2705 Successfully created reminder:", {
      id: reminder.id,
      name: reminder.medicationName,
      userId: reminder.userId,
      createdAt: reminder.createdAt
    });
    return {
      success: true,
      reminder: {
        ...reminder,
        timeSlots: JSON.parse(reminder.timeSlots)
      }
    };
  } catch (error) {
    console.error("Error creating medication reminder:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Failed to create medication reminder"
    });
  }
});

const index_post$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_post$2
}, Symbol.toStringTag, { value: 'Module' }));

const _id__get$2 = defineEventHandler(async (event) => {
  if (getMethod(event) !== "GET") {
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  }
  try {
    const authHeader = getHeader(event, "authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw createError({
        statusCode: 401,
        statusMessage: "Authorization token required"
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await verifyAccessToken(token);
    if (!decoded || !decoded.userId) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid or expired token"
      });
    }
    const orderId = getRouterParam(event, "id");
    if (!orderId) {
      throw createError({
        statusCode: 400,
        statusMessage: "Order ID is required"
      });
    }
    const order = await prisma.order.findFirst({
      where: {
        id: orderId,
        userId: decoded.userId
        // Ensure user can only access their own orders
      },
      include: {
        orderItems: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                images: true,
                manufacturer: true,
                description: true
              }
            }
          }
        },
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
            phone: true
          }
        }
      }
    });
    if (!order) {
      throw createError({
        statusCode: 404,
        statusMessage: "Order not found or access denied"
      });
    }
    return {
      success: true,
      data: order
    };
  } catch (error) {
    console.error("Error fetching order:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch order"
    });
  }
});

const _id__get$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id__get$2
}, Symbol.toStringTag, { value: 'Module' }));

const index_get$4 = defineEventHandler(async (event) => {
  if (getMethod(event) !== "GET") {
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  }
  try {
    const authHeader = getHeader(event, "authorization");
    const authCookie = getCookie(event, "auth-token");
    const token = (authHeader == null ? void 0 : authHeader.startsWith("Bearer ")) ? authHeader.split(" ")[1] : authCookie;
    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: "Authorization token required"
      });
    }
    const decoded = await verifyAccessToken(token);
    if (!decoded || !decoded.userId) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid or expired token"
      });
    }
    const query = getQuery$1(event);
    const { status, limit = "50", offset = "0" } = query;
    const whereClause = {
      userId: decoded.userId
    };
    if (status && status !== "all") {
      whereClause.status = status;
    }
    const limitNum = parseInt(limit) || 50;
    const offsetNum = parseInt(offset) || 0;
    const orders = await prisma.order.findMany({
      where: whereClause,
      include: {
        orderItems: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                images: true,
                manufacturer: true
              }
            }
          }
        },
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      },
      take: limitNum,
      skip: offsetNum
    });
    const totalCount = await prisma.order.count({
      where: whereClause
    });
    return {
      success: true,
      data: orders,
      pagination: {
        total: totalCount,
        limit: limitNum,
        offset: offsetNum,
        hasNext: offsetNum + limitNum < totalCount,
        hasPrev: offsetNum > 0
      }
    };
  } catch (error) {
    console.error("Error fetching orders:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch orders"
    });
  }
});

const index_get$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get$4
}, Symbol.toStringTag, { value: 'Module' }));

const index_post = defineEventHandler(async (event) => {
  var _a;
  if (getMethod(event) !== "POST") {
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  }
  try {
    const authorization = getCookie(event, "auth-token") || getHeader(event, "authorization");
    if (!authorization) {
      throw createError({
        statusCode: 401,
        statusMessage: "Authentication required"
      });
    }
    const token = authorization.replace("Bearer ", "");
    const decoded = verifyAccessToken(token);
    if (!decoded || !decoded.userId) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid token"
      });
    }
    const orderData = await readBody(event);
    if (!orderData) {
      throw createError({
        statusCode: 400,
        statusMessage: "Order data is required"
      });
    }
    if (!orderData.items || !Array.isArray(orderData.items) || orderData.items.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: "Order items are required"
      });
    }
    if (!orderData.shipping) {
      throw createError({
        statusCode: 400,
        statusMessage: "Shipping information is required"
      });
    }
    for (const item of orderData.items) {
      if (!item.quantity || item.quantity <= 0) {
        throw createError({
          statusCode: 400,
          statusMessage: `Invalid quantity for product ${item.id}. Quantity must be greater than 0.`
        });
      }
      if (!Number.isInteger(item.quantity) || item.quantity > 1e4) {
        throw createError({
          statusCode: 400,
          statusMessage: `Invalid quantity for product ${item.id}. Quantity must be a valid integer between 1 and 10,000.`
        });
      }
    }
    const productIds = orderData.items.map((item) => item.id);
    const existingProducts = await prisma.product.findMany({
      where: {
        id: {
          in: productIds
        }
      },
      select: {
        id: true,
        name: true,
        price: true,
        stock: true,
        isActive: true
      }
    });
    const missingProducts = productIds.filter((id) => !existingProducts.find((p) => p.id === id));
    if (missingProducts.length > 0) {
      throw createError({
        statusCode: 400,
        statusMessage: `Products not found: ${missingProducts.join(", ")}`
      });
    }
    const stockIssues = [];
    for (const item of orderData.items) {
      const product = existingProducts.find((p) => p.id === item.id);
      if (!product) continue;
      if (!product.isActive) {
        stockIssues.push(`${product.name} is currently unavailable`);
        continue;
      }
      if (product.stock <= 0) {
        stockIssues.push(`${product.name} is currently out of stock`);
        continue;
      }
      if (product.stock && item.quantity > product.stock) {
        stockIssues.push(`${product.name}: requested ${item.quantity} but only ${product.stock} available`);
      }
    }
    if (stockIssues.length > 0) {
      throw createError({
        statusCode: 400,
        statusMessage: `Stock validation failed: ${stockIssues.join("; ")}`
      });
    }
    const orderNumber = orderData.orderNumber || "MDP-" + Date.now() + "-" + Math.floor(Math.random() * 1e3);
    const subtotal = orderData.subtotal || orderData.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingFee = orderData.shippingFee || 0;
    const taxAmount = orderData.tax || subtotal * 0.08;
    const totalAmount = orderData.total || subtotal + shippingFee + taxAmount;
    const order = await prisma.order.create({
      data: {
        orderNumber,
        userId: decoded.userId,
        status: "PENDING",
        totalAmount,
        taxAmount,
        shippingFee,
        shippingAddress: JSON.stringify(orderData.shipping || orderData.shippingAddress),
        billingAddress: JSON.stringify(orderData.billing || orderData.billingAddress),
        paymentMethod: orderData.paymentMethod || "credit-card",
        paymentStatus: "PENDING",
        // Create order items
        orderItems: {
          create: ((_a = orderData.items) == null ? void 0 : _a.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
            total: item.price * item.quantity
          }))) || []
        }
      },
      include: {
        orderItems: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                images: true,
                manufacturer: true
              }
            }
          }
        },
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true
          }
        }
      }
    });
    return {
      success: true,
      order,
      message: "Order created successfully"
    };
  } catch (error) {
    console.error("Error creating order:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to create order"
    });
  }
});

const index_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_post
}, Symbol.toStringTag, { value: 'Module' }));

const index_get$2 = defineEventHandler(async (event) => {
  try {
    const authorization = getCookie(event, "auth-token") || getHeader(event, "authorization");
    if (!authorization) {
      throw createError({
        statusCode: 401,
        statusMessage: "Authentication required"
      });
    }
    const token = authorization.replace("Bearer ", "");
    const decoded = verifyAccessToken(token);
    if (!decoded || !decoded.userId) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid token"
      });
    }
    const query = getQuery$1(event);
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const status = query.status;
    const search = query.search;
    const where = {
      userId: decoded.userId
      // This ensures prescriptions are filtered by user
    };
    if (status && status !== "All") {
      where.status = status;
    }
    if (search) {
      where.OR = [
        {
          id: {
            contains: search,
            mode: "insensitive"
          }
        },
        {
          doctorName: {
            contains: search,
            mode: "insensitive"
          }
        },
        {
          notes: {
            contains: search,
            mode: "insensitive"
          }
        }
      ];
    }
    const prescriptions = await prisma.prescription.findMany({
      where,
      orderBy: {
        createdAt: "desc"
      },
      skip: (page - 1) * limit,
      take: limit
    });
    const totalItems = await prisma.prescription.count({
      where
    });
    const transformedPrescriptions = prescriptions.map((prescription) => {
      return {
        id: prescription.id,
        status: prescription.status,
        doctorName: prescription.doctorName || "Unknown Doctor",
        issueDate: prescription.createdAt.toISOString().split("T")[0],
        expiryDate: "",
        // Would need to add this field to schema
        medications: [],
        // Would need to add this field to schema
        medicationDetails: [],
        // Would need to add this field to schema
        orderStatus: "Processing",
        // Would need to add this field to schema
        uploadDate: prescription.createdAt.toISOString().split("T")[0],
        notes: prescription.notes || "",
        imageUrl: prescription.imageUrl
      };
    });
    return {
      prescriptions: transformedPrescriptions,
      pagination: {
        page,
        limit,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        hasNext: page * limit < totalItems,
        hasPrev: page > 1
      }
    };
  } catch (error) {
    console.error("Prescriptions fetch error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Failed to fetch prescriptions"
    });
  }
});

const index_get$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get$2
}, Symbol.toStringTag, { value: 'Module' }));

const _id__get = defineEventHandler(async (event) => {
  try {
    const productId = getRouterParam(event, "id");
    if (!productId) {
      throw createError({
        statusCode: 400,
        statusMessage: "Product ID is required"
      });
    }
    console.log(productId);
    const product = await prisma.product.findFirst({
      where: {
        OR: [
          { id: productId },
          { slug: productId }
        ],
        isActive: true
      },
      include: {
        category: true
      }
    });
    if (!product) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found"
      });
    }
    const relatedProducts = await prisma.product.findMany({
      where: {
        categoryId: product.categoryId,
        id: { not: product.id },
        isActive: true
      },
      include: {
        category: true
      },
      take: 4
    });
    const productWithParsedFields = {
      ...product,
      images: product.images ? JSON.parse(product.images) : [],
      ingredients: product.ingredients ? JSON.parse(product.ingredients) : [],
      sideEffects: product.sideEffects ? JSON.parse(product.sideEffects) : [],
      contraindications: product.contraindications ? JSON.parse(product.contraindications) : [],
      relatedProducts: relatedProducts.map((p) => ({
        ...p,
        images: p.images ? JSON.parse(p.images) : []
      }))
    };
    return {
      product: productWithParsedFields
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch product"
    });
  }
});

const _id__get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id__get
}, Symbol.toStringTag, { value: 'Module' }));

const inventory = defineEventHandler(async (event) => {
  const method = getMethod(event);
  const productId = getRouterParam(event, "id");
  if (!productId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Product ID is required"
    });
  }
  try {
    const product = await prisma.product.findFirst({
      where: {
        OR: [
          { id: productId },
          { slug: productId }
        ],
        isActive: true
      }
    });
    if (!product) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found"
      });
    }
    if (method === "GET") {
      return {
        productId: product.id,
        productName: product.name,
        currentStock: product.stock,
        inStock: product.stock > 0,
        lowStock: product.stock > 0 && product.stock < product.minStock,
        outOfStock: product.stock === 0,
        minStock: product.minStock,
        maxStock: product.maxStock
      };
    }
    if (method === "PUT") {
      const body = await readBody(event);
      const { stock, operation = "set" } = body;
      if (typeof stock !== "number" || stock < 0) {
        throw createError({
          statusCode: 400,
          statusMessage: "Valid stock number is required"
        });
      }
      let newStock;
      switch (operation) {
        case "add":
          newStock = product.stock + stock;
          break;
        case "subtract":
          newStock = Math.max(0, product.stock - stock);
          break;
        case "set":
        default:
          newStock = stock;
          break;
      }
      const updatedProduct = await prisma.product.update({
        where: { id: product.id },
        data: { stock: newStock }
      });
      return {
        productId: updatedProduct.id,
        productName: updatedProduct.name,
        previousStock: product.stock,
        newStock: updatedProduct.stock,
        operation,
        inStock: updatedProduct.stock > 0,
        lowStock: updatedProduct.stock > 0 && updatedProduct.stock < updatedProduct.minStock,
        outOfStock: updatedProduct.stock === 0
      };
    }
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  } catch (error) {
    console.error("Inventory operation error:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to process inventory operation"
    });
  }
});

const inventory$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: inventory
}, Symbol.toStringTag, { value: 'Module' }));

const index_get = defineEventHandler(async (event) => {
  try {
    const query = getQuery$1(event);
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 12;
    const category = query.category;
    const brand = query.brand;
    const minPrice = parseFloat(query.minPrice) || 0;
    const maxPrice = parseFloat(query.maxPrice) || 999999;
    const inStock = query.inStock === "true";
    const featured = query.featured === "true";
    const sortBy = query.sortBy || "name";
    const sortOrder = query.sortOrder || "asc";
    const search = query.search;
    const slug = query.slug;
    const where = {
      isActive: true,
      price: {
        gte: minPrice,
        lte: maxPrice
      }
    };
    if (category) {
      where.category = {
        slug: category
      };
    }
    if (brand) {
      where.brand = {
        contains: brand,
        mode: "insensitive"
      };
    }
    if (inStock) {
      where.stock = {
        gt: 0
      };
    }
    if (featured) {
      where.isFeatured = true;
    }
    if (slug) {
      where.slug = slug;
    }
    if (search) {
      where.OR = [
        {
          name: {
            contains: search,
            mode: "insensitive"
          }
        },
        {
          description: {
            contains: search,
            mode: "insensitive"
          }
        },
        {
          brand: {
            contains: search,
            mode: "insensitive"
          }
        }
      ];
    }
    let orderBy = {};
    switch (sortBy) {
      case "price":
        orderBy.price = sortOrder;
        break;
      case "name":
        orderBy.name = sortOrder;
        break;
      case "createdAt":
        orderBy.createdAt = sortOrder;
        break;
      default:
        orderBy.name = "asc";
    }
    const totalItems = await prisma.product.count({ where });
    const products = await prisma.product.findMany({
      where,
      include: {
        category: {
          select: {
            id: true,
            name: true,
            slug: true
          }
        },
        reviews: {
          select: {
            rating: true
          }
        }
      },
      orderBy,
      skip: (page - 1) * limit,
      take: limit
    });
    const productsWithRating = products.map((product) => ({
      ...product,
      rating: product.reviews.length > 0 ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length : 0,
      reviewCount: product.reviews.length,
      inStock: product.stock > 0,
      // Add inStock boolean for frontend compatibility
      reviews: void 0
      // Remove reviews array from response
    }));
    if (slug) {
      return {
        data: productsWithRating
      };
    }
    return {
      products: productsWithRating,
      pagination: {
        page,
        limit,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        hasNext: page * limit < totalItems,
        hasPrev: page > 1
      }
    };
  } catch (error) {
    console.error("Products fetch error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch products"
    });
  }
});

const index_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get
}, Symbol.toStringTag, { value: 'Module' }));

const search_get = defineEventHandler(async (event) => {
  var _a;
  try {
    const query = getQuery$1(event);
    const searchQuery = ((_a = query.q) == null ? void 0 : _a.toLowerCase()) || "";
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 12;
    const category = query.category;
    const brand = query.brand;
    const minPrice = parseFloat(query.minPrice) || 0;
    const maxPrice = parseFloat(query.maxPrice) || 999999;
    const inStock = query.inStock === "true";
    const sortBy = query.sortBy || "relevance";
    const sortOrder = query.sortOrder || "desc";
    const where = {
      isActive: true,
      price: {
        gte: minPrice,
        lte: maxPrice
      }
    };
    if (searchQuery.trim()) {
      where.OR = [
        {
          name: {
            contains: searchQuery
          }
        },
        {
          description: {
            contains: searchQuery
          }
        },
        {
          manufacturer: {
            contains: searchQuery
          }
        }
      ];
    }
    if (category) {
      where.category = {
        slug: category
      };
    }
    if (brand) {
      where.manufacturer = {
        contains: brand
      };
    }
    if (inStock) {
      where.stock = {
        gt: 0
      };
    }
    let orderBy = {};
    switch (sortBy) {
      case "price":
        orderBy.price = sortOrder;
        break;
      case "name":
        orderBy.name = sortOrder;
        break;
      case "createdAt":
        orderBy.createdAt = sortOrder;
        break;
      case "relevance":
      default:
        orderBy.name = "asc";
        break;
    }
    const totalItems = await prisma.product.count({ where });
    const products = await prisma.product.findMany({
      where,
      include: {
        category: {
          select: {
            id: true,
            name: true,
            slug: true
          }
        },
        reviews: {
          select: {
            rating: true
          }
        }
      },
      orderBy,
      skip: (page - 1) * limit,
      take: limit
    });
    const searchResults = products.map((product) => {
      let images = [];
      let ingredients = [];
      try {
        images = product.images ? JSON.parse(product.images) : [];
      } catch (e) {
        images = [];
      }
      try {
        ingredients = product.ingredients ? JSON.parse(product.ingredients) : [];
      } catch (e) {
        ingredients = [];
      }
      const rating = product.reviews.length > 0 ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length : 0;
      return {
        id: product.id,
        name: product.name,
        slug: product.slug,
        description: product.description,
        shortDescription: product.shortDescription,
        price: product.price,
        originalPrice: product.comparePrice,
        discount: product.discount,
        image: images[0] || null,
        images,
        categoryId: product.categoryId,
        category: product.category,
        brand: product.manufacturer,
        stock: product.stock,
        sku: product.sku,
        featured: product.featured,
        prescription: product.requiresPrescription,
        rating,
        reviewCount: product.reviews.length,
        tags: ingredients,
        // Using ingredients as tags for search compatibility
        inStock: product.stock > 0,
        specifications: {
          "Pack Size": product.sku,
          "Manufacturer": product.manufacturer,
          "Dosage": product.dosage
        },
        dosage: product.dosage,
        storage: "Store in a cool, dry place. Keep out of reach of children."
      };
    });
    return {
      results: searchResults,
      pagination: {
        page,
        limit,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        hasNext: page * limit < totalItems,
        hasPrev: page > 1
      },
      searchQuery,
      resultCount: searchResults.length,
      totalResults: totalItems
    };
  } catch (error) {
    console.error("Search error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to search products"
    });
  }
});

const search_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: search_get
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderSSRHeadOptions = {"omitLineBreaks":false};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const ssrContext = createSSRContext(event);
  const headEntryOptions = { mode: "server" };
  ssrContext.head.push(appHead, headEntryOptions);
  if (ssrError) {
    ssrError.statusCode &&= Number.parseInt(ssrError.statusCode);
    setSSRError(ssrContext, ssrError);
  }
  const isRenderingPayload = PAYLOAD_URL_RE.test(ssrContext.url);
  if (isRenderingPayload) {
    const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
    ssrContext.url = url;
    event._path = event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  if (routeOptions.ssr === false) {
    ssrContext.noSSR = true;
  }
  const renderer = await getRenderer(ssrContext);
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  const inlinedStyles = [];
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response = renderPayloadResponse(ssrContext);
    return response;
  }
  const NO_SCRIPTS = routeOptions.noScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (ssrContext._preloadManifest && !NO_SCRIPTS) {
    ssrContext.head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  const link = [];
  for (const resource of Object.values(styles)) {
    if ("inline" in getQuery(resource.file)) {
      continue;
    }
    link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
  }
  if (link.length) {
    ssrContext.head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS) {
    ssrContext.head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.noScripts) {
    const tagPosition = "head";
    ssrContext.head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
  const htmlContext = {
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  return {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
});
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}

const renderer$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: renderer
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
