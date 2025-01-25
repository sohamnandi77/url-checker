# [URL Checker Extension](https://github.com/sohamnandi77/url-checker) &middot; [![Author Soham](https://img.shields.io/badge/Author-Soham-%3C%3E)](https://www.sohamnandi.com)

The **URL Checker Extension** is a powerful browser extension designed to enhance your online safety by allowing you to check URLs for malicious content and unshorten shortened URLs to reveal their original destinations. Built using WXT and React, this extension provides a user-friendly interface and a range of features to ensure a secure browsing experience.

## Features

- **Scan URL for Malicious Content**: Quickly check any URL against known threats using the VirusTotal API to ensure your safety while browsing.
- **Unshorten Short URLs**: Easily expand shortened URLs to see the full link before clicking, helping you avoid potentially harmful sites.
- **Light and Dark Mode**: Choose between a light or dark theme to suit your browsing preferences and improve visibility.
- **Right Click Context Menu**: Access the extension's features directly from the context menu for a seamless user experience.

## Tech/Framework Used

The URL Checker Extension is built with the following technologies:

- **WXT**: A framework for building web applications.
- **React**: A JavaScript library for building user interfaces.
- **Shadcn/ui**: A component library for building UI elements.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Vite**: A build tool that provides a fast development environment.
- **VirusTotal API**: An API that allows you to scan URLs for malicious content.

## Getting Started

To get started with the URL Checker Extension, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/sohamnandi77/url-checker.git
   cd url-checker
   ```

2. **Set Up Environment Variables**:
   Open the [.env.example](/.env.example) file and fill in your VirusTotal API key. Save the file as `.env`.

3. **Install Dependencies**:
   Run the following commands to install the necessary dependencies:

   ```bash
   pnpm install
   ```

4. **Run the Development Server**:
   Start the development server with:
   ```bash
   pnpm dev
   ```

## Screenshots

Here are some screenshots showcasing the extension's features:

#### Light Mode

![Light mode](/screenshots/screenshot-1.png)

#### Dark Mode

![Dark mode](/screenshots/screenshot-2.png)

#### Scan URL Result

![Scan URL result](/screenshots/screenshot-3.png)

#### Context Menu

![Context menu](/screenshots/screenshot-4.png)

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For more information, visit the [project repository](https://github.com/sohamnandi77/url-checker) or contact the author [Soham](https://www.sohamnandi.com). Happy browsing!
