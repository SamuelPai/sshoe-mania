function updateCustomer(id){
  $.ajax({
    url: '/api/customers/' + id,
    type: 'PUT',
    data: $('#update_customer').serialize(),
    success: function(result){
      window.location.replace("/");
    }
  })
};
