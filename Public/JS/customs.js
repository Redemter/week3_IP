jQuery(selector). action();

//selector id # class . tag name this
 
$(document).ready(()=>{ //ensure html page loads before loading jquery code.
    $('#one').click(event => {
        alert ("you have clicked paragraph 1");
        console.log(event);
    });
});

$(()=>{ //simplified ready function
    //jquery code

})