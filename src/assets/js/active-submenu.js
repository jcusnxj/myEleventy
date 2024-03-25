document.addEventListener('DOMContentLoaded', () => {
    // Loop through all links in the navigation menu
    document.querySelectorAll('.sidebarnav a').forEach(link => {
        // Check if the link's href matches the current page's URL
        if (link.href === window.location.href) {
            let parent = link.parentElement; // Start with the link's immediate parent

            // Ascend up the DOM tree
            while (parent && !parent.matches('.sidebarnav')) { // Stop if we reach the main .sidebarnav element
                if (parent.matches('li') && parent.querySelector('input[type="checkbox"]')) {
                    // If the parent is an LI with a checkbox, check it to open the submenu
                    const checkbox = parent.querySelector('input[type="checkbox"]');
                    checkbox.checked = true;
                }
                parent = parent.parentElement; // Move up to the next parent element
            }
        }
    });
});