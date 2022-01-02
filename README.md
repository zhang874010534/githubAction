<details>
<summary>
❌ <b>Should NOT</b> use <code>ref</code> in a plain object when working with <code>Array</code>
</summary>

```js
const a = {
  count: ref(0),
}
const b = reactive({
  list: [a], // `a.count` will not unwrap!!
})

// no unwrap for `count`, `.value` is required
b.list[0].count.value === 0 // true
```

```js
const b = reactive({
  list: [
    {
      count: ref(0), // no unwrap!!
    },
  ],
})

// no unwrap for `count`, `.value` is required
b.list[0].count.value === 0 // true
```

</details>

# vue3-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
