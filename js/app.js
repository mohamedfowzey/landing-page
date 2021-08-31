const t1 = performance.now()
console.log("hello!"); //this line to make sure that the file is working well


//creat an observer to observe each section
let observer = new IntersectionObserver(function(entries){ 
    for (let ent of entries) {
        if(ent.isIntersecting){
            ent.target.classList.add('your-active-class');
            document.querySelector(`li#${ent.target.id}`).classList.add('your-active-class');
        }
        else{
            ent.target.classList.remove('your-active-class');
            document.querySelector(`li#${ent.target.id}`).classList.remove('your-active-class');

    }
}},{threshold:0.7});


const v_sections = document.querySelectorAll('section');
const navlist = new DocumentFragment();
console.log(navlist);


//this loop adds the scrolling links to the navigation bar and observes each section
let i = 0;  //this line th keep track of the section number running while the loop
for (let x of v_sections){
    i += 1;
    observer.observe(x);    //observe each section by th same observer




    //creating new link
    const newli = document.createElement('li');
    newli.id = x.id;
    newli.innerHTML = `<a class = 'menu__link'>section${i}</a>`
    
    


    //add a click listener to each link
    newli.addEventListener('click',function(event){
        event.preventDefault();
    x.scrollIntoView({behavior:'smooth',block:'center'});
    });


    
    //add the the link we created earlier to the navigation bar
    navlist.appendChild(newli);
}
document.querySelector('#navbar__list').appendChild(navlist)

console.log(performance.now()-t1);