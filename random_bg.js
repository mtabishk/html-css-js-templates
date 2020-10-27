<!DOCTYPE html>
<!--[if lt IE 7]><html class="ie6 ie"><![endif]--><!--[if IE 7]><html class="ie7 ie"><![endif]--><!--[if IE 8]><html class="ie8 ie"><![endif]--><!--[if IE 9]><html class="ie9 ie"><![endif]-->
<html><head>
<title>Javascript background changer example</title>
<base href="https://www.computerhope.com/javascript/random-color-example.htm" />
<link rel="canonical" href="https://www.computerhope.com/javascript/random-color-example.htm" />
<script type="text/javascript">
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-126444-1']);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
</script>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5F9B8P4');</script>
</head>
<script type="text/javascript">
      //
      // Description: Randomly change background color every 5 seconds
      //
      // NewcWare 1997
      // Author: Scott Newcomer 3/1997
      // Email: nuke@bright.net
      //
      function setbackground()
      {
      window.setTimeout( "setbackground()", 5000); // 5000 milliseconds delay
      var index = Math.round(Math.random() * 9);
      var ColorValue = "FFFFFF"; // default color - white (index = 0)
      if(index == 1)
      ColorValue = "FFCCCC"; //peach
      if(index == 2)
      ColorValue = "CCAFFF"; //violet
      if(index == 3)
      ColorValue = "A6BEFF"; //lt blue
      if(index == 4)
      ColorValue = "99FFFF"; //cyan
      if(index == 5)
      ColorValue = "D5CCBB"; //tan
      if(index == 6)
      ColorValue = "99FF99"; //lt green
      if(index == 7)
      ColorValue = "FFFF99"; //lt yellow
      if(index == 8)
      ColorValue = "FFCC99"; //lt orange
      if(index == 9)
      ColorValue = "CCCCCC"; //lt grey
      document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
      }
      </script>
<body onload="setbackground();">
<p><a href="/javascript/random-color.htm">Back to Javascript background changer source code</a></p>
</body>
</html>
