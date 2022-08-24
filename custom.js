$('.product_tile_color_holder input').click(function(){
var data_img = $(this).attr('data_image');
console.log(data_img);
 $(this).parents('.main_li').find('.first_imagescs').remove();
   //  $(this).parents('.test_cardmds').find('.new_custom_div').html("<img class='motion-reduce' src='"+data_img+"'>");
$(this).parents('.main_li').find('.new_custom_div').prepend("<img class='first_imagescs motion-reduce' src='"+data_img+"'>");
});
