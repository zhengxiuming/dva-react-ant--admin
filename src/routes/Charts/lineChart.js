import React from 'react';
import { connect } from 'dva';
import styles from './lineChart.css';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';
import ReactEcharts from 'echarts-for-react';
import {Card, Row, Col} from 'antd';

function LineCharts() {
  const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ];
  const CustomizedLabel = React.createClass({
    render () {
      const {x, y, stroke, value} = this.props;

      return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>
    }
  });
  const CustomizedAxisTick = React.createClass({
    render () {
      const {x, y, stroke, payload} = this.props;

      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
        </g>
      );
    }
  });
  const option = {
    title: {
      text: '未来一周气温变化',
      subtext: '纯属虚构'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data:['最高气温','最低气温']
    },
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        dataView: {readOnly: false},
        magicType: {type: ['line', 'bar']},
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis:  {
      type: 'category',
      boundaryGap: false,
      data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    series: [
      {
        name:'最高气温',
        type:'line',
        data:[11, 11, 15, 13, 12, 13, 10],
        markPoint: {
          data: [
            {type: 'max', name: '最大值'},
            {type: 'min', name: '最小值'}
          ]
        },
        markLine: {
          data: [
            {type: 'average', name: '平均值'}
          ]
        }
      },
      {
        name:'最低气温',
        type:'line',
        data:[1, -2, 2, 5, 3, 2, 0],
        markPoint: {
          data: [
            {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
          ]
        },
        markLine: {
          data: [
            {type: 'average', name: '平均值'},
            [{
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            }, {
              symbol: 'circle',
              label: {
                normal: {
                  position: 'start',
                  formatter: '最大值'
                }
              },
              type: 'max',
              name: '最高点'
            }]
          ]
        }
      }
    ]
  };
  const optionA = {
    legend: {
      data:['高度(km)与气温(°C)变化关系']
    },
    tooltip: {
      trigger: 'axis',
      formatter: "Temperature : <br/>{b}km : {c}°C"
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    yAxis: {
      type: 'category',
      axisLine: {onZero: false},
      axisLabel: {
        formatter: '{value} km'
      },
      boundaryGap: false,
      data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
    },
    series: [
      {
        name: '高度(km)与气温(°C)变化关系',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            width: 3,
            shadowColor: 'rgba(0,0,0,0.4)',
            shadowBlur: 10,
            shadowOffsetY: 10
          }
        },
        data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
      }
    ]
  };
  return (
    <div className={styles.normal}>
      <Row>
        <Col span={12} style={{padding: '10px'}}>
          <Card bordered={false}>
            <div style={{marginBottom: '20px'}}>折线图</div>
            <ResponsiveContainer minHeight={360}>
              <LineChart layout="vertical" width={600} height={300} data={data}
                         margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                <XAxis type="number"/>
                <YAxis dataKey="name" type="category"/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line dataKey="pv" stroke="#8884d8" />
                <Line dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12} style={{padding: '10px'}}>
          <Card bordered={false}>
            <div style={{marginBottom: '20px'}}>自定义折线图</div>
            <ResponsiveContainer minHeight={360}>
              <LineChart width={600} height={300} data={data}
                         margin={{top: 20, right: 30, left: 20, bottom: 10}}>
                <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick/>}/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />}/>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{padding: '10px'}}>
          <Card bordered={false}>
            <div style={{marginBottom: '20px'}}>折线图</div>
            <ResponsiveContainer minHeight={360}>
              <ReactEcharts option={option}/>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12} style={{padding: '10px'}}>
          <Card bordered={false}>
            <div style={{marginBottom: '20px'}}>自定义折线图</div>
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

export default connect(mapStateToProps)(LineCharts);
