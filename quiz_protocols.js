const quizData = [

{q:"1- ما وظيفة IP؟", options:["تشفير البيانات","تحديد العناوين ومسار الحزم","إرسال البريد"], answer:1, explain:"IP مسؤول عن عنونة الأجهزة وتحديد المسار."},

{q:"2- أي بروتوكول يضمن وصول البيانات؟", options:["UDP","TCP","ICMP"], answer:1, explain:"TCP يضمن الوصول وإعادة الإرسال عند الفقد."},

{q:"3- UDP يتميز بـ:", options:["الضمان الكامل","السرعة","التشفير"], answer:1, explain:"UDP أسرع لكنه لا يضمن الوصول."},

{q:"4- ARP يحول:", options:["IP إلى MAC","MAC إلى IP","DNS إلى IP"], answer:0, explain:"ARP يستخدم لمعرفة MAC من IP."},

{q:"5- DNS وظيفته:", options:["توزيع IP","تحويل اسم إلى IP","تشفير الاتصال"], answer:1, explain:"DNS يحول اسم الموقع إلى عنوان IP."},

{q:"6- HTTPS يعتمد على:", options:["SSL/TLS","UDP","ARP"], answer:0, explain:"HTTPS يستخدم SSL/TLS للتشفير."},

{q:"7- Ping يستخدم:", options:["TCP","ICMP","FTP"], answer:1, explain:"Ping يعتمد على ICMP."},

{q:"8- DHCP يقوم بـ:", options:["توزيع IP تلقائيًا","حذف الأجهزة","تشفير الحزم"], answer:0, explain:"DHCP يوزع عناوين IP تلقائيًا."},

{q:"9- HTTP يعمل في طبقة:", options:["التطبيق","النقل","الفيزيائية"], answer:0, explain:"HTTP من بروتوكولات Application Layer."},

{q:"10- أيهما أسرع؟", options:["TCP","UDP","كلاهما متساوي"], answer:1, explain:"UDP أسرع لأنه لا ينتظر تأكيد."},

{q:"11- المنفذ الافتراضي لـ HTTP:", options:["80","443","21"], answer:0, explain:"HTTP يستخدم Port 80."},

{q:"12- المنفذ الافتراضي لـ HTTPS:", options:["80","53","443"], answer:2, explain:"HTTPS يعمل على 443."},

{q:"13- FTP يستخدم لنقل:", options:["الوقت","الملفات","العناوين"], answer:1, explain:"FTP لنقل الملفات."},

{q:"14- SNMP يستخدم لـ:", options:["إدارة الشبكات","تصفح المواقع","إرسال البريد"], answer:0, explain:"SNMP لمراقبة وإدارة أجهزة الشبكة."},

{q:"15- NTP وظيفته:", options:["مزامنة الوقت","تشفير البيانات","عنونة الأجهزة"], answer:0, explain:"NTP لمزامنة الوقت."},

{q:"16- POP يستخدم لـ:", options:["إرسال البريد","استقبال البريد","تشفير البريد"], answer:1, explain:"POP لاستقبال البريد."},

{q:"17- SMTP يستخدم لـ:", options:["إرسال البريد","نقل الملفات","توزيع IP"], answer:0, explain:"SMTP لإرسال البريد."},

{q:"18- أي بروتوكول أكثر أمانًا؟", options:["HTTP","HTTPS","FTP"], answer:1, explain:"HTTPS يستخدم التشفير."},

{q:"19- المنافذ المحجوزة تنتهي عند:", options:["1024","80","65535"], answer:0, explain:"المنافذ المحجوزة من 0 إلى 1024."},

{q:"20- فهم البروتوكولات يساعد في:", options:["فهم الهجمات","تسريع الإنترنت فقط","زيادة حجم الكابل"], answer:0, explain:"معظم الهجمات تستهدف البروتوكولات."}

];

let score = 0;

function loadQuiz(){
const container = document.getElementById("questions");

quizData.forEach((item,index)=>{
container.innerHTML += `
<div class="card">
<p>${item.q}</p>
${item.options.map((opt,i)=>`
<label>
<input type="radio" name="q${index}" onclick="checkAnswer(${index},${i})">
${opt}
</label><br>
`).join("")}
<div id="feedback${index}"></div>
</div>
`;
});
}

function checkAnswer(qIndex, selected){
const feedback = document.getElementById("feedback"+qIndex);
if(selected === quizData[qIndex].answer){
feedback.innerHTML = "✅ إجابة صحيحة — "+quizData[qIndex].explain;
feedback.style.color = "green";
score++;
}else{
feedback.innerHTML = "❌ إجابة خاطئة — "+quizData[qIndex].explain;
feedback.style.color = "red";
}
}

function calculateScore(){
document.getElementById("result").innerHTML =
"<h2>🎯 نتيجتك: "+score+" / 20</h2>";
}

window.onload = loadQuiz;