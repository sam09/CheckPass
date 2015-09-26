var res = '';
var a = document.getElementsByTagName('input');
for (var i =0 ; i<a.length; i++) {
	if (a[i].type == 'password')
	{
		if(a[i].value != '' && a[i].value !=undefined)
		{
			res+=a[i].value;
			res+='\n';
		}
	}
}
if(res !='')
	alert('Following passwords were found\n' + res);
else
	alert("No password inserted");

