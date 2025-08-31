document.querySelectorAll('.week-container').forEach(container => {
    container.addEventListener('click', function(e) {
       
        if (e.target.classList.contains('customize-link')) return;
      
        // hide link 
        document.querySelectorAll('.customize-link').forEach(link => {
            link.style.display = 'none';
            link.classList.remove('show');
        });

        // shows link 
        const customizeLink = this.querySelector('.customize-link');
        if (customizeLink) {
            customizeLink.style.display = 'inline-block';
            void customizeLink.offsetWidth;
            customizeLink.classList.add('show');
        }
    });
});

document.querySelectorAll('.customize-link').forEach(link => {
    link.addEventListener('click', function(e) {
        this.style.display = 'none';
        this.classList.remove('show');
    });
});