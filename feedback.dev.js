/**
 * Google Analytics Feedback Widget
 * Version 1.0.0 by Xavi Esteve
 * http://xaviesteve.com
 */
Namespace = Namespace || {};

(function ( d, N ) { 'use strict';

N.gaf = {
	css: '#gaf-button { position: fixed;bottom: 0;right: 50px;background: rgba(61, 194, 85, 0.8);color: #fff;padding: 4px 7px;font-size: 12px;border-top-left-radius: 5px;border-top-right-radius: 5px; }' +
		'#gaf-dialog {position: fixed;top: 20%;left: 33%;width: 33%;background: rgba(255,255,255,0.9);box-shadow: 0 0 25px #aaa;padding:20px}' +
		'#gaf-dialog h5 {text-align:center;font-size:24px;margin:0;}' +
		'#gaf-type a {display:inline-block;width:24%;min-width: 6em;text-align:center}' +
		'#gaf-type a:hover {opacity:.7}' +
		'#gaf-type a.active {font-weight:bold;text-decoration:underline}' +
		'#gaf-text {text-align: center;width: 100%}' +
		'#gaf-submit {text-align:center;display:block;font-weight:bold;font-size:120%;padding:20px 0 10px}' +
		'#gaf-submit:hover {opacity:.7}' +
		'#gaf-dialog-close {position:fixed;top:19%;right:34%;padding: 10px;font-size:24px;color:rgba(0,0,0,.3);line-height:1}',

	init: function( options )
	{
		this.options = options;
		this.loadCss();
		this.loadHtml();
		this.loadButton();
	},
	loadCss: function()
	{
		d.head.innerHTML += '<style>' + this.css + '</style>';
	},
	loadHtml: function()
	{
		this.buttonHtml = '<a id="gaf-button" style="" href="#">' + this.options.open + '</a>';

		this.dialogHtml = '<div id="gaf-dialog"><h5>' + this.options.title + '</h5><a id="gaf-dialog-close" href="#">&times;</a>' +
				'<p id="gaf-type" data-type="' + this.options.option1 + '">' +
					'<a class="active" href="#">' + this.options.option1 + '</a>' +
					'<a href="#">' + this.options.option2 + '</a>' +
					'<a href="#">' + this.options.option3 + '</a>' +
					'<a href="#">' + this.options.option4 + '</a>' +
				'</p>' +
			'<input id="gaf-text" type="text" placeholder="' + this.options.placeholder + '" maxlength="500">' +
			'<a id="gaf-submit" href="#">' + this.options.send + '</a>';

	},
	loadButton: function()
	{
		d.body.innerHTML += this.buttonHtml;
		d.getElementById('gaf-button').addEventListener( 'click', function(e) { N.gaf.loadDialog();e.preventDefault(); }, false );
	},
	loadDialog: function()
	{
		d.getElementById('gaf-button').removeEventListener('click');

		d.body.removeChild( d.getElementById('gaf-button') );

		d.body.innerHTML += this.dialogHtml;
		d.getElementById('gaf-text').focus();

		d.getElementById('gaf-dialog-close').addEventListener( 'click', function(e) { N.gaf.closeDialog();e.preventDefault(); }, false );
		d.getElementById('gaf-type').addEventListener( 'click', function(e) { N.gaf.changeType(e);e.preventDefault(); }, false );
		d.getElementById('gaf-submit').addEventListener( 'click', function(e) { N.gaf.sendFeedback();e.preventDefault(); }, false );
	},
	closeDialog: function()
	{
		d.getElementById('gaf-dialog-close').removeEventListener('click');
		d.getElementById('gaf-submit').removeEventListener('click');

		d.body.removeChild( d.getElementById('gaf-dialog') );
	},

	changeType: function(e)
	{
		var types = document.querySelectorAll('#gaf-type a');
		for (var i = 0; i < types.length; i++)
		{
			types[i].className = '';
		}

		if ( e.target.tagName == 'A' )
		{
			d.getElementById('gaf-type').dataset.type = e.target.innerHTML;
			e.target.className = 'active';
		}
	},

	sendFeedback: function()
	{
		ga(
			'send', 'event', 'Feedback',
			d.getElementById('gaf-type').dataset.type,
			d.getElementById('gaf-text').value,
			{ "hitCallback": N.gaf.done() }
		);
	},
	done: function()
	{
		alert( this.options.thankyou );
		this.closeDialog();
	}

};

}( document, Namespace ));



Namespace.gaf.init( {
	'open': 'Feedback',
	'title': 'We would love to hear your thoughts!',
	'option1': 'Problem',
	'option2': 'Suggestion',
	'option3': 'Compliment',
	'option4': 'Other',
	'placeholder': 'Please enter your feedback here&hellip;',
	'send': 'Send',
	'thankyou': 'Thank you for your feedback!'
} );
