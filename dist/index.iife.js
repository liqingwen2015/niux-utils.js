/*!
 * @niux/utils 1.0.0
 * Licensed under MIT
 */

var nx = (function (exports) {
  'use strict';

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

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var weakMapExports = {};
  var weakMap$1 = {
    get exports(){ return weakMapExports; },
    set exports(v){ weakMapExports = v; },
  };

  var _iterStep = function (done, value) {
    return { value: value, done: !!done };
  };

  var _iterators = {};

  var _cof;
  var hasRequired_cof;

  function require_cof () {
  	if (hasRequired_cof) return _cof;
  	hasRequired_cof = 1;
  	var toString = {}.toString;

  	_cof = function (it) {
  	  return toString.call(it).slice(8, -1);
  	};
  	return _cof;
  }

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var cof = require_cof();
  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings
  var IObject$2 = _iobject;
  var defined$2 = _defined;
  var _toIobject = function (it) {
    return IObject$2(defined$2(it));
  };

  var _globalExports = {};
  var _global = {
    get exports(){ return _globalExports; },
    set exports(v){ _globalExports = v; },
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$6 = _global.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global$6; // eslint-disable-line no-undef

  var _coreExports = {};
  var _core = {
    get exports(){ return _coreExports; },
    set exports(v){ _coreExports = v; },
  };

  var core$3 = _core.exports = { version: '2.6.12' };
  if (typeof __e == 'number') __e = core$3; // eslint-disable-line no-undef

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding
  var aFunction$1 = _aFunction;
  var _ctx = function (fn, that, length) {
    aFunction$1(fn);
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

  var _objectDp = {};

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var isObject$7 = _isObject;
  var _anObject = function (it) {
    if (!isObject$7(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var _domCreate;
  var hasRequired_domCreate;

  function require_domCreate () {
  	if (hasRequired_domCreate) return _domCreate;
  	hasRequired_domCreate = 1;
  	var isObject = _isObject;
  	var document = _globalExports.document;
  	// typeof document.createElement is 'object' in old IE
  	var is = isObject(document) && isObject(document.createElement);
  	_domCreate = function (it) {
  	  return is ? document.createElement(it) : {};
  	};
  	return _domCreate;
  }

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(require_domCreate()('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])
  var isObject$6 = _isObject;
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!isObject$6(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject$6(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !isObject$6(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !isObject$6(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var anObject$5 = _anObject;
  var IE8_DOM_DEFINE = _ie8DomDefine;
  var toPrimitive = _toPrimitive;
  var dP$5 = Object.defineProperty;

  _objectDp.f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject$5(O);
    P = toPrimitive(P, true);
    anObject$5(Attributes);
    if (IE8_DOM_DEFINE) try {
      return dP$5(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var dP$4 = _objectDp;
  var createDesc = _propertyDesc;
  var _hide = _descriptors ? function (object, key, value) {
    return dP$4.f(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var global$5 = _globalExports;
  var core$2 = _coreExports;
  var ctx$4 = _ctx;
  var hide$4 = _hide;
  var has$4 = _has;
  var PROTOTYPE$1 = 'prototype';

  var $export$8 = function (type, name, source) {
    var IS_FORCED = type & $export$8.F;
    var IS_GLOBAL = type & $export$8.G;
    var IS_STATIC = type & $export$8.S;
    var IS_PROTO = type & $export$8.P;
    var IS_BIND = type & $export$8.B;
    var IS_WRAP = type & $export$8.W;
    var exports = IS_GLOBAL ? core$2 : core$2[name] || (core$2[name] = {});
    var expProto = exports[PROTOTYPE$1];
    var target = IS_GLOBAL ? global$5 : IS_STATIC ? global$5[name] : (global$5[name] || {})[PROTOTYPE$1];
    var key, own, out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      if (own && has$4(exports, key)) continue;
      // export native or passed
      out = own ? target[key] : source[key];
      // prevent global pollution for namespaces
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
      // bind timers to global for call from export context
      : IS_BIND && own ? ctx$4(out, global$5)
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
      })(out) : IS_PROTO && typeof out == 'function' ? ctx$4(Function.call, out) : out;
      // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
      if (IS_PROTO) {
        (exports.virtual || (exports.virtual = {}))[key] = out;
        // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
        if (type & $export$8.R && expProto && !expProto[key]) hide$4(expProto, key, out);
      }
    }
  };
  // type bitmap
  $export$8.F = 1;   // forced
  $export$8.G = 2;   // global
  $export$8.S = 4;   // static
  $export$8.P = 8;   // proto
  $export$8.B = 16;  // bind
  $export$8.W = 32;  // wrap
  $export$8.U = 64;  // safe
  $export$8.R = 128; // real proto method for `library`
  var _export = $export$8;

  var _redefineExports = {};
  var _redefine = {
    get exports(){ return _redefineExports; },
    set exports(v){ _redefineExports = v; },
  };

  (function (module) {
  	module.exports = _hide;
  } (_redefine));

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.1.15 ToLength
  var toInteger$2 = _toInteger;
  var min$1 = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min$1(toInteger$2(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var toInteger$1 = _toInteger;
  var max = Math.max;
  var min = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = toInteger$1(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes
  var toIObject$2 = _toIobject;
  var toLength$2 = _toLength;
  var toAbsoluteIndex = _toAbsoluteIndex;
  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIObject$2($this);
      var length = toLength$2(O.length);
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

  var _sharedExports = {};
  var _shared = {
    get exports(){ return _sharedExports; },
    set exports(v){ _sharedExports = v; },
  };

  var core$1 = _coreExports;
  var global$4 = _globalExports;
  var SHARED = '__core-js_shared__';
  var store$1 = global$4[SHARED] || (global$4[SHARED] = {});

  (_shared.exports = function (key, value) {
    return store$1[key] || (store$1[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: core$1.version,
    mode: 'pure' ,
    copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
  });

  var id$2 = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$2 + px).toString(36));
  };

  var shared = _sharedExports('keys');
  var uid$1 = _uid;
  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = uid$1(key));
  };

  var has$3 = _has;
  var toIObject$1 = _toIobject;
  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO$2 = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = toIObject$1(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO$2) has$3(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has$3(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
  var $keys = _objectKeysInternal;
  var enumBugKeys$1 = _enumBugKeys;

  var _objectKeys = Object.keys || function keys(O) {
    return $keys(O, enumBugKeys$1);
  };

  var dP$3 = _objectDp;
  var anObject$4 = _anObject;
  var getKeys$1 = _objectKeys;

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$4(O);
    var keys = getKeys$1(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) dP$3.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var _html;
  var hasRequired_html;

  function require_html () {
  	if (hasRequired_html) return _html;
  	hasRequired_html = 1;
  	var document = _globalExports.document;
  	_html = document && document.documentElement;
  	return _html;
  }

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  var anObject$3 = _anObject;
  var dPs = _objectDps;
  var enumBugKeys = _enumBugKeys;
  var IE_PROTO$1 = _sharedKey('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = require_domCreate()('iframe');
    var i = enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    require_html().appendChild(iframe);
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
      Empty[PROTOTYPE] = anObject$3(O);
      result = new Empty();
      Empty[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : dPs(result, Properties);
  };

  var _wksExports = {};
  var _wks = {
    get exports(){ return _wksExports; },
    set exports(v){ _wksExports = v; },
  };

  var store = _sharedExports('wks');
  var uid = _uid;
  var Symbol$1 = _globalExports.Symbol;
  var USE_SYMBOL = typeof Symbol$1 == 'function';

  var $exports = _wks.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol$1[name] || (USE_SYMBOL ? Symbol$1 : uid)('Symbol.' + name));
  };

  $exports.store = store;

  var def = _objectDp.f;
  var has$2 = _has;
  var TAG = _wksExports('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !has$2(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
  };

  var create$1 = _objectCreate;
  var descriptor = _propertyDesc;
  var setToStringTag$2 = _setToStringTag;
  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  _hide(IteratorPrototype, _wksExports('iterator'), function () { return this; });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = create$1(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag$2(Constructor, NAME + ' Iterator');
  };

  // 7.1.13 ToObject(argument)
  var defined$1 = _defined;
  var _toObject = function (it) {
    return Object(defined$1(it));
  };

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
  var has$1 = _has;
  var toObject$2 = _toObject;
  var IE_PROTO = _sharedKey('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = toObject$2(O);
    if (has$1(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };

  var $export$7 = _export;
  var redefine$1 = _redefineExports;
  var hide$3 = _hide;
  var Iterators$4 = _iterators;
  var $iterCreate = _iterCreate;
  var setToStringTag$1 = _setToStringTag;
  var getPrototypeOf = _objectGpo;
  var ITERATOR$2 = _wksExports('iterator');
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
        setToStringTag$1(IteratorPrototype, TAG, true);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if ((FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR$2])) {
      hide$3(proto, ITERATOR$2, $default);
    }
    // Plug for library
    Iterators$4[NAME] = $default;
    Iterators$4[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine$1(proto, key, methods[key]);
      } else $export$7($export$7.P + $export$7.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  var step$1 = _iterStep;
  var Iterators$3 = _iterators;
  var toIObject = _toIobject;

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  _iterDefine(Array, 'Array', function (iterated, kind) {
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
      return step$1(1);
    }
    if (kind == 'keys') return step$1(0, index);
    if (kind == 'values') return step$1(0, O[index]);
    return step$1(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  Iterators$3.Arguments = Iterators$3.Array;

  var global$3 = _globalExports;
  var hide$2 = _hide;
  var Iterators$2 = _iterators;
  var TO_STRING_TAG = _wksExports('toStringTag');

  var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
    'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
    'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
    'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
    'TextTrackList,TouchList').split(',');

  for (var i = 0; i < DOMIterables.length; i++) {
    var NAME = DOMIterables[i];
    var Collection = global$3[NAME];
    var proto = Collection && Collection.prototype;
    if (proto && !proto[TO_STRING_TAG]) hide$2(proto, TO_STRING_TAG, NAME);
    Iterators$2[NAME] = Iterators$2.Array;
  }

  var _isArray;
  var hasRequired_isArray;

  function require_isArray () {
  	if (hasRequired_isArray) return _isArray;
  	hasRequired_isArray = 1;
  	// 7.2.2 IsArray(argument)
  	var cof = require_cof();
  	_isArray = Array.isArray || function isArray(arg) {
  	  return cof(arg) == 'Array';
  	};
  	return _isArray;
  }

  var isObject$5 = _isObject;
  var isArray$2 = require_isArray();
  var SPECIES$1 = _wksExports('species');

  var _arraySpeciesConstructor = function (original) {
    var C;
    if (isArray$2(original)) {
      C = original.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || isArray$2(C.prototype))) C = undefined;
      if (isObject$5(C)) {
        C = C[SPECIES$1];
        if (C === null) C = undefined;
      }
    } return C === undefined ? Array : C;
  };

  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
  var speciesConstructor = _arraySpeciesConstructor;

  var _arraySpeciesCreate = function (original, length) {
    return new (speciesConstructor(original))(length);
  };

  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex
  var ctx$3 = _ctx;
  var IObject$1 = _iobject;
  var toObject$1 = _toObject;
  var toLength$1 = _toLength;
  var asc = _arraySpeciesCreate;
  var _arrayMethods = function (TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || asc;
    return function ($this, callbackfn, that) {
      var O = toObject$1($this);
      var self = IObject$1(O);
      var f = ctx$3(callbackfn, that, 3);
      var length = toLength$1(self.length);
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

  var _metaExports = {};
  var _meta = {
    get exports(){ return _metaExports; },
    set exports(v){ _metaExports = v; },
  };

  var META = _uid('meta');
  var isObject$4 = _isObject;
  var has = _has;
  var setDesc = _objectDp.f;
  var id$1 = 0;
  var isExtensible$1 = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !_fails(function () {
    return isExtensible$1(Object.preventExtensions({}));
  });
  var setMeta = function (it) {
    setDesc(it, META, { value: {
      i: 'O' + ++id$1, // object ID
      w: {}          // weak collections IDs
    } });
  };
  var fastKey$1 = function (it, create) {
    // return primitive with prefix
    if (!isObject$4(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible$1(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
    // return object ID
    } return it[META].i;
  };
  var getWeak$2 = function (it, create) {
    if (!has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible$1(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
    // return hash weak collections IDs
    } return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZE && meta$2.NEED && isExtensible$1(it) && !has(it, META)) setMeta(it);
    return it;
  };
  var meta$2 = _meta.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey$1,
    getWeak: getWeak$2,
    onFreeze: onFreeze
  };

  var _objectGops = {};

  _objectGops.f = Object.getOwnPropertySymbols;

  var _objectPie = {};

  _objectPie.f = {}.propertyIsEnumerable;

  // 19.1.2.1 Object.assign(target, source, ...)
  var DESCRIPTORS$3 = _descriptors;
  var getKeys = _objectKeys;
  var gOPS = _objectGops;
  var pIE = _objectPie;
  var toObject = _toObject;
  var IObject = _iobject;
  var $assign = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  var _objectAssign = !$assign || _fails(function () {
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
        if (!DESCRIPTORS$3 || isEnum.call(S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  var hide$1 = _hide;
  var _redefineAll = function (target, src, safe) {
    for (var key in src) {
      if (safe && target[key]) target[key] = src[key];
      else hide$1(target, key, src[key]);
    } return target;
  };

  var _anInstance = function (it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
      throw TypeError(name + ': incorrect invocation!');
    } return it;
  };

  var _forOfExports = {};
  var _forOf = {
    get exports(){ return _forOfExports; },
    set exports(v){ _forOfExports = v; },
  };

  // call something on iterator step with safe closing on error
  var anObject$2 = _anObject;
  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject$2(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject$2(ret.call(iterator));
      throw e;
    }
  };

  // check on default Array iterator
  var Iterators$1 = _iterators;
  var ITERATOR$1 = _wksExports('iterator');
  var ArrayProto = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (Iterators$1.Array === it || ArrayProto[ITERATOR$1] === it);
  };

  var _classof;
  var hasRequired_classof;

  function require_classof () {
  	if (hasRequired_classof) return _classof;
  	hasRequired_classof = 1;
  	// getting tag from 19.1.3.6 Object.prototype.toString()
  	var cof = require_cof();
  	var TAG = _wksExports('toStringTag');
  	// ES3 wrong here
  	var ARG = cof(function () { return arguments; }()) == 'Arguments';

  	// fallback for IE11 Script Access Denied error
  	var tryGet = function (it, key) {
  	  try {
  	    return it[key];
  	  } catch (e) { /* empty */ }
  	};

  	_classof = function (it) {
  	  var O, T, B;
  	  return it === undefined ? 'Undefined' : it === null ? 'Null'
  	    // @@toStringTag case
  	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
  	    // builtinTag case
  	    : ARG ? cof(O)
  	    // ES3 arguments fallback
  	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  	};
  	return _classof;
  }

  var classof = require_classof();
  var ITERATOR = _wksExports('iterator');
  var Iterators = _iterators;
  var core_getIteratorMethod = _coreExports.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR]
      || it['@@iterator']
      || Iterators[classof(it)];
  };

  var ctx$2 = _ctx;
  var call = _iterCall;
  var isArrayIter = _isArrayIter;
  var anObject$1 = _anObject;
  var toLength = _toLength;
  var getIterFn = core_getIteratorMethod;
  var BREAK = {};
  var RETURN = {};
  var exports$1 = _forOf.exports = function (iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
    var f = ctx$2(fn, that, entries ? 2 : 1);
    var index = 0;
    var length, step, iterator, result;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    // fast case for arrays with default iterator
    if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
      result = entries ? f(anObject$1(step = iterable[index])[0], step[1]) : f(iterable[index]);
      if (result === BREAK || result === RETURN) return result;
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      result = call(iterator, f, step.value, entries);
      if (result === BREAK || result === RETURN) return result;
    }
  };
  exports$1.BREAK = BREAK;
  exports$1.RETURN = RETURN;

  var isObject$3 = _isObject;
  var _validateCollection = function (it, TYPE) {
    if (!isObject$3(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
    return it;
  };

  var redefineAll$2 = _redefineAll;
  var getWeak$1 = _metaExports.getWeak;
  var anObject = _anObject;
  var isObject$2 = _isObject;
  var anInstance$2 = _anInstance;
  var forOf$3 = _forOfExports;
  var createArrayMethod = _arrayMethods;
  var $has = _has;
  var validate$4 = _validateCollection;
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var id = 0;

  // fallback for uncaught frozen keys
  var uncaughtFrozenStore$1 = function (that) {
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
        anInstance$2(that, C, NAME, '_i');
        that._t = NAME;      // collection type
        that._i = id++;      // collection id
        that._l = undefined; // leak store for uncaught frozen objects
        if (iterable != undefined) forOf$3(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll$2(C.prototype, {
        // 23.3.3.2 WeakMap.prototype.delete(key)
        // 23.4.3.3 WeakSet.prototype.delete(value)
        'delete': function (key) {
          if (!isObject$2(key)) return false;
          var data = getWeak$1(key);
          if (data === true) return uncaughtFrozenStore$1(validate$4(this, NAME))['delete'](key);
          return data && $has(data, this._i) && delete data[this._i];
        },
        // 23.3.3.4 WeakMap.prototype.has(key)
        // 23.4.3.4 WeakSet.prototype.has(value)
        has: function has(key) {
          if (!isObject$2(key)) return false;
          var data = getWeak$1(key);
          if (data === true) return uncaughtFrozenStore$1(validate$4(this, NAME)).has(key);
          return data && $has(data, this._i);
        }
      });
      return C;
    },
    def: function (that, key, value) {
      var data = getWeak$1(anObject(key), true);
      if (data === true) uncaughtFrozenStore$1(that).set(key, value);
      else data[that._i] = value;
      return that;
    },
    ufstore: uncaughtFrozenStore$1
  };

  var global$2 = _globalExports;
  var $export$6 = _export;
  var meta$1 = _metaExports;
  var fails = _fails;
  var hide = _hide;
  var redefineAll$1 = _redefineAll;
  var forOf$2 = _forOfExports;
  var anInstance$1 = _anInstance;
  var isObject$1 = _isObject;
  var setToStringTag = _setToStringTag;
  var dP$2 = _objectDp.f;
  var each$1 = _arrayMethods(0);
  var DESCRIPTORS$2 = _descriptors;

  var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global$2[NAME];
    var C = Base;
    var ADDER = IS_MAP ? 'set' : 'add';
    var proto = C && C.prototype;
    var O = {};
    if (!DESCRIPTORS$2 || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
      new C().entries().next();
    }))) {
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll$1(C.prototype, methods);
      meta$1.NEED = true;
    } else {
      C = wrapper(function (target, iterable) {
        anInstance$1(target, C, NAME, '_c');
        target._c = new Base();
        if (iterable != undefined) forOf$2(iterable, IS_MAP, target[ADDER], target);
      });
      each$1('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';
        if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
          anInstance$1(this, C, KEY);
          if (!IS_ADDER && IS_WEAK && !isObject$1(a)) return KEY == 'get' ? undefined : false;
          var result = this._c[KEY](a === 0 ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
      });
      IS_WEAK || dP$2(C.prototype, 'size', {
        get: function () {
          return this._c.size;
        }
      });
    }

    setToStringTag(C, NAME);

    O[NAME] = C;
    $export$6($export$6.G + $export$6.W + $export$6.F, O);

    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

    return C;
  };

  var global$1 = _globalExports;
  var each = _arrayMethods(0);
  var redefine = _redefineExports;
  var meta = _metaExports;
  var assign = _objectAssign;
  var weak = _collectionWeak;
  var isObject = _isObject;
  var validate$3 = _validateCollection;
  var NATIVE_WEAK_MAP = _validateCollection;
  var IS_IE11 = !global$1.ActiveXObject && 'ActiveXObject' in global$1;
  var WEAK_MAP = 'WeakMap';
  var getWeak = meta.getWeak;
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
        if (data === true) return uncaughtFrozenStore(validate$3(this, WEAK_MAP)).get(key);
        return data ? data[this._i] : undefined;
      }
    },
    // 23.3.3.5 WeakMap.prototype.set(key, value)
    set: function set(key, value) {
      return weak.def(validate$3(this, WEAK_MAP), key, value);
    }
  };

  // 23.3 WeakMap Objects
  var $WeakMap = _collection(WEAK_MAP, wrapper, methods, weak, true, true);

  // IE11 WeakMap frozen keys fix
  if (NATIVE_WEAK_MAP && IS_IE11) {
    InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
    assign(InternalMap.prototype, methods);
    meta.NEED = true;
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

  // https://tc39.github.io/proposal-setmap-offrom/
  var $export$5 = _export;

  var _setCollectionOf = function (COLLECTION) {
    $export$5($export$5.S, COLLECTION, { of: function of() {
      var length = arguments.length;
      var A = new Array(length);
      while (length--) A[length] = arguments[length];
      return new this(A);
    } });
  };

  // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
  _setCollectionOf('WeakMap');

  // https://tc39.github.io/proposal-setmap-offrom/
  var $export$4 = _export;
  var aFunction = _aFunction;
  var ctx$1 = _ctx;
  var forOf$1 = _forOfExports;

  var _setCollectionFrom = function (COLLECTION) {
    $export$4($export$4.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
      var mapFn = arguments[1];
      var mapping, A, n, cb;
      aFunction(this);
      mapping = mapFn !== undefined;
      if (mapping) aFunction(mapFn);
      if (source == undefined) return new this();
      A = [];
      if (mapping) {
        n = 0;
        cb = ctx$1(mapFn, arguments[2], 2);
        forOf$1(source, false, function (nextItem) {
          A.push(cb(nextItem, n++));
        });
      } else {
        forOf$1(source, false, A.push, A);
      }
      return new this(A);
    } });
  };

  // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
  _setCollectionFrom('WeakMap');

  var weakMap = _coreExports.WeakMap;

  (function (module) {
  	module.exports = weakMap;
  } (weakMap$1));

  var _WeakMap = /*@__PURE__*/getDefaultExportFromCjs(weakMapExports);

  var setExports = {};
  var set$1 = {
    get exports(){ return setExports; },
    set exports(v){ setExports = v; },
  };

  var toInteger = _toInteger;
  var defined = _defined;
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

  var $at = _stringAt(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  _iterDefine(String, 'String', function (iterated) {
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

  var global = _globalExports;
  var core = _coreExports;
  var dP$1 = _objectDp;
  var DESCRIPTORS$1 = _descriptors;
  var SPECIES = _wksExports('species');

  var _setSpecies = function (KEY) {
    var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
    if (DESCRIPTORS$1 && C && !C[SPECIES]) dP$1.f(C, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  };

  var dP = _objectDp.f;
  var create = _objectCreate;
  var redefineAll = _redefineAll;
  var ctx = _ctx;
  var anInstance = _anInstance;
  var forOf = _forOfExports;
  var $iterDefine = _iterDefine;
  var step = _iterStep;
  var setSpecies = _setSpecies;
  var DESCRIPTORS = _descriptors;
  var fastKey = _metaExports.fastKey;
  var validate$2 = _validateCollection;
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
          for (var that = validate$2(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
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
          var that = validate$2(this, NAME);
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
          validate$2(this, NAME);
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
          return !!getEntry(validate$2(this, NAME), key);
        }
      });
      if (DESCRIPTORS) dP(C.prototype, 'size', {
        get: function () {
          return validate$2(this, NAME)[SIZE];
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
        this._t = validate$2(iterated, NAME); // target
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

  var strong$1 = _collectionStrong;
  var validate$1 = _validateCollection;
  var SET = 'Set';

  // 23.2 Set Objects
  _collection(SET, function (get) {
    return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value) {
      return strong$1.def(validate$1(this, SET), value = value === 0 ? 0 : value, value);
    }
  }, strong$1);

  var _arrayFromIterable;
  var hasRequired_arrayFromIterable;

  function require_arrayFromIterable () {
  	if (hasRequired_arrayFromIterable) return _arrayFromIterable;
  	hasRequired_arrayFromIterable = 1;
  	var forOf = _forOfExports;

  	_arrayFromIterable = function (iter, ITERATOR) {
  	  var result = [];
  	  forOf(iter, false, result.push, result, ITERATOR);
  	  return result;
  	};
  	return _arrayFromIterable;
  }

  var _collectionToJson;
  var hasRequired_collectionToJson;

  function require_collectionToJson () {
  	if (hasRequired_collectionToJson) return _collectionToJson;
  	hasRequired_collectionToJson = 1;
  	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
  	var classof = require_classof();
  	var from = require_arrayFromIterable();
  	_collectionToJson = function (NAME) {
  	  return function toJSON() {
  	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
  	    return from(this);
  	  };
  	};
  	return _collectionToJson;
  }

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var $export$3 = _export;

  $export$3($export$3.P + $export$3.R, 'Set', { toJSON: require_collectionToJson()('Set') });

  // https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
  _setCollectionOf('Set');

  // https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
  _setCollectionFrom('Set');

  var set = _coreExports.Set;

  (function (module) {
  	module.exports = set;
  } (set$1));

  var _Set = /*@__PURE__*/getDefaultExportFromCjs(setExports);

  var mapExports = {};
  var map$1 = {
    get exports(){ return mapExports; },
    set exports(v){ mapExports = v; },
  };

  var strong = _collectionStrong;
  var validate = _validateCollection;
  var MAP = 'Map';

  // 23.1 Map Objects
  _collection(MAP, function (get) {
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
  var $export$2 = _export;

  $export$2($export$2.P + $export$2.R, 'Map', { toJSON: require_collectionToJson()('Map') });

  // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
  _setCollectionOf('Map');

  // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
  _setCollectionFrom('Map');

  var map = _coreExports.Map;

  (function (module) {
  	module.exports = map;
  } (map$1));

  var _Map = /*@__PURE__*/getDefaultExportFromCjs(mapExports);

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
      deepClone.cache = new _WeakMap();
    }
    cache = deepClone.cache;
    if (cache.has(obj)) {
      return cache.get(obj);
    }
    if (obj instanceof _Set) {
      var temp = new _Set();
      cache.set(obj, temp);
      obj.forEach(function (item) {
        temp.add(deepClone(item));
      });
      return temp;
    } else if (obj instanceof _Map) {
      var _temp = new _Map();
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

  var isArrayExports = {};
  var isArray$1 = {
    get exports(){ return isArrayExports; },
    set exports(v){ isArrayExports = v; },
  };

  // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
  var $export$1 = _export;

  $export$1($export$1.S, 'Array', { isArray: require_isArray() });

  var isArray = _coreExports.Array.isArray;

  (function (module) {
  	module.exports = isArray;
  } (isArray$1));

  var _Array$isArray = /*@__PURE__*/getDefaultExportFromCjs(isArrayExports);

  // Object.create(null) 的对象，没有hasOwnProperty方法
  function hasOwnProp$1(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  function pick(obj, paths) {
    if (type(obj) !== 'Object') {
      return {};
    }
    if (!_Array$isArray(paths)) {
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

  var nowExports = {};
  var now$1 = {
    get exports(){ return nowExports; },
    set exports(v){ nowExports = v; },
  };

  // 20.3.3.1 / 15.9.4.4 Date.now()
  var $export = _export;

  $export($export.S, 'Date', { now: function () { return new Date().getTime(); } });

  var now = _coreExports.Date.now;

  (function (module) {
  	module.exports = now;
  } (now$1));

  var _Date$now = /*@__PURE__*/getDefaultExportFromCjs(nowExports);

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
      var ct = _Date$now();
      var diff = ct - lastTriggerTime;
      if (timer) clearTimeout(timer);
      if (diff > time) {
        func.apply(this, args);
        lastTriggerTime = ct;
        return;
      }
      timer = setTimeout(function () {
        lastTriggerTime = _Date$now();
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

  return exports;

})({});
