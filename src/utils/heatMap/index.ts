import option from "./data"
import * as echarts from 'echarts';

function getVirtualData(year: string) {
    const date = +echarts.time.parse(year + '-01-01');
    const end = +echarts.time.parse(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data: [string, number][] = [];
    for (let time = date; time < end; time += dayTime) {
        data.push([
            echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
            Math.floor(Math.random() * 10)
        ]);
    }
    return data;
}

const getData = (year: string) => {
    // 设置年份
    option.calendar.range = year
    // 设置数据
    option.series.data = getVirtualData(year)

    return option
}


export default getData;

