var a=document.querySelector(".slider"),c=document.querySelector(".slider-button-prev"),l=document.querySelector(".slider-button-next"),i=[...a.querySelectorAll("li")],r=[...document.querySelectorAll(".slider-pagination__button")],o=i.length,t=0,d=()=>{c.disabled=t===0,l.disabled=t===i.length-1},n=e=>{t=e,i.forEach(s=>s.classList.remove("slider__item--current")),i[e].classList.add("slider__item--current"),document.querySelector(".slider-pagination__button--active").classList.remove("slider-pagination__button--active"),r[e].classList.add("slider-pagination__button--active"),d(),u()};n(t);function u(){r.forEach((e,s)=>{e.addEventListener("click",()=>{document.querySelector(".slider-pagination__button--active").classList.remove("slider-pagination__button--active"),e.classList.add("slider-pagination__button--active"),n(s)})})}var _=()=>{t=(t-1+o)%o,n(t)},v=()=>{t=(t+1)%o,n(t)};c.addEventListener("click",_);l.addEventListener("click",v);
