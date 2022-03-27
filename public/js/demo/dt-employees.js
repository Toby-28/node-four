// Call the dataTables jQuery plugin
$(document).ready(function () {
  $('#dataTable').DataTable({
    ajax: {
      dataSrc: '',
      url: '/dt_employees',
    },
    columns: [
      { data: 'id' },
      { data: 'name' },
      { data: 'surname' },
      { data: 'birth_date' },
      { data: 'job_name' },
      { data: 'work_time' },
      { data: 'salary' },
    ],
  })
})
