// Scroll reveal animations

const sr = ScrollReveal({
    origin: 'left',
    distance: '20px',
    duration: 2000,
    reset: true,
});

sr.reveal(`.home_data,.about_data,.about_card,.monsters_data,.monsters_img,.charecters_contant,.contact_data,.contact_data,.footer_content`,{
    interval:200
})