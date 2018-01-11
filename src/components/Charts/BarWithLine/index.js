/**
 * @Author zlx
 * @Date 2017/12/12 下午4:18
 */
import React, {Component} from 'react';
import {Chart, Axis, Geom, Tooltip, Legend} from 'bizcharts';
import {View} from '@antv/data-set';

export default class BarWithLine extends Component {
  render() {
    const {data, cols, colName, colValue, barColor, onTooltipChange, lineName, barType} = this.props;
    const dv = new View();
    dv.source(data);
    dv.transform({
      type: 'fold',
      fields: cols, // 展开字段集
      key: colName, // key字段
      value: colValue, // value字段
    });
    const fieldMap = {
      'occupy': {alias: lineName},
    };

    return (
      <Chart height={400} data={dv} forceFit={true} scale={fieldMap} padding={[20, 70, 70, 70]} onTooltipChange={onTooltipChange}>
        <Axis name="time" label={{formatter: text => text}}/>
        <Axis name={colValue} position={'left'}/>
        <Axis name="occupy" position={'right'}/>
        <Tooltip/>
        <Legend/>
        <Geom type={barType} position={`time*${colValue}`} color={[colName, barColor]}
              style={{stroke: '#fff', lineWidth: 1}}/>
        <Geom type="line" position="time*occupy" size={2} shape={'smooth'}/>
      </Chart>
    );
  }
}
