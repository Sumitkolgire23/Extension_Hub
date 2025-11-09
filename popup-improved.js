// Improved popup.js with working theme functionality

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
                        }
                    ]
                }
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
                    ]
                }
            ]
        }
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
    console.log('DOM Loaded - Initializing extension');
    loadSettings();
    renderCategories();
    attachEventListeners();
    updateBookmarksList();
});

// ==================== THEME MANAGEMENT ====================
function loadSettings() {
    chrome.storage.local.get(['theme', 'bookmarks', 'folders'], (result) => {
        console.log('Loading settings:', result);
        
        if (result.theme) {
            currentTheme = result.theme;
            applyTheme(currentTheme);
            // Update radio button
            const themeRadio = document.querySelector(`input[name="theme"][value="${currentTheme}"]`);
            if (themeRadio) themeRadio.checked = true;
        }
        
        if (result.bookmarks) {
            bookmarkedExtensions = result.bookmarks;
        }
        
        if (result.folders) {
            customFolders = result.folders;
        }
    });
}

function applyTheme(theme) {
    console.log('Applying theme:', theme);
    
    // Remove all theme classes
    document.body.classList.remove('light-theme', 'dark-theme', 'ocean-theme');
    
    // Add new theme class
    if (theme !== 'light') {
        document.body.classList.add(`${theme}-theme`);
    }
    
    currentTheme = theme;
    
    // Update CSS variables based on theme
    updateThemeVariables(theme);
}

function updateThemeVariables(theme) {
    const root = document.documentElement;
    
    if (theme === 'dark') {
        root.style.setProperty('--color-bg', '#1F2937');
        root.style.setProperty('--color-surface', '#111827');
        root.style.setProperty('--color-border', '#374151');
        root.style.setProperty('--color-text', '#F3F4F6');
        root.style.setProperty('--color-text-light', '#D1D5DB');
    } else if (theme === 'ocean') {
        root.style.setProperty('--color-primary', '#0369A1');
        root.style.setProperty('--color-secondary', '#06B6D4');
        root.style.setProperty('--color-bg', '#0F172A');
        root.style.setProperty('--color-surface', '#1E293B');
        root.style.setProperty('--color-border', '#334155');
        root.style.setProperty('--color-text', '#E2E8F0');
        root.style.setProperty('--color-text-light', '#94A3B8');
    } else {
        // Light theme (default)
        root.style.setProperty('--color-bg', '#FFFFFF');
        root.style.setProperty('--color-surface', '#F3F4F6');
        root.style.setProperty('--color-border', '#E5E7EB');
        root.style.setProperty('--color-text', '#1F2937');
        root.style.setProperty('--color-text-light', '#6B7280');
    }
}

// ==================== EVENT LISTENERS ====================
function attachEventListeners() {
    settingsBtn.addEventListener('click', () => {
        settingsPanel.classList.remove('hidden');
    });
    
    closeSettingsBtn.addEventListener('click', () => {
        settingsPanel.classList.add('hidden');
    });
    
    closeDetailsBtn.addEventListener('click', () => {
        detailsPanel.classList.add('hidden');
    });
    
    searchInput.addEventListener('input', handleSearch);
    
    // THEME SELECTOR - WORKING
    document.querySelectorAll('input[name="theme"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            console.log('Theme changed to:', e.target.value);
            applyTheme(e.target.value);
            chrome.storage.local.set({ theme: e.target.value });
        });
    });
    
    // Custom extension form
    const customForm = document.getElementById('customExtensionForm');
    if (customForm) {
        customForm.addEventListener('submit', handleAddCustomExtension);
    }
    
    // Create folder button
    const createFolderBtn = document.getElementById('createFolderBtn');
    if (createFolderBtn) {
        createFolderBtn.addEventListener('click', handleCreateFolder);
    }
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
    
    const isBookmarked = bookmarkedExtensions.includes(extension.id);
    
    detailsContent.innerHTML = `
        <div class="extension-detail">
            <div class="detail-field">
                <label>Extension Name</label>
                <value>${extension.name}</value>
            </div>
            <div class="extension-actions">
                <button class="btn-primary" onclick="openExtension('${extension.url}')">Open Store</button>
                <button class="btn-secondary" onclick="bookmarkExtension(${extension.id}, '${extension.name}')">${isBookmarked ? '❌ Unbookmark' : '⭐ Bookmark'}</button>
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

function openExtension(url) {
    chrome.tabs.create({ url: url });
}

function bookmarkExtension(id, name) {
    if (bookmarkedExtensions.includes(id)) {
        bookmarkedExtensions = bookmarkedExtensions.filter(bid => bid !== id);
    } else {
        bookmarkedExtensions.push(id);
    }
    
    chrome.storage.local.set({ bookmarks: bookmarkedExtensions });
    updateBookmarksList();
    
    // Re-render to update button state
    const detailsTitle = document.getElementById('detailsTitle');
    if (detailsTitle && detailsTitle.textContent === name) {
        // Refresh details if showing
        const allExts = EXTENSION_DATA.categories.flatMap(c => 
            c.domains.flatMap(d => 
                d.subdomains.flatMap(s => s.extensions)
            )
        );
        const ext = allExts.find(e => e.id === id);
        if (ext) showExtensionDetails(ext);
    }
}

function updateBookmarksList() {
    const bookmarksList = document.getElementById('bookmarksList');
    
    if (bookmarkedExtensions.length === 0) {
        bookmarksList.innerHTML = '<p>No bookmarked extensions yet.</p>';
        return;
    }
    
    const allExts = EXTENSION_DATA.categories.flatMap(c => 
        c.domains.flatMap(d => 
            d.subdomains.flatMap(s => s.extensions)
        )
    );
    
    bookmarksList.innerHTML = bookmarkedExtensions.map(id => {
        const ext = allExts.find(e => e.id === id);
        return `
            <div class="bookmark-item">
                <span>${ext ? ext.name : 'Unknown Extension'}</span>
                <button class="btn-danger" onclick="removeBookmark(${id})" style="padding: 4px 8px; font-size: 12px;">Remove</button>
            </div>
        `;
    }).join('');
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
