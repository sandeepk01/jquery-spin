# JQuery SPIN
This plugin generates Windows 8 like spinner with customized size, message and colors. Completely compatible with AMD frameworks.

# How To Use

Import the jquery-spin.css in your html

  &lt;link type="text/css" rel="stylesheet" href="path_to/jquery-spin.css"/&gt;

Import the appropriate script based on your project settings

For JQuery only: </br>
  &lt;script type="text/javascript" src="path_to/jquery.js"&gt;&lt;/script&gt;</br>
  &lt;script type="text/javascript" src="path_to/jquery-spin.js"&gt;&lt;/script&gt;

For JQueryUI:</br>
  &lt;script type="text/javascript" src="path_to/jquery.js"&gt;&lt;/script&gt;</br>
  &lt;script type="text/javascript" src="path_to/jquery-ui.js"&gt;&lt;/script&gt;</br>
  &lt;script type="text/javascript" src="path_to/ui-spin.js"&gt;&lt;/script&gt;</br>


Call the function on your selector element to show the spinner positioned at the middle of your selector element.

  $(your_selector).spin();

To stop and hide the spinner use below:

  $(your_selector).spin('destroy');


# Options

1. Based on container size you can specify the size of spinner to be displayed. Available options- [min,med,max]

    $(your_selector).spin({size:'min'});

2. Display custom message alogwith the spinner

    $(your_selector).spin({message:'My custom message!'}); 

3. Display various colors in the animation. By default the plugin specifies four colors, but you can override with this option to give your own flavour. Parameters can be specified in words, HEX or RGB values.

    $(your_selector).spin({colors:['red','yellow','green','lime']});


# Compatibility

Compatible with all modern browsers supporting CSS3 specs. Tested with JQuery v 1.7+ and should be compatible with lower versions too.
