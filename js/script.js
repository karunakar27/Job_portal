
$(document).ready(function(){
    $('#hideshowedu').click(function(){
        $('#educationdiv').toggle('slow');
    });
    $('#hideshowother').click(function(){
        $('#educationdivother').toggle('slow');
    });
    $('#hideshowdesiredjob').click(function(){
        $('#educationdesired').toggle('slow');
    });

    $('#techno').click(function(){
        if(document.getElementById('techshodiv') == 'none')
        {
            $('#techshodiv').fadeIn('slow');
        }
        else
        {
            $('#techshodiv').fadeOut('slow');
        }
    });
    $('#techyes').click(function(){
        if(document.getElementById('techshodiv') == 'none')
        {
            $('#techshodiv').fadeOut('slow');
        }
        else
        {
            $('#techshodiv').fadeIn('slow');
        }
    });
    $('#internno').click(function(){
        if(document.getElementById('internyesno') == 'none')
        {
            $('#internyesno').fadeIn('slow');
        }
        else
        {
            $('#internyesno').fadeOut('slow');
        }
    });
    $('#internyes').click(function(){
        if(document.getElementById('internyesno') == 'none')
        {
            $('#internyesno').fadeOut('slow');
        }
        else
        {
            $('#internyesno').fadeIn('slow');
            $('#internyesno').fadeIn('slow');
        }
    });
    $('#placedno').click(function(){
        if(document.getElementById('placedyesno') == 'none')
        {
            $('#placedyesno').fadeIn('slow');
        }
        else
        {
            $('#placedyesno').fadeOut('slow');
        }
    });
    $('#placedyes').click(function(){
        if(document.getElementById('placedyesno') == 'none')
        {
            $('#placedyesno').fadeOut('slow');
        }
        else
        {
            $('#placedyesno').fadeIn('slow');
        }
    });
    $('#bondno').click(function(){
        if(document.getElementById('bonddiv') == 'none')
        {
            $('#bonddiv').fadeIn('slow');
        }
        else
        {
            $('#bonddiv').fadeOut('slow');
        }
    });
    $('#bondyes').click(function(){
        if(document.getElementById('bonddiv') == 'none')
        {
            $('#bonddiv').fadeOut('slow');
        }
        else
        {
            $('#bonddiv').fadeIn('slow');
        }
    });
    $('#certno').click(function(){
        if(document.getElementById('certyesnoid') == 'none')
        {
            $('#certyesnoid').fadeIn('slow');
        }
        else
        {
            $('#certyesnoid').fadeOut('slow');
        }
    });
    $('#certyes').click(function(){
        if(document.getElementById('certyesnoid') == 'none')
        {
            $('#certyesnoid').fadeOut('slow');
        }
        else
        {
            $('#certyesnoid').fadeIn('slow');
        }
    });

});
var addDiv="";
var count=1;
function addTech()
{
    count+=1;
    addDiv+='<div class="form-group row formmarginclass">'+
            '<label for="othertech1" class="col-sm-2 col-form-label text-right">'+count+'.Technology :</label>'+
            '<div class="col-sm-4">'+
                '<select id="othertech1" '+
                'ng-model="aftrregde.tech" class="custom-select">'+
                    '<option selected disabled>Select Technology</option>'+
                    '<option value="c">C</option>'+
                    '<option value="c++">C++</option>'+
                    '<option value="java">JAVA</option>'+
                    '<option value="html">HTML</option>'+
                    '<option value="typetech1others">Others</option>'+
                '</select>'+
            '</div>'+
            '<label for="otherduration1" class="col-sm-2 col-form-label text-right">Duration <span style="color:red">*</span> :</label>'+
            '<div class="col-sm-3">'+
                '<input type="number" style="padding:3%;" class="form-control" id="otherduration1" placeholder="Duration(No.of days)">'+
            '</div>'+
            '<div class="col-sm-1">'+
                '<button onclick="addTech();" style="cursor:pointer;" title="Add one more">+</button>'+
            '</div>'+
        '</div>';
    document.getElementById('addingDiv').innerHTML=addDiv;
    console.log(addDiv);
}