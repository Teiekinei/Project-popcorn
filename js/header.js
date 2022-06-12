const div = document.createElement('div')
      div.classList.add('navbar','d-flex','container')
      div.innerHTML = `<div class="logo col-md-3"><a href="index.html"><img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/logo.png" alt=""></a></div>
<div class="col-md-3 text-end">
<a href="pricing.html"><button type="button" class="btn btn-primary rounded-pill"></button></a>
</div>`
document.querySelector('header').appendChild(div);