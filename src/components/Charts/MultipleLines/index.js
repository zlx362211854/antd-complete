/**
 * @Author zlx
 * @Date 2017/12/22 上午10:27
 */
import React, { Component } from 'react';
import G2 from 'g2';
import styles from '../TimelineChart/index.less';
import { Chart, Axis, Geom, Tooltip, Legend} from 'bizcharts';
class MultipleLines extends Component {
  render() {
    const { height, data, fieldMap} = this.props;
    return (
      <div className={styles.timelineChart} style={{ height }}>
        <Chart height={400} data={data} forceFit>
          <Axis name={fieldMap.x} />
          <Axis name={fieldMap.y}/>
          <Legend />
          <Tooltip crosshairs={{type : "y"}}/>
          <Geom type="line" position={`${fieldMap.x}*${fieldMap.y}`} size={2} color={fieldMap.differentiate} />
          <Geom type='point' position={`${fieldMap.x}*${fieldMap.y}`} size={4} shape={'circle'} color={fieldMap.differentiate} style={{lineWidth: 1}} />
        </Chart>
      </div>
    );
  }
}

export default MultipleLines;

