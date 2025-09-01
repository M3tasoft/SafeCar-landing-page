# SafeCar Landing Page

## Summary
<p align="justify">
SafeCar Landing Page is the frontend presentation site for the SafeCar platform, an IoT vehicle maintenance system that connects drivers and mechanics. A smart device installed in the vehicle collects real-time data about the engine, brakes, tires, fuel consumption, and driving habits. Using this data, the platform generates personalized alerts, facilitates service appointment management, and recommends preventive maintenance. Mechanics receive automated reports through a specialized dashboard, enabling them to anticipate failures and optimize repairs.
</p>

## Features ✨
- **Responsive Landing Page** built with **HTML, CSS, and JavaScript**
- **Utility-first styling** using **TailwindCSS**
- **Customizable Sections** for product description, features, and contact
- **Scalable Project Structure** with separated folders for `styles`, `js`, and `assets`
- **Automatic Rebuild** of styles with Tailwind CLI in watch mode
- **Lightweight and Performant** output with optimized CSS

## TailwindCSS Configuration ⚙
The project uses the **Tailwind CLI** to compile styles.  

Add the following to your **tailwind.css** file:
```css
@tailwind tailwindcss
```

And configure the CLI to watch and build:
```bash
npx @tailwindcss/cli -i ./src/styles/tailwind.css -o ./src/styles/output.css --watch
```

## How to Run 🚀

1. Clone the repository:
```bash
git clone https://github.com/M3tasoft/SafeCar-landing-page.git
cd safecar-landing
```

2. Install dependencies (if using Tailwind via npm):
```bash
npm install
```

3. Start the Tailwind CLI in watch mode:
```bash
npx @tailwindcss/cli -i ./src/styles/tailwind.css -o ./src/styles/output.css --watch
```

4. Open <code>index.html</code> in your browser and you should see the landing page styled with Tailwind.

## Scripts 📜

For convenience, add this to your <code>package.json</code>:
```bash
"scripts": {
  "tw:watch": "tailwindcss -i ./src/styles/tailwind.css -o ./src/styles/output.css --watch"
}
```

Run it with:
```bash
npm run tw:watch
```

## Notes 📝

* Do not commit output.css to version control. Add it to <code>.gitignore</code>:
```bash
src/styles/output.css
```

* Always ensure your <code><link></code> in index.html points to the compiled file:
```bash
<link href="./src/styles/output.css" rel="stylesheet">
```

* Use npm run tw:watch during development so your changes are applied in real time.