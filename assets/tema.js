(function(){var r=document.documentElement,b=document.getElementById('th');
try{var s=localStorage.getItem('th');if(s)r.setAttribute('data-theme',s)}catch(e){}
b.onclick=function(){var d=r.getAttribute('data-theme')==='dark'||(!r.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme:dark)').matches);var n=d?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('th',n)}catch(e){}}})();
