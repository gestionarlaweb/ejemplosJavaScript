// Aqui el código JS de la web Morris.js
new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2012', value: 4.64, value2: 0.65, value3: 4.93 }, // no me deja poner texto
    { year: '2013', value: 18.66, value2: 32.31, value3: 21.42 },
    { year: '2014', value: -6.85, value2: 11.29, value3: 3.66 },
    { year: '2015', value: 18.79, value2: -0.81, value3: -7.15 },
    { year: '2016', value: 73.32, value2: 9.64, value3: -2.01 },
    { year: '2017', value: 55.11, value2: 15.04, value3: 12.53 },
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value', 'value2', 'value3'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  lineWidth: 1, // finura de les lineas
  labels: ['Estrategia', 'SP500','IBEX35'],
  resize: true,  // para que se vea bien en cualquier dispositivo

  lineColors: ['#C14D9F','#2CB4AC','#BCA0A0'],  // colors de les líneas

});