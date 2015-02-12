$(document).ready(function() {



 
		
	var $eurasianBeaverImg = $('<img src="img/eurasian-beaver.jpg">'),
		$eurasianBeaverAnchor = $('<a>'), //note , NOT ;
		$eurasianBeaverElem = $('<li>');
		$eurasianBeaverAnchor.append("<br>Eurasian Beaver");
		$eurasianBeaverAnchor.prepend($eurasianBeaverImg);	
		$eurasianBeaverAnchor.appendTo($eurasianBeaverElem);// append works too
		
		$beaverList = $eurasianBeaverElem.wrap('<ul>').parent(); // giving ul a name
		


		$eurasianBeaverImg.attr('alt', 'Eurasian Beaver');
		$eurasianBeaverAnchor.addClass('level-2');
		$eurasianBeaverElem.attr('id','eurasian-beaver').addClass('animal');
		
	var $americanBeaverImg = $('<img src="img/american_beaver.jpg">'),
		$americanBeaverAnchor = $('<a>'),
		$americanBeaverElem = $('<li>');
		$americanBeaverAnchor.append("<br>American Beaver");
		$americanBeaverAnchor.prepend($americanBeaverImg);
		$americanBeaverAnchor.appendTo($americanBeaverElem);
		
		$americanBeaverElem.appendTo($beaverList);


		$americanBeaverImg.attr('alt', 'American Beaver');
		$americanBeaverAnchor.addClass('level-2');
		$americanBeaverElem.attr('id','american-beaver').addClass('animal');

		//add to DOM
		//$('#beavers').append($beaverList); 
		// same as saying ie 
		$beaverList.appendTo('#beavers');




	var $irishDeerImg = $('<img src="img/Irish_Deer.jpg">'),
		$irishDeerAnchor = $('<a>'), //note , NOT ;
		$irishDeerElem = $('<li>');
		$irishDeerAnchor.append("<br>Irish Deer");
		$irishDeerAnchor.prepend($irishDeerImg);	
		$irishDeerAnchor.appendTo($irishDeerElem);// append works too
		
		$deerList = $irishDeerElem.wrap('<ul>').parent(); // giving ul a name
		


		$irishDeerImg.attr('alt', 'irish deer');
		$irishDeerAnchor.addClass('level-2');
		$irishDeerElem.attr('id','irish-deer').addClass('animal');
		


		//add to DOM
		//$('#beavers').append($beaverList); 
		// same as saying ie 
		$deerList.appendTo('#deer');


		
		$('#mammals ul').children().hide(); 
		$beaverList.hide();
		 
		
$('#mammals').children().first().css( 'cursor', 'pointer' ).click(function(e) {
  e.stopPropagation();
  $('#mammals ul').children().toggle( "slow", function() {
    // Animation complete.
    $('#camels ul').children().hide();
     $('#deer ul').children().hide();
      $('#elephants ul').children().hide();
 });
});

	$('#beavers').children().first().css( 'cursor', 'pointer' ).click(function(e) {
  e.stopPropagation();
  $beaverList.toggle( "slow", function() {
    // Animation complete.

 });
});
		$('#camels').children().first().css( 'cursor', 'pointer' ).click(function(e) {
  e.stopPropagation();
  $('#camels ul').children().toggle( "slow", function() {
    // Animation complete.
 });
});
				$('#deer').children().first().css( 'cursor', 'pointer' ).click(function(e) {
  e.stopPropagation();
  $('#deer ul').children().toggle( "slow", function() {
    // Animation complete.
 });
});
				$('#elephants').children().first().css( 'cursor', 'pointer' ).click(function(e) {
  e.stopPropagation();
  $('#elephants ul').children().toggle( "slow", function() {
    // Animation complete.
 });
});


	
}); 




