# 🧩 npui cli

**npui** is a CLI tool for easily adding React components from the **npui** component library to your project. It allows developers to download and install specific components from the `npui` GitHub repository directly into their app's local directory.

## Features

- Easily download and add individual components from the **npui** component library.
- Creates a local `npui` folder in your project to organize components.
- Simple command-line interface with intuitive usage.

## Installation

To use **npui**, you need to have [Node.js](https://nodejs.org/) installed on your machine.

### Step 1: Install via `npx`

You don't need to install the package globally. Just use it directly with `npx`:

```bash
npx npui add <ComponentName>
```

### Example:

To download the `Table` component from the npui component library and add it to your project:

```bash
npx npui add Table
```

This will create the following structure in your project:

```
your-app/
│
├── npui/
│   └── Table/
│       └── Table.tsx
```

## How It Works

- When you run the command `npx npui add <ComponentName>`, the CLI will:
  - Create an `npui` directory (if it doesn't exist) in your project root.
  - Download the specified component from the **npui** GitHub repository.
  - Place the component files in the appropriate folder under the `npui` directory.

## GitHub Repository

The **npui** components are hosted on GitHub:  
[NextProduction/npui](https://github.com/NextProduction/npui)

You can browse the available components and their code in the repository.

## Commands

- **Add a component:**

  ```bash
  npx npui add <ComponentName>
  ```

  Downloads the specified component from the **npui** library and places it in your project.

## Contributing

We welcome contributions! If you'd like to contribute to the **npui** library, please feel free to submit a pull request on our GitHub repository.

## License

This project is licensed under the GPL-3.0-or-later License.

---

**Maintained by [NextProduction](https://github.com/NextProduction)**  
Created by [Mahdi Hazrati](https://github.com/mahdi-hazrati)
