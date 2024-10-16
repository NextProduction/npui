# **🧩 [NPUI](https://nextproduction.dev/npui)  - Open Component Library**

**npui** is an open-source component library designed to allow developers to easily add and modify UI components directly into their project directories. Each component is created from scratch, styled with **Tailwind CSS**, and is fully customizable.

npui provides an easy-to-use CLI tool that allows you to quickly add components to your project without needing to install the entire library. Simply run a command like `npx npui add table`, and the specified component will be added directly to your project.

---

## **Features**
- **Tailwind CSS Styling**: All components are built using Tailwind CSS to ensure flexibility and customization.
- **Direct Component Addition**: Easily add components directly to your project directory using the CLI.
- **Component-Specific Dependencies**: Install only the dependencies that your components need.
- **Open for Modification**: Modify components as needed in your own project without the limitations of working within `node_modules`.

---

## **Getting Started**

To start using npui, follow these simple steps.

### **1. Install Components Using CLI**

You can add any component from npui directly to your project with the following command:

```bash
npx npui add <component-name>
```

For example, to add a `Table` component:

```bash
npx npui add table
```

This command will:
- Fetch the **Table.jsx** component from the GitHub repository.
- Create an `npui/` directory in your project if it doesn't already exist.
- Add the `Table.jsx` file to the `npui/` directory.
- Install any necessary dependencies for the component (e.g., `react-table`, `classnames`).

---

## **Example Usage**

1. After running `npx npui add table`, you can import the component in your project like this:

```jsx
// src/App.js
import Table from './npui/Table';

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
```

2. You can customize the `Table.jsx` component directly in your project’s `npui/` directory.

---

## **Available Components**

Currently, npui offers the following components (with more to come):
- **Button**
- **Table**
- **Modal**
- **Form**

### **To see the full list** of components and their documentation, please visit the [npui Documentation](https://nextproduction.dev/npui).

---

## **Installation**

There’s no need to install the entire npui library. Simply use the CLI command mentioned earlier to add specific components to your project.

However, if you want to install the CLI globally for faster access, you can install it via npm:

```bash
npm install -g npui
```

Then, use the CLI without `npx`:

```bash
npui add button
```

---

## **Tailwind CSS Setup**

Since all components are styled with Tailwind CSS, you need to ensure Tailwind is properly set up in your project. If you haven't set up Tailwind yet, follow these steps:

1. **Install Tailwind via npm:**
   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```

2. **Configure `tailwind.config.js`:**
   ```js
   module.exports = {
     content: [
       './src/**/*.{js,jsx,ts,tsx}',
       './npui/**/*.{js,jsx}', // Include npui components
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. **Add Tailwind to your CSS:**
   In your main CSS file (e.g., `src/index.css`), include the following:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

## **Contributing**

We welcome contributions from the community! If you’d like to contribute to npui, please follow these steps:

1. **Fork** the repository.
2. Create a **new branch** for your feature or bug fix.
3. Submit a **pull request** with a description of your changes.

### **Development Guide**

1. Clone the repository:
   ```bash
   git clone https://github.com/nextproduction/npui.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the CLI locally:
   ```bash
   npm link
   npui add <component>
   ```

4. Develop new components or improve existing ones in the `packages/` directory.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Roadmap**

- **Component Expansion**: Continue adding more components like `Navbar`, `Card`, `Accordion`, etc.
- **Component Viewer**: Integrate Storybook for easy preview of all components.
- **Design System**: Grow npui into a full design system.
- **More Documentation**: Provide extensive guides and tutorials for using npui.

---

## **Contact**

If you have any questions or issues, feel free to open an issue on GitHub or contact us via [mahdi@nextproduction.dev](https://mahdi@nextproduction.dev).

---

**Start building beautiful UIs today with npui!**
