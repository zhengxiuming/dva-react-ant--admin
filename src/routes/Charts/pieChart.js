import React from 'react';
import {connect} from 'dva';
import styles from './pieChart.css';
import {
  AreaChart,
  Area,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import {Card, Row, Col} from 'antd';
import ReactEcharts from 'echarts-for-react';


function PieCharts() {
  const data = [
    {month: '2015.01', a: 4000, b: 2400, c: 2400},
    {month: '2015.02', a: 3000, b: 1398, c: 2210},
    {month: '2015.03', a: 2000, b: 9800, c: 2290},
    {month: '2015.04', a: 2780, b: 3908, c: 2000},
    {month: '2015.05', a: 1890, b: 4800, c: 2181},
    {month: '2015.06', a: 2390, b: 3800, c: 2500},
    {month: '2015.07', a: 3490, b: 4300, c: 2100},
  ];
  const dataA = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ];
  const getPercent = (value, total) => {
    const ratio = total > 0 ? value / total : 0;

    return toPercent(ratio, 2);
  };

  const toPercent = (decimal, fixed = 0) => {
    return `${(decimal * 100).toFixed(fixed)}%`;
  };
  const renderTooltipContent = (o) => {
    const {payload, label} = o;
    const total = payload.reduce((result, entry) => (result + entry.value), 0);

    return (
      <div className="customized-tooltip-content">
        <p className="total">{`${label} (Total: ${total})`}</p>
        <ul className="list">
          {
            payload.map((entry, index) => (
              <li key={`item-${index}`} style={{color: entry.color}}>
                {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
              </li>
            ))
          }
        </ul>
      </div>
    );
  };
  const option = {
    backgroundColor: '#2c343c',

    title: {
      text: 'Customized Pie',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc'
      }
    },

    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          {value: 335, name: '直接访问'},
          {value: 310, name: '邮件营销'},
          {value: 274, name: '联盟广告'},
          {value: 235, name: '视频广告'},
          {value: 400, name: '搜索引擎'}
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
          normal: {
            textStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          }
        },
        itemStyle: {
          normal: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200;
        }
      }
    ]
  };
  const optionA = {
    title: {
      text: '南丁格尔玫瑰图',
      subtext: '纯属虚构',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    toolbox: {
      show: true,
      feature: {
        mark: {show: true},
        dataView: {show: true, readOnly: false},
        magicType: {
          show: true,
          type: ['pie', 'funnel']
        },
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    calculable: true,
    series: [
      {
        name: '半径模式',
        type: 'pie',
        radius: [20, 110],
        center: ['25%', '50%'],
        roseType: 'radius',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: true
          }
        },
        lableLine: {
          normal: {
            show: false
          },
          emphasis: {
            show: true
          }
        },
        data: [
          {value: 10, name: 'rose1'},
          {value: 5, name: 'rose2'},
          {value: 15, name: 'rose3'},
          {value: 25, name: 'rose4'},
          {value: 20, name: 'rose5'},
          {value: 35, name: 'rose6'},
          {value: 30, name: 'rose7'},
          {value: 40, name: 'rose8'}
        ]
      },
      {
        name: '面积模式',
        type: 'pie',
        radius: [30, 110],
        center: ['75%', '50%'],
        roseType: 'area',
        data: [
          {value: 10, name: 'rose1'},
          {value: 5, name: 'rose2'},
          {value: 15, name: 'rose3'},
          {value: 25, name: 'rose4'},
          {value: 20, name: 'rose5'},
          {value: 35, name: 'rose6'},
          {value: 30, name: 'rose7'},
          {value: 40, name: 'rose8'}
        ]
      }
    ]
  };
  return (
    <div className={styles.normal}>
      <Row>
        <Col span={12} style={{padding: '10px'}}>
          <Card bordered={false}>
            <div style={{marginBottom: '20px'}}>区域图</div>
            <ResponsiveContainer minHeight={360}>
              <AreaChart width={600} height={400} data={data} stackOffset="expand"
                         margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <XAxis dataKey="month"/>
                <YAxis tickFormatter={toPercent}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip content={renderTooltipContent}/>
                <Area type='monotone' dataKey='a' stackId="1" stroke='#8884d8' fill='#8884d8'/>
                <Area type='monotone' dataKey='b' stackId="1" stroke='#82ca9d' fill='#82ca9d'/>
                <Area type='monotone' dataKey='c' stackId="1" stroke='#ffc658' fill='#ffc658'/>
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12} style={{padding: '10px'}}>
          <Card bordered={false}>
            <div style={{marginBottom: '20px'}}>自定义区域图</div>
            <ResponsiveContainer minHeight={360}>
              <AreaChart width={600} height={400} data={dataA}
                         margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8'/>
                <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d'/>
                <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658'/>
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{padding: '10px'}}>
          <Card bordered={false}>
            <div style={{marginBottom: '20px'}}>饼状图</div>
            <ResponsiveContainer minHeight={360}>
              <ReactEcharts option={option}/>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12} style={{padding: '10px'}}>
          <Card bordered={false}>
            <div style={{marginBottom: '20px'}}>自定义饼状图</div>
            <ResponsiveContainer minHeight={360}>
              <ReactEcharts option={optionA}/>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(PieCharts);
