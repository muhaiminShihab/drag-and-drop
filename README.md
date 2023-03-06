## MS Drag and Drop
This is a simple drag and drop file upload plugin. You need to add a CSS and a JavaScript file and it'll be ready to go with your valuable projects.

## Setup Package
1. Download the repository
```shell
git clone https://github.com/muhaiminShihab/ms-drag-and-drop.git
```

2. Copy the CSS file `/app.css` and paste it on your project

3. Copy the JS file `/app.js` and paste it on your project

4. Initial the drag and drop package
```shell
<div id="drag_and_drop">
    <input type="file" name="avatar" id="avatar">
</div>

<script>
    msDND('#drag_and_drop');
</script>
```

5. Always initial the drag and drop package with an id.