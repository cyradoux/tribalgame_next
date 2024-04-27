export const preventDefault = (e: Event) => {
    e.preventDefault();
}
export const blockScroll = () => {
    window.addEventListener('scroll', preventDefault, { passive: false });
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
}

export const unblockScroll = () => {
    window.removeEventListener('scroll', preventDefault);
    window.removeEventListener('wheel', preventDefault);
    window.removeEventListener('touchmove', preventDefault);
}