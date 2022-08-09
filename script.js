$(document).ready(function(){

    // Global Variables defined below.
    var counter = 0;
    var milisec = 0;
    var sec = 0;
    var min = 0;
    var a, b;
    var manualHours = 0;
    var manualMinutes = 0;
    var manualSeconds = 0;

   
    var date = new Date();  //fetching current date.
    $('.date').html(date.toLocaleDateString('default', { weekday: 'long' })+", "+date.getDate()+" "+date.toLocaleString('default', { month: 'long' })+" "+date.getFullYear());
      b= setInterval(function(){
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        $('.time').html( time );
    }, 1000);
    
    // Functionality for StopWatch.
    $('#stopwatch').on('click', function(){
       if(counter == 0)
       {
            a = setInterval(function()
            {
                if(milisec < 99)
                {
                    milisec+=1;
                }
                if(milisec == 99)
                {
                    milisec = 0;
                    sec +=1;
                }
                if(sec < 59 && milisec>99)
                {
                    sec+=1;
                }
                if(sec == 59)
                {
                    sec = 0;
                    min += 1;
                }
                if(min == 59 && sec>59)
                {
                    clearInterval(a);
                }
                $('#endTime').html(min+":"+sec+":"+milisec);
            },10);         
        counter ++;
        }
        else{
            $('#endTime').html(min+":"+sec+":"+milisec);
            clearInterval(a);
            counter --;
        }
    });
    $('#reset').on('click', function(){
        $('#endTime').html('');
        clearInterval(a);                
        counter = 0;
        milisec = 0;
        sec = 0;
        min = 0;
    });


    // Functionality for Manual Working of Clock.
    $('#setTime').on('click', function(){
        clearInterval(b);
        manualHours = Number(prompt("Enter hours"));
        if(/^\d+$/.test(manualHours)== false || manualHours.length<1 && manualHours>23)
        {
            alert("Wrong Entry");
            return;
        }
        manualMinutes = Number(prompt("Enter minutes"));
        if(/^\d+$/.test(manualMinutes)== false || manualMinutes.length<1 && manualMinutes>60)
        {
            alert("Wrong Entry");
            return;
        }
        manualSeconds = Number(prompt("Enter seconds"));
        if(/^\d+$/.test(manualSeconds)== false || manualSeconds.length<1 && manualSeconds>60)
        {
            alert("Wrong Entry");
            return;
        }
        
        setInterval(function()
            {
                if(manualSeconds<59)
                {
                    manualSeconds +=1;
                }
                if(manualSeconds == 59 && manualMinutes< 59)
                {
                    manualSeconds = 0;
                    manualMinutes +=1;
                }
                if(manualSeconds == 59 && manualMinutes == 59 && manualHours < 24)
                {
                    manualSeconds = 0;
                    manualMinutes = 0;
                    manualHours += 1;
                }
                if(manualSeconds == 59 && manualMinutes == 59 && manualHours == 24)
                {
                    manualSeconds = 0;
                    manualMinutes = 0;
                    manualHours = 0;
                }
                $('.time').html(manualHours+":"+manualMinutes+":"+manualSeconds);
            },1000);    
    });
})