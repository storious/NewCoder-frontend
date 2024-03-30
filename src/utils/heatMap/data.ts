
const option = {
    title: {
        top: 30,
        left: 'center',
        text: '个人活跃度'
    },
    tooltip: { solve: {} },
    visualMap: {
        type: 'piecewise',
        align: "auto",
        itemWidth: 15,
        pieces: [
            { gte: 1, lt: 3, label: " ", color: '#00e600' },
            { gte: 3, lt: 6, label: " ", color: '#00bf00' },
            { gte: 6, label: " ", color: '#009a00' }
        ],

        orient: 'horizontal',
        left: 'center',
        top: 70,
    },
    calendar: {
        top: 120,
        left: 70,
        right: 40,
        cellSize: [22, 20],
        range: '',
        dayLabel: {
            nameMap: ['Sun', '', '', '', '', '', ''],
            fontStyle: 'italic'
        },
        monthLabel: {
            nameMap: 'EN'
        },
        itemStyle: {
            borderWidth: 1.5,
            borderCap: "round",
        },
        yearLabel: { show: false }
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: {},
    }
};

export default option;
