class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}
const video1 = new Video("JavaScript Tutorial", "Aya", 300);

video1.watch();
const video2 = new Video("Learn Python", "Sara", 600);

video2.watch();
const videosData = [
    { title: "JavaScript Basics", uploader: "Hanae", time: 300 },
    { title: "Learn Python", uploader: "Sara", time: 600 },
    { title: "HTML and CSS", uploader: "Youssef", time: 450 },
    { title: "React Tutorial", uploader: "Amine", time: 900 },
    { title: "Node.js Introduction", uploader: "Salma", time: 720 }
];
const videos = [];

videosData.forEach(video => {
    const newVideo = new Video(video.title, video.uploader, video.time);

    videos.push(newVideo);
});

videos.forEach(video => {
    video.watch();
});