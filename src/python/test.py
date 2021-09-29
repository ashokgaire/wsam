import ffmpeg

def test():
	input = ffmpeg.input('../vid.mp4')
	video = input.video.hflip()
	out = ffmpeg.output(video, 'out.mp4')
	ffmpeg.run(out)
test()