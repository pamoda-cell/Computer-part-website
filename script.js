document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('bg-dark/95', 'backdrop-blur-md', 'border-b', 'border-gray-800', 'shadow-lg');
                navbar.classList.remove('bg-transparent');
            } else {
                // Only remove if we are on homepage to keep it transparent at top
                if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
                    navbar.classList.remove('bg-dark/95', 'backdrop-blur-md', 'border-b', 'border-gray-800', 'shadow-lg');
                }
            }
        });
    }

    // Simple Add to Cart Animation
    const cartButtons = document.querySelectorAll('.fa-shopping-cart');
    const cartBadge = document.querySelector('.fa-shopping-cart').nextElementSibling;
    let cartCount = 0;

    cartButtons.forEach(btn => {
        // Skip the header cart icon itself
        if(!btn.parentElement.classList.contains('hover:text-white') || btn.parentElement.classList.contains('bg-white')) {
            btn.parentElement.addEventListener('click', (e) => {
                e.preventDefault();
                cartCount++;
                if (cartBadge) {
                    cartBadge.textContent = cartCount;
                    cartBadge.classList.add('scale-125');
                    setTimeout(() => {
                        cartBadge.classList.remove('scale-125');
                    }, 200);
                }
                
                // Show notification
                showNotification('Product added to cart!');
            });
        }
    });

    // Helper for notification
    function showNotification(message) {
        const notif = document.createElement('div');
        notif.className = 'fixed bottom-4 right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-y-10 opacity-0 z-50';
        notif.textContent = message;
        
        document.body.appendChild(notif);
        
        setTimeout(() => {
            notif.classList.remove('translate-y-10', 'opacity-0');
        }, 10);

        setTimeout(() => {
            notif.classList.add('translate-y-10', 'opacity-0');
            setTimeout(() => notif.remove(), 300);
        }, 3000);
    }
});
