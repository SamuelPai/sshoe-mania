function updatepaymentMethod1(id){
  $.ajax({
    url: '/api/paymentMethods/' + id,
    type: 'PUT',
    data: $('#update_payment').serialize(),
    success: function(result){
      window.location.replace("/paymentMethods");
    },
    error: function(){
      alert('Failed to update payment.');
    }
  })
};
