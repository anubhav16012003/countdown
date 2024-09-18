
    const targetDate = new Date("January 11, 2025 23:59:59").getTime();

    function updateCountdown(){
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if(timeLeft < 0){
            clearInterval(intervalId);
            alert("IPHONE 16 PRO 512GB WITH DESERT TITANIUM is all yours");
            alert("PROUD OF YOU AS YOU WORKED HARD FOR IT");
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60)).toString().padStart(2, '0');
        const seconds = Math.floor(timeLeft % (1000 * 60) / 1000).toString().padStart(2, '0');
        const timeString = `${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`;

        document.getElementById('timer').textContent = timeString;
    }

    const intervalId = setInterval(updateCountdown ,1000);
    updateCountdown();
