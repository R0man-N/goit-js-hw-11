import{S as i,i as f}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const l={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let m=new i(".gallery a");l.form.addEventListener("submit",u);function u(r){r.preventDefault();const t=r.target.elements.search.value.trim();l.loader.classList.remove("hidden"),l.gallery.innerHTML="",d(t).then(o=>{if(o.totalHits===0)return c(message);const a=g(o.hits);l.gallery.innerHTML=a,m.refresh()}).catch(o=>{c()}).finally(()=>{l.loader.classList.add("hidden")}),l.form.reset()}function d(r){const t="https://pixabay.com/api/",o="42208062-89bae71b6ac9d6683cff7159b",a=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}?${a}`;return fetch(e).then(s=>s.json()).catch(s=>{c()})}function p(r){return`<li class="gallery-card">
        <a href="${r.largeImageURL}"
          ><img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
            title=""
          />
        </a>
        <div class="gallery-card-items">
          <p class="gallery-card-info">
            Likes
            <span class="gallery-card-data">${r.likes}</span>
          </p>

          <p class="gallery-card-info">
            Views
            <span class="gallery-card-data">${r.views}</span>
          </p>

          <p class="gallery-card-info">
            Comments
            <span class="gallery-card-data">${r.comments}</span>
          </p>

          <p class="gallery-card-info">
            Downloads
            <span class="gallery-card-data">${r.downloads}</span>
          </p>
        </div>
      </li>`}function g(r){return r.map(p).join("")}function c(r){f.error({message:"Sorry, there are no images matching <br/> your search query. Please try again!",position:"topRight",messageColor:"#ffffff",messageSize:"16px",backgroundColor:"#ef4040",iconColor:"#ffffff",iconUrl:errorIcon,timeout:5e3,close:!1,closeOnEscape:!0})}
//# sourceMappingURL=commonHelpers.js.map
