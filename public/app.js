function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function disableButton() {
    document.querySelector('.opener').disabled = true;
    document.querySelector('.next').disabled = true;
    document.querySelector('.back').disabled = true;
}

function enableButton() {
    if(currentSection < sections.length - 1)
        document.querySelector('.next').disabled = false;
    if(currentSection == sections.length - 1)
        document.querySelector('.next').style.display = 'none';
    if(currentSection < sections.length - 1 && currentSection > 0) {
        document.querySelector('.back').style.display = 'inline-block';
        document.querySelector('.back').disabled = false;
    } else
        document.querySelector('.back').style.display = 'none';
}

let currentSection = 0;
const sections = document.querySelectorAll('.section');
(() => {
    for(const section of sections) {
        section.classList.add('nodisplay');
    }
})();

async function setSection(n = 0) {
    if(n >= sections.length - 1)
        n = sections.length - 1;
    if(n < 0)
        n = 0;

    if(n != currentSection) {
        sections[currentSection].classList.remove('enter');
        sections[currentSection].classList.add('leave');
        await sleep(1000);

        sections[currentSection].classList.add('nodisplay');
    }
    
    currentSection = n;

    sections[currentSection].classList.remove('nodisplay');
    sections[currentSection].classList.remove('leave');
    sections[currentSection].classList.add('enter');

    await sleep(1000);
    return sections[currentSection];
};

function addToLog(msg) {
    const p = document.querySelector('.code .cont');
    const t = document.createElement('p');
    t.classList.add('enter');
    t.innerHTML = msg;
    p.appendChild(t);

    while(p.childElementCount > 17) {
        p.removeChild(p.childNodes[0]);
    }

    return t.innerText;
}

function disableLoader(noerrs = true) {
    const loader = document.querySelector('.loader');
    loader.classList.add('disabled');
    if(!noerrs) return;

    const opener = document.querySelector('.opener');
    opener.disabled = false;
}

async function prevSection() {
    disableButton();

    await setSection(currentSection - 1);
    enableButton();
}

async function nextSection() {
    disableButton();

    await setSection(currentSection + 1);
    enableButton();
    
    if(currentSection > 3) {
        doCompare();
    }
}

async function log(msg) {
    pywebview.api.say(msg);
}

function setFileView(element, value) {
    const text = element.querySelector('span');
    text.innerText = value;
}

addEventListener('pywebviewready', main);
async function main() {
    disableButton();
    await setSection(0);
}

async function getPlacementLoc() {
    try {
        const result = await pywebview.api.getPlacement();
        const element = sections[currentSection].querySelector('.file');
        setFileView(element, result.path);
        enableButton();
    } catch(e) {
        return;
    }
}

async function getCatalogue() {
    try {
        const result = await pywebview.api.getComp();
        const element = sections[currentSection].querySelector('.file');
        setFileView(element, result.path);
        enableButton();
    } catch(e) {
        return;
    }
}

async function doCompare() {
    try {
        const params = {
            'color': document.querySelector('input[type=color]').value,
            'column': document.querySelector('input[type=text]').value
        }

        await pywebview.api.doCompare(params);
        disableLoader();
    } catch(e) {
        addToLog(`> [<span style="color: #ff0000;">Error</span>] ${e}`);
        disableLoader(false);
        return
    }
}

async function finish() {
    await pywebview.api.finish();
    pywebview.api.destroy();
}