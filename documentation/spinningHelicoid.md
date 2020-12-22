---
theme: jekyll-theme-slate
permalink: /spinningHelicoidSite/
---
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
</html>

## Spinning Helicoid Volumetric Display Project


#### The Beginnings - MkI Prototype
This started as a research paper for a research writing class. I wrote a paper on existing volumetric display technologies, which fueled my interest for creating my own. For my paper, I was tasked to create some sort of visual aid. I set out to 3D print a helicoid which is the basis of the display volume. Below is a picture of the first helicoid that I printed, then spray painted white for better reflection properties.

<p align="center">
	<img src="/../pictures/SpinningHelicoid/20200412_051004482_iOS.jpg" width="512" title="Helicoid">
	<img src="/../pictures/SpinningHelicoid/firstVersion.jpg" width="512" title="First Version">
	{% include youtubePlayer.html id="mFifZA-MYjY" %}
	{% include youtubePlayer.html id="5KqwL8B_Tf8" %}
</p>

Above is a picture of a 3-dimensional rectangluar tube being displayed onto the rotating helicoid via a digital projector. With this first version, I could only display basic shapes that extended the entire height of the helicoid. To display all kinds of shapes and objects the projector would need to be much faster. Unfortunatley, regular projectors that are used in classrooms and such are extremely slow in regards to their framerate. To use a projector in this application, I would need a projector capable of displaying over 2,000 frames per second. While this is very high, it is not impossible. Texas Instruments has a patented DLP technology which stands for Digital Light Projection. Their technology utilizes a digital micromirror device, or DMD, to create a projector capable of extremely high framerates like the one needed in this application. The only downside with this is that the technology currently costs over $1,000 for an evaluation unit. Because of the high cost, I decided to use a laser diode and turn it on and off very quickly. As such, the second version prototype was in the works.
<br>

#### MkII Prototype
For the second version of this display, I had two objectives:
<br>
1.) Solidify the use of laser diodes as a possible high speed projector. 
<br>
2.) Create a robust spinning helicoid platform that could hold a constant speed. 
<br>
###### Objective 1
To test the idea of using laser diodes as a projection device, I wanted to start small just by modulating a single laser diode so that I could acheive a floating stationary point on the spinning helicoid. Once I confirmed that that works, I could move on to a more complex laser matrix for version 3.
<br>
###### Objective 2
To create a constant speed helicoid, I obtained a better motor than the first version, this time including an encoder for position feeback. I then programmed a PID controller on an Arduino microcontroller for maintaing a speed setpoint. 

<p align="center">
	<img src="/../pictures/SpinningHelicoid/Assembly MkII v23.png" width="512" title="MkII CAD Design">
	<img src="/../pictures/SpinningHelicoid/20200508_020806785_iOS.jpg" width="512" title="MkII Prototype">
	{% include youtubePlayer.html id="SyynfYzxVd0" %}
</p>
<br>

#### MkIII Prototype
I broke this version up into two parts. For the first part, I was focused on finishing the two objectives I had for MkII since those weren't truly met from that version. For the second part of this version, I created a laser matrix and ended up with a functioning volumetric display!
<br>

###### MkIII Part 1

<p align="center">
	<img src="/../pictures/SpinningHelicoid/20200728_013501596_iOS.jpg" width="512" title="MkIII Prototype">
	<img src="/../pictures/SpinningHelicoid/20200515_200519480_iOS.jpg" width="512" title="MkIII Prototype">
	{% include youtubePlayer.html id="5zUK1e1pwd8" %}
</p>
<br>

###### MkIII Part 2

<p align="center">
	<img src="/../pictures/SpinningHelicoid/Assembly MkIII v18.png" width="512" title="MkIII CAD Design">
	{% include youtubePlayer.html id="OsoQu_0T9N8" %}
	{% include youtubePlayer.html id="_thaG1feNc8" %}
	{% include youtubePlayer.html id="iYZU6EbB_hY" %}
	{% include youtubePlayer.html id="5KUthI6g3Ho" %}
</p>


#### In The Works
The next phase of this volumetric display project is to move away from the spinning helicoid setup and try to create a free space version. By free space, I mean totally removing the need for a physical object to reflect the light from a projector. While this is highly improbable to create, I don't think it is impossible. By utilizing some various optical effects, like fresnel reflections, it may be possible to create a plane of air that reflects incedent light waves. 


<br>
<br>
[Back to Home Page](https://dbutler6250.github.io/)
<br>
