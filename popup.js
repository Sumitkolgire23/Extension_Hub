// ==================== DATA STRUCTURE ====================
const EXTENSION_DATA = {
    categories: [
        {
            id: 'productivity',
            name: 'Productivity',
            emoji: '⚡',
            domains: [
                {
                    id: 'time-management',
                    name: 'Time Management',
                    subdomains: [
                        {
                            id: 'pomodoro',
                            name: 'Pomodoro Timers',
                            extensions: [
                                { id: 1, name: 'Focus To-Do', url: 'https://chrome.google.com/webstore' },
                                { id: 2, name: 'Marinara Timer', url: 'https://chrome.google.com/webstore' },
                                { id: 3, name: 'Pomodone', url: 'https://chrome.google.com/webstore' },
                                { id: 4, name: 'Tomato Timer', url: 'https://chrome.google.com/webstore' },
                                { id: 5, name: 'Strict Workflow', url: 'https://chrome.google.com/webstore' },
                                { id: 6, name: 'PomoDone App', url: 'https://chrome.google.com/webstore' },
                                { id: 7, name: 'Be Focused', url: 'https://chrome.google.com/webstore' },
                                { id: 8, name: 'Focus Booster', url: 'https://chrome.google.com/webstore' },
                                { id: 9, name: 'Pomello', url: 'https://chrome.google.com/webstore' },
                                { id: 10, name: 'Pomofocus', url: 'https://chrome.google.com/webstore' }
                            ]
                        },
                        {
                            id: 'calendar',
                            name: 'Calendar Sync',
                            extensions: [
                                { id: 11, name: 'Google Calendar', url: 'https://chrome.google.com/webstore' },
                                { id: 12, name: 'Checker Plus', url: 'https://chrome.google.com/webstore' },
                                { id: 13, name: 'Outlook Calendar', url: 'https://chrome.google.com/webstore' },
                                { id: 14, name: 'Calendar Plus', url: 'https://chrome.google.com/webstore' },
                                { id: 15, name: 'Zoho Calendar', url: 'https://chrome.google.com/webstore' },
                                { id: 16, name: 'Teamup', url: 'https://chrome.google.com/webstore' },
                                { id: 17, name: 'Calendar Tabs', url: 'https://chrome.google.com/webstore' },
                                { id: 18, name: 'Fantastical', url: 'https://chrome.google.com/webstore' },
                                { id: 19, name: 'Any.do', url: 'https://chrome.google.com/webstore' },
                                { id: 20, name: 'Cron', url: 'https://chrome.google.com/webstore' }
                            ]
                        },
                        {
                            id: 'focus',
                            name: 'Focus Blockers',
                            extensions: [
                                { id: 21, name: 'StayFocusd', url: 'https://chrome.google.com/webstore' },
                                { id: 22, name: 'Freedom', url: 'https://chrome.google.com/webstore' },
                                { id: 23, name: 'BlockSite', url: 'https://chrome.google.com/webstore' },
                                { id: 24, name: 'LeechBlock', url: 'https://chrome.google.com/webstore' },
                                { id: 25, name: 'Forest', url: 'https://chrome.google.com/webstore' },
                                { id: 26, name: 'WasteNoTime', url: 'https://chrome.google.com/webstore' },
                                { id: 27, name: 'Cold Turkey', url: 'https://chrome.google.com/webstore' },
                                { id: 28, name: 'Pause', url: 'https://chrome.google.com/webstore' },
                                { id: 29, name: 'FocalFilter', url: 'https://chrome.google.com/webstore' },
                                { id: 30, name: 'Self Control', url: 'https://chrome.google.com/webstore' }
                            ]
                        },
                        {
                            id: 'notes',
                            name: 'Notes & Bookmarking',
                            extensions: [
                                { id: 31, name: 'Notion Web Clipper', url: 'https://chrome.google.com/webstore' },
                                { id: 32, name: 'Evernote Web Clipper', url: 'https://chrome.google.com/webstore' },
                                { id: 33, name: 'OneTab', url: 'https://chrome.google.com/webstore' },
                                { id: 34, name: 'Raindrop.io', url: 'https://chrome.google.com/webstore' },
                                { id: 35, name: 'Pocket', url: 'https://chrome.google.com/webstore' },
                                { id: 36, name: 'Diigo', url: 'https://chrome.google.com/webstore' },
                                { id: 37, name: 'Microsoft Onenote', url: 'https://chrome.google.com/webstore' },
                                { id: 38, name: 'Session Buddy', url: 'https://chrome.google.com/webstore' },
                                { id: 39, name: 'Bookmark Manager', url: 'https://chrome.google.com/webstore' },
                                { id: 40, name: 'Tag Spaces', url: 'https://chrome.google.com/webstore' }
                            ]
                        },
                        {
                            id: 'reading',
                            name: 'Reading & Research',
                            extensions: [
                                { id: 41, name: 'Mercury Reader', url: 'https://chrome.google.com/webstore' },
                                { id: 42, name: 'Reader View', url: 'https://chrome.google.com/webstore' },
                                { id: 43, name: 'Liner', url: 'https://chrome.google.com/webstore' },
                                { id: 44, name: 'Hypothesis', url: 'https://chrome.google.com/webstore' },
                                { id: 45, name: 'Glasp', url: 'https://chrome.google.com/webstore' },
                                { id: 46, name: 'PDF Viewer', url: 'https://chrome.google.com/webstore' },
                                { id: 47, name: 'Save to Pocket', url: 'https://chrome.google.com/webstore' },
                                { id: 48, name: 'Kami', url: 'https://chrome.google.com/webstore' },
                                { id: 49, name: 'Grammarly', url: 'https://chrome.google.com/webstore' },
                                { id: 50, name: 'Copy as Markdown', url: 'https://chrome.google.com/webstore' }
                            ]
                        }
                    ]
                },
                {
                    id: 'tabs',
                    name: 'Tab Management',
                    subdomains: [
                        {
                            id: 'tab-organizer',
                            name: 'Tab Groups',
                            extensions: [
                                { id: 51, name: 'Tab Manager Plus', url: 'https://chrome.google.com/webstore' },
                                { id: 52, name: 'OneTab', url: 'https://chrome.google.com/webstore' },
                                { id: 53, name: 'Tab Suspender', url: 'https://chrome.google.com/webstore' },
                                { id: 54, name: 'Auto Tab Discard', url: 'https://chrome.google.com/webstore' },
                                { id: 55, name: 'The Great Suspender', url: 'https://chrome.google.com/webstore' },
                                { id: 56, name: 'Session Manager', url: 'https://chrome.google.com/webstore' },
                                { id: 57, name: 'Session Buddy', url: 'https://chrome.google.com/webstore' },
                                { id: 58, name: 'Tab Restore', url: 'https://chrome.google.com/webstore' },
                                { id: 59, name: 'Multi-Tab Helper', url: 'https://chrome.google.com/webstore' },
                                { id: 60, name: 'Tab Counter', url: 'https://chrome.google.com/webstore' }
                            ]
                        },
                        {
                            id: 'tab-search',
                            name: 'Tab Search',
                            extensions: [
                                { id: 61, name: 'Tab Search', url: 'https://chrome.google.com/webstore' },
                                { id: 62, name: 'Vimium', url: 'https://chrome.google.com/webstore' },
                                { id: 63, name: 'Tab Finder', url: 'https://chrome.google.com/webstore' },
                                { id: 64, name: 'Find Tabs', url: 'https://chrome.google.com/webstore' },
                                { id: 65, name: 'Tab Navigator', url: 'https://chrome.google.com/webstore' },
                                { id: 66, name: 'Quick Tabs', url: 'https://chrome.google.com/webstore' },
                                { id: 67, name: 'Tab Switcher', url: 'https://chrome.google.com/webstore' },
                                { id: 68, name: 'Ctrl+1', url: 'https://chrome.google.com/webstore' },
                                { id: 69, name: 'Tab Master', url: 'https://chrome.google.com/webstore' },
                                { id: 70, name: 'Tab Command', url: 'https://chrome.google.com/webstore' }
                            ]
                        },
                        {
                            id: 'tab-pinning',
                            name: 'Pinned Tabs',
                            extensions: [
                                { id: 71, name: 'Pin Tabs', url: 'https://chrome.google.com/webstore' },
                                { id: 72, name: 'Sticky Tabs', url: 'https://chrome.google.com/webstore' },
                                { id: 73, name: 'Pinned Tab Manager', url: 'https://chrome.google.com/webstore' },
                                { id: 74, name: 'Tab Pinning', url: 'https://chrome.google.com/webstore' },
                                { id: 75, name: 'Always On Tab', url: 'https://chrome.google.com/webstore' },
                                { id: 76, name: 'Smart Pin', url: 'https://chrome.google.com/webstore' },
                                { id: 77, name: 'Tab Keeper', url: 'https://chrome.google.com/webstore' },
                                { id: 78, name: 'Floating Tabs', url: 'https://chrome.google.com/webstore' },
                                { id: 79, name: 'Fixed Tab', url: 'https://chrome.google.com/webstore' },
                                { id: 80, name: 'Persistent Tabs', url: 'https://chrome.google.com/webstore' }
                            ]
                        },
                        {
                            id: 'tab-history',
                            name: 'Tab History',
                            extensions: [
                                { id: 81, name: 'Restore Closed Tabs', url: 'https://chrome.google.com/webstore' },
                                { id: 82, name: 'Session History', url: 'https://chrome.google.com/webstore' },
                                { id: 83, name: 'Tab Restore Plus', url: 'https://chrome.google.com/webstore' },
                                { id: 84, name: 'Tab Recovery', url: 'https://chrome.google.com/webstore' },
                                { id: 85, name: 'Never Lose Tabs', url: 'https://chrome.google.com/webstore' },
                                { id: 86, name: 'History Recorder', url: 'https://chrome.google.com/webstore' },
                                { id: 87, name: 'Tab Archive', url: 'https://chrome.google.com/webstore' },
                                { id: 88, name: 'Session Saver', url: 'https://chrome.google.com/webstore' },
                                { id: 89, name: 'Quick Restore', url: 'https://chrome.google.com/webstore' },
                                { id: 90, name: 'Tab Backup', url: 'https://chrome.google.com/webstore' }
                            ]
                        },
                        {
                            id: 'tab-bookmark',
                            name: 'Tab Bookmarks',
                            extensions: [
                                { id: 91, name: 'Save Tabs', url: 'https://chrome.google.com/webstore' },
                                { id: 92, name: 'Bookmark Sidebar', url: 'https://chrome.google.com/webstore' },
                                { id: 93, name: 'Tab Collections', url: 'https://chrome.google.com/webstore' },
                                { id: 94, name: 'Quick Bookmarks', url: 'https://chrome.google.com/webstore' },
                                { id: 95, name: 'Bookmark Manager', url: 'https://chrome.google.com/webstore' },
                                { id: 96, name: 'Tab Saver', url: 'https://chrome.google.com/webstore' },
                                { id: 97, name: 'Collection Manager', url: 'https://chrome.google.com/webstore' },
                                { id: 98, name: 'Tab Grouper', url: 'https://chrome.google.com/webstore' },
                                { id: 99, name: 'Smart Collections', url: 'https://chrome.google.com/webstore' },
                                { id: 100, name: 'Tag Manager', url: 'https://chrome.google.com/webstore' }
                            ]
                        }
                    ]
                }
                // Additional domains truncated for brevity - continue same pattern for remaining 8 domains
            ]
        },
        {
            id: 'security',
            name: 'Security & Privacy',
            emoji: '🔒',
            domains: [
                {
                    id: 'passwords',
                    name: 'Passwords',
                    subdomains: [
                        {
                            id: 'password-managers',
                            name: 'Password Managers',
                            extensions: [
                                { id: 101, name: 'LastPass', url: 'https://chrome.google.com/webstore' },
                                { id: 102, name: 'Bitwarden', url: 'https://chrome.google.com/webstore' },
                                { id: 103, name: 'Dashlane', url: 'https://chrome.google.com/webstore' },
                                { id: 104, name: '1Password', url: 'https://chrome.google.com/webstore' },
                                { id: 105, name: 'Keeper', url: 'https://chrome.google.com/webstore' },
                                { id: 106, name: 'RoboForm', url: 'https://chrome.google.com/webstore' },
                                { id: 107, name: 'Enpass', url: 'https://chrome.google.com/webstore' },
                                { id: 108, name: 'Sticky Password', url: 'https://chrome.google.com/webstore' },
                                { id: 109, name: 'Zoho Vault', url: 'https://chrome.google.com/webstore' },
                                { id: 110, name: 'NordPass', url: 'https://chrome.google.com/webstore' }
                            ]
                        }
                        // Additional subdomains...
                    ]
                }
                // Additional domains...
            ]
        }
        // Additional categories...
    ]
};

