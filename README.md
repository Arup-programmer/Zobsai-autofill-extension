# Autofill Chrome Extension

A simple Chrome extension for autofilling any forms with a single click.

## 🌟 Overview

This extension uses smart field detection to identify common job application inputs (Name, Email, Phone, and Skills) by analyzing labels, IDs, names, and placeholders.

## 🛠️ Setup & Installation

1. **Download/Clone** this repository to your local machine.
2. Open **Google Chrome** and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** using the toggle in the top-right corner.
4. Click the **Load unpacked** button.
5. Select the folder containing the extension files.

## 🚀 How to Use

1. Open any job application form or a testing page.
2. Click the **Zobsai Autofill** icon in your Chrome extension toolbar.
3. Click the **"Autofill Form"** button.
4. The extension will automatically populate the detected fields and show an alert with the total count.

## 💻 Tech Stack

- **JavaScript (ES6+)**: Core logic and DOM manipulation.
- **Chrome Extension API (MV3)**: Extension architecture and communication.
- **HTML/CSS**: Popup UI and visual feedback.

## 📂 Project Structure

- `manifest.json`: Extension configuration.
- `popup.html`: The user interface of the extension.
- `popup.js`: Logic to handle UI interactions.
- `content.js`: Logic injected into the webpage to detect and fill forms.
