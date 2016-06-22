// JavaScript Document
function add(a, b){
		if(a==""|| b=="")
			alert("Bạn cần nhập đầy đủ 2 sô trước khi thực hiện!");
		else
			return parseFloat(a)+ parseFloat(b);
	}
	function sub(a, b){
		if(a==""|| b=="")
			alert("Bạn cần nhập đầy đủ 2 sô trước khi thực hiện!");
		else
			return parseFloat(a)- parseFloat(b);
	}
	function multi(a, b){
		if(a==""|| b=="")
			alert("Bạn cần nhập đầy đủ 2 sô trước khi thực hiện!");
		else
			return parseFloat(a)* parseFloat(b);
	}
	function divide(a, b){
		if(a==""|| b=="")
			alert("Bạn cần nhập đầy đủ 2 sô trước khi thực hiện!");
		else
			return parseFloat(a)/ parseFloat(b);
	}
	function exponential(a, b){
		if(a==""|| b=="")
			alert("Bạn cần nhập đầy đủ 2 sô trước khi thực hiện!");
		else
			return Math.pow(parseFloat(a), parseFloat(b));
	}
	
	function getValue1(){
		return document.getElementById('value1').value;
	}
	function getValue2(){
		return document.getElementById('value2').value;
	}
	
	function setResult(res){
		document.getElementById('result').value=res;
	}