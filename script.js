document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.getElementById('openButton');
    const birthdayCard = document.getElementById('birthdayCard');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const toggleMusicButton = document.getElementById('toggleMusicButton');

    let isPlaying = false;

    // Sự kiện khi click vào nút "Mở Thiệp"
    openButton.addEventListener('click', () => {
        birthdayCard.classList.toggle('open');
        // Nếu thiệp đã mở và nhạc chưa phát, tự động phát nhạc
        if (birthdayCard.classList.contains('open') && !isPlaying) {
            backgroundMusic.play().then(() => {
                isPlaying = true;
                toggleMusicButton.textContent = '🔇 Tắt Nhạc 🔇';
            }).catch(error => {
                console.log("Tự động phát nhạc bị chặn:", error);
                // Hiển thị nút để người dùng tự bấm
                toggleMusicButton.textContent = '🎶 Bật Nhạc 🎶';
            });
        } else if (!birthdayCard.classList.contains('open') && isPlaying) {
            // Nếu thiệp đóng lại và nhạc đang phát thì dừng nhạc
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
            isPlaying = false;
            toggleMusicButton.textContent = '🎶 Nhạc Nền 🎶';
        }
    });

    // Sự kiện khi click vào nút "Bật/Tắt Nhạc"
    toggleMusicButton.addEventListener('click', () => {
        if (isPlaying) {
            backgroundMusic.pause();
            toggleMusicButton.textContent = '🎶 Nhạc Nền 🎶';
        } else {
            backgroundMusic.play();
            toggleMusicButton.textContent = '🔇 Tắt Nhạc 🔇';
        }
        isPlaying = !isPlaying;
    });
});