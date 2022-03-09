// Call the dataTables jQuery plugin
$(document).ready(function () {
  $('#dataTable').DataTable({
    ajax: {
      dataSrc: '',
      url: '/dt_employees',
    },
    columns: [
      { data: 'name' },
      { data: 'surname' },
      { data: 'birth_date' },
      { data: 'hired_date' },
      { data: 'job' },
      { data: 'salary' },
    ],
  })
})
