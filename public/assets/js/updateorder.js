function updateCustomer(id){
  // console.log("deletepaymentMethod I am running"+id)
  $.ajax({
    url: '/api/orders/' + id,
    type: 'PUT',
    data: $('update-order').serialize(),
    success: function(result){
      window.location.replace("/orders");
    }
  })
};