// ==================== DOM ELEMENTS ====================
const searchInput = document.getElementById('searchInput');
const extensionTree = document.getElementById('extensionTree');
const settingsBtn = document.getElementById('settingsBtn');
const detailsPanel = document.getElementById('detailsPanel');
const settingsPanel = document.getElementById('settingsPanel');
const closeDetailsBtn = document.getElementById('closeDetails');
const closeSettingsBtn = document.getElementById('closeSettings');

let bookmarkedExtensions = [];
let customFolders = {};
let currentTheme = 'light';

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    renderCategories();
    attachEventListeners();
});

function loadSettings() {
    chrome.storage.local.get(['theme', 'bookmarks', 'folders'], (result) => {
        if (result.theme) {
            currentTheme = result.theme;
            applyTheme(currentTheme);
        }
        if (result.bookmarks) bookmarkedExtensions = result.bookmarks;
        if (result.folders) customFolders = result.folders;
    });
}

function applyTheme(theme) {
    document.body.className = theme === 'light' ? '' : `${theme}-theme`;
    currentTheme = theme;
}

// ==================== EVENT LISTENERS ====================
function attachEventListeners() {
    settingsBtn.addEventListener('click', () => settingsPanel.classList.remove('hidden'));
    closeSettingsBtn.addEventListener('click', () => settingsPanel.classList.add('hidden'));
    closeDetailsBtn.addEventListener('click', () => detailsPanel.classList.add('hidden'));
    
    searchInput.addEventListener('input', handleSearch);
    
    // Theme selector
    document.querySelectorAll('input[name="theme"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            applyTheme(e.target.value);
            chrome.storage.local.set({ theme: e.target.value });
        });
    });
    
    // Custom extension form
    document.getElementById('customExtensionForm').addEventListener('submit', handleAddCustomExtension);
    
    // Create folder button
    document.getElementById('createFolderBtn').addEventListener('click', handleCreateFolder);
}

