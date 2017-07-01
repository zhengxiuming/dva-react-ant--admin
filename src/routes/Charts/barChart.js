import React from 'react';
import {connect} from 'dva';
import styles from './barChart.css';
import {
  BarChart,
  Bar,
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


function BarCharts() {
  const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: -3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: -2000, pv: -9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: -1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: -3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ];
  const CustomData = [
    {name: 'Page A', uv: 4000, female: 2400, male: 2400},
    {name: 'Page B', uv: 3000, female: 1398, male: 2210},
    {name: 'Page C', uv: 2000, female: 9800, male: 2290},
    {name: 'Page D', uv: 2780, female: 3908, male: 2000},
    {name: 'Page E', uv: 1890, female: 4800, male: 2181},
    {name: 'Page F', uv: 2390, female: 3800, male: 2500},
    {name: 'Page G', uv: 3490, female: 4300, male: 2100},
  ];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;
  };
  const TriangleBar = (props) => {
    const {fill, x, y, width, height} = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill}/>;
  };
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '邮件营销',
        type: 'bar',
        stack: '广告',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'bar',
        stack: '广告',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'bar',
        stack: '广告',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '搜索引擎',
        type: 'bar',
        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
        markLine: {
          lineStyle: {
            normal: {
              type: 'dashed'
            }
          },
          data: [
            [{type: 'min'}, {type: 'max'}]
          ]
        }
      },
      {
        name: '百度',
        type: 'bar',
        barWidth: 5,
        stack: '搜索引擎',
        data: [620, 732, 701, 734, 1090, 1130, 1120]
      },
      {
        name: '谷歌',
        type: 'bar',
        stack: '搜索引擎',
        data: [120, 132, 101, 134, 290, 230, 220]
      },
      {
        name: '必应',
        type: 'bar',
        stack: '搜索引擎',
        data: [60, 72, 71, 74, 190, 130, 110]
      },
      {
        name: '其他',
        type: 'bar',
        stack: '搜索引擎',
        data: [62, 82, 91, 84, 109, 110, 120]
      }
    ]
  };
  const optionA = {
    title : {
      text: '某地区蒸发量和降水量',
      subtext: '纯属虚构'
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data:['蒸发量','降水量']
    },
    toolbox: {
      show : true,
      feature : {
        dataView : {show: true, readOnly: false},
        magicType : {show: true, type: ['line', 'bar']},
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    calculable : true,
    xAxis : [
      {
        type : 'category',
        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'蒸发量',
        type:'bar',
        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        markPoint : {
          data : [
            {type : 'max', name: '最大值'},
            {type : 'min', name: '最小值'}
          ]
        },
        markLine : {
          data : [
            {type : 'average', name: '平均值'}
          ]
        }
      },
      {
        name:'降水量',
        type:'bar',
        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        markPoint : {
          data : [
            {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
            {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
          ]
        },
        markLine : {
          data : [
            {type : 'average', name : '平均值'}
          ]
        }
      }
    ]
  };
  return (
    <div className={styles.normal}>
      <Row>
        <Col span={12} style={{padding: '10px'}}>
          <Card bordered={false}>
            <div style={{marginBottom: '20px'}}>柱状图</div>
            <ResponsiveContainer minHeight={360}>
              <BarChart width={600} height={300} data={data}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke='#000'/>
                <Bar dataKey="pv" fill="#8884d8"/>
                <Bar dataKey="uv" fill="#82ca9d"/>
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12} style={{padding: '10px'}}>
          <Card bordered={false}>
            <div style={{marginBottom: '20px'}}>自定义柱状图</div>
            <ResponsiveContainer minHeight={360}>
              <BarChart width={600} height={300} data={CustomData}
                        margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Bar dataKey="female" fill="#8884d8" shape={<TriangleBar/>} label/>
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{padding: '10px'}}>
          <Card bordered={false}>
            <div style={{marginBottom: '20px'}}>柱状图</div>
            <ResponsiveContainer minHeight={360}>
              <ReactEcharts option={option}/>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12} style={{padding: '10px'}}>
          <Card bordered={false}>
            <div style={{marginBottom: '20px'}}>自定义柱状图</div>
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

export default connect(mapStateToProps)(BarCharts);
