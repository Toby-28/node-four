// Call the Datatable Jquery plugin
$(document).ready(function () {
  $('#dataTable').DataTable({
    ajax: {
      url: '/dt_users',
      dataSrc: '',
    },
    columns: [
      { data: 'balance' },
      { data: 'cart_number' },
      { data: 'username' },
      { data: 'surname' },
      { data: 'birth_date' },
      { data: 'passport' },
    ],
  })
})
