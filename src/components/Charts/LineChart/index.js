/**
 * @Author zlx
 * @Date 2017/12/12 下午3:00
 */
import React, { Component } from 'react';
import G2 from 'g2';
import styles from '../TimelineChart/index.less';

class LineChart extends Component {
  componentDidMount() {
    this.renderChart(this.props.data);
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  handleRef = (n) => {
    this.node = n;
  }

  renderChart(data) {
    const { height = 400, margin = [60, 20, 40, 40], titleMap, borderWidth = 2 } = this.props;

    if (!data || (data && data.length < 1)) {
      return;
    }

    const chart = new G2.Chart({
      container: this.node,
      forceFit: true,
      height,
      plotCfg: {
        margin,
      },
    });

    chart.axis('x', {
      title: false,
    });
    chart.axis('y', {
      title: false,
    });

    chart.legend({
      mode: false,
      position: 'top',
    });

    chart.source(data, {
      x: {
        type: 'cat',
      },
      y: {
        alias: titleMap.y,
      }
    });

    chart.line().position('x*y').color('#1890FF').size(borderWidth);
    chart.point().position('x*y').color('#DAF5FF').size(4).shape('circle').style({
      stroke: '#e86c73',
      lineWidth: 2
    });

    this.chart = chart;
    chart.render();

  }

  render() {
    const { height, title } = this.props;

    return (
      <div className={styles.timelineChart} style={{ height }}>
        <div>
          { title && <h4>{title}</h4>}
          <div ref={this.handleRef} />
        </div>
      </div>
    );
  }
}

export default LineChart;
