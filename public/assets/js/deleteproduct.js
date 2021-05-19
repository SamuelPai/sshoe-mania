function deleteproduct(id){
  $.ajax({
    url: '/api/products/' + id,
    type: 'DELETE',
    success: function(result){
      window.location.reload(true);
    }
  })
};
