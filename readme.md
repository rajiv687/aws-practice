# 🧠 Dummy API Caller with Node.js & TypeScript

This is a simple Node.js + TypeScript project that fetches data from a dummy API using `axios`, `async/await`, and TypeScript interfaces.

---

## 📦 Prerequisites

- Node.js (v20+ recommended)
- npm  installed globally

---

## 🚀 Getting Started

###  Clone the Repository (or create your own folder)

Initialize the Project

npm init -y


Install Dependencies<br>
npm install axios<br>
npm install --save-dev typescript ts-node


 Setup TypeScript<br>
 npx tsc --init


{
  "compilerOptions": {<br>
    "target": "ES2020",<br>
    "module": "commonjs",<br>
    "strict": true,<br>
    "esModuleInterop": true,<br>
    "skipLibCheck": true,<br>
    "forceConsistentCasingInFileNames": true<br>
  }<br>
}

---
🧾 Project Structure<br>

![alt text](assets/image.png)


---

▶️ Running the Code

npx ts-node index.ts

---

📄 Output
We should see a list of users fetched from the dummy API:
![alt text](assets/image-1.png)


---

📚 API Used
https://jsonplaceholder.typicode.com/users


---

📌 Features
Written in TypeScript

Uses axios for HTTP requests

Uses Promises, async/await

Includes TypeScript interfaces and types