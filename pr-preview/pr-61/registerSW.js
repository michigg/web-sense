if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/pr-preview/pr-Object/sw.js', { scope: '/pr-preview/pr-Object/' })})}