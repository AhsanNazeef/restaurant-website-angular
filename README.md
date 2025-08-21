# 🍽️ Restaurant Website Angular

A modern, responsive restaurant website built with Angular. Features include online reservations, team showcase, testimonials, contact form, and more.  
Designed for performance, accessibility, and a delightful user experience.

---

## 🚀 Features

- **Home Page:** Hero section, details, about us, popular menu, reservations, team members, testimonials.
- **Online Reservations:** Book a table with validation and confirmation dialog.
- **Contact Page:** Contact info, embedded map, and a validated contact form.
- **Team Showcase:** Meet the master chefs with social links.
- **Testimonials:** Client feedback carousel.
- **Back to Top Button:** Smooth scroll, visible only when needed.
- **Responsive Design:** Mobile-first, adapts to all screen sizes.
- **FontAwesome Icons:** Beautiful icons throughout the site.
- **Optimized Images:** Lazy loading and modern formats for fast performance.

---

## 📁 Project Structure

```
src/
  app/
    home/           # Home page modules & components
    contact/        # Contact page modules & components
    shared/         # Shared UI components (navbar, footer, button, cards, etc.)
  assets/
    fonts/          # Custom fonts
    images/         # Site images
  styles.scss       # Global styles
  index.html        # App entry point
public/
  logo.png          # Favicon/logo
.angular/
.vscode/
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Angular CLI](https://angular.dev/tools/cli)

### Installation

```bash
npm install
```

### Development Server

```bash
ng serve
```
Visit [http://localhost:4200](http://localhost:4200) in your browser.

### Building for Production

```bash
ng build
```
Builds the app for production in the `dist/` folder.

---

## 🧪 Testing

### Unit Tests

```bash
ng test
```

### End-to-End Tests

```bash
ng e2e
```

---

## ✨ Customization

- **Global Styles:** Edit [`src/styles.scss`](src/styles.scss)
- **Images:** Replace or optimize images in [`src/assets/images/`](src/assets/images/)
- **Fonts:** Add custom fonts in [`src/assets/fonts/`](src/assets/fonts/)
- **Components:** Extend or modify shared components in [`src/app/shared/`](src/app/shared/)

---

## 📦 Dependencies

- Angular 19
- FontAwesome
- SCSS

---

## 🌐 Deployment

- Build with `ng build --configuration production`
- Deploy the contents of `dist/restaurant-website-angular` to your preferred hosting (Netlify, Vercel, Firebase, etc.)


---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

> _Made with ❤️ by your team using Angular_
