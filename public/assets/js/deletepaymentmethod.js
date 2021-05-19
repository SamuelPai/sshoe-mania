function deletepaymentMethod(id){
  // console.log("deletepaymentMethod I am running"+id)
  $.ajax({
    url: '/api/paymentMethods/' + id,
    type: 'DELETE',
    success: function(result){
      window.location.reload(true);
    }
  })
};
