# E-Horses 🐴 🐎 🏇

## Demo Video
https://github.com/devham236/ehorses/assets/90037750/87afb2a4-b4cd-48d1-a071-a987512c1c76

## Lokale Installation
1. **Repository klonen:**
```bash
git clone https://github.com/devham236/ehorses.git
```

2. **Install the server dependencies:**
```bash
cd ./server
npm install
```

3. **Set up environment variables:**
Create a **.env** file in the **server** directory and add following variables:
```makefile
MONGO_URL=<Your mongodb connection sring/uri>
PORT=<Port Number>
JWT_KEY=<Your secret key for JWT>
```

4. **Start the server:**
```bash
npm start
```

5. **In a seperate Terminal, navigate to the client directory:**
```bash
cd ./client
```

6. **Install the frontend dependencies**
```bash
npm install
```

7. **Start the application:**
```bash
npm run dev
```


## Verwendete Technologien
* **React JS:** Eine komponentenbasierte Javascript Library für User Interfaces.
* **Tailwind CSS:** Ein utility-first CSS framework für schnelles stylen der Komponenten mittels inline-styles.
* **Framer Motion:** Eine Animations Library für React.
* **Node.js:** Eine Javascript runtime environment für Server seitige entwicklung.
* **Express.js:** Ein framework für Node.js
* **EsLint/Prettier:** Sorgt für einheitliche Formatierung des gesamten Codes.
