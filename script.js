const protectedPages=['home.html','about.html','services.html','projects.html','industries.html','contact.html'];
const currentPage=(location.pathname.split('/').pop()||'index.html');
if(protectedPages.includes(currentPage)&&localStorage.getItem('nexoraLoggedIn')!=='true'){
  location.href='index.html';
}
const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
if(menuBtn&&navLinks){menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'))}
document.querySelectorAll('.logout-btn').forEach(btn=>btn.addEventListener('click',()=>{localStorage.removeItem('nexoraLoggedIn');location.href='index.html'}));
const loginForm=document.getElementById('loginForm');
if(loginForm){loginForm.addEventListener('submit',e=>{e.preventDefault();localStorage.setItem('nexoraLoggedIn','true');localStorage.setItem('nexoraEmail',document.getElementById('loginEmail').value);location.href='home.html';});}
const registerForm=document.getElementById('registerForm');
if(registerForm){registerForm.addEventListener('submit',e=>{e.preventDefault();localStorage.setItem('nexoraLoggedIn','true');localStorage.setItem('nexoraName',document.getElementById('regName').value);localStorage.setItem('nexoraEmail',document.getElementById('regEmail').value);location.href='home.html';});}
document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>q.parentElement.classList.toggle('open')));
const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.14});revealItems.forEach(el=>io.observe(el));}else{revealItems.forEach(el=>el.classList.add('show'));}
const counters=document.querySelectorAll('[data-count]');
if('IntersectionObserver' in window){const countIO=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target;const target=+el.dataset.count;let cur=0;const step=Math.max(1,Math.ceil(target/70));const timer=setInterval(()=>{cur+=step;if(cur>=target){cur=target;clearInterval(timer)}el.textContent=cur+(el.dataset.suffix||'')},24);countIO.unobserve(el)})},{threshold:.5});counters.forEach(c=>countIO.observe(c));}
const filterBtns=document.querySelectorAll('.filter-btn');
const projects=document.querySelectorAll('.project-card');
filterBtns.forEach(btn=>btn.addEventListener('click',()=>{filterBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const cat=btn.dataset.filter;projects.forEach(p=>{p.style.display=(cat==='all'||p.dataset.cat===cat)?'block':'none'})}));
document.querySelectorAll('form:not(#loginForm):not(#registerForm)').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const msg=form.querySelector('.form-message');if(msg){msg.textContent='Thank you! Our team will contact you soon.';msg.style.color='#1463ff'}form.reset()}));

const themeToggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark-mode");
    if(themeToggle) themeToggle.textContent="☀️";
}

if(themeToggle){
    themeToggle.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

        const isDark =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );

        themeToggle.textContent =
            isDark ? "☀️" : "🌙";
    });
}