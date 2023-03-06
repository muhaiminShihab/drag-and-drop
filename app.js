let content = `
    <div class="ms_dnd_content">
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                class="bi bi-upload" viewBox="0 0 16 16">
                <path
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path
                    d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
            </svg>
        </span>
        <h3>Upload files</h3>
    </div>

    <div class="ms_dnd_kata">
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
        <span class="kata"></span>
    </div>
`;

// init drag & drop
function msDND(selector) {
    let selectorType = selector.slice(0, 1);
    let msDNDSelector = '';

    if (selectorType === '#') {
        msDNDSelector = document.getElementById(selector.slice(1));
        msDNDSelector.classList.add('ms_dnd')
        msDNDSelector.innerHTML += content;
    }
}

// image preview
setTimeout(() => {
    var fileSelector = document.querySelector('input');
    fileSelector.addEventListener('change', function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            var image = new Image();
            image.src = reader.result;
            var previewContainer = document.querySelector('.ms_dnd_preview');
            previewContainer.innerHTML = '';
            previewContainer.appendChild(image);
        }
    });
}, 1000);