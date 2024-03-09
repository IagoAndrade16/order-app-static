<script lang="ts">
  import type { DonutChartItem } from '$lib/core/types/DonutChartItem';
  import ApexCharts from 'apexcharts';

  export let drawChart: (_items: DonutChartItem[]) => void;
  export let title: string;

  const generateChart = (items: DonutChartItem[]) => {
  if (items.length === 0) {
      items.push({ count: 0, label: 'Nenhum dado' });
    }

    const donutLabels: string[] = [];
    const donutData: number[] = [];

    items.forEach((data) => {
      donutLabels.push(data.label);
      donutData.push(data.count);
    });

    const colors = [
      '#03CFE7',
      '#29C76F',
      '#FF9E43',
      '#328566',
      '#bc7ff5',
      '#ffe700',
      '#93fa9c',
    ];
    const total = donutData.reduce((a, b) => a + b, 0);

    const donutChartBody = document.querySelector('#chart-body');
    donutChartBody!.innerHTML = '';

    const donutChartEl = document.createElement('div');
    donutChartBody!.appendChild(donutChartEl);

    const donutChartConfig = {
      chart: {
        height: 350,
        type: 'donut',
      },
      legend: {
        show: true,
        position: 'bottom',
      },
      labels: donutLabels,
      series: donutData,
      colors,
      dataLabels: {
        enabled: true,
        formatter(val: string, _opt: any) {
          return `${parseInt(val, 10)}%`;
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: 'Montserrat',
              },
              value: {
                fontSize: '1rem',
                fontFamily: 'Montserrat',
                formatter(val: string) {
                  return parseInt(val, 10);
                },
              },
              total: {
                show: true,
                fontSize: '1.5rem',
                label: 'Total',
                formatter(_w: any) {
                  return total;
                },
              },
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
          },
        },
      ],
    };

    if (typeof donutChartEl !== 'undefined' && donutChartEl !== null) {
      const donutChart = new ApexCharts(donutChartEl, donutChartConfig);
      donutChart.render();
    }
  };


  drawChart = (items: DonutChartItem[]) => {
    setTimeout(() => {
      generateChart(items);
    }, 0);
  };
</script>

<div class="card">
  <div class="card-header flex-column align-items-start">
    <h4 class="card-title mb-75">{title}</h4>
    <span class="card-subtitle text-muted" />
  </div>
  <div id="chart-body" class="card-body">
    <div id="donut-chart" />
  </div>
</div>
