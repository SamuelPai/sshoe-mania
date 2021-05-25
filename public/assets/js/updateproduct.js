function updateProduct(id){
    console.log("deletepaymentMethod I am running"+id)
    $.ajax({
      url: '/api/products/' + id,
      type: 'PUT',
      data: $('#update_product').serialize(),
      success: function(result){
        window.location.replace("/products");
      }
    })
  };