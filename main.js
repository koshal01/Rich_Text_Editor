let output = document.getElementById('output');
let buttons = document.getElementsByClassName('tool-btn');
var n = 3;

for (let btn of buttons) {
	btn.addEventListener('click', () => {
        let cmd = btn.dataset['command'];
        if(cmd=='fontSize'){
            n = n + 1;
            if(n > 7){
                n = 1;
            }
            document.execCommand(cmd, false, n);
        }
        else {
            document.execCommand(cmd, false, null);
        }
    });
}