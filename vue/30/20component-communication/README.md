# 20component-communication

### 父组件传值给子组件

```
props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 数组
    arr: {
        type: Array,
        default: () => ([])
    },
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }

```

### 子组件传值给父组件

- 定义自定义事件
- this.$emit()

### 插槽

像html一样 我们需要嵌套内容

```
<slot />
```

### ref

儿子访问父亲数据或者方法  this.$parent.xxxx

父亲访问儿子数据或者方法  

组件加 ref = "kkk"

this.$refs.kkk

### 动态组件

:is 传入组件名

保持失活的组件状态 keep-live
