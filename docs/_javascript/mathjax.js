// Configure MathJax for inline and display math rendering
window.MathJax = {
    tex: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [["\\[", "\\]"]],
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        ignoreHtmlClass: ".*|",  // Ignore all HTML classes
        processHtmlClass: "arithmatex"  // Only process elements with this class
    }
};

// Assuming RxJS is available
const document$ = fromEvent(document, 'DOMContentLoaded');

// Trigger MathJax rendering after DOM content is loaded or changes
document$.pipe(
    debounceTime(300)  // Wait for 300ms after the last change to avoid unnecessary calls
).subscribe(() => {
    MathJax.typesetPromise().catch((err) => {
        console.error('MathJax rendering failed:', err);
    });
});
