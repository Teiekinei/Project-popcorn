$(document).ready(function () { 
  $('.activeBtn').click(function() {
    const basicPrice = 600
    const standardPrice = basicPrice + 1000
    $(this).addClass('btn-secondary')
    $(this).parent().siblings().find('.activeBtn').removeClass('btn-secondary')
    switch ($(this).attr('number')) {
      
    case '10000':
      $('.members-left').text($(this).attr('number'))
      $('.price-left').text(basicPrice)
      $('.members-right').text($(this).attr('number'))
      $('.price-right').text(standardPrice)
        break
      
    case '15000':
      $('.members-left').text($(this).attr('number'))
      $('.price-left').text(basicPrice * 1.5)
      $('.members-right').text($(this).attr('number'))
      $('.price-right').text(standardPrice * 1.5)
        break
      
    case '20000':
      $('.members-left').text($(this).attr('number'))
      $('.price-left').text(basicPrice * 2)
      $('.members-right').text($(this).attr('number'))
      $('.price-right').text(standardPrice * 2)
        break
      
    case '25000':
      $('.members-left').text($(this).attr('number'))
      $('.price-left').text(basicPrice * 2.5)
      $('.members-right').text($(this).attr('number'))
      $('.price-right').text(standardPrice * 2.5)
        break
      
    default:
      $('.members-left').text($(this).attr('number'))
      $('.price-left').text(basicPrice * 3)
      $('.members-right').text($(this).attr('number'))
      $('.price-right').text(standardPrice * 3)
        break
    }
  })
})