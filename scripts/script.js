function changeTextColor() {
    const body = document.body;
    const select = document.getElementById("select-color");

    const optionColor = document.getElementById("select-color").value;

    switch (optionColor) {
        case 'red':
            body.style.color = "#FF0000";
            select.style.color = "#FF0000";
            select.style.borderColor = "#FF0000";
            break;
        case 'green':
            body.style.color = "#129700";
            select.style.color = "#129700";
            select.style.borderColor = "#129700";
            break;
        case 'blue':
            body.style.color = "#033694";
            select.style.color = "#033694";
            select.style.borderColor = "#033694";
            break;
        case 'yellow':
            body.style.color = "#FFDB10";
            select.style.color = "#FFDB10";
            select.style.borderColor = "#FFDB10";
            break;
        case 'purple':
            body.style.color = "#7900EB";
            select.style.color = "#7900EB";
            select.style.borderColor = "#7900EB";
            break;
        default:
            body.style.color = "#000000";
            select.style.color = "#000000";
            select.style.borderColor = "#000000";
    }
}