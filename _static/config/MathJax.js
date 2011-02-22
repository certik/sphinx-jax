MathJax.Hub.Config({
    extensions: ["jsMath2jax.js"],
    jax: ["input/TeX", "output/HTML-CSS"],
    tex2jax: {
        inlineMath: [ ['$','$'], ["\\(","\\)"] ],
        displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
    },
    "HTML-CSS": { availableFonts: ["TeX"] }
});
