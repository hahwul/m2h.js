# m2h.js
remote markdown document to html on DOM

## Usage
```javascript
<script src='m2h.js'></script>
<div id='html-area'></div>

<script>
    // [+] markdown to html object
    m2h('html-area','your remote markdown file');
    // e.g
    // m2h('html-area','https://raw.githubusercontent.com/hahwul/mad-metasploit/master/README.md');
    
    // [+] plain html to html object
    // h2h('html-area','your remote markdown file');
</script>
```
