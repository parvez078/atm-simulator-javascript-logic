let correctPin = 1346;
let balance = 10000;
const MAX_ATTEMPTS = 3; 

// मुख्य प्रोग्राम लूप
while (true) {
    let option = Number(prompt("ATM Menu:\n1. Check Balance\n2. Withdraw\n3. Deposit\n4. Exit"));

    // 4 दबाने पर बाहर निकलें
    if (option === 4) {
        alert("Exiting... Thank you!");
        break; 
    }

    let authenticated = false;
    let attempts_made = 0;

    // पिन वेरिफिकेशन के लिए छोटा लूप
    while (attempts_made < MAX_ATTEMPTS) {
        let userPin = Number(prompt(`Enter PIN for transaction (Attempt ${attempts_made + 1}/${MAX_ATTEMPTS}):`));
        
        if (userPin === correctPin) {
            authenticated = true;
            break; // सही पिन, पिन लूप बंद
        } else {
            alert("Wrong PIN! Try again.");
            attempts_made++;
        }
    }

    // अगर पिन सही है, तो चुने गए विकल्प पर काम करें
    if (authenticated) {
        switch (option) {
            case 1:
                alert(`Current Balance: ${balance}`);
                break;
            case 2:
                let withdraw = Number(prompt("Enter amount to withdraw:"));
                if (withdraw > 0 && withdraw <= balance) {
                    balance -= withdraw;
                    alert(`Success! New Balance: ${balance}`);
                } else if (withdraw > balance) {
                    alert("Insufficient balance!");
                } else {
                    alert("Invalid amount.");
                }
                break;
            case 3:
                let deposit = Number(prompt("Enter amount to deposit:"));
                if (deposit > 0) {
                    balance += deposit;
                    alert(`Success! New Balance: ${balance}`);
                } else {
                    alert("Invalid amount.");
                }
                break;
            default:
                alert("Invalid Option selected.");
        }
    } else {
        // अगर 3 बार गलत पिन डाला तो
        alert("Too many incorrect PIN attempts. Transaction cancelled.");
 
    }
}