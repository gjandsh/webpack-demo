import _ from 'lodash';
import $ from 'jquery';
import './index.scss';

var $img1 = $('<img />');
$img1[0].src=require("./1.jpg");
$(document.body).append($img1);

function component() {
	  var $div = $('<div/>');

	   $div.html(_.join(['Hello', 'Summer'], ' '));
	
     return $div;
     }

     $(document.body).append(component());
