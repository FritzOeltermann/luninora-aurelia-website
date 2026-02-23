export function reveal(node: HTMLElement, options?: { threshold?: number; rootMargin?: string }) {
	const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReduced) {
		node.classList.add('revealed');
		return {};
	}

	node.classList.add('reveal');

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('revealed');
					observer.unobserve(entry.target);
				}
			}
		},
		{
			threshold: options?.threshold ?? 0.15,
			rootMargin: options?.rootMargin ?? '0px 0px -40px 0px'
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
