document.querySelectorAll('.nav-dropdown')
    .forEach(el => el.addEventListener('click', handleClick))


    function handleClick(e) {
        
        e.preventDefault()
        const classList = e.currentTarget.classList

        const isOpen = classList.contains('nav-dropdown--open')
        if (isOpen) {
            classList.remove('nav-dropdown--open')
        } else {
            classList.add('nav-dropdown--open')
        }
    }