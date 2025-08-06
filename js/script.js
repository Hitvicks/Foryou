// Create floating hearts
        function createHearts() {
            const container = document.getElementById('hearts-container');
            for (let i = 0; i < 20; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = Math.random() * 100 + 'vh';
                heart.style.width = (Math.random() * 20 + 10) + 'px';
                heart.style.height = heart.style.width;
                heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
                heart.style.animationDelay = (Math.random() * 5) + 's';
                container.appendChild(heart);
            }
        }

        // Create confetti
        function createConfetti() {
            const container = document.getElementById('confetti-container');
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = -10 + 'px';
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
                confetti.style.width = (Math.random() * 10 + 5) + 'px';
                confetti.style.height = (Math.random() * 10 + 5) + 'px';
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                confetti.style.animationDelay = (Math.random() * 5) + 's';
                container.appendChild(confetti);
            }
        }

        // Initialize animations with error handling
        document.addEventListener('DOMContentLoaded', () => {
            try {
                createHearts();
                createConfetti();
                
                // Add click effect
                document.addEventListener('click', (e) => {
                    const x = e.clientX;
                    const y = e.clientY;
                    
                    const heart = document.createElement('div');
                    heart.classList.add('heart');
                    heart.style.left = x + 'px';
                    heart.style.top = y + 'px';
                    heart.style.width = '30px';
                    heart.style.height = '30px';
                    heart.style.animation = 'none';
                    heart.style.opacity = '1';
                    
                    document.getElementById('hearts-container').appendChild(heart);
                    
                    setTimeout(() => {
                        heart.style.transition = 'all 0.5s ease';
                        heart.style.transform = 'rotate(45deg) scale(2)';
                        heart.style.opacity = '0';
                        
                        setTimeout(() => {
                            heart.remove();
                        }, 500);
                    }, 10);
                });
            } catch (e) {
                console.error('Error initializing animations:', e);
            }
        });
document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('background-music');
    // Coba putar musik saat halaman dimuat
    backgroundMusic.play().catch(error => {
        // Jika autoplay diblokir, coba putar setelah interaksi pengguna
        console.log('Autoplay diblokir. Musik akan diputar setelah interaksi pengguna.');
        document.body.addEventListener('click', () => {
            backgroundMusic.play();
        }, { once: true }); // Hanya jalankan sekali
    });
});