//$(document).ready(function() {
//
//	$("body div[id = '3']").each(function(i,s){
//		$(s).bind("click", "input[type='checkbox']", function(e) {
//			var val = $(e.target).attr('id');
//			var i=$(e.target).prop("checked")
//			$("input[id='"+val +"']").prop("checked", i)
////			alert($("input[id='"+i+"']").prop("checked"))
//			alert(i)
//		})
//	})
//});

$(function(){
//	$("div[name='3'] input").on("change", function(){
//		var val = $(this).attr('val');
//		var	checked = $(this).prop('checked');
////		var val = $(this).attr('id');
////		$('input[id='+ val +']').prop("checked", checked) 	
//		$('input[val='+ val +']').prop("checked", checked)
var a=[];
var b=[];
$("body").on("click", "#zz",function() {
	var q = $("#test").html()
	a[0]=q
	var i =0
	$("#test input").each(function(){
		alert(q[i])
		var w = $("#test input").val();
		w[i]=w	
		i++
	})
//	var w = $("body input").val();
//	w[0]=w
	alert($("#a").val())
//	$("#aa").html(q+"<h1>succese</h1>");

})
$("body").on("click", "#xx",function() {
	alert(a[0])
	$("#text").html(a[0]+"<h1>succese</h1>");
	var j =0
	$("#test input").each(function(){
		alert(w[j])
		$("#test input").val(w[j]);
		j++
	})
	alert($("#a").val())
})
})
