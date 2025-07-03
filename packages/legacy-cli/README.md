# 🧩 npui cli

`npui` is a command-line interface (CLI) tool designed for easy integration of reusable UI components into your projects. Built with simplicity and flexibility in mind, `npui` allows developers to quickly add, update, remove, and list components from the NextProduction repository directly in their own projects.

## Features

- **Download Components**: Fetch UI components directly from the GitHub repository.
- **Update Components**: Keep your components up to date with the latest changes.
- **Remove Components**: Easily delete components from your project.
- **List Components**: View all downloaded components at a glance.
- **Version Info**: Check the current version of `npui`.
- **Help Command**: Get usage instructions directly from the CLI.

## Installation

You can install `npui` globally or use it directly with `npx` without installation.

### Using npx

To use `npui` directly, run the following command:

```bash
npx npui <command> <ComponentName>
```

### Installing Globally

If you prefer to install `npui` globally, you can run:

```bash
npm install -g npui
```

## Usage

Here's a breakdown of available commands:

### `add <ComponentName>`

Download a specified component to your project.

```bash
npx npui add Table
```

### `update <ComponentName>`

Update an existing component to the latest version.

```bash
npx npui update Table
```

### `remove <ComponentName>`

Remove a specified component from your project.

```bash
npx npui remove Table
```

### `list`

List all components downloaded to your project.

```bash
npx npui list
```

### `version`

Display the current version of `npui`.

```bash
npx npui version
```

### `help`

Show usage instructions for `npui`.

```bash
npx npui help
```


## Example

Here's a complete example of how to use `npui`:

1. **Add a component**:
    ```bash
    npx npui add Button
    ```

2. **List downloaded components**:
    ```bash
    npx npui list
    ```

3. **Update a component**:
    ```bash
    npx npui update Button
    ```

4. **Remove a component**:
    ```bash
    npx npui remove Button
    ```

## Contribution

Contributions are welcome! If you have suggestions for improvements or want to report bugs, feel free to create an issue or submit a pull request on the [GitHub repository](https://github.com/NextProduction/npui).



## Acknowledgments

- Thanks to [Node.js](https://nodejs.org/) for providing a powerful platform for building command-line applications.
- Inspired by the open-source community for fostering collaboration and innovation.
