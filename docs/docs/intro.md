---
sidebar_position: 1
---

# 快速开始

utils 是一个前端工具库，提供了一组函数，开箱即用

要想使用首先需要安装

```bash
$ npm install --save @niux/utils
```

如果你是 node 环境

```js
var { clone } = require('@niux/utils');

clone({ a: 1 });
```

如果你是 webpack 等环境

```js
import { clone } from '@niux/utils';

clone({ a: 1 });
```

如果你是浏览器环境

```html
<script src="node_modules/@niux/utils/dist/index.aio.js"></script>
<script>
  clone({ a: 1 });
</script>
```
