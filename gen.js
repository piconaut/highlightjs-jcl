function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

let submit = function () {
    const unescapedCode = document.getElementById("intext").value;
    const escapedCode = escapeHtml(unescapedCode);
    document.getElementById("highlightedCode").innerHTML = escapedCode
    hljs.highlightAll();
};
document.getElementById("highlightedCode").innerHTML=
`//AFCPYCNT JOB CLASS=A,MSGCLASS=A,MSGLEVEL=(1,1),NOTIFY=&SYSUID
//*
//*---------------------------------------------
//* COPY PDS MEMBER AND COUNT NUMBER OF RECORDS
//*---------------------------------------------
//*
//CPYPCNT  EXEC PGM=ICETOOL
//CPYIN    DD DSN=USERNAME.SAMPLE.LIBRARY1(TESTFILE),DISP=SHR
//CPYOUT   DD DSN=USERNAME.SAMPLE.LIBRARY2(TESTFILE),
//            DISP=(NEW,CATLG,DELETE),
//            SPACE=(TRK,(1,1),RLSE),
//            DCB=(RECFM=FB,LRECL=80,BLKSIZE=800)
//CNTOUT   DD DSN=USERNAME.SAMPLE.ICEOUT(ICECOUNT),DISP=SHR
//TOOLIN   DD *
 COPY FROM(CPYIN) TO(CPYOUT) USING(CTL1)
 COUNT FROM(CPYIN) USING(CTL1) WRITE(CNTOUT) WIDTH(80) DIGITS(4)
/*
//CTL1CNTL DD *
 INCLUDE COND=ALL
/*
//TOOLMSG  DD SYSOUT=*
//DFSMSG   DD SYSOUT=*
/*`
document.getElementById("submitbtn").addEventListener("click", submit);
