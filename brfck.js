function compile(text)
{
    let mem = Array(30000).fill(65);
    let out = Array();
    let i = 0;
    for (let j = 0; j < text.length; j++)
    {
        switch (text[j]) {
            case ">":
                i++;
                break;
            case "<":
                i++;
                break;
            case "+":
                mem[i]++;
                break;
            case "-":
                mem[i]--;
                break;
            case ",":
                let char = prompt("Введите символ");
                if(char && char.length < 2)
                    mem[i] = char.charCodeAt(0);
                break;
            case ".":
                out.push(String.fromCharCode(mem[i]));
                break;
             //case "[":
                
            // case "]":
            default:
                break;
        }
    }
    return out;
}

function brnfck_comp()
{
    let text = document.getElementById("text").value;
    if(!text)
    {
        document.getElementById("out").innerText = "Ошибка: пустое поле ввода!";
        return;
    }
        let text_arr = compile(text);
        document.getElementById("out").innerText = text_arr.join("");


        

}


