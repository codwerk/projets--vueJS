//un observer est un objet qui repèrent quelque chose en temps réel. 
//il y a diférents observer qui repèrent des chose diférentes comme la mutationObserver ou
//chercher des changements dans la DOM, nouc avons besoin de l'intersection observer

const animatedScrollObserver = new IntersectionObserver( entries => {
  entries.forEach( entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('enter') ;
      animatedScrollObserver.unobserve(entry.target);
    }
  })
})

export default {
  bind(el) {
    el.classList.add('before-enter');
    animatedScrollObserver.observe(el);
  }
}