export function observeOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle('show', entry.isIntersecting);
        });
    });
    const utils = document.querySelectorAll('[scroll-anim]');
    utils.forEach((util) => {
        if (util.checkVisibility()) {
            util.classList.add('hidden');
        }
    });
    utils.forEach((util) => {
        observer.observe(util);
    });
    return () =>
        utils.forEach((util) => {
            observer.unobserve(util);
        });
}
