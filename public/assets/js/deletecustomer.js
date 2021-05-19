function deletecustomer(id){
  $.ajax({
    url: '/api/' + id,
    type: 'DELETE',
    success: function(result){
      window.location.reload(true);
    }
  })
};
