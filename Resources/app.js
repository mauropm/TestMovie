var win = Ti.UI.createWindow();

Titanium.UI.orientation = Titanium.UI.LANDSCAPE_LEFT;

Video = {};
Video.view = Ti.UI.createView();
Video.videoObject = null;

Video.init = function()
{
	Video.videoObject = Titanium.Media.createVideoPlayer({
		contentURL:'movie.mov',
		backgroundColor:'#111',
		movieControlMode:Titanium.Media.VIDEO_CONTROL_DEFAULT,
		scalingMode:Titanium.Media.VIDEO_SCALING_MODE_FILL,
		top:100,
		movieControlStyle:Titanium.Media.VIDEO_CONTROL_EMBEDDED,
		height:600,
		width:800,
		autoplay:true
	});

	Video.view.add(Video.videoObject);
};

Video.init();
win.add(Video.view);
win.open();