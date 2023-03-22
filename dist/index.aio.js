/*!
 * @niux/utils 1.0.0
 * Licensed under MIT
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.utils = {}));
})(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function type(x) {
    var _x$constructor;
    var t = _typeof(x);
    if (x === null) {
      return 'null';
    }
    if (t !== 'object') {
      return t;
    }
    var toString = Object.prototype.toString;
    var innerType = toString.call(x).slice(8, -1);
    var innerLowType = innerType.toLowerCase();

    // 区分 String() 和 new String()
    if (['String', 'Boolean', 'Number'].includes(innerType)) {
      return innerType;
    }

    // function A() {}; new A
    if (typeof (x === null || x === void 0 ? void 0 : (_x$constructor = x.constructor) === null || _x$constructor === void 0 ? void 0 : _x$constructor.name) === 'string') {
      return x.constructor.name;
    }
    return innerLowType;
  }

  var _addToUnscopables = function () { /* empty */ };

  var _addToUnscopables$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _addToUnscopables,
    default: _addToUnscopables
  });

  var _iterStep = function (done, value) {
    return { value: value, done: !!done };
  };

  var _iterStep$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _iterStep,
    default: _iterStep
  });

  var _iterators = {};

  var _iterators$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _iterators,
    default: _iterators
  });

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var _cof$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _cof,
    default: _cof
  });

  var cof = ( _cof$1 && _cof ) || _cof$1;

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };

  var _iobject$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _iobject,
    default: _iobject
  });

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  var _defined$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _defined,
    default: _defined
  });

  var IObject = ( _iobject$1 && _iobject ) || _iobject$1;

  var defined = ( _defined$1 && _defined ) || _defined$1;

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return IObject(defined(it));
  };

  var _toIobject$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _toIobject,
    default: _toIobject
  });

  var _library = true;

  var _library$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _library,
    default: _library
  });

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _global$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _global,
    default: _global
  });

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.6.12' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _core$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _core,
    default: _core,
    version: _core_1
  });

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  var _aFunction$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _aFunction,
    default: _aFunction
  });

  var aFunction = ( _aFunction$1 && _aFunction ) || _aFunction$1;

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var _ctx$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _ctx,
    default: _ctx
  });

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _isObject$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _isObject,
    default: _isObject
  });

  var isObject = ( _isObject$1 && _isObject ) || _isObject$1;

  var _anObject = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _anObject$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _anObject,
    default: _anObject
  });

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  var _fails$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _fails,
    default: _fails
  });

  var fails = ( _fails$1 && _fails ) || _fails$1;

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var _descriptors$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _descriptors,
    default: _descriptors
  });

  var global = ( _global$1 && _global ) || _global$1;

  var document$1 = global.document;
  // typeof document.createElement is 'object' in old IE
  var is = isObject(document$1) && isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _domCreate$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _domCreate,
    default: _domCreate
  });

  var DESCRIPTORS = ( _descriptors$1 && _descriptors ) || _descriptors$1;

  var require$$1$2 = ( _domCreate$1 && _domCreate ) || _domCreate$1;

  var _ie8DomDefine = !DESCRIPTORS && !fails(function () {
    return Object.defineProperty(require$$1$2('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  var _ie8DomDefine$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _ie8DomDefine,
    default: _ie8DomDefine
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var _toPrimitive$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _toPrimitive,
    default: _toPrimitive
  });

  var anObject = ( _anObject$1 && _anObject ) || _anObject$1;

  var IE8_DOM_DEFINE = ( _ie8DomDefine$1 && _ie8DomDefine ) || _ie8DomDefine$1;

  var toPrimitive = ( _toPrimitive$1 && _toPrimitive ) || _toPrimitive$1;

  var dP$2 = Object.defineProperty;

  var f$2 = DESCRIPTORS ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
      return dP$2(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f$2
  };

  var _objectDp$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _objectDp,
    default: _objectDp,
    f: f$2
  });

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _propertyDesc$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _propertyDesc,
    default: _propertyDesc
  });

  var require$$0$h = ( _objectDp$1 && _objectDp ) || _objectDp$1;

  var descriptor = ( _propertyDesc$1 && _propertyDesc ) || _propertyDesc$1;

  var _hide = DESCRIPTORS ? function (object, key, value) {
    return require$$0$h.f(object, key, descriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var _hide$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _hide,
    default: _hide
  });

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var _has$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _has,
    default: _has
  });

  var require$$1$1 = ( _core$1 && _core ) || _core$1;

  var ctx = ( _ctx$1 && _ctx ) || _ctx$1;

  var hide = ( _hide$1 && _hide ) || _hide$1;

  var $has = ( _has$1 && _has ) || _has$1;

  var PROTOTYPE$1 = 'prototype';

  var $export$1 = function (type, name, source) {
    var IS_FORCED = type & $export$1.F;
    var IS_GLOBAL = type & $export$1.G;
    var IS_STATIC = type & $export$1.S;
    var IS_PROTO = type & $export$1.P;
    var IS_BIND = type & $export$1.B;
    var IS_WRAP = type & $export$1.W;
    var exports = IS_GLOBAL ? require$$1$1 : require$$1$1[name] || (require$$1$1[name] = {});
    var expProto = exports[PROTOTYPE$1];
    var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE$1];
    var key, own, out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      if (own && $has(exports, key)) continue;
      // export native or passed
      out = own ? target[key] : source[key];
      // prevent global pollution for namespaces
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
      // bind timers to global for call from export context
      : IS_BIND && own ? ctx(out, global)
      // wrap global constructors for prevent change them in library
      : IS_WRAP && target[key] == out ? (function (C) {
        var F = function (a, b, c) {
          if (this instanceof C) {
            switch (arguments.length) {
              case 0: return new C();
              case 1: return new C(a);
              case 2: return new C(a, b);
            } return new C(a, b, c);
          } return C.apply(this, arguments);
        };
        F[PROTOTYPE$1] = C[PROTOTYPE$1];
        return F;
      // make static versions for prototype methods
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
      if (IS_PROTO) {
        (exports.virtual || (exports.virtual = {}))[key] = out;
        // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
        if (type & $export$1.R && expProto && !expProto[key]) hide(expProto, key, out);
      }
    }
  };
  // type bitmap
  $export$1.F = 1;   // forced
  $export$1.G = 2;   // global
  $export$1.S = 4;   // static
  $export$1.P = 8;   // proto
  $export$1.B = 16;  // bind
  $export$1.W = 32;  // wrap
  $export$1.U = 64;  // safe
  $export$1.R = 128; // real proto method for `library`
  var _export = $export$1;

  var _export$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _export,
    default: _export
  });

  var _redefine = hide;

  var _redefine$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _redefine,
    default: _redefine
  });

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  var _toInteger$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _toInteger,
    default: _toInteger
  });

  var toInteger = ( _toInteger$1 && _toInteger ) || _toInteger$1;

  // 7.1.15 ToLength

  var min$1 = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min$1(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var _toLength$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _toLength,
    default: _toLength
  });

  var max = Math.max;
  var min = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };

  var _toAbsoluteIndex$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _toAbsoluteIndex,
    default: _toAbsoluteIndex
  });

  var toIObject = ( _toIobject$1 && _toIobject ) || _toIobject$1;

  var toLength = ( _toLength$1 && _toLength ) || _toLength$1;

  var toAbsoluteIndex = ( _toAbsoluteIndex$1 && _toAbsoluteIndex ) || _toAbsoluteIndex$1;

  // false -> Array#indexOf
  // true  -> Array#includes



  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var _arrayIncludes$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _arrayIncludes,
    default: _arrayIncludes
  });

  var LIBRARY = ( _library$1 && _library ) || _library$1;

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = global[SHARED] || (global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: require$$1$1.version,
    mode: LIBRARY ? 'pure' : 'global',
    copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
  });
  });

  var _shared$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _shared,
    default: _shared
  });

  var id$1 = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$1 + px).toString(36));
  };

  var _uid$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _uid,
    default: _uid
  });

  var require$$0$g = ( _shared$1 && _shared ) || _shared$1;

  var require$$0$f = ( _uid$1 && _uid ) || _uid$1;

  var shared = require$$0$g('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = require$$0$f(key));
  };

  var _sharedKey$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _sharedKey,
    default: _sharedKey
  });

  var require$$0$e = ( _arrayIncludes$1 && _arrayIncludes ) || _arrayIncludes$1;

  var require$$0$d = ( _sharedKey$1 && _sharedKey ) || _sharedKey$1;

  var arrayIndexOf = require$$0$e(false);
  var IE_PROTO$2 = require$$0$d('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = toIObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO$2) $has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if ($has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  var _objectKeysInternal$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _objectKeysInternal,
    default: _objectKeysInternal
  });

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  var _enumBugKeys$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _enumBugKeys,
    default: _enumBugKeys
  });

  var $keys = ( _objectKeysInternal$1 && _objectKeysInternal ) || _objectKeysInternal$1;

  var enumBugKeys = ( _enumBugKeys$1 && _enumBugKeys ) || _enumBugKeys$1;

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var _objectKeys = Object.keys || function keys(O) {
    return $keys(O, enumBugKeys);
  };

  var _objectKeys$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _objectKeys,
    default: _objectKeys
  });

  var getKeys = ( _objectKeys$1 && _objectKeys ) || _objectKeys$1;

  var _objectDps = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = getKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) require$$0$h.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var _objectDps$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _objectDps,
    default: _objectDps
  });

  var document = global.document;
  var _html = document && document.documentElement;

  var _html$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _html,
    default: _html
  });

  var dPs = ( _objectDps$1 && _objectDps ) || _objectDps$1;

  var require$$2 = ( _html$1 && _html ) || _html$1;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



  var IE_PROTO$1 = require$$0$d('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = require$$1$2('iframe');
    var i = enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    require$$2.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE] = anObject(O);
      result = new Empty();
      Empty[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : dPs(result, Properties);
  };

  var _objectCreate$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _objectCreate,
    default: _objectCreate
  });

  var _wks = createCommonjsModule(function (module) {
  var store = require$$0$g('wks');

  var Symbol = global.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : require$$0$f)('Symbol.' + name));
  };

  $exports.store = store;
  });

  var _wks$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _wks,
    default: _wks
  });

  var require$$0$c = ( _wks$1 && _wks ) || _wks$1;

  var def = require$$0$h.f;

  var TAG$1 = require$$0$c('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !$has(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, { configurable: true, value: tag });
  };

  var _setToStringTag$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _setToStringTag,
    default: _setToStringTag
  });

  var create = ( _objectCreate$1 && _objectCreate ) || _objectCreate$1;

  var setToStringTag = ( _setToStringTag$1 && _setToStringTag ) || _setToStringTag$1;

  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  hide(IteratorPrototype, require$$0$c('iterator'), function () { return this; });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };

  var _iterCreate$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _iterCreate,
    default: _iterCreate
  });

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(defined(it));
  };

  var _toObject$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _toObject,
    default: _toObject
  });

  var toObject = ( _toObject$1 && _toObject ) || _toObject$1;

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO = require$$0$d('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = toObject(O);
    if ($has(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };

  var _objectGpo$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _objectGpo,
    default: _objectGpo
  });

  var $export = ( _export$1 && _export ) || _export$1;

  var redefine = ( _redefine$1 && _redefine ) || _redefine$1;

  var Iterators = ( _iterators$1 && _iterators ) || _iterators$1;

  var $iterCreate = ( _iterCreate$1 && _iterCreate ) || _iterCreate$1;

  var getPrototypeOf = ( _objectGpo$1 && _objectGpo ) || _objectGpo$1;

  var ITERATOR$2 = require$$0$c('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () { return this; };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS: return function keys() { return new Constructor(this, kind); };
        case VALUES: return function values() { return new Constructor(this, kind); };
      } return function entries() { return new Constructor(this, kind); };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR$2] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (!LIBRARY && typeof IteratorPrototype[ITERATOR$2] != 'function') hide(IteratorPrototype, ITERATOR$2, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR$2])) {
      hide(proto, ITERATOR$2, $default);
    }
    // Plug for library
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  var _iterDefine$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _iterDefine,
    default: _iterDefine
  });

  var addToUnscopables = ( _addToUnscopables$1 && _addToUnscopables ) || _addToUnscopables$1;

  var step = ( _iterStep$1 && _iterStep ) || _iterStep$1;

  var $iterDefine = ( _iterDefine$1 && _iterDefine ) || _iterDefine$1;

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  $iterDefine(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys') return step(0, index);
    if (kind == 'values') return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  Iterators.Arguments = Iterators.Array;

  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  var TO_STRING_TAG = require$$0$c('toStringTag');

  var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
    'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
    'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
    'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
    'TextTrackList,TouchList').split(',');

  for (var i = 0; i < DOMIterables.length; i++) {
    var NAME = DOMIterables[i];
    var Collection = global[NAME];
    var proto = Collection && Collection.prototype;
    if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = Iterators.Array;
  }

  // 7.2.2 IsArray(argument)

  var _isArray = Array.isArray || function isArray(arg) {
    return cof(arg) == 'Array';
  };

  var _isArray$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _isArray,
    default: _isArray
  });

  var require$$0$b = ( _isArray$1 && _isArray ) || _isArray$1;

  var SPECIES$1 = require$$0$c('species');

  var _arraySpeciesConstructor = function (original) {
    var C;
    if (require$$0$b(original)) {
      C = original.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || require$$0$b(C.prototype))) C = undefined;
      if (isObject(C)) {
        C = C[SPECIES$1];
        if (C === null) C = undefined;
      }
    } return C === undefined ? Array : C;
  };

  var _arraySpeciesConstructor$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _arraySpeciesConstructor,
    default: _arraySpeciesConstructor
  });

  var speciesConstructor = ( _arraySpeciesConstructor$1 && _arraySpeciesConstructor ) || _arraySpeciesConstructor$1;

  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)


  var _arraySpeciesCreate = function (original, length) {
    return new (speciesConstructor(original))(length);
  };

  var _arraySpeciesCreate$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _arraySpeciesCreate,
    default: _arraySpeciesCreate
  });

  var asc = ( _arraySpeciesCreate$1 && _arraySpeciesCreate ) || _arraySpeciesCreate$1;

  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex





  var _arrayMethods = function (TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || asc;
    return function ($this, callbackfn, that) {
      var O = toObject($this);
      var self = IObject(O);
      var f = ctx(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res;   // map
          else if (res) switch (TYPE) {
            case 3: return true;             // some
            case 5: return val;              // find
            case 6: return index;            // findIndex
            case 2: result.push(val);        // filter
          } else if (IS_EVERY) return false; // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

  var _arrayMethods$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _arrayMethods,
    default: _arrayMethods
  });

  var _meta = createCommonjsModule(function (module) {
  var META = require$$0$f('meta');


  var setDesc = require$$0$h.f;
  var id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !fails(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function (it) {
    setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {}          // weak collections IDs
    } });
  };
  var fastKey = function (it, create) {
    // return primitive with prefix
    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!$has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
    // return object ID
    } return it[META].i;
  };
  var getWeak = function (it, create) {
    if (!$has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
    // return hash weak collections IDs
    } return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !$has(it, META)) setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
  });
  var _meta_1 = _meta.KEY;
  var _meta_2 = _meta.NEED;
  var _meta_3 = _meta.fastKey;
  var _meta_4 = _meta.getWeak;
  var _meta_5 = _meta.onFreeze;

  var _meta$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    KEY: _meta_1,
    NEED: _meta_2,
    __moduleExports: _meta,
    default: _meta,
    fastKey: _meta_3,
    getWeak: _meta_4,
    onFreeze: _meta_5
  });

  var f$1 = Object.getOwnPropertySymbols;

  var _objectGops = {
  	f: f$1
  };

  var _objectGops$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _objectGops,
    default: _objectGops,
    f: f$1
  });

  var f = {}.propertyIsEnumerable;

  var _objectPie = {
  	f: f
  };

  var _objectPie$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _objectPie,
    default: _objectPie,
    f: f
  });

  var gOPS = ( _objectGops$1 && _objectGops ) || _objectGops$1;

  var pIE = ( _objectPie$1 && _objectPie ) || _objectPie$1;

  // 19.1.2.1 Object.assign(target, source, ...)






  var $assign = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  var _objectAssign = !$assign || fails(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) { B[k] = k; });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
    var T = toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = gOPS.f;
    var isEnum = pIE.f;
    while (aLen > index) {
      var S = IObject(arguments[index++]);
      var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  var _objectAssign$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _objectAssign,
    default: _objectAssign
  });

  var _redefineAll = function (target, src, safe) {
    for (var key in src) {
      if (safe && target[key]) target[key] = src[key];
      else hide(target, key, src[key]);
    } return target;
  };

  var _redefineAll$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _redefineAll,
    default: _redefineAll
  });

  var _anInstance = function (it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
      throw TypeError(name + ': incorrect invocation!');
    } return it;
  };

  var _anInstance$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _anInstance,
    default: _anInstance
  });

  // call something on iterator step with safe closing on error

  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };

  var _iterCall$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _iterCall,
    default: _iterCall
  });

  // check on default Array iterator

  var ITERATOR$1 = require$$0$c('iterator');
  var ArrayProto = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR$1] === it);
  };

  var _isArrayIter$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _isArrayIter,
    default: _isArrayIter
  });

  // getting tag from 19.1.3.6 Object.prototype.toString()

  var TAG = require$$0$c('toStringTag');
  // ES3 wrong here
  var ARG = cof(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) { /* empty */ }
  };

  var _classof = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
      // builtinTag case
      : ARG ? cof(O)
      // ES3 arguments fallback
      : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var _classof$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _classof,
    default: _classof
  });

  var classof = ( _classof$1 && _classof ) || _classof$1;

  var ITERATOR = require$$0$c('iterator');

  var core_getIteratorMethod = require$$1$1.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR]
      || it['@@iterator']
      || Iterators[classof(it)];
  };

  var core_getIteratorMethod$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: core_getIteratorMethod,
    default: core_getIteratorMethod
  });

  var call = ( _iterCall$1 && _iterCall ) || _iterCall$1;

  var isArrayIter = ( _isArrayIter$1 && _isArrayIter ) || _isArrayIter$1;

  var getIterFn = ( core_getIteratorMethod$1 && core_getIteratorMethod ) || core_getIteratorMethod$1;

  var _forOf = createCommonjsModule(function (module) {
  var BREAK = {};
  var RETURN = {};
  var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
    var f = ctx(fn, that, entries ? 2 : 1);
    var index = 0;
    var length, step, iterator, result;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    // fast case for arrays with default iterator
    if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
      result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      if (result === BREAK || result === RETURN) return result;
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      result = call(iterator, f, step.value, entries);
      if (result === BREAK || result === RETURN) return result;
    }
  };
  exports.BREAK = BREAK;
  exports.RETURN = RETURN;
  });

  var _forOf$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _forOf,
    default: _forOf
  });

  var _validateCollection = function (it, TYPE) {
    if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
    return it;
  };

  var _validateCollection$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _validateCollection,
    default: _validateCollection
  });

  var redefineAll = ( _redefineAll$1 && _redefineAll ) || _redefineAll$1;

  var require$$1 = ( _meta$1 && _meta ) || _meta$1;

  var anInstance = ( _anInstance$1 && _anInstance ) || _anInstance$1;

  var forOf = ( _forOf$1 && _forOf ) || _forOf$1;

  var require$$0$a = ( _arrayMethods$1 && _arrayMethods ) || _arrayMethods$1;

  var validate = ( _validateCollection$1 && _validateCollection ) || _validateCollection$1;

  var getWeak = require$$1.getWeak;







  var arrayFind = require$$0$a(5);
  var arrayFindIndex = require$$0$a(6);
  var id = 0;

  // fallback for uncaught frozen keys
  var uncaughtFrozenStore = function (that) {
    return that._l || (that._l = new UncaughtFrozenStore());
  };
  var UncaughtFrozenStore = function () {
    this.a = [];
  };
  var findUncaughtFrozen = function (store, key) {
    return arrayFind(store.a, function (it) {
      return it[0] === key;
    });
  };
  UncaughtFrozenStore.prototype = {
    get: function (key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function (key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function (key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;
      else this.a.push([key, value]);
    },
    'delete': function (key) {
      var index = arrayFindIndex(this.a, function (it) {
        return it[0] === key;
      });
      if (~index) this.a.splice(index, 1);
      return !!~index;
    }
  };

  var _collectionWeak = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, NAME, '_i');
        that._t = NAME;      // collection type
        that._i = id++;      // collection id
        that._l = undefined; // leak store for uncaught frozen objects
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        // 23.3.3.2 WeakMap.prototype.delete(key)
        // 23.4.3.3 WeakSet.prototype.delete(value)
        'delete': function (key) {
          if (!isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
          return data && $has(data, this._i) && delete data[this._i];
        },
        // 23.3.3.4 WeakMap.prototype.has(key)
        // 23.4.3.4 WeakSet.prototype.has(value)
        has: function has(key) {
          if (!isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
          return data && $has(data, this._i);
        }
      });
      return C;
    },
    def: function (that, key, value) {
      var data = getWeak(anObject(key), true);
      if (data === true) uncaughtFrozenStore(that).set(key, value);
      else data[that._i] = value;
      return that;
    },
    ufstore: uncaughtFrozenStore
  };
  var _collectionWeak_1 = _collectionWeak.getConstructor;
  var _collectionWeak_2 = _collectionWeak.def;
  var _collectionWeak_3 = _collectionWeak.ufstore;

  var _collectionWeak$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _collectionWeak,
    def: _collectionWeak_2,
    default: _collectionWeak,
    getConstructor: _collectionWeak_1,
    ufstore: _collectionWeak_3
  });

  var dP$1 = require$$0$h.f;
  var each = require$$0$a(0);


  var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global[NAME];
    var C = Base;
    var ADDER = IS_MAP ? 'set' : 'add';
    var proto = C && C.prototype;
    var O = {};
    if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
      new C().entries().next();
    }))) {
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
      require$$1.NEED = true;
    } else {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME, '_c');
        target._c = new Base();
        if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
      });
      each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';
        if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
          anInstance(this, C, KEY);
          if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
          var result = this._c[KEY](a === 0 ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
      });
      IS_WEAK || dP$1(C.prototype, 'size', {
        get: function () {
          return this._c.size;
        }
      });
    }

    setToStringTag(C, NAME);

    O[NAME] = C;
    $export($export.G + $export.W + $export.F, O);

    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

    return C;
  };

  var _collection$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _collection,
    default: _collection
  });

  var assign = ( _objectAssign$1 && _objectAssign ) || _objectAssign$1;

  var weak = ( _collectionWeak$1 && _collectionWeak ) || _collectionWeak$1;

  var require$$0$9 = ( _collection$1 && _collection ) || _collection$1;

  createCommonjsModule(function (module) {

  var each = require$$0$a(0);






  var NATIVE_WEAK_MAP = validate;
  var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
  var WEAK_MAP = 'WeakMap';
  var getWeak = require$$1.getWeak;
  var isExtensible = Object.isExtensible;
  var uncaughtFrozenStore = weak.ufstore;
  var InternalMap;

  var wrapper = function (get) {
    return function WeakMap() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  };

  var methods = {
    // 23.3.3.3 WeakMap.prototype.get(key)
    get: function get(key) {
      if (isObject(key)) {
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
        return data ? data[this._i] : undefined;
      }
    },
    // 23.3.3.5 WeakMap.prototype.set(key, value)
    set: function set(key, value) {
      return weak.def(validate(this, WEAK_MAP), key, value);
    }
  };

  // 23.3 WeakMap Objects
  var $WeakMap = module.exports = require$$0$9(WEAK_MAP, wrapper, methods, weak, true, true);

  // IE11 WeakMap frozen keys fix
  if (NATIVE_WEAK_MAP && IS_IE11) {
    InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
    assign(InternalMap.prototype, methods);
    require$$1.NEED = true;
    each(['delete', 'has', 'get', 'set'], function (key) {
      var proto = $WeakMap.prototype;
      var method = proto[key];
      redefine(proto, key, function (a, b) {
        // store frozen objects on internal weakmap shim
        if (isObject(a) && !isExtensible(a)) {
          if (!this._f) this._f = new InternalMap();
          var result = this._f[key](a, b);
          return key == 'set' ? this : result;
        // store all the rest on native weakmap
        } return method.call(this, a, b);
      });
    });
  }
  });

  // https://tc39.github.io/proposal-setmap-offrom/


  var _setCollectionOf = function (COLLECTION) {
    $export($export.S, COLLECTION, { of: function of() {
      var length = arguments.length;
      var A = new Array(length);
      while (length--) A[length] = arguments[length];
      return new this(A);
    } });
  };

  var _setCollectionOf$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _setCollectionOf,
    default: _setCollectionOf
  });

  var require$$0$8 = ( _setCollectionOf$1 && _setCollectionOf ) || _setCollectionOf$1;

  // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
  require$$0$8('WeakMap');

  // https://tc39.github.io/proposal-setmap-offrom/





  var _setCollectionFrom = function (COLLECTION) {
    $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
      var mapFn = arguments[1];
      var mapping, A, n, cb;
      aFunction(this);
      mapping = mapFn !== undefined;
      if (mapping) aFunction(mapFn);
      if (source == undefined) return new this();
      A = [];
      if (mapping) {
        n = 0;
        cb = ctx(mapFn, arguments[2], 2);
        forOf(source, false, function (nextItem) {
          A.push(cb(nextItem, n++));
        });
      } else {
        forOf(source, false, A.push, A);
      }
      return new this(A);
    } });
  };

  var _setCollectionFrom$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _setCollectionFrom,
    default: _setCollectionFrom
  });

  var require$$0$7 = ( _setCollectionFrom$1 && _setCollectionFrom ) || _setCollectionFrom$1;

  // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
  require$$0$7('WeakMap');

  var weakMap$1 = require$$1$1.WeakMap;

  var weakMap$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: weakMap$1,
    default: weakMap$1
  });

  var require$$0$6 = ( weakMap$2 && weakMap$1 ) || weakMap$2;

  var weakMap = require$$0$6;

  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that));
      var i = toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var _stringAt$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _stringAt,
    default: _stringAt
  });

  var require$$0$5 = ( _stringAt$1 && _stringAt ) || _stringAt$1;

  var $at = require$$0$5(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  $iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });

  var SPECIES = require$$0$c('species');

  var _setSpecies = function (KEY) {
    var C = typeof require$$1$1[KEY] == 'function' ? require$$1$1[KEY] : global[KEY];
    if (DESCRIPTORS && C && !C[SPECIES]) require$$0$h.f(C, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  };

  var _setSpecies$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _setSpecies,
    default: _setSpecies
  });

  var setSpecies = ( _setSpecies$1 && _setSpecies ) || _setSpecies$1;

  var dP = require$$0$h.f;









  var fastKey = require$$1.fastKey;

  var SIZE = DESCRIPTORS ? '_s' : 'size';

  var getEntry = function (that, key) {
    // fast case
    var index = fastKey(key);
    var entry;
    if (index !== 'F') return that._i[index];
    // frozen object case
    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key) return entry;
    }
  };

  var _collectionStrong = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, NAME, '_i');
        that._t = NAME;         // collection type
        that._i = create(null); // index
        that._f = undefined;    // first entry
        that._l = undefined;    // last entry
        that[SIZE] = 0;         // size
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p) entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function (key) {
          var that = validate(this, NAME);
          var entry = getEntry(that, key);
          if (entry) {
            var next = entry.n;
            var prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev) prev.n = next;
            if (next) next.p = prev;
            if (that._f == entry) that._f = next;
            if (that._l == entry) that._l = prev;
            that[SIZE]--;
          } return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn /* , that = undefined */) {
          validate(this, NAME);
          var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;
          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this);
            // revert to the last existing entry
            while (entry && entry.r) entry = entry.p;
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry(validate(this, NAME), key);
        }
      });
      if (DESCRIPTORS) dP(C.prototype, 'size', {
        get: function () {
          return validate(this, NAME)[SIZE];
        }
      });
      return C;
    },
    def: function (that, key, value) {
      var entry = getEntry(that, key);
      var prev, index;
      // change existing entry
      if (entry) {
        entry.v = value;
      // create new entry
      } else {
        that._l = entry = {
          i: index = fastKey(key, true), // <- index
          k: key,                        // <- key
          v: value,                      // <- value
          p: prev = that._l,             // <- previous entry
          n: undefined,                  // <- next entry
          r: false                       // <- removed
        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE]++;
        // add to index
        if (index !== 'F') that._i[index] = entry;
      } return that;
    },
    getEntry: getEntry,
    setStrong: function (C, NAME, IS_MAP) {
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      $iterDefine(C, NAME, function (iterated, kind) {
        this._t = validate(iterated, NAME); // target
        this._k = kind;                     // kind
        this._l = undefined;                // previous
      }, function () {
        var that = this;
        var kind = that._k;
        var entry = that._l;
        // revert to the last existing entry
        while (entry && entry.r) entry = entry.p;
        // get next entry
        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          // or finish the iteration
          that._t = undefined;
          return step(1);
        }
        // return step by kind
        if (kind == 'keys') return step(0, entry.k);
        if (kind == 'values') return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

      // add [@@species], 23.1.2.2, 23.2.2.2
      setSpecies(NAME);
    }
  };
  var _collectionStrong_1 = _collectionStrong.getConstructor;
  var _collectionStrong_2 = _collectionStrong.def;
  var _collectionStrong_3 = _collectionStrong.getEntry;
  var _collectionStrong_4 = _collectionStrong.setStrong;

  var _collectionStrong$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _collectionStrong,
    def: _collectionStrong_2,
    default: _collectionStrong,
    getConstructor: _collectionStrong_1,
    getEntry: _collectionStrong_3,
    setStrong: _collectionStrong_4
  });

  var strong = ( _collectionStrong$1 && _collectionStrong ) || _collectionStrong$1;

  var SET = 'Set';

  // 23.2 Set Objects
  require$$0$9(SET, function (get) {
    return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value) {
      return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
    }
  }, strong);

  var _arrayFromIterable = function (iter, ITERATOR) {
    var result = [];
    forOf(iter, false, result.push, result, ITERATOR);
    return result;
  };

  var _arrayFromIterable$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _arrayFromIterable,
    default: _arrayFromIterable
  });

  var from = ( _arrayFromIterable$1 && _arrayFromIterable ) || _arrayFromIterable$1;

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON


  var _collectionToJson = function (NAME) {
    return function toJSON() {
      if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
      return from(this);
    };
  };

  var _collectionToJson$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: _collectionToJson,
    default: _collectionToJson
  });

  var require$$0$4 = ( _collectionToJson$1 && _collectionToJson ) || _collectionToJson$1;

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON


  $export($export.P + $export.R, 'Set', { toJSON: require$$0$4('Set') });

  // https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
  require$$0$8('Set');

  // https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
  require$$0$7('Set');

  var set$1 = require$$1$1.Set;

  var set$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: set$1,
    default: set$1
  });

  var require$$0$3 = ( set$2 && set$1 ) || set$2;

  var set = require$$0$3;

  var MAP = 'Map';

  // 23.1 Map Objects
  require$$0$9(MAP, function (get) {
    return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
  }, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key) {
      var entry = strong.getEntry(validate(this, MAP), key);
      return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value) {
      return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
    }
  }, strong, true);

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON


  $export($export.P + $export.R, 'Map', { toJSON: require$$0$4('Map') });

  // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
  require$$0$8('Map');

  // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
  require$$0$7('Map');

  var map$1 = require$$1$1.Map;

  var map$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: map$1,
    default: map$1
  });

  var require$$0$2 = ( map$2 && map$1 ) || map$2;

  var map = require$$0$2;

  /**
   * 深克隆
   * 例：deepClone({ a: 1 })
   * @export
   * @param {*} obj
   * @return {*} 
   */
  function deepClone(obj) {
    if (obj === null || _typeof(obj) !== "object") {
      return obj;
    }
    var cache = null;
    if (!deepClone.cache) {
      deepClone.cache = new weakMap();
    }
    cache = deepClone.cache;
    if (cache.has(obj)) {
      return cache.get(obj);
    }
    if (obj instanceof set) {
      var temp = new set();
      cache.set(obj, temp);
      obj.forEach(function (item) {
        temp.add(deepClone(item));
      });
      return temp;
    } else if (obj instanceof map) {
      var _temp = new map();
      cache.set(obj, _temp);
      obj.forEach(function (item, key) {
        _temp.set(key, deepClone(item));
      });
      return _temp;
    } else if (obj instanceof RegExp) {
      var _temp2 = new RegExp(obj);
      return _temp2;
    } else {
      var _temp3 = new obj.constructor();
      cache.set(obj, _temp3);
      for (var key in obj) {
        _temp3[key] = deepClone(obj[key]);
      }
      return _temp3;
    }
  }

  // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)


  $export($export.S, 'Array', { isArray: require$$0$b });

  var isArray$1 = require$$1$1.Array.isArray;

  var isArray$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: isArray$1,
    default: isArray$1
  });

  var require$$0$1 = ( isArray$2 && isArray$1 ) || isArray$2;

  var isArray = require$$0$1;

  // Object.create(null) 的对象，没有hasOwnProperty方法
  function hasOwnProp$1(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  function pick(obj, paths) {
    if (type(obj) !== 'Object') {
      return {};
    }
    if (!isArray(paths)) {
      return {};
    }
    var res = {};
    for (var i = 0; i < paths.length; i++) {
      var key = paths[i];
      console.log('key', key, obj[key]);
      if (hasOwnProp$1(obj, key)) {
        res[key] = obj[key];
      }
    }
    return res;
  }

  function truncate(str, len) {
    var omission = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';
    str = String(str);
    omission = String(omission);
    len = Math.round(len);
    if (isNaN(len)) {
      return '';
    }
    if (str.length > len) {
      str = str.slice(0, len - omission.length) + omission;
    }
    return str;
  }

  function range(start, stop) {
    var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    start = isNaN(+start) ? 0 : +start;
    stop = isNaN(+stop) ? 0 : +stop;
    step = isNaN(+step) ? 1 : +step;

    // 保证step正确
    if (start > stop && step > 0) {
      step = -step;
    }
    var arr = [];
    for (var i = start; start > stop ? i > stop : i < stop; i += step) {
      arr.push(i);
    }
    return arr;
  }

  /**
   * 如果数组所有元素满足函数条件，则返回true。调用时，如果省略第二个参数，则默认传递布尔值。
   * 例：
   * all([4, 2, 3], x => x > 1); // true
   * all([1, 2, 3]); // true
   * @param {*} arr
   * @param {*} [fn=Boolean]
   */
  var all = function all(arr) {
    var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Boolean;
    return arr.every(fn);
  };

  /**
   * 返回两个或多个数的平均数
   * 例：
   * average(...[1, 2, 3]); // 2
   * average(1, 2, 3); // 2
   * @param {*} nums
   */
  var average = function average() {
    for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
      nums[_key] = arguments[_key];
    }
    return nums.reduce(function (acc, val) {
      return acc + val;
    }, 0) / nums.length;
  };

  /**
   * 将一个句子中每个单词首字母转换成大写字母，这里中要运用了正则表达式进行替换。
   * capitalizeEveryWord('hello world!'); // 'Hello World!'
   * @param {*} str
   */
  var capitalizeEveryWord = function capitalizeEveryWord(str) {
    return str.replace(/\b[a-z]/g, function (_char) {
      return _char.toUpperCase();
    });
  };

  /**
   * 返回当前访问的 URL 地址。
   * currentURL(); // 'https://medium.com/@fatosmorina'
   */
  var currentURL = function currentURL() {
    return window.location.href;
  };

  /**
   * 返回当前是今年的第几天
   * 例：
   * dayOfYear(new Date()); // 272
   * @param {*} date
   */
  var dayOfYear = function dayOfYear(date) {
    return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  };

  /**
   * 获取网址参数
   * 例：
   * getURLParameters("google.com"); // {}
   * getURLParameters("http://url.com/page?name=Adam&surname=Smith"); // {name: 'Adam', surname: 'Smith'}
   * @param {*} date
   */
  var getUrlParamObj = function getUrlParamObj(url) {
    return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(function (a, v) {
      return a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1), a;
    }, {});
  };

  /**
   * 全局唯一标识符（GUID，Globally Unique Identifier）也称作 UUID(Universally Unique IDentifier) 
   * d12d285e-4195-4866-bc3e-4539b9e644ce
   */
  var guid = function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  };

  function getParam(name, url) {
    name = String(name);
    url = String(url);
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
    if (!results) {
      return '';
    }
    return results[1] || '';
  }

  // 20.3.3.1 / 15.9.4.4 Date.now()


  $export($export.S, 'Date', { now: function () { return new Date().getTime(); } });

  var now$1 = require$$1$1.Date.now;

  var now$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __moduleExports: now$1,
    default: now$1
  });

  var require$$0 = ( now$2 && now$1 ) || now$2;

  var now = require$$0;

  function debounce(func) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    wait = Math.round(wait, 10);
    var timerId;
    return function debounced() {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(function () {
        func.apply(_this, args);
      }, wait);
    };
  }
  function throttle(func, time) {
    var args;
    var timer = null;
    var lastTriggerTime = 0; // 首次触发执行
    function self() {
      var _this2 = this;
      for (var _len2 = arguments.length, a = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        a[_key2] = arguments[_key2];
      }
      args = a;
      var ct = now();
      var diff = ct - lastTriggerTime;
      if (timer) clearTimeout(timer);
      if (diff > time) {
        func.apply(this, args);
        lastTriggerTime = ct;
        return;
      }
      timer = setTimeout(function () {
        lastTriggerTime = now();
        func.apply(_this2, args);
        timer = null;
      }, time - diff);
    }
    self.clear = function () {
      if (timer) clearTimeout(timer);
    };
    return self;
  }

  // Object.create(null) 的对象，没有hasOwnProperty方法
  function hasOwnProp(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  function extend(defaultOpt, customOpt) {
    defaultOpt = deepClone(defaultOpt); // 拷贝一份defaultOpt，隔离数据

    for (var name in customOpt) {
      var src = defaultOpt[name];
      var copy = customOpt[name];

      // 非可枚举属性，例如原型链上的属性
      if (!hasOwnProp(customOpt, name)) {
        continue;
      }

      // 对于对象需要递归处理
      if (copy && type(copy) === 'object') {
        // 如果default上不存在值时，会自动创建空对象
        var clone = src && type(src) === 'object' ? src : {};
        // 递归合并
        defaultOpt[name] = extend(clone, copy);
      } else if (typeof copy !== 'undefined') {
        // 非对象且值不为undefined
        defaultOpt[name] = copy;
      }
    }
    return defaultOpt;
  }

  exports.all = all;
  exports.average = average;
  exports.capitalizeEveryWord = capitalizeEveryWord;
  exports.currentURL = currentURL;
  exports.dayOfYear = dayOfYear;
  exports.debounce = debounce;
  exports.deepClone = deepClone;
  exports.extend = extend;
  exports.getParam = getParam;
  exports.getUrlParamObj = getUrlParamObj;
  exports.guid = guid;
  exports.pick = pick;
  exports.range = range;
  exports.throttle = throttle;
  exports.truncate = truncate;
  exports.type = type;

}));
