(function () {
    const header = document.getElementById('siteHeader');
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('mainNav');
    const yearEl = document.getElementById('year');

    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const backTop = document.getElementById('backToTop');

    const onScroll = () => {
        if (window.scrollY > 20) header.classList.add('is-scrolled');
        else header.classList.remove('is-scrolled');

        if (backTop) {
            if (window.scrollY > window.innerHeight * 0.6) {
                backTop.classList.add('is-visible');
            } else {
                backTop.classList.remove('is-visible');
            }
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    if (backTop) {
        backTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (toggle && nav) {
        const setState = (open) => {
            nav.classList.toggle('is-open', open);
            toggle.classList.toggle('is-open', open);
            header.classList.toggle('menu-open', open);
            toggle.setAttribute('aria-expanded', String(open));
            toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
            document.body.style.overflow = open ? 'hidden' : '';
        };

        toggle.addEventListener('click', () => {
            setState(!nav.classList.contains('is-open'));
        });

        nav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => setState(false));
        });
    }
})();
