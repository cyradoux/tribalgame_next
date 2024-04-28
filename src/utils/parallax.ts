export const parallax = (e: MouseEvent, selector: string, isActive: boolean) => {
    document.querySelectorAll<HTMLImageElement>(selector).forEach(layer => {
        if(isActive){
            const speed = layer.getAttribute('data-speed');
            if(!speed) return;
            const x = (window.innerWidth - e.pageX*+speed)/100;
            const y = (window.innerHeight - e.pageY*+speed)/100;
            layer.style.transform = `translate(${x}px, ${y}px)`;
        } else {
            layer.style.transform = `translate(0px, 0px)`;
        }
    });
}