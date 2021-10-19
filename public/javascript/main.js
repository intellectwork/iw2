/* Variables */
var items = document.querySelectorAll(".nav-item")
var mediaQuery = window.matchMedia('(max-width: 1251px)')
var sections = document.querySelectorAll('.section')
var sectionArray = []


/* Section Changer */
new fullpage('#fullpage', {
   anchors:['Section-Services','Section-Portfolio','Section-Features','Section-FAQ','Section-Location'],
   sectionsColor: ['#f8fbfe','#fff','#f8fbfe','#fff','#f8fbfe','#fff'],
   navigation: true,
   scrollingSpeed: 800,
   afterLoad: function(origin, destination, direction){
      $('.fp-table.active .aos-init').addClass('aos-animate');
      for(var index = 0; index < sections.length; index++) {
         sectionArray.push(sections[index].getAttribute('data-anchor'))
      }
      var activeSection = sectionArray.filter((section) => section === destination.anchor)

      items.forEach(item => {
         if(item.querySelector('a').getAttribute('href').split('#')[1] === activeSection[0]) {
            var selected = document.querySelectorAll('.active')
            selected[0].className = selected[0].className.replace(' active', '')
            item.className += " active" 
         }
      })
   }
})

AOS.init({
duration: 1000,
once: true
})




/* Navbar OnClick */
items.forEach(item => {
   item.addEventListener("click", () => {
      var selected = document.getElementsByClassName("active")
      selected[0].className = selected[0].className.replace(" active", "")
      item.className += " active"
   })
})

mediaQuery.addEventListener('change', (media) => {
   if(media.matches) {
      fullpage_api.setResponsive(true)
   }
   else {
      fullpage_api.setResponsive(false)
   }
})