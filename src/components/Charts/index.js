import numeral from 'numeral';
import ChartCard from './ChartCard';
import Bar from './Bar';
import Pie from './Pie';
import Radar from './Radar';
import Gauge from './Gauge';
import MiniArea from './MiniArea';
import MiniBar from './MiniBar';
import MiniProgress from './MiniProgress';
import Field from './Field';
import WaterWave from './WaterWave';
import TagCloud from './TagCloud';
import TimelineChart from './TimelineChart';
import LineChart from './LineChart';
import BarWithLine from './BarWithLine';
import MultipleLines from './MultipleLines';
const yuan = val => `&yen; ${numeral(val).format('0,0')}`;

export default {
  yuan,
  Bar,
  Pie,
  Gauge,
  Radar,
  MiniBar,
  MiniArea,
  MiniProgress,
  ChartCard,
  Field,
  WaterWave,
  TagCloud,
  TimelineChart,
  LineChart,
  BarWithLine,
  MultipleLines
};
