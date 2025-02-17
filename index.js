import{a as u,S as f,i as c}from"./assets/vendor-D3PmPE7A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m="https://pixabay.com",p="/api";function g(s){const t=new URLSearchParams({key:"48827773-420cc6a3931f90379a2431d96",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),r=m+p+`?${t}`;return u.get(r)}let n;function h(s,t){const r=document.querySelector(t);r.innerHTML="";const i=s.map(e=>`<li class="gallery-item">
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
        </li>`).join("");r.insertAdjacentHTML("afterbegin",i),n?n.refresh():n=new f(t+" a",{captionsData:"alt",captionDelay:250})}const d=document.querySelector(".form"),y=document.querySelector(".input-search"),l=document.querySelector(".wait-msg");d.addEventListener("submit",s=>{s.preventDefault();let t=y.value.trim();if(!t){c.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Input search string"});return}l.innerHTML='"Wait, the image is loaded" <span class="loader"></span>',g(t).then(r=>{r.data.hits.length==0?c.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!"}):h(r.data.hits,".gallery"),l.textContent=""}).catch(r=>{l.textContent="Ups ...",console.log(r)}),d.reset()});
//# sourceMappingURL=index.js.map
