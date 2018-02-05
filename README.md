# g2-vue

Factory wrapper for using [G2](http://g2.alipay.com) easier in a Vue Component with dynamic `data` and `size` props

*Note that `g2-vue` is just a wrapper, if you want to make a better chart, `docs of G2` is [HERE](http://g2.alipay.com/)*

## Install

```bash
$ npm install @antv/g2 --save
$ npm install g2-vue --save
```

`g2-vue` works with a [peerDependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) of `g2`, you can specify the version of `g2` in your `package.json`

## Usage

```html
<template>
  <div>
    <LineChart
      :data="lineData"
    />
  </div>
</template>
<script>
import createG2 from 'g2-vue'

let lineData = [
  {'time': '3-21', 'pm25': 10},
  {'time': '3-22', 'pm25': 40}
]

const LineChart = createG2(chart => {
  chart.line().position('time*pm25').color('pm25').shape('spline').size(2)
  chart.render()
})

export default {
  components: {
    LineChart
  },
  data () {
    return {
      lineData: lineData
    }
  }
}
</script>
```
