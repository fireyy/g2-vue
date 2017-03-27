<template>
  <div>
    <LineChart
      :data="lineData"
    />
  </div>
</template>
<script>
import createG2 from '../index'

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