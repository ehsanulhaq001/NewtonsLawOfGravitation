setBackground = () => { // Checked cnvground full screen
    ctx.lineWidth = 3;

    ctx.beginPath();

    ctx.moveTo(0, cnv.height * 1 / 6);
    ctx.lineTo(cnv.width, cnv.height * 1 / 6);
    ctx.moveTo(0, cnv.height * 2 / 6);
    ctx.lineTo(cnv.width, cnv.height * 2 / 6);
    ctx.moveTo(0, cnv.height * 4 / 6);
    ctx.lineTo(cnv.width, cnv.height * 4 / 6);
    ctx.moveTo(0, cnv.height * 5 / 6);
    ctx.lineTo(cnv.width, cnv.height * 5 / 6);
    ctx.moveTo(cnv.width * 1 / 6, 0);
    ctx.lineTo(cnv.width * 1 / 6, cnv.height);
    ctx.moveTo(cnv.width * 2 / 6, 0);
    ctx.lineTo(cnv.width * 2 / 6, cnv.height);
    ctx.moveTo(cnv.width * 4 / 6, 0);
    ctx.lineTo(cnv.width * 4 / 6, cnv.height);
    ctx.moveTo(cnv.width * 5 / 6, 0);
    ctx.lineTo(cnv.width * 5 / 6, cnv.height);

    ctx.strokeStyle = "rgb(20, 90,90)";
    ctx.stroke();

    ctx.beginPath();

    ctx.moveTo(0, cnv.height * 1 / 12);
    ctx.lineTo(cnv.width, cnv.height * 1 / 12);
    ctx.moveTo(0, cnv.height * 3 / 12);
    ctx.lineTo(cnv.width, cnv.height * 3 / 12);
    ctx.moveTo(0, cnv.height * 5 / 12);
    ctx.lineTo(cnv.width, cnv.height * 5 / 12);
    ctx.moveTo(0, cnv.height * 7 / 12);
    ctx.lineTo(cnv.width, cnv.height * 7 / 12);
    ctx.moveTo(0, cnv.height * 9 / 12);
    ctx.lineTo(cnv.width, cnv.height * 9 / 12);
    ctx.moveTo(0, cnv.height * 11 / 12);
    ctx.lineTo(cnv.width, cnv.height * 11 / 12);
    ctx.moveTo(cnv.width * 1 / 12, 0);
    ctx.lineTo(cnv.width * 1 / 12, cnv.height);
    ctx.moveTo(cnv.width * 3 / 12, 0);
    ctx.lineTo(cnv.width * 3 / 12, cnv.height);
    ctx.moveTo(cnv.width * 5 / 12, 0);
    ctx.lineTo(cnv.width * 5 / 12, cnv.height);
    ctx.moveTo(cnv.width * 7 / 12, 0);
    ctx.lineTo(cnv.width * 7 / 12, cnv.height);
    ctx.moveTo(cnv.width * 9 / 12, 0);
    ctx.lineTo(cnv.width * 9 / 12, cnv.height);
    ctx.moveTo(cnv.width * 11 / 12, 0);
    ctx.lineTo(cnv.width * 11 / 12, cnv.height);

    ctx.strokeStyle = "rgb(10, 120,120)";
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.beginPath();

    ctx.moveTo(0, cnv.height * 3 / 6);
    ctx.lineTo(cnv.width, cnv.height * 3 / 6);
    ctx.moveTo(cnv.width * 3 / 6, 0);
    ctx.lineTo(cnv.width * 3 / 6, cnv.height);
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.lineWidth = 1;
}