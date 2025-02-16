import{a as d,S as u,i as l}from"./assets/vendor-D3PmPE7A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const f="https://pixabay.com",m="/api";function g(s){const r=new URLSearchParams({key:"48827773-420cc6a3931f90379a2431d96",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=f+m+`?${r}`;return d.get(o)}function p(s,r){const o=document.querySelector(r),i=s.map(e=>`<li class="gallery-item">
            <a class='gallery-link' href="${e.largeImageURL}">
              <img class="li-img"
              src="${e.webformatURL}" 
              alt="${e.tags}/> 
              <div class="li-text">
                <table class="table">
                    <tr><td>Likes</td><td>Views</td><td>Comment</td><td>Downloads</tr>
                    <tr><td>>${e.likes}</td><td>${e.views}</td><td>${e.comments}</td><td>${e.downloads}</tr>
                </table>

              
          
              
              
                </div>
              </a>
            </li>
            
    `).join("");o.insertAdjacentHTML("afterbegin",i),new u(r+" a",{captionsData:"alt",captionDelay:250}).refresh()}const c=document.querySelector(".form"),h=document.querySelector(".input-search"),n=document.querySelector(".wait-msg");c.addEventListener("submit",s=>{s.preventDefault();let r=h.value.trim();if(!r){l.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Input search string"});return}n.innerHTML='"Wait, the image is loaded" <span class="loader"></span>',g(r).then(o=>{o.data.hits.length==0?l.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!"}):p(o.data.hits,".gallery"),n.textContent=""}).catch(o=>{n.textContent="Ups ...",console.log(o)}),c.reset()});
//# sourceMappingURL=index.js.map
