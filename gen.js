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
`//AFCOPY   JOB CLASS=A,MSGCLASS=A,MSGLEVEL=(1,1),NOTIFY=&SYSUID
//* THIS WAS SOME OF THE FIRST JCL I EVER WROTE.
//* IT'S PROBABLY BAD AND I DON'T KNOW IF IT EVEN WORKS.
//* PLEASE DON'T JUDGE :P
//STEP01   EXEC PGM=ICETOOL
//INDD     DD DSN=Z10121.TEST.LIBRARY1(TESTFILE),DISP=SHR
//OUTDD    DD DSN=Z10121.TEST.ICEOUT(TESTFILE),
//            DISP=(NEW,CATLG,DELETE),
//            SPACE=(TRK,(1,1),RLSE),
//            DCB=(RECFM=FB,LRECL=80,BLKSIZE=800)
//COUNTDD  DD DSN=Z10121.TEST.ICEOUT(ICECOUNT),DISP=SHR
//TOOLIN   DD *
COPY FROM(INDD) TO(OUTDD) USING(CTL1)
COUNT FROM(INDD) USING(CTL1) WRITE(COUNTDD) WIDTH(80) DIGITS(4)
//CTL1CNTL DD *
INCLUDE COND=ALL
//TOOLMSG  DD DSN=Z10121.TEST.OUTPUT(ICECPMSG),DISP=SHR
//DFSMSG   DD SYSOUT=*
/*`
document.getElementById("submitbtn").addEventListener("click", submit);
