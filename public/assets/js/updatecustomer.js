function updateCustomer(id){
  // console.log("deletepaymentMethod I am running"+id)
  $.ajax({
    url: '/api/customers/' + id,
    type: 'PUT',
    data: $('update-customer').serialize(),
    success: function(result){
      window.location.replace("/customers");
    }
  })
};