// ==================== RENDER FUNCTIONS ====================
function renderCategories() {
    extensionTree.innerHTML = '';
    
    EXTENSION_DATA.categories.forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.className = 'tree-item';
        
        const categoryToggle = document.createElement('button');
        categoryToggle.className = 'tree-toggle';
        categoryToggle.innerHTML = `
            <span class="tree-toggle-arrow collapsed">▶</span>
            <span>${category.emoji} ${category.name}</span>
        `;
        
        const domainsContainer = document.createElement('div');
        domainsContainer.className = 'tree-children hidden';
        
        category.domains.forEach(domain => {
            const domainItem = document.createElement('div');
            domainItem.className = 'tree-item';
            
            const domainToggle = document.createElement('button');
            domainToggle.className = 'tree-toggle';
            domainToggle.innerHTML = `
                <span class="tree-toggle-arrow collapsed">▶</span>
                <span>${domain.name}</span>
            `;
            
            const subdomainsContainer = document.createElement('div');
            subdomainsContainer.className = 'tree-children hidden';
            
            domain.subdomains.forEach(subdomain => {
                const subdomainItem = document.createElement('div');
                subdomainItem.className = 'tree-item';
                
                const subdomainToggle = document.createElement('button');
                subdomainToggle.className = 'tree-toggle';
                subdomainToggle.innerHTML = `
                    <span class="tree-toggle-arrow collapsed">▶</span>
                    <span>${subdomain.name}</span>
                `;
                
                const extensionsContainer = document.createElement('div');
                extensionsContainer.className = 'tree-children hidden';
                
                subdomain.extensions.forEach(ext => {
                    const extItem = document.createElement('div');
                    extItem.className = 'extension-item';
                    extItem.innerHTML = `
                        <span class="extension-name">${ext.name}</span>
                        <span class="extension-badge">NEW</span>
                    `;
                    
                    extItem.addEventListener('click', () => showExtensionDetails(ext));
                    extensionsContainer.appendChild(extItem);
                });
                
                subdomainToggle.addEventListener('click', () => {
                    subdomainToggle.querySelector('.tree-toggle-arrow').classList.toggle('collapsed');
                    extensionsContainer.classList.toggle('hidden');
                });
                
                subdomainItem.appendChild(subdomainToggle);
                subdomainItem.appendChild(extensionsContainer);
                subdomainsContainer.appendChild(subdomainItem);
            });
            
            domainToggle.addEventListener('click', () => {
                domainToggle.querySelector('.tree-toggle-arrow').classList.toggle('collapsed');
                subdomainsContainer.classList.toggle('hidden');
            });
            
            domainItem.appendChild(domainToggle);
            domainItem.appendChild(subdomainsContainer);
            domainsContainer.appendChild(domainItem);
        });
        
        categoryToggle.addEventListener('click', () => {
            categoryToggle.querySelector('.tree-toggle-arrow').classList.toggle('collapsed');
            domainsContainer.classList.toggle('hidden');
        });
        
        categoryItem.appendChild(categoryToggle);
        categoryItem.appendChild(domainsContainer);
        extensionTree.appendChild(categoryItem);
    });
}

