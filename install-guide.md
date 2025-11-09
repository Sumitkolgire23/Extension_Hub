# Chrome Extension Deployment Guide

## Step-by-Step Installation (Chrome/Brave)

### 1. **Create the Extension Folder**
   - Create a new folder on your computer, e.g., `ExtensionManager`
   - This will be your extension's working directory

### 2. **Add All Required Files**
   Inside the `ExtensionManager` folder, create these files:
   
   ```
   ExtensionManager/
   ├── manifest.json
   ├── popup.html
   ├── popup.css
   ├── popup.js
   ├── background.js
   └── images/
       ├── icon-16.png
       ├── icon-48.png
       └── icon-128.png
   ```

### 3. **Create Icon Files** (Quick Alternative)
   If you don't have icons:
   - Use any **16x16**, **48x48**, and **128x128** PNG images
   - Or download placeholder icons from online sources
   - Place them in the `images/` folder inside `ExtensionManager`

### 4. **Load the Extension in Chrome**

   #### For Chrome:
   - Open Chrome
   - Go to `chrome://extensions/`
   - Enable **"Developer Mode"** (toggle in top-right corner)
   - Click **"Load unpacked"**
   - Select the `ExtensionManager` folder
   - Your extension will appear in the list!

   #### For Brave:
   - Open Brave
   - Go to `brave://extensions/`
   - Enable **"Developer Mode"** (toggle in top-right corner)
   - Click **"Load unpacked"**
   - Select the `ExtensionManager` folder
   - Your extension will appear in the list!

### 5. **Test the Extension**
   - Click the extension icon in the toolbar
   - A popup window should appear
   - You should see:
     - Search bar
     - Extension categories (Productivity, Security & Privacy, etc.)
     - Settings button (⚙️)
     - Tree view with domains and subdomains

### 6. **Test Key Features**
   - **Search**: Type in the search bar to filter extensions
   - **Expand/Collapse**: Click on categories/domains to expand
   - **View Details**: Click any extension to see details
   - **Theme Switch**: Go to Settings → Choose Dark/Ocean theme
   - **Add Custom**: Add your own extensions via Settings

### 7. **Troubleshooting**

   **"Extension not appearing?"**
   - Ensure all 5 files are in the same folder
   - Check Developer Mode is enabled
   - Refresh the extensions page

   **"Icons not showing?"**
   - Ensure `images/` folder exists with 3 PNG files
   - Size: 16x16, 48x48, 128x128 pixels

   **"Errors in console?"**
   - Open DevTools on the popup
   - Right-click extension icon → Inspect
   - Check the Console tab for errors

---

## File Descriptions

### `manifest.json`
- Core configuration file for the extension
- Defines permissions, popup UI, background worker
- Required for Chrome/Brave to recognize the extension

### `popup.html`
- Main user interface
- Contains search bar, categories tree, settings panel, details panel

### `popup.css`
- Styling for the entire extension
- Includes 3 color themes (light, dark, ocean)
- Responsive design for different popup sizes

### `popup.js`
- Main logic and interactivity
- Handles:
  - Tree rendering
  - Search functionality
  - Theme switching
  - Bookmarking extensions
  - Adding custom extensions
  - Local storage for settings

### `background.js`
- Service worker for the extension
- Handles:
  - Installation events
  - Message passing between popup and content
  - Extension management API calls

---

## Local Storage Features
- Bookmarks are saved locally in your browser
- Theme preference is remembered
- Custom folders and extensions are stored
- All data resets if you uninstall the extension

---

## Next Steps
1. **Customize**: Edit categories/domains/extensions in `popup.js`
2. **Add Real Icons**: Replace placeholder icons
3. **Publish to Chrome Web Store** (optional)
4. **Sync Across Devices**: Use Chrome Sync to sync your bookmarks

---

## Chrome Web Store Publishing (Optional)
To publish your extension:
1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard)
2. Click "Create new item"
3. Upload your extension as a .zip file
4. Fill in name, description, screenshots
5. Set pricing (free recommended)
6. Submit for review (takes 1-3 days)

---

## Support & Updates
- Keep your extension updated with new domains/subdomains
- Test thoroughly before publishing
- Check Chrome documentation for latest APIs

Happy coding! 🚀
