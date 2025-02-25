# 1️⃣ Create the React app

npx create-react-app quiz
cd quiz
code .

# 2️⃣ Install Tailwind CSS

npm install tailwindcss
npx tailwindcss init

# 3️⃣ Fix issues & update packages

npm audit fix --force
npm install react-scripts@latest webpack@latest

# 4️⃣ Configure Tailwind CSS

echo "module.exports = {
content: ['./src/**/*.{js,jsx,ts,tsx}'],
theme: { extend: {} },
plugins: [],
};" > tailwind.config.js

echo "@tailwind base;
@tailwind components;
@tailwind utilities;" > src/index.css

touch postcss.config.js
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss

# 5️⃣ Clean & reinstall dependencies

rm -rf node_modules package-lock.json
npm install

# 6️⃣ Start the development server

export NODE_OPTIONS=--openssl-legacy-provider
npm start

# 7️⃣ Initialize Git & push to GitHub

git init
git add .
git commit -m "Initial commit: React quiz app"
git remote add origin https://github.com/bunlongheng/quiz.git
git branch -M main
git push -u origin main

# 8️⃣ Switch to SSH for GitHub authentication

ssh -T git@github.com
git remote set-url origin git@github.com:bunlongheng/quiz.git
git push -u origin main

# 9️⃣ Install & authenticate GitHub CLI

brew install gh
gh auth login
gh repo create quiz --public --source=. --remote=origin
git push -u origin main
