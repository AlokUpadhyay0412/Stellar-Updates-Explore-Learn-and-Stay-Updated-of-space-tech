// JavaScript for the chatbot

let isChatbotOpen = false;

// Toggle Chatbot
function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbot-window');
    if (isChatbotOpen) {
        chatbotWindow.classList.add('chatbot-hidden');
        isChatbotOpen = false;
    } else {
        chatbotWindow.classList.remove('chatbot-hidden');
        isChatbotOpen = true;
    }
}

// Sending message
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        displayMessage('User', userInput);
        chatbotReply(userInput); // Simulate chatbot response
    }
    document.getElementById('user-input').value = ''; // Clear input field
}

// Display message in chatbot window
function displayMessage(sender, message) {
    const messageContainer = document.getElementById('chatbot-messages');
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', sender);
    newMessage.textContent = message;
    messageContainer.appendChild(newMessage);
    messageContainer.scrollTop = messageContainer.scrollHeight; // Auto-scroll to the bottom
}

// Simulate chatbot response
function chatbotReply(userMessage) {
    let reply = "Sorry, I didn't understand that.";

    // Simple response logic (replace this with AI backend)
    if (userMessage.toLowerCase().includes('space')) {
        reply = "Space is fascinating! What do you want to learn about?";
    }

    // Display chatbot reply
    displayMessage('Chatbot', reply);
    speak(reply); // Speak the reply
}

// Audio Integration
function startSpeechRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        displayMessage('User', transcript);
        chatbotReply(transcript);
    };

    recognition.onerror = function(event) {
        console.error(event.error);
    };
}

// Text-to-Speech
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
