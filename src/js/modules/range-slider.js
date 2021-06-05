import noUiSlider from '../vendor/nouislider.min';

const rangeSliderArticle = () => {
  const rangeSlider = document.getElementById('range-slider');

  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [0, 50000],
      connect: true,
      step: 1,
      range: {
        min: [0],
        max: [50000],
      },
    });

    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
    });

    const setRangleSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      console.log(arr);

      rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
      el.addEventListener('change', (e) => {
        setRangleSlider(index, e.currentTarget.value);
      });
    });
  }
};

export default rangeSliderArticle;
