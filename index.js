import{a as f,S as m,i as u}from"./assets/vendor-D3PmPE7A.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const g="https://pixabay.com",p="/api";function h(s){const o=new URLSearchParams({key:"48827773-420cc6a3931f90379a2431d96",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=g+p+`?${o}`;return f.get(e)}let i;const l=document.querySelector(".gallery");function y(s){l.innerHTML="";const o=s.map(e=>`<li class="gallery-item">
            <a class='gallery-link' href="${e.largeImageURL}">
              <img class="li-img"
              src="${e.webformatURL}" 
              alt="${e.tags}"/> 
              <div class="li-text">
                <table class="table">
                    <tr><td>Likes</td><td>Views</td><td>Comment</td><td>Downloads</td></tr>
                    <tr><td>${e.likes}</td><td>${e.views}</td><td>${e.comments}</td><td>${e.downloads}</td></tr>
                </table>
              </div>
            </a>
        </li>`).join("");l.insertAdjacentHTML("afterbegin",o),i?i.refresh():i=new m(".gallery a",{captionsData:"alt",captionDelay:250})}function b(){l.innerHTML=""}function L(){b(),u.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#EF4040"})}const d=document.querySelector(".form"),w=document.querySelector(".input-search"),n=document.querySelector(".wait-msg");d.addEventListener("submit",s=>{s.preventDefault();let o=w.value.trim();if(!o){u.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Input search string"});return}n.innerHTML='"Wait, the image is loaded" <span class="loader"></span>',h(o).then(e=>{e.data.hits.length===0?L():y(e.data.hits)}).catch(e=>{n.textContent="Ups ...",console.error(e)}).finally(()=>{n.textContent=""}),d.reset()});
//# sourceMappingURL=index.js.map