function showExtensionDetails(extension) {
    const detailsTitle = document.getElementById('detailsTitle');
    const detailsContent = document.getElementById('detailsContent');
    
    detailsTitle.textContent = extension.name;
    
    detailsContent.innerHTML = `
        <div class="extension-detail">
            <div class="detail-field">
                <label>Extension Name</label>
                <value>${extension.name}</value>
            </div>
            <div class="extension-actions">
                <button class="btn-primary" onclick="launchExtension('${extension.id}')">Open Extension</button>
                <button class="btn-secondary" onclick="installExtension('${extension.url}')">Install</button>
                <button class="btn-secondary" onclick="bookmarkExtension(${extension.id}, '${extension.name}')">⭐ Bookmark</button>
            </div>
        </div>
    `;
    
    detailsPanel.classList.remove('hidden');
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    const allItems = document.querySelectorAll('.tree-toggle, .extension-item');
    
    allItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (query === '' || text.includes(query)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function launchExtension(extensionId) {
    chrome.runtime.sendMessage({
        action: 'launchExtension',
        extensionId: extensionId
    }, (response) => {
        if (response && response.success) {
            alert('Extension launched!');
        }
    });
}

function installExtension(url) {
    chrome.tabs.create({ url: url });
}

function bookmarkExtension(id, name) {
    if (!bookmarkedExtensions.includes(id)) {
        bookmarkedExtensions.push(id);
        chrome.storage.local.set({ bookmarks: bookmarkedExtensions });
        alert(`${name} bookmarked!`);
        updateBookmarksList();
    }
}

function updateBookmarksList() {
    const bookmarksList = document.getElementById('bookmarksList');
    if (bookmarkedExtensions.length === 0) {
        bookmarksList.innerHTML = '<p>No bookmarked extensions yet.</p>';
        return;
    }
    
    bookmarksList.innerHTML = bookmarkedExtensions.map((id, idx) => `
        <div class="bookmark-item">
            <span>Extension ${id}</span>
            <button class="btn-danger" onclick="removeBookmark(${id})">Remove</button>
        </div>
    `).join('');
}

function removeBookmark(id) {
    bookmarkedExtensions = bookmarkedExtensions.filter(bid => bid !== id);
    chrome.storage.local.set({ bookmarks: bookmarkedExtensions });
    updateBookmarksList();
}

function handleAddCustomExtension(e) {
    e.preventDefault();
    const name = document.getElementById('customName').value;
    const url = document.getElementById('customUrl').value;
    alert(`Added: ${name}`);
    document.getElementById('customExtensionForm').reset();
}

function handleCreateFolder() {
    const folderName = prompt('Enter folder name:');
    if (folderName) {
        customFolders[folderName] = [];
        chrome.storage.local.set({ folders: customFolders });
        alert(`Folder "${folderName}" created!`);
    }
}
