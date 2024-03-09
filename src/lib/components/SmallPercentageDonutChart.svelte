<script lang="ts">
  import ApexCharts from 'apexcharts';

  export let value: number;
  export let color: string = '#7367F0';
  export let bgColor: string = '#EEEEEE';


  type OptionsData = {value: number, color: string, bgColor: string};
  const buildOptions = (data: OptionsData) => ({
    chart: {
      height: 30,
      width: 30,
      type: 'radialBar',
    },
    grid: {
      show: false,
      padding: {
        left: -15,
        right: -15,
        top: -12,
        bottom: -15,
      },
    },
    colors: [data.value === 0 ? data.bgColor : data.color],
    series: [data.value],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '22%',
        },
        track: {
          background: data.bgColor,
        },
        dataLabels: {
          showOn: 'never',
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    stroke: {
      lineCap: 'round',
    },
  });

  let parent: HTMLElement;

  const rebuildChart = (data: OptionsData) => {
    setTimeout(() => {
      const element = document.createElement('div');
      parent.innerHTML = '';
      parent.appendChild(element);


    const browserStatePrimaryChart = new ApexCharts(element, buildOptions({ value: data.value, color: data.color, bgColor: data.bgColor }));
    browserStatePrimaryChart.render();
  }, 0);
  };

  $: {
    rebuildChart({
      value,
      color,
      bgColor,
    });
  }
</script>

<div bind:this={parent} />
