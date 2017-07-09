import _ from 'lodash';
import $ from 'jquery';
function component() {
	  var $div = $('<div/>');

	   $div.html(_.join(['Hello', 'World'], ' '));
	
     return $div;
     }

     $(document.body).append(component());
