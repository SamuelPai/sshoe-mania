function updateCustomer(id){
  // console.log("deletepaymentMethod I am running"+id)
  $.ajax({
    url: '/api/product/' + id,
    type: 'PUT',
    data: $('update-product').serialize(),
    success: function(result){
      window.location.replace("/products");
    }
  })
};
