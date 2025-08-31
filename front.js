document.querySelectorAll('.week-container').forEach(container => {
    container.addEventListener('click', function(e) {
       
        if (e.target.classList.contains('customize-link')) return;
      
        // hide link 
        document.querySelectorAll('.customize-link').forEach(link => {
            link.style.display = 'none';
            link.classList.remove('show');
        });

        // shows link 
        const links = this.querySelectorAll('.customize-link');
        links.forEach(link => {
            link.style.display = 'inline-block';
            void link.offsetWidth; // trigger reflow for animation
            link.classList.add('show');
        });
    });
});

document.querySelectorAll('.customize-link').forEach(link => {
    link.addEventListener('click', function(e) {
        this.style.display = 'none';
        this.classList.remove('show');
    });
});