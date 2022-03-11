# @vue/reactivity

本结实现响应式相关 api，包括如下

**@vue/reactivity/src/index.ts**

```typescript
export { ref, shallowRef, toRef, toRefs } from "./ref";
export { effect } from "./effect";
export { computed } from "./computed";
export {
  reactive,
  shallowReactive,
  readonly,
  shallowReadonly,
} from "./reactive";
```

## 实现 reactive 

**package.json**

配置打包选项，打包出来的格式有 `esm-bundler`, `esm-browser`,`cjs`,`global`

```json
// package.json
{
  "name": "@vue/reactivity",
  "version": "0.1.0",
  "main": "index.js",
  "buildOptions": {
    "name": "VueReactivity",
    "formats": ["esm-bundler", "esm-browser", "cjs", "global"]
  }
}
```



**reactive.ts**

实现响应式 api，`reactive`, `shallowReactive`, `readonly`,`shallowReadonly` 都使用 createReactiveObject 函数进行创建，该函数入参如下： target(目标对象), isReadonly(是否只读), baseHandlers(proxy 的 `handler` 配置)

这里将`reactive`, `shallowReactive`, `readonly`,`shallowReadonly` 的 proxy 的 `handler` 配置全部提取到 `baseHandlers.ts` 文件中定义

```ts
import { isObject } from "@vue/shared";
import {
  mutableHandlers,
  shallowReactiveHandlers,
  readonlyHandlers,
  shallowReadonlyHandlers,
} from "./baseHandlers";

export function reactive(target) {
  return createReactiveObject(target, false, mutableHandlers);
}

export function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers);
}

export function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers);
}

export function shallowReadonly(target) {
  return createReactiveObject(target, false, shallowReadonlyHandlers);
}

const readonlyMap = new WeakMap();
const reactiveMap = new WeakMap();

export function createReactiveObject(target, isReadonly, baseHandlers) {
  if (!isObject(target)) {
    return target;
  }

  const proxyMap = isReadonly ? readonlyMap : reactiveMap;
  const existProxy = proxyMap.get(target);
  
  if (existProxy) {
    return existProxy;
  }

  const proxy = new Proxy(target, baseHandlers);

  proxyMap.set(target, proxy);

  return proxy;
}
```

**baseHandlers.ts**

```ts
import { isObject, extend, isArray, isIntegerKey, hasOwn, hasChanged } from "@vue/shared";
import { track, trigger } from "./effect";
import { TrackOpTypes, TriggerOpTypes } from "./operations";
import { reactive, readonly } from "./reactive";

function createGetter(isReadonly = false, shallow = false) {
  return function get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver);
    if (!isReadonly) {
      // 进行依赖收集
      track(target, TrackOpTypes.GET, key);
    }

    if (shallow) {
      return res;
    }

    if (isObject(res)) {
      return isReadonly ? readonly(res) : reactive(res);
    }
    return res;
  };
}

function createSetters(shallow = false) {
  return function set(target, key, value, receiver) {
    const oldValue = target[key];
    const hadKey =
      isArray(target) && isIntegerKey(key)
        ? Number(key) < target.length
        : hasOwn(target, key);

    const result = Reflect.set(target, key, value, receiver);

    if (!hadKey) {
      trigger(target, TriggerOpTypes.ADD, key, value);
    } else if (hasChanged(oldValue, value)) {
      trigger(target, TriggerOpTypes.SET, key, value, oldValue);
    }

    return result;
  };
}

const get = createGetter();
const set = createSetters();
const shallowGet = createGetter(false, true);
const shallowSet = createSetters(true);
const readonlyGet = createGetter(true);
const shallowReadonlyGet = createGetter(true, true);
const readonlyObj = {
  set(target, key) {
    console.warn(
      `Set operation on key "${String(key)}" failed: target is readonly.`,
      target
    );
  },
};

export const mutableHandlers = {
  get,
  set,
};

export const shallowReactiveHandlers = {
  get: shallowGet,
  set: shallowSet,
};

export const readonlyHandlers = extend(
  {
    get: readonlyGet,
  },
  readonlyObj
);

export const shallowReadonlyHandlers = extend(
  {
    get: shallowReadonlyGet,
  },
  readonlyObj
);
```

在 `baseHandlers.ts` 中 `createGetter`、`createSetter` 函数用于创建对 `reactive`, `shallowReactive`, `readonly`,`shallowReadonly`四个 api 的 `getter` 和 `setter`

`createGetter` 函数会对访问对象的属性进行依赖收集，`createSetter` 函数会对访问对象的属性进行触发更新，关于依赖收集和触发更新我们后续会讲到


## 实现 ref

```ts
import { hasChanged, isArray, isObject } from "@vue/shared";
import { track, trigger } from "./effect";
import { TrackOpTypes, TriggerOpTypes } from "./operations";
import { reactive } from "./reactive";

export function ref(value) {
  return createRef(value);
}

export function shallowRef(value) {
  return createRef(value, true);
}

export function toRef(target, key) {
  return new ObjectRefImpl(target, key);
}

export function toRefs(object) {
  const ret = isArray(object) ? new Array(object.length) : {};
  for (let key in object) {
    ret[key] = toRef(object, key);
  }
  return ret;
}

function createRef(rawValue, shallow = false) {
  return new RefImpl(rawValue, shallow);
}

const convert = (val) => (isObject(val) ? reactive(val) : val);

// beta 版本 之前的版本ref 就是个对象 ，由于对象不方便扩展 改成了类
class RefImpl {
  public _value;
  public __v_isRef = true;

  constructor(public rawValue, public shallow) {
    // 如果是深度的，需要把里面的变成响应式的
    this._value = shallow ? rawValue : convert(rawValue);
  }

  get value() {
    // 依赖收集，key 为固定的 value
    track(this, TrackOpTypes.GET, "value");

    return this._value;
  }

  set value(newValue) {
    // setter，只处理 value 属性的修改
    if (hasChanged(newValue, this.rawValue)) {
      this.rawValue = newValue;
      this._value = this.shallow ? newValue : convert(newValue);

      // 派发通知
      trigger(this, TriggerOpTypes.SET, "value", newValue);
    }
  }
}

class ObjectRefImpl {
  public __v_isRef = true;
  constructor(public target, public key) {}
  get value() {
    return this.target[this.key];
  }
  set value(newValue) {
    this.target[this.key] = newValue;
  }
}
```

`ref` 接受一个内部值并返回一个响应式且可变的 `ref` 对象。ref 对象具有指向内部值的单个 property `.value`。

`ref` 本是用于设计对基础类型的值进行响应式的一个 api，源码中看到 ref 也可以传入一个对象，内部会对这个对象进行响应式。ref api通过调用 `createRef` 返回一个 RefImpl 实例，该实例上的 `.value` 就是 ref 函数传入的值， 在访问阶段 getter 中会进行依赖收集，修改时会触发依赖更新

然后 `toRef` 并没有复用 ref 的能力（依赖收集、触发更新），只是负责为源响应式对象上的某个 property 新创建一个 ref。这个 ref 可以理解为引用，只是为源响应式对象的 property 进行一个响应式连接，自身没有响应式。

`roRefs` 就是复用 `toRef` 的能力，对一个对象的可遍历属性进行 `toRef`

