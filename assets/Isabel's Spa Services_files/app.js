

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show'); 
            entry.target.classList.add('shows');
            observer.unobserve(entry.target);

        } else {
            entry.target.classList.remove('show');
            entry.target.classList.remove('shows');
        }

    });
});
const hiddenElements = document.querySelectorAll('.hidden');
const hiddensElements = document.querySelectorAll('.hiddens');
hiddenElements.forEach((el) => observer.observe(el));
hiddensElements.forEach((el) => observer.observe(el));
