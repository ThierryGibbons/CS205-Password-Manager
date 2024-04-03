# Passwords Made Easy

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (version 12.x or above)
- npm (latest version)

You can check your node and npm versions with the following commands:

```
node -v
npm -v
```

## Installation

Follow these steps to install **Project Name**:

1. Clone the repository:
```
git clone https://github.com/ThierryGibbons/CS205-Password-Manager.git
```

2. Navigate to the project directory:
```
cd './Passwords Made Easy'
```

3. Install dependencies with npm:
```
npm install
```
4. Create a Python virtual environment for the Flask backend:
```
python3 -m venv venv
```
5. Activate the virtual environment:

On Windows 
```
.\venv\Scripts\activate
```
On macOS/Linux
```
source venv/bin/activate
```
6. Install Flask within the virtual environment:
```
pip install Flask
```

## Running the Project

After installation, you can run the project locally:

Frontend
```
npm run dev
```
Backend
```
python3 app.py
```


This command will start a local development server.

## Building for Production

### Website

Within the `Passwords Made Easy` directory, run:
```
npm run build
```

This will generate a `dist/` directory with your compiled project.

Move this dist/ directory to the `Server` directory.

Within the `Server` directory, open the virtual environment and run:
```
flask run
```

### Extension

Within the `Extension` directory, run:
```
npm run build
```

This will generate a `dist/` directory with your compiled project.

To load the extension into Chrome, navigate to `chrome://extensions/` and enable Developer Mode.

Click "Load unpacked" and select the `dist/` directory.

## Contributing

Commit Guidelines:
https://dev.to/ishanmakadia/git-commit-message-convention-that-you-can-follow-1709