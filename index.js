import{a as h,S as m,i as u}from"./assets/vendor-D3PmPE7A.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const p=void 0,g="https://pixabay.com",y="/api";function w(r){const n=new URLSearchParams({key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${g}${y}?${n}`;return h.get(e,{validateStatus:s=>s<500})}let i;const l=document.querySelector(".gallery");function L(r){l.innerHTML="";const n=r.map(e=>`<li class="gallery-item">
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
        </li>`).join("");l.insertAdjacentHTML("afterbegin",n),i?i.refresh():i=new m(".gallery a",{captionsData:"alt",captionDelay:250})}function b(){l.innerHTML=""}function S(){b(),u.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#EF4040"})}const v=document.querySelector(".form"),c=document.querySelector(".input-search"),f=document.querySelector(".wait-msg");v.addEventListener("submit",$);function $(r){r.preventDefault();const n=c.value.trim();if(!n){d("Input search string");return}c.value="",E(),w(n).then(e=>{if(!e.data||!Array.isArray(e.data.hits))throw new Error("Unexpected API response");x(e.data.hits)}).catch(e=>{console.error(e),d("Failed to load images. Try again later.")}).finally(P)}function x(r){if(!r.length){S();return}L(r)}function E(){f.innerHTML='Loading... <span class="loader"></span>'}function P(){f.textContent=""}function d(r){u.show({backgroundColor:"#EF4040",messageColor:"#fff",close:!0,position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:r})}
//# sourceMappingURL=index.js.map
