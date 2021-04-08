 $(document).ready(function(){
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__block').removeClass('catalog__block_active').eq($(this).index()).addClass('catalog__block_active');
    });
    
    $('.catalog-item__link').each(function(i){
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });

    $('.catalog-item__back').each(function(i){
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });

    $('[data-modal=consultation]').on('click', function(){
      $('.overlay, #consultation').fadeIn();
    });

    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #order, #thanks').fadeOut();
    });

    $('.button_mini').each(function(i){
      $(this).on('click', function(){
        $('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    });

    $('.catalog-item__link, .catalog-item__back').on('click', function(){
      $('.catalog-item__content, .catalog-item__list').fadeIn();
    });

    $('#consultation-form').validate();
    $('#consultation form').validate({
      rules:{
        name: "required",
        phone: "required",
        email: {
          requiredd: true,
          email: true
        }
      },
      messages: {
        name: "Введите свое имя",
        phone: "Введети свой номер телефона",
        email: {
          required: "Введите свое Емайл правельно",
          email: "Не правельно введен почта"
        }
      }
    });
    $('#order form').validate({
        rules:{
          name: "required",
          phone: "required",
          email: {
            requiredd: true,
            email: true
          }
        },
        messages: {
          name: "Введите свое имя",
          phone: "Введети свой номер телефона",
          email: {
            required: "Введите свое Емайл правельно",
            email: "Не правельно введен почта"
          }
        }
      });

      $('input[name=phone]').mask("+998 99 999-99-99");

      $('form').submit(function(e){
          e.preventDefault();
          $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
          }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
            return false;
          })

      });

  });

const slider = tns({
    container: '.carousel__block',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

  document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
  };
  document.querySelector('.next').onclick = function () {
    slider.goTo('next');
  };