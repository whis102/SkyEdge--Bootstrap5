const navItems = document.querySelectorAll('#nav-items .nav-item');

navItems.forEach((item) => {
item.addEventListener('click', () => {
    navItems.forEach((navItem) => navItem.classList.remove('nav-item-active'));

    item.classList.add('nav-item-active');

    const contentBlocks = document.querySelectorAll('.block-box .block-customer');
    contentBlocks.forEach((block) => block.style.display = 'none');

    const targetBlockId = item.dataset.target;
    if (targetBlockId) {
    const targetBlock = document.getElementById(targetBlockId);
    if (targetBlock) {
        targetBlock.style.display = 'block';
    }
    }
});
});