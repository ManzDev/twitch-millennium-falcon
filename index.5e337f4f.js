!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const r of t)if("childList"===r.type)for(const t of r.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const t=document.querySelector("canvas"),e=t.getContext("2d");t.width=1880,t.height=920;const r=["#444","#888","#FFF"];const s=new class{constructor(){this.stars=[];for(let e=0;e<250;e++){const e=~~(Math.random()*t.width),r=~~(Math.random()*t.height),s=~~(1+5*Math.random()),o=~~(3*Math.random());this.stars.push({x:e,y:r,speed:s,color:o})}}draw(){for(let t=0;t<250;t++){const s=this.stars[t];e.lineWidth=1,e.strokeStyle=r[this.stars[t].color],e.strokeRect(s.x,s.y,1,1)}}update(){for(let e=0;e<250;e++){this.stars[e].y+=this.stars[e].speed;this.stars[e].y>t.height&&(this.stars[e].y=0)}}};console.log(s.stars);const o=()=>{e.clearRect(0,0,t.width,t.height),requestAnimationFrame(o),s.update(),s.draw()};o();
