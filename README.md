# atm-simulator-javascript-logic
A secure, logic-based ATM Simulator built with pure JavaScript. It uses loops and switch-case conditions to handle transactions like balance checks, withdrawals, and deposits with PIN authentication.

markdown
# 🏦 Secure ATM Simulator (Pure JavaScript)

An interactive and secure ATM simulation program that demonstrates the practical use of **Loops**, **Conditional Statements**, and **State Management** in JavaScript.

## 🚀 Key Features
- **Pin Authentication:** Security check before every transaction (Balance, Withdraw, Deposit).
- **Attempt Limit:** System locks transactions after 3 incorrect PIN entries.
- **Dynamic Transactions:** Real-time balance updates after withdrawal and deposit.
- **Navigation:** Persistent menu loop until the user chooses to 'Exit'.

## 🛠️ Concepts Used
- **While Loop:** For continuous program execution and PIN validation.
- **Switch Case:** For handling multiple transaction options efficiently.
- **Conditionals (if-else):** For balance verification and PIN matching.
- **Data Types:** Managing integer values for balance and PIN.

## 💻 How to Use
1. Copy the code from `index.js`.
2. Open any modern web browser (Chrome/Edge).
3. Press `F12` or `Inspect` and go to the **Console** tab.
4. Paste the code and press **Enter**.
5. Default PIN is `1346`.

## 📂 File Structure
- `index.js`: Core logic of the ATM Simulator.
- `README.md`: Documentation and project details.

## 📝 Example Flow
1. **User Action:** Selects 'Withdraw'.
2. **System Prompt:** Asks for PIN.
3. **Validation:** If PIN is `1346`, asks for amount.
4. **Result:** Updates balance and shows success message.

---
Created for learning purposes - Part of my JavaScript Logic Series.
