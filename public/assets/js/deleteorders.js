function deleteorder(id){
  $.ajax({
    url: '/api/orders/' + id,
    type: 'DELETE',
    success: function(result){
      window.location.reload(true);
    }
  })
};
