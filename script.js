const tabs = [...document.querySelectorAll('[role="tab"][data-tab]')];
const panels = [...document.querySelectorAll('[role="tabpanel"][data-panel]')];

function activateTab(name, { focus = false, updateHash = true } = {}) {
  const selectedTab = tabs.find((tab) => tab.dataset.tab === name);
  const selectedPanel = panels.find((panel) => panel.dataset.panel === name);
  if (!selectedTab || !selectedPanel) return;

  tabs.forEach((tab) => {
    const active = tab === selectedTab;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  panels.forEach((panel) => {
    const active = panel === selectedPanel;
    panel.hidden = !active;
    panel.classList.toggle('is-active', active);
  });
  if (updateHash) history.replaceState(null, '', `#${name === 'home' ? 'home' : name}`);
  if (focus) selectedTab.focus();
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', (event) => {
    event.preventDefault();
    activateTab(tab.dataset.tab);
  });
  tab.addEventListener('keydown', (event) => {
    let nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = tabs.length - 1;
    else return;
    event.preventDefault();
    activateTab(tabs[nextIndex].dataset.tab, { focus: true });
  });
});

document.querySelectorAll('a[data-tab]:not([role="tab"])').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    activateTab(link.dataset.tab);
  });
});

const initialName = location.hash.replace('#', '');
const validNames = tabs.map((tab) => tab.dataset.tab);
activateTab(validNames.includes(initialName) ? initialName : 'home', { updateHash: false });

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const copyPhone = document.querySelector('.copy-phone');
if (copyPhone) {
  copyPhone.addEventListener('click', async () => {
    const original = copyPhone.textContent;
    try {
      await navigator.clipboard.writeText('+1 (214) 980-2844');
      copyPhone.textContent = 'COPIED';
    } catch {
      copyPhone.textContent = '+1 (214) 980-2844';
    }
    window.setTimeout(() => { copyPhone.textContent = original; }, 1800);
  });
}
