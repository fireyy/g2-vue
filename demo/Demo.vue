<template>
  <div>
    <LineChart
      :data="lineData"
    />
    <RingChart
      :data="ringData.data"
      :options="ringData.options"
    />
  </div>
</template>
<script>
import createG2 from '../index'
import { DataView } from '@antv/data-set'

let lineData = [
  {'time': '3-21', 'pm25': 10},
  {'time': '3-22', 'pm25': 40}
]

let ringData = [
  { item: '事例一', count: 40 },
  { item: '事例二', count: 21 },
  { item: '事例三', count: 17 },
  { item: '事例四', count: 13 },
  { item: '事例五', count: 9 }
]

const LineChart = createG2(chart => {
  chart.line().position('time*pm25').color('pm25').shape('spline').size(2)
  chart.render()
})

const RingChart = createG2(chart => {
  chart.coord('theta', {
    radius: 0.75,
    innerRadius: 0.6
  })
  chart.tooltip({
    showTitle: false,
    itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
  })
  // 辅助文本
  chart.guide().html({
    position: [ '50%', '50%' ],
    html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
    alignX: 'middle',
    alignY: 'middle'
  })
  chart.intervalStack()
    .position('percent')
    .color('item')
    .label('percent', {
      formatter: (val, item) => {
        return item.point.item + ': ' + val;
      }
    })
    .tooltip('item*percent', (item, percent) => {
      percent = percent * 100 + '%';
      return {
        name: item,
        value: percent
      };
    })
    .style({
      lineWidth: 1,
      stroke: '#fff'
    });
  chart.render()
})

export default {
  components: {
    LineChart,
    RingChart
  },
  data () {
    return {
      lineData: lineData,
      ringData: {
        data: {},
        options: {
          percent: {
            formatter: val => {
              val = (val * 100) + '%'
              return val;
            }
          }
        }
      }
    }
  },
  created () {
    const dv = new DataView()
    dv.source(ringData).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    })
    this.ringData.data = dv
  }
}
</script>